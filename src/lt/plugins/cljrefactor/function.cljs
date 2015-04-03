(ns lt.plugins.cljrefactor.function
  (:require [lt.plugins.cljrefactor.parser :as p]
            [lt.plugins.cljrefactor.util :as util]
            [lt.object :as object]
            [lt.objs.editor.pool :as pool]
            [lt.objs.editor :as editor]
            [lt.objs.command :as cmd]
            [lt.plugins.paredit :as pe]
            [clojure.zip :as z]
            [clojure.string :as s])
  (:require-macros [lt.macros :refer [behavior]]))


(defn hash-prefixed? [ed start]
  (= (editor/range ed  start (update-in start [:ch] inc)) "#"))

(defn set-form? [ed start]
  (and (> (:ch start) 0)
       (hash-prefixed? ed (update-in start [:ch] dec))))

(defn get-form-range [ed pos]
  (let [[start end] (pe/form-boundary ed pos)]
    (when start
      (if (set-form? ed start)
        {:start (update-in start [:ch] dec)
         :end (update-in end [:ch] inc)}
        {:start start
         :end (update-in end [:ch] inc)}))))

(defn add-new-fn [ed pos new-fn]
  (editor/replace ed pos new-fn)
  (let [{:keys [start end]} (get-form-range ed (update-in pos [:ch] inc))]
    (editor/set-selection ed start end)
    (editor/indent-selection ed "smart")))


(defn highlight-fn-name [ed selections]
  (let [cm-ed (editor/->cm-ed ed)]
    (.setSelections cm-ed (clj->js selections))))

(defn do-extract [ed loc unbound]
  (let [{:keys [start end]} (get-form-range ed loc)
        top-form (util/get-top-level-form ed loc)
        ins-pos (update-in (:start top-form) [:line] dec)]
    (when (and start top-form)
      (let [form (editor/range ed start end)
            new-fn (str "(defn foo " (s/replace (str unbound) #"\"" "") "\n" form ")\n")
            fn-call (str "(foo"
                         (when (seq unbound) " ")
                         (s/replace (str unbound) #"\"|\[|\]" "")
                         ")")
            bm (editor/bookmark ed start nil)]
        (editor/replace ed start end fn-call)
        (add-new-fn ed ins-pos new-fn)

        (let [loc-replaced (lt.util.cljs/js->clj (.find bm) :keywordize-keys true)
              l-old (:line loc-replaced)
              start-col-old (inc (:ch loc-replaced))
              end-col-old (+ (:ch loc-replaced) 4)
              l-new (:line ins-pos)
              start-col-new (+ (:ch ins-pos) 6)
              end-col-new (+ (:ch ins-pos) 9)]
          (.clear bm)
          (highlight-fn-name ed
                             [{:anchor {:line l-old :ch start-col-old}
                               :head   {:line l-old :ch end-col-old}}
                              {:anchor {:line l-new :ch start-col-new}
                               :head   {:line l-new :ch end-col-new}}]))))))


(defn unbound-op [ed loc]
  (let [filename (-> @ed :info :path)]
    (str "(do (require 'refactor-nrepl.client) (require 'clojure.tools.nrepl)"
         " (def tr (refactor-nrepl.client/connect))"
         " (clojure.tools.nrepl/message (clojure.tools.nrepl/client tr 5000)"
         " {:op \"find-unbound\" :file \"" filename "\" :line " (inc (:line loc)) " :column " (inc (:ch loc)) "}))")))




(behavior ::unbound-res
          :triggers #{:editor.eval.clj.result.refactor.unbound-res}
          :reaction (fn [ed res]
                      (let [resp (-> res :results first :result)
                            status (-> resp first :status first)
                            err (-> resp first :err)
                            loc (-> res :meta :loc)
                            unbound (-> resp first :unbound)]
                        (if-not err
                          (do-extract ed loc unbound)
                          (object/raise ed :editor.exception err {:line (:line loc)})))))


(behavior ::extract-fn!
          :triggers #{:refactor.extract-fn!}
          :reaction (fn [ed]
                      (let [loc (editor/->cursor ed)]
                        (object/raise ed
                                      :eval.custom
                                      (unbound-op ed loc)
                                      {:result-type :refactor.unbound-res
                                       :verbatim true
                                       :loc loc}))))




(cmd/command {:command ::extract-fn
              :desc "Clojure refactor: Extract function"
              :exec (fn []
                      (when-let [ed (pool/last-active)]
                        (object/raise ed :refactor.extract-fn!)))})
