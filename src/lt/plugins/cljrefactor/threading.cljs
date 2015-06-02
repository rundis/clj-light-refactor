(ns lt.plugins.cljrefactor.threading
  (:require [clojure.zip :as z]
            [rewrite-clj.paredit :as pe]
            [rewrite-clj.zip :as rz]
            [rewrite-clj.zip.utils :as ru]
            [rewrite-clj.zip.whitespace :as ws]
            [rewrite-clj.node :as nd]
            [cljs.reader :as rdr]
            [clojure.string :as s]
            [lt.object :as object]
            [lt.objs.editor.pool :as pool]
            [lt.objs.editor :as editor]
            [lt.objs.command :as cmd]
            [lt.plugins.cljrefactor.parser :as p]
            [lt.plugins.cljrefactor.util :as u])
  (:require-macros [lt.macros :refer [behavior]]))


(defn- unwrap-if-list-of-one [zloc]
  (if (and (some-> zloc rz/down rz/leftmost?) (some-> zloc rz/down rz/rightmost?))
    (-> zloc pe/splice)
    zloc))

(defn- maybe-wrap-in-threading [zloc t]
  (if-not (= (str t) (some-> zloc rz/down rz/string))
    (-> zloc
        (pe/wrap-around :list)
        (rz/insert-left (nd/token-node t))
        z/up)
    zloc))

(defn- maybe-wrap-in-list [zloc]
  (if-not (rz/list? zloc)
    (-> zloc (pe/wrap-around :list) z/up)
    zloc))



(defn- maybe-insert-promotee-lb
  [zloc promotee]
  (if (or (some-> promotee z/right ws/linebreak?)
          (and (or (some-> promotee z/left ws/linebreak?)
                   (some-> promotee z/left ws/comment?))
               (not (some-> promotee z/right ws/comment?))))
    (ws/prepend-newline zloc)
    zloc))

(defn- maybe-insert-promotee-comment
  [zloc promotee]
  (if (some-> promotee z/right ws/comment?)
    (-> zloc (z/insert-left  (z/node (-> promotee z/right))))
    zloc))

(defn- do-thread-first-one
  [zloc]
  (let [promotee (some-> zloc rz/down rz/right rz/down rz/right
                         (ru/remove-left-while ws/whitespace-not-linebreak?)
                         (ru/remove-right-while ws/whitespace-not-linebreak?))]
    (-> promotee
        (ru/remove-right-while ws/whitespace-or-comment?)
        ws/prepend-space
        ru/remove-and-move-up
        (rz/insert-left (rz/node promotee))
        (maybe-insert-promotee-lb promotee)
        (maybe-insert-promotee-comment promotee)
        unwrap-if-list-of-one
        z/up)))

(defn- do-thread-last-one
  [zloc]
  (let [promotee (some-> zloc rz/down rz/right rz/down rz/rightmost
                         (ru/remove-left-while ws/whitespace-not-linebreak?)
                         (ru/remove-right-while ws/whitespace?))]
    (-> promotee
        (ru/remove-right-while ws/whitespace-or-comment?)
        (ru/remove-left-while ws/whitespace?)
        ru/remove-and-move-up
        (rz/insert-left (rz/node promotee))
        (maybe-insert-promotee-lb promotee)
        (maybe-insert-promotee-comment promotee)
        unwrap-if-list-of-one
        z/up)))

(defn- threading-node? [zloc]
  (some #{"->" "->>" "some->" "some->>"} [(some-> zloc rz/string)]))


(defn- threadable? [zloc]
  (and (some-> zloc rz/down rz/right rz/list?)
       (some-> zloc rz/down rz/right rz/down rz/right)))

(defn unwindable? [zloc]
  (and
   (some-> zloc rz/down threading-node?)
   (some-> zloc rz/down rz/right rz/right)))


(defn- maybe-insert-demotee-comment [zloc demotee]
  (if (some-> demotee z/right ws/comment?)
    (rz/insert-right zloc (z/node (z/right demotee)))
    zloc))

(defn- maybe-insert-demotee-lb [zloc demotee]
  (if (and (or (some-> demotee z/right ws/linebreak?)
               (some-> demotee z/right ws/comment?))
           (not (some-> zloc (ru/remove-left-while ws/whitespace?) z/left ws/comment?)))
    (ws/append-newline zloc)
    zloc))

(defn maybe-unwrap-threading [zloc]
  (if (and (threading-node? (some-> zloc rz/down))
           (not (unwindable? zloc)))
    (-> zloc
        rz/down
        ru/remove-and-move-up
        rz/splice)
    zloc))


(defn- do-unwind-thread-first-one [zloc]
  (let [demotee (some-> zloc
                        rz/down
                        rz/right
                        (ru/remove-right-while ws/whitespace-not-linebreak?))]
    (-> demotee
        rz/right
        (ru/remove-left-while ws/whitespace-or-comment?)
        ru/remove-left
        maybe-wrap-in-list
        rz/down
        (ru/remove-right-while ws/whitespace?)
        (#(if (some-> % z/right ws/comment?) (z/right %) %))
        (maybe-insert-demotee-comment demotee)
        (rz/insert-right (z/node demotee))
        ws/skip-whitespace
        (maybe-insert-demotee-lb demotee)
        z/up z/up
        maybe-unwrap-threading)))

(defn- do-unwind-thread-last-one [zloc]
  (let [demotee (some-> zloc
                        rz/down
                        rz/right
                        (ru/remove-right-while ws/whitespace-not-linebreak?))]
    (-> demotee
        rz/right
        (ru/remove-left-while ws/whitespace-or-comment?)
        ru/remove-left
        maybe-wrap-in-list
        z/down z/rightmost
        (ru/remove-left-while ws/whitespace?)
        ws/prepend-space
        (maybe-insert-demotee-comment demotee)
        (rz/insert-right (z/node demotee))
        (maybe-insert-demotee-lb demotee)
        z/up z/up
        maybe-unwrap-threading
        )))


(defn- do-thread-first-fully [zloc]
  (if-not (threadable? zloc)
    zloc
    (recur (do-thread-first-one zloc))))

(defn- do-thread-last-fully [zloc]
  (if-not (threadable? zloc)
    zloc
    (recur (do-thread-last-one zloc))))

(defn- do-unwind-thread-first-fully [zloc]
  (if-not (unwindable? zloc)
    zloc
    (recur (do-unwind-thread-first-one zloc))))


(defn- do-unwind-thread-last-fully [zloc]
  (if-not (unwindable? zloc)
    zloc
    (recur (do-unwind-thread-last-one zloc))))




(defn thread-first-fully* [t zloc]
  (-> zloc
      (maybe-wrap-in-threading t)
      do-thread-first-fully))


(defn thread-last-fully* [t zloc]
  (-> zloc
      (maybe-wrap-in-threading t)
      do-thread-last-fully))


(defn unwind-thread-first-fully* [zloc]
  (-> zloc
      do-unwind-thread-first-fully))


(defn unwind-thread-last-fully* [zloc]
  (-> zloc
      do-unwind-thread-last-fully))

(defn- lookup-thread-fn [zloc]
  (case (some-> zloc rz/string)
    ("->" "some->")   {:thread-one do-thread-first-one
                       :thread-fully do-thread-first-fully
                       :unwind-one do-unwind-thread-first-one
                       :unwind-fully do-unwind-thread-first-fully}
    ("->>" "some->>") {:thread-one do-thread-last-one
                       :thread-fully do-thread-last-fully
                       :unwind-one do-unwind-thread-last-one
                       :unwind-fully do-unwind-thread-last-fully}
    nil))

(defn thread-one* [zloc]
  (when (threadable? zloc)
    (when-let [thread-fn (some-> zloc z/down lookup-thread-fn :thread-one)]
     (thread-fn zloc))))


(defn thread-fully* [zloc]
  (when (threadable? zloc)
    (when-let [thread-fn (some-> zloc z/down lookup-thread-fn :thread-fully)]
      (thread-fn zloc))))

(defn unwind-one* [zloc]
  (when (unwindable? zloc)
    (when-let [thread-fn (some-> zloc z/down lookup-thread-fn :unwind-one)]
     (thread-fn zloc))))


(defn unwind-fully* [zloc]
  (when (unwindable? zloc)
    (when-let [thread-fn (some-> zloc z/down lookup-thread-fn :unwind-fully)]
     (thread-fn zloc))))



(defn- ->zipper-pos-start [pos form]
  (let [row (inc (- (:line pos) (-> form :start :line)))]
    {:row row
     :col (inc (- (:ch pos)
                  (if (= 1 row) (-> form :start :ch) 0)))}))

(defn format-keep-pos [ed]
  (let [pos (editor/->cursor ed)]
    (when-let [form (u/get-top-level-form ed pos)]
      (let [hist (editor/get-history ed)]
        (editor/set-selection ed (:start form) (:end form))
        (editor/set-history ed hist))
      (editor/indent-selection ed "smart")
      (editor/move-cursor ed pos))))


(defn- maybe-reposition [zloc]
  (if (threading-node? zloc)
    (z/up zloc)
    zloc))

(defn replace-cmd [ed replace-fn]
  (let [pos (editor/->cursor ed)
        form (u/get-top-level-form ed pos)
        zloc (some-> form
                     :form-str
                     rz/of-string
                     (rz/find-last-by-pos (->zipper-pos-start pos form))
                     maybe-reposition)]
    (when-let [res (-> zloc replace-fn rz/root-string)]
      (editor/replace ed (:start form) (:end form) res)
      (editor/move-cursor ed pos)
      (format-keep-pos ed))))

(let [dill "dalL"]
  (map inc
       (filter even?
               [1 2 3 4 5])))


(behavior ::thread-fully!
          :triggers #{:refactor.thread-fully!}
          :reaction (fn [ed]
                      (replace-cmd ed thread-fully*)))


(behavior ::thread-one!
          :triggers #{:refactor.thread-one!}
          :reaction (fn [ed]
                      (replace-cmd ed thread-one*)))

(behavior ::thread-first-fully!
          :triggers #{:refactor.thread-first-fully!}
          :reaction (fn [ed]
                      (replace-cmd ed (partial thread-first-fully* '->))))

(behavior ::thread-last-fully!
          :triggers #{:refactor.thread-last-fully!}
          :reaction (fn [ed]
                      (replace-cmd ed (partial thread-last-fully* '->>))))


(behavior ::unwind-fully!
          :triggers #{:refactor.unwind-fully!}
          :reaction (fn [ed]
                      (replace-cmd ed unwind-fully*)))

(behavior ::unwind-one!
          :triggers #{:refactor.unwind-one!}
          :reaction (fn [ed]
                      (replace-cmd ed unwind-one*)))



(cmd/command {:command ::thread-fully
              :desc "Clojure refactor: Thread fully"
              :exec (fn []
                      (when-let [ed (pool/last-active)]
                        (object/raise ed :refactor.thread-fully!)))})

(cmd/command {:command ::thread-one
              :desc "Clojure refactor: Thread one"
              :exec (fn []
                      (when-let [ed (pool/last-active)]
                        (object/raise ed :refactor.thread-one!)))})

(cmd/command {:command ::thread-first-fully
              :desc "Clojure refactor: Thread first fully"
              :exec (fn []
                      (when-let [ed (pool/last-active)]
                        (object/raise ed :refactor.thread-first-fully!)))})

(cmd/command {:command ::thread-last-fully
              :desc "Clojure refactor: Thread last fully"
              :exec (fn []
                      (when-let [ed (pool/last-active)]
                        (object/raise ed :refactor.thread-last-fully!)))})

(cmd/command {:command ::unwind-fully
              :desc "Clojure refactor: Unwind fully"
              :exec (fn []
                      (when-let [ed (pool/last-active)]
                        (object/raise ed :refactor.unwind-fully!)))})

(cmd/command {:command ::unwind-one
              :desc "Clojure refactor: Unwind one"
              :exec (fn []
                      (when-let [ed (pool/last-active)]
                        (object/raise ed :refactor.unwind-one!)))})


(comment
  (thread "(-> (assoc (assoc {:a 1} :b 2) :c 3))")
  (thread "(->> (map inc (filter even? [1 2 3 4 5])))")
  (thread "(-> (:c (:b (:a {:a {:b {:c 1}}}))))")
  (thread-one "(-> (:c (:b (:a {:a {:b {:c 1}}}))))")
  (thread-one "(-> (:b (:a {:a {:b {:c 1}}})) :c)")
  (thread-one "(-> (:a {:a {:b {:c 1}}}) :b :c)")
  (thread-one "(-> {:a {:b {:c 1}}} :a :b :c)")
  (thread-one "(-> {:a 1})")

  (unwind "(->> [1 2 3 4 5] (filter even?) (map inc))")
  (unwind "(-> {:a {:b {:c 1}}} :a :b :c)")
  (unwind-one "(-> {:a {:b {:c 1}}} :a :b :c)")
  (unwind-one "(-> (:a {:a {:b {:c 1}}}) :b :c)")
  (unwind-one "(-> (:b (:a {:a {:b {:c 1}}})) :c)")


  (thread-one "(some-> (assoc (assoc {:a 1} :b 2) :c 3))")
  (thread "(->> (map #(+ % 1) (filter even? [1 2 3 4 5])))"))
