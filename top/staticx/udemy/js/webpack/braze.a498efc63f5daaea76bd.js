/*! For license information please see braze.a498efc63f5daaea76bd.js.LICENSE.txt */
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["braze"],
  {
    "./node_modules/@tanstack/react-query/build/lib/useQuery.esm.js": function (
      e,
      t,
      n
    ) {
      "use strict";
      const r = typeof window === "undefined" || "Deno" in window;
      function s() {
        return undefined;
      }
      function i(e, t) {
        return typeof e === "function" ? e(t) : e;
      }
      function o(e) {
        return typeof e === "number" && e >= 0 && e !== Infinity;
      }
      function u(e, t) {
        return e.filter((e) => t.indexOf(e) === -1);
      }
      function a(e, t, n) {
        const r = e.slice(0);
        r[t] = n;
        return r;
      }
      function c(e, t) {
        return Math.max(e + (t || 0) - Date.now(), 0);
      }
      function l(e, t, n) {
        if (!C(e)) {
          return e;
        }
        if (typeof t === "function") {
          return { ...n, queryKey: e, queryFn: t };
        }
        return { ...t, queryKey: e };
      }
      function d(e, t, n) {
        if (C(e)) {
          if (typeof t === "function") {
            return { ...n, mutationKey: e, mutationFn: t };
          }
          return { ...t, mutationKey: e };
        }
        if (typeof e === "function") {
          return { ...t, mutationFn: e };
        }
        return { ...e };
      }
      function f(e, t, n) {
        return C(e) ? [{ ...t, queryKey: e }, n] : [e || {}, t];
      }
      function h(e, t, n) {
        return C(e) ? [{ ...t, mutationKey: e }, n] : [e || {}, t];
      }
      function p(e, t) {
        const {
          type: n = "all",
          exact: r,
          fetchStatus: s,
          predicate: i,
          queryKey: o,
          stale: u,
        } = e;
        if (C(o)) {
          if (r) {
            if (t.queryHash !== m(o, t.options)) {
              return false;
            }
          } else if (!b(t.queryKey, o)) {
            return false;
          }
        }
        if (n !== "all") {
          const e = t.isActive();
          if (n === "active" && !e) {
            return false;
          }
          if (n === "inactive" && e) {
            return false;
          }
        }
        if (typeof u === "boolean" && t.isStale() !== u) {
          return false;
        }
        if (typeof s !== "undefined" && s !== t.state.fetchStatus) {
          return false;
        }
        if (i && !i(t)) {
          return false;
        }
        return true;
      }
      function y(e, t) {
        const { exact: n, fetching: r, predicate: s, mutationKey: i } = e;
        if (C(i)) {
          if (!t.options.mutationKey) {
            return false;
          }
          if (n) {
            if (v(t.options.mutationKey) !== v(i)) {
              return false;
            }
          } else if (!b(t.options.mutationKey, i)) {
            return false;
          }
        }
        if (typeof r === "boolean" && (t.state.status === "loading") !== r) {
          return false;
        }
        if (s && !s(t)) {
          return false;
        }
        return true;
      }
      function m(e, t) {
        const n = (t == null ? void 0 : t.queryKeyHashFn) || v;
        return n(e);
      }
      function v(e) {
        return JSON.stringify(e, (e, t) =>
          _(t)
            ? Object.keys(t)
                .sort()
                .reduce((e, n) => {
                  e[n] = t[n];
                  return e;
                }, {})
            : t
        );
      }
      function b(e, t) {
        return S(e, t);
      }
      function S(e, t) {
        if (e === t) {
          return true;
        }
        if (typeof e !== typeof t) {
          return false;
        }
        if (e && t && typeof e === "object" && typeof t === "object") {
          return !Object.keys(t).some((n) => !S(e[n], t[n]));
        }
        return false;
      }
      function g(e, t) {
        if (e === t) {
          return e;
        }
        const n = E(e) && E(t);
        if (n || (_(e) && _(t))) {
          const r = n ? e.length : Object.keys(e).length;
          const s = n ? t : Object.keys(t);
          const i = s.length;
          const o = n ? [] : {};
          let u = 0;
          for (let r = 0; r < i; r++) {
            const i = n ? r : s[r];
            o[i] = g(e[i], t[i]);
            if (o[i] === e[i]) {
              u++;
            }
          }
          return r === i && u === r ? e : o;
        }
        return t;
      }
      function R(e, t) {
        if ((e && !t) || (t && !e)) {
          return false;
        }
        for (const n in e) {
          if (e[n] !== t[n]) {
            return false;
          }
        }
        return true;
      }
      function E(e) {
        return Array.isArray(e) && e.length === Object.keys(e).length;
      }
      function _(e) {
        if (!w(e)) {
          return false;
        }
        const t = e.constructor;
        if (typeof t === "undefined") {
          return true;
        }
        const n = t.prototype;
        if (!w(n)) {
          return false;
        }
        if (!n.hasOwnProperty("isPrototypeOf")) {
          return false;
        }
        return true;
      }
      function w(e) {
        return Object.prototype.toString.call(e) === "[object Object]";
      }
      function C(e) {
        return Array.isArray(e);
      }
      function I(e) {
        return e instanceof Error;
      }
      function A(e) {
        return new Promise((t) => {
          setTimeout(t, e);
        });
      }
      function O(e) {
        A(0).then(e);
      }
      function T() {
        if (typeof AbortController === "function") {
          return new AbortController();
        }
        return;
      }
      function P(e, t, n) {
        if (n.isDataEqual != null && n.isDataEqual(e, t)) {
          return e;
        } else if (typeof n.structuralSharing === "function") {
          return n.structuralSharing(e, t);
        } else if (n.structuralSharing !== false) {
          return g(e, t);
        }
        return t;
      }
      function x() {
        let e = [];
        let t = 0;
        let n = (e) => {
          e();
        };
        let r = (e) => {
          e();
        };
        const s = (e) => {
          let n;
          t++;
          try {
            n = e();
          } finally {
            t--;
            if (!t) {
              u();
            }
          }
          return n;
        };
        const i = (r) => {
          if (t) {
            e.push(r);
          } else {
            O(() => {
              n(r);
            });
          }
        };
        const o =
          (e) =>
          (...t) => {
            i(() => {
              e(...t);
            });
          };
        const u = () => {
          const t = e;
          e = [];
          if (t.length) {
            O(() => {
              r(() => {
                t.forEach((e) => {
                  n(e);
                });
              });
            });
          }
        };
        const a = (e) => {
          n = e;
        };
        const c = (e) => {
          r = e;
        };
        return {
          batch: s,
          batchCalls: o,
          schedule: i,
          setNotifyFunction: a,
          setBatchNotifyFunction: c,
        };
      }
      const L = x();
      class j {
        constructor() {
          this.listeners = [];
          this.subscribe = this.subscribe.bind(this);
        }
        subscribe(e) {
          this.listeners.push(e);
          this.onSubscribe();
          return () => {
            this.listeners = this.listeners.filter((t) => t !== e);
            this.onUnsubscribe();
          };
        }
        hasListeners() {
          return this.listeners.length > 0;
        }
        onSubscribe() {}
        onUnsubscribe() {}
      }
      class U extends j {
        constructor() {
          super();
          this.setup = (e) => {
            if (!r && window.addEventListener) {
              const t = () => e();
              window.addEventListener("visibilitychange", t, false);
              window.addEventListener("focus", t, false);
              return () => {
                window.removeEventListener("visibilitychange", t);
                window.removeEventListener("focus", t);
              };
            }
            return;
          };
        }
        onSubscribe() {
          if (!this.cleanup) {
            this.setEventListener(this.setup);
          }
        }
        onUnsubscribe() {
          if (!this.hasListeners()) {
            var e;
            (e = this.cleanup) == null ? void 0 : e.call(this);
            this.cleanup = undefined;
          }
        }
        setEventListener(e) {
          var t;
          this.setup = e;
          (t = this.cleanup) == null ? void 0 : t.call(this);
          this.cleanup = e((e) => {
            if (typeof e === "boolean") {
              this.setFocused(e);
            } else {
              this.onFocus();
            }
          });
        }
        setFocused(e) {
          this.focused = e;
          if (e) {
            this.onFocus();
          }
        }
        onFocus() {
          this.listeners.forEach((e) => {
            e();
          });
        }
        isFocused() {
          if (typeof this.focused === "boolean") {
            return this.focused;
          }
          if (typeof document === "undefined") {
            return true;
          }
          return [undefined, "visible", "prerender"].includes(
            document.visibilityState
          );
        }
      }
      const F = new U();
      class k extends j {
        constructor() {
          super();
          this.setup = (e) => {
            if (!r && window.addEventListener) {
              const t = () => e();
              window.addEventListener("online", t, false);
              window.addEventListener("offline", t, false);
              return () => {
                window.removeEventListener("online", t);
                window.removeEventListener("offline", t);
              };
            }
            return;
          };
        }
        onSubscribe() {
          if (!this.cleanup) {
            this.setEventListener(this.setup);
          }
        }
        onUnsubscribe() {
          if (!this.hasListeners()) {
            var e;
            (e = this.cleanup) == null ? void 0 : e.call(this);
            this.cleanup = undefined;
          }
        }
        setEventListener(e) {
          var t;
          this.setup = e;
          (t = this.cleanup) == null ? void 0 : t.call(this);
          this.cleanup = e((e) => {
            if (typeof e === "boolean") {
              this.setOnline(e);
            } else {
              this.onOnline();
            }
          });
        }
        setOnline(e) {
          this.online = e;
          if (e) {
            this.onOnline();
          }
        }
        onOnline() {
          this.listeners.forEach((e) => {
            e();
          });
        }
        isOnline() {
          if (typeof this.online === "boolean") {
            return this.online;
          }
          if (
            typeof navigator === "undefined" ||
            typeof navigator.onLine === "undefined"
          ) {
            return true;
          }
          return navigator.onLine;
        }
      }
      const N = new k();
      function D(e) {
        return Math.min(1e3 * 2 ** e, 3e4);
      }
      function M(e) {
        return (e != null ? e : "online") === "online" ? N.isOnline() : true;
      }
      class K {
        constructor(e) {
          this.revert = e == null ? void 0 : e.revert;
          this.silent = e == null ? void 0 : e.silent;
        }
      }
      function B(e) {
        return e instanceof K;
      }
      function Q(e) {
        let t = false;
        let n = 0;
        let r = false;
        let s;
        let i;
        let o;
        const u = new Promise((e, t) => {
          i = e;
          o = t;
        });
        const a = (t) => {
          if (!r) {
            h(new K(t));
            e.abort == null ? void 0 : e.abort();
          }
        };
        const c = () => {
          t = true;
        };
        const l = () => {
          t = false;
        };
        const d = () =>
          !F.isFocused() || (e.networkMode !== "always" && !N.isOnline());
        const f = (t) => {
          if (!r) {
            r = true;
            e.onSuccess == null ? void 0 : e.onSuccess(t);
            s == null ? void 0 : s();
            i(t);
          }
        };
        const h = (t) => {
          if (!r) {
            r = true;
            e.onError == null ? void 0 : e.onError(t);
            s == null ? void 0 : s();
            o(t);
          }
        };
        const p = () =>
          new Promise((t) => {
            s = (e) => {
              const n = r || !d();
              if (n) {
                t(e);
              }
              return n;
            };
            e.onPause == null ? void 0 : e.onPause();
          }).then(() => {
            s = undefined;
            if (!r) {
              e.onContinue == null ? void 0 : e.onContinue();
            }
          });
        const y = () => {
          if (r) {
            return;
          }
          let s;
          try {
            s = e.fn();
          } catch (e) {
            s = Promise.reject(e);
          }
          Promise.resolve(s)
            .then(f)
            .catch((s) => {
              var i, o;
              if (r) {
                return;
              }
              const u = (i = e.retry) != null ? i : 3;
              const a = (o = e.retryDelay) != null ? o : D;
              const c = typeof a === "function" ? a(n, s) : a;
              const l =
                u === true ||
                (typeof u === "number" && n < u) ||
                (typeof u === "function" && u(n, s));
              if (t || !l) {
                h(s);
                return;
              }
              n++;
              e.onFail == null ? void 0 : e.onFail(n, s);
              A(c)
                .then(() => {
                  if (d()) {
                    return p();
                  }
                  return;
                })
                .then(() => {
                  if (t) {
                    h(s);
                  } else {
                    y();
                  }
                });
            });
        };
        if (M(e.networkMode)) {
          y();
        } else {
          p().then(y);
        }
        return {
          promise: u,
          cancel: a,
          continue: () => {
            const e = s == null ? void 0 : s();
            return e ? u : Promise.resolve();
          },
          cancelRetry: c,
          continueRetry: l,
        };
      }
      class H extends j {
        constructor(e, t) {
          super();
          this.client = e;
          this.options = t;
          this.trackedProps = new Set();
          this.selectError = null;
          this.bindMethods();
          this.setOptions(t);
        }
        bindMethods() {
          this.remove = this.remove.bind(this);
          this.refetch = this.refetch.bind(this);
        }
        onSubscribe() {
          if (this.listeners.length === 1) {
            this.currentQuery.addObserver(this);
            if (V(this.currentQuery, this.options)) {
              this.executeFetch();
            }
            this.updateTimers();
          }
        }
        onUnsubscribe() {
          if (!this.listeners.length) {
            this.destroy();
          }
        }
        shouldFetchOnReconnect() {
          return G(
            this.currentQuery,
            this.options,
            this.options.refetchOnReconnect
          );
        }
        shouldFetchOnWindowFocus() {
          return G(
            this.currentQuery,
            this.options,
            this.options.refetchOnWindowFocus
          );
        }
        destroy() {
          this.listeners = [];
          this.clearStaleTimeout();
          this.clearRefetchInterval();
          this.currentQuery.removeObserver(this);
        }
        setOptions(e, t) {
          const n = this.options;
          const r = this.currentQuery;
          this.options = this.client.defaultQueryOptions(e);
          if (false) {
          }
          if (!R(n, this.options)) {
            this.client
              .getQueryCache()
              .notify({
                type: "observerOptionsUpdated",
                query: this.currentQuery,
                observer: this,
              });
          }
          if (
            typeof this.options.enabled !== "undefined" &&
            typeof this.options.enabled !== "boolean"
          ) {
            throw new Error("Expected enabled to be a boolean");
          }
          if (!this.options.queryKey) {
            this.options.queryKey = n.queryKey;
          }
          this.updateQuery();
          const s = this.hasListeners();
          if (s && z(this.currentQuery, r, this.options, n)) {
            this.executeFetch();
          }
          this.updateResult(t);
          if (
            s &&
            (this.currentQuery !== r ||
              this.options.enabled !== n.enabled ||
              this.options.staleTime !== n.staleTime)
          ) {
            this.updateStaleTimeout();
          }
          const i = this.computeRefetchInterval();
          if (
            s &&
            (this.currentQuery !== r ||
              this.options.enabled !== n.enabled ||
              i !== this.currentRefetchInterval)
          ) {
            this.updateRefetchInterval(i);
          }
        }
        getOptimisticResult(e) {
          const t = this.client.getQueryCache().build(this.client, e);
          return this.createResult(t, e);
        }
        getCurrentResult() {
          return this.currentResult;
        }
        trackResult(e) {
          const t = {};
          Object.keys(e).forEach((n) => {
            Object.defineProperty(t, n, {
              configurable: false,
              enumerable: true,
              get: () => {
                this.trackedProps.add(n);
                return e[n];
              },
            });
          });
          return t;
        }
        getCurrentQuery() {
          return this.currentQuery;
        }
        remove() {
          this.client.getQueryCache().remove(this.currentQuery);
        }
        refetch({ refetchPage: e, ...t } = {}) {
          return this.fetch({ ...t, meta: { refetchPage: e } });
        }
        fetchOptimistic(e) {
          const t = this.client.defaultQueryOptions(e);
          const n = this.client.getQueryCache().build(this.client, t);
          n.isFetchingOptimistic = true;
          return n.fetch().then(() => this.createResult(n, t));
        }
        fetch(e) {
          var t;
          return this.executeFetch({
            ...e,
            cancelRefetch: (t = e.cancelRefetch) != null ? t : true,
          }).then(() => {
            this.updateResult();
            return this.currentResult;
          });
        }
        executeFetch(e) {
          this.updateQuery();
          let t = this.currentQuery.fetch(this.options, e);
          if (!(e != null && e.throwOnError)) {
            t = t.catch(s);
          }
          return t;
        }
        updateStaleTimeout() {
          this.clearStaleTimeout();
          if (r || this.currentResult.isStale || !o(this.options.staleTime)) {
            return;
          }
          const e = c(this.currentResult.dataUpdatedAt, this.options.staleTime);
          const t = e + 1;
          this.staleTimeoutId = setTimeout(() => {
            if (!this.currentResult.isStale) {
              this.updateResult();
            }
          }, t);
        }
        computeRefetchInterval() {
          var e;
          return typeof this.options.refetchInterval === "function"
            ? this.options.refetchInterval(
                this.currentResult.data,
                this.currentQuery
              )
            : (e = this.options.refetchInterval) != null
            ? e
            : false;
        }
        updateRefetchInterval(e) {
          this.clearRefetchInterval();
          this.currentRefetchInterval = e;
          if (
            r ||
            this.options.enabled === false ||
            !o(this.currentRefetchInterval) ||
            this.currentRefetchInterval === 0
          ) {
            return;
          }
          this.refetchIntervalId = setInterval(() => {
            if (this.options.refetchIntervalInBackground || F.isFocused()) {
              this.executeFetch();
            }
          }, this.currentRefetchInterval);
        }
        updateTimers() {
          this.updateStaleTimeout();
          this.updateRefetchInterval(this.computeRefetchInterval());
        }
        clearStaleTimeout() {
          if (this.staleTimeoutId) {
            clearTimeout(this.staleTimeoutId);
            this.staleTimeoutId = undefined;
          }
        }
        clearRefetchInterval() {
          if (this.refetchIntervalId) {
            clearInterval(this.refetchIntervalId);
            this.refetchIntervalId = undefined;
          }
        }
        createResult(e, t) {
          const n = this.currentQuery;
          const r = this.options;
          const s = this.currentResult;
          const i = this.currentResultState;
          const o = this.currentResultOptions;
          const u = e !== n;
          const a = u ? e.state : this.currentQueryInitialState;
          const c = u ? this.currentResult : this.previousQueryResult;
          const { state: l } = e;
          let {
            dataUpdatedAt: d,
            error: f,
            errorUpdatedAt: h,
            fetchStatus: p,
            status: y,
          } = l;
          let m = false;
          let v = false;
          let b;
          if (t._optimisticResults) {
            const s = this.hasListeners();
            const i = !s && V(e, t);
            const o = s && z(e, n, t, r);
            if (i || o) {
              p = M(e.options.networkMode) ? "fetching" : "paused";
              if (!d) {
                y = "loading";
              }
            }
            if (t._optimisticResults === "isRestoring") {
              p = "idle";
            }
          }
          if (
            t.keepPreviousData &&
            !l.dataUpdatedAt &&
            c != null &&
            c.isSuccess &&
            y !== "error"
          ) {
            b = c.data;
            d = c.dataUpdatedAt;
            y = c.status;
            m = true;
          } else if (t.select && typeof l.data !== "undefined") {
            if (
              s &&
              l.data === (i == null ? void 0 : i.data) &&
              t.select === this.selectFn
            ) {
              b = this.selectResult;
            } else {
              try {
                this.selectFn = t.select;
                b = t.select(l.data);
                b = P(s == null ? void 0 : s.data, b, t);
                this.selectResult = b;
                this.selectError = null;
              } catch (e) {
                if (false) {
                }
                this.selectError = e;
              }
            }
          } else {
            b = l.data;
          }
          if (
            typeof t.placeholderData !== "undefined" &&
            typeof b === "undefined" &&
            y === "loading"
          ) {
            let e;
            if (
              s != null &&
              s.isPlaceholderData &&
              t.placeholderData === (o == null ? void 0 : o.placeholderData)
            ) {
              e = s.data;
            } else {
              e =
                typeof t.placeholderData === "function"
                  ? t.placeholderData()
                  : t.placeholderData;
              if (t.select && typeof e !== "undefined") {
                try {
                  e = t.select(e);
                  this.selectError = null;
                } catch (e) {
                  if (false) {
                  }
                  this.selectError = e;
                }
              }
            }
            if (typeof e !== "undefined") {
              y = "success";
              b = P(s == null ? void 0 : s.data, e, t);
              v = true;
            }
          }
          if (this.selectError) {
            f = this.selectError;
            b = this.selectResult;
            h = Date.now();
            y = "error";
          }
          const S = p === "fetching";
          const g = y === "loading";
          const R = y === "error";
          const E = {
            status: y,
            fetchStatus: p,
            isLoading: g,
            isSuccess: y === "success",
            isError: R,
            isInitialLoading: g && S,
            data: b,
            dataUpdatedAt: d,
            error: f,
            errorUpdatedAt: h,
            failureCount: l.fetchFailureCount,
            failureReason: l.fetchFailureReason,
            errorUpdateCount: l.errorUpdateCount,
            isFetched: l.dataUpdateCount > 0 || l.errorUpdateCount > 0,
            isFetchedAfterMount:
              l.dataUpdateCount > a.dataUpdateCount ||
              l.errorUpdateCount > a.errorUpdateCount,
            isFetching: S,
            isRefetching: S && !g,
            isLoadingError: R && l.dataUpdatedAt === 0,
            isPaused: p === "paused",
            isPlaceholderData: v,
            isPreviousData: m,
            isRefetchError: R && l.dataUpdatedAt !== 0,
            isStale: Y(e, t),
            refetch: this.refetch,
            remove: this.remove,
          };
          return E;
        }
        updateResult(e) {
          const t = this.currentResult;
          const n = this.createResult(this.currentQuery, this.options);
          this.currentResultState = this.currentQuery.state;
          this.currentResultOptions = this.options;
          if (R(n, t)) {
            return;
          }
          this.currentResult = n;
          const r = { cache: true };
          const s = () => {
            if (!t) {
              return true;
            }
            const { notifyOnChangeProps: e } = this.options;
            if (e === "all" || (!e && !this.trackedProps.size)) {
              return true;
            }
            const n = new Set(e != null ? e : this.trackedProps);
            if (this.options.useErrorBoundary) {
              n.add("error");
            }
            return Object.keys(this.currentResult).some((e) => {
              const r = e;
              const s = this.currentResult[r] !== t[r];
              return s && n.has(r);
            });
          };
          if ((e == null ? void 0 : e.listeners) !== false && s()) {
            r.listeners = true;
          }
          this.notify({ ...r, ...e });
        }
        updateQuery() {
          const e = this.client
            .getQueryCache()
            .build(this.client, this.options);
          if (e === this.currentQuery) {
            return;
          }
          const t = this.currentQuery;
          this.currentQuery = e;
          this.currentQueryInitialState = e.state;
          this.previousQueryResult = this.currentResult;
          if (this.hasListeners()) {
            t == null ? void 0 : t.removeObserver(this);
            e.addObserver(this);
          }
        }
        onQueryUpdate(e) {
          const t = {};
          if (e.type === "success") {
            t.onSuccess = !e.manual;
          } else if (e.type === "error" && !B(e.error)) {
            t.onError = true;
          }
          this.updateResult(t);
          if (this.hasListeners()) {
            this.updateTimers();
          }
        }
        notify(e) {
          L.batch(() => {
            if (e.onSuccess) {
              var t, n, r, s;
              (t = (n = this.options).onSuccess) == null
                ? void 0
                : t.call(n, this.currentResult.data);
              (r = (s = this.options).onSettled) == null
                ? void 0
                : r.call(s, this.currentResult.data, null);
            } else if (e.onError) {
              var i, o, u, a;
              (i = (o = this.options).onError) == null
                ? void 0
                : i.call(o, this.currentResult.error);
              (u = (a = this.options).onSettled) == null
                ? void 0
                : u.call(a, undefined, this.currentResult.error);
            }
            if (e.listeners) {
              this.listeners.forEach((e) => {
                e(this.currentResult);
              });
            }
            if (e.cache) {
              this.client
                .getQueryCache()
                .notify({
                  query: this.currentQuery,
                  type: "observerResultsUpdated",
                });
            }
          });
        }
      }
      function q(e, t) {
        return (
          t.enabled !== false &&
          !e.state.dataUpdatedAt &&
          !(e.state.status === "error" && t.retryOnMount === false)
        );
      }
      function V(e, t) {
        return (
          q(e, t) || (e.state.dataUpdatedAt > 0 && G(e, t, t.refetchOnMount))
        );
      }
      function G(e, t, n) {
        if (t.enabled !== false) {
          const r = typeof n === "function" ? n(e) : n;
          return r === "always" || (r !== false && Y(e, t));
        }
        return false;
      }
      function z(e, t, n, r) {
        return (
          n.enabled !== false &&
          (e !== t || r.enabled === false) &&
          (!n.suspense || e.state.status !== "error") &&
          Y(e, n)
        );
      }
      function Y(e, t) {
        return e.isStaleByTime(t.staleTime);
      }
      var W = n("./node_modules/react/index.js");
      var J = n("./node_modules/use-sync-external-store/shim/index.js");
      ("use client");
      const Z = J["useSyncExternalStore"];
      ("use client");
      function $() {
        let e = false;
        return {
          clearReset: () => {
            e = false;
          },
          reset: () => {
            e = true;
          },
          isReset: () => e,
        };
      }
      const X = W["createContext"]($());
      const ee = () => W["useContext"](X);
      const te = ({ children: e }) => {
        const [t] = W["useState"](() => $());
        return W["createElement"](
          X.Provider,
          { value: t },
          typeof e === "function" ? e(t) : e
        );
      };
      ("use client");
      const ne = W["createContext"](undefined);
      const re = W["createContext"](false);
      function se(e, t) {
        if (e) {
          return e;
        }
        if (t && typeof window !== "undefined") {
          if (!window.ReactQueryClientContext) {
            window.ReactQueryClientContext = ne;
          }
          return window.ReactQueryClientContext;
        }
        return ne;
      }
      const ie = ({ context: e } = {}) => {
        const t = W["useContext"](se(e, W["useContext"](re)));
        if (!t) {
          throw new Error(
            "No QueryClient set, use QueryClientProvider to set one"
          );
        }
        return t;
      };
      const oe = ({
        client: e,
        children: t,
        context: n,
        contextSharing: r = false,
      }) => {
        W["useEffect"](() => {
          e.mount();
          return () => {
            e.unmount();
          };
        }, [e]);
        if (false) {
        }
        const s = se(n, r);
        return W["createElement"](
          re.Provider,
          { value: !n && r },
          W["createElement"](s.Provider, { value: e }, t)
        );
      };
      ("use client");
      const ue = W["createContext"](false);
      const ae = () => W["useContext"](ue);
      const ce = ue.Provider;
      function le(e, t) {
        if (typeof e === "function") {
          return e(...t);
        }
        return !!e;
      }
      ("use client");
      const de = (e, t) => {
        if (e.suspense || e.useErrorBoundary) {
          if (!t.isReset()) {
            e.retryOnMount = false;
          }
        }
      };
      const fe = (e) => {
        W["useEffect"](() => {
          e.clearReset();
        }, [e]);
      };
      const he = ({
        result: e,
        errorResetBoundary: t,
        useErrorBoundary: n,
        query: r,
      }) => e.isError && !t.isReset() && !e.isFetching && le(n, [e.error, r]);
      const pe = (e) => {
        if (e.suspense) {
          if (typeof e.staleTime !== "number") {
            e.staleTime = 1e3;
          }
        }
      };
      const ye = (e, t) => e.isLoading && e.isFetching && !t;
      const me = (e, t, n) => (e == null ? void 0 : e.suspense) && ye(t, n);
      const ve = (e, t, n) =>
        t
          .fetchOptimistic(e)
          .then(({ data: t }) => {
            e.onSuccess == null ? void 0 : e.onSuccess(t);
            e.onSettled == null ? void 0 : e.onSettled(t, null);
          })
          .catch((t) => {
            n.clearReset();
            e.onError == null ? void 0 : e.onError(t);
            e.onSettled == null ? void 0 : e.onSettled(undefined, t);
          });
      ("use client");
      function be(e, t) {
        const n = ie({ context: e.context });
        const r = ae();
        const s = ee();
        const i = n.defaultQueryOptions(e);
        i._optimisticResults = r ? "isRestoring" : "optimistic";
        if (i.onError) {
          i.onError = L.batchCalls(i.onError);
        }
        if (i.onSuccess) {
          i.onSuccess = L.batchCalls(i.onSuccess);
        }
        if (i.onSettled) {
          i.onSettled = L.batchCalls(i.onSettled);
        }
        pe(i);
        de(i, s);
        fe(s);
        const [o] = W["useState"](() => new t(n, i));
        const u = o.getOptimisticResult(i);
        Z(
          W["useCallback"](
            (e) => (r ? () => undefined : o.subscribe(L.batchCalls(e))),
            [o, r]
          ),
          () => o.getCurrentResult(),
          () => o.getCurrentResult()
        );
        W["useEffect"](() => {
          o.setOptions(i, { listeners: false });
        }, [i, o]);
        if (me(i, u, r)) {
          throw ve(i, o, s);
        }
        if (
          he({
            result: u,
            errorResetBoundary: s,
            useErrorBoundary: i.useErrorBoundary,
            query: o.getCurrentQuery(),
          })
        ) {
          throw u.error;
        }
        return !i.notifyOnChangeProps ? o.trackResult(u) : u;
      }
      n.d(t, "a", function () {
        return Se;
      });
      ("use client");
      function Se(e, t, n) {
        const r = l(e, t, n);
        return be(r, H);
      }
    },
    "./node_modules/@udemy/braze/dist/esm/index.js": function (e, t, n) {
      "use strict";
      var r = n("./node_modules/@udemy/graphql/dist/esm/index.js");
      var s = n("./node_modules/@udemy/sentry/dist/esm/index.js");
      var i = n(
        "./node_modules/@udemy/shared-utils/dist/esm/data/get-config-data.js"
      );
      var o = n(
        "./node_modules/@udemy/shared-utils/dist/esm/data/get-request-data.js"
      );
      var u = n("./node_modules/@udemy/shared-utils/dist/esm/env/ud-me.js");
      var a = n(
        "./node_modules/@udemy/shared-utils/dist/esm/env/ud-user-agnostic-tracking-params.js"
      );
      var c = n(
        "./node_modules/@udemy/shared-utils/dist/esm/env/server-or-client.js"
      );
      var l = n("./node_modules/@udemy/ud-api/dist/esm/index.js");
      let d;
      const f = new Promise((e) => {
        d = e;
      });
      async function h() {
        return new Promise((e) => {
          if (typeof window !== "undefined") {
            n.e(2)
              .then(
                n.t.bind(null, "./node_modules/@braze/web-sdk/appboy.min.js", 7)
              )
              .then((t) => {
                e(t);
              });
          }
        });
      }
      async function p() {
        return h().then(async (e) => {
          window.appboy = e;
          const t = Object(i["a"])();
          const n = Object(o["a"])();
          const r =
            t.env === "PROD"
              ? "5cefca91-d218-4b04-8bdd-c8876ec1908d"
              : "4aa844ae-1f20-4f99-aeb9-3307f28c861d";
          const f = e.initialize(r, {
            baseUrl: "sdk.iad-03.braze.com",
            safariWebsitePushId:
              t.env === "PROD" ? "web.com.udemy.prod" : "web.com.udemy",
            allowUserSuppliedJavascript: true,
            contentSecurityNonce: window.nonceValue,
            enableSdkAuthentication: true,
            devicePropertyAllowlist: [
              "browser",
              "browserVersion",
              "os",
              "resolution",
              "timeZone",
              "userAgent",
            ],
          });
          if (f === undefined || f === false) {
            l["c"].increment("braze.web_sdk.initialized", { outcome: "fail" });
            Object(s["a"])(new Error("Braze SDK failed to initialize"));
            return false;
          } else {
            l["c"].increment("braze.web_sdk.initialized", {
              outcome: "success",
            });
            d(e);
          }
          e.openSession();
          const h = Object(u["a"])();
          if (h !== null && h !== void 0 && h.is_authenticated) {
            const t = await v();
            e.changeUser(h.id, t);
            e.subscribeToSdkAuthenticationFailures(async (t) => {
              l["c"].increment("braze.web_sdk.authentication_failed", {
                code: t.errorCode,
              });
              if (t.userId === h.id.toString()) {
                const t = await v();
                if (t) {
                  e.setSdkAuthenticationSignature(t);
                } else {
                  Object(s["a"])(
                    new Error("Braze authentication error: no token provided")
                  );
                }
              }
            });
          } else {
            const r = e.getUser();
            r === null || r === void 0
              ? void 0
              : r.setCountry(t.marketplace_country.id);
            r === null || r === void 0 ? void 0 : r.setLanguage(n.language);
          }
          if (
            Object(a["a"])().page_key === "discovery_subcategory" &&
            e.isPushSupported() &&
            !e.isPushBlocked() &&
            e.isPushPermissionGranted()
          ) {
            y(e);
          }
          if (
            c["a"].global.location.href.match(/http(s)?:\/\/.*\/course\/.*/gm)
          ) {
            m(e);
          }
          return e;
        });
      }
      function y(e) {
        var t;
        const n = document.querySelector(".ud-component--category--category");
        const r = JSON.parse(
          (t =
            n === null || n === void 0
              ? void 0
              : n.getAttribute("data-component-props")) !== null && t !== void 0
            ? t
            : "{}"
        );
        if (r.pageObject) {
          const t = r.pageObject.id;
          e.logCustomEvent("Viewed subcategory page", { subcategory_id: t });
        }
      }
      async function m(e) {
        const t = document.body.getAttribute("data-clp-course-id");
        if (t) {
          let n = {};
          try {
            const e = await r["b"].fetcher({
              featureCodes: ["web_push_optin_display"],
            })();
            const t = e.featureVariantAssignmentsByCodeAndAttributes;
            t.forEach((e) => {
              if (e.featureCode === "web_push_optin_display") {
                n = e.configuration;
              }
            });
          } catch (e) {}
          e.logCustomEvent("Viewed CLP", {
            course_id: t,
            experiment: n.showModal,
          });
          e.subscribeToInAppMessage((t) => {
            let n = true;
            if (t instanceof e.InAppMessage) {
              const r = t.extras["msg-id"];
              if (r === "push-primer") {
                if (!e.isPushSupported() || e.isPushBlocked()) {
                  n = false;
                }
              }
            }
            if (n) {
              e.display.showInAppMessage(t);
            }
          });
        }
      }
      async function v() {
        try {
          const e = await l["b"].get("/braze/auth/");
          return e.data.jwt;
        } catch (e) {
          Object(s["a"])(e);
        }
      }
      async function b(e) {
        return new Promise((t) => {
          f.then((n) => {
            e(n);
            t(n);
          });
        });
      }
      n.d(t, "a", function () {
        return p;
      });
      n.d(t, "b", function () {
        return b;
      });
    },
    "./node_modules/@udemy/graphql/dist/esm/index.js": function (e, t, n) {
      "use strict";
      var r = n(
        "./node_modules/@tanstack/react-query/build/lib/useQuery.esm.js"
      );
      var s = n(
        "./node_modules/@udemy/graphql/node_modules/js-cookie/dist/js.cookie.js"
      );
      var i = n.n(s);
      const o = () => {
        var e;
        const t = (e = i.a.get()) !== null && e !== void 0 ? e : {};
        if (t.ud_locale) {
          const e = t.ud_locale.split("_").join("-");
          return { "Accept-Language": e };
        }
      };
      const u = (e, t, n) => async () => {
        let r;
        if (n && "_signal" in n) {
          r = n._signal;
          delete n._signal;
        }
        const s = await fetch("/api/2022-03/graphql/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            ...o(),
            ...(n !== null && n !== void 0 ? n : {}),
          },
          body: JSON.stringify({ query: e, variables: t }),
          signal: r,
        });
        const i = await s.json();
        if (i.errors) {
          const { message: e } = i.errors[0] || "Error..";
          throw new Error(e);
        }
        return i.data;
      };
      let a = (function (e) {
        e["ClosedCaption"] = "CLOSED_CAPTION";
        e["Subtitle"] = "SUBTITLE";
        return e;
      })({});
      let c = (function (e) {
        e["Cplusplus"] = "CPLUSPLUS";
        e["CsvProcessingWithPython"] = "CSV_PROCESSING_WITH_PYTHON";
        e["CSharp"] = "C_SHARP";
        e["CSharp_11"] = "C_SHARP_11";
        e["Html"] = "HTML";
        e["JavascriptEs6"] = "JAVASCRIPT_ES6";
        e["Java_9"] = "JAVA_9";
        e["Java_11"] = "JAVA_11";
        e["Java_17"] = "JAVA_17";
        e["Php_5"] = "PHP_5";
        e["Php_7"] = "PHP_7";
        e["Python_3_5"] = "PYTHON_3_5";
        e["Python_3_8"] = "PYTHON_3_8";
        e["Python_3_10"] = "PYTHON_3_10";
        e["React_16"] = "REACT_16";
        e["Ruby"] = "RUBY";
        e["R_3_6"] = "R_3_6";
        e["Scipy_1_4NumpyPandasSympyAndScikitLearn_0_23"] =
          "SCIPY_1_4_NUMPY_PANDAS_SYMPY_AND_SCIKIT_LEARN_0_23";
        e["Sql"] = "SQL";
        e["Sqlite_3"] = "SQLITE_3";
        e["Swift_3"] = "SWIFT_3";
        e["Swift_5"] = "SWIFT_5";
        return e;
      })({});
      let l = (function (e) {
        e["Cpe"] = "CPE";
        return e;
      })({});
      let d = (function (e) {
        e["Rating"] = "RATING";
        e["Relevance"] = "RELEVANCE";
        e["Reviews"] = "REVIEWS";
        e["Time"] = "TIME";
        return e;
      })({});
      let f = (function (e) {
        e["Aud"] = "AUD";
        e["Brl"] = "BRL";
        e["Cad"] = "CAD";
        e["Dkk"] = "DKK";
        e["Eur"] = "EUR";
        e["Gbp"] = "GBP";
        e["Idr"] = "IDR";
        e["Ils"] = "ILS";
        e["Inr"] = "INR";
        e["Jpy"] = "JPY";
        e["Krw"] = "KRW";
        e["Mxn"] = "MXN";
        e["Nok"] = "NOK";
        e["Pln"] = "PLN";
        e["Rub"] = "RUB";
        e["Sgd"] = "SGD";
        e["Thb"] = "THB";
        e["Try"] = "TRY";
        e["Twd"] = "TWD";
        e["Usd"] = "USD";
        e["Vnd"] = "VND";
        e["Zar"] = "ZAR";
        return e;
      })({});
      let h = (function (e) {
        e["Day"] = "DAY";
        e["Month"] = "MONTH";
        e["Week"] = "WEEK";
        e["Year"] = "YEAR";
        return e;
      })({});
      let p = (function (e) {
        e["AllLevels"] = "ALL_LEVELS";
        e["Beginner"] = "BEGINNER";
        e["Expert"] = "EXPERT";
        e["Intermediate"] = "INTERMEDIATE";
        return e;
      })({});
      let y = (function (e) {
        e["Af"] = "AF";
        e["Ak"] = "AK";
        e["Am"] = "AM";
        e["Ar"] = "AR";
        e["As"] = "AS";
        e["Az"] = "AZ";
        e["Be"] = "BE";
        e["Bg"] = "BG";
        e["Bm"] = "BM";
        e["Bn"] = "BN";
        e["Bo"] = "BO";
        e["Br"] = "BR";
        e["Bs"] = "BS";
        e["Ca"] = "CA";
        e["Ce"] = "CE";
        e["Cs"] = "CS";
        e["Cu"] = "CU";
        e["Cy"] = "CY";
        e["Da"] = "DA";
        e["De"] = "DE";
        e["Dz"] = "DZ";
        e["Ee"] = "EE";
        e["El"] = "EL";
        e["En"] = "EN";
        e["Eo"] = "EO";
        e["Es"] = "ES";
        e["Et"] = "ET";
        e["Eu"] = "EU";
        e["Fa"] = "FA";
        e["Ff"] = "FF";
        e["Fi"] = "FI";
        e["Fo"] = "FO";
        e["Fr"] = "FR";
        e["Fy"] = "FY";
        e["Ga"] = "GA";
        e["Gd"] = "GD";
        e["Gl"] = "GL";
        e["Gu"] = "GU";
        e["Gv"] = "GV";
        e["Ha"] = "HA";
        e["He"] = "HE";
        e["Hi"] = "HI";
        e["Hr"] = "HR";
        e["Hu"] = "HU";
        e["Hy"] = "HY";
        e["Ia"] = "IA";
        e["Id"] = "ID";
        e["Ig"] = "IG";
        e["Ii"] = "II";
        e["Is"] = "IS";
        e["It"] = "IT";
        e["Ja"] = "JA";
        e["Jv"] = "JV";
        e["Ka"] = "KA";
        e["Ki"] = "KI";
        e["Kk"] = "KK";
        e["Kl"] = "KL";
        e["Km"] = "KM";
        e["Kn"] = "KN";
        e["Ko"] = "KO";
        e["Ks"] = "KS";
        e["Ku"] = "KU";
        e["Kw"] = "KW";
        e["Ky"] = "KY";
        e["Lb"] = "LB";
        e["Lg"] = "LG";
        e["Ln"] = "LN";
        e["Lo"] = "LO";
        e["Lt"] = "LT";
        e["Lu"] = "LU";
        e["Lv"] = "LV";
        e["Mg"] = "MG";
        e["Mi"] = "MI";
        e["Mk"] = "MK";
        e["Ml"] = "ML";
        e["Mn"] = "MN";
        e["Mr"] = "MR";
        e["Ms"] = "MS";
        e["Mt"] = "MT";
        e["My"] = "MY";
        e["Nb"] = "NB";
        e["Nd"] = "ND";
        e["Ne"] = "NE";
        e["Nl"] = "NL";
        e["Nn"] = "NN";
        e["No"] = "NO";
        e["Om"] = "OM";
        e["Or"] = "OR";
        e["Os"] = "OS";
        e["Pa"] = "PA";
        e["Pl"] = "PL";
        e["Ps"] = "PS";
        e["Pt"] = "PT";
        e["PtBr"] = "PT_BR";
        e["PtPt"] = "PT_PT";
        e["Qu"] = "QU";
        e["Rm"] = "RM";
        e["Rn"] = "RN";
        e["Ro"] = "RO";
        e["Ru"] = "RU";
        e["Rw"] = "RW";
        e["Sd"] = "SD";
        e["Se"] = "SE";
        e["Sg"] = "SG";
        e["Si"] = "SI";
        e["Sk"] = "SK";
        e["Sl"] = "SL";
        e["Sn"] = "SN";
        e["So"] = "SO";
        e["Sq"] = "SQ";
        e["Sr"] = "SR";
        e["Su"] = "SU";
        e["Sv"] = "SV";
        e["Sw"] = "SW";
        e["Ta"] = "TA";
        e["Te"] = "TE";
        e["Tg"] = "TG";
        e["Th"] = "TH";
        e["Ti"] = "TI";
        e["Tk"] = "TK";
        e["To"] = "TO";
        e["Tr"] = "TR";
        e["Tt"] = "TT";
        e["Ug"] = "UG";
        e["Uk"] = "UK";
        e["Ur"] = "UR";
        e["Uz"] = "UZ";
        e["Vi"] = "VI";
        e["Vo"] = "VO";
        e["Wo"] = "WO";
        e["Xh"] = "XH";
        e["Yi"] = "YI";
        e["Yo"] = "YO";
        e["Zh"] = "ZH";
        e["ZhCn"] = "ZH_CN";
        e["ZhTw"] = "ZH_TW";
        e["Zu"] = "ZU";
        return e;
      })({});
      let m = (function (e) {
        e["Consumersubscription"] = "CONSUMERSUBSCRIPTION";
        e["Enterprise"] = "ENTERPRISE";
        e["Team"] = "TEAM";
        e["Udemypro"] = "UDEMYPRO";
        return e;
      })({});
      let v = (function (e) {
        e["Active"] = "ACTIVE";
        e["Canceled"] = "CANCELED";
        e["Expired"] = "EXPIRED";
        e["Future"] = "FUTURE";
        e["Trial"] = "TRIAL";
        return e;
      })({});
      let b = (function (e) {
        e["Popular"] = "POPULAR";
        e["Trending"] = "TRENDING";
        return e;
      })({});
      let S = (function (e) {
        e["ExtraLong"] = "EXTRA_LONG";
        e["ExtraShort"] = "EXTRA_SHORT";
        e["Long"] = "LONG";
        e["Medium"] = "MEDIUM";
        e["Short"] = "SHORT";
        return e;
      })({});
      const g = `\n    query FeatureVariantAssignments($featureCodes: [String!]!, $realtimeAttributes: [FeatureRequestAttributeInput!]) {\n  featureVariantAssignmentsByCodeAndAttributes(\n    featureCodes: $featureCodes\n    realtimeAttributes: $realtimeAttributes\n  ) {\n    featureCode\n    configuration\n    isInExperiment\n    experimentIds\n  }\n}\n    `;
      const R = (e, t) =>
        Object(r["a"])(["FeatureVariantAssignments", e], u(g, e), t);
      R.getKey = (e) => ["FeatureVariantAssignments", e];
      R.fetcher = (e, t) => u(g, e, t);
      var E = n("./node_modules/axios/index.js");
      var _ = n.n(E);
      var w = n(
        "./node_modules/@udemy/shared-utils/dist/esm/data/get-config-data.js"
      );
      var C = n("./node_modules/@udemy/ud-api/dist/esm/index.js");
      function I(e, t) {
        return btoa(`${e}:${t}`);
      }
      function A(e) {
        return atob(e);
      }
      function O(e) {
        return parseInt(A(e).split(":")[1], 10);
      }
      async function T(e) {
        let t =
          arguments.length > 1 && arguments[1] !== undefined
            ? arguments[1]
            : {};
        const n = Object(w["a"])();
        try {
          const r = await _.a.post(n.graphql_federation_endpoint, e, {
            headers: {
              "Content-Type": "application/json",
              ...Object(C["a"])(),
              ...t,
            },
          });
          const s = r.data || {};
          if (s.errors) {
            return Promise.reject({ ...s, statusCode: r.status });
          }
          return s;
        } catch (e) {
          const t = e;
          const n = t.response || {};
          return Promise.reject({ ...n.data, statusCode: n.status });
        }
      }
      n.d(t, "b", function () {
        return R;
      });
      n.d(t, "a", function () {
        return T;
      });
    },
    "./node_modules/@udemy/graphql/node_modules/js-cookie/dist/js.cookie.js":
      function (e, t, n) {
        (function (t, n) {
          true ? (e.exports = n()) : undefined;
        })(this, function () {
          "use strict";
          function e(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n) {
                e[r] = n[r];
              }
            }
            return e;
          }
          var t = {
            read: function (e) {
              if (e[0] === '"') {
                e = e.slice(1, -1);
              }
              return e.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent);
            },
            write: function (e) {
              return encodeURIComponent(e).replace(
                /%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,
                decodeURIComponent
              );
            },
          };
          function n(t, r) {
            function s(n, s, i) {
              if (typeof document === "undefined") {
                return;
              }
              i = e({}, r, i);
              if (typeof i.expires === "number") {
                i.expires = new Date(Date.now() + i.expires * 864e5);
              }
              if (i.expires) {
                i.expires = i.expires.toUTCString();
              }
              n = encodeURIComponent(n)
                .replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent)
                .replace(/[()]/g, escape);
              var o = "";
              for (var u in i) {
                if (!i[u]) {
                  continue;
                }
                o += "; " + u;
                if (i[u] === true) {
                  continue;
                }
                o += "=" + i[u].split(";")[0];
              }
              return (document.cookie = n + "=" + t.write(s, n) + o);
            }
            function i(e) {
              if (typeof document === "undefined" || (arguments.length && !e)) {
                return;
              }
              var n = document.cookie ? document.cookie.split("; ") : [];
              var r = {};
              for (var s = 0; s < n.length; s++) {
                var i = n[s].split("=");
                var o = i.slice(1).join("=");
                try {
                  var u = decodeURIComponent(i[0]);
                  r[u] = t.read(o, u);
                  if (e === u) {
                    break;
                  }
                } catch (e) {}
              }
              return e ? r[e] : r;
            }
            return Object.create(
              {
                set: s,
                get: i,
                remove: function (t, n) {
                  s(t, "", e({}, n, { expires: -1 }));
                },
                withAttributes: function (t) {
                  return n(this.converter, e({}, this.attributes, t));
                },
                withConverter: function (t) {
                  return n(e({}, this.converter, t), this.attributes);
                },
              },
              {
                attributes: { value: Object.freeze(r) },
                converter: { value: Object.freeze(t) },
              }
            );
          }
          var r = n(t, { path: "/" });
          return r;
        });
      },
    "./node_modules/@udemy/sentry/dist/esm/index.js": function (e, t, n) {
      "use strict";
      function r() {
        if (typeof window === "undefined") {
          return true;
        } else {
          return !!window.URLSearchParams;
        }
      }
      function s() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) {
          t[n] = arguments[n];
        }
        return function (e) {
          return t.reduce((e, t) => {
            if (!e) {
              return null;
            }
            return t(e);
          }, e);
        };
      }
      const i = function (e) {
        return r() ? e : null;
      };
      const o = function (e) {
        a(e).forEach((e) => {
          if (e.filename && !e.filename.endsWith(".js")) {
            e.filename = "<not-a-js-file-see-@udemy-sentry>";
          }
        });
        return e;
      };
      const u = function (e) {
        var t, n;
        const r = a(e);
        if (
          r.length > 0 &&
          (t = r[r.length - 1]) !== null &&
          t !== void 0 &&
          (n = t.filename) !== null &&
          n !== void 0 &&
          n.includes("videojs")
        ) {
          if (e) {
            e.fingerprint = ["videojs"];
          }
        }
        return e;
      };
      const a = function (e) {
        var t;
        const n =
          ((e === null || e === void 0 ? void 0 : e.exception) &&
            (e === null || e === void 0
              ? void 0
              : (t = e.exception) === null || t === void 0
              ? void 0
              : t.values)) ||
          [];
        if (n.length > 0) {
          const e = n[0];
          return (e.stacktrace && e.stacktrace.frames) || [];
        }
        return [];
      };
      function c(e) {
        return s(i, u, o)(e);
      }
      const l = [
        /^Blocked a frame with origin.*Protocols, domains, and ports must match/,
        "__gCrWeb.autofill.extractForms",
        "ResizeObserver loop limit exceeded",
        /window\.setupAdForm/,
        /_avast_submit/,
        /vid_mate_check/,
        /__show__deepen is not defined/,
        /NS_ERROR_NOT_INITIALIZED/,
        /Loading chunk [^ ]* failed/,
        /Previously handled exception: /,
        /['"]vdata\d+['"]/,
        /\$compile:tpload.*Failed to load template:.*display_type=popup.*HTTP status: (-1|403)/,
        'can\'t redefine non-configurable property "userAgent"',
        "_isMatchingDomain is not defined",
        /^Failed to execute 'postMessage' on 'Window'.*could not be cloned/,
        /Unexpected token else/,
        "top.GLOBALS",
        "originalCreateNotification",
        "canvas.contentDocument",
        "MyApp_RemoveAllHighlights",
        "http://tt.epicplay.com",
        "Can't find variable: ZiteReader",
        "jigsaw is not defined",
        "ComboSearch is not defined",
        "http://loading.retry.widdit.com/",
        "atomicFindClose",
        "fb_xd_fragment",
        "bmi_SafeAddOnload",
        "EBCallBackMessageReceived",
        "conduitPage",
        "Request aborted",
        /^Network Error$/,
        new RegExp(".*timeout of .* exceeded.*"),
        "Cannot read property 'currentTime' of null",
        "Cannot read property 'play' of null",
        "null has no properties",
        "videojs",
      ];
      class d {
        constructor() {
          this.sentryInstance = void 0;
        }
        setSentryInstance(e) {
          this.sentryInstance = e;
        }
        initializeSentry(e, t) {
          if (!t.ignoreErrors) {
            t.ignoreErrors = l;
          }
          try {
            e.init(t);
          } catch (e) {
            console.error(e);
          }
          this.setSentryInstance(e);
        }
        initializeSentryContext(e) {
          const { user_id: t, ...n } = e;
          if (e.user_id) {
            this.sentryInstance.setUser({ id: t });
          }
          this.sentryInstance.setTags({ ...n });
        }
        captureException(e) {
          if (this.sentryInstance) {
            console.error("Sentry.captureException called with:", e);
            this.sentryInstance.captureException(e);
          }
        }
      }
      const f = new d();
      const h = f.captureException.bind(f);
      n.d(t, "b", function () {
        return f;
      });
      n.d(t, "a", function () {
        return h;
      });
    },
    "./node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.production.min.js":
      function (e, t, n) {
        "use strict";
        var r = n("./node_modules/react/index.js");
        function s(e, t) {
          return (
            (e === t && (0 !== e || 1 / e === 1 / t)) || (e !== e && t !== t)
          );
        }
        var i = "function" === typeof Object.is ? Object.is : s,
          o = r.useState,
          u = r.useEffect,
          a = r.useLayoutEffect,
          c = r.useDebugValue;
        function l(e, t) {
          var n = t(),
            r = o({ inst: { value: n, getSnapshot: t } }),
            s = r[0].inst,
            i = r[1];
          a(
            function () {
              s.value = n;
              s.getSnapshot = t;
              d(s) && i({ inst: s });
            },
            [e, n, t]
          );
          u(
            function () {
              d(s) && i({ inst: s });
              return e(function () {
                d(s) && i({ inst: s });
              });
            },
            [e]
          );
          c(n);
          return n;
        }
        function d(e) {
          var t = e.getSnapshot;
          e = e.value;
          try {
            var n = t();
            return !i(e, n);
          } catch (e) {
            return !0;
          }
        }
        function f(e, t) {
          return t();
        }
        var h =
          "undefined" === typeof window ||
          "undefined" === typeof window.document ||
          "undefined" === typeof window.document.createElement
            ? f
            : l;
        t.useSyncExternalStore =
          void 0 !== r.useSyncExternalStore ? r.useSyncExternalStore : h;
      },
    "./node_modules/use-sync-external-store/shim/index.js": function (e, t, n) {
      "use strict";
      if (true) {
        e.exports = n(
          "./node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.production.min.js"
        );
      } else {
      }
    },
    "./src/udemy/js/braze/bootstrap.js": function (e, t, n) {
      "use strict";
      n.r(t);
      n.d(t, "bootstrap", function () {
        return s;
      });
      var r = n("./node_modules/@udemy/braze/dist/esm/index.js");
      const s = r["a"];
    },
  },
]);
//# sourceMappingURL=braze.a498efc63f5daaea76bd.js.map