(ns lt.plugins.cljrefactor
  (:require [lt.object :as object]
            [lt.objs.editor.pool :as pool]
            [lt.objs.editor :as editor]
            [lt.objs.files :as files]
            [lt.objs.command :as cmd]
            [lt.objs.notifos :as notifos]
            [lt.plugins.clojure :as cloj]
            [lt.plugins.auto-complete :as auto-complete]
            [clojure.string :as s]
            [lt.plugins.cljrefactor.artifact-version :as av-sel])
  (:require-macros [lt.macros :refer [defui behavior]]))


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



(defn nsify [sub-path]
  (-> (files/without-ext sub-path)
      (s/split (re-pattern files/separator))
      ((fn [parts]
         (map #(s/replace % #"_" "-") parts)))
      (#(s/join "." %))
      (#(str "(ns " % ")\n"))))


(defn find-sub-path [prj-dir path src-dirs]
  (some #(if (.contains path (files/join prj-dir %))
           (.substring path (+  1 (count (files/join prj-dir %))))
           nil) src-dirs))


(cmd/command {:command ::introduce-ns
              :desc "Clojure refactor: Introduce ns"
              :exec (fn []
                      (let [ed (pool/last-active)
                            pos (editor/->cursor ed)
                            prj-file (get-project-file ed)
                            path (-> @ed :info :path)
                            src-dirs (when prj-file (src-dirs (parse-project-file prj-file)))]
                        (when prj-file
                          (let [ns-stmt (nsify (find-sub-path (project-path ed) path src-dirs))]
                            (editor/move-cursor ed {:line 0 :ch 0})
                            (editor/insert-at-cursor ed ns-stmt)
                            (editor/move-cursor ed (update-in pos [:line] inc))))))})


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


(behavior ::finish-artifact-version-hints
          :triggers #{:editor.eval.clj.result.refactor.artifact-versions}
          :reaction (fn [editor res]
                      (let [vs (-> res :results first :result first :value (s/split #" "))
                            hints (map #(do #js {:completion %}) vs)]
                        (if (> (count vs) 1)
                          (av-sel/make {:ed editor :items vs :pos (editor/->cursor editor)})
                          (editor/insert-at-cursor editor (str "\"" (first vs) "\""))))))



(defn artifact-list []
  (str "(do (require 'refactor-nrepl.client) (require 'clojure.tools.nrepl)"
       "(def tr (refactor-nrepl.client/connect))"
       "(clojure.tools.nrepl/message (clojure.tools.nrepl/client tr 5000) {:op \"artifact-list\"}))"))


(behavior ::trigger-artifact-hints
          :triggers #{:artifact.hints.update!}
          :debounce 100
          :reaction (fn [editor res]
                      (when-let [default-client (-> @editor :client :default)]
                        (notifos/set-msg! (str "Retrieving clojars artifacts"))
                        (object/raise editor
                                      :eval.custom
                                      (artifact-list)
                                      {:result-type :refactor.artifacts :verbatim true}))))
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
          :reaction (fn [editor res]
                      (let [artifacts (-> res :results first :result first :value (s/split #" "))
                            hints (create-artifact-hints editor artifacts)]
                        (object/merge! editor {::hints hints})
                        (object/raise auto-complete/hinter :refresh!))))

(behavior ::artifact-hints
          :triggers #{:hints+}
          :reaction (fn [ed hints token]
                      (when (not= token (::token @ed))
                        (object/merge! ed {::token token})
                        (when-not (::hints @ed)
                          (object/raise ed :artifact.hints.update!)))
                      (if-let [clj-hints (::hints @ed)]
                        clj-hints
                        hints)))




;; ------------- Refactor functions ---------------

(defn trigger-ed-con [ed]
  (object/raise ed
                :eval.custom
                "(println \"ping\")"
                {:result-type :no-op :verbatim true}))


(cmd/command {:command ::ping-repl
              :desc "Clojure refactor: Ensure editor connected"
              :exec (fn []
                      (trigger-ed-con (pool/last-active)))})







;; TODO: Pending 0.3.0 release of refactor-nrepl
;; (defn clean-ns-op [path]
;;   (str "(do (require 'refactor-nrepl.client) (require 'clojure.tools.nrepl)"
;;        "(def tr (refactor-nrepl.client/connect))"
;;        "(clojure.tools.nrepl/message (clojure.tools.nrepl/client tr 5000) {:op \"clean-ns\" :path \"" path "\"}))"))


;; (behavior ::clean-ns.res
;;           :triggers #{:editor.eval.clj.result.refactor.clean-ns}
;;           :reaction (fn [editor res]
;;                       (println "Clean ns result")
;;                       (println res)))


;; (cmd/command {:command ::clean-ns
;;               :desc "Clojure refactor: Cleanup ns"
;;               :exec (fn []
;;                       (let [ed (pool/last-active)]
;;                         (when-let [path (-> @ed :info :path)]
;;                           (object/raise ed
;;                                         :eval.custom
;;                                         (clean-ns-op path)
;;                                         {:result-type :refactor.clean-ns :verbatim true}))))})
