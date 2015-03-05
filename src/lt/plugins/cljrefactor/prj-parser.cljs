(ns lt.plugins.cljrefactor.prj-parser
  (:require [lt.objs.files :as files]
            [lt.plugins.clojure :as cloj]
            [clojure.string :as s]))


(defn project-path [ed]
  (if-let [c (get-in @ed [:client :default])]
    (:dir @c)
    (:project-path (cloj/find-project (:info @ed)))))

(defn get-project-file [ed]
  (when-let [path (project-path ed)]
    (files/join path "project.clj")))

(defn prj->map [p]
  (conj {} (map #(hash-map (first %) (second %))
        (partition 2 (drop 3 p)))))

(defn parse-project-file [file]
  (-> (:content (files/open-sync file))
      (s/replace #"\\" "\\\\")
      (cljs.reader/read-string)
      (prj->map)))

(defn src-dirs [prj]
  (or (:source-paths prj) ["src"]))

(defn find-sub-path [prj-dir path src-dirs]
  (some #(if (.contains path (files/join prj-dir %))
           (.substring path (+  1 (count (files/join prj-dir %))))
           nil) src-dirs))
