(ns lt.plugins.cljrefactor.middleware
  (:require [clojure.string :as s]))




(defn create-op [params]
  (str
   "(do
     (require 'refactor-nrepl.client)
     (require 'clojure.tools.nrepl)
     (clojure.tools.nrepl/message
       (clojure.tools.nrepl/client (refactor-nrepl.client/connect) 10000)\n"
       (pr-str params) "))"))


(defn create-ns-op [ed params]
  (let [filename (-> @ed :info :path)]
    (str
     "(do
     (require 'refactor-nrepl.client)
     (require 'clojure.tools.nrepl)
     (require 'lighttable.nrepl.eval)\n"
     "(clojure.tools.nrepl/message
     (clojure.tools.nrepl/client (refactor-nrepl.client/connect) 10000)\n"
     (str (s/join "" (drop-last (pr-str params))) " :ns "
          "(lighttable.nrepl.eval/file->ns \"" filename "\")}") "))")))


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



