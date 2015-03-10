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
            [crate.core :as crate]
            [clojure.string :as s])
  (:require-macros [lt.macros :refer [defui behavior]]))


(declare refactor-usages)

(behavior ::on-close
          :triggers #{:close}
          :reaction (fn [this]
                      (tabs/rem! this)))


(behavior ::clear!
          :triggers #{:clear!}
          :reaction (fn [this]
                      (dom/empty (dom/$ :ul.res (object/->content this)))))



(defn- highlight [line sym]
  (-> line
      (s/replace sym (str "<em>" sym "</em>"))
      (.substring 0 150)))



(defui result-entry [this entry]
  [:p {:class (.concat "entry" (if (:active entry) " active" ""))}
   [:span.line (:line-beg entry)]
   [:pre (crate/raw
          (highlight (:match entry) (-> @this :search-for :symbol)))]]
  :click (fn []
           (cmd/exec! :open-path (:file entry))
           (cmd/exec! :goto-line (:line-beg entry))))

(defui result-item [this item]
  (let [file (:file item)]
    [:li
     [:p.path [:span.file (files/basename file)] "(" (files/parent file) ")"]
     (map #(result-entry this %) (:items item))]))

(defui search-results [this res]
  [:ul.res
   (map #(result-item this %) res)])


(defn show-results [this res]
  (let [container (object/->content this)
        results-ul (dom/$ :ul.res container)]
    (dom/replace-with results-ul (search-results this res))))

(defn usages->items [usages]
  (vec (->> usages
            (filter :occurrence)
            (map (fn [{x :occurrence}]
                   (apply hash-map (cljs.reader/read-string x)))))))

(defn items->view [items]
  (->> items
       (group-by :file)
       ((fn [x]
          (map (fn [k]
                 (let [res (get x k)]
                   {:file k
                    :items res})) (keys x))))))


(defn find-symbol-op [ed symbol]
  (let [filename (-> @ed :info :path)
        ns (-> @ed :info :ns)]
    (str "(do (require 'refactor-nrepl.client) (require 'clojure.tools.nrepl) (require 'lighttable.nrepl.eval)"
         " (def z-ns " (if ns
                         (str "'" ns)
                         (str "(lighttable.nrepl.eval/file->ns \"" filename "\")")) ")"
         " (def tr (refactor-nrepl.client/connect))"
         " (clojure.tools.nrepl/message (clojure.tools.nrepl/client tr 10000)"
         " {:op \"find-symbol\" :ns z-ns :name \"" symbol \""}))")))


(behavior ::find-symbol.res
          :triggers #{:editor.eval.clj.result.refactor.find-symbol}
          :reaction (fn [ed res]
                      (let [usages (-> res :results first :result)
                            items (usages->items usages)]
                        (if (seq items)
                          (object/merge! refactor-usages {:items (assoc-in items [0 :active] true)})
                          (object/merge! refactor-usages {:items nil}))
                        (show-results refactor-usages (items->view (:items @refactor-usages)))
                        (object/update! refactor-usages [:search-for :namespace] (fn [_]
                                                                                   (-> @ed :info :ns)))
                        (notifos/done-working "Find usages completed"))))

(defn- ->idx-active [items]
  (first (keep-indexed #(when (:active %2) %1) items)))



(behavior ::open-active
          :triggers #{::open-active!}
          :reaction (fn [this]
                      (when-let [items (seq (:items @this))]
                        (let [idx (->idx-active items)
                              item (nth items idx)]
                          (cmd/exec! :open-path (:file item))
                          (cmd/exec! :goto-line (first (:loc item)))))))

(behavior ::move-next
          :triggers #{::move-next!}
          :reaction (fn [this]
                      (when (seq (:items @this))
                        (let [items (:items @this)
                              idx (->idx-active items)
                              cnt (count items)]
                          (when (> cnt (inc idx))
                            (object/update! this [:items idx :active] (fn [_] false))
                            (object/update! this [:items (inc idx) :active] (fn [_] true))
                            (show-results this (items->view (:items @this))))))))

(behavior ::move-prev
          :triggers #{::move-prev!}
          :reaction (fn [this]
                      (when (seq (:items @this))
                        (let [idx (->idx-active (:items @this))]
                          (when (> idx 0)
                            (object/update! this [:items idx :active] (fn [_] false))
                            (object/update! this [:items (dec idx) :active] (fn [_] true))
                            (show-results this (items->view (:items @this))))))))



(behavior ::find-symbol.start
          :triggers #{:refactor.find-symbol}
          :reaction (fn [this ed token]
                      (let [ns (or (-> @ed :info :ns) (-> @ed :info :path))
                            op (find-symbol-op ed (:string token))]
                        (tabs/add-or-focus! refactor-usages)
                        (object/raise this :clear!)
                        (object/update! this [:search-for] (fn [_]
                                                             {:symbol (:string token)
                                                              :namespace ns}))
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

;; (doseq [obj (object/by-tag :refactor.usages)]
;;     (println "Destroying")
;;     (object/destroy! obj))

(def refactor-usages (object/create ::refactor-usages))


(cmd/command {:command ::find-symbol-next
              :desc "Clojure refactor: Find usages - move next"
              :exec (fn []
                      (object/raise refactor-usages ::move-next!))})

(cmd/command {:command ::find-symbol-prev
              :desc "Clojure refactor: Find usages - move previous"
              :exec (fn []
                      (object/raise refactor-usages ::move-prev!))})

(cmd/command {:command ::find-symbol-open-active
              :desc "Clojure refactor: Find usages - open selected"
              :exec (fn []
                      (object/raise refactor-usages ::open-active!))})

(cmd/command {:command ::find-symbol
              :desc "Clojure refactor: Find usages"
              :exec (fn []
                      (when-let [ed (pool/last-active)]
                        (when-let [token (lt.plugins.clojure/find-symbol-at-cursor ed)]
                          (object/raise refactor-usages :refactor.find-symbol ed token))))})
