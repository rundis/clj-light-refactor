(ns lt.plugins.cljrefactor.testing
  (:require [lt.object :as object]
            [lt.objs.command :as cmd]
            [lt.objs.editor.pool :as pool]
            [lt.objs.editor :as editor]
            [lt.objs.files :as files]
            [lt.objs.console :as console]
            [lt.objs.notifos :as notifos]
            [lt.plugins.clojure :as cljp]
            [lt.plugins.paredit :as pe]
            [lt.plugins.auto-complete :as ac]
            [clojure.string :as s])
  (:require-macros [lt.macros :refer [behavior]]))



(defn test-op [ed fixture]
  (let [filename (-> @ed :info :path)
        ns (-> @ed :info :ns)]
    (str "(do (require 'refactor-nrepl.client) (require 'clojure.tools.nrepl) (require 'lighttable.nrepl.eval)"
         " (def z-ns " (if ns
                         (str "'" ns)
                         (str "(lighttable.nrepl.eval/file->ns \"" filename "\")")) ")"
         " (def tr (refactor-nrepl.client/connect))"
         " (clojure.tools.nrepl/message (clojure.tools.nrepl/client tr 10000)"
         " {:op \"test\" :ns z-ns }))")))


(behavior ::test-res
          :triggers #{:editor.eval.clj.result.refactor.test}
          :reaction (fn [ed res]
                      ;(println (-> res :results first))
                      (let [resp (-> res :results first :result first :results)
                            summary (-> res :results first :result first :summary)]
                        (doseq [r (apply concat (vals resp))]
                            (when-not (= (:type r) "pass")
                              (object/raise ed :editor.exception
                                            (str "Error:\n" (:actual r))
                                            {:line (dec (:line r))})))
                        (if (or (> (:error summary) 0) (> (:fail summary) 0))
                          (console/error (str "Test summary: " summary))
                          (console/log (str "Test summary: " summary))))
                      (notifos/done-working)))

(behavior ::test-all
          :triggers #{:refactor.test-all}
          :reaction (fn [ed]
                      (object/raise ed
                                    :eval.custom
                                    (test-op ed nil)
                                    {:result-type :refactor.test
                                     :verbatim true})))

(cmd/command {:command ::force-autocomplete
              :desc "Clojure refactor: Test all in ns"
              :exec (fn []
                      (when-let [ed (pool/last-active)]
                        (object/raise ed :refactor.test-all)))})
