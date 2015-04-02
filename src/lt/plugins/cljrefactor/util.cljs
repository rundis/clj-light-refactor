(ns lt.plugins.cljrefactor.util
  (:require [lt.objs.editor :as editor]
            [lt.objs.command :as cmd]
            [lt.plugins.paredit :as pe]
            [clojure.string :as s]))


(defn replace-token [s bounds neue]
  (let [lines (vec (s/split s #"\n"))]
    (s/join "\n"
            (update-in lines
                       [(:line bounds)]
                       #(str (.substr % 0 (:start bounds))
                             neue
                             (.substr % (:end bounds)))))))

(defn get-top-level-form
  ([ed] (get-top-level-form ed (editor/->cursor ed)))
  ([ed pos]
   (let [line (:line pos)
         form-start (pe/seek-top ed pos)
         form-end (second (pe/form-boundary ed (update-in form-start [:ch] inc)))]
     (when-not (> line (:line form-end))
       (editor/move-cursor ed (update-in form-start [:ch] inc))
       (cmd/exec! :paredit.select.parent)
       (when-let [sel (editor/selection ed)]
         (editor/move-cursor ed pos)
         {:form-str sel
          :start form-start
          :end form-end})))))


(defn multiple-cursors? [ed]
  (let [cm-ed (editor/->cm-ed ed)]
    (> (count (js->clj (.getSelections cm-ed))) 1)))
