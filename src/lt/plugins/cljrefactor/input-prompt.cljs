(ns lt.plugins.cljrefactor.input-prompt
  (:require [lt.object :as object]
            [lt.objs.command :as cmd]
            [lt.objs.editor.pool :as pool]
            [lt.objs.editor :as editor]
            [lt.objs.files :as files]
            [lt.util.dom :as dom]
            [clojure.string :as s])
  (:require-macros [lt.macros :refer [defui behavior]]))



(defn remove-form [this]
  ;;"Hacky solution to try and address race conflict between keydown and blur"
  (when-not (:deleted @this)
    (object/merge! this {:deleted true})
    (object/destroy! this)))


(defui prompt-form [this init-value]
  [:div.refactor-prompt
   [:p "Enter new name: "]
   [:input {:name "refactor-prompt" :type "text" :value init-value}]])


(defn on-keydown [this ed ev]
  (let [kc (.-keyCode ev)
        el (.-target ev)]
    (cond
     (= 13 kc) (do
                 (dom/stop-propagation ev)
                 (dom/prevent ev)
                 (let [old (:init-value @this)
                       new  (.-value el)
                       the-ed (:ed @this)
                       beh (:behavior @this)]
                   (object/raise the-ed beh old new)
                   (remove-form this)))

     (= 27 kc) (do
                 (dom/stop-propagation ev)
                 (dom/prevent ev)
                 (remove-form this)
                 (editor/focus ed)))))


(object/object* ::refactor-prompt-form
                :triggers #{:click :clear!}
                :tags #{:inline :inline.refactor.prompt.form}
                :init (fn [this info]
                        (when-let [ed (editor/->cm-ed (:ed info))]
                          (object/merge! this info)
                          (let [content (prompt-form this (:init-value info))]
                            (dom/on (dom/$ :input content) "blur"
                                    (fn []
                                      ;(println "Remove from blur")
                                      (remove-form this)))

                            (dom/on content "keydown" (partial on-keydown this ed))

                            (js/CodeMirror.positionHint ed content (:line (:pos info)))
                            (dom/focus (dom/$ :input content))
                            content))))

(defn make [info]
  (object/create ::refactor-prompt-form info))



;; (let [nodes (dom/$$ :div.refactor-prompt js/document)]
;;   (doseq [node nodes]
;;     (.log js/console node)
;;     (dom/remove node)))

;;    (doseq [obj (object/by-tag :inline.refactor.prompt.form)]
;;      (println "Found one")
;;      (println (object/->id obj))
;;      (object/destroy! obj)
;;      )

