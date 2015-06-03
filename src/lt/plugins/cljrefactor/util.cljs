(ns lt.plugins.cljrefactor.util
  (:require [lt.objs.editor :as editor]
            [lt.objs.console :as console]
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
  (some #{\space \newline \tab} ch))



(defn- end-pair? [ch]
  (some #{\) \} \]} ch))

(defn- start-pair? [ch]
  (some #{\( \[ \{} ch))


(def opposites #js {")" "("
                    "(" ")"
                    "{" "}"
                    "}" "{"
                    "[" "]"
                    "]" "["})


(defn- get-ch [ed loc]
  (get (editor/line ed (or (aget loc "line") (:line loc))) (or (aget loc "ch") (:ch loc))))





(defn- adjust-loc [loc delta]
  (js-obj "line" (aget loc "line") "ch" (+ (aget loc "ch") delta)))


(defn- string|comment? [ed loc line]
  (let [t (editor/->token-type ed loc)
        str-contains? #(> (.indexOf %1 %2) -1)
        ch (get line (aget loc "ch"))
        left-ch (get line (aget (adjust-loc loc -1) "ch"))]
    (when t
      (cond
       (str-contains? t "comment-form") false
       (str-contains? t "comment") true
       (and (str-contains? t "string")
            (not
             (and (end-pair? ch) (= \" left-ch) (not (= "string" (editor/->token-type ed (js->clj (adjust-loc loc 1)))))))) true
       :else false))))


(defn move-loc-line [ed loc dir]
  (when loc
    (let [neue (js-obj "line" (if (= dir :up)
                                (dec (aget loc "line"))
                                (inc (aget loc "line")))
                       "ch" (aget loc "ch"))]

      (cond
       (< (aget neue "line") 0) nil
       (> (aget neue "line") (editor/last-line ed)) nil
       :else (js-obj "line" (aget neue "line")
                     "ch" (if (= dir :up)
                            (max (dec (editor/line-length ed (aget neue "line"))) 0)
                            0))))))



(defn move-loc [ed dir loc & {:keys [line]}]
  (when loc
    (let [len (if line
                (count line)
                (editor/line-length ed (aget loc "line")))
          neue (adjust-loc loc (if (= dir :left) -1 1))]
      (cond
       (< (aget neue "ch") 0) (move-loc-line ed loc :up)
       (>= (aget neue "ch") len) (move-loc-line ed loc :down)
       :else neue))))


(defn within-range [[start end] cur]
  (when cur
    (>= end (aget cur "line") start)))



(defn- move-matching-loc [ed loc dir line]
  (let [ch (get line (aget loc "ch"))
        next-loc (move-loc ed dir loc :line line)
        next-line (when next-loc (if (not= (aget loc "line") (aget next-loc "line"))
                               (editor/line ed (aget next-loc "line"))
                               line))]
    [ch next-loc next-line]))





(def opposites-reg-ex (js/RegExp. "\\(|\\[|\\{|\\)|\\]|\\}"))

(defn- reverse-str [v]
  (.join (.reverse (.split v "")) ""))

(defn- idx-next-opposites [v]
  (when-let [m (.exec opposites-reg-ex v)]
    (.-index m)))

(defn- maybe-skip-to-next-opposites [loc line]
  (if (and loc line)
    (let [v (.substr line (aget loc "ch"))
          vl (aget v "length")
          idx (idx-next-opposites v)]
      (cond
       (and idx (> idx 0) (< idx vl)) (adjust-loc loc  idx)
       (not idx) (adjust-loc loc (dec (aget line "length")))
       :else loc))
    loc))

(defn- idx-prev-opposites [v]
  (idx-next-opposites (reverse-str v)))


(defn- maybe-skip-to-prev-opposites [loc line]
  (if (and loc line)
    (let [v (.substr line 0 (inc (aget loc "ch")))
          vl (aget v "length")
          idx (idx-prev-opposites v)]
      (cond
       (and idx (> idx 0) (< idx vl)) (adjust-loc loc  (- idx))
       (not idx) (adjust-loc loc (- (aget loc "ch")))
       :else loc))
    loc))


(defn loc-next-end-pair [ed loc]
  (when loc
    (let [search-range [(aget loc "line") (+ (aget loc "line") 200)]]
      (loop [cur loc
             line (editor/line ed (aget loc "line"))
             level 0]
        (if-not (and cur line (within-range search-range cur))
          nil
          (let [[ch next-loc next-line] (move-matching-loc ed cur :right line)
                next-loc (maybe-skip-to-next-opposites next-loc next-line)]
            (cond
             (not (or (start-pair? ch) (end-pair? ch))) (recur next-loc next-line level)
             (string|comment? ed cur line) (recur next-loc next-line level)
             (start-pair? ch) (recur next-loc next-line (inc level))
             (and (end-pair? ch) (= 0 level)) cur
             (end-pair? ch) (recur next-loc next-line (dec level))
             :else (recur next-loc next-line level))))))))


(defn loc-next-matching-start-pair [ed loc pair-ch]
  (when loc
    (let [search-range [(- (aget loc "line") 200) (aget loc "line")]]
      (loop [cur loc
             line (editor/line ed (aget loc "line"))
             level 0]
        (if-not (and cur line (within-range search-range cur))
          nil
          (let [[ch next-loc next-line] (move-matching-loc ed cur :left line)
                next-loc (maybe-skip-to-prev-opposites next-loc next-line)]
            (cond
             (not (or (= ch (aget opposites pair-ch)) (= ch pair-ch))) (recur next-loc next-line level)
             (string|comment? ed cur line) (recur next-loc next-line level)
             (= ch (aget opposites pair-ch)) (recur next-loc next-line (inc level))
             (and (= ch pair-ch) (= 0 level)) cur
             (= ch pair-ch) (recur next-loc next-line (dec level))
             :else (recur next-loc next-line level))))))))


(defn get-bounds-matching [ed loc]
  (when-let [loc-next-end (loc-next-end-pair ed loc)]
    (when-let [loc-next-start (loc-next-matching-start-pair ed
                                                            (move-loc ed :left loc-next-end)
                                                            (aget opposites (get-ch ed  loc-next-end)))]
      [loc-next-start loc-next-end])))



(defn get-next-bounds-matching [ed [start end]]
  (when-let [loc-next-end (loc-next-end-pair ed (move-loc ed :right end))]
    (when-let [loc-next-start (loc-next-matching-start-pair ed
                                                            (move-loc ed :left start)
                                                            (aget opposites (get-ch ed loc-next-end)))]
      [loc-next-start loc-next-end])))


(defn get-top-level-form
  ([ed] (get-top-level-form ed (editor/->cursor ed)))
  ([ed loc]
   (if-let [[start end] (some->> (get-bounds-matching ed (clj->js loc))
                                 (iterate (partial get-next-bounds-matching ed))
                                 (take-while identity)
                                 last)]


     (let [start-c (js->clj start :keywordize-keys true)
           end-c (js->clj end :keywordize-keys true)]
       {:form-str (editor/range ed start-c (update-in end-c [:ch] inc))
        :start start-c
        :end (update-in end-c [:ch] inc)})
     (when (= (:ch loc) 0)
       ;; horrible hack, for kill and friends this won't help much !
       (get-top-level-form ed (assoc loc :ch 1))))))

