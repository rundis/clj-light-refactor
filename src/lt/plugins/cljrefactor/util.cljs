(ns lt.plugins.cljrefactor.util
  (:require [lt.objs.editor :as editor]
            [lt.objs.command :as cmd]
            [lt.plugins.paredit :as pe]
            [clojure.string :as s]))


;; FROM PAREDIT MASTER
(defn seek-top [ed loc]
  (let [pars (re-pattern "\\(|\\{|\\[")]
    (loop [loc loc]
      (let [cur (second (pe/scan {:ed ed
                               :loc loc
                               :dir :left
                               :regex pars
                               :skip pe/in-string?}))
            adj (editor/adjust-loc cur -1)]
        (if (or (zero? (:ch cur))
                (nil? (:ch cur)))
          cur
          (recur adj))))))

(defn seek-bottom [ed loc]
  (let [adj->top (fn [pos] (editor/adjust-loc pos 1))
        start (seek-top ed loc)
        end (second (pe/form-boundary ed (adj->top start) nil))]
    (adj->top end)))





(defn replace-token [s bounds neue]
  (let [lines (vec (s/split s #"\n"))]
    (s/join "\n"
            (update-in lines
                       [(:line bounds)]
                       #(str (.substr % 0 (:start bounds))
                             neue
                             (.substr % (:end bounds)))))))

(defn find-token-bounds [s token]
  (some #(let [idx (.indexOf (:content %) token)]
           (when (> idx -1)
             (assoc % :start idx :end (+ idx (count token)))))
        (keep-indexed (fn [line content] {:line line :content content})
                      (s/split s #"\n"))))



(defn get-top-level-form
  ([ed] (get-top-level-form ed (editor/->cursor ed)))
  ([ed pos]
   (let [line (:line pos)
         form-start (seek-top ed pos)
         form-end (seek-bottom ed (update-in form-start [:ch] inc))]
     (when-not (> line (:line form-end))
       (when-let [sel (editor/range ed form-start form-end)]
         {:form-str sel
          :start form-start
          :end form-end})))))


(defn hash-prefixed? [ed start]
  (= (editor/range ed  start (update-in start [:ch] inc)) "#"))

(defn set-form? [ed start]
  (and (> (:ch start) 0)
       (hash-prefixed? ed (update-in start [:ch] dec))))

(defn get-form
  ([ed] (get-form ed (editor/->cursor ed)))
  ([ed pos]
   (let [[start end] (pe/form-boundary ed pos)
         end (update-in end [:ch] inc)]
     (when (and start end)
       (if (set-form? ed start)
         {:form-str (editor/range ed start end)
          :start (update-in start [:ch] dec)
          :end end}
         {:form-str (editor/range ed start end)
          :start start
          :end end})))))



(defn multiple-cursors? [ed]
  (let [cm-ed (editor/->cm-ed ed)]
    (> (count (js->clj (.getSelections cm-ed))) 1)))


