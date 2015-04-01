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


;; Some helper methods

(defn do-find-def [root]
  (when (list? (z/node root))
   (let [def-node (z/down root)]
     (when (= (.indexOf (str (z/node def-node)) "def") 0)
       (-> def-node z/right z/node pr-str)))))

(defn find-def [form]
  (when-let [root (str->seq-zip form)]
    (do-find-def root)))

(defn find-test-def [form]
  (when-let [root (str->seq-zip form)]
    (when (list? (z/node root))
     (if-let [v (do-find-def root)]
       v
       (when (= (-> root z/down z/node pr-str) "with-test")
         (do-find-def (-> root z/down z/right)))))))


;; (comment
;;  (assert (= "jalla"
;;             (find-test-def "(def \n^{:private true}\n jalla\n;Some doc\n [a b] )"))))

;; (assert (= nil (find-test-def "(+ 1 1)")))

;; (assert (= nil (find-test-def "jalla")))


;; (assert (= "my-function"
;;          (find-test-def
;;           "(with-test (defn my-function [x y] (+ x y)) (is (= 4 (my-function 2 2))) (is (= 7 (my-function 3 4))))"))
;;         )


