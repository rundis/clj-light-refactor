(ns lt.plugins.cljrefactor.testing
  (:require [lt.plugins.cljrefactor.util :as util]
            [lt.plugins.cljrefactor.parser :as parser]
            [lt.object :as object]
            [lt.objs.command :as cmd]
            [lt.objs.editor.pool :as pool]
            [lt.objs.editor :as editor]
            [lt.objs.files :as files]
            [lt.objs.console :as console]
            [lt.objs.notifos :as notifos]
            [clojure.string :as s])
  (:require-macros [lt.macros :refer [behavior]]))



(defn find-line-containing [ed txt]
  (let [res (array)]
    (.eachLine (.getDoc (editor/->cm-ed ed))
               (fn [line-handle]
                 (when (> (.indexOf (.-text line-handle) txt) -1)
                   (.push res (.-line(.lineInfo (editor/->cm-ed ed) line-handle))))))
    (first (seq res))))


(defn test-op [ed fixture]
  (let [filename (-> @ed :info :path)
        ns (-> @ed :info :ns)]
    (str "(do (require 'refactor-nrepl.client) (require 'clojure.tools.nrepl) (require 'lighttable.nrepl.eval)"
         " (def z-ns " (if ns
                         (str "'" ns)
                         (str "(lighttable.nrepl.eval/file->ns \"" filename "\")")) ")"
         " (def tr (refactor-nrepl.client/connect))"
         " (clojure.tools.nrepl/message (clojure.tools.nrepl/client tr 10000)"
         " {:op \"test\" :ns z-ns" (when fixture (str " :tests [\"" fixture "\"]")) "}))")))



(defn show-summary [summary]
  (if (or (> (:error summary) 0) (> (:fail summary) 0))
    (notifos/set-msg! (str "Test errors: " summary) {:class "error"})
    (notifos/set-msg! (str "Test summary: " summary))))

(defn show-successes [ed results]
  (doseq [ks (filter (fn [[k v]]
                       (every? #(= (:type %) "pass") v))
                     results)]
    (let [line (find-line-containing ed (name (first ks)))]
      (object/raise ed :editor.result "✓" {:line line}))))

(defn show-errors [ed results]
  (doseq [r (apply concat (vals results))]
    (when-not (= (:type r) "pass")
      (object/raise ed :editor.exception
                    (str "Error:\n" (:actual r))
                    {:line (dec (:line r))}))))


(defn extract-result-group [res k]
  (->> res :results first :result (filter k)))

(defn extract-result-group-single [res k]
  (-> (extract-result-group res k) first k))


(behavior ::test-res
          :triggers #{:editor.eval.clj.result.refactor.test}
          :reaction (fn [ed res]
                      (let [resp (extract-result-group-single res :results)
                            summary (extract-result-group-single res :summary)
                            out (extract-result-group res :out)]
                        (show-successes ed resp)
                        (show-errors ed resp)
                        (show-summary summary)
                        (doseq [msg out]
                          (console/log (:out msg))))
                      (notifos/done-working)))

(behavior ::test-all
          :triggers #{:refactor.test-all}
          :reaction (fn [ed]
                      (object/raise ed
                                    :eval.custom
                                    (test-op ed nil)
                                    {:result-type :refactor.test
                                     :verbatim true})))
(behavior ::test-one
          :triggers #{:refactor.test-one}
          :reaction (fn [ed]
                      (when-let [fixture (some-> (util/get-top-level-form ed) :form-str parser/find-test-def)]
                        (object/raise ed
                                    :eval.custom
                                    (test-op ed fixture)
                                    {:result-type :refactor.test
                                     :verbatim true}))))

(cmd/command {:command ::test-all
              :desc "Clojure refactor: Test all in ns"
              :exec (fn []
                      (when-let [ed (pool/last-active)]
                        (object/raise ed :refactor.test-all)))})

(cmd/command {:command ::test-one
              :desc "Clojure refactor: Test one at point"
              :exec (fn []
                      (when-let [ed (pool/last-active)]
                        (object/raise ed :refactor.test-one)))})
