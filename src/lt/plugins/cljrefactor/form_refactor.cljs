(ns lt.plugins.cljrefactor.form-refactor
  (:require [lt.plugins.cljrefactor.parser :as p]
            [lt.plugins.cljrefactor.util :as u]
            [rewrite-clj.zip :as z]
            [rewrite-clj.zip.whitespace :as ws]
            [rewrite-clj.node :as nd]
            [rewrite-clj.zip.utils :as zu]
            [clojure.zip :as zz]
            [lt.object :as object]
            [lt.objs.editor.pool :as pool]
            [lt.objs.editor :as editor]
            [lt.objs.command :as cmd]
            [clojure.string :as s])
  (:require-macros [lt.macros :refer [behavior]]))



(defn-  nodes-by-dir
  ([zloc f] (nodes-by-dir zloc f constantly))
  ([zloc f p?]
   (->> zloc
        (iterate f)
        (take-while identity)
        (take-while p?)
        (map z/node))))


(defn- an-if? [zloc]
  (some #{"if" "if-not"} [(z/string zloc)]))


(defn- find-if [zloc]
  (when zloc
     (if-let [an-if (-> zloc z/leftmost an-if?)]
       [an-if (z/leftmost zloc)]
       (recur (z/up zloc)))))


(defn- right-lb-or-nl [zloc]
  (->> (-> zloc
           zz/right
           (nodes-by-dir zz/right ws/whitespace-or-comment?))
       (filter #(or (nd/linebreak? %) (nd/comment? %)))))

(defn shift-left [zloc]
  (let [preserves-right (right-lb-or-nl zloc)
        maybe-trim-ws (fn [l]
                        (if (and (z/rightmost? l)
                                 (not (->> l right-lb-or-nl (filter nd/comment?) seq)))
                          (zu/remove-right-while l ws/whitespace?)
                          l))
        maybe-add-lb (fn [l]
                       (if (and (not (seq preserves-right))
                                (-> zloc z/left right-lb-or-nl seq))
                         (z/insert-left l (nd/newlines 1))
                         l))]
    (-> zloc
        (zu/remove-right-while ws/whitespace-or-comment?)
        zu/remove-and-move-left
        z/left
        maybe-trim-ws
        (z/insert-left (z/node zloc))
        ((partial reduce z/insert-left) preserves-right)
        maybe-add-lb)))


(defn cycle-if [zloc]
  (when-let [[an-if cand] (find-if zloc)]
    (-> cand
        z/rightmost
        shift-left
        z/leftmost
        (z/replace (symbol (if (= an-if "if") "if-not" "if"))))))


(defn cycle-col [form-str]
  (when (> (count form-str) 1)
    (let [wrap-in (fn [a b n]
                    (s/join "" (concat [a] (drop n (drop-last form-str)) [b])))]
      (cond
       (= (first form-str) "(") (wrap-in "[" "]" 1)
       (= (first form-str) "[") (wrap-in "{" "}" 1)
       (= (first form-str) "{") (wrap-in "#{" "}" 1)
       (= (.substr form-str 0 2) "#{") (wrap-in "(" ")" 2)
       :else nil))))



(defn replace-cmd [ed replace-fn & {:keys [fmt]}]
  (let [{:keys [start end form-str]} (u/get-form ed)]
    (when form-str
      (when-let [res (some-> form-str
                             replace-fn
                             (#(if fmt (format-form %) %)))]
        (editor/replace ed start end res)
        (let [p (if (u/set-form? res)
                  (-> start (update-in [:ch] #(+ % 2)))
                  (-> start (update-in [:ch] inc)))
              {s1 :start s2 :end} (u/get-form ed p)]
          (editor/set-selection ed s1 s2)
          (editor/indent-selection ed "smart")
          (editor/move-cursor ed p))))))


(defn cycle-if* [ed]
  (let [pos (editor/->cursor ed)
        form (u/get-top-level-form ed pos)
        zloc (some-> form
                     :form-str
                     z/of-string
                     (z/find-last-by-pos (u/->zipper-pos-start pos form)))]

    (when-let [res (some-> zloc cycle-if z/root-string)]
      (editor/replace ed (:start form) (:end form) res)
      (editor/move-cursor ed pos)
      (u/format-keep-pos ed))))



(behavior ::cycle-if!
          :triggers #{:refactor.cycle-if!}
          :reaction (fn [ed]
                      (cycle-if* ed)))

(behavior ::cycle-col!
          :triggers #{:refactor.cycle-col!}
          :reaction (fn [ed]
                      (replace-cmd ed cycle-col)))




(cmd/command {:command ::cycle-if
              :desc "Clojure refactor: Cycle if"
              :exec (fn []
                      (when-let [ed (pool/last-active)]
                        (object/raise ed :refactor.cycle-if!)))})

(cmd/command {:command ::cycle-col
              :desc "Clojure refactor: Cycle col"
              :exec (fn []
                      (when-let [ed (pool/last-active)]
                        (object/raise ed :refactor.cycle-col!)))})
