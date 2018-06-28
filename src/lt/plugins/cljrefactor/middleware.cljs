(ns lt.plugins.cljrefactor.middleware
  (:require [clojure.string :as s]))




(defn create-op [params]
  (str
   "(do
     (require 'clojure.tools.nrepl)
     (let [port (-> \".nrepl-port\" slurp Integer/parseInt)]
     (clojure.tools.nrepl/message
       (clojure.tools.nrepl/client (clojure.tools.nrepl/connect :port port :host \"localhost\") 10000)\n"
       (pr-str params) ")))"))


(defn create-ns-op [ed params]
  (let [filename (-> @ed :info :path)]
    (str
     "(do
     (require 'clojure.tools.nrepl)
     (require 'lighttable.nrepl.eval)\n"
     "(let [port (-> \".nrepl-port\" slurp Integer/parseInt)]
     (clojure.tools.nrepl/message
     (clojure.tools.nrepl/client (clojure.tools.nrepl/connect :port port :host \"localhost\") 10000)\n"
     (str (s/join "" (drop-last (pr-str params))) " :ns "
          "(lighttable.nrepl.eval/file->ns \"" filename "\")}") ")))")))


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
