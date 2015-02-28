(ns lt.plugins.cljrefactor.artifact-version
  (:require [lt.object :as object]
            [lt.objs.command :as cmd]
            [lt.objs.editor.pool :as pool]
            [lt.objs.editor :as editor]
            [lt.objs.files :as files]
            [lt.util.dom :as dom]
            [clojure.string :as s])
  (:require-macros [lt.macros :refer [defui behavior]]))


(defui select-item [idx item]
  [:option {:value item :selected (= idx 0)} item])

(defui select-form [this items]
  [:div.artifact-versions
   [:select {:size (count items)}
    (map-indexed select-item items)]])

(defn remove-form [this]
  (.clear (:mark @this))
  (object/raise this :clear)
  (object/destroy! this))


(defn on-keydown [this ed ev]
  (let [kc (.-keyCode ev)
        el (.-target ev)]
    (cond
     (or (= 13 kc) (= 9 kc)) (do
                               (dom/stop-propagation ev)
                               (dom/prevent ev)
                               (let [version (str "\"" (.-innerHTML (dom/$ "option:checked" el)) "\"")]
                                 (remove-form this)
                                 (editor/insert-at-cursor ed version)
                                 (editor/focus ed)))
     (= 27 kc) (do
                 (dom/stop-propagation ev)
                 (dom/prevent ev)
                 (remove-form this)
                 (editor/focus ed)))))

(object/object* ::artifact-select-form
                :triggers #{:click :clear!}
                :tags #{:inline :inline.artifact.select.form}
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
                                      ;; This croaks with an exception, probably due to some asynchronous timing fun
                                      (remove-form this)))

                            (dom/on content "keydown" (partial on-keydown this ed))

                            (dom/val (dom/$ :option content) 0)
                            (dom/focus (dom/$ :select content))
                            content))))

(defn make [info]
  ;; TODO: Have to figure out how to position select absolute, and still display on top of existing text
  ;;   (dom/set-css
  ;;    (dom/$ "div.CodeMirror-lines" (object/->content (:ed info)))
  ;;    {:position "absolute" :opacity 0.99 :z-index 1})
  ;;   (.log js/console (dom/$ "div.CodeMirror-lines" (object/->content (:ed info))))
  (object/create ::artifact-select-form info))
