(ns lt.plugins.cljrefactor.form-refactor
  (:require [lt.plugins.cljrefactor.parser :as p]
            [lt.object :as object]
            [lt.objs.editor.pool :as pool]
            [lt.objs.editor :as editor]
            [lt.objs.command :as cmd]
            [lt.plugins.paredit :as pe]
            [clojure.zip :as z]
            [clojure.string :as s])
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


(defn cycle-col [form-str]
  (when (> (count form-str) 1)
    (let [wrap-in (fn [a b n]
                    (s/join "" (concat [a] (drop n (drop-last form-str)) [b])))]
      (cond
       (= (first form-str) "(") (wrap-in "[" "]" 1)
       (= (first form-str) "[") (wrap-in "{" "}" 1)
       (= (first form-str) "{") (wrap-in "#{" "}" 1)
       (= (.substr form-str 0 2) "#{") (wrap-in "(" ")" 2)
       :else nil))))



(defn hash-prefixed? [ed start]
  (= (editor/range ed  start (update-in start [:ch] inc)) "#"))

(defn set-form? [ed start]
  (and (> (:ch start) 0)
       (hash-prefixed? ed (update-in start [:ch] dec))))

(defn get-form-range [ed]
  (let [pos (editor/->cursor ed)
        [start end] (pe/form-boundary ed pos)]
    (when start
      (if (set-form? ed start)
        {:start (update-in start [:ch] dec)
         :end (update-in end [:ch] inc)}
        {:start start
         :end (update-in end [:ch] inc)}))))


(defn replace-cmd [ed replace-fn]
  (when-let [form-range (get-form-range ed)]
    (let [start (:start form-range)
          end (:end form-range)
          candidate (editor/range ed start end)]
      (when-let [res (replace-fn candidate)]
        (editor/replace ed start end res))
      (if (hash-prefixed? ed start)
        (editor/move-cursor ed (update-in start [:ch] #(+ % 2)))
        (editor/move-cursor ed (update-in start [:ch] inc))))))



(behavior ::cycle-if!
          :triggers #{:refactor.cycle-if!}
          :reaction (fn [ed]
                      (replace-cmd ed cycle-if)))

(behavior ::cycle-col!
          :triggers #{:refactor.cycle-col!}
          :reaction (fn [ed]
                      (replace-cmd ed cycle-col)))




(cmd/command {:command ::cycle-if
              :desc "Clojure refactor: Cycle if"
              :exec (fn []
                      (when-let [ed (pool/last-active)]
                        (object/raise ed :refactor.cycle-if!)))})

(cmd/command {:command ::cycle-col
              :desc "Clojure refactor: Cycle col"
              :exec (fn []
                      (when-let [ed (pool/last-active)]
                        (object/raise ed :refactor.cycle-col!)))})

