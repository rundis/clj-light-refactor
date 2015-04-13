(ns lt.plugins.cljrefactor.form-refactor
  (:require [lt.plugins.cljrefactor.parser :as p]
            [lt.plugins.cljrefactor.util :as u]
            [lt.object :as object]
            [lt.objs.editor.pool :as pool]
            [lt.objs.editor :as editor]
            [lt.objs.command :as cmd]
            [lt.plugins.paredit :as pe]
            [lt.plugins.clojure :as cp]
            [clojure.zip :as z]
            [clojure.string :as s])
  (:require-macros [lt.macros :refer [behavior]]))


(defn top [zipnode]
  (loop [n zipnode]
    (if-not (z/up n)
      n
      (recur (z/up n)))))

(defn if-node? [loc]
  (when (and (seq loc) (list? (z/node loc)))
    (-> loc z/down z/node  ((fn [s] (some #{s} ['if 'if-not]))))))


(defn swap-if-nodes [loc]
  (let [move (-> loc z/down z/right z/right z/node)]
    (-> loc z/down z/right z/right z/remove top (z/append-child move))))

(defn cycle-if [form-str]
  (let [root (p/str->seq-zip form-str)
        if-node (if-node? root)]
    (when if-node
      (-> root
          swap-if-nodes
          z/down
          (z/replace (if (= if-node 'if) 'if-not 'if))
          p/zip->str))))


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


(defn find-node [start candidate-str]
  (loop [cur start]
    (cond
     (= (-> cur z/node str) candidate-str) cur
     (not (z/end? cur)) (recur (z/next cur))
    :else nil)))



(defn move-up [form-str candidate-str]
  (let [root (p/str->seq-zip form-str)
        loc? (when (seq root) (find-node root candidate-str))]
    (when (and loc? (z/node (z/remove loc?)))
      (z/root (z/insert-left (z/remove loc?) (z/node loc?))))))

;;(move-up "(+ 1 (\"__jalla__\" \"dill\"))" "__jalla__")

;;(move-up "(\"__jalla__\")" "__jalla__")


;; DOH no negative lookbehind in JS
;;"(?<!if|\bif-not\b)\s\(" "\n("
(defn inject-nl[form-str]
  (let [idx-a (.indexOf form-str "if (")
        idx-b (.indexOf form-str "if-not (")]
    (cond
     (= -1 idx-a idx-b) (s/replace form-str #"\s\(" "\n(")
     (> idx-a idx-b) (str (.substr form-str 0 (+ idx-a 4))
                          (inject-nl (.substr form-str (+ idx-a 4))))
     :else (str (.substr form-str 0 (+ idx-b 8))
                (inject-nl (.substr form-str (+ idx-b 8)))))))


;; Silly simplistic...
(defn format-form [form-str]
  (-> form-str
      inject-nl))


(defn replace-cmd [ed replace-fn & {:keys [fmt]}]
  (let [{:keys [start end form-str]} (u/get-form ed)]
    (when form-str
      (when-let [res (some-> form-str
                             replace-fn
                             (#(if fmt (format-form %) %)))]
        (editor/replace ed start end res)
        (let [{s1 :start s2 :end} (u/get-form ed (-> start (update-in [:ch] inc)))]
          (editor/set-selection ed s1 s2)
          (editor/indent-selection ed "smart")))
      (if (u/hash-prefixed? ed start)
        (editor/move-cursor ed (update-in start [:ch] #(+ % 2)))
        (editor/move-cursor ed (update-in start [:ch] inc))))))




(behavior ::cycle-if!
          :triggers #{:refactor.cycle-if!}
          :reaction (fn [ed]
                      (replace-cmd ed cycle-if :fmt true)))

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


;; (cmd/command {:command ::move-up
;;              :desc "Clojure refactor: Move node up"
;;              :exec (fn []
;;                      (let [ed (pool/last-active)
;;                            pos (editor/->cursor ed)
;;                            token (cp/find-symbol-at-cursor ed)
;;                            move-node (:string token)
;;                            top-form (u/get-top-level-form ed pos)]

;;                        (when-let [moved (move-up (u/replace-token (:form-str top-form)
;;                                                                   {:line (- (:line pos) (:line (:start top-form)))
;;                                                                    :start (:start token)
;;                                                                    :end (:end token)}
;;                                                                   "__move-node__")
;;                                                  "__move-node__")]

;;                          (let [bounds (u/find-token-bounds moved "__move-node__")
;;                                replaced (u/replace-token moved bounds move-node)]
;;                           (editor/replace ed (:start top-form) (:end top-form) replaced)
;;                            ))))})
