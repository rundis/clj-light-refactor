(ns lt.plugins.cljrefactor.select
  (:require [lt.object :as object]
            [lt.objs.command :as cmd]
            [lt.objs.editor.pool :as pool]
            [lt.objs.editor :as editor]
            [lt.objs.files :as files]
            [lt.util.dom :as dom]
            [clojure.string :as s]
            [lt.util.js :refer [wait]])
  (:require-macros [lt.macros :refer [defui behavior]]))


(defn remove-form [this]
  ;(.clear (:mark @this))
  (object/raise this :clear)
  (object/destroy! this))


(defui select-item [this idx item]
  [:option {:value idx
            :selected (= idx 0)} (if (map? item) (:label item) item)])

(defui select-form [this items]
  [:div.refactor-select
   [:select {:size (count items)}
    (map-indexed (partial select-item this) items)]])


(defn on-keydown [this ed ev]
  (let [kc (.-keyCode ev)
        el (.-target ev)]
    (cond
     (or (= 13 kc) (= 9 kc)) (do
                               (dom/stop-propagation ev)
                               (dom/prevent ev)
                               (let [idx  (.-value (dom/$ "option:checked" el))
                                     item (nth (vec (:items @this)) idx)
                                     the-ed (:ed @this)
                                     beh (:behavior @this)]
                                 (remove-form this)
                                 (object/raise the-ed beh item)))

     (= 27 kc) (do
                 (dom/stop-propagation ev)
                 (dom/prevent ev)
                 (remove-form this)
                 (editor/focus ed)))))


(object/object* ::refactor-select-form
                :triggers #{:click :clear!}
                :tags #{:inline :inline.refactor.select.form}
                :init (fn [this info]
                        (when-let [ed (editor/->cm-ed (:ed info))]
                          (let [content (select-form this (:items info))
                                line (-> info :pos :line)]
                            (object/merge! this (assoc info
                                                  :mark (editor/bookmark ed
                                                                         {:line line :ch (-> info :pos :ch)}
                                                                         {:widget content
                                                                          :insertLeft false})))
                            (dom/on (dom/$ :select content) "blur"
                                    (fn [ev]
                                      (.clear (:mark @this))
                                      ;; Hack! Croaks with an exception, probably due to some asynchronous timing fun
                                      (wait 0 (fn []
                                                (remove-form this)))))

                            (dom/on content "keydown" (partial on-keydown this ed))

                            (dom/val (dom/$ :option content) 0)
                            (dom/focus (dom/$ :select content))
                            content))))

(defn make [info]
  ;; TODO: Have to figure out how to position select absolute, and still display on top of existing text
  (object/create ::refactor-select-form info))

