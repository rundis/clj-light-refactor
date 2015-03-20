(ns lt.plugins.cljrefactor.definition
  (:require [lt.object :as object]
            [lt.objs.editor :as editor]
            [lt.objs.editor.pool :as pool]
            [lt.objs.command :as cmd]
            [lt.objs.eval :as evl]
            [lt.objs.clients :as clients]
            [lt.objs.files :as files]
            [lt.objs.notifos :as notifos]
            [lt.plugins.clojure :as cljp]
            [lt.plugins.paredit :as pe]
            [lt.util.cljs :refer [->dottedkw]])
  (:require-macros [lt.macros :refer [defui behavior]]))



(defn get-definition-in-hidden-ed [file line]
  (let [content (-> file (files/open-sync) :content)
        ed (pool/create {:mime "text/x-clojure" :content content})]
    (let [[start end] (pe/form-boundary ed {:line (dec line) :ch (inc (.indexOf (editor/line ed (dec line)) "("))})
          sel (when (and start end)
                (editor/set-selection ed start end)
                (editor/selection ed))]
      (object/destroy! ed)
      sel)))



(behavior ::show-definition-at-cursor
          :triggers #{:editor.show-definition-at-cursor!}
          :reaction (fn [ed]
                      (let [token (cljp/find-symbol-at-cursor ed)]
                        (when token
                          (object/raise ed :editor.show-definition! token)))))

(behavior ::start-show-definition
          :triggers #{:editor.show-definition!}
          :reaction (fn [ed token]
                      (let [info (:info @ed)
                            command (->dottedkw :editor (-> info :mime cljp/mime->type) :doc)
                            info (assoc info
                                   :result-type :show-def
                                   :sym (:string token)
                                   :loc (:loc token)
                                   :print-length (object/raise-reduce ed :clojure.print-length+ nil))]
                        (clients/send (evl/get-client! {:command command
                                                         :info info
                                                         :origin ed
                                                         :create cljp/try-connect})
                                      command info :only ed))))

(behavior ::finish-show-definition
          :triggers #{:editor.clj.doc
                      :editor.cljs.doc}
          :reaction (fn [ed {:keys [file line] :as res}]
                      (when (= :show-def (:result-type res))
                        (if (and res file line)
                          (object/raise ed
                                        :editor.result.underline
                                        (get-definition-in-hidden-ed file line)
                                        {:line (-> res :loc :line)})
                          (notifos/set-msg! "Definition not found" {:class "error"})))))


(cmd/command {:command ::show-definition
              :desc "Clojure refactor: Show definition"
              :exec (fn []
                      (when-let [ed (pool/last-active)]
                        (object/raise ed :editor.show-definition-at-cursor!)))})
