(ns lt.plugins.cljrefactor.form-refactor
  (:require [lt.plugins.cljrefactor.parser :as p]
            [lt.object :as object]
            [lt.objs.editor.pool :as pool]
            [lt.objs.editor :as editor]
            [lt.objs.command :as cmd]
            [clojure.zip :as z])
  (:require-macros [lt.macros :refer [behavior]]))


(defn if-node? [loc]
  (when (and (seq loc) (list? (z/node loc)))
    (-> loc z/down z/node  ((fn [s] (some #{s} ['if 'if-not]))))))


(defn swap-if-nodes [loc]
  (let [move (-> loc z/down z/right z/right z/node)]
    (-> loc z/down z/right z/right z/remove z/rightmost (z/insert-right move) z/up)))

(defn cycle-if [form-str]
  (let [root (p/str->seq-zip form-str)
        if-node (if-node? root)]
    (when if-node
      (-> root
          swap-if-nodes
          z/down
          (z/replace (if (= if-node 'if) 'if-not 'if))
          p/zip->str))))


(defn replace-cmd [ed replace-fn]
  (cmd/exec! :paredit.select.parent)
  (when-let [candidate  (editor/selection ed)]
    (let [bounds (editor/selection-bounds ed)]
      (when-let [res (replace-fn candidate)]
        (editor/replace-selection ed res))
      (editor/move-cursor ed (-> bounds :from (update-in [:ch] inc))))))



(behavior ::cycle-if!
          :triggers #{:refactor.cycle-if!}
          :reaction (fn [ed]
                      (replace-cmd ed cycle-if)))


(cmd/command {:command ::cycle-if
              :desc "Clojure refactor: Cycle if"
              :exec (fn []
                      (when-let [ed (pool/last-active)]
                        (object/raise ed :refactor.cycle-if!)))})

