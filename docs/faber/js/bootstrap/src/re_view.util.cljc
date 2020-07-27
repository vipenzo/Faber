(ns re-view.util
  (:refer-clojure :exclude [uuid])
  (:require [clojure.string :as string]
            #?@(:cljs [["react" :as react]
                       [re-db.d :as d]])))

(def camelCase
  "Return camelCased string, eg. hello-there to helloThere. Does not modify existing case."
  (memoize
    (fn [s]
      (string/replace (name s) #"-(.)" (fn [[_ match]] (string/upper-case match))))))


(defn update-attrs [el f & args]
  (if-not (vector? el)
    el
    (let [attrs? (map? (second el))]
      (into [(el 0) (apply f (if attrs? (el 1) {}) args)]
            (subvec el (if attrs? 2 1))))))

(defn ensure-keys [forms]
  (let [seen #{}]
    (map-indexed #(update-attrs %2 update :key (fn [k]
                                                       (if (or (nil? k) (contains? seen k))
                                                         %1
                                                         (do (swap! seen conj k)
                                                             k)))) forms)))

(defn map-with-keys [& args]
  (ensure-keys (apply clojure.core/map args)))

(defn any-pred
  "Evaluate fns sequentially, stopping if any return true."
  [& fns]
  (fn [this]
    (loop [fns fns]
      (if (empty? fns)
        false
        (or ((first fns) this)
            (recur (rest fns)))))))

#?(:cljs (defn is-react-element? [x]
           (and x (react/isValidElement x))))

(defn flatten-seqs
  "Flatten collection, only unwrap sequences"
  [children]
  (filter #(not (seq? %))
          (rest (tree-seq seq? seq children))))

(defn parse-opt-args [preds args]
  (loop [preds preds
         args args
         out []]
    (if (empty? preds)
      (conj out args)
      (let [match? ((first preds) (first args))]
        (recur (rest preds)
               (cond-> args match? (rest))
               (conj out (if match? (first args) nil)))))))