(ns lt.plugins.cljrefactor.macroexpand
  (:require [lt.plugins.cljrefactor.util :as u]
            [lt.plugins.cljrefactor.middleware :as mw]
            [lt.object :as object]
            [lt.objs.editor.pool :as pool]
            [lt.objs.editor :as editor]
            [lt.objs.command :as cmd]
            [lt.objs.notifos :as notifos])
  (:require-macros [lt.macros :refer [behavior]]))





(behavior ::macroexpand-res
          :triggers #{:editor.eval.clj.result.refactor.macroexpand}
          :reaction (fn [ed res]
                      (let [[ok? ret] (mw/extract-result res :singles [:expansion])]
                        (if-not ok?
                          (object/raise ed
                                        :editor.exception
                                        (:err ret)
                                        {:line (-> ret :meta :line)})
                          (object/raise ed
                                        :editor.result.underline
                                        (:expansion ret)
                                        {:line (-> ret :meta-lt :bounds :to :line inc)}))

                        (notifos/done-working))))


(behavior ::macroexpand
          :triggers #{:refactor.macroexpand}
          :reaction (fn [ed code bounds expander]
                      (let [op (mw/create-ns-op ed {:op "macroexpand"
                                                    :code code
                                                    :expander expander})]
                        (object/raise ed
                                      :eval.custom
                                      op
                                      {:result-type :refactor.macroexpand
                                       :verbatim true
                                       :bounds bounds}))))

(behavior ::start-macroexpand
          :triggers #{:refactor.start-macroexpand}
          :reaction (fn [ed expander]
                      (if (editor/selection? ed)
                        (object/raise ed
                                      :refactor.macroexpand
                                      (editor/selection ed)
                                      (editor/selection-bounds ed)
                                      expander)
                        (when-let [form (u/get-top-level-form ed)]
                          (object/raise ed
                                        :refactor.macroexpand
                                        (:form-str form)
                                        {:from (:start form)
                                         :to (:end form)}
                                        expander)))))


(cmd/command {:command ::macroexpand-default
              :desc "Clojure refactor: Macroexpand"
              :exec (fn []
                      (when-let [ed (pool/last-active)]
                        (object/raise ed :refactor.start-macroexpand "macroexpand")))})

(cmd/command {:command ::macroexpand-all
              :desc "Clojure refactor: Macroexpand all"
              :exec (fn []
                      (when-let [ed (pool/last-active)]
                        (object/raise ed :refactor.start-macroexpand "macroexpand-all")))})
