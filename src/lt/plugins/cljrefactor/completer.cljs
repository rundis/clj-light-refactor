(ns lt.plugins.cljrefactor.completer
  (:require [lt.object :as object]
            [lt.objs.command :as cmd]
            [lt.objs.editor.pool :as pool]
            [lt.objs.editor :as editor]
            [lt.objs.files :as files]
            [lt.objs.console :as console]
            [lt.objs.notifos :as notifos]
            [lt.plugins.clojure :as cljp]
            [lt.plugins.auto-complete :as ac]
            [lt.plugins.cljrefactor.util :as util]
            [clojure.string :as s])
  (:require-macros [lt.macros :refer [behavior]]))

;; TODO: This whole thing should ideally be ported to the Clojure plugin.
;; Nothing to do with refactoring :)



(defn complete-op [ed sym form]
  (let [filename (-> @ed :info :path)
        ns (-> @ed :info :ns)]
    (str "(do (require 'refactor-nrepl.client) (require 'clojure.tools.nrepl) (require 'lighttable.nrepl.eval)"
         " (def z-ns " (if ns
                         (str "'" ns)
                         (str "(lighttable.nrepl.eval/file->ns \"" filename "\")")) ")"
         " (def tr (refactor-nrepl.client/connect))"
         " (clojure.tools.nrepl/message (clojure.tools.nrepl/client tr 10000)"
         " {:op \"complete\" :ns z-ns :symbol \"" sym "\" :context \"" (when form (s/escape form {\" "\\\""})) "\" }))")))



(defn get-completer-form-ctx [ed token]
  (when-let [form (util/get-top-level-form ed)]
    (util/replace-token (:form-str form)
                        {:line (- (-> token :loc :line) (-> form :start :line))
                         :start (:start token)
                         :end (:end token)}
                        "__prefix__")))




(behavior ::completer.res
          :triggers #{:editor.eval.clj.result.refactor.complete}
          :reaction (fn [ed res]
;                      (println "Completer results")
;                      (println res)
                      (let [resp (-> res :results first :result)
                            completions (when resp (-> resp first :completions seq))]
                        (when completions
                          (object/merge! ed {::hints (map #(do #js {:completion %}) completions)})
                          (object/raise ac/hinter :refresh!)
                          ;(object/raise ed :hint {:force? false})
                          ))
                      (notifos/done-working)))


(behavior ::completer.start
          :triggers #{:refactor.complete}
          :debounce 100
          :reaction (fn [ed]
                      (when (some-> @ed :client :default deref) ;; dont eval unless we're already connected
                        (let [pos (editor/->cursor ed)
                              token (cljp/find-symbol-at-cursor ed)
                              form (get-completer-form-ctx ed token)
                              sym (:string token)]
                          (when-not (re-find #"\"" sym)
                            (object/raise ed
                                          :eval.custom
                                          (complete-op ed sym form)
                                          {:result-type :refactor.complete
                                           :verbatim true}))))))


(behavior ::use-local-hints
          :triggers #{:hints+}
          :reaction (fn [ed hints token]
                      (let [tok (:string (cljp/find-symbol-at-cursor ed))]
                        (if-not (and (seq tok) (not (re-find #"\"" tok)))
                          (do
                           (object/merge! ed {::token nil})
                            hints)
                          (do
                            (when (not= tok (::token @ed))
                              (object/merge! ed {::token tok})
                              (object/raise ed :refactor.complete))
                            (if-let [clj-hints (::hints @ed)]
                              (concat clj-hints hints)
                              hints))))))


(cmd/command {:command ::force-autocomplete
              :desc "Clojure refactor: Force autocomplete"
              :exec (fn []
                      (when-let [ed (pool/last-active)]
                        (object/raise ed :refactor.complete)))})
