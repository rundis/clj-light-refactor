(ns lt.plugins.cljrefactor
  (:require [lt.object :as object]
            [lt.objs.editor.pool :as pool]
            [lt.objs.editor :as editor]
            [lt.objs.files :as files]
            [lt.objs.command :as cmd]
            [lt.objs.notifos :as notifos]
            [lt.objs.console :as console]
            [clojure.string :as s]
            [lt.plugins.cljrefactor.selector :as selector]
            [lt.plugins.cljrefactor.namespace :as nsl]
            [lt.plugins.cljrefactor.pprint :refer [pprint-ns]]
            [lt.plugins.cljrefactor.middleware :as mw])
  (:require-macros [lt.macros :refer [behavior]]))



(behavior ::clj-refactor.maybe-project
          :description "Add tag to indicate that the file is a lein project file"
          :triggers #{:active}
          :reaction (fn [ed]
                      (when (and (= (-> @ed :info :name) "project.clj")
                                 (not (object/has-tag? ed :editor.clj.project-file)))
                        (object/add-tags ed [:editor.clj.project-file]))))



;; ------------- Trigger connection ---------------

(behavior ::ensure-connected
          :triggers #{:refactor.connect}
          :reaction (fn [ed]
                      (object/raise ed
                                    :eval.custom
                                    "(println \"ping\")"
                                    {:result-type :no-op :verbatim true})))

(cmd/command {:command ::ping-repl
              :desc "Clojure refactor: Ensure editor connected"
              :exec (fn []
                      (when-let [ed (pool/last-active)]
                        (object/raise ed :refactor.connect)))})







;; -------- Resolve missing ---------------
(defn get-symbol-token [ed]
  (when-let [token (lt.plugins.clojure/find-symbol-at-cursor ed)]
    (zipmap [:symbol :alias] (reverse (s/split (:string token) "/")))))

(defn add-missing-require [ed item]
  (let [symbol-token (get-symbol-token ed)
        a (if-let [a (:alias symbol-token)]
            a
            (last (s/split (:label item) ".")))]
    (nsl/replace-ns ed
                    (pprint-ns
                     (nsl/add-require
                      (:ns (nsl/get-ns-decl ed)) [(:label item) :as a])))))

(defn add-missing-import [ed item]
  (nsl/replace-ns ed
                  (pprint-ns
                   (nsl/add-import
                    (:ns (nsl/get-ns-decl ed)) (list (:label item))))))


(defn add-missing-type [ed item]
  (let [req (s/replace (str (:label item)) #"\.([^.]*)$" "")
        imp (:label item)
        ns-decl (:ns (nsl/get-ns-decl ed))]
    (nsl/replace-ns ed (-> (:ns (nsl/get-ns-decl ed))
                           (nsl/add-require req)
                           (nsl/add-import (list imp))
                           (pprint-ns)))))


(behavior ::resolve-missing-selected
          :triggers #{:resolve-missing.selected}
          :reaction (fn [ed item]
                      (case (:type item)
                        :ns     (add-missing-require ed item)
                        :class  (add-missing-import ed item)
                        :type   (add-missing-type ed item)
                        (console/error (str "Unsupported candidate: " item)))
                      (notifos/set-msg! (str "Symbol: " (:label item) " added to namespace declaration"))
                      (editor/focus ed)))


(defn resolve-missing-op [sym]
  (mw/create-op {:op "resolve-missing"
                 :symbol sym}))


(defn parse-missing [res]
  (let [candidates (-> res :results first :result first :candidates)]
    (when (string? candidates)
      (->> candidates
           (cljs.reader/read-string)
           (map #(hash-map :label (first %) :type (second %)))
           vec))))




(behavior ::resolve-missing-res
          :triggers #{:editor.eval.clj.result.refactor.resolve-missing}
          :reaction (fn [ed res]
                      (let [[ok? ret] (mw/extract-result res :singles [:candidates])]
                        (if-not ok?
                          (object/raise ed :editor.exception (:err ret) {:line (-> ret :meta :line)})
                          (if-let [candidates (parse-missing res)]
                            (if (= (count candidates) 1)
                              (object/raise ed :resolve-missing.selected (first candidates))
                              (selector/make {:ed ed
                                              :behavior :resolve-missing.selected
                                              :pos (editor/->cursor ed)
                                              :items candidates}))
                            (println "Couldn't find any suggestion for symbol"))))))



(behavior ::resolve-missing!
          :triggers #{:refactor.resolve-missing!}
          :reaction (fn [ed sym]
                      (object/raise ed
                                    :eval.custom
                                    (resolve-missing-op sym)
                                    {:result-type :refactor.resolve-missing :verbatim true})))


(cmd/command {:command ::resolve-missing
              :desc "Clojure refactor: Resolve missing"
              :exec (fn []
                      (when-let [ed (pool/last-active)]
                        (when-let [t (get-symbol-token ed)]
                          (object/raise ed :refactor.resolve-missing! (:symbol t)))))})


