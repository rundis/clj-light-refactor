(ns lt.plugins.cljrefactor.util
  (:require [lt.objs.editor :as editor]
            [lt.objs.command :as cmd]
            [lt.plugins.paredit :as pe]
            [clojure.string :as s]))



(defn replace-token [s bounds neue]
  (let [lines (vec (s/split s #"\n"))]
    (s/join "\n"
            (update-in lines
                       [(:line bounds)]
                       #(str (.substr % 0 (:start bounds))
                             neue
                             (.substr % (:end bounds)))))))

(defn find-token-bounds [s token]
  (some #(let [idx (.indexOf (:content %) token)]
           (when (> idx -1)
             (assoc % :start idx :end (+ idx (count token)))))
        (keep-indexed (fn [line content] {:line line :content content})
                      (s/split s #"\n"))))


(defn hash-prefixed? [ed start]
  (= (editor/range ed  start (update-in start [:ch] inc)) "#"))


(defn set-form?
  ([form-str]
   (= (.indexOf form-str "#{") 0))
  ([ed start]
   (and (> (:ch start) 0)
        (hash-prefixed? ed (update-in start [:ch] dec)))))

(defn get-form
  ([ed] (get-form ed (editor/->cursor ed)))
  ([ed pos]
   (let [[start end] (pe/form-boundary ed pos)
         end (update-in end [:ch] inc)]
     (when (and start end)
       (if (set-form? ed start)
         {:form-str (editor/range ed (update-in start [:ch] dec) end)
          :start (update-in start [:ch] dec)
          :end end}
         {:form-str (editor/range ed start end)
          :start start
          :end end})))))



(defn multiple-cursors? [ed]
  (let [cm-ed (editor/->cm-ed ed)]
    (> (count (js->clj (.getSelections cm-ed))) 1)))



;; ==================================
;; Improved form selection utils
;; ==================================

(defn whitespace? [ch]
  (some #{\space \newline \tab} right-char))

(defn- end-pair? [ch]
  (some #{\) \} \]} ch))

(defn- start-pair? [ch]
  (some #{\( \[ \{} ch))


(def opposites {")" "("
                "(" ")"
                "{" "}"
                "}" "{"
                "[" "]"
                "]" "["})


(defn get-ch [ed loc]
  (get (editor/line ed (:line loc)) (:ch loc)))

(defn end-loc [ed]
  (let [last-line (editor/last-line ed)]
    {:line last-line
     :ch (max 0 (dec (editor/line-length ed last-line)))}))

(defn end-loc? [ed loc]
  (= (end-loc ed) loc))

(defn string|comment? [ed loc]
  (let [t (editor/->token-type ed loc)
        str-contains? #(> (.indexOf %1 %2) -1)
        ch (get-ch ed loc)
        left-ch (get-ch ed (editor/adjust-loc loc -1))
        right-ch (get-ch ed (editor/adjust-loc loc 1))]
    (when t
      (cond
       (str-contains? t "comment-form") false
       (str-contains? t "comment") true
       (and (str-contains? t "string")
            (not
             (and (end-pair? ch) (= \" left-ch) (not (= "string"
                                                        (editor/->token-type ed (editor/adjust-loc loc 1))))))) true
       :else false))))


(defn move-loc-line [ed loc dir]
  (when loc
    (let [neue (update-in loc [:line] + (if (= dir :up) -1 1))]
      (cond
       (< (:line neue) 0) nil
       (> (:line neue) (editor/last-line ed)) nil
       :else (assoc neue :ch (if (= dir :up)
                               (max (dec (editor/line-length ed (:line neue))) 0)
                               0))))))

(defn move-loc [ed dir loc]
  (when loc
    (let [len (editor/line-length ed (:line loc))
          neue (editor/adjust-loc loc (if (= dir :left) -1 1))]
      (cond
       (< (:ch neue) 0) (move-loc-line ed loc :up)
       (>= (:ch neue) len) (move-loc-line ed loc :down)
       :else neue))))

(defn peek-ch [ed dir loc]
  (when-let [next-loc (move-loc ed dir loc)]
    (get-ch ed next-loc)))


(defn loc-next-end-pair [ed loc level]
  (let [ch (some->> loc (get-ch ed))]
    (cond
     (and (nil? ch) (peek-ch ed :right loc)) (loc-next-end-pair ed (move-loc ed :right loc) level)
     (nil? ch) nil
     (string|comment? ed loc) (loc-next-end-pair ed (move-loc ed :right loc) level)
     (and (end-pair? ch) (= 0 level)) loc
     (start-pair? ch) (loc-next-end-pair ed (move-loc ed :right loc) (inc level))
     (end-pair? ch) (loc-next-end-pair ed (move-loc ed :right loc) (dec level))
     :else (loc-next-end-pair ed (move-loc ed :right loc) level))))



(defn loc-next-matching-start-pair [ed loc pair-ch level]
  (let [ch (some->> loc (get-ch ed))]
    (cond
     (nil? ch) nil
     (string|comment? ed loc) (loc-next-matching-start-pair ed (move-loc ed :left loc) pair-ch level)
     (and (= ch pair-ch) (= 0 level)) loc
     (= ch (get opposites pair-ch)) (loc-next-matching-start-pair ed (move-loc ed :left loc) pair-ch (inc level))
     (= ch pair-ch) (loc-next-matching-start-pair ed (move-loc ed :left loc) pair-ch (dec level))
     :else (loc-next-matching-start-pair ed (move-loc ed :left loc) pair-ch level))))



(defn get-bounds-matching [ed loc]
  (when-let [loc-next-end (loc-next-end-pair ed loc 0)]
    (when-let [loc-next-start (loc-next-matching-start-pair ed
                                                            (move-loc ed :left loc-next-end)
                                                            (get opposites (get-ch ed loc-next-end))
                                                            0)]
      [loc-next-start loc-next-end])))

(defn get-next-bounds-matching [ed [start end]]
  (when-let [loc-next-end (loc-next-end-pair ed (move-loc ed :right end) 0)]
    (when-let [loc-next-start (loc-next-matching-start-pair ed
                                                            (move-loc ed :left start)
                                                            (get opposites (get-ch ed loc-next-end))
                                                            0)]
      [loc-next-start loc-next-end])))




(defn get-top-level-form
  ([ed] (get-top-level-form ed (editor/->cursor ed)))
  ([ed loc]
   (if-let [[start end] (some->> (get-bounds-matching ed loc)
                                   (iterate (partial get-next-bounds-matching ed))
                                   (take-while identity)
                                   last)]

     {:form-str (editor/range ed start (update-in end [:ch] inc))
      :start start
      :end (update-in end [:ch] inc)}
     (let [line (:line loc)
           line-str (editor/line ed (:line loc))]
       {:form-str line-str
        :start {:line line :ch 0}
        :end {:line line :ch (count line-str)}}))))
