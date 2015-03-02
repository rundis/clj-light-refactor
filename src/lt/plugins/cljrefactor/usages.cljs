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


(defn find-symbol-op [ed symbol]
  (let [filename (-> @ed :info :path)
        ns (-> @ed :info :ns)]
    (str "(do (require 'refactor-nrepl.client) (require 'clojure.tools.nrepl) (require 'lighttable.nrepl.eval)"
         " (def z-ns " (if ns
                         (str "'" ns)
                         (str "(lighttable.nrepl.eval/file->ns \"" filename "\")")) ")"
         " (def tr (refactor-nrepl.client/connect))"
         " (clojure.tools.nrepl/message (clojure.tools.nrepl/client tr 5000)"
         " {:op \"refactor\" :refactor-fn \"find-symbol\" :ns z-ns :name \"" symbol \""}))")))


(behavior ::find-symbol.res
          :triggers #{:editor.eval.clj.result.refactor.find-symbol}
          :reaction (fn [ed res]
                      (let [usages (-> res :results first :result)]
                        (show-results refactor-usages (usages->view usages))
                        (object/update! refactor-usages [:search-for :namespace] (fn [_]
                                                                                   (-> @ed :info :ns)))
                        (notifos/done-working "Find usages completed"))))


(behavior ::find-symbol.start
          :triggers #{:refactor.find-symbol}
          :reaction (fn [this ed token]
                      (let [ns (or (-> @ed :info :ns) (-> @ed :info :path))
                            op (find-symbol-op ed (:string token))]
                        (tabs/add-or-focus! refactor-usages)
                        (object/update! this [:search-for] (fn [_]
                                                             {:symbol (:string token)
                                                              :namespace ns}))
                        (object/raise this :clear!)
                        (object/raise ed
                                      :eval.custom
                                      (find-symbol-op ed (:string token))
                                      {:result-type :refactor.find-symbol :verbatim true}))))



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
;;  (doseq [obj (object/by-tag :refactor.usages)]
;;    (object/destroy! obj))

(def refactor-usages (object/create ::refactor-usages))


(cmd/command {:command ::find-symbol
              :desc "Clojure refactor: Find usages"
              :exec (fn []
                      (when-let [ed (pool/last-active)]
                        (when-let [token (lt.plugins.clojure/find-symbol-at-cursor ed)]
                          (object/raise refactor-usages :refactor.find-symbol ed token))))})
