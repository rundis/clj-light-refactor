(ns lt.plugins.cljrefactor
  (:require [lt.object :as object]
            [lt.objs.editor.pool :as pool]
            [lt.objs.editor :as editor]
            [lt.objs.files :as files]
            [lt.objs.command :as cmd]
            [lt.objs.notifos :as notifos]
            [lt.objs.console :as console]
            [lt.plugins.auto-complete :as auto-complete]
            [clojure.string :as s]
            [lt.plugins.cljrefactor.artifact-version :as av-sel]
            [lt.plugins.cljrefactor.selector :as selector]
            [lt.plugins.cljrefactor.namespace :as nsl]
            [lt.plugins.cljrefactor.pprint :refer [pprint-ns]]
            [lt.plugins.cljrefactor.refactor :as refactor])
  (:require-macros [lt.macros :refer [defui behavior]]))




(behavior ::clj-refactor.maybe-project
          :description "Add tag to indicate that the file is a lein project file"
          :triggers #{:active}
          :reaction (fn [ed]
                      (when (and (= (-> @ed :info :name) "project.clj")
                                 (not (object/has-tag? ed :editor.clj.project-file)))
                        (object/add-tags ed [:editor.clj.project-file]))))





;; autocompleter for artifacts in project.clj files
(defn artifact-version-list [artifact]
  (str "(do (require 'refactor-nrepl.client) (require 'clojure.tools.nrepl)"
       "(def tr (refactor-nrepl.client/connect))"
       "(clojure.tools.nrepl/message (clojure.tools.nrepl/client tr 5000) {:op \"artifact-versions\" :artifact \"" artifact "\"}))"))


(behavior ::trigger-artifact-version-hints
          :triggers #{:artifact-version.hints.update!}
          :debounce 100
          :reaction (fn [editor artifact]
                      (when-let [default-client (-> @editor :client :default)]
                        (notifos/set-msg! (str "Retrieving clojars artifact versions"))
                        (object/raise editor
                                      :eval.custom
                                      (artifact-version-list artifact)
                                      {:result-type :refactor.artifact-versions :verbatim true}))))

(behavior ::artifact-version-selected
          :triggers #{:artifact-version.selected}
          :reaction (fn [ed version]
                      (editor/insert-at-cursor ed (str "\"" version "\""))
                      (editor/focus ed)))


(behavior ::finish-artifact-version-hints
          :triggers #{:editor.eval.clj.result.refactor.artifact-versions}
          :reaction (fn [ed res]
                      (let [vs (-> res :results first :result first :versions)
                            hints (map #(do #js {:completion %}) vs)]
                        (if (> (count vs) 1)
                          (selector/make {:ed ed
                                     :behavior :artifact-version.selected
                                     :items vs
                                     :pos (editor/->cursor ed)})
                          (object/raise ed :artifact-version.selected (first vs))))))


(defn artifact-list []
  (str "(do (require 'refactor-nrepl.client) (require 'clojure.tools.nrepl)"
       "(def tr (refactor-nrepl.client/connect))"
       "(clojure.tools.nrepl/message (clojure.tools.nrepl/client tr 10000) {:op \"artifact-list\"}))"))


(behavior ::trigger-artifact-hints
          :triggers #{:artifact.hints.update!}
          :debounce 500
          :reaction (fn [editor res]
                      (when-let [default-client (-> @editor :client :default)]
                        (when-not (::fetching-deps @editor)
                          (object/update! editor [::fetching-deps] (fn [_] true))
                          (notifos/set-msg! "Retrieving clojars artifacts")
                          (object/raise editor
                                        :eval.custom
                                        (artifact-list)
                                        {:result-type :refactor.artifacts :verbatim true})))))
(defn sel-cb [ed fun c]
  (let [artifact (get (js->clj c) "completion")]
    (fun (str artifact " "))
    (object/raise ed :artifact-version.hints.update! artifact)))


(defn create-artifact-hints [ed artifacts]
  (flatten
   (map #(vec [#js {:select (partial sel-cb ed)
                    :text %
                    :completion %
                    :item %}])
        artifacts)))

;; (doseq [obj (object/by-tag :editor.clj.project-file)]
;;     (println "Found one")
;;     (println (::dep-hints @obj)))

(behavior ::finish-artifact-hints
          :triggers #{:editor.eval.clj.result.refactor.artifacts}
          :reaction (fn [editor res]
                      (let [artifacts (-> res :results first :result first :artifacts)
                            hints (create-artifact-hints editor artifacts)]
                        (object/update! editor [::fetching-deps] (fn [_] false))
                        ;;(object/merge! editor {::hints hints})
                        (object/merge! editor {::dep-hints hints})
                        (object/raise auto-complete/hinter :refresh!))))

(behavior ::artifact-hints
          :triggers #{:hints+}
          :reaction (fn [ed hints token]
                      (object/merge! ed {::token token})
                      (when-not (seq (::dep-hints @ed))
                        (object/raise ed :artifact.hints.update!))
                      (if-let [clj-hints (::dep-hints @ed)]
                        clj-hints
                        hints)))




;; ------------- Refactor functions ---------------

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






;; Hotload dependency (available in project.clj only)

(behavior ::hotload-dep.res
          :triggers #{:editor.eval.clj.result.refactor.hotload-dep}
          :reaction (fn [ed res]
                      (let [line (-> res :results first :meta :line)]
                        (if-let [err (-> res :results first :result first :error)]
                          (object/raise ed :editor.exception err {:line line})
                          (object/raise ed :editor.result "Loaded ok!" {:line line})))))


(defn parse-dep [dep]
  (try
    (let [dill (cljs.reader/read-string dep)]
      (if (= (count dill) 2) dill nil))
    (catch :default e
      nil)))

(defn hotload-dep-op [dep]
  (let [coords (str "\"[" (first dep) " \\\"" (second dep) \\\""]\"")]
    (str "(do (require 'refactor-nrepl.client) (require 'clojure.tools.nrepl)"
         " (def tr (refactor-nrepl.client/connect))"
         " (clojure.tools.nrepl/message (clojure.tools.nrepl/client tr 5000) {:op \"hotload-dependency\" :coordinates " coords "}))")))

(behavior ::hotload-dep!
          :triggers #{:refactor.hotload-dep!}
          :reaction (fn [ed coords]
                      (object/raise ed
                                    :eval.custom
                                    (hotload-dep-op coords)
                                    {:result-type :refactor.hotload-dep :verbatim true})))



(cmd/command {:command ::hotload-dep
              :desc "Clojure refactor: Hotload dependency"
              :exec (fn []
                      (let [ed (pool/last-active)
                            pos (when ed (editor/->cursor ed))]
                        (when ed
                          (cmd/exec! :paredit.select.parent)
                          (let [candidate  (editor/selection ed)
                                coords (parse-dep candidate)]
                            (editor/move-cursor ed pos)
                            (when (and coords (-> @ed :info :path))
                              (object/raise ed :refactor.hotload-dep! coords))))))})


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
  (str "(do (require 'refactor-nrepl.client) (require 'clojure.tools.nrepl)"
       "(def tr (refactor-nrepl.client/connect))"
       "(clojure.tools.nrepl/message (clojure.tools.nrepl/client tr 5000) {:op \"resolve-missing\" :symbol \"" sym "\"}))"))


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
                      (if-let [candidates (parse-missing res)]
                        (if (= (count candidates) 1)
                          (object/raise ed :resolve-missing.selected (first candidates))
                          (selector/make {:ed ed
                                     :behavior :resolve-missing.selected
                                     :pos (editor/->cursor ed)
                                     :items candidates}))
                        (println "Couldn't find any suggestion for symbol"))))



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


