(ns lt.plugins.cljrefactor.namespace
  (:require [lt.object :as object]
            [lt.objs.editor.pool :as pool]
            [lt.objs.editor :as editor]
            [lt.objs.files :as files]
            [lt.objs.command :as cmd]
            [lt.objs.notifos :as notifos]
            [lt.plugins.clojure :as cloj]
            [clojure.string :as s]
            [lt.plugins.cljrefactor.pprint :refer [pprint-ns]]
            [lt.plugins.cljrefactor.prj-parser :as prj-parser])
  (:require-macros [lt.macros :refer [defui behavior]]))



(defn nsify [sub-path]
  (-> (files/without-ext sub-path)
      (s/split (re-pattern files/separator))
      ((fn [parts]
         (map #(s/replace % #"_" "-") parts)))
      (#(s/join "." %))
      (#(str "(ns " % ")\n"))))


(defn find-line-containing [ed txt]
  (let [res (array)]
    (.eachLine (.getDoc (editor/->cm-ed ed))
               (fn [line-handle]
                 (when (.contains (.-text line-handle) txt)
                   (.push res (.-line(.lineInfo (editor/->cm-ed ed) line-handle))))))
    (first (seq res))))



(defn get-ns-decl [ed]
  (let [pos (editor/->cursor ed)
        bm (editor/bookmark ed pos nil)
        nsl (find-line-containing ed "(ns") ;; TODO: Not exactly waterproof !
        start {:line nsl :ch 1}]
    (when nsl
      (editor/move-cursor ed start)
      (cmd/exec! :paredit.select.parent)
      (let [curr-ns (editor/selection ed)
            bounds (editor/selection-bounds ed)]
        (editor/move-cursor ed (lt.util.cljs/js->clj (.find bm)))
        (.clear bm)
        {:bounds bounds
         :ns (cljs.reader/read-string curr-ns)}))))


(defn replace-ns [ed new-ns]
  (let [curr-ns (get-ns-decl ed)
        pos (editor/->cursor ed)
        bm (editor/bookmark ed pos nil)]
    (editor/set-selection ed (-> curr-ns :bounds :from) (-> curr-ns :bounds :to))
    (editor/replace-selection ed new-ns)
    (editor/set-selection ed (-> curr-ns :bounds :from) (editor/->cursor ed))
    (editor/indent-selection ed "smart")
    (editor/move-cursor ed (lt.util.cljs/js->clj (.find bm)))
    (.clear bm)))




(defn index-of-ns-type [ns-decl t]
  (first (keep-indexed #(when (= (keyword (first %2)) t) %1) (drop 2 ns-decl))))

(defn calc-imp-idx [ns-decl]
  (let [req-idx (index-of-ns-type ns-decl :require)
        imp-idx (index-of-ns-type ns-decl :import)]
    (+ 2 (if imp-idx imp-idx (max 1 req-idx)))))


(defn add-import [ns-decl imp]
  (let [[pre post] (split-at (calc-imp-idx ns-decl) ns-decl)]
    (cond
     (and (seq post) (= (ffirst post) :import)) (concat pre
                                                        (list (concat (first post) [imp]))
                                                        (rest post))
     (seq post) (concat pre
                        (list (list :import imp))
                        post)
     :else (concat pre
                   (list (list :import imp))))))


(defn add-require [ns-decl req]
  (let [req-idx (index-of-ns-type ns-decl :require)
          [pre post] (split-at (if req-idx (+ req-idx 2) 2) ns-decl)]

      (cond
       (and (seq post) (= (ffirst post) :require)) (concat pre
                                                           (list (concat (first post) [req]))
                                                           (rest post))
       (seq post) (concat pre
                          (list (list :require req))
                          post)
       :else (concat pre
                     (list (list :require req))))))



(cmd/command {:command ::introduce-ns
              :desc "Clojure refactor: Introduce ns"
              :exec (fn []
                      (let [ed (pool/last-active)
                            pos (editor/->cursor ed)
                            prj-file (prj-parser/get-project-file ed)
                            path (-> @ed :info :path)
                            src-dirs (when prj-file (prj-parser/src-dirs (prj-parser/parse-project-file prj-file)))]
                        (when prj-file
                          (let [ns-stmt (nsify (prj-parser/find-sub-path (prj-parser/project-path ed) path src-dirs))]
                            (editor/move-cursor ed {:line 0 :ch 0})
                            (editor/insert-at-cursor ed ns-stmt)
                            (editor/move-cursor ed (update-in pos [:line] inc))))))})


;; --------------- Clean ns -----------------------------------

(defn clean-ns-op [path]
  (str "(do (require 'refactor-nrepl.client) (require 'clojure.tools.nrepl)"
       "(def tr (refactor-nrepl.client/connect))"
       "(clojure.tools.nrepl/message (clojure.tools.nrepl/client tr 5000) {:op \"clean-ns\" :path \"" path "\"}))"))


(behavior ::clean-ns-res
          :triggers #{:editor.eval.clj.result.refactor.clean-ns}
          :reaction (fn [ed res]
                      (when-let [cleaned-ns (-> res :results first :result first :ns)]
                        (when (seq cleaned-ns)
                          (replace-ns ed cleaned-ns)))))


(cmd/command {:command ::clean-ns
              :desc "Clojure refactor: Cleanup ns"
              :exec (fn []
                      (let [ed (pool/last-active)]
                        (when-let [path (-> @ed :info :path)]
                          (object/raise ed
                                        :eval.custom
                                        (clean-ns-op path)
                                        {:result-type :refactor.clean-ns :verbatim true}))))})



