(ns lt.plugins.cljrefactor.middleware
  (:require [clojure.string :as s]))



(defn create-op [params]
  (str
   "(do
     (require 'refactor-nrepl.client)
     (require 'clojure.tools.nrepl)
     (def tr (refactor-nrepl.client/connect))
     (clojure.tools.nrepl/message
       (clojure.tools.nrepl/client tr 10000)\n"
       (pr-str params) "))"))

(defn ed->ns-def [ed]
  (let [filename (-> @ed :info :path)
        ns (-> @ed :info :ns)]
    (str "(def z-ns "
         (if ns
           (str "'" ns)
           (str "(lighttable.nrepl.eval/file->ns \"" filename "\")")) ")\n")))

(defn create-ns-op [ed params]
  (str
   "(do
     (require 'refactor-nrepl.client)
     (require 'clojure.tools.nrepl)
     (require 'lighttable.nrepl.eval)\n"
     (ed->ns-def ed)
     "(def tr (refactor-nrepl.client/connect))
     (clojure.tools.nrepl/message
       (clojure.tools.nrepl/client tr 10000)\n"
       (str (s/join "" (drop-last (pr-str params))) " :ns z-ns}") "))"))


(defn extract-result-group [res k]
  (->> res :results first :result (filter k)))

(defn extract-result-group-single [res k]
  (-> (extract-result-group res k) first k))

(defn extract-result [res & {:keys [singles multiples]}]
  (let [ret {:err (or (extract-result-group-single res :err) (extract-result-group-single res :error))
             :out (extract-result-group res :out)
             :meta  (-> res :results first :meta)
             :meta-lt (-> res :meta)}]
    (if (:err ret)
      [false ret]
      [true (-> ret
                 (merge
                  (into {} (map #(hash-map % (extract-result-group-single res %)) singles))
                  (into {} (map #(hash-map % (extract-result-group res %)) multiples))))])))



