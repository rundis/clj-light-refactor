(ns lt.plugins.cljrefactor.format
  (:require [lt.plugins.cljrefactor.util :as u]
            [lt.plugins.cljrefactor.middleware :as mw]
            [lt.object :as object]
            [lt.objs.editor.pool :as pool]
            [lt.objs.editor :as editor]
            [lt.objs.command :as cmd]
            [lt.objs.notifos :as notifos])
  (:require-macros [lt.macros :refer [behavior]]))




(behavior ::format-res
          :triggers #{:editor.eval.clj.result.refactor.format-code}
          :reaction (fn [ed res]
                      (let [[ok? ret] (mw/extract-result res :singles [:formatted-code])]
                        (if-not ok?
                          (object/raise ed
                                        :editor.exception
                                        (:err ret)
                                        {:line (-> ret :meta :line)})
                          (do
                            (editor/replace ed
                                            (-> ret :meta-lt :bounds :from)
                                            (-> ret :meta-lt :bounds :to)
                                            (:formatted-code ret))
                            (editor/move-cursor ed (-> ret :meta-lt :bounds :from))))

                        (notifos/done-working))))


(behavior ::format-code!
          :triggers #{:refactor.format-code!}
          :reaction (fn [ed code bounds]
                      (let [op (mw/create-op {:op "format-code"
                                              :code code})]
                        (object/raise ed
                                      :eval.custom
                                      op
                                      {:result-type :refactor.format-code
                                       :verbatim true
                                       :bounds bounds}))))

(behavior ::start-format-code
          :triggers #{:refactor.start-format-code}
          :reaction (fn [ed]
                      (if (editor/selection? ed)
                        (object/raise ed
                                      :refactor.format-code!
                                      (editor/selection ed)
                                      (editor/selection-bounds ed))
                        (when-let [form (u/get-top-level-form ed)]
                          (object/raise ed
                                        :refactor.format-code!
                                        (:form-str form)
                                        {:from (:start form)
                                         :to (:end form)})))))


(cmd/command {:command ::format-code
              :desc "Clojure refactor: Format code"
              :exec (fn []
                      (when-let [ed (pool/last-active)]
                        (object/raise ed :refactor.start-format-code)))})
