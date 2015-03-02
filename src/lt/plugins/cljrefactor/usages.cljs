(ns lt.plugins.cljrefactor.usages
  (:require [lt.object :as object]
            [lt.objs.command :as cmd]
            [lt.objs.editor.pool :as pool]
            [lt.objs.editor :as editor]
            [lt.objs.files :as files]
            [lt.objs.tabs :as tabs]
            [lt.util.dom :as dom]
            [lt.objs.notifos :as notifos]
            [crate.binding :refer [bound]]
            [clojure.string :as s])
  (:require-macros [lt.macros :refer [defui behavior]]))


(behavior ::on-close
          :triggers #{:close}
          :reaction (fn [this]
                      (tabs/rem! this)))


(behavior ::clear!
          :triggers #{:clear!}
          :reaction (fn [this]
                      ;;(object/merge! this {:timeout nil :results (array) :result-count 0 ::time nil ::filesSearched nil :position [0 -1]})
                      (dom/empty (dom/$ :ul.res (object/->content this)))))

(defui result-entry [entry]
  [:p.entry
   [:span.line (first (:loc entry))]
   [:pre (:stmt entry)]]
  :click (fn []
           (cmd/exec! :open-path (:file entry))
           (cmd/exec! :goto-line (first (:loc entry)))))

(defui result-item [item]
  (let [file (:file item)]
    [:li
     [:p.path [:span.file (files/basename file)] "(" (files/parent file) ")"]
     (map #(result-entry %) (:items item))]))

(defui search-results [res]
  [:ul.res
   (map #(result-item %) res)])


(defn show-results [this res]
  (let [container (object/->content this)
        results-ul (dom/$ :ul.res container)]
    (dom/replace-with results-ul (search-results res))))


(defn usages->view [usages]
  (->> usages
       (filter :occurrence)
       (map (fn [{x :occurrence}]
              {:loc (take 4 x)
               :symbol (nth x 4)
               :file (nth x 5)
               :stmt (last x)}))
       (group-by :file)
       ((fn [x]
          (map (fn [k]
                 (let [items (get x k)]
                   {:file k
                    :items items})) (keys x))))))


(defn find-symbol-op [ns symbol]
  (str "(do (require 'refactor-nrepl.client) (require 'clojure.tools.nrepl)"
       " (def tr (refactor-nrepl.client/connect))"
       " (clojure.tools.nrepl/message (clojure.tools.nrepl/client tr 5000)"
       " {:op \"refactor\" :refactor-fn \"find-symbol\" :ns '" ns " :name \"" symbol \""}))"))


(behavior ::find-symbol.res
          :triggers #{:editor.eval.clj.result.refactor.find-symbol}
          :reaction (fn [ed res]
                      (let [usages (-> res :results first :result)]
                        (show-results refactor-usages (usages->view usages))
                        (notifos/done-working "Find usages completed"))))


(defn search-for [this]
  (list "Find usages for: " [:span (when-let [info (:search-for this)]
                                     (str (:namespace info) "/" (:symbol info)))]))

(object/object* ::refactor-usages
                :tags #{:refactor.usages}
                :name "Find usages"
                :init (fn [this]
                        [:div.search-results
                         [:ul.res
                          ]
                         [:div.searcher
                          [:p (bound this search-for)]]]
                        ))
;; (doseq [obj (object/by-tag :refactor.usages)]
;;   (object/destroy! obj))

(def refactor-usages (object/create ::refactor-usages))


(cmd/command {:command ::find-symbol
              :desc "Clojure refactor: Find symbol"
              :exec (fn []
                      (let [ed (pool/last-active)
                            token (when ed (lt.plugins.clojure/find-symbol-at-cursor ed))
                            ns (when ed (-> @ed :info :ns))]
                        (when (and token ns)
                          (tabs/add-or-focus! refactor-usages)
                          (object/update! refactor-usages [:search-for] (fn [_]
                                                                          {:symbol (:string token)
                                                                           :namespace ns}))
                          (object/raise refactor-usages :clear!)
                          (object/raise ed
                                        :eval.custom
                                        (find-symbol-op ns (:string token))
                                        {:result-type :refactor.find-symbol :verbatim true}))))})
