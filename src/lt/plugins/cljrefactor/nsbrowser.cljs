(ns lt.plugins.cljrefactor.nsbrowser
  (:require [lt.plugins.cljrefactor.middleware :as mw]
            [lt.object :as object]
            [lt.objs.sidebar :as sidebar]
            [lt.objs.sidebar.command :as sidebar-cmd]
            [lt.objs.command :as cmd]
            [lt.objs.editor.pool :as pool]
            [lt.objs.notifos :as notifos]
            [quiescent :as q :include-macros true]
            [quiescent.dom :as d]
            [lt.util.dom :as dom]
            [clojure.string :as s])
  (:require-macros [lt.macros :refer [defui behavior]]))


(declare render)


;; TODO: Should probably make commands for this to be able to keymap
(defn handle-keypress [props ev]
  (let [kk (.-which ev)]
    (case kk
      38 (do (.preventDefault ev) ((:on-up props)))
      40 (do (.preventDefault ev) ((:on-down props)))
      13 (do (.preventDefault ev) ((:on-select props)))
      27 (do (.preventDefault ev) ((:on-escape props)))
      :default)))


(defn selected-idx [items]
  (first (keep-indexed #(when (:selected %2) %1) items)))


(defn move-down [items]
  (let [currIdx (selected-idx items)]
    (if-not (< currIdx (dec (count items)))
      items
      (-> items
          (assoc-in  [currIdx :selected] false)
          (assoc-in  [(inc currIdx) :selected] true)))))

(defn move-up [items]
  (let [currIdx (selected-idx items)]
    (if-not (> currIdx 0)
      items
      (-> items
          (assoc-in  [currIdx :selected] false)
          (assoc-in  [(dec currIdx) :selected] true)))))

(defn ns-abbr [ns-str]
  (s/join "" (map first (s/split ns-str #"\."))))

(defn filter-items [search-for items]
  (if (empty? search-for)
    items
    (filter (fn [{:keys [name]}]
              (or (> (.indexOf name search-for) -1)
                  (= (.indexOf (ns-abbr name) search-for) 0))) items)))


(defn maybe-select-first [items]
  (if-not (seq items)
    items
    (assoc-in (vec items) [0 :selected] true)))


(q/defcomponent SearchInput [props]
  (d/input {:placeholder "search"
            :value (:search-for props)
            :onKeyDown (partial handle-keypress props)
            :onChange  #((:on-change props) (aget % "target" "value"))
            :autoFocus (:focus props)}))

(q/defcomponent ResultItem [item]
  (d/li {:className (when (:selected item) "selected")} (:name item)))

(q/defcomponent ResultList [props]
  (apply d/ul {:className (when (:selected-ns props) " nsselection")}
               (map ResultItem (:items props))))

(q/defcomponent Searcher [props]
  (d/div {:className "filter-list"}
         (SearchInput props)
         (when-let [sel-ns (:selected-ns props)]
           (d/div {:className "nstitle"} sel-ns))
         (ResultList (select-keys props [:items :selected-ns]))))

(defui wrapper [this]
  [:div.jalla
   [:div {:id "nsbrowser-wrapper"} "Retrieving namespaces..."]])



(behavior ::move-up!
          :triggers #{:move-up!}
          :reaction (fn [this]
                      (let [moved (move-up (:filtered-items @this))]
                        (object/merge! this {:filtered-items moved})
                        (render {:items moved
                                 :selected-ns (:selected-ns @this)
                                 :search-for (:search-for @this)})
                        (sidebar-cmd/ensure-visible this))))

(behavior ::move-down!
          :triggers #{:move-down!}
          :reaction (fn [this]
                      (let [moved (move-down (:filtered-items @this))]
                        (object/merge! this {:filtered-items moved})
                        (render {:items moved
                                 :selected-ns (:selected-ns @this)
                                 :search-for (:search-for @this)})
                        (sidebar-cmd/ensure-visible this))))

(behavior ::select!
          :triggers #{:select!}
          :reaction (fn [this]
                      (when-let [sel-idx (selected-idx (:filtered-items @this))]
                        (when-let [ed (pool/last-active)]
                          (let [item-name (:name (nth (:filtered-items @this) sel-idx))]
                            (if-not (:selected-ns @this)
                              (do
                                (object/merge! this {:search-for ""
                                                     :selected-ns item-name})
                                (object/raise ed :list-ns-vars item-name))
                              (let [sym (str (:selected-ns @this) "/" item-name)]
                                (object/raise ed :editor.jump-to-definition! sym)
                                (object/raise this :clear!))))))))


(behavior ::search!
          :triggers #{:search!}
          :reaction (fn [this search-for]
                      (let [items (if (:selected-ns @this) (:vars @this) (:items @this))
                            filtered
                            (->> items
                                 (filter-items search-for)
                                 maybe-select-first
                                 vec)]
                        (object/merge! this {:filtered-items filtered
                                             :search-for search-for})
                        (render {:items filtered
                                 :selected-ns (:selected-ns @this)
                                 :search-for search-for}))))



(behavior ::update-ns-list!
          :triggers #{:update-ns-list!}
          :reaction (fn [this ns-items]
                      (let [filtered-items (maybe-select-first ns-items)]
                        (object/merge! this {:items ns-items
                                             :filtered-items filtered-items
                                             :search-for nil
                                             :selected-ns nil})
                        (object/raise this :focus!))))

(behavior ::focus!
          :triggers #{:focus!}
          :reaction (fn [this]
                      (render {:items (:filtered-items @this)
                               :search-for (:search-for @this)
                               :selected-ns (:selected-ns @this)
                               :focus true})
                      ;; Temp workaround until I figure out how to get react to focus...
                      (let [input (dom/$ "#nsbrowser-wrapper input")]
                        (.focus input))))

(behavior ::clear!
          :triggers #{:clear!}
          :reaction (fn [this]
                      (object/merge! this {:selected-ns nil
                                           :items nil
                                           :vars nil
                                           :filtered-items nil
                                           :search-for nil})
                      (cmd/exec! :close-sidebar)))


(behavior ::escape!
          :triggers #{:escape!}
          :reaction (fn [this]
                      (if-not (:selected-ns @this)
                        (object/raise this :clear!)
                        (let [filtered (maybe-select-first (:items @this))]
                          (object/merge! this {:selected-ns nil
                                                :search-for nil
                                                :vars nil
                                                :filtered-items filtered})
                          (render {:items filtered})))))



(behavior ::set-nsbrowser-filters
          :triggers #{:object.instant}
          :desc "Clojure Refactor: Configure filter for nsbrowser"
          :type :user
          :params [{:label "exclusions" :type :list}]
          :exclusive true
          :reaction (fn [this exclusions]
                      (object/merge! this {:exclusions exclusions})))




(object/object* ::nsbrowser
                :tags #{:clojure.nsbrowser}
                :label "Clojure ns browser"
                :order 2
                :init (fn [this]
                        (wrapper this)))





(def ns-bar (object/create ::nsbrowser))

(sidebar/add-item sidebar/rightbar ns-bar)



(behavior ::list-ns-vars
          :triggers #{:list-ns-vars}
          :reaction (fn [ed z-ns]
                      (object/raise ed
                                    :eval.custom
                                    (mw/create-op {:op "ns-vars" :ns z-ns})
                                    {:result-type :refactor.list-ns-vars-res
                                     :verbatim true})))


(behavior ::list-ns-vars-res
          :triggers #{:editor.eval.clj.result.refactor.list-ns-vars-res}
          :reaction (fn [ed res]
                      (let [[ok? ret] (mw/extract-result res
                                                         :singles
                                                         [:ns-vars :results])]
                        (if-not ok?
                          (object/raise ed
                                        :editor.exception
                                        (:err ret)
                                        {:line (-> ret :meta :line)})

                          (let [items (->> (:ns-vars ret)
                                           (map #(hash-map :name %))
                                           maybe-select-first)]
                            (object/merge! ns-bar {:vars items
                                                   :filtered-items items})
                            (render {:items items
                                     :selected-ns (:selected-ns @ns-bar)
                                     :focus true})))

                        (notifos/done-working))))

(defn maybe-exclude [exclusions items]
  (if-let [ps (map re-pattern exclusions)]
    (filter (fn [item]
              (not (seq (remove nil? (map #(re-find % item) ps))))) items)
    items))


(behavior ::list-ns-res
          :triggers #{:editor.eval.clj.result.refactor.list-ns-res}
          :reaction (fn [ed res]
                      (let [[ok? ret] (mw/extract-result res
                                                         :singles
                                                         [:ns-list :results])]
                        (if-not ok?
                          (object/raise ed
                                        :editor.exception
                                        (:err ret)
                                        {:line (-> ret :meta :line)})

                          (do
                            (object/raise sidebar/rightbar :toggle ns-bar)
                            (object/raise ns-bar
                                          :update-ns-list!
                                          (->> (:ns-list ret)
                                               (maybe-exclude (:exclusions @ns-bar))
                                               (map #(hash-map :name %)))))))))


;; (doseq [obj (object/by-tag :nrepl.client)]
;;   (println obj))


(behavior ::list-ns
          :triggers #{:list-ns}
          :reaction (fn [ed]
                      (object/raise ed
                                    :eval.custom
                                    (mw/create-op {:op "ns-list"})
                                    {:result-type :refactor.list-ns-res
                                     :verbatim true})))


(cmd/command {:command :show-nsbrowser
              :desc "Clojure refactor: Show ns-browser"
              :exec (fn []
                      (when-let [ed (pool/last-active)]
                        (object/raise ed :list-ns)))})



(defn render [props]
  (q/render (Searcher (merge {:on-down #(object/raise ns-bar :move-down!)
                              :on-up #(object/raise ns-bar :move-up!)
                              :on-select #(object/raise ns-bar :select!)
                              :on-escape #(object/raise ns-bar :escape!)
                              :on-change (fn [search-for]
                                           (object/raise ns-bar :search! search-for))}
                             props))
            (.getElementById js/document "nsbrowser-wrapper")))

