(ns lt.plugins.cljrefactor.parser
  (:require [clojure.zip :as z]
            [cljs.reader :as rdr]
            [clojure.string :as s]))

;; TODO: read-string doesn't handle nearly all of clojure !
(defn str->seq-zip [form-str]
  (rdr/register-tag-parser! "afn" (fn [x] (str "___#" x "___"))) ;; hack to escape anonymous functions
  (let [res (when (seq form-str)
              (-> form-str
                  (s/replace #"#\(" "#afn(")
                  rdr/read-string
                  z/seq-zip))]
    (rdr/deregister-tag-parser! "afn")
    res))


(defn zip->str [zipnode]
  (-> zipnode
      z/root
      pr-str
      (s/replace #"\"___|___\"" "")))
