(ns lt.plugins.cljrefactor.paredit
  (:require [rewrite-clj.paredit :as pe]
            [rewrite-clj.zip :as z]
            [rewrite-clj.zip.whitespace :as ws]
            [lt.object :as object]
            [lt.objs.editor.pool :as pool]
            [lt.objs.editor :as editor]
            [lt.objs.command :as cmd]
            [lt.plugins.cljrefactor.util :as u])
  (:require-macros [lt.macros :refer [behavior]]))




(defn- ->zipper-pos-start [pos form]
  (let [row (inc (- (:line pos) (-> form :start :line)))]
    {:row row
     :col (inc (- (:ch pos)
                  (if (= 1 row) (-> form :start :ch) 0)))}))

(defn ->start-pos [z-pos form]
  {:ch (+ (dec (:col z-pos))
          (if (= 1 (:row z-pos)) (-> form :start :ch) 0))
   :line (+ (-> form :start :line) (dec (:row z-pos)))})

(defn ->end-pos [z-pos form]
  {:ch (+ (dec (:end-col z-pos))
          (if (= 1 (:end-row z-pos)) (-> form :start :ch) 0))
   :line (+ (-> form :start :line) (dec (:end-row z-pos)))})


(defn positioned-zip [pos form]
  (-> (:form-str form)
      z/of-string
      (z/find-last-by-pos (->zipper-pos-start pos form) (constantly true))))

(defn format-keep-pos [ed]
  (let [pos (editor/->cursor ed)]
    (when-let [form (u/get-top-level-form ed pos)]
      (let [hist (editor/get-history ed)]
        (editor/set-selection ed (:start form) (:end form))
        (editor/set-history ed hist))
      (editor/indent-selection ed "smart")
      (editor/move-cursor ed pos))))



(defn- maybe-col-adjust-cursor [pos opts]
  (if-let [col-adjust (:col-adjust opts)]
    (update-in pos [:ch] #(+ % col-adjust))
    pos))

(defn- maybe-dec-pos [ed pos opts]
  (let [left-ch (editor/get-char ed -1)
        right-ch (editor/get-char ed 1)]
    (if (and (:dec-pos-when-last-before-seq opts)
             (u/end-pair? right-ch)
             (not (u/start-pair? left-ch)))
      (update-in pos [:ch] dec)
      pos)))

(defn- maybe-add-space [ed expr]
  (let [right-char (editor/get-char ed 1)]
    (if (and (not (empty? right-char))
             (not (u/whitespace? right-char))
             (not (u/end-pair? right-char)))
      (str expr " ")
      expr)))

(defn paredit-cmd [ed f opts]
  (let [pos (editor/->cursor ed)
        form (u/get-top-level-form ed)
        zloc (positioned-zip (maybe-dec-pos ed pos opts) form)]
    (when zloc
      (editor/replace ed (:start form) (:end form) (-> zloc f z/root-string))
      (editor/move-cursor ed (maybe-col-adjust-cursor pos opts))
      (format-keep-pos ed))))



(defn position-after-move-prev [zloc pos form]
  (if-let [prev (z/prev zloc)]
    (if-not (some-> zloc z/left z/seq?)
      (->start-pos (-> prev z/node meta) form)
      (->end-pos (-> prev z/node meta (update-in [:end-col] inc)) form))
    pos))


(defn move-to-previous* [ed]
  (let [pos (editor/->cursor ed)
        form (u/get-top-level-form ed)
        zloc (positioned-zip pos form)]
    (when-let [res (some-> zloc pe/move-to-prev z/root-string)]
      (editor/replace ed (:start form) (:end form) res)
      (editor/move-cursor ed (position-after-move-prev zloc pos form)))))


(defn splice* [ed]
  (let [pos (editor/->cursor ed)
        form (u/get-top-level-form ed)
        zloc (some-> (positioned-zip pos form) z/up)]
    (when zloc
      (editor/replace ed (:start form) (:end form) (-> zloc pe/splice z/root-string))
      (editor/move-cursor ed pos))))

(defn kill* [ed]
  (let [pos (editor/->cursor ed)
        form (u/get-top-level-form ed)]
    (when-let [res (some-> (:form-str form)
                           z/of-string
                           (pe/kill-at-pos (->zipper-pos-start pos form))
                           z/root-string)]
      (editor/replace ed (:start form) (:end form) res)
      (editor/move-cursor ed pos))))





(defn paredit-navigate [ed f & {:keys [dir] :or {dir :left}}]
  (let [pos (editor/->cursor ed)
        form (u/get-top-level-form ed)
        zloc (positioned-zip pos form)]
    (some-> (positioned-zip pos form)
            f
            z/node
            meta
            (#(if (= :left dir)
                (->start-pos % form)
                (->end-pos % form)))
            (#(editor/move-cursor ed %)))))



(defn paredit-select [ed]
  (let [pos (editor/->cursor ed)
        form  (u/get-top-level-form ed)
        zloc (positioned-zip pos form)]
    (when-let [bounds (some-> zloc
                              (#(if (ws/whitespace? %) (z/up %) %))
                              z/node
                              meta)]

      ;; TODO: When comment adjust for newline !
      (editor/set-selection ed
                            (->start-pos bounds form)
                            (->end-pos bounds form)))))


(defn- ->pair [t pos]
  (let [np (fn [n] (update-in pos [:ch] #(+ % n)))]
    (case t
      :list         ["()" (np 1)]
      :vector       ["[]" (np 1)]
      :set          ["#{}" (np 2)]
      :map          ["{}" (np 1)]
      :fn           ["#()" (np 2)]
      :doublequote  ["\"\"" (np 1)]
      (println "Pair type Not found"))))




;; ================================
;; Behaviors
;; ================================

(behavior ::open-pair!
          :triggers #{:pared.open-pair!}
          :reaction (fn [ed t]
                      (let [pos (editor/->cursor ed)
                            [pair new-pos] (->pair t pos)]
                        (editor/insert-at-cursor ed (maybe-add-space ed pair))
                        (editor/move-cursor ed new-pos))))


(behavior ::slurp-forward!
          :triggers #{:pared.slurp-forward!}
          :reaction (fn [ed opts]
                      (paredit-cmd ed pe/slurp-forward {:dec-pos-when-last-before-seq true})))

(behavior ::slurp-backward!
          :triggers #{:pared.slurp-backward!}
          :reaction (fn [ed opts]
                      (paredit-cmd ed pe/slurp-backward opts)))

(behavior ::barf-forward!
          :triggers #{:pared.barf-forward!}
          :reaction (fn [ed opts]
                      (paredit-cmd ed pe/barf-forward {:dec-pos-when-last-before-seq true})))

(behavior ::barf-backward!
          :triggers #{:pared.barf-backward!}
          :reaction (fn [ed opts]
                      (paredit-cmd ed pe/barf-backward opts)))

(behavior ::kill!
          :triggers #{:pared.kill!}
          :reaction (fn [ed opts]
                      (kill* ed)))




(behavior ::wrap-around!
          :triggers #{:pared.wrap-around!}
          :reaction (fn [ed seq-type opts]
                      (paredit-cmd ed #(pe/wrap-around % seq-type) opts)))

(behavior ::split!
          :triggers #{:pared.split!}
          :reaction (fn [ed opts]
                      (paredit-cmd ed pe/split opts)))

(behavior ::join!
          :triggers #{:pared.join!}
          :reaction (fn [ed opts]
                      (paredit-cmd ed pe/join opts)))

(behavior ::splice!
          :triggers #{:pared.splice!}
          :reaction (fn [ed opts]
                      (splice* ed)))

(behavior ::move-to-previous!
          :triggers #{:pared.move-to-previous!}
          :reaction (fn [ed opts]
                      (move-to-previous* ed)))

(behavior ::move-next!
          :triggers #{:pared.move-next!}
          :reaction (fn [ed]
                      (paredit-navigate ed z/next)))

(behavior ::move-prev!
          :triggers #{:pared.move-prev!}
          :reaction (fn [ed]
                      (paredit-navigate ed z/prev)))

(behavior ::move-down!
          :triggers #{:pared.move-down!}
          :reaction (fn [ed]
                      (paredit-navigate ed z/down)))

(behavior ::move-up!
          :triggers #{:pared.move-up!}
          :reaction (fn [ed]
                      (paredit-navigate ed z/up)))

(behavior ::move-up-pos-right!
          :triggers #{:pared.move-up-pos-right!}
          :reaction (fn [ed]
                      (paredit-navigate ed z/up :dir :right)))

(behavior ::move-right!
          :triggers #{:pared.move-right!}
          :reaction (fn [ed]
                      (paredit-navigate ed z/right)))

(behavior ::move-left!
          :triggers #{:pared.move-left!}
          :reaction (fn [ed]
                      (paredit-navigate ed z/left)))


(behavior ::select!
          :triggers #{:pared.select!}
          :reaction (fn [ed]
                      (paredit-select ed)))



;; ================================
;; Commands
;; ================================

(cmd/command {:command :pared.open-list
              :desc "Clojure ParEd: Open list"
              :exec (fn []
                      (when-let [ed (pool/last-active)]
                        (object/raise ed :pared.open-pair! :list)))})

(cmd/command {:command :pared.open-vector
              :desc "Clojure ParEd: Open vector"
              :exec (fn []
                      (when-let [ed (pool/last-active)]
                        (object/raise ed :pared.open-pair! :vector)))})

(cmd/command {:command :pared.open-map
              :desc "Clojure ParEd: Open map"
              :exec (fn []
                      (when-let [ed (pool/last-active)]
                        (object/raise ed :pared.open-pair! :map)))})

(cmd/command {:command :pared.open-set
              :desc "Clojure ParEd: Open set"
              :exec (fn []
                      (when-let [ed (pool/last-active)]
                        (object/raise ed :pared.open-pair! :set)))})

(cmd/command {:command :pared.open-fn
              :desc "Clojure ParEd: Open anonymous function"
              :exec (fn []
                      (when-let [ed (pool/last-active)]
                        (object/raise ed :pared.open-pair! :fn)))})

(cmd/command {:command :pared.open-doublequote
              :desc "Clojure ParEd: Open doublequote"
              :exec (fn []
                      (when-let [ed (pool/last-active)]
                        (object/raise ed :pared.open-pair! :doublequote)))})


(cmd/command {:command :pared.slurp-forward
              :desc "Clojure ParEd: Slurp forward"
              :exec (fn []
                      (when-let [ed (pool/last-active)]
                        (object/raise ed :pared.slurp-forward! {})))})

(cmd/command {:command :pared.slurp-backward
              :desc "Clojure ParEd: Slurp backward"
              :exec (fn []
                      (when-let [ed (pool/last-active)]
                        (object/raise ed :pared.slurp-backward! {})))})

(cmd/command {:command :pared.barf-forward
              :desc "Clojure ParEd: Barf forward"
              :exec (fn []
                      (when-let [ed (pool/last-active)]
                        (object/raise ed :pared.barf-forward! {})))})

(cmd/command {:command :pared.barf-backward
              :desc "Clojure ParEd: Barf backward"
              :exec (fn []
                      (when-let [ed (pool/last-active)]
                        (object/raise ed :pared.barf-backward! {})))})

(cmd/command {:command :pared.kill
              :desc "Clojure ParEd: Kill"
              :exec (fn []
                      (when-let [ed (pool/last-active)]
                        (object/raise ed :pared.kill! {})))})

(cmd/command {:command :pared.wrap-around-list
              :desc "Clojure ParEd: Wrap around - list"
              :exec (fn []
                      (when-let [ed (pool/last-active)]
                        (object/raise ed :pared.wrap-around! :list {:col-adjust 1})))})

(cmd/command {:command :pared.wrap-around-vector
              :desc "Clojure ParEd: Wrap around - vector"
              :exec (fn []
                      (when-let [ed (pool/last-active)]
                        (object/raise ed :pared.wrap-around! :vector {:col-adjust 1})))})

(cmd/command {:command :pared.wrap-around-map
              :desc "Clojure ParEd: Wrap around - map"
              :exec (fn []
                      (when-let [ed (pool/last-active)]
                        (object/raise ed :pared.wrap-around! :map {:col-adjust 1})))})

(cmd/command {:command :pared.wrap-around-set
              :desc "Clojure ParEd: Wrap around - set"
              :exec (fn []
                      (when-let [ed (pool/last-active)]
                        (object/raise ed :pared.wrap-around! :set {:col-adjust 2})))})

(cmd/command {:command :pared.split
              :desc "Clojure ParEd: Split"
              :exec (fn []
                      (when-let [ed (pool/last-active)]
                        (object/raise ed :pared.split! {})))})

(cmd/command {:command :pared.join
              :desc "Clojure ParEd: Join"
              :exec (fn []
                      (when-let [ed (pool/last-active)]
                        (object/raise ed :pared.join! {})))})

(cmd/command {:command :pared.splice
              :desc "Clojure ParEd: Splice"
              :exec (fn []
                      (when-let [ed (pool/last-active)]
                        (object/raise ed :pared.splice! {})))})

(cmd/command {:command :pared.move-to-previous
              :desc "Clojure ParEd: Move node to previous"
              :exec (fn []
                      (when-let [ed (pool/last-active)]
                        (object/raise ed :pared.move-to-previous! {})))})





; Navigation only

(cmd/command {:command :pared.move-next
              :desc "Clojure ParEd: Move next (depth first)"
              :exec (fn []
                      (when-let [ed (pool/last-active)]
                        (object/raise ed :pared.move-next!)))})

(cmd/command {:command :pared.move-prev
              :desc "Clojure ParEd: Move previous (reverse depth first)"
              :exec (fn []
                      (when-let [ed (pool/last-active)]
                        (object/raise ed :pared.move-prev!)))})

(cmd/command {:command :pared.move-down
              :desc "Clojure ParEd: Move down (into sexpr)"
              :exec (fn []
                      (when-let [ed (pool/last-active)]
                        (object/raise ed :pared.move-down!)))})

(cmd/command {:command :pared.move-up
              :desc "Clojure ParEd: Move up (out of sexpr)"
              :exec (fn []
                      (when-let [ed (pool/last-active)]
                        (object/raise ed :pared.move-up!)))})

(cmd/command {:command :pared.move-up-pos-right
              :desc "Clojure ParEd: Move up right (out of sexpr and move cursor to the right)"
              :exec (fn []
                      (when-let [ed (pool/last-active)]
                        (object/raise ed :pared.move-up-pos-right!)))})


(cmd/command {:command :pared.move-right
              :desc "Clojure ParEd: Move right (right sibling)"
              :exec (fn []
                      (when-let [ed (pool/last-active)]
                        (object/raise ed :pared.move-right!)))})

(cmd/command {:command :pared.move-left
              :desc "Clojure ParEd: Move left (left sibling)"
              :exec (fn []
                      (when-let [ed (pool/last-active)]
                        (object/raise ed :pared.move-left!)))})

;; Misc
(cmd/command {:command :pared.select
              :desc "Clojure ParEd: Select (expanding)"
              :exec (fn []
                      (when-let [ed (pool/last-active)]
                        (object/raise ed :pared.select!)))})
