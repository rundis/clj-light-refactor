(ns lt.plugins.cljrefactor.pprint
  (:require [clojure.string :as s]))

;; Rewrite to clsj from https://github.com/clojure-emacs/refactor-nrepl/blob/fc0a4d0709ebb94664e4afb35c62f440e934d6ba/src/refactor_nrepl/ns/pprint.clj

(defn- libspec?
  [thing]
  (or (vector? thing)
      (symbol? thing)))

(defn prefix-form?
  "True if the vector is of the form [prefix libspec1 libspec2...]"
  [v]
  (and (vector? v)
       (symbol? (first v))
       (every? libspec? (rest v))))

(defn trim-newline [line]
 (s/replace line #"(\r\n|\n|\r)$" ""))


(defn pprint [obj] ;;todo: DOHHHH!
  (print obj))

(defn- libspec-vectors-last [libspecs]
  (vec (concat (remove sequential? libspecs)
               (filter sequential? libspecs))))

(defn- pprint-prefix-form [[name & libspecs]]
  (print (str "[" name))
  (let [ordered-libspecs (libspec-vectors-last libspecs)]
    (dorun
     (map-indexed (fn [idx libspec]
                    ;; insert newline after all non-libspec vectors
                    (when (and (vector? libspec)
                               (or (zero? idx)
                                   (symbol? (get ordered-libspecs (dec idx)))))
                      (println))
                    (if (= idx (dec (count ordered-libspecs)))
                      (println  (str libspec "]"))
                      (if (vector? libspec)
                        (pprint (str libspec "\n"))
                        (if (zero? idx)
                          (print (str " " libspec " "))
                          (if (vector? (get ordered-libspecs (inc idx)))
                            (print  libspec)
                            (print (str libspec " ")))))))
                  ordered-libspecs))))


(defn pprint-require-form
  [[_ & libspecs]]
  (print "(:require ")
  (dorun
   (map-indexed
    (fn [idx libspec]
      (if (= idx (dec (count libspecs)))
        (println (str (trim-newline
                       (with-out-str (if (prefix-form? libspec)
                                       (pprint-prefix-form libspec)
                                       (print libspec)))) ")"))
        (if (prefix-form? libspec)
          (pprint-prefix-form libspec)
          (println libspec))))
    libspecs)))

(defn- form-is? [form type]
  (and (sequential? form)
       (= (keyword (first form)) type)))

(defn- pprint-gen-class-form
  [[_ & elems]]
  (if (empty? elems)
    (println "(:gen-class)")
    (println "(:gen-class"))
  (dorun
   (map-indexed
    (fn [idx [key val]]
      (if (= idx (dec (count (partition 2 elems))))
        (println (str key val ")"))
        (println key val)))
    (partition 2 elems))))

(defn- pprint-import-form
  [[_ & imports]]
  (print "(:import ")
  (dorun
   (map-indexed
    (fn [idx import]
      (if (= idx (dec (count imports)))
        (println (str import ")"))
        (println import)))
    imports)))



(defn pprint-ns
  [[_ name & more :as ns-form]]
  (let [docstring? (when (string? (first more)) (first more))
        attrs? (when (map? (second more)) (second more))
        forms (cond (and docstring? attrs?) (nthrest more 2)
                    (not (or docstring? attrs?)) more
                    :else (rest more))]
    (-> (with-out-str
          (print (str "(ns " name))
          (if (or docstring? attrs? forms)
            (println)
            (print ")"))
          (when docstring? (println (str "\"" docstring? "\"")))
          (when attrs? (pprint attrs?))
          (dorun
           (map-indexed
            (fn [idx form]
              (if (= idx (dec (count forms)))
                (println (str
                          (trim-newline
                           (with-out-str
                             (cond (form-is? form :require) (pprint-require-form form)
                                   (form-is? form :gen-class) (pprint-gen-class-form form)
                                   (form-is? form :import) (pprint-import-form form)
                                   :else (pprint form)))) ")"))
                (cond (form-is? form :require) (pprint-require-form form)
                      (form-is? form :gen-class) (pprint-gen-class-form form)
                      (form-is? form :import) (pprint-import-form form)
                      :else (pprint form))))
            forms)))
        (s/replace #"\r" ""))))


