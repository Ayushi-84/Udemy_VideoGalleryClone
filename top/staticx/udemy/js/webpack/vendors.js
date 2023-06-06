(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  [
    "vendors~common-desktop-udlite-app~common-mobile-udlite-app~common-ufb-desktop-udlite-app~common-ufb-~f336ceb7",
  ],
  {
    "./node_modules/@udemy/event-tracking/node_modules/store/src/store-engine.js":
      function (e, t, r) {
        var n = r(
          "./node_modules/@udemy/event-tracking/node_modules/store/src/util.js"
        );
        var i = n.slice;
        var o = n.pluck;
        var s = n.each;
        var u = n.bind;
        var a = n.create;
        var c = n.isList;
        var l = n.isFunction;
        var f = n.isObject;
        e.exports = { createStore: v };
        var d = {
          version: "2.0.12",
          enabled: false,
          get: function (e, t) {
            var r = this.storage.read(this._namespacePrefix + e);
            return this._deserialize(r, t);
          },
          set: function (e, t) {
            if (t === undefined) {
              return this.remove(e);
            }
            this.storage.write(this._namespacePrefix + e, this._serialize(t));
            return t;
          },
          remove: function (e) {
            this.storage.remove(this._namespacePrefix + e);
          },
          each: function (e) {
            var t = this;
            this.storage.each(function (r, n) {
              e.call(
                t,
                t._deserialize(r),
                (n || "").replace(t._namespaceRegexp, "")
              );
            });
          },
          clearAll: function () {
            this.storage.clearAll();
          },
          hasNamespace: function (e) {
            return this._namespacePrefix == "__storejs_" + e + "_";
          },
          createStore: function () {
            return v.apply(this, arguments);
          },
          addPlugin: function (e) {
            this._addPlugin(e);
          },
          namespace: function (e) {
            return v(this.storage, this.plugins, e);
          },
        };
        function h() {
          var e = typeof console == "undefined" ? null : console;
          if (!e) {
            return;
          }
          var t = e.warn ? e.warn : e.log;
          t.apply(e, arguments);
        }
        function v(e, t, r) {
          if (!r) {
            r = "";
          }
          if (e && !c(e)) {
            e = [e];
          }
          if (t && !c(t)) {
            t = [t];
          }
          var n = r ? "__storejs_" + r + "_" : "";
          var v = r ? new RegExp("^" + n) : null;
          var p = /^[a-zA-Z0-9_\-]*$/;
          if (!p.test(r)) {
            throw new Error(
              "store.js namespaces can only have alphanumerics + underscores and dashes"
            );
          }
          var y = {
            _namespacePrefix: n,
            _namespaceRegexp: v,
            _testStorage: function (e) {
              try {
                var t = "__storejs__test__";
                e.write(t, t);
                var r = e.read(t) === t;
                e.remove(t);
                return r;
              } catch (e) {
                return false;
              }
            },
            _assignPluginFnProp: function (e, t) {
              var r = this[t];
              this[t] = function t() {
                var n = i(arguments, 0);
                var o = this;
                function u() {
                  if (!r) {
                    return;
                  }
                  s(arguments, function (e, t) {
                    n[t] = e;
                  });
                  return r.apply(o, n);
                }
                var a = [u].concat(n);
                return e.apply(o, a);
              };
            },
            _serialize: function (e) {
              return JSON.stringify(e);
            },
            _deserialize: function (e, t) {
              if (!e) {
                return t;
              }
              var r = "";
              try {
                r = JSON.parse(e);
              } catch (t) {
                r = e;
              }
              return r !== undefined ? r : t;
            },
            _addStorage: function (e) {
              if (this.enabled) {
                return;
              }
              if (this._testStorage(e)) {
                this.storage = e;
                this.enabled = true;
              }
            },
            _addPlugin: function (e) {
              var t = this;
              if (c(e)) {
                s(e, function (e) {
                  t._addPlugin(e);
                });
                return;
              }
              var r = o(this.plugins, function (t) {
                return e === t;
              });
              if (r) {
                return;
              }
              this.plugins.push(e);
              if (!l(e)) {
                throw new Error(
                  "Plugins must be function values that return objects"
                );
              }
              var n = e.call(this);
              if (!f(n)) {
                throw new Error(
                  "Plugins must return an object of function properties"
                );
              }
              s(n, function (r, n) {
                if (!l(r)) {
                  throw new Error(
                    "Bad plugin property: " +
                      n +
                      " from plugin " +
                      e.name +
                      ". Plugins should only return functions."
                  );
                }
                t._assignPluginFnProp(r, n);
              });
            },
            addStorage: function (e) {
              h(
                "store.addStorage(storage) is deprecated. Use createStore([storages])"
              );
              this._addStorage(e);
            },
          };
          var m = a(y, d, { plugins: [] });
          m.raw = {};
          s(m, function (e, t) {
            if (l(e)) {
              m.raw[t] = u(m, e);
            }
          });
          s(e, function (e) {
            m._addStorage(e);
          });
          s(t, function (e) {
            m._addPlugin(e);
          });
          return m;
        }
      },
    "./node_modules/@udemy/event-tracking/node_modules/store/src/util.js":
      function (e, t, r) {
        (function (t) {
          var r = s();
          var n = u();
          var i = a();
          var o = typeof window !== "undefined" ? window : t;
          e.exports = {
            assign: r,
            create: n,
            trim: i,
            bind: c,
            slice: l,
            each: f,
            map: d,
            pluck: h,
            isList: v,
            isFunction: p,
            isObject: y,
            Global: o,
          };
          function s() {
            if (Object.assign) {
              return Object.assign;
            } else {
              return function e(t, r, n, i) {
                for (var o = 1; o < arguments.length; o++) {
                  f(Object(arguments[o]), function (e, r) {
                    t[r] = e;
                  });
                }
                return t;
              };
            }
          }
          function u() {
            if (Object.create) {
              return function e(t, n, i, o) {
                var s = l(arguments, 1);
                return r.apply(this, [Object.create(t)].concat(s));
              };
            } else {
              function e() {}
              return function t(n, i, o, s) {
                var u = l(arguments, 1);
                e.prototype = n;
                return r.apply(this, [new e()].concat(u));
              };
            }
          }
          function a() {
            if (String.prototype.trim) {
              return function e(t) {
                return String.prototype.trim.call(t);
              };
            } else {
              return function e(t) {
                return t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
              };
            }
          }
          function c(e, t) {
            return function () {
              return t.apply(e, Array.prototype.slice.call(arguments, 0));
            };
          }
          function l(e, t) {
            return Array.prototype.slice.call(e, t || 0);
          }
          function f(e, t) {
            h(e, function (e, r) {
              t(e, r);
              return false;
            });
          }
          function d(e, t) {
            var r = v(e) ? [] : {};
            h(e, function (e, n) {
              r[n] = t(e, n);
              return false;
            });
            return r;
          }
          function h(e, t) {
            if (v(e)) {
              for (var r = 0; r < e.length; r++) {
                if (t(e[r], r)) {
                  return e[r];
                }
              }
            } else {
              for (var n in e) {
                if (e.hasOwnProperty(n)) {
                  if (t(e[n], n)) {
                    return e[n];
                  }
                }
              }
            }
          }
          function v(e) {
            return (
              e != null && typeof e != "function" && typeof e.length == "number"
            );
          }
          function p(e) {
            return e && {}.toString.call(e) === "[object Function]";
          }
          function y(e) {
            return e && {}.toString.call(e) === "[object Object]";
          }
        }).call(this, r("./node_modules/webpack/buildin/global.js"));
      },
    "./node_modules/@udemy/event-tracking/node_modules/store/storages/localStorage.js":
      function (e, t, r) {
        var n = r(
          "./node_modules/@udemy/event-tracking/node_modules/store/src/util.js"
        );
        var i = n.Global;
        e.exports = {
          name: "localStorage",
          read: s,
          write: u,
          each: a,
          remove: c,
          clearAll: l,
        };
        function o() {
          return i.localStorage;
        }
        function s(e) {
          return o().getItem(e);
        }
        function u(e, t) {
          return o().setItem(e, t);
        }
        function a(e) {
          for (var t = o().length - 1; t >= 0; t--) {
            var r = o().key(t);
            e(s(r), r);
          }
        }
        function c(e) {
          return o().removeItem(e);
        }
        function l() {
          return o().clear();
        }
      },
    "./node_modules/@udemy/event-tracking/node_modules/store/storages/memoryStorage.js":
      function (e, t) {
        e.exports = {
          name: "memoryStorage",
          read: n,
          write: i,
          each: o,
          remove: s,
          clearAll: u,
        };
        var r = {};
        function n(e) {
          return r[e];
        }
        function i(e, t) {
          r[e] = t;
        }
        function o(e) {
          for (var t in r) {
            if (r.hasOwnProperty(t)) {
              e(r[t], t);
            }
          }
        }
        function s(e) {
          delete r[e];
        }
        function u(e) {
          r = {};
        }
      },
    "./node_modules/@udemy/shared-utils/node_modules/qs/lib/formats.js":
      function (e, t, r) {
        "use strict";
        var n = String.prototype.replace;
        var i = /%20/g;
        var o = { RFC1738: "RFC1738", RFC3986: "RFC3986" };
        e.exports = {
          default: o.RFC3986,
          formatters: {
            RFC1738: function (e) {
              return n.call(e, i, "+");
            },
            RFC3986: function (e) {
              return String(e);
            },
          },
          RFC1738: o.RFC1738,
          RFC3986: o.RFC3986,
        };
      },
    "./node_modules/@udemy/shared-utils/node_modules/qs/lib/index.js":
      function (e, t, r) {
        "use strict";
        var n = r(
          "./node_modules/@udemy/shared-utils/node_modules/qs/lib/stringify.js"
        );
        var i = r(
          "./node_modules/@udemy/shared-utils/node_modules/qs/lib/parse.js"
        );
        var o = r(
          "./node_modules/@udemy/shared-utils/node_modules/qs/lib/formats.js"
        );
        e.exports = { formats: o, parse: i, stringify: n };
      },
    "./node_modules/@udemy/shared-utils/node_modules/qs/lib/parse.js":
      function (e, t, r) {
        "use strict";
        var n = r(
          "./node_modules/@udemy/shared-utils/node_modules/qs/lib/utils.js"
        );
        var i = Object.prototype.hasOwnProperty;
        var o = Array.isArray;
        var s = {
          allowDots: false,
          allowPrototypes: false,
          allowSparse: false,
          arrayLimit: 20,
          charset: "utf-8",
          charsetSentinel: false,
          comma: false,
          decoder: n.decode,
          delimiter: "&",
          depth: 5,
          ignoreQueryPrefix: false,
          interpretNumericEntities: false,
          parameterLimit: 1e3,
          parseArrays: true,
          plainObjects: false,
          strictNullHandling: false,
        };
        var u = function (e) {
          return e.replace(/&#(\d+);/g, function (e, t) {
            return String.fromCharCode(parseInt(t, 10));
          });
        };
        var a = function (e, t) {
          if (e && typeof e === "string" && t.comma && e.indexOf(",") > -1) {
            return e.split(",");
          }
          return e;
        };
        var c = "utf8=%26%2310003%3B";
        var l = "utf8=%E2%9C%93";
        var f = function e(t, r) {
          var f = {};
          var d = r.ignoreQueryPrefix ? t.replace(/^\?/, "") : t;
          var h = r.parameterLimit === Infinity ? undefined : r.parameterLimit;
          var v = d.split(r.delimiter, h);
          var p = -1;
          var y;
          var m = r.charset;
          if (r.charsetSentinel) {
            for (y = 0; y < v.length; ++y) {
              if (v[y].indexOf("utf8=") === 0) {
                if (v[y] === l) {
                  m = "utf-8";
                } else if (v[y] === c) {
                  m = "iso-8859-1";
                }
                p = y;
                y = v.length;
              }
            }
          }
          for (y = 0; y < v.length; ++y) {
            if (y === p) {
              continue;
            }
            var b = v[y];
            var g = b.indexOf("]=");
            var j = g === -1 ? b.indexOf("=") : g + 1;
            var O, _;
            if (j === -1) {
              O = r.decoder(b, s.decoder, m, "key");
              _ = r.strictNullHandling ? null : "";
            } else {
              O = r.decoder(b.slice(0, j), s.decoder, m, "key");
              _ = n.maybeMap(a(b.slice(j + 1), r), function (e) {
                return r.decoder(e, s.decoder, m, "value");
              });
            }
            if (_ && r.interpretNumericEntities && m === "iso-8859-1") {
              _ = u(_);
            }
            if (b.indexOf("[]=") > -1) {
              _ = o(_) ? [_] : _;
            }
            if (i.call(f, O)) {
              f[O] = n.combine(f[O], _);
            } else {
              f[O] = _;
            }
          }
          return f;
        };
        var d = function (e, t, r, n) {
          var i = n ? t : a(t, r);
          for (var o = e.length - 1; o >= 0; --o) {
            var s;
            var u = e[o];
            if (u === "[]" && r.parseArrays) {
              s = [].concat(i);
            } else {
              s = r.plainObjects ? Object.create(null) : {};
              var c =
                u.charAt(0) === "[" && u.charAt(u.length - 1) === "]"
                  ? u.slice(1, -1)
                  : u;
              var l = parseInt(c, 10);
              if (!r.parseArrays && c === "") {
                s = { 0: i };
              } else if (
                !isNaN(l) &&
                u !== c &&
                String(l) === c &&
                l >= 0 &&
                r.parseArrays &&
                l <= r.arrayLimit
              ) {
                s = [];
                s[l] = i;
              } else if (c !== "__proto__") {
                s[c] = i;
              }
            }
            i = s;
          }
          return i;
        };
        var h = function e(t, r, n, o) {
          if (!t) {
            return;
          }
          var s = n.allowDots ? t.replace(/\.([^.[]+)/g, "[$1]") : t;
          var u = /(\[[^[\]]*])/;
          var a = /(\[[^[\]]*])/g;
          var c = n.depth > 0 && u.exec(s);
          var l = c ? s.slice(0, c.index) : s;
          var f = [];
          if (l) {
            if (!n.plainObjects && i.call(Object.prototype, l)) {
              if (!n.allowPrototypes) {
                return;
              }
            }
            f.push(l);
          }
          var h = 0;
          while (n.depth > 0 && (c = a.exec(s)) !== null && h < n.depth) {
            h += 1;
            if (
              !n.plainObjects &&
              i.call(Object.prototype, c[1].slice(1, -1))
            ) {
              if (!n.allowPrototypes) {
                return;
              }
            }
            f.push(c[1]);
          }
          if (c) {
            f.push("[" + s.slice(c.index) + "]");
          }
          return d(f, r, n, o);
        };
        var v = function e(t) {
          if (!t) {
            return s;
          }
          if (
            t.decoder !== null &&
            t.decoder !== undefined &&
            typeof t.decoder !== "function"
          ) {
            throw new TypeError("Decoder has to be a function.");
          }
          if (
            typeof t.charset !== "undefined" &&
            t.charset !== "utf-8" &&
            t.charset !== "iso-8859-1"
          ) {
            throw new TypeError(
              "The charset option must be either utf-8, iso-8859-1, or undefined"
            );
          }
          var r = typeof t.charset === "undefined" ? s.charset : t.charset;
          return {
            allowDots:
              typeof t.allowDots === "undefined" ? s.allowDots : !!t.allowDots,
            allowPrototypes:
              typeof t.allowPrototypes === "boolean"
                ? t.allowPrototypes
                : s.allowPrototypes,
            allowSparse:
              typeof t.allowSparse === "boolean"
                ? t.allowSparse
                : s.allowSparse,
            arrayLimit:
              typeof t.arrayLimit === "number" ? t.arrayLimit : s.arrayLimit,
            charset: r,
            charsetSentinel:
              typeof t.charsetSentinel === "boolean"
                ? t.charsetSentinel
                : s.charsetSentinel,
            comma: typeof t.comma === "boolean" ? t.comma : s.comma,
            decoder: typeof t.decoder === "function" ? t.decoder : s.decoder,
            delimiter:
              typeof t.delimiter === "string" || n.isRegExp(t.delimiter)
                ? t.delimiter
                : s.delimiter,
            depth:
              typeof t.depth === "number" || t.depth === false
                ? +t.depth
                : s.depth,
            ignoreQueryPrefix: t.ignoreQueryPrefix === true,
            interpretNumericEntities:
              typeof t.interpretNumericEntities === "boolean"
                ? t.interpretNumericEntities
                : s.interpretNumericEntities,
            parameterLimit:
              typeof t.parameterLimit === "number"
                ? t.parameterLimit
                : s.parameterLimit,
            parseArrays: t.parseArrays !== false,
            plainObjects:
              typeof t.plainObjects === "boolean"
                ? t.plainObjects
                : s.plainObjects,
            strictNullHandling:
              typeof t.strictNullHandling === "boolean"
                ? t.strictNullHandling
                : s.strictNullHandling,
          };
        };
        e.exports = function (e, t) {
          var r = v(t);
          if (e === "" || e === null || typeof e === "undefined") {
            return r.plainObjects ? Object.create(null) : {};
          }
          var i = typeof e === "string" ? f(e, r) : e;
          var o = r.plainObjects ? Object.create(null) : {};
          var s = Object.keys(i);
          for (var u = 0; u < s.length; ++u) {
            var a = s[u];
            var c = h(a, i[a], r, typeof e === "string");
            o = n.merge(o, c, r);
          }
          if (r.allowSparse === true) {
            return o;
          }
          return n.compact(o);
        };
      },
    "./node_modules/@udemy/shared-utils/node_modules/qs/lib/stringify.js":
      function (e, t, r) {
        "use strict";
        var n = r("./node_modules/side-channel/index.js");
        var i = r(
          "./node_modules/@udemy/shared-utils/node_modules/qs/lib/utils.js"
        );
        var o = r(
          "./node_modules/@udemy/shared-utils/node_modules/qs/lib/formats.js"
        );
        var s = Object.prototype.hasOwnProperty;
        var u = {
          brackets: function e(t) {
            return t + "[]";
          },
          comma: "comma",
          indices: function e(t, r) {
            return t + "[" + r + "]";
          },
          repeat: function e(t) {
            return t;
          },
        };
        var a = Array.isArray;
        var c = Array.prototype.push;
        var l = function (e, t) {
          c.apply(e, a(t) ? t : [t]);
        };
        var f = Date.prototype.toISOString;
        var d = o["default"];
        var h = {
          addQueryPrefix: false,
          allowDots: false,
          charset: "utf-8",
          charsetSentinel: false,
          delimiter: "&",
          encode: true,
          encoder: i.encode,
          encodeValuesOnly: false,
          format: d,
          formatter: o.formatters[d],
          indices: false,
          serializeDate: function e(t) {
            return f.call(t);
          },
          skipNulls: false,
          strictNullHandling: false,
        };
        var v = function e(t) {
          return (
            typeof t === "string" ||
            typeof t === "number" ||
            typeof t === "boolean" ||
            typeof t === "symbol" ||
            typeof t === "bigint"
          );
        };
        var p = {};
        var y = function e(t, r, o, s, u, c, f, d, y, m, b, g, j, O, _, q) {
          var w = t;
          var C = q;
          var P = 0;
          var S = false;
          while ((C = C.get(p)) !== void undefined && !S) {
            var F = C.get(t);
            P += 1;
            if (typeof F !== "undefined") {
              if (F === P) {
                throw new RangeError("Cyclic object value");
              } else {
                S = true;
              }
            }
            if (typeof C.get(p) === "undefined") {
              P = 0;
            }
          }
          if (typeof d === "function") {
            w = d(r, w);
          } else if (w instanceof Date) {
            w = b(w);
          } else if (o === "comma" && a(w)) {
            w = i.maybeMap(w, function (e) {
              if (e instanceof Date) {
                return b(e);
              }
              return e;
            });
          }
          if (w === null) {
            if (u) {
              return f && !O ? f(r, h.encoder, _, "key", g) : r;
            }
            w = "";
          }
          if (v(w) || i.isBuffer(w)) {
            if (f) {
              var R = O ? r : f(r, h.encoder, _, "key", g);
              return [j(R) + "=" + j(f(w, h.encoder, _, "value", g))];
            }
            return [j(r) + "=" + j(String(w))];
          }
          var Q = [];
          if (typeof w === "undefined") {
            return Q;
          }
          var E;
          if (o === "comma" && a(w)) {
            if (O && f) {
              w = i.maybeMap(w, f);
            }
            E = [
              { value: w.length > 0 ? w.join(",") || null : void undefined },
            ];
          } else if (a(d)) {
            E = d;
          } else {
            var x = Object.keys(w);
            E = y ? x.sort(y) : x;
          }
          var M = s && a(w) && w.length === 1 ? r + "[]" : r;
          for (var A = 0; A < E.length; ++A) {
            var D = E[A];
            var L =
              typeof D === "object" && typeof D.value !== "undefined"
                ? D.value
                : w[D];
            if (c && L === null) {
              continue;
            }
            var T = a(w)
              ? typeof o === "function"
                ? o(M, D)
                : M
              : M + (m ? "." + D : "[" + D + "]");
            q.set(t, P);
            var U = n();
            U.set(p, q);
            l(
              Q,
              e(
                L,
                T,
                o,
                s,
                u,
                c,
                o === "comma" && O && a(w) ? null : f,
                d,
                y,
                m,
                b,
                g,
                j,
                O,
                _,
                U
              )
            );
          }
          return Q;
        };
        var m = function e(t) {
          if (!t) {
            return h;
          }
          if (
            t.encoder !== null &&
            typeof t.encoder !== "undefined" &&
            typeof t.encoder !== "function"
          ) {
            throw new TypeError("Encoder has to be a function.");
          }
          var r = t.charset || h.charset;
          if (
            typeof t.charset !== "undefined" &&
            t.charset !== "utf-8" &&
            t.charset !== "iso-8859-1"
          ) {
            throw new TypeError(
              "The charset option must be either utf-8, iso-8859-1, or undefined"
            );
          }
          var n = o["default"];
          if (typeof t.format !== "undefined") {
            if (!s.call(o.formatters, t.format)) {
              throw new TypeError("Unknown format option provided.");
            }
            n = t.format;
          }
          var i = o.formatters[n];
          var u = h.filter;
          if (typeof t.filter === "function" || a(t.filter)) {
            u = t.filter;
          }
          return {
            addQueryPrefix:
              typeof t.addQueryPrefix === "boolean"
                ? t.addQueryPrefix
                : h.addQueryPrefix,
            allowDots:
              typeof t.allowDots === "undefined" ? h.allowDots : !!t.allowDots,
            charset: r,
            charsetSentinel:
              typeof t.charsetSentinel === "boolean"
                ? t.charsetSentinel
                : h.charsetSentinel,
            delimiter:
              typeof t.delimiter === "undefined" ? h.delimiter : t.delimiter,
            encode: typeof t.encode === "boolean" ? t.encode : h.encode,
            encoder: typeof t.encoder === "function" ? t.encoder : h.encoder,
            encodeValuesOnly:
              typeof t.encodeValuesOnly === "boolean"
                ? t.encodeValuesOnly
                : h.encodeValuesOnly,
            filter: u,
            format: n,
            formatter: i,
            serializeDate:
              typeof t.serializeDate === "function"
                ? t.serializeDate
                : h.serializeDate,
            skipNulls:
              typeof t.skipNulls === "boolean" ? t.skipNulls : h.skipNulls,
            sort: typeof t.sort === "function" ? t.sort : null,
            strictNullHandling:
              typeof t.strictNullHandling === "boolean"
                ? t.strictNullHandling
                : h.strictNullHandling,
          };
        };
        e.exports = function (e, t) {
          var r = e;
          var i = m(t);
          var o;
          var s;
          if (typeof i.filter === "function") {
            s = i.filter;
            r = s("", r);
          } else if (a(i.filter)) {
            s = i.filter;
            o = s;
          }
          var c = [];
          if (typeof r !== "object" || r === null) {
            return "";
          }
          var f;
          if (t && t.arrayFormat in u) {
            f = t.arrayFormat;
          } else if (t && "indices" in t) {
            f = t.indices ? "indices" : "repeat";
          } else {
            f = "indices";
          }
          var d = u[f];
          if (
            t &&
            "commaRoundTrip" in t &&
            typeof t.commaRoundTrip !== "boolean"
          ) {
            throw new TypeError(
              "`commaRoundTrip` must be a boolean, or absent"
            );
          }
          var h = d === "comma" && t && t.commaRoundTrip;
          if (!o) {
            o = Object.keys(r);
          }
          if (i.sort) {
            o.sort(i.sort);
          }
          var v = n();
          for (var p = 0; p < o.length; ++p) {
            var b = o[p];
            if (i.skipNulls && r[b] === null) {
              continue;
            }
            l(
              c,
              y(
                r[b],
                b,
                d,
                h,
                i.strictNullHandling,
                i.skipNulls,
                i.encode ? i.encoder : null,
                i.filter,
                i.sort,
                i.allowDots,
                i.serializeDate,
                i.format,
                i.formatter,
                i.encodeValuesOnly,
                i.charset,
                v
              )
            );
          }
          var g = c.join(i.delimiter);
          var j = i.addQueryPrefix === true ? "?" : "";
          if (i.charsetSentinel) {
            if (i.charset === "iso-8859-1") {
              j += "utf8=%26%2310003%3B&";
            } else {
              j += "utf8=%E2%9C%93&";
            }
          }
          return g.length > 0 ? j + g : "";
        };
      },
    "./node_modules/@udemy/shared-utils/node_modules/qs/lib/utils.js":
      function (e, t, r) {
        "use strict";
        var n = r(
          "./node_modules/@udemy/shared-utils/node_modules/qs/lib/formats.js"
        );
        var i = Object.prototype.hasOwnProperty;
        var o = Array.isArray;
        var s = (function () {
          var e = [];
          for (var t = 0; t < 256; ++t) {
            e.push("%" + ((t < 16 ? "0" : "") + t.toString(16)).toUpperCase());
          }
          return e;
        })();
        var u = function e(t) {
          while (t.length > 1) {
            var r = t.pop();
            var n = r.obj[r.prop];
            if (o(n)) {
              var i = [];
              for (var s = 0; s < n.length; ++s) {
                if (typeof n[s] !== "undefined") {
                  i.push(n[s]);
                }
              }
              r.obj[r.prop] = i;
            }
          }
        };
        var a = function e(t, r) {
          var n = r && r.plainObjects ? Object.create(null) : {};
          for (var i = 0; i < t.length; ++i) {
            if (typeof t[i] !== "undefined") {
              n[i] = t[i];
            }
          }
          return n;
        };
        var c = function e(t, r, n) {
          if (!r) {
            return t;
          }
          if (typeof r !== "object") {
            if (o(t)) {
              t.push(r);
            } else if (t && typeof t === "object") {
              if (
                (n && (n.plainObjects || n.allowPrototypes)) ||
                !i.call(Object.prototype, r)
              ) {
                t[r] = true;
              }
            } else {
              return [t, r];
            }
            return t;
          }
          if (!t || typeof t !== "object") {
            return [t].concat(r);
          }
          var s = t;
          if (o(t) && !o(r)) {
            s = a(t, n);
          }
          if (o(t) && o(r)) {
            r.forEach(function (r, o) {
              if (i.call(t, o)) {
                var s = t[o];
                if (s && typeof s === "object" && r && typeof r === "object") {
                  t[o] = e(s, r, n);
                } else {
                  t.push(r);
                }
              } else {
                t[o] = r;
              }
            });
            return t;
          }
          return Object.keys(r).reduce(function (t, o) {
            var s = r[o];
            if (i.call(t, o)) {
              t[o] = e(t[o], s, n);
            } else {
              t[o] = s;
            }
            return t;
          }, s);
        };
        var l = function e(t, r) {
          return Object.keys(r).reduce(function (e, t) {
            e[t] = r[t];
            return e;
          }, t);
        };
        var f = function (e, t, r) {
          var n = e.replace(/\+/g, " ");
          if (r === "iso-8859-1") {
            return n.replace(/%[0-9a-f]{2}/gi, unescape);
          }
          try {
            return decodeURIComponent(n);
          } catch (e) {
            return n;
          }
        };
        var d = function e(t, r, i, o, u) {
          if (t.length === 0) {
            return t;
          }
          var a = t;
          if (typeof t === "symbol") {
            a = Symbol.prototype.toString.call(t);
          } else if (typeof t !== "string") {
            a = String(t);
          }
          if (i === "iso-8859-1") {
            return escape(a).replace(/%u[0-9a-f]{4}/gi, function (e) {
              return "%26%23" + parseInt(e.slice(2), 16) + "%3B";
            });
          }
          var c = "";
          for (var l = 0; l < a.length; ++l) {
            var f = a.charCodeAt(l);
            if (
              f === 45 ||
              f === 46 ||
              f === 95 ||
              f === 126 ||
              (f >= 48 && f <= 57) ||
              (f >= 65 && f <= 90) ||
              (f >= 97 && f <= 122) ||
              (u === n.RFC1738 && (f === 40 || f === 41))
            ) {
              c += a.charAt(l);
              continue;
            }
            if (f < 128) {
              c = c + s[f];
              continue;
            }
            if (f < 2048) {
              c = c + (s[192 | (f >> 6)] + s[128 | (f & 63)]);
              continue;
            }
            if (f < 55296 || f >= 57344) {
              c =
                c +
                (s[224 | (f >> 12)] +
                  s[128 | ((f >> 6) & 63)] +
                  s[128 | (f & 63)]);
              continue;
            }
            l += 1;
            f = 65536 + (((f & 1023) << 10) | (a.charCodeAt(l) & 1023));
            c +=
              s[240 | (f >> 18)] +
              s[128 | ((f >> 12) & 63)] +
              s[128 | ((f >> 6) & 63)] +
              s[128 | (f & 63)];
          }
          return c;
        };
        var h = function e(t) {
          var r = [{ obj: { o: t }, prop: "o" }];
          var n = [];
          for (var i = 0; i < r.length; ++i) {
            var o = r[i];
            var s = o.obj[o.prop];
            var a = Object.keys(s);
            for (var c = 0; c < a.length; ++c) {
              var l = a[c];
              var f = s[l];
              if (typeof f === "object" && f !== null && n.indexOf(f) === -1) {
                r.push({ obj: s, prop: l });
                n.push(f);
              }
            }
          }
          u(r);
          return t;
        };
        var v = function e(t) {
          return Object.prototype.toString.call(t) === "[object RegExp]";
        };
        var p = function e(t) {
          if (!t || typeof t !== "object") {
            return false;
          }
          return !!(
            t.constructor &&
            t.constructor.isBuffer &&
            t.constructor.isBuffer(t)
          );
        };
        var y = function e(t, r) {
          return [].concat(t, r);
        };
        var m = function e(t, r) {
          if (o(t)) {
            var n = [];
            for (var i = 0; i < t.length; i += 1) {
              n.push(r(t[i]));
            }
            return n;
          }
          return r(t);
        };
        e.exports = {
          arrayToObject: a,
          assign: l,
          combine: y,
          compact: h,
          decode: f,
          encode: d,
          isBuffer: p,
          isRegExp: v,
          maybeMap: m,
          merge: c,
        };
      },
    "./node_modules/react-query/es/core/focusManager.js": function (e, t, r) {
      "use strict";
      r.d(t, "a", function () {
        return u;
      });
      var n = r("./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
      var i = r("./node_modules/react-query/es/core/subscribable.js");
      var o = r("./node_modules/react-query/es/core/utils.js");
      var s = (function (e) {
        Object(n["a"])(t, e);
        function t() {
          return e.apply(this, arguments) || this;
        }
        var r = t.prototype;
        r.onSubscribe = function e() {
          if (!this.removeEventListener) {
            this.setDefaultEventListener();
          }
        };
        r.setEventListener = function e(t) {
          var r = this;
          if (this.removeEventListener) {
            this.removeEventListener();
          }
          this.removeEventListener = t(function (e) {
            if (typeof e === "boolean") {
              r.setFocused(e);
            } else {
              r.onFocus();
            }
          });
        };
        r.setFocused = function e(t) {
          this.focused = t;
          if (t) {
            this.onFocus();
          }
        };
        r.onFocus = function e() {
          this.listeners.forEach(function (e) {
            e();
          });
        };
        r.isFocused = function e() {
          if (typeof this.focused === "boolean") {
            return this.focused;
          }
          if (typeof document === "undefined") {
            return true;
          }
          return [undefined, "visible", "prerender"].includes(
            document.visibilityState
          );
        };
        r.setDefaultEventListener = function e() {
          var t;
          if (!o["f"] && ((t = window) == null ? void 0 : t.addEventListener)) {
            this.setEventListener(function (e) {
              window.addEventListener("visibilitychange", e, false);
              window.addEventListener("focus", e, false);
              return function () {
                window.removeEventListener("visibilitychange", e);
                window.removeEventListener("focus", e);
              };
            });
          }
        };
        return t;
      })(i["a"]);
      var u = new s();
    },
    "./node_modules/react-query/es/core/index.js": function (e, t, r) {
      "use strict";
      var n = r("./node_modules/react-query/es/core/queryClient.js");
      r.d(t, "QueryClient", function () {
        return n["a"];
      });
      var i = r("./node_modules/react-query/es/core/types.js");
      var o = r.n(i);
      if (r.o(i, "QueryClientProvider"))
        r.d(t, "QueryClientProvider", function () {
          return i["QueryClientProvider"];
        });
      if (r.o(i, "useMutation"))
        r.d(t, "useMutation", function () {
          return i["useMutation"];
        });
      if (r.o(i, "useQuery"))
        r.d(t, "useQuery", function () {
          return i["useQuery"];
        });
    },
    "./node_modules/react-query/es/core/logger.js": function (e, t, r) {
      "use strict";
      r.d(t, "a", function () {
        return o;
      });
      r.d(t, "b", function () {
        return s;
      });
      var n = r("./node_modules/react-query/es/core/utils.js");
      var i = console || { error: n["i"], warn: n["i"], log: n["i"] };
      function o() {
        return i;
      }
      function s(e) {
        i = e;
      }
    },
    "./node_modules/react-query/es/core/mutation.js": function (e, t, r) {
      "use strict";
      r.d(t, "a", function () {
        return a;
      });
      r.d(t, "b", function () {
        return c;
      });
      var n = r("./node_modules/@babel/runtime/helpers/esm/extends.js");
      var i = r("./node_modules/react-query/es/core/logger.js");
      var o = r("./node_modules/react-query/es/core/notifyManager.js");
      var s = r("./node_modules/react-query/es/core/retryer.js");
      var u = r("./node_modules/react-query/es/core/utils.js");
      var a = (function () {
        function e(e) {
          this.options = Object(n["a"])({}, e.defaultOptions, e.options);
          this.mutationId = e.mutationId;
          this.mutationCache = e.mutationCache;
          this.observers = [];
          this.state = e.state || c();
        }
        var t = e.prototype;
        t.setState = function e(t) {
          this.dispatch({ type: "setState", state: t });
        };
        t.addObserver = function e(t) {
          if (this.observers.indexOf(t) === -1) {
            this.observers.push(t);
          }
        };
        t.removeObserver = function e(t) {
          this.observers = this.observers.filter(function (e) {
            return e !== t;
          });
        };
        t.cancel = function e() {
          if (this.retryer) {
            this.retryer.cancel();
            return this.retryer.promise.then(u["i"]).catch(u["i"]);
          }
          return Promise.resolve();
        };
        t.continue = function e() {
          if (this.retryer) {
            this.retryer.continue();
            return this.retryer.promise;
          }
          return this.execute();
        };
        t.execute = function e() {
          var t = this;
          var r;
          var n = this.state.status === "loading";
          var o = Promise.resolve();
          if (!n) {
            this.dispatch({
              type: "loading",
              variables: this.options.variables,
            });
            o = o
              .then(function () {
                return t.options.onMutate == null
                  ? void 0
                  : t.options.onMutate(t.state.variables);
              })
              .then(function (e) {
                if (e !== t.state.context) {
                  t.dispatch({
                    type: "loading",
                    context: e,
                    variables: t.state.variables,
                  });
                }
              });
          }
          return o
            .then(function () {
              return t.executeMutation();
            })
            .then(function (e) {
              r = e;
            })
            .then(function () {
              return t.options.onSuccess == null
                ? void 0
                : t.options.onSuccess(r, t.state.variables, t.state.context);
            })
            .then(function () {
              return t.options.onSettled == null
                ? void 0
                : t.options.onSettled(
                    r,
                    null,
                    t.state.variables,
                    t.state.context
                  );
            })
            .then(function () {
              t.dispatch({ type: "success", data: r });
              return r;
            })
            .catch(function (e) {
              if (t.mutationCache.config.onError) {
                t.mutationCache.config.onError(
                  e,
                  t.state.variables,
                  t.state.context,
                  t
                );
              }
              Object(i["a"])().error(e);
              return Promise.resolve()
                .then(function () {
                  return t.options.onError == null
                    ? void 0
                    : t.options.onError(e, t.state.variables, t.state.context);
                })
                .then(function () {
                  return t.options.onSettled == null
                    ? void 0
                    : t.options.onSettled(
                        undefined,
                        e,
                        t.state.variables,
                        t.state.context
                      );
                })
                .then(function () {
                  t.dispatch({ type: "error", error: e });
                  throw e;
                });
            });
        };
        t.executeMutation = function e() {
          var t = this,
            r;
          this.retryer = new s["a"]({
            fn: function e() {
              if (!t.options.mutationFn) {
                return Promise.reject("No mutationFn found");
              }
              return t.options.mutationFn(t.state.variables);
            },
            onFail: function e() {
              t.dispatch({ type: "failed" });
            },
            onPause: function e() {
              t.dispatch({ type: "pause" });
            },
            onContinue: function e() {
              t.dispatch({ type: "continue" });
            },
            retry: (r = this.options.retry) != null ? r : 0,
            retryDelay: this.options.retryDelay,
          });
          return this.retryer.promise;
        };
        t.dispatch = function e(t) {
          var r = this;
          this.state = l(this.state, t);
          o["a"].batch(function () {
            r.observers.forEach(function (e) {
              e.onMutationUpdate(t);
            });
            r.mutationCache.notify(r);
          });
        };
        return e;
      })();
      function c() {
        return {
          context: undefined,
          data: undefined,
          error: null,
          failureCount: 0,
          isPaused: false,
          status: "idle",
          variables: undefined,
        };
      }
      function l(e, t) {
        switch (t.type) {
          case "failed":
            return Object(n["a"])({}, e, { failureCount: e.failureCount + 1 });
          case "pause":
            return Object(n["a"])({}, e, { isPaused: true });
          case "continue":
            return Object(n["a"])({}, e, { isPaused: false });
          case "loading":
            return Object(n["a"])({}, e, {
              context: t.context,
              data: undefined,
              error: null,
              isPaused: false,
              status: "loading",
              variables: t.variables,
            });
          case "success":
            return Object(n["a"])({}, e, {
              data: t.data,
              error: null,
              status: "success",
              isPaused: false,
            });
          case "error":
            return Object(n["a"])({}, e, {
              data: undefined,
              error: t.error,
              failureCount: e.failureCount + 1,
              isPaused: false,
              status: "error",
            });
          case "setState":
            return Object(n["a"])({}, e, t.state);
          default:
            return e;
        }
      }
    },
    "./node_modules/react-query/es/core/mutationCache.js": function (e, t, r) {
      "use strict";
      r.d(t, "a", function () {
        return a;
      });
      var n = r("./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
      var i = r("./node_modules/react-query/es/core/notifyManager.js");
      var o = r("./node_modules/react-query/es/core/mutation.js");
      var s = r("./node_modules/react-query/es/core/utils.js");
      var u = r("./node_modules/react-query/es/core/subscribable.js");
      var a = (function (e) {
        Object(n["a"])(t, e);
        function t(t) {
          var r;
          r = e.call(this) || this;
          r.config = t || {};
          r.mutations = [];
          r.mutationId = 0;
          return r;
        }
        var r = t.prototype;
        r.build = function e(t, r, n) {
          var i = new o["a"]({
            mutationCache: this,
            mutationId: ++this.mutationId,
            options: t.defaultMutationOptions(r),
            state: n,
            defaultOptions: r.mutationKey
              ? t.getMutationDefaults(r.mutationKey)
              : undefined,
          });
          this.add(i);
          return i;
        };
        r.add = function e(t) {
          this.mutations.push(t);
          this.notify(t);
        };
        r.remove = function e(t) {
          this.mutations = this.mutations.filter(function (e) {
            return e !== t;
          });
          t.cancel();
          this.notify(t);
        };
        r.clear = function e() {
          var t = this;
          i["a"].batch(function () {
            t.mutations.forEach(function (e) {
              t.remove(e);
            });
          });
        };
        r.getAll = function e() {
          return this.mutations;
        };
        r.notify = function e(t) {
          var r = this;
          i["a"].batch(function () {
            r.listeners.forEach(function (e) {
              e(t);
            });
          });
        };
        r.onFocus = function e() {
          this.resumePausedMutations();
        };
        r.onOnline = function e() {
          this.resumePausedMutations();
        };
        r.resumePausedMutations = function e() {
          var t = this.mutations.filter(function (e) {
            return e.state.isPaused;
          });
          return i["a"].batch(function () {
            return t.reduce(function (e, t) {
              return e.then(function () {
                return t.continue().catch(s["i"]);
              });
            }, Promise.resolve());
          });
        };
        return t;
      })(u["a"]);
    },
    "./node_modules/react-query/es/core/mutationObserver.js": function (
      e,
      t,
      r
    ) {
      "use strict";
      r.d(t, "a", function () {
        return c;
      });
      var n = r("./node_modules/@babel/runtime/helpers/esm/extends.js");
      var i = r("./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
      var o = r("./node_modules/react-query/es/core/mutation.js");
      var s = r("./node_modules/react-query/es/core/notifyManager.js");
      var u = r("./node_modules/react-query/es/core/subscribable.js");
      var a = r("./node_modules/react-query/es/core/utils.js");
      var c = (function (e) {
        Object(i["a"])(t, e);
        function t(t, r) {
          var n;
          n = e.call(this) || this;
          n.client = t;
          n.setOptions(r);
          n.bindMethods();
          n.updateResult();
          return n;
        }
        var r = t.prototype;
        r.bindMethods = function e() {
          this.mutate = this.mutate.bind(this);
          this.reset = this.reset.bind(this);
        };
        r.setOptions = function e(t) {
          this.options = this.client.defaultMutationOptions(t);
        };
        r.onUnsubscribe = function e() {
          if (!this.listeners.length) {
            var t;
            (t = this.currentMutation) == null
              ? void 0
              : t.removeObserver(this);
          }
        };
        r.onMutationUpdate = function e(t) {
          this.updateResult();
          var r = { listeners: true };
          if (t.type === "success") {
            r.onSuccess = true;
          } else if (t.type === "error") {
            r.onError = true;
          }
          this.notify(r);
        };
        r.getCurrentResult = function e() {
          return this.currentResult;
        };
        r.reset = function e() {
          this.currentMutation = undefined;
          this.updateResult();
          this.notify({ listeners: true });
        };
        r.mutate = function e(t, r) {
          this.mutateOptions = r;
          if (this.currentMutation) {
            this.currentMutation.removeObserver(this);
          }
          this.currentMutation = this.client
            .getMutationCache()
            .build(
              this.client,
              Object(n["a"])({}, this.options, {
                variables: t != null ? t : this.options.variables,
              })
            );
          this.currentMutation.addObserver(this);
          return this.currentMutation.execute();
        };
        r.updateResult = function e() {
          var t = this.currentMutation
            ? this.currentMutation.state
            : Object(o["b"])();
          this.currentResult = Object(n["a"])({}, t, Object(a["d"])(t.status), {
            mutate: this.mutate,
            reset: this.reset,
          });
        };
        r.notify = function e(t) {
          var r = this;
          s["a"].batch(function () {
            if (r.mutateOptions) {
              if (t.onSuccess) {
                r.mutateOptions.onSuccess == null
                  ? void 0
                  : r.mutateOptions.onSuccess(
                      r.currentResult.data,
                      r.currentResult.variables,
                      r.currentResult.context
                    );
                r.mutateOptions.onSettled == null
                  ? void 0
                  : r.mutateOptions.onSettled(
                      r.currentResult.data,
                      null,
                      r.currentResult.variables,
                      r.currentResult.context
                    );
              } else if (t.onError) {
                r.mutateOptions.onError == null
                  ? void 0
                  : r.mutateOptions.onError(
                      r.currentResult.error,
                      r.currentResult.variables,
                      r.currentResult.context
                    );
                r.mutateOptions.onSettled == null
                  ? void 0
                  : r.mutateOptions.onSettled(
                      undefined,
                      r.currentResult.error,
                      r.currentResult.variables,
                      r.currentResult.context
                    );
              }
            }
            if (t.listeners) {
              r.listeners.forEach(function (e) {
                e(r.currentResult);
              });
            }
          });
        };
        return t;
      })(u["a"]);
    },
    "./node_modules/react-query/es/core/notifyManager.js": function (e, t, r) {
      "use strict";
      r.d(t, "a", function () {
        return o;
      });
      var n = r("./node_modules/react-query/es/core/utils.js");
      var i = (function () {
        function e() {
          this.queue = [];
          this.transactions = 0;
          this.notifyFn = function (e) {
            e();
          };
          this.batchNotifyFn = function (e) {
            e();
          };
        }
        var t = e.prototype;
        t.batch = function e(t) {
          this.transactions++;
          var r = t();
          this.transactions--;
          if (!this.transactions) {
            this.flush();
          }
          return r;
        };
        t.schedule = function e(t) {
          var r = this;
          if (this.transactions) {
            this.queue.push(t);
          } else {
            Object(n["o"])(function () {
              r.notifyFn(t);
            });
          }
        };
        t.batchCalls = function e(t) {
          var r = this;
          return function () {
            for (
              var e = arguments.length, n = new Array(e), i = 0;
              i < e;
              i++
            ) {
              n[i] = arguments[i];
            }
            r.schedule(function () {
              t.apply(void 0, n);
            });
          };
        };
        t.flush = function e() {
          var t = this;
          var r = this.queue;
          this.queue = [];
          if (r.length) {
            Object(n["o"])(function () {
              t.batchNotifyFn(function () {
                r.forEach(function (e) {
                  t.notifyFn(e);
                });
              });
            });
          }
        };
        t.setNotifyFunction = function e(t) {
          this.notifyFn = t;
        };
        t.setBatchNotifyFunction = function e(t) {
          this.batchNotifyFn = t;
        };
        return e;
      })();
      var o = new i();
    },
    "./node_modules/react-query/es/core/onlineManager.js": function (e, t, r) {
      "use strict";
      r.d(t, "a", function () {
        return u;
      });
      var n = r("./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
      var i = r("./node_modules/react-query/es/core/subscribable.js");
      var o = r("./node_modules/react-query/es/core/utils.js");
      var s = (function (e) {
        Object(n["a"])(t, e);
        function t() {
          return e.apply(this, arguments) || this;
        }
        var r = t.prototype;
        r.onSubscribe = function e() {
          if (!this.removeEventListener) {
            this.setDefaultEventListener();
          }
        };
        r.setEventListener = function e(t) {
          var r = this;
          if (this.removeEventListener) {
            this.removeEventListener();
          }
          this.removeEventListener = t(function (e) {
            if (typeof e === "boolean") {
              r.setOnline(e);
            } else {
              r.onOnline();
            }
          });
        };
        r.setOnline = function e(t) {
          this.online = t;
          if (t) {
            this.onOnline();
          }
        };
        r.onOnline = function e() {
          this.listeners.forEach(function (e) {
            e();
          });
        };
        r.isOnline = function e() {
          if (typeof this.online === "boolean") {
            return this.online;
          }
          return navigator.onLine === undefined || navigator.onLine;
        };
        r.setDefaultEventListener = function e() {
          var t;
          if (!o["f"] && ((t = window) == null ? void 0 : t.addEventListener)) {
            this.setEventListener(function (e) {
              window.addEventListener("online", e, false);
              window.addEventListener("offline", e, false);
              return function () {
                window.removeEventListener("online", e);
                window.removeEventListener("offline", e);
              };
            });
          }
        };
        return t;
      })(i["a"]);
      var u = new s();
    },
    "./node_modules/react-query/es/core/queryCache.js": function (e, t, r) {
      "use strict";
      var n = r("./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
      var i = r("./node_modules/react-query/es/core/utils.js");
      var o = r("./node_modules/@babel/runtime/helpers/esm/extends.js");
      var s = r("./node_modules/react-query/es/core/notifyManager.js");
      var u = r("./node_modules/react-query/es/core/logger.js");
      var a = r("./node_modules/react-query/es/core/retryer.js");
      var c = (function () {
        function e(e) {
          this.defaultOptions = e.defaultOptions;
          this.setOptions(e.options);
          this.observers = [];
          this.cache = e.cache;
          this.queryKey = e.queryKey;
          this.queryHash = e.queryHash;
          this.initialState = e.state || this.getDefaultState(this.options);
          this.state = this.initialState;
          this.scheduleGc();
        }
        var t = e.prototype;
        t.setOptions = function e(t) {
          var r;
          this.options = Object(o["a"])({}, this.defaultOptions, t);
          this.cacheTime = Math.max(
            this.cacheTime || 0,
            (r = this.options.cacheTime) != null ? r : 5 * 60 * 1e3
          );
        };
        t.setDefaultOptions = function e(t) {
          this.defaultOptions = t;
        };
        t.scheduleGc = function e() {
          var t = this;
          this.clearGcTimeout();
          if (Object(i["g"])(this.cacheTime)) {
            this.gcTimeout = setTimeout(function () {
              t.optionalRemove();
            }, this.cacheTime);
          }
        };
        t.clearGcTimeout = function e() {
          clearTimeout(this.gcTimeout);
          this.gcTimeout = undefined;
        };
        t.optionalRemove = function e() {
          if (!this.observers.length && !this.state.isFetching) {
            this.cache.remove(this);
          }
        };
        t.setData = function e(t, r) {
          var n, o;
          var s = this.state.data;
          var u = Object(i["b"])(t, s);
          if (
            (n = (o = this.options).isDataEqual) == null
              ? void 0
              : n.call(o, s, u)
          ) {
            u = s;
          } else if (this.options.structuralSharing !== false) {
            u = Object(i["n"])(s, u);
          }
          this.dispatch({
            data: u,
            type: "success",
            dataUpdatedAt: r == null ? void 0 : r.updatedAt,
          });
          return u;
        };
        t.setState = function e(t) {
          this.dispatch({ type: "setState", state: t });
        };
        t.cancel = function e(t) {
          var r;
          var n = this.promise;
          (r = this.retryer) == null ? void 0 : r.cancel(t);
          return n ? n.then(i["i"]).catch(i["i"]) : Promise.resolve();
        };
        t.destroy = function e() {
          this.clearGcTimeout();
          this.cancel({ silent: true });
        };
        t.reset = function e() {
          this.destroy();
          this.setState(this.initialState);
        };
        t.isActive = function e() {
          return this.observers.some(function (e) {
            return e.options.enabled !== false;
          });
        };
        t.isFetching = function e() {
          return this.state.isFetching;
        };
        t.isStale = function e() {
          return (
            this.state.isInvalidated ||
            !this.state.dataUpdatedAt ||
            this.observers.some(function (e) {
              return e.getCurrentResult().isStale;
            })
          );
        };
        t.isStaleByTime = function e(t) {
          if (t === void 0) {
            t = 0;
          }
          return (
            this.state.isInvalidated ||
            !this.state.dataUpdatedAt ||
            !Object(i["r"])(this.state.dataUpdatedAt, t)
          );
        };
        t.onFocus = function e() {
          var t;
          var r = this.observers.find(function (e) {
            return e.willFetchOnWindowFocus();
          });
          if (r) {
            r.refetch();
          }
          (t = this.retryer) == null ? void 0 : t.continue();
        };
        t.onOnline = function e() {
          var t;
          var r = this.observers.find(function (e) {
            return e.willFetchOnReconnect();
          });
          if (r) {
            r.refetch();
          }
          (t = this.retryer) == null ? void 0 : t.continue();
        };
        t.addObserver = function e(t) {
          if (this.observers.indexOf(t) === -1) {
            this.observers.push(t);
            this.clearGcTimeout();
            this.cache.notify(this);
          }
        };
        t.removeObserver = function e(t) {
          if (this.observers.indexOf(t) !== -1) {
            this.observers = this.observers.filter(function (e) {
              return e !== t;
            });
            if (!this.observers.length) {
              if (this.retryer) {
                if (this.retryer.isTransportCancelable) {
                  this.retryer.cancel();
                } else {
                  this.retryer.cancelRetry();
                }
              }
              if (this.cacheTime) {
                this.scheduleGc();
              } else {
                this.cache.remove(this);
              }
            }
            this.cache.notify(this);
          }
        };
        t.invalidate = function e() {
          if (!this.state.isInvalidated) {
            this.dispatch({ type: "invalidate" });
          }
        };
        t.fetch = function e(t, r) {
          var n = this,
            o,
            s;
          if (this.state.isFetching)
            if (
              this.state.dataUpdatedAt &&
              (r == null ? void 0 : r.cancelRefetch)
            ) {
              this.cancel({ silent: true });
            } else if (this.promise) {
              return this.promise;
            }
          if (t) {
            this.setOptions(t);
          }
          if (!this.options.queryFn) {
            var c = this.observers.find(function (e) {
              return e.options.queryFn;
            });
            if (c) {
              this.setOptions(c.options);
            }
          }
          var l = Object(i["a"])(this.queryKey);
          var f = { queryKey: l, pageParam: undefined };
          var d = function e() {
            return n.options.queryFn
              ? n.options.queryFn(f)
              : Promise.reject("Missing queryFn");
          };
          var h = {
            fetchOptions: r,
            options: this.options,
            queryKey: l,
            state: this.state,
            fetchFn: d,
          };
          if ((o = this.options.behavior) == null ? void 0 : o.onFetch) {
            var v;
            (v = this.options.behavior) == null ? void 0 : v.onFetch(h);
          }
          if (
            !this.state.isFetching ||
            this.state.fetchMeta !==
              ((s = h.fetchOptions) == null ? void 0 : s.meta)
          ) {
            var p;
            this.dispatch({
              type: "fetch",
              meta: (p = h.fetchOptions) == null ? void 0 : p.meta,
            });
          }
          this.retryer = new a["a"]({
            fn: h.fetchFn,
            onFail: function e() {
              n.dispatch({ type: "failed" });
            },
            onPause: function e() {
              n.dispatch({ type: "pause" });
            },
            onContinue: function e() {
              n.dispatch({ type: "continue" });
            },
            retry: h.options.retry,
            retryDelay: h.options.retryDelay,
          });
          this.promise = this.retryer.promise
            .then(function (e) {
              return n.setData(e);
            })
            .catch(function (e) {
              if (!(Object(a["c"])(e) && e.silent)) {
                n.dispatch({ type: "error", error: e });
              }
              if (!Object(a["c"])(e)) {
                if (n.cache.config.onError) {
                  n.cache.config.onError(e, n);
                }
                Object(u["a"])().error(e);
              }
              if (n.cacheTime === 0) {
                n.optionalRemove();
              }
              throw e;
            })
            .then(function (e) {
              if (n.cacheTime === 0) {
                n.optionalRemove();
              }
              return e;
            });
          return this.promise;
        };
        t.dispatch = function e(t) {
          var r = this;
          this.state = this.reducer(this.state, t);
          s["a"].batch(function () {
            r.observers.forEach(function (e) {
              e.onQueryUpdate(t);
            });
            r.cache.notify(r);
          });
        };
        t.getDefaultState = function e(t) {
          var r =
            typeof t.initialData === "function"
              ? t.initialData()
              : t.initialData;
          var n = typeof t.initialData !== "undefined";
          var i = n
            ? typeof t.initialDataUpdatedAt === "function"
              ? t.initialDataUpdatedAt()
              : t.initialDataUpdatedAt
            : 0;
          var o = typeof r !== "undefined";
          return {
            data: r,
            dataUpdateCount: 0,
            dataUpdatedAt: o ? (i != null ? i : Date.now()) : 0,
            error: null,
            errorUpdateCount: 0,
            errorUpdatedAt: 0,
            fetchFailureCount: 0,
            fetchMeta: null,
            isFetching: false,
            isInvalidated: false,
            isPaused: false,
            status: o ? "success" : "idle",
          };
        };
        t.reducer = function e(t, r) {
          var n, i;
          switch (r.type) {
            case "failed":
              return Object(o["a"])({}, t, {
                fetchFailureCount: t.fetchFailureCount + 1,
              });
            case "pause":
              return Object(o["a"])({}, t, { isPaused: true });
            case "continue":
              return Object(o["a"])({}, t, { isPaused: false });
            case "fetch":
              return Object(o["a"])({}, t, {
                fetchFailureCount: 0,
                fetchMeta: (n = r.meta) != null ? n : null,
                isFetching: true,
                isPaused: false,
                status: !t.dataUpdatedAt ? "loading" : t.status,
              });
            case "success":
              return Object(o["a"])({}, t, {
                data: r.data,
                dataUpdateCount: t.dataUpdateCount + 1,
                dataUpdatedAt: (i = r.dataUpdatedAt) != null ? i : Date.now(),
                error: null,
                fetchFailureCount: 0,
                isFetching: false,
                isInvalidated: false,
                isPaused: false,
                status: "success",
              });
            case "error":
              var s = r.error;
              if (Object(a["c"])(s) && s.revert) {
                var u;
                if (!t.dataUpdatedAt && !t.errorUpdatedAt) {
                  u = "idle";
                } else if (t.dataUpdatedAt > t.errorUpdatedAt) {
                  u = "success";
                } else {
                  u = "error";
                }
                return Object(o["a"])({}, t, {
                  fetchFailureCount: 0,
                  isFetching: false,
                  isPaused: false,
                  status: u,
                });
              }
              return Object(o["a"])({}, t, {
                error: s,
                errorUpdateCount: t.errorUpdateCount + 1,
                errorUpdatedAt: Date.now(),
                fetchFailureCount: t.fetchFailureCount + 1,
                isFetching: false,
                isPaused: false,
                status: "error",
              });
            case "invalidate":
              return Object(o["a"])({}, t, { isInvalidated: true });
            case "setState":
              return Object(o["a"])({}, t, r.state);
            default:
              return t;
          }
        };
        return e;
      })();
      var l = r("./node_modules/react-query/es/core/subscribable.js");
      r.d(t, "a", function () {
        return f;
      });
      var f = (function (e) {
        Object(n["a"])(t, e);
        function t(t) {
          var r;
          r = e.call(this) || this;
          r.config = t || {};
          r.queries = [];
          r.queriesMap = {};
          return r;
        }
        var r = t.prototype;
        r.build = function e(t, r, n) {
          var o;
          var s = Object(i["c"])(r);
          var u = r.queryKey;
          var a = (o = r.queryHash) != null ? o : s(u);
          var l = this.get(a);
          if (!l) {
            l = new c({
              cache: this,
              queryKey: u,
              queryHash: a,
              options: t.defaultQueryOptions(r),
              state: n,
              defaultOptions: t.getQueryDefaults(u),
            });
            this.add(l);
          }
          return l;
        };
        r.add = function e(t) {
          if (!this.queriesMap[t.queryHash]) {
            this.queriesMap[t.queryHash] = t;
            this.queries.push(t);
            this.notify(t);
          }
        };
        r.remove = function e(t) {
          var r = this.queriesMap[t.queryHash];
          if (r) {
            t.destroy();
            this.queries = this.queries.filter(function (e) {
              return e !== t;
            });
            if (r === t) {
              delete this.queriesMap[t.queryHash];
            }
            this.notify(t);
          }
        };
        r.clear = function e() {
          var t = this;
          s["a"].batch(function () {
            t.queries.forEach(function (e) {
              t.remove(e);
            });
          });
        };
        r.get = function e(t) {
          return this.queriesMap[t];
        };
        r.getAll = function e() {
          return this.queries;
        };
        r.find = function e(t, r) {
          var n = Object(i["j"])(t, r),
            o = n[0];
          return this.queries.find(function (e) {
            return Object(i["h"])(o, e);
          });
        };
        r.findAll = function e(t, r) {
          var n = Object(i["j"])(t, r),
            o = n[0];
          return o
            ? this.queries.filter(function (e) {
                return Object(i["h"])(o, e);
              })
            : this.queries;
        };
        r.notify = function e(t) {
          var r = this;
          s["a"].batch(function () {
            r.listeners.forEach(function (e) {
              e(t);
            });
          });
        };
        r.onFocus = function e() {
          var t = this;
          s["a"].batch(function () {
            t.queries.forEach(function (e) {
              e.onFocus();
            });
          });
        };
        r.onOnline = function e() {
          var t = this;
          s["a"].batch(function () {
            t.queries.forEach(function (e) {
              e.onOnline();
            });
          });
        };
        return t;
      })(l["a"]);
    },
    "./node_modules/react-query/es/core/queryClient.js": function (e, t, r) {
      "use strict";
      var n = r("./node_modules/@babel/runtime/helpers/esm/extends.js");
      var i = r("./node_modules/react-query/es/core/utils.js");
      var o = r("./node_modules/react-query/es/core/queryCache.js");
      var s = r("./node_modules/react-query/es/core/mutationCache.js");
      var u = r("./node_modules/react-query/es/core/focusManager.js");
      var a = r("./node_modules/react-query/es/core/onlineManager.js");
      var c = r("./node_modules/react-query/es/core/notifyManager.js");
      var l = r("./node_modules/react-query/es/core/retryer.js");
      function f() {
        return {
          onFetch: function e(t) {
            t.fetchFn = function () {
              var e, r, n, i;
              var o =
                (e = t.fetchOptions) == null
                  ? void 0
                  : (r = e.meta) == null
                  ? void 0
                  : r.fetchMore;
              var s = o == null ? void 0 : o.pageParam;
              var u = (o == null ? void 0 : o.direction) === "forward";
              var a = (o == null ? void 0 : o.direction) === "backward";
              var c = ((n = t.state.data) == null ? void 0 : n.pages) || [];
              var f =
                ((i = t.state.data) == null ? void 0 : i.pageParams) || [];
              var v = f;
              var p =
                t.options.queryFn ||
                function () {
                  return Promise.reject("Missing queryFn");
                };
              var y = function e(r, n, i, o) {
                if (typeof i === "undefined" && !n && r.length) {
                  return Promise.resolve(r);
                }
                var s = { queryKey: t.queryKey, pageParam: i };
                var u;
                var a = p(s);
                if (a.cancel) {
                  u = a.cancel;
                }
                var c = Promise.resolve(a).then(function (e) {
                  v = o ? [i].concat(v) : [].concat(v, [i]);
                  return o ? [e].concat(r) : [].concat(r, [e]);
                });
                if (u) {
                  var l = c;
                  l.cancel = u;
                }
                return c;
              };
              var m;
              if (!c.length) {
                m = y([]);
              } else if (u) {
                var b = typeof s !== "undefined";
                var g = b ? s : d(t.options, c);
                m = y(c, b, g);
              } else if (a) {
                var j = typeof s !== "undefined";
                var O = j ? s : h(t.options, c);
                m = y(c, j, O, true);
              } else {
                (function () {
                  v = [];
                  var e = typeof t.options.getNextPageParam === "undefined";
                  m = y([], e, f[0]);
                  var r = function r(n) {
                    m = m.then(function (r) {
                      var i = e ? f[n] : d(t.options, r);
                      return y(r, e, i);
                    });
                  };
                  for (var n = 1; n < c.length; n++) {
                    r(n);
                  }
                })();
              }
              var _ = m.then(function (e) {
                return { pages: e, pageParams: v };
              });
              if (Object(l["b"])(m)) {
                var q = _;
                q.cancel = m.cancel;
              }
              return _;
            };
          },
        };
      }
      function d(e, t) {
        return e.getNextPageParam == null
          ? void 0
          : e.getNextPageParam(t[t.length - 1], t);
      }
      function h(e, t) {
        return e.getPreviousPageParam == null
          ? void 0
          : e.getPreviousPageParam(t[0], t);
      }
      function v(e, t) {
        if (e.getNextPageParam && Array.isArray(t)) {
          var r = d(e, t);
          return typeof r !== "undefined" && r !== null && r !== false;
        }
      }
      function p(e, t) {
        if (e.getPreviousPageParam && Array.isArray(t)) {
          var r = h(e, t);
          return typeof r !== "undefined" && r !== null && r !== false;
        }
      }
      r.d(t, "a", function () {
        return y;
      });
      var y = (function () {
        function e(e) {
          if (e === void 0) {
            e = {};
          }
          this.queryCache = e.queryCache || new o["a"]();
          this.mutationCache = e.mutationCache || new s["a"]();
          this.defaultOptions = e.defaultOptions || {};
          this.queryDefaults = [];
          this.mutationDefaults = [];
        }
        var t = e.prototype;
        t.mount = function e() {
          var t = this;
          this.unsubscribeFocus = u["a"].subscribe(function () {
            if (u["a"].isFocused() && a["a"].isOnline()) {
              t.mutationCache.onFocus();
              t.queryCache.onFocus();
            }
          });
          this.unsubscribeOnline = a["a"].subscribe(function () {
            if (u["a"].isFocused() && a["a"].isOnline()) {
              t.mutationCache.onOnline();
              t.queryCache.onOnline();
            }
          });
        };
        t.unmount = function e() {
          var t, r;
          (t = this.unsubscribeFocus) == null ? void 0 : t.call(this);
          (r = this.unsubscribeOnline) == null ? void 0 : r.call(this);
        };
        t.isFetching = function e(t, r) {
          var n = Object(i["j"])(t, r),
            o = n[0];
          o.fetching = true;
          return this.queryCache.findAll(o).length;
        };
        t.getQueryData = function e(t, r) {
          var n;
          return (n = this.queryCache.find(t, r)) == null
            ? void 0
            : n.state.data;
        };
        t.setQueryData = function e(t, r, n) {
          var o = Object(i["l"])(t);
          var s = this.defaultQueryOptions(o);
          return this.queryCache.build(this, s).setData(r, n);
        };
        t.getQueryState = function e(t, r) {
          var n;
          return (n = this.queryCache.find(t, r)) == null ? void 0 : n.state;
        };
        t.removeQueries = function e(t, r) {
          var n = Object(i["j"])(t, r),
            o = n[0];
          var s = this.queryCache;
          c["a"].batch(function () {
            s.findAll(o).forEach(function (e) {
              s.remove(e);
            });
          });
        };
        t.resetQueries = function e(t, r, o) {
          var s = this;
          var u = Object(i["j"])(t, r, o),
            a = u[0],
            l = u[1];
          var f = this.queryCache;
          var d = Object(n["a"])({}, a, { active: true });
          return c["a"].batch(function () {
            f.findAll(a).forEach(function (e) {
              e.reset();
            });
            return s.refetchQueries(d, l);
          });
        };
        t.cancelQueries = function e(t, r, n) {
          var o = this;
          var s = Object(i["j"])(t, r, n),
            u = s[0],
            a = s[1],
            l = a === void 0 ? {} : a;
          if (typeof l.revert === "undefined") {
            l.revert = true;
          }
          var f = c["a"].batch(function () {
            return o.queryCache.findAll(u).map(function (e) {
              return e.cancel(l);
            });
          });
          return Promise.all(f).then(i["i"]).catch(i["i"]);
        };
        t.invalidateQueries = function e(t, r, o) {
          var s,
            u,
            a = this;
          var l = Object(i["j"])(t, r, o),
            f = l[0],
            d = l[1];
          var h = Object(n["a"])({}, f, {
            active: (s = f.refetchActive) != null ? s : true,
            inactive: (u = f.refetchInactive) != null ? u : false,
          });
          return c["a"].batch(function () {
            a.queryCache.findAll(f).forEach(function (e) {
              e.invalidate();
            });
            return a.refetchQueries(h, d);
          });
        };
        t.refetchQueries = function e(t, r, n) {
          var o = this;
          var s = Object(i["j"])(t, r, n),
            u = s[0],
            a = s[1];
          var l = c["a"].batch(function () {
            return o.queryCache.findAll(u).map(function (e) {
              return e.fetch();
            });
          });
          var f = Promise.all(l).then(i["i"]);
          if (!(a == null ? void 0 : a.throwOnError)) {
            f = f.catch(i["i"]);
          }
          return f;
        };
        t.fetchQuery = function e(t, r, n) {
          var o = Object(i["l"])(t, r, n);
          var s = this.defaultQueryOptions(o);
          if (typeof s.retry === "undefined") {
            s.retry = false;
          }
          var u = this.queryCache.build(this, s);
          return u.isStaleByTime(s.staleTime)
            ? u.fetch(s)
            : Promise.resolve(u.state.data);
        };
        t.prefetchQuery = function e(t, r, n) {
          return this.fetchQuery(t, r, n).then(i["i"]).catch(i["i"]);
        };
        t.fetchInfiniteQuery = function e(t, r, n) {
          var o = Object(i["l"])(t, r, n);
          o.behavior = f();
          return this.fetchQuery(o);
        };
        t.prefetchInfiniteQuery = function e(t, r, n) {
          return this.fetchInfiniteQuery(t, r, n).then(i["i"]).catch(i["i"]);
        };
        t.cancelMutations = function e() {
          var t = this;
          var r = c["a"].batch(function () {
            return t.mutationCache.getAll().map(function (e) {
              return e.cancel();
            });
          });
          return Promise.all(r).then(i["i"]).catch(i["i"]);
        };
        t.resumePausedMutations = function e() {
          return this.getMutationCache().resumePausedMutations();
        };
        t.executeMutation = function e(t) {
          return this.mutationCache.build(this, t).execute();
        };
        t.getQueryCache = function e() {
          return this.queryCache;
        };
        t.getMutationCache = function e() {
          return this.mutationCache;
        };
        t.getDefaultOptions = function e() {
          return this.defaultOptions;
        };
        t.setDefaultOptions = function e(t) {
          this.defaultOptions = t;
        };
        t.setQueryDefaults = function e(t, r) {
          var n = this.queryDefaults.find(function (e) {
            return Object(i["e"])(t) === Object(i["e"])(e.queryKey);
          });
          if (n) {
            n.defaultOptions = r;
          } else {
            this.queryDefaults.push({ queryKey: t, defaultOptions: r });
          }
        };
        t.getQueryDefaults = function e(t) {
          var r;
          return t
            ? (r = this.queryDefaults.find(function (e) {
                return Object(i["m"])(t, e.queryKey);
              })) == null
              ? void 0
              : r.defaultOptions
            : undefined;
        };
        t.setMutationDefaults = function e(t, r) {
          var n = this.mutationDefaults.find(function (e) {
            return Object(i["e"])(t) === Object(i["e"])(e.mutationKey);
          });
          if (n) {
            n.defaultOptions = r;
          } else {
            this.mutationDefaults.push({ mutationKey: t, defaultOptions: r });
          }
        };
        t.getMutationDefaults = function e(t) {
          var r;
          return t
            ? (r = this.mutationDefaults.find(function (e) {
                return Object(i["m"])(t, e.mutationKey);
              })) == null
              ? void 0
              : r.defaultOptions
            : undefined;
        };
        t.defaultQueryOptions = function e(t) {
          if (t == null ? void 0 : t._defaulted) {
            return t;
          }
          return Object(n["a"])(
            {},
            this.defaultOptions.queries,
            this.getQueryDefaults(t == null ? void 0 : t.queryKey),
            t,
            { _defaulted: true }
          );
        };
        t.defaultQueryObserverOptions = function e(t) {
          return this.defaultQueryOptions(t);
        };
        t.defaultMutationOptions = function e(t) {
          if (t == null ? void 0 : t._defaulted) {
            return t;
          }
          return Object(n["a"])(
            {},
            this.defaultOptions.mutations,
            this.getMutationDefaults(t == null ? void 0 : t.mutationKey),
            t,
            { _defaulted: true }
          );
        };
        t.clear = function e() {
          this.queryCache.clear();
          this.mutationCache.clear();
        };
        return e;
      })();
    },
    "./node_modules/react-query/es/core/queryObserver.js": function (e, t, r) {
      "use strict";
      r.d(t, "a", function () {
        return c;
      });
      var n = r("./node_modules/@babel/runtime/helpers/esm/extends.js");
      var i = r("./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
      var o = r("./node_modules/react-query/es/core/utils.js");
      var s = r("./node_modules/react-query/es/core/notifyManager.js");
      var u = r("./node_modules/react-query/es/core/focusManager.js");
      var a = r("./node_modules/react-query/es/core/subscribable.js");
      var c = (function (e) {
        Object(i["a"])(t, e);
        function t(t, r) {
          var n;
          n = e.call(this) || this;
          n.client = t;
          n.options = r;
          n.initialDataUpdateCount = 0;
          n.initialErrorUpdateCount = 0;
          n.trackedProps = [];
          n.bindMethods();
          n.setOptions(r);
          return n;
        }
        var r = t.prototype;
        r.bindMethods = function e() {
          this.remove = this.remove.bind(this);
          this.refetch = this.refetch.bind(this);
        };
        r.onSubscribe = function e() {
          if (this.listeners.length === 1) {
            this.updateQuery();
            this.currentQuery.addObserver(this);
            if (this.willFetchOnMount()) {
              this.executeFetch();
            }
            this.updateTimers();
          }
        };
        r.onUnsubscribe = function e() {
          if (!this.listeners.length) {
            this.destroy();
          }
        };
        r.willLoadOnMount = function e() {
          return (
            this.options.enabled !== false &&
            !this.currentQuery.state.dataUpdatedAt &&
            !(
              this.currentQuery.state.status === "error" &&
              this.options.retryOnMount === false
            )
          );
        };
        r.willRefetchOnMount = function e() {
          return (
            this.options.enabled !== false &&
            this.currentQuery.state.dataUpdatedAt > 0 &&
            (this.options.refetchOnMount === "always" ||
              (this.options.refetchOnMount !== false && this.isStale()))
          );
        };
        r.willFetchOnMount = function e() {
          return this.willLoadOnMount() || this.willRefetchOnMount();
        };
        r.willFetchOnReconnect = function e() {
          return (
            this.options.enabled !== false &&
            (this.options.refetchOnReconnect === "always" ||
              (this.options.refetchOnReconnect !== false && this.isStale()))
          );
        };
        r.willFetchOnWindowFocus = function e() {
          return (
            this.options.enabled !== false &&
            (this.options.refetchOnWindowFocus === "always" ||
              (this.options.refetchOnWindowFocus !== false && this.isStale()))
          );
        };
        r.willFetchOptionally = function e() {
          return this.options.enabled !== false && this.isStale();
        };
        r.isStale = function e() {
          return this.currentQuery.isStaleByTime(this.options.staleTime);
        };
        r.destroy = function e() {
          this.listeners = [];
          this.clearTimers();
          this.currentQuery.removeObserver(this);
        };
        r.setOptions = function e(t) {
          var r = this.options;
          var n = this.currentQuery;
          this.options = this.client.defaultQueryObserverOptions(t);
          if (
            typeof this.options.enabled !== "undefined" &&
            typeof this.options.enabled !== "boolean"
          ) {
            throw new Error("Expected enabled to be a boolean");
          }
          if (!this.options.queryKey) {
            this.options.queryKey = r.queryKey;
          }
          this.updateQuery();
          if (!this.listeners.length) {
            return;
          }
          if (this.currentQuery !== n) {
            this.optionalFetch();
            this.updateTimers();
            return;
          }
          if (this.options.enabled !== false && r.enabled === false) {
            this.optionalFetch();
          }
          if (
            this.options.enabled !== r.enabled ||
            this.options.staleTime !== r.staleTime
          ) {
            this.updateStaleTimeout();
          }
          if (
            this.options.enabled !== r.enabled ||
            this.options.refetchInterval !== r.refetchInterval
          ) {
            this.updateRefetchInterval();
          }
        };
        r.getCurrentResult = function e() {
          return this.currentResult;
        };
        r.getTrackedCurrentResult = function e() {
          return this.trackedCurrentResult;
        };
        r.getNextResult = function e(t) {
          var r = this;
          return new Promise(function (e, n) {
            var i = r.subscribe(function (r) {
              if (!r.isFetching) {
                i();
                if (r.isError && (t == null ? void 0 : t.throwOnError)) {
                  n(r.error);
                } else {
                  e(r);
                }
              }
            });
          });
        };
        r.getCurrentQuery = function e() {
          return this.currentQuery;
        };
        r.remove = function e() {
          this.client.getQueryCache().remove(this.currentQuery);
        };
        r.refetch = function e(t) {
          return this.fetch(t);
        };
        r.fetch = function e(t) {
          var r = this;
          return this.executeFetch(t).then(function () {
            r.updateResult();
            return r.currentResult;
          });
        };
        r.optionalFetch = function e() {
          if (this.willFetchOptionally()) {
            this.executeFetch();
          }
        };
        r.executeFetch = function e(t) {
          this.updateQuery();
          var r = this.currentQuery.fetch(this.options, t);
          if (!(t == null ? void 0 : t.throwOnError)) {
            r = r.catch(o["i"]);
          }
          return r;
        };
        r.updateStaleTimeout = function e() {
          var t = this;
          this.clearStaleTimeout();
          if (
            o["f"] ||
            this.currentResult.isStale ||
            !Object(o["g"])(this.options.staleTime)
          ) {
            return;
          }
          var r = Object(o["r"])(
            this.currentResult.dataUpdatedAt,
            this.options.staleTime
          );
          var n = r + 1;
          this.staleTimeoutId = setTimeout(function () {
            if (!t.currentResult.isStale) {
              var e = t.currentResult;
              t.updateResult();
              t.notify({
                listeners: t.shouldNotifyListeners(e, t.currentResult),
                cache: true,
              });
            }
          }, n);
        };
        r.updateRefetchInterval = function e() {
          var t = this;
          this.clearRefetchInterval();
          if (
            o["f"] ||
            this.options.enabled === false ||
            !Object(o["g"])(this.options.refetchInterval)
          ) {
            return;
          }
          this.refetchIntervalId = setInterval(function () {
            if (t.options.refetchIntervalInBackground || u["a"].isFocused()) {
              t.executeFetch();
            }
          }, this.options.refetchInterval);
        };
        r.updateTimers = function e() {
          this.updateStaleTimeout();
          this.updateRefetchInterval();
        };
        r.clearTimers = function e() {
          this.clearStaleTimeout();
          this.clearRefetchInterval();
        };
        r.clearStaleTimeout = function e() {
          clearTimeout(this.staleTimeoutId);
          this.staleTimeoutId = undefined;
        };
        r.clearRefetchInterval = function e() {
          clearInterval(this.refetchIntervalId);
          this.refetchIntervalId = undefined;
        };
        r.getNewResult = function e(t) {
          var r;
          var i = this.currentQuery.state;
          var s = i.isFetching,
            u = i.status;
          var a = false;
          var c = false;
          var l;
          var f = i.dataUpdatedAt;
          if (t) {
            s = true;
            if (!f) {
              u = "loading";
            }
          }
          if (
            this.options.keepPreviousData &&
            !i.dataUpdateCount &&
            ((r = this.previousQueryResult) == null ? void 0 : r.isSuccess) &&
            u !== "error"
          ) {
            l = this.previousQueryResult.data;
            f = this.previousQueryResult.dataUpdatedAt;
            u = this.previousQueryResult.status;
            a = true;
          } else if (this.options.select && typeof i.data !== "undefined") {
            var d;
            if (
              this.currentResult &&
              i.data ===
                ((d = this.currentResultState) == null ? void 0 : d.data)
            ) {
              l = this.currentResult.data;
            } else {
              l = this.options.select(i.data);
              if (this.options.structuralSharing !== false) {
                var h;
                l = Object(o["n"])(
                  (h = this.currentResult) == null ? void 0 : h.data,
                  l
                );
              }
            }
          } else {
            l = i.data;
          }
          if (
            typeof this.options.placeholderData !== "undefined" &&
            typeof l === "undefined" &&
            u === "loading"
          ) {
            var v =
              typeof this.options.placeholderData === "function"
                ? this.options.placeholderData()
                : this.options.placeholderData;
            if (typeof v !== "undefined") {
              u = "success";
              l = v;
              c = true;
            }
          }
          var p = Object(n["a"])({}, Object(o["d"])(u), {
            data: l,
            dataUpdatedAt: f,
            error: i.error,
            errorUpdatedAt: i.errorUpdatedAt,
            failureCount: i.fetchFailureCount,
            isFetched: i.dataUpdateCount > 0 || i.errorUpdateCount > 0,
            isFetchedAfterMount:
              i.dataUpdateCount > this.initialDataUpdateCount ||
              i.errorUpdateCount > this.initialErrorUpdateCount,
            isFetching: s,
            isLoadingError: u === "error" && i.dataUpdatedAt === 0,
            isPlaceholderData: c,
            isPreviousData: a,
            isRefetchError: u === "error" && i.dataUpdatedAt !== 0,
            isStale: this.isStale(),
            refetch: this.refetch,
            remove: this.remove,
          });
          return p;
        };
        r.shouldNotifyListeners = function e(t, r) {
          var n = this;
          var i = this.options,
            o = i.notifyOnChangeProps,
            s = i.notifyOnChangePropsExclusions;
          if (t === r) {
            return false;
          }
          if (!o && !s) {
            return true;
          }
          var u = Object.keys(r);
          var a = o === "tracked" ? this.trackedProps : o;
          var c = function e(i) {
            var c = u[i];
            var l = t[c] !== r[c];
            var f =
              a == null
                ? void 0
                : a.some(function (e) {
                    return e === c;
                  });
            var d =
              s == null
                ? void 0
                : s.some(function (e) {
                    return e === c;
                  });
            if (l) {
              if (s && d) {
                return "continue";
              }
              if (!o || f || (o === "tracked" && n.trackedProps.length === 0)) {
                return { v: true };
              }
            }
          };
          for (var l = 0; l < u.length; l++) {
            var f = c(l);
            if (f === "continue") continue;
            if (typeof f === "object") return f.v;
          }
          return false;
        };
        r.updateResult = function e(t) {
          var r = this;
          var n = this.getNewResult(t);
          this.currentResultState = this.currentQuery.state;
          if (!Object(o["p"])(n, this.currentResult)) {
            this.currentResult = n;
            if (this.options.notifyOnChangeProps === "tracked") {
              var i = function e(t) {
                if (!r.trackedProps.includes(t)) {
                  r.trackedProps.push(t);
                }
              };
              this.trackedCurrentResult = {};
              Object.keys(n).forEach(function (e) {
                Object.defineProperty(r.trackedCurrentResult, e, {
                  configurable: false,
                  enumerable: true,
                  get: function t() {
                    i(e);
                    return n[e];
                  },
                });
              });
            }
          }
        };
        r.updateQuery = function e() {
          var t = this.currentQuery;
          var r = this.client.getQueryCache().build(this.client, this.options);
          if (r === t) {
            return;
          }
          this.previousQueryResult = this.currentResult;
          this.currentQuery = r;
          this.initialDataUpdateCount = r.state.dataUpdateCount;
          this.initialErrorUpdateCount = r.state.errorUpdateCount;
          var n = t ? this.willFetchOptionally() : this.willFetchOnMount();
          this.updateResult(n);
          if (!this.hasListeners()) {
            return;
          }
          t == null ? void 0 : t.removeObserver(this);
          this.currentQuery.addObserver(this);
          if (
            this.shouldNotifyListeners(
              this.previousQueryResult,
              this.currentResult
            )
          ) {
            this.notify({ listeners: true });
          }
        };
        r.onQueryUpdate = function e(t) {
          var r = this.currentResult;
          this.updateResult();
          var n = this.currentResult;
          this.updateTimers();
          if (r === n) {
            return;
          }
          var i = {};
          if (t.type === "success") {
            i.onSuccess = true;
          } else if (t.type === "error") {
            i.onError = true;
          }
          if (this.shouldNotifyListeners(r, n)) {
            i.listeners = true;
          }
          this.notify(i);
        };
        r.notify = function e(t) {
          var r = this;
          s["a"].batch(function () {
            if (t.onSuccess) {
              r.options.onSuccess == null
                ? void 0
                : r.options.onSuccess(r.currentResult.data);
              r.options.onSettled == null
                ? void 0
                : r.options.onSettled(r.currentResult.data, null);
            } else if (t.onError) {
              r.options.onError == null
                ? void 0
                : r.options.onError(r.currentResult.error);
              r.options.onSettled == null
                ? void 0
                : r.options.onSettled(undefined, r.currentResult.error);
            }
            if (t.listeners) {
              r.listeners.forEach(function (e) {
                e(r.currentResult);
              });
            }
            if (t.cache) {
              r.client.getQueryCache().notify(r.currentQuery);
            }
          });
        };
        return t;
      })(a["a"]);
    },
    "./node_modules/react-query/es/core/retryer.js": function (e, t, r) {
      "use strict";
      r.d(t, "b", function () {
        return u;
      });
      r.d(t, "c", function () {
        return c;
      });
      r.d(t, "a", function () {
        return l;
      });
      var n = r("./node_modules/react-query/es/core/focusManager.js");
      var i = r("./node_modules/react-query/es/core/onlineManager.js");
      var o = r("./node_modules/react-query/es/core/utils.js");
      function s(e) {
        return Math.min(1e3 * Math.pow(2, e), 3e4);
      }
      function u(e) {
        return typeof (e == null ? void 0 : e.cancel) === "function";
      }
      var a = function e(t) {
        this.revert = t == null ? void 0 : t.revert;
        this.silent = t == null ? void 0 : t.silent;
      };
      function c(e) {
        return e instanceof a;
      }
      var l = function e(t) {
        var r = this;
        var c = false;
        var l;
        var f;
        var d;
        var h;
        this.cancel = function (e) {
          return l == null ? void 0 : l(e);
        };
        this.cancelRetry = function () {
          c = true;
        };
        this.continue = function () {
          return f == null ? void 0 : f();
        };
        this.failureCount = 0;
        this.isPaused = false;
        this.isResolved = false;
        this.isTransportCancelable = false;
        this.promise = new Promise(function (e, t) {
          d = e;
          h = t;
        });
        var v = function e(t) {
          r.isResolved = true;
          f == null ? void 0 : f();
          d(t);
        };
        var p = function e(t) {
          r.isResolved = true;
          f == null ? void 0 : f();
          h(t);
        };
        var y = function e() {
          return new Promise(function (e) {
            f = e;
            r.isPaused = true;
            t.onPause == null ? void 0 : t.onPause();
          }).then(function () {
            f = undefined;
            r.isPaused = false;
            t.onContinue == null ? void 0 : t.onContinue();
          });
        };
        var m = function e() {
          if (r.isResolved) {
            return;
          }
          var f;
          try {
            f = t.fn();
          } catch (e) {
            f = Promise.reject(e);
          }
          l = function e(t) {
            p(new a(t));
            if (u(f)) {
              try {
                f.cancel();
              } catch (e) {}
            }
          };
          r.isTransportCancelable = u(f);
          Promise.resolve(f)
            .then(v)
            .catch(function (u) {
              var a, l;
              if (r.isResolved) {
                return;
              }
              var f = (a = t.retry) != null ? a : 3;
              var d = (l = t.retryDelay) != null ? l : s;
              var h = Object(o["b"])(d, r.failureCount) || 0;
              var v =
                f === true ||
                (typeof f === "number" && r.failureCount < f) ||
                (typeof f === "function" && f(r.failureCount, u));
              if (c || !v) {
                p(u);
                return;
              }
              r.failureCount++;
              t.onFail == null ? void 0 : t.onFail(r.failureCount, u);
              Object(o["q"])(h)
                .then(function () {
                  if (!n["a"].isFocused() || !i["a"].isOnline()) {
                    return y();
                  }
                })
                .then(function () {
                  if (c) {
                    p(u);
                  } else {
                    e();
                  }
                });
            });
        };
        m();
      };
    },
    "./node_modules/react-query/es/core/subscribable.js": function (e, t, r) {
      "use strict";
      r.d(t, "a", function () {
        return n;
      });
      var n = (function () {
        function e() {
          this.listeners = [];
        }
        var t = e.prototype;
        t.subscribe = function e(t) {
          var r = this;
          var n =
            t ||
            function () {
              return undefined;
            };
          this.listeners.push(n);
          this.onSubscribe();
          return function () {
            r.listeners = r.listeners.filter(function (e) {
              return e !== n;
            });
            r.onUnsubscribe();
          };
        };
        t.hasListeners = function e() {
          return this.listeners.length > 0;
        };
        t.onSubscribe = function e() {};
        t.onUnsubscribe = function e() {};
        return e;
      })();
    },
    "./node_modules/react-query/es/core/types.js": function (e, t) {},
    "./node_modules/react-query/es/core/utils.js": function (e, t, r) {
      "use strict";
      r.d(t, "f", function () {
        return i;
      });
      r.d(t, "i", function () {
        return o;
      });
      r.d(t, "b", function () {
        return s;
      });
      r.d(t, "g", function () {
        return u;
      });
      r.d(t, "a", function () {
        return a;
      });
      r.d(t, "r", function () {
        return f;
      });
      r.d(t, "l", function () {
        return d;
      });
      r.d(t, "k", function () {
        return h;
      });
      r.d(t, "j", function () {
        return v;
      });
      r.d(t, "h", function () {
        return p;
      });
      r.d(t, "c", function () {
        return y;
      });
      r.d(t, "e", function () {
        return m;
      });
      r.d(t, "m", function () {
        return g;
      });
      r.d(t, "n", function () {
        return O;
      });
      r.d(t, "p", function () {
        return _;
      });
      r.d(t, "q", function () {
        return S;
      });
      r.d(t, "d", function () {
        return F;
      });
      r.d(t, "o", function () {
        return R;
      });
      var n = r("./node_modules/@babel/runtime/helpers/esm/extends.js");
      var i = typeof window === "undefined";
      function o() {
        return undefined;
      }
      function s(e, t) {
        return typeof e === "function" ? e(t) : e;
      }
      function u(e) {
        return typeof e === "number" && e >= 0 && e !== Infinity;
      }
      function a(e) {
        return Array.isArray(e) ? e : [e];
      }
      function c(e, t) {
        return e.filter(function (e) {
          return t.indexOf(e) === -1;
        });
      }
      function l(e, t, r) {
        var n = e.slice(0);
        n[t] = r;
        return n;
      }
      function f(e, t) {
        return Math.max(e + (t || 0) - Date.now(), 0);
      }
      function d(e, t, r) {
        if (!C(e)) {
          return e;
        }
        if (typeof t === "function") {
          return Object(n["a"])({}, r, { queryKey: e, queryFn: t });
        }
        return Object(n["a"])({}, t, { queryKey: e });
      }
      function h(e, t, r) {
        if (C(e)) {
          if (typeof t === "function") {
            return Object(n["a"])({}, r, { mutationKey: e, mutationFn: t });
          }
          return Object(n["a"])({}, t, { mutationKey: e });
        }
        if (typeof e === "function") {
          return Object(n["a"])({}, t, { mutationFn: e });
        }
        return Object(n["a"])({}, e);
      }
      function v(e, t, r) {
        return C(e)
          ? [Object(n["a"])({}, t, { queryKey: e }), r]
          : [e || {}, t];
      }
      function p(e, t) {
        var r = e.active,
          n = e.exact,
          i = e.fetching,
          o = e.inactive,
          s = e.predicate,
          u = e.queryKey,
          a = e.stale;
        if (C(u)) {
          if (n) {
            var c = y(t.options);
            if (t.queryHash !== c(u)) {
              return false;
            }
          } else if (!g(t.queryKey, u)) {
            return false;
          }
        }
        var l;
        if (o === false || (r && !o)) {
          l = true;
        } else if (r === false || (o && !r)) {
          l = false;
        }
        if (typeof l === "boolean" && t.isActive() !== l) {
          return false;
        }
        if (typeof a === "boolean" && t.isStale() !== a) {
          return false;
        }
        if (typeof i === "boolean" && t.isFetching() !== i) {
          return false;
        }
        if (s && !s(t)) {
          return false;
        }
        return true;
      }
      function y(e) {
        return (e == null ? void 0 : e.queryKeyHashFn) || m;
      }
      function m(e) {
        return b(e);
      }
      function b(e) {
        return JSON.stringify(e, function (e, t) {
          return q(t)
            ? Object.keys(t)
                .sort()
                .reduce(function (e, r) {
                  e[r] = t[r];
                  return e;
                }, {})
            : t;
        });
      }
      function g(e, t) {
        return j(a(e), a(t));
      }
      function j(e, t) {
        if (e === t) {
          return true;
        }
        if (typeof e !== typeof t) {
          return false;
        }
        if (e && t && typeof e === "object" && typeof t === "object") {
          return !Object.keys(t).some(function (r) {
            return !j(e[r], t[r]);
          });
        }
        return false;
      }
      function O(e, t) {
        if (e === t) {
          return e;
        }
        var r = Array.isArray(e) && Array.isArray(t);
        if (r || (q(e) && q(t))) {
          var n = r ? e.length : Object.keys(e).length;
          var i = r ? t : Object.keys(t);
          var o = i.length;
          var s = r ? [] : {};
          var u = 0;
          for (var a = 0; a < o; a++) {
            var c = r ? a : i[a];
            s[c] = O(e[c], t[c]);
            if (s[c] === e[c]) {
              u++;
            }
          }
          return n === o && u === n ? e : s;
        }
        return t;
      }
      function _(e, t) {
        if ((e && !t) || (t && !e)) {
          return false;
        }
        for (var r in e) {
          if (e[r] !== t[r]) {
            return false;
          }
        }
        return true;
      }
      function q(e) {
        if (!w(e)) {
          return false;
        }
        var t = e.constructor;
        if (typeof t === "undefined") {
          return true;
        }
        var r = t.prototype;
        if (!w(r)) {
          return false;
        }
        if (!r.hasOwnProperty("isPrototypeOf")) {
          return false;
        }
        return true;
      }
      function w(e) {
        return Object.prototype.toString.call(e) === "[object Object]";
      }
      function C(e) {
        return typeof e === "string" || Array.isArray(e);
      }
      function P(e) {
        return e instanceof Error;
      }
      function S(e) {
        return new Promise(function (t) {
          setTimeout(t, e);
        });
      }
      function F(e) {
        return {
          status: e,
          isLoading: e === "loading",
          isSuccess: e === "success",
          isError: e === "error",
          isIdle: e === "idle",
        };
      }
      function R(e) {
        Promise.resolve()
          .then(e)
          .catch(function (e) {
            return setTimeout(function () {
              throw e;
            });
          });
      }
    },
    "./node_modules/react-query/es/index.js": function (e, t, r) {
      "use strict";
      var n = r("./node_modules/react-query/es/core/index.js");
      if (r.o(n, "QueryClient"))
        r.d(t, "QueryClient", function () {
          return n["QueryClient"];
        });
      if (r.o(n, "QueryClientProvider"))
        r.d(t, "QueryClientProvider", function () {
          return n["QueryClientProvider"];
        });
      if (r.o(n, "useMutation"))
        r.d(t, "useMutation", function () {
          return n["useMutation"];
        });
      if (r.o(n, "useQuery"))
        r.d(t, "useQuery", function () {
          return n["useQuery"];
        });
      var i = r("./node_modules/react-query/es/react/index.js");
      if (r.o(i, "QueryClient"))
        r.d(t, "QueryClient", function () {
          return i["QueryClient"];
        });
      if (r.o(i, "QueryClientProvider"))
        r.d(t, "QueryClientProvider", function () {
          return i["QueryClientProvider"];
        });
      if (r.o(i, "useMutation"))
        r.d(t, "useMutation", function () {
          return i["useMutation"];
        });
      if (r.o(i, "useQuery"))
        r.d(t, "useQuery", function () {
          return i["useQuery"];
        });
    },
    "./node_modules/react-query/es/react/QueryClientProvider.js": function (
      e,
      t,
      r
    ) {
      "use strict";
      r.d(t, "b", function () {
        return u;
      });
      r.d(t, "a", function () {
        return a;
      });
      var n = r("./node_modules/react/index.js");
      var i = r.n(n);
      var o = (function () {
        var e = i.a.createContext(undefined);
        if (typeof window !== "undefined") {
          window.ReactQueryClientContext = e;
        }
        return e;
      })();
      function s() {
        var e;
        return typeof window !== "undefined"
          ? (e = window.ReactQueryClientContext) != null
            ? e
            : o
          : o;
      }
      var u = function e() {
        var t = i.a.useContext(s());
        if (!t) {
          throw new Error(
            "No QueryClient set, use QueryClientProvider to set one"
          );
        }
        return t;
      };
      var a = function e(t) {
        var r = t.client,
          n = t.children;
        i.a.useEffect(
          function () {
            r.mount();
            return function () {
              r.unmount();
            };
          },
          [r]
        );
        var o = s();
        return i.a.createElement(o.Provider, { value: r }, n);
      };
    },
    "./node_modules/react-query/es/react/QueryErrorResetBoundary.js": function (
      e,
      t,
      r
    ) {
      "use strict";
      r.d(t, "a", function () {
        return u;
      });
      var n = r("./node_modules/react/index.js");
      var i = r.n(n);
      function o() {
        var e = false;
        return {
          clearReset: function t() {
            e = false;
          },
          reset: function t() {
            e = true;
          },
          isReset: function t() {
            return e;
          },
        };
      }
      var s = i.a.createContext(o());
      var u = function e() {
        return i.a.useContext(s);
      };
      var a = function e(t) {
        var r = t.children;
        var n = i.a.useMemo(function () {
          return o();
        }, []);
        return i.a.createElement(
          s.Provider,
          { value: n },
          typeof r === "function" ? r(n) : r
        );
      };
    },
    "./node_modules/react-query/es/react/index.js": function (e, t, r) {
      "use strict";
      var n = r("./node_modules/react-query/es/react/setBatchUpdatesFn.js");
      var i = r("./node_modules/react-query/es/react/setLogger.js");
      var o = r("./node_modules/react-query/es/react/QueryClientProvider.js");
      r.d(t, "QueryClientProvider", function () {
        return o["a"];
      });
      var s = r("./node_modules/react-query/es/react/useMutation.js");
      r.d(t, "useMutation", function () {
        return s["a"];
      });
      var u = r("./node_modules/react-query/es/react/useQuery.js");
      r.d(t, "useQuery", function () {
        return u["a"];
      });
      var a = r("./node_modules/react-query/es/react/types.js");
      var c = r.n(a);
      if (r.o(a, "QueryClient"))
        r.d(t, "QueryClient", function () {
          return a["QueryClient"];
        });
    },
    "./node_modules/react-query/es/react/setBatchUpdatesFn.js": function (
      e,
      t,
      r
    ) {
      "use strict";
      var n = r("./node_modules/react-query/es/core/notifyManager.js");
      var i = r("./node_modules/react-dom/index.js");
      var o = r.n(i);
      var s = o.a.unstable_batchedUpdates;
      n["a"].setBatchNotifyFunction(s);
    },
    "./node_modules/react-query/es/react/setLogger.js": function (e, t, r) {
      "use strict";
      var n = r("./node_modules/react-query/es/core/logger.js");
      var i = console;
      if (i) {
        Object(n["b"])(i);
      }
    },
    "./node_modules/react-query/es/react/types.js": function (e, t) {},
    "./node_modules/react-query/es/react/useMutation.js": function (e, t, r) {
      "use strict";
      r.d(t, "a", function () {
        return l;
      });
      var n = r("./node_modules/@babel/runtime/helpers/esm/extends.js");
      var i = r("./node_modules/react/index.js");
      var o = r.n(i);
      var s = r("./node_modules/react-query/es/core/notifyManager.js");
      var u = r("./node_modules/react-query/es/core/utils.js");
      var a = r("./node_modules/react-query/es/core/mutationObserver.js");
      var c = r("./node_modules/react-query/es/react/QueryClientProvider.js");
      function l(e, t, r) {
        var i = Object(u["k"])(e, t, r);
        var l = Object(c["b"])();
        var f = o.a.useRef();
        var d = f.current || new a["a"](l, i);
        f.current = d;
        if (d.hasListeners()) {
          d.setOptions(i);
        }
        var h = o.a.useState(function () {
            return d.getCurrentResult();
          }),
          v = h[0],
          p = h[1];
        o.a.useEffect(
          function () {
            return d.subscribe(
              s["a"].batchCalls(function (e) {
                if (d.hasListeners()) {
                  p(e);
                }
              })
            );
          },
          [d]
        );
        var y = o.a.useCallback(
          function (e, t) {
            d.mutate(e, t).catch(u["i"]);
          },
          [d]
        );
        if (v.error && d.options.useErrorBoundary) {
          throw v.error;
        }
        return Object(n["a"])({}, v, { mutate: y, mutateAsync: v.mutate });
      }
    },
    "./node_modules/react-query/es/react/useQuery.js": function (e, t, r) {
      "use strict";
      var n = r("./node_modules/react-query/es/core/queryObserver.js");
      var i = r("./node_modules/react-query/es/core/utils.js");
      var o = r("./node_modules/react/index.js");
      var s = r.n(o);
      var u = r("./node_modules/react-query/es/core/notifyManager.js");
      var a = r(
        "./node_modules/react-query/es/react/QueryErrorResetBoundary.js"
      );
      var c = r("./node_modules/react-query/es/react/QueryClientProvider.js");
      function l(e, t) {
        var r = Object(c["b"])();
        var n = Object(a["a"])();
        var i = r.defaultQueryObserverOptions(e);
        if (i.onError) {
          i.onError = u["a"].batchCalls(i.onError);
        }
        if (i.onSuccess) {
          i.onSuccess = u["a"].batchCalls(i.onSuccess);
        }
        if (i.onSettled) {
          i.onSettled = u["a"].batchCalls(i.onSettled);
        }
        if (i.suspense) {
          if (typeof i.staleTime !== "number") {
            i.staleTime = 1e3;
          }
          if (!n.isReset()) {
            i.retryOnMount = false;
          }
        }
        var o = s.a.useRef();
        var l = o.current || new t(r, i);
        o.current = l;
        if (l.hasListeners()) {
          l.setOptions(i);
        }
        var f = l.getCurrentResult();
        var d = s.a.useState(f),
          h = d[1];
        s.a.useEffect(
          function () {
            n.clearReset();
            return l.subscribe(u["a"].batchCalls(h));
          },
          [l, n]
        );
        if (l.options.suspense || l.options.useErrorBoundary) {
          if (l.options.suspense && f.isLoading) {
            n.clearReset();
            var v = l.subscribe();
            throw l.refetch().finally(v);
          }
          if (f.isError) {
            throw f.error;
          }
        }
        return l.options.notifyOnChangeProps === "tracked"
          ? l.getTrackedCurrentResult()
          : f;
      }
      r.d(t, "a", function () {
        return f;
      });
      function f(e, t, r) {
        var o = Object(i["l"])(e, t, r);
        return l(o, n["a"]);
      }
    },
  },
]);
//# sourceMappingURL=vendors~common-desktop-udlite-app~common-mobile-udlite-app~common-ufb-desktop-udlite-app~common-ufb-~f336ceb7.04b2f35290116231c531.js.map
