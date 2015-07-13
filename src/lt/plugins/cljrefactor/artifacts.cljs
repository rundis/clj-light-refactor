(ns lt.plugins.cljrefactor.artifacts
  (:require [lt.object :as object]
            [lt.objs.command :as cmd]
            [lt.objs.editor :as editor]
            [lt.objs.editor.pool :as pool]
            [lt.objs.files :as files]
            [lt.objs.console :as console]
            [lt.objs.notifos :as notifos]
            [lt.plugins.auto-complete :as auto-complete]
            [clojure.string :as s]
            [lt.plugins.cljrefactor.selector :as selector]
            [lt.plugins.cljrefactor.artifact-version :as av-sel]
            [lt.plugins.cljrefactor.middleware :as mw])
  (:require-macros [lt.macros :refer [behavior]]))



(declare refactor-artifacts)


(defn artifact-version-list [artifact]
  (mw/create-op {:op "artifact-versions"
                 :artifact artifact}))


(behavior ::trigger-artifact-version-hints
          :triggers #{:artifact-version.hints.update!}
          :debounce 100
          :reaction (fn [ed artifact]
                      (when-let [default-client (-> @ed :client :default)]
                        (notifos/set-msg! (str "Retrieving clojars artifact versions"))
                        (object/raise ed
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
                      (let [[ok? ret] (mw/extract-result res :singles [:versions])
                            vs (when ok? (:versions ret))]
                        (if-not ok?
                          (object/raise ed :editor.exception (:err ret))
                          (if (> (count vs) 1)
                            (selector/make {:ed ed
                                            :behavior :artifact-version.selected
                                            :items vs
                                            :pos (editor/->cursor ed)})
                            (object/raise ed :artifact-version.selected (first vs)))))))


(defn artifact-list []
  (mw/create-op {:op "artifact-list"}))


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


(behavior ::finish-artifact-hints
          :triggers #{:editor.eval.clj.result.refactor.artifacts}
          :reaction (fn [ed res]
                      (let [[ok? ret] (mw/extract-result res :singles [:artifacts])]
                        (if-not ok?
                          (object/raise ed :editor.exception (:err ret))
                          (do
                            (object/update! refactor-artifacts [::fetching-deps] (fn [_] false))
                            (object/merge! refactor-artifacts {::artifacts (:artifacts ret)})
                            (object/raise auto-complete/hinter :refresh!))))))



(behavior ::trigger-artifact-hints
          :triggers #{:artifact.hints.update!}
          :debounce 500
          :reaction (fn [this ed]
                      (when-let [default-client (-> @ed :client :default)]
                        (when-not  (::fetching-deps @this)
                          (object/update! this [::fetching-deps] (fn [_] true))
                          (notifos/set-msg! "Retrieving clojars artifacts")
                          (object/raise ed
                                        :eval.custom
                                        (artifact-list)
                                        {:result-type :refactor.artifacts :verbatim true})))))

(behavior ::artifact-hints
          :triggers #{:hints+}
          :reaction (fn [ed hints token]
                      (object/merge! ed {::token token})
                      (when-not (::artifacts @refactor-artifacts)
                        (object/raise refactor-artifacts :artifact.hints.update! ed))
                      (if-let [artifacts (::artifacts @refactor-artifacts)]
                        (create-artifact-hints ed artifacts)
                        hints)))



(object/object* ::refactor-artifacts
                :tags #{:refactor.artifacts}
                :name "Refactor artifacts")


(def refactor-artifacts (object/create ::refactor-artifacts))



;; Hotload dependency (available in project.clj only)

(behavior ::hotload-dep.res
          :triggers #{:editor.eval.clj.result.refactor.hotload-dep}
          :reaction (fn [ed res]
                      (let [[ok? ret] (mw/extract-result res)
                            line (-> ret :meta :line)]
                        (if-not ok?
                          (object/raise ed :editor.exception (:err ret) {:line line})
                          (object/raise ed :editor.result "Loaded ok!" {:line line})))))


(defn parse-dep [dep]
  (try
    (let [dill (cljs.reader/read-string dep)]
      (if (= (count dill) 2) dill nil))
    (catch :default e
      nil)))

(defn hotload-dep-op [dep]
  (let [coords dep]
    (mw/create-op {:op "hotload-dependency" :coordinates coords})))


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
                            (when (and (parse-dep candidate) (-> @ed :info :path))
                              (object/raise ed :refactor.hotload-dep! candidate))))))})


