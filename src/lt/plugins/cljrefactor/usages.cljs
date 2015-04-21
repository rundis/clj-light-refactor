(ns lt.plugins.cljrefactor.usages
  (:require [lt.object :as object]
            [lt.objs.command :as cmd]
            [lt.objs.editor.pool :as pool]
            [lt.objs.editor :as editor]
            [lt.objs.files :as files]
            [lt.objs.tabs :as tabs]
            [lt.util.dom :as dom]
            [lt.objs.document :as doc]
            [lt.objs.console :as console]
            [lt.objs.notifos :as notifos]
            [crate.binding :refer [bound]]
            [crate.core :as crate]
            [clojure.string :as s]
            [lt.plugins.cljrefactor.input-prompt :as prompt]
            [lt.plugins.cljrefactor.middleware :as mw])
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


(defn find-symbol-op [ed sym]
   (mw/create-ns-op ed {:op "find-symbol"
                       :name sym}))

(behavior ::find-symbol.res
          :triggers #{:editor.eval.clj.result.refactor.find-symbol}
          :reaction (fn [ed res]
                      (let [[ok? ret] (mw/extract-result res :multiples [:occurrence])
                            items (usages->items (:occurrence ret))]
                        (if-not ok?
                          (object/raise ed
                                        :editor.exception
                                        (:err ret)
                                        {:line (-> ret :meta :line)})
                          (do
                            (if (seq items)
                              (object/merge! refactor-usages {:items (assoc-in items [0 :active] true)})
                              (object/merge! refactor-usages {:items nil}))
                            (show-results refactor-usages (items->view (:items @refactor-usages)))
                            (object/update! refactor-usages [:search-for :namespace] (fn [_]
                                                                                       (-> @ed :info :ns)))))

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
                            sym (:string token)]
                        (when (= (.indexOf sym "/") -1)
                         (tabs/add-or-focus! refactor-usages)
                         (object/raise this :clear!)
                         (object/update! this [:search-for] (fn [_]
                                                              {:symbol sym
                                                               :namespace ns}))
                         (object/raise ed
                                       :eval.custom
                                       (find-symbol-op ed sym)
                                       {:result-type :refactor.find-symbol
                                        :verbatim true
                                        :symbol sym})))))



(defn search-for [this]
  (list "Find usages for: " [:span (when-let [info (:search-for this)]
                                     (str (:namespace info) "/" (:symbol info)))]))


;; all replacements for a file
(defn replace-in-hidden-ed! [file selections new]
  (let [content (-> file (files/open-sync) :content)
        ed (pool/create {:mime "text/x-clojure" :content content})
        cm-ed (editor/->cm-ed ed)]

    (.setSelections cm-ed (clj->js selections))
    (.replaceSelections cm-ed (clj->js (repeat (count selections) new)))
    ;(doc/save file (editor/->val ed))
    (files/save file (editor/->val ed))
    (object/destroy! ed)))

(defn replace-in-open-ed! [ed selections new]
  (let [cm-ed (editor/->cm-ed ed)]
    (.setSelections cm-ed (clj->js selections))
    (.replaceSelections cm-ed (clj->js (repeat (count selections) new)))
    (object/raise ed :save)))


(defn create-replace-selections [fileItems old]
  (let [origin? (fn [item] (> (:line-end item) (:line-beg item))) ;; We get the whole form for the actual symbol
        calc-col-start (fn [item]
                         (if (origin? item)
                           (.indexOf (:match item) old)
                           (- (:col-end item) 2 (count old))))
        calc-col-end (fn [item]
                       (if (origin? item)
                         (+ (.indexOf (:match item) old) (count old))
                         (- (:col-end item) 2)))]
    (vec (map (fn [item]
                {:anchor {:line (dec (:line-beg item)) :ch (calc-col-start item)}
                 :head {:line (dec (:line-beg item)) :ch (calc-col-end item)}})
              (:items fileItems)))))

(defn replace-in-editors! [itemsByFile {:keys [old new]}]
  (let [open-eds (object/by-tag :editor.clj)
        open-ed? (fn [file]
                   (some #(if (= (-> @% :info :path) file) % nil) open-eds))]
    (doseq [fileItems itemsByFile]
      (if-let [open-ed (open-ed? (:file fileItems))]
        (replace-in-open-ed! open-ed (create-replace-selections fileItems old) new)
        (replace-in-hidden-ed! (:file fileItems)
                               (create-replace-selections fileItems old)
                               new)))))

;; TODO: Need to reimplement this to do the replace client side.
(behavior ::rename-symbol.res
          :triggers #{:editor.eval.clj.result.refactor.rename-symbol}
          :reaction (fn [ed res]
                      (let [[ok? ret] (mw/extract-result res :multiples [:occurrence])]
                        (if-not ok?
                          (object/raise ed
                                        :editor.exception
                                        (:err ret)
                                        {:line (-> ret :meta :line)})
                          (let [itemsByFile (items->view (usages->items (:occurrence ret)))
                                pos (-> ret :meta-lt :pos)]
                              (replace-in-editors! itemsByFile (:meta-lt ret))
                              (editor/focus ed)
                              (editor/move-cursor ed pos)
                              (object/raise ed :editor.result "Renamed ok !" pos)))
                        (notifos/done-working "Rename completed"))))

(behavior ::rename-symbol.start
          :triggers #{:refactor.rename-symbol}
          :reaction (fn [ed old new]
                      (if (seq (s/trim new))
                        (let [ns (or (-> @ed :info :ns) (-> @ed :info :path))
                              pos (editor/->cursor ed)]
                          (notifos/set-msg! (str "Replacing: " ns "/" old " with " ns "/" new))
                          (object/raise ed
                                        :eval.custom
                                        (find-symbol-op ed old)
                                        {:result-type :refactor.rename-symbol
                                         :verbatim true
                                         :old old
                                         :new new
                                         :pos pos}))
                        (do
                          (console/log "Can't rename to empty !")
                          (editor/focus ed)))))

(behavior ::rename-symbol.prompt
          :triggers #{:refactor.rename-symbol.prompt}
          :reaction (fn [ed token]
                      (let [ns (or (-> @ed :info :ns) (-> @ed :info :path))
                            sym (:string token)]
                        (prompt/make {:ed ed
                                      :behavior :refactor.rename-symbol
                                      :init-value sym
                                      :pos (editor/->cursor ed)}))))

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

(cmd/command {:command ::replace-symbol
              :desc "Clojure refactor: Rename symbol"
              :exec (fn []
                      (when-let [ed (pool/last-active)]
                        (when-let [token (lt.plugins.clojure/find-symbol-at-cursor ed)]
                          (object/raise ed :refactor.rename-symbol.prompt token))))})

