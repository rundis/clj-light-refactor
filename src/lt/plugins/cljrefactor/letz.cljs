(ns lt.plugins.cljrefactor.letz
  (:require [rewrite-clj.zip :as z]
            [rewrite-clj.paredit :as pe]
            [rewrite-clj.node :as nd]
            [lt.object :as object]
            [lt.objs.editor.pool :as pool]
            [lt.objs.editor :as editor]
            [lt.objs.command :as cmd]
            [lt.plugins.cljrefactor.util :as u])
  (:require-macros [lt.macros :refer [behavior]]))


(defn introduce-let [zloc]
  (-> zloc
      (pe/wrap-around :list)
      (z/insert-left (nd/token-node 'let))
      (pe/wrap-around :vector)
      z/up
      (z/insert-right (nd/newlines 1))))



(defn alet? [zloc]
  (some #{"let" "when-let" "letfn"} [(z/string zloc)]))

(defn find-let
  ([zloc] (find-let zloc alet?))
  ([zloc p?]
   (when zloc
     (if-let [alet (-> zloc z/leftmost p?)]
       [alet (z/leftmost zloc)]
       (find-let (z/up zloc))))))


(defn- replace-let-defs [zloc let-defs]
  (let [vs (apply hash-map
                  (reverse (->> let-defs
                                z/node
                                nd/children
                                (remove nd/whitespace-or-comment?)
                                (map nd/string))))]
    (->> zloc
         (iterate (fn [loc]
                    (if-let [r (get vs (z/string loc))]
                      (z/replace loc (symbol r))
                      (z/next loc))))
         (take-while identity)
         (take-while (complement z/end?))
         last)))



(defn promote-let [zloc]
  (let [[alet cand] (find-let zloc)]
    (if (and alet (some-> zloc z/up z/up z/up))
      (-> cand
          z/right z/right
          pe/splice-killing-backward
          z/up
          (pe/wrap-around :list)
          (z/insert-left (nd/token-node (symbol alet)))
          (z/insert-left (-> cand z/right z/node))
          (z/insert-left (nd/newlines 1))
          (replace-let-defs (z/right cand)))
      zloc)))



(defn move-to-let [zloc placeholder]
  (when-let [[alet cand] (find-let zloc #(= "let" (z/string %)))]
    (-> zloc
        (z/replace (nd/token-node (symbol placeholder)))
        (find-let #(= "let" (z/string %)))
        second
        z/right
        (z/append-child (nd/newlines 1))
        (z/append-child (nd/token-node (symbol placeholder)))
        (z/append-child (z/node zloc)))))


(defn introduce-let* [ed]
  (let [pos (editor/->cursor ed)
        form (u/get-top-level-form ed pos)
        zloc (some-> form
                     :form-str
                     z/of-string
                     (z/find-last-by-pos (u/->zipper-pos-start pos form)))]

    (when-let [res (-> zloc introduce-let z/root-string)]
      (editor/replace ed (:start form) (:end form) res)
      (editor/move-cursor ed pos)
      (u/format-keep-pos ed)
      (let [start-pos-zloc (-> zloc z/node meta (u/->start-pos form))]
        (editor/move-cursor ed (update-in start-pos-zloc [:ch] #(+ % 6)))))))

(defn promote-let* [ed]
  (let [pos (editor/->cursor ed)
        form (u/get-top-level-form ed pos)
        zloc (some-> form
                     :form-str
                     z/of-string
                     (z/find-last-by-pos (u/->zipper-pos-start pos form)))]


    (when-let [res (-> zloc promote-let z/root-string)]
      (editor/replace ed (:start form) (:end form) res)
      (editor/move-cursor ed pos)
      (u/format-keep-pos ed))))

(defn- token-bounds->selections [bounds line-offset]
  (map (fn [{:keys [line start end]}]
         {:anchor {:line (+ line-offset line) :ch start}
          :head {:line (+ line-offset line) :ch end}}) bounds))

(defn move-to-let* [ed]
  (let [pos (editor/->cursor ed)
        form (u/get-top-level-form ed pos)
        zloc (some-> form
                     :form-str
                     z/of-string
                     (z/find-last-by-pos (u/->zipper-pos-start pos form)))]

    (when-let [res (move-to-let zloc "var-x")]
      (editor/replace ed (:start form) (:end form) (z/root-string res))
      (editor/move-cursor ed (update-in pos [:line] inc))
      (u/format-keep-pos ed)
      (let [mod-form (u/get-top-level-form ed pos)
            ph-bounds (u/find-all-token-bounds (:form-str mod-form) "var-x")
            cm-ed (editor/->cm-ed ed)]
        (.setSelections cm-ed
                        (clj->js (token-bounds->selections ph-bounds (-> form :start :line))))))))



(behavior ::introduce-let!
          :triggers #{:refactor.introduce-let!}
          :reaction (fn [ed]
                      (introduce-let* ed)))

(behavior ::promote-let!
          :triggers #{:refactor.promote-let!}
          :reaction (fn [ed]
                      (promote-let* ed)))

(behavior ::move-to-let!
          :triggers #{:refactor.move-to-let!}
          :reaction (fn [ed]
                      (move-to-let* ed)))



(cmd/command {:command ::introduce-let
              :desc "Clojure refactor: Introduce let"
              :exec (fn []
                      (when-let [ed (pool/last-active)]
                        (object/raise ed :refactor.introduce-let!)))})

(cmd/command {:command ::promote-let
              :desc "Clojure refactor: Promote let"
              :exec (fn []
                      (when-let [ed (pool/last-active)]
                        (object/raise ed :refactor.promote-let!)))})

(cmd/command {:command ::move-to-let
              :desc "Clojure refactor: Move to let"
              :exec (fn []
                      (when-let [ed (pool/last-active)]
                        (object/raise ed :refactor.move-to-let!)))})

