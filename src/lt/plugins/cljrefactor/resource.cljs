(ns lt.plugins.cljrefactor.resource
  "Provides a feature to jump to a resource from position at cursor. Uses cider-nrepl"
  (:require [lt.object :as object]
            [lt.objs.command :as cmd]
            [lt.objs.editor.pool :as pool]
            [lt.objs.editor :as editor]
            [lt.objs.jump-stack :as jump]
            [lt.plugins.cljrefactor.middleware :as mw])
  (:require-macros [lt.macros :refer [behavior]]))


(behavior ::find-resource.res
          :triggers #{:editor.eval.clj.result.refactor.find-resource}
          :desc "Results from find resource call to Cider middleware. Jumps to resource if found."
          :reaction (fn [ed res]
                      (let [[ok? ret] (mw/extract-result res :singles [:resource-path])]
                        (if-not ok?
                          (object/raise ed
                                        :editor.exception
                                        (:err ret)
                                        {:line (-> ret :meta :line)})
                          (if-let [path (:resource-path ret)]
                            (object/raise jump/jump-stack :jump-stack.push! ed path {:line 0 :ch 0})
                            (notifos/set-msg! "Resource not found" {:class "error"}))))))

(defn get-candidate [ed]
  (some-> (editor/->token ed (editor/cursor ed))
      :string
      (clojure.string/replace #"\"" "")))


(behavior ::find-resource
          :triggers #{:refactor.find-resource}
          :desc "Try to jump to resource resolved by token at cursor. Cider Op"
          :reaction (fn [ed]
                      (when-let [cand (get-candidate ed)]
                        (object/raise ed
                                      :eval.custom
                                      (mw/create-op {:op "resource" :name cand})
                                      {:result-type :refactor.find-resource
                                       :verbatim true}))))


(cmd/command {:command ::find-symbol-next
              :desc "Clojure refactor: Jump to resource"
              :exec (fn []
                      (when-let [ed (pool/last-active)]
                        (object/raise ed :refactor.find-resource)))})
