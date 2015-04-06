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
            [lt.plugins.cljrefactor.middleware :as mw]
            [clojure.string :as s])
  (:require-macros [lt.macros :refer [behavior]]))

;; TODO: This whole thing should ideally be ported to the Clojure plugin.
;; Nothing to do with refactoring :)



(defn complete-op [ed sym form]
  (mw/create-ns-op ed (merge {:op "complete"
                              :symbol sym}
                             (when form) {:context form})))

(defn get-completer-form-ctx [ed token]
  (when token
    (when-let [form (util/get-top-level-form ed)]
      (util/replace-token (:form-str form)
                          {:line (- (-> token :loc :line) (-> form :start :line))
                           :start (:start token)
                           :end (:end token)}
                          "__prefix__"))))

(behavior ::completer.res
          :triggers #{:editor.eval.clj.result.refactor.complete}
          :reaction (fn [ed res]
                      (let [[ok? ret] (mw/extract-result res :singles [:completions])]
                        (if-not ok?
                          (object/raise ed :editor.exception {:line (-> ret :meta :line)})
                          (when-let [completions (:completions ret)]
                            (object/merge! ed {::hints (map #(do #js {:completion %}) completions)})
                            (object/raise ac/hinter :refresh!)))
                        (notifos/done-working))))


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
                        (if-not (and (seq tok)
                                     (not (util/multiple-cursors? ed))
                                     (not (re-find #"\"" tok)))
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
