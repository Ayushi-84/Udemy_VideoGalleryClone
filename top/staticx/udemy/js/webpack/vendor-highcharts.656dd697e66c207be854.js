(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["vendor-highcharts"],
  {
    "./node_modules/highcharts-react-official/dist/highcharts-react.min.js":
      function (t, e, i) {
        !(function (e, n) {
          true
            ? (t.exports = n(i("./node_modules/react/index.js")))
            : undefined;
        })("undefined" != typeof self ? self : this, function (t) {
          return (function (t) {
            function e(n) {
              if (i[n]) return i[n].exports;
              var o = (i[n] = { i: n, l: !1, exports: {} });
              return (
                t[n].call(o.exports, o, o.exports, e), (o.l = !0), o.exports
              );
            }
            var i = {};
            return (
              (e.m = t),
              (e.c = i),
              (e.d = function (t, i, n) {
                e.o(t, i) ||
                  Object.defineProperty(t, i, {
                    configurable: !1,
                    enumerable: !0,
                    get: n,
                  });
              }),
              (e.n = function (t) {
                var i =
                  t && t.__esModule
                    ? function () {
                        return t.default;
                      }
                    : function () {
                        return t;
                      };
                return e.d(i, "a", i), i;
              }),
              (e.o = function (t, e) {
                return Object.prototype.hasOwnProperty.call(t, e);
              }),
              (e.p = ""),
              e((e.s = 0))
            );
          })([
            function (t, e, i) {
              "use strict";
              function n() {
                return (
                  (n =
                    Object.assign ||
                    function (t) {
                      for (var e = 1; e < arguments.length; e++) {
                        var i = arguments[e];
                        for (var n in i)
                          Object.prototype.hasOwnProperty.call(i, n) &&
                            (t[n] = i[n]);
                      }
                      return t;
                    }),
                  n.apply(this, arguments)
                );
              }
              function o(t) {
                return h(t) || a(t) || s(t) || r();
              }
              function r() {
                throw new TypeError(
                  "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                );
              }
              function s(t, e) {
                if (t) {
                  if ("string" == typeof t) return l(t, e);
                  var i = Object.prototype.toString.call(t).slice(8, -1);
                  return (
                    "Object" === i && t.constructor && (i = t.constructor.name),
                    "Map" === i || "Set" === i
                      ? Array.from(t)
                      : "Arguments" === i ||
                        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)
                      ? l(t, e)
                      : void 0
                  );
                }
              }
              function a(t) {
                if (
                  ("undefined" != typeof Symbol &&
                    null != t[Symbol.iterator]) ||
                  null != t["@@iterator"]
                )
                  return Array.from(t);
              }
              function h(t) {
                if (Array.isArray(t)) return l(t);
              }
              function l(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
                return n;
              }
              function c(t) {
                "@babel/helpers - typeof";
                return (c =
                  "function" == typeof Symbol &&
                  "symbol" == typeof Symbol.iterator
                    ? function (t) {
                        return typeof t;
                      }
                    : function (t) {
                        return t &&
                          "function" == typeof Symbol &&
                          t.constructor === Symbol &&
                          t !== Symbol.prototype
                          ? "symbol"
                          : typeof t;
                      })(t);
              }
              Object.defineProperty(e, "__esModule", { value: !0 });
              var d = i(1),
                p = i.n(d),
                u =
                  "undefined" != typeof window
                    ? d.useLayoutEffect
                    : d.useEffect,
                f = Object(d.forwardRef)(function (t, e) {
                  var i = Object(d.useRef)(),
                    r = Object(d.useRef)();
                  return (
                    u(function () {
                      function e() {
                        var e =
                            t.highcharts ||
                            ("object" ===
                              ("undefined" == typeof window
                                ? "undefined"
                                : c(window)) &&
                              window.Highcharts),
                          n = t.constructorType || "chart";
                        e
                          ? e[n]
                            ? t.options
                              ? (r.current = e[n](
                                  i.current,
                                  t.options,
                                  t.callback ? t.callback : void 0
                                ))
                              : console.warn(
                                  'The "options" property was not passed.'
                                )
                            : console.warn(
                                'The "constructorType" property is incorrect or some required module is not imported.'
                              )
                          : console.warn(
                              'The "highcharts" property was not passed.'
                            );
                      }
                      if (r.current) {
                        if (!1 !== t.allowChartUpdate)
                          if (!t.immutable && r.current) {
                            var n;
                            (n = r.current).update.apply(
                              n,
                              [t.options].concat(o(t.updateArgs || [!0, !0]))
                            );
                          } else e();
                      } else e();
                    }),
                    u(function () {
                      return function () {
                        r.current && (r.current.destroy(), (r.current = null));
                      };
                    }, []),
                    Object(d.useImperativeHandle)(
                      e,
                      function () {
                        return {
                          get chart() {
                            return r.current;
                          },
                          container: i,
                        };
                      },
                      []
                    ),
                    p.a.createElement(
                      "div",
                      n({}, t.containerProps, { ref: i })
                    )
                  );
                });
              e.default = Object(d.memo)(f);
            },
            function (e, i) {
              e.exports = t;
            },
          ]);
        });
      },
    "./node_modules/highcharts/highcharts.js": function (t, e, i) {
      "use strict";
      var n;
      (function (o, r) {
        true && t.exports
          ? ((r["default"] = r), (t.exports = o.document ? r(o) : r))
          : true
          ? !((n = function () {
              return r(o);
            }.call(e, i, e, t)),
            n !== undefined && (t.exports = n))
          : undefined;
      })("undefined" !== typeof window ? window : this, function (t) {
        function e(t, e, i, n) {
          t.hasOwnProperty(e) || (t[e] = n.apply(null, i));
        }
        var i = {};
        e(i, "Core/Globals.js", [], function () {
          var e =
              "undefined" !== typeof t
                ? t
                : "undefined" !== typeof window
                ? window
                : {},
            i;
          (function (t) {
            t.SVG_NS = "http://www.w3.org/2000/svg";
            t.product = "Highcharts";
            t.version = "9.2.2";
            t.win = e;
            t.doc = t.win.document;
            t.svg =
              t.doc &&
              t.doc.createElementNS &&
              !!t.doc.createElementNS(t.SVG_NS, "svg").createSVGRect;
            t.userAgent = (t.win.navigator && t.win.navigator.userAgent) || "";
            t.isChrome = -1 !== t.userAgent.indexOf("Chrome");
            t.isFirefox = -1 !== t.userAgent.indexOf("Firefox");
            t.isMS = /(edge|msie|trident)/i.test(t.userAgent) && !t.win.opera;
            t.isSafari = !t.isChrome && -1 !== t.userAgent.indexOf("Safari");
            t.isTouchDevice = /(Mobile|Android|Windows Phone)/.test(
              t.userAgent
            );
            t.isWebKit = -1 !== t.userAgent.indexOf("AppleWebKit");
            t.deg2rad = (2 * Math.PI) / 360;
            t.hasBidiBug =
              t.isFirefox && 4 > parseInt(t.userAgent.split("Firefox/")[1], 10);
            t.hasTouch = !!t.win.TouchEvent;
            t.marginNames = [
              "plotTop",
              "marginRight",
              "marginBottom",
              "plotLeft",
            ];
            t.noop = function () {};
            t.supportsPassiveEvents = (function () {
              var e = !1;
              if (!t.isMS) {
                var i = Object.defineProperty({}, "passive", {
                  get: function () {
                    e = !0;
                  },
                });
                t.win.addEventListener &&
                  t.win.removeEventListener &&
                  (t.win.addEventListener("testPassive", t.noop, i),
                  t.win.removeEventListener("testPassive", t.noop, i));
              }
              return e;
            })();
            t.charts = [];
            t.dateFormats = {};
            t.seriesTypes = {};
            t.symbolSizes = {};
            t.chartCount = 0;
          })(i || (i = {}));
          ("");
          return i;
        });
        e(i, "Core/Utilities.js", [i["Core/Globals.js"]], function (t) {
          function e(i, n, o, r) {
            var s = n ? "Highcharts error" : "Highcharts warning";
            32 === i && (i = s + ": Deprecated member");
            var a = l(i),
              h = a
                ? s + " #" + i + ": www.highcharts.com/errors/" + i + "/"
                : i.toString();
            if ("undefined" !== typeof r) {
              var c = "";
              a && (h += "?");
              v(r, function (t, e) {
                c += "\n - " + e + ": " + t;
                a && (h += encodeURI(e) + "=" + encodeURI(t));
              });
              h += c;
            }
            b(
              t,
              "displayError",
              { chart: o, code: i, message: h, params: r },
              function () {
                if (n) throw Error(h);
                S.console && -1 === e.messages.indexOf(h) && console.warn(h);
              }
            );
            e.messages.push(h);
          }
          function i(t, e) {
            var n = {};
            v(t, function (o, r) {
              if (s(t[r], !0) && !t.nodeType && e[r])
                (o = i(t[r], e[r])), Object.keys(o).length && (n[r] = o);
              else if (s(t[r]) || t[r] !== e[r]) n[r] = t[r];
            });
            return n;
          }
          function n(t, e) {
            return parseInt(t, e || 10);
          }
          function o(t) {
            return "string" === typeof t;
          }
          function r(t) {
            t = Object.prototype.toString.call(t);
            return "[object Array]" === t || "[object Array Iterator]" === t;
          }
          function s(t, e) {
            return !!t && "object" === typeof t && (!e || !r(t));
          }
          function a(t) {
            return s(t) && "number" === typeof t.nodeType;
          }
          function h(t) {
            var e = t && t.constructor;
            return !(!s(t, !0) || a(t) || !e || !e.name || "Object" === e.name);
          }
          function l(t) {
            return (
              "number" === typeof t &&
              !isNaN(t) &&
              Infinity > t &&
              -Infinity < t
            );
          }
          function c(t) {
            return "undefined" !== typeof t && null !== t;
          }
          function d(t, e, i) {
            var n;
            o(e)
              ? c(i)
                ? t.setAttribute(e, i)
                : t &&
                  t.getAttribute &&
                  ((n = t.getAttribute(e)) ||
                    "class" !== e ||
                    (n = t.getAttribute(e + "Name")))
              : v(e, function (e, i) {
                  t.setAttribute(i, e);
                });
            return n;
          }
          function p(t, e) {
            var i;
            t || (t = {});
            for (i in e) t[i] = e[i];
            return t;
          }
          function u() {
            for (var t = arguments, e = t.length, i = 0; i < e; i++) {
              var n = t[i];
              if ("undefined" !== typeof n && null !== n) return n;
            }
          }
          function f(e, i) {
            t.isMS &&
              !t.svg &&
              i &&
              "undefined" !== typeof i.opacity &&
              (i.filter = "alpha(opacity=" + 100 * i.opacity + ")");
            p(e.style, i);
          }
          function g(t, e, i, n, o) {
            t = w.createElement(t);
            e && p(t, e);
            o && f(t, { padding: "0", border: "none", margin: "0" });
            i && f(t, i);
            n && n.appendChild(t);
            return t;
          }
          function m(t, e) {
            return parseFloat(t.toPrecision(e || 14));
          }
          function y(i, o, r) {
            var s = t.getStyle || y;
            if ("width" === o)
              return (
                (o = Math.min(i.offsetWidth, i.scrollWidth)),
                (r =
                  i.getBoundingClientRect && i.getBoundingClientRect().width),
                r < o && r >= o - 1 && (o = Math.floor(r)),
                Math.max(
                  0,
                  o -
                    (s(i, "padding-left", !0) || 0) -
                    (s(i, "padding-right", !0) || 0)
                )
              );
            if ("height" === o)
              return Math.max(
                0,
                Math.min(i.offsetHeight, i.scrollHeight) -
                  (s(i, "padding-top", !0) || 0) -
                  (s(i, "padding-bottom", !0) || 0)
              );
            S.getComputedStyle || e(27, !0);
            if ((i = S.getComputedStyle(i, void 0))) {
              var a = i.getPropertyValue(o);
              u(r, "opacity" !== o) && (a = n(a));
            }
            return a;
          }
          function v(t, e, i) {
            for (var n in t)
              Object.hasOwnProperty.call(t, n) && e.call(i || t[n], t[n], n, t);
          }
          function x(e, i, n) {
            function o(i, n) {
              var o = e.removeEventListener || t.removeEventListenerPolyfill;
              o && o.call(e, i, n, !1);
            }
            function r(t) {
              var n;
              if (e.nodeName) {
                if (i) {
                  var r = {};
                  r[i] = !0;
                } else r = t;
                v(r, function (e, i) {
                  if (t[i]) for (n = t[i].length; n--; ) o(i, t[i][n].fn);
                });
              }
            }
            var s = ("function" === typeof e && e.prototype) || e;
            if (Object.hasOwnProperty.call(s, "hcEvents")) {
              var a = s.hcEvents;
              i
                ? ((s = a[i] || []),
                  n
                    ? ((a[i] = s.filter(function (t) {
                        return n !== t.fn;
                      })),
                      o(i, n))
                    : (r(a), (a[i] = [])))
                : (r(a), delete s.hcEvents);
            }
          }
          function b(e, i, n, o) {
            n = n || {};
            if (
              w.createEvent &&
              (e.dispatchEvent || (e.fireEvent && e !== t))
            ) {
              var r = w.createEvent("Events");
              r.initEvent(i, !0, !0);
              n = p(r, n);
              e.dispatchEvent ? e.dispatchEvent(n) : e.fireEvent(i, n);
            } else if (e.hcEvents) {
              n.target ||
                p(n, {
                  preventDefault: function () {
                    n.defaultPrevented = !0;
                  },
                  target: e,
                  type: i,
                });
              r = [];
              for (var s = e, a = !1; s.hcEvents; )
                Object.hasOwnProperty.call(s, "hcEvents") &&
                  s.hcEvents[i] &&
                  (r.length && (a = !0), r.unshift.apply(r, s.hcEvents[i])),
                  (s = Object.getPrototypeOf(s));
              a &&
                r.sort(function (t, e) {
                  return t.order - e.order;
                });
              r.forEach(function (t) {
                !1 === t.fn.call(e, n) && n.preventDefault();
              });
            }
            o && !n.defaultPrevented && o.call(e, n);
          }
          var C = t.charts,
            w = t.doc,
            S = t.win;
          (e || (e = {})).messages = [];
          var A;
          Math.easeInOutSine = function (t) {
            return -0.5 * (Math.cos(Math.PI * t) - 1);
          };
          var k = Array.prototype.find
            ? function (t, e) {
                return t.find(e);
              }
            : function (t, e) {
                var i,
                  n = t.length;
                for (i = 0; i < n; i++) if (e(t[i], i)) return t[i];
              };
          v(
            {
              map: "map",
              each: "forEach",
              grep: "filter",
              reduce: "reduce",
              some: "some",
            },
            function (i, n) {
              t[n] = function (t) {
                var o;
                e(
                  32,
                  !1,
                  void 0,
                  ((o = {}), (o["Highcharts." + n] = "use Array." + i), o)
                );
                return Array.prototype[i].apply(t, [].slice.call(arguments, 1));
              };
            }
          );
          var T,
            M = (function () {
              var t = Math.random().toString(36).substring(2, 9) + "-",
                e = 0;
              return function () {
                return "highcharts-" + (T ? "" : t) + e++;
              };
            })();
          S.jQuery &&
            (S.jQuery.fn.highcharts = function () {
              var e = [].slice.call(arguments);
              if (this[0])
                return e[0]
                  ? (new t[o(e[0]) ? e.shift() : "Chart"](this[0], e[0], e[1]),
                    this)
                  : C[d(this[0], "data-highcharts-chart")];
            });
          k = {
            addEvent: function (e, i, n, o) {
              void 0 === o && (o = {});
              var r = ("function" === typeof e && e.prototype) || e;
              Object.hasOwnProperty.call(r, "hcEvents") || (r.hcEvents = {});
              r = r.hcEvents;
              t.Point &&
                e instanceof t.Point &&
                e.series &&
                e.series.chart &&
                (e.series.chart.runTrackerClick = !0);
              var s = e.addEventListener || t.addEventListenerPolyfill;
              s &&
                s.call(
                  e,
                  i,
                  n,
                  t.supportsPassiveEvents
                    ? {
                        passive:
                          void 0 === o.passive
                            ? -1 !== i.indexOf("touch")
                            : o.passive,
                        capture: !1,
                      }
                    : !1
                );
              r[i] || (r[i] = []);
              r[i].push({
                fn: n,
                order: "number" === typeof o.order ? o.order : Infinity,
              });
              r[i].sort(function (t, e) {
                return t.order - e.order;
              });
              return function () {
                x(e, i, n);
              };
            },
            arrayMax: function (t) {
              for (var e = t.length, i = t[0]; e--; ) t[e] > i && (i = t[e]);
              return i;
            },
            arrayMin: function (t) {
              for (var e = t.length, i = t[0]; e--; ) t[e] < i && (i = t[e]);
              return i;
            },
            attr: d,
            clamp: function (t, e, i) {
              return t > e ? (t < i ? t : i) : e;
            },
            cleanRecursively: i,
            clearTimeout: function (t) {
              c(t) && clearTimeout(t);
            },
            correctFloat: m,
            createElement: g,
            css: f,
            defined: c,
            destroyObjectProperties: function (t, e) {
              v(t, function (i, n) {
                i && i !== e && i.destroy && i.destroy();
                delete t[n];
              });
            },
            discardElement: function (t) {
              A || (A = g("div"));
              t && A.appendChild(t);
              A.innerHTML = "";
            },
            erase: function (t, e) {
              for (var i = t.length; i--; )
                if (t[i] === e) {
                  t.splice(i, 1);
                  break;
                }
            },
            error: e,
            extend: p,
            extendClass: function (t, e) {
              var i = function () {};
              i.prototype = new t();
              p(i.prototype, e);
              return i;
            },
            find: k,
            fireEvent: b,
            getMagnitude: function (t) {
              return Math.pow(10, Math.floor(Math.log(t) / Math.LN10));
            },
            getNestedProperty: function (t, e) {
              for (t = t.split("."); t.length && c(e); ) {
                var i = t.shift();
                if ("undefined" === typeof i || "__proto__" === i) return;
                e = e[i];
                if (
                  !c(e) ||
                  "function" === typeof e ||
                  "number" === typeof e.nodeType ||
                  e === S
                )
                  return;
              }
              return e;
            },
            getStyle: y,
            inArray: function (t, i, n) {
              e(32, !1, void 0, { "Highcharts.inArray": "use Array.indexOf" });
              return i.indexOf(t, n);
            },
            isArray: r,
            isClass: h,
            isDOMElement: a,
            isFunction: function (t) {
              return "function" === typeof t;
            },
            isNumber: l,
            isObject: s,
            isString: o,
            keys: function (t) {
              e(32, !1, void 0, { "Highcharts.keys": "use Object.keys" });
              return Object.keys(t);
            },
            merge: function () {
              var t,
                e = arguments,
                i = {},
                n = function (t, e) {
                  "object" !== typeof t && (t = {});
                  v(e, function (i, o) {
                    "__proto__" !== o &&
                      "constructor" !== o &&
                      (!s(i, !0) || h(i) || a(i)
                        ? (t[o] = e[o])
                        : (t[o] = n(t[o] || {}, i)));
                  });
                  return t;
                };
              !0 === e[0] &&
                ((i = e[1]), (e = Array.prototype.slice.call(e, 2)));
              var o = e.length;
              for (t = 0; t < o; t++) i = n(i, e[t]);
              return i;
            },
            normalizeTickInterval: function (t, e, i, n, o) {
              var r = t;
              i = u(i, 1);
              var s = t / i;
              e ||
                ((e = o
                  ? [1, 1.2, 1.5, 2, 2.5, 3, 4, 5, 6, 8, 10]
                  : [1, 2, 2.5, 5, 10]),
                !1 === n &&
                  (1 === i
                    ? (e = e.filter(function (t) {
                        return 0 === t % 1;
                      }))
                    : 0.1 >= i && (e = [1 / i])));
              for (
                n = 0;
                n < e.length &&
                !((r = e[n]),
                (o && r * i >= t) ||
                  (!o && s <= (e[n] + (e[n + 1] || e[n])) / 2));
                n++
              );
              return (r = m(r * i, -Math.round(Math.log(0.001) / Math.LN10)));
            },
            objectEach: v,
            offset: function (t) {
              var e = w.documentElement;
              t =
                t.parentElement || t.parentNode
                  ? t.getBoundingClientRect()
                  : { top: 0, left: 0, width: 0, height: 0 };
              return {
                top:
                  t.top + (S.pageYOffset || e.scrollTop) - (e.clientTop || 0),
                left:
                  t.left +
                  (S.pageXOffset || e.scrollLeft) -
                  (e.clientLeft || 0),
                width: t.width,
                height: t.height,
              };
            },
            pad: function (t, e, i) {
              return (
                Array((e || 2) + 1 - String(t).replace("-", "").length).join(
                  i || "0"
                ) + t
              );
            },
            pick: u,
            pInt: n,
            relativeLength: function (t, e, i) {
              return /%$/.test(t)
                ? (e * parseFloat(t)) / 100 + (i || 0)
                : parseFloat(t);
            },
            removeEvent: x,
            splat: function (t) {
              return r(t) ? t : [t];
            },
            stableSort: function (t, e) {
              var i = t.length,
                n,
                o;
              for (o = 0; o < i; o++) t[o].safeI = o;
              t.sort(function (t, i) {
                n = e(t, i);
                return 0 === n ? t.safeI - i.safeI : n;
              });
              for (o = 0; o < i; o++) delete t[o].safeI;
            },
            syncTimeout: function (t, e, i) {
              if (0 < e) return setTimeout(t, e, i);
              t.call(0, i);
              return -1;
            },
            timeUnits: {
              millisecond: 1,
              second: 1e3,
              minute: 6e4,
              hour: 36e5,
              day: 864e5,
              week: 6048e5,
              month: 24192e5,
              year: 314496e5,
            },
            uniqueKey: M,
            useSerialIds: function (t) {
              return (T = u(t, T));
            },
            wrap: function (t, e, i) {
              var n = t[e];
              t[e] = function () {
                var t = Array.prototype.slice.call(arguments),
                  e = arguments,
                  o = this;
                o.proceed = function () {
                  n.apply(o, arguments.length ? arguments : e);
                };
                t.unshift(n);
                t = i.apply(this, t);
                o.proceed = null;
                return t;
              };
            },
          };
          ("");
          return k;
        });
        e(i, "Core/Color/Palette.js", [], function () {
          return {
            colors:
              "#7cb5ec #434348 #90ed7d #f7a35c #8085e9 #f15c80 #e4d354 #2b908f #f45b5b #91e8e1".split(
                " "
              ),
            backgroundColor: "#ffffff",
            neutralColor100: "#000000",
            neutralColor80: "#333333",
            neutralColor60: "#666666",
            neutralColor40: "#999999",
            neutralColor20: "#cccccc",
            neutralColor10: "#e6e6e6",
            neutralColor5: "#f2f2f2",
            neutralColor3: "#f7f7f7",
            highlightColor100: "#003399",
            highlightColor80: "#335cad",
            highlightColor60: "#6685c2",
            highlightColor20: "#ccd6eb",
            highlightColor10: "#e6ebf5",
            positiveColor: "#06b535",
            negativeColor: "#f21313",
          };
        });
        e(
          i,
          "Core/Chart/ChartDefaults.js",
          [i["Core/Color/Palette.js"]],
          function (t) {
            return {
              panning: { enabled: !1, type: "x" },
              styledMode: !1,
              borderRadius: 0,
              colorCount: 10,
              defaultSeriesType: "line",
              ignoreHiddenSeries: !0,
              spacing: [10, 10, 15, 10],
              resetZoomButton: {
                theme: { zIndex: 6 },
                position: { align: "right", x: -10, y: 10 },
              },
              zoomBySingleTouch: !1,
              width: null,
              height: null,
              borderColor: t.highlightColor80,
              backgroundColor: t.backgroundColor,
              plotBorderColor: t.neutralColor20,
            };
          }
        );
        e(
          i,
          "Core/Color/Color.js",
          [i["Core/Globals.js"], i["Core/Utilities.js"]],
          function (t, e) {
            var i = e.isNumber,
              n = e.merge,
              o = e.pInt;
            e = (function () {
              function e(i) {
                this.rgba = [NaN, NaN, NaN, NaN];
                this.input = i;
                var n = t.Color;
                if (n && n !== e) return new n(i);
                if (!(this instanceof e)) return new e(i);
                this.init(i);
              }
              e.parse = function (t) {
                return t ? new e(t) : e.None;
              };
              e.prototype.init = function (t) {
                var i;
                if ("object" === typeof t && "undefined" !== typeof t.stops)
                  this.stops = t.stops.map(function (t) {
                    return new e(t[1]);
                  });
                else if ("string" === typeof t) {
                  this.input = t = e.names[t.toLowerCase()] || t;
                  if ("#" === t.charAt(0)) {
                    var n = t.length;
                    var o = parseInt(t.substr(1), 16);
                    7 === n
                      ? (i = [
                          (o & 16711680) >> 16,
                          (o & 65280) >> 8,
                          o & 255,
                          1,
                        ])
                      : 4 === n &&
                        (i = [
                          ((o & 3840) >> 4) | ((o & 3840) >> 8),
                          ((o & 240) >> 4) | (o & 240),
                          ((o & 15) << 4) | (o & 15),
                          1,
                        ]);
                  }
                  if (!i)
                    for (o = e.parsers.length; o-- && !i; ) {
                      var r = e.parsers[o];
                      (n = r.regex.exec(t)) && (i = r.parse(n));
                    }
                }
                i && (this.rgba = i);
              };
              e.prototype.get = function (t) {
                var e = this.input,
                  o = this.rgba;
                if (
                  "object" === typeof e &&
                  "undefined" !== typeof this.stops
                ) {
                  var r = n(e);
                  r.stops = [].slice.call(r.stops);
                  this.stops.forEach(function (e, i) {
                    r.stops[i] = [r.stops[i][0], e.get(t)];
                  });
                  return r;
                }
                return o && i(o[0])
                  ? "rgb" === t || (!t && 1 === o[3])
                    ? "rgb(" + o[0] + "," + o[1] + "," + o[2] + ")"
                    : "a" === t
                    ? "" + o[3]
                    : "rgba(" + o.join(",") + ")"
                  : e;
              };
              e.prototype.brighten = function (t) {
                var e = this.rgba;
                if (this.stops)
                  this.stops.forEach(function (e) {
                    e.brighten(t);
                  });
                else if (i(t) && 0 !== t)
                  for (var n = 0; 3 > n; n++)
                    (e[n] += o(255 * t)),
                      0 > e[n] && (e[n] = 0),
                      255 < e[n] && (e[n] = 255);
                return this;
              };
              e.prototype.setOpacity = function (t) {
                this.rgba[3] = t;
                return this;
              };
              e.prototype.tweenTo = function (t, e) {
                var n = this.rgba,
                  o = t.rgba;
                if (!i(n[0]) || !i(o[0])) return t.input || "none";
                t = 1 !== o[3] || 1 !== n[3];
                return (
                  (t ? "rgba(" : "rgb(") +
                  Math.round(o[0] + (n[0] - o[0]) * (1 - e)) +
                  "," +
                  Math.round(o[1] + (n[1] - o[1]) * (1 - e)) +
                  "," +
                  Math.round(o[2] + (n[2] - o[2]) * (1 - e)) +
                  (t ? "," + (o[3] + (n[3] - o[3]) * (1 - e)) : "") +
                  ")"
                );
              };
              e.names = { white: "#ffffff", black: "#000000" };
              e.parsers = [
                {
                  regex:
                    /rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]?(?:\.[0-9]+)?)\s*\)/,
                  parse: function (t) {
                    return [o(t[1]), o(t[2]), o(t[3]), parseFloat(t[4], 10)];
                  },
                },
                {
                  regex:
                    /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/,
                  parse: function (t) {
                    return [o(t[1]), o(t[2]), o(t[3]), 1];
                  },
                },
              ];
              e.None = new e("");
              return e;
            })();
            ("");
            return e;
          }
        );
        e(
          i,
          "Core/Time.js",
          [i["Core/Globals.js"], i["Core/Utilities.js"]],
          function (t, e) {
            var i = t.win,
              n = e.defined,
              o = e.error,
              r = e.extend,
              s = e.isObject,
              a = e.merge,
              h = e.objectEach,
              l = e.pad,
              c = e.pick,
              d = e.splat,
              p = e.timeUnits,
              u =
                t.isSafari &&
                i.Intl &&
                i.Intl.DateTimeFormat.prototype.formatRange,
              f =
                t.isSafari &&
                i.Intl &&
                !i.Intl.DateTimeFormat.prototype.formatRange;
            e = (function () {
              function e(t) {
                this.options = {};
                this.variableTimezone = this.useUTC = !1;
                this.Date = i.Date;
                this.getTimezoneOffset = this.timezoneOffsetFunction();
                this.update(t);
              }
              e.prototype.get = function (t, e) {
                if (this.variableTimezone || this.timezoneOffset) {
                  var i = e.getTime(),
                    n = i - this.getTimezoneOffset(e);
                  e.setTime(n);
                  t = e["getUTC" + t]();
                  e.setTime(i);
                  return t;
                }
                return this.useUTC ? e["getUTC" + t]() : e["get" + t]();
              };
              e.prototype.set = function (t, e, i) {
                if (this.variableTimezone || this.timezoneOffset) {
                  if (
                    "Milliseconds" === t ||
                    "Seconds" === t ||
                    ("Minutes" === t && 0 === this.getTimezoneOffset(e) % 36e5)
                  )
                    return e["setUTC" + t](i);
                  var n = this.getTimezoneOffset(e);
                  n = e.getTime() - n;
                  e.setTime(n);
                  e["setUTC" + t](i);
                  t = this.getTimezoneOffset(e);
                  n = e.getTime() + t;
                  return e.setTime(n);
                }
                return this.useUTC || (u && "FullYear" === t)
                  ? e["setUTC" + t](i)
                  : e["set" + t](i);
              };
              e.prototype.update = function (t) {
                var e = c(t && t.useUTC, !0);
                this.options = t = a(!0, this.options || {}, t);
                this.Date = t.Date || i.Date || Date;
                this.timezoneOffset = (this.useUTC = e) && t.timezoneOffset;
                this.getTimezoneOffset = this.timezoneOffsetFunction();
                this.variableTimezone =
                  e && !(!t.getTimezoneOffset && !t.timezone);
              };
              e.prototype.makeTime = function (t, e, i, n, o, r) {
                if (this.useUTC) {
                  var s = this.Date.UTC.apply(0, arguments);
                  var a = this.getTimezoneOffset(s);
                  s += a;
                  var h = this.getTimezoneOffset(s);
                  a !== h
                    ? (s += h - a)
                    : a - 36e5 !== this.getTimezoneOffset(s - 36e5) ||
                      f ||
                      (s -= 36e5);
                } else
                  s = new this.Date(
                    t,
                    e,
                    c(i, 1),
                    c(n, 0),
                    c(o, 0),
                    c(r, 0)
                  ).getTime();
                return s;
              };
              e.prototype.timezoneOffsetFunction = function () {
                var t = this,
                  e = this.options,
                  n = e.moment || i.moment;
                if (!this.useUTC)
                  return function (t) {
                    return 6e4 * new Date(t.toString()).getTimezoneOffset();
                  };
                if (e.timezone) {
                  if (n)
                    return function (t) {
                      return 6e4 * -n.tz(t, e.timezone).utcOffset();
                    };
                  o(25);
                }
                return this.useUTC && e.getTimezoneOffset
                  ? function (t) {
                      return 6e4 * e.getTimezoneOffset(t.valueOf());
                    }
                  : function () {
                      return 6e4 * (t.timezoneOffset || 0);
                    };
              };
              e.prototype.dateFormat = function (e, i, o) {
                if (!n(i) || isNaN(i))
                  return (
                    (t.defaultOptions.lang &&
                      t.defaultOptions.lang.invalidDate) ||
                    ""
                  );
                e = c(e, "%Y-%m-%d %H:%M:%S");
                var s = this,
                  a = new this.Date(i),
                  d = this.get("Hours", a),
                  p = this.get("Day", a),
                  u = this.get("Date", a),
                  f = this.get("Month", a),
                  g = this.get("FullYear", a),
                  m = t.defaultOptions.lang,
                  y = m && m.weekdays,
                  v = m && m.shortWeekdays;
                a = r(
                  {
                    a: v ? v[p] : y[p].substr(0, 3),
                    A: y[p],
                    d: l(u),
                    e: l(u, 2, " "),
                    w: p,
                    b: m.shortMonths[f],
                    B: m.months[f],
                    m: l(f + 1),
                    o: f + 1,
                    y: g.toString().substr(2, 2),
                    Y: g,
                    H: l(d),
                    k: d,
                    I: l(d % 12 || 12),
                    l: d % 12 || 12,
                    M: l(this.get("Minutes", a)),
                    p: 12 > d ? "AM" : "PM",
                    P: 12 > d ? "am" : "pm",
                    S: l(a.getSeconds()),
                    L: l(Math.floor(i % 1e3), 3),
                  },
                  t.dateFormats
                );
                h(a, function (t, n) {
                  for (; -1 !== e.indexOf("%" + n); )
                    e = e.replace(
                      "%" + n,
                      "function" === typeof t ? t.call(s, i) : t
                    );
                });
                return o ? e.substr(0, 1).toUpperCase() + e.substr(1) : e;
              };
              e.prototype.resolveDTLFormat = function (t) {
                return s(t, !0)
                  ? t
                  : ((t = d(t)), { main: t[0], from: t[1], to: t[2] });
              };
              e.prototype.getTimeTicks = function (t, e, i, o) {
                var s = this,
                  a = [],
                  h = {},
                  l = new s.Date(e),
                  d = t.unitRange,
                  u = t.count || 1,
                  f;
                o = c(o, 1);
                if (n(e)) {
                  s.set(
                    "Milliseconds",
                    l,
                    d >= p.second
                      ? 0
                      : u * Math.floor(s.get("Milliseconds", l) / u)
                  );
                  d >= p.second &&
                    s.set(
                      "Seconds",
                      l,
                      d >= p.minute
                        ? 0
                        : u * Math.floor(s.get("Seconds", l) / u)
                    );
                  d >= p.minute &&
                    s.set(
                      "Minutes",
                      l,
                      d >= p.hour ? 0 : u * Math.floor(s.get("Minutes", l) / u)
                    );
                  d >= p.hour &&
                    s.set(
                      "Hours",
                      l,
                      d >= p.day ? 0 : u * Math.floor(s.get("Hours", l) / u)
                    );
                  d >= p.day &&
                    s.set(
                      "Date",
                      l,
                      d >= p.month
                        ? 1
                        : Math.max(1, u * Math.floor(s.get("Date", l) / u))
                    );
                  if (d >= p.month) {
                    s.set(
                      "Month",
                      l,
                      d >= p.year ? 0 : u * Math.floor(s.get("Month", l) / u)
                    );
                    var g = s.get("FullYear", l);
                  }
                  d >= p.year && s.set("FullYear", l, g - (g % u));
                  d === p.week &&
                    ((g = s.get("Day", l)),
                    s.set(
                      "Date",
                      l,
                      s.get("Date", l) - g + o + (g < o ? -7 : 0)
                    ));
                  g = s.get("FullYear", l);
                  o = s.get("Month", l);
                  var m = s.get("Date", l),
                    y = s.get("Hours", l);
                  e = l.getTime();
                  (!s.variableTimezone && s.useUTC) ||
                    !n(i) ||
                    (f =
                      i - e > 4 * p.month ||
                      s.getTimezoneOffset(e) !== s.getTimezoneOffset(i));
                  e = l.getTime();
                  for (l = 1; e < i; )
                    a.push(e),
                      (e =
                        d === p.year
                          ? s.makeTime(g + l * u, 0)
                          : d === p.month
                          ? s.makeTime(g, o + l * u)
                          : !f || (d !== p.day && d !== p.week)
                          ? f && d === p.hour && 1 < u
                            ? s.makeTime(g, o, m, y + l * u)
                            : e + d * u
                          : s.makeTime(
                              g,
                              o,
                              m + l * u * (d === p.day ? 1 : 7)
                            )),
                      l++;
                  a.push(e);
                  d <= p.hour &&
                    1e4 > a.length &&
                    a.forEach(function (t) {
                      0 === t % 18e5 &&
                        "000000000" === s.dateFormat("%H%M%S%L", t) &&
                        (h[t] = "day");
                    });
                }
                a.info = r(t, { higherRanks: h, totalRange: d * u });
                return a;
              };
              e.prototype.getDateFormat = function (t, e, i, n) {
                var o = this.dateFormat("%m-%d %H:%M:%S.%L", e),
                  r = {
                    millisecond: 15,
                    second: 12,
                    minute: 9,
                    hour: 6,
                    day: 3,
                  },
                  s = "millisecond";
                for (a in p) {
                  if (
                    t === p.week &&
                    +this.dateFormat("%w", e) === i &&
                    "00:00:00.000" === o.substr(6)
                  ) {
                    var a = "week";
                    break;
                  }
                  if (p[a] > t) {
                    a = s;
                    break;
                  }
                  if (
                    r[a] &&
                    o.substr(r[a]) !== "01-01 00:00:00.000".substr(r[a])
                  )
                    break;
                  "week" !== a && (s = a);
                }
                if (a) var h = this.resolveDTLFormat(n[a]).main;
                return h;
              };
              return e;
            })();
            ("");
            return e;
          }
        );
        e(
          i,
          "Core/DefaultOptions.js",
          [
            i["Core/Chart/ChartDefaults.js"],
            i["Core/Color/Color.js"],
            i["Core/Globals.js"],
            i["Core/Color/Palette.js"],
            i["Core/Time.js"],
            i["Core/Utilities.js"],
          ],
          function (t, e, i, n, o, r) {
            e = e.parse;
            var s = r.merge,
              a = {
                colors: n.colors,
                symbols: [
                  "circle",
                  "diamond",
                  "square",
                  "triangle",
                  "triangle-down",
                ],
                lang: {
                  loading: "Loading...",
                  months:
                    "January February March April May June July August September October November December".split(
                      " "
                    ),
                  shortMonths:
                    "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(
                      " "
                    ),
                  weekdays:
                    "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(
                      " "
                    ),
                  decimalPoint: ".",
                  numericSymbols: "kMGTPE".split(""),
                  resetZoom: "Reset zoom",
                  resetZoomTitle: "Reset zoom level 1:1",
                  thousandsSep: " ",
                },
                global: {},
                time: {
                  Date: void 0,
                  getTimezoneOffset: void 0,
                  timezone: void 0,
                  timezoneOffset: 0,
                  useUTC: !0,
                },
                chart: t,
                title: {
                  text: "Chart title",
                  align: "center",
                  margin: 15,
                  widthAdjust: -44,
                },
                subtitle: { text: "", align: "center", widthAdjust: -44 },
                caption: {
                  margin: 15,
                  text: "",
                  align: "left",
                  verticalAlign: "bottom",
                },
                plotOptions: {},
                labels: {
                  style: { position: "absolute", color: n.neutralColor80 },
                },
                legend: {
                  enabled: !0,
                  align: "center",
                  alignColumns: !0,
                  className: "highcharts-no-tooltip",
                  layout: "horizontal",
                  labelFormatter: function () {
                    return this.name;
                  },
                  borderColor: n.neutralColor40,
                  borderRadius: 0,
                  navigation: {
                    activeColor: n.highlightColor100,
                    inactiveColor: n.neutralColor20,
                  },
                  itemStyle: {
                    color: n.neutralColor80,
                    cursor: "pointer",
                    fontSize: "12px",
                    fontWeight: "bold",
                    textOverflow: "ellipsis",
                  },
                  itemHoverStyle: { color: n.neutralColor100 },
                  itemHiddenStyle: { color: n.neutralColor20 },
                  shadow: !1,
                  itemCheckboxStyle: {
                    position: "absolute",
                    width: "13px",
                    height: "13px",
                  },
                  squareSymbol: !0,
                  symbolPadding: 5,
                  verticalAlign: "bottom",
                  x: 0,
                  y: 0,
                  title: { style: { fontWeight: "bold" } },
                },
                loading: {
                  labelStyle: {
                    fontWeight: "bold",
                    position: "relative",
                    top: "45%",
                  },
                  style: {
                    position: "absolute",
                    backgroundColor: n.backgroundColor,
                    opacity: 0.5,
                    textAlign: "center",
                  },
                },
                tooltip: {
                  enabled: !0,
                  animation: i.svg,
                  borderRadius: 3,
                  dateTimeLabelFormats: {
                    millisecond: "%A, %b %e, %H:%M:%S.%L",
                    second: "%A, %b %e, %H:%M:%S",
                    minute: "%A, %b %e, %H:%M",
                    hour: "%A, %b %e, %H:%M",
                    day: "%A, %b %e, %Y",
                    week: "Week from %A, %b %e, %Y",
                    month: "%B %Y",
                    year: "%Y",
                  },
                  footerFormat: "",
                  headerShape: "callout",
                  hideDelay: 500,
                  padding: 8,
                  shape: "callout",
                  shared: !1,
                  snap: i.isTouchDevice ? 25 : 10,
                  headerFormat:
                    '<span style="font-size: 10px">{point.key}</span><br/>',
                  pointFormat:
                    '<span style="color:{point.color}">●</span> {series.name}: <b>{point.y}</b><br/>',
                  backgroundColor: e(n.neutralColor3).setOpacity(0.85).get(),
                  borderWidth: 1,
                  shadow: !0,
                  stickOnContact: !1,
                  style: {
                    color: n.neutralColor80,
                    cursor: "default",
                    fontSize: "12px",
                    whiteSpace: "nowrap",
                  },
                  useHTML: !1,
                },
                credits: {
                  enabled: !0,
                  href: "https://www.highcharts.com?credits",
                  position: {
                    align: "right",
                    x: -10,
                    verticalAlign: "bottom",
                    y: -5,
                  },
                  style: {
                    cursor: "pointer",
                    color: n.neutralColor40,
                    fontSize: "9px",
                  },
                  text: "Highcharts.com",
                },
              };
            a.chart.styledMode = !1;
            ("");
            var h = new o(s(a.global, a.time));
            t = {
              defaultOptions: a,
              defaultTime: h,
              getOptions: function () {
                return a;
              },
              setOptions: function (t) {
                s(!0, a, t);
                if (t.time || t.global)
                  i.time
                    ? i.time.update(s(a.global, a.time, t.global, t.time))
                    : (i.time = h);
                return a;
              },
            };
            ("");
            return t;
          }
        );
        e(
          i,
          "Core/Animation/Fx.js",
          [
            i["Core/Color/Color.js"],
            i["Core/Globals.js"],
            i["Core/Utilities.js"],
          ],
          function (t, e, i) {
            var n = t.parse,
              o = e.win,
              r = i.isNumber,
              s = i.objectEach;
            return (function () {
              function t(t, e, i) {
                this.pos = NaN;
                this.options = e;
                this.elem = t;
                this.prop = i;
              }
              t.prototype.dSetter = function () {
                var t = this.paths,
                  e = t && t[0];
                t = t && t[1];
                var i = this.now || 0,
                  n = [];
                if (1 !== i && e && t)
                  if (e.length === t.length && 1 > i)
                    for (var o = 0; o < t.length; o++) {
                      for (
                        var s = e[o], a = t[o], h = [], l = 0;
                        l < a.length;
                        l++
                      ) {
                        var c = s[l],
                          d = a[l];
                        r(c) && r(d) && ("A" !== a[0] || (4 !== l && 5 !== l))
                          ? (h[l] = c + i * (d - c))
                          : (h[l] = d);
                      }
                      n.push(h);
                    }
                  else n = t;
                else n = this.toD || [];
                this.elem.attr("d", n, void 0, !0);
              };
              t.prototype.update = function () {
                var t = this.elem,
                  e = this.prop,
                  i = this.now,
                  n = this.options.step;
                if (this[e + "Setter"]) this[e + "Setter"]();
                else
                  t.attr
                    ? t.element && t.attr(e, i, null, !0)
                    : (t.style[e] = i + this.unit);
                n && n.call(t, i, this);
              };
              t.prototype.run = function (e, i, n) {
                var r = this,
                  s = r.options,
                  a = function (t) {
                    return a.stopped ? !1 : r.step(t);
                  },
                  h =
                    o.requestAnimationFrame ||
                    function (t) {
                      setTimeout(t, 13);
                    },
                  l = function () {
                    for (var e = 0; e < t.timers.length; e++)
                      t.timers[e]() || t.timers.splice(e--, 1);
                    t.timers.length && h(l);
                  };
                e !== i || this.elem["forceAnimate:" + this.prop]
                  ? ((this.startTime = +new Date()),
                    (this.start = e),
                    (this.end = i),
                    (this.unit = n),
                    (this.now = this.start),
                    (this.pos = 0),
                    (a.elem = this.elem),
                    (a.prop = this.prop),
                    a() && 1 === t.timers.push(a) && h(l))
                  : (delete s.curAnim[this.prop],
                    s.complete &&
                      0 === Object.keys(s.curAnim).length &&
                      s.complete.call(this.elem));
              };
              t.prototype.step = function (t) {
                var e = +new Date(),
                  i = this.options,
                  n = this.elem,
                  o = i.complete,
                  r = i.duration,
                  a = i.curAnim;
                if (n.attr && !n.element) t = !1;
                else if (t || e >= r + this.startTime) {
                  this.now = this.end;
                  this.pos = 1;
                  this.update();
                  var h = (a[this.prop] = !0);
                  s(a, function (t) {
                    !0 !== t && (h = !1);
                  });
                  h && o && o.call(n);
                  t = !1;
                } else
                  (this.pos = i.easing((e - this.startTime) / r)),
                    (this.now =
                      this.start + (this.end - this.start) * this.pos),
                    this.update(),
                    (t = !0);
                return t;
              };
              t.prototype.initPath = function (t, e, i) {
                function n(t, e) {
                  for (; t.length < p; ) {
                    var i = t[0],
                      n = e[p - t.length];
                    n &&
                      "M" === i[0] &&
                      (t[0] =
                        "C" === n[0]
                          ? ["C", i[1], i[2], i[1], i[2], i[1], i[2]]
                          : ["L", i[1], i[2]]);
                    t.unshift(i);
                    h && ((i = t.pop()), t.push(t[t.length - 1], i));
                  }
                }
                function o(t, e) {
                  for (; t.length < p; )
                    if (
                      ((e = t[Math.floor(t.length / l) - 1].slice()),
                      "C" === e[0] && ((e[1] = e[5]), (e[2] = e[6])),
                      h)
                    ) {
                      var i = t[Math.floor(t.length / l)].slice();
                      t.splice(t.length / 2, 0, e, i);
                    } else t.push(e);
                }
                var s = t.startX,
                  a = t.endX;
                i = i.slice();
                var h = t.isArea,
                  l = h ? 2 : 1;
                e = e && e.slice();
                if (!e) return [i, i];
                if (s && a && a.length) {
                  for (t = 0; t < s.length; t++)
                    if (s[t] === a[0]) {
                      var c = t;
                      break;
                    } else if (s[0] === a[a.length - s.length + t]) {
                      c = t;
                      var d = !0;
                      break;
                    } else if (s[s.length - 1] === a[a.length - s.length + t]) {
                      c = s.length - t;
                      break;
                    }
                  "undefined" === typeof c && (e = []);
                }
                if (e.length && r(c)) {
                  var p = i.length + c * l;
                  d ? (n(e, i), o(i, e)) : (n(i, e), o(e, i));
                }
                return [e, i];
              };
              t.prototype.fillSetter = function () {
                t.prototype.strokeSetter.apply(this, arguments);
              };
              t.prototype.strokeSetter = function () {
                this.elem.attr(
                  this.prop,
                  n(this.start).tweenTo(n(this.end), this.pos),
                  null,
                  !0
                );
              };
              t.timers = [];
              return t;
            })();
          }
        );
        e(
          i,
          "Core/Animation/AnimationUtilities.js",
          [i["Core/Animation/Fx.js"], i["Core/Utilities.js"]],
          function (t, e) {
            function i(t) {
              return h(t)
                ? l({ duration: 500, defer: 0 }, t)
                : { duration: t ? 500 : 0, defer: 0 };
            }
            function n(e, i) {
              for (var n = t.timers.length; n--; )
                t.timers[n].elem !== e ||
                  (i && i !== t.timers[n].prop) ||
                  (t.timers[n].stopped = !0);
            }
            var o = e.defined,
              r = e.getStyle,
              s = e.isArray,
              a = e.isNumber,
              h = e.isObject,
              l = e.merge,
              c = e.objectEach,
              d = e.pick;
            return {
              animate: function (e, i, o) {
                var d,
                  p = "",
                  u,
                  f;
                if (!h(o)) {
                  var g = arguments;
                  o = { duration: g[2], easing: g[3], complete: g[4] };
                }
                a(o.duration) || (o.duration = 400);
                o.easing =
                  "function" === typeof o.easing
                    ? o.easing
                    : Math[o.easing] || Math.easeInOutSine;
                o.curAnim = l(i);
                c(i, function (a, h) {
                  n(e, h);
                  f = new t(e, o, h);
                  u = void 0;
                  "d" === h && s(i.d)
                    ? ((f.paths = f.initPath(e, e.pathArray, i.d)),
                      (f.toD = i.d),
                      (d = 0),
                      (u = 1))
                    : e.attr
                    ? (d = e.attr(h))
                    : ((d = parseFloat(r(e, h)) || 0),
                      "opacity" !== h && (p = "px"));
                  u || (u = a);
                  "string" === typeof u &&
                    u.match("px") &&
                    (u = u.replace(/px/g, ""));
                  f.run(d, u, p);
                });
              },
              animObject: i,
              getDeferredAnimation: function (t, e, n) {
                var r = i(e),
                  s = 0,
                  a = 0;
                (n ? [n] : t.series).forEach(function (t) {
                  t = i(t.options.animation);
                  s =
                    e && o(e.defer)
                      ? r.defer
                      : Math.max(s, t.duration + t.defer);
                  a = Math.min(r.duration, t.duration);
                });
                t.renderer.forExport && (s = 0);
                return { defer: Math.max(0, s - a), duration: Math.min(s, a) };
              },
              setAnimation: function (t, e) {
                e.renderer.globalAnimation = d(
                  t,
                  e.options.chart.animation,
                  !0
                );
              },
              stop: n,
            };
          }
        );
        e(
          i,
          "Core/Renderer/HTML/AST.js",
          [i["Core/Globals.js"], i["Core/Utilities.js"]],
          function (t, e) {
            var i = t.SVG_NS,
              n = e.attr,
              o = e.createElement,
              r = e.discardElement,
              s = e.error,
              a = e.isString,
              h = e.objectEach,
              l = e.splat;
            try {
              var c = !!new DOMParser().parseFromString("", "text/html");
            } catch (t) {
              c = !1;
            }
            e = (function () {
              function e(t) {
                this.nodes = "string" === typeof t ? this.parseMarkup(t) : t;
              }
              e.filterUserAttributes = function (t) {
                h(t, function (i, n) {
                  var o = !0;
                  -1 === e.allowedAttributes.indexOf(n) && (o = !1);
                  -1 !==
                    ["background", "dynsrc", "href", "lowsrc", "src"].indexOf(
                      n
                    ) &&
                    (o =
                      a(i) &&
                      e.allowedReferences.some(function (t) {
                        return 0 === i.indexOf(t);
                      }));
                  o ||
                    (s(
                      "Highcharts warning: Invalid attribute '" +
                        n +
                        "' in config"
                    ),
                    delete t[n]);
                });
                return t;
              };
              e.setElementHTML = function (t, i) {
                t.innerHTML = "";
                i && new e(i).addToDOM(t);
              };
              e.prototype.addToDOM = function (o) {
                function r(o, a) {
                  var c;
                  l(o).forEach(function (o) {
                    var l = o.tagName,
                      d = o.textContent
                        ? t.doc.createTextNode(o.textContent)
                        : void 0;
                    if (l)
                      if ("#text" === l) var p = d;
                      else if (-1 !== e.allowedTags.indexOf(l)) {
                        l = t.doc.createElementNS(
                          "svg" === l ? i : a.namespaceURI || i,
                          l
                        );
                        var u = o.attributes || {};
                        h(o, function (t, e) {
                          "tagName" !== e &&
                            "attributes" !== e &&
                            "children" !== e &&
                            "textContent" !== e &&
                            (u[e] = t);
                        });
                        n(l, e.filterUserAttributes(u));
                        d && l.appendChild(d);
                        r(o.children || [], l);
                        p = l;
                      } else
                        s(
                          "Highcharts warning: Invalid tagName '" +
                            l +
                            "' in config"
                        );
                    p && a.appendChild(p);
                    c = p;
                  });
                  return c;
                }
                return r(this.nodes, o);
              };
              e.prototype.parseMarkup = function (t) {
                var e = [];
                t = t.trim();
                if (c) t = new DOMParser().parseFromString(t, "text/html");
                else {
                  var i = o("div");
                  i.innerHTML = t;
                  t = { body: i };
                }
                var n = function (t, e) {
                  var i = t.nodeName.toLowerCase(),
                    o = { tagName: i };
                  "#text" === i && (o.textContent = t.textContent || "");
                  if ((i = t.attributes)) {
                    var r = {};
                    [].forEach.call(i, function (t) {
                      r[t.name] = t.value;
                    });
                    o.attributes = r;
                  }
                  if (t.childNodes.length) {
                    var s = [];
                    [].forEach.call(t.childNodes, function (t) {
                      n(t, s);
                    });
                    s.length && (o.children = s);
                  }
                  e.push(o);
                };
                [].forEach.call(t.body.childNodes, function (t) {
                  return n(t, e);
                });
                i && r(i);
                return e;
              };
              e.allowedAttributes =
                "aria-controls aria-describedby aria-expanded aria-haspopup aria-hidden aria-label aria-labelledby aria-live aria-pressed aria-readonly aria-roledescription aria-selected class clip-path color colspan cx cy d dx dy disabled fill height href id in markerHeight markerWidth offset opacity orient padding paddingLeft paddingRight patternUnits r refX refY role scope slope src startOffset stdDeviation stroke stroke-linecap stroke-width style tableValues result rowspan summary target tabindex text-align textAnchor textLength type valign width x x1 x2 y y1 y2 zIndex".split(
                  " "
                );
              e.allowedReferences = "https:// http:// mailto: / ../ ./ #".split(
                " "
              );
              e.allowedTags =
                "a b br button caption circle clipPath code dd defs div dl dt em feComponentTransfer feFuncA feFuncB feFuncG feFuncR feGaussianBlur feOffset feMerge feMergeNode filter h1 h2 h3 h4 h5 h6 hr i img li linearGradient marker ol p path pattern pre rect small span stop strong style sub sup svg table text thead tbody tspan td th tr u ul #text".split(
                  " "
                );
              return e;
            })();
            ("");
            return e;
          }
        );
        e(
          i,
          "Core/FormatUtilities.js",
          [i["Core/DefaultOptions.js"], i["Core/Utilities.js"]],
          function (t, e) {
            function i(t, e, i, o) {
              t = +t || 0;
              e = +e;
              var r = n.lang,
                l = (t.toString().split(".")[1] || "").split("e")[0].length,
                c = t.toString().split("e"),
                d = e;
              if (-1 === e) e = Math.min(l, 20);
              else if (!s(e)) e = 2;
              else if (e && c[1] && 0 > c[1]) {
                var p = e + +c[1];
                0 <= p
                  ? ((c[0] = (+c[0]).toExponential(p).split("e")[0]), (e = p))
                  : ((c[0] = c[0].split(".")[0] || 0),
                    (t = 20 > e ? (c[0] * Math.pow(10, c[1])).toFixed(e) : 0),
                    (c[1] = 0));
              }
              p = (
                Math.abs(c[1] ? c[0] : t) + Math.pow(10, -Math.max(e, l) - 1)
              ).toFixed(e);
              l = String(h(p));
              var u = 3 < l.length ? l.length % 3 : 0;
              i = a(i, r.decimalPoint);
              o = a(o, r.thousandsSep);
              t = (0 > t ? "-" : "") + (u ? l.substr(0, u) + o : "");
              t =
                0 > +c[1] && !d
                  ? "0"
                  : t + l.substr(u).replace(/(\d{3})(?=\d)/g, "$1" + o);
              e && (t += i + p.slice(-e));
              c[1] && 0 !== +t && (t += "e" + c[1]);
              return t;
            }
            var n = t.defaultOptions,
              o = t.defaultTime,
              r = e.getNestedProperty,
              s = e.isNumber,
              a = e.pick,
              h = e.pInt;
            return {
              dateFormat: function (t, e, i) {
                return o.dateFormat(t, e, i);
              },
              format: function (t, e, s) {
                var a = "{",
                  h = !1,
                  l = /f$/,
                  c = /\.([0-9])/,
                  d = n.lang,
                  p = (s && s.time) || o;
                s = (s && s.numberFormatter) || i;
                for (var u = []; t; ) {
                  var f = t.indexOf(a);
                  if (-1 === f) break;
                  var g = t.slice(0, f);
                  if (h) {
                    g = g.split(":");
                    a = r(g.shift() || "", e);
                    if (g.length && "number" === typeof a)
                      if (((g = g.join(":")), l.test(g))) {
                        var m = parseInt((g.match(c) || ["", "-1"])[1], 10);
                        null !== a &&
                          (a = s(
                            a,
                            m,
                            d.decimalPoint,
                            -1 < g.indexOf(",") ? d.thousandsSep : ""
                          ));
                      } else a = p.dateFormat(g, a);
                    u.push(a);
                  } else u.push(g);
                  t = t.slice(f + 1);
                  a = (h = !h) ? "}" : "{";
                }
                u.push(t);
                return u.join("");
              },
              numberFormat: i,
            };
          }
        );
        e(
          i,
          "Core/Renderer/RendererUtilities.js",
          [i["Core/Utilities.js"]],
          function (t) {
            var e = t.clamp,
              i = t.pick,
              n = t.stableSort,
              o;
            (function (t) {
              function o(t, r, s) {
                var a = t,
                  h = a.reducedLen || r,
                  l = function (t, e) {
                    return (e.rank || 0) - (t.rank || 0);
                  },
                  c = function (t, e) {
                    return t.target - e.target;
                  },
                  d,
                  p = !0,
                  u = [],
                  f = 0;
                for (d = t.length; d--; ) f += t[d].size;
                if (f > h) {
                  n(t, l);
                  for (f = d = 0; f <= h; ) (f += t[d].size), d++;
                  u = t.splice(d - 1, t.length);
                }
                n(t, c);
                for (
                  t = t.map(function (t) {
                    return {
                      size: t.size,
                      targets: [t.target],
                      align: i(t.align, 0.5),
                    };
                  });
                  p;

                ) {
                  for (d = t.length; d--; )
                    (h = t[d]),
                      (l =
                        (Math.min.apply(0, h.targets) +
                          Math.max.apply(0, h.targets)) /
                        2),
                      (h.pos = e(l - h.size * h.align, 0, r - h.size));
                  d = t.length;
                  for (p = !1; d--; )
                    0 < d &&
                      t[d - 1].pos + t[d - 1].size > t[d].pos &&
                      ((t[d - 1].size += t[d].size),
                      (t[d - 1].targets = t[d - 1].targets.concat(
                        t[d].targets
                      )),
                      (t[d - 1].align = 0.5),
                      t[d - 1].pos + t[d - 1].size > r &&
                        (t[d - 1].pos = r - t[d - 1].size),
                      t.splice(d, 1),
                      (p = !0));
                }
                a.push.apply(a, u);
                d = 0;
                t.some(function (t) {
                  var e = 0;
                  return (t.targets || []).some(function () {
                    a[d].pos = t.pos + e;
                    if (
                      "undefined" !== typeof s &&
                      Math.abs(a[d].pos - a[d].target) > s
                    )
                      return (
                        a.slice(0, d + 1).forEach(function (t) {
                          return delete t.pos;
                        }),
                        (a.reducedLen = (a.reducedLen || r) - 0.1 * r),
                        a.reducedLen > 0.1 * r && o(a, r, s),
                        !0
                      );
                    e += a[d].size;
                    d++;
                    return !1;
                  });
                });
                n(a, c);
                return a;
              }
              t.distribute = o;
            })(o || (o = {}));
            return o;
          }
        );
        e(
          i,
          "Core/Renderer/SVG/SVGElement.js",
          [
            i["Core/Animation/AnimationUtilities.js"],
            i["Core/Renderer/HTML/AST.js"],
            i["Core/Color/Color.js"],
            i["Core/Globals.js"],
            i["Core/Color/Palette.js"],
            i["Core/Utilities.js"],
          ],
          function (t, e, i, n, o, r) {
            var s = t.animate,
              a = t.animObject,
              h = t.stop,
              l = n.deg2rad,
              c = n.doc,
              d = n.noop,
              p = n.svg,
              u = n.SVG_NS,
              f = n.win,
              g = r.addEvent,
              m = r.attr,
              y = r.createElement,
              v = r.css,
              x = r.defined,
              b = r.erase,
              C = r.extend,
              w = r.fireEvent,
              S = r.isArray,
              A = r.isFunction,
              k = r.isNumber,
              T = r.isString,
              M = r.merge,
              P = r.objectEach,
              E = r.pick,
              L = r.pInt,
              O = r.syncTimeout,
              D = r.uniqueKey;
            t = (function () {
              function t() {
                this.element = void 0;
                this.onEvents = {};
                this.opacity = 1;
                this.renderer = void 0;
                this.SVG_NS = u;
                this.symbolCustomAttribs =
                  "x y width height r start end innerR anchorX anchorY rounded".split(
                    " "
                  );
              }
              t.prototype._defaultGetter = function (t) {
                t = E(
                  this[t + "Value"],
                  this[t],
                  this.element ? this.element.getAttribute(t) : null,
                  0
                );
                /^[\-0-9\.]+$/.test(t) && (t = parseFloat(t));
                return t;
              };
              t.prototype._defaultSetter = function (t, e, i) {
                i.setAttribute(e, t);
              };
              t.prototype.add = function (t) {
                var e = this.renderer,
                  i = this.element;
                t && (this.parentGroup = t);
                this.parentInverted = t && t.inverted;
                "undefined" !== typeof this.textStr &&
                  "text" === this.element.nodeName &&
                  e.buildText(this);
                this.added = !0;
                if (!t || t.handleZ || this.zIndex) var n = this.zIndexSetter();
                n || (t ? t.element : e.box).appendChild(i);
                if (this.onAdd) this.onAdd();
                return this;
              };
              t.prototype.addClass = function (t, e) {
                var i = e ? "" : this.attr("class") || "";
                t = (t || "")
                  .split(/ /g)
                  .reduce(
                    function (t, e) {
                      -1 === i.indexOf(e) && t.push(e);
                      return t;
                    },
                    i ? [i] : []
                  )
                  .join(" ");
                t !== i && this.attr("class", t);
                return this;
              };
              t.prototype.afterSetters = function () {
                this.doTransform &&
                  (this.updateTransform(), (this.doTransform = !1));
              };
              t.prototype.align = function (t, e, i) {
                var n = {},
                  o = this.renderer,
                  r = o.alignedObjects,
                  s,
                  a,
                  h;
                if (t) {
                  if (
                    ((this.alignOptions = t),
                    (this.alignByTranslate = e),
                    !i || T(i))
                  )
                    (this.alignTo = s = i || "renderer"),
                      b(r, this),
                      r.push(this),
                      (i = void 0);
                } else
                  (t = this.alignOptions),
                    (e = this.alignByTranslate),
                    (s = this.alignTo);
                i = E(
                  i,
                  o[s],
                  "scrollablePlotBox" === s ? o.plotBox : void 0,
                  o
                );
                s = t.align;
                var l = t.verticalAlign;
                o = (i.x || 0) + (t.x || 0);
                r = (i.y || 0) + (t.y || 0);
                "right" === s ? (a = 1) : "center" === s && (a = 2);
                a && (o += (i.width - (t.width || 0)) / a);
                n[e ? "translateX" : "x"] = Math.round(o);
                "bottom" === l ? (h = 1) : "middle" === l && (h = 2);
                h && (r += (i.height - (t.height || 0)) / h);
                n[e ? "translateY" : "y"] = Math.round(r);
                this[this.placed ? "animate" : "attr"](n);
                this.placed = !0;
                this.alignAttr = n;
                return this;
              };
              t.prototype.alignSetter = function (t) {
                var e = { left: "start", center: "middle", right: "end" };
                e[t] &&
                  ((this.alignValue = t),
                  this.element.setAttribute("text-anchor", e[t]));
              };
              t.prototype.animate = function (t, e, i) {
                var n = this,
                  o = a(E(e, this.renderer.globalAnimation, !0));
                e = o.defer;
                E(c.hidden, c.msHidden, c.webkitHidden, !1) && (o.duration = 0);
                0 !== o.duration
                  ? (i && (o.complete = i),
                    O(function () {
                      n.element && s(n, t, o);
                    }, e))
                  : (this.attr(t, void 0, i),
                    P(
                      t,
                      function (t, e) {
                        o.step &&
                          o.step.call(this, t, { prop: e, pos: 1, elem: this });
                      },
                      this
                    ));
                return this;
              };
              t.prototype.applyTextOutline = function (t) {
                var e = this.element;
                -1 !== t.indexOf("contrast") &&
                  (t = t.replace(
                    /contrast/g,
                    this.renderer.getContrast(e.style.fill)
                  ));
                var i = t.split(" ");
                t = i[i.length - 1];
                if ((i = i[0]) && "none" !== i && n.svg) {
                  this.fakeTS = !0;
                  this.ySetter = this.xSetter;
                  i = i.replace(/(^[\d\.]+)(.*?)$/g, function (t, e, i) {
                    return 2 * Number(e) + i;
                  });
                  this.removeTextOutline();
                  var o = c.createElementNS(u, "tspan");
                  m(o, {
                    class: "highcharts-text-outline",
                    fill: t,
                    stroke: t,
                    "stroke-width": i,
                    "stroke-linejoin": "round",
                  });
                  [].forEach.call(e.childNodes, function (t) {
                    var e = t.cloneNode(!0);
                    e.removeAttribute &&
                      ["fill", "stroke", "stroke-width", "stroke"].forEach(
                        function (t) {
                          return e.removeAttribute(t);
                        }
                      );
                    o.appendChild(e);
                  });
                  var r = c.createElementNS(u, "tspan");
                  r.textContent = "​";
                  ["x", "y"].forEach(function (t) {
                    var i = e.getAttribute(t);
                    i && r.setAttribute(t, i);
                  });
                  o.appendChild(r);
                  e.insertBefore(o, e.firstChild);
                }
              };
              t.prototype.attr = function (t, e, i, n) {
                var o = this.element,
                  r = this.symbolCustomAttribs,
                  s,
                  a = this,
                  l,
                  c;
                if ("string" === typeof t && "undefined" !== typeof e) {
                  var d = t;
                  t = {};
                  t[d] = e;
                }
                "string" === typeof t
                  ? (a = (this[t + "Getter"] || this._defaultGetter).call(
                      this,
                      t,
                      o
                    ))
                  : (P(
                      t,
                      function (e, i) {
                        l = !1;
                        n || h(this, i);
                        this.symbolName &&
                          -1 !== r.indexOf(i) &&
                          (s || (this.symbolAttr(t), (s = !0)), (l = !0));
                        !this.rotation ||
                          ("x" !== i && "y" !== i) ||
                          (this.doTransform = !0);
                        l ||
                          ((c = this[i + "Setter"] || this._defaultSetter),
                          c.call(this, e, i, o),
                          !this.styledMode &&
                            this.shadows &&
                            /^(width|height|visibility|x|y|d|transform|cx|cy|r)$/.test(
                              i
                            ) &&
                            this.updateShadows(i, e, c));
                      },
                      this
                    ),
                    this.afterSetters());
                i && i.call(this);
                return a;
              };
              t.prototype.clip = function (t) {
                return this.attr(
                  "clip-path",
                  t ? "url(" + this.renderer.url + "#" + t.id + ")" : "none"
                );
              };
              t.prototype.crisp = function (t, e) {
                e = e || t.strokeWidth || 0;
                var i = (Math.round(e) % 2) / 2;
                t.x = Math.floor(t.x || this.x || 0) + i;
                t.y = Math.floor(t.y || this.y || 0) + i;
                t.width = Math.floor((t.width || this.width || 0) - 2 * i);
                t.height = Math.floor((t.height || this.height || 0) - 2 * i);
                x(t.strokeWidth) && (t.strokeWidth = e);
                return t;
              };
              t.prototype.complexColor = function (t, e, n) {
                var o = this.renderer,
                  r,
                  s,
                  a,
                  h,
                  l,
                  c,
                  d,
                  p,
                  u,
                  f,
                  g = [],
                  m;
                w(
                  this.renderer,
                  "complexColor",
                  { args: arguments },
                  function () {
                    t.radialGradient
                      ? (s = "radialGradient")
                      : t.linearGradient && (s = "linearGradient");
                    if (s) {
                      a = t[s];
                      l = o.gradients;
                      c = t.stops;
                      u = n.radialReference;
                      S(a) &&
                        (t[s] = a =
                          {
                            x1: a[0],
                            y1: a[1],
                            x2: a[2],
                            y2: a[3],
                            gradientUnits: "userSpaceOnUse",
                          });
                      "radialGradient" === s &&
                        u &&
                        !x(a.gradientUnits) &&
                        ((h = a),
                        (a = M(a, o.getRadialAttr(u, h), {
                          gradientUnits: "userSpaceOnUse",
                        })));
                      P(a, function (t, e) {
                        "id" !== e && g.push(e, t);
                      });
                      P(c, function (t) {
                        g.push(t);
                      });
                      g = g.join(",");
                      if (l[g]) f = l[g].attr("id");
                      else {
                        a.id = f = D();
                        var y = (l[g] = o.createElement(s).attr(a).add(o.defs));
                        y.radAttr = h;
                        y.stops = [];
                        c.forEach(function (t) {
                          0 === t[1].indexOf("rgba")
                            ? ((r = i.parse(t[1])),
                              (d = r.get("rgb")),
                              (p = r.get("a")))
                            : ((d = t[1]), (p = 1));
                          t = o
                            .createElement("stop")
                            .attr({
                              offset: t[0],
                              "stop-color": d,
                              "stop-opacity": p,
                            })
                            .add(y);
                          y.stops.push(t);
                        });
                      }
                      m = "url(" + o.url + "#" + f + ")";
                      n.setAttribute(e, m);
                      n.gradient = g;
                      t.toString = function () {
                        return m;
                      };
                    }
                  }
                );
              };
              t.prototype.css = function (t) {
                var e = this.styles,
                  i = {},
                  n = this.element,
                  o = ["textOutline", "textOverflow", "width"],
                  r = "",
                  s = !e;
                t && t.color && (t.fill = t.color);
                e &&
                  P(t, function (t, n) {
                    e && e[n] !== t && ((i[n] = t), (s = !0));
                  });
                if (s) {
                  e && (t = C(e, i));
                  if (t)
                    if (null === t.width || "auto" === t.width)
                      delete this.textWidth;
                    else if ("text" === n.nodeName.toLowerCase() && t.width)
                      var a = (this.textWidth = L(t.width));
                  this.styles = t;
                  a && !p && this.renderer.forExport && delete t.width;
                  if (n.namespaceURI === this.SVG_NS) {
                    var h = function (t, e) {
                      return "-" + e.toLowerCase();
                    };
                    P(t, function (t, e) {
                      -1 === o.indexOf(e) &&
                        (r += e.replace(/([A-Z])/g, h) + ":" + t + ";");
                    });
                    r && m(n, "style", r);
                  } else v(n, t);
                  this.added &&
                    ("text" === this.element.nodeName &&
                      this.renderer.buildText(this),
                    t && t.textOutline && this.applyTextOutline(t.textOutline));
                }
                return this;
              };
              t.prototype.dashstyleSetter = function (t) {
                var e = this["stroke-width"];
                "inherit" === e && (e = 1);
                if ((t = t && t.toLowerCase())) {
                  var i = t
                    .replace("shortdashdotdot", "3,1,1,1,1,1,")
                    .replace("shortdashdot", "3,1,1,1")
                    .replace("shortdot", "1,1,")
                    .replace("shortdash", "3,1,")
                    .replace("longdash", "8,3,")
                    .replace(/dot/g, "1,3,")
                    .replace("dash", "4,3,")
                    .replace(/,$/, "")
                    .split(",");
                  for (t = i.length; t--; ) i[t] = "" + L(i[t]) * E(e, NaN);
                  t = i.join(",").replace(/NaN/g, "none");
                  this.element.setAttribute("stroke-dasharray", t);
                }
              };
              t.prototype.destroy = function () {
                var t = this,
                  e = t.element || {},
                  i = t.renderer,
                  n = e.ownerSVGElement,
                  o =
                    (i.isSVG && "SPAN" === e.nodeName && t.parentGroup) ||
                    void 0;
                e.onclick =
                  e.onmouseout =
                  e.onmouseover =
                  e.onmousemove =
                  e.point =
                    null;
                h(t);
                if (t.clipPath && n) {
                  var r = t.clipPath;
                  [].forEach.call(
                    n.querySelectorAll("[clip-path],[CLIP-PATH]"),
                    function (t) {
                      -1 < t.getAttribute("clip-path").indexOf(r.element.id) &&
                        t.removeAttribute("clip-path");
                    }
                  );
                  t.clipPath = r.destroy();
                }
                if (t.stops) {
                  for (n = 0; n < t.stops.length; n++) t.stops[n].destroy();
                  t.stops.length = 0;
                  t.stops = void 0;
                }
                t.safeRemoveChild(e);
                for (
                  i.styledMode || t.destroyShadows();
                  o && o.div && 0 === o.div.childNodes.length;

                )
                  (e = o.parentGroup),
                    t.safeRemoveChild(o.div),
                    delete o.div,
                    (o = e);
                t.alignTo && b(i.alignedObjects, t);
                P(t, function (e, i) {
                  t[i] &&
                    t[i].parentGroup === t &&
                    t[i].destroy &&
                    t[i].destroy();
                  delete t[i];
                });
              };
              t.prototype.destroyShadows = function () {
                (this.shadows || []).forEach(function (t) {
                  this.safeRemoveChild(t);
                }, this);
                this.shadows = void 0;
              };
              t.prototype.destroyTextPath = function (t, e) {
                var i = t.getElementsByTagName("text")[0];
                if (i) {
                  if (
                    (i.removeAttribute("dx"),
                    i.removeAttribute("dy"),
                    e.element.setAttribute("id", ""),
                    this.textPathWrapper &&
                      i.getElementsByTagName("textPath").length)
                  ) {
                    for (
                      t = this.textPathWrapper.element.childNodes;
                      t.length;

                    )
                      i.appendChild(t[0]);
                    i.removeChild(this.textPathWrapper.element);
                  }
                } else if (t.getAttribute("dx") || t.getAttribute("dy"))
                  t.removeAttribute("dx"), t.removeAttribute("dy");
                this.textPathWrapper &&
                  (this.textPathWrapper = this.textPathWrapper.destroy());
              };
              t.prototype.dSetter = function (t, e, i) {
                S(t) &&
                  ("string" === typeof t[0] &&
                    (t = this.renderer.pathToSegments(t)),
                  (this.pathArray = t),
                  (t = t.reduce(function (t, e, i) {
                    return e && e.join
                      ? (i ? t + " " : "") + e.join(" ")
                      : (e || "").toString();
                  }, "")));
                /(NaN| {2}|^$)/.test(t) && (t = "M 0 0");
                this[e] !== t && (i.setAttribute(e, t), (this[e] = t));
              };
              t.prototype.fadeOut = function (t) {
                var e = this;
                e.animate(
                  { opacity: 0 },
                  {
                    duration: E(t, 150),
                    complete: function () {
                      e.attr({ y: -9999 }).hide();
                    },
                  }
                );
              };
              t.prototype.fillSetter = function (t, e, i) {
                "string" === typeof t
                  ? i.setAttribute(e, t)
                  : t && this.complexColor(t, e, i);
              };
              t.prototype.getBBox = function (e, i) {
                var n = this.renderer,
                  o = this.element,
                  r = this.styles,
                  s = this.textStr,
                  a = n.cache,
                  h = n.cacheKeys,
                  c = o.namespaceURI === this.SVG_NS;
                i = E(i, this.rotation, 0);
                var d = n.styledMode
                    ? o && t.prototype.getStyle.call(o, "font-size")
                    : r && r.fontSize,
                  p;
                if (x(s)) {
                  var u = s.toString();
                  -1 === u.indexOf("<") && (u = u.replace(/[0-9]/g, "0"));
                  u += [
                    "",
                    i,
                    d,
                    this.textWidth,
                    r && r.textOverflow,
                    r && r.fontWeight,
                  ].join();
                }
                u && !e && (p = a[u]);
                if (!p) {
                  if (c || n.forExport) {
                    try {
                      var f =
                        this.fakeTS &&
                        function (t) {
                          var e = o.querySelector(".highcharts-text-outline");
                          e && v(e, { display: t });
                        };
                      A(f) && f("none");
                      p = o.getBBox
                        ? C({}, o.getBBox())
                        : { width: o.offsetWidth, height: o.offsetHeight };
                      A(f) && f("");
                    } catch (t) {
                      ("");
                    }
                    if (!p || 0 > p.width) p = { width: 0, height: 0 };
                  } else p = this.htmlGetBBox();
                  n.isSVG &&
                    ((e = p.width),
                    (n = p.height),
                    c &&
                      (p.height = n =
                        { "11px,17": 14, "13px,20": 16 }[
                          r && r.fontSize + "," + Math.round(n)
                        ] || n),
                    i &&
                      ((r = i * l),
                      (p.width =
                        Math.abs(n * Math.sin(r)) + Math.abs(e * Math.cos(r))),
                      (p.height =
                        Math.abs(n * Math.cos(r)) +
                        Math.abs(e * Math.sin(r)))));
                  if (u && ("" === s || 0 < p.height)) {
                    for (; 250 < h.length; ) delete a[h.shift()];
                    a[u] || h.push(u);
                    a[u] = p;
                  }
                }
                return p;
              };
              t.prototype.getStyle = function (t) {
                return f
                  .getComputedStyle(this.element || this, "")
                  .getPropertyValue(t);
              };
              t.prototype.hasClass = function (t) {
                return -1 !== ("" + this.attr("class")).split(" ").indexOf(t);
              };
              t.prototype.hide = function (t) {
                t
                  ? this.attr({ y: -9999 })
                  : this.attr({ visibility: "hidden" });
                return this;
              };
              t.prototype.htmlGetBBox = function () {
                return { height: 0, width: 0, x: 0, y: 0 };
              };
              t.prototype.init = function (t, e) {
                this.element =
                  "span" === e ? y(e) : c.createElementNS(this.SVG_NS, e);
                this.renderer = t;
                w(this, "afterInit");
              };
              t.prototype.invert = function (t) {
                this.inverted = t;
                this.updateTransform();
                return this;
              };
              t.prototype.on = function (t, e) {
                var i = this.onEvents;
                if (i[t]) i[t]();
                i[t] = g(this.element, t, e);
                return this;
              };
              t.prototype.opacitySetter = function (t, e, i) {
                this.opacity = t = Number(Number(t).toFixed(3));
                i.setAttribute(e, t);
              };
              t.prototype.removeClass = function (t) {
                return this.attr(
                  "class",
                  ("" + this.attr("class"))
                    .replace(T(t) ? new RegExp("(^| )" + t + "( |$)") : t, " ")
                    .replace(/ +/g, " ")
                    .trim()
                );
              };
              t.prototype.removeTextOutline = function () {
                var t = this.element.querySelector(
                  "tspan.highcharts-text-outline"
                );
                t && this.safeRemoveChild(t);
              };
              t.prototype.safeRemoveChild = function (t) {
                var e = t.parentNode;
                e && e.removeChild(t);
              };
              t.prototype.setRadialReference = function (t) {
                var e =
                  this.element.gradient &&
                  this.renderer.gradients[this.element.gradient];
                this.element.radialReference = t;
                e &&
                  e.radAttr &&
                  e.animate(this.renderer.getRadialAttr(t, e.radAttr));
                return this;
              };
              t.prototype.setTextPath = function (t, i) {
                var n = this.element,
                  o = this.text ? this.text.element : n,
                  r = { textAnchor: "text-anchor" },
                  s = !1,
                  a = this.textPathWrapper,
                  h = !a;
                i = M(
                  !0,
                  {
                    enabled: !0,
                    attributes: {
                      dy: -5,
                      startOffset: "50%",
                      textAnchor: "middle",
                    },
                  },
                  i
                );
                var l = e.filterUserAttributes(i.attributes);
                if (t && i && i.enabled) {
                  a && null === a.element.parentNode
                    ? ((h = !0), (a = a.destroy()))
                    : a && this.removeTextOutline.call(a.parentGroup);
                  this.options &&
                    this.options.padding &&
                    (l.dx = -this.options.padding);
                  a ||
                    ((this.textPathWrapper = a =
                      this.renderer.createElement("textPath")),
                    (s = !0));
                  var c = a.element;
                  (i = t.element.getAttribute("id")) ||
                    t.element.setAttribute("id", (i = D()));
                  if (h)
                    for (
                      o.setAttribute("y", 0),
                        k(l.dx) && o.setAttribute("x", -l.dx),
                        t = [].slice.call(o.childNodes),
                        h = 0;
                      h < t.length;
                      h++
                    ) {
                      var p = t[h];
                      (p.nodeType !== Node.TEXT_NODE &&
                        "tspan" !== p.nodeName) ||
                        c.appendChild(p);
                    }
                  s && a && a.add({ element: o });
                  c.setAttributeNS(
                    "http://www.w3.org/1999/xlink",
                    "href",
                    this.renderer.url + "#" + i
                  );
                  x(l.dy) &&
                    (c.parentNode.setAttribute("dy", l.dy), delete l.dy);
                  x(l.dx) &&
                    (c.parentNode.setAttribute("dx", l.dx), delete l.dx);
                  P(l, function (t, e) {
                    c.setAttribute(r[e] || e, t);
                  });
                  n.removeAttribute("transform");
                  this.removeTextOutline.call(a);
                  this.text &&
                    !this.renderer.styledMode &&
                    this.attr({ fill: "none", "stroke-width": 0 });
                  this.applyTextOutline = this.updateTransform = d;
                } else
                  a &&
                    (delete this.updateTransform,
                    delete this.applyTextOutline,
                    this.destroyTextPath(n, t),
                    this.updateTransform(),
                    this.options &&
                      this.options.rotation &&
                      this.applyTextOutline(this.options.style.textOutline));
                return this;
              };
              t.prototype.shadow = function (t, e, i) {
                var n = [],
                  r = this.element,
                  s = this.oldShadowOptions,
                  a = {
                    color: o.neutralColor100,
                    offsetX: this.parentInverted ? -1 : 1,
                    offsetY: this.parentInverted ? -1 : 1,
                    opacity: 0.15,
                    width: 3,
                  },
                  h = !1,
                  l;
                !0 === t ? (l = a) : "object" === typeof t && (l = C(a, t));
                l &&
                  (l &&
                    s &&
                    P(l, function (t, e) {
                      t !== s[e] && (h = !0);
                    }),
                  h && this.destroyShadows(),
                  (this.oldShadowOptions = l));
                if (!l) this.destroyShadows();
                else if (!this.shadows) {
                  var c = l.opacity / l.width;
                  var d = this.parentInverted
                    ? "translate(" + l.offsetY + ", " + l.offsetX + ")"
                    : "translate(" + l.offsetX + ", " + l.offsetY + ")";
                  for (a = 1; a <= l.width; a++) {
                    var p = r.cloneNode(!1);
                    var u = 2 * l.width + 1 - 2 * a;
                    m(p, {
                      stroke: t.color || o.neutralColor100,
                      "stroke-opacity": c * a,
                      "stroke-width": u,
                      transform: d,
                      fill: "none",
                    });
                    p.setAttribute(
                      "class",
                      (p.getAttribute("class") || "") + " highcharts-shadow"
                    );
                    i &&
                      (m(p, "height", Math.max(m(p, "height") - u, 0)),
                      (p.cutHeight = u));
                    e
                      ? e.element.appendChild(p)
                      : r.parentNode && r.parentNode.insertBefore(p, r);
                    n.push(p);
                  }
                  this.shadows = n;
                }
                return this;
              };
              t.prototype.show = function (t) {
                return this.attr({ visibility: t ? "inherit" : "visible" });
              };
              t.prototype.strokeSetter = function (e, i, n) {
                this[i] = e;
                this.stroke && this["stroke-width"]
                  ? (t.prototype.fillSetter.call(
                      this,
                      this.stroke,
                      "stroke",
                      n
                    ),
                    n.setAttribute("stroke-width", this["stroke-width"]),
                    (this.hasStroke = !0))
                  : "stroke-width" === i && 0 === e && this.hasStroke
                  ? (n.removeAttribute("stroke"), (this.hasStroke = !1))
                  : this.renderer.styledMode &&
                    this["stroke-width"] &&
                    (n.setAttribute("stroke-width", this["stroke-width"]),
                    (this.hasStroke = !0));
              };
              t.prototype.strokeWidth = function () {
                if (!this.renderer.styledMode) return this["stroke-width"] || 0;
                var t = this.getStyle("stroke-width"),
                  e = 0;
                if (t.indexOf("px") === t.length - 2) e = L(t);
                else if ("" !== t) {
                  var i = c.createElementNS(u, "rect");
                  m(i, { width: t, "stroke-width": 0 });
                  this.element.parentNode.appendChild(i);
                  e = i.getBBox().width;
                  i.parentNode.removeChild(i);
                }
                return e;
              };
              t.prototype.symbolAttr = function (t) {
                var e = this;
                "x y r start end width height innerR anchorX anchorY clockwise"
                  .split(" ")
                  .forEach(function (i) {
                    e[i] = E(t[i], e[i]);
                  });
                e.attr({
                  d: e.renderer.symbols[e.symbolName](
                    e.x,
                    e.y,
                    e.width,
                    e.height,
                    e
                  ),
                });
              };
              t.prototype.textSetter = function (t) {
                t !== this.textStr &&
                  (delete this.textPxLength,
                  (this.textStr = t),
                  this.added && this.renderer.buildText(this));
              };
              t.prototype.titleSetter = function (t) {
                var e = this.element,
                  i =
                    e.getElementsByTagName("title")[0] ||
                    c.createElementNS(this.SVG_NS, "title");
                e.insertBefore
                  ? e.insertBefore(i, e.firstChild)
                  : e.appendChild(i);
                i.textContent = String(E(t, ""))
                  .replace(/<[^>]*>/g, "")
                  .replace(/&lt;/g, "<")
                  .replace(/&gt;/g, ">");
              };
              t.prototype.toFront = function () {
                var t = this.element;
                t.parentNode.appendChild(t);
                return this;
              };
              t.prototype.translate = function (t, e) {
                return this.attr({ translateX: t, translateY: e });
              };
              t.prototype.updateShadows = function (t, e, i) {
                var n = this.shadows;
                if (n)
                  for (var o = n.length; o--; )
                    i.call(
                      n[o],
                      "height" === t
                        ? Math.max(e - (n[o].cutHeight || 0), 0)
                        : "d" === t
                        ? this.d
                        : e,
                      t,
                      n[o]
                    );
              };
              t.prototype.updateTransform = function () {
                var t = this.scaleX,
                  e = this.scaleY,
                  i = this.inverted,
                  n = this.rotation,
                  o = this.matrix,
                  r = this.element,
                  s = this.translateX || 0,
                  a = this.translateY || 0;
                i && ((s += this.width), (a += this.height));
                s = ["translate(" + s + "," + a + ")"];
                x(o) && s.push("matrix(" + o.join(",") + ")");
                i
                  ? s.push("rotate(90) scale(-1,1)")
                  : n &&
                    s.push(
                      "rotate(" +
                        n +
                        " " +
                        E(this.rotationOriginX, r.getAttribute("x"), 0) +
                        " " +
                        E(this.rotationOriginY, r.getAttribute("y") || 0) +
                        ")"
                    );
                (x(t) || x(e)) &&
                  s.push("scale(" + E(t, 1) + " " + E(e, 1) + ")");
                s.length && r.setAttribute("transform", s.join(" "));
              };
              t.prototype.visibilitySetter = function (t, e, i) {
                "inherit" === t
                  ? i.removeAttribute(e)
                  : this[e] !== t && i.setAttribute(e, t);
                this[e] = t;
              };
              t.prototype.xGetter = function (t) {
                "circle" === this.element.nodeName &&
                  ("x" === t ? (t = "cx") : "y" === t && (t = "cy"));
                return this._defaultGetter(t);
              };
              t.prototype.zIndexSetter = function (t, e) {
                var i = this.renderer,
                  n = this.parentGroup,
                  o = (n || i).element || i.box,
                  r = this.element;
                i = o === i.box;
                var s = !1;
                var a = this.added;
                var h;
                x(t)
                  ? (r.setAttribute("data-z-index", t),
                    (t = +t),
                    this[e] === t && (a = !1))
                  : x(this[e]) && r.removeAttribute("data-z-index");
                this[e] = t;
                if (a) {
                  (t = this.zIndex) && n && (n.handleZ = !0);
                  e = o.childNodes;
                  for (h = e.length - 1; 0 <= h && !s; h--) {
                    n = e[h];
                    a = n.getAttribute("data-z-index");
                    var l = !x(a);
                    if (n !== r)
                      if (0 > t && l && !i && !h)
                        o.insertBefore(r, e[h]), (s = !0);
                      else if (L(a) <= t || (l && (!x(t) || 0 <= t)))
                        o.insertBefore(r, e[h + 1] || null), (s = !0);
                  }
                  s || (o.insertBefore(r, e[i ? 3 : 0] || null), (s = !0));
                }
                return s;
              };
              return t;
            })();
            t.prototype["stroke-widthSetter"] = t.prototype.strokeSetter;
            t.prototype.yGetter = t.prototype.xGetter;
            t.prototype.matrixSetter =
              t.prototype.rotationOriginXSetter =
              t.prototype.rotationOriginYSetter =
              t.prototype.rotationSetter =
              t.prototype.scaleXSetter =
              t.prototype.scaleYSetter =
              t.prototype.translateXSetter =
              t.prototype.translateYSetter =
              t.prototype.verticalAlignSetter =
                function (t, e) {
                  this[e] = t;
                  this.doTransform = !0;
                };
            ("");
            return t;
          }
        );
        e(
          i,
          "Core/Renderer/RendererRegistry.js",
          [i["Core/Globals.js"]],
          function (t) {
            var e;
            (function (e) {
              e.rendererTypes = {};
              var i;
              e.getRendererType = function (t) {
                void 0 === t && (t = i);
                return e.rendererTypes[t] || e.rendererTypes[i];
              };
              e.registerRendererType = function (n, o, r) {
                e.rendererTypes[n] = o;
                if (!i || r) (i = n), (t.Renderer = o);
              };
            })(e || (e = {}));
            return e;
          }
        );
        e(
          i,
          "Core/Renderer/SVG/SVGLabel.js",
          [i["Core/Renderer/SVG/SVGElement.js"], i["Core/Utilities.js"]],
          function (t, e) {
            var i =
                (this && this.__extends) ||
                (function () {
                  var t = function (e, i) {
                    t =
                      Object.setPrototypeOf ||
                      ({ __proto__: [] } instanceof Array &&
                        function (t, e) {
                          t.__proto__ = e;
                        }) ||
                      function (t, e) {
                        for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
                      };
                    return t(e, i);
                  };
                  return function (e, i) {
                    function n() {
                      this.constructor = e;
                    }
                    t(e, i);
                    e.prototype =
                      null === i
                        ? Object.create(i)
                        : ((n.prototype = i.prototype), new n());
                  };
                })(),
              n = e.defined,
              o = e.extend,
              r = e.isNumber,
              s = e.merge,
              a = e.pick,
              h = e.removeEvent;
            return (function (e) {
              function l(t, i, n, o, r, s, a, h, c, d) {
                var p = e.call(this) || this;
                p.paddingLeftSetter = p.paddingSetter;
                p.paddingRightSetter = p.paddingSetter;
                p.init(t, "g");
                p.textStr = i;
                p.x = n;
                p.y = o;
                p.anchorX = s;
                p.anchorY = a;
                p.baseline = c;
                p.className = d;
                p.addClass(
                  "button" === d ? "highcharts-no-tooltip" : "highcharts-label"
                );
                d && p.addClass("highcharts-" + d);
                p.text = t.text(void 0, 0, 0, h).attr({ zIndex: 1 });
                var u;
                "string" === typeof r &&
                  ((u = /^url\((.*?)\)$/.test(r)) || p.renderer.symbols[r]) &&
                  (p.symbolKey = r);
                p.bBox = l.emptyBBox;
                p.padding = 3;
                p.baselineOffset = 0;
                p.needsBox = t.styledMode || u;
                p.deferredAttr = {};
                p.alignFactor = 0;
                return p;
              }
              i(l, e);
              l.prototype.alignSetter = function (t) {
                t = { left: 0, center: 0.5, right: 1 }[t];
                t !== this.alignFactor &&
                  ((this.alignFactor = t),
                  this.bBox &&
                    r(this.xSetting) &&
                    this.attr({ x: this.xSetting }));
              };
              l.prototype.anchorXSetter = function (t, e) {
                this.anchorX = t;
                this.boxAttr(
                  e,
                  Math.round(t) - this.getCrispAdjust() - this.xSetting
                );
              };
              l.prototype.anchorYSetter = function (t, e) {
                this.anchorY = t;
                this.boxAttr(e, t - this.ySetting);
              };
              l.prototype.boxAttr = function (t, e) {
                this.box ? this.box.attr(t, e) : (this.deferredAttr[t] = e);
              };
              l.prototype.css = function (e) {
                if (e) {
                  var i = {};
                  e = s(e);
                  l.textProps.forEach(function (t) {
                    "undefined" !== typeof e[t] && ((i[t] = e[t]), delete e[t]);
                  });
                  this.text.css(i);
                  var n = "width" in i;
                  "fontSize" in i || "fontWeight" in i
                    ? this.updateTextPadding()
                    : n && this.updateBoxSize();
                }
                return t.prototype.css.call(this, e);
              };
              l.prototype.destroy = function () {
                h(this.element, "mouseenter");
                h(this.element, "mouseleave");
                this.text && this.text.destroy();
                this.box && (this.box = this.box.destroy());
                t.prototype.destroy.call(this);
              };
              l.prototype.fillSetter = function (t, e) {
                t && (this.needsBox = !0);
                this.fill = t;
                this.boxAttr(e, t);
              };
              l.prototype.getBBox = function () {
                this.textStr &&
                  0 === this.bBox.width &&
                  0 === this.bBox.height &&
                  this.updateBoxSize();
                var t = this.padding,
                  e = a(this.paddingLeft, t);
                return {
                  width: this.width,
                  height: this.height,
                  x: this.bBox.x - e,
                  y: this.bBox.y - t,
                };
              };
              l.prototype.getCrispAdjust = function () {
                return this.renderer.styledMode && this.box
                  ? (this.box.strokeWidth() % 2) / 2
                  : ((this["stroke-width"]
                      ? parseInt(this["stroke-width"], 10)
                      : 0) %
                      2) /
                      2;
              };
              l.prototype.heightSetter = function (t) {
                this.heightSetting = t;
              };
              l.prototype.onAdd = function () {
                var t = this.textStr;
                this.text.add(this);
                this.attr({ text: n(t) ? t : "", x: this.x, y: this.y });
                this.box &&
                  n(this.anchorX) &&
                  this.attr({ anchorX: this.anchorX, anchorY: this.anchorY });
              };
              l.prototype.paddingSetter = function (t, e) {
                r(t)
                  ? t !== this[e] && ((this[e] = t), this.updateTextPadding())
                  : (this[e] = void 0);
              };
              l.prototype.rSetter = function (t, e) {
                this.boxAttr(e, t);
              };
              l.prototype.shadow = function (t) {
                t &&
                  !this.renderer.styledMode &&
                  (this.updateBoxSize(), this.box && this.box.shadow(t));
                return this;
              };
              l.prototype.strokeSetter = function (t, e) {
                this.stroke = t;
                this.boxAttr(e, t);
              };
              l.prototype["stroke-widthSetter"] = function (t, e) {
                t && (this.needsBox = !0);
                this["stroke-width"] = t;
                this.boxAttr(e, t);
              };
              l.prototype["text-alignSetter"] = function (t) {
                this.textAlign = t;
              };
              l.prototype.textSetter = function (t) {
                "undefined" !== typeof t && this.text.attr({ text: t });
                this.updateTextPadding();
              };
              l.prototype.updateBoxSize = function () {
                var t = this.text.element.style,
                  e = {},
                  i = this.padding,
                  s = (this.bBox =
                    (r(this.widthSetting) &&
                      r(this.heightSetting) &&
                      !this.textAlign) ||
                    !n(this.text.textStr)
                      ? l.emptyBBox
                      : this.text.getBBox());
                this.width = this.getPaddedWidth();
                this.height = (this.heightSetting || s.height || 0) + 2 * i;
                t = this.renderer.fontMetrics(t && t.fontSize, this.text);
                this.baselineOffset =
                  i +
                  Math.min(
                    (this.text.firstLineMetrics || t).b,
                    s.height || Infinity
                  );
                this.heightSetting &&
                  (this.baselineOffset += (this.heightSetting - t.h) / 2);
                this.needsBox &&
                  (this.box ||
                    ((i = this.box =
                      this.symbolKey
                        ? this.renderer.symbol(this.symbolKey)
                        : this.renderer.rect()),
                    i.addClass(
                      ("button" === this.className
                        ? ""
                        : "highcharts-label-box") +
                        (this.className
                          ? " highcharts-" + this.className + "-box"
                          : "")
                    ),
                    i.add(this)),
                  (i = this.getCrispAdjust()),
                  (e.x = i),
                  (e.y = (this.baseline ? -this.baselineOffset : 0) + i),
                  (e.width = Math.round(this.width)),
                  (e.height = Math.round(this.height)),
                  this.box.attr(o(e, this.deferredAttr)),
                  (this.deferredAttr = {}));
              };
              l.prototype.updateTextPadding = function () {
                var t = this.text;
                this.updateBoxSize();
                var e = this.baseline ? 0 : this.baselineOffset,
                  i = a(this.paddingLeft, this.padding);
                n(this.widthSetting) &&
                  this.bBox &&
                  ("center" === this.textAlign || "right" === this.textAlign) &&
                  (i +=
                    { center: 0.5, right: 1 }[this.textAlign] *
                    (this.widthSetting - this.bBox.width));
                if (i !== t.x || e !== t.y)
                  t.attr("x", i),
                    t.hasBoxWidthChanged && (this.bBox = t.getBBox(!0)),
                    "undefined" !== typeof e && t.attr("y", e);
                t.x = i;
                t.y = e;
              };
              l.prototype.widthSetter = function (t) {
                this.widthSetting = r(t) ? t : void 0;
              };
              l.prototype.getPaddedWidth = function () {
                var t = this.padding,
                  e = a(this.paddingLeft, t);
                t = a(this.paddingRight, t);
                return (this.widthSetting || this.bBox.width || 0) + e + t;
              };
              l.prototype.xSetter = function (t) {
                this.x = t;
                this.alignFactor &&
                  ((t -= this.alignFactor * this.getPaddedWidth()),
                  (this["forceAnimate:x"] = !0));
                this.xSetting = Math.round(t);
                this.attr("translateX", this.xSetting);
              };
              l.prototype.ySetter = function (t) {
                this.ySetting = this.y = Math.round(t);
                this.attr("translateY", this.ySetting);
              };
              l.emptyBBox = { width: 0, height: 0, x: 0, y: 0 };
              l.textProps =
                "color direction fontFamily fontSize fontStyle fontWeight lineHeight textAlign textDecoration textOutline textOverflow width".split(
                  " "
                );
              return l;
            })(t);
          }
        );
        e(
          i,
          "Core/Renderer/SVG/Symbols.js",
          [i["Core/Utilities.js"]],
          function (t) {
            function e(t, e, i, n, r) {
              var a = [];
              if (r) {
                var h = r.start || 0,
                  l = s(r.r, i);
                i = s(r.r, n || i);
                var c = (r.end || 0) - 0.001;
                n = r.innerR;
                var d = s(
                    r.open,
                    0.001 > Math.abs((r.end || 0) - h - 2 * Math.PI)
                  ),
                  p = Math.cos(h),
                  u = Math.sin(h),
                  f = Math.cos(c),
                  g = Math.sin(c);
                h = s(r.longArc, 0.001 > c - h - Math.PI ? 0 : 1);
                a.push(
                  ["M", t + l * p, e + i * u],
                  ["A", l, i, 0, h, s(r.clockwise, 1), t + l * f, e + i * g]
                );
                o(n) &&
                  a.push(
                    d
                      ? ["M", t + n * f, e + n * g]
                      : ["L", t + n * f, e + n * g],
                    [
                      "A",
                      n,
                      n,
                      0,
                      h,
                      o(r.clockwise) ? 1 - r.clockwise : 0,
                      t + n * p,
                      e + n * u,
                    ]
                  );
                d || a.push(["Z"]);
              }
              return a;
            }
            function i(t, e, i, o, r) {
              return r && r.r
                ? n(t, e, i, o, r)
                : [
                    ["M", t, e],
                    ["L", t + i, e],
                    ["L", t + i, e + o],
                    ["L", t, e + o],
                    ["Z"],
                  ];
            }
            function n(t, e, i, n, o) {
              o = (o && o.r) || 0;
              return [
                ["M", t + o, e],
                ["L", t + i - o, e],
                ["C", t + i, e, t + i, e, t + i, e + o],
                ["L", t + i, e + n - o],
                ["C", t + i, e + n, t + i, e + n, t + i - o, e + n],
                ["L", t + o, e + n],
                ["C", t, e + n, t, e + n, t, e + n - o],
                ["L", t, e + o],
                ["C", t, e, t, e, t + o, e],
              ];
            }
            var o = t.defined,
              r = t.isNumber,
              s = t.pick;
            return {
              arc: e,
              callout: function (t, e, i, o, s) {
                var a = Math.min((s && s.r) || 0, i, o),
                  h = a + 6,
                  l = s && s.anchorX;
                s = (s && s.anchorY) || 0;
                var c = n(t, e, i, o, { r: a });
                if (!r(l)) return c;
                t + l >= i
                  ? s > e + h && s < e + o - h
                    ? c.splice(
                        3,
                        1,
                        ["L", t + i, s - 6],
                        ["L", t + i + 6, s],
                        ["L", t + i, s + 6],
                        ["L", t + i, e + o - a]
                      )
                    : c.splice(
                        3,
                        1,
                        ["L", t + i, o / 2],
                        ["L", l, s],
                        ["L", t + i, o / 2],
                        ["L", t + i, e + o - a]
                      )
                  : 0 >= t + l
                  ? s > e + h && s < e + o - h
                    ? c.splice(
                        7,
                        1,
                        ["L", t, s + 6],
                        ["L", t - 6, s],
                        ["L", t, s - 6],
                        ["L", t, e + a]
                      )
                    : c.splice(
                        7,
                        1,
                        ["L", t, o / 2],
                        ["L", l, s],
                        ["L", t, o / 2],
                        ["L", t, e + a]
                      )
                  : s && s > o && l > t + h && l < t + i - h
                  ? c.splice(
                      5,
                      1,
                      ["L", l + 6, e + o],
                      ["L", l, e + o + 6],
                      ["L", l - 6, e + o],
                      ["L", t + a, e + o]
                    )
                  : s &&
                    0 > s &&
                    l > t + h &&
                    l < t + i - h &&
                    c.splice(
                      1,
                      1,
                      ["L", l - 6, e],
                      ["L", l, e - 6],
                      ["L", l + 6, e],
                      ["L", i - a, e]
                    );
                return c;
              },
              circle: function (t, i, n, o) {
                return e(t + n / 2, i + o / 2, n / 2, o / 2, {
                  start: 0.5 * Math.PI,
                  end: 2.5 * Math.PI,
                  open: !1,
                });
              },
              diamond: function (t, e, i, n) {
                return [
                  ["M", t + i / 2, e],
                  ["L", t + i, e + n / 2],
                  ["L", t + i / 2, e + n],
                  ["L", t, e + n / 2],
                  ["Z"],
                ];
              },
              rect: i,
              roundedRect: n,
              square: i,
              triangle: function (t, e, i, n) {
                return [
                  ["M", t + i / 2, e],
                  ["L", t + i, e + n],
                  ["L", t, e + n],
                  ["Z"],
                ];
              },
              "triangle-down": function (t, e, i, n) {
                return [
                  ["M", t, e],
                  ["L", t + i, e],
                  ["L", t + i / 2, e + n],
                  ["Z"],
                ];
              },
            };
          }
        );
        e(
          i,
          "Core/Renderer/SVG/TextBuilder.js",
          [
            i["Core/Renderer/HTML/AST.js"],
            i["Core/Globals.js"],
            i["Core/Utilities.js"],
          ],
          function (t, e, i) {
            var n = e.doc,
              o = e.SVG_NS,
              r = i.attr,
              s = i.isString,
              a = i.objectEach,
              h = i.pick;
            return (function () {
              function e(t) {
                var e = t.styles;
                this.renderer = t.renderer;
                this.svgElement = t;
                this.width = t.textWidth;
                this.textLineHeight = e && e.lineHeight;
                this.textOutline = e && e.textOutline;
                this.ellipsis = !(!e || "ellipsis" !== e.textOverflow);
                this.noWrap = !(!e || "nowrap" !== e.whiteSpace);
                this.fontSize = e && e.fontSize;
              }
              e.prototype.buildSVG = function () {
                var e = this.svgElement,
                  i = e.element,
                  o = e.renderer,
                  r = h(e.textStr, "").toString(),
                  a = -1 !== r.indexOf("<"),
                  l = i.childNodes;
                o = this.width && !e.added && o.box;
                var c = /<br.*?>/g,
                  d = [
                    r,
                    this.ellipsis,
                    this.noWrap,
                    this.textLineHeight,
                    this.textOutline,
                    this.fontSize,
                    this.width,
                  ].join();
                if (d !== e.textCache) {
                  e.textCache = d;
                  delete e.actualWidth;
                  for (d = l.length; d--; ) i.removeChild(l[d]);
                  a ||
                  this.ellipsis ||
                  this.width ||
                  (-1 !== r.indexOf(" ") && (!this.noWrap || c.test(r)))
                    ? "" !== r &&
                      (o && o.appendChild(i),
                      (r = new t(r)),
                      this.modifyTree(r.nodes),
                      r.addToDOM(e.element),
                      this.modifyDOM(),
                      this.ellipsis &&
                        -1 !== (i.textContent || "").indexOf("…") &&
                        e.attr(
                          "title",
                          this.unescapeEntities(e.textStr || "", [
                            "&lt;",
                            "&gt;",
                          ])
                        ),
                      o && o.removeChild(i))
                    : i.appendChild(n.createTextNode(this.unescapeEntities(r)));
                  s(this.textOutline) &&
                    e.applyTextOutline &&
                    e.applyTextOutline(this.textOutline);
                }
              };
              e.prototype.modifyDOM = function () {
                var t = this,
                  e = this.svgElement,
                  i = r(e.element, "x");
                e.firstLineMetrics = void 0;
                for (var s; (s = e.element.firstChild); )
                  if (/^[\s\u200B]*$/.test(s.textContent || " "))
                    e.element.removeChild(s);
                  else break;
                [].forEach.call(
                  e.element.querySelectorAll("tspan.highcharts-br"),
                  function (n, o) {
                    n.nextSibling &&
                      n.previousSibling &&
                      (0 === o &&
                        1 === n.previousSibling.nodeType &&
                        (e.firstLineMetrics = e.renderer.fontMetrics(
                          void 0,
                          n.previousSibling
                        )),
                      r(n, { dy: t.getLineHeight(n.nextSibling), x: i }));
                  }
                );
                var a = this.width || 0;
                if (a) {
                  var h = function (s, h) {
                      var l = s.textContent || "",
                        c = l.replace(/([^\^])-/g, "$1- ").split(" "),
                        d =
                          !t.noWrap &&
                          (1 < c.length || 1 < e.element.childNodes.length),
                        p = t.getLineHeight(h),
                        u = 0,
                        f = e.actualWidth;
                      if (t.ellipsis)
                        l &&
                          t.truncate(
                            s,
                            l,
                            void 0,
                            0,
                            Math.max(0, a - parseInt(t.fontSize || 12, 10)),
                            function (t, e) {
                              return t.substring(0, e) + "…";
                            }
                          );
                      else if (d) {
                        l = [];
                        for (d = []; h.firstChild && h.firstChild !== s; )
                          d.push(h.firstChild), h.removeChild(h.firstChild);
                        for (; c.length; )
                          c.length &&
                            !t.noWrap &&
                            0 < u &&
                            (l.push(s.textContent || ""),
                            (s.textContent = c.join(" ").replace(/- /g, "-"))),
                            t.truncate(
                              s,
                              void 0,
                              c,
                              0 === u ? f || 0 : 0,
                              a,
                              function (t, e) {
                                return c
                                  .slice(0, e)
                                  .join(" ")
                                  .replace(/- /g, "-");
                              }
                            ),
                            (f = e.actualWidth),
                            u++;
                        d.forEach(function (t) {
                          h.insertBefore(t, s);
                        });
                        l.forEach(function (t) {
                          h.insertBefore(n.createTextNode(t), s);
                          t = n.createElementNS(o, "tspan");
                          t.textContent = "​";
                          r(t, { dy: p, x: i });
                          h.insertBefore(t, s);
                        });
                      }
                    },
                    l = function (t) {
                      [].slice.call(t.childNodes).forEach(function (i) {
                        i.nodeType === Node.TEXT_NODE
                          ? h(i, t)
                          : (-1 !==
                              i.className.baseVal.indexOf("highcharts-br") &&
                              (e.actualWidth = 0),
                            l(i));
                      });
                    };
                  l(e.element);
                }
              };
              e.prototype.getLineHeight = function (t) {
                var e;
                t = t.nodeType === Node.TEXT_NODE ? t.parentElement : t;
                this.renderer.styledMode ||
                  (e =
                    t && /(px|em)$/.test(t.style.fontSize)
                      ? t.style.fontSize
                      : this.fontSize || this.renderer.style.fontSize || 12);
                return this.textLineHeight
                  ? parseInt(this.textLineHeight.toString(), 10)
                  : this.renderer.fontMetrics(e, t || this.svgElement.element)
                      .h;
              };
              e.prototype.modifyTree = function (t) {
                var e = this,
                  i = function (n, o) {
                    var r = n.tagName,
                      a = e.renderer.styledMode,
                      h = n.attributes || {};
                    if ("b" === r || "strong" === r)
                      a
                        ? (h["class"] = "highcharts-strong")
                        : (h.style = "font-weight:bold;" + (h.style || ""));
                    else if ("i" === r || "em" === r)
                      a
                        ? (h["class"] = "highcharts-emphasized")
                        : (h.style = "font-style:italic;" + (h.style || ""));
                    s(h.style) &&
                      (h.style = h.style.replace(
                        /(;| |^)color([ :])/,
                        "$1fill$2"
                      ));
                    "br" === r &&
                      ((h["class"] = "highcharts-br"),
                      (n.textContent = "​"),
                      (o = t[o + 1]) &&
                        o.textContent &&
                        (o.textContent = o.textContent.replace(/^ +/gm, "")));
                    "#text" !== r && "a" !== r && (n.tagName = "tspan");
                    n.attributes = h;
                    n.children &&
                      n.children
                        .filter(function (t) {
                          return "#text" !== t.tagName;
                        })
                        .forEach(i);
                  };
                t.forEach(i);
              };
              e.prototype.truncate = function (t, e, i, n, o, r) {
                var s = this.svgElement,
                  a = s.renderer,
                  h = s.rotation,
                  l = [],
                  c = i ? 1 : 0,
                  d = (e || i || "").length,
                  p = d,
                  u,
                  f = function (o, h) {
                    h = h || o;
                    var c = t.parentNode;
                    if (c && "undefined" === typeof l[h])
                      if (c.getSubStringLength)
                        try {
                          l[h] = n + c.getSubStringLength(0, i ? h + 1 : h);
                        } catch (t) {
                          ("");
                        }
                      else
                        a.getSpanWidth &&
                          ((t.textContent = r(e || i, o)),
                          (l[h] = n + a.getSpanWidth(s, t)));
                    return l[h];
                  };
                s.rotation = 0;
                var g = f(t.textContent.length);
                if (n + g > o) {
                  for (; c <= d; )
                    (p = Math.ceil((c + d) / 2)),
                      i && (u = r(i, p)),
                      (g = f(p, u && u.length - 1)),
                      c === d ? (c = d + 1) : g > o ? (d = p - 1) : (c = p);
                  0 === d
                    ? (t.textContent = "")
                    : (e && d === e.length - 1) ||
                      (t.textContent = u || r(e || i, p));
                }
                i && i.splice(0, p);
                s.actualWidth = g;
                s.rotation = h;
              };
              e.prototype.unescapeEntities = function (t, e) {
                a(this.renderer.escapes, function (i, n) {
                  (e && -1 !== e.indexOf(i)) ||
                    (t = t.toString().replace(new RegExp(i, "g"), n));
                });
                return t;
              };
              return e;
            })();
          }
        );
        e(
          i,
          "Core/Renderer/SVG/SVGRenderer.js",
          [
            i["Core/Renderer/HTML/AST.js"],
            i["Core/Color/Color.js"],
            i["Core/Globals.js"],
            i["Core/Color/Palette.js"],
            i["Core/Renderer/RendererRegistry.js"],
            i["Core/Renderer/SVG/SVGElement.js"],
            i["Core/Renderer/SVG/SVGLabel.js"],
            i["Core/Renderer/SVG/Symbols.js"],
            i["Core/Renderer/SVG/TextBuilder.js"],
            i["Core/Utilities.js"],
          ],
          function (t, e, i, n, o, r, s, a, h, l) {
            var c = i.charts,
              d = i.deg2rad,
              p = i.doc,
              u = i.isFirefox,
              f = i.isMS,
              g = i.isWebKit,
              m = i.noop,
              y = i.SVG_NS,
              v = i.symbolSizes,
              x = i.win,
              b = l.addEvent,
              C = l.attr,
              w = l.createElement,
              S = l.css,
              A = l.defined,
              k = l.destroyObjectProperties,
              T = l.extend,
              M = l.isArray,
              P = l.isNumber,
              E = l.isObject,
              L = l.isString,
              O = l.merge,
              D = l.pick,
              j = l.pInt,
              B = l.uniqueKey,
              I;
            i = (function () {
              function i(t, e, i, n, o, r, s) {
                this.width =
                  this.url =
                  this.style =
                  this.isSVG =
                  this.imgCount =
                  this.height =
                  this.gradients =
                  this.globalAnimation =
                  this.defs =
                  this.chartIndex =
                  this.cacheKeys =
                  this.cache =
                  this.boxWrapper =
                  this.box =
                  this.alignedObjects =
                    void 0;
                this.init(t, e, i, n, o, r, s);
              }
              i.prototype.init = function (t, e, i, n, o, r, s) {
                var a = this.createElement("svg").attr({
                    version: "1.1",
                    class: "highcharts-root",
                  }),
                  h = a.element;
                s || a.css(this.getStyle(n));
                t.appendChild(h);
                C(t, "dir", "ltr");
                -1 === t.innerHTML.indexOf("xmlns") &&
                  C(h, "xmlns", this.SVG_NS);
                this.isSVG = !0;
                this.box = h;
                this.boxWrapper = a;
                this.alignedObjects = [];
                this.url = this.getReferenceURL();
                this.createElement("desc")
                  .add()
                  .element.appendChild(
                    p.createTextNode("Created with Highcharts 9.2.2")
                  );
                this.defs = this.createElement("defs").add();
                this.allowHTML = r;
                this.forExport = o;
                this.styledMode = s;
                this.gradients = {};
                this.cache = {};
                this.cacheKeys = [];
                this.imgCount = 0;
                this.setSize(e, i, !1);
                var l;
                u &&
                  t.getBoundingClientRect &&
                  ((e = function () {
                    S(t, { left: 0, top: 0 });
                    l = t.getBoundingClientRect();
                    S(t, {
                      left: Math.ceil(l.left) - l.left + "px",
                      top: Math.ceil(l.top) - l.top + "px",
                    });
                  }),
                  e(),
                  (this.unSubPixelFix = b(x, "resize", e)));
              };
              i.prototype.definition = function (e) {
                return new t([e]).addToDOM(this.defs.element);
              };
              i.prototype.getReferenceURL = function () {
                if ((u || g) && p.getElementsByTagName("base").length) {
                  if (!A(I)) {
                    var e = B();
                    e = new t([
                      {
                        tagName: "svg",
                        attributes: { width: 8, height: 8 },
                        children: [
                          {
                            tagName: "defs",
                            children: [
                              {
                                tagName: "clipPath",
                                attributes: { id: e },
                                children: [
                                  {
                                    tagName: "rect",
                                    attributes: { width: 4, height: 4 },
                                  },
                                ],
                              },
                            ],
                          },
                          {
                            tagName: "rect",
                            attributes: {
                              id: "hitme",
                              width: 8,
                              height: 8,
                              "clip-path": "url(#" + e + ")",
                              fill: "rgba(0,0,0,0.001)",
                            },
                          },
                        ],
                      },
                    ]).addToDOM(p.body);
                    S(e, { position: "fixed", top: 0, left: 0, zIndex: 9e5 });
                    var i = p.elementFromPoint(6, 6);
                    I = "hitme" === (i && i.id);
                    p.body.removeChild(e);
                  }
                  if (I)
                    return x.location.href
                      .split("#")[0]
                      .replace(/<[^>]*>/g, "")
                      .replace(/([\('\)])/g, "\\$1")
                      .replace(/ /g, "%20");
                }
                return "";
              };
              i.prototype.getStyle = function (t) {
                return (this.style = T(
                  {
                    fontFamily:
                      '"Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif',
                    fontSize: "12px",
                  },
                  t
                ));
              };
              i.prototype.setStyle = function (t) {
                this.boxWrapper.css(this.getStyle(t));
              };
              i.prototype.isHidden = function () {
                return !this.boxWrapper.getBBox().width;
              };
              i.prototype.destroy = function () {
                var t = this.defs;
                this.box = null;
                this.boxWrapper = this.boxWrapper.destroy();
                k(this.gradients || {});
                this.gradients = null;
                t && (this.defs = t.destroy());
                this.unSubPixelFix && this.unSubPixelFix();
                return (this.alignedObjects = null);
              };
              i.prototype.createElement = function (t) {
                var e = new this.Element();
                e.init(this, t);
                return e;
              };
              i.prototype.getRadialAttr = function (t, e) {
                return {
                  cx: t[0] - t[2] / 2 + (e.cx || 0) * t[2],
                  cy: t[1] - t[2] / 2 + (e.cy || 0) * t[2],
                  r: (e.r || 0) * t[2],
                };
              };
              i.prototype.buildText = function (t) {
                new h(t).buildSVG();
              };
              i.prototype.getContrast = function (t) {
                t = e.parse(t).rgba;
                t[0] *= 1;
                t[1] *= 1.2;
                t[2] *= 0.5;
                return 459 < t[0] + t[1] + t[2] ? "#000000" : "#FFFFFF";
              };
              i.prototype.button = function (e, i, o, r, s, a, h, l, c, d) {
                var p = this.label(
                    e,
                    i,
                    o,
                    c,
                    void 0,
                    void 0,
                    d,
                    void 0,
                    "button"
                  ),
                  u = this.styledMode,
                  g = 0,
                  m = s ? O(s) : {};
                e = (m && m.style) || {};
                m = t.filterUserAttributes(m);
                p.attr(O({ padding: 8, r: 2 }, m));
                if (!u) {
                  m = O(
                    {
                      fill: n.neutralColor3,
                      stroke: n.neutralColor20,
                      "stroke-width": 1,
                      style: {
                        color: n.neutralColor80,
                        cursor: "pointer",
                        fontWeight: "normal",
                      },
                    },
                    { style: e },
                    m
                  );
                  var y = m.style;
                  delete m.style;
                  a = O(
                    m,
                    { fill: n.neutralColor10 },
                    t.filterUserAttributes(a || {})
                  );
                  var v = a.style;
                  delete a.style;
                  h = O(
                    m,
                    {
                      fill: n.highlightColor10,
                      style: { color: n.neutralColor100, fontWeight: "bold" },
                    },
                    t.filterUserAttributes(h || {})
                  );
                  var x = h.style;
                  delete h.style;
                  l = O(
                    m,
                    { style: { color: n.neutralColor20 } },
                    t.filterUserAttributes(l || {})
                  );
                  var C = l.style;
                  delete l.style;
                }
                b(p.element, f ? "mouseover" : "mouseenter", function () {
                  3 !== g && p.setState(1);
                });
                b(p.element, f ? "mouseout" : "mouseleave", function () {
                  3 !== g && p.setState(g);
                });
                p.setState = function (t) {
                  1 !== t && (p.state = g = t);
                  p.removeClass(
                    /highcharts-button-(normal|hover|pressed|disabled)/
                  ).addClass(
                    "highcharts-button-" +
                      ["normal", "hover", "pressed", "disabled"][t || 0]
                  );
                  u || p.attr([m, a, h, l][t || 0]).css([y, v, x, C][t || 0]);
                };
                u || p.attr(m).css(T({ cursor: "default" }, y));
                return p
                  .on("touchstart", function (t) {
                    return t.stopPropagation();
                  })
                  .on("click", function (t) {
                    3 !== g && r.call(p, t);
                  });
              };
              i.prototype.crispLine = function (t, e, i) {
                void 0 === i && (i = "round");
                var n = t[0],
                  o = t[1];
                A(n[1]) &&
                  n[1] === o[1] &&
                  (n[1] = o[1] = Math[i](n[1]) - (e % 2) / 2);
                A(n[2]) &&
                  n[2] === o[2] &&
                  (n[2] = o[2] = Math[i](n[2]) + (e % 2) / 2);
                return t;
              };
              i.prototype.path = function (t) {
                var e = this.styledMode ? {} : { fill: "none" };
                M(t) ? (e.d = t) : E(t) && T(e, t);
                return this.createElement("path").attr(e);
              };
              i.prototype.circle = function (t, e, i) {
                t = E(t)
                  ? t
                  : "undefined" === typeof t
                  ? {}
                  : { x: t, y: e, r: i };
                e = this.createElement("circle");
                e.xSetter = e.ySetter = function (t, e, i) {
                  i.setAttribute("c" + e, t);
                };
                return e.attr(t);
              };
              i.prototype.arc = function (t, e, i, n, o, r) {
                E(t)
                  ? ((n = t), (e = n.y), (i = n.r), (t = n.x))
                  : (n = { innerR: n, start: o, end: r });
                t = this.symbol("arc", t, e, i, i, n);
                t.r = i;
                return t;
              };
              i.prototype.rect = function (t, e, i, n, o, r) {
                o = E(t) ? t.r : o;
                var s = this.createElement("rect");
                t = E(t)
                  ? t
                  : "undefined" === typeof t
                  ? {}
                  : {
                      x: t,
                      y: e,
                      width: Math.max(i, 0),
                      height: Math.max(n, 0),
                    };
                this.styledMode ||
                  ("undefined" !== typeof r &&
                    ((t["stroke-width"] = r), (t = s.crisp(t))),
                  (t.fill = "none"));
                o && (t.r = o);
                s.rSetter = function (t, e, i) {
                  s.r = t;
                  C(i, { rx: t, ry: t });
                };
                s.rGetter = function () {
                  return s.r || 0;
                };
                return s.attr(t);
              };
              i.prototype.setSize = function (t, e, i) {
                this.width = t;
                this.height = e;
                this.boxWrapper.animate(
                  { width: t, height: e },
                  {
                    step: function () {
                      this.attr({
                        viewBox:
                          "0 0 " +
                          this.attr("width") +
                          " " +
                          this.attr("height"),
                      });
                    },
                    duration: D(i, !0) ? void 0 : 0,
                  }
                );
                this.alignElements();
              };
              i.prototype.g = function (t) {
                var e = this.createElement("g");
                return t ? e.attr({ class: "highcharts-" + t }) : e;
              };
              i.prototype.image = function (t, e, i, n, o, r) {
                var s = { preserveAspectRatio: "none" },
                  a = function (t, e) {
                    t.setAttributeNS
                      ? t.setAttributeNS(
                          "http://www.w3.org/1999/xlink",
                          "href",
                          e
                        )
                      : t.setAttribute("hc-svg-href", e);
                  };
                1 < arguments.length &&
                  T(s, { x: e, y: i, width: n, height: o });
                var h = this.createElement("image").attr(s);
                s = function (e) {
                  a(h.element, t);
                  r.call(h, e);
                };
                if (r) {
                  a(
                    h.element,
                    "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                  );
                  var l = new x.Image();
                  b(l, "load", s);
                  l.src = t;
                  l.complete && s({});
                } else a(h.element, t);
                return h;
              };
              i.prototype.symbol = function (t, e, i, n, o, r) {
                var s = this,
                  a = /^url\((.*?)\)$/,
                  h = a.test(t),
                  l = !h && (this.symbols[t] ? t : "circle"),
                  d = l && this.symbols[l],
                  u;
                if (d) {
                  "number" === typeof e &&
                    (u = d.call(
                      this.symbols,
                      Math.round(e || 0),
                      Math.round(i || 0),
                      n || 0,
                      o || 0,
                      r
                    ));
                  var f = this.path(u);
                  s.styledMode || f.attr("fill", "none");
                  T(f, {
                    symbolName: l || void 0,
                    x: e,
                    y: i,
                    width: n,
                    height: o,
                  });
                  r && T(f, r);
                } else if (h) {
                  var g = t.match(a)[1];
                  var m = (f = this.image(g));
                  m.imgwidth = D(v[g] && v[g].width, r && r.width);
                  m.imgheight = D(v[g] && v[g].height, r && r.height);
                  var y = function (t) {
                    return t.attr({ width: t.width, height: t.height });
                  };
                  ["width", "height"].forEach(function (t) {
                    m[t + "Setter"] = function (t, e) {
                      var i = this["img" + e];
                      this[e] = t;
                      A(i) &&
                        (r &&
                          "within" === r.backgroundSize &&
                          this.width &&
                          this.height &&
                          (i = Math.round(
                            i *
                              Math.min(
                                this.width / this.imgwidth,
                                this.height / this.imgheight
                              )
                          )),
                        this.element && this.element.setAttribute(e, i),
                        this.alignByTranslate ||
                          ((t = ((this[e] || 0) - i) / 2),
                          this.attr(
                            "width" === e
                              ? { translateX: t }
                              : { translateY: t }
                          )));
                    };
                  });
                  A(e) && m.attr({ x: e, y: i });
                  m.isImg = !0;
                  A(m.imgwidth) && A(m.imgheight)
                    ? y(m)
                    : (m.attr({ width: 0, height: 0 }),
                      w("img", {
                        onload: function () {
                          var t = c[s.chartIndex];
                          0 === this.width &&
                            (S(this, { position: "absolute", top: "-999em" }),
                            p.body.appendChild(this));
                          v[g] = { width: this.width, height: this.height };
                          m.imgwidth = this.width;
                          m.imgheight = this.height;
                          m.element && y(m);
                          this.parentNode && this.parentNode.removeChild(this);
                          s.imgCount--;
                          if (!s.imgCount && t && !t.hasLoaded) t.onload();
                        },
                        src: g,
                      }),
                      this.imgCount++);
                }
                return f;
              };
              i.prototype.clipRect = function (t, e, i, n) {
                var o = B() + "-",
                  r = this.createElement("clipPath")
                    .attr({ id: o })
                    .add(this.defs);
                t = this.rect(t, e, i, n, 0).add(r);
                t.id = o;
                t.clipPath = r;
                t.count = 0;
                return t;
              };
              i.prototype.text = function (t, e, i, n) {
                var o = {};
                if (n && (this.allowHTML || !this.forExport))
                  return this.html(t, e, i);
                o.x = Math.round(e || 0);
                i && (o.y = Math.round(i));
                A(t) && (o.text = t);
                t = this.createElement("text").attr(o);
                if (!n || (this.forExport && !this.allowHTML))
                  t.xSetter = function (t, e, i) {
                    for (
                      var n = i.getElementsByTagName("tspan"),
                        o = i.getAttribute(e),
                        r = 0,
                        s;
                      r < n.length;
                      r++
                    )
                      (s = n[r]),
                        s.getAttribute(e) === o && s.setAttribute(e, t);
                    i.setAttribute(e, t);
                  };
                return t;
              };
              i.prototype.fontMetrics = function (t, e) {
                t =
                  (!this.styledMode && /px/.test(t)) || !x.getComputedStyle
                    ? t ||
                      (e && e.style && e.style.fontSize) ||
                      (this.style && this.style.fontSize)
                    : e && r.prototype.getStyle.call(e, "font-size");
                t = /px/.test(t) ? j(t) : 12;
                e = 24 > t ? t + 3 : Math.round(1.2 * t);
                return { h: e, b: Math.round(0.8 * e), f: t };
              };
              i.prototype.rotCorr = function (t, e, i) {
                var n = t;
                e && i && (n = Math.max(n * Math.cos(e * d), 4));
                return { x: (-t / 3) * Math.sin(e * d), y: n };
              };
              i.prototype.pathToSegments = function (t) {
                for (
                  var e = [],
                    i = [],
                    n = {
                      A: 8,
                      C: 7,
                      H: 2,
                      L: 3,
                      M: 3,
                      Q: 5,
                      S: 5,
                      T: 3,
                      V: 2,
                    },
                    o = 0;
                  o < t.length;
                  o++
                )
                  L(i[0]) &&
                    P(t[o]) &&
                    i.length === n[i[0].toUpperCase()] &&
                    t.splice(o, 0, i[0].replace("M", "L").replace("m", "l")),
                    "string" === typeof t[o] &&
                      (i.length && e.push(i.slice(0)), (i.length = 0)),
                    i.push(t[o]);
                e.push(i.slice(0));
                return e;
              };
              i.prototype.label = function (t, e, i, n, o, r, a, h, l) {
                return new s(this, t, e, i, n, o, r, a, h, l);
              };
              i.prototype.alignElements = function () {
                this.alignedObjects.forEach(function (t) {
                  return t.align();
                });
              };
              return i;
            })();
            T(i.prototype, {
              Element: r,
              SVG_NS: y,
              escapes: {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                "'": "&#39;",
                '"': "&quot;",
              },
              symbols: a,
              draw: m,
            });
            o.registerRendererType("svg", i, !0);
            ("");
            return i;
          }
        );
        e(
          i,
          "Core/Renderer/HTML/HTMLElement.js",
          [
            i["Core/Globals.js"],
            i["Core/Renderer/SVG/SVGElement.js"],
            i["Core/Utilities.js"],
          ],
          function (t, e, i) {
            var n =
                (this && this.__extends) ||
                (function () {
                  var t = function (e, i) {
                    t =
                      Object.setPrototypeOf ||
                      ({ __proto__: [] } instanceof Array &&
                        function (t, e) {
                          t.__proto__ = e;
                        }) ||
                      function (t, e) {
                        for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
                      };
                    return t(e, i);
                  };
                  return function (e, i) {
                    function n() {
                      this.constructor = e;
                    }
                    t(e, i);
                    e.prototype =
                      null === i
                        ? Object.create(i)
                        : ((n.prototype = i.prototype), new n());
                  };
                })(),
              o = t.isFirefox,
              r = t.isMS,
              s = t.isWebKit,
              a = t.win,
              h = i.css,
              l = i.defined,
              c = i.extend,
              d = i.pick,
              p = i.pInt;
            return (function (t) {
              function e() {
                return (null !== t && t.apply(this, arguments)) || this;
              }
              n(e, t);
              e.compose = function (t) {
                if (-1 === e.composedClasses.indexOf(t)) {
                  e.composedClasses.push(t);
                  var i = e.prototype,
                    n = t.prototype;
                  n.getSpanCorrection = i.getSpanCorrection;
                  n.htmlCss = i.htmlCss;
                  n.htmlGetBBox = i.htmlGetBBox;
                  n.htmlUpdateTransform = i.htmlUpdateTransform;
                  n.setSpanRotation = i.setSpanRotation;
                }
                return t;
              };
              e.prototype.getSpanCorrection = function (t, e, i) {
                this.xCorr = -t * i;
                this.yCorr = -e;
              };
              e.prototype.htmlCss = function (t) {
                var e = "SPAN" === this.element.tagName && t && "width" in t,
                  i = d(e && t.width, void 0);
                if (e) {
                  delete t.width;
                  this.textWidth = i;
                  var n = !0;
                }
                t &&
                  "ellipsis" === t.textOverflow &&
                  ((t.whiteSpace = "nowrap"), (t.overflow = "hidden"));
                this.styles = c(this.styles, t);
                h(this.element, t);
                n && this.htmlUpdateTransform();
                return this;
              };
              e.prototype.htmlGetBBox = function () {
                var t = this.element;
                return {
                  x: t.offsetLeft,
                  y: t.offsetTop,
                  width: t.offsetWidth,
                  height: t.offsetHeight,
                };
              };
              e.prototype.htmlUpdateTransform = function () {
                if (this.added) {
                  var t = this.renderer,
                    e = this.element,
                    i = this.translateX || 0,
                    n = this.translateY || 0,
                    o = this.x || 0,
                    r = this.y || 0,
                    s = this.textAlign || "left",
                    a = { left: 0, center: 0.5, right: 1 }[s],
                    c = this.styles;
                  c = c && c.whiteSpace;
                  h(e, { marginLeft: i, marginTop: n });
                  !t.styledMode &&
                    this.shadows &&
                    this.shadows.forEach(function (t) {
                      h(t, { marginLeft: i + 1, marginTop: n + 1 });
                    });
                  this.inverted &&
                    [].forEach.call(e.childNodes, function (i) {
                      t.invertChild(i, e);
                    });
                  if ("SPAN" === e.tagName) {
                    var d = this.rotation,
                      u = this.textWidth && p(this.textWidth),
                      f = [
                        d,
                        s,
                        e.innerHTML,
                        this.textWidth,
                        this.textAlign,
                      ].join(),
                      g = void 0;
                    (g = u !== this.oldTextWidth) &&
                      !(g = u > this.oldTextWidth) &&
                      ((g = this.textPxLength) ||
                        (h(e, { width: "", whiteSpace: c || "nowrap" }),
                        (g = e.offsetWidth)),
                      (g = g > u));
                    g &&
                    (/[ \-]/.test(e.textContent || e.innerText) ||
                      "ellipsis" === e.style.textOverflow)
                      ? (h(e, {
                          width: u + "px",
                          display: "block",
                          whiteSpace: c || "normal",
                        }),
                        (this.oldTextWidth = u),
                        (this.hasBoxWidthChanged = !0))
                      : (this.hasBoxWidthChanged = !1);
                    f !== this.cTT &&
                      ((g = t.fontMetrics(e.style.fontSize, e).b),
                      !l(d) ||
                        (d === (this.oldRotation || 0) &&
                          s === this.oldAlign) ||
                        this.setSpanRotation(d, a, g),
                      this.getSpanCorrection(
                        (!l(d) && this.textPxLength) || e.offsetWidth,
                        g,
                        a,
                        d,
                        s
                      ));
                    h(e, {
                      left: o + (this.xCorr || 0) + "px",
                      top: r + (this.yCorr || 0) + "px",
                    });
                    this.cTT = f;
                    this.oldRotation = d;
                    this.oldAlign = s;
                  }
                } else this.alignOnAdd = !0;
              };
              e.prototype.setSpanRotation = function (t, e, i) {
                var n = {},
                  l =
                    r && !/Edge/.test(a.navigator.userAgent)
                      ? "-ms-transform"
                      : s
                      ? "-webkit-transform"
                      : o
                      ? "MozTransform"
                      : a.opera
                      ? "-o-transform"
                      : void 0;
                l &&
                  ((n[l] = n.transform = "rotate(" + t + "deg)"),
                  (n[l + (o ? "Origin" : "-origin")] = n.transformOrigin =
                    100 * e + "% " + i + "px"),
                  h(this.element, n));
              };
              e.composedClasses = [];
              return e;
            })(e);
          }
        );
        e(
          i,
          "Core/Renderer/HTML/HTMLRenderer.js",
          [
            i["Core/Renderer/HTML/AST.js"],
            i["Core/Renderer/SVG/SVGElement.js"],
            i["Core/Renderer/SVG/SVGRenderer.js"],
            i["Core/Utilities.js"],
          ],
          function (t, e, i, n) {
            var o =
                (this && this.__extends) ||
                (function () {
                  var t = function (e, i) {
                    t =
                      Object.setPrototypeOf ||
                      ({ __proto__: [] } instanceof Array &&
                        function (t, e) {
                          t.__proto__ = e;
                        }) ||
                      function (t, e) {
                        for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
                      };
                    return t(e, i);
                  };
                  return function (e, i) {
                    function n() {
                      this.constructor = e;
                    }
                    t(e, i);
                    e.prototype =
                      null === i
                        ? Object.create(i)
                        : ((n.prototype = i.prototype), new n());
                  };
                })(),
              r = n.attr,
              s = n.createElement,
              a = n.extend,
              h = n.pick;
            return (function (i) {
              function n() {
                return (null !== i && i.apply(this, arguments)) || this;
              }
              o(n, i);
              n.compose = function (t) {
                -1 === n.composedClasses.indexOf(t) &&
                  (n.composedClasses.push(t),
                  (t.prototype.html = n.prototype.html));
                return t;
              };
              n.prototype.html = function (i, n, o) {
                var l = this.createElement("span"),
                  c = l.element,
                  d = l.renderer,
                  p = d.isSVG,
                  u = function (t, i) {
                    ["opacity", "visibility"].forEach(function (n) {
                      t[n + "Setter"] = function (o, r, s) {
                        var a = t.div ? t.div.style : i;
                        e.prototype[n + "Setter"].call(this, o, r, s);
                        a && (a[r] = o);
                      };
                    });
                    t.addedSetters = !0;
                  };
                l.textSetter = function (e) {
                  e !== this.textStr &&
                    (delete this.bBox,
                    delete this.oldTextWidth,
                    t.setElementHTML(this.element, h(e, "")),
                    (this.textStr = e),
                    (l.doTransform = !0));
                };
                p && u(l, l.element.style);
                l.xSetter =
                  l.ySetter =
                  l.alignSetter =
                  l.rotationSetter =
                    function (t, e) {
                      "align" === e
                        ? (l.alignValue = l.textAlign = t)
                        : (l[e] = t);
                      l.doTransform = !0;
                    };
                l.afterSetters = function () {
                  this.doTransform &&
                    (this.htmlUpdateTransform(), (this.doTransform = !1));
                };
                l.attr({ text: i, x: Math.round(n), y: Math.round(o) }).css({
                  position: "absolute",
                });
                d.styledMode ||
                  l.css({
                    fontFamily: this.style.fontFamily,
                    fontSize: this.style.fontSize,
                  });
                c.style.whiteSpace = "nowrap";
                l.css = l.htmlCss;
                p &&
                  (l.add = function (t) {
                    var e = d.box.parentNode,
                      i = [];
                    if ((this.parentGroup = t)) {
                      var n = t.div;
                      if (!n) {
                        for (; t; ) i.push(t), (t = t.parentGroup);
                        i.reverse().forEach(function (t) {
                          function o(e, i) {
                            t[i] = e;
                            "translateX" === i
                              ? (d.left = e + "px")
                              : (d.top = e + "px");
                            t.doTransform = !0;
                          }
                          var h = r(t.element, "class"),
                            c = t.styles || {};
                          n = t.div =
                            t.div ||
                            s(
                              "div",
                              h ? { className: h } : void 0,
                              {
                                position: "absolute",
                                left: (t.translateX || 0) + "px",
                                top: (t.translateY || 0) + "px",
                                display: t.display,
                                opacity: t.opacity,
                                cursor: c.cursor,
                                pointerEvents: c.pointerEvents,
                                visibility: t.visibility,
                              },
                              n || e
                            );
                          var d = n.style;
                          a(t, {
                            classSetter: (function (t) {
                              return function (e) {
                                this.element.setAttribute("class", e);
                                t.className = e;
                              };
                            })(n),
                            on: function () {
                              i[0].div &&
                                l.on.apply(
                                  { element: i[0].div, onEvents: t.onEvents },
                                  arguments
                                );
                              return t;
                            },
                            translateXSetter: o,
                            translateYSetter: o,
                          });
                          t.addedSetters || u(t);
                        });
                      }
                    } else n = e;
                    n.appendChild(c);
                    l.added = !0;
                    l.alignOnAdd && l.htmlUpdateTransform();
                    return l;
                  });
                return l;
              };
              n.composedClasses = [];
              return n;
            })(i);
          }
        );
        e(
          i,
          "Core/Axis/AxisDefaults.js",
          [i["Core/Color/Palette.js"]],
          function (t) {
            var e;
            (function (e) {
              e.defaultXAxisOptions = {
                alignTicks: !0,
                allowDecimals: void 0,
                panningEnabled: !0,
                zIndex: 2,
                zoomEnabled: !0,
                dateTimeLabelFormats: {
                  millisecond: { main: "%H:%M:%S.%L", range: !1 },
                  second: { main: "%H:%M:%S", range: !1 },
                  minute: { main: "%H:%M", range: !1 },
                  hour: { main: "%H:%M", range: !1 },
                  day: { main: "%e. %b" },
                  week: { main: "%e. %b" },
                  month: { main: "%b '%y" },
                  year: { main: "%Y" },
                },
                endOnTick: !1,
                gridLineDashStyle: "Solid",
                gridZIndex: 1,
                labels: {
                  autoRotation: void 0,
                  autoRotationLimit: 80,
                  distance: void 0,
                  enabled: !0,
                  indentation: 10,
                  overflow: "justify",
                  padding: 5,
                  reserveSpace: void 0,
                  rotation: void 0,
                  staggerLines: 0,
                  step: 0,
                  useHTML: !1,
                  x: 0,
                  zIndex: 7,
                  style: {
                    color: t.neutralColor60,
                    cursor: "default",
                    fontSize: "11px",
                  },
                },
                maxPadding: 0.01,
                minorGridLineDashStyle: "Solid",
                minorTickLength: 2,
                minorTickPosition: "outside",
                minPadding: 0.01,
                offset: void 0,
                opposite: !1,
                reversed: void 0,
                reversedStacks: !1,
                showEmpty: !0,
                showFirstLabel: !0,
                showLastLabel: !0,
                startOfWeek: 1,
                startOnTick: !1,
                tickLength: 10,
                tickPixelInterval: 100,
                tickmarkPlacement: "between",
                tickPosition: "outside",
                title: {
                  align: "middle",
                  rotation: 0,
                  useHTML: !1,
                  x: 0,
                  y: 0,
                  style: { color: t.neutralColor60 },
                },
                type: "linear",
                uniqueNames: !0,
                visible: !0,
                minorGridLineColor: t.neutralColor5,
                minorGridLineWidth: 1,
                minorTickColor: t.neutralColor40,
                lineColor: t.highlightColor20,
                lineWidth: 1,
                gridLineColor: t.neutralColor10,
                gridLineWidth: void 0,
                tickColor: t.highlightColor20,
              };
              e.defaultYAxisOptions = {
                reversedStacks: !0,
                endOnTick: !0,
                maxPadding: 0.05,
                minPadding: 0.05,
                tickPixelInterval: 72,
                showLastLabel: !0,
                labels: { x: -8 },
                startOnTick: !0,
                title: { rotation: 270, text: "Values" },
                stackLabels: {
                  animation: {},
                  allowOverlap: !1,
                  enabled: !1,
                  crop: !0,
                  overflow: "justify",
                  formatter: function () {
                    var t = this.axis.chart.numberFormatter;
                    return t(this.total, -1);
                  },
                  style: {
                    color: t.neutralColor100,
                    fontSize: "11px",
                    fontWeight: "bold",
                    textOutline: "1px contrast",
                  },
                },
                gridLineWidth: 1,
                lineWidth: 0,
              };
              e.defaultLeftAxisOptions = {
                labels: { x: -15 },
                title: { rotation: 270 },
              };
              e.defaultRightAxisOptions = {
                labels: { x: 15 },
                title: { rotation: 90 },
              };
              e.defaultBottomAxisOptions = {
                labels: { autoRotation: [-45], x: 0 },
                margin: 15,
                title: { rotation: 0 },
              };
              e.defaultTopAxisOptions = {
                labels: { autoRotation: [-45], x: 0 },
                margin: 15,
                title: { rotation: 0 },
              };
            })(e || (e = {}));
            return e;
          }
        );
        e(i, "Core/Foundation.js", [i["Core/Utilities.js"]], function (t) {
          var e = t.addEvent,
            i = t.isFunction,
            n = t.objectEach,
            o = t.removeEvent;
          return {
            registerEventOptions: function (t, r) {
              t.eventOptions = t.eventOptions || {};
              n(r.events, function (n, r) {
                t.eventOptions[r] !== n &&
                  (t.eventOptions[r] &&
                    (o(t, r, t.eventOptions[r]), delete t.eventOptions[r]),
                  i(n) && ((t.eventOptions[r] = n), e(t, r, n)));
              });
            },
          };
        });
        e(
          i,
          "Core/Axis/Tick.js",
          [
            i["Core/FormatUtilities.js"],
            i["Core/Globals.js"],
            i["Core/Utilities.js"],
          ],
          function (t, e, i) {
            var n = e.deg2rad,
              o = i.clamp,
              r = i.correctFloat,
              s = i.defined,
              a = i.destroyObjectProperties,
              h = i.extend,
              l = i.fireEvent,
              c = i.isNumber,
              d = i.merge,
              p = i.objectEach,
              u = i.pick;
            e = (function () {
              function e(t, e, i, n, o) {
                this.isNewLabel = this.isNew = !0;
                this.axis = t;
                this.pos = e;
                this.type = i || "";
                this.parameters = o || {};
                this.tickmarkOffset = this.parameters.tickmarkOffset;
                this.options = this.parameters.options;
                l(this, "init");
                i || n || this.addLabel();
              }
              e.prototype.addLabel = function () {
                var e = this,
                  i = e.axis,
                  n = i.options,
                  o = i.chart,
                  a = i.categories,
                  d = i.logarithmic,
                  p = i.names,
                  f = e.pos,
                  g = u(e.options && e.options.labels, n.labels),
                  m = i.tickPositions,
                  y = f === m[0],
                  v = f === m[m.length - 1],
                  x = (!g.step || 1 === g.step) && 1 === i.tickInterval;
                m = m.info;
                var b = e.label,
                  C;
                a = this.parameters.category || (a ? u(a[f], p[f], f) : f);
                d && c(a) && (a = r(d.lin2log(a)));
                if (i.dateTime)
                  if (m) {
                    var w = o.time.resolveDTLFormat(
                      n.dateTimeLabelFormats[
                        (!n.grid && m.higherRanks[f]) || m.unitName
                      ]
                    );
                    var S = w.main;
                  } else
                    c(a) &&
                      (S = i.dateTime.getXDateFormat(
                        a,
                        n.dateTimeLabelFormats || {}
                      ));
                e.isFirst = y;
                e.isLast = v;
                var A = {
                  axis: i,
                  chart: o,
                  dateTimeLabelFormat: S,
                  isFirst: y,
                  isLast: v,
                  pos: f,
                  tick: e,
                  tickPositionInfo: m,
                  value: a,
                };
                l(this, "labelFormat", A);
                var k = function (e) {
                  return g.formatter
                    ? g.formatter.call(e, e)
                    : g.format
                    ? ((e.text = i.defaultLabelFormatter.call(e)),
                      t.format(g.format, e, o))
                    : i.defaultLabelFormatter.call(e, e);
                };
                n = k.call(A, A);
                var T = w && w.list;
                e.shortenLabel = T
                  ? function () {
                      for (C = 0; C < T.length; C++)
                        if (
                          (h(A, { dateTimeLabelFormat: T[C] }),
                          b.attr({ text: k.call(A, A) }),
                          b.getBBox().width < i.getSlotWidth(e) - 2 * g.padding)
                        )
                          return;
                      b.attr({ text: "" });
                    }
                  : void 0;
                x && i._addedPlotLB && e.moveLabel(n, g);
                s(b) || e.movedLabel
                  ? b &&
                    b.textStr !== n &&
                    !x &&
                    (!b.textWidth ||
                      g.style.width ||
                      b.styles.width ||
                      b.css({ width: null }),
                    b.attr({ text: n }),
                    (b.textPxLength = b.getBBox().width))
                  : ((e.label = b = e.createLabel({ x: 0, y: 0 }, n, g)),
                    (e.rotation = 0));
              };
              e.prototype.createLabel = function (t, e, i) {
                var n = this.axis,
                  o = n.chart;
                if (
                  (t =
                    s(e) && i.enabled
                      ? o.renderer
                          .text(e, t.x, t.y, i.useHTML)
                          .add(n.labelGroup)
                      : null)
                )
                  o.styledMode || t.css(d(i.style)),
                    (t.textPxLength = t.getBBox().width);
                return t;
              };
              e.prototype.destroy = function () {
                a(this, this.axis);
              };
              e.prototype.getPosition = function (t, e, i, n) {
                var s = this.axis,
                  a = s.chart,
                  h = (n && a.oldChartHeight) || a.chartHeight;
                t = {
                  x: t
                    ? r(s.translate(e + i, null, null, n) + s.transB)
                    : s.left +
                      s.offset +
                      (s.opposite
                        ? ((n && a.oldChartWidth) || a.chartWidth) -
                          s.right -
                          s.left
                        : 0),
                  y: t
                    ? h - s.bottom + s.offset - (s.opposite ? s.height : 0)
                    : r(h - s.translate(e + i, null, null, n) - s.transB),
                };
                t.y = o(t.y, -1e5, 1e5);
                l(this, "afterGetPosition", { pos: t });
                return t;
              };
              e.prototype.getLabelPosition = function (t, e, i, o, r, a, h, c) {
                var d = this.axis,
                  p = d.transA,
                  u =
                    d.isLinked && d.linkedParent
                      ? d.linkedParent.reversed
                      : d.reversed,
                  f = d.staggerLines,
                  g = d.tickRotCorr || { x: 0, y: 0 },
                  m =
                    o || d.reserveSpaceDefault
                      ? 0
                      : -d.labelOffset * ("center" === d.labelAlign ? 0.5 : 1),
                  y = {},
                  v = r.y;
                s(v) ||
                  (v =
                    0 === d.side
                      ? i.rotation
                        ? -8
                        : -i.getBBox().height
                      : 2 === d.side
                      ? g.y + 8
                      : Math.cos(i.rotation * n) *
                        (g.y - i.getBBox(!1, 0).height / 2));
                t = t + r.x + m + g.x - (a && o ? a * p * (u ? -1 : 1) : 0);
                e = e + v - (a && !o ? a * p * (u ? 1 : -1) : 0);
                f &&
                  ((i = (h / (c || 1)) % f),
                  d.opposite && (i = f - i - 1),
                  (e += (d.labelOffset / f) * i));
                y.x = t;
                y.y = Math.round(e);
                l(this, "afterGetLabelPosition", {
                  pos: y,
                  tickmarkOffset: a,
                  index: h,
                });
                return y;
              };
              e.prototype.getLabelSize = function () {
                return this.label
                  ? this.label.getBBox()[this.axis.horiz ? "height" : "width"]
                  : 0;
              };
              e.prototype.getMarkPath = function (t, e, i, n, o, r) {
                return r.crispLine(
                  [
                    ["M", t, e],
                    ["L", t + (o ? 0 : -i), e + (o ? i : 0)],
                  ],
                  n
                );
              };
              e.prototype.handleOverflow = function (t) {
                var e = this.axis,
                  i = e.options.labels,
                  o = t.x,
                  r = e.chart.chartWidth,
                  s = e.chart.spacing,
                  a = u(e.labelLeft, Math.min(e.pos, s[3]));
                s = u(
                  e.labelRight,
                  Math.max(e.isRadial ? 0 : e.pos + e.len, r - s[1])
                );
                var h = this.label,
                  l = this.rotation,
                  c = { left: 0, center: 0.5, right: 1 }[
                    e.labelAlign || h.attr("align")
                  ],
                  d = h.getBBox().width,
                  p = e.getSlotWidth(this),
                  f = {},
                  g = p,
                  m = 1,
                  y;
                if (l || "justify" !== i.overflow)
                  0 > l && o - c * d < a
                    ? (y = Math.round(o / Math.cos(l * n) - a))
                    : 0 < l &&
                      o + c * d > s &&
                      (y = Math.round((r - o) / Math.cos(l * n)));
                else if (
                  ((r = o + (1 - c) * d),
                  o - c * d < a
                    ? (g = t.x + g * (1 - c) - a)
                    : r > s && ((g = s - t.x + g * c), (m = -1)),
                  (g = Math.min(p, g)),
                  g < p &&
                    "center" === e.labelAlign &&
                    (t.x += m * (p - g - c * (p - Math.min(d, g)))),
                  d > g || (e.autoRotation && (h.styles || {}).width))
                )
                  y = g;
                y &&
                  (this.shortenLabel
                    ? this.shortenLabel()
                    : ((f.width = Math.floor(y) + "px"),
                      (i.style || {}).textOverflow ||
                        (f.textOverflow = "ellipsis"),
                      h.css(f)));
              };
              e.prototype.moveLabel = function (t, e) {
                var i = this,
                  n = i.label,
                  o = i.axis,
                  r = o.reversed,
                  s = !1;
                n && n.textStr === t
                  ? ((i.movedLabel = n), (s = !0), delete i.label)
                  : p(o.ticks, function (e) {
                      s ||
                        e.isNew ||
                        e === i ||
                        !e.label ||
                        e.label.textStr !== t ||
                        ((i.movedLabel = e.label),
                        (s = !0),
                        (e.labelPos = i.movedLabel.xy),
                        delete e.label);
                    });
                if (!s && (i.labelPos || n)) {
                  var a = i.labelPos || n.xy;
                  n = o.horiz ? (r ? 0 : o.width + o.left) : a.x;
                  o = o.horiz ? a.y : r ? o.width + o.left : 0;
                  i.movedLabel = i.createLabel({ x: n, y: o }, t, e);
                  i.movedLabel && i.movedLabel.attr({ opacity: 0 });
                }
              };
              e.prototype.render = function (t, e, i) {
                var n = this.axis,
                  o = n.horiz,
                  r = this.pos,
                  s = u(this.tickmarkOffset, n.tickmarkOffset);
                r = this.getPosition(o, r, s, e);
                s = r.x;
                var a = r.y;
                n = (o && s === n.pos + n.len) || (!o && a === n.pos) ? -1 : 1;
                o = u(i, this.label && this.label.newOpacity, 1);
                i = u(i, 1);
                this.isActive = !0;
                this.renderGridLine(e, i, n);
                this.renderMark(r, i, n);
                this.renderLabel(r, e, o, t);
                this.isNew = !1;
                l(this, "afterRender");
              };
              e.prototype.renderGridLine = function (t, e, i) {
                var n = this.axis,
                  o = n.options,
                  r = {},
                  s = this.pos,
                  a = this.type,
                  h = u(this.tickmarkOffset, n.tickmarkOffset),
                  l = n.chart.renderer,
                  c = this.gridLine,
                  d = o.gridLineWidth,
                  p = o.gridLineColor,
                  f = o.gridLineDashStyle;
                "minor" === this.type &&
                  ((d = o.minorGridLineWidth),
                  (p = o.minorGridLineColor),
                  (f = o.minorGridLineDashStyle));
                c ||
                  (n.chart.styledMode ||
                    ((r.stroke = p),
                    (r["stroke-width"] = d || 0),
                    (r.dashstyle = f)),
                  a || (r.zIndex = 1),
                  t && (e = 0),
                  (this.gridLine = c =
                    l
                      .path()
                      .attr(r)
                      .addClass(
                        "highcharts-" + (a ? a + "-" : "") + "grid-line"
                      )
                      .add(n.gridGroup)));
                if (
                  c &&
                  (i = n.getPlotLinePath({
                    value: s + h,
                    lineWidth: c.strokeWidth() * i,
                    force: "pass",
                    old: t,
                  }))
                )
                  c[t || this.isNew ? "attr" : "animate"]({ d: i, opacity: e });
              };
              e.prototype.renderMark = function (t, e, i) {
                var n = this.axis,
                  o = n.options,
                  r = n.chart.renderer,
                  s = this.type,
                  a = n.tickSize(s ? s + "Tick" : "tick"),
                  h = t.x;
                t = t.y;
                var l = u(
                  o["minor" !== s ? "tickWidth" : "minorTickWidth"],
                  !s && n.isXAxis ? 1 : 0
                );
                o = o["minor" !== s ? "tickColor" : "minorTickColor"];
                var c = this.mark,
                  d = !c;
                a &&
                  (n.opposite && (a[0] = -a[0]),
                  c ||
                    ((this.mark = c =
                      r
                        .path()
                        .addClass("highcharts-" + (s ? s + "-" : "") + "tick")
                        .add(n.axisGroup)),
                    n.chart.styledMode ||
                      c.attr({ stroke: o, "stroke-width": l })),
                  c[d ? "attr" : "animate"]({
                    d: this.getMarkPath(
                      h,
                      t,
                      a[0],
                      c.strokeWidth() * i,
                      n.horiz,
                      r
                    ),
                    opacity: e,
                  }));
              };
              e.prototype.renderLabel = function (t, e, i, n) {
                var o = this.axis,
                  r = o.horiz,
                  s = o.options,
                  a = this.label,
                  h = s.labels,
                  l = h.step;
                o = u(this.tickmarkOffset, o.tickmarkOffset);
                var d = t.x;
                t = t.y;
                var p = !0;
                a &&
                  c(d) &&
                  ((a.xy = t = this.getLabelPosition(d, t, a, r, h, o, n, l)),
                  (this.isFirst && !this.isLast && !s.showFirstLabel) ||
                  (this.isLast && !this.isFirst && !s.showLastLabel)
                    ? (p = !1)
                    : !r ||
                      h.step ||
                      h.rotation ||
                      e ||
                      0 === i ||
                      this.handleOverflow(t),
                  l && n % l && (p = !1),
                  p && c(t.y)
                    ? ((t.opacity = i),
                      a[this.isNewLabel ? "attr" : "animate"](t),
                      (this.isNewLabel = !1))
                    : (a.attr("y", -9999), (this.isNewLabel = !0)));
              };
              e.prototype.replaceMovedLabel = function () {
                var t = this.label,
                  e = this.axis,
                  i = e.reversed;
                if (t && !this.isNew) {
                  var n = e.horiz ? (i ? e.left : e.width + e.left) : t.xy.x;
                  i = e.horiz ? t.xy.y : i ? e.width + e.top : e.top;
                  t.animate({ x: n, y: i, opacity: 0 }, void 0, t.destroy);
                  delete this.label;
                }
                e.isDirty = !0;
                this.label = this.movedLabel;
                delete this.movedLabel;
              };
              return e;
            })();
            ("");
            return e;
          }
        );
        e(
          i,
          "Core/Axis/Axis.js",
          [
            i["Core/Animation/AnimationUtilities.js"],
            i["Core/Axis/AxisDefaults.js"],
            i["Core/Color/Color.js"],
            i["Core/Color/Palette.js"],
            i["Core/DefaultOptions.js"],
            i["Core/Foundation.js"],
            i["Core/Globals.js"],
            i["Core/Axis/Tick.js"],
            i["Core/Utilities.js"],
          ],
          function (t, e, i, n, o, r, s, a, h) {
            var l = t.animObject,
              c = o.defaultOptions,
              d = r.registerEventOptions,
              p = s.deg2rad,
              u = h.arrayMax,
              f = h.arrayMin,
              g = h.clamp,
              m = h.correctFloat,
              y = h.defined,
              v = h.destroyObjectProperties,
              x = h.erase,
              b = h.error,
              C = h.extend,
              w = h.fireEvent,
              S = h.getMagnitude,
              A = h.isArray,
              k = h.isNumber,
              T = h.isString,
              M = h.merge,
              P = h.normalizeTickInterval,
              E = h.objectEach,
              L = h.pick,
              O = h.relativeLength,
              D = h.removeEvent,
              j = h.splat,
              B = h.syncTimeout;
            t = (function () {
              function t(t, e) {
                this.zoomEnabled =
                  this.width =
                  this.visible =
                  this.userOptions =
                  this.translationSlope =
                  this.transB =
                  this.transA =
                  this.top =
                  this.ticks =
                  this.tickRotCorr =
                  this.tickPositions =
                  this.tickmarkOffset =
                  this.tickInterval =
                  this.tickAmount =
                  this.side =
                  this.series =
                  this.right =
                  this.positiveValuesOnly =
                  this.pos =
                  this.pointRangePadding =
                  this.pointRange =
                  this.plotLinesAndBandsGroups =
                  this.plotLinesAndBands =
                  this.paddedTicks =
                  this.overlap =
                  this.options =
                  this.offset =
                  this.names =
                  this.minPixelPadding =
                  this.minorTicks =
                  this.minorTickInterval =
                  this.min =
                  this.maxLabelLength =
                  this.max =
                  this.len =
                  this.left =
                  this.labelFormatter =
                  this.labelEdge =
                  this.isLinked =
                  this.height =
                  this.hasVisibleSeries =
                  this.hasNames =
                  this.eventOptions =
                  this.coll =
                  this.closestPointRange =
                  this.chart =
                  this.categories =
                  this.bottom =
                  this.alternateBands =
                    void 0;
                this.init(t, e);
              }
              t.prototype.init = function (t, e) {
                var i = e.isX;
                this.chart = t;
                this.horiz = t.inverted && !this.isZAxis ? !i : i;
                this.isXAxis = i;
                this.coll = this.coll || (i ? "xAxis" : "yAxis");
                w(this, "init", { userOptions: e });
                this.opposite = L(e.opposite, this.opposite);
                this.side = L(
                  e.side,
                  this.side,
                  this.horiz ? (this.opposite ? 0 : 2) : this.opposite ? 1 : 3
                );
                this.setOptions(e);
                var n = this.options,
                  o = n.labels,
                  r = n.type;
                this.userOptions = e;
                this.minPixelPadding = 0;
                this.reversed = L(n.reversed, this.reversed);
                this.visible = n.visible;
                this.zoomEnabled = n.zoomEnabled;
                this.hasNames = "category" === r || !0 === n.categories;
                this.categories = n.categories || this.hasNames;
                this.names || ((this.names = []), (this.names.keys = {}));
                this.plotLinesAndBandsGroups = {};
                this.positiveValuesOnly = !!this.logarithmic;
                this.isLinked = y(n.linkedTo);
                this.ticks = {};
                this.labelEdge = [];
                this.minorTicks = {};
                this.plotLinesAndBands = [];
                this.alternateBands = {};
                this.len = 0;
                this.minRange = this.userMinRange = n.minRange || n.maxZoom;
                this.range = n.range;
                this.offset = n.offset || 0;
                this.min = this.max = null;
                e = L(n.crosshair, j(t.options.tooltip.crosshairs)[i ? 0 : 1]);
                this.crosshair = !0 === e ? {} : e;
                -1 === t.axes.indexOf(this) &&
                  (i
                    ? t.axes.splice(t.xAxis.length, 0, this)
                    : t.axes.push(this),
                  t[this.coll].push(this));
                this.series = this.series || [];
                t.inverted &&
                  !this.isZAxis &&
                  i &&
                  "undefined" === typeof this.reversed &&
                  (this.reversed = !0);
                this.labelRotation = k(o.rotation) ? o.rotation : void 0;
                d(this, n);
                w(this, "afterInit");
              };
              t.prototype.setOptions = function (t) {
                this.options = M(
                  e.defaultXAxisOptions,
                  "yAxis" === this.coll && e.defaultYAxisOptions,
                  [
                    e.defaultTopAxisOptions,
                    e.defaultRightAxisOptions,
                    e.defaultBottomAxisOptions,
                    e.defaultLeftAxisOptions,
                  ][this.side],
                  M(c[this.coll], t)
                );
                w(this, "afterSetOptions", { userOptions: t });
              };
              t.prototype.defaultLabelFormatter = function (t) {
                var e = this.axis;
                t = this.chart.numberFormatter;
                var i = k(this.value) ? this.value : NaN,
                  n = e.chart.time,
                  o = this.dateTimeLabelFormat,
                  r = c.lang,
                  s = r.numericSymbols;
                r = r.numericSymbolMagnitude || 1e3;
                var a = e.logarithmic ? Math.abs(i) : e.tickInterval,
                  h = s && s.length;
                if (e.categories) var l = "" + this.value;
                else if (o) l = n.dateFormat(o, i);
                else if (h && 1e3 <= a)
                  for (; h-- && "undefined" === typeof l; )
                    (e = Math.pow(r, h + 1)),
                      a >= e &&
                        0 === (10 * i) % e &&
                        null !== s[h] &&
                        0 !== i &&
                        (l = t(i / e, -1) + s[h]);
                "undefined" === typeof l &&
                  (l = 1e4 <= Math.abs(i) ? t(i, -1) : t(i, -1, void 0, ""));
                return l;
              };
              t.prototype.getSeriesExtremes = function () {
                var t = this,
                  e = t.chart,
                  i;
                w(this, "getSeriesExtremes", null, function () {
                  t.hasVisibleSeries = !1;
                  t.dataMin = t.dataMax = t.threshold = null;
                  t.softThreshold = !t.isXAxis;
                  t.stacking && t.stacking.buildStacks();
                  t.series.forEach(function (n) {
                    if (n.visible || !e.options.chart.ignoreHiddenSeries) {
                      var o = n.options,
                        r = o.threshold;
                      t.hasVisibleSeries = !0;
                      t.positiveValuesOnly && 0 >= r && (r = null);
                      if (t.isXAxis) {
                        if (((o = n.xData), o.length)) {
                          o = t.logarithmic
                            ? o.filter(t.validatePositiveValue)
                            : o;
                          i = n.getXExtremes(o);
                          var s = i.min;
                          var a = i.max;
                          k(s) ||
                            s instanceof Date ||
                            ((o = o.filter(k)),
                            (i = n.getXExtremes(o)),
                            (s = i.min),
                            (a = i.max));
                          o.length &&
                            ((t.dataMin = Math.min(L(t.dataMin, s), s)),
                            (t.dataMax = Math.max(L(t.dataMax, a), a)));
                        }
                      } else if (
                        ((n = n.applyExtremes()),
                        k(n.dataMin) &&
                          ((s = n.dataMin),
                          (t.dataMin = Math.min(L(t.dataMin, s), s))),
                        k(n.dataMax) &&
                          ((a = n.dataMax),
                          (t.dataMax = Math.max(L(t.dataMax, a), a))),
                        y(r) && (t.threshold = r),
                        !o.softThreshold || t.positiveValuesOnly)
                      )
                        t.softThreshold = !1;
                    }
                  });
                });
                w(this, "afterGetSeriesExtremes");
              };
              t.prototype.translate = function (t, e, i, n, o, r) {
                var s = this.linkedParent || this,
                  a = n && s.old ? s.old.min : s.min,
                  h = s.minPixelPadding;
                o =
                  (s.isOrdinal ||
                    (s.brokenAxis && s.brokenAxis.hasBreaks) ||
                    (s.logarithmic && o)) &&
                  s.lin2val;
                var l = 1,
                  c = 0;
                n = n && s.old ? s.old.transA : s.transA;
                n || (n = s.transA);
                i && ((l *= -1), (c = s.len));
                s.reversed && ((l *= -1), (c -= l * (s.sector || s.len)));
                e
                  ? ((t = (t * l + c - h) / n + a), o && (t = s.lin2val(t)))
                  : (o && (t = s.val2lin(t)),
                    (t = k(a)
                      ? l * (t - a) * n + c + l * h + (k(r) ? n * r : 0)
                      : void 0));
                return t;
              };
              t.prototype.toPixels = function (t, e) {
                return (
                  this.translate(t, !1, !this.horiz, null, !0) +
                  (e ? 0 : this.pos)
                );
              };
              t.prototype.toValue = function (t, e) {
                return this.translate(
                  t - (e ? 0 : this.pos),
                  !0,
                  !this.horiz,
                  null,
                  !0
                );
              };
              t.prototype.getPlotLinePath = function (t) {
                function e(t, e, i) {
                  if (("pass" !== u && t < e) || t > i)
                    u ? (t = g(t, e, i)) : (x = !0);
                  return t;
                }
                var i = this,
                  n = i.chart,
                  o = i.left,
                  r = i.top,
                  s = t.old,
                  a = t.value,
                  h = t.lineWidth,
                  l = (s && n.oldChartHeight) || n.chartHeight,
                  c = (s && n.oldChartWidth) || n.chartWidth,
                  d = i.transB,
                  p = t.translatedValue,
                  u = t.force,
                  f,
                  m,
                  y,
                  v,
                  x;
                t = {
                  value: a,
                  lineWidth: h,
                  old: s,
                  force: u,
                  acrossPanes: t.acrossPanes,
                  translatedValue: p,
                };
                w(this, "getPlotLinePath", t, function (t) {
                  p = L(p, i.translate(a, null, null, s));
                  p = g(p, -1e5, 1e5);
                  f = y = Math.round(p + d);
                  m = v = Math.round(l - p - d);
                  k(p)
                    ? i.horiz
                      ? ((m = r),
                        (v = l - i.bottom),
                        (f = y = e(f, o, o + i.width)))
                      : ((f = o),
                        (y = c - i.right),
                        (m = v = e(m, r, r + i.height)))
                    : ((x = !0), (u = !1));
                  t.path =
                    x && !u
                      ? null
                      : n.renderer.crispLine(
                          [
                            ["M", f, m],
                            ["L", y, v],
                          ],
                          h || 1
                        );
                });
                return t.path;
              };
              t.prototype.getLinearTickPositions = function (t, e, i) {
                var n = m(Math.floor(e / t) * t);
                i = m(Math.ceil(i / t) * t);
                var o = [],
                  r;
                m(n + t) === n && (r = 20);
                if (this.single) return [e];
                for (e = n; e <= i; ) {
                  o.push(e);
                  e = m(e + t, r);
                  if (e === s) break;
                  var s = e;
                }
                return o;
              };
              t.prototype.getMinorTickInterval = function () {
                var t = this.options;
                return !0 === t.minorTicks
                  ? L(t.minorTickInterval, "auto")
                  : !1 === t.minorTicks
                  ? null
                  : t.minorTickInterval;
              };
              t.prototype.getMinorTickPositions = function () {
                var t = this.options,
                  e = this.tickPositions,
                  i = this.minorTickInterval,
                  n = this.pointRangePadding || 0,
                  o = this.min - n;
                n = this.max + n;
                var r = n - o,
                  s = [];
                if (r && r / i < this.len / 3) {
                  var a = this.logarithmic;
                  if (a)
                    this.paddedTicks.forEach(function (t, e, n) {
                      e &&
                        s.push.apply(
                          s,
                          a.getLogTickPositions(i, n[e - 1], n[e], !0)
                        );
                    });
                  else if (
                    this.dateTime &&
                    "auto" === this.getMinorTickInterval()
                  )
                    s = s.concat(
                      this.getTimeTicks(
                        this.dateTime.normalizeTimeTickInterval(i),
                        o,
                        n,
                        t.startOfWeek
                      )
                    );
                  else
                    for (t = o + ((e[0] - o) % i); t <= n && t !== s[0]; t += i)
                      s.push(t);
                }
                0 !== s.length && this.trimTicks(s);
                return s;
              };
              t.prototype.adjustForMinRange = function () {
                var t = this.options,
                  e = this.logarithmic,
                  i = this.min,
                  n = this.max,
                  o = 0,
                  r,
                  s,
                  a,
                  h;
                this.isXAxis &&
                  "undefined" === typeof this.minRange &&
                  !e &&
                  (y(t.min) || y(t.max)
                    ? (this.minRange = null)
                    : (this.series.forEach(function (t) {
                        a = t.xData;
                        h = t.xIncrement ? 1 : a.length - 1;
                        if (1 < a.length)
                          for (r = h; 0 < r; r--)
                            if (((s = a[r] - a[r - 1]), !o || s < o)) o = s;
                      }),
                      (this.minRange = Math.min(
                        5 * o,
                        this.dataMax - this.dataMin
                      ))));
                if (n - i < this.minRange) {
                  var l = this.dataMax - this.dataMin >= this.minRange;
                  var c = this.minRange;
                  var d = (c - n + i) / 2;
                  d = [i - d, L(t.min, i - d)];
                  l &&
                    (d[2] = this.logarithmic
                      ? this.logarithmic.log2lin(this.dataMin)
                      : this.dataMin);
                  i = u(d);
                  n = [i + c, L(t.max, i + c)];
                  l && (n[2] = e ? e.log2lin(this.dataMax) : this.dataMax);
                  n = f(n);
                  n - i < c &&
                    ((d[0] = n - c), (d[1] = L(t.min, n - c)), (i = u(d)));
                }
                this.min = i;
                this.max = n;
              };
              t.prototype.getClosest = function () {
                var t;
                this.categories
                  ? (t = 1)
                  : this.series.forEach(function (e) {
                      var i = e.closestPointRange,
                        n =
                          e.visible ||
                          !e.chart.options.chart.ignoreHiddenSeries;
                      !e.noSharedTooltip &&
                        y(i) &&
                        n &&
                        (t = y(t) ? Math.min(t, i) : i);
                    });
                return t;
              };
              t.prototype.nameToX = function (t) {
                var e = A(this.categories),
                  i = e ? this.categories : this.names,
                  n = t.options.x;
                t.series.requireSorting = !1;
                y(n) ||
                  (n = this.options.uniqueNames
                    ? e
                      ? i.indexOf(t.name)
                      : L(i.keys[t.name], -1)
                    : t.series.autoIncrement());
                if (-1 === n) {
                  if (!e) var o = i.length;
                } else o = n;
                "undefined" !== typeof o &&
                  ((this.names[o] = t.name), (this.names.keys[t.name] = o));
                return o;
              };
              t.prototype.updateNames = function () {
                var t = this,
                  e = this.names;
                0 < e.length &&
                  (Object.keys(e.keys).forEach(function (t) {
                    delete e.keys[t];
                  }),
                  (e.length = 0),
                  (this.minRange = this.userMinRange),
                  (this.series || []).forEach(function (e) {
                    e.xIncrement = null;
                    if (!e.points || e.isDirtyData)
                      (t.max = Math.max(t.max, e.xData.length - 1)),
                        e.processData(),
                        e.generatePoints();
                    e.data.forEach(function (i, n) {
                      if (i && i.options && "undefined" !== typeof i.name) {
                        var o = t.nameToX(i);
                        "undefined" !== typeof o &&
                          o !== i.x &&
                          ((i.x = o), (e.xData[n] = o));
                      }
                    });
                  }));
              };
              t.prototype.setAxisTranslation = function () {
                var t = this,
                  e = t.max - t.min,
                  i = t.linkedParent,
                  n = !!t.categories,
                  o = t.isXAxis,
                  r = t.axisPointRange || 0,
                  s = 0,
                  a = 0,
                  h = t.transA;
                if (o || n || r) {
                  var l = t.getClosest();
                  i
                    ? ((s = i.minPointOffset), (a = i.pointRangePadding))
                    : t.series.forEach(function (e) {
                        var i = n
                            ? 1
                            : o
                            ? L(e.options.pointRange, l, 0)
                            : t.axisPointRange || 0,
                          h = e.options.pointPlacement;
                        r = Math.max(r, i);
                        if (!t.single || n)
                          (e = e.is("xrange") ? !o : o),
                            (s = Math.max(s, e && T(h) ? 0 : i / 2)),
                            (a = Math.max(a, e && "on" === h ? 0 : i));
                      });
                  i =
                    t.ordinal && t.ordinal.slope && l ? t.ordinal.slope / l : 1;
                  t.minPointOffset = s *= i;
                  t.pointRangePadding = a *= i;
                  t.pointRange = Math.min(r, t.single && n ? 1 : e);
                  o && (t.closestPointRange = l);
                }
                t.translationSlope =
                  t.transA =
                  h =
                    t.staticScale || t.len / (e + a || 1);
                t.transB = t.horiz ? t.left : t.bottom;
                t.minPixelPadding = h * s;
                w(this, "afterSetAxisTranslation");
              };
              t.prototype.minFromRange = function () {
                return this.max - this.range;
              };
              t.prototype.setTickInterval = function (t) {
                var e = this,
                  i = e.chart,
                  n = e.logarithmic,
                  o = e.options,
                  r = e.isXAxis,
                  s = e.isLinked,
                  a = o.tickPixelInterval,
                  h = e.categories,
                  l = e.softThreshold,
                  c = o.maxPadding,
                  d = o.minPadding,
                  p = o.tickInterval,
                  u = k(e.threshold) ? e.threshold : null;
                e.dateTime || h || s || this.getTickAmount();
                var f = L(e.userMin, o.min);
                var g = L(e.userMax, o.max);
                if (s) {
                  e.linkedParent = i[e.coll][o.linkedTo];
                  var v = e.linkedParent.getExtremes();
                  e.min = L(v.min, v.dataMin);
                  e.max = L(v.max, v.dataMax);
                  o.type !== e.linkedParent.options.type && b(11, 1, i);
                } else {
                  if (l && y(u))
                    if (e.dataMin >= u) (v = u), (d = 0);
                    else if (e.dataMax <= u) {
                      var x = u;
                      c = 0;
                    }
                  e.min = L(f, v, e.dataMin);
                  e.max = L(g, x, e.dataMax);
                }
                n &&
                  (e.positiveValuesOnly &&
                    !t &&
                    0 >= Math.min(e.min, L(e.dataMin, e.min)) &&
                    b(10, 1, i),
                  (e.min = m(n.log2lin(e.min), 16)),
                  (e.max = m(n.log2lin(e.max), 16)));
                e.range &&
                  y(e.max) &&
                  ((e.userMin =
                    e.min =
                    f =
                      Math.max(e.dataMin, e.minFromRange())),
                  (e.userMax = g = e.max),
                  (e.range = null));
                w(e, "foundExtremes");
                e.beforePadding && e.beforePadding();
                e.adjustForMinRange();
                !(
                  h ||
                  e.axisPointRange ||
                  (e.stacking && e.stacking.usePercentage) ||
                  s
                ) &&
                  y(e.min) &&
                  y(e.max) &&
                  (i = e.max - e.min) &&
                  (!y(f) && d && (e.min -= i * d),
                  !y(g) && c && (e.max += i * c));
                k(e.userMin) ||
                  (k(o.softMin) && o.softMin < e.min && (e.min = f = o.softMin),
                  k(o.floor) && (e.min = Math.max(e.min, o.floor)));
                k(e.userMax) ||
                  (k(o.softMax) && o.softMax > e.max && (e.max = g = o.softMax),
                  k(o.ceiling) && (e.max = Math.min(e.max, o.ceiling)));
                l &&
                  y(e.dataMin) &&
                  ((u = u || 0),
                  !y(f) && e.min < u && e.dataMin >= u
                    ? (e.min = e.options.minRange
                        ? Math.min(u, e.max - e.minRange)
                        : u)
                    : !y(g) &&
                      e.max > u &&
                      e.dataMax <= u &&
                      (e.max = e.options.minRange
                        ? Math.max(u, e.min + e.minRange)
                        : u));
                k(e.min) &&
                  k(e.max) &&
                  !this.chart.polar &&
                  e.min > e.max &&
                  (y(e.options.min)
                    ? (e.max = e.min)
                    : y(e.options.max) && (e.min = e.max));
                e.tickInterval =
                  e.min === e.max ||
                  "undefined" === typeof e.min ||
                  "undefined" === typeof e.max
                    ? 1
                    : s &&
                      e.linkedParent &&
                      !p &&
                      a === e.linkedParent.options.tickPixelInterval
                    ? (p = e.linkedParent.tickInterval)
                    : L(
                        p,
                        this.tickAmount
                          ? (e.max - e.min) / Math.max(this.tickAmount - 1, 1)
                          : void 0,
                        h ? 1 : ((e.max - e.min) * a) / Math.max(e.len, a)
                      );
                r &&
                  !t &&
                  (e.series.forEach(function (t) {
                    t.forceCrop = t.forceCropping && t.forceCropping();
                    t.processData(
                      e.min !== (e.old && e.old.min) ||
                        e.max !== (e.old && e.old.max)
                    );
                  }),
                  w(this, "postProcessData"));
                e.setAxisTranslation();
                w(this, "initialAxisTranslation");
                e.pointRange &&
                  !p &&
                  (e.tickInterval = Math.max(e.pointRange, e.tickInterval));
                t = L(
                  o.minTickInterval,
                  e.dateTime &&
                    !e.series.some(function (t) {
                      return t.noSharedTooltip;
                    })
                    ? e.closestPointRange
                    : 0
                );
                !p && e.tickInterval < t && (e.tickInterval = t);
                e.dateTime ||
                  e.logarithmic ||
                  p ||
                  (e.tickInterval = P(
                    e.tickInterval,
                    void 0,
                    S(e.tickInterval),
                    L(
                      o.allowDecimals,
                      0.5 > e.tickInterval || void 0 !== this.tickAmount
                    ),
                    !!this.tickAmount
                  ));
                this.tickAmount || (e.tickInterval = e.unsquish());
                this.setTickPositions();
              };
              t.prototype.setTickPositions = function () {
                var t = this.options,
                  e = t.tickPositions,
                  i = this.getMinorTickInterval(),
                  n = this.hasVerticalPanning(),
                  o = "colorAxis" === this.coll,
                  r = (o || !n) && t.startOnTick;
                n = (o || !n) && t.endOnTick;
                o = t.tickPositioner;
                this.tickmarkOffset =
                  this.categories &&
                  "between" === t.tickmarkPlacement &&
                  1 === this.tickInterval
                    ? 0.5
                    : 0;
                this.minorTickInterval =
                  "auto" === i && this.tickInterval ? this.tickInterval / 5 : i;
                this.single =
                  this.min === this.max &&
                  y(this.min) &&
                  !this.tickAmount &&
                  (parseInt(this.min, 10) === this.min ||
                    !1 !== t.allowDecimals);
                this.tickPositions = i = e && e.slice();
                !i &&
                  ((this.ordinal && this.ordinal.positions) ||
                  !(
                    (this.max - this.min) / this.tickInterval >
                    Math.max(2 * this.len, 200)
                  )
                    ? (i = this.dateTime
                        ? this.getTimeTicks(
                            this.dateTime.normalizeTimeTickInterval(
                              this.tickInterval,
                              t.units
                            ),
                            this.min,
                            this.max,
                            t.startOfWeek,
                            this.ordinal && this.ordinal.positions,
                            this.closestPointRange,
                            !0
                          )
                        : this.logarithmic
                        ? this.logarithmic.getLogTickPositions(
                            this.tickInterval,
                            this.min,
                            this.max
                          )
                        : this.getLinearTickPositions(
                            this.tickInterval,
                            this.min,
                            this.max
                          ))
                    : ((i = [this.min, this.max]), b(19, !1, this.chart)),
                  i.length > this.len &&
                    ((i = [i[0], i.pop()]), i[0] === i[1] && (i.length = 1)),
                  (this.tickPositions = i),
                  o && (o = o.apply(this, [this.min, this.max]))) &&
                  (this.tickPositions = i = o);
                this.paddedTicks = i.slice(0);
                this.trimTicks(i, r, n);
                this.isLinked ||
                  (this.single &&
                    2 > i.length &&
                    !this.categories &&
                    !this.series.some(function (t) {
                      return (
                        t.is("heatmap") &&
                        "between" === t.options.pointPlacement
                      );
                    }) &&
                    ((this.min -= 0.5), (this.max += 0.5)),
                  e || o || this.adjustTickAmount());
                w(this, "afterSetTickPositions");
              };
              t.prototype.trimTicks = function (t, e, i) {
                var n = t[0],
                  o = t[t.length - 1],
                  r = (!this.isOrdinal && this.minPointOffset) || 0;
                w(this, "trimTicks");
                if (!this.isLinked) {
                  if (e && -Infinity !== n) this.min = n;
                  else for (; this.min - r > t[0]; ) t.shift();
                  if (i) this.max = o;
                  else for (; this.max + r < t[t.length - 1]; ) t.pop();
                  0 === t.length &&
                    y(n) &&
                    !this.options.tickPositions &&
                    t.push((o + n) / 2);
                }
              };
              t.prototype.alignToOthers = function () {
                var t = {},
                  e = this.options,
                  i;
                !1 !== this.chart.options.chart.alignTicks &&
                  e.alignTicks &&
                  !1 !== e.startOnTick &&
                  !1 !== e.endOnTick &&
                  !this.logarithmic &&
                  this.chart[this.coll].forEach(function (e) {
                    var n = e.options;
                    n = [
                      e.horiz ? n.left : n.top,
                      n.width,
                      n.height,
                      n.pane,
                    ].join();
                    e.series.length && (t[n] ? (i = !0) : (t[n] = 1));
                  });
                return i;
              };
              t.prototype.getTickAmount = function () {
                var t = this.options,
                  e = t.tickPixelInterval,
                  i = t.tickAmount;
                !y(t.tickInterval) &&
                  !i &&
                  this.len < e &&
                  !this.isRadial &&
                  !this.logarithmic &&
                  t.startOnTick &&
                  t.endOnTick &&
                  (i = 2);
                !i && this.alignToOthers() && (i = Math.ceil(this.len / e) + 1);
                4 > i && ((this.finalTickAmt = i), (i = 5));
                this.tickAmount = i;
              };
              t.prototype.adjustTickAmount = function () {
                var t = this.options,
                  e = this.tickInterval,
                  i = this.tickPositions,
                  n = this.tickAmount,
                  o = this.finalTickAmt,
                  r = i && i.length,
                  s = L(this.threshold, this.softThreshold ? 0 : null);
                if (this.hasData() && k(this.min) && k(this.max)) {
                  if (r < n) {
                    for (; i.length < n; )
                      i.length % 2 || this.min === s
                        ? i.push(m(i[i.length - 1] + e))
                        : i.unshift(m(i[0] - e));
                    this.transA *= (r - 1) / (n - 1);
                    this.min = t.startOnTick ? i[0] : Math.min(this.min, i[0]);
                    this.max = t.endOnTick
                      ? i[i.length - 1]
                      : Math.max(this.max, i[i.length - 1]);
                  } else
                    r > n &&
                      ((this.tickInterval *= 2), this.setTickPositions());
                  if (y(o)) {
                    for (e = t = i.length; e--; )
                      ((3 === o && 1 === e % 2) ||
                        (2 >= o && 0 < e && e < t - 1)) &&
                        i.splice(e, 1);
                    this.finalTickAmt = void 0;
                  }
                }
              };
              t.prototype.setScale = function () {
                var t = !1,
                  e = !1;
                this.series.forEach(function (i) {
                  t = t || i.isDirtyData || i.isDirty;
                  e = e || (i.xAxis && i.xAxis.isDirty) || !1;
                });
                this.setAxisSize();
                var i = this.len !== (this.old && this.old.len);
                i ||
                t ||
                e ||
                this.isLinked ||
                this.forceRedraw ||
                this.userMin !== (this.old && this.old.userMin) ||
                this.userMax !== (this.old && this.old.userMax) ||
                this.alignToOthers()
                  ? (this.stacking && this.stacking.resetStacks(),
                    (this.forceRedraw = !1),
                    this.getSeriesExtremes(),
                    this.setTickInterval(),
                    this.isDirty ||
                      (this.isDirty =
                        i ||
                        this.min !== (this.old && this.old.min) ||
                        this.max !== (this.old && this.old.max)))
                  : this.stacking && this.stacking.cleanStacks();
                t && this.panningState && (this.panningState.isDirty = !0);
                w(this, "afterSetScale");
              };
              t.prototype.setExtremes = function (t, e, i, n, o) {
                var r = this,
                  s = r.chart;
                i = L(i, !0);
                r.series.forEach(function (t) {
                  delete t.kdTree;
                });
                o = C(o, { min: t, max: e });
                w(r, "setExtremes", o, function () {
                  r.userMin = t;
                  r.userMax = e;
                  r.eventArgs = o;
                  i && s.redraw(n);
                });
              };
              t.prototype.zoom = function (t, e) {
                var i = this,
                  n = this.dataMin,
                  o = this.dataMax,
                  r = this.options,
                  s = Math.min(n, L(r.min, n)),
                  a = Math.max(o, L(r.max, o));
                t = { newMin: t, newMax: e };
                w(this, "zoom", t, function (t) {
                  var e = t.newMin,
                    r = t.newMax;
                  if (e !== i.min || r !== i.max)
                    i.allowZoomOutside ||
                      (y(n) && (e < s && (e = s), e > a && (e = a)),
                      y(o) && (r < s && (r = s), r > a && (r = a))),
                      (i.displayBtn =
                        "undefined" !== typeof e || "undefined" !== typeof r),
                      i.setExtremes(e, r, !1, void 0, { trigger: "zoom" });
                  t.zoomed = !0;
                });
                return t.zoomed;
              };
              t.prototype.setAxisSize = function () {
                var t = this.chart,
                  e = this.options,
                  i = e.offsets || [0, 0, 0, 0],
                  n = this.horiz,
                  o = (this.width = Math.round(
                    O(L(e.width, t.plotWidth - i[3] + i[1]), t.plotWidth)
                  )),
                  r = (this.height = Math.round(
                    O(L(e.height, t.plotHeight - i[0] + i[2]), t.plotHeight)
                  )),
                  s = (this.top = Math.round(
                    O(L(e.top, t.plotTop + i[0]), t.plotHeight, t.plotTop)
                  ));
                e = this.left = Math.round(
                  O(L(e.left, t.plotLeft + i[3]), t.plotWidth, t.plotLeft)
                );
                this.bottom = t.chartHeight - r - s;
                this.right = t.chartWidth - o - e;
                this.len = Math.max(n ? o : r, 0);
                this.pos = n ? e : s;
              };
              t.prototype.getExtremes = function () {
                var t = this.logarithmic;
                return {
                  min: t ? m(t.lin2log(this.min)) : this.min,
                  max: t ? m(t.lin2log(this.max)) : this.max,
                  dataMin: this.dataMin,
                  dataMax: this.dataMax,
                  userMin: this.userMin,
                  userMax: this.userMax,
                };
              };
              t.prototype.getThreshold = function (t) {
                var e = this.logarithmic,
                  i = e ? e.lin2log(this.min) : this.min;
                e = e ? e.lin2log(this.max) : this.max;
                null === t || -Infinity === t
                  ? (t = i)
                  : Infinity === t
                  ? (t = e)
                  : i > t
                  ? (t = i)
                  : e < t && (t = e);
                return this.translate(t, 0, 1, 0, 1);
              };
              t.prototype.autoLabelAlign = function (t) {
                var e = (L(t, 0) - 90 * this.side + 720) % 360;
                t = { align: "center" };
                w(this, "autoLabelAlign", t, function (t) {
                  15 < e && 165 > e
                    ? (t.align = "right")
                    : 195 < e && 345 > e && (t.align = "left");
                });
                return t.align;
              };
              t.prototype.tickSize = function (t) {
                var e = this.options,
                  i = L(
                    e["tick" === t ? "tickWidth" : "minorTickWidth"],
                    "tick" === t && this.isXAxis && !this.categories ? 1 : 0
                  ),
                  n = e["tick" === t ? "tickLength" : "minorTickLength"];
                if (i && n) {
                  "inside" === e[t + "Position"] && (n = -n);
                  var o = [n, i];
                }
                t = { tickSize: o };
                w(this, "afterTickSize", t);
                return t.tickSize;
              };
              t.prototype.labelMetrics = function () {
                var t = (this.tickPositions && this.tickPositions[0]) || 0;
                return this.chart.renderer.fontMetrics(
                  this.options.labels.style.fontSize,
                  this.ticks[t] && this.ticks[t].label
                );
              };
              t.prototype.unsquish = function () {
                var t = this.options.labels,
                  e = this.horiz,
                  i = this.tickInterval,
                  n =
                    this.len /
                    (((this.categories ? 1 : 0) + this.max - this.min) / i),
                  o = t.rotation,
                  r = this.labelMetrics(),
                  s = Math.max(this.max - this.min, 0),
                  a = function (t) {
                    var e = t / (n || 1);
                    e = 1 < e ? Math.ceil(e) : 1;
                    e * i > s &&
                      Infinity !== t &&
                      Infinity !== n &&
                      s &&
                      (e = Math.ceil(s / i));
                    return m(e * i);
                  },
                  h = i,
                  l,
                  c,
                  d = Number.MAX_VALUE;
                if (e) {
                  if (!t.staggerLines && !t.step)
                    if (k(o)) var u = [o];
                    else n < t.autoRotationLimit && (u = t.autoRotation);
                  u &&
                    u.forEach(function (t) {
                      if (t === o || (t && -90 <= t && 90 >= t)) {
                        c = a(Math.abs(r.h / Math.sin(p * t)));
                        var e = c + Math.abs(t / 360);
                        e < d && ((d = e), (l = t), (h = c));
                      }
                    });
                } else t.step || (h = a(r.h));
                this.autoRotation = u;
                this.labelRotation = L(l, k(o) ? o : 0);
                return h;
              };
              t.prototype.getSlotWidth = function (t) {
                var e = this.chart,
                  i = this.horiz,
                  n = this.options.labels,
                  o = Math.max(
                    this.tickPositions.length - (this.categories ? 0 : 1),
                    1
                  ),
                  r = e.margin[3];
                if (t && k(t.slotWidth)) return t.slotWidth;
                if (i && 2 > n.step)
                  return n.rotation
                    ? 0
                    : ((this.staggerLines || 1) * this.len) / o;
                if (!i) {
                  t = n.style.width;
                  if (void 0 !== t) return parseInt(String(t), 10);
                  if (r) return r - e.spacing[3];
                }
                return 0.33 * e.chartWidth;
              };
              t.prototype.renderUnsquish = function () {
                var t = this.chart,
                  e = t.renderer,
                  i = this.tickPositions,
                  n = this.ticks,
                  o = this.options.labels,
                  r = o.style,
                  s = this.horiz,
                  a = this.getSlotWidth(),
                  h = Math.max(1, Math.round(a - 2 * o.padding)),
                  l = {},
                  c = this.labelMetrics(),
                  d = r.textOverflow,
                  p = 0;
                T(o.rotation) || (l.rotation = o.rotation || 0);
                i.forEach(function (t) {
                  t = n[t];
                  t.movedLabel && t.replaceMovedLabel();
                  t &&
                    t.label &&
                    t.label.textPxLength > p &&
                    (p = t.label.textPxLength);
                });
                this.maxLabelLength = p;
                if (this.autoRotation)
                  p > h && p > c.h
                    ? (l.rotation = this.labelRotation)
                    : (this.labelRotation = 0);
                else if (a) {
                  var u = h;
                  if (!d) {
                    var f = "clip";
                    for (h = i.length; !s && h--; ) {
                      var g = i[h];
                      if ((g = n[g].label))
                        g.styles && "ellipsis" === g.styles.textOverflow
                          ? g.css({ textOverflow: "clip" })
                          : g.textPxLength > a && g.css({ width: a + "px" }),
                          g.getBBox().height >
                            this.len / i.length - (c.h - c.f) &&
                            (g.specificTextOverflow = "ellipsis");
                    }
                  }
                }
                l.rotation &&
                  ((u = p > 0.5 * t.chartHeight ? 0.33 * t.chartHeight : p),
                  d || (f = "ellipsis"));
                if (
                  (this.labelAlign =
                    o.align || this.autoLabelAlign(this.labelRotation))
                )
                  l.align = this.labelAlign;
                i.forEach(function (t) {
                  var e = (t = n[t]) && t.label,
                    i = r.width,
                    o = {};
                  e &&
                    (e.attr(l),
                    t.shortenLabel
                      ? t.shortenLabel()
                      : u &&
                        !i &&
                        "nowrap" !== r.whiteSpace &&
                        (u < e.textPxLength || "SPAN" === e.element.tagName)
                      ? ((o.width = u + "px"),
                        d || (o.textOverflow = e.specificTextOverflow || f),
                        e.css(o))
                      : e.styles &&
                        e.styles.width &&
                        !o.width &&
                        !i &&
                        e.css({ width: null }),
                    delete e.specificTextOverflow,
                    (t.rotation = l.rotation));
                }, this);
                this.tickRotCorr = e.rotCorr(
                  c.b,
                  this.labelRotation || 0,
                  0 !== this.side
                );
              };
              t.prototype.hasData = function () {
                return (
                  this.series.some(function (t) {
                    return t.hasData();
                  }) ||
                  (this.options.showEmpty && y(this.min) && y(this.max))
                );
              };
              t.prototype.addTitle = function (t) {
                var e = this.chart.renderer,
                  i = this.horiz,
                  n = this.opposite,
                  o = this.options.title,
                  r = this.chart.styledMode,
                  s;
                this.axisTitle ||
                  ((s = o.textAlign) ||
                    (s = (
                      i
                        ? { low: "left", middle: "center", high: "right" }
                        : {
                            low: n ? "right" : "left",
                            middle: "center",
                            high: n ? "left" : "right",
                          }
                    )[o.align]),
                  (this.axisTitle = e
                    .text(o.text || "", 0, 0, o.useHTML)
                    .attr({ zIndex: 7, rotation: o.rotation, align: s })
                    .addClass("highcharts-axis-title")),
                  r || this.axisTitle.css(M(o.style)),
                  this.axisTitle.add(this.axisGroup),
                  (this.axisTitle.isNew = !0));
                r ||
                  o.style.width ||
                  this.isRadial ||
                  this.axisTitle.css({ width: this.len + "px" });
                this.axisTitle[t ? "show" : "hide"](t);
              };
              t.prototype.generateTick = function (t) {
                var e = this.ticks;
                e[t] ? e[t].addLabel() : (e[t] = new a(this, t));
              };
              t.prototype.getOffset = function () {
                var t = this,
                  e = this,
                  i = e.chart,
                  n = i.renderer,
                  o = e.options,
                  r = e.tickPositions,
                  s = e.ticks,
                  a = e.horiz,
                  h = e.side,
                  l = i.inverted && !e.isZAxis ? [1, 0, 3, 2][h] : h,
                  c = e.hasData(),
                  d = o.title,
                  p = o.labels,
                  u = i.axisOffset;
                i = i.clipOffset;
                var f = [-1, 1, 1, -1][h],
                  g = o.className,
                  m = e.axisParent,
                  v,
                  x = 0,
                  b = 0,
                  C = 0;
                e.showAxis = v = c || o.showEmpty;
                e.staggerLines = (e.horiz && p.staggerLines) || void 0;
                if (!e.axisGroup) {
                  var S = function (e, i, o) {
                    return n
                      .g(e)
                      .attr({ zIndex: o })
                      .addClass(
                        "highcharts-" +
                          t.coll.toLowerCase() +
                          i +
                          " " +
                          (t.isRadial
                            ? "highcharts-radial-axis" + i + " "
                            : "") +
                          (g || "")
                      )
                      .add(m);
                  };
                  e.gridGroup = S("grid", "-grid", o.gridZIndex);
                  e.axisGroup = S("axis", "", o.zIndex);
                  e.labelGroup = S("axis-labels", "-labels", p.zIndex);
                }
                c || e.isLinked
                  ? (r.forEach(function (t) {
                      e.generateTick(t);
                    }),
                    e.renderUnsquish(),
                    (e.reserveSpaceDefault =
                      0 === h ||
                      2 === h ||
                      { 1: "left", 3: "right" }[h] === e.labelAlign),
                    L(
                      p.reserveSpace,
                      "center" === e.labelAlign ? !0 : null,
                      e.reserveSpaceDefault
                    ) &&
                      r.forEach(function (t) {
                        C = Math.max(s[t].getLabelSize(), C);
                      }),
                    e.staggerLines && (C *= e.staggerLines),
                    (e.labelOffset = C * (e.opposite ? -1 : 1)))
                  : E(s, function (t, e) {
                      t.destroy();
                      delete s[e];
                    });
                if (
                  d &&
                  d.text &&
                  !1 !== d.enabled &&
                  (e.addTitle(v), v && !1 !== d.reserveSpace)
                ) {
                  e.titleOffset = x =
                    e.axisTitle.getBBox()[a ? "height" : "width"];
                  var A = d.offset;
                  b = y(A) ? 0 : L(d.margin, a ? 5 : 10);
                }
                e.renderLine();
                e.offset = f * L(o.offset, u[h] ? u[h] + (o.margin || 0) : 0);
                e.tickRotCorr = e.tickRotCorr || { x: 0, y: 0 };
                d =
                  0 === h ? -e.labelMetrics().h : 2 === h ? e.tickRotCorr.y : 0;
                c = Math.abs(C) + b;
                C &&
                  (c = c - d + f * (a ? L(p.y, e.tickRotCorr.y + 8 * f) : p.x));
                e.axisTitleMargin = L(A, c);
                e.getMaxLabelDimensions &&
                  (e.maxLabelDimensions = e.getMaxLabelDimensions(s, r));
                a = this.tickSize("tick");
                u[h] = Math.max(
                  u[h],
                  (e.axisTitleMargin || 0) + x + f * e.offset,
                  c,
                  r && r.length && a ? a[0] + f * e.offset : 0
                );
                o = o.offset ? 0 : 2 * Math.floor(e.axisLine.strokeWidth() / 2);
                i[l] = Math.max(i[l], o);
                w(this, "afterGetOffset");
              };
              t.prototype.getLinePath = function (t) {
                var e = this.chart,
                  i = this.opposite,
                  n = this.offset,
                  o = this.horiz,
                  r = this.left + (i ? this.width : 0) + n;
                n = e.chartHeight - this.bottom - (i ? this.height : 0) + n;
                i && (t *= -1);
                return e.renderer.crispLine(
                  [
                    ["M", o ? this.left : r, o ? n : this.top],
                    [
                      "L",
                      o ? e.chartWidth - this.right : r,
                      o ? n : e.chartHeight - this.bottom,
                    ],
                  ],
                  t
                );
              };
              t.prototype.renderLine = function () {
                this.axisLine ||
                  ((this.axisLine = this.chart.renderer
                    .path()
                    .addClass("highcharts-axis-line")
                    .add(this.axisGroup)),
                  this.chart.styledMode ||
                    this.axisLine.attr({
                      stroke: this.options.lineColor,
                      "stroke-width": this.options.lineWidth,
                      zIndex: 7,
                    }));
              };
              t.prototype.getTitlePosition = function () {
                var t = this.horiz,
                  e = this.left,
                  i = this.top,
                  n = this.len,
                  o = this.options.title,
                  r = t ? e : i,
                  s = this.opposite,
                  a = this.offset,
                  h = o.x,
                  l = o.y,
                  c = this.axisTitle,
                  d = this.chart.renderer.fontMetrics(o.style.fontSize, c);
                c = Math.max(c.getBBox(null, 0).height - d.h - 1, 0);
                n = {
                  low: r + (t ? 0 : n),
                  middle: r + n / 2,
                  high: r + (t ? n : 0),
                }[o.align];
                e =
                  (t ? i + this.height : e) +
                  (t ? 1 : -1) * (s ? -1 : 1) * this.axisTitleMargin +
                  [-c, c, d.f, -c][this.side];
                t = {
                  x: t ? n + h : e + (s ? this.width : 0) + a + h,
                  y: t ? e + l - (s ? this.height : 0) + a : n + l,
                };
                w(this, "afterGetTitlePosition", { titlePosition: t });
                return t;
              };
              t.prototype.renderMinorTick = function (t, e) {
                var i = this.minorTicks;
                i[t] || (i[t] = new a(this, t, "minor"));
                e && i[t].isNew && i[t].render(null, !0);
                i[t].render(null, !1, 1);
              };
              t.prototype.renderTick = function (t, e, i) {
                var n = this.ticks;
                if (
                  !this.isLinked ||
                  (t >= this.min && t <= this.max) ||
                  (this.grid && this.grid.isColumn)
                )
                  n[t] || (n[t] = new a(this, t)),
                    i && n[t].isNew && n[t].render(e, !0, -1),
                    n[t].render(e);
              };
              t.prototype.render = function () {
                var t = this,
                  e = t.chart,
                  i = t.logarithmic,
                  n = t.options,
                  o = t.isLinked,
                  r = t.tickPositions,
                  h = t.axisTitle,
                  c = t.ticks,
                  d = t.minorTicks,
                  p = t.alternateBands,
                  u = n.stackLabels,
                  f = n.alternateGridColor,
                  g = t.tickmarkOffset,
                  m = t.axisLine,
                  y = t.showAxis,
                  v = l(e.renderer.globalAnimation),
                  x,
                  b;
                t.labelEdge.length = 0;
                t.overlap = !1;
                [c, d, p].forEach(function (t) {
                  E(t, function (t) {
                    t.isActive = !1;
                  });
                });
                if (t.hasData() || o) {
                  var C = t.chart.hasRendered && t.old && k(t.old.min);
                  t.minorTickInterval &&
                    !t.categories &&
                    t.getMinorTickPositions().forEach(function (e) {
                      t.renderMinorTick(e, C);
                    });
                  r.length &&
                    (r.forEach(function (e, i) {
                      t.renderTick(e, i, C);
                    }),
                    g &&
                      (0 === t.min || t.single) &&
                      (c[-1] || (c[-1] = new a(t, -1, null, !0)),
                      c[-1].render(-1)));
                  f &&
                    r.forEach(function (n, o) {
                      b =
                        "undefined" !== typeof r[o + 1]
                          ? r[o + 1] + g
                          : t.max - g;
                      0 === o % 2 &&
                        n < t.max &&
                        b <= t.max + (e.polar ? -g : g) &&
                        (p[n] || (p[n] = new s.PlotLineOrBand(t)),
                        (x = n + g),
                        (p[n].options = {
                          from: i ? i.lin2log(x) : x,
                          to: i ? i.lin2log(b) : b,
                          color: f,
                          className: "highcharts-alternate-grid",
                        }),
                        p[n].render(),
                        (p[n].isActive = !0));
                    });
                  t._addedPlotLB ||
                    ((t._addedPlotLB = !0),
                    (n.plotLines || [])
                      .concat(n.plotBands || [])
                      .forEach(function (e) {
                        t.addPlotBandOrLine(e);
                      }));
                }
                [c, d, p].forEach(function (t) {
                  var i = [],
                    n = v.duration;
                  E(t, function (t, e) {
                    t.isActive ||
                      (t.render(e, !1, 0), (t.isActive = !1), i.push(e));
                  });
                  B(
                    function () {
                      for (var e = i.length; e--; )
                        t[i[e]] &&
                          !t[i[e]].isActive &&
                          (t[i[e]].destroy(), delete t[i[e]]);
                    },
                    t !== p && e.hasRendered && n ? n : 0
                  );
                });
                m &&
                  (m[m.isPlaced ? "animate" : "attr"]({
                    d: this.getLinePath(m.strokeWidth()),
                  }),
                  (m.isPlaced = !0),
                  m[y ? "show" : "hide"](y));
                h &&
                  y &&
                  ((n = t.getTitlePosition()),
                  k(n.y)
                    ? (h[h.isNew ? "attr" : "animate"](n), (h.isNew = !1))
                    : (h.attr("y", -9999), (h.isNew = !0)));
                u && u.enabled && t.stacking && t.stacking.renderStackTotals();
                t.old = {
                  len: t.len,
                  max: t.max,
                  min: t.min,
                  transA: t.transA,
                  userMax: t.userMax,
                  userMin: t.userMin,
                };
                t.isDirty = !1;
                w(this, "afterRender");
              };
              t.prototype.redraw = function () {
                this.visible &&
                  (this.render(),
                  this.plotLinesAndBands.forEach(function (t) {
                    t.render();
                  }));
                this.series.forEach(function (t) {
                  t.isDirty = !0;
                });
              };
              t.prototype.getKeepProps = function () {
                return this.keepProps || t.keepProps;
              };
              t.prototype.destroy = function (t) {
                var e = this,
                  i = e.plotLinesAndBands,
                  n = this.eventOptions;
                w(this, "destroy", { keepEvents: t });
                t || D(e);
                [e.ticks, e.minorTicks, e.alternateBands].forEach(function (t) {
                  v(t);
                });
                if (i) for (t = i.length; t--; ) i[t].destroy();
                "axisLine axisTitle axisGroup gridGroup labelGroup cross scrollbar"
                  .split(" ")
                  .forEach(function (t) {
                    e[t] && (e[t] = e[t].destroy());
                  });
                for (var o in e.plotLinesAndBandsGroups)
                  e.plotLinesAndBandsGroups[o] =
                    e.plotLinesAndBandsGroups[o].destroy();
                E(e, function (t, i) {
                  -1 === e.getKeepProps().indexOf(i) && delete e[i];
                });
                this.eventOptions = n;
              };
              t.prototype.drawCrosshair = function (t, e) {
                var o = this.crosshair,
                  r = L(o && o.snap, !0),
                  s = this.chart,
                  a,
                  h = this.cross;
                w(this, "drawCrosshair", { e: t, point: e });
                t || (t = this.cross && this.cross.e);
                if (o && !1 !== (y(e) || !r)) {
                  r
                    ? y(e) &&
                      (a = L(
                        "colorAxis" !== this.coll ? e.crosshairPos : null,
                        this.isXAxis ? e.plotX : this.len - e.plotY
                      ))
                    : (a =
                        t &&
                        (this.horiz
                          ? t.chartX - this.pos
                          : this.len - t.chartY + this.pos));
                  if (y(a)) {
                    var l = {
                      value: e && (this.isXAxis ? e.x : L(e.stackY, e.y)),
                      translatedValue: a,
                    };
                    s.polar &&
                      C(l, {
                        isCrosshair: !0,
                        chartX: t && t.chartX,
                        chartY: t && t.chartY,
                        point: e,
                      });
                    l = this.getPlotLinePath(l) || null;
                  }
                  if (!y(l)) {
                    this.hideCrosshair();
                    return;
                  }
                  r = this.categories && !this.isRadial;
                  h ||
                    ((this.cross = h =
                      s.renderer
                        .path()
                        .addClass(
                          "highcharts-crosshair highcharts-crosshair-" +
                            (r ? "category " : "thin ") +
                            (o.className || "")
                        )
                        .attr({ zIndex: L(o.zIndex, 2) })
                        .add()),
                    s.styledMode ||
                      (h
                        .attr({
                          stroke:
                            o.color ||
                            (r
                              ? i
                                  .parse(n.highlightColor20)
                                  .setOpacity(0.25)
                                  .get()
                              : n.neutralColor20),
                          "stroke-width": L(o.width, 1),
                        })
                        .css({ "pointer-events": "none" }),
                      o.dashStyle && h.attr({ dashstyle: o.dashStyle })));
                  h.show().attr({ d: l });
                  r && !o.width && h.attr({ "stroke-width": this.transA });
                  this.cross.e = t;
                } else this.hideCrosshair();
                w(this, "afterDrawCrosshair", { e: t, point: e });
              };
              t.prototype.hideCrosshair = function () {
                this.cross && this.cross.hide();
                w(this, "afterHideCrosshair");
              };
              t.prototype.hasVerticalPanning = function () {
                var t = this.chart.options.chart.panning;
                return !!(t && t.enabled && /y/.test(t.type));
              };
              t.prototype.validatePositiveValue = function (t) {
                return k(t) && 0 < t;
              };
              t.prototype.update = function (t, e) {
                var i = this.chart;
                t = M(this.userOptions, t);
                this.destroy(!0);
                this.init(i, t);
                i.isDirtyBox = !0;
                L(e, !0) && i.redraw();
              };
              t.prototype.remove = function (t) {
                for (
                  var e = this.chart,
                    i = this.coll,
                    n = this.series,
                    o = n.length;
                  o--;

                )
                  n[o] && n[o].remove(!1);
                x(e.axes, this);
                x(e[i], this);
                e[i].forEach(function (t, e) {
                  t.options.index = t.userOptions.index = e;
                });
                this.destroy();
                e.isDirtyBox = !0;
                L(t, !0) && e.redraw();
              };
              t.prototype.setTitle = function (t, e) {
                this.update({ title: t }, e);
              };
              t.prototype.setCategories = function (t, e) {
                this.update({ categories: t }, e);
              };
              t.defaultOptions = e.defaultXAxisOptions;
              t.keepProps =
                "extKey hcEvents names series userMax userMin".split(" ");
              return t;
            })();
            ("");
            return t;
          }
        );
        e(
          i,
          "Core/Axis/DateTimeAxis.js",
          [i["Core/Utilities.js"]],
          function (t) {
            var e = t.addEvent,
              i = t.getMagnitude,
              n = t.normalizeTickInterval,
              o = t.timeUnits,
              r;
            (function (t) {
              function r() {
                return this.chart.time.getTimeTicks.apply(
                  this.chart.time,
                  arguments
                );
              }
              function s(t) {
                "datetime" !== t.userOptions.type
                  ? (this.dateTime = void 0)
                  : this.dateTime || (this.dateTime = new h(this));
              }
              var a = [];
              t.compose = function (t) {
                -1 === a.indexOf(t) &&
                  (a.push(t),
                  t.keepProps.push("dateTime"),
                  (t.prototype.getTimeTicks = r),
                  e(t, "init", s));
                return t;
              };
              var h = (function () {
                function t(t) {
                  this.axis = t;
                }
                t.prototype.normalizeTimeTickInterval = function (t, e) {
                  var r = e || [
                    ["millisecond", [1, 2, 5, 10, 20, 25, 50, 100, 200, 500]],
                    ["second", [1, 2, 5, 10, 15, 30]],
                    ["minute", [1, 2, 5, 10, 15, 30]],
                    ["hour", [1, 2, 3, 4, 6, 8, 12]],
                    ["day", [1, 2]],
                    ["week", [1, 2]],
                    ["month", [1, 2, 3, 4, 6]],
                    ["year", null],
                  ];
                  e = r[r.length - 1];
                  var s = o[e[0]],
                    a = e[1],
                    h;
                  for (
                    h = 0;
                    h < r.length &&
                    !((e = r[h]),
                    (s = o[e[0]]),
                    (a = e[1]),
                    r[h + 1] &&
                      t <= (s * a[a.length - 1] + o[r[h + 1][0]]) / 2);
                    h++
                  );
                  s === o.year && t < 5 * s && (a = [1, 2, 5]);
                  t = n(t / s, a, "year" === e[0] ? Math.max(i(t / s), 1) : 1);
                  return { unitRange: s, count: t, unitName: e[0] };
                };
                t.prototype.getXDateFormat = function (t, e) {
                  var i = this.axis;
                  return i.closestPointRange
                    ? i.chart.time.getDateFormat(
                        i.closestPointRange,
                        t,
                        i.options.startOfWeek,
                        e
                      ) || e.year
                    : e.day;
                };
                return t;
              })();
              t.Additions = h;
            })(r || (r = {}));
            return r;
          }
        );
        e(
          i,
          "Core/Axis/LogarithmicAxis.js",
          [i["Core/Utilities.js"]],
          function (t) {
            var e = t.addEvent,
              i = t.getMagnitude,
              n = t.normalizeTickInterval,
              o = t.pick,
              r;
            (function (t) {
              function r(t) {
                var e = this.logarithmic;
                "logarithmic" !== t.userOptions.type
                  ? (this.logarithmic = void 0)
                  : e || (this.logarithmic = new h(this));
              }
              function s() {
                var t = this.logarithmic;
                t &&
                  ((this.lin2val = function (e) {
                    return t.lin2log(e);
                  }),
                  (this.val2lin = function (e) {
                    return t.log2lin(e);
                  }));
              }
              var a = [];
              t.compose = function (t) {
                -1 === a.indexOf(t) &&
                  (a.push(t),
                  t.keepProps.push("logarithmic"),
                  e(t, "init", r),
                  e(t, "afterInit", s));
                return t;
              };
              var h = (function () {
                function t(t) {
                  this.axis = t;
                }
                t.prototype.getLogTickPositions = function (t, e, r, s) {
                  var a = this.axis,
                    h = a.len,
                    l = a.options,
                    c = [];
                  s || (this.minorAutoInterval = void 0);
                  if (0.5 <= t)
                    (t = Math.round(t)),
                      (c = a.getLinearTickPositions(t, e, r));
                  else if (0.08 <= t) {
                    var d = Math.floor(e),
                      p,
                      u = (l = void 0);
                    for (
                      h =
                        0.3 < t
                          ? [1, 2, 4]
                          : 0.15 < t
                          ? [1, 2, 4, 6, 8]
                          : [1, 2, 3, 4, 5, 6, 7, 8, 9];
                      d < r + 1 && !u;
                      d++
                    ) {
                      var f = h.length;
                      for (p = 0; p < f && !u; p++) {
                        var g = this.log2lin(this.lin2log(d) * h[p]);
                        g > e &&
                          (!s || l <= r) &&
                          "undefined" !== typeof l &&
                          c.push(l);
                        l > r && (u = !0);
                        l = g;
                      }
                    }
                  } else
                    (e = this.lin2log(e)),
                      (r = this.lin2log(r)),
                      (t = s ? a.getMinorTickInterval() : l.tickInterval),
                      (t = o(
                        "auto" === t ? null : t,
                        this.minorAutoInterval,
                        ((l.tickPixelInterval / (s ? 5 : 1)) * (r - e)) /
                          ((s ? h / a.tickPositions.length : h) || 1)
                      )),
                      (t = n(t, void 0, i(t))),
                      (c = a.getLinearTickPositions(t, e, r).map(this.log2lin)),
                      s || (this.minorAutoInterval = t / 5);
                  s || (a.tickInterval = t);
                  return c;
                };
                t.prototype.lin2log = function (t) {
                  return Math.pow(10, t);
                };
                t.prototype.log2lin = function (t) {
                  return Math.log(t) / Math.LN10;
                };
                return t;
              })();
              t.Additions = h;
            })(r || (r = {}));
            return r;
          }
        );
        e(
          i,
          "Core/Axis/PlotLineOrBand/PlotLineOrBandAxis.js",
          [i["Core/Utilities.js"]],
          function (t) {
            var e = t.erase,
              i = t.extend,
              n = t.isNumber,
              o;
            (function (t) {
              var o = [],
                r;
              t.compose = function (t, e) {
                r || (r = t);
                -1 === o.indexOf(e) && (o.push(e), i(e.prototype, s.prototype));
                return e;
              };
              var s = (function () {
                function t() {}
                t.prototype.getPlotBandPath = function (t, e, i) {
                  void 0 === i && (i = this.options);
                  var o = this.getPlotLinePath({
                      value: e,
                      force: !0,
                      acrossPanes: i.acrossPanes,
                    }),
                    r = [],
                    s = this.horiz;
                  e =
                    !n(this.min) ||
                    !n(this.max) ||
                    (t < this.min && e < this.min) ||
                    (t > this.max && e > this.max);
                  t = this.getPlotLinePath({
                    value: t,
                    force: !0,
                    acrossPanes: i.acrossPanes,
                  });
                  i = 1;
                  if (t && o) {
                    if (e) {
                      var a = t.toString() === o.toString();
                      i = 0;
                    }
                    for (e = 0; e < t.length; e += 2) {
                      var h = t[e],
                        l = t[e + 1],
                        c = o[e],
                        d = o[e + 1];
                      ("M" !== h[0] && "L" !== h[0]) ||
                        ("M" !== l[0] && "L" !== l[0]) ||
                        ("M" !== c[0] && "L" !== c[0]) ||
                        ("M" !== d[0] && "L" !== d[0]) ||
                        (s && c[1] === h[1]
                          ? ((c[1] += i), (d[1] += i))
                          : s || c[2] !== h[2] || ((c[2] += i), (d[2] += i)),
                        r.push(
                          ["M", h[1], h[2]],
                          ["L", l[1], l[2]],
                          ["L", d[1], d[2]],
                          ["L", c[1], c[2]],
                          ["Z"]
                        ));
                      r.isFlat = a;
                    }
                  }
                  return r;
                };
                t.prototype.addPlotBand = function (t) {
                  return this.addPlotBandOrLine(t, "plotBands");
                };
                t.prototype.addPlotLine = function (t) {
                  return this.addPlotBandOrLine(t, "plotLines");
                };
                t.prototype.addPlotBandOrLine = function (t, e) {
                  var i = this,
                    n = this.userOptions,
                    o = new r(this, t);
                  this.visible && (o = o.render());
                  if (o) {
                    this._addedPlotLB ||
                      ((this._addedPlotLB = !0),
                      (n.plotLines || [])
                        .concat(n.plotBands || [])
                        .forEach(function (t) {
                          i.addPlotBandOrLine(t);
                        }));
                    if (e) {
                      var s = n[e] || [];
                      s.push(t);
                      n[e] = s;
                    }
                    this.plotLinesAndBands.push(o);
                  }
                  return o;
                };
                t.prototype.removePlotBandOrLine = function (t) {
                  var i = this.plotLinesAndBands,
                    n = this.options,
                    o = this.userOptions;
                  if (i) {
                    for (var r = i.length; r--; )
                      i[r].id === t && i[r].destroy();
                    [
                      n.plotLines || [],
                      o.plotLines || [],
                      n.plotBands || [],
                      o.plotBands || [],
                    ].forEach(function (i) {
                      for (r = i.length; r--; )
                        (i[r] || {}).id === t && e(i, i[r]);
                    });
                  }
                };
                t.prototype.removePlotBand = function (t) {
                  this.removePlotBandOrLine(t);
                };
                t.prototype.removePlotLine = function (t) {
                  this.removePlotBandOrLine(t);
                };
                return t;
              })();
            })(o || (o = {}));
            return o;
          }
        );
        e(
          i,
          "Core/Axis/PlotLineOrBand/PlotLineOrBand.js",
          [
            i["Core/Color/Palette.js"],
            i["Core/Axis/PlotLineOrBand/PlotLineOrBandAxis.js"],
            i["Core/Utilities.js"],
          ],
          function (t, e, i) {
            var n = i.arrayMax,
              o = i.arrayMin,
              r = i.defined,
              s = i.destroyObjectProperties,
              a = i.erase,
              h = i.fireEvent,
              l = i.merge,
              c = i.objectEach,
              d = i.pick;
            i = (function () {
              function i(t, e) {
                this.axis = t;
                e && ((this.options = e), (this.id = e.id));
              }
              i.compose = function (t) {
                return e.compose(i, t);
              };
              i.prototype.render = function () {
                h(this, "render");
                var e = this,
                  i = e.axis,
                  n = i.horiz,
                  o = i.logarithmic,
                  s = e.options,
                  a = s.color,
                  p = d(s.zIndex, 0),
                  u = s.events,
                  f = {},
                  g = i.chart.renderer,
                  m = s.label,
                  y = e.label,
                  v = s.to,
                  x = s.from,
                  b = s.value,
                  C = e.svgElem,
                  w = [],
                  S = r(x) && r(v);
                w = r(b);
                var A = !C,
                  k = {
                    class:
                      "highcharts-plot-" +
                      (S ? "band " : "line ") +
                      (s.className || ""),
                  },
                  T = S ? "bands" : "lines";
                o &&
                  ((x = o.log2lin(x)), (v = o.log2lin(v)), (b = o.log2lin(b)));
                i.chart.styledMode ||
                  (w
                    ? ((k.stroke = a || t.neutralColor40),
                      (k["stroke-width"] = d(s.width, 1)),
                      s.dashStyle && (k.dashstyle = s.dashStyle))
                    : S &&
                      ((k.fill = a || t.highlightColor10),
                      s.borderWidth &&
                        ((k.stroke = s.borderColor),
                        (k["stroke-width"] = s.borderWidth))));
                f.zIndex = p;
                T += "-" + p;
                (o = i.plotLinesAndBandsGroups[T]) ||
                  (i.plotLinesAndBandsGroups[T] = o =
                    g
                      .g("plot-" + T)
                      .attr(f)
                      .add());
                A && (e.svgElem = C = g.path().attr(k).add(o));
                if (w)
                  w = i.getPlotLinePath({
                    value: b,
                    lineWidth: C.strokeWidth(),
                    acrossPanes: s.acrossPanes,
                  });
                else if (S) w = i.getPlotBandPath(x, v, s);
                else return;
                !e.eventsAdded &&
                  u &&
                  (c(u, function (t, i) {
                    C.on(i, function (t) {
                      u[i].apply(e, [t]);
                    });
                  }),
                  (e.eventsAdded = !0));
                (A || !C.d) && w && w.length
                  ? C.attr({ d: w })
                  : C &&
                    (w
                      ? (C.show(!0), C.animate({ d: w }))
                      : C.d && (C.hide(), y && (e.label = y = y.destroy())));
                m &&
                (r(m.text) || r(m.formatter)) &&
                w &&
                w.length &&
                0 < i.width &&
                0 < i.height &&
                !w.isFlat
                  ? ((m = l(
                      {
                        align: n && S && "center",
                        x: n ? !S && 4 : 10,
                        verticalAlign: !n && S && "middle",
                        y: n ? (S ? 16 : 10) : S ? 6 : -4,
                        rotation: n && !S && 90,
                      },
                      m
                    )),
                    this.renderLabel(m, w, S, p))
                  : y && y.hide();
                return e;
              };
              i.prototype.renderLabel = function (t, e, i, r) {
                var s = this.axis,
                  a = s.chart.renderer,
                  h = this.label;
                h ||
                  ((this.label = h =
                    a
                      .text(this.getLabelText(t), 0, 0, t.useHTML)
                      .attr({
                        align: t.textAlign || t.align,
                        rotation: t.rotation,
                        class:
                          "highcharts-plot-" +
                          (i ? "band" : "line") +
                          "-label " +
                          (t.className || ""),
                        zIndex: r,
                      })
                      .add()),
                  s.chart.styledMode ||
                    h.css(l({ textOverflow: "ellipsis" }, t.style)));
                r = e.xBounds || [e[0][1], e[1][1], i ? e[2][1] : e[0][1]];
                e = e.yBounds || [e[0][2], e[1][2], i ? e[2][2] : e[0][2]];
                i = o(r);
                a = o(e);
                h.align(t, !1, {
                  x: i,
                  y: a,
                  width: n(r) - i,
                  height: n(e) - a,
                });
                (h.alignValue && "left" !== h.alignValue) ||
                  h.css({
                    width:
                      (90 === h.rotation
                        ? s.height - (h.alignAttr.y - s.top)
                        : s.width - (h.alignAttr.x - s.left)) + "px",
                  });
                h.show(!0);
              };
              i.prototype.getLabelText = function (t) {
                return r(t.formatter) ? t.formatter.call(this) : t.text;
              };
              i.prototype.destroy = function () {
                a(this.axis.plotLinesAndBands, this);
                delete this.axis;
                s(this);
              };
              return i;
            })();
            ("");
            ("");
            return i;
          }
        );
        e(
          i,
          "Core/Tooltip.js",
          [
            i["Core/FormatUtilities.js"],
            i["Core/Globals.js"],
            i["Core/Color/Palette.js"],
            i["Core/Renderer/RendererUtilities.js"],
            i["Core/Renderer/RendererRegistry.js"],
            i["Core/Utilities.js"],
          ],
          function (t, e, i, n, o, r) {
            var s = t.format,
              a = e.doc,
              h = n.distribute,
              l = r.addEvent,
              c = r.clamp,
              d = r.css,
              p = r.defined,
              u = r.discardElement,
              f = r.extend,
              g = r.fireEvent,
              m = r.isArray,
              y = r.isNumber,
              v = r.isString,
              x = r.merge,
              b = r.pick,
              C = r.splat,
              w = r.syncTimeout;
            t = (function () {
              function t(t, e) {
                this.container = void 0;
                this.crosshairs = [];
                this.distance = 0;
                this.isHidden = !0;
                this.isSticky = !1;
                this.now = {};
                this.options = {};
                this.outside = !1;
                this.chart = t;
                this.init(t, e);
              }
              t.prototype.applyFilter = function () {
                var t = this.chart;
                t.renderer.definition({
                  tagName: "filter",
                  attributes: { id: "drop-shadow-" + t.index, opacity: 0.5 },
                  children: [
                    {
                      tagName: "feGaussianBlur",
                      attributes: { in: "SourceAlpha", stdDeviation: 1 },
                    },
                    { tagName: "feOffset", attributes: { dx: 1, dy: 1 } },
                    {
                      tagName: "feComponentTransfer",
                      children: [
                        {
                          tagName: "feFuncA",
                          attributes: { type: "linear", slope: 0.3 },
                        },
                      ],
                    },
                    {
                      tagName: "feMerge",
                      children: [
                        { tagName: "feMergeNode" },
                        {
                          tagName: "feMergeNode",
                          attributes: { in: "SourceGraphic" },
                        },
                      ],
                    },
                  ],
                });
              };
              t.prototype.bodyFormatter = function (t) {
                return t.map(function (t) {
                  var e = t.series.tooltipOptions;
                  return (
                    e[(t.point.formatPrefix || "point") + "Formatter"] ||
                    t.point.tooltipFormatter
                  ).call(
                    t.point,
                    e[(t.point.formatPrefix || "point") + "Format"] || ""
                  );
                });
              };
              t.prototype.cleanSplit = function (t) {
                this.chart.series.forEach(function (e) {
                  var i = e && e.tt;
                  i &&
                    (!i.isActive || t
                      ? (e.tt = i.destroy())
                      : (i.isActive = !1));
                });
              };
              t.prototype.defaultFormatter = function (t) {
                var e = this.points || C(this);
                var i = [t.tooltipFooterHeaderFormatter(e[0])];
                i = i.concat(t.bodyFormatter(e));
                i.push(t.tooltipFooterHeaderFormatter(e[0], !0));
                return i;
              };
              t.prototype.destroy = function () {
                this.label && (this.label = this.label.destroy());
                this.split &&
                  this.tt &&
                  (this.cleanSplit(this.chart, !0),
                  (this.tt = this.tt.destroy()));
                this.renderer &&
                  ((this.renderer = this.renderer.destroy()),
                  u(this.container));
                r.clearTimeout(this.hideTimer);
                r.clearTimeout(this.tooltipTimeout);
              };
              t.prototype.getAnchor = function (t, e) {
                var i = this.chart,
                  n = i.pointer,
                  o = i.inverted,
                  r = i.plotTop,
                  s = i.plotLeft,
                  a,
                  h,
                  l = 0,
                  c = 0;
                t = C(t);
                this.followPointer && e
                  ? ("undefined" === typeof e.chartX && (e = n.normalize(e)),
                    (n = [e.chartX - s, e.chartY - r]))
                  : t[0].tooltipPos
                  ? (n = t[0].tooltipPos)
                  : (t.forEach(function (t) {
                      a = t.series.yAxis;
                      h = t.series.xAxis;
                      l += t.plotX || 0;
                      c += t.plotLow
                        ? (t.plotLow + (t.plotHigh || 0)) / 2
                        : t.plotY || 0;
                      h &&
                        a &&
                        (o
                          ? ((l += r + i.plotHeight - h.len - h.pos),
                            (c += s + i.plotWidth - a.len - a.pos))
                          : ((l += h.pos - s), (c += a.pos - r)));
                    }),
                    (l /= t.length),
                    (c /= t.length),
                    (n = [o ? i.plotWidth - c : l, o ? i.plotHeight - l : c]),
                    this.shared &&
                      1 < t.length &&
                      e &&
                      (o ? (n[0] = e.chartX - s) : (n[1] = e.chartY - r)));
                return n.map(Math.round);
              };
              t.prototype.getLabel = function () {
                var t = this,
                  i = this.chart.styledMode,
                  n = this.options,
                  r = "tooltip" + (p(n.className) ? " " + n.className : ""),
                  s =
                    n.style.pointerEvents ||
                    (!this.followPointer && n.stickOnContact ? "auto" : "none"),
                  a = function () {
                    t.inContact = !0;
                  },
                  h = function (e) {
                    var i = t.chart.hoverSeries;
                    t.inContact =
                      t.shouldStickOnContact() &&
                      t.chart.pointer.inClass(
                        e.relatedTarget,
                        "highcharts-tooltip"
                      );
                    if (!t.inContact && i && i.onMouseOut) i.onMouseOut();
                  },
                  c,
                  u = this.chart.renderer;
                if (!this.label) {
                  if (this.outside) {
                    var f = this.chart.options.chart.style,
                      g = o.getRendererType();
                    this.container = c = e.doc.createElement("div");
                    c.className = "highcharts-tooltip-container";
                    d(c, {
                      position: "absolute",
                      top: "1px",
                      pointerEvents: s,
                      zIndex: Math.max(
                        this.options.style.zIndex || 0,
                        ((f && f.zIndex) || 0) + 3
                      ),
                    });
                    l(c, "mouseenter", a);
                    l(c, "mouseleave", h);
                    e.doc.body.appendChild(c);
                    this.renderer = u = new g(
                      c,
                      0,
                      0,
                      f,
                      void 0,
                      void 0,
                      u.styledMode
                    );
                  }
                  this.split
                    ? (this.label = u.g(r))
                    : ((this.label = u
                        .label(
                          "",
                          0,
                          0,
                          n.shape,
                          void 0,
                          void 0,
                          n.useHTML,
                          void 0,
                          r
                        )
                        .attr({ padding: n.padding, r: n.borderRadius })),
                      i ||
                        this.label
                          .attr({
                            fill: n.backgroundColor,
                            "stroke-width": n.borderWidth,
                          })
                          .css(n.style)
                          .css({ pointerEvents: s })
                          .shadow(n.shadow));
                  i &&
                    n.shadow &&
                    (this.applyFilter(),
                    this.label.attr({
                      filter: "url(#drop-shadow-" + this.chart.index + ")",
                    }));
                  if (t.outside && !t.split) {
                    var m = this.label,
                      y = m.xSetter,
                      v = m.ySetter;
                    m.xSetter = function (e) {
                      y.call(m, t.distance);
                      c.style.left = e + "px";
                    };
                    m.ySetter = function (e) {
                      v.call(m, t.distance);
                      c.style.top = e + "px";
                    };
                  }
                  this.label
                    .on("mouseenter", a)
                    .on("mouseleave", h)
                    .attr({ zIndex: 8 })
                    .add();
                }
                return this.label;
              };
              t.prototype.getPosition = function (t, e, i) {
                var n = this.chart,
                  o = this.distance,
                  r = {},
                  s = (n.inverted && i.h) || 0,
                  h = this.outside,
                  l = h ? a.documentElement.clientWidth - 2 * o : n.chartWidth,
                  c = h
                    ? Math.max(
                        a.body.scrollHeight,
                        a.documentElement.scrollHeight,
                        a.body.offsetHeight,
                        a.documentElement.offsetHeight,
                        a.documentElement.clientHeight
                      )
                    : n.chartHeight,
                  d = n.pointer.getChartPosition(),
                  p = function (r) {
                    var s = "x" === r;
                    return [r, s ? l : c, s ? t : e].concat(
                      h
                        ? [
                            s ? t * d.scaleX : e * d.scaleY,
                            s
                              ? d.left - o + (i.plotX + n.plotLeft) * d.scaleX
                              : d.top - o + (i.plotY + n.plotTop) * d.scaleY,
                            0,
                            s ? l : c,
                          ]
                        : [
                            s ? t : e,
                            s ? i.plotX + n.plotLeft : i.plotY + n.plotTop,
                            s ? n.plotLeft : n.plotTop,
                            s
                              ? n.plotLeft + n.plotWidth
                              : n.plotTop + n.plotHeight,
                          ]
                    );
                  },
                  u = p("y"),
                  f = p("x"),
                  g,
                  m =
                    !this.followPointer &&
                    b(i.ttBelow, !n.inverted === !!i.negative),
                  y = function (t, e, i, n, a, l, c) {
                    var p = h ? ("y" === t ? o * d.scaleY : o * d.scaleX) : o,
                      u = (i - n) / 2,
                      f = n < a - o,
                      g = a + o + n < e,
                      y = a - p - i + u;
                    a = a + p - u;
                    if (m && g) r[t] = a;
                    else if (!m && f) r[t] = y;
                    else if (f) r[t] = Math.min(c - n, 0 > y - s ? y : y - s);
                    else if (g) r[t] = Math.max(l, a + s + i > e ? a : a + s);
                    else return !1;
                  },
                  v = function (t, e, i, n, s) {
                    var a;
                    s < o || s > e - o
                      ? (a = !1)
                      : (r[t] =
                          s < i / 2
                            ? 1
                            : s > e - n / 2
                            ? e - n - 2
                            : s - i / 2);
                    return a;
                  },
                  x = function (t) {
                    var e = u;
                    u = f;
                    f = e;
                    g = t;
                  },
                  C = function () {
                    !1 !== y.apply(0, u)
                      ? !1 !== v.apply(0, f) || g || (x(!0), C())
                      : g
                      ? (r.x = r.y = 0)
                      : (x(!0), C());
                  };
                (n.inverted || 1 < this.len) && x();
                C();
                return r;
              };
              t.prototype.hide = function (t) {
                var e = this;
                r.clearTimeout(this.hideTimer);
                t = b(t, this.options.hideDelay);
                this.isHidden ||
                  (this.hideTimer = w(function () {
                    e.getLabel().fadeOut(t ? void 0 : t);
                    e.isHidden = !0;
                  }, t));
              };
              t.prototype.init = function (t, e) {
                this.chart = t;
                this.options = e;
                this.crosshairs = [];
                this.now = { x: 0, y: 0 };
                this.isHidden = !0;
                this.split = e.split && !t.inverted && !t.polar;
                this.shared = e.shared || this.split;
                this.outside = b(
                  e.outside,
                  !(!t.scrollablePixelsX && !t.scrollablePixelsY)
                );
              };
              t.prototype.shouldStickOnContact = function () {
                return !(this.followPointer || !this.options.stickOnContact);
              };
              t.prototype.isStickyOnContact = function () {
                return !(!this.shouldStickOnContact() || !this.inContact);
              };
              t.prototype.move = function (t, e, i, n) {
                var o = this,
                  s = o.now,
                  a =
                    !1 !== o.options.animation &&
                    !o.isHidden &&
                    (1 < Math.abs(t - s.x) || 1 < Math.abs(e - s.y)),
                  h = o.followPointer || 1 < o.len;
                f(s, {
                  x: a ? (2 * s.x + t) / 3 : t,
                  y: a ? (s.y + e) / 2 : e,
                  anchorX: h ? void 0 : a ? (2 * s.anchorX + i) / 3 : i,
                  anchorY: h ? void 0 : a ? (s.anchorY + n) / 2 : n,
                });
                o.getLabel().attr(s);
                o.drawTracker();
                a &&
                  (r.clearTimeout(this.tooltipTimeout),
                  (this.tooltipTimeout = setTimeout(function () {
                    o && o.move(t, e, i, n);
                  }, 32)));
              };
              t.prototype.refresh = function (t, e) {
                var n = this.chart,
                  o = this.options,
                  s = C(t),
                  a = s[0],
                  h = [],
                  l = o.formatter || this.defaultFormatter,
                  c = this.shared,
                  d = n.styledMode,
                  p = {};
                if (o.enabled) {
                  r.clearTimeout(this.hideTimer);
                  this.followPointer =
                    !this.split && a.series.tooltipOptions.followPointer;
                  var u = this.getAnchor(t, e),
                    f = u[0],
                    y = u[1];
                  !c || (!m(t) && t.series && t.series.noSharedTooltip)
                    ? (p = a.getLabelConfig())
                    : (n.pointer.applyInactiveState(s),
                      s.forEach(function (t) {
                        t.setState("hover");
                        h.push(t.getLabelConfig());
                      }),
                      (p = { x: a.category, y: a.y }),
                      (p.points = h));
                  this.len = h.length;
                  t = l.call(p, this);
                  l = a.series;
                  this.distance = b(l.tooltipOptions.distance, 16);
                  if (!1 === t) this.hide();
                  else {
                    if (this.split) this.renderSplit(t, s);
                    else if (
                      ((s = f),
                      (c = y),
                      e &&
                        n.pointer.isDirectTouch &&
                        ((s = e.chartX - n.plotLeft),
                        (c = e.chartY - n.plotTop)),
                      n.polar ||
                        !1 === l.options.clip ||
                        l.shouldShowTooltip(s, c))
                    )
                      (e = this.getLabel()),
                        (o.style.width && !d) ||
                          e.css({ width: this.chart.spacingBox.width + "px" }),
                        e.attr({ text: t && t.join ? t.join("") : t }),
                        e
                          .removeClass(/highcharts-color-[\d]+/g)
                          .addClass(
                            "highcharts-color-" + b(a.colorIndex, l.colorIndex)
                          ),
                        d ||
                          e.attr({
                            stroke:
                              o.borderColor ||
                              a.color ||
                              l.color ||
                              i.neutralColor60,
                          }),
                        this.updatePosition({
                          plotX: f,
                          plotY: y,
                          negative: a.negative,
                          ttBelow: a.ttBelow,
                          h: u[2] || 0,
                        });
                    else {
                      this.hide();
                      return;
                    }
                    this.isHidden &&
                      this.label &&
                      this.label.attr({ opacity: 1 }).show();
                    this.isHidden = !1;
                  }
                  g(this, "refresh");
                }
              };
              t.prototype.renderSplit = function (t, e) {
                function n(t, e, i, n, r) {
                  void 0 === r && (r = !0);
                  i
                    ? ((e = L ? 0 : B),
                      (t = c(
                        t - n / 2,
                        M.left,
                        M.right - n - (o.outside ? O : 0)
                      )))
                    : ((e -= D),
                      (t = r ? t - n - A : t + A),
                      (t = c(t, r ? t : M.left, M.right)));
                  return { x: t, y: e };
                }
                var o = this,
                  r = o.chart,
                  s = o.chart,
                  l = s.chartWidth,
                  d = s.chartHeight,
                  p = s.plotHeight,
                  u = s.plotLeft,
                  g = s.plotTop,
                  m = s.pointer,
                  y = s.scrollablePixelsY;
                y = void 0 === y ? 0 : y;
                var x = s.scrollablePixelsX,
                  C = s.scrollingContainer;
                C = void 0 === C ? { scrollLeft: 0, scrollTop: 0 } : C;
                var w = C.scrollLeft;
                C = C.scrollTop;
                var S = s.styledMode,
                  A = o.distance,
                  k = o.options,
                  T = o.options.positioner,
                  M =
                    o.outside && "number" !== typeof x
                      ? a.documentElement.getBoundingClientRect()
                      : { left: w, right: w + l, top: C, bottom: C + d },
                  P = o.getLabel(),
                  E = this.renderer || r.renderer,
                  L = !(!r.xAxis[0] || !r.xAxis[0].opposite);
                r = m.getChartPosition();
                var O = r.left;
                r = r.top;
                var D = g + C,
                  j = 0,
                  B = p - y;
                v(t) && (t = [!1, t]);
                t = t.slice(0, e.length + 1).reduce(function (t, r, s) {
                  if (!1 !== r && "" !== r) {
                    s = e[s - 1] || {
                      isHeader: !0,
                      plotX: e[0].plotX,
                      plotY: p,
                      series: {},
                    };
                    var a = s.isHeader,
                      h = a ? o : s.series;
                    r = r.toString();
                    var l = h.tt,
                      d = s.isHeader;
                    var f = s.series;
                    var m =
                      "highcharts-color-" +
                      b(s.colorIndex, f.colorIndex, "none");
                    l ||
                      ((l = { padding: k.padding, r: k.borderRadius }),
                      S ||
                        ((l.fill = k.backgroundColor),
                        (l["stroke-width"] = k.borderWidth)),
                      (l = E.label(
                        "",
                        0,
                        0,
                        k[d ? "headerShape" : "shape"],
                        void 0,
                        void 0,
                        k.useHTML
                      )
                        .addClass(
                          (d ? "highcharts-tooltip-header " : "") +
                            "highcharts-tooltip-box " +
                            m
                        )
                        .attr(l)
                        .add(P)));
                    l.isActive = !0;
                    l.attr({ text: r });
                    S ||
                      l
                        .css(k.style)
                        .shadow(k.shadow)
                        .attr({
                          stroke:
                            k.borderColor ||
                            s.color ||
                            f.color ||
                            i.neutralColor80,
                        });
                    h = h.tt = l;
                    d = h.getBBox();
                    r = d.width + h.strokeWidth();
                    a && ((j = d.height), (B += j), L && (D -= j));
                    f = s.plotX;
                    f = void 0 === f ? 0 : f;
                    m = s.plotY;
                    m = void 0 === m ? 0 : m;
                    l = s.series;
                    if (s.isHeader) {
                      f = u + f;
                      var y = g + p / 2;
                    } else {
                      var v = l.xAxis,
                        x = l.yAxis;
                      f = v.pos + c(f, -A, v.len + A);
                      l.shouldShowTooltip(0, x.pos - g + m, { ignoreX: !0 }) &&
                        (y = x.pos + m);
                    }
                    f = c(f, M.left - A, M.right + A);
                    "number" === typeof y
                      ? ((d = d.height + 1),
                        (m = T ? T.call(o, r, d, s) : n(f, y, a, r)),
                        t.push({
                          align: T ? 0 : void 0,
                          anchorX: f,
                          anchorY: y,
                          boxWidth: r,
                          point: s,
                          rank: b(m.rank, a ? 1 : 0),
                          size: d,
                          target: m.y,
                          tt: h,
                          x: m.x,
                        }))
                      : (h.isActive = !1);
                  }
                  return t;
                }, []);
                !T &&
                  t.some(function (t) {
                    var e = (o.outside ? O : 0) + t.anchorX;
                    return e < M.left && e + t.boxWidth < M.right
                      ? !0
                      : e < O - M.left + t.boxWidth && M.right - e > e;
                  }) &&
                  (t = t.map(function (t) {
                    var e = n(
                      t.anchorX,
                      t.anchorY,
                      t.point.isHeader,
                      t.boxWidth,
                      !1
                    );
                    return f(t, { target: e.y, x: e.x });
                  }));
                o.cleanSplit();
                h(t, B);
                var I = O,
                  N = O;
                t.forEach(function (t) {
                  var e = t.x,
                    i = t.boxWidth;
                  t = t.isHeader;
                  t ||
                    (o.outside && O + e < I && (I = O + e),
                    !t && o.outside && I + i > N && (N = O + e));
                });
                t.forEach(function (t) {
                  var e = t.x,
                    i = t.anchorX,
                    n = t.pos,
                    r = t.point.isHeader;
                  n = {
                    visibility: "undefined" === typeof n ? "hidden" : "inherit",
                    x: e,
                    y: n + D,
                    anchorX: i,
                    anchorY: t.anchorY,
                  };
                  if (o.outside && e < i) {
                    var s = O - I;
                    0 < s &&
                      (r || ((n.x = e + s), (n.anchorX = i + s)),
                      r && ((n.x = (N - I) / 2), (n.anchorX = i + s)));
                  }
                  t.tt.attr(n);
                });
                t = o.container;
                y = o.renderer;
                o.outside &&
                  t &&
                  y &&
                  ((s = P.getBBox()),
                  y.setSize(s.width + s.x, s.height + s.y, !1),
                  (t.style.left = I + "px"),
                  (t.style.top = r + "px"));
              };
              t.prototype.drawTracker = function () {
                if (this.followPointer || !this.options.stickOnContact)
                  this.tracker && this.tracker.destroy();
                else {
                  var t = this.chart,
                    e = this.label,
                    i = this.shared ? t.hoverPoints : t.hoverPoint;
                  if (e && i) {
                    var n = { x: 0, y: 0, width: 0, height: 0 };
                    i = this.getAnchor(i);
                    var o = e.getBBox();
                    i[0] += t.plotLeft - e.translateX;
                    i[1] += t.plotTop - e.translateY;
                    n.x = Math.min(0, i[0]);
                    n.y = Math.min(0, i[1]);
                    n.width =
                      0 > i[0]
                        ? Math.max(Math.abs(i[0]), o.width - i[0])
                        : Math.max(Math.abs(i[0]), o.width);
                    n.height =
                      0 > i[1]
                        ? Math.max(Math.abs(i[1]), o.height - Math.abs(i[1]))
                        : Math.max(Math.abs(i[1]), o.height);
                    this.tracker
                      ? this.tracker.attr(n)
                      : ((this.tracker = e.renderer
                          .rect(n)
                          .addClass("highcharts-tracker")
                          .add(e)),
                        t.styledMode ||
                          this.tracker.attr({ fill: "rgba(0,0,0,0)" }));
                  }
                }
              };
              t.prototype.styledModeFormat = function (t) {
                return t
                  .replace(
                    'style="font-size: 10px"',
                    'class="highcharts-header"'
                  )
                  .replace(
                    /style="color:{(point|series)\.color}"/g,
                    'class="highcharts-color-{$1.colorIndex}"'
                  );
              };
              t.prototype.tooltipFooterHeaderFormatter = function (t, e) {
                var i = t.series,
                  n = i.tooltipOptions,
                  o = i.xAxis,
                  r = o && o.dateTime;
                o = { isFooter: e, labelConfig: t };
                var a = n.xDateFormat,
                  h = n[e ? "footerFormat" : "headerFormat"];
                g(this, "headerFormatter", o, function (e) {
                  r &&
                    !a &&
                    y(t.key) &&
                    (a = r.getXDateFormat(t.key, n.dateTimeLabelFormats));
                  r &&
                    a &&
                    ((t.point && t.point.tooltipDateKeys) || ["key"]).forEach(
                      function (t) {
                        h = h.replace(
                          "{point." + t + "}",
                          "{point." + t + ":" + a + "}"
                        );
                      }
                    );
                  i.chart.styledMode && (h = this.styledModeFormat(h));
                  e.text = s(h, { point: t, series: i }, this.chart);
                });
                return o.text;
              };
              t.prototype.update = function (t) {
                this.destroy();
                x(!0, this.chart.options.tooltip.userOptions, t);
                this.init(this.chart, x(!0, this.options, t));
              };
              t.prototype.updatePosition = function (t) {
                var e = this.chart,
                  i = this.options,
                  n = e.pointer,
                  o = this.getLabel();
                n = n.getChartPosition();
                var r = (i.positioner || this.getPosition).call(
                    this,
                    o.width,
                    o.height,
                    t
                  ),
                  s = t.plotX + e.plotLeft;
                t = t.plotY + e.plotTop;
                if (this.outside) {
                  i = i.borderWidth + 2 * this.distance;
                  this.renderer.setSize(o.width + i, o.height + i, !1);
                  if (1 !== n.scaleX || 1 !== n.scaleY)
                    d(this.container, {
                      transform: "scale(" + n.scaleX + ", " + n.scaleY + ")",
                    }),
                      (s *= n.scaleX),
                      (t *= n.scaleY);
                  s += n.left - r.x;
                  t += n.top - r.y;
                }
                this.move(Math.round(r.x), Math.round(r.y || 0), s, t);
              };
              return t;
            })();
            ("");
            return t;
          }
        );
        e(
          i,
          "Core/Series/Point.js",
          [
            i["Core/Renderer/HTML/AST.js"],
            i["Core/Animation/AnimationUtilities.js"],
            i["Core/DefaultOptions.js"],
            i["Core/FormatUtilities.js"],
            i["Core/Utilities.js"],
          ],
          function (t, e, i, n, o) {
            var r = e.animObject,
              s = i.defaultOptions,
              a = n.format,
              h = o.addEvent,
              l = o.defined,
              c = o.erase,
              d = o.extend,
              p = o.fireEvent,
              u = o.getNestedProperty,
              f = o.isArray,
              g = o.isFunction,
              m = o.isNumber,
              y = o.isObject,
              v = o.merge,
              x = o.objectEach,
              b = o.pick,
              C = o.syncTimeout,
              w = o.removeEvent,
              S = o.uniqueKey;
            e = (function () {
              function e() {
                this.colorIndex = this.category = void 0;
                this.formatPrefix = "point";
                this.id = void 0;
                this.isNull = !1;
                this.percentage = this.options = this.name = void 0;
                this.selected = !1;
                this.total = this.series = void 0;
                this.visible = !0;
                this.x = void 0;
              }
              e.prototype.animateBeforeDestroy = function () {
                var t = this,
                  e = { x: t.startXPos, opacity: 0 },
                  i = t.getGraphicalProps();
                i.singular.forEach(function (i) {
                  t[i] = t[i].animate(
                    "dataLabel" === i
                      ? { x: t[i].startXPos, y: t[i].startYPos, opacity: 0 }
                      : e
                  );
                });
                i.plural.forEach(function (e) {
                  t[e].forEach(function (e) {
                    e.element &&
                      e.animate(
                        d(
                          { x: t.startXPos },
                          e.startYPos ? { x: e.startXPos, y: e.startYPos } : {}
                        )
                      );
                  });
                });
              };
              e.prototype.applyOptions = function (t, i) {
                var n = this.series,
                  o = n.options.pointValKey || n.pointValKey;
                t = e.prototype.optionsToObject.call(this, t);
                d(this, t);
                this.options = this.options ? d(this.options, t) : t;
                t.group && delete this.group;
                t.dataLabels && delete this.dataLabels;
                o && (this.y = e.prototype.getNestedProperty.call(this, o));
                this.formatPrefix = (this.isNull = b(
                  this.isValid && !this.isValid(),
                  null === this.x || !m(this.y)
                ))
                  ? "null"
                  : "point";
                this.selected && (this.state = "select");
                "name" in this &&
                  "undefined" === typeof i &&
                  n.xAxis &&
                  n.xAxis.hasNames &&
                  (this.x = n.xAxis.nameToX(this));
                "undefined" === typeof this.x && n
                  ? (this.x = "undefined" === typeof i ? n.autoIncrement() : i)
                  : m(t.x) &&
                    n.options.relativeXValue &&
                    (this.x = n.autoIncrement(t.x));
                return this;
              };
              e.prototype.destroy = function () {
                function t() {
                  if (e.graphic || e.dataLabel || e.dataLabels)
                    w(e), e.destroyElements();
                  for (a in e) e[a] = null;
                }
                var e = this,
                  i = e.series,
                  n = i.chart;
                i = i.options.dataSorting;
                var o = n.hoverPoints,
                  s = r(e.series.chart.renderer.globalAnimation),
                  a;
                e.legendItem && n.legend.destroyItem(e);
                o &&
                  (e.setState(), c(o, e), o.length || (n.hoverPoints = null));
                if (e === n.hoverPoint) e.onMouseOut();
                i && i.enabled
                  ? (this.animateBeforeDestroy(), C(t, s.duration))
                  : t();
                n.pointCount--;
              };
              e.prototype.destroyElements = function (t) {
                var e = this;
                t = e.getGraphicalProps(t);
                t.singular.forEach(function (t) {
                  e[t] = e[t].destroy();
                });
                t.plural.forEach(function (t) {
                  e[t].forEach(function (t) {
                    t.element && t.destroy();
                  });
                  delete e[t];
                });
              };
              e.prototype.firePointEvent = function (t, e, i) {
                var n = this,
                  o = this.series.options;
                (o.point.events[t] ||
                  (n.options && n.options.events && n.options.events[t])) &&
                  n.importEvents();
                "click" === t &&
                  o.allowPointSelect &&
                  (i = function (t) {
                    n.select &&
                      n.select(null, t.ctrlKey || t.metaKey || t.shiftKey);
                  });
                p(n, t, e, i);
              };
              e.prototype.getClassName = function () {
                return (
                  "highcharts-point" +
                  (this.selected ? " highcharts-point-select" : "") +
                  (this.negative ? " highcharts-negative" : "") +
                  (this.isNull ? " highcharts-null-point" : "") +
                  ("undefined" !== typeof this.colorIndex
                    ? " highcharts-color-" + this.colorIndex
                    : "") +
                  (this.options.className ? " " + this.options.className : "") +
                  (this.zone && this.zone.className
                    ? " " +
                      this.zone.className.replace("highcharts-negative", "")
                    : "")
                );
              };
              e.prototype.getGraphicalProps = function (t) {
                var e = this,
                  i = [],
                  n = { singular: [], plural: [] },
                  o;
                t = t || { graphic: 1, dataLabel: 1 };
                t.graphic && i.push("graphic", "upperGraphic", "shadowGroup");
                t.dataLabel &&
                  i.push("dataLabel", "dataLabelUpper", "connector");
                for (o = i.length; o--; ) {
                  var r = i[o];
                  e[r] && n.singular.push(r);
                }
                ["dataLabel", "connector"].forEach(function (i) {
                  var o = i + "s";
                  t[i] && e[o] && n.plural.push(o);
                });
                return n;
              };
              e.prototype.getLabelConfig = function () {
                return {
                  x: this.category,
                  y: this.y,
                  color: this.color,
                  colorIndex: this.colorIndex,
                  key: this.name || this.category,
                  series: this.series,
                  point: this,
                  percentage: this.percentage,
                  total: this.total || this.stackTotal,
                };
              };
              e.prototype.getNestedProperty = function (t) {
                if (t)
                  return 0 === t.indexOf("custom.")
                    ? u(t, this.options)
                    : this[t];
              };
              e.prototype.getZone = function () {
                var t = this.series,
                  e = t.zones;
                t = t.zoneAxis || "y";
                var i,
                  n = 0;
                for (i = e[n]; this[t] >= i.value; ) i = e[++n];
                this.nonZonedColor || (this.nonZonedColor = this.color);
                this.color =
                  i && i.color && !this.options.color
                    ? i.color
                    : this.nonZonedColor;
                return i;
              };
              e.prototype.hasNewShapeType = function () {
                return (
                  (this.graphic &&
                    (this.graphic.symbolName ||
                      this.graphic.element.nodeName)) !== this.shapeType
                );
              };
              e.prototype.init = function (t, e, i) {
                this.series = t;
                this.applyOptions(e, i);
                this.id = l(this.id) ? this.id : S();
                this.resolveColor();
                t.chart.pointCount++;
                p(this, "afterInit");
                return this;
              };
              e.prototype.optionsToObject = function (t) {
                var i = this.series,
                  n = i.options.keys,
                  o = n || i.pointArrayMap || ["y"],
                  r = o.length,
                  s = {},
                  a = 0,
                  h = 0;
                if (m(t) || null === t) s[o[0]] = t;
                else if (f(t))
                  for (
                    !n &&
                    t.length > r &&
                    ((i = typeof t[0]),
                    "string" === i
                      ? (s.name = t[0])
                      : "number" === i && (s.x = t[0]),
                    a++);
                    h < r;

                  )
                    (n && "undefined" === typeof t[a]) ||
                      (0 < o[h].indexOf(".")
                        ? e.prototype.setNestedProperty(s, t[a], o[h])
                        : (s[o[h]] = t[a])),
                      a++,
                      h++;
                else
                  "object" === typeof t &&
                    ((s = t),
                    t.dataLabels && (i._hasPointLabels = !0),
                    t.marker && (i._hasPointMarkers = !0));
                return s;
              };
              e.prototype.resolveColor = function () {
                var t = this.series,
                  e = t.chart.styledMode;
                var i = t.chart.options.chart.colorCount;
                delete this.nonZonedColor;
                if (t.options.colorByPoint) {
                  if (!e) {
                    i = t.options.colors || t.chart.options.colors;
                    var n = i[t.colorCounter];
                    i = i.length;
                  }
                  e = t.colorCounter;
                  t.colorCounter++;
                  t.colorCounter === i && (t.colorCounter = 0);
                } else e || (n = t.color), (e = t.colorIndex);
                this.colorIndex = b(this.options.colorIndex, e);
                this.color = b(this.options.color, n);
              };
              e.prototype.setNestedProperty = function (t, e, i) {
                i.split(".").reduce(function (t, i, n, o) {
                  t[i] = o.length - 1 === n ? e : y(t[i], !0) ? t[i] : {};
                  return t[i];
                }, t);
                return t;
              };
              e.prototype.tooltipFormatter = function (t) {
                var e = this.series,
                  i = e.tooltipOptions,
                  n = b(i.valueDecimals, ""),
                  o = i.valuePrefix || "",
                  r = i.valueSuffix || "";
                e.chart.styledMode && (t = e.chart.tooltip.styledModeFormat(t));
                (e.pointArrayMap || ["y"]).forEach(function (e) {
                  e = "{point." + e;
                  if (o || r)
                    t = t.replace(RegExp(e + "}", "g"), o + e + "}" + r);
                  t = t.replace(RegExp(e + "}", "g"), e + ":,." + n + "f}");
                });
                return a(t, { point: this, series: this.series }, e.chart);
              };
              e.prototype.update = function (t, e, i, n) {
                function o() {
                  r.applyOptions(t);
                  var n = a && r.hasDummyGraphic;
                  n = null === r.y ? !n : n;
                  a &&
                    n &&
                    ((r.graphic = a.destroy()), delete r.hasDummyGraphic);
                  y(t, !0) &&
                    (a &&
                      a.element &&
                      t &&
                      t.marker &&
                      "undefined" !== typeof t.marker.symbol &&
                      (r.graphic = a.destroy()),
                    t &&
                      t.dataLabels &&
                      r.dataLabel &&
                      (r.dataLabel = r.dataLabel.destroy()),
                    r.connector && (r.connector = r.connector.destroy()));
                  c = r.index;
                  s.updateParallelArrays(r, c);
                  l.data[c] =
                    y(l.data[c], !0) || y(t, !0) ? r.options : b(t, l.data[c]);
                  s.isDirty = s.isDirtyData = !0;
                  !s.fixedBox && s.hasCartesianSeries && (h.isDirtyBox = !0);
                  "point" === l.legendType && (h.isDirtyLegend = !0);
                  e && h.redraw(i);
                }
                var r = this,
                  s = r.series,
                  a = r.graphic,
                  h = s.chart,
                  l = s.options,
                  c;
                e = b(e, !0);
                !1 === n ? o() : r.firePointEvent("update", { options: t }, o);
              };
              e.prototype.remove = function (t, e) {
                this.series.removePoint(this.series.data.indexOf(this), t, e);
              };
              e.prototype.select = function (t, e) {
                var i = this,
                  n = i.series,
                  o = n.chart;
                this.selectedStaging = t = b(t, !i.selected);
                i.firePointEvent(
                  t ? "select" : "unselect",
                  { accumulate: e },
                  function () {
                    i.selected = i.options.selected = t;
                    n.options.data[n.data.indexOf(i)] = i.options;
                    i.setState(t && "select");
                    e ||
                      o.getSelectedPoints().forEach(function (t) {
                        var e = t.series;
                        t.selected &&
                          t !== i &&
                          ((t.selected = t.options.selected = !1),
                          (e.options.data[e.data.indexOf(t)] = t.options),
                          t.setState(
                            o.hoverPoints && e.options.inactiveOtherPoints
                              ? "inactive"
                              : ""
                          ),
                          t.firePointEvent("unselect"));
                      });
                  }
                );
                delete this.selectedStaging;
              };
              e.prototype.onMouseOver = function (t) {
                var e = this.series.chart,
                  i = e.pointer;
                t = t
                  ? i.normalize(t)
                  : i.getChartCoordinatesFromPoint(this, e.inverted);
                i.runPointActions(t, this);
              };
              e.prototype.onMouseOut = function () {
                var t = this.series.chart;
                this.firePointEvent("mouseOut");
                this.series.options.inactiveOtherPoints ||
                  (t.hoverPoints || []).forEach(function (t) {
                    t.setState();
                  });
                t.hoverPoints = t.hoverPoint = null;
              };
              e.prototype.importEvents = function () {
                if (!this.hasImportedEvents) {
                  var t = this,
                    e = v(t.series.options.point, t.options).events;
                  t.events = e;
                  x(e, function (e, i) {
                    g(e) && h(t, i, e);
                  });
                  this.hasImportedEvents = !0;
                }
              };
              e.prototype.setState = function (e, i) {
                var n = this.series,
                  o = this.state,
                  r = n.options.states[e || "normal"] || {},
                  a = s.plotOptions[n.type].marker && n.options.marker,
                  h = a && !1 === a.enabled,
                  l = (a && a.states && a.states[e || "normal"]) || {},
                  c = !1 === l.enabled,
                  u = this.marker || {},
                  f = n.chart,
                  g = a && n.markerAttribs,
                  y = n.halo,
                  v,
                  x = n.stateMarkerGraphic;
                e = e || "";
                if (
                  !(
                    (e === this.state && !i) ||
                    (this.selected && "select" !== e) ||
                    !1 === r.enabled ||
                    (e && (c || (h && !1 === l.enabled))) ||
                    (e && u.states && u.states[e] && !1 === u.states[e].enabled)
                  )
                ) {
                  this.state = e;
                  g && (v = n.markerAttribs(this, e));
                  if (this.graphic && !this.hasDummyGraphic) {
                    o && this.graphic.removeClass("highcharts-point-" + o);
                    e && this.graphic.addClass("highcharts-point-" + e);
                    if (!f.styledMode) {
                      var C = n.pointAttribs(this, e);
                      var w = b(f.options.chart.animation, r.animation);
                      n.options.inactiveOtherPoints &&
                        m(C.opacity) &&
                        ((this.dataLabels || []).forEach(function (t) {
                          t && t.animate({ opacity: C.opacity }, w);
                        }),
                        this.connector &&
                          this.connector.animate({ opacity: C.opacity }, w));
                      this.graphic.animate(C, w);
                    }
                    v &&
                      this.graphic.animate(
                        v,
                        b(f.options.chart.animation, l.animation, a.animation)
                      );
                    x && x.hide();
                  } else {
                    if (e && l) {
                      o = u.symbol || n.symbol;
                      x && x.currentSymbol !== o && (x = x.destroy());
                      if (v)
                        if (x) x[i ? "animate" : "attr"]({ x: v.x, y: v.y });
                        else
                          o &&
                            ((n.stateMarkerGraphic = x =
                              f.renderer
                                .symbol(o, v.x, v.y, v.width, v.height)
                                .add(n.markerGroup)),
                            (x.currentSymbol = o));
                      !f.styledMode && x && x.attr(n.pointAttribs(this, e));
                    }
                    x &&
                      (x[e && this.isInside ? "show" : "hide"](),
                      (x.element.point = this),
                      x.addClass(this.getClassName(), !0));
                  }
                  r = r.halo;
                  v = ((x = this.graphic || x) && x.visibility) || "inherit";
                  r && r.size && x && "hidden" !== v && !this.isCluster
                    ? (y || (n.halo = y = f.renderer.path().add(x.parentGroup)),
                      y
                        .show()
                        [i ? "animate" : "attr"]({ d: this.haloPath(r.size) }),
                      y.attr({
                        class:
                          "highcharts-halo highcharts-color-" +
                          b(this.colorIndex, n.colorIndex) +
                          (this.className ? " " + this.className : ""),
                        visibility: v,
                        zIndex: -1,
                      }),
                      (y.point = this),
                      f.styledMode ||
                        y.attr(
                          d(
                            {
                              fill: this.color || n.color,
                              "fill-opacity": r.opacity,
                            },
                            t.filterUserAttributes(r.attributes || {})
                          )
                        ))
                    : y &&
                      y.point &&
                      y.point.haloPath &&
                      y.animate({ d: y.point.haloPath(0) }, null, y.hide);
                  p(this, "afterSetState", { state: e });
                }
              };
              e.prototype.haloPath = function (t) {
                return this.series.chart.renderer.symbols.circle(
                  Math.floor(this.plotX) - t,
                  this.plotY - t,
                  2 * t,
                  2 * t
                );
              };
              return e;
            })();
            ("");
            return e;
          }
        );
        e(
          i,
          "Core/Pointer.js",
          [
            i["Core/Color/Color.js"],
            i["Core/Globals.js"],
            i["Core/Color/Palette.js"],
            i["Core/Tooltip.js"],
            i["Core/Utilities.js"],
          ],
          function (t, e, i, n, o) {
            var r = t.parse,
              s = e.charts,
              a = e.noop,
              h = o.addEvent,
              l = o.attr,
              c = o.css,
              d = o.defined,
              p = o.extend,
              u = o.find,
              f = o.fireEvent,
              g = o.isNumber,
              m = o.isObject,
              y = o.objectEach,
              v = o.offset,
              x = o.pick,
              b = o.splat;
            t = (function () {
              function t(t, e) {
                this.lastValidTouch = {};
                this.pinchDown = [];
                this.runChartClick = !1;
                this.eventsToUnbind = [];
                this.chart = t;
                this.hasDragged = !1;
                this.options = e;
                this.init(t, e);
              }
              t.prototype.applyInactiveState = function (t) {
                var e = [],
                  i;
                (t || []).forEach(function (t) {
                  i = t.series;
                  e.push(i);
                  i.linkedParent && e.push(i.linkedParent);
                  i.linkedSeries && (e = e.concat(i.linkedSeries));
                  i.navigatorSeries && e.push(i.navigatorSeries);
                });
                this.chart.series.forEach(function (t) {
                  -1 === e.indexOf(t)
                    ? t.setState("inactive", !0)
                    : t.options.inactiveOtherPoints &&
                      t.setAllPointsToState("inactive");
                });
              };
              t.prototype.destroy = function () {
                var i = this;
                this.eventsToUnbind.forEach(function (t) {
                  return t();
                });
                this.eventsToUnbind = [];
                e.chartCount ||
                  (t.unbindDocumentMouseUp &&
                    (t.unbindDocumentMouseUp = t.unbindDocumentMouseUp()),
                  t.unbindDocumentTouchEnd &&
                    (t.unbindDocumentTouchEnd = t.unbindDocumentTouchEnd()));
                clearInterval(i.tooltipTimeout);
                y(i, function (t, e) {
                  i[e] = void 0;
                });
              };
              t.prototype.drag = function (t) {
                var e = this.chart,
                  n = e.options.chart,
                  o = this.zoomHor,
                  s = this.zoomVert,
                  a = e.plotLeft,
                  h = e.plotTop,
                  l = e.plotWidth,
                  c = e.plotHeight,
                  d = this.mouseDownX || 0,
                  p = this.mouseDownY || 0,
                  u = m(n.panning) ? n.panning && n.panning.enabled : n.panning,
                  f = n.panKey && t[n.panKey + "Key"],
                  g = t.chartX,
                  y = t.chartY,
                  v = this.selectionMarker;
                if (!v || !v.touch)
                  if (
                    (g < a ? (g = a) : g > a + l && (g = a + l),
                    y < h ? (y = h) : y > h + c && (y = h + c),
                    (this.hasDragged = Math.sqrt(
                      Math.pow(d - g, 2) + Math.pow(p - y, 2)
                    )),
                    10 < this.hasDragged)
                  ) {
                    var x = e.isInsidePlot(d - a, p - h, {
                      visiblePlotOnly: !0,
                    });
                    e.hasCartesianSeries &&
                      (this.zoomX || this.zoomY) &&
                      x &&
                      !f &&
                      !v &&
                      ((this.selectionMarker = v =
                        e.renderer
                          .rect(a, h, o ? 1 : l, s ? 1 : c, 0)
                          .attr({
                            class: "highcharts-selection-marker",
                            zIndex: 7,
                          })
                          .add()),
                      e.styledMode ||
                        v.attr({
                          fill:
                            n.selectionMarkerFill ||
                            r(i.highlightColor80).setOpacity(0.25).get(),
                        }));
                    v &&
                      o &&
                      ((o = g - d),
                      v.attr({ width: Math.abs(o), x: (0 < o ? 0 : o) + d }));
                    v &&
                      s &&
                      ((o = y - p),
                      v.attr({ height: Math.abs(o), y: (0 < o ? 0 : o) + p }));
                    x && !v && u && e.pan(t, n.panning);
                  }
              };
              t.prototype.dragStart = function (t) {
                var e = this.chart;
                e.mouseIsDown = t.type;
                e.cancelClick = !1;
                e.mouseDownX = this.mouseDownX = t.chartX;
                e.mouseDownY = this.mouseDownY = t.chartY;
              };
              t.prototype.drop = function (t) {
                var e = this,
                  i = this.chart,
                  n = this.hasPinched;
                if (this.selectionMarker) {
                  var o = { originalEvent: t, xAxis: [], yAxis: [] },
                    r = this.selectionMarker,
                    s = r.attr ? r.attr("x") : r.x,
                    a = r.attr ? r.attr("y") : r.y,
                    h = r.attr ? r.attr("width") : r.width,
                    l = r.attr ? r.attr("height") : r.height,
                    u;
                  if (this.hasDragged || n)
                    i.axes.forEach(function (i) {
                      if (
                        i.zoomEnabled &&
                        d(i.min) &&
                        (n || e[{ xAxis: "zoomX", yAxis: "zoomY" }[i.coll]]) &&
                        g(s) &&
                        g(a)
                      ) {
                        var r = i.horiz,
                          c = "touchend" === t.type ? i.minPixelPadding : 0,
                          p = i.toValue((r ? s : a) + c);
                        r = i.toValue((r ? s + h : a + l) - c);
                        o[i.coll].push({
                          axis: i,
                          min: Math.min(p, r),
                          max: Math.max(p, r),
                        });
                        u = !0;
                      }
                    }),
                      u &&
                        f(i, "selection", o, function (t) {
                          i.zoom(p(t, n ? { animation: !1 } : null));
                        });
                  g(i.index) &&
                    (this.selectionMarker = this.selectionMarker.destroy());
                  n && this.scaleGroups();
                }
                i &&
                  g(i.index) &&
                  (c(i.container, { cursor: i._cursor }),
                  (i.cancelClick = 10 < this.hasDragged),
                  (i.mouseIsDown = this.hasDragged = this.hasPinched = !1),
                  (this.pinchDown = []));
              };
              t.prototype.findNearestKDPoint = function (t, e, i) {
                var n = this.chart,
                  o = n.hoverPoint;
                n = n.tooltip;
                if (o && n && n.isStickyOnContact()) return o;
                var r;
                t.forEach(function (t) {
                  var n =
                    !(t.noSharedTooltip && e) &&
                    0 > t.options.findNearestPointBy.indexOf("y");
                  t = t.searchPoint(i, n);
                  if ((n = m(t, !0) && t.series) && !(n = !m(r, !0))) {
                    n = r.distX - t.distX;
                    var o = r.dist - t.dist,
                      s =
                        (t.series.group && t.series.group.zIndex) -
                        (r.series.group && r.series.group.zIndex);
                    n =
                      0 <
                      (0 !== n && e
                        ? n
                        : 0 !== o
                        ? o
                        : 0 !== s
                        ? s
                        : r.series.index > t.series.index
                        ? -1
                        : 1);
                  }
                  n && (r = t);
                });
                return r;
              };
              t.prototype.getChartCoordinatesFromPoint = function (t, e) {
                var i = t.series,
                  n = i.xAxis;
                i = i.yAxis;
                var o = t.shapeArgs;
                if (n && i) {
                  var r = x(t.clientX, t.plotX),
                    s = t.plotY || 0;
                  t.isNode && o && g(o.x) && g(o.y) && ((r = o.x), (s = o.y));
                  return e
                    ? { chartX: i.len + i.pos - s, chartY: n.len + n.pos - r }
                    : { chartX: r + n.pos, chartY: s + i.pos };
                }
                if (o && o.x && o.y) return { chartX: o.x, chartY: o.y };
              };
              t.prototype.getChartPosition = function () {
                if (this.chartPosition) return this.chartPosition;
                var t = this.chart.container,
                  e = v(t);
                this.chartPosition = {
                  left: e.left,
                  top: e.top,
                  scaleX: 1,
                  scaleY: 1,
                };
                var i = t.offsetWidth;
                t = t.offsetHeight;
                2 < i &&
                  2 < t &&
                  ((this.chartPosition.scaleX = e.width / i),
                  (this.chartPosition.scaleY = e.height / t));
                return this.chartPosition;
              };
              t.prototype.getCoordinates = function (t) {
                var e = { xAxis: [], yAxis: [] };
                this.chart.axes.forEach(function (i) {
                  e[i.isXAxis ? "xAxis" : "yAxis"].push({
                    axis: i,
                    value: i.toValue(t[i.horiz ? "chartX" : "chartY"]),
                  });
                });
                return e;
              };
              t.prototype.getHoverData = function (t, e, i, n, o, r) {
                var s = [];
                n = !(!n || !t);
                var a = {
                  chartX: r ? r.chartX : void 0,
                  chartY: r ? r.chartY : void 0,
                  shared: o,
                };
                f(this, "beforeGetHoverData", a);
                var h =
                  e && !e.stickyTracking
                    ? [e]
                    : i.filter(function (t) {
                        return a.filter
                          ? a.filter(t)
                          : t.visible &&
                              !(!o && t.directTouch) &&
                              x(t.options.enableMouseTracking, !0) &&
                              t.stickyTracking;
                      });
                var l = n || !r ? t : this.findNearestKDPoint(h, o, r);
                e = l && l.series;
                l &&
                  (o && !e.noSharedTooltip
                    ? ((h = i.filter(function (t) {
                        return a.filter
                          ? a.filter(t)
                          : t.visible &&
                              !(!o && t.directTouch) &&
                              x(t.options.enableMouseTracking, !0) &&
                              !t.noSharedTooltip;
                      })),
                      h.forEach(function (t) {
                        var e = u(t.points, function (t) {
                          return t.x === l.x && !t.isNull;
                        });
                        m(e) &&
                          (t.chart.isBoosting && (e = t.getPoint(e)),
                          s.push(e));
                      }))
                    : s.push(l));
                a = { hoverPoint: l };
                f(this, "afterGetHoverData", a);
                return {
                  hoverPoint: a.hoverPoint,
                  hoverSeries: e,
                  hoverPoints: s,
                };
              };
              t.prototype.getPointFromEvent = function (t) {
                t = t.target;
                for (var e; t && !e; ) (e = t.point), (t = t.parentNode);
                return e;
              };
              t.prototype.onTrackerMouseOut = function (t) {
                t = t.relatedTarget || t.toElement;
                var e = this.chart.hoverSeries;
                this.isDirectTouch = !1;
                if (
                  !(
                    !e ||
                    !t ||
                    e.stickyTracking ||
                    this.inClass(t, "highcharts-tooltip") ||
                    (this.inClass(t, "highcharts-series-" + e.index) &&
                      this.inClass(t, "highcharts-tracker"))
                  )
                )
                  e.onMouseOut();
              };
              t.prototype.inClass = function (t, e) {
                for (var i; t; ) {
                  if ((i = l(t, "class"))) {
                    if (-1 !== i.indexOf(e)) return !0;
                    if (-1 !== i.indexOf("highcharts-container")) return !1;
                  }
                  t = t.parentNode;
                }
              };
              t.prototype.init = function (t, e) {
                this.options = e;
                this.chart = t;
                this.runChartClick = !(
                  !e.chart.events || !e.chart.events.click
                );
                this.pinchDown = [];
                this.lastValidTouch = {};
                n &&
                  ((t.tooltip = new n(t, e.tooltip)),
                  (this.followTouchMove = x(e.tooltip.followTouchMove, !0)));
                this.setDOMEvents();
              };
              t.prototype.normalize = function (t, e) {
                var i = t.touches,
                  n = i
                    ? i.length
                      ? i.item(0)
                      : x(i.changedTouches, t.changedTouches)[0]
                    : t;
                e || (e = this.getChartPosition());
                i = n.pageX - e.left;
                n = n.pageY - e.top;
                i /= e.scaleX;
                n /= e.scaleY;
                return p(t, { chartX: Math.round(i), chartY: Math.round(n) });
              };
              t.prototype.onContainerClick = function (t) {
                var e = this.chart,
                  i = e.hoverPoint;
                t = this.normalize(t);
                var n = e.plotLeft,
                  o = e.plotTop;
                e.cancelClick ||
                  (i && this.inClass(t.target, "highcharts-tracker")
                    ? (f(i.series, "click", p(t, { point: i })),
                      e.hoverPoint && i.firePointEvent("click", t))
                    : (p(t, this.getCoordinates(t)),
                      e.isInsidePlot(t.chartX - n, t.chartY - o, {
                        visiblePlotOnly: !0,
                      }) && f(e, "click", t)));
              };
              t.prototype.onContainerMouseDown = function (t) {
                var i = 1 === ((t.buttons || t.button) & 1);
                t = this.normalize(t);
                if (e.isFirefox && 0 !== t.button) this.onContainerMouseMove(t);
                if ("undefined" === typeof t.button || i)
                  this.zoomOption(t),
                    i && t.preventDefault && t.preventDefault(),
                    this.dragStart(t);
              };
              t.prototype.onContainerMouseLeave = function (e) {
                var i = s[x(t.hoverChartIndex, -1)],
                  n = this.chart.tooltip;
                (n &&
                  n.shouldStickOnContact() &&
                  this.inClass(
                    e.relatedTarget,
                    "highcharts-tooltip-container"
                  )) ||
                  ((e = this.normalize(e)),
                  i &&
                    (e.relatedTarget || e.toElement) &&
                    (i.pointer.reset(), (i.pointer.chartPosition = void 0)),
                  n && !n.isHidden && this.reset());
              };
              t.prototype.onContainerMouseEnter = function (t) {
                delete this.chartPosition;
              };
              t.prototype.onContainerMouseMove = function (t) {
                var e = this.chart;
                t = this.normalize(t);
                this.setHoverChartIndex();
                t.preventDefault || (t.returnValue = !1);
                ("mousedown" === e.mouseIsDown || this.touchSelect(t)) &&
                  this.drag(t);
                e.openMenu ||
                  (!this.inClass(t.target, "highcharts-tracker") &&
                    !e.isInsidePlot(
                      t.chartX - e.plotLeft,
                      t.chartY - e.plotTop,
                      { visiblePlotOnly: !0 }
                    )) ||
                  (this.inClass(t.target, "highcharts-no-tooltip")
                    ? this.reset(!1, 0)
                    : this.runPointActions(t));
              };
              t.prototype.onDocumentTouchEnd = function (e) {
                var i = s[x(t.hoverChartIndex, -1)];
                i && i.pointer.drop(e);
              };
              t.prototype.onContainerTouchMove = function (t) {
                if (this.touchSelect(t)) this.onContainerMouseMove(t);
                else this.touch(t);
              };
              t.prototype.onContainerTouchStart = function (t) {
                if (this.touchSelect(t)) this.onContainerMouseDown(t);
                else this.zoomOption(t), this.touch(t, !0);
              };
              t.prototype.onDocumentMouseMove = function (t) {
                var e = this.chart,
                  i = this.chartPosition;
                t = this.normalize(t, i);
                var n = e.tooltip;
                !i ||
                  (n && n.isStickyOnContact()) ||
                  e.isInsidePlot(t.chartX - e.plotLeft, t.chartY - e.plotTop, {
                    visiblePlotOnly: !0,
                  }) ||
                  this.inClass(t.target, "highcharts-tracker") ||
                  this.reset();
              };
              t.prototype.onDocumentMouseUp = function (e) {
                var i = s[x(t.hoverChartIndex, -1)];
                i && i.pointer.drop(e);
              };
              t.prototype.pinch = function (t) {
                var e = this,
                  i = e.chart,
                  n = e.pinchDown,
                  o = t.touches || [],
                  r = o.length,
                  s = e.lastValidTouch,
                  h = e.hasZoom,
                  l = {},
                  c =
                    1 === r &&
                    ((e.inClass(t.target, "highcharts-tracker") &&
                      i.runTrackerClick) ||
                      e.runChartClick),
                  d = {},
                  u = e.selectionMarker;
                1 < r
                  ? (e.initiated = !0)
                  : 1 === r && this.followTouchMove && (e.initiated = !1);
                h &&
                  e.initiated &&
                  !c &&
                  !1 !== t.cancelable &&
                  t.preventDefault();
                [].map.call(o, function (t) {
                  return e.normalize(t);
                });
                "touchstart" === t.type
                  ? ([].forEach.call(o, function (t, e) {
                      n[e] = { chartX: t.chartX, chartY: t.chartY };
                    }),
                    (s.x = [n[0].chartX, n[1] && n[1].chartX]),
                    (s.y = [n[0].chartY, n[1] && n[1].chartY]),
                    i.axes.forEach(function (t) {
                      if (t.zoomEnabled) {
                        var e = i.bounds[t.horiz ? "h" : "v"],
                          n = t.minPixelPadding,
                          o = t.toPixels(
                            Math.min(x(t.options.min, t.dataMin), t.dataMin)
                          ),
                          r = t.toPixels(
                            Math.max(x(t.options.max, t.dataMax), t.dataMax)
                          ),
                          s = Math.max(o, r);
                        e.min = Math.min(t.pos, Math.min(o, r) - n);
                        e.max = Math.max(t.pos + t.len, s + n);
                      }
                    }),
                    (e.res = !0))
                  : e.followTouchMove && 1 === r
                  ? this.runPointActions(e.normalize(t))
                  : n.length &&
                    (u ||
                      (e.selectionMarker = u =
                        p({ destroy: a, touch: !0 }, i.plotBox)),
                    e.pinchTranslate(n, o, l, u, d, s),
                    (e.hasPinched = h),
                    e.scaleGroups(l, d),
                    e.res && ((e.res = !1), this.reset(!1, 0)));
              };
              t.prototype.pinchTranslate = function (t, e, i, n, o, r) {
                this.zoomHor &&
                  this.pinchTranslateDirection(!0, t, e, i, n, o, r);
                this.zoomVert &&
                  this.pinchTranslateDirection(!1, t, e, i, n, o, r);
              };
              t.prototype.pinchTranslateDirection = function (
                t,
                e,
                i,
                n,
                o,
                r,
                s,
                a
              ) {
                var h = this.chart,
                  l = t ? "x" : "y",
                  c = t ? "X" : "Y",
                  d = "chart" + c,
                  p = t ? "width" : "height",
                  u = h["plot" + (t ? "Left" : "Top")],
                  f = h.inverted,
                  g = h.bounds[t ? "h" : "v"],
                  m = 1 === e.length,
                  y = e[0][d],
                  v = !m && e[1][d];
                e = function () {
                  "number" === typeof S &&
                    20 < Math.abs(y - v) &&
                    (C = a || Math.abs(w - S) / Math.abs(y - v));
                  b = (u - w) / C + y;
                  x = h["plot" + (t ? "Width" : "Height")] / C;
                };
                var x,
                  b,
                  C = a || 1,
                  w = i[0][d],
                  S = !m && i[1][d];
                e();
                i = b;
                if (i < g.min) {
                  i = g.min;
                  var A = !0;
                } else i + x > g.max && ((i = g.max - x), (A = !0));
                A
                  ? ((w -= 0.8 * (w - s[l][0])),
                    "number" === typeof S && (S -= 0.8 * (S - s[l][1])),
                    e())
                  : (s[l] = [w, S]);
                f || ((r[l] = b - u), (r[p] = x));
                r = f ? 1 / C : C;
                o[p] = x;
                o[l] = i;
                n[f ? (t ? "scaleY" : "scaleX") : "scale" + c] = C;
                n["translate" + c] = r * u + (w - r * y);
              };
              t.prototype.reset = function (t, e) {
                var i = this.chart,
                  n = i.hoverSeries,
                  o = i.hoverPoint,
                  r = i.hoverPoints,
                  s = i.tooltip,
                  a = s && s.shared ? r : o;
                t &&
                  a &&
                  b(a).forEach(function (e) {
                    e.series.isCartesian &&
                      "undefined" === typeof e.plotX &&
                      (t = !1);
                  });
                if (t)
                  s &&
                    a &&
                    b(a).length &&
                    (s.refresh(a),
                    s.shared && r
                      ? r.forEach(function (t) {
                          t.setState(t.state, !0);
                          t.series.isCartesian &&
                            (t.series.xAxis.crosshair &&
                              t.series.xAxis.drawCrosshair(null, t),
                            t.series.yAxis.crosshair &&
                              t.series.yAxis.drawCrosshair(null, t));
                        })
                      : o &&
                        (o.setState(o.state, !0),
                        i.axes.forEach(function (t) {
                          t.crosshair &&
                            o.series[t.coll] === t &&
                            t.drawCrosshair(null, o);
                        })));
                else {
                  if (o) o.onMouseOut();
                  r &&
                    r.forEach(function (t) {
                      t.setState();
                    });
                  if (n) n.onMouseOut();
                  s && s.hide(e);
                  this.unDocMouseMove &&
                    (this.unDocMouseMove = this.unDocMouseMove());
                  i.axes.forEach(function (t) {
                    t.hideCrosshair();
                  });
                  this.hoverX = i.hoverPoints = i.hoverPoint = null;
                }
              };
              t.prototype.runPointActions = function (e, i) {
                var n = this.chart,
                  o =
                    n.tooltip && n.tooltip.options.enabled ? n.tooltip : void 0,
                  r = o ? o.shared : !1,
                  a = i || n.hoverPoint,
                  l = (a && a.series) || n.hoverSeries;
                i = this.getHoverData(
                  a,
                  l,
                  n.series,
                  (!e || "touchmove" !== e.type) &&
                    (!!i || (l && l.directTouch && this.isDirectTouch)),
                  r,
                  e
                );
                a = i.hoverPoint;
                l = i.hoverSeries;
                var c = i.hoverPoints;
                i =
                  l &&
                  l.tooltipOptions.followPointer &&
                  !l.tooltipOptions.split;
                r = r && l && !l.noSharedTooltip;
                if (a && (a !== n.hoverPoint || (o && o.isHidden))) {
                  (n.hoverPoints || []).forEach(function (t) {
                    -1 === c.indexOf(t) && t.setState();
                  });
                  if (n.hoverSeries !== l) l.onMouseOver();
                  this.applyInactiveState(c);
                  (c || []).forEach(function (t) {
                    t.setState("hover");
                  });
                  n.hoverPoint && n.hoverPoint.firePointEvent("mouseOut");
                  if (!a.series) return;
                  n.hoverPoints = c;
                  n.hoverPoint = a;
                  a.firePointEvent("mouseOver");
                  o && o.refresh(r ? c : a, e);
                } else
                  i &&
                    o &&
                    !o.isHidden &&
                    ((a = o.getAnchor([{}], e)),
                    n.isInsidePlot(a[0], a[1], { visiblePlotOnly: !0 }) &&
                      o.updatePosition({ plotX: a[0], plotY: a[1] }));
                this.unDocMouseMove ||
                  ((this.unDocMouseMove = h(
                    n.container.ownerDocument,
                    "mousemove",
                    function (e) {
                      var i = s[t.hoverChartIndex];
                      if (i) i.pointer.onDocumentMouseMove(e);
                    }
                  )),
                  this.eventsToUnbind.push(this.unDocMouseMove));
                n.axes.forEach(function (t) {
                  var i = x((t.crosshair || {}).snap, !0),
                    o;
                  i &&
                    (((o = n.hoverPoint) && o.series[t.coll] === t) ||
                      (o = u(c, function (e) {
                        return e.series[t.coll] === t;
                      })));
                  o || !i ? t.drawCrosshair(e, o) : t.hideCrosshair();
                });
              };
              t.prototype.scaleGroups = function (t, e) {
                var i = this.chart;
                i.series.forEach(function (n) {
                  var o = t || n.getPlotBox();
                  n.xAxis &&
                    n.xAxis.zoomEnabled &&
                    n.group &&
                    (n.group.attr(o),
                    n.markerGroup &&
                      (n.markerGroup.attr(o),
                      n.markerGroup.clip(e ? i.clipRect : null)),
                    n.dataLabelsGroup && n.dataLabelsGroup.attr(o));
                });
                i.clipRect.attr(e || i.clipBox);
              };
              t.prototype.setDOMEvents = function () {
                var i = this,
                  n = this.chart.container,
                  o = n.ownerDocument;
                n.onmousedown = this.onContainerMouseDown.bind(this);
                n.onmousemove = this.onContainerMouseMove.bind(this);
                n.onclick = this.onContainerClick.bind(this);
                this.eventsToUnbind.push(
                  h(n, "mouseenter", this.onContainerMouseEnter.bind(this))
                );
                this.eventsToUnbind.push(
                  h(n, "mouseleave", this.onContainerMouseLeave.bind(this))
                );
                t.unbindDocumentMouseUp ||
                  (t.unbindDocumentMouseUp = h(
                    o,
                    "mouseup",
                    this.onDocumentMouseUp.bind(this)
                  ));
                for (
                  var r = this.chart.renderTo.parentElement;
                  r && "BODY" !== r.tagName;

                )
                  this.eventsToUnbind.push(
                    h(r, "scroll", function () {
                      delete i.chartPosition;
                    })
                  ),
                    (r = r.parentElement);
                e.hasTouch &&
                  (this.eventsToUnbind.push(
                    h(n, "touchstart", this.onContainerTouchStart.bind(this), {
                      passive: !1,
                    })
                  ),
                  this.eventsToUnbind.push(
                    h(n, "touchmove", this.onContainerTouchMove.bind(this), {
                      passive: !1,
                    })
                  ),
                  t.unbindDocumentTouchEnd ||
                    (t.unbindDocumentTouchEnd = h(
                      o,
                      "touchend",
                      this.onDocumentTouchEnd.bind(this),
                      { passive: !1 }
                    )));
              };
              t.prototype.setHoverChartIndex = function () {
                var i = this.chart,
                  n = e.charts[x(t.hoverChartIndex, -1)];
                if (n && n !== i)
                  n.pointer.onContainerMouseLeave({ relatedTarget: !0 });
                (n && n.mouseIsDown) || (t.hoverChartIndex = i.index);
              };
              t.prototype.touch = function (t, e) {
                var i = this.chart,
                  n;
                this.setHoverChartIndex();
                if (1 === t.touches.length)
                  if (
                    ((t = this.normalize(t)),
                    (n = i.isInsidePlot(
                      t.chartX - i.plotLeft,
                      t.chartY - i.plotTop,
                      { visiblePlotOnly: !0 }
                    )) && !i.openMenu)
                  ) {
                    e && this.runPointActions(t);
                    if ("touchmove" === t.type) {
                      e = this.pinchDown;
                      var o = e[0]
                        ? 4 <=
                          Math.sqrt(
                            Math.pow(e[0].chartX - t.chartX, 2) +
                              Math.pow(e[0].chartY - t.chartY, 2)
                          )
                        : !1;
                    }
                    x(o, !0) && this.pinch(t);
                  } else e && this.reset();
                else 2 === t.touches.length && this.pinch(t);
              };
              t.prototype.touchSelect = function (t) {
                return !(
                  !this.chart.options.chart.zoomBySingleTouch ||
                  !t.touches ||
                  1 !== t.touches.length
                );
              };
              t.prototype.zoomOption = function (t) {
                var e = this.chart,
                  i = e.options.chart;
                e = e.inverted;
                var n = i.zoomType || "";
                /touch/.test(t.type) && (n = x(i.pinchType, n));
                this.zoomX = t = /x/.test(n);
                this.zoomY = i = /y/.test(n);
                this.zoomHor = (t && !e) || (i && e);
                this.zoomVert = (i && !e) || (t && e);
                this.hasZoom = t || i;
              };
              return t;
            })();
            ("");
            return t;
          }
        );
        e(
          i,
          "Core/MSPointer.js",
          [i["Core/Globals.js"], i["Core/Pointer.js"], i["Core/Utilities.js"]],
          function (t, e, i) {
            function n() {
              var t = [];
              t.item = function (t) {
                return this[t];
              };
              p(f, function (e) {
                t.push({ pageX: e.pageX, pageY: e.pageY, target: e.target });
              });
              return t;
            }
            function o(t, i, o, r) {
              var a = s[e.hoverChartIndex || NaN];
              ("touch" !== t.pointerType &&
                t.pointerType !== t.MSPOINTER_TYPE_TOUCH) ||
                !a ||
                ((a = a.pointer),
                r(t),
                a[i]({
                  type: o,
                  target: t.currentTarget,
                  preventDefault: h,
                  touches: n(),
                }));
            }
            var r =
                (this && this.__extends) ||
                (function () {
                  var t = function (e, i) {
                    t =
                      Object.setPrototypeOf ||
                      ({ __proto__: [] } instanceof Array &&
                        function (t, e) {
                          t.__proto__ = e;
                        }) ||
                      function (t, e) {
                        for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
                      };
                    return t(e, i);
                  };
                  return function (e, i) {
                    function n() {
                      this.constructor = e;
                    }
                    t(e, i);
                    e.prototype =
                      null === i
                        ? Object.create(i)
                        : ((n.prototype = i.prototype), new n());
                  };
                })(),
              s = t.charts,
              a = t.doc,
              h = t.noop,
              l = t.win,
              c = i.addEvent,
              d = i.css,
              p = i.objectEach,
              u = i.removeEvent,
              f = {},
              g = !!l.PointerEvent;
            return (function (e) {
              function i() {
                return (null !== e && e.apply(this, arguments)) || this;
              }
              r(i, e);
              i.isRequired = function () {
                return !(t.hasTouch || (!l.PointerEvent && !l.MSPointerEvent));
              };
              i.prototype.batchMSEvents = function (t) {
                t(
                  this.chart.container,
                  g ? "pointerdown" : "MSPointerDown",
                  this.onContainerPointerDown
                );
                t(
                  this.chart.container,
                  g ? "pointermove" : "MSPointerMove",
                  this.onContainerPointerMove
                );
                t(a, g ? "pointerup" : "MSPointerUp", this.onDocumentPointerUp);
              };
              i.prototype.destroy = function () {
                this.batchMSEvents(u);
                e.prototype.destroy.call(this);
              };
              i.prototype.init = function (t, i) {
                e.prototype.init.call(this, t, i);
                this.hasZoom &&
                  d(t.container, {
                    "-ms-touch-action": "none",
                    "touch-action": "none",
                  });
              };
              i.prototype.onContainerPointerDown = function (t) {
                o(t, "onContainerTouchStart", "touchstart", function (t) {
                  f[t.pointerId] = {
                    pageX: t.pageX,
                    pageY: t.pageY,
                    target: t.currentTarget,
                  };
                });
              };
              i.prototype.onContainerPointerMove = function (t) {
                o(t, "onContainerTouchMove", "touchmove", function (t) {
                  f[t.pointerId] = { pageX: t.pageX, pageY: t.pageY };
                  f[t.pointerId].target ||
                    (f[t.pointerId].target = t.currentTarget);
                });
              };
              i.prototype.onDocumentPointerUp = function (t) {
                o(t, "onDocumentTouchEnd", "touchend", function (t) {
                  delete f[t.pointerId];
                });
              };
              i.prototype.setDOMEvents = function () {
                e.prototype.setDOMEvents.call(this);
                (this.hasZoom || this.followTouchMove) && this.batchMSEvents(c);
              };
              return i;
            })(e);
          }
        );
        e(
          i,
          "Core/Legend/Legend.js",
          [
            i["Core/Animation/AnimationUtilities.js"],
            i["Core/FormatUtilities.js"],
            i["Core/Globals.js"],
            i["Core/Series/Point.js"],
            i["Core/Renderer/RendererUtilities.js"],
            i["Core/Utilities.js"],
          ],
          function (t, e, i, n, o, r) {
            var s = t.animObject,
              a = t.setAnimation,
              h = e.format;
            t = i.isFirefox;
            var l = i.marginNames;
            i = i.win;
            var c = o.distribute,
              d = r.addEvent,
              p = r.createElement,
              u = r.css,
              f = r.defined,
              g = r.discardElement,
              m = r.find,
              y = r.fireEvent,
              v = r.isNumber,
              x = r.merge,
              b = r.pick,
              C = r.relativeLength,
              w = r.stableSort,
              S = r.syncTimeout;
            o = r.wrap;
            r = (function () {
              function t(t, e) {
                this.allItems = [];
                this.contentGroup = this.box = void 0;
                this.display = !1;
                this.group = void 0;
                this.offsetWidth =
                  this.maxLegendWidth =
                  this.maxItemWidth =
                  this.legendWidth =
                  this.legendHeight =
                  this.lastLineHeight =
                  this.lastItemY =
                  this.itemY =
                  this.itemX =
                  this.itemMarginTop =
                  this.itemMarginBottom =
                  this.itemHeight =
                  this.initialItemY =
                    0;
                this.options = {};
                this.padding = 0;
                this.pages = [];
                this.proximate = !1;
                this.scrollGroup = void 0;
                this.widthOption =
                  this.totalItemWidth =
                  this.titleHeight =
                  this.symbolWidth =
                  this.symbolHeight =
                    0;
                this.chart = t;
                this.init(t, e);
              }
              t.prototype.init = function (t, e) {
                this.chart = t;
                this.setOptions(e);
                e.enabled &&
                  (this.render(),
                  d(this.chart, "endResize", function () {
                    this.legend.positionCheckboxes();
                  }),
                  this.proximate
                    ? (this.unchartrender = d(
                        this.chart,
                        "render",
                        function () {
                          this.legend.proximatePositions();
                          this.legend.positionItems();
                        }
                      ))
                    : this.unchartrender && this.unchartrender());
              };
              t.prototype.setOptions = function (t) {
                var e = b(t.padding, 8);
                this.options = t;
                this.chart.styledMode ||
                  ((this.itemStyle = t.itemStyle),
                  (this.itemHiddenStyle = x(
                    this.itemStyle,
                    t.itemHiddenStyle
                  )));
                this.itemMarginTop = t.itemMarginTop || 0;
                this.itemMarginBottom = t.itemMarginBottom || 0;
                this.padding = e;
                this.initialItemY = e - 5;
                this.symbolWidth = b(t.symbolWidth, 16);
                this.pages = [];
                this.proximate =
                  "proximate" === t.layout && !this.chart.inverted;
                this.baseline = void 0;
              };
              t.prototype.update = function (t, e) {
                var i = this.chart;
                this.setOptions(x(!0, this.options, t));
                this.destroy();
                i.isDirtyLegend = i.isDirtyBox = !0;
                b(e, !0) && i.redraw();
                y(this, "afterUpdate");
              };
              t.prototype.colorizeItem = function (t, e) {
                t.legendGroup[e ? "removeClass" : "addClass"](
                  "highcharts-legend-item-hidden"
                );
                if (!this.chart.styledMode) {
                  var i = this.options,
                    n = t.legendItem,
                    o = t.legendLine,
                    r = t.legendSymbol,
                    s = this.itemHiddenStyle.color;
                  i = e ? i.itemStyle.color : s;
                  var a = e ? t.color || s : s,
                    h = t.options && t.options.marker,
                    l = { fill: a };
                  n && n.css({ fill: i, color: i });
                  o && o.attr({ stroke: a });
                  r &&
                    (h &&
                      r.isMarker &&
                      ((l = t.pointAttribs()), e || (l.stroke = l.fill = s)),
                    r.attr(l));
                }
                y(this, "afterColorizeItem", { item: t, visible: e });
              };
              t.prototype.positionItems = function () {
                this.allItems.forEach(this.positionItem, this);
                this.chart.isResizing || this.positionCheckboxes();
              };
              t.prototype.positionItem = function (t) {
                var e = this,
                  i = this.options,
                  n = i.symbolPadding,
                  o = !i.rtl,
                  r = t._legendItemPos;
                i = r[0];
                r = r[1];
                var s = t.checkbox,
                  a = t.legendGroup;
                a &&
                  a.element &&
                  ((n = {
                    translateX: o ? i : this.legendWidth - i - 2 * n - 4,
                    translateY: r,
                  }),
                  (o = function () {
                    y(e, "afterPositionItem", { item: t });
                  }),
                  f(a.translateY) ? a.animate(n, void 0, o) : (a.attr(n), o()));
                s && ((s.x = i), (s.y = r));
              };
              t.prototype.destroyItem = function (t) {
                var e = t.checkbox;
                [
                  "legendItem",
                  "legendLine",
                  "legendSymbol",
                  "legendGroup",
                ].forEach(function (e) {
                  t[e] && (t[e] = t[e].destroy());
                });
                e && g(t.checkbox);
              };
              t.prototype.destroy = function () {
                function t(t) {
                  this[t] && (this[t] = this[t].destroy());
                }
                this.getAllItems().forEach(function (e) {
                  ["legendItem", "legendGroup"].forEach(t, e);
                });
                "clipRect up down pager nav box title group"
                  .split(" ")
                  .forEach(t, this);
                this.display = null;
              };
              t.prototype.positionCheckboxes = function () {
                var t = this.group && this.group.alignAttr,
                  e = this.clipHeight || this.legendHeight,
                  i = this.titleHeight;
                if (t) {
                  var n = t.translateY;
                  this.allItems.forEach(function (o) {
                    var r = o.checkbox;
                    if (r) {
                      var s = n + i + r.y + (this.scrollOffset || 0) + 3;
                      u(r, {
                        left: t.translateX + o.checkboxOffset + r.x - 20 + "px",
                        top: s + "px",
                        display:
                          this.proximate || (s > n - 6 && s < n + e - 6)
                            ? ""
                            : "none",
                      });
                    }
                  }, this);
                }
              };
              t.prototype.renderTitle = function () {
                var t = this.options,
                  e = this.padding,
                  i = t.title,
                  n = 0;
                i.text &&
                  (this.title ||
                    ((this.title = this.chart.renderer
                      .label(
                        i.text,
                        e - 3,
                        e - 4,
                        null,
                        null,
                        null,
                        t.useHTML,
                        null,
                        "legend-title"
                      )
                      .attr({ zIndex: 1 })),
                    this.chart.styledMode || this.title.css(i.style),
                    this.title.add(this.group)),
                  i.width ||
                    this.title.css({ width: this.maxLegendWidth + "px" }),
                  (t = this.title.getBBox()),
                  (n = t.height),
                  (this.offsetWidth = t.width),
                  this.contentGroup.attr({ translateY: n }));
                this.titleHeight = n;
              };
              t.prototype.setText = function (t) {
                var e = this.options;
                t.legendItem.attr({
                  text: e.labelFormat
                    ? h(e.labelFormat, t, this.chart)
                    : e.labelFormatter.call(t),
                });
              };
              t.prototype.renderItem = function (t) {
                var e = this.chart,
                  i = e.renderer,
                  n = this.options,
                  o = this.symbolWidth,
                  r = n.symbolPadding || 0,
                  s = this.itemStyle,
                  a = this.itemHiddenStyle,
                  h = "horizontal" === n.layout ? b(n.itemDistance, 20) : 0,
                  l = !n.rtl,
                  c = !t.series,
                  d = !c && t.series.drawLegendSymbol ? t.series : t,
                  p = d.options,
                  u = this.createCheckboxForItem && p && p.showCheckbox,
                  f = n.useHTML,
                  g = t.options.className,
                  m = t.legendItem;
                p = o + r + h + (u ? 20 : 0);
                m ||
                  ((t.legendGroup = i
                    .g("legend-item")
                    .addClass(
                      "highcharts-" +
                        d.type +
                        "-series highcharts-color-" +
                        t.colorIndex +
                        (g ? " " + g : "") +
                        (c ? " highcharts-series-" + t.index : "")
                    )
                    .attr({ zIndex: 1 })
                    .add(this.scrollGroup)),
                  (t.legendItem = m =
                    i.text("", l ? o + r : -r, this.baseline || 0, f)),
                  e.styledMode || m.css(x(t.visible ? s : a)),
                  m
                    .attr({ align: l ? "left" : "right", zIndex: 2 })
                    .add(t.legendGroup),
                  this.baseline ||
                    ((this.fontMetrics = i.fontMetrics(
                      e.styledMode ? 12 : s.fontSize,
                      m
                    )),
                    (this.baseline =
                      this.fontMetrics.f + 3 + this.itemMarginTop),
                    m.attr("y", this.baseline),
                    (this.symbolHeight = n.symbolHeight || this.fontMetrics.f),
                    n.squareSymbol &&
                      ((this.symbolWidth = b(
                        n.symbolWidth,
                        Math.max(this.symbolHeight, 16)
                      )),
                      (p = this.symbolWidth + r + h + (u ? 20 : 0)),
                      l && m.attr("x", this.symbolWidth + r))),
                  d.drawLegendSymbol(this, t),
                  this.setItemEvents && this.setItemEvents(t, m, f));
                u &&
                  !t.checkbox &&
                  this.createCheckboxForItem &&
                  this.createCheckboxForItem(t);
                this.colorizeItem(t, t.visible);
                (!e.styledMode && s.width) ||
                  m.css({
                    width:
                      (n.itemWidth || this.widthOption || e.spacingBox.width) -
                      p +
                      "px",
                  });
                this.setText(t);
                e = m.getBBox();
                t.itemWidth = t.checkboxOffset =
                  n.itemWidth || t.legendItemWidth || e.width + p;
                this.maxItemWidth = Math.max(this.maxItemWidth, t.itemWidth);
                this.totalItemWidth += t.itemWidth;
                this.itemHeight = t.itemHeight = Math.round(
                  t.legendItemHeight || e.height || this.symbolHeight
                );
              };
              t.prototype.layoutItem = function (t) {
                var e = this.options,
                  i = this.padding,
                  n = "horizontal" === e.layout,
                  o = t.itemHeight,
                  r = this.itemMarginBottom,
                  s = this.itemMarginTop,
                  a = n ? b(e.itemDistance, 20) : 0,
                  h = this.maxLegendWidth;
                e =
                  e.alignColumns && this.totalItemWidth > h
                    ? this.maxItemWidth
                    : t.itemWidth;
                n &&
                  this.itemX - i + e > h &&
                  ((this.itemX = i),
                  this.lastLineHeight &&
                    (this.itemY += s + this.lastLineHeight + r),
                  (this.lastLineHeight = 0));
                this.lastItemY = s + this.itemY + r;
                this.lastLineHeight = Math.max(o, this.lastLineHeight);
                t._legendItemPos = [this.itemX, this.itemY];
                n
                  ? (this.itemX += e)
                  : ((this.itemY += s + o + r), (this.lastLineHeight = o));
                this.offsetWidth =
                  this.widthOption ||
                  Math.max(
                    (n ? this.itemX - i - (t.checkbox ? 0 : a) : e) + i,
                    this.offsetWidth
                  );
              };
              t.prototype.getAllItems = function () {
                var t = [];
                this.chart.series.forEach(function (e) {
                  var i = e && e.options;
                  e &&
                    b(i.showInLegend, f(i.linkedTo) ? !1 : void 0, !0) &&
                    (t = t.concat(
                      e.legendItems || ("point" === i.legendType ? e.data : e)
                    ));
                });
                y(this, "afterGetAllItems", { allItems: t });
                return t;
              };
              t.prototype.getAlignment = function () {
                var t = this.options;
                return this.proximate
                  ? t.align.charAt(0) + "tv"
                  : t.floating
                  ? ""
                  : t.align.charAt(0) +
                    t.verticalAlign.charAt(0) +
                    t.layout.charAt(0);
              };
              t.prototype.adjustMargins = function (t, e) {
                var i = this.chart,
                  n = this.options,
                  o = this.getAlignment();
                o &&
                  [
                    /(lth|ct|rth)/,
                    /(rtv|rm|rbv)/,
                    /(rbh|cb|lbh)/,
                    /(lbv|lm|ltv)/,
                  ].forEach(function (r, s) {
                    r.test(o) &&
                      !f(t[s]) &&
                      (i[l[s]] = Math.max(
                        i[l[s]],
                        i.legend[(s + 1) % 2 ? "legendHeight" : "legendWidth"] +
                          [1, -1, -1, 1][s] * n[s % 2 ? "x" : "y"] +
                          b(n.margin, 12) +
                          e[s] +
                          (i.titleOffset[s] || 0)
                      ));
                  });
              };
              t.prototype.proximatePositions = function () {
                var t = this.chart,
                  e = [],
                  i = "left" === this.options.align;
                this.allItems.forEach(function (n) {
                  var o;
                  var r = i;
                  if (n.yAxis) {
                    n.xAxis.options.reversed && (r = !r);
                    n.points &&
                      (o = m(
                        r ? n.points : n.points.slice(0).reverse(),
                        function (t) {
                          return v(t.plotY);
                        }
                      ));
                    r =
                      this.itemMarginTop +
                      n.legendItem.getBBox().height +
                      this.itemMarginBottom;
                    var s = n.yAxis.top - t.plotTop;
                    n.visible
                      ? ((o = o ? o.plotY : n.yAxis.height), (o += s - 0.3 * r))
                      : (o = s + n.yAxis.height);
                    e.push({ target: o, size: r, item: n });
                  }
                }, this);
                c(e, t.plotHeight).forEach(function (e) {
                  e.item._legendItemPos &&
                    (e.item._legendItemPos[1] =
                      t.plotTop - t.spacing[0] + e.pos);
                });
              };
              t.prototype.render = function () {
                var t = this.chart,
                  e = t.renderer,
                  i = this.options,
                  n = this.padding,
                  o = this.getAllItems(),
                  r = this.group,
                  s = this.box;
                this.itemX = n;
                this.itemY = this.initialItemY;
                this.lastItemY = this.offsetWidth = 0;
                this.widthOption = C(i.width, t.spacingBox.width - n);
                var a = t.spacingBox.width - 2 * n - i.x;
                -1 <
                  ["rm", "lm"].indexOf(this.getAlignment().substring(0, 2)) &&
                  (a /= 2);
                this.maxLegendWidth = this.widthOption || a;
                r ||
                  ((this.group = r =
                    e
                      .g("legend")
                      .addClass(i.className || "")
                      .attr({ zIndex: 7 })
                      .add()),
                  (this.contentGroup = e.g().attr({ zIndex: 1 }).add(r)),
                  (this.scrollGroup = e.g().add(this.contentGroup)));
                this.renderTitle();
                w(o, function (t, e) {
                  return (
                    ((t.options && t.options.legendIndex) || 0) -
                    ((e.options && e.options.legendIndex) || 0)
                  );
                });
                i.reversed && o.reverse();
                this.allItems = o;
                this.display = a = !!o.length;
                this.itemHeight =
                  this.totalItemWidth =
                  this.maxItemWidth =
                  this.lastLineHeight =
                    0;
                o.forEach(this.renderItem, this);
                o.forEach(this.layoutItem, this);
                o = (this.widthOption || this.offsetWidth) + n;
                var h = this.lastItemY + this.lastLineHeight + this.titleHeight;
                h = this.handleOverflow(h);
                h += n;
                s ||
                  ((this.box = s =
                    e
                      .rect()
                      .addClass("highcharts-legend-box")
                      .attr({ r: i.borderRadius })
                      .add(r)),
                  (s.isNew = !0));
                t.styledMode ||
                  s
                    .attr({
                      stroke: i.borderColor,
                      "stroke-width": i.borderWidth || 0,
                      fill: i.backgroundColor || "none",
                    })
                    .shadow(i.shadow);
                0 < o &&
                  0 < h &&
                  (s[s.isNew ? "attr" : "animate"](
                    s.crisp.call(
                      {},
                      { x: 0, y: 0, width: o, height: h },
                      s.strokeWidth()
                    )
                  ),
                  (s.isNew = !1));
                s[a ? "show" : "hide"]();
                t.styledMode && "none" === r.getStyle("display") && (o = h = 0);
                this.legendWidth = o;
                this.legendHeight = h;
                a && this.align();
                this.proximate || this.positionItems();
                y(this, "afterRender");
              };
              t.prototype.align = function (t) {
                void 0 === t && (t = this.chart.spacingBox);
                var e = this.chart,
                  i = this.options,
                  n = t.y;
                /(lth|ct|rth)/.test(this.getAlignment()) && 0 < e.titleOffset[0]
                  ? (n += e.titleOffset[0])
                  : /(lbh|cb|rbh)/.test(this.getAlignment()) &&
                    0 < e.titleOffset[2] &&
                    (n -= e.titleOffset[2]);
                n !== t.y && (t = x(t, { y: n }));
                this.group.align(
                  x(i, {
                    width: this.legendWidth,
                    height: this.legendHeight,
                    verticalAlign: this.proximate ? "top" : i.verticalAlign,
                  }),
                  !0,
                  t
                );
              };
              t.prototype.handleOverflow = function (t) {
                var e = this,
                  i = this.chart,
                  n = i.renderer,
                  o = this.options,
                  r = o.y,
                  s = "top" === o.verticalAlign,
                  a = this.padding,
                  h = o.maxHeight,
                  l = o.navigation,
                  c = b(l.animation, !0),
                  d = l.arrowSize || 12,
                  p = this.pages,
                  u = this.allItems,
                  f = function (t) {
                    "number" === typeof t
                      ? x.attr({ height: t })
                      : x &&
                        ((e.clipRect = x.destroy()), e.contentGroup.clip());
                    e.contentGroup.div &&
                      (e.contentGroup.div.style.clip = t
                        ? "rect(" + a + "px,9999px," + (a + t) + "px,0)"
                        : "auto");
                  },
                  g = function (t) {
                    e[t] = n
                      .circle(0, 0, 1.3 * d)
                      .translate(d / 2, d / 2)
                      .add(v);
                    i.styledMode || e[t].attr("fill", "rgba(0,0,0,0.0001)");
                    return e[t];
                  },
                  m,
                  y;
                r = i.spacingBox.height + (s ? -r : r) - a;
                var v = this.nav,
                  x = this.clipRect;
                "horizontal" !== o.layout ||
                  "middle" === o.verticalAlign ||
                  o.floating ||
                  (r /= 2);
                h && (r = Math.min(r, h));
                p.length = 0;
                t && 0 < r && t > r && !1 !== l.enabled
                  ? ((this.clipHeight = m =
                      Math.max(r - 20 - this.titleHeight - a, 0)),
                    (this.currentPage = b(this.currentPage, 1)),
                    (this.fullHeight = t),
                    u.forEach(function (t, e) {
                      var i = t._legendItemPos[1],
                        n = Math.round(t.legendItem.getBBox().height),
                        o = p.length;
                      if (!o || (i - p[o - 1] > m && (y || i) !== p[o - 1]))
                        p.push(y || i), o++;
                      t.pageIx = o - 1;
                      y && (u[e - 1].pageIx = o - 1);
                      e === u.length - 1 &&
                        i + n - p[o - 1] > m &&
                        i !== y &&
                        (p.push(i), (t.pageIx = o));
                      i !== y && (y = i);
                    }),
                    x ||
                      ((x = e.clipRect = n.clipRect(0, a, 9999, 0)),
                      e.contentGroup.clip(x)),
                    f(m),
                    v ||
                      ((this.nav = v =
                        n.g().attr({ zIndex: 1 }).add(this.group)),
                      (this.up = n.symbol("triangle", 0, 0, d, d).add(v)),
                      g("upTracker").on("click", function () {
                        e.scroll(-1, c);
                      }),
                      (this.pager = n
                        .text("", 15, 10)
                        .addClass("highcharts-legend-navigation")),
                      i.styledMode || this.pager.css(l.style),
                      this.pager.add(v),
                      (this.down = n
                        .symbol("triangle-down", 0, 0, d, d)
                        .add(v)),
                      g("downTracker").on("click", function () {
                        e.scroll(1, c);
                      })),
                    e.scroll(0),
                    (t = r))
                  : v &&
                    (f(),
                    (this.nav = v.destroy()),
                    this.scrollGroup.attr({ translateY: 1 }),
                    (this.clipHeight = 0));
                return t;
              };
              t.prototype.scroll = function (t, e) {
                var i = this,
                  n = this.chart,
                  o = this.pages,
                  r = o.length,
                  h = this.clipHeight,
                  l = this.options.navigation,
                  c = this.pager,
                  d = this.padding,
                  p = this.currentPage + t;
                p > r && (p = r);
                0 < p &&
                  ("undefined" !== typeof e && a(e, n),
                  this.nav.attr({
                    translateX: d,
                    translateY: h + this.padding + 7 + this.titleHeight,
                    visibility: "visible",
                  }),
                  [this.up, this.upTracker].forEach(function (t) {
                    t.attr({
                      class:
                        1 === p
                          ? "highcharts-legend-nav-inactive"
                          : "highcharts-legend-nav-active",
                    });
                  }),
                  c.attr({ text: p + "/" + r }),
                  [this.down, this.downTracker].forEach(function (t) {
                    t.attr({
                      x: 18 + this.pager.getBBox().width,
                      class:
                        p === r
                          ? "highcharts-legend-nav-inactive"
                          : "highcharts-legend-nav-active",
                    });
                  }, this),
                  n.styledMode ||
                    (this.up.attr({
                      fill: 1 === p ? l.inactiveColor : l.activeColor,
                    }),
                    this.upTracker.css({
                      cursor: 1 === p ? "default" : "pointer",
                    }),
                    this.down.attr({
                      fill: p === r ? l.inactiveColor : l.activeColor,
                    }),
                    this.downTracker.css({
                      cursor: p === r ? "default" : "pointer",
                    })),
                  (this.scrollOffset = -o[p - 1] + this.initialItemY),
                  this.scrollGroup.animate({ translateY: this.scrollOffset }),
                  (this.currentPage = p),
                  this.positionCheckboxes(),
                  (t = s(b(e, n.renderer.globalAnimation, !0))),
                  S(function () {
                    y(i, "afterScroll", { currentPage: p });
                  }, t.duration));
              };
              t.prototype.setItemEvents = function (t, e, i) {
                var o = this,
                  r = o.chart.renderer.boxWrapper,
                  s = t instanceof n,
                  a =
                    "highcharts-legend-" + (s ? "point" : "series") + "-active",
                  h = o.chart.styledMode,
                  l = function (e) {
                    o.allItems.forEach(function (i) {
                      t !== i &&
                        [i].concat(i.linkedSeries || []).forEach(function (t) {
                          t.setState(e, !s);
                        });
                    });
                  };
                (i ? [e, t.legendSymbol] : [t.legendGroup]).forEach(function (
                  i
                ) {
                  if (i)
                    i.on("mouseover", function () {
                      t.visible && l("inactive");
                      t.setState("hover");
                      t.visible && r.addClass(a);
                      h || e.css(o.options.itemHoverStyle);
                    })
                      .on("mouseout", function () {
                        o.chart.styledMode ||
                          e.css(x(t.visible ? o.itemStyle : o.itemHiddenStyle));
                        l("");
                        r.removeClass(a);
                        t.setState();
                      })
                      .on("click", function (e) {
                        var i = function () {
                          t.setVisible && t.setVisible();
                          l(t.visible ? "inactive" : "");
                        };
                        r.removeClass(a);
                        e = { browserEvent: e };
                        t.firePointEvent
                          ? t.firePointEvent("legendItemClick", e, i)
                          : y(t, "legendItemClick", e, i);
                      });
                });
              };
              t.prototype.createCheckboxForItem = function (t) {
                t.checkbox = p(
                  "input",
                  {
                    type: "checkbox",
                    className: "highcharts-legend-checkbox",
                    checked: t.selected,
                    defaultChecked: t.selected,
                  },
                  this.options.itemCheckboxStyle,
                  this.chart.container
                );
                d(t.checkbox, "click", function (e) {
                  y(
                    t.series || t,
                    "checkboxClick",
                    { checked: e.target.checked, item: t },
                    function () {
                      t.select();
                    }
                  );
                });
              };
              return t;
            })();
            (/Trident\/7\.0/.test(i.navigator && i.navigator.userAgent) || t) &&
              o(r.prototype, "positionItem", function (t, e) {
                var i = this,
                  n = function () {
                    e._legendItemPos && t.call(i, e);
                  };
                n();
                i.bubbleLegend || setTimeout(n);
              });
            ("");
            return r;
          }
        );
        e(
          i,
          "Core/Series/SeriesRegistry.js",
          [
            i["Core/Globals.js"],
            i["Core/DefaultOptions.js"],
            i["Core/Series/Point.js"],
            i["Core/Utilities.js"],
          ],
          function (t, e, i, n) {
            var o = e.defaultOptions,
              r = n.error,
              s = n.extendClass,
              a = n.merge,
              h;
            (function (e) {
              function n(t, n) {
                var r = o.plotOptions || {},
                  s = n.defaultOptions;
                n.prototype.pointClass || (n.prototype.pointClass = i);
                n.prototype.type = t;
                s && (r[t] = s);
                e.seriesTypes[t] = n;
              }
              e.seriesTypes = t.seriesTypes;
              e.getSeries = function (t, i) {
                void 0 === i && (i = {});
                var n = t.options.chart;
                n = i.type || n.type || n.defaultSeriesType || "";
                var o = e.seriesTypes[n];
                e || r(17, !0, t, { missingModuleFor: n });
                n = new o();
                "function" === typeof n.init && n.init(t, i);
                return n;
              };
              e.registerSeriesType = n;
              e.seriesType = function (t, r, h, l, c) {
                var d = o.plotOptions || {};
                r = r || "";
                d[t] = a(d[r], h);
                n(t, s(e.seriesTypes[r] || function () {}, l));
                e.seriesTypes[t].prototype.type = t;
                c && (e.seriesTypes[t].prototype.pointClass = s(i, c));
                return e.seriesTypes[t];
              };
            })(h || (h = {}));
            return h;
          }
        );
        e(
          i,
          "Core/Chart/Chart.js",
          [
            i["Core/Animation/AnimationUtilities.js"],
            i["Core/Axis/Axis.js"],
            i["Core/FormatUtilities.js"],
            i["Core/Foundation.js"],
            i["Core/Globals.js"],
            i["Core/Legend/Legend.js"],
            i["Core/MSPointer.js"],
            i["Core/DefaultOptions.js"],
            i["Core/Color/Palette.js"],
            i["Core/Pointer.js"],
            i["Core/Renderer/RendererRegistry.js"],
            i["Core/Series/SeriesRegistry.js"],
            i["Core/Renderer/SVG/SVGRenderer.js"],
            i["Core/Time.js"],
            i["Core/Utilities.js"],
            i["Core/Renderer/HTML/AST.js"],
          ],
          function (t, e, i, n, o, r, s, a, h, l, c, d, p, u, f, g) {
            var m = t.animate,
              y = t.animObject,
              v = t.setAnimation,
              x = i.numberFormat,
              b = n.registerEventOptions,
              C = o.charts,
              w = o.doc,
              S = o.marginNames,
              A = o.svg,
              k = o.win,
              T = a.defaultOptions,
              M = a.defaultTime,
              P = d.seriesTypes,
              E = f.addEvent,
              L = f.attr,
              O = f.cleanRecursively,
              D = f.createElement,
              j = f.css,
              B = f.defined,
              I = f.discardElement,
              N = f.erase,
              R = f.error,
              F = f.extend,
              H = f.find,
              G = f.fireEvent,
              z = f.getStyle,
              U = f.isArray,
              W = f.isNumber,
              X = f.isObject,
              Y = f.isString,
              _ = f.merge,
              V = f.objectEach,
              K = f.pick,
              Z = f.pInt,
              q = f.relativeLength,
              $ = f.removeEvent,
              J = f.splat,
              Q = f.syncTimeout,
              tt = f.uniqueKey;
            t = (function () {
              function t(t, e, i) {
                this.series =
                  this.renderTo =
                  this.renderer =
                  this.pointer =
                  this.pointCount =
                  this.plotWidth =
                  this.plotTop =
                  this.plotLeft =
                  this.plotHeight =
                  this.plotBox =
                  this.options =
                  this.numberFormatter =
                  this.margin =
                  this.legend =
                  this.labelCollectors =
                  this.isResizing =
                  this.index =
                  this.eventOptions =
                  this.container =
                  this.colorCounter =
                  this.clipBox =
                  this.chartWidth =
                  this.chartHeight =
                  this.bounds =
                  this.axisOffset =
                  this.axes =
                    void 0;
                this.sharedClips = {};
                this.yAxis =
                  this.xAxis =
                  this.userOptions =
                  this.titleOffset =
                  this.time =
                  this.symbolCounter =
                  this.spacingBox =
                  this.spacing =
                    void 0;
                this.getArgs(t, e, i);
              }
              t.chart = function (e, i, n) {
                return new t(e, i, n);
              };
              t.prototype.getArgs = function (t, e, i) {
                Y(t) || t.nodeName
                  ? ((this.renderTo = t), this.init(e, i))
                  : this.init(t, e);
              };
              t.prototype.init = function (t, e) {
                var i = t.plotOptions || {};
                G(this, "init", { args: arguments }, function () {
                  var n = _(T, t),
                    r = n.chart;
                  V(n.plotOptions, function (t, e) {
                    X(t) && (t.tooltip = (i[e] && _(i[e].tooltip)) || void 0);
                  });
                  n.tooltip.userOptions =
                    (t.chart && t.chart.forExport && t.tooltip.userOptions) ||
                    t.tooltip;
                  this.userOptions = t;
                  this.margin = [];
                  this.spacing = [];
                  this.bounds = { h: {}, v: {} };
                  this.labelCollectors = [];
                  this.callback = e;
                  this.isResizing = 0;
                  this.options = n;
                  this.axes = [];
                  this.series = [];
                  this.time =
                    t.time && Object.keys(t.time).length
                      ? new u(t.time)
                      : o.time;
                  this.numberFormatter = r.numberFormatter || x;
                  this.styledMode = r.styledMode;
                  this.hasCartesianSeries = r.showAxes;
                  this.index = C.length;
                  C.push(this);
                  o.chartCount++;
                  b(this, r);
                  this.xAxis = [];
                  this.yAxis = [];
                  this.pointCount = this.colorCounter = this.symbolCounter = 0;
                  G(this, "afterInit");
                  this.firstRender();
                });
              };
              t.prototype.initSeries = function (t) {
                var e = this.options.chart;
                e = t.type || e.type || e.defaultSeriesType;
                var i = P[e];
                i || R(17, !0, this, { missingModuleFor: e });
                e = new i();
                "function" === typeof e.init && e.init(this, t);
                return e;
              };
              t.prototype.setSeriesData = function () {
                this.getSeriesOrderByLinks().forEach(function (t) {
                  t.points ||
                    t.data ||
                    !t.enabledDataSorting ||
                    t.setData(t.options.data, !1);
                });
              };
              t.prototype.getSeriesOrderByLinks = function () {
                return this.series.concat().sort(function (t, e) {
                  return t.linkedSeries.length || e.linkedSeries.length
                    ? e.linkedSeries.length - t.linkedSeries.length
                    : 0;
                });
              };
              t.prototype.orderSeries = function (t) {
                var e = this.series;
                t = t || 0;
                for (var i = e.length; t < i; ++t)
                  e[t] && ((e[t].index = t), (e[t].name = e[t].getName()));
              };
              t.prototype.isInsidePlot = function (t, e, i) {
                void 0 === i && (i = {});
                var n = this.inverted,
                  o = this.plotBox,
                  r = this.plotLeft,
                  s = this.plotTop,
                  a = this.scrollablePlotBox,
                  h = 0;
                var l = 0;
                i.visiblePlotOnly &&
                  this.scrollingContainer &&
                  ((l = this.scrollingContainer),
                  (h = l.scrollLeft),
                  (l = l.scrollTop));
                var c = i.series;
                o = (i.visiblePlotOnly && a) || o;
                a = i.inverted ? e : t;
                e = i.inverted ? t : e;
                t = { x: a, y: e, isInsidePlot: !0 };
                if (!i.ignoreX) {
                  var d = (c && (n ? c.yAxis : c.xAxis)) || {
                    pos: r,
                    len: Infinity,
                  };
                  a = i.paneCoordinates ? d.pos + a : r + a;
                  (a >= Math.max(h + r, d.pos) &&
                    a <= Math.min(h + r + o.width, d.pos + d.len)) ||
                    (t.isInsidePlot = !1);
                }
                !i.ignoreY &&
                  t.isInsidePlot &&
                  ((n = (c && (n ? c.xAxis : c.yAxis)) || {
                    pos: s,
                    len: Infinity,
                  }),
                  (i = i.paneCoordinates ? n.pos + e : s + e),
                  (i >= Math.max(l + s, n.pos) &&
                    i <= Math.min(l + s + o.height, n.pos + n.len)) ||
                    (t.isInsidePlot = !1));
                G(this, "afterIsInsidePlot", t);
                return t.isInsidePlot;
              };
              t.prototype.redraw = function (t) {
                G(this, "beforeRedraw");
                var e = this.hasCartesianSeries
                    ? this.axes
                    : this.colorAxis || [],
                  i = this.series,
                  n = this.pointer,
                  o = this.legend,
                  r = this.userOptions.legend,
                  s = this.renderer,
                  a = s.isHidden(),
                  h = [],
                  l = this.isDirtyBox,
                  c = this.isDirtyLegend;
                this.setResponsive && this.setResponsive(!1);
                v(this.hasRendered ? t : !1, this);
                a && this.temporaryDisplay();
                this.layOutTitles();
                for (t = i.length; t--; ) {
                  var d = i[t];
                  if (d.options.stacking || d.options.centerInCategory) {
                    var p = !0;
                    if (d.isDirty) {
                      var u = !0;
                      break;
                    }
                  }
                }
                if (u)
                  for (t = i.length; t--; )
                    (d = i[t]), d.options.stacking && (d.isDirty = !0);
                i.forEach(function (t) {
                  t.isDirty &&
                    ("point" === t.options.legendType
                      ? ("function" === typeof t.updateTotals &&
                          t.updateTotals(),
                        (c = !0))
                      : r && (r.labelFormatter || r.labelFormat) && (c = !0));
                  t.isDirtyData && G(t, "updatedData");
                });
                c &&
                  o &&
                  o.options.enabled &&
                  (o.render(), (this.isDirtyLegend = !1));
                p && this.getStacks();
                e.forEach(function (t) {
                  t.updateNames();
                  t.setScale();
                });
                this.getMargins();
                e.forEach(function (t) {
                  t.isDirty && (l = !0);
                });
                e.forEach(function (t) {
                  var e = t.min + "," + t.max;
                  t.extKey !== e &&
                    ((t.extKey = e),
                    h.push(function () {
                      G(t, "afterSetExtremes", F(t.eventArgs, t.getExtremes()));
                      delete t.eventArgs;
                    }));
                  (l || p) && t.redraw();
                });
                l && this.drawChartBox();
                G(this, "predraw");
                i.forEach(function (t) {
                  (l || t.isDirty) && t.visible && t.redraw();
                  t.isDirtyData = !1;
                });
                n && n.reset(!0);
                s.draw();
                G(this, "redraw");
                G(this, "render");
                a && this.temporaryDisplay(!0);
                h.forEach(function (t) {
                  t.call();
                });
              };
              t.prototype.get = function (t) {
                function e(e) {
                  return e.id === t || (e.options && e.options.id === t);
                }
                for (
                  var i = this.series,
                    n = H(this.axes, e) || H(this.series, e),
                    o = 0;
                  !n && o < i.length;
                  o++
                )
                  n = H(i[o].points || [], e);
                return n;
              };
              t.prototype.getAxes = function () {
                var t = this,
                  i = this.options,
                  n = (i.xAxis = J(i.xAxis || {}));
                i = i.yAxis = J(i.yAxis || {});
                G(this, "getAxes");
                n.forEach(function (t, e) {
                  t.index = e;
                  t.isX = !0;
                });
                i.forEach(function (t, e) {
                  t.index = e;
                });
                n.concat(i).forEach(function (i) {
                  new e(t, i);
                });
                G(this, "afterGetAxes");
              };
              t.prototype.getSelectedPoints = function () {
                return this.series.reduce(function (t, e) {
                  e.getPointsCollection().forEach(function (e) {
                    K(e.selectedStaging, e.selected) && t.push(e);
                  });
                  return t;
                }, []);
              };
              t.prototype.getSelectedSeries = function () {
                return this.series.filter(function (t) {
                  return t.selected;
                });
              };
              t.prototype.setTitle = function (t, e, i) {
                this.applyDescription("title", t);
                this.applyDescription("subtitle", e);
                this.applyDescription("caption", void 0);
                this.layOutTitles(i);
              };
              t.prototype.applyDescription = function (t, e) {
                var i = this,
                  n =
                    "title" === t
                      ? {
                          color: h.neutralColor80,
                          fontSize: this.options.isStock ? "16px" : "18px",
                        }
                      : { color: h.neutralColor60 };
                n = this.options[t] = _(
                  !this.styledMode && { style: n },
                  this.options[t],
                  e
                );
                var o = this[t];
                o && e && (this[t] = o = o.destroy());
                n &&
                  !o &&
                  ((o = this.renderer
                    .text(n.text, 0, 0, n.useHTML)
                    .attr({
                      align: n.align,
                      class: "highcharts-" + t,
                      zIndex: n.zIndex || 4,
                    })
                    .add()),
                  (o.update = function (e) {
                    i[
                      {
                        title: "setTitle",
                        subtitle: "setSubtitle",
                        caption: "setCaption",
                      }[t]
                    ](e);
                  }),
                  this.styledMode || o.css(n.style),
                  (this[t] = o));
              };
              t.prototype.layOutTitles = function (t) {
                var e = [0, 0, 0],
                  i = this.renderer,
                  n = this.spacingBox;
                ["title", "subtitle", "caption"].forEach(function (t) {
                  var o = this[t],
                    r = this.options[t],
                    s = r.verticalAlign || "top";
                  t =
                    "title" === t
                      ? "top" === s
                        ? -3
                        : 0
                      : "top" === s
                      ? e[0] + 2
                      : 0;
                  var a;
                  if (o) {
                    this.styledMode || (a = r.style && r.style.fontSize);
                    a = i.fontMetrics(a, o).b;
                    o.css({
                      width: (r.width || n.width + (r.widthAdjust || 0)) + "px",
                    });
                    var h = Math.round(o.getBBox(r.useHTML).height);
                    o.align(
                      F({ y: "bottom" === s ? a : t + a, height: h }, r),
                      !1,
                      "spacingBox"
                    );
                    r.floating ||
                      ("top" === s
                        ? (e[0] = Math.ceil(e[0] + h))
                        : "bottom" === s && (e[2] = Math.ceil(e[2] + h)));
                  }
                }, this);
                e[0] &&
                  "top" === (this.options.title.verticalAlign || "top") &&
                  (e[0] += this.options.title.margin);
                e[2] &&
                  "bottom" === this.options.caption.verticalAlign &&
                  (e[2] += this.options.caption.margin);
                var o =
                  !this.titleOffset ||
                  this.titleOffset.join(",") !== e.join(",");
                this.titleOffset = e;
                G(this, "afterLayOutTitles");
                !this.isDirtyBox &&
                  o &&
                  ((this.isDirtyBox = this.isDirtyLegend = o),
                  this.hasRendered &&
                    K(t, !0) &&
                    this.isDirtyBox &&
                    this.redraw());
              };
              t.prototype.getChartSize = function () {
                var t = this.options.chart,
                  e = t.width;
                t = t.height;
                var i = this.renderTo;
                B(e) || (this.containerWidth = z(i, "width"));
                B(t) || (this.containerHeight = z(i, "height"));
                this.chartWidth = Math.max(0, e || this.containerWidth || 600);
                this.chartHeight = Math.max(
                  0,
                  q(t, this.chartWidth) ||
                    (1 < this.containerHeight ? this.containerHeight : 400)
                );
              };
              t.prototype.temporaryDisplay = function (t) {
                var e = this.renderTo;
                if (t)
                  for (; e && e.style; )
                    e.hcOrigStyle &&
                      (j(e, e.hcOrigStyle), delete e.hcOrigStyle),
                      e.hcOrigDetached &&
                        (w.body.removeChild(e), (e.hcOrigDetached = !1)),
                      (e = e.parentNode);
                else
                  for (; e && e.style; ) {
                    w.body.contains(e) ||
                      e.parentNode ||
                      ((e.hcOrigDetached = !0), w.body.appendChild(e));
                    if ("none" === z(e, "display", !1) || e.hcOricDetached)
                      (e.hcOrigStyle = {
                        display: e.style.display,
                        height: e.style.height,
                        overflow: e.style.overflow,
                      }),
                        (t = { display: "block", overflow: "hidden" }),
                        e !== this.renderTo && (t.height = 0),
                        j(e, t),
                        e.offsetWidth ||
                          e.style.setProperty("display", "block", "important");
                    e = e.parentNode;
                    if (e === w.body) break;
                  }
              };
              t.prototype.setClassName = function (t) {
                this.container.className = "highcharts-container " + (t || "");
              };
              t.prototype.getContainer = function () {
                var t = this.options,
                  e = t.chart,
                  i = tt(),
                  n,
                  o = this.renderTo;
                o || (this.renderTo = o = e.renderTo);
                Y(o) && (this.renderTo = o = w.getElementById(o));
                o || R(13, !0, this);
                var r = Z(L(o, "data-highcharts-chart"));
                W(r) && C[r] && C[r].hasRendered && C[r].destroy();
                L(o, "data-highcharts-chart", this.index);
                o.innerHTML = "";
                e.skipClone || o.offsetWidth || this.temporaryDisplay();
                this.getChartSize();
                r = this.chartWidth;
                var s = this.chartHeight;
                j(o, { overflow: "hidden" });
                this.styledMode ||
                  (n = F(
                    {
                      position: "relative",
                      overflow: "hidden",
                      width: r + "px",
                      height: s + "px",
                      textAlign: "left",
                      lineHeight: "normal",
                      zIndex: 0,
                      "-webkit-tap-highlight-color": "rgba(0,0,0,0)",
                      userSelect: "none",
                      "touch-action": "manipulation",
                      outline: "none",
                    },
                    e.style || {}
                  ));
                this.container = i = D("div", { id: i }, n, o);
                this._cursor = i.style.cursor;
                this.renderer = new (
                  e.renderer || !A ? c.getRendererType(e.renderer) : p
                )(
                  i,
                  r,
                  s,
                  void 0,
                  e.forExport,
                  t.exporting && t.exporting.allowHTML,
                  this.styledMode
                );
                v(void 0, this);
                this.setClassName(e.className);
                if (this.styledMode)
                  for (var a in t.defs) this.renderer.definition(t.defs[a]);
                else this.renderer.setStyle(e.style);
                this.renderer.chartIndex = this.index;
                G(this, "afterGetContainer");
              };
              t.prototype.getMargins = function (t) {
                var e = this.spacing,
                  i = this.margin,
                  n = this.titleOffset;
                this.resetMargins();
                n[0] &&
                  !B(i[0]) &&
                  (this.plotTop = Math.max(this.plotTop, n[0] + e[0]));
                n[2] &&
                  !B(i[2]) &&
                  (this.marginBottom = Math.max(
                    this.marginBottom,
                    n[2] + e[2]
                  ));
                this.legend &&
                  this.legend.display &&
                  this.legend.adjustMargins(i, e);
                G(this, "getMargins");
                t || this.getAxisMargins();
              };
              t.prototype.getAxisMargins = function () {
                var t = this,
                  e = (t.axisOffset = [0, 0, 0, 0]),
                  i = t.colorAxis,
                  n = t.margin,
                  o = function (t) {
                    t.forEach(function (t) {
                      t.visible && t.getOffset();
                    });
                  };
                t.hasCartesianSeries ? o(t.axes) : i && i.length && o(i);
                S.forEach(function (i, o) {
                  B(n[o]) || (t[i] += e[o]);
                });
                t.setChartSize();
              };
              t.prototype.reflow = function (t) {
                var e = this,
                  i = e.options.chart,
                  n = e.renderTo,
                  o = B(i.width) && B(i.height),
                  r = i.width || z(n, "width");
                i = i.height || z(n, "height");
                n = t ? t.target : k;
                delete e.pointer.chartPosition;
                if (!o && !e.isPrinting && r && i && (n === k || n === w)) {
                  if (r !== e.containerWidth || i !== e.containerHeight)
                    f.clearTimeout(e.reflowTimeout),
                      (e.reflowTimeout = Q(
                        function () {
                          e.container && e.setSize(void 0, void 0, !1);
                        },
                        t ? 100 : 0
                      ));
                  e.containerWidth = r;
                  e.containerHeight = i;
                }
              };
              t.prototype.setReflow = function (t) {
                var e = this;
                !1 === t || this.unbindReflow
                  ? !1 === t &&
                    this.unbindReflow &&
                    (this.unbindReflow = this.unbindReflow())
                  : ((this.unbindReflow = E(k, "resize", function (t) {
                      e.options && e.reflow(t);
                    })),
                    E(this, "destroy", this.unbindReflow));
              };
              t.prototype.setSize = function (t, e, i) {
                var n = this,
                  o = n.renderer;
                n.isResizing += 1;
                v(i, n);
                i = o.globalAnimation;
                n.oldChartHeight = n.chartHeight;
                n.oldChartWidth = n.chartWidth;
                "undefined" !== typeof t && (n.options.chart.width = t);
                "undefined" !== typeof e && (n.options.chart.height = e);
                n.getChartSize();
                n.styledMode ||
                  (i ? m : j)(
                    n.container,
                    {
                      width: n.chartWidth + "px",
                      height: n.chartHeight + "px",
                    },
                    i
                  );
                n.setChartSize(!0);
                o.setSize(n.chartWidth, n.chartHeight, i);
                n.axes.forEach(function (t) {
                  t.isDirty = !0;
                  t.setScale();
                });
                n.isDirtyLegend = !0;
                n.isDirtyBox = !0;
                n.layOutTitles();
                n.getMargins();
                n.redraw(i);
                n.oldChartHeight = null;
                G(n, "resize");
                Q(function () {
                  n &&
                    G(n, "endResize", null, function () {
                      --n.isResizing;
                    });
                }, y(i).duration);
              };
              t.prototype.setChartSize = function (t) {
                var e = this.inverted,
                  i = this.renderer,
                  n = this.chartWidth,
                  o = this.chartHeight,
                  r = this.options.chart,
                  s = this.spacing,
                  a = this.clipOffset,
                  h,
                  l,
                  c,
                  d;
                this.plotLeft = h = Math.round(this.plotLeft);
                this.plotTop = l = Math.round(this.plotTop);
                this.plotWidth = c = Math.max(
                  0,
                  Math.round(n - h - this.marginRight)
                );
                this.plotHeight = d = Math.max(
                  0,
                  Math.round(o - l - this.marginBottom)
                );
                this.plotSizeX = e ? d : c;
                this.plotSizeY = e ? c : d;
                this.plotBorderWidth = r.plotBorderWidth || 0;
                this.spacingBox = i.spacingBox = {
                  x: s[3],
                  y: s[0],
                  width: n - s[3] - s[1],
                  height: o - s[0] - s[2],
                };
                this.plotBox = i.plotBox = { x: h, y: l, width: c, height: d };
                e = 2 * Math.floor(this.plotBorderWidth / 2);
                n = Math.ceil(Math.max(e, a[3]) / 2);
                o = Math.ceil(Math.max(e, a[0]) / 2);
                this.clipBox = {
                  x: n,
                  y: o,
                  width: Math.floor(this.plotSizeX - Math.max(e, a[1]) / 2 - n),
                  height: Math.max(
                    0,
                    Math.floor(this.plotSizeY - Math.max(e, a[2]) / 2 - o)
                  ),
                };
                t ||
                  (this.axes.forEach(function (t) {
                    t.setAxisSize();
                    t.setAxisTranslation();
                  }),
                  i.alignElements());
                G(this, "afterSetChartSize", { skipAxes: t });
              };
              t.prototype.resetMargins = function () {
                G(this, "resetMargins");
                var t = this,
                  e = t.options.chart;
                ["margin", "spacing"].forEach(function (i) {
                  var n = e[i],
                    o = X(n) ? n : [n, n, n, n];
                  ["Top", "Right", "Bottom", "Left"].forEach(function (n, r) {
                    t[i][r] = K(e[i + n], o[r]);
                  });
                });
                S.forEach(function (e, i) {
                  t[e] = K(t.margin[i], t.spacing[i]);
                });
                t.axisOffset = [0, 0, 0, 0];
                t.clipOffset = [0, 0, 0, 0];
              };
              t.prototype.drawChartBox = function () {
                var t = this.options.chart,
                  e = this.renderer,
                  i = this.chartWidth,
                  n = this.chartHeight,
                  o = this.styledMode,
                  r = this.plotBGImage,
                  s = t.backgroundColor,
                  a = t.plotBackgroundColor,
                  h = t.plotBackgroundImage,
                  l = this.plotLeft,
                  c = this.plotTop,
                  d = this.plotWidth,
                  p = this.plotHeight,
                  u = this.plotBox,
                  f = this.clipRect,
                  g = this.clipBox,
                  m = this.chartBackground,
                  y = this.plotBackground,
                  v = this.plotBorder,
                  x,
                  b = "animate";
                m ||
                  ((this.chartBackground = m =
                    e.rect().addClass("highcharts-background").add()),
                  (b = "attr"));
                if (o) var C = (x = m.strokeWidth());
                else {
                  C = t.borderWidth || 0;
                  x = C + (t.shadow ? 8 : 0);
                  s = { fill: s || "none" };
                  if (C || m["stroke-width"])
                    (s.stroke = t.borderColor), (s["stroke-width"] = C);
                  m.attr(s).shadow(t.shadow);
                }
                m[b]({
                  x: x / 2,
                  y: x / 2,
                  width: i - x - (C % 2),
                  height: n - x - (C % 2),
                  r: t.borderRadius,
                });
                b = "animate";
                y ||
                  ((b = "attr"),
                  (this.plotBackground = y =
                    e.rect().addClass("highcharts-plot-background").add()));
                y[b](u);
                o ||
                  (y.attr({ fill: a || "none" }).shadow(t.plotShadow),
                  h &&
                    (r
                      ? (h !== r.attr("href") && r.attr("href", h),
                        r.animate(u))
                      : (this.plotBGImage = e.image(h, l, c, d, p).add())));
                f
                  ? f.animate({ width: g.width, height: g.height })
                  : (this.clipRect = e.clipRect(g));
                b = "animate";
                v ||
                  ((b = "attr"),
                  (this.plotBorder = v =
                    e
                      .rect()
                      .addClass("highcharts-plot-border")
                      .attr({ zIndex: 1 })
                      .add()));
                o ||
                  v.attr({
                    stroke: t.plotBorderColor,
                    "stroke-width": t.plotBorderWidth || 0,
                    fill: "none",
                  });
                v[b](
                  v.crisp({ x: l, y: c, width: d, height: p }, -v.strokeWidth())
                );
                this.isDirtyBox = !1;
                G(this, "afterDrawChartBox");
              };
              t.prototype.propFromSeries = function () {
                var t = this,
                  e = t.options.chart,
                  i = t.options.series,
                  n,
                  o,
                  r;
                ["inverted", "angular", "polar"].forEach(function (s) {
                  o = P[e.type || e.defaultSeriesType];
                  r = e[s] || (o && o.prototype[s]);
                  for (n = i && i.length; !r && n--; )
                    (o = P[i[n].type]) && o.prototype[s] && (r = !0);
                  t[s] = r;
                });
              };
              t.prototype.linkSeries = function () {
                var t = this,
                  e = t.series;
                e.forEach(function (t) {
                  t.linkedSeries.length = 0;
                });
                e.forEach(function (e) {
                  var i = e.options.linkedTo;
                  Y(i) &&
                    (i =
                      ":previous" === i ? t.series[e.index - 1] : t.get(i)) &&
                    i.linkedParent !== e &&
                    (i.linkedSeries.push(e),
                    (e.linkedParent = i),
                    i.enabledDataSorting && e.setDataSortingOptions(),
                    (e.visible = K(
                      e.options.visible,
                      i.options.visible,
                      e.visible
                    )));
                });
                G(this, "afterLinkSeries");
              };
              t.prototype.renderSeries = function () {
                this.series.forEach(function (t) {
                  t.translate();
                  t.render();
                });
              };
              t.prototype.renderLabels = function () {
                var t = this,
                  e = t.options.labels;
                e.items &&
                  e.items.forEach(function (i) {
                    var n = F(e.style, i.style),
                      o = Z(n.left) + t.plotLeft,
                      r = Z(n.top) + t.plotTop + 12;
                    delete n.left;
                    delete n.top;
                    t.renderer
                      .text(i.html, o, r)
                      .attr({ zIndex: 2 })
                      .css(n)
                      .add();
                  });
              };
              t.prototype.render = function () {
                var t = this.axes,
                  e = this.colorAxis,
                  i = this.renderer,
                  n = this.options,
                  o = function (t) {
                    t.forEach(function (t) {
                      t.visible && t.render();
                    });
                  },
                  s = 0;
                this.setTitle();
                this.legend = new r(this, n.legend);
                this.getStacks && this.getStacks();
                this.getMargins(!0);
                this.setChartSize();
                n = this.plotWidth;
                t.some(function (t) {
                  if (
                    t.horiz &&
                    t.visible &&
                    t.options.labels.enabled &&
                    t.series.length
                  )
                    return (s = 21), !0;
                });
                var a = (this.plotHeight = Math.max(this.plotHeight - s, 0));
                t.forEach(function (t) {
                  t.setScale();
                });
                this.getAxisMargins();
                var h = 1.1 < n / this.plotWidth,
                  l = 1.05 < a / this.plotHeight;
                if (h || l)
                  t.forEach(function (t) {
                    ((t.horiz && h) || (!t.horiz && l)) &&
                      t.setTickInterval(!0);
                  }),
                    this.getMargins();
                this.drawChartBox();
                this.hasCartesianSeries ? o(t) : e && e.length && o(e);
                this.seriesGroup ||
                  (this.seriesGroup = i
                    .g("series-group")
                    .attr({ zIndex: 3 })
                    .add());
                this.renderSeries();
                this.renderLabels();
                this.addCredits();
                this.setResponsive && this.setResponsive();
                this.hasRendered = !0;
              };
              t.prototype.addCredits = function (t) {
                var e = this,
                  i = _(!0, this.options.credits, t);
                i.enabled &&
                  !this.credits &&
                  ((this.credits = this.renderer
                    .text(i.text + (this.mapCredits || ""), 0, 0)
                    .addClass("highcharts-credits")
                    .on("click", function () {
                      i.href && (k.location.href = i.href);
                    })
                    .attr({ align: i.position.align, zIndex: 8 })),
                  e.styledMode || this.credits.css(i.style),
                  this.credits.add().align(i.position),
                  (this.credits.update = function (t) {
                    e.credits = e.credits.destroy();
                    e.addCredits(t);
                  }));
              };
              t.prototype.destroy = function () {
                var t = this,
                  e = t.axes,
                  i = t.series,
                  n = t.container,
                  r = n && n.parentNode,
                  s;
                G(t, "destroy");
                t.renderer.forExport ? N(C, t) : (C[t.index] = void 0);
                o.chartCount--;
                t.renderTo.removeAttribute("data-highcharts-chart");
                $(t);
                for (s = e.length; s--; ) e[s] = e[s].destroy();
                this.scroller &&
                  this.scroller.destroy &&
                  this.scroller.destroy();
                for (s = i.length; s--; ) i[s] = i[s].destroy();
                "title subtitle chartBackground plotBackground plotBGImage plotBorder seriesGroup clipRect credits pointer rangeSelector legend resetZoomButton tooltip renderer"
                  .split(" ")
                  .forEach(function (e) {
                    var i = t[e];
                    i && i.destroy && (t[e] = i.destroy());
                  });
                n && ((n.innerHTML = ""), $(n), r && I(n));
                V(t, function (e, i) {
                  delete t[i];
                });
              };
              t.prototype.firstRender = function () {
                var t = this,
                  e = t.options;
                if (!t.isReadyToRender || t.isReadyToRender()) {
                  t.getContainer();
                  t.resetMargins();
                  t.setChartSize();
                  t.propFromSeries();
                  t.getAxes();
                  (U(e.series) ? e.series : []).forEach(function (e) {
                    t.initSeries(e);
                  });
                  t.linkSeries();
                  t.setSeriesData();
                  G(t, "beforeRender");
                  l &&
                    (s.isRequired()
                      ? (t.pointer = new s(t, e))
                      : (t.pointer = new l(t, e)));
                  t.render();
                  t.pointer.getChartPosition();
                  if (!t.renderer.imgCount && !t.hasLoaded) t.onload();
                  t.temporaryDisplay(!0);
                }
              };
              t.prototype.onload = function () {
                this.callbacks.concat([this.callback]).forEach(function (t) {
                  t &&
                    "undefined" !== typeof this.index &&
                    t.apply(this, [this]);
                }, this);
                G(this, "load");
                G(this, "render");
                B(this.index) && this.setReflow(this.options.chart.reflow);
                this.hasLoaded = !0;
              };
              t.prototype.addSeries = function (t, e, i) {
                var n = this,
                  o;
                t &&
                  ((e = K(e, !0)),
                  G(n, "addSeries", { options: t }, function () {
                    o = n.initSeries(t);
                    n.isDirtyLegend = !0;
                    n.linkSeries();
                    o.enabledDataSorting && o.setData(t.data, !1);
                    G(n, "afterAddSeries", { series: o });
                    e && n.redraw(i);
                  }));
                return o;
              };
              t.prototype.addAxis = function (t, e, i, n) {
                return this.createAxis(e ? "xAxis" : "yAxis", {
                  axis: t,
                  redraw: i,
                  animation: n,
                });
              };
              t.prototype.addColorAxis = function (t, e, i) {
                return this.createAxis("colorAxis", {
                  axis: t,
                  redraw: e,
                  animation: i,
                });
              };
              t.prototype.createAxis = function (t, i) {
                t = new e(
                  this,
                  _(i.axis, { index: this[t].length, isX: "xAxis" === t })
                );
                K(i.redraw, !0) && this.redraw(i.animation);
                return t;
              };
              t.prototype.showLoading = function (t) {
                var e = this,
                  i = e.options,
                  n = i.loading,
                  o = function () {
                    r &&
                      j(r, {
                        left: e.plotLeft + "px",
                        top: e.plotTop + "px",
                        width: e.plotWidth + "px",
                        height: e.plotHeight + "px",
                      });
                  },
                  r = e.loadingDiv,
                  s = e.loadingSpan;
                r ||
                  (e.loadingDiv = r =
                    D(
                      "div",
                      {
                        className:
                          "highcharts-loading highcharts-loading-hidden",
                      },
                      null,
                      e.container
                    ));
                s ||
                  ((e.loadingSpan = s =
                    D(
                      "span",
                      { className: "highcharts-loading-inner" },
                      null,
                      r
                    )),
                  E(e, "redraw", o));
                r.className = "highcharts-loading";
                g.setElementHTML(s, K(t, i.lang.loading, ""));
                e.styledMode ||
                  (j(r, F(n.style, { zIndex: 10 })),
                  j(s, n.labelStyle),
                  e.loadingShown ||
                    (j(r, { opacity: 0, display: "" }),
                    m(
                      r,
                      { opacity: n.style.opacity || 0.5 },
                      { duration: n.showDuration || 0 }
                    )));
                e.loadingShown = !0;
                o();
              };
              t.prototype.hideLoading = function () {
                var t = this.options,
                  e = this.loadingDiv;
                e &&
                  ((e.className =
                    "highcharts-loading highcharts-loading-hidden"),
                  this.styledMode ||
                    m(
                      e,
                      { opacity: 0 },
                      {
                        duration: t.loading.hideDuration || 100,
                        complete: function () {
                          j(e, { display: "none" });
                        },
                      }
                    ));
                this.loadingShown = !1;
              };
              t.prototype.update = function (t, e, i, n) {
                var o = this,
                  r = {
                    credits: "addCredits",
                    title: "setTitle",
                    subtitle: "setSubtitle",
                    caption: "setCaption",
                  },
                  s = t.isResponsiveOptions,
                  a = [],
                  h,
                  l;
                G(o, "update", { options: t });
                s || o.setResponsive(!1, !0);
                t = O(t, o.options);
                o.userOptions = _(o.userOptions, t);
                var c = t.chart;
                if (c) {
                  _(!0, o.options.chart, c);
                  "className" in c && o.setClassName(c.className);
                  "reflow" in c && o.setReflow(c.reflow);
                  if ("inverted" in c || "polar" in c || "type" in c) {
                    o.propFromSeries();
                    var d = !0;
                  }
                  "alignTicks" in c && (d = !0);
                  "events" in c && b(this, c);
                  V(c, function (t, e) {
                    -1 !== o.propsRequireUpdateSeries.indexOf("chart." + e) &&
                      (h = !0);
                    -1 !== o.propsRequireDirtyBox.indexOf(e) &&
                      (o.isDirtyBox = !0);
                    -1 !== o.propsRequireReflow.indexOf(e) &&
                      (s ? (o.isDirtyBox = !0) : (l = !0));
                  });
                  !o.styledMode &&
                    c.style &&
                    o.renderer.setStyle(o.options.chart.style || {});
                }
                !o.styledMode && t.colors && (this.options.colors = t.colors);
                t.time &&
                  (this.time === M && (this.time = new u(t.time)),
                  _(!0, o.options.time, t.time));
                V(t, function (e, i) {
                  if (o[i] && "function" === typeof o[i].update)
                    o[i].update(e, !1);
                  else if ("function" === typeof o[r[i]]) o[r[i]](e);
                  else
                    "colors" !== i &&
                      -1 === o.collectionsWithUpdate.indexOf(i) &&
                      _(!0, o.options[i], t[i]);
                  "chart" !== i &&
                    -1 !== o.propsRequireUpdateSeries.indexOf(i) &&
                    (h = !0);
                });
                this.collectionsWithUpdate.forEach(function (e) {
                  if (t[e]) {
                    var n = [];
                    o[e].forEach(function (t, e) {
                      t.options.isInternal || n.push(K(t.options.index, e));
                    });
                    J(t[e]).forEach(function (t, r) {
                      var s = B(t.id),
                        a;
                      s && (a = o.get(t.id));
                      !a &&
                        o[e] &&
                        (a = o[e][n ? n[r] : r]) &&
                        s &&
                        B(a.options.id) &&
                        (a = void 0);
                      a &&
                        a.coll === e &&
                        (a.update(t, !1), i && (a.touched = !0));
                      !a &&
                        i &&
                        o.collectionsWithInit[e] &&
                        (o.collectionsWithInit[e][0].apply(
                          o,
                          [t]
                            .concat(o.collectionsWithInit[e][1] || [])
                            .concat([!1])
                        ).touched = !0);
                    });
                    i &&
                      o[e].forEach(function (t) {
                        t.touched || t.options.isInternal
                          ? delete t.touched
                          : a.push(t);
                      });
                  }
                });
                a.forEach(function (t) {
                  t.chart && t.remove && t.remove(!1);
                });
                d &&
                  o.axes.forEach(function (t) {
                    t.update({}, !1);
                  });
                h &&
                  o.getSeriesOrderByLinks().forEach(function (t) {
                    t.chart && t.update({}, !1);
                  }, this);
                d = c && c.width;
                c =
                  c &&
                  (Y(c.height) ? q(c.height, d || o.chartWidth) : c.height);
                l ||
                (W(d) && d !== o.chartWidth) ||
                (W(c) && c !== o.chartHeight)
                  ? o.setSize(d, c, n)
                  : K(e, !0) && o.redraw(n);
                G(o, "afterUpdate", { options: t, redraw: e, animation: n });
              };
              t.prototype.setSubtitle = function (t, e) {
                this.applyDescription("subtitle", t);
                this.layOutTitles(e);
              };
              t.prototype.setCaption = function (t, e) {
                this.applyDescription("caption", t);
                this.layOutTitles(e);
              };
              t.prototype.showResetZoom = function () {
                function t() {
                  e.zoomOut();
                }
                var e = this,
                  i = T.lang,
                  n = e.options.chart.resetZoomButton,
                  o = n.theme,
                  r = o.states,
                  s =
                    "chart" === n.relativeTo || "spacingBox" === n.relativeTo
                      ? null
                      : "scrollablePlotBox";
                G(this, "beforeShowResetZoom", null, function () {
                  e.resetZoomButton = e.renderer
                    .button(i.resetZoom, null, null, t, o, r && r.hover)
                    .attr({ align: n.position.align, title: i.resetZoomTitle })
                    .addClass("highcharts-reset-zoom")
                    .add()
                    .align(n.position, !1, s);
                });
                G(this, "afterShowResetZoom");
              };
              t.prototype.zoomOut = function () {
                G(this, "selection", { resetSelection: !0 }, this.zoom);
              };
              t.prototype.zoom = function (t) {
                var e = this,
                  i = e.pointer,
                  n = e.inverted ? i.mouseDownX : i.mouseDownY,
                  o = !1,
                  r;
                !t || t.resetSelection
                  ? (e.axes.forEach(function (t) {
                      r = t.zoom();
                    }),
                    (i.initiated = !1))
                  : t.xAxis.concat(t.yAxis).forEach(function (t) {
                      var s = t.axis,
                        a = e.inverted ? s.left : s.top,
                        h = e.inverted ? a + s.width : a + s.height,
                        l = s.isXAxis,
                        c = !1;
                      if ((!l && n >= a && n <= h) || l || !B(n)) c = !0;
                      i[l ? "zoomX" : "zoomY"] &&
                        c &&
                        ((r = s.zoom(t.min, t.max)), s.displayBtn && (o = !0));
                    });
                var s = e.resetZoomButton;
                o && !s
                  ? e.showResetZoom()
                  : !o && X(s) && (e.resetZoomButton = s.destroy());
                r &&
                  e.redraw(
                    K(
                      e.options.chart.animation,
                      t && t.animation,
                      100 > e.pointCount
                    )
                  );
              };
              t.prototype.pan = function (t, e) {
                var i = this,
                  n = i.hoverPoints;
                e = "object" === typeof e ? e : { enabled: e, type: "x" };
                var o = i.options.chart,
                  r =
                    i.options.mapNavigation && i.options.mapNavigation.enabled;
                o && o.panning && (o.panning = e);
                var s = e.type,
                  a;
                G(this, "pan", { originalEvent: t }, function () {
                  n &&
                    n.forEach(function (t) {
                      t.setState();
                    });
                  var e = i.xAxis;
                  "xy" === s
                    ? (e = e.concat(i.yAxis))
                    : "y" === s && (e = i.yAxis);
                  var o = {};
                  e.forEach(function (e) {
                    if (e.options.panningEnabled && !e.options.isInternal) {
                      var n = e.horiz,
                        h = t[n ? "chartX" : "chartY"];
                      n = n ? "mouseDownX" : "mouseDownY";
                      var l = i[n],
                        c = e.minPointOffset || 0,
                        d =
                          (e.reversed && !i.inverted) ||
                          (!e.reversed && i.inverted)
                            ? -1
                            : 1,
                        p = e.getExtremes(),
                        u = e.toValue(l - h, !0) + c * d,
                        f =
                          e.toValue(l + e.len - h, !0) -
                          (c * d || (e.isXAxis && e.pointRangePadding) || 0),
                        g = f < u;
                      d = e.hasVerticalPanning();
                      l = g ? f : u;
                      u = g ? u : f;
                      var m = e.panningState;
                      !d ||
                        e.isXAxis ||
                        (m && !m.isDirty) ||
                        e.series.forEach(function (t) {
                          var e = t.getProcessedData(!0);
                          e = t.getExtremes(e.yData, !0);
                          m ||
                            (m = {
                              startMin: Number.MAX_VALUE,
                              startMax: -Number.MAX_VALUE,
                            });
                          W(e.dataMin) &&
                            W(e.dataMax) &&
                            ((m.startMin = Math.min(
                              K(t.options.threshold, Infinity),
                              e.dataMin,
                              m.startMin
                            )),
                            (m.startMax = Math.max(
                              K(t.options.threshold, -Infinity),
                              e.dataMax,
                              m.startMax
                            )));
                        });
                      d = Math.min(
                        K(m && m.startMin, p.dataMin),
                        c
                          ? p.min
                          : e.toValue(e.toPixels(p.min) - e.minPixelPadding)
                      );
                      f = Math.max(
                        K(m && m.startMax, p.dataMax),
                        c
                          ? p.max
                          : e.toValue(e.toPixels(p.max) + e.minPixelPadding)
                      );
                      e.panningState = m;
                      e.isOrdinal ||
                        ((c = d - l),
                        0 < c && ((u += c), (l = d)),
                        (c = u - f),
                        0 < c && ((u = f), (l -= c)),
                        e.series.length &&
                          l !== p.min &&
                          u !== p.max &&
                          l >= d &&
                          u <= f &&
                          (e.setExtremes(l, u, !1, !1, { trigger: "pan" }),
                          i.resetZoomButton ||
                            r ||
                            l === d ||
                            u === f ||
                            !s.match("y") ||
                            (i.showResetZoom(), (e.displayBtn = !1)),
                          (a = !0)),
                        (o[n] = h));
                    }
                  });
                  V(o, function (t, e) {
                    i[e] = t;
                  });
                  a && i.redraw(!1);
                  j(i.container, { cursor: "move" });
                });
              };
              return t;
            })();
            F(t.prototype, {
              callbacks: [],
              collectionsWithInit: {
                xAxis: [t.prototype.addAxis, [!0]],
                yAxis: [t.prototype.addAxis, [!1]],
                series: [t.prototype.addSeries],
              },
              collectionsWithUpdate: ["xAxis", "yAxis", "series"],
              propsRequireDirtyBox:
                "backgroundColor borderColor borderWidth borderRadius plotBackgroundColor plotBackgroundImage plotBorderColor plotBorderWidth plotShadow shadow".split(
                  " "
                ),
              propsRequireReflow:
                "margin marginTop marginRight marginBottom marginLeft spacing spacingTop spacingRight spacingBottom spacingLeft".split(
                  " "
                ),
              propsRequireUpdateSeries:
                "chart.inverted chart.polar chart.ignoreHiddenSeries chart.type colors plotOptions time tooltip".split(
                  " "
                ),
            });
            ("");
            return t;
          }
        );
        e(
          i,
          "Core/Legend/LegendSymbol.js",
          [i["Core/Utilities.js"]],
          function (t) {
            var e = t.merge,
              i = t.pick,
              n;
            (function (t) {
              t.drawLineMarker = function (t) {
                var n = this.options,
                  o = t.symbolWidth,
                  r = t.symbolHeight,
                  s = r / 2,
                  a = this.chart.renderer,
                  h = this.legendGroup;
                t = t.baseline - Math.round(0.3 * t.fontMetrics.b);
                var l = {},
                  c = n.marker;
                this.chart.styledMode ||
                  ((l = { "stroke-width": n.lineWidth || 0 }),
                  n.dashStyle && (l.dashstyle = n.dashStyle));
                this.legendLine = a
                  .path([
                    ["M", 0, t],
                    ["L", o, t],
                  ])
                  .addClass("highcharts-graph")
                  .attr(l)
                  .add(h);
                c &&
                  !1 !== c.enabled &&
                  o &&
                  ((n = Math.min(i(c.radius, s), s)),
                  0 === this.symbol.indexOf("url") &&
                    ((c = e(c, { width: r, height: r })), (n = 0)),
                  (this.legendSymbol = o =
                    a
                      .symbol(this.symbol, o / 2 - n, t - n, 2 * n, 2 * n, c)
                      .addClass("highcharts-point")
                      .add(h)),
                  (o.isMarker = !0));
              };
              t.drawRectangle = function (t, e) {
                var n = t.symbolHeight,
                  o = t.options.squareSymbol;
                e.legendSymbol = this.chart.renderer
                  .rect(
                    o ? (t.symbolWidth - n) / 2 : 0,
                    t.baseline - n + 1,
                    o ? n : t.symbolWidth,
                    n,
                    i(t.options.symbolRadius, n / 2)
                  )
                  .addClass("highcharts-point")
                  .attr({ zIndex: 3 })
                  .add(e.legendGroup);
              };
            })(n || (n = {}));
            return n;
          }
        );
        e(
          i,
          "Core/Series/SeriesDefaults.js",
          [i["Core/Color/Palette.js"]],
          function (t) {
            return {
              lineWidth: 2,
              allowPointSelect: !1,
              crisp: !0,
              showCheckbox: !1,
              animation: { duration: 1e3 },
              events: {},
              marker: {
                enabledThreshold: 2,
                lineColor: t.backgroundColor,
                lineWidth: 0,
                radius: 4,
                states: {
                  normal: { animation: !0 },
                  hover: {
                    animation: { duration: 50 },
                    enabled: !0,
                    radiusPlus: 2,
                    lineWidthPlus: 1,
                  },
                  select: {
                    fillColor: t.neutralColor20,
                    lineColor: t.neutralColor100,
                    lineWidth: 2,
                  },
                },
              },
              point: { events: {} },
              dataLabels: {
                animation: {},
                align: "center",
                defer: !0,
                formatter: function () {
                  var t = this.series.chart.numberFormatter;
                  return "number" !== typeof this.y ? "" : t(this.y, -1);
                },
                padding: 5,
                style: {
                  fontSize: "11px",
                  fontWeight: "bold",
                  color: "contrast",
                  textOutline: "1px contrast",
                },
                verticalAlign: "bottom",
                x: 0,
                y: 0,
              },
              cropThreshold: 300,
              opacity: 1,
              pointRange: 0,
              softThreshold: !0,
              states: {
                normal: { animation: !0 },
                hover: {
                  animation: { duration: 50 },
                  lineWidthPlus: 1,
                  marker: {},
                  halo: { size: 10, opacity: 0.25 },
                },
                select: { animation: { duration: 0 } },
                inactive: { animation: { duration: 50 }, opacity: 0.2 },
              },
              stickyTracking: !0,
              turboThreshold: 1e3,
              findNearestPointBy: "x",
            };
          }
        );
        e(
          i,
          "Core/Series/Series.js",
          [
            i["Core/Animation/AnimationUtilities.js"],
            i["Core/DefaultOptions.js"],
            i["Core/Foundation.js"],
            i["Core/Globals.js"],
            i["Core/Legend/LegendSymbol.js"],
            i["Core/Color/Palette.js"],
            i["Core/Series/Point.js"],
            i["Core/Series/SeriesDefaults.js"],
            i["Core/Series/SeriesRegistry.js"],
            i["Core/Renderer/SVG/SVGElement.js"],
            i["Core/Utilities.js"],
          ],
          function (t, e, i, n, o, r, s, a, h, l, c) {
            var d = t.animObject,
              p = t.setAnimation,
              u = e.defaultOptions,
              f = i.registerEventOptions,
              g = n.hasTouch,
              m = n.svg,
              y = n.win,
              v = h.seriesTypes,
              x = c.addEvent,
              b = c.arrayMax,
              C = c.arrayMin,
              w = c.clamp,
              S = c.cleanRecursively,
              A = c.correctFloat,
              k = c.defined,
              T = c.erase,
              M = c.error,
              P = c.extend,
              E = c.find,
              L = c.fireEvent,
              O = c.getNestedProperty,
              D = c.isArray,
              j = c.isNumber,
              B = c.isString,
              I = c.merge,
              N = c.objectEach,
              R = c.pick,
              F = c.removeEvent,
              H = c.splat,
              G = c.syncTimeout;
            t = (function () {
              function t() {
                this.zones =
                  this.yAxis =
                  this.xAxis =
                  this.userOptions =
                  this.tooltipOptions =
                  this.processedYData =
                  this.processedXData =
                  this.points =
                  this.options =
                  this.linkedSeries =
                  this.index =
                  this.eventsToUnbind =
                  this.eventOptions =
                  this.data =
                  this.chart =
                  this._i =
                    void 0;
              }
              t.prototype.init = function (t, e) {
                L(this, "init", { options: e });
                var i = this,
                  n = t.series;
                this.eventsToUnbind = [];
                i.chart = t;
                i.options = i.setOptions(e);
                e = i.options;
                i.linkedSeries = [];
                i.bindAxes();
                P(i, {
                  name: e.name,
                  state: "",
                  visible: !1 !== e.visible,
                  selected: !0 === e.selected,
                });
                f(this, e);
                var o = e.events;
                if (
                  (o && o.click) ||
                  (e.point && e.point.events && e.point.events.click) ||
                  e.allowPointSelect
                )
                  t.runTrackerClick = !0;
                i.getColor();
                i.getSymbol();
                i.parallelArrays.forEach(function (t) {
                  i[t + "Data"] || (i[t + "Data"] = []);
                });
                i.isCartesian && (t.hasCartesianSeries = !0);
                var r;
                n.length && (r = n[n.length - 1]);
                i._i = R(r && r._i, -1) + 1;
                i.opacity = i.options.opacity;
                t.orderSeries(this.insert(n));
                e.dataSorting && e.dataSorting.enabled
                  ? i.setDataSortingOptions()
                  : i.points || i.data || i.setData(e.data, !1);
                L(this, "afterInit");
              };
              t.prototype.is = function (t) {
                return v[t] && this instanceof v[t];
              };
              t.prototype.insert = function (t) {
                var e = this.options.index,
                  i;
                if (j(e)) {
                  for (i = t.length; i--; )
                    if (e >= R(t[i].options.index, t[i]._i)) {
                      t.splice(i + 1, 0, this);
                      break;
                    }
                  -1 === i && t.unshift(this);
                  i += 1;
                } else t.push(this);
                return R(i, t.length - 1);
              };
              t.prototype.bindAxes = function () {
                var t = this,
                  e = t.options,
                  i = t.chart,
                  n;
                L(this, "bindAxes", null, function () {
                  (t.axisTypes || []).forEach(function (o) {
                    var r = 0;
                    i[o].forEach(function (i) {
                      n = i.options;
                      if (
                        (e[o] === r && !n.isInternal) ||
                        ("undefined" !== typeof e[o] && e[o] === n.id) ||
                        ("undefined" === typeof e[o] && 0 === n.index)
                      )
                        t.insert(i.series), (t[o] = i), (i.isDirty = !0);
                      n.isInternal || r++;
                    });
                    t[o] || t.optionalAxis === o || M(18, !0, i);
                  });
                });
                L(this, "afterBindAxes");
              };
              t.prototype.updateParallelArrays = function (t, e) {
                var i = t.series,
                  n = arguments,
                  o = j(e)
                    ? function (n) {
                        var o = "y" === n && i.toYData ? i.toYData(t) : t[n];
                        i[n + "Data"][e] = o;
                      }
                    : function (t) {
                        Array.prototype[e].apply(
                          i[t + "Data"],
                          Array.prototype.slice.call(n, 2)
                        );
                      };
                i.parallelArrays.forEach(o);
              };
              t.prototype.hasData = function () {
                return (
                  (this.visible &&
                    "undefined" !== typeof this.dataMax &&
                    "undefined" !== typeof this.dataMin) ||
                  (this.visible && this.yData && 0 < this.yData.length)
                );
              };
              t.prototype.autoIncrement = function (t) {
                var e = this.options,
                  i = e.pointIntervalUnit,
                  n = e.relativeXValue,
                  o = this.chart.time,
                  r = this.xIncrement,
                  s;
                r = R(r, e.pointStart, 0);
                this.pointInterval = s = R(
                  this.pointInterval,
                  e.pointInterval,
                  1
                );
                n && j(t) && (s *= t);
                i &&
                  ((e = new o.Date(r)),
                  "day" === i
                    ? o.set("Date", e, o.get("Date", e) + s)
                    : "month" === i
                    ? o.set("Month", e, o.get("Month", e) + s)
                    : "year" === i &&
                      o.set("FullYear", e, o.get("FullYear", e) + s),
                  (s = e.getTime() - r));
                if (n && j(t)) return r + s;
                this.xIncrement = r + s;
                return r;
              };
              t.prototype.setDataSortingOptions = function () {
                var t = this.options;
                P(this, {
                  requireSorting: !1,
                  sorted: !1,
                  enabledDataSorting: !0,
                  allowDG: !1,
                });
                k(t.pointRange) || (t.pointRange = 1);
              };
              t.prototype.setOptions = function (t) {
                var e = this.chart,
                  i = e.options,
                  n = i.plotOptions,
                  o = e.userOptions || {};
                t = I(t);
                e = e.styledMode;
                var r = { plotOptions: n, userOptions: t };
                L(this, "setOptions", r);
                var s = r.plotOptions[this.type],
                  a = o.plotOptions || {};
                this.userOptions = r.userOptions;
                o = I(
                  s,
                  n.series,
                  o.plotOptions && o.plotOptions[this.type],
                  t
                );
                this.tooltipOptions = I(
                  u.tooltip,
                  u.plotOptions.series && u.plotOptions.series.tooltip,
                  u.plotOptions[this.type].tooltip,
                  i.tooltip.userOptions,
                  n.series && n.series.tooltip,
                  n[this.type].tooltip,
                  t.tooltip
                );
                this.stickyTracking = R(
                  t.stickyTracking,
                  a[this.type] && a[this.type].stickyTracking,
                  a.series && a.series.stickyTracking,
                  this.tooltipOptions.shared && !this.noSharedTooltip
                    ? !0
                    : o.stickyTracking
                );
                null === s.marker && delete o.marker;
                this.zoneAxis = o.zoneAxis;
                n = this.zones = (o.zones || []).slice();
                (!o.negativeColor && !o.negativeFillColor) ||
                  o.zones ||
                  ((i = {
                    value: o[this.zoneAxis + "Threshold"] || o.threshold || 0,
                    className: "highcharts-negative",
                  }),
                  e ||
                    ((i.color = o.negativeColor),
                    (i.fillColor = o.negativeFillColor)),
                  n.push(i));
                n.length &&
                  k(n[n.length - 1].value) &&
                  n.push(
                    e ? {} : { color: this.color, fillColor: this.fillColor }
                  );
                L(this, "afterSetOptions", { options: o });
                return o;
              };
              t.prototype.getName = function () {
                return R(this.options.name, "Series " + (this.index + 1));
              };
              t.prototype.getCyclic = function (t, e, i) {
                var n = this.chart,
                  o = this.userOptions,
                  r = t + "Index",
                  s = t + "Counter",
                  a = i
                    ? i.length
                    : R(n.options.chart[t + "Count"], n[t + "Count"]);
                if (!e) {
                  var h = R(o[r], o["_" + r]);
                  k(h) ||
                    (n.series.length || (n[s] = 0),
                    (o["_" + r] = h = n[s] % a),
                    (n[s] += 1));
                  i && (e = i[h]);
                }
                "undefined" !== typeof h && (this[r] = h);
                this[t] = e;
              };
              t.prototype.getColor = function () {
                this.chart.styledMode
                  ? this.getCyclic("color")
                  : this.options.colorByPoint
                  ? (this.color = r.neutralColor20)
                  : this.getCyclic(
                      "color",
                      this.options.color || u.plotOptions[this.type].color,
                      this.chart.options.colors
                    );
              };
              t.prototype.getPointsCollection = function () {
                return (this.hasGroupedData ? this.points : this.data) || [];
              };
              t.prototype.getSymbol = function () {
                this.getCyclic(
                  "symbol",
                  this.options.marker.symbol,
                  this.chart.options.symbols
                );
              };
              t.prototype.findPointIndex = function (t, e) {
                var i = t.id,
                  n = t.x,
                  o = this.points,
                  r = this.options.dataSorting,
                  a,
                  h;
                if (i) (r = this.chart.get(i)), r instanceof s && (a = r);
                else if (
                  this.linkedParent ||
                  this.enabledDataSorting ||
                  this.options.relativeXValue
                )
                  if (
                    ((a = function (e) {
                      return !e.touched && e.index === t.index;
                    }),
                    r && r.matchByName
                      ? (a = function (e) {
                          return !e.touched && e.name === t.name;
                        })
                      : this.options.relativeXValue &&
                        (a = function (e) {
                          return !e.touched && e.options.x === t.x;
                        }),
                    (a = E(o, a)),
                    !a)
                  )
                    return;
                if (a) {
                  var l = a && a.index;
                  "undefined" !== typeof l && (h = !0);
                }
                "undefined" === typeof l &&
                  j(n) &&
                  (l = this.xData.indexOf(n, e));
                -1 !== l &&
                  "undefined" !== typeof l &&
                  this.cropped &&
                  (l = l >= this.cropStart ? l - this.cropStart : l);
                !h && j(l) && o[l] && o[l].touched && (l = void 0);
                return l;
              };
              t.prototype.updateData = function (t, e) {
                var i = this.options,
                  n = i.dataSorting,
                  o = this.points,
                  r = [],
                  s = this.requireSorting,
                  a = t.length === o.length,
                  h,
                  l,
                  c,
                  d = !0;
                this.xIncrement = null;
                t.forEach(function (t, e) {
                  var l =
                      (k(t) &&
                        this.pointClass.prototype.optionsToObject.call(
                          { series: this },
                          t
                        )) ||
                      {},
                    d = l.x;
                  if (l.id || j(d)) {
                    if (
                      ((l = this.findPointIndex(l, c)),
                      -1 === l || "undefined" === typeof l
                        ? r.push(t)
                        : o[l] && t !== i.data[l]
                        ? (o[l].update(t, !1, null, !1),
                          (o[l].touched = !0),
                          s && (c = l + 1))
                        : o[l] && (o[l].touched = !0),
                      !a || e !== l || (n && n.enabled) || this.hasDerivedData)
                    )
                      h = !0;
                  } else r.push(t);
                }, this);
                if (h)
                  for (t = o.length; t--; )
                    (l = o[t]) && !l.touched && l.remove && l.remove(!1, e);
                else
                  !a || (n && n.enabled)
                    ? (d = !1)
                    : (t.forEach(function (t, e) {
                        t !== o[e].y &&
                          o[e].update &&
                          o[e].update(t, !1, null, !1);
                      }),
                      (r.length = 0));
                o.forEach(function (t) {
                  t && (t.touched = !1);
                });
                if (!d) return !1;
                r.forEach(function (t) {
                  this.addPoint(t, !1, null, null, !1);
                }, this);
                null === this.xIncrement &&
                  this.xData &&
                  this.xData.length &&
                  ((this.xIncrement = b(this.xData)), this.autoIncrement());
                return !0;
              };
              t.prototype.setData = function (t, e, i, n) {
                var o = this,
                  r = o.points,
                  s = (r && r.length) || 0,
                  a = o.options,
                  h = o.chart,
                  l = a.dataSorting,
                  c = o.xAxis,
                  d = a.turboThreshold,
                  p = this.xData,
                  u = this.yData,
                  f = o.pointArrayMap;
                f = f && f.length;
                var g = a.keys,
                  m,
                  y = 0,
                  v = 1,
                  x = null;
                t = t || [];
                var b = t.length;
                e = R(e, !0);
                l && l.enabled && (t = this.sortData(t));
                !1 !== n &&
                  b &&
                  s &&
                  !o.cropped &&
                  !o.hasGroupedData &&
                  o.visible &&
                  !o.isSeriesBoosting &&
                  (m = this.updateData(t, i));
                if (!m) {
                  o.xIncrement = null;
                  o.colorCounter = 0;
                  this.parallelArrays.forEach(function (t) {
                    o[t + "Data"].length = 0;
                  });
                  if (d && b > d)
                    if (((x = o.getFirstValidPoint(t)), j(x)))
                      for (i = 0; i < b; i++)
                        (p[i] = this.autoIncrement()), (u[i] = t[i]);
                    else if (D(x))
                      if (f)
                        for (i = 0; i < b; i++)
                          (n = t[i]), (p[i] = n[0]), (u[i] = n.slice(1, f + 1));
                      else
                        for (
                          g &&
                            ((y = g.indexOf("x")),
                            (v = g.indexOf("y")),
                            (y = 0 <= y ? y : 0),
                            (v = 0 <= v ? v : 1)),
                            i = 0;
                          i < b;
                          i++
                        )
                          (n = t[i]), (p[i] = n[y]), (u[i] = n[v]);
                    else M(12, !1, h);
                  else
                    for (i = 0; i < b; i++)
                      "undefined" !== typeof t[i] &&
                        ((n = { series: o }),
                        o.pointClass.prototype.applyOptions.apply(n, [t[i]]),
                        o.updateParallelArrays(n, i));
                  u && B(u[0]) && M(14, !0, h);
                  o.data = [];
                  o.options.data = o.userOptions.data = t;
                  for (i = s; i--; ) r[i] && r[i].destroy && r[i].destroy();
                  c && (c.minRange = c.userMinRange);
                  o.isDirty = h.isDirtyBox = !0;
                  o.isDirtyData = !!r;
                  i = !1;
                }
                "point" === a.legendType &&
                  (this.processData(), this.generatePoints());
                e && h.redraw(i);
              };
              t.prototype.sortData = function (t) {
                var e = this,
                  i = e.options.dataSorting.sortKey || "y",
                  n = function (t, e) {
                    return (
                      (k(e) &&
                        t.pointClass.prototype.optionsToObject.call(
                          { series: t },
                          e
                        )) ||
                      {}
                    );
                  };
                t.forEach(function (i, o) {
                  t[o] = n(e, i);
                  t[o].index = o;
                }, this);
                t.concat()
                  .sort(function (t, e) {
                    t = O(i, t);
                    e = O(i, e);
                    return e < t ? -1 : e > t ? 1 : 0;
                  })
                  .forEach(function (t, e) {
                    t.x = e;
                  }, this);
                e.linkedSeries &&
                  e.linkedSeries.forEach(function (e) {
                    var i = e.options,
                      o = i.data;
                    (i.dataSorting && i.dataSorting.enabled) ||
                      !o ||
                      (o.forEach(function (i, r) {
                        o[r] = n(e, i);
                        t[r] && ((o[r].x = t[r].x), (o[r].index = r));
                      }),
                      e.setData(o, !1));
                  });
                return t;
              };
              t.prototype.getProcessedData = function (t) {
                var e = this.xAxis,
                  i = this.options,
                  n = i.cropThreshold,
                  o = t || this.getExtremesFromAll || i.getExtremesFromAll,
                  r = this.isCartesian;
                t = e && e.val2lin;
                i = !(!e || !e.logarithmic);
                var s = 0,
                  a = this.xData,
                  h = this.yData,
                  l = this.requireSorting;
                var c = !1;
                var d = a.length;
                if (e) {
                  c = e.getExtremes();
                  var p = c.min;
                  var u = c.max;
                  c = e.categories && !e.names.length;
                }
                if (r && this.sorted && !o && (!n || d > n || this.forceCrop))
                  if (a[d - 1] < p || a[0] > u) (a = []), (h = []);
                  else if (this.yData && (a[0] < p || a[d - 1] > u)) {
                    var f = this.cropData(this.xData, this.yData, p, u);
                    a = f.xData;
                    h = f.yData;
                    s = f.start;
                    f = !0;
                  }
                for (n = a.length || 1; --n; )
                  if (
                    ((e = i ? t(a[n]) - t(a[n - 1]) : a[n] - a[n - 1]),
                    0 < e && ("undefined" === typeof g || e < g))
                  )
                    var g = e;
                  else 0 > e && l && !c && (M(15, !1, this.chart), (l = !1));
                return {
                  xData: a,
                  yData: h,
                  cropped: f,
                  cropStart: s,
                  closestPointRange: g,
                };
              };
              t.prototype.processData = function (t) {
                var e = this.xAxis;
                if (
                  this.isCartesian &&
                  !this.isDirty &&
                  !e.isDirty &&
                  !this.yAxis.isDirty &&
                  !t
                )
                  return !1;
                t = this.getProcessedData();
                this.cropped = t.cropped;
                this.cropStart = t.cropStart;
                this.processedXData = t.xData;
                this.processedYData = t.yData;
                this.closestPointRange = this.basePointRange =
                  t.closestPointRange;
              };
              t.prototype.cropData = function (t, e, i, n, o) {
                var r = t.length,
                  s,
                  a = 0,
                  h = r;
                o = R(o, this.cropShoulder);
                for (s = 0; s < r; s++)
                  if (t[s] >= i) {
                    a = Math.max(0, s - o);
                    break;
                  }
                for (i = s; i < r; i++)
                  if (t[i] > n) {
                    h = i + o;
                    break;
                  }
                return {
                  xData: t.slice(a, h),
                  yData: e.slice(a, h),
                  start: a,
                  end: h,
                };
              };
              t.prototype.generatePoints = function () {
                var t = this.options,
                  e = t.data,
                  i = this.processedXData,
                  n = this.processedYData,
                  o = this.pointClass,
                  r = i.length,
                  s = this.cropStart || 0,
                  a = this.hasGroupedData,
                  h = t.keys,
                  l = [];
                t = t.dataGrouping && t.dataGrouping.groupAll ? s : 0;
                var c,
                  d,
                  p = this.data;
                if (!p && !a) {
                  var u = [];
                  u.length = e.length;
                  p = this.data = u;
                }
                h && a && (this.options.keys = !1);
                for (d = 0; d < r; d++) {
                  u = s + d;
                  if (a) {
                    var f = new o().init(this, [i[d]].concat(H(n[d])));
                    f.dataGroup = this.groupMap[t + d];
                    f.dataGroup.options &&
                      ((f.options = f.dataGroup.options),
                      P(f, f.dataGroup.options),
                      delete f.dataLabels);
                  } else
                    (f = p[u]) ||
                      "undefined" === typeof e[u] ||
                      (p[u] = f = new o().init(this, e[u], i[d]));
                  f && ((f.index = a ? t + d : u), (l[d] = f));
                }
                this.options.keys = h;
                if (p && (r !== (c = p.length) || a))
                  for (d = 0; d < c; d++)
                    d !== s || a || (d += r),
                      p[d] && (p[d].destroyElements(), (p[d].plotX = void 0));
                this.data = p;
                this.points = l;
                L(this, "afterGeneratePoints");
              };
              t.prototype.getXExtremes = function (t) {
                return { min: C(t), max: b(t) };
              };
              t.prototype.getExtremes = function (t, e) {
                var i = this.xAxis,
                  n = this.yAxis,
                  o = this.processedXData || this.xData,
                  r = [],
                  s = this.requireSorting ? this.cropShoulder : 0;
                n = n ? n.positiveValuesOnly : !1;
                var a,
                  h = 0,
                  l = 0,
                  c = 0;
                t = t || this.stackedYData || this.processedYData || [];
                var d = t.length;
                if (i) {
                  var p = i.getExtremes();
                  h = p.min;
                  l = p.max;
                }
                for (a = 0; a < d; a++) {
                  var u = o[a];
                  p = t[a];
                  var f = (j(p) || D(p)) && (p.length || 0 < p || !n);
                  u =
                    e ||
                    this.getExtremesFromAll ||
                    this.options.getExtremesFromAll ||
                    this.cropped ||
                    !i ||
                    ((o[a + s] || u) >= h && (o[a - s] || u) <= l);
                  if (f && u)
                    if ((f = p.length))
                      for (; f--; ) j(p[f]) && (r[c++] = p[f]);
                    else r[c++] = p;
                }
                t = { dataMin: C(r), dataMax: b(r) };
                L(this, "afterGetExtremes", { dataExtremes: t });
                return t;
              };
              t.prototype.applyExtremes = function () {
                var t = this.getExtremes();
                this.dataMin = t.dataMin;
                this.dataMax = t.dataMax;
                return t;
              };
              t.prototype.getFirstValidPoint = function (t) {
                for (var e = t.length, i = 0, n = null; null === n && i < e; )
                  (n = t[i]), i++;
                return n;
              };
              t.prototype.translate = function () {
                this.processedXData || this.processData();
                this.generatePoints();
                var t = this.options,
                  e = t.stacking,
                  i = this.xAxis,
                  n = i.categories,
                  o = this.enabledDataSorting,
                  r = this.yAxis,
                  s = this.points,
                  a = s.length,
                  h = !!this.modifyValue,
                  l = this.pointPlacementToXValue(),
                  c = !!l,
                  d = t.threshold,
                  p = t.startFromThreshold ? d : 0,
                  u = this.zoneAxis || "y",
                  f,
                  g,
                  m = Number.MAX_VALUE;
                for (f = 0; f < a; f++) {
                  var y = s[f],
                    v = y.x,
                    x = void 0,
                    b = void 0,
                    C = y.y,
                    S = y.low,
                    T =
                      e &&
                      r.stacking &&
                      r.stacking.stacks[
                        (this.negStacks && C < (p ? 0 : d) ? "-" : "") +
                          this.stackKey
                      ];
                  if (
                    (r.positiveValuesOnly && !r.validatePositiveValue(C)) ||
                    (i.positiveValuesOnly && !i.validatePositiveValue(v))
                  )
                    y.isNull = !0;
                  y.plotX = g = A(
                    w(
                      i.translate(v, 0, 0, 0, 1, l, "flags" === this.type),
                      -1e5,
                      1e5
                    )
                  );
                  if (e && this.visible && T && T[v]) {
                    var M = this.getStackIndicator(M, v, this.index);
                    y.isNull || ((x = T[v]), (b = x.points[M.key]));
                  }
                  D(b) &&
                    ((S = b[0]),
                    (C = b[1]),
                    S === p && M.key === T[v].base && (S = R(j(d) && d, r.min)),
                    r.positiveValuesOnly && 0 >= S && (S = null),
                    (y.total = y.stackTotal = x.total),
                    (y.percentage = x.total && (y.y / x.total) * 100),
                    (y.stackY = C),
                    this.irregularWidths ||
                      x.setOffset(this.pointXOffset || 0, this.barW || 0));
                  y.yBottom = k(S)
                    ? w(r.translate(S, 0, 1, 0, 1), -1e5, 1e5)
                    : null;
                  h && (C = this.modifyValue(C, y));
                  y.plotY = void 0;
                  j(C) &&
                    ((x = r.translate(C, !1, !0, !1, !0)),
                    "undefined" !== typeof x && (y.plotY = w(x, -1e5, 1e5)));
                  y.isInside = this.isPointInside(y);
                  y.clientX = c ? A(i.translate(v, 0, 0, 0, 1, l)) : g;
                  y.negative = y[u] < (t[u + "Threshold"] || d || 0);
                  y.category =
                    n && "undefined" !== typeof n[y.x] ? n[y.x] : y.x;
                  if (!y.isNull && !1 !== y.visible) {
                    "undefined" !== typeof P &&
                      (m = Math.min(m, Math.abs(g - P)));
                    var P = g;
                  }
                  y.zone = this.zones.length && y.getZone();
                  !y.graphic && this.group && o && (y.isNew = !0);
                }
                this.closestPointRangePx = m;
                L(this, "afterTranslate");
              };
              t.prototype.getValidPoints = function (t, e, i) {
                var n = this.chart;
                return (t || this.points || []).filter(function (t) {
                  return e &&
                    !n.isInsidePlot(t.plotX, t.plotY, { inverted: n.inverted })
                    ? !1
                    : !1 !== t.visible && (i || !t.isNull);
                });
              };
              t.prototype.getClipBox = function (t, e) {
                var i = this.options,
                  n = this.chart,
                  o = n.inverted,
                  r = this.xAxis,
                  s = r && this.yAxis,
                  a = n.options.chart.scrollablePlotArea || {};
                t && !1 === i.clip && s
                  ? (t = o
                      ? {
                          y: -n.chartWidth + s.len + s.pos,
                          height: n.chartWidth,
                          width: n.chartHeight,
                          x: -n.chartHeight + r.len + r.pos,
                        }
                      : {
                          y: -s.pos,
                          height: n.chartHeight,
                          width: n.chartWidth,
                          x: -r.pos,
                        })
                  : ((t = this.clipBox || n.clipBox),
                    e &&
                      ((t.width = n.plotSizeX),
                      (t.x =
                        (n.scrollablePixelsX || 0) *
                        (a.scrollPositionX || 0))));
                return e ? { width: t.width, x: t.x } : t;
              };
              t.prototype.getSharedClipKey = function (t) {
                if (this.sharedClipKey) return this.sharedClipKey;
                var e = [
                  t && t.duration,
                  t && t.easing,
                  t && t.defer,
                  this.getClipBox(t).height,
                  this.options.xAxis,
                  this.options.yAxis,
                ].join();
                if (!1 !== this.options.clip || t) this.sharedClipKey = e;
                return e;
              };
              t.prototype.setClip = function (t) {
                var e = this.chart,
                  i = this.options,
                  n = e.renderer,
                  o = e.inverted,
                  r = this.clipBox,
                  s = this.getClipBox(t),
                  a = this.getSharedClipKey(t),
                  h = e.sharedClips[a],
                  l = e.sharedClips[a + "m"];
                t &&
                  ((s.width = 0),
                  o && (s.x = e.plotHeight + (!1 !== i.clip ? 0 : e.plotTop)));
                h
                  ? e.hasLoaded || h.attr(s)
                  : (t &&
                      (e.sharedClips[a + "m"] = l =
                        n.clipRect(
                          o ? (e.plotSizeX || 0) + 99 : -99,
                          o ? -e.plotLeft : -e.plotTop,
                          99,
                          o ? e.chartWidth : e.chartHeight
                        )),
                    (e.sharedClips[a] = h = n.clipRect(s)),
                    (h.count = { length: 0 }));
                t &&
                  !h.count[this.index] &&
                  ((h.count[this.index] = !0), (h.count.length += 1));
                if (!1 !== i.clip || t)
                  this.group.clip(t || r ? h : e.clipRect),
                    this.markerGroup.clip(l);
                t ||
                  (h.count[this.index] &&
                    (delete h.count[this.index], --h.count.length),
                  0 === h.count.length &&
                    (r || (e.sharedClips[a] = h.destroy()),
                    l && (e.sharedClips[a + "m"] = l.destroy())));
              };
              t.prototype.animate = function (t) {
                var e = this.chart,
                  i = d(this.options.animation),
                  n = this.sharedClipKey;
                if (t) this.setClip(i);
                else if (n) {
                  t = e.sharedClips[n];
                  n = e.sharedClips[n + "m"];
                  var o = this.getClipBox(i, !0);
                  t && t.animate(o, i);
                  n &&
                    n.animate(
                      { width: o.width + 99, x: o.x - (e.inverted ? 0 : 99) },
                      i
                    );
                }
              };
              t.prototype.afterAnimate = function () {
                this.setClip();
                L(this, "afterAnimate");
                this.finishedAnimating = !0;
              };
              t.prototype.drawPoints = function () {
                var t = this.points,
                  e = this.chart,
                  i = this.options.marker,
                  n = this[this.specialGroup] || this.markerGroup,
                  o = this.xAxis,
                  r = R(
                    i.enabled,
                    !o || o.isRadial ? !0 : null,
                    this.closestPointRangePx >= i.enabledThreshold * i.radius
                  ),
                  s,
                  a;
                if (!1 !== i.enabled || this._hasPointMarkers)
                  for (s = 0; s < t.length; s++) {
                    var h = t[s];
                    var l = (a = h.graphic) ? "animate" : "attr";
                    var c = h.marker || {};
                    var d = !!h.marker;
                    if (
                      ((r && "undefined" === typeof c.enabled) || c.enabled) &&
                      !h.isNull &&
                      !1 !== h.visible
                    ) {
                      var p = R(c.symbol, this.symbol, "rect");
                      var u = this.markerAttribs(h, h.selected && "select");
                      this.enabledDataSorting &&
                        (h.startXPos = o.reversed ? -(u.width || 0) : o.width);
                      var f = !1 !== h.isInside;
                      a
                        ? a[f ? "show" : "hide"](f).animate(u)
                        : f &&
                          (0 < (u.width || 0) || h.hasImage) &&
                          ((h.graphic = a =
                            e.renderer
                              .symbol(p, u.x, u.y, u.width, u.height, d ? c : i)
                              .add(n)),
                          this.enabledDataSorting &&
                            e.hasRendered &&
                            (a.attr({ x: h.startXPos }), (l = "animate")));
                      a &&
                        "animate" === l &&
                        a[f ? "show" : "hide"](f).animate(u);
                      if (a && !e.styledMode)
                        a[l](this.pointAttribs(h, h.selected && "select"));
                      a && a.addClass(h.getClassName(), !0);
                    } else a && (h.graphic = a.destroy());
                  }
              };
              t.prototype.markerAttribs = function (t, e) {
                var i = this.options,
                  n = i.marker,
                  o = t.marker || {},
                  r = o.symbol || n.symbol,
                  s = R(o.radius, n.radius);
                e &&
                  ((n = n.states[e]),
                  (e = o.states && o.states[e]),
                  (s = R(
                    e && e.radius,
                    n && n.radius,
                    s + ((n && n.radiusPlus) || 0)
                  )));
                t.hasImage = r && 0 === r.indexOf("url");
                t.hasImage && (s = 0);
                t = {
                  x: i.crisp ? Math.floor(t.plotX - s) : t.plotX - s,
                  y: t.plotY - s,
                };
                s && (t.width = t.height = 2 * s);
                return t;
              };
              t.prototype.pointAttribs = function (t, e) {
                var i = this.options.marker,
                  n = t && t.options,
                  o = (n && n.marker) || {},
                  r = n && n.color,
                  s = t && t.color,
                  a = t && t.zone && t.zone.color,
                  h = this.color;
                t = R(o.lineWidth, i.lineWidth);
                n = 1;
                h = r || a || s || h;
                r = o.fillColor || i.fillColor || h;
                s = o.lineColor || i.lineColor || h;
                e = e || "normal";
                i = i.states[e];
                e = (o.states && o.states[e]) || {};
                t = R(
                  e.lineWidth,
                  i.lineWidth,
                  t + R(e.lineWidthPlus, i.lineWidthPlus, 0)
                );
                r = e.fillColor || i.fillColor || r;
                s = e.lineColor || i.lineColor || s;
                n = R(e.opacity, i.opacity, n);
                return { stroke: s, "stroke-width": t, fill: r, opacity: n };
              };
              t.prototype.destroy = function (t) {
                var e = this,
                  i = e.chart,
                  n = /AppleWebKit\/533/.test(y.navigator.userAgent),
                  o = e.data || [],
                  r,
                  s,
                  a,
                  h;
                L(e, "destroy");
                this.removeEvents(t);
                (e.axisTypes || []).forEach(function (t) {
                  (h = e[t]) &&
                    h.series &&
                    (T(h.series, e), (h.isDirty = h.forceRedraw = !0));
                });
                e.legendItem && e.chart.legend.destroyItem(e);
                for (s = o.length; s--; )
                  (a = o[s]) && a.destroy && a.destroy();
                e.clips &&
                  e.clips.forEach(function (t) {
                    return t.destroy();
                  });
                c.clearTimeout(e.animationTimeout);
                N(e, function (t, e) {
                  t instanceof l &&
                    !t.survive &&
                    ((r = n && "group" === e ? "hide" : "destroy"), t[r]());
                });
                i.hoverSeries === e && (i.hoverSeries = void 0);
                T(i.series, e);
                i.orderSeries();
                N(e, function (i, n) {
                  (t && "hcEvents" === n) || delete e[n];
                });
              };
              t.prototype.applyZones = function () {
                var t = this,
                  e = this.chart,
                  i = e.renderer,
                  n = this.zones,
                  o = this.clips || [],
                  r = this.graph,
                  s = this.area,
                  a = Math.max(e.chartWidth, e.chartHeight),
                  h = this[(this.zoneAxis || "y") + "Axis"],
                  l = e.inverted,
                  c,
                  d,
                  p,
                  u,
                  f,
                  g,
                  m,
                  y,
                  v = !1;
                if (n.length && (r || s) && h && "undefined" !== typeof h.min) {
                  var x = h.reversed;
                  var b = h.horiz;
                  r && !this.showLine && r.hide();
                  s && s.hide();
                  var C = h.getExtremes();
                  n.forEach(function (n, S) {
                    c = x
                      ? b
                        ? e.plotWidth
                        : 0
                      : b
                      ? 0
                      : h.toPixels(C.min) || 0;
                    c = w(R(d, c), 0, a);
                    d = w(
                      Math.round(h.toPixels(R(n.value, C.max), !0) || 0),
                      0,
                      a
                    );
                    v && (c = d = h.toPixels(C.max));
                    u = Math.abs(c - d);
                    f = Math.min(c, d);
                    g = Math.max(c, d);
                    h.isXAxis
                      ? ((p = { x: l ? g : f, y: 0, width: u, height: a }),
                        b || (p.x = e.plotHeight - p.x))
                      : ((p = { x: 0, y: l ? g : f, width: a, height: u }),
                        b && (p.y = e.plotWidth - p.y));
                    l &&
                      i.isVML &&
                      (p = h.isXAxis
                        ? {
                            x: 0,
                            y: x ? f : g,
                            height: p.width,
                            width: e.chartWidth,
                          }
                        : {
                            x: p.y - e.plotLeft - e.spacingBox.x,
                            y: 0,
                            width: p.height,
                            height: e.chartHeight,
                          });
                    o[S] ? o[S].animate(p) : (o[S] = i.clipRect(p));
                    m = t["zone-area-" + S];
                    y = t["zone-graph-" + S];
                    r && y && y.clip(o[S]);
                    s && m && m.clip(o[S]);
                    v = n.value > C.max;
                    t.resetZones && 0 === d && (d = void 0);
                  });
                  this.clips = o;
                } else t.visible && (r && r.show(!0), s && s.show(!0));
              };
              t.prototype.invertGroups = function (t) {
                function e() {
                  ["group", "markerGroup"].forEach(function (e) {
                    i[e] &&
                      (n.renderer.isVML &&
                        i[e].attr({ width: i.yAxis.len, height: i.xAxis.len }),
                      (i[e].width = i.yAxis.len),
                      (i[e].height = i.xAxis.len),
                      i[e].invert(i.isRadialSeries ? !1 : t));
                  });
                }
                var i = this,
                  n = i.chart;
                i.xAxis &&
                  (i.eventsToUnbind.push(x(n, "resize", e)),
                  e(),
                  (i.invertGroups = e));
              };
              t.prototype.plotGroup = function (t, e, i, n, o) {
                var r = this[t],
                  s = !r;
                i = { visibility: i, zIndex: n || 0.1 };
                "undefined" === typeof this.opacity ||
                  this.chart.styledMode ||
                  "inactive" === this.state ||
                  (i.opacity = this.opacity);
                s && (this[t] = r = this.chart.renderer.g().add(o));
                r.addClass(
                  "highcharts-" +
                    e +
                    " highcharts-series-" +
                    this.index +
                    " highcharts-" +
                    this.type +
                    "-series " +
                    (k(this.colorIndex)
                      ? "highcharts-color-" + this.colorIndex + " "
                      : "") +
                    (this.options.className || "") +
                    (r.hasClass("highcharts-tracker")
                      ? " highcharts-tracker"
                      : ""),
                  !0
                );
                r.attr(i)[s ? "attr" : "animate"](this.getPlotBox());
                return r;
              };
              t.prototype.getPlotBox = function () {
                var t = this.chart,
                  e = this.xAxis,
                  i = this.yAxis;
                t.inverted && ((e = i), (i = this.xAxis));
                return {
                  translateX: e ? e.left : t.plotLeft,
                  translateY: i ? i.top : t.plotTop,
                  scaleX: 1,
                  scaleY: 1,
                };
              };
              t.prototype.removeEvents = function (t) {
                t || F(this);
                this.eventsToUnbind.length &&
                  (this.eventsToUnbind.forEach(function (t) {
                    t();
                  }),
                  (this.eventsToUnbind.length = 0));
              };
              t.prototype.render = function () {
                var t = this,
                  e = t.chart,
                  i = t.options,
                  n = d(i.animation),
                  o = t.visible ? "inherit" : "hidden",
                  r = i.zIndex,
                  s = t.hasRendered,
                  a = e.seriesGroup,
                  h = e.inverted,
                  l = !t.finishedAnimating && e.renderer.isSVG && n.duration;
                L(this, "render");
                var c = t.plotGroup("group", "series", o, r, a);
                t.markerGroup = t.plotGroup("markerGroup", "markers", o, r, a);
                l && t.animate && t.animate(!0);
                c.inverted = R(t.invertible, t.isCartesian) ? h : !1;
                t.drawGraph && (t.drawGraph(), t.applyZones());
                t.visible && t.drawPoints();
                t.drawDataLabels && t.drawDataLabels();
                t.redrawPoints && t.redrawPoints();
                t.drawTracker &&
                  !1 !== t.options.enableMouseTracking &&
                  t.drawTracker();
                t.invertGroups(h);
                !1 === i.clip || t.sharedClipKey || s || c.clip(e.clipRect);
                l && t.animate && t.animate();
                s ||
                  (l && n.defer && (l += n.defer),
                  (t.animationTimeout = G(function () {
                    t.afterAnimate();
                  }, l || 0)));
                t.isDirty = !1;
                t.hasRendered = !0;
                L(t, "afterRender");
              };
              t.prototype.redraw = function () {
                var t = this.chart,
                  e = this.isDirty || this.isDirtyData,
                  i = this.group,
                  n = this.xAxis,
                  o = this.yAxis;
                i &&
                  (t.inverted &&
                    i.attr({ width: t.plotWidth, height: t.plotHeight }),
                  i.animate({
                    translateX: R(n && n.left, t.plotLeft),
                    translateY: R(o && o.top, t.plotTop),
                  }));
                this.translate();
                this.render();
                e && delete this.kdTree;
              };
              t.prototype.searchPoint = function (t, e) {
                var i = this.xAxis,
                  n = this.yAxis,
                  o = this.chart.inverted;
                return this.searchKDTree(
                  {
                    clientX: o ? i.len - t.chartY + i.pos : t.chartX - i.pos,
                    plotY: o ? n.len - t.chartX + n.pos : t.chartY - n.pos,
                  },
                  e,
                  t
                );
              };
              t.prototype.buildKDTree = function (t) {
                function e(t, n, o) {
                  var r = t && t.length;
                  if (r) {
                    var s = i.kdAxisArray[n % o];
                    t.sort(function (t, e) {
                      return t[s] - e[s];
                    });
                    r = Math.floor(r / 2);
                    return {
                      point: t[r],
                      left: e(t.slice(0, r), n + 1, o),
                      right: e(t.slice(r + 1), n + 1, o),
                    };
                  }
                }
                this.buildingKdTree = !0;
                var i = this,
                  n = -1 < i.options.findNearestPointBy.indexOf("y") ? 2 : 1;
                delete i.kdTree;
                G(
                  function () {
                    i.kdTree = e(i.getValidPoints(null, !i.directTouch), n, n);
                    i.buildingKdTree = !1;
                  },
                  i.options.kdNow || (t && "touchstart" === t.type) ? 0 : 1
                );
              };
              t.prototype.searchKDTree = function (t, e, i) {
                function n(t, e, i, h) {
                  var l = e.point,
                    c = o.kdAxisArray[i % h],
                    d = l,
                    p = k(t[r]) && k(l[r]) ? Math.pow(t[r] - l[r], 2) : null;
                  var u = k(t[s]) && k(l[s]) ? Math.pow(t[s] - l[s], 2) : null;
                  u = (p || 0) + (u || 0);
                  l.dist = k(u) ? Math.sqrt(u) : Number.MAX_VALUE;
                  l.distX = k(p) ? Math.sqrt(p) : Number.MAX_VALUE;
                  c = t[c] - l[c];
                  u = 0 > c ? "left" : "right";
                  p = 0 > c ? "right" : "left";
                  e[u] &&
                    ((u = n(t, e[u], i + 1, h)), (d = u[a] < d[a] ? u : l));
                  e[p] &&
                    Math.sqrt(c * c) < d[a] &&
                    ((t = n(t, e[p], i + 1, h)), (d = t[a] < d[a] ? t : d));
                  return d;
                }
                var o = this,
                  r = this.kdAxisArray[0],
                  s = this.kdAxisArray[1],
                  a = e ? "distX" : "dist";
                e = -1 < o.options.findNearestPointBy.indexOf("y") ? 2 : 1;
                this.kdTree || this.buildingKdTree || this.buildKDTree(i);
                if (this.kdTree) return n(t, this.kdTree, e, e);
              };
              t.prototype.pointPlacementToXValue = function () {
                var t = this.options,
                  e = t.pointRange,
                  i = this.xAxis;
                t = t.pointPlacement;
                "between" === t && (t = i.reversed ? -0.5 : 0.5);
                return j(t) ? t * (e || i.pointRange) : 0;
              };
              t.prototype.isPointInside = function (t) {
                return (
                  "undefined" !== typeof t.plotY &&
                  "undefined" !== typeof t.plotX &&
                  0 <= t.plotY &&
                  t.plotY <= this.yAxis.len &&
                  0 <= t.plotX &&
                  t.plotX <= this.xAxis.len
                );
              };
              t.prototype.drawTracker = function () {
                var t = this,
                  e = t.options,
                  i = e.trackByArea,
                  n = [].concat(i ? t.areaPath : t.graphPath),
                  o = t.chart,
                  r = o.pointer,
                  s = o.renderer,
                  a = o.options.tooltip.snap,
                  h = t.tracker,
                  l = function (e) {
                    if (o.hoverSeries !== t) t.onMouseOver();
                  },
                  c = "rgba(192,192,192," + (m ? 1e-4 : 0.002) + ")";
                h
                  ? h.attr({ d: n })
                  : t.graph &&
                    ((t.tracker = s
                      .path(n)
                      .attr({
                        visibility: t.visible ? "visible" : "hidden",
                        zIndex: 2,
                      })
                      .addClass(
                        i
                          ? "highcharts-tracker-area"
                          : "highcharts-tracker-line"
                      )
                      .add(t.group)),
                    o.styledMode ||
                      t.tracker.attr({
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        stroke: c,
                        fill: i ? c : "none",
                        "stroke-width": t.graph.strokeWidth() + (i ? 0 : 2 * a),
                      }),
                    [t.tracker, t.markerGroup, t.dataLabelsGroup].forEach(
                      function (t) {
                        if (
                          t &&
                          (t
                            .addClass("highcharts-tracker")
                            .on("mouseover", l)
                            .on("mouseout", function (t) {
                              r.onTrackerMouseOut(t);
                            }),
                          e.cursor &&
                            !o.styledMode &&
                            t.css({ cursor: e.cursor }),
                          g)
                        )
                          t.on("touchstart", l);
                      }
                    ));
                L(this, "afterDrawTracker");
              };
              t.prototype.addPoint = function (t, e, i, n, o) {
                var r = this.options,
                  s = this.data,
                  a = this.chart,
                  h = this.xAxis;
                h = h && h.hasNames && h.names;
                var l = r.data,
                  c = this.xData,
                  d;
                e = R(e, !0);
                var p = { series: this };
                this.pointClass.prototype.applyOptions.apply(p, [t]);
                var u = p.x;
                var f = c.length;
                if (this.requireSorting && u < c[f - 1])
                  for (d = !0; f && c[f - 1] > u; ) f--;
                this.updateParallelArrays(p, "splice", f, 0, 0);
                this.updateParallelArrays(p, f);
                h && p.name && (h[u] = p.name);
                l.splice(f, 0, t);
                d && (this.data.splice(f, 0, null), this.processData());
                "point" === r.legendType && this.generatePoints();
                i &&
                  (s[0] && s[0].remove
                    ? s[0].remove(!1)
                    : (s.shift(),
                      this.updateParallelArrays(p, "shift"),
                      l.shift()));
                !1 !== o && L(this, "addPoint", { point: p });
                this.isDirtyData = this.isDirty = !0;
                e && a.redraw(n);
              };
              t.prototype.removePoint = function (t, e, i) {
                var n = this,
                  o = n.data,
                  r = o[t],
                  s = n.points,
                  a = n.chart,
                  h = function () {
                    s && s.length === o.length && s.splice(t, 1);
                    o.splice(t, 1);
                    n.options.data.splice(t, 1);
                    n.updateParallelArrays(r || { series: n }, "splice", t, 1);
                    r && r.destroy();
                    n.isDirty = !0;
                    n.isDirtyData = !0;
                    e && a.redraw();
                  };
                p(i, a);
                e = R(e, !0);
                r ? r.firePointEvent("remove", null, h) : h();
              };
              t.prototype.remove = function (t, e, i, n) {
                function o() {
                  r.destroy(n);
                  s.isDirtyLegend = s.isDirtyBox = !0;
                  s.linkSeries();
                  R(t, !0) && s.redraw(e);
                }
                var r = this,
                  s = r.chart;
                !1 !== i ? L(r, "remove", null, o) : o();
              };
              t.prototype.update = function (t, e) {
                t = S(t, this.userOptions);
                L(this, "update", { options: t });
                var i = this,
                  n = i.chart,
                  o = i.userOptions,
                  r = i.initialType || i.type,
                  s = n.options.plotOptions,
                  a = v[r].prototype,
                  h = i.finishedAnimating && { animation: !1 },
                  l = {},
                  c,
                  d = ["eventOptions", "navigatorSeries", "baseSeries"],
                  p = t.type || o.type || n.options.chart.type,
                  u = !(
                    this.hasDerivedData ||
                    (p && p !== this.type) ||
                    "undefined" !== typeof t.pointStart ||
                    "undefined" !== typeof t.pointInterval ||
                    "undefined" !== typeof t.relativeXValue ||
                    i.hasOptionChanged("dataGrouping") ||
                    i.hasOptionChanged("pointStart") ||
                    i.hasOptionChanged("pointInterval") ||
                    i.hasOptionChanged("pointIntervalUnit") ||
                    i.hasOptionChanged("keys")
                  );
                p = p || r;
                u &&
                  (d.push(
                    "data",
                    "isDirtyData",
                    "points",
                    "processedXData",
                    "processedYData",
                    "xIncrement",
                    "cropped",
                    "_hasPointMarkers",
                    "_hasPointLabels",
                    "clips",
                    "nodes",
                    "layout",
                    "mapMap",
                    "mapData",
                    "minY",
                    "maxY",
                    "minX",
                    "maxX"
                  ),
                  !1 !== t.visible && d.push("area", "graph"),
                  i.parallelArrays.forEach(function (t) {
                    d.push(t + "Data");
                  }),
                  t.data &&
                    (t.dataSorting && P(i.options.dataSorting, t.dataSorting),
                    this.setData(t.data, !1)));
                t = I(
                  o,
                  h,
                  {
                    index: "undefined" === typeof o.index ? i.index : o.index,
                    pointStart: R(
                      s && s.series && s.series.pointStart,
                      o.pointStart,
                      i.xData[0]
                    ),
                  },
                  !u && { data: i.options.data },
                  t
                );
                u && t.data && (t.data = i.options.data);
                d = [
                  "group",
                  "markerGroup",
                  "dataLabelsGroup",
                  "transformGroup",
                ].concat(d);
                d.forEach(function (t) {
                  d[t] = i[t];
                  delete i[t];
                });
                s = !1;
                if (v[p]) {
                  if (((s = p !== i.type), i.remove(!1, !1, !1, !0), s))
                    if (Object.setPrototypeOf)
                      Object.setPrototypeOf(i, v[p].prototype);
                    else {
                      h =
                        Object.hasOwnProperty.call(i, "hcEvents") && i.hcEvents;
                      for (c in a) i[c] = void 0;
                      P(i, v[p].prototype);
                      h ? (i.hcEvents = h) : delete i.hcEvents;
                    }
                } else M(17, !0, n, { missingModuleFor: p });
                d.forEach(function (t) {
                  i[t] = d[t];
                });
                i.init(n, t);
                if (u && this.points) {
                  var f = i.options;
                  !1 === f.visible
                    ? ((l.graphic = 1), (l.dataLabel = 1))
                    : i._hasPointLabels ||
                      ((t = f.marker),
                      (a = f.dataLabels),
                      !t ||
                        (!1 !== t.enabled &&
                          (o.marker && o.marker.symbol) === t.symbol) ||
                        (l.graphic = 1),
                      a && !1 === a.enabled && (l.dataLabel = 1));
                  this.points.forEach(function (t) {
                    t &&
                      t.series &&
                      (t.resolveColor(),
                      Object.keys(l).length && t.destroyElements(l),
                      !1 === f.showInLegend &&
                        t.legendItem &&
                        n.legend.destroyItem(t));
                  }, this);
                }
                i.initialType = r;
                n.linkSeries();
                s && i.linkedSeries.length && (i.isDirtyData = !0);
                L(this, "afterUpdate");
                R(e, !0) && n.redraw(u ? void 0 : !1);
              };
              t.prototype.setName = function (t) {
                this.name = this.options.name = this.userOptions.name = t;
                this.chart.isDirtyLegend = !0;
              };
              t.prototype.hasOptionChanged = function (t) {
                var e = this.options[t],
                  i = this.chart.options.plotOptions,
                  n = this.userOptions[t];
                return n
                  ? e !== n
                  : e !==
                      R(
                        i && i[this.type] && i[this.type][t],
                        i && i.series && i.series[t],
                        e
                      );
              };
              t.prototype.onMouseOver = function () {
                var t = this.chart,
                  e = t.hoverSeries;
                t.pointer.setHoverChartIndex();
                if (e && e !== this) e.onMouseOut();
                this.options.events.mouseOver && L(this, "mouseOver");
                this.setState("hover");
                t.hoverSeries = this;
              };
              t.prototype.onMouseOut = function () {
                var t = this.options,
                  e = this.chart,
                  i = e.tooltip,
                  n = e.hoverPoint;
                e.hoverSeries = null;
                if (n) n.onMouseOut();
                this && t.events.mouseOut && L(this, "mouseOut");
                !i ||
                  this.stickyTracking ||
                  (i.shared && !this.noSharedTooltip) ||
                  i.hide();
                e.series.forEach(function (t) {
                  t.setState("", !0);
                });
              };
              t.prototype.setState = function (t, e) {
                var i = this,
                  n = i.options,
                  o = i.graph,
                  r = n.inactiveOtherPoints,
                  s = n.states,
                  a = R(
                    s[t || "normal"] && s[t || "normal"].animation,
                    i.chart.options.chart.animation
                  ),
                  h = n.lineWidth,
                  l = 0,
                  c = n.opacity;
                t = t || "";
                if (
                  i.state !== t &&
                  ([i.group, i.markerGroup, i.dataLabelsGroup].forEach(
                    function (e) {
                      e &&
                        (i.state &&
                          e.removeClass("highcharts-series-" + i.state),
                        t && e.addClass("highcharts-series-" + t));
                    }
                  ),
                  (i.state = t),
                  !i.chart.styledMode)
                ) {
                  if (s[t] && !1 === s[t].enabled) return;
                  t &&
                    ((h = s[t].lineWidth || h + (s[t].lineWidthPlus || 0)),
                    (c = R(s[t].opacity, c)));
                  if (o && !o.dashstyle)
                    for (
                      n = { "stroke-width": h }, o.animate(n, a);
                      i["zone-graph-" + l];

                    )
                      i["zone-graph-" + l].animate(n, a), (l += 1);
                  r ||
                    [
                      i.group,
                      i.markerGroup,
                      i.dataLabelsGroup,
                      i.labelBySeries,
                    ].forEach(function (t) {
                      t && t.animate({ opacity: c }, a);
                    });
                }
                e && r && i.points && i.setAllPointsToState(t || void 0);
              };
              t.prototype.setAllPointsToState = function (t) {
                this.points.forEach(function (e) {
                  e.setState && e.setState(t);
                });
              };
              t.prototype.setVisible = function (t, e) {
                var i = this,
                  n = i.chart,
                  o = i.legendItem,
                  r = n.options.chart.ignoreHiddenSeries,
                  s = i.visible,
                  a = (i.visible =
                    t =
                    i.options.visible =
                    i.userOptions.visible =
                      "undefined" === typeof t ? !s : t)
                    ? "show"
                    : "hide";
                [
                  "group",
                  "dataLabelsGroup",
                  "markerGroup",
                  "tracker",
                  "tt",
                ].forEach(function (t) {
                  if (i[t]) i[t][a]();
                });
                if (
                  n.hoverSeries === i ||
                  (n.hoverPoint && n.hoverPoint.series) === i
                )
                  i.onMouseOut();
                o && n.legend.colorizeItem(i, t);
                i.isDirty = !0;
                i.options.stacking &&
                  n.series.forEach(function (t) {
                    t.options.stacking && t.visible && (t.isDirty = !0);
                  });
                i.linkedSeries.forEach(function (e) {
                  e.setVisible(t, !1);
                });
                r && (n.isDirtyBox = !0);
                L(i, a);
                !1 !== e && n.redraw();
              };
              t.prototype.show = function () {
                this.setVisible(!0);
              };
              t.prototype.hide = function () {
                this.setVisible(!1);
              };
              t.prototype.select = function (t) {
                this.selected =
                  t =
                  this.options.selected =
                    "undefined" === typeof t ? !this.selected : t;
                this.checkbox && (this.checkbox.checked = t);
                L(this, t ? "select" : "unselect");
              };
              t.prototype.shouldShowTooltip = function (t, e, i) {
                void 0 === i && (i = {});
                i.series = this;
                i.visiblePlotOnly = !0;
                return this.chart.isInsidePlot(t, e, i);
              };
              t.defaultOptions = a;
              return t;
            })();
            P(t.prototype, {
              axisTypes: ["xAxis", "yAxis"],
              coll: "series",
              colorCounter: 0,
              cropShoulder: 1,
              directTouch: !1,
              drawLegendSymbol: o.drawLineMarker,
              isCartesian: !0,
              kdAxisArray: ["clientX", "plotY"],
              parallelArrays: ["x", "y"],
              pointClass: s,
              requireSorting: !0,
              sorted: !0,
            });
            h.series = t;
            ("");
            ("");
            return t;
          }
        );
        e(
          i,
          "Extensions/ScrollablePlotArea.js",
          [
            i["Core/Animation/AnimationUtilities.js"],
            i["Core/Axis/Axis.js"],
            i["Core/Chart/Chart.js"],
            i["Core/Series/Series.js"],
            i["Core/Renderer/RendererRegistry.js"],
            i["Core/Utilities.js"],
          ],
          function (t, e, i, n, o, r) {
            var s = t.stop,
              a = r.addEvent,
              h = r.createElement,
              l = r.merge,
              c = r.pick;
            a(i, "afterSetChartSize", function (t) {
              var i = this.options.chart.scrollablePlotArea,
                n = i && i.minWidth;
              i = i && i.minHeight;
              if (!this.renderer.forExport) {
                if (n) {
                  if (
                    (this.scrollablePixelsX = n =
                      Math.max(0, n - this.chartWidth))
                  ) {
                    this.scrollablePlotBox = this.renderer.scrollablePlotBox =
                      l(this.plotBox);
                    this.plotBox.width = this.plotWidth += n;
                    this.inverted
                      ? (this.clipBox.height += n)
                      : (this.clipBox.width += n);
                    var o = { 1: { name: "right", value: n } };
                  }
                } else
                  i &&
                    (this.scrollablePixelsY = n =
                      Math.max(0, i - this.chartHeight)) &&
                    ((this.scrollablePlotBox = this.renderer.scrollablePlotBox =
                      l(this.plotBox)),
                    (this.plotBox.height = this.plotHeight += n),
                    this.inverted
                      ? (this.clipBox.width += n)
                      : (this.clipBox.height += n),
                    (o = { 2: { name: "bottom", value: n } }));
                o &&
                  !t.skipAxes &&
                  this.axes.forEach(function (t) {
                    o[t.side]
                      ? (t.getPlotLinePath = function () {
                          var i = o[t.side].name,
                            n = this[i];
                          this[i] = n - o[t.side].value;
                          var r = e.prototype.getPlotLinePath.apply(
                            this,
                            arguments
                          );
                          this[i] = n;
                          return r;
                        })
                      : (t.setAxisSize(), t.setAxisTranslation());
                  });
              }
            });
            a(i, "render", function () {
              this.scrollablePixelsX || this.scrollablePixelsY
                ? (this.setUpScrolling && this.setUpScrolling(),
                  this.applyFixed())
                : this.fixedDiv && this.applyFixed();
            });
            i.prototype.setUpScrolling = function () {
              var t = this,
                e = {
                  WebkitOverflowScrolling: "touch",
                  overflowX: "hidden",
                  overflowY: "hidden",
                };
              this.scrollablePixelsX && (e.overflowX = "auto");
              this.scrollablePixelsY && (e.overflowY = "auto");
              this.scrollingParent = h(
                "div",
                { className: "highcharts-scrolling-parent" },
                { position: "relative" },
                this.renderTo
              );
              this.scrollingContainer = h(
                "div",
                { className: "highcharts-scrolling" },
                e,
                this.scrollingParent
              );
              a(this.scrollingContainer, "scroll", function () {
                t.pointer && delete t.pointer.chartPosition;
              });
              this.innerContainer = h(
                "div",
                { className: "highcharts-inner-container" },
                null,
                this.scrollingContainer
              );
              this.innerContainer.appendChild(this.container);
              this.setUpScrolling = null;
            };
            i.prototype.moveFixedElements = function () {
              var t = this.container,
                e = this.fixedRenderer,
                i =
                  ".highcharts-contextbutton .highcharts-credits .highcharts-legend .highcharts-legend-checkbox .highcharts-navigator-series .highcharts-navigator-xaxis .highcharts-navigator-yaxis .highcharts-navigator .highcharts-reset-zoom .highcharts-drillup-button .highcharts-scrollbar .highcharts-subtitle .highcharts-title".split(
                    " "
                  ),
                n;
              this.scrollablePixelsX && !this.inverted
                ? (n = ".highcharts-yaxis")
                : this.scrollablePixelsX && this.inverted
                ? (n = ".highcharts-xaxis")
                : this.scrollablePixelsY && !this.inverted
                ? (n = ".highcharts-xaxis")
                : this.scrollablePixelsY &&
                  this.inverted &&
                  (n = ".highcharts-yaxis");
              n &&
                i.push(
                  n + ":not(.highcharts-radial-axis)",
                  n + "-labels:not(.highcharts-radial-axis-labels)"
                );
              i.forEach(function (i) {
                [].forEach.call(t.querySelectorAll(i), function (t) {
                  (t.namespaceURI === e.SVG_NS
                    ? e.box
                    : e.box.parentNode
                  ).appendChild(t);
                  t.style.pointerEvents = "auto";
                });
              });
            };
            i.prototype.applyFixed = function () {
              var t = !this.fixedDiv,
                e = this.options.chart,
                i = e.scrollablePlotArea,
                n = o.getRendererType();
              t
                ? ((this.fixedDiv = h(
                    "div",
                    { className: "highcharts-fixed" },
                    {
                      position: "absolute",
                      overflow: "hidden",
                      pointerEvents: "none",
                      zIndex: ((e.style && e.style.zIndex) || 0) + 2,
                      top: 0,
                    },
                    null,
                    !0
                  )),
                  this.scrollingContainer &&
                    this.scrollingContainer.parentNode.insertBefore(
                      this.fixedDiv,
                      this.scrollingContainer
                    ),
                  (this.renderTo.style.overflow = "visible"),
                  (this.fixedRenderer = e =
                    new n(
                      this.fixedDiv,
                      this.chartWidth,
                      this.chartHeight,
                      this.options.chart.style
                    )),
                  (this.scrollableMask = e
                    .path()
                    .attr({
                      fill: this.options.chart.backgroundColor || "#fff",
                      "fill-opacity": c(i.opacity, 0.85),
                      zIndex: -1,
                    })
                    .addClass("highcharts-scrollable-mask")
                    .add()),
                  a(this, "afterShowResetZoom", this.moveFixedElements),
                  a(this, "afterDrilldown", this.moveFixedElements),
                  a(this, "afterLayOutTitles", this.moveFixedElements))
                : this.fixedRenderer.setSize(this.chartWidth, this.chartHeight);
              if (this.scrollableDirty || t)
                (this.scrollableDirty = !1), this.moveFixedElements();
              e = this.chartWidth + (this.scrollablePixelsX || 0);
              n = this.chartHeight + (this.scrollablePixelsY || 0);
              s(this.container);
              this.container.style.width = e + "px";
              this.container.style.height = n + "px";
              this.renderer.boxWrapper.attr({
                width: e,
                height: n,
                viewBox: [0, 0, e, n].join(" "),
              });
              this.chartBackground.attr({ width: e, height: n });
              this.scrollingContainer.style.height = this.chartHeight + "px";
              t &&
                (i.scrollPositionX &&
                  (this.scrollingContainer.scrollLeft =
                    this.scrollablePixelsX * i.scrollPositionX),
                i.scrollPositionY &&
                  (this.scrollingContainer.scrollTop =
                    this.scrollablePixelsY * i.scrollPositionY));
              n = this.axisOffset;
              t = this.plotTop - n[0] - 1;
              i = this.plotLeft - n[3] - 1;
              e = this.plotTop + this.plotHeight + n[2] + 1;
              n = this.plotLeft + this.plotWidth + n[1] + 1;
              var r =
                  this.plotLeft +
                  this.plotWidth -
                  (this.scrollablePixelsX || 0),
                l =
                  this.plotTop +
                  this.plotHeight -
                  (this.scrollablePixelsY || 0);
              t = this.scrollablePixelsX
                ? [
                    ["M", 0, t],
                    ["L", this.plotLeft - 1, t],
                    ["L", this.plotLeft - 1, e],
                    ["L", 0, e],
                    ["Z"],
                    ["M", r, t],
                    ["L", this.chartWidth, t],
                    ["L", this.chartWidth, e],
                    ["L", r, e],
                    ["Z"],
                  ]
                : this.scrollablePixelsY
                ? [
                    ["M", i, 0],
                    ["L", i, this.plotTop - 1],
                    ["L", n, this.plotTop - 1],
                    ["L", n, 0],
                    ["Z"],
                    ["M", i, l],
                    ["L", i, this.chartHeight],
                    ["L", n, this.chartHeight],
                    ["L", n, l],
                    ["Z"],
                  ]
                : [["M", 0, 0]];
              "adjustHeight" !== this.redrawTrigger &&
                this.scrollableMask.attr({ d: t });
            };
            a(e, "afterInit", function () {
              this.chart.scrollableDirty = !0;
            });
            a(n, "show", function () {
              this.chart.scrollableDirty = !0;
            });
            ("");
          }
        );
        e(
          i,
          "Core/Axis/StackingAxis.js",
          [
            i["Core/Animation/AnimationUtilities.js"],
            i["Core/Axis/Axis.js"],
            i["Core/Utilities.js"],
          ],
          function (t, e, i) {
            var n = t.getDeferredAnimation,
              o = i.addEvent,
              r = i.destroyObjectProperties,
              s = i.fireEvent,
              a = i.isNumber,
              h = i.objectEach,
              l;
            (function (t) {
              function e() {
                var t = this.stacking;
                if (t) {
                  var e = t.stacks;
                  h(e, function (t, i) {
                    r(t);
                    e[i] = null;
                  });
                  t && t.stackTotalGroup && t.stackTotalGroup.destroy();
                }
              }
              function i() {
                this.stacking || (this.stacking = new c(this));
              }
              var l = [];
              t.compose = function (t) {
                -1 === l.indexOf(t) &&
                  (l.push(t), o(t, "init", i), o(t, "destroy", e));
                return t;
              };
              var c = (function () {
                function t(t) {
                  this.oldStacks = {};
                  this.stacks = {};
                  this.stacksTouched = 0;
                  this.axis = t;
                }
                t.prototype.buildStacks = function () {
                  var t = this.axis,
                    e = t.series,
                    i = t.options.reversedStacks,
                    n = e.length,
                    o;
                  if (!t.isXAxis) {
                    this.usePercentage = !1;
                    for (o = n; o--; ) {
                      var r = e[i ? o : n - o - 1];
                      r.setStackedPoints();
                      r.setGroupedPoints();
                    }
                    for (o = 0; o < n; o++) e[o].modifyStacks();
                    s(t, "afterBuildStacks");
                  }
                };
                t.prototype.cleanStacks = function () {
                  if (!this.axis.isXAxis) {
                    if (this.oldStacks) var t = (this.stacks = this.oldStacks);
                    h(t, function (t) {
                      h(t, function (t) {
                        t.cumulative = t.total;
                      });
                    });
                  }
                };
                t.prototype.resetStacks = function () {
                  var t = this,
                    e = t.stacks;
                  t.axis.isXAxis ||
                    h(e, function (e) {
                      h(e, function (i, n) {
                        a(i.touched) && i.touched < t.stacksTouched
                          ? (i.destroy(), delete e[n])
                          : ((i.total = null), (i.cumulative = null));
                      });
                    });
                };
                t.prototype.renderStackTotals = function () {
                  var t = this.axis,
                    e = t.chart,
                    i = e.renderer,
                    o = this.stacks;
                  t = n(
                    e,
                    (t.options.stackLabels &&
                      t.options.stackLabels.animation) ||
                      !1
                  );
                  var r = (this.stackTotalGroup =
                    this.stackTotalGroup ||
                    i
                      .g("stack-labels")
                      .attr({ visibility: "visible", zIndex: 6, opacity: 0 })
                      .add());
                  r.translate(e.plotLeft, e.plotTop);
                  h(o, function (t) {
                    h(t, function (t) {
                      t.render(r);
                    });
                  });
                  r.animate({ opacity: 1 }, t);
                };
                return t;
              })();
              t.Additions = c;
            })(l || (l = {}));
            return l;
          }
        );
        e(
          i,
          "Extensions/Stacking.js",
          [
            i["Core/Axis/Axis.js"],
            i["Core/Chart/Chart.js"],
            i["Core/FormatUtilities.js"],
            i["Core/Globals.js"],
            i["Core/Series/Series.js"],
            i["Core/Axis/StackingAxis.js"],
            i["Core/Utilities.js"],
          ],
          function (t, e, i, n, o, r, s) {
            var a = i.format,
              h = s.correctFloat,
              l = s.defined,
              c = s.destroyObjectProperties,
              d = s.isArray,
              p = s.isNumber,
              u = s.objectEach,
              f = s.pick,
              g = (function () {
                function t(t, e, i, n, o) {
                  var r = t.chart.inverted;
                  this.axis = t;
                  this.isNegative = i;
                  this.options = e = e || {};
                  this.x = n;
                  this.total = null;
                  this.points = {};
                  this.hasValidPoints = !1;
                  this.stack = o;
                  this.rightCliff = this.leftCliff = 0;
                  this.alignOptions = {
                    align: e.align || (r ? (i ? "left" : "right") : "center"),
                    verticalAlign:
                      e.verticalAlign || (r ? "middle" : i ? "bottom" : "top"),
                    y: e.y,
                    x: e.x,
                  };
                  this.textAlign =
                    e.textAlign || (r ? (i ? "right" : "left") : "center");
                }
                t.prototype.destroy = function () {
                  c(this, this.axis);
                };
                t.prototype.render = function (t) {
                  var e = this.axis.chart,
                    i = this.options,
                    n = i.format;
                  n = n ? a(n, this, e) : i.formatter.call(this);
                  this.label
                    ? this.label.attr({ text: n, visibility: "hidden" })
                    : ((this.label = e.renderer.label(
                        n,
                        null,
                        null,
                        i.shape,
                        null,
                        null,
                        i.useHTML,
                        !1,
                        "stack-labels"
                      )),
                      (n = {
                        r: i.borderRadius || 0,
                        text: n,
                        rotation: i.rotation,
                        padding: f(i.padding, 5),
                        visibility: "hidden",
                      }),
                      e.styledMode ||
                        ((n.fill = i.backgroundColor),
                        (n.stroke = i.borderColor),
                        (n["stroke-width"] = i.borderWidth),
                        this.label.css(i.style)),
                      this.label.attr(n),
                      this.label.added || this.label.add(t));
                  this.label.labelrank = e.plotSizeY;
                };
                t.prototype.setOffset = function (t, e, i, n, r) {
                  var s = this.axis,
                    a = s.chart;
                  n = s.translate(
                    s.stacking.usePercentage ? 100 : n ? n : this.total,
                    0,
                    0,
                    0,
                    1
                  );
                  i = s.translate(i ? i : 0);
                  i = l(n) && Math.abs(n - i);
                  t = f(r, a.xAxis[0].translate(this.x)) + t;
                  s = l(n) && this.getStackBox(a, this, t, n, e, i, s);
                  e = this.label;
                  i = this.isNegative;
                  t = "justify" === f(this.options.overflow, "justify");
                  var h = this.textAlign;
                  e &&
                    s &&
                    ((r = e.getBBox()),
                    (n = e.padding),
                    (h =
                      "left" === h
                        ? a.inverted
                          ? -n
                          : n
                        : "right" === h
                        ? r.width
                        : a.inverted && "center" === h
                        ? r.width / 2
                        : a.inverted
                        ? i
                          ? r.width + n
                          : -n
                        : r.width / 2),
                    (i = a.inverted ? r.height / 2 : i ? -n : r.height),
                    (this.alignOptions.x = f(this.options.x, 0)),
                    (this.alignOptions.y = f(this.options.y, 0)),
                    (s.x -= h),
                    (s.y -= i),
                    e.align(this.alignOptions, null, s),
                    a.isInsidePlot(
                      e.alignAttr.x + h - this.alignOptions.x,
                      e.alignAttr.y + i - this.alignOptions.y
                    )
                      ? e.show()
                      : ((e.alignAttr.y = -9999), (t = !1)),
                    t &&
                      o.prototype.justifyDataLabel.call(
                        this.axis,
                        e,
                        this.alignOptions,
                        e.alignAttr,
                        r,
                        s
                      ),
                    e.attr({ x: e.alignAttr.x, y: e.alignAttr.y }),
                    f(!t && this.options.crop, !0) &&
                      ((a =
                        p(e.x) &&
                        p(e.y) &&
                        a.isInsidePlot(e.x - n + e.width, e.y) &&
                        a.isInsidePlot(e.x + n, e.y)) ||
                        e.hide()));
                };
                t.prototype.getStackBox = function (t, e, i, n, o, r, s) {
                  var a = e.axis.reversed,
                    h = t.inverted,
                    l = s.height + s.pos - (h ? t.plotLeft : t.plotTop);
                  e = (e.isNegative && !a) || (!e.isNegative && a);
                  return {
                    x: h
                      ? e
                        ? n - s.right
                        : n - r + s.pos - t.plotLeft
                      : i + t.xAxis[0].transB - t.plotLeft,
                    y: h ? s.height - i - o : e ? l - n - r : l - n,
                    width: h ? r : o,
                    height: h ? o : r,
                  };
                };
                return t;
              })();
            e.prototype.getStacks = function () {
              var t = this,
                e = t.inverted;
              t.yAxis.forEach(function (t) {
                t.stacking &&
                  t.stacking.stacks &&
                  t.hasVisibleSeries &&
                  (t.stacking.oldStacks = t.stacking.stacks);
              });
              t.series.forEach(function (i) {
                var n = (i.xAxis && i.xAxis.options) || {};
                !i.options.stacking ||
                  (!0 !== i.visible &&
                    !1 !== t.options.chart.ignoreHiddenSeries) ||
                  (i.stackKey = [
                    i.type,
                    f(i.options.stack, ""),
                    e ? n.top : n.left,
                    e ? n.height : n.width,
                  ].join());
              });
            };
            r.compose(t);
            o.prototype.setGroupedPoints = function () {
              var t = this.yAxis.stacking;
              this.options.centerInCategory &&
              (this.is("column") || this.is("columnrange")) &&
              !this.options.stacking &&
              1 < this.chart.series.length
                ? o.prototype.setStackedPoints.call(this, "group")
                : t &&
                  u(t.stacks, function (e, i) {
                    "group" === i.slice(-5) &&
                      (u(e, function (t) {
                        return t.destroy();
                      }),
                      delete t.stacks[i]);
                  });
            };
            o.prototype.setStackedPoints = function (t) {
              var e = t || this.options.stacking;
              if (
                e &&
                (!0 === this.visible ||
                  !1 === this.chart.options.chart.ignoreHiddenSeries)
              ) {
                var i = this.processedXData,
                  n = this.processedYData,
                  o = [],
                  r = n.length,
                  s = this.options,
                  a = s.threshold,
                  c = f(s.startFromThreshold && a, 0);
                s = s.stack;
                t = t ? this.type + "," + e : this.stackKey;
                var p = "-" + t,
                  u = this.negStacks,
                  m = this.yAxis,
                  y = m.stacking.stacks,
                  v = m.stacking.oldStacks,
                  x,
                  b;
                m.stacking.stacksTouched += 1;
                for (b = 0; b < r; b++) {
                  var C = i[b];
                  var w = n[b];
                  var S = this.getStackIndicator(S, C, this.index);
                  var A = S.key;
                  var k = (x = u && w < (c ? 0 : a)) ? p : t;
                  y[k] || (y[k] = {});
                  y[k][C] ||
                    (v[k] && v[k][C]
                      ? ((y[k][C] = v[k][C]), (y[k][C].total = null))
                      : (y[k][C] = new g(m, m.options.stackLabels, x, C, s)));
                  k = y[k][C];
                  null !== w
                    ? ((k.points[A] = k.points[this.index] =
                        [f(k.cumulative, c)]),
                      l(k.cumulative) || (k.base = A),
                      (k.touched = m.stacking.stacksTouched),
                      0 < S.index &&
                        !1 === this.singleStacks &&
                        (k.points[A][0] =
                          k.points[this.index + "," + C + ",0"][0]))
                    : (k.points[A] = k.points[this.index] = null);
                  "percent" === e
                    ? ((x = x ? t : p),
                      u && y[x] && y[x][C]
                        ? ((x = y[x][C]),
                          (k.total = x.total =
                            Math.max(x.total, k.total) + Math.abs(w) || 0))
                        : (k.total = h(k.total + (Math.abs(w) || 0))))
                    : "group" === e
                    ? (d(w) && (w = w[0]),
                      null !== w && (k.total = (k.total || 0) + 1))
                    : (k.total = h(k.total + (w || 0)));
                  k.cumulative =
                    "group" === e
                      ? (k.total || 1) - 1
                      : f(k.cumulative, c) + (w || 0);
                  null !== w &&
                    (k.points[A].push(k.cumulative),
                    (o[b] = k.cumulative),
                    (k.hasValidPoints = !0));
                }
                "percent" === e && (m.stacking.usePercentage = !0);
                "group" !== e && (this.stackedYData = o);
                m.stacking.oldStacks = {};
              }
            };
            o.prototype.modifyStacks = function () {
              var t = this,
                e = t.stackKey,
                i = t.yAxis.stacking.stacks,
                n = t.processedXData,
                o,
                r = t.options.stacking;
              t[r + "Stacker"] &&
                [e, "-" + e].forEach(function (e) {
                  for (var s = n.length, a, h; s--; )
                    if (
                      ((a = n[s]),
                      (o = t.getStackIndicator(o, a, t.index, e)),
                      (h = (a = i[e] && i[e][a]) && a.points[o.key]))
                    )
                      t[r + "Stacker"](h, a, s);
                });
            };
            o.prototype.percentStacker = function (t, e, i) {
              e = e.total ? 100 / e.total : 0;
              t[0] = h(t[0] * e);
              t[1] = h(t[1] * e);
              this.stackedYData[i] = t[1];
            };
            o.prototype.getStackIndicator = function (t, e, i, n) {
              !l(t) || t.x !== e || (n && t.key !== n)
                ? (t = { x: e, index: 0, key: n })
                : t.index++;
              t.key = [i, e, t.index].join();
              return t;
            };
            n.StackItem = g;
            ("");
            return n.StackItem;
          }
        );
        e(
          i,
          "Series/Line/LineSeries.js",
          [
            i["Core/Color/Palette.js"],
            i["Core/Series/Series.js"],
            i["Core/Series/SeriesRegistry.js"],
            i["Core/Utilities.js"],
          ],
          function (t, e, i, n) {
            var o =
                (this && this.__extends) ||
                (function () {
                  var t = function (e, i) {
                    t =
                      Object.setPrototypeOf ||
                      ({ __proto__: [] } instanceof Array &&
                        function (t, e) {
                          t.__proto__ = e;
                        }) ||
                      function (t, e) {
                        for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
                      };
                    return t(e, i);
                  };
                  return function (e, i) {
                    function n() {
                      this.constructor = e;
                    }
                    t(e, i);
                    e.prototype =
                      null === i
                        ? Object.create(i)
                        : ((n.prototype = i.prototype), new n());
                  };
                })(),
              r = n.defined,
              s = n.merge;
            n = (function (i) {
              function n() {
                var t = (null !== i && i.apply(this, arguments)) || this;
                t.data = void 0;
                t.options = void 0;
                t.points = void 0;
                return t;
              }
              o(n, i);
              n.prototype.drawGraph = function () {
                var e = this,
                  i = this.options,
                  n = (this.gappedPath || this.getGraphPath).call(this),
                  o = this.chart.styledMode,
                  r = [["graph", "highcharts-graph"]];
                o ||
                  r[0].push(
                    i.lineColor || this.color || t.neutralColor20,
                    i.dashStyle
                  );
                r = e.getZonesGraphs(r);
                r.forEach(function (t, r) {
                  var s = t[0],
                    a = e[s],
                    h = a ? "animate" : "attr";
                  a
                    ? ((a.endX = e.preventGraphAnimation ? null : n.xMap),
                      a.animate({ d: n }))
                    : n.length &&
                      (e[s] = a =
                        e.chart.renderer
                          .path(n)
                          .addClass(t[1])
                          .attr({ zIndex: 1 })
                          .add(e.group));
                  a &&
                    !o &&
                    ((s = {
                      stroke: t[2],
                      "stroke-width": i.lineWidth,
                      fill: (e.fillGraph && e.color) || "none",
                    }),
                    t[3]
                      ? (s.dashstyle = t[3])
                      : "square" !== i.linecap &&
                        (s["stroke-linecap"] = s["stroke-linejoin"] = "round"),
                    a[h](s).shadow(2 > r && i.shadow));
                  a && ((a.startX = n.xMap), (a.isArea = n.isArea));
                });
              };
              n.prototype.getGraphPath = function (t, e, i) {
                var n = this,
                  o = n.options,
                  s = [],
                  a = [],
                  h,
                  l = o.step;
                t = t || n.points;
                var c = t.reversed;
                c && t.reverse();
                (l = { right: 1, center: 2 }[l] || (l && 3)) &&
                  c &&
                  (l = 4 - l);
                t = this.getValidPoints(t, !1, !(o.connectNulls && !e && !i));
                t.forEach(function (c, d) {
                  var p = c.plotX,
                    u = c.plotY,
                    f = t[d - 1];
                  (c.leftCliff || (f && f.rightCliff)) && !i && (h = !0);
                  c.isNull && !r(e) && 0 < d
                    ? (h = !o.connectNulls)
                    : c.isNull && !e
                    ? (h = !0)
                    : (0 === d || h
                        ? (d = [["M", c.plotX, c.plotY]])
                        : n.getPointSpline
                        ? (d = [n.getPointSpline(t, c, d)])
                        : l
                        ? ((d =
                            1 === l
                              ? [["L", f.plotX, u]]
                              : 2 === l
                              ? [
                                  ["L", (f.plotX + p) / 2, f.plotY],
                                  ["L", (f.plotX + p) / 2, u],
                                ]
                              : [["L", p, f.plotY]]),
                          d.push(["L", p, u]))
                        : (d = [["L", p, u]]),
                      a.push(c.x),
                      l && (a.push(c.x), 2 === l && a.push(c.x)),
                      s.push.apply(s, d),
                      (h = !1));
                });
                s.xMap = a;
                return (n.graphPath = s);
              };
              n.prototype.getZonesGraphs = function (t) {
                this.zones.forEach(function (e, i) {
                  i = [
                    "zone-graph-" + i,
                    "highcharts-graph highcharts-zone-graph-" +
                      i +
                      " " +
                      (e.className || ""),
                  ];
                  this.chart.styledMode ||
                    i.push(
                      e.color || this.color,
                      e.dashStyle || this.options.dashStyle
                    );
                  t.push(i);
                }, this);
                return t;
              };
              n.defaultOptions = s(e.defaultOptions, {});
              return n;
            })(e);
            i.registerSeriesType("line", n);
            ("");
            return n;
          }
        );
        e(
          i,
          "Series/Area/AreaSeries.js",
          [
            i["Core/Color/Color.js"],
            i["Core/Legend/LegendSymbol.js"],
            i["Core/Series/SeriesRegistry.js"],
            i["Core/Utilities.js"],
          ],
          function (t, e, i, n) {
            var o =
                (this && this.__extends) ||
                (function () {
                  var t = function (e, i) {
                    t =
                      Object.setPrototypeOf ||
                      ({ __proto__: [] } instanceof Array &&
                        function (t, e) {
                          t.__proto__ = e;
                        }) ||
                      function (t, e) {
                        for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
                      };
                    return t(e, i);
                  };
                  return function (e, i) {
                    function n() {
                      this.constructor = e;
                    }
                    t(e, i);
                    e.prototype =
                      null === i
                        ? Object.create(i)
                        : ((n.prototype = i.prototype), new n());
                  };
                })(),
              r = t.parse,
              s = i.seriesTypes.line;
            t = n.extend;
            var a = n.merge,
              h = n.objectEach,
              l = n.pick;
            n = (function (t) {
              function e() {
                var e = (null !== t && t.apply(this, arguments)) || this;
                e.data = void 0;
                e.options = void 0;
                e.points = void 0;
                return e;
              }
              o(e, t);
              e.prototype.drawGraph = function () {
                this.areaPath = [];
                t.prototype.drawGraph.apply(this);
                var e = this,
                  i = this.areaPath,
                  n = this.options,
                  o = [["area", "highcharts-area", this.color, n.fillColor]];
                this.zones.forEach(function (t, i) {
                  o.push([
                    "zone-area-" + i,
                    "highcharts-area highcharts-zone-area-" +
                      i +
                      " " +
                      t.className,
                    t.color || e.color,
                    t.fillColor || n.fillColor,
                  ]);
                });
                o.forEach(function (t) {
                  var o = t[0],
                    s = e[o],
                    a = s ? "animate" : "attr",
                    h = {};
                  s
                    ? ((s.endX = e.preventGraphAnimation ? null : i.xMap),
                      s.animate({ d: i }))
                    : ((h.zIndex = 0),
                      (s = e[o] =
                        e.chart.renderer.path(i).addClass(t[1]).add(e.group)),
                      (s.isArea = !0));
                  e.chart.styledMode ||
                    (h.fill = l(
                      t[3],
                      r(t[2]).setOpacity(l(n.fillOpacity, 0.75)).get()
                    ));
                  s[a](h);
                  s.startX = i.xMap;
                  s.shiftUnit = n.step ? 2 : 1;
                });
              };
              e.prototype.getGraphPath = function (t) {
                var e = s.prototype.getGraphPath,
                  i = this.options,
                  n = i.stacking,
                  o = this.yAxis,
                  r,
                  a = [],
                  h = [],
                  c = this.index,
                  d = o.stacking.stacks[this.stackKey],
                  p = i.threshold,
                  u = Math.round(o.getThreshold(i.threshold));
                i = l(i.connectNulls, "percent" === n);
                var f = function (e, i, r) {
                  var s = t[e];
                  e = n && d[s.x].points[c];
                  var l = s[r + "Null"] || 0;
                  r = s[r + "Cliff"] || 0;
                  s = !0;
                  if (r || l) {
                    var f = (l ? e[0] : e[1]) + r;
                    var g = e[0] + r;
                    s = !!l;
                  } else !n && t[i] && t[i].isNull && (f = g = p);
                  "undefined" !== typeof f &&
                    (h.push({
                      plotX: m,
                      plotY: null === f ? u : o.getThreshold(f),
                      isNull: s,
                      isCliff: !0,
                    }),
                    a.push({
                      plotX: m,
                      plotY: null === g ? u : o.getThreshold(g),
                      doCurve: !1,
                    }));
                };
                t = t || this.points;
                n && (t = this.getStackPoints(t));
                for (r = 0; r < t.length; r++) {
                  n ||
                    (t[r].leftCliff =
                      t[r].rightCliff =
                      t[r].leftNull =
                      t[r].rightNull =
                        void 0);
                  var g = t[r].isNull;
                  var m = l(t[r].rectPlotX, t[r].plotX);
                  var y = n ? l(t[r].yBottom, u) : u;
                  if (!g || i)
                    i || f(r, r - 1, "left"),
                      (g && !n && i) ||
                        (h.push(t[r]), a.push({ x: r, plotX: m, plotY: y })),
                      i || f(r, r + 1, "right");
                }
                r = e.call(this, h, !0, !0);
                a.reversed = !0;
                g = e.call(this, a, !0, !0);
                (y = g[0]) && "M" === y[0] && (g[0] = ["L", y[1], y[2]]);
                g = r.concat(g);
                g.length && g.push(["Z"]);
                e = e.call(this, h, !1, i);
                g.xMap = r.xMap;
                this.areaPath = g;
                return e;
              };
              e.prototype.getStackPoints = function (t) {
                var e = this,
                  i = [],
                  n = [],
                  o = this.xAxis,
                  r = this.yAxis,
                  s = r.stacking.stacks[this.stackKey],
                  a = {},
                  c = r.series,
                  d = c.length,
                  p = r.options.reversedStacks ? 1 : -1,
                  u = c.indexOf(e);
                t = t || this.points;
                if (this.options.stacking) {
                  for (var f = 0; f < t.length; f++)
                    (t[f].leftNull = t[f].rightNull = void 0),
                      (a[t[f].x] = t[f]);
                  h(s, function (t, e) {
                    null !== t.total && n.push(e);
                  });
                  n.sort(function (t, e) {
                    return t - e;
                  });
                  var g = c.map(function (t) {
                    return t.visible;
                  });
                  n.forEach(function (t, h) {
                    var f = 0,
                      m,
                      y;
                    if (a[t] && !a[t].isNull)
                      i.push(a[t]),
                        [-1, 1].forEach(function (i) {
                          var o = 1 === i ? "rightNull" : "leftNull",
                            r = 0,
                            l = s[n[h + i]];
                          if (l)
                            for (var f = u; 0 <= f && f < d; ) {
                              var v = c[f].index;
                              m = l.points[v];
                              m ||
                                (v === e.index
                                  ? (a[t][o] = !0)
                                  : g[f] &&
                                    (y = s[t].points[v]) &&
                                    (r -= y[1] - y[0]));
                              f += p;
                            }
                          a[t][1 === i ? "rightCliff" : "leftCliff"] = r;
                        });
                    else {
                      for (var v = u; 0 <= v && v < d; ) {
                        if ((m = s[t].points[c[v].index])) {
                          f = m[1];
                          break;
                        }
                        v += p;
                      }
                      f = l(f, 0);
                      f = r.translate(f, 0, 1, 0, 1);
                      i.push({
                        isNull: !0,
                        plotX: o.translate(t, 0, 0, 0, 1),
                        x: t,
                        plotY: f,
                        yBottom: f,
                      });
                    }
                  });
                }
                return i;
              };
              e.defaultOptions = a(s.defaultOptions, { threshold: 0 });
              return e;
            })(s);
            t(n.prototype, {
              singleStacks: !1,
              drawLegendSymbol: e.drawRectangle,
            });
            i.registerSeriesType("area", n);
            ("");
            return n;
          }
        );
        e(
          i,
          "Series/Spline/SplineSeries.js",
          [i["Core/Series/SeriesRegistry.js"], i["Core/Utilities.js"]],
          function (t, e) {
            var i =
                (this && this.__extends) ||
                (function () {
                  var t = function (e, i) {
                    t =
                      Object.setPrototypeOf ||
                      ({ __proto__: [] } instanceof Array &&
                        function (t, e) {
                          t.__proto__ = e;
                        }) ||
                      function (t, e) {
                        for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
                      };
                    return t(e, i);
                  };
                  return function (e, i) {
                    function n() {
                      this.constructor = e;
                    }
                    t(e, i);
                    e.prototype =
                      null === i
                        ? Object.create(i)
                        : ((n.prototype = i.prototype), new n());
                  };
                })(),
              n = t.seriesTypes.line,
              o = e.merge,
              r = e.pick;
            e = (function (t) {
              function e() {
                var e = (null !== t && t.apply(this, arguments)) || this;
                e.data = void 0;
                e.options = void 0;
                e.points = void 0;
                return e;
              }
              i(e, t);
              e.prototype.getPointSpline = function (t, e, i) {
                var n = e.plotX || 0,
                  o = e.plotY || 0,
                  s = t[i - 1];
                i = t[i + 1];
                if (
                  s &&
                  !s.isNull &&
                  !1 !== s.doCurve &&
                  !e.isCliff &&
                  i &&
                  !i.isNull &&
                  !1 !== i.doCurve &&
                  !e.isCliff
                ) {
                  t = s.plotY || 0;
                  var a = i.plotX || 0;
                  i = i.plotY || 0;
                  var h = 0;
                  var l = (1.5 * n + (s.plotX || 0)) / 2.5;
                  var c = (1.5 * o + t) / 2.5;
                  a = (1.5 * n + a) / 2.5;
                  var d = (1.5 * o + i) / 2.5;
                  a !== l && (h = ((d - c) * (a - n)) / (a - l) + o - d);
                  c += h;
                  d += h;
                  c > t && c > o
                    ? ((c = Math.max(t, o)), (d = 2 * o - c))
                    : c < t && c < o && ((c = Math.min(t, o)), (d = 2 * o - c));
                  d > i && d > o
                    ? ((d = Math.max(i, o)), (c = 2 * o - d))
                    : d < i && d < o && ((d = Math.min(i, o)), (c = 2 * o - d));
                  e.rightContX = a;
                  e.rightContY = d;
                }
                e = [
                  "C",
                  r(s.rightContX, s.plotX, 0),
                  r(s.rightContY, s.plotY, 0),
                  r(l, n, 0),
                  r(c, o, 0),
                  n,
                  o,
                ];
                s.rightContX = s.rightContY = void 0;
                return e;
              };
              e.defaultOptions = o(n.defaultOptions);
              return e;
            })(n);
            t.registerSeriesType("spline", e);
            ("");
            return e;
          }
        );
        e(
          i,
          "Series/AreaSpline/AreaSplineSeries.js",
          [
            i["Series/Area/AreaSeries.js"],
            i["Series/Spline/SplineSeries.js"],
            i["Core/Legend/LegendSymbol.js"],
            i["Core/Series/SeriesRegistry.js"],
            i["Core/Utilities.js"],
          ],
          function (t, e, i, n, o) {
            var r =
                (this && this.__extends) ||
                (function () {
                  var t = function (e, i) {
                    t =
                      Object.setPrototypeOf ||
                      ({ __proto__: [] } instanceof Array &&
                        function (t, e) {
                          t.__proto__ = e;
                        }) ||
                      function (t, e) {
                        for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
                      };
                    return t(e, i);
                  };
                  return function (e, i) {
                    function n() {
                      this.constructor = e;
                    }
                    t(e, i);
                    e.prototype =
                      null === i
                        ? Object.create(i)
                        : ((n.prototype = i.prototype), new n());
                  };
                })(),
              s = t.prototype,
              a = o.extend,
              h = o.merge;
            o = (function (i) {
              function n() {
                var t = (null !== i && i.apply(this, arguments)) || this;
                t.data = void 0;
                t.points = void 0;
                t.options = void 0;
                return t;
              }
              r(n, i);
              n.defaultOptions = h(e.defaultOptions, t.defaultOptions);
              return n;
            })(e);
            a(o.prototype, {
              getGraphPath: s.getGraphPath,
              getStackPoints: s.getStackPoints,
              drawGraph: s.drawGraph,
              drawLegendSymbol: i.drawRectangle,
            });
            n.registerSeriesType("areaspline", o);
            ("");
            return o;
          }
        );
        e(
          i,
          "Series/Column/ColumnSeries.js",
          [
            i["Core/Animation/AnimationUtilities.js"],
            i["Core/Color/Color.js"],
            i["Core/Globals.js"],
            i["Core/Legend/LegendSymbol.js"],
            i["Core/Color/Palette.js"],
            i["Core/Series/Series.js"],
            i["Core/Series/SeriesRegistry.js"],
            i["Core/Utilities.js"],
          ],
          function (t, e, i, n, o, r, s, a) {
            var h =
                (this && this.__extends) ||
                (function () {
                  var t = function (e, i) {
                    t =
                      Object.setPrototypeOf ||
                      ({ __proto__: [] } instanceof Array &&
                        function (t, e) {
                          t.__proto__ = e;
                        }) ||
                      function (t, e) {
                        for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
                      };
                    return t(e, i);
                  };
                  return function (e, i) {
                    function n() {
                      this.constructor = e;
                    }
                    t(e, i);
                    e.prototype =
                      null === i
                        ? Object.create(i)
                        : ((n.prototype = i.prototype), new n());
                  };
                })(),
              l = t.animObject,
              c = e.parse,
              d = i.hasTouch;
            t = i.noop;
            var p = a.clamp,
              u = a.css,
              f = a.defined,
              g = a.extend,
              m = a.fireEvent,
              y = a.isArray,
              v = a.isNumber,
              x = a.merge,
              b = a.pick,
              C = a.objectEach;
            a = (function (t) {
              function e() {
                var e = (null !== t && t.apply(this, arguments)) || this;
                e.borderWidth = void 0;
                e.data = void 0;
                e.group = void 0;
                e.options = void 0;
                e.points = void 0;
                return e;
              }
              h(e, t);
              e.prototype.animate = function (t) {
                var e = this,
                  i = this.yAxis,
                  n = e.options,
                  o = this.chart.inverted,
                  r = {},
                  s = o ? "translateX" : "translateY";
                if (t)
                  (r.scaleY = 0.001),
                    (t = p(i.toPixels(n.threshold), i.pos, i.pos + i.len)),
                    o ? (r.translateX = t - i.len) : (r.translateY = t),
                    e.clipBox && e.setClip(),
                    e.group.attr(r);
                else {
                  var a = Number(e.group.attr(s));
                  e.group.animate(
                    { scaleY: 1 },
                    g(l(e.options.animation), {
                      step: function (t, n) {
                        e.group &&
                          ((r[s] = a + n.pos * (i.pos - a)), e.group.attr(r));
                      },
                    })
                  );
                }
              };
              e.prototype.init = function (e, i) {
                t.prototype.init.apply(this, arguments);
                var n = this;
                e = n.chart;
                e.hasRendered &&
                  e.series.forEach(function (t) {
                    t.type === n.type && (t.isDirty = !0);
                  });
              };
              e.prototype.getColumnMetrics = function () {
                var t = this,
                  e = t.options,
                  i = t.xAxis,
                  n = t.yAxis,
                  o = i.options.reversedStacks;
                o = (i.reversed && !o) || (!i.reversed && o);
                var r = {},
                  s,
                  a = 0;
                !1 === e.grouping
                  ? (a = 1)
                  : t.chart.series.forEach(function (e) {
                      var i = e.yAxis,
                        o = e.options;
                      if (
                        e.type === t.type &&
                        (e.visible ||
                          !t.chart.options.chart.ignoreHiddenSeries) &&
                        n.len === i.len &&
                        n.pos === i.pos
                      ) {
                        if (o.stacking && "group" !== o.stacking) {
                          s = e.stackKey;
                          "undefined" === typeof r[s] && (r[s] = a++);
                          var h = r[s];
                        } else !1 !== o.grouping && (h = a++);
                        e.columnIndex = h;
                      }
                    });
                var h = Math.min(
                    Math.abs(i.transA) *
                      ((i.ordinal && i.ordinal.slope) ||
                        e.pointRange ||
                        i.closestPointRange ||
                        i.tickInterval ||
                        1),
                    i.len
                  ),
                  l = h * e.groupPadding,
                  c = (h - 2 * l) / (a || 1);
                e = Math.min(
                  e.maxPointWidth || i.len,
                  b(e.pointWidth, c * (1 - 2 * e.pointPadding))
                );
                t.columnMetrics = {
                  width: e,
                  offset:
                    (c - e) / 2 +
                    (l + ((t.columnIndex || 0) + (o ? 1 : 0)) * c - h / 2) *
                      (o ? -1 : 1),
                  paddedWidth: c,
                  columnCount: a,
                };
                return t.columnMetrics;
              };
              e.prototype.crispCol = function (t, e, i, n) {
                var o = this.chart,
                  r = this.borderWidth,
                  s = -(r % 2 ? 0.5 : 0);
                r = r % 2 ? 0.5 : 1;
                o.inverted && o.renderer.isVML && (r += 1);
                this.options.crisp &&
                  ((i = Math.round(t + i) + s),
                  (t = Math.round(t) + s),
                  (i -= t));
                n = Math.round(e + n) + r;
                s = 0.5 >= Math.abs(e) && 0.5 < n;
                e = Math.round(e) + r;
                n -= e;
                s && n && (--e, (n += 1));
                return { x: t, y: e, width: i, height: n };
              };
              e.prototype.adjustForMissingColumns = function (t, e, i, n) {
                var o = this,
                  r = this.options.stacking;
                if (!i.isNull && 1 < n.columnCount) {
                  var s = 0,
                    a = 0;
                  C(
                    this.yAxis.stacking && this.yAxis.stacking.stacks,
                    function (t) {
                      if ("number" === typeof i.x && (t = t[i.x.toString()])) {
                        var e = t.points[o.index],
                          n = t.total;
                        r
                          ? (e && (s = a), t.hasValidPoints && a++)
                          : y(e) && ((s = e[1]), (a = n || 0));
                      }
                    }
                  );
                  t =
                    (i.plotX || 0) +
                    ((a - 1) * n.paddedWidth + e) / 2 -
                    e -
                    s * n.paddedWidth;
                }
                return t;
              };
              e.prototype.translate = function () {
                var t = this,
                  e = t.chart,
                  i = t.options,
                  n = (t.dense = 2 > t.closestPointRange * t.xAxis.transA);
                n = t.borderWidth = b(i.borderWidth, n ? 0 : 1);
                var o = t.xAxis,
                  s = t.yAxis,
                  a = i.threshold,
                  h = (t.translatedThreshold = s.getThreshold(a)),
                  l = b(i.minPointLength, 5),
                  c = t.getColumnMetrics(),
                  d = c.width,
                  u = (t.pointXOffset = c.offset),
                  g = t.dataMin,
                  m = t.dataMax,
                  y = (t.barW = Math.max(d, 1 + 2 * n));
                e.inverted && (h -= 0.5);
                i.pointPadding && (y = Math.ceil(y));
                r.prototype.translate.apply(t);
                t.points.forEach(function (n) {
                  var r = b(n.yBottom, h),
                    x = 999 + Math.abs(r),
                    C = n.plotX || 0;
                  x = p(n.plotY, -x, s.len + x);
                  var w = Math.min(x, r),
                    S = Math.max(x, r) - w,
                    A = d,
                    k = C + u,
                    T = y;
                  l &&
                    Math.abs(S) < l &&
                    ((S = l),
                    (C =
                      (!s.reversed && !n.negative) ||
                      (s.reversed && n.negative)),
                    v(a) &&
                      v(m) &&
                      n.y === a &&
                      m <= a &&
                      (s.min || 0) < a &&
                      (g !== m || (s.max || 0) <= a) &&
                      (C = !C),
                    (w = Math.abs(w - h) > l ? r - l : h - (C ? l : 0)));
                  f(n.options.pointWidth) &&
                    ((A = T = Math.ceil(n.options.pointWidth)),
                    (k -= Math.round((A - d) / 2)));
                  i.centerInCategory &&
                    (k = t.adjustForMissingColumns(k, A, n, c));
                  n.barX = k;
                  n.pointWidth = A;
                  n.tooltipPos = e.inverted
                    ? [
                        p(
                          s.len + s.pos - e.plotLeft - x,
                          s.pos - e.plotLeft,
                          s.len + s.pos - e.plotLeft
                        ),
                        o.len + o.pos - e.plotTop - k - T / 2,
                        S,
                      ]
                    : [
                        o.left - e.plotLeft + k + T / 2,
                        p(
                          x + s.pos - e.plotTop,
                          s.pos - e.plotTop,
                          s.len + s.pos - e.plotTop
                        ),
                        S,
                      ];
                  n.shapeType = t.pointClass.prototype.shapeType || "rect";
                  n.shapeArgs = t.crispCol.apply(
                    t,
                    n.isNull ? [k, h, T, 0] : [k, w, T, S]
                  );
                });
              };
              e.prototype.drawGraph = function () {
                this.group[this.dense ? "addClass" : "removeClass"](
                  "highcharts-dense-data"
                );
              };
              e.prototype.pointAttribs = function (t, e) {
                var i = this.options,
                  n = this.pointAttrToOptions || {},
                  o = n.stroke || "borderColor",
                  r = n["stroke-width"] || "borderWidth",
                  s = (t && t.color) || this.color,
                  a = (t && t[o]) || i[o] || s;
                n = (t && t.options.dashStyle) || i.dashStyle;
                var h = (t && t[r]) || i[r] || this[r] || 0,
                  l = b(t && t.opacity, i.opacity, 1);
                if (t && this.zones.length) {
                  var d = t.getZone();
                  s =
                    t.options.color ||
                    (d && (d.color || t.nonZonedColor)) ||
                    this.color;
                  d &&
                    ((a = d.borderColor || a),
                    (n = d.dashStyle || n),
                    (h = d.borderWidth || h));
                }
                e &&
                  t &&
                  ((t = x(
                    i.states[e],
                    (t.options.states && t.options.states[e]) || {}
                  )),
                  (e = t.brightness),
                  (s =
                    t.color ||
                    ("undefined" !== typeof e &&
                      c(s).brighten(t.brightness).get()) ||
                    s),
                  (a = t[o] || a),
                  (h = t[r] || h),
                  (n = t.dashStyle || n),
                  (l = b(t.opacity, l)));
                o = { fill: s, stroke: a, "stroke-width": h, opacity: l };
                n && (o.dashstyle = n);
                return o;
              };
              e.prototype.drawPoints = function () {
                var t = this,
                  e = this.chart,
                  i = t.options,
                  n = e.renderer,
                  o = i.animationLimit || 250,
                  r;
                t.points.forEach(function (s) {
                  var a = s.graphic,
                    h = !!a,
                    l = a && e.pointCount < o ? "animate" : "attr";
                  if (v(s.plotY) && null !== s.y) {
                    r = s.shapeArgs;
                    a && s.hasNewShapeType() && (a = a.destroy());
                    t.enabledDataSorting &&
                      (s.startXPos = t.xAxis.reversed
                        ? -(r ? r.width || 0 : 0)
                        : t.xAxis.width);
                    a ||
                      ((s.graphic = a =
                        n[s.shapeType](r).add(s.group || t.group)) &&
                        t.enabledDataSorting &&
                        e.hasRendered &&
                        e.pointCount < o &&
                        (a.attr({ x: s.startXPos }),
                        (h = !0),
                        (l = "animate")));
                    if (a && h) a[l](x(r));
                    if (i.borderRadius) a[l]({ r: i.borderRadius });
                    e.styledMode ||
                      a[l](t.pointAttribs(s, s.selected && "select")).shadow(
                        !1 !== s.allowShadow && i.shadow,
                        null,
                        i.stacking && !i.borderRadius
                      );
                    a &&
                      (a.addClass(s.getClassName(), !0),
                      a.attr({ visibility: s.visible ? "inherit" : "hidden" }));
                  } else a && (s.graphic = a.destroy());
                });
              };
              e.prototype.drawTracker = function () {
                var t = this,
                  e = t.chart,
                  i = e.pointer,
                  n = function (t) {
                    var e = i.getPointFromEvent(t);
                    "undefined" !== typeof e &&
                      ((i.isDirectTouch = !0), e.onMouseOver(t));
                  },
                  o;
                t.points.forEach(function (t) {
                  o = y(t.dataLabels)
                    ? t.dataLabels
                    : t.dataLabel
                    ? [t.dataLabel]
                    : [];
                  t.graphic && (t.graphic.element.point = t);
                  o.forEach(function (e) {
                    e.div ? (e.div.point = t) : (e.element.point = t);
                  });
                });
                t._hasTracking ||
                  (t.trackerGroups.forEach(function (o) {
                    if (t[o]) {
                      t[o]
                        .addClass("highcharts-tracker")
                        .on("mouseover", n)
                        .on("mouseout", function (t) {
                          i.onTrackerMouseOut(t);
                        });
                      if (d) t[o].on("touchstart", n);
                      !e.styledMode &&
                        t.options.cursor &&
                        t[o].css(u).css({ cursor: t.options.cursor });
                    }
                  }),
                  (t._hasTracking = !0));
                m(this, "afterDrawTracker");
              };
              e.prototype.remove = function () {
                var t = this,
                  e = t.chart;
                e.hasRendered &&
                  e.series.forEach(function (e) {
                    e.type === t.type && (e.isDirty = !0);
                  });
                r.prototype.remove.apply(t, arguments);
              };
              e.defaultOptions = x(r.defaultOptions, {
                borderRadius: 0,
                centerInCategory: !1,
                groupPadding: 0.2,
                marker: null,
                pointPadding: 0.1,
                minPointLength: 0,
                cropThreshold: 50,
                pointRange: null,
                states: {
                  hover: { halo: !1, brightness: 0.1 },
                  select: {
                    color: o.neutralColor20,
                    borderColor: o.neutralColor100,
                  },
                },
                dataLabels: { align: void 0, verticalAlign: void 0, y: void 0 },
                startFromThreshold: !0,
                stickyTracking: !1,
                tooltip: { distance: 6 },
                threshold: 0,
                borderColor: o.backgroundColor,
              });
              return e;
            })(r);
            g(a.prototype, {
              cropShoulder: 0,
              directTouch: !0,
              drawLegendSymbol: n.drawRectangle,
              getSymbol: t,
              negStacks: !0,
              trackerGroups: ["group", "dataLabelsGroup"],
            });
            s.registerSeriesType("column", a);
            ("");
            ("");
            return a;
          }
        );
        e(
          i,
          "Core/Series/DataLabel.js",
          [
            i["Core/Animation/AnimationUtilities.js"],
            i["Core/FormatUtilities.js"],
            i["Core/Color/Palette.js"],
            i["Core/Utilities.js"],
          ],
          function (t, e, i, n) {
            var o = t.getDeferredAnimation,
              r = e.format,
              s = n.defined,
              a = n.extend,
              h = n.fireEvent,
              l = n.isArray,
              c = n.merge,
              d = n.objectEach,
              p = n.pick,
              u = n.splat,
              f;
            (function (t) {
              function e(t, e, i, n, o) {
                var r = this,
                  s = this.chart,
                  h = this.isCartesian && s.inverted,
                  l = this.enabledDataSorting,
                  c = p(t.dlBox && t.dlBox.centerX, t.plotX, -9999),
                  d = p(t.plotY, -9999),
                  u = e.getBBox(),
                  f = i.rotation,
                  g = i.align,
                  m = s.isInsidePlot(c, Math.round(d), {
                    inverted: h,
                    paneCoordinates: !0,
                    series: r,
                  }),
                  y = function (i) {
                    l && r.xAxis && !v && r.setDataLabelStartPos(t, e, o, m, i);
                  },
                  v = "justify" === p(i.overflow, l ? "none" : "justify"),
                  x =
                    this.visible &&
                    !1 !== t.visible &&
                    (t.series.forceDL ||
                      (l && !v) ||
                      m ||
                      (p(i.inside, !!this.options.stacking) &&
                        n &&
                        s.isInsidePlot(c, h ? n.x + 1 : n.y + n.height - 1, {
                          inverted: h,
                          paneCoordinates: !0,
                          series: r,
                        })));
                if (x) {
                  var b = s.renderer.fontMetrics(
                    s.styledMode ? void 0 : i.style.fontSize,
                    e
                  ).b;
                  n = a(
                    {
                      x: h ? this.yAxis.len - d : c,
                      y: Math.round(h ? this.xAxis.len - c : d),
                      width: 0,
                      height: 0,
                    },
                    n
                  );
                  a(i, { width: u.width, height: u.height });
                  f
                    ? ((v = !1),
                      (c = s.renderer.rotCorr(b, f)),
                      (c = {
                        x: n.x + (i.x || 0) + n.width / 2 + c.x,
                        y:
                          n.y +
                          (i.y || 0) +
                          { top: 0, middle: 0.5, bottom: 1 }[i.verticalAlign] *
                            n.height,
                      }),
                      y(c),
                      e[o ? "attr" : "animate"](c).attr({ align: g }),
                      (y = (f + 720) % 360),
                      (y = 180 < y && 360 > y),
                      "left" === g
                        ? (c.y -= y ? u.height : 0)
                        : "center" === g
                        ? ((c.x -= u.width / 2), (c.y -= u.height / 2))
                        : "right" === g &&
                          ((c.x -= u.width), (c.y -= y ? 0 : u.height)),
                      (e.placed = !0),
                      (e.alignAttr = c))
                    : (y(n), e.align(i, void 0, n), (c = e.alignAttr));
                  v && 0 <= n.height
                    ? this.justifyDataLabel(e, i, c, u, n, o)
                    : p(i.crop, !0) &&
                      (x =
                        s.isInsidePlot(c.x, c.y, {
                          paneCoordinates: !0,
                          series: r,
                        }) &&
                        s.isInsidePlot(c.x + u.width, c.y + u.height, {
                          paneCoordinates: !0,
                          series: r,
                        }));
                  if (i.shape && !f)
                    e[o ? "attr" : "animate"]({
                      anchorX: h ? s.plotWidth - t.plotY : t.plotX,
                      anchorY: h ? s.plotHeight - t.plotX : t.plotY,
                    });
                }
                o && l && (e.placed = !1);
                x || (l && !v) || (e.hide(!0), (e.placed = !1));
              }
              function n(t, e) {
                var i = e.filter;
                return i
                  ? ((e = i.operator),
                    (t = t[i.property]),
                    (i = i.value),
                    (">" === e && t > i) ||
                    ("<" === e && t < i) ||
                    (">=" === e && t >= i) ||
                    ("<=" === e && t <= i) ||
                    ("==" === e && t == i) ||
                    ("===" === e && t === i)
                      ? !0
                      : !1)
                  : !0;
              }
              function f() {
                var t = this,
                  e = t.chart,
                  a = t.options,
                  c = t.points,
                  f = t.hasRendered || 0,
                  g = e.renderer,
                  y = a.dataLabels,
                  v,
                  x = y.animation;
                x = y.defer ? o(e, x, t) : { defer: 0, duration: 0 };
                y = m(
                  m(
                    e.options.plotOptions &&
                      e.options.plotOptions.series &&
                      e.options.plotOptions.series.dataLabels,
                    e.options.plotOptions &&
                      e.options.plotOptions[t.type] &&
                      e.options.plotOptions[t.type].dataLabels
                  ),
                  y
                );
                h(this, "drawDataLabels");
                if (l(y) || y.enabled || t._hasPointLabels) {
                  var b = t.plotGroup(
                    "dataLabelsGroup",
                    "data-labels",
                    f ? "inherit" : "hidden",
                    y.zIndex || 6
                  );
                  b.attr({ opacity: +f });
                  !f &&
                    (f = t.dataLabelsGroup) &&
                    (t.visible && b.show(!0),
                    f[a.animation ? "animate" : "attr"]({ opacity: 1 }, x));
                  c.forEach(function (o) {
                    v = u(
                      m(y, o.dlOptions || (o.options && o.options.dataLabels))
                    );
                    v.forEach(function (h, l) {
                      var c =
                          h.enabled &&
                          (!o.isNull || o.dataLabelOnNull) &&
                          n(o, h),
                        u = o.connectors ? o.connectors[l] : o.connector,
                        f = o.dataLabels ? o.dataLabels[l] : o.dataLabel,
                        m = p(h.distance, o.labelDistance),
                        y = !f;
                      if (c) {
                        var v = o.getLabelConfig();
                        var x = p(h[o.formatPrefix + "Format"], h.format);
                        v = s(x)
                          ? r(x, v, e)
                          : (
                              h[o.formatPrefix + "Formatter"] || h.formatter
                            ).call(v, h);
                        x = h.style;
                        var C = h.rotation;
                        e.styledMode ||
                          ((x.color = p(
                            h.color,
                            x.color,
                            t.color,
                            i.neutralColor100
                          )),
                          "contrast" === x.color
                            ? ((o.contrastColor = g.getContrast(
                                o.color || t.color
                              )),
                              (x.color =
                                (!s(m) && h.inside) || 0 > m || a.stacking
                                  ? o.contrastColor
                                  : i.neutralColor100))
                            : delete o.contrastColor,
                          a.cursor && (x.cursor = a.cursor));
                        var w = {
                          r: h.borderRadius || 0,
                          rotation: C,
                          padding: h.padding,
                          zIndex: 1,
                        };
                        e.styledMode ||
                          ((w.fill = h.backgroundColor),
                          (w.stroke = h.borderColor),
                          (w["stroke-width"] = h.borderWidth));
                        d(w, function (t, e) {
                          "undefined" === typeof t && delete w[e];
                        });
                      }
                      !f || (c && s(v))
                        ? c &&
                          s(v) &&
                          (f
                            ? (w.text = v)
                            : ((o.dataLabels = o.dataLabels || []),
                              (f = o.dataLabels[l] =
                                C
                                  ? g
                                      .text(v, 0, -9999, h.useHTML)
                                      .addClass("highcharts-data-label")
                                  : g.label(
                                      v,
                                      0,
                                      -9999,
                                      h.shape,
                                      null,
                                      null,
                                      h.useHTML,
                                      null,
                                      "data-label"
                                    )),
                              l || (o.dataLabel = f),
                              f.addClass(
                                " highcharts-data-label-color-" +
                                  o.colorIndex +
                                  " " +
                                  (h.className || "") +
                                  (h.useHTML ? " highcharts-tracker" : "")
                              )),
                          (f.options = h),
                          f.attr(w),
                          e.styledMode || f.css(x).shadow(h.shadow),
                          f.added || f.add(b),
                          h.textPath &&
                            !h.useHTML &&
                            (f.setTextPath(
                              (o.getDataLabelPath && o.getDataLabelPath(f)) ||
                                o.graphic,
                              h.textPath
                            ),
                            o.dataLabelPath &&
                              !h.textPath.enabled &&
                              (o.dataLabelPath = o.dataLabelPath.destroy())),
                          t.alignDataLabel(o, f, h, null, y))
                        : ((o.dataLabel = o.dataLabel && o.dataLabel.destroy()),
                          o.dataLabels &&
                            (1 === o.dataLabels.length
                              ? delete o.dataLabels
                              : delete o.dataLabels[l]),
                          l || delete o.dataLabel,
                          u &&
                            ((o.connector = o.connector.destroy()),
                            o.connectors &&
                              (1 === o.connectors.length
                                ? delete o.connectors
                                : delete o.connectors[l])));
                    });
                  });
                }
                h(this, "afterDrawDataLabels");
              }
              function g(t, e, i, n, o, r) {
                var s = this.chart,
                  a = e.align,
                  h = e.verticalAlign,
                  l = t.box ? 0 : t.padding || 0,
                  c = e.x;
                c = void 0 === c ? 0 : c;
                var d = e.y;
                d = void 0 === d ? 0 : d;
                var p = (i.x || 0) + l;
                if (0 > p) {
                  "right" === a && 0 <= c
                    ? ((e.align = "left"), (e.inside = !0))
                    : (c -= p);
                  var u = !0;
                }
                p = (i.x || 0) + n.width - l;
                p > s.plotWidth &&
                  ("left" === a && 0 >= c
                    ? ((e.align = "right"), (e.inside = !0))
                    : (c += s.plotWidth - p),
                  (u = !0));
                p = i.y + l;
                0 > p &&
                  ("bottom" === h && 0 <= d
                    ? ((e.verticalAlign = "top"), (e.inside = !0))
                    : (d -= p),
                  (u = !0));
                p = (i.y || 0) + n.height - l;
                p > s.plotHeight &&
                  ("top" === h && 0 >= d
                    ? ((e.verticalAlign = "bottom"), (e.inside = !0))
                    : (d += s.plotHeight - p),
                  (u = !0));
                u &&
                  ((e.x = c),
                  (e.y = d),
                  (t.placed = !r),
                  t.align(e, void 0, o));
                return u;
              }
              function m(t, e) {
                var i = [],
                  n;
                if (l(t) && !l(e))
                  i = t.map(function (t) {
                    return c(t, e);
                  });
                else if (l(e) && !l(t))
                  i = e.map(function (e) {
                    return c(t, e);
                  });
                else if (l(t) || l(e))
                  for (n = Math.max(t.length, e.length); n--; )
                    i[n] = c(t[n], e[n]);
                else i = c(t, e);
                return i;
              }
              function y(t, e, i, n, o) {
                var r = this.chart,
                  s = r.inverted,
                  a = this.xAxis,
                  h = a.reversed,
                  l = s ? e.height / 2 : e.width / 2;
                t = (t = t.pointWidth) ? t / 2 : 0;
                e.startXPos = s ? o.x : h ? -l - t : a.width - l + t;
                e.startYPos = s
                  ? h
                    ? this.yAxis.height - l + t
                    : -l - t
                  : o.y;
                n
                  ? "hidden" === e.visibility &&
                    (e.show(), e.attr({ opacity: 0 }).animate({ opacity: 1 }))
                  : e
                      .attr({ opacity: 1 })
                      .animate({ opacity: 0 }, void 0, e.hide);
                r.hasRendered &&
                  (i && e.attr({ x: e.startXPos, y: e.startYPos }),
                  (e.placed = !0));
              }
              var v = [];
              t.compose = function (t) {
                if (-1 === v.indexOf(t)) {
                  var i = t.prototype;
                  v.push(t);
                  i.alignDataLabel = e;
                  i.drawDataLabels = f;
                  i.justifyDataLabel = g;
                  i.setDataLabelStartPos = y;
                }
              };
            })(f || (f = {}));
            ("");
            return f;
          }
        );
        e(
          i,
          "Series/Column/ColumnDataLabel.js",
          [
            i["Core/Series/DataLabel.js"],
            i["Core/Series/SeriesRegistry.js"],
            i["Core/Utilities.js"],
          ],
          function (t, e, i) {
            var n = e.series,
              o = i.merge,
              r = i.pick,
              s;
            (function (e) {
              function i(t, e, i, s, a) {
                var h = this.chart.inverted,
                  l = t.series,
                  c = t.dlBox || t.shapeArgs,
                  d = r(
                    t.below,
                    t.plotY > r(this.translatedThreshold, l.yAxis.len)
                  ),
                  p = r(i.inside, !!this.options.stacking);
                c &&
                  ((s = o(c)),
                  0 > s.y && ((s.height += s.y), (s.y = 0)),
                  (c = s.y + s.height - l.yAxis.len),
                  0 < c && c < s.height && (s.height -= c),
                  h &&
                    (s = {
                      x: l.yAxis.len - s.y - s.height,
                      y: l.xAxis.len - s.x - s.width,
                      width: s.height,
                      height: s.width,
                    }),
                  p ||
                    (h
                      ? ((s.x += d ? 0 : s.width), (s.width = 0))
                      : ((s.y += d ? s.height : 0), (s.height = 0))));
                i.align = r(i.align, !h || p ? "center" : d ? "right" : "left");
                i.verticalAlign = r(
                  i.verticalAlign,
                  h || p ? "middle" : d ? "top" : "bottom"
                );
                n.prototype.alignDataLabel.call(this, t, e, i, s, a);
                i.inside &&
                  t.contrastColor &&
                  e.css({ color: t.contrastColor });
              }
              var s = [];
              e.compose = function (e) {
                t.compose(n);
                -1 === s.indexOf(e) &&
                  (s.push(e), (e.prototype.alignDataLabel = i));
              };
            })(s || (s = {}));
            return s;
          }
        );
        e(
          i,
          "Series/Bar/BarSeries.js",
          [
            i["Series/Column/ColumnSeries.js"],
            i["Core/Series/SeriesRegistry.js"],
            i["Core/Utilities.js"],
          ],
          function (t, e, i) {
            var n =
                (this && this.__extends) ||
                (function () {
                  var t = function (e, i) {
                    t =
                      Object.setPrototypeOf ||
                      ({ __proto__: [] } instanceof Array &&
                        function (t, e) {
                          t.__proto__ = e;
                        }) ||
                      function (t, e) {
                        for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
                      };
                    return t(e, i);
                  };
                  return function (e, i) {
                    function n() {
                      this.constructor = e;
                    }
                    t(e, i);
                    e.prototype =
                      null === i
                        ? Object.create(i)
                        : ((n.prototype = i.prototype), new n());
                  };
                })(),
              o = i.extend,
              r = i.merge;
            i = (function (e) {
              function i() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                t.data = void 0;
                t.options = void 0;
                t.points = void 0;
                return t;
              }
              n(i, e);
              i.defaultOptions = r(t.defaultOptions, {});
              return i;
            })(t);
            o(i.prototype, { inverted: !0 });
            e.registerSeriesType("bar", i);
            ("");
            return i;
          }
        );
        e(
          i,
          "Series/Scatter/ScatterSeries.js",
          [
            i["Series/Column/ColumnSeries.js"],
            i["Series/Line/LineSeries.js"],
            i["Core/Series/SeriesRegistry.js"],
            i["Core/Utilities.js"],
          ],
          function (t, e, i, n) {
            var o =
                (this && this.__extends) ||
                (function () {
                  var t = function (e, i) {
                    t =
                      Object.setPrototypeOf ||
                      ({ __proto__: [] } instanceof Array &&
                        function (t, e) {
                          t.__proto__ = e;
                        }) ||
                      function (t, e) {
                        for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
                      };
                    return t(e, i);
                  };
                  return function (e, i) {
                    function n() {
                      this.constructor = e;
                    }
                    t(e, i);
                    e.prototype =
                      null === i
                        ? Object.create(i)
                        : ((n.prototype = i.prototype), new n());
                  };
                })(),
              r = n.addEvent,
              s = n.extend,
              a = n.merge;
            n = (function (t) {
              function i() {
                var e = (null !== t && t.apply(this, arguments)) || this;
                e.data = void 0;
                e.options = void 0;
                e.points = void 0;
                return e;
              }
              o(i, t);
              i.prototype.applyJitter = function () {
                var t = this,
                  e = this.options.jitter,
                  i = this.points.length;
                e &&
                  this.points.forEach(function (n, o) {
                    ["x", "y"].forEach(function (r, s) {
                      var a = "plot" + r.toUpperCase();
                      if (e[r] && !n.isNull) {
                        var h = t[r + "Axis"];
                        var l = e[r] * h.transA;
                        if (h && !h.isLog) {
                          var c = Math.max(0, n[a] - l);
                          h = Math.min(h.len, n[a] + l);
                          s = 1e4 * Math.sin(o + s * i);
                          n[a] = c + (h - c) * (s - Math.floor(s));
                          "x" === r && (n.clientX = n.plotX);
                        }
                      }
                    });
                  });
              };
              i.prototype.drawGraph = function () {
                this.options.lineWidth
                  ? t.prototype.drawGraph.call(this)
                  : this.graph && (this.graph = this.graph.destroy());
              };
              i.defaultOptions = a(e.defaultOptions, {
                lineWidth: 0,
                findNearestPointBy: "xy",
                jitter: { x: 0, y: 0 },
                marker: { enabled: !0 },
                tooltip: {
                  headerFormat:
                    '<span style="color:{point.color}">●</span> <span style="font-size: 10px"> {series.name}</span><br/>',
                  pointFormat:
                    "x: <b>{point.x}</b><br/>y: <b>{point.y}</b><br/>",
                },
              });
              return i;
            })(e);
            s(n.prototype, {
              drawTracker: t.prototype.drawTracker,
              sorted: !1,
              requireSorting: !1,
              noSharedTooltip: !0,
              trackerGroups: ["group", "markerGroup", "dataLabelsGroup"],
              takeOrdinalPosition: !1,
            });
            r(n, "afterTranslate", function () {
              this.applyJitter();
            });
            i.registerSeriesType("scatter", n);
            ("");
            return n;
          }
        );
        e(
          i,
          "Mixins/CenteredSeries.js",
          [
            i["Core/Globals.js"],
            i["Core/Series/Series.js"],
            i["Core/Utilities.js"],
          ],
          function (t, e, i) {
            var n = i.isNumber,
              o = i.pick,
              r = i.relativeLength,
              s = t.deg2rad;
            return (t.CenteredSeriesMixin = {
              getCenter: function () {
                var t = this.options,
                  i = this.chart,
                  n = 2 * (t.slicedOffset || 0),
                  s = i.plotWidth - 2 * n,
                  a = i.plotHeight - 2 * n,
                  h = t.center,
                  l = Math.min(s, a),
                  c = t.size,
                  d = t.innerSize || 0;
                "string" === typeof c && (c = parseFloat(c));
                "string" === typeof d && (d = parseFloat(d));
                t = [
                  o(h[0], "50%"),
                  o(h[1], "50%"),
                  o(c && 0 > c ? void 0 : t.size, "100%"),
                  o(d && 0 > d ? void 0 : t.innerSize || 0, "0%"),
                ];
                !i.angular || this instanceof e || (t[3] = 0);
                for (h = 0; 4 > h; ++h)
                  (c = t[h]),
                    (i = 2 > h || (2 === h && /%$/.test(c))),
                    (t[h] = r(c, [s, a, l, t[2]][h]) + (i ? n : 0));
                t[3] > t[2] && (t[3] = t[2]);
                return t;
              },
              getStartAndEndRadians: function (t, e) {
                t = n(t) ? t : 0;
                e = n(e) && e > t && 360 > e - t ? e : t + 360;
                return { start: s * (t + -90), end: s * (e + -90) };
              },
            });
          }
        );
        e(
          i,
          "Series/Pie/PiePoint.js",
          [
            i["Core/Animation/AnimationUtilities.js"],
            i["Core/Series/Point.js"],
            i["Core/Utilities.js"],
          ],
          function (t, e, i) {
            var n =
                (this && this.__extends) ||
                (function () {
                  var t = function (e, i) {
                    t =
                      Object.setPrototypeOf ||
                      ({ __proto__: [] } instanceof Array &&
                        function (t, e) {
                          t.__proto__ = e;
                        }) ||
                      function (t, e) {
                        for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
                      };
                    return t(e, i);
                  };
                  return function (e, i) {
                    function n() {
                      this.constructor = e;
                    }
                    t(e, i);
                    e.prototype =
                      null === i
                        ? Object.create(i)
                        : ((n.prototype = i.prototype), new n());
                  };
                })(),
              o = t.setAnimation,
              r = i.addEvent,
              s = i.defined;
            t = i.extend;
            var a = i.isNumber,
              h = i.pick,
              l = i.relativeLength;
            e = (function (t) {
              function e() {
                var e = (null !== t && t.apply(this, arguments)) || this;
                e.labelDistance = void 0;
                e.options = void 0;
                e.series = void 0;
                return e;
              }
              n(e, t);
              e.prototype.getConnectorPath = function () {
                var t = this.labelPosition,
                  e = this.series.options.dataLabels,
                  i = this.connectorShapes,
                  n = e.connectorShape;
                i[n] && (n = i[n]);
                return n.call(
                  this,
                  { x: t.final.x, y: t.final.y, alignment: t.alignment },
                  t.connectorPosition,
                  e
                );
              };
              e.prototype.getTranslate = function () {
                return this.sliced
                  ? this.slicedTranslation
                  : { translateX: 0, translateY: 0 };
              };
              e.prototype.haloPath = function (t) {
                var e = this.shapeArgs;
                return this.sliced || !this.visible
                  ? []
                  : this.series.chart.renderer.symbols.arc(
                      e.x,
                      e.y,
                      e.r + t,
                      e.r + t,
                      { innerR: e.r - 1, start: e.start, end: e.end }
                    );
              };
              e.prototype.init = function () {
                var e = this;
                t.prototype.init.apply(this, arguments);
                this.name = h(this.name, "Slice");
                var i = function (t) {
                  e.slice("select" === t.type);
                };
                r(this, "select", i);
                r(this, "unselect", i);
                return this;
              };
              e.prototype.isValid = function () {
                return a(this.y) && 0 <= this.y;
              };
              e.prototype.setVisible = function (t, e) {
                var i = this,
                  n = this.series,
                  o = n.chart,
                  r = n.options.ignoreHiddenPoint;
                e = h(e, r);
                t !== this.visible &&
                  ((this.visible =
                    this.options.visible =
                    t =
                      "undefined" === typeof t ? !this.visible : t),
                  (n.options.data[n.data.indexOf(this)] = this.options),
                  ["graphic", "dataLabel", "connector", "shadowGroup"].forEach(
                    function (e) {
                      if (i[e]) i[e][t ? "show" : "hide"](t);
                    }
                  ),
                  this.legendItem && o.legend.colorizeItem(this, t),
                  t || "hover" !== this.state || this.setState(""),
                  r && (n.isDirty = !0),
                  e && o.redraw());
              };
              e.prototype.slice = function (t, e, i) {
                var n = this.series;
                o(i, n.chart);
                h(e, !0);
                this.sliced = this.options.sliced = s(t) ? t : !this.sliced;
                n.options.data[n.data.indexOf(this)] = this.options;
                this.graphic && this.graphic.animate(this.getTranslate());
                this.shadowGroup &&
                  this.shadowGroup.animate(this.getTranslate());
              };
              return e;
            })(e);
            t(e.prototype, {
              connectorShapes: {
                fixedOffset: function (t, e, i) {
                  var n = e.breakAt;
                  e = e.touchingSliceAt;
                  return [
                    ["M", t.x, t.y],
                    i.softConnector
                      ? [
                          "C",
                          t.x + ("left" === t.alignment ? -5 : 5),
                          t.y,
                          2 * n.x - e.x,
                          2 * n.y - e.y,
                          n.x,
                          n.y,
                        ]
                      : ["L", n.x, n.y],
                    ["L", e.x, e.y],
                  ];
                },
                straight: function (t, e) {
                  e = e.touchingSliceAt;
                  return [
                    ["M", t.x, t.y],
                    ["L", e.x, e.y],
                  ];
                },
                crookedLine: function (t, e, i) {
                  e = e.touchingSliceAt;
                  var n = this.series,
                    o = n.center[0],
                    r = n.chart.plotWidth,
                    s = n.chart.plotLeft;
                  n = t.alignment;
                  var a = this.shapeArgs.r;
                  i = l(i.crookDistance, 1);
                  r =
                    "left" === n
                      ? o + a + (r + s - o - a) * (1 - i)
                      : s + (o - a) * i;
                  i = ["L", r, t.y];
                  o = !0;
                  if ("left" === n ? r > t.x || r < e.x : r < t.x || r > e.x)
                    o = !1;
                  t = [["M", t.x, t.y]];
                  o && t.push(i);
                  t.push(["L", e.x, e.y]);
                  return t;
                },
              },
            });
            return e;
          }
        );
        e(
          i,
          "Series/Pie/PieSeries.js",
          [
            i["Mixins/CenteredSeries.js"],
            i["Series/Column/ColumnSeries.js"],
            i["Core/Globals.js"],
            i["Core/Legend/LegendSymbol.js"],
            i["Core/Color/Palette.js"],
            i["Series/Pie/PiePoint.js"],
            i["Core/Series/Series.js"],
            i["Core/Series/SeriesRegistry.js"],
            i["Core/Renderer/SVG/Symbols.js"],
            i["Core/Utilities.js"],
          ],
          function (t, e, i, n, o, r, s, a, h, l) {
            var c =
                (this && this.__extends) ||
                (function () {
                  var t = function (e, i) {
                    t =
                      Object.setPrototypeOf ||
                      ({ __proto__: [] } instanceof Array &&
                        function (t, e) {
                          t.__proto__ = e;
                        }) ||
                      function (t, e) {
                        for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
                      };
                    return t(e, i);
                  };
                  return function (e, i) {
                    function n() {
                      this.constructor = e;
                    }
                    t(e, i);
                    e.prototype =
                      null === i
                        ? Object.create(i)
                        : ((n.prototype = i.prototype), new n());
                  };
                })(),
              d = t.getStartAndEndRadians;
            i = i.noop;
            var p = l.clamp,
              u = l.extend,
              f = l.fireEvent,
              g = l.merge,
              m = l.pick,
              y = l.relativeLength;
            l = (function (t) {
              function e() {
                var e = (null !== t && t.apply(this, arguments)) || this;
                e.center = void 0;
                e.data = void 0;
                e.maxLabelDistance = void 0;
                e.options = void 0;
                e.points = void 0;
                return e;
              }
              c(e, t);
              e.prototype.animate = function (t) {
                var e = this,
                  i = e.points,
                  n = e.startAngleRad;
                t ||
                  i.forEach(function (t) {
                    var i = t.graphic,
                      o = t.shapeArgs;
                    i &&
                      o &&
                      (i.attr({
                        r: m(t.startR, e.center && e.center[3] / 2),
                        start: n,
                        end: n,
                      }),
                      i.animate(
                        { r: o.r, start: o.start, end: o.end },
                        e.options.animation
                      ));
                  });
              };
              e.prototype.drawEmpty = function () {
                var t = this.startAngleRad,
                  e = this.endAngleRad,
                  i = this.options;
                if (0 === this.total && this.center) {
                  var n = this.center[0];
                  var r = this.center[1];
                  this.graph ||
                    (this.graph = this.chart.renderer
                      .arc(n, r, this.center[1] / 2, 0, t, e)
                      .addClass("highcharts-empty-series")
                      .add(this.group));
                  this.graph.attr({
                    d: h.arc(n, r, this.center[2] / 2, 0, {
                      start: t,
                      end: e,
                      innerR: this.center[3] / 2,
                    }),
                  });
                  this.chart.styledMode ||
                    this.graph.attr({
                      "stroke-width": i.borderWidth,
                      fill: i.fillColor || "none",
                      stroke: i.color || o.neutralColor20,
                    });
                } else this.graph && (this.graph = this.graph.destroy());
              };
              e.prototype.drawPoints = function () {
                var t = this.chart.renderer;
                this.points.forEach(function (e) {
                  e.graphic &&
                    e.hasNewShapeType() &&
                    (e.graphic = e.graphic.destroy());
                  e.graphic ||
                    ((e.graphic = t[e.shapeType](e.shapeArgs).add(
                      e.series.group
                    )),
                    (e.delayedRendering = !0));
                });
              };
              e.prototype.generatePoints = function () {
                t.prototype.generatePoints.call(this);
                this.updateTotals();
              };
              e.prototype.getX = function (t, e, i) {
                var n = this.center,
                  o = this.radii ? this.radii[i.index] || 0 : n[2] / 2;
                t = Math.asin(p((t - n[1]) / (o + i.labelDistance), -1, 1));
                return (
                  n[0] +
                  (e ? -1 : 1) * Math.cos(t) * (o + i.labelDistance) +
                  (0 < i.labelDistance
                    ? (e ? -1 : 1) * this.options.dataLabels.padding
                    : 0)
                );
              };
              e.prototype.hasData = function () {
                return !!this.processedXData.length;
              };
              e.prototype.redrawPoints = function () {
                var t = this,
                  e = t.chart,
                  i = e.renderer,
                  n = t.options.shadow,
                  o,
                  r,
                  s,
                  a;
                this.drawEmpty();
                !n ||
                  t.shadowGroup ||
                  e.styledMode ||
                  (t.shadowGroup = i
                    .g("shadow")
                    .attr({ zIndex: -1 })
                    .add(t.group));
                t.points.forEach(function (h) {
                  var l = {};
                  r = h.graphic;
                  if (!h.isNull && r) {
                    var c = void 0;
                    a = h.shapeArgs;
                    o = h.getTranslate();
                    e.styledMode ||
                      ((c = h.shadowGroup),
                      n &&
                        !c &&
                        (c = h.shadowGroup = i.g("shadow").add(t.shadowGroup)),
                      c && c.attr(o),
                      (s = t.pointAttribs(h, h.selected && "select")));
                    h.delayedRendering
                      ? (r.setRadialReference(t.center).attr(a).attr(o),
                        e.styledMode ||
                          r
                            .attr(s)
                            .attr({ "stroke-linejoin": "round" })
                            .shadow(n, c),
                        (h.delayedRendering = !1))
                      : (r.setRadialReference(t.center),
                        e.styledMode || g(!0, l, s),
                        g(!0, l, a, o),
                        r.animate(l));
                    r.attr({ visibility: h.visible ? "inherit" : "hidden" });
                    r.addClass(h.getClassName(), !0);
                  } else r && (h.graphic = r.destroy());
                });
              };
              e.prototype.sortByAngle = function (t, e) {
                t.sort(function (t, i) {
                  return (
                    "undefined" !== typeof t.angle && (i.angle - t.angle) * e
                  );
                });
              };
              e.prototype.translate = function (t) {
                this.generatePoints();
                var e = this.options,
                  i = e.slicedOffset,
                  n = i + (e.borderWidth || 0),
                  o = d(e.startAngle, e.endAngle),
                  r = (this.startAngleRad = o.start);
                o = (this.endAngleRad = o.end) - r;
                var s = this.points,
                  a = e.dataLabels.distance;
                e = e.ignoreHiddenPoint;
                var h = s.length,
                  l,
                  c = 0;
                t || (this.center = t = this.getCenter());
                for (l = 0; l < h; l++) {
                  var p = s[l];
                  var u = r + c * o;
                  !p.isValid() ||
                    (e && !p.visible) ||
                    (c += p.percentage / 100);
                  var g = r + c * o;
                  var v = {
                    x: t[0],
                    y: t[1],
                    r: t[2] / 2,
                    innerR: t[3] / 2,
                    start: Math.round(1e3 * u) / 1e3,
                    end: Math.round(1e3 * g) / 1e3,
                  };
                  p.shapeType = "arc";
                  p.shapeArgs = v;
                  p.labelDistance = m(
                    p.options.dataLabels && p.options.dataLabels.distance,
                    a
                  );
                  p.labelDistance = y(p.labelDistance, v.r);
                  this.maxLabelDistance = Math.max(
                    this.maxLabelDistance || 0,
                    p.labelDistance
                  );
                  g = (g + u) / 2;
                  g > 1.5 * Math.PI
                    ? (g -= 2 * Math.PI)
                    : g < -Math.PI / 2 && (g += 2 * Math.PI);
                  p.slicedTranslation = {
                    translateX: Math.round(Math.cos(g) * i),
                    translateY: Math.round(Math.sin(g) * i),
                  };
                  v = (Math.cos(g) * t[2]) / 2;
                  var x = (Math.sin(g) * t[2]) / 2;
                  p.tooltipPos = [t[0] + 0.7 * v, t[1] + 0.7 * x];
                  p.half = g < -Math.PI / 2 || g > Math.PI / 2 ? 1 : 0;
                  p.angle = g;
                  u = Math.min(n, p.labelDistance / 5);
                  p.labelPosition = {
                    natural: {
                      x: t[0] + v + Math.cos(g) * p.labelDistance,
                      y: t[1] + x + Math.sin(g) * p.labelDistance,
                    },
                    final: {},
                    alignment:
                      0 > p.labelDistance
                        ? "center"
                        : p.half
                        ? "right"
                        : "left",
                    connectorPosition: {
                      breakAt: {
                        x: t[0] + v + Math.cos(g) * u,
                        y: t[1] + x + Math.sin(g) * u,
                      },
                      touchingSliceAt: { x: t[0] + v, y: t[1] + x },
                    },
                  };
                }
                f(this, "afterTranslate");
              };
              e.prototype.updateTotals = function () {
                var t = this.points,
                  e = t.length,
                  i = this.options.ignoreHiddenPoint,
                  n,
                  o = 0;
                for (n = 0; n < e; n++) {
                  var r = t[n];
                  !r.isValid() || (i && !r.visible) || (o += r.y);
                }
                this.total = o;
                for (n = 0; n < e; n++)
                  (r = t[n]),
                    (r.percentage =
                      0 < o && (r.visible || !i) ? (r.y / o) * 100 : 0),
                    (r.total = o);
              };
              e.defaultOptions = g(s.defaultOptions, {
                center: [null, null],
                clip: !1,
                colorByPoint: !0,
                dataLabels: {
                  allowOverlap: !0,
                  connectorPadding: 5,
                  connectorShape: "fixedOffset",
                  crookDistance: "70%",
                  distance: 30,
                  enabled: !0,
                  formatter: function () {
                    return this.point.isNull ? void 0 : this.point.name;
                  },
                  softConnector: !0,
                  x: 0,
                },
                fillColor: void 0,
                ignoreHiddenPoint: !0,
                inactiveOtherPoints: !0,
                legendType: "point",
                marker: null,
                size: null,
                showInLegend: !1,
                slicedOffset: 10,
                stickyTracking: !1,
                tooltip: { followPointer: !0 },
                borderColor: o.backgroundColor,
                borderWidth: 1,
                lineWidth: void 0,
                states: { hover: { brightness: 0.1 } },
              });
              return e;
            })(s);
            u(l.prototype, {
              axisTypes: [],
              directTouch: !0,
              drawGraph: void 0,
              drawLegendSymbol: n.drawRectangle,
              drawTracker: e.prototype.drawTracker,
              getCenter: t.getCenter,
              getSymbol: i,
              isCartesian: !1,
              noSharedTooltip: !0,
              pointAttribs: e.prototype.pointAttribs,
              pointClass: r,
              requireSorting: !1,
              searchPoint: i,
              trackerGroups: ["group", "dataLabelsGroup"],
            });
            a.registerSeriesType("pie", l);
            ("");
            return l;
          }
        );
        e(
          i,
          "Series/Pie/PieDataLabel.js",
          [
            i["Core/Series/DataLabel.js"],
            i["Core/Globals.js"],
            i["Core/Color/Palette.js"],
            i["Core/Renderer/RendererUtilities.js"],
            i["Core/Series/SeriesRegistry.js"],
            i["Core/Utilities.js"],
          ],
          function (t, e, i, n, o, r) {
            var s = e.noop,
              a = n.distribute,
              h = o.series,
              l = r.arrayMax,
              c = r.clamp,
              d = r.defined,
              p = r.merge,
              u = r.pick,
              f = r.relativeLength,
              g;
            (function (e) {
              function n() {
                var t = this,
                  e = t.data,
                  n = t.chart,
                  o = t.options.dataLabels || {},
                  r = o.connectorPadding,
                  s = n.plotWidth,
                  c = n.plotHeight,
                  f = n.plotLeft,
                  g = Math.round(n.chartWidth / 3),
                  m = t.center,
                  y = m[2] / 2,
                  v = m[1],
                  x = [[], []],
                  b = [0, 0, 0, 0],
                  C = t.dataLabelPositioners,
                  w,
                  S,
                  A,
                  k,
                  T,
                  M,
                  P,
                  E,
                  L,
                  O,
                  D,
                  j;
                t.visible &&
                  (o.enabled || t._hasPointLabels) &&
                  (e.forEach(function (t) {
                    t.dataLabel &&
                      t.visible &&
                      t.dataLabel.shortened &&
                      (t.dataLabel
                        .attr({ width: "auto" })
                        .css({ width: "auto", textOverflow: "clip" }),
                      (t.dataLabel.shortened = !1));
                  }),
                  h.prototype.drawDataLabels.apply(t),
                  e.forEach(function (t) {
                    t.dataLabel &&
                      (t.visible
                        ? (x[t.half].push(t),
                          (t.dataLabel._pos = null),
                          !d(o.style.width) &&
                            !d(
                              t.options.dataLabels &&
                                t.options.dataLabels.style &&
                                t.options.dataLabels.style.width
                            ) &&
                            t.dataLabel.getBBox().width > g &&
                            (t.dataLabel.css({
                              width: Math.round(0.7 * g) + "px",
                            }),
                            (t.dataLabel.shortened = !0)))
                        : ((t.dataLabel = t.dataLabel.destroy()),
                          t.dataLabels &&
                            1 === t.dataLabels.length &&
                            delete t.dataLabels));
                  }),
                  x.forEach(function (e, i) {
                    var h = e.length,
                      l = [],
                      p;
                    if (h) {
                      t.sortByAngle(e, i - 0.5);
                      if (0 < t.maxLabelDistance) {
                        var g = Math.max(0, v - y - t.maxLabelDistance);
                        var x = Math.min(
                          v + y + t.maxLabelDistance,
                          n.plotHeight
                        );
                        e.forEach(function (t) {
                          0 < t.labelDistance &&
                            t.dataLabel &&
                            ((t.top = Math.max(0, v - y - t.labelDistance)),
                            (t.bottom = Math.min(
                              v + y + t.labelDistance,
                              n.plotHeight
                            )),
                            (p = t.dataLabel.getBBox().height || 21),
                            (t.distributeBox = {
                              target: t.labelPosition.natural.y - t.top + p / 2,
                              size: p,
                              rank: t.y,
                            }),
                            l.push(t.distributeBox));
                        });
                        g = x + p - g;
                        a(l, g, g / 5);
                      }
                      for (D = 0; D < h; D++) {
                        w = e[D];
                        M = w.labelPosition;
                        k = w.dataLabel;
                        O = !1 === w.visible ? "hidden" : "inherit";
                        L = g = M.natural.y;
                        l &&
                          d(w.distributeBox) &&
                          ("undefined" === typeof w.distributeBox.pos
                            ? (O = "hidden")
                            : ((P = w.distributeBox.size),
                              (L = C.radialDistributionY(w))));
                        delete w.positionIndex;
                        if (o.justify) E = C.justify(w, y, m);
                        else
                          switch (o.alignTo) {
                            case "connectors":
                              E = C.alignToConnectors(e, i, s, f);
                              break;
                            case "plotEdges":
                              E = C.alignToPlotEdges(k, i, s, f);
                              break;
                            default:
                              E = C.radialDistributionX(t, w, L, g);
                          }
                        k._attr = { visibility: O, align: M.alignment };
                        j = w.options.dataLabels || {};
                        k._pos = {
                          x:
                            E +
                            u(j.x, o.x) +
                            ({ left: r, right: -r }[M.alignment] || 0),
                          y: L + u(j.y, o.y) - 10,
                        };
                        M.final.x = E;
                        M.final.y = L;
                        u(o.crop, !0) &&
                          ((T = k.getBBox().width),
                          (g = null),
                          E - T < r && 1 === i
                            ? ((g = Math.round(T - E + r)),
                              (b[3] = Math.max(g, b[3])))
                            : E + T > s - r &&
                              0 === i &&
                              ((g = Math.round(E + T - s + r)),
                              (b[1] = Math.max(g, b[1]))),
                          0 > L - P / 2
                            ? (b[0] = Math.max(Math.round(-L + P / 2), b[0]))
                            : L + P / 2 > c &&
                              (b[2] = Math.max(
                                Math.round(L + P / 2 - c),
                                b[2]
                              )),
                          (k.sideOverflow = g));
                      }
                    }
                  }),
                  0 === l(b) || this.verifyDataLabelOverflow(b)) &&
                  (this.placeDataLabels(),
                  this.points.forEach(function (e) {
                    j = p(o, e.options.dataLabels);
                    if ((S = u(j.connectorWidth, 1))) {
                      var r;
                      A = e.connector;
                      if (
                        (k = e.dataLabel) &&
                        k._pos &&
                        e.visible &&
                        0 < e.labelDistance
                      ) {
                        O = k._attr.visibility;
                        if ((r = !A))
                          (e.connector = A =
                            n.renderer
                              .path()
                              .addClass(
                                "highcharts-data-label-connector  highcharts-color-" +
                                  e.colorIndex +
                                  (e.className ? " " + e.className : "")
                              )
                              .add(t.dataLabelsGroup)),
                            n.styledMode ||
                              A.attr({
                                "stroke-width": S,
                                stroke:
                                  j.connectorColor ||
                                  e.color ||
                                  i.neutralColor60,
                              });
                        A[r ? "attr" : "animate"]({ d: e.getConnectorPath() });
                        A.attr("visibility", O);
                      } else A && (e.connector = A.destroy());
                    }
                  }));
              }
              function o() {
                this.points.forEach(function (t) {
                  var e = t.dataLabel,
                    i;
                  e &&
                    t.visible &&
                    ((i = e._pos)
                      ? (e.sideOverflow &&
                          ((e._attr.width = Math.max(
                            e.getBBox().width - e.sideOverflow,
                            0
                          )),
                          e.css({
                            width: e._attr.width + "px",
                            textOverflow:
                              (this.options.dataLabels.style || {})
                                .textOverflow || "ellipsis",
                          }),
                          (e.shortened = !0)),
                        e.attr(e._attr),
                        e[e.moved ? "animate" : "attr"](i),
                        (e.moved = !0))
                      : e && e.attr({ y: -9999 }));
                  delete t.distributeBox;
                }, this);
              }
              function r(t) {
                var e = this.center,
                  i = this.options,
                  n = i.center,
                  o = i.minSize || 80,
                  r = null !== i.size;
                if (!r) {
                  if (null !== n[0])
                    var s = Math.max(e[2] - Math.max(t[1], t[3]), o);
                  else
                    (s = Math.max(e[2] - t[1] - t[3], o)),
                      (e[0] += (t[3] - t[1]) / 2);
                  null !== n[1]
                    ? (s = c(s, o, e[2] - Math.max(t[0], t[2])))
                    : ((s = c(s, o, e[2] - t[0] - t[2])),
                      (e[1] += (t[0] - t[2]) / 2));
                  s < e[2]
                    ? ((e[2] = s),
                      (e[3] = Math.min(f(i.innerSize || 0, s), s)),
                      this.translate(e),
                      this.drawDataLabels && this.drawDataLabels())
                    : (r = !0);
                }
                return r;
              }
              var g = [],
                m = {
                  radialDistributionY: function (t) {
                    return t.top + t.distributeBox.pos;
                  },
                  radialDistributionX: function (t, e, i, n) {
                    return t.getX(
                      i < e.top + 2 || i > e.bottom - 2 ? n : i,
                      e.half,
                      e
                    );
                  },
                  justify: function (t, e, i) {
                    return i[0] + (t.half ? -1 : 1) * (e + t.labelDistance);
                  },
                  alignToPlotEdges: function (t, e, i, n) {
                    t = t.getBBox().width;
                    return e ? t + n : i - t - n;
                  },
                  alignToConnectors: function (t, e, i, n) {
                    var o = 0,
                      r;
                    t.forEach(function (t) {
                      r = t.dataLabel.getBBox().width;
                      r > o && (o = r);
                    });
                    return e ? o + n : i - o - n;
                  },
                };
              e.compose = function (e) {
                t.compose(h);
                -1 === g.indexOf(e) &&
                  (g.push(e),
                  (e = e.prototype),
                  (e.dataLabelPositioners = m),
                  (e.alignDataLabel = s),
                  (e.drawDataLabels = n),
                  (e.placeDataLabels = o),
                  (e.verifyDataLabelOverflow = r));
              };
            })(g || (g = {}));
            return g;
          }
        );
        e(
          i,
          "Extensions/OverlappingDataLabels.js",
          [i["Core/Chart/Chart.js"], i["Core/Utilities.js"]],
          function (t, e) {
            function i(t, e) {
              var i = !1;
              if (t) {
                var n = t.newOpacity;
                t.oldOpacity !== n &&
                  (t.alignAttr && t.placed
                    ? (t[n ? "removeClass" : "addClass"](
                        "highcharts-data-label-hidden"
                      ),
                      (i = !0),
                      (t.alignAttr.opacity = n),
                      t[t.isOld ? "animate" : "attr"](
                        t.alignAttr,
                        null,
                        function () {
                          e.styledMode ||
                            t.css({ pointerEvents: n ? "auto" : "none" });
                        }
                      ),
                      o(e, "afterHideOverlappingLabel"))
                    : t.attr({ opacity: n }));
                t.isOld = !0;
              }
              return i;
            }
            var n = e.addEvent,
              o = e.fireEvent,
              r = e.isArray,
              s = e.isNumber,
              a = e.objectEach,
              h = e.pick;
            n(t, "render", function () {
              var t = this,
                e = [];
              (this.labelCollectors || []).forEach(function (t) {
                e = e.concat(t());
              });
              (this.yAxis || []).forEach(function (t) {
                t.stacking &&
                  t.options.stackLabels &&
                  !t.options.stackLabels.allowOverlap &&
                  a(t.stacking.stacks, function (t) {
                    a(t, function (t) {
                      t.label &&
                        "hidden" !== t.label.visibility &&
                        e.push(t.label);
                    });
                  });
              });
              (this.series || []).forEach(function (n) {
                var o = n.options.dataLabels;
                n.visible &&
                  (!1 !== o.enabled || n._hasPointLabels) &&
                  ((o = function (n) {
                    return n.forEach(function (n) {
                      n.visible &&
                        (r(n.dataLabels)
                          ? n.dataLabels
                          : n.dataLabel
                          ? [n.dataLabel]
                          : []
                        ).forEach(function (o) {
                          var r = o.options;
                          o.labelrank = h(
                            r.labelrank,
                            n.labelrank,
                            n.shapeArgs && n.shapeArgs.height
                          );
                          r.allowOverlap
                            ? ((o.oldOpacity = o.opacity),
                              (o.newOpacity = 1),
                              i(o, t))
                            : e.push(o);
                        });
                    });
                  }),
                  o(n.nodes || []),
                  o(n.points));
              });
              this.hideOverlappingLabels(e);
            });
            t.prototype.hideOverlappingLabels = function (t) {
              var e = this,
                n = t.length,
                r = e.renderer,
                a,
                h,
                l,
                c = !1;
              var d = function (t) {
                var e,
                  i = t.box ? 0 : t.padding || 0,
                  n = (e = 0),
                  o;
                if (t && (!t.alignAttr || t.placed)) {
                  var a = t.alignAttr || { x: t.attr("x"), y: t.attr("y") };
                  var h = t.parentGroup;
                  t.width ||
                    ((e = t.getBBox()),
                    (t.width = e.width),
                    (t.height = e.height),
                    (e = r.fontMetrics(null, t.element).h));
                  var l = t.width - 2 * i;
                  (o = { left: "0", center: "0.5", right: "1" }[t.alignValue])
                    ? (n = +o * l)
                    : s(t.x) &&
                      Math.round(t.x) !== t.translateX &&
                      (n = t.x - t.translateX);
                  return {
                    x: a.x + (h.translateX || 0) + i - (n || 0),
                    y: a.y + (h.translateY || 0) + i - e,
                    width: t.width - 2 * i,
                    height: t.height - 2 * i,
                  };
                }
              };
              for (h = 0; h < n; h++)
                if ((a = t[h]))
                  (a.oldOpacity = a.opacity),
                    (a.newOpacity = 1),
                    (a.absoluteBox = d(a));
              t.sort(function (t, e) {
                return (e.labelrank || 0) - (t.labelrank || 0);
              });
              for (h = 0; h < n; h++) {
                var p = (d = t[h]) && d.absoluteBox;
                for (a = h + 1; a < n; ++a) {
                  var u = (l = t[a]) && l.absoluteBox;
                  !p ||
                    !u ||
                    d === l ||
                    0 === d.newOpacity ||
                    0 === l.newOpacity ||
                    u.x >= p.x + p.width ||
                    u.x + u.width <= p.x ||
                    u.y >= p.y + p.height ||
                    u.y + u.height <= p.y ||
                    ((d.labelrank < l.labelrank ? d : l).newOpacity = 0);
                }
              }
              t.forEach(function (t) {
                i(t, e) && (c = !0);
              });
              c && o(e, "afterHideAllOverlappingLabels");
            };
          }
        );
        e(i, "Core/Responsive.js", [i["Core/Utilities.js"]], function (t) {
          var e = t.extend,
            i = t.find,
            n = t.isArray,
            o = t.isObject,
            r = t.merge,
            s = t.objectEach,
            a = t.pick,
            h = t.splat,
            l = t.uniqueKey,
            c;
          (function (t) {
            var c = [];
            t.compose = function (t) {
              -1 === c.indexOf(t) && (c.push(t), e(t.prototype, d.prototype));
              return t;
            };
            var d = (function () {
              function t() {}
              t.prototype.currentOptions = function (t) {
                function e(t, r, a, l) {
                  var c;
                  s(t, function (t, s) {
                    if (!l && -1 < i.collectionsWithUpdate.indexOf(s) && r[s])
                      for (
                        t = h(t), a[s] = [], c = 0;
                        c < Math.max(t.length, r[s].length);
                        c++
                      )
                        r[s][c] &&
                          (void 0 === t[c]
                            ? (a[s][c] = r[s][c])
                            : ((a[s][c] = {}),
                              e(t[c], r[s][c], a[s][c], l + 1)));
                    else
                      o(t)
                        ? ((a[s] = n(t) ? [] : {}),
                          e(t, r[s] || {}, a[s], l + 1))
                        : (a[s] = "undefined" === typeof r[s] ? null : r[s]);
                  });
                }
                var i = this,
                  r = {};
                e(t, this.options, r, 0);
                return r;
              };
              t.prototype.matchResponsiveRule = function (t, e) {
                var i = t.condition;
                (
                  i.callback ||
                  function () {
                    return (
                      this.chartWidth <= a(i.maxWidth, Number.MAX_VALUE) &&
                      this.chartHeight <= a(i.maxHeight, Number.MAX_VALUE) &&
                      this.chartWidth >= a(i.minWidth, 0) &&
                      this.chartHeight >= a(i.minHeight, 0)
                    );
                  }
                ).call(this) && e.push(t._id);
              };
              t.prototype.setResponsive = function (t, e) {
                var n = this,
                  o = this.options.responsive,
                  s = this.currentResponsive,
                  a = [];
                !e &&
                  o &&
                  o.rules &&
                  o.rules.forEach(function (t) {
                    "undefined" === typeof t._id && (t._id = l());
                    n.matchResponsiveRule(t, a);
                  }, this);
                e = r.apply(
                  void 0,
                  a
                    .map(function (t) {
                      return i((o || {}).rules || [], function (e) {
                        return e._id === t;
                      });
                    })
                    .map(function (t) {
                      return t && t.chartOptions;
                    })
                );
                e.isResponsiveOptions = !0;
                a = a.toString() || void 0;
                a !== (s && s.ruleIds) &&
                  (s && this.update(s.undoOptions, t, !0),
                  a
                    ? ((s = this.currentOptions(e)),
                      (s.isResponsiveOptions = !0),
                      (this.currentResponsive = {
                        ruleIds: a,
                        mergedOptions: e,
                        undoOptions: s,
                      }),
                      this.update(e, t, !0))
                    : (this.currentResponsive = void 0));
              };
              return t;
            })();
          })(c || (c = {}));
          ("");
          ("");
          return c;
        });
        e(
          i,
          "masters/highcharts.src.js",
          [
            i["Core/Globals.js"],
            i["Core/Utilities.js"],
            i["Core/DefaultOptions.js"],
            i["Core/Animation/Fx.js"],
            i["Core/Animation/AnimationUtilities.js"],
            i["Core/Renderer/HTML/AST.js"],
            i["Core/FormatUtilities.js"],
            i["Core/Renderer/RendererUtilities.js"],
            i["Core/Renderer/SVG/SVGElement.js"],
            i["Core/Renderer/SVG/SVGRenderer.js"],
            i["Core/Renderer/HTML/HTMLElement.js"],
            i["Core/Renderer/HTML/HTMLRenderer.js"],
            i["Core/Axis/Axis.js"],
            i["Core/Axis/DateTimeAxis.js"],
            i["Core/Axis/LogarithmicAxis.js"],
            i["Core/Axis/PlotLineOrBand/PlotLineOrBand.js"],
            i["Core/Axis/Tick.js"],
            i["Core/Tooltip.js"],
            i["Core/Series/Point.js"],
            i["Core/Pointer.js"],
            i["Core/MSPointer.js"],
            i["Core/Legend/Legend.js"],
            i["Core/Chart/Chart.js"],
            i["Core/Series/Series.js"],
            i["Core/Series/SeriesRegistry.js"],
            i["Series/Column/ColumnSeries.js"],
            i["Series/Column/ColumnDataLabel.js"],
            i["Series/Pie/PieSeries.js"],
            i["Series/Pie/PieDataLabel.js"],
            i["Core/Series/DataLabel.js"],
            i["Core/Responsive.js"],
            i["Core/Color/Color.js"],
            i["Core/Time.js"],
          ],
          function (
            t,
            e,
            i,
            n,
            o,
            r,
            s,
            a,
            h,
            l,
            c,
            d,
            p,
            u,
            f,
            g,
            m,
            y,
            v,
            x,
            b,
            C,
            w,
            S,
            A,
            k,
            T,
            M,
            P,
            E,
            L,
            O,
            D
          ) {
            t.animate = o.animate;
            t.animObject = o.animObject;
            t.getDeferredAnimation = o.getDeferredAnimation;
            t.setAnimation = o.setAnimation;
            t.stop = o.stop;
            t.timers = n.timers;
            t.AST = r;
            t.Axis = p;
            t.Chart = w;
            t.chart = w.chart;
            t.Fx = n;
            t.Legend = C;
            t.PlotLineOrBand = g;
            t.Point = v;
            t.Pointer = b.isRequired() ? b : x;
            t.Series = S;
            t.SVGElement = h;
            t.SVGRenderer = l;
            t.Tick = m;
            t.Time = D;
            t.Tooltip = y;
            t.Color = O;
            t.color = O.parse;
            d.compose(l);
            c.compose(h);
            t.defaultOptions = i.defaultOptions;
            t.getOptions = i.getOptions;
            t.time = i.defaultTime;
            t.setOptions = i.setOptions;
            t.dateFormat = s.dateFormat;
            t.format = s.format;
            t.numberFormat = s.numberFormat;
            t.addEvent = e.addEvent;
            t.arrayMax = e.arrayMax;
            t.arrayMin = e.arrayMin;
            t.attr = e.attr;
            t.clearTimeout = e.clearTimeout;
            t.correctFloat = e.correctFloat;
            t.createElement = e.createElement;
            t.css = e.css;
            t.defined = e.defined;
            t.destroyObjectProperties = e.destroyObjectProperties;
            t.discardElement = e.discardElement;
            t.distribute = a.distribute;
            t.erase = e.erase;
            t.error = e.error;
            t.extend = e.extend;
            t.extendClass = e.extendClass;
            t.find = e.find;
            t.fireEvent = e.fireEvent;
            t.getMagnitude = e.getMagnitude;
            t.getStyle = e.getStyle;
            t.inArray = e.inArray;
            t.isArray = e.isArray;
            t.isClass = e.isClass;
            t.isDOMElement = e.isDOMElement;
            t.isFunction = e.isFunction;
            t.isNumber = e.isNumber;
            t.isObject = e.isObject;
            t.isString = e.isString;
            t.keys = e.keys;
            t.merge = e.merge;
            t.normalizeTickInterval = e.normalizeTickInterval;
            t.objectEach = e.objectEach;
            t.offset = e.offset;
            t.pad = e.pad;
            t.pick = e.pick;
            t.pInt = e.pInt;
            t.relativeLength = e.relativeLength;
            t.removeEvent = e.removeEvent;
            t.seriesType = A.seriesType;
            t.splat = e.splat;
            t.stableSort = e.stableSort;
            t.syncTimeout = e.syncTimeout;
            t.timeUnits = e.timeUnits;
            t.uniqueKey = e.uniqueKey;
            t.useSerialIds = e.useSerialIds;
            t.wrap = e.wrap;
            T.compose(k);
            E.compose(S);
            u.compose(p);
            f.compose(p);
            P.compose(M);
            g.compose(p);
            L.compose(w);
            return t;
          }
        );
        i["masters/highcharts.src.js"]._modules = i;
        return i["masters/highcharts.src.js"];
      });
    },
    "./node_modules/highcharts/modules/accessibility.js": function (t, e, i) {
      "use strict";
      var n, o;
      (function (r) {
        true && t.exports
          ? ((r["default"] = r), (t.exports = r))
          : true
          ? !((n = [i("./node_modules/highcharts/highcharts.js")]),
            (o = function (t) {
              r(t);
              r.Highcharts = t;
              return r;
            }.apply(e, n)),
            o !== undefined && (t.exports = o))
          : undefined;
      })(function (t) {
        function e(t, e, i, n) {
          t.hasOwnProperty(e) || (t[e] = n.apply(null, i));
        }
        t = t ? t._modules : {};
        e(
          t,
          "Accessibility/Utils/HTMLUtilities.js",
          [t["Core/Globals.js"], t["Core/Utilities.js"]],
          function (t, e) {
            var i = t.doc,
              n = t.win,
              o = e.merge;
            return {
              addClass: function (t, e) {
                t.classList
                  ? t.classList.add(e)
                  : 0 > t.className.indexOf(e) && (t.className += e);
              },
              escapeStringForHTML: function (t) {
                return t
                  .replace(/&/g, "&amp;")
                  .replace(/</g, "&lt;")
                  .replace(/>/g, "&gt;")
                  .replace(/"/g, "&quot;")
                  .replace(/'/g, "&#x27;")
                  .replace(/\//g, "&#x2F;");
              },
              getElement: function (t) {
                return i.getElementById(t);
              },
              getFakeMouseEvent: function (t) {
                if ("function" === typeof n.MouseEvent)
                  return new n.MouseEvent(t);
                if (i.createEvent) {
                  var e = i.createEvent("MouseEvent");
                  if (e.initMouseEvent)
                    return (
                      e.initMouseEvent(
                        t,
                        !0,
                        !0,
                        n,
                        "click" === t ? 1 : 0,
                        0,
                        0,
                        0,
                        0,
                        !1,
                        !1,
                        !1,
                        !1,
                        0,
                        null
                      ),
                      e
                    );
                }
                return { type: t };
              },
              getHeadingTagNameForElement: function (t) {
                var e = function (t) {
                    t = parseInt(t.slice(1), 10);
                    return "h" + Math.min(6, t + 1);
                  },
                  i = function (t) {
                    var n;
                    t: {
                      for (n = t; (n = n.previousSibling); ) {
                        var o = n.tagName || "";
                        if (/H[1-6]/.test(o)) {
                          n = o;
                          break t;
                        }
                      }
                      n = "";
                    }
                    if (n) return e(n);
                    t = t.parentElement;
                    if (!t) return "p";
                    n = t.tagName;
                    return /H[1-6]/.test(n) ? e(n) : i(t);
                  };
                return i(t);
              },
              removeElement: function (t) {
                t && t.parentNode && t.parentNode.removeChild(t);
              },
              reverseChildNodes: function (t) {
                for (var e = t.childNodes.length; e--; )
                  t.appendChild(t.childNodes[e]);
              },
              setElAttrs: function (t, e) {
                Object.keys(e).forEach(function (i) {
                  var n = e[i];
                  null === n ? t.removeAttribute(i) : t.setAttribute(i, n);
                });
              },
              stripHTMLTagsFromString: function (t) {
                return "string" === typeof t
                  ? t.replace(/<\/?[^>]+(>|$)/g, "")
                  : t;
              },
              visuallyHideElement: function (t) {
                o(!0, t.style, {
                  position: "absolute",
                  width: "1px",
                  height: "1px",
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                  clip: "rect(1px, 1px, 1px, 1px)",
                  marginTop: "-3px",
                  "-ms-filter":
                    "progid:DXImageTransform.Microsoft.Alpha(Opacity=1)",
                  filter: "alpha(opacity=1)",
                  opacity: "0.01",
                });
              },
            };
          }
        );
        e(
          t,
          "Accessibility/Utils/ChartUtilities.js",
          [
            t["Accessibility/Utils/HTMLUtilities.js"],
            t["Core/Globals.js"],
            t["Core/Utilities.js"],
          ],
          function (t, e, i) {
            function n(t) {
              var e = t.chart,
                i = {},
                n = "Seconds";
              i.Seconds = ((t.max || 0) - (t.min || 0)) / 1e3;
              i.Minutes = i.Seconds / 60;
              i.Hours = i.Minutes / 60;
              i.Days = i.Hours / 24;
              ["Minutes", "Hours", "Days"].forEach(function (t) {
                2 < i[t] && (n = t);
              });
              var o = i[n].toFixed("Seconds" !== n && "Minutes" !== n ? 1 : 0);
              return e.langFormat("accessibility.axis.timeRange" + n, {
                chart: e,
                axis: t,
                range: o.replace(".0", ""),
              });
            }
            function o(t) {
              var e = t.chart,
                i =
                  (e.options &&
                    e.options.accessibility &&
                    e.options.accessibility.screenReaderSection
                      .axisRangeDateFormat) ||
                  "",
                n = function (n) {
                  return t.dateTime ? e.time.dateFormat(i, t[n]) : t[n];
                };
              return e.langFormat("accessibility.axis.rangeFromTo", {
                chart: e,
                axis: t,
                rangeFrom: n("min"),
                rangeTo: n("max"),
              });
            }
            function r(t) {
              if (t.points && t.points.length)
                return (
                  (t = d(t.points, function (t) {
                    return !!t.graphic;
                  })) &&
                  t.graphic &&
                  t.graphic.element
                );
            }
            function s(t) {
              var e = r(t);
              return (
                (e && e.parentNode) ||
                (t.graph && t.graph.element) ||
                (t.group && t.group.element)
              );
            }
            function a(t, e) {
              e.setAttribute("aria-hidden", !1);
              e !== t.renderTo &&
                e.parentNode &&
                e.parentNode !== l.body &&
                (Array.prototype.forEach.call(
                  e.parentNode.childNodes,
                  function (t) {
                    t.hasAttribute("aria-hidden") ||
                      t.setAttribute("aria-hidden", !0);
                  }
                ),
                a(t, e.parentNode));
            }
            var h = t.stripHTMLTagsFromString,
              l = e.doc,
              c = i.defined,
              d = i.find,
              p = i.fireEvent;
            return {
              getChartTitle: function (t) {
                return h(
                  t.options.title.text ||
                    t.langFormat("accessibility.defaultChartTitle", {
                      chart: t,
                    })
                );
              },
              getAxisDescription: function (t) {
                return (
                  t &&
                  ((t.userOptions &&
                    t.userOptions.accessibility &&
                    t.userOptions.accessibility.description) ||
                    (t.axisTitle && t.axisTitle.textStr) ||
                    t.options.id ||
                    (t.categories && "categories") ||
                    (t.dateTime && "Time") ||
                    "values")
                );
              },
              getAxisRangeDescription: function (t) {
                var e = t.options || {};
                return e.accessibility &&
                  "undefined" !== typeof e.accessibility.rangeDescription
                  ? e.accessibility.rangeDescription
                  : t.categories
                  ? ((e = t.chart),
                    (t =
                      t.dataMax && t.dataMin
                        ? e.langFormat("accessibility.axis.rangeCategories", {
                            chart: e,
                            axis: t,
                            numCategories: t.dataMax - t.dataMin + 1,
                          })
                        : ""),
                    t)
                  : !t.dateTime || (0 !== t.min && 0 !== t.dataMin)
                  ? o(t)
                  : n(t);
              },
              getPointFromXY: function (t, e, i) {
                for (var n = t.length, o; n--; )
                  if (
                    (o = d(t[n].points || [], function (t) {
                      return t.x === e && t.y === i;
                    }))
                  )
                    return o;
              },
              getSeriesFirstPointElement: r,
              getSeriesFromName: function (t, e) {
                return e
                  ? (t.series || []).filter(function (t) {
                      return t.name === e;
                    })
                  : t.series;
              },
              getSeriesA11yElement: s,
              unhideChartElementFromAT: a,
              hideSeriesFromAT: function (t) {
                (t = s(t)) && t.setAttribute("aria-hidden", !0);
              },
              scrollToPoint: function (t) {
                var e = t.series.xAxis,
                  i = t.series.yAxis,
                  n = e && e.scrollbar ? e : i;
                if ((e = n && n.scrollbar) && c(e.to) && c(e.from)) {
                  i = e.to - e.from;
                  if (c(n.dataMin) && c(n.dataMax)) {
                    var o = n.toPixels(n.dataMin),
                      r = n.toPixels(n.dataMax);
                    t =
                      (n.toPixels(t["xAxis" === n.coll ? "x" : "y"] || 0) - o) /
                      (r - o);
                  } else t = 0;
                  e.updatePosition(t - i / 2, t + i / 2);
                  p(e, "changed", {
                    from: e.from,
                    to: e.to,
                    trigger: "scrollbar",
                    DOMEvent: null,
                  });
                }
              },
            };
          }
        );
        e(
          t,
          "Accessibility/KeyboardNavigationHandler.js",
          [t["Core/Utilities.js"]],
          function (t) {
            function e(t, e) {
              this.chart = t;
              this.keyCodeMap = e.keyCodeMap || [];
              this.validate = e.validate;
              this.init = e.init;
              this.terminate = e.terminate;
              this.response = {
                success: 1,
                prev: 2,
                next: 3,
                noHandler: 4,
                fail: 5,
              };
            }
            var i = t.find;
            e.prototype = {
              run: function (t) {
                var e = t.which || t.keyCode,
                  n = this.response.noHandler,
                  o = i(this.keyCodeMap, function (t) {
                    return -1 < t[0].indexOf(e);
                  });
                o
                  ? (n = o[1].call(this, e, t))
                  : 9 === e &&
                    (n = this.response[t.shiftKey ? "prev" : "next"]);
                return n;
              },
            };
            return e;
          }
        );
        e(
          t,
          "Accessibility/Utils/DOMElementProvider.js",
          [
            t["Core/Globals.js"],
            t["Accessibility/Utils/HTMLUtilities.js"],
            t["Core/Utilities.js"],
          ],
          function (t, e, i) {
            var n = t.doc,
              o = e.removeElement;
            t = i.extend;
            e = function () {
              this.elements = [];
            };
            t(e.prototype, {
              createElement: function () {
                var t = n.createElement.apply(n, arguments);
                this.elements.push(t);
                return t;
              },
              destroyCreatedElements: function () {
                this.elements.forEach(function (t) {
                  o(t);
                });
                this.elements = [];
              },
            });
            return e;
          }
        );
        e(
          t,
          "Accessibility/Utils/EventProvider.js",
          [t["Core/Globals.js"], t["Core/Utilities.js"]],
          function (t, e) {
            var i = e.addEvent;
            e = e.extend;
            var n = function () {
              this.eventRemovers = [];
            };
            e(n.prototype, {
              addEvent: function () {
                var e = i.apply(t, arguments);
                this.eventRemovers.push(e);
                return e;
              },
              removeAddedEvents: function () {
                this.eventRemovers.forEach(function (t) {
                  t();
                });
                this.eventRemovers = [];
              },
            });
            return n;
          }
        );
        e(
          t,
          "Accessibility/AccessibilityComponent.js",
          [
            t["Accessibility/Utils/ChartUtilities.js"],
            t["Accessibility/Utils/DOMElementProvider.js"],
            t["Accessibility/Utils/EventProvider.js"],
            t["Core/Globals.js"],
            t["Accessibility/Utils/HTMLUtilities.js"],
            t["Core/Utilities.js"],
          ],
          function (t, e, i, n, o, r) {
            function s() {}
            var a = t.unhideChartElementFromAT,
              h = n.doc,
              l = n.win,
              c = o.removeElement,
              d = o.getFakeMouseEvent;
            t = r.extend;
            var p = r.fireEvent,
              u = r.merge;
            s.prototype = {
              initBase: function (t) {
                this.chart = t;
                this.eventProvider = new i();
                this.domElementProvider = new e();
                this.keyCodes = {
                  left: 37,
                  right: 39,
                  up: 38,
                  down: 40,
                  enter: 13,
                  space: 32,
                  esc: 27,
                  tab: 9,
                };
              },
              addEvent: function () {
                return this.eventProvider.addEvent.apply(
                  this.eventProvider,
                  arguments
                );
              },
              createElement: function () {
                return this.domElementProvider.createElement.apply(
                  this.domElementProvider,
                  arguments
                );
              },
              fireEventOnWrappedOrUnwrappedElement: function (t, e) {
                var i = e.type;
                h.createEvent && (t.dispatchEvent || t.fireEvent)
                  ? t.dispatchEvent
                    ? t.dispatchEvent(e)
                    : t.fireEvent(i, e)
                  : p(t, i, e);
              },
              fakeClickEvent: function (t) {
                if (t) {
                  var e = d("click");
                  this.fireEventOnWrappedOrUnwrappedElement(t, e);
                }
              },
              addProxyGroup: function (t) {
                this.createOrUpdateProxyContainer();
                var e = this.createElement("div");
                Object.keys(t || {}).forEach(function (i) {
                  null !== t[i] && e.setAttribute(i, t[i]);
                });
                this.chart.a11yProxyContainer.appendChild(e);
                return e;
              },
              createOrUpdateProxyContainer: function () {
                var t = this.chart,
                  e = t.renderer.box;
                t.a11yProxyContainer =
                  t.a11yProxyContainer || this.createProxyContainerElement();
                e.nextSibling !== t.a11yProxyContainer &&
                  t.container.insertBefore(t.a11yProxyContainer, e.nextSibling);
              },
              createProxyContainerElement: function () {
                var t = h.createElement("div");
                t.className = "highcharts-a11y-proxy-container";
                return t;
              },
              createProxyButton: function (t, e, i, n, o) {
                var r = t.element,
                  s = this.createElement("button"),
                  h = u({ "aria-label": r.getAttribute("aria-label") }, i);
                Object.keys(h).forEach(function (t) {
                  null !== h[t] && s.setAttribute(t, h[t]);
                });
                s.className = "highcharts-a11y-proxy-button";
                t.hasClass("highcharts-no-tooltip") &&
                  (s.className += " highcharts-no-tooltip");
                o && this.addEvent(s, "click", o);
                this.setProxyButtonStyle(s);
                this.updateProxyButtonPosition(s, n || t);
                this.proxyMouseEventsForButton(r, s);
                e.appendChild(s);
                h["aria-hidden"] || a(this.chart, s);
                return s;
              },
              getElementPosition: function (t) {
                var e = t.element;
                return (t = this.chart.renderTo) && e && e.getBoundingClientRect
                  ? ((e = e.getBoundingClientRect()),
                    (t = t.getBoundingClientRect()),
                    {
                      x: e.left - t.left,
                      y: e.top - t.top,
                      width: e.right - e.left,
                      height: e.bottom - e.top,
                    })
                  : { x: 0, y: 0, width: 1, height: 1 };
              },
              setProxyButtonStyle: function (t) {
                u(!0, t.style, {
                  borderWidth: "0",
                  backgroundColor: "transparent",
                  cursor: "pointer",
                  outline: "none",
                  opacity: "0.001",
                  filter: "alpha(opacity=1)",
                  zIndex: "999",
                  overflow: "hidden",
                  padding: "0",
                  margin: "0",
                  display: "block",
                  position: "absolute",
                });
                t.style["-ms-filter"] =
                  "progid:DXImageTransform.Microsoft.Alpha(Opacity=1)";
              },
              updateProxyButtonPosition: function (t, e) {
                e = this.getElementPosition(e);
                u(!0, t.style, {
                  width: (e.width || 1) + "px",
                  height: (e.height || 1) + "px",
                  left: (Math.round(e.x) || 0) + "px",
                  top: (Math.round(e.y) || 0) + "px",
                });
              },
              proxyMouseEventsForButton: function (t, e) {
                var i = this;
                "click touchstart touchend touchcancel touchmove mouseover mouseenter mouseleave mouseout"
                  .split(" ")
                  .forEach(function (n) {
                    var o = 0 === n.indexOf("touch");
                    i.addEvent(
                      e,
                      n,
                      function (e) {
                        var r = o ? i.cloneTouchEvent(e) : i.cloneMouseEvent(e);
                        t && i.fireEventOnWrappedOrUnwrappedElement(t, r);
                        e.stopPropagation();
                        "touchstart" !== n &&
                          "touchmove" !== n &&
                          "touchend" !== n &&
                          e.preventDefault();
                      },
                      { passive: !1 }
                    );
                  });
              },
              cloneMouseEvent: function (t) {
                if ("function" === typeof l.MouseEvent)
                  return new l.MouseEvent(t.type, t);
                if (h.createEvent) {
                  var e = h.createEvent("MouseEvent");
                  if (e.initMouseEvent)
                    return (
                      e.initMouseEvent(
                        t.type,
                        t.bubbles,
                        t.cancelable,
                        t.view || l,
                        t.detail,
                        t.screenX,
                        t.screenY,
                        t.clientX,
                        t.clientY,
                        t.ctrlKey,
                        t.altKey,
                        t.shiftKey,
                        t.metaKey,
                        t.button,
                        t.relatedTarget
                      ),
                      e
                    );
                }
                return d(t.type);
              },
              cloneTouchEvent: function (t) {
                var e = function (t) {
                  for (var e = [], i = 0; i < t.length; ++i) {
                    var n = t.item(i);
                    n && e.push(n);
                  }
                  return e;
                };
                if ("function" === typeof l.TouchEvent)
                  return (
                    (e = new l.TouchEvent(t.type, {
                      touches: e(t.touches),
                      targetTouches: e(t.targetTouches),
                      changedTouches: e(t.changedTouches),
                      ctrlKey: t.ctrlKey,
                      shiftKey: t.shiftKey,
                      altKey: t.altKey,
                      metaKey: t.metaKey,
                      bubbles: t.bubbles,
                      cancelable: t.cancelable,
                      composed: t.composed,
                      detail: t.detail,
                      view: t.view,
                    })),
                    t.defaultPrevented && e.preventDefault(),
                    e
                  );
                e = this.cloneMouseEvent(t);
                e.touches = t.touches;
                e.changedTouches = t.changedTouches;
                e.targetTouches = t.targetTouches;
                return e;
              },
              destroyBase: function () {
                c(this.chart.a11yProxyContainer);
                this.domElementProvider.destroyCreatedElements();
                this.eventProvider.removeAddedEvents();
              },
            };
            t(s.prototype, {
              init: function () {},
              getKeyboardNavigation: function () {},
              onChartUpdate: function () {},
              onChartRender: function () {},
              destroy: function () {},
            });
            return s;
          }
        );
        e(
          t,
          "Accessibility/KeyboardNavigation.js",
          [
            t["Core/Chart/Chart.js"],
            t["Core/Globals.js"],
            t["Core/Utilities.js"],
            t["Accessibility/Utils/HTMLUtilities.js"],
            t["Accessibility/Utils/EventProvider.js"],
          ],
          function (t, e, i, n, o) {
            function r(t, e) {
              this.init(t, e);
            }
            var s = e.doc,
              a = e.win,
              h = i.addEvent,
              l = i.fireEvent,
              c = n.getElement;
            h(s, "keydown", function (t) {
              27 === (t.which || t.keyCode) &&
                e.charts &&
                e.charts.forEach(function (t) {
                  t && t.dismissPopupContent && t.dismissPopupContent();
                });
            });
            t.prototype.dismissPopupContent = function () {
              var t = this;
              l(this, "dismissPopupContent", {}, function () {
                t.tooltip && t.tooltip.hide(0);
                t.hideExportMenu();
              });
            };
            r.prototype = {
              init: function (t, e) {
                var i = this,
                  n = (this.eventProvider = new o());
                this.chart = t;
                this.components = e;
                this.modules = [];
                this.currentModuleIx = 0;
                this.update();
                n.addEvent(this.tabindexContainer, "keydown", function (t) {
                  return i.onKeydown(t);
                });
                n.addEvent(this.tabindexContainer, "focus", function (t) {
                  return i.onFocus(t);
                });
                ["mouseup", "touchend"].forEach(function (t) {
                  return n.addEvent(s, t, function () {
                    return i.onMouseUp();
                  });
                });
                ["mousedown", "touchstart"].forEach(function (e) {
                  return n.addEvent(t.renderTo, e, function () {
                    i.isClickingChart = !0;
                  });
                });
                n.addEvent(t.renderTo, "mouseover", function () {
                  i.pointerIsOverChart = !0;
                });
                n.addEvent(t.renderTo, "mouseout", function () {
                  i.pointerIsOverChart = !1;
                });
                this.modules.length && this.modules[0].init(1);
              },
              update: function (t) {
                var e = this.chart.options.accessibility;
                e = e && e.keyboardNavigation;
                var i = this.components;
                this.updateContainerTabindex();
                e && e.enabled && t && t.length
                  ? ((this.modules = t.reduce(function (t, e) {
                      e = i[e].getKeyboardNavigation();
                      return t.concat(e);
                    }, [])),
                    this.updateExitAnchor())
                  : ((this.modules = []),
                    (this.currentModuleIx = 0),
                    this.removeExitAnchor());
              },
              onFocus: function (t) {
                var e = this.chart;
                t = t.relatedTarget && e.container.contains(t.relatedTarget);
                this.exiting ||
                  this.tabbingInBackwards ||
                  this.isClickingChart ||
                  t ||
                  !this.modules[0] ||
                  this.modules[0].init(1);
                this.exiting = !1;
              },
              onMouseUp: function () {
                delete this.isClickingChart;
                if (!this.keyboardReset && !this.pointerIsOverChart) {
                  var t = this.chart,
                    e = this.modules && this.modules[this.currentModuleIx || 0];
                  e && e.terminate && e.terminate();
                  t.focusElement && t.focusElement.removeFocusBorder();
                  this.currentModuleIx = 0;
                  this.keyboardReset = !0;
                }
              },
              onKeydown: function (t) {
                t = t || a.event;
                var e,
                  i =
                    this.modules &&
                    this.modules.length &&
                    this.modules[this.currentModuleIx];
                this.exiting = this.keyboardReset = !1;
                if (i) {
                  var n = i.run(t);
                  n === i.response.success
                    ? (e = !0)
                    : n === i.response.prev
                    ? (e = this.prev())
                    : n === i.response.next && (e = this.next());
                  e && (t.preventDefault(), t.stopPropagation());
                }
              },
              prev: function () {
                return this.move(-1);
              },
              next: function () {
                return this.move(1);
              },
              move: function (t) {
                var e = this.modules && this.modules[this.currentModuleIx];
                e && e.terminate && e.terminate(t);
                this.chart.focusElement &&
                  this.chart.focusElement.removeFocusBorder();
                this.currentModuleIx += t;
                if ((e = this.modules && this.modules[this.currentModuleIx])) {
                  if (e.validate && !e.validate()) return this.move(t);
                  if (e.init) return e.init(t), !0;
                }
                this.currentModuleIx = 0;
                this.exiting = !0;
                0 < t
                  ? this.exitAnchor.focus()
                  : this.tabindexContainer.focus();
                return !1;
              },
              updateExitAnchor: function () {
                var t = c("highcharts-end-of-chart-marker-" + this.chart.index);
                this.removeExitAnchor();
                t
                  ? (this.makeElementAnExitAnchor(t), (this.exitAnchor = t))
                  : this.createExitAnchor();
              },
              updateContainerTabindex: function () {
                var t = this.chart.options.accessibility;
                t = t && t.keyboardNavigation;
                t = !(t && !1 === t.enabled);
                var e = this.chart,
                  i = e.container;
                e.renderTo.hasAttribute("tabindex") &&
                  (i.removeAttribute("tabindex"), (i = e.renderTo));
                this.tabindexContainer = i;
                var n = i.getAttribute("tabindex");
                t && !n
                  ? i.setAttribute("tabindex", "0")
                  : t || e.container.removeAttribute("tabindex");
              },
              makeElementAnExitAnchor: function (t) {
                var e = this.tabindexContainer.getAttribute("tabindex") || 0;
                t.setAttribute("class", "highcharts-exit-anchor");
                t.setAttribute("tabindex", e);
                t.setAttribute("aria-hidden", !1);
                this.addExitAnchorEventsToEl(t);
              },
              createExitAnchor: function () {
                var t = this.chart,
                  e = (this.exitAnchor = s.createElement("div"));
                t.renderTo.appendChild(e);
                this.makeElementAnExitAnchor(e);
              },
              removeExitAnchor: function () {
                this.exitAnchor &&
                  this.exitAnchor.parentNode &&
                  (this.exitAnchor.parentNode.removeChild(this.exitAnchor),
                  delete this.exitAnchor);
              },
              addExitAnchorEventsToEl: function (t) {
                var e = this.chart,
                  i = this;
                this.eventProvider.addEvent(t, "focus", function (t) {
                  t = t || a.event;
                  (t.relatedTarget && e.container.contains(t.relatedTarget)) ||
                  i.exiting
                    ? (i.exiting = !1)
                    : ((i.tabbingInBackwards = !0),
                      i.tabindexContainer.focus(),
                      delete i.tabbingInBackwards,
                      t.preventDefault(),
                      i.modules &&
                        i.modules.length &&
                        ((i.currentModuleIx = i.modules.length - 1),
                        (t = i.modules[i.currentModuleIx]) &&
                        t.validate &&
                        !t.validate()
                          ? i.prev()
                          : t && t.init(-1)));
                });
              },
              destroy: function () {
                this.removeExitAnchor();
                this.eventProvider.removeAddedEvents();
                this.chart.container.removeAttribute("tabindex");
              },
            };
            return r;
          }
        );
        e(
          t,
          "Accessibility/Components/LegendComponent.js",
          [
            t["Core/Animation/AnimationUtilities.js"],
            t["Core/Chart/Chart.js"],
            t["Core/Globals.js"],
            t["Core/Legend/Legend.js"],
            t["Core/Utilities.js"],
            t["Accessibility/AccessibilityComponent.js"],
            t["Accessibility/KeyboardNavigationHandler.js"],
            t["Accessibility/Utils/HTMLUtilities.js"],
            t["Accessibility/Utils/ChartUtilities.js"],
          ],
          function (t, e, i, n, o, r, s, a, h) {
            function l(t) {
              var e = t.legend && t.legend.allItems,
                i = t.options.legend.accessibility || {};
              return !(
                !e ||
                !e.length ||
                (t.colorAxis && t.colorAxis.length) ||
                !1 === i.enabled
              );
            }
            var c = t.animObject,
              d = o.addEvent;
            t = o.extend;
            var p = o.find,
              u = o.fireEvent,
              f = o.isNumber,
              g = o.pick,
              m = o.syncTimeout,
              y = a.removeElement,
              v = a.stripHTMLTagsFromString,
              x = h.getChartTitle;
            e.prototype.highlightLegendItem = function (t) {
              var e = this.legend.allItems,
                i =
                  this.accessibility &&
                  this.accessibility.components.legend.highlightedLegendItemIx;
              if (e[t]) {
                f(i) && e[i] && u(e[i].legendGroup.element, "mouseout");
                i = this.legend;
                var n = i.allItems[t].pageIx,
                  o = i.currentPage;
                "undefined" !== typeof n && n + 1 !== o && i.scroll(1 + n - o);
                this.setFocusToElement(e[t].legendItem, e[t].a11yProxyElement);
                u(e[t].legendGroup.element, "mouseover");
                return !0;
              }
              return !1;
            };
            d(n, "afterColorizeItem", function (t) {
              var e = t.item;
              this.chart.options.accessibility.enabled &&
                e &&
                e.a11yProxyElement &&
                e.a11yProxyElement.setAttribute(
                  "aria-pressed",
                  t.visible ? "true" : "false"
                );
            });
            e = function () {};
            e.prototype = new r();
            t(e.prototype, {
              init: function () {
                var t = this;
                this.proxyElementsList = [];
                this.recreateProxies();
                this.addEvent(n, "afterScroll", function () {
                  this.chart === t.chart &&
                    (t.updateProxiesPositions(),
                    t.updateLegendItemProxyVisibility(),
                    this.chart.highlightLegendItem(t.highlightedLegendItemIx));
                });
                this.addEvent(n, "afterPositionItem", function (e) {
                  this.chart === t.chart &&
                    this.chart.renderer &&
                    t.updateProxyPositionForItem(e.item);
                });
                this.addEvent(n, "afterRender", function () {
                  this.chart === t.chart &&
                    this.chart.renderer &&
                    t.recreateProxies() &&
                    m(function () {
                      return t.updateProxiesPositions();
                    }, c(g(this.chart.renderer.globalAnimation, !0)).duration);
                });
              },
              updateLegendItemProxyVisibility: function () {
                var t = this.chart.legend,
                  e = t.currentPage || 1,
                  i = t.clipHeight || 0;
                (t.allItems || []).forEach(function (n) {
                  var o = n.pageIx || 0,
                    r = n._legendItemPos ? n._legendItemPos[1] : 0,
                    s = n.legendItem
                      ? Math.round(n.legendItem.getBBox().height)
                      : 0;
                  o = r + s - t.pages[o] > i || o !== e - 1;
                  n.a11yProxyElement &&
                    (n.a11yProxyElement.style.visibility = o
                      ? "hidden"
                      : "visible");
                });
              },
              onChartRender: function () {
                l(this.chart) || this.removeProxies();
              },
              onChartUpdate: function () {
                this.updateLegendTitle();
              },
              updateProxiesPositions: function () {
                for (var t = 0, e = this.proxyElementsList; t < e.length; t++) {
                  var i = e[t];
                  this.updateProxyButtonPosition(i.element, i.posElement);
                }
              },
              updateProxyPositionForItem: function (t) {
                var e = p(this.proxyElementsList, function (e) {
                  return e.item === t;
                });
                e && this.updateProxyButtonPosition(e.element, e.posElement);
              },
              recreateProxies: function () {
                this.removeProxies();
                return l(this.chart)
                  ? (this.addLegendProxyGroup(),
                    this.addLegendListContainer(),
                    this.proxyLegendItems(),
                    this.updateLegendItemProxyVisibility(),
                    !0)
                  : !1;
              },
              removeProxies: function () {
                y(this.legendProxyGroup);
                this.proxyElementsList = [];
              },
              updateLegendTitle: function () {
                var t = this.chart,
                  e = v(
                    (
                      (t.legend &&
                        t.legend.options.title &&
                        t.legend.options.title.text) ||
                      ""
                    ).replace(/<br ?\/?>/g, " ")
                  );
                t = t.langFormat(
                  "accessibility.legend.legendLabel" + (e ? "" : "NoTitle"),
                  { chart: t, legendTitle: e, chartTitle: x(t) }
                );
                this.legendProxyGroup &&
                  this.legendProxyGroup.setAttribute("aria-label", t);
              },
              addLegendProxyGroup: function () {
                this.legendProxyGroup = this.addProxyGroup({
                  "aria-label": "_placeholder_",
                  role:
                    "all" === this.chart.options.accessibility.landmarkVerbosity
                      ? "region"
                      : null,
                });
              },
              addLegendListContainer: function () {
                if (this.legendProxyGroup) {
                  var t = (this.legendListContainer = this.createElement("ul"));
                  t.style.listStyle = "none";
                  this.legendProxyGroup.appendChild(t);
                }
              },
              proxyLegendItems: function () {
                var t = this;
                (
                  (this.chart.legend && this.chart.legend.allItems) ||
                  []
                ).forEach(function (e) {
                  e.legendItem && e.legendItem.element && t.proxyLegendItem(e);
                });
              },
              proxyLegendItem: function (t) {
                if (t.legendItem && t.legendGroup && this.legendListContainer) {
                  var e = this.chart.langFormat(
                    "accessibility.legend.legendItem",
                    { chart: this.chart, itemName: v(t.name), item: t }
                  );
                  e = {
                    tabindex: -1,
                    "aria-pressed": t.visible,
                    "aria-label": e,
                  };
                  var i = t.legendGroup.div ? t.legendItem : t.legendGroup,
                    n = this.createElement("li");
                  this.legendListContainer.appendChild(n);
                  t.a11yProxyElement = this.createProxyButton(
                    t.legendItem,
                    n,
                    e,
                    i
                  );
                  this.proxyElementsList.push({
                    item: t,
                    element: t.a11yProxyElement,
                    posElement: i,
                  });
                }
              },
              getKeyboardNavigation: function () {
                var t = this.keyCodes,
                  e = this,
                  n = this.chart;
                return new s(n, {
                  keyCodeMap: [
                    [
                      [t.left, t.right, t.up, t.down],
                      function (t) {
                        return e.onKbdArrowKey(this, t);
                      },
                    ],
                    [
                      [t.enter, t.space],
                      function (n) {
                        return i.isFirefox && n === t.space
                          ? this.response.success
                          : e.onKbdClick(this);
                      },
                    ],
                  ],
                  validate: function () {
                    return e.shouldHaveLegendNavigation();
                  },
                  init: function (t) {
                    return e.onKbdNavigationInit(t);
                  },
                  terminate: function () {
                    n.legend.allItems.forEach(function (t) {
                      return t.setState("", !0);
                    });
                  },
                });
              },
              onKbdArrowKey: function (t, e) {
                var i = this.keyCodes,
                  n = t.response,
                  o = this.chart,
                  r = o.options.accessibility,
                  s = o.legend.allItems.length;
                e = e === i.left || e === i.up ? -1 : 1;
                return o.highlightLegendItem(this.highlightedLegendItemIx + e)
                  ? ((this.highlightedLegendItemIx += e), n.success)
                  : 1 < s && r.keyboardNavigation.wrapAround
                  ? (t.init(e), n.success)
                  : n[0 < e ? "next" : "prev"];
              },
              onKbdClick: function (t) {
                var e =
                  this.chart.legend.allItems[this.highlightedLegendItemIx];
                e && e.a11yProxyElement && u(e.a11yProxyElement, "click");
                return t.response.success;
              },
              shouldHaveLegendNavigation: function () {
                var t = this.chart,
                  e = t.colorAxis && t.colorAxis.length,
                  i = (t.options.legend || {}).accessibility || {};
                return !!(
                  t.legend &&
                  t.legend.allItems &&
                  t.legend.display &&
                  !e &&
                  i.enabled &&
                  i.keyboardNavigation &&
                  i.keyboardNavigation.enabled
                );
              },
              onKbdNavigationInit: function (t) {
                var e = this.chart,
                  i = e.legend.allItems.length - 1;
                t = 0 < t ? 0 : i;
                e.highlightLegendItem(t);
                this.highlightedLegendItemIx = t;
              },
            });
            return e;
          }
        );
        e(
          t,
          "Accessibility/Components/MenuComponent.js",
          [
            t["Core/Chart/Chart.js"],
            t["Core/Utilities.js"],
            t["Accessibility/AccessibilityComponent.js"],
            t["Accessibility/KeyboardNavigationHandler.js"],
            t["Accessibility/Utils/ChartUtilities.js"],
            t["Accessibility/Utils/HTMLUtilities.js"],
          ],
          function (t, e, i, n, o, r) {
            function s(t) {
              return t.exportSVGElements && t.exportSVGElements[0];
            }
            e = e.extend;
            var a = o.getChartTitle,
              h = o.unhideChartElementFromAT,
              l = r.removeElement,
              c = r.getFakeMouseEvent;
            t.prototype.showExportMenu = function () {
              var t = s(this);
              if (t && ((t = t.element), t.onclick)) t.onclick(c("click"));
            };
            t.prototype.hideExportMenu = function () {
              var t = this.exportDivElements;
              t &&
                this.exportContextMenu &&
                (t.forEach(function (t) {
                  if (
                    t &&
                    "highcharts-menu-item" === t.className &&
                    t.onmouseout
                  )
                    t.onmouseout(c("mouseout"));
                }),
                (this.highlightedExportItemIx = 0),
                this.exportContextMenu.hideMenu(),
                this.container.focus());
            };
            t.prototype.highlightExportItem = function (t) {
              var e = this.exportDivElements && this.exportDivElements[t],
                i =
                  this.exportDivElements &&
                  this.exportDivElements[this.highlightedExportItemIx];
              if (
                e &&
                "LI" === e.tagName &&
                (!e.children || !e.children.length)
              ) {
                var n = !!(this.renderTo.getElementsByTagName("g")[0] || {})
                  .focus;
                e.focus && n && e.focus();
                if (i && i.onmouseout) i.onmouseout(c("mouseout"));
                if (e.onmouseover) e.onmouseover(c("mouseover"));
                this.highlightedExportItemIx = t;
                return !0;
              }
              return !1;
            };
            t.prototype.highlightLastExportItem = function () {
              var t;
              if (this.exportDivElements)
                for (t = this.exportDivElements.length; t--; )
                  if (this.highlightExportItem(t)) return !0;
              return !1;
            };
            t = function () {};
            t.prototype = new i();
            e(t.prototype, {
              init: function () {
                var t = this.chart,
                  e = this;
                this.addEvent(t, "exportMenuShown", function () {
                  e.onMenuShown();
                });
                this.addEvent(t, "exportMenuHidden", function () {
                  e.onMenuHidden();
                });
              },
              onMenuHidden: function () {
                var t = this.chart.exportContextMenu;
                t && t.setAttribute("aria-hidden", "true");
                this.isExportMenuShown = !1;
                this.setExportButtonExpandedState("false");
              },
              onMenuShown: function () {
                var t = this.chart,
                  e = t.exportContextMenu;
                e && (this.addAccessibleContextMenuAttribs(), h(t, e));
                this.isExportMenuShown = !0;
                this.setExportButtonExpandedState("true");
              },
              setExportButtonExpandedState: function (t) {
                var e = this.exportButtonProxy;
                e && e.setAttribute("aria-expanded", t);
              },
              onChartRender: function () {
                var t = this.chart,
                  e = t.options.accessibility;
                l(this.exportProxyGroup);
                var i = t.options.exporting,
                  n = s(t);
                i &&
                  !1 !== i.enabled &&
                  i.accessibility &&
                  i.accessibility.enabled &&
                  n &&
                  n.element &&
                  ((this.exportProxyGroup = this.addProxyGroup(
                    "all" === e.landmarkVerbosity
                      ? {
                          "aria-label": t.langFormat(
                            "accessibility.exporting.exportRegionLabel",
                            { chart: t, chartTitle: a(t) }
                          ),
                          role: "region",
                        }
                      : {}
                  )),
                  (e = s(this.chart)),
                  (this.exportButtonProxy = this.createProxyButton(
                    e,
                    this.exportProxyGroup,
                    {
                      "aria-label": t.langFormat(
                        "accessibility.exporting.menuButtonLabel",
                        { chart: t }
                      ),
                      "aria-expanded": !1,
                    }
                  )));
              },
              addAccessibleContextMenuAttribs: function () {
                var t = this.chart,
                  e = t.exportDivElements;
                e &&
                  e.length &&
                  (e.forEach(function (t) {
                    t &&
                      ("LI" !== t.tagName || (t.children && t.children.length)
                        ? t.setAttribute("aria-hidden", "true")
                        : t.setAttribute("tabindex", -1));
                  }),
                  (e = e[0] && e[0].parentNode)) &&
                  (e.removeAttribute("aria-hidden"),
                  e.setAttribute(
                    "aria-label",
                    t.langFormat("accessibility.exporting.chartMenuLabel", {
                      chart: t,
                    })
                  ));
              },
              getKeyboardNavigation: function () {
                var t = this.keyCodes,
                  e = this.chart,
                  i = this;
                return new n(e, {
                  keyCodeMap: [
                    [
                      [t.left, t.up],
                      function () {
                        return i.onKbdPrevious(this);
                      },
                    ],
                    [
                      [t.right, t.down],
                      function () {
                        return i.onKbdNext(this);
                      },
                    ],
                    [
                      [t.enter, t.space],
                      function () {
                        return i.onKbdClick(this);
                      },
                    ],
                  ],
                  validate: function () {
                    return (
                      !!e.exporting &&
                      !1 !== e.options.exporting.enabled &&
                      !1 !== e.options.exporting.accessibility.enabled
                    );
                  },
                  init: function () {
                    var t = i.exportButtonProxy,
                      n = e.exportingGroup;
                    n && t && e.setFocusToElement(n, t);
                  },
                  terminate: function () {
                    e.hideExportMenu();
                  },
                });
              },
              onKbdPrevious: function (t) {
                var e = this.chart,
                  i = e.options.accessibility;
                t = t.response;
                for (var n = e.highlightedExportItemIx || 0; n--; )
                  if (e.highlightExportItem(n)) return t.success;
                return i.keyboardNavigation.wrapAround
                  ? (e.highlightLastExportItem(), t.success)
                  : t.prev;
              },
              onKbdNext: function (t) {
                var e = this.chart,
                  i = e.options.accessibility;
                t = t.response;
                for (
                  var n = (e.highlightedExportItemIx || 0) + 1;
                  n < e.exportDivElements.length;
                  ++n
                )
                  if (e.highlightExportItem(n)) return t.success;
                return i.keyboardNavigation.wrapAround
                  ? (e.highlightExportItem(0), t.success)
                  : t.next;
              },
              onKbdClick: function (t) {
                var e = this.chart,
                  i = e.exportDivElements[e.highlightedExportItemIx],
                  n = s(e).element;
                this.isExportMenuShown
                  ? this.fakeClickEvent(i)
                  : (this.fakeClickEvent(n), e.highlightExportItem(0));
                return t.response.success;
              },
            });
            return t;
          }
        );
        e(
          t,
          "Accessibility/Components/SeriesComponent/SeriesKeyboardNavigation.js",
          [
            t["Core/Chart/Chart.js"],
            t["Core/Series/Point.js"],
            t["Core/Series/Series.js"],
            t["Core/Series/SeriesRegistry.js"],
            t["Core/Globals.js"],
            t["Core/Utilities.js"],
            t["Accessibility/KeyboardNavigationHandler.js"],
            t["Accessibility/Utils/EventProvider.js"],
            t["Accessibility/Utils/ChartUtilities.js"],
          ],
          function (t, e, i, n, o, r, s, a, h) {
            function l(t) {
              var e = t.index,
                i = t.series.points,
                n = i.length;
              if (i[e] !== t)
                for (; n--; ) {
                  if (i[n] === t) return n;
                }
              else return e;
            }
            function c(t) {
              var e =
                  t.chart.options.accessibility.keyboardNavigation
                    .seriesNavigation,
                i = t.options.accessibility || {},
                n = i.keyboardNavigation;
              return (
                (n && !1 === n.enabled) ||
                !1 === i.enabled ||
                !1 === t.options.enableMouseTracking ||
                !t.visible ||
                (e.pointNavigationEnabledThreshold &&
                  e.pointNavigationEnabledThreshold <= t.points.length)
              );
            }
            function d(t) {
              var e = t.series.chart.options.accessibility,
                i =
                  t.options.accessibility &&
                  !1 === t.options.accessibility.enabled;
              return (
                (t.isNull &&
                  e.keyboardNavigation.seriesNavigation.skipNullPoints) ||
                !1 === t.visible ||
                !1 === t.isInside ||
                i ||
                c(t.series)
              );
            }
            function p(t, e, i, n) {
              var o = Infinity,
                r = e.points.length,
                s = function (t) {
                  return !(y(t.plotX) && y(t.plotY));
                };
              if (!s(t)) {
                for (; r--; ) {
                  var a = e.points[r];
                  if (
                    !s(a) &&
                    ((a =
                      (t.plotX - a.plotX) * (t.plotX - a.plotX) * (i || 1) +
                      (t.plotY - a.plotY) * (t.plotY - a.plotY) * (n || 1)),
                    a < o)
                  ) {
                    o = a;
                    var h = r;
                  }
                }
                return y(h) ? e.points[h] : void 0;
              }
            }
            function u(t) {
              var e = !1;
              delete t.highlightedPoint;
              return (e = t.series.reduce(function (t, e) {
                return t || e.highlightFirstValidPoint();
              }, !1));
            }
            function f(t, e) {
              this.keyCodes = e;
              this.chart = t;
            }
            var g = n.seriesTypes,
              m = o.doc,
              y = r.defined;
            n = r.extend;
            var v = r.fireEvent,
              x = h.getPointFromXY,
              b = h.getSeriesFromName,
              C = h.scrollToPoint;
            i.prototype.keyboardMoveVertical = !0;
            ["column", "pie"].forEach(function (t) {
              g[t] && (g[t].prototype.keyboardMoveVertical = !1);
            });
            e.prototype.highlight = function () {
              var t = this.series.chart;
              if (this.isNull) t.tooltip && t.tooltip.hide(0);
              else this.onMouseOver();
              C(this);
              this.graphic && t.setFocusToElement(this.graphic);
              t.highlightedPoint = this;
              return this;
            };
            t.prototype.highlightAdjacentPoint = function (t) {
              var e = this.series,
                i = this.highlightedPoint,
                n = (i && l(i)) || 0,
                o = i && i.series.points,
                r = this.series && this.series[this.series.length - 1];
              r = r && r.points && r.points[r.points.length - 1];
              if (!e[0] || !e[0].points) return !1;
              if (i) {
                if (
                  ((e = e[i.series.index + (t ? 1 : -1)]),
                  (n = o[n + (t ? 1 : -1)]),
                  !n && e && (n = e.points[t ? 0 : e.points.length - 1]),
                  !n)
                )
                  return !1;
              } else n = t ? e[0].points[0] : r;
              return d(n)
                ? ((e = n.series),
                  c(e)
                    ? (this.highlightedPoint = t
                        ? e.points[e.points.length - 1]
                        : e.points[0])
                    : (this.highlightedPoint = n),
                  this.highlightAdjacentPoint(t))
                : n.highlight();
            };
            i.prototype.highlightFirstValidPoint = function () {
              var t = this.chart.highlightedPoint,
                e = (t && t.series) === this ? l(t) : 0;
              t = this.points;
              var i = t.length;
              if (t && i) {
                for (var n = e; n < i; ++n)
                  if (!d(t[n])) return t[n].highlight();
                for (; 0 <= e; --e) if (!d(t[e])) return t[e].highlight();
              }
              return !1;
            };
            t.prototype.highlightAdjacentSeries = function (t) {
              var e = this.highlightedPoint,
                i = this.series && this.series[this.series.length - 1],
                n = i && i.points && i.points[i.points.length - 1];
              if (!this.highlightedPoint)
                return (
                  (i = t ? this.series && this.series[0] : i),
                  (n = t ? i && i.points && i.points[0] : n)
                    ? n.highlight()
                    : !1
                );
              i = this.series[e.series.index + (t ? -1 : 1)];
              if (!i) return !1;
              n = p(e, i, 4);
              if (!n) return !1;
              if (c(i))
                return (
                  n.highlight(),
                  (t = this.highlightAdjacentSeries(t)),
                  t ? t : (e.highlight(), !1)
                );
              n.highlight();
              return n.series.highlightFirstValidPoint();
            };
            t.prototype.highlightAdjacentPointVertical = function (t) {
              var e = this.highlightedPoint,
                i = Infinity,
                n;
              if (!y(e.plotX) || !y(e.plotY)) return !1;
              this.series.forEach(function (o) {
                c(o) ||
                  o.points.forEach(function (r) {
                    if (y(r.plotY) && y(r.plotX) && r !== e) {
                      var s = r.plotY - e.plotY,
                        a = Math.abs(r.plotX - e.plotX);
                      a = Math.abs(s) * Math.abs(s) + a * a * 4;
                      o.yAxis && o.yAxis.reversed && (s *= -1);
                      !((0 >= s && t) || (0 <= s && !t) || 5 > a || d(r)) &&
                        a < i &&
                        ((i = a), (n = r));
                    }
                  });
              });
              return n ? n.highlight() : !1;
            };
            n(f.prototype, {
              init: function () {
                var t = this,
                  n = this.chart,
                  o = (this.eventProvider = new a());
                o.addEvent(i, "destroy", function () {
                  return t.onSeriesDestroy(this);
                });
                o.addEvent(n, "afterDrilldown", function () {
                  u(this);
                  this.focusElement && this.focusElement.removeFocusBorder();
                });
                o.addEvent(n, "drilldown", function (e) {
                  e = e.point;
                  var i = e.series;
                  t.lastDrilledDownPoint = {
                    x: e.x,
                    y: e.y,
                    seriesName: i ? i.name : "",
                  };
                });
                o.addEvent(n, "drillupall", function () {
                  setTimeout(function () {
                    t.onDrillupAll();
                  }, 10);
                });
                o.addEvent(e, "afterSetState", function () {
                  var t = this.graphic && this.graphic.element;
                  n.highlightedPoint === this &&
                    m.activeElement !== t &&
                    t &&
                    t.focus &&
                    t.focus();
                });
              },
              onDrillupAll: function () {
                var t = this.lastDrilledDownPoint,
                  e = this.chart,
                  i = t && b(e, t.seriesName),
                  n;
                t && i && y(t.x) && y(t.y) && (n = x(i, t.x, t.y));
                e.container && e.container.focus();
                n && n.highlight && n.highlight();
                e.focusElement && e.focusElement.removeFocusBorder();
              },
              getKeyboardNavigationHandler: function () {
                var t = this,
                  e = this.keyCodes,
                  i = this.chart,
                  n = i.inverted;
                return new s(i, {
                  keyCodeMap: [
                    [
                      n ? [e.up, e.down] : [e.left, e.right],
                      function (e) {
                        return t.onKbdSideways(this, e);
                      },
                    ],
                    [
                      n ? [e.left, e.right] : [e.up, e.down],
                      function (e) {
                        return t.onKbdVertical(this, e);
                      },
                    ],
                    [
                      [e.enter, e.space],
                      function (t, e) {
                        if ((t = i.highlightedPoint))
                          (e.point = t),
                            v(t.series, "click", e),
                            t.firePointEvent("click");
                        return this.response.success;
                      },
                    ],
                  ],
                  init: function (e) {
                    return t.onHandlerInit(this, e);
                  },
                  terminate: function () {
                    return t.onHandlerTerminate();
                  },
                });
              },
              onKbdSideways: function (t, e) {
                var i = this.keyCodes;
                return this.attemptHighlightAdjacentPoint(
                  t,
                  e === i.right || e === i.down
                );
              },
              onKbdVertical: function (t, e) {
                var i = this.chart,
                  n = this.keyCodes;
                e = e === n.down || e === n.right;
                n = i.options.accessibility.keyboardNavigation.seriesNavigation;
                if (n.mode && "serialize" === n.mode)
                  return this.attemptHighlightAdjacentPoint(t, e);
                i[
                  i.highlightedPoint &&
                  i.highlightedPoint.series.keyboardMoveVertical
                    ? "highlightAdjacentPointVertical"
                    : "highlightAdjacentSeries"
                ](e);
                return t.response.success;
              },
              onHandlerInit: function (t, e) {
                var i = this.chart;
                if (0 < e) u(i);
                else {
                  e = i.series.length;
                  for (
                    var n;
                    e-- &&
                    !((i.highlightedPoint =
                      i.series[e].points[i.series[e].points.length - 1]),
                    (n = i.series[e].highlightFirstValidPoint()));

                  );
                }
                return t.response.success;
              },
              onHandlerTerminate: function () {
                var t = this.chart;
                t.tooltip && t.tooltip.hide(0);
                var e = t.highlightedPoint && t.highlightedPoint.series;
                if (e && e.onMouseOut) e.onMouseOut();
                if (t.highlightedPoint && t.highlightedPoint.onMouseOut)
                  t.highlightedPoint.onMouseOut();
                delete t.highlightedPoint;
              },
              attemptHighlightAdjacentPoint: function (t, e) {
                var i = this.chart,
                  n = i.options.accessibility.keyboardNavigation.wrapAround;
                return i.highlightAdjacentPoint(e)
                  ? t.response.success
                  : n
                  ? t.init(e ? 1 : -1)
                  : t.response[e ? "next" : "prev"];
              },
              onSeriesDestroy: function (t) {
                var e = this.chart;
                e.highlightedPoint &&
                  e.highlightedPoint.series === t &&
                  (delete e.highlightedPoint,
                  e.focusElement && e.focusElement.removeFocusBorder());
              },
              destroy: function () {
                this.eventProvider.removeAddedEvents();
              },
            });
            return f;
          }
        );
        e(
          t,
          "Accessibility/Components/AnnotationsA11y.js",
          [t["Accessibility/Utils/HTMLUtilities.js"]],
          function (t) {
            function e(t) {
              return (t.annotations || []).reduce(function (t, e) {
                e.options &&
                  !1 !== e.options.visible &&
                  (t = t.concat(e.labels));
                return t;
              }, []);
            }
            function i(t) {
              return (
                (t.options &&
                  t.options.accessibility &&
                  t.options.accessibility.description) ||
                (t.graphic && t.graphic.text && t.graphic.text.textStr) ||
                ""
              );
            }
            function n(t) {
              var e =
                t.options &&
                t.options.accessibility &&
                t.options.accessibility.description;
              if (e) return e;
              e = t.chart;
              var n = i(t),
                o = t.points
                  .filter(function (t) {
                    return !!t.graphic;
                  })
                  .map(function (t) {
                    var e =
                      (t.accessibility && t.accessibility.valueDescription) ||
                      (t.graphic &&
                        t.graphic.element &&
                        t.graphic.element.getAttribute("aria-label")) ||
                      "";
                    t = (t && t.series.name) || "";
                    return (t ? t + ", " : "") + "data point " + e;
                  })
                  .filter(function (t) {
                    return !!t;
                  }),
                r = o.length,
                s =
                  "accessibility.screenReaderSection.annotations.description" +
                  (1 < r ? "MultiplePoints" : r ? "SinglePoint" : "NoPoints");
              t = {
                annotationText: n,
                annotation: t,
                numPoints: r,
                annotationPoint: o[0],
                additionalAnnotationPoints: o.slice(1),
              };
              return e.langFormat(s, t);
            }
            function o(t) {
              return e(t).map(function (t) {
                return (t = r(s(n(t)))) ? "<li>" + t + "</li>" : "";
              });
            }
            var r = t.escapeStringForHTML,
              s = t.stripHTMLTagsFromString;
            return {
              getAnnotationsInfoHTML: function (t) {
                var e = t.annotations;
                return e && e.length
                  ? '<ul style="list-style-type: none">' +
                      o(t).join(" ") +
                      "</ul>"
                  : "";
              },
              getAnnotationLabelDescription: n,
              getAnnotationListItems: o,
              getPointAnnotationTexts: function (t) {
                var n = e(t.series.chart).filter(function (e) {
                  return -1 < e.points.indexOf(t);
                });
                return n.length
                  ? n.map(function (t) {
                      return "" + i(t);
                    })
                  : [];
              },
            };
          }
        );
        e(
          t,
          "Accessibility/Components/SeriesComponent/SeriesDescriber.js",
          [
            t["Accessibility/Components/AnnotationsA11y.js"],
            t["Accessibility/Utils/ChartUtilities.js"],
            t["Core/FormatUtilities.js"],
            t["Accessibility/Utils/HTMLUtilities.js"],
            t["Core/Utilities.js"],
          ],
          function (t, e, i, n, o) {
            function r(t) {
              var e = t.index;
              return t.series && t.series.data && D(e)
                ? E(t.series.data, function (t) {
                    return !!(
                      t &&
                      "undefined" !== typeof t.index &&
                      t.index > e &&
                      t.graphic &&
                      t.graphic.element
                    );
                  }) || null
                : null;
            }
            function s(t) {
              var e =
                t.chart.options.accessibility.series
                  .pointDescriptionEnabledThreshold;
              return !!(!1 !== e && t.points && t.points.length >= e);
            }
            function a(t) {
              var e = t.options.accessibility || {};
              return !s(t) && !e.exposeAsGroupOnly;
            }
            function h(t) {
              var e =
                t.chart.options.accessibility.keyboardNavigation
                  .seriesNavigation;
              return !(
                !t.points ||
                !(
                  t.points.length < e.pointNavigationEnabledThreshold ||
                  !1 === e.pointNavigationEnabledThreshold
                )
              );
            }
            function l(t, e) {
              var i = t.series.chart,
                n = i.options.accessibility.point || {};
              t = t.series.tooltipOptions || {};
              i = i.options.lang;
              return L(e)
                ? T(
                    e,
                    n.valueDecimals || t.valueDecimals || -1,
                    i.decimalPoint,
                    i.accessibility.thousandsSep || i.thousandsSep
                  )
                : e;
            }
            function c(t) {
              var e = (t.options.accessibility || {}).description;
              return (
                (e &&
                  t.chart.langFormat("accessibility.series.description", {
                    description: e,
                    series: t,
                  })) ||
                ""
              );
            }
            function d(t, e) {
              return t.chart.langFormat(
                "accessibility.series." + e + "Description",
                { name: C(t[e]), series: t }
              );
            }
            function p(t) {
              var e = t.series,
                i = e.chart,
                n = i.options.accessibility.point || {};
              if ((e = e.xAxis && e.xAxis.dateTime))
                return (
                  (e = e.getXDateFormat(
                    t.x || 0,
                    i.options.tooltip.dateTimeLabelFormats
                  )),
                  (n =
                    (n.dateFormatter && n.dateFormatter(t)) ||
                    n.dateFormat ||
                    e),
                  i.time.dateFormat(n, t.x || 0, void 0)
                );
            }
            function u(t) {
              var e = p(t),
                i =
                  (t.series.xAxis || {}).categories &&
                  D(t.category) &&
                  ("" + t.category).replace("<br/>", " "),
                n = t.id && 0 > t.id.indexOf("highcharts-"),
                o = "x, " + t.x;
              return t.name || e || i || (n ? t.id : o);
            }
            function f(t, e, i) {
              var n = e || "",
                o = i || "";
              return t.series.pointArrayMap.reduce(function (e, i) {
                e += e.length ? ", " : "";
                var r = l(t, O(t[i], t.options[i]));
                return e + (i + ": " + n + r + o);
              }, "");
            }
            function g(t) {
              var e = t.series,
                i = e.chart.options.accessibility.point || {},
                n = e.tooltipOptions || {},
                o = i.valuePrefix || n.valuePrefix || "";
              i = i.valueSuffix || n.valueSuffix || "";
              n = l(t, t["undefined" !== typeof t.value ? "value" : "y"]);
              return t.isNull
                ? e.chart.langFormat("accessibility.series.nullPointValue", {
                    point: t,
                  })
                : e.pointArrayMap
                ? f(t, o, i)
                : o + n + i;
            }
            function m(t) {
              var e = t.series,
                i = e.chart,
                n = i.options.accessibility.point.valueDescriptionFormat,
                o = (e = O(
                  e.xAxis &&
                    e.xAxis.options.accessibility &&
                    e.xAxis.options.accessibility.enabled,
                  !i.angular
                ))
                  ? u(t)
                  : "";
              t = {
                point: t,
                index: D(t.index) ? t.index + 1 : "",
                xDescription: o,
                value: g(t),
                separator: e ? ", " : "",
              };
              return k(n, t, i);
            }
            function y(t) {
              var e = t.series,
                i = e.chart,
                n = m(t),
                o =
                  t.options &&
                  t.options.accessibility &&
                  t.options.accessibility.description;
              o = o ? " " + o : "";
              e = 1 < i.series.length && e.name ? " " + e.name + "." : "";
              i = t.series.chart;
              var r = b(t),
                s = { point: t, annotations: r };
              i = r.length
                ? i.langFormat(
                    "accessibility.series.pointAnnotationsDescription",
                    s
                  )
                : "";
              t.accessibility = t.accessibility || {};
              t.accessibility.valueDescription = n;
              return n + o + e + (i ? " " + i : "");
            }
            function v(t) {
              var e = a(t),
                i = h(t);
              (e || i) &&
                t.points.forEach(function (t) {
                  var i;
                  if (
                    !(i = t.graphic && t.graphic.element) &&
                    ((i = t.series && t.series.is("sunburst")),
                    (i = t.isNull && !i))
                  ) {
                    var n = t.series,
                      o = r(t);
                    n = (i = o && o.graphic)
                      ? i.parentGroup
                      : n.graph || n.group;
                    o = o
                      ? { x: O(t.plotX, o.plotX, 0), y: O(t.plotY, o.plotY, 0) }
                      : { x: O(t.plotX, 0), y: O(t.plotY, 0) };
                    o = t.series.chart.renderer.rect(o.x, o.y, 1, 1);
                    o.attr({
                      class: "highcharts-a11y-dummy-point",
                      fill: "none",
                      opacity: 0,
                      "fill-opacity": 0,
                      "stroke-opacity": 0,
                    });
                    n && n.element
                      ? ((t.graphic = o),
                        (t.hasDummyGraphic = !0),
                        o.add(n),
                        n.element.insertBefore(o.element, i ? i.element : null),
                        (i = o.element))
                      : (i = void 0);
                  }
                  n =
                    t.options &&
                    t.options.accessibility &&
                    !1 === t.options.accessibility.enabled;
                  i &&
                    (i.setAttribute("tabindex", "-1"),
                    (i.style.outline = "0"),
                    e && !n
                      ? ((o = t.series),
                        (n = o.chart.options.accessibility.point || {}),
                        (o = o.options.accessibility || {}),
                        (t = P(
                          (o.pointDescriptionFormatter &&
                            o.pointDescriptionFormatter(t)) ||
                            (n.descriptionFormatter &&
                              n.descriptionFormatter(t)) ||
                            y(t)
                        )),
                        i.setAttribute("role", "img"),
                        i.setAttribute("aria-label", t))
                      : i.setAttribute("aria-hidden", !0));
                });
            }
            function x(t) {
              var e = t.chart,
                i = e.types || [],
                n = c(t),
                o = function (i) {
                  return e[i] && 1 < e[i].length && t[i];
                },
                r = d(t, "xAxis"),
                s = d(t, "yAxis"),
                a = {
                  name: t.name || "",
                  ix: t.index + 1,
                  numSeries: e.series && e.series.length,
                  numPoints: t.points && t.points.length,
                  series: t,
                };
              i = 1 < i.length ? "Combination" : "";
              return (
                (e.langFormat(
                  "accessibility.series.summary." + t.type + i,
                  a
                ) ||
                  e.langFormat("accessibility.series.summary.default" + i, a)) +
                (n ? " " + n : "") +
                (o("yAxis") ? " " + s : "") +
                (o("xAxis") ? " " + r : "")
              );
            }
            var b = t.getPointAnnotationTexts,
              C = e.getAxisDescription,
              w = e.getSeriesFirstPointElement,
              S = e.getSeriesA11yElement,
              A = e.unhideChartElementFromAT,
              k = i.format,
              T = i.numberFormat,
              M = n.reverseChildNodes,
              P = n.stripHTMLTagsFromString,
              E = o.find,
              L = o.isNumber,
              O = o.pick,
              D = o.defined;
            return {
              describeSeries: function (t) {
                var e = t.chart,
                  i = w(t),
                  n = S(t),
                  o = e.is3d && e.is3d();
                if (n) {
                  n.lastChild !== i || o || M(n);
                  v(t);
                  A(e, n);
                  o = t.chart;
                  e = o.options.chart;
                  i = 1 < o.series.length;
                  o = o.options.accessibility.series.describeSingleSeries;
                  var r = (t.options.accessibility || {}).exposeAsGroupOnly;
                  (e.options3d && e.options3d.enabled && i) ||
                  !(i || o || r || s(t))
                    ? n.setAttribute("aria-label", "")
                    : ((e = t.chart.options.accessibility),
                      (i = e.landmarkVerbosity),
                      (t.options.accessibility || {}).exposeAsGroupOnly
                        ? n.setAttribute("role", "img")
                        : "all" === i && n.setAttribute("role", "region"),
                      n.setAttribute("tabindex", "-1"),
                      (n.style.outline = "0"),
                      n.setAttribute(
                        "aria-label",
                        P(
                          (e.series.descriptionFormatter &&
                            e.series.descriptionFormatter(t)) ||
                            x(t)
                        )
                      ));
                }
              },
              defaultPointDescriptionFormatter: y,
              defaultSeriesDescriptionFormatter: x,
              getPointA11yTimeDescription: p,
              getPointXDescription: u,
              getPointValue: g,
              getPointValueDescription: m,
            };
          }
        );
        e(
          t,
          "Accessibility/Utils/Announcer.js",
          [
            t["Core/Globals.js"],
            t["Core/Renderer/HTML/AST.js"],
            t["Accessibility/Utils/DOMElementProvider.js"],
            t["Accessibility/Utils/HTMLUtilities.js"],
          ],
          function (t, e, i, n) {
            var o = t.doc,
              r = n.setElAttrs,
              s = n.visuallyHideElement;
            return (function () {
              function t(t, e) {
                this.chart = t;
                this.domElementProvider = new i();
                this.announceRegion = this.addAnnounceRegion(e);
              }
              t.prototype.destroy = function () {
                this.domElementProvider.destroyCreatedElements();
              };
              t.prototype.announce = function (t) {
                var i = this;
                e.setElementHTML(this.announceRegion, t);
                this.clearAnnouncementRegionTimer &&
                  clearTimeout(this.clearAnnouncementRegionTimer);
                this.clearAnnouncementRegionTimer = setTimeout(function () {
                  i.announceRegion.innerHTML = "";
                  delete i.clearAnnouncementRegionTimer;
                }, 1e3);
              };
              t.prototype.addAnnounceRegion = function (t) {
                var e =
                    this.chart.announcerContainer ||
                    this.createAnnouncerContainer(),
                  i = this.domElementProvider.createElement("div");
                r(i, { "aria-hidden": !1, "aria-live": t });
                s(i);
                e.appendChild(i);
                return i;
              };
              t.prototype.createAnnouncerContainer = function () {
                var t = this.chart,
                  e = o.createElement("div");
                r(e, {
                  "aria-hidden": !1,
                  style: "position:relative",
                  class: "highcharts-announcer-container",
                });
                t.renderTo.insertBefore(e, t.renderTo.firstChild);
                return (t.announcerContainer = e);
              };
              return t;
            })();
          }
        );
        e(
          t,
          "Accessibility/Components/SeriesComponent/NewDataAnnouncer.js",
          [
            t["Core/Globals.js"],
            t["Core/Series/Series.js"],
            t["Core/Utilities.js"],
            t["Accessibility/Utils/ChartUtilities.js"],
            t["Accessibility/Components/SeriesComponent/SeriesDescriber.js"],
            t["Accessibility/Utils/Announcer.js"],
            t["Accessibility/Utils/EventProvider.js"],
          ],
          function (t, e, i, n, o, r, s) {
            function a(t) {
              var e = t.series.data.filter(function (e) {
                return t.x === e.x && t.y === e.y;
              });
              return 1 === e.length ? e[0] : t;
            }
            function h(t, e) {
              var i = (t || []).concat(e || []).reduce(function (t, e) {
                t[e.name + e.index] = e;
                return t;
              }, {});
              return Object.keys(i).map(function (t) {
                return i[t];
              });
            }
            var l = i.extend,
              c = i.defined,
              d = n.getChartTitle,
              p = o.defaultPointDescriptionFormatter,
              u = o.defaultSeriesDescriptionFormatter;
            i = function (t) {
              this.chart = t;
            };
            l(i.prototype, {
              init: function () {
                var t = this.chart,
                  e = t.options.accessibility.announceNewData.interruptUser
                    ? "assertive"
                    : "polite";
                this.lastAnnouncementTime = 0;
                this.dirty = { allSeries: {} };
                this.eventProvider = new s();
                this.announcer = new r(t, e);
                this.addEventListeners();
              },
              destroy: function () {
                this.eventProvider.removeAddedEvents();
                this.announcer.destroy();
              },
              addEventListeners: function () {
                var t = this,
                  i = this.chart,
                  n = this.eventProvider;
                n.addEvent(i, "afterDrilldown", function () {
                  t.lastAnnouncementTime = 0;
                });
                n.addEvent(e, "updatedData", function () {
                  t.onSeriesUpdatedData(this);
                });
                n.addEvent(i, "afterAddSeries", function (e) {
                  t.onSeriesAdded(e.series);
                });
                n.addEvent(e, "addPoint", function (e) {
                  t.onPointAdded(e.point);
                });
                n.addEvent(i, "redraw", function () {
                  t.announceDirtyData();
                });
              },
              onSeriesUpdatedData: function (t) {
                var e = this.chart;
                t.chart === e &&
                  e.options.accessibility.announceNewData.enabled &&
                  ((this.dirty.hasDirty = !0),
                  (this.dirty.allSeries[t.name + t.index] = t));
              },
              onSeriesAdded: function (t) {
                this.chart.options.accessibility.announceNewData.enabled &&
                  ((this.dirty.hasDirty = !0),
                  (this.dirty.allSeries[t.name + t.index] = t),
                  (this.dirty.newSeries = c(this.dirty.newSeries)
                    ? void 0
                    : t));
              },
              onPointAdded: function (t) {
                var e = t.series.chart;
                this.chart === e &&
                  e.options.accessibility.announceNewData.enabled &&
                  (this.dirty.newPoint = c(this.dirty.newPoint) ? void 0 : t);
              },
              announceDirtyData: function () {
                var t = this;
                if (
                  this.chart.options.accessibility.announceNewData &&
                  this.dirty.hasDirty
                ) {
                  var e = this.dirty.newPoint;
                  e && (e = a(e));
                  this.queueAnnouncement(
                    Object.keys(this.dirty.allSeries).map(function (e) {
                      return t.dirty.allSeries[e];
                    }),
                    this.dirty.newSeries,
                    e
                  );
                  this.dirty = { allSeries: {} };
                }
              },
              queueAnnouncement: function (t, e, i) {
                var n = this,
                  o = this.chart.options.accessibility.announceNewData;
                if (o.enabled) {
                  var r = +new Date();
                  o = Math.max(
                    0,
                    o.minAnnounceInterval - (r - this.lastAnnouncementTime)
                  );
                  t = h(
                    this.queuedAnnouncement && this.queuedAnnouncement.series,
                    t
                  );
                  if ((e = this.buildAnnouncementMessage(t, e, i)))
                    this.queuedAnnouncement &&
                      clearTimeout(this.queuedAnnouncementTimer),
                      (this.queuedAnnouncement = {
                        time: r,
                        message: e,
                        series: t,
                      }),
                      (this.queuedAnnouncementTimer = setTimeout(function () {
                        n &&
                          n.announcer &&
                          ((n.lastAnnouncementTime = +new Date()),
                          n.announcer.announce(n.queuedAnnouncement.message),
                          delete n.queuedAnnouncement,
                          delete n.queuedAnnouncementTimer);
                      }, o));
                }
              },
              buildAnnouncementMessage: function (e, i, n) {
                var o = this.chart,
                  r = o.options.accessibility.announceNewData;
                if (
                  r.announcementFormatter &&
                  ((e = r.announcementFormatter(e, i, n)), !1 !== e)
                )
                  return e.length ? e : null;
                e = t.charts && 1 < t.charts.length ? "Multiple" : "Single";
                e = i
                  ? "newSeriesAnnounce" + e
                  : n
                  ? "newPointAnnounce" + e
                  : "newDataAnnounce";
                r = d(o);
                return o.langFormat("accessibility.announceNewData." + e, {
                  chartTitle: r,
                  seriesDesc: i ? u(i) : null,
                  pointDesc: n ? p(n) : null,
                  point: n,
                  series: i,
                });
              },
            });
            return i;
          }
        );
        e(
          t,
          "Accessibility/Components/SeriesComponent/ForcedMarkers.js",
          [t["Core/Series/Series.js"], t["Core/Utilities.js"]],
          function (t, e) {
            function i(t) {
              o(!0, t, {
                marker: { enabled: !0, states: { normal: { opacity: 0 } } },
              });
            }
            var n = e.addEvent,
              o = e.merge;
            return function () {
              n(t, "render", function () {
                var t = this.options,
                  e =
                    !1 !==
                    (this.options.accessibility &&
                      this.options.accessibility.enabled);
                if ((e = this.chart.options.accessibility.enabled && e))
                  (e = this.chart.options.accessibility),
                    (e =
                      this.points.length <
                        e.series.pointDescriptionEnabledThreshold ||
                      !1 === e.series.pointDescriptionEnabledThreshold);
                if (e) {
                  if (
                    (t.marker &&
                      !1 === t.marker.enabled &&
                      ((this.a11yMarkersForced = !0), i(this.options)),
                    this._hasPointMarkers && this.points && this.points.length)
                  )
                    for (t = this.points.length; t--; ) {
                      e = this.points[t];
                      var n = e.options;
                      delete e.hasForcedA11yMarker;
                      n.marker &&
                        (n.marker.enabled
                          ? (o(!0, n.marker, {
                              states: {
                                normal: {
                                  opacity:
                                    (n.marker.states &&
                                      n.marker.states.normal &&
                                      n.marker.states.normal.opacity) ||
                                    1,
                                },
                              },
                            }),
                            (e.hasForcedA11yMarker = !1))
                          : (i(n), (e.hasForcedA11yMarker = !0)));
                    }
                } else this.a11yMarkersForced && (delete this.a11yMarkersForced, (t = this.resetA11yMarkerOptions) && o(!0, this.options, { marker: { enabled: t.enabled, states: { normal: { opacity: t.states && t.states.normal && t.states.normal.opacity } } } }));
              });
              n(t, "afterSetOptions", function (t) {
                this.resetA11yMarkerOptions = o(
                  t.options.marker || {},
                  this.userOptions.marker || {}
                );
              });
              n(t, "afterRender", function () {
                if (this.chart.styledMode) {
                  if (this.markerGroup)
                    this.markerGroup[
                      this.a11yMarkersForced ? "addClass" : "removeClass"
                    ]("highcharts-a11y-markers-hidden");
                  this._hasPointMarkers &&
                    this.points &&
                    this.points.length &&
                    this.points.forEach(function (t) {
                      t.graphic &&
                        (t.graphic[
                          t.hasForcedA11yMarker ? "addClass" : "removeClass"
                        ]("highcharts-a11y-marker-hidden"),
                        t.graphic[
                          !1 === t.hasForcedA11yMarker
                            ? "addClass"
                            : "removeClass"
                        ]("highcharts-a11y-marker-visible"));
                    });
                }
              });
            };
          }
        );
        e(
          t,
          "Accessibility/Components/SeriesComponent/SeriesComponent.js",
          [
            t["Core/Globals.js"],
            t["Core/Utilities.js"],
            t["Accessibility/AccessibilityComponent.js"],
            t[
              "Accessibility/Components/SeriesComponent/SeriesKeyboardNavigation.js"
            ],
            t["Accessibility/Components/SeriesComponent/NewDataAnnouncer.js"],
            t["Accessibility/Components/SeriesComponent/ForcedMarkers.js"],
            t["Accessibility/Utils/ChartUtilities.js"],
            t["Accessibility/Components/SeriesComponent/SeriesDescriber.js"],
            t["Core/Tooltip.js"],
          ],
          function (t, e, i, n, o, r, s, a, h) {
            e = e.extend;
            var l = s.hideSeriesFromAT,
              c = a.describeSeries;
            t.SeriesAccessibilityDescriber = a;
            r();
            t = function () {};
            t.prototype = new i();
            e(t.prototype, {
              init: function () {
                this.newDataAnnouncer = new o(this.chart);
                this.newDataAnnouncer.init();
                this.keyboardNavigation = new n(this.chart, this.keyCodes);
                this.keyboardNavigation.init();
                this.hideTooltipFromATWhenShown();
                this.hideSeriesLabelsFromATWhenShown();
              },
              hideTooltipFromATWhenShown: function () {
                var t = this;
                this.addEvent(h, "refresh", function () {
                  this.chart === t.chart &&
                    this.label &&
                    this.label.element &&
                    this.label.element.setAttribute("aria-hidden", !0);
                });
              },
              hideSeriesLabelsFromATWhenShown: function () {
                this.addEvent(this.chart, "afterDrawSeriesLabels", function () {
                  this.series.forEach(function (t) {
                    t.labelBySeries && t.labelBySeries.attr("aria-hidden", !0);
                  });
                });
              },
              onChartRender: function () {
                this.chart.series.forEach(function (t) {
                  !1 !==
                    (t.options.accessibility &&
                      t.options.accessibility.enabled) && t.visible
                    ? c(t)
                    : l(t);
                });
              },
              getKeyboardNavigation: function () {
                return this.keyboardNavigation.getKeyboardNavigationHandler();
              },
              destroy: function () {
                this.newDataAnnouncer.destroy();
                this.keyboardNavigation.destroy();
              },
            });
            return t;
          }
        );
        e(
          t,
          "Accessibility/Components/ZoomComponent.js",
          [
            t["Accessibility/AccessibilityComponent.js"],
            t["Accessibility/Utils/ChartUtilities.js"],
            t["Core/Globals.js"],
            t["Accessibility/Utils/HTMLUtilities.js"],
            t["Accessibility/KeyboardNavigationHandler.js"],
            t["Core/Utilities.js"],
          ],
          function (t, e, i, n, o, r) {
            var s = e.unhideChartElementFromAT;
            e = i.noop;
            var a = n.removeElement,
              h = n.setElAttrs;
            n = r.extend;
            var l = r.pick;
            i.Axis.prototype.panStep = function (t, e) {
              var i = e || 3;
              e = this.getExtremes();
              var n = ((e.max - e.min) / i) * t;
              i = e.max + n;
              n = e.min + n;
              var o = i - n;
              0 > t && n < e.dataMin
                ? ((n = e.dataMin), (i = n + o))
                : 0 < t && i > e.dataMax && ((i = e.dataMax), (n = i - o));
              this.setExtremes(n, i);
            };
            e.prototype = new t();
            n(e.prototype, {
              init: function () {
                var t = this,
                  e = this.chart;
                ["afterShowResetZoom", "afterDrilldown", "drillupall"].forEach(
                  function (i) {
                    t.addEvent(e, i, function () {
                      t.updateProxyOverlays();
                    });
                  }
                );
              },
              onChartUpdate: function () {
                var t = this.chart,
                  e = this;
                t.mapNavButtons &&
                  t.mapNavButtons.forEach(function (i, n) {
                    s(t, i.element);
                    e.setMapNavButtonAttrs(
                      i.element,
                      "accessibility.zoom.mapZoom" + (n ? "Out" : "In")
                    );
                  });
              },
              setMapNavButtonAttrs: function (t, e) {
                var i = this.chart;
                e = i.langFormat(e, { chart: i });
                h(t, { tabindex: -1, role: "button", "aria-label": e });
              },
              onChartRender: function () {
                this.updateProxyOverlays();
              },
              updateProxyOverlays: function () {
                var t = this.chart;
                a(this.drillUpProxyGroup);
                a(this.resetZoomProxyGroup);
                t.resetZoomButton &&
                  this.recreateProxyButtonAndGroup(
                    t.resetZoomButton,
                    "resetZoomProxyButton",
                    "resetZoomProxyGroup",
                    t.langFormat("accessibility.zoom.resetZoomButton", {
                      chart: t,
                    })
                  );
                t.drillUpButton &&
                  this.recreateProxyButtonAndGroup(
                    t.drillUpButton,
                    "drillUpProxyButton",
                    "drillUpProxyGroup",
                    t.langFormat("accessibility.drillUpButton", {
                      chart: t,
                      buttonText: t.getDrilldownBackText(),
                    })
                  );
              },
              recreateProxyButtonAndGroup: function (t, e, i, n) {
                a(this[i]);
                this[i] = this.addProxyGroup();
                this[e] = this.createProxyButton(t, this[i], {
                  "aria-label": n,
                  tabindex: -1,
                });
              },
              getMapZoomNavigation: function () {
                var t = this.keyCodes,
                  e = this.chart,
                  i = this;
                return new o(e, {
                  keyCodeMap: [
                    [
                      [t.up, t.down, t.left, t.right],
                      function (t) {
                        return i.onMapKbdArrow(this, t);
                      },
                    ],
                    [
                      [t.tab],
                      function (t, e) {
                        return i.onMapKbdTab(this, e);
                      },
                    ],
                    [
                      [t.space, t.enter],
                      function () {
                        return i.onMapKbdClick(this);
                      },
                    ],
                  ],
                  validate: function () {
                    return !!(
                      e.mapZoom &&
                      e.mapNavButtons &&
                      e.mapNavButtons.length
                    );
                  },
                  init: function (t) {
                    return i.onMapNavInit(t);
                  },
                });
              },
              onMapKbdArrow: function (t, e) {
                var i = this.keyCodes;
                this.chart[
                  e === i.up || e === i.down ? "yAxis" : "xAxis"
                ][0].panStep(e === i.left || e === i.up ? -1 : 1);
                return t.response.success;
              },
              onMapKbdTab: function (t, e) {
                var i = this.chart;
                t = t.response;
                var n =
                  ((e = e.shiftKey) && !this.focusedMapNavButtonIx) ||
                  (!e && this.focusedMapNavButtonIx);
                i.mapNavButtons[this.focusedMapNavButtonIx].setState(0);
                if (n) return i.mapZoom(), t[e ? "prev" : "next"];
                this.focusedMapNavButtonIx += e ? -1 : 1;
                e = i.mapNavButtons[this.focusedMapNavButtonIx];
                i.setFocusToElement(e.box, e.element);
                e.setState(2);
                return t.success;
              },
              onMapKbdClick: function (t) {
                this.fakeClickEvent(
                  this.chart.mapNavButtons[this.focusedMapNavButtonIx].element
                );
                return t.response.success;
              },
              onMapNavInit: function (t) {
                var e = this.chart,
                  i = e.mapNavButtons[0],
                  n = e.mapNavButtons[1];
                i = 0 < t ? i : n;
                e.setFocusToElement(i.box, i.element);
                i.setState(2);
                this.focusedMapNavButtonIx = 0 < t ? 0 : 1;
              },
              simpleButtonNavigation: function (t, e, i) {
                var n = this.keyCodes,
                  r = this,
                  s = this.chart;
                return new o(s, {
                  keyCodeMap: [
                    [
                      [n.tab, n.up, n.down, n.left, n.right],
                      function (t, e) {
                        return this.response[
                          (t === n.tab && e.shiftKey) ||
                          t === n.left ||
                          t === n.up
                            ? "prev"
                            : "next"
                        ];
                      },
                    ],
                    [
                      [n.space, n.enter],
                      function () {
                        var t = i(this, s);
                        return l(t, this.response.success);
                      },
                    ],
                  ],
                  validate: function () {
                    return s[t] && s[t].box && r[e];
                  },
                  init: function () {
                    s.setFocusToElement(s[t].box, r[e]);
                  },
                });
              },
              getKeyboardNavigation: function () {
                return [
                  this.simpleButtonNavigation(
                    "resetZoomButton",
                    "resetZoomProxyButton",
                    function (t, e) {
                      e.zoomOut();
                    }
                  ),
                  this.simpleButtonNavigation(
                    "drillUpButton",
                    "drillUpProxyButton",
                    function (t, e) {
                      e.drillUp();
                      return t.response.prev;
                    }
                  ),
                  this.getMapZoomNavigation(),
                ];
              },
            });
            return e;
          }
        );
        e(
          t,
          "Extensions/RangeSelector.js",
          [
            t["Core/Axis/Axis.js"],
            t["Core/Chart/Chart.js"],
            t["Core/Globals.js"],
            t["Core/DefaultOptions.js"],
            t["Core/Color/Palette.js"],
            t["Core/Renderer/SVG/SVGElement.js"],
            t["Core/Utilities.js"],
          ],
          function (t, e, i, n, o, r, s) {
            function a(t) {
              if (-1 !== t.indexOf("%L")) return "text";
              var e = "aAdewbBmoyY".split("").some(function (e) {
                  return -1 !== t.indexOf("%" + e);
                }),
                i = "HkIlMS".split("").some(function (e) {
                  return -1 !== t.indexOf("%" + e);
                });
              return e && i
                ? "datetime-local"
                : e
                ? "date"
                : i
                ? "time"
                : "text";
            }
            var h = n.defaultOptions,
              l = s.addEvent,
              c = s.createElement,
              d = s.css,
              p = s.defined,
              u = s.destroyObjectProperties,
              f = s.discardElement,
              g = s.extend,
              m = s.find,
              y = s.fireEvent,
              v = s.isNumber,
              x = s.merge,
              b = s.objectEach,
              C = s.pad,
              w = s.pick,
              S = s.pInt,
              A = s.splat;
            g(h, {
              rangeSelector: {
                allButtonsEnabled: !1,
                buttons: void 0,
                buttonSpacing: 5,
                dropdown: "responsive",
                enabled: void 0,
                verticalAlign: "top",
                buttonTheme: { width: 28, height: 18, padding: 2, zIndex: 7 },
                floating: !1,
                x: 0,
                y: 0,
                height: void 0,
                inputBoxBorderColor: "none",
                inputBoxHeight: 17,
                inputBoxWidth: void 0,
                inputDateFormat: "%b %e, %Y",
                inputDateParser: void 0,
                inputEditDateFormat: "%Y-%m-%d",
                inputEnabled: !0,
                inputPosition: { align: "right", x: 0, y: 0 },
                inputSpacing: 5,
                selected: void 0,
                buttonPosition: { align: "left", x: 0, y: 0 },
                inputStyle: { color: o.highlightColor80, cursor: "pointer" },
                labelStyle: { color: o.neutralColor60 },
              },
            });
            g(h.lang, {
              rangeSelectorZoom: "Zoom",
              rangeSelectorFrom: "",
              rangeSelectorTo: "→",
            });
            var k = (function () {
              function e(t) {
                this.buttons = void 0;
                this.buttonOptions = e.prototype.defaultButtons;
                this.initialButtonGroupWidth = 0;
                this.options = void 0;
                this.chart = t;
                this.init(t);
              }
              e.prototype.clickButton = function (e, i) {
                var n = this.chart,
                  o = this.buttonOptions[e],
                  r = n.xAxis[0],
                  s = (n.scroller && n.scroller.getUnionExtremes()) || r || {},
                  a = s.dataMin,
                  h = s.dataMax,
                  c = r && Math.round(Math.min(r.max, w(h, r.max))),
                  d = o.type;
                s = o._range;
                var u,
                  f = o.dataGrouping;
                if (null !== a && null !== h) {
                  n.fixedRange = s;
                  this.setSelected(e);
                  f &&
                    ((this.forcedDataGrouping = !0),
                    t.prototype.setDataGrouping.call(
                      r || { chart: this.chart },
                      f,
                      !1
                    ),
                    (this.frozenStates = o.preserveDataGrouping));
                  if ("month" === d || "year" === d)
                    if (r) {
                      d = {
                        range: o,
                        max: c,
                        chart: n,
                        dataMin: a,
                        dataMax: h,
                      };
                      var g = r.minFromRange.call(d);
                      v(d.newMax) && (c = d.newMax);
                    } else s = o;
                  else if (s)
                    (g = Math.max(c - s, a)), (c = Math.min(g + s, h));
                  else if ("ytd" === d)
                    if (r)
                      "undefined" === typeof h &&
                        ((a = Number.MAX_VALUE),
                        (h = Number.MIN_VALUE),
                        n.series.forEach(function (t) {
                          t = t.xData;
                          a = Math.min(t[0], a);
                          h = Math.max(t[t.length - 1], h);
                        }),
                        (i = !1)),
                        (c = this.getYTDExtremes(h, a, n.time.useUTC)),
                        (g = u = c.min),
                        (c = c.max);
                    else {
                      this.deferredYTDClick = e;
                      return;
                    }
                  else
                    "all" === d &&
                      r &&
                      (n.navigator &&
                        n.navigator.baseSeries[0] &&
                        (n.navigator.baseSeries[0].xAxis.options.range =
                          void 0),
                      (g = a),
                      (c = h));
                  p(g) && (g += o._offsetMin);
                  p(c) && (c += o._offsetMax);
                  this.dropdown && (this.dropdown.selectedIndex = e + 1);
                  if (r)
                    r.setExtremes(g, c, w(i, !0), void 0, {
                      trigger: "rangeSelectorButton",
                      rangeSelectorButton: o,
                    });
                  else {
                    var m = A(n.options.xAxis)[0];
                    var x = m.range;
                    m.range = s;
                    var b = m.min;
                    m.min = u;
                    l(n, "load", function () {
                      m.range = x;
                      m.min = b;
                    });
                  }
                  y(this, "afterBtnClick");
                }
              };
              e.prototype.setSelected = function (t) {
                this.selected = this.options.selected = t;
              };
              e.prototype.init = function (t) {
                var e = this,
                  i = t.options.rangeSelector,
                  n = i.buttons || e.defaultButtons.slice(),
                  o = i.selected,
                  r = function () {
                    var t = e.minInput,
                      i = e.maxInput;
                    t && t.blur && y(t, "blur");
                    i && i.blur && y(i, "blur");
                  };
                e.chart = t;
                e.options = i;
                e.buttons = [];
                e.buttonOptions = n;
                this.eventsToUnbind = [];
                this.eventsToUnbind.push(l(t.container, "mousedown", r));
                this.eventsToUnbind.push(l(t, "resize", r));
                n.forEach(e.computeButtonRange);
                "undefined" !== typeof o && n[o] && this.clickButton(o, !1);
                this.eventsToUnbind.push(
                  l(t, "load", function () {
                    t.xAxis &&
                      t.xAxis[0] &&
                      l(t.xAxis[0], "setExtremes", function (i) {
                        this.max - this.min !== t.fixedRange &&
                          "rangeSelectorButton" !== i.trigger &&
                          "updatedData" !== i.trigger &&
                          e.forcedDataGrouping &&
                          !e.frozenStates &&
                          this.setDataGrouping(!1, !1);
                      });
                  })
                );
              };
              e.prototype.updateButtonStates = function () {
                var t = this,
                  e = this.chart,
                  i = this.dropdown,
                  n = e.xAxis[0],
                  o = Math.round(n.max - n.min),
                  r = !n.hasVisibleSeries,
                  s = (e.scroller && e.scroller.getUnionExtremes()) || n,
                  a = s.dataMin,
                  h = s.dataMax;
                e = t.getYTDExtremes(h, a, e.time.useUTC);
                var l = e.min,
                  c = e.max,
                  d = t.selected,
                  p = v(d),
                  u = t.options.allButtonsEnabled,
                  f = t.buttons;
                t.buttonOptions.forEach(function (e, s) {
                  var g = e._range,
                    m = e.type,
                    y = e.count || 1,
                    v = f[s],
                    x = 0,
                    b = e._offsetMax - e._offsetMin;
                  e = s === d;
                  var C = g > h - a,
                    w = g < n.minRange,
                    S = !1,
                    A = !1;
                  g = g === o;
                  ("month" === m || "year" === m) &&
                  o + 36e5 >= 864e5 * { month: 28, year: 365 }[m] * y - b &&
                  o - 36e5 <= 864e5 * { month: 31, year: 366 }[m] * y + b
                    ? (g = !0)
                    : "ytd" === m
                    ? ((g = c - l + b === o), (S = !e))
                    : "all" === m &&
                      ((g = n.max - n.min >= h - a), (A = !e && p && g));
                  m = !u && (C || w || A || r);
                  y = (e && g) || (g && !p && !S) || (e && t.frozenStates);
                  m ? (x = 3) : y && ((p = !0), (x = 2));
                  v.state !== x &&
                    (v.setState(x),
                    i &&
                      ((i.options[s + 1].disabled = m),
                      2 === x && (i.selectedIndex = s + 1)),
                    0 === x && d === s && t.setSelected());
                });
              };
              e.prototype.computeButtonRange = function (t) {
                var e = t.type,
                  i = t.count || 1,
                  n = {
                    millisecond: 1,
                    second: 1e3,
                    minute: 6e4,
                    hour: 36e5,
                    day: 864e5,
                    week: 6048e5,
                  };
                if (n[e]) t._range = n[e] * i;
                else if ("month" === e || "year" === e)
                  t._range = 864e5 * { month: 30, year: 365 }[e] * i;
                t._offsetMin = w(t.offsetMin, 0);
                t._offsetMax = w(t.offsetMax, 0);
                t._range += t._offsetMax - t._offsetMin;
              };
              e.prototype.getInputValue = function (t) {
                t = "min" === t ? this.minInput : this.maxInput;
                var e = this.chart.options.rangeSelector,
                  i = this.chart.time;
                return t
                  ? (
                      ("text" === t.type && e.inputDateParser) ||
                      this.defaultInputDateParser
                    )(t.value, i.useUTC, i)
                  : 0;
              };
              e.prototype.setInputValue = function (t, e) {
                var i = this.options,
                  n = this.chart.time,
                  o = "min" === t ? this.minInput : this.maxInput;
                t = "min" === t ? this.minDateBox : this.maxDateBox;
                if (o) {
                  var r = o.getAttribute("data-hc-time");
                  r = p(r) ? Number(r) : void 0;
                  p(e) &&
                    (p(r) && o.setAttribute("data-hc-time-previous", r),
                    o.setAttribute("data-hc-time", e),
                    (r = e));
                  o.value = n.dateFormat(
                    this.inputTypeFormats[o.type] || i.inputEditDateFormat,
                    r
                  );
                  t && t.attr({ text: n.dateFormat(i.inputDateFormat, r) });
                }
              };
              e.prototype.setInputExtremes = function (t, e, i) {
                if ((t = "min" === t ? this.minInput : this.maxInput)) {
                  var n = this.inputTypeFormats[t.type],
                    o = this.chart.time;
                  n &&
                    ((e = o.dateFormat(n, e)),
                    t.min !== e && (t.min = e),
                    (i = o.dateFormat(n, i)),
                    t.max !== i && (t.max = i));
                }
              };
              e.prototype.showInput = function (t) {
                var e = "min" === t ? this.minDateBox : this.maxDateBox;
                if (
                  (t = "min" === t ? this.minInput : this.maxInput) &&
                  e &&
                  this.inputGroup
                ) {
                  var i = "text" === t.type,
                    n = this.inputGroup,
                    o = n.translateX;
                  n = n.translateY;
                  var r = this.options.inputBoxWidth;
                  d(t, {
                    width: i ? e.width + (r ? -2 : 20) + "px" : "auto",
                    height: i ? e.height - 2 + "px" : "auto",
                    border: "2px solid silver",
                  });
                  i && r
                    ? d(t, { left: o + e.x + "px", top: n + "px" })
                    : d(t, {
                        left:
                          Math.min(
                            Math.round(e.x + o - (t.offsetWidth - e.width) / 2),
                            this.chart.chartWidth - t.offsetWidth
                          ) + "px",
                        top: n - (t.offsetHeight - e.height) / 2 + "px",
                      });
                }
              };
              e.prototype.hideInput = function (t) {
                (t = "min" === t ? this.minInput : this.maxInput) &&
                  d(t, {
                    top: "-9999em",
                    border: 0,
                    width: "1px",
                    height: "1px",
                  });
              };
              e.prototype.defaultInputDateParser = function (t, e, n) {
                var o = t.split("/").join("-").split(" ").join("T");
                -1 === o.indexOf("T") && (o += "T00:00");
                if (e) o += "Z";
                else {
                  var r;
                  if ((r = i.isSafari))
                    (r = o),
                      (r = !(
                        6 < r.length &&
                        (r.lastIndexOf("-") === r.length - 6 ||
                          r.lastIndexOf("+") === r.length - 6)
                      ));
                  r &&
                    ((r = new Date(o).getTimezoneOffset() / 60),
                    (o += 0 >= r ? "+" + C(-r) + ":00" : "-" + C(r) + ":00"));
                }
                o = Date.parse(o);
                v(o) ||
                  ((t = t.split("-")),
                  (o = Date.UTC(S(t[0]), S(t[1]) - 1, S(t[2]))));
                n && e && v(o) && (o += n.getTimezoneOffset(o));
                return o;
              };
              e.prototype.drawInput = function (t) {
                function e() {
                  var e = l.getInputValue(t),
                    i = n.xAxis[0],
                    o = n.scroller && n.scroller.xAxis ? n.scroller.xAxis : i,
                    r = o.dataMin;
                  o = o.dataMax;
                  var s = l.maxInput,
                    a = l.minInput;
                  e !== Number(b.getAttribute("data-hc-time-previous")) &&
                    v(e) &&
                    (b.setAttribute("data-hc-time-previous", e),
                    m && s && v(r)
                      ? e > Number(s.getAttribute("data-hc-time"))
                        ? (e = void 0)
                        : e < r && (e = r)
                      : a &&
                        v(o) &&
                        (e < Number(a.getAttribute("data-hc-time"))
                          ? (e = void 0)
                          : e > o && (e = o)),
                    "undefined" !== typeof e &&
                      i.setExtremes(
                        m ? e : i.min,
                        m ? i.max : e,
                        void 0,
                        void 0,
                        { trigger: "rangeSelectorInput" }
                      ));
                }
                var n = this.chart,
                  r = this.div,
                  s = this.inputGroup,
                  l = this,
                  p = n.renderer.style || {},
                  u = n.renderer,
                  f = n.options.rangeSelector,
                  m = "min" === t,
                  y = h.lang[m ? "rangeSelectorFrom" : "rangeSelectorTo"] || "";
                y = u
                  .label(y, 0)
                  .addClass("highcharts-range-label")
                  .attr({
                    padding: y ? 2 : 0,
                    height: y ? f.inputBoxHeight : 0,
                  })
                  .add(s);
                u = u
                  .label("", 0)
                  .addClass("highcharts-range-input")
                  .attr({
                    padding: 2,
                    width: f.inputBoxWidth,
                    height: f.inputBoxHeight,
                    "text-align": "center",
                  })
                  .on("click", function () {
                    l.showInput(t);
                    l[t + "Input"].focus();
                  });
                n.styledMode ||
                  u.attr({ stroke: f.inputBoxBorderColor, "stroke-width": 1 });
                u.add(s);
                var b = c(
                  "input",
                  { name: t, className: "highcharts-range-selector" },
                  void 0,
                  r
                );
                b.setAttribute("type", a(f.inputDateFormat || "%b %e, %Y"));
                n.styledMode ||
                  (y.css(x(p, f.labelStyle)),
                  u.css(x({ color: o.neutralColor80 }, p, f.inputStyle)),
                  d(
                    b,
                    g(
                      {
                        position: "absolute",
                        border: 0,
                        boxShadow: "0 0 15px rgba(0,0,0,0.3)",
                        width: "1px",
                        height: "1px",
                        padding: 0,
                        textAlign: "center",
                        fontSize: p.fontSize,
                        fontFamily: p.fontFamily,
                        top: "-9999em",
                      },
                      f.inputStyle
                    )
                  ));
                b.onfocus = function () {
                  l.showInput(t);
                };
                b.onblur = function () {
                  b === i.doc.activeElement && e();
                  l.hideInput(t);
                  l.setInputValue(t);
                  b.blur();
                };
                var C = !1;
                b.onchange = function () {
                  C || (e(), l.hideInput(t), b.blur());
                };
                b.onkeypress = function (t) {
                  13 === t.keyCode && e();
                };
                b.onkeydown = function (t) {
                  C = !0;
                  (38 !== t.keyCode && 40 !== t.keyCode) || e();
                };
                b.onkeyup = function () {
                  C = !1;
                };
                return { dateBox: u, input: b, label: y };
              };
              e.prototype.getPosition = function () {
                var t = this.chart,
                  e = t.options.rangeSelector;
                t = "top" === e.verticalAlign ? t.plotTop - t.axisOffset[0] : 0;
                return {
                  buttonTop: t + e.buttonPosition.y,
                  inputTop: t + e.inputPosition.y - 10,
                };
              };
              e.prototype.getYTDExtremes = function (t, e, i) {
                var n = this.chart.time,
                  o = new n.Date(t),
                  r = n.get("FullYear", o);
                i = i ? n.Date.UTC(r, 0, 1) : +new n.Date(r, 0, 1);
                e = Math.max(e, i);
                o = o.getTime();
                return { max: Math.min(t || o, o), min: e };
              };
              e.prototype.render = function (t, e) {
                var i = this.chart,
                  n = i.renderer,
                  o = i.container,
                  r = i.options,
                  s = r.rangeSelector,
                  a = w(r.chart.style && r.chart.style.zIndex, 0) + 1;
                r = s.inputEnabled;
                if (!1 !== s.enabled) {
                  this.rendered ||
                    ((this.group = n
                      .g("range-selector-group")
                      .attr({ zIndex: 7 })
                      .add()),
                    (this.div = c("div", void 0, {
                      position: "relative",
                      height: 0,
                      zIndex: a,
                    })),
                    this.buttonOptions.length && this.renderButtons(),
                    o.parentNode && o.parentNode.insertBefore(this.div, o),
                    r &&
                      ((this.inputGroup = n.g("input-group").add(this.group)),
                      (n = this.drawInput("min")),
                      (this.minDateBox = n.dateBox),
                      (this.minLabel = n.label),
                      (this.minInput = n.input),
                      (n = this.drawInput("max")),
                      (this.maxDateBox = n.dateBox),
                      (this.maxLabel = n.label),
                      (this.maxInput = n.input)));
                  if (
                    r &&
                    (this.setInputValue("min", t),
                    this.setInputValue("max", e),
                    (t =
                      (i.scroller && i.scroller.getUnionExtremes()) ||
                      i.xAxis[0] ||
                      {}),
                    p(t.dataMin) &&
                      p(t.dataMax) &&
                      ((i = i.xAxis[0].minRange || 0),
                      this.setInputExtremes(
                        "min",
                        t.dataMin,
                        Math.min(t.dataMax, this.getInputValue("max")) - i
                      ),
                      this.setInputExtremes(
                        "max",
                        Math.max(t.dataMin, this.getInputValue("min")) + i,
                        t.dataMax
                      )),
                    this.inputGroup)
                  ) {
                    var h = 0;
                    [
                      this.minLabel,
                      this.minDateBox,
                      this.maxLabel,
                      this.maxDateBox,
                    ].forEach(function (t) {
                      if (t) {
                        var e = t.getBBox().width;
                        e && (t.attr({ x: h }), (h += e + s.inputSpacing));
                      }
                    });
                  }
                  this.alignElements();
                  this.rendered = !0;
                }
              };
              e.prototype.renderButtons = function () {
                var t = this,
                  e = this.buttons,
                  n = this.options,
                  o = h.lang,
                  r = this.chart.renderer,
                  s = x(n.buttonTheme),
                  a = s && s.states,
                  d = s.width || 28;
                delete s.width;
                delete s.states;
                this.buttonGroup = r
                  .g("range-selector-buttons")
                  .add(this.group);
                var p = (this.dropdown = c(
                  "select",
                  void 0,
                  {
                    position: "absolute",
                    width: "1px",
                    height: "1px",
                    padding: 0,
                    border: 0,
                    top: "-9999em",
                    cursor: "pointer",
                    opacity: 1e-4,
                  },
                  this.div
                ));
                l(p, "touchstart", function () {
                  p.style.fontSize = "16px";
                });
                [
                  [i.isMS ? "mouseover" : "mouseenter"],
                  [i.isMS ? "mouseout" : "mouseleave"],
                  ["change", "click"],
                ].forEach(function (i) {
                  var n = i[0],
                    o = i[1];
                  l(p, n, function () {
                    var i = e[t.currentButtonIndex()];
                    i && y(i.element, o || n);
                  });
                });
                this.zoomText = r
                  .label((o && o.rangeSelectorZoom) || "", 0)
                  .attr({
                    padding: n.buttonTheme.padding,
                    height: n.buttonTheme.height,
                    paddingLeft: 0,
                    paddingRight: 0,
                  })
                  .add(this.buttonGroup);
                this.chart.styledMode ||
                  (this.zoomText.css(n.labelStyle),
                  (s["stroke-width"] = w(s["stroke-width"], 0)));
                c(
                  "option",
                  { textContent: this.zoomText.textStr, disabled: !0 },
                  void 0,
                  p
                );
                this.buttonOptions.forEach(function (i, n) {
                  c("option", { textContent: i.title || i.text }, void 0, p);
                  e[n] = r
                    .button(
                      i.text,
                      0,
                      0,
                      function (e) {
                        var o = i.events && i.events.click,
                          r;
                        o && (r = o.call(i, e));
                        !1 !== r && t.clickButton(n);
                        t.isActive = !0;
                      },
                      s,
                      a && a.hover,
                      a && a.select,
                      a && a.disabled
                    )
                    .attr({ "text-align": "center", width: d })
                    .add(t.buttonGroup);
                  i.title && e[n].attr("title", i.title);
                });
              };
              e.prototype.alignElements = function () {
                var t = this,
                  e = this.buttonGroup,
                  i = this.buttons,
                  n = this.chart,
                  o = this.group,
                  r = this.inputGroup,
                  s = this.options,
                  a = this.zoomText,
                  h = n.options,
                  l =
                    h.exporting &&
                    !1 !== h.exporting.enabled &&
                    h.navigation &&
                    h.navigation.buttonOptions;
                h = s.buttonPosition;
                var c = s.inputPosition,
                  d = s.verticalAlign,
                  p = function (e, i) {
                    return l &&
                      t.titleCollision(n) &&
                      "top" === d &&
                      "right" === i.align &&
                      i.y - e.getBBox().height - 12 <
                        (l.y || 0) + (l.height || 0) + n.spacing[0]
                      ? -40
                      : 0;
                  },
                  u = n.plotLeft;
                if (o && h && c) {
                  var f = h.x - n.spacing[3];
                  if (e) {
                    this.positionButtons();
                    if (!this.initialButtonGroupWidth) {
                      var g = 0;
                      a && (g += a.getBBox().width + 5);
                      i.forEach(function (t, e) {
                        g += t.width;
                        e !== i.length - 1 && (g += s.buttonSpacing);
                      });
                      this.initialButtonGroupWidth = g;
                    }
                    u -= n.spacing[3];
                    this.updateButtonStates();
                    a = p(e, h);
                    this.alignButtonGroup(a);
                    o.placed = e.placed = n.hasLoaded;
                  }
                  e = 0;
                  r &&
                    ((e = p(r, c)),
                    "left" === c.align
                      ? (f = u)
                      : "right" === c.align &&
                        (f = -Math.max(n.axisOffset[1], -e)),
                    r.align(
                      {
                        y: c.y,
                        width: r.getBBox().width,
                        align: c.align,
                        x: c.x + f - 2,
                      },
                      !0,
                      n.spacingBox
                    ),
                    (r.placed = n.hasLoaded));
                  this.handleCollision(e);
                  o.align({ verticalAlign: d }, !0, n.spacingBox);
                  r = o.alignAttr.translateY;
                  e = o.getBBox().height + 20;
                  p = 0;
                  "bottom" === d &&
                    ((p =
                      (p = n.legend && n.legend.options) &&
                      "bottom" === p.verticalAlign &&
                      p.enabled &&
                      !p.floating
                        ? n.legend.legendHeight + w(p.margin, 10)
                        : 0),
                    (e = e + p - 20),
                    (p =
                      r -
                      e -
                      (s.floating ? 0 : s.y) -
                      (n.titleOffset ? n.titleOffset[2] : 0) -
                      10));
                  if ("top" === d)
                    s.floating && (p = 0),
                      n.titleOffset &&
                        n.titleOffset[0] &&
                        (p = n.titleOffset[0]),
                      (p += n.margin[0] - n.spacing[0] || 0);
                  else if ("middle" === d)
                    if (c.y === h.y) p = r;
                    else if (c.y || h.y)
                      p = 0 > c.y || 0 > h.y ? p - Math.min(c.y, h.y) : r - e;
                  o.translate(s.x, s.y + Math.floor(p));
                  h = this.minInput;
                  c = this.maxInput;
                  r = this.dropdown;
                  s.inputEnabled &&
                    h &&
                    c &&
                    ((h.style.marginTop = o.translateY + "px"),
                    (c.style.marginTop = o.translateY + "px"));
                  r && (r.style.marginTop = o.translateY + "px");
                }
              };
              e.prototype.alignButtonGroup = function (t, e) {
                var i = this.chart,
                  n = this.buttonGroup,
                  o = this.options.buttonPosition,
                  r = i.plotLeft - i.spacing[3],
                  s = o.x - i.spacing[3];
                "right" === o.align
                  ? (s += t - r)
                  : "center" === o.align && (s -= r / 2);
                n &&
                  n.align(
                    {
                      y: o.y,
                      width: w(e, this.initialButtonGroupWidth),
                      align: o.align,
                      x: s,
                    },
                    !0,
                    i.spacingBox
                  );
              };
              e.prototype.positionButtons = function () {
                var t = this.buttons,
                  e = this.chart,
                  i = this.options,
                  n = this.zoomText,
                  o = e.hasLoaded ? "animate" : "attr",
                  r = i.buttonPosition,
                  s = e.plotLeft,
                  a = s;
                n &&
                  "hidden" !== n.visibility &&
                  (n[o]({ x: w(s + r.x, s) }),
                  (a += r.x + n.getBBox().width + 5));
                this.buttonOptions.forEach(function (e, n) {
                  if ("hidden" !== t[n].visibility)
                    t[n][o]({ x: a }), (a += t[n].width + i.buttonSpacing);
                  else t[n][o]({ x: s });
                });
              };
              e.prototype.handleCollision = function (t) {
                var e = this,
                  i = this.chart,
                  n = this.buttonGroup,
                  o = this.inputGroup,
                  r = this.options,
                  s = r.buttonPosition,
                  a = r.dropdown,
                  h = r.inputPosition;
                r = function () {
                  var t = 0;
                  e.buttons.forEach(function (e) {
                    e = e.getBBox();
                    e.width > t && (t = e.width);
                  });
                  return t;
                };
                var l = function (e) {
                    if (o && n) {
                      var i =
                          o.alignAttr.translateX +
                          o.alignOptions.x -
                          t +
                          o.getBBox().x +
                          2,
                        r = o.alignOptions.width,
                        a = n.alignAttr.translateX + n.getBBox().x;
                      return (
                        a + e > i && i + r > a && s.y < h.y + o.getBBox().height
                      );
                    }
                    return !1;
                  },
                  c = function () {
                    o &&
                      n &&
                      o.attr({
                        translateX:
                          o.alignAttr.translateX +
                          (i.axisOffset[1] >= -t ? 0 : -t),
                        translateY:
                          o.alignAttr.translateY + n.getBBox().height + 10,
                      });
                  };
                if (n) {
                  if ("always" === a) {
                    this.collapseButtons(t);
                    l(r()) && c();
                    return;
                  }
                  "never" === a && this.expandButtons();
                }
                o && n
                  ? h.align === s.align || l(this.initialButtonGroupWidth + 20)
                    ? "responsive" === a
                      ? (this.collapseButtons(t), l(r()) && c())
                      : c()
                    : "responsive" === a && this.expandButtons()
                  : n &&
                    "responsive" === a &&
                    (this.initialButtonGroupWidth > i.plotWidth
                      ? this.collapseButtons(t)
                      : this.expandButtons());
              };
              e.prototype.collapseButtons = function (t) {
                var e = this.buttons,
                  i = this.buttonOptions,
                  n = this.chart,
                  o = this.dropdown,
                  r = this.options,
                  s = this.zoomText,
                  a =
                    (n.userOptions.rangeSelector &&
                      n.userOptions.rangeSelector.buttonTheme) ||
                    {},
                  h = function (t) {
                    return {
                      text: t ? t + " ▾" : "▾",
                      width: "auto",
                      paddingLeft: w(r.buttonTheme.paddingLeft, a.padding, 8),
                      paddingRight: w(r.buttonTheme.paddingRight, a.padding, 8),
                    };
                  };
                s && s.hide();
                var l = !1;
                i.forEach(function (t, i) {
                  i = e[i];
                  2 !== i.state
                    ? i.hide()
                    : (i.show(), i.attr(h(t.text)), (l = !0));
                });
                l ||
                  (o && (o.selectedIndex = 0),
                  e[0].show(),
                  e[0].attr(h(this.zoomText && this.zoomText.textStr)));
                i = r.buttonPosition.align;
                this.positionButtons();
                ("right" !== i && "center" !== i) ||
                  this.alignButtonGroup(
                    t,
                    e[this.currentButtonIndex()].getBBox().width
                  );
                this.showDropdown();
              };
              e.prototype.expandButtons = function () {
                var t = this.buttons,
                  e = this.buttonOptions,
                  i = this.options,
                  n = this.zoomText;
                this.hideDropdown();
                n && n.show();
                e.forEach(function (e, n) {
                  n = t[n];
                  n.show();
                  n.attr({
                    text: e.text,
                    width: i.buttonTheme.width || 28,
                    paddingLeft: w(i.buttonTheme.paddingLeft, "unset"),
                    paddingRight: w(i.buttonTheme.paddingRight, "unset"),
                  });
                  2 > n.state && n.setState(0);
                });
                this.positionButtons();
              };
              e.prototype.currentButtonIndex = function () {
                var t = this.dropdown;
                return t && 0 < t.selectedIndex ? t.selectedIndex - 1 : 0;
              };
              e.prototype.showDropdown = function () {
                var t = this.buttonGroup,
                  e = this.buttons,
                  i = this.chart,
                  n = this.dropdown;
                if (t && n) {
                  var o = t.translateX;
                  t = t.translateY;
                  e = e[this.currentButtonIndex()].getBBox();
                  d(n, {
                    left: i.plotLeft + o + "px",
                    top: t + 0.5 + "px",
                    width: e.width + "px",
                    height: e.height + "px",
                  });
                  this.hasVisibleDropdown = !0;
                }
              };
              e.prototype.hideDropdown = function () {
                var t = this.dropdown;
                t &&
                  (d(t, { top: "-9999em", width: "1px", height: "1px" }),
                  (this.hasVisibleDropdown = !1));
              };
              e.prototype.getHeight = function () {
                var t = this.options,
                  e = this.group,
                  i = t.y,
                  n = t.buttonPosition.y,
                  o = t.inputPosition.y;
                if (t.height) return t.height;
                this.alignElements();
                t = e ? e.getBBox(!0).height + 13 + i : 0;
                e = Math.min(o, n);
                if ((0 > o && 0 > n) || (0 < o && 0 < n)) t += Math.abs(e);
                return t;
              };
              e.prototype.titleCollision = function (t) {
                return !(t.options.title.text || t.options.subtitle.text);
              };
              e.prototype.update = function (t) {
                var e = this.chart;
                x(!0, e.options.rangeSelector, t);
                this.destroy();
                this.init(e);
                this.render();
              };
              e.prototype.destroy = function () {
                var t = this,
                  i = t.minInput,
                  n = t.maxInput;
                t.eventsToUnbind &&
                  (t.eventsToUnbind.forEach(function (t) {
                    return t();
                  }),
                  (t.eventsToUnbind = void 0));
                u(t.buttons);
                i && (i.onfocus = i.onblur = i.onchange = null);
                n && (n.onfocus = n.onblur = n.onchange = null);
                b(
                  t,
                  function (i, n) {
                    i &&
                      "chart" !== n &&
                      (i instanceof r
                        ? i.destroy()
                        : i instanceof window.HTMLElement && f(i));
                    i !== e.prototype[n] && (t[n] = null);
                  },
                  this
                );
              };
              return e;
            })();
            k.prototype.defaultButtons = [
              { type: "month", count: 1, text: "1m", title: "View 1 month" },
              { type: "month", count: 3, text: "3m", title: "View 3 months" },
              { type: "month", count: 6, text: "6m", title: "View 6 months" },
              { type: "ytd", text: "YTD", title: "View year to date" },
              { type: "year", count: 1, text: "1y", title: "View 1 year" },
              { type: "all", text: "All", title: "View all" },
            ];
            k.prototype.inputTypeFormats = {
              "datetime-local": "%Y-%m-%dT%H:%M:%S",
              date: "%Y-%m-%d",
              time: "%H:%M:%S",
            };
            t.prototype.minFromRange = function () {
              var t = this.range,
                e = t.type,
                i = this.max,
                n = this.chart.time,
                o = function (t, i) {
                  var o = "year" === e ? "FullYear" : "Month",
                    r = new n.Date(t),
                    s = n.get(o, r);
                  n.set(o, r, s + i);
                  s === n.get(o, r) && n.set("Date", r, 0);
                  return r.getTime() - t;
                };
              if (v(t)) {
                var r = i - t;
                var s = t;
              } else
                (r = i + o(i, -t.count)),
                  this.chart && (this.chart.fixedRange = i - r);
              var a = w(this.dataMin, Number.MIN_VALUE);
              v(r) || (r = a);
              r <= a &&
                ((r = a),
                "undefined" === typeof s && (s = o(r, t.count)),
                (this.newMax = Math.min(r + s, this.dataMax)));
              v(i) || (r = void 0);
              return r;
            };
            if (!i.RangeSelector) {
              var T = [],
                M = function (t) {
                  function e() {
                    n &&
                      ((i = t.xAxis[0].getExtremes()),
                      (o = t.legend),
                      (s = n && n.options.verticalAlign),
                      v(i.min) && n.render(i.min, i.max),
                      o.display &&
                        "top" === s &&
                        s === o.options.verticalAlign &&
                        ((r = x(t.spacingBox)),
                        (r.y =
                          "vertical" === o.options.layout
                            ? t.plotTop
                            : r.y + n.getHeight()),
                        (o.group.placed = !1),
                        o.align(r)));
                  }
                  var i,
                    n = t.rangeSelector,
                    o,
                    r,
                    s;
                  n &&
                    (m(T, function (e) {
                      return e[0] === t;
                    }) ||
                      T.push([
                        t,
                        [
                          l(t.xAxis[0], "afterSetExtremes", function (t) {
                            n && n.render(t.min, t.max);
                          }),
                          l(t, "redraw", e),
                        ],
                      ]),
                    e());
                };
              l(e, "afterGetContainer", function () {
                this.options.rangeSelector &&
                  this.options.rangeSelector.enabled &&
                  (this.rangeSelector = new k(this));
              });
              l(e, "beforeRender", function () {
                var t = this.axes,
                  e = this.rangeSelector;
                e &&
                  (v(e.deferredYTDClick) &&
                    (e.clickButton(e.deferredYTDClick),
                    delete e.deferredYTDClick),
                  t.forEach(function (t) {
                    t.updateNames();
                    t.setScale();
                  }),
                  this.getAxisMargins(),
                  e.render(),
                  (t = e.options.verticalAlign),
                  e.options.floating ||
                    ("bottom" === t
                      ? (this.extraBottomMargin = !0)
                      : "middle" !== t && (this.extraTopMargin = !0)));
              });
              l(e, "update", function (t) {
                var e = t.options.rangeSelector;
                t = this.rangeSelector;
                var i = this.extraBottomMargin,
                  n = this.extraTopMargin;
                e &&
                  e.enabled &&
                  !p(t) &&
                  this.options.rangeSelector &&
                  ((this.options.rangeSelector.enabled = !0),
                  (this.rangeSelector = t = new k(this)));
                this.extraTopMargin = this.extraBottomMargin = !1;
                t &&
                  (M(this),
                  (e =
                    (e && e.verticalAlign) ||
                    (t.options && t.options.verticalAlign)),
                  t.options.floating ||
                    ("bottom" === e
                      ? (this.extraBottomMargin = !0)
                      : "middle" !== e && (this.extraTopMargin = !0)),
                  this.extraBottomMargin !== i || this.extraTopMargin !== n) &&
                  (this.isDirtyBox = !0);
              });
              l(e, "render", function () {
                var t = this.rangeSelector;
                t &&
                  !t.options.floating &&
                  (t.render(),
                  (t = t.options.verticalAlign),
                  "bottom" === t
                    ? (this.extraBottomMargin = !0)
                    : "middle" !== t && (this.extraTopMargin = !0));
              });
              l(e, "getMargins", function () {
                var t = this.rangeSelector;
                t &&
                  ((t = t.getHeight()),
                  this.extraTopMargin && (this.plotTop += t),
                  this.extraBottomMargin && (this.marginBottom += t));
              });
              e.prototype.callbacks.push(M);
              l(e, "destroy", function () {
                for (var t = 0; t < T.length; t++) {
                  var e = T[t];
                  if (e[0] === this) {
                    e[1].forEach(function (t) {
                      return t();
                    });
                    T.splice(t, 1);
                    break;
                  }
                }
              });
              i.RangeSelector = k;
            }
            return k;
          }
        );
        e(
          t,
          "Accessibility/Components/RangeSelectorComponent.js",
          [
            t["Accessibility/AccessibilityComponent.js"],
            t["Accessibility/Utils/ChartUtilities.js"],
            t["Accessibility/Utils/Announcer.js"],
            t["Core/Chart/Chart.js"],
            t["Accessibility/Utils/HTMLUtilities.js"],
            t["Accessibility/KeyboardNavigationHandler.js"],
            t["Core/Utilities.js"],
            t["Extensions/RangeSelector.js"],
          ],
          function (t, e, i, n, o, r, s, a) {
            var h = e.unhideChartElementFromAT,
              l = e.getAxisRangeDescription,
              c = o.setElAttrs,
              d = s.addEvent;
            e = s.extend;
            n.prototype.highlightRangeSelectorButton = function (t) {
              var e = (this.rangeSelector && this.rangeSelector.buttons) || [],
                i = this.highlightedRangeSelectorItemIx,
                n = this.rangeSelector && this.rangeSelector.selected;
              "undefined" !== typeof i &&
                e[i] &&
                i !== n &&
                e[i].setState(this.oldRangeSelectorItemState || 0);
              this.highlightedRangeSelectorItemIx = t;
              return e[t]
                ? (this.setFocusToElement(e[t].box, e[t].element),
                  t !== n &&
                    ((this.oldRangeSelectorItemState = e[t].state),
                    e[t].setState(1)),
                  !0)
                : !1;
            };
            d(a, "afterBtnClick", function () {
              if (
                this.chart.accessibility &&
                this.chart.accessibility.components.rangeSelector
              )
                return this.chart.accessibility.components.rangeSelector.onAfterBtnClick();
            });
            n = function () {};
            n.prototype = new t();
            e(n.prototype, {
              init: function () {
                this.announcer = new i(this.chart, "polite");
              },
              onChartUpdate: function () {
                var t = this.chart,
                  e = this,
                  i = t.rangeSelector;
                i &&
                  (this.updateSelectorVisibility(),
                  this.setDropdownAttrs(),
                  i.buttons &&
                    i.buttons.length &&
                    i.buttons.forEach(function (t) {
                      e.setRangeButtonAttrs(t);
                    }),
                  i.maxInput &&
                    i.minInput &&
                    ["minInput", "maxInput"].forEach(function (n, o) {
                      if ((n = i[n]))
                        h(t, n),
                          e.setRangeInputAttrs(
                            n,
                            "accessibility.rangeSelector." +
                              (o ? "max" : "min") +
                              "InputLabel"
                          );
                    }));
              },
              updateSelectorVisibility: function () {
                var t = this.chart,
                  e = t.rangeSelector,
                  i = e && e.dropdown,
                  n = (e && e.buttons) || [];
                e && e.hasVisibleDropdown && i
                  ? (h(t, i),
                    n.forEach(function (t) {
                      return t.element.setAttribute("aria-hidden", !0);
                    }))
                  : (i && i.setAttribute("aria-hidden", !0),
                    n.forEach(function (e) {
                      return h(t, e.element);
                    }));
              },
              setDropdownAttrs: function () {
                var t = this.chart,
                  e = t.rangeSelector && t.rangeSelector.dropdown;
                e &&
                  ((t = t.langFormat(
                    "accessibility.rangeSelector.dropdownLabel",
                    { rangeTitle: t.options.lang.rangeSelectorZoom }
                  )),
                  e.setAttribute("aria-label", t),
                  e.setAttribute("tabindex", -1));
              },
              setRangeButtonAttrs: function (t) {
                c(t.element, { tabindex: -1, role: "button" });
              },
              setRangeInputAttrs: function (t, e) {
                var i = this.chart;
                c(t, {
                  tabindex: -1,
                  "aria-label": i.langFormat(e, { chart: i }),
                });
              },
              onButtonNavKbdArrowKey: function (t, e) {
                var i = t.response,
                  n = this.keyCodes,
                  o = this.chart,
                  r = o.options.accessibility.keyboardNavigation.wrapAround;
                e = e === n.left || e === n.up ? -1 : 1;
                return o.highlightRangeSelectorButton(
                  o.highlightedRangeSelectorItemIx + e
                )
                  ? i.success
                  : r
                  ? (t.init(e), i.success)
                  : i[0 < e ? "next" : "prev"];
              },
              onButtonNavKbdClick: function (t) {
                t = t.response;
                var e = this.chart;
                3 !== e.oldRangeSelectorItemState &&
                  this.fakeClickEvent(
                    e.rangeSelector.buttons[e.highlightedRangeSelectorItemIx]
                      .element
                  );
                return t.success;
              },
              onAfterBtnClick: function () {
                var t = this.chart,
                  e = l(t.xAxis[0]);
                (t = t.langFormat(
                  "accessibility.rangeSelector.clickButtonAnnouncement",
                  { chart: t, axisRangeDescription: e }
                )) && this.announcer.announce(t);
              },
              onInputKbdMove: function (t) {
                var e = this.chart,
                  i = e.rangeSelector,
                  n = (e.highlightedInputRangeIx =
                    (e.highlightedInputRangeIx || 0) + t);
                1 < n || 0 > n
                  ? e.accessibility &&
                    (e.accessibility.keyboardNavigation.tabindexContainer.focus(),
                    e.accessibility.keyboardNavigation[
                      0 > t ? "prev" : "next"
                    ]())
                  : i &&
                    ((t = i[n ? "maxDateBox" : "minDateBox"]),
                    (i = i[n ? "maxInput" : "minInput"]),
                    t && i && e.setFocusToElement(t, i));
              },
              onInputNavInit: function (t) {
                var e = this,
                  i = this,
                  n = this.chart,
                  o = 0 < t ? 0 : 1,
                  r = n.rangeSelector,
                  s = r && r[o ? "maxDateBox" : "minDateBox"];
                t = r && r.minInput;
                r = r && r.maxInput;
                n.highlightedInputRangeIx = o;
                if (s && t && r) {
                  n.setFocusToElement(s, o ? r : t);
                  this.removeInputKeydownHandler &&
                    this.removeInputKeydownHandler();
                  n = function (t) {
                    (t.which || t.keyCode) === e.keyCodes.tab &&
                      (t.preventDefault(),
                      t.stopPropagation(),
                      i.onInputKbdMove(t.shiftKey ? -1 : 1));
                  };
                  var a = d(t, "keydown", n),
                    h = d(r, "keydown", n);
                  this.removeInputKeydownHandler = function () {
                    a();
                    h();
                  };
                }
              },
              onInputNavTerminate: function () {
                var t = this.chart.rangeSelector || {};
                t.maxInput && t.hideInput("max");
                t.minInput && t.hideInput("min");
                this.removeInputKeydownHandler &&
                  (this.removeInputKeydownHandler(),
                  delete this.removeInputKeydownHandler);
              },
              initDropdownNav: function () {
                var t = this,
                  e = this.chart,
                  i = e.rangeSelector,
                  n = i && i.dropdown;
                i &&
                  n &&
                  (e.setFocusToElement(i.buttonGroup, n),
                  this.removeDropdownKeydownHandler &&
                    this.removeDropdownKeydownHandler(),
                  (this.removeDropdownKeydownHandler = d(
                    n,
                    "keydown",
                    function (i) {
                      (i.which || i.keyCode) === t.keyCodes.tab &&
                        (i.preventDefault(),
                        i.stopPropagation(),
                        e.accessibility &&
                          (e.accessibility.keyboardNavigation.tabindexContainer.focus(),
                          e.accessibility.keyboardNavigation[
                            i.shiftKey ? "prev" : "next"
                          ]()));
                    }
                  )));
              },
              getRangeSelectorButtonNavigation: function () {
                var t = this.chart,
                  e = this.keyCodes,
                  i = this;
                return new r(t, {
                  keyCodeMap: [
                    [
                      [e.left, e.right, e.up, e.down],
                      function (t) {
                        return i.onButtonNavKbdArrowKey(this, t);
                      },
                    ],
                    [
                      [e.enter, e.space],
                      function () {
                        return i.onButtonNavKbdClick(this);
                      },
                    ],
                  ],
                  validate: function () {
                    return !!(
                      t.rangeSelector &&
                      t.rangeSelector.buttons &&
                      t.rangeSelector.buttons.length
                    );
                  },
                  init: function (e) {
                    var n = t.rangeSelector;
                    n && n.hasVisibleDropdown
                      ? i.initDropdownNav()
                      : n &&
                        ((n = n.buttons.length - 1),
                        t.highlightRangeSelectorButton(0 < e ? 0 : n));
                  },
                  terminate: function () {
                    i.removeDropdownKeydownHandler &&
                      (i.removeDropdownKeydownHandler(),
                      delete i.removeDropdownKeydownHandler);
                  },
                });
              },
              getRangeSelectorInputNavigation: function () {
                var t = this.chart,
                  e = this;
                return new r(t, {
                  keyCodeMap: [],
                  validate: function () {
                    return !!(
                      t.rangeSelector &&
                      t.rangeSelector.inputGroup &&
                      "hidden" !==
                        t.rangeSelector.inputGroup.element.getAttribute(
                          "visibility"
                        ) &&
                      !1 !== t.options.rangeSelector.inputEnabled &&
                      t.rangeSelector.minInput &&
                      t.rangeSelector.maxInput
                    );
                  },
                  init: function (t) {
                    e.onInputNavInit(t);
                  },
                  terminate: function () {
                    e.onInputNavTerminate();
                  },
                });
              },
              getKeyboardNavigation: function () {
                return [
                  this.getRangeSelectorButtonNavigation(),
                  this.getRangeSelectorInputNavigation(),
                ];
              },
              destroy: function () {
                this.removeDropdownKeydownHandler &&
                  this.removeDropdownKeydownHandler();
                this.removeInputKeydownHandler &&
                  this.removeInputKeydownHandler();
                this.announcer && this.announcer.destroy();
              },
            });
            return n;
          }
        );
        e(
          t,
          "Accessibility/Components/InfoRegionsComponent.js",
          [
            t["Core/Renderer/HTML/AST.js"],
            t["Core/Chart/Chart.js"],
            t["Core/FormatUtilities.js"],
            t["Core/Globals.js"],
            t["Core/Utilities.js"],
            t["Accessibility/AccessibilityComponent.js"],
            t["Accessibility/Utils/Announcer.js"],
            t["Accessibility/Components/AnnotationsA11y.js"],
            t["Accessibility/Utils/ChartUtilities.js"],
            t["Accessibility/Utils/HTMLUtilities.js"],
          ],
          function (t, e, i, n, o, r, s, a, h, l) {
            var c = i.format,
              d = n.doc;
            i = o.extend;
            var p = o.pick,
              u = a.getAnnotationsInfoHTML,
              f = h.getAxisDescription,
              g = h.getAxisRangeDescription,
              m = h.getChartTitle,
              y = h.unhideChartElementFromAT,
              v = l.addClass,
              x = l.getElement,
              b = l.getHeadingTagNameForElement,
              C = l.setElAttrs,
              w = l.stripHTMLTagsFromString,
              S = l.visuallyHideElement;
            e.prototype.getTypeDescription = function (t) {
              var e = t[0],
                i = (this.series && this.series[0]) || {};
              i = {
                numSeries: this.series.length,
                numPoints: i.points && i.points.length,
                chart: this,
                mapTitle: i.mapTitle,
              };
              if (!e)
                return this.langFormat(
                  "accessibility.chartTypes.emptyChart",
                  i
                );
              if ("map" === e)
                return i.mapTitle
                  ? this.langFormat(
                      "accessibility.chartTypes.mapTypeDescription",
                      i
                    )
                  : this.langFormat("accessibility.chartTypes.unknownMap", i);
              if (1 < this.types.length)
                return this.langFormat(
                  "accessibility.chartTypes.combinationChart",
                  i
                );
              t = t[0];
              e = this.langFormat(
                "accessibility.seriesTypeDescriptions." + t,
                i
              );
              var n =
                this.series && 2 > this.series.length ? "Single" : "Multiple";
              return (
                (this.langFormat("accessibility.chartTypes." + t + n, i) ||
                  this.langFormat("accessibility.chartTypes.default" + n, i)) +
                (e ? " " + e : "")
              );
            };
            e = function () {};
            e.prototype = new r();
            i(e.prototype, {
              init: function () {
                var t = this.chart,
                  e = this;
                this.initRegionsDefinitions();
                this.addEvent(t, "aftergetTableAST", function (t) {
                  e.onDataTableCreated(t);
                });
                this.addEvent(t, "afterViewData", function (t) {
                  e.dataTableDiv = t;
                  setTimeout(function () {
                    e.focusDataTable();
                  }, 300);
                });
                this.announcer = new s(t, "assertive");
              },
              initRegionsDefinitions: function () {
                var t = this;
                this.screenReaderSections = {
                  before: {
                    element: null,
                    buildContent: function (e) {
                      var i =
                        e.options.accessibility.screenReaderSection
                          .beforeChartFormatter;
                      return i ? i(e) : t.defaultBeforeChartFormatter(e);
                    },
                    insertIntoDOM: function (t, e) {
                      e.renderTo.insertBefore(t, e.renderTo.firstChild);
                    },
                    afterInserted: function () {
                      "undefined" !== typeof t.sonifyButtonId &&
                        t.initSonifyButton(t.sonifyButtonId);
                      "undefined" !== typeof t.dataTableButtonId &&
                        t.initDataTableButton(t.dataTableButtonId);
                    },
                  },
                  after: {
                    element: null,
                    buildContent: function (e) {
                      var i =
                        e.options.accessibility.screenReaderSection
                          .afterChartFormatter;
                      return i ? i(e) : t.defaultAfterChartFormatter();
                    },
                    insertIntoDOM: function (t, e) {
                      e.renderTo.insertBefore(t, e.container.nextSibling);
                    },
                    afterInserted: function () {
                      t.chart.accessibility &&
                        t.chart.accessibility.keyboardNavigation.updateExitAnchor();
                    },
                  },
                };
              },
              onChartRender: function () {
                var t = this;
                this.linkedDescriptionElement =
                  this.getLinkedDescriptionElement();
                this.setLinkedDescriptionAttrs();
                Object.keys(this.screenReaderSections).forEach(function (e) {
                  t.updateScreenReaderSection(e);
                });
              },
              getLinkedDescriptionElement: function () {
                var t = this.chart.options.accessibility.linkedDescription;
                if (t) {
                  if ("string" !== typeof t) return t;
                  t = c(t, this.chart);
                  t = d.querySelectorAll(t);
                  if (1 === t.length) return t[0];
                }
              },
              setLinkedDescriptionAttrs: function () {
                var t = this.linkedDescriptionElement;
                t &&
                  (t.setAttribute("aria-hidden", "true"),
                  v(t, "highcharts-linked-description"));
              },
              updateScreenReaderSection: function (e) {
                var i = this.chart,
                  n = this.screenReaderSections[e],
                  o = n.buildContent(i),
                  r = (n.element = n.element || this.createElement("div")),
                  s = r.firstChild || this.createElement("div");
                this.setScreenReaderSectionAttribs(r, e);
                t.setElementHTML(s, o);
                r.appendChild(s);
                n.insertIntoDOM(r, i);
                S(s);
                y(i, s);
                n.afterInserted && n.afterInserted();
              },
              setScreenReaderSectionAttribs: function (t, e) {
                var i = this.chart,
                  n = i.langFormat(
                    "accessibility.screenReaderSection." + e + "RegionLabel",
                    { chart: i, chartTitle: m(i) }
                  );
                C(t, {
                  id: "highcharts-screen-reader-region-" + e + "-" + i.index,
                  "aria-label": n,
                });
                t.style.position = "relative";
                "all" === i.options.accessibility.landmarkVerbosity &&
                  n &&
                  t.setAttribute("role", "region");
              },
              defaultBeforeChartFormatter: function () {
                var t = this.chart,
                  e =
                    t.options.accessibility.screenReaderSection
                      .beforeChartFormat,
                  i = this.getAxesDescription(),
                  o =
                    t.sonify &&
                    t.options.sonification &&
                    t.options.sonification.enabled,
                  r = "highcharts-a11y-sonify-data-btn-" + t.index,
                  s = "hc-linkto-highcharts-data-table-" + t.index,
                  a = u(t),
                  h = t.langFormat(
                    "accessibility.screenReaderSection.annotations.heading",
                    { chart: t }
                  );
                i = {
                  headingTagName: b(t.renderTo),
                  chartTitle: m(t),
                  typeDescription: this.getTypeDescriptionText(),
                  chartSubtitle: this.getSubtitleText(),
                  chartLongdesc: this.getLongdescText(),
                  xAxisDescription: i.xAxis,
                  yAxisDescription: i.yAxis,
                  playAsSoundButton: o ? this.getSonifyButtonText(r) : "",
                  viewTableButton: t.getCSV
                    ? this.getDataTableButtonText(s)
                    : "",
                  annotationsTitle: a ? h : "",
                  annotationsList: a,
                };
                t = n.i18nFormat(e, i, t);
                this.dataTableButtonId = s;
                this.sonifyButtonId = r;
                return t.replace(/<(\w+)[^>]*?>\s*<\/\1>/g, "");
              },
              defaultAfterChartFormatter: function () {
                var t = this.chart,
                  e =
                    t.options.accessibility.screenReaderSection
                      .afterChartFormat,
                  i = { endOfChartMarker: this.getEndOfChartMarkerText() };
                return n
                  .i18nFormat(e, i, t)
                  .replace(/<(\w+)[^>]*?>\s*<\/\1>/g, "");
              },
              getLinkedDescription: function () {
                var t = this.linkedDescriptionElement;
                return w((t && t.innerHTML) || "");
              },
              getLongdescText: function () {
                var t = this.chart.options,
                  e = t.caption;
                e = e && e.text;
                var i = this.getLinkedDescription();
                return t.accessibility.description || i || e || "";
              },
              getTypeDescriptionText: function () {
                var t = this.chart;
                return t.types
                  ? t.options.accessibility.typeDescription ||
                      t.getTypeDescription(t.types)
                  : "";
              },
              getDataTableButtonText: function (t) {
                var e = this.chart;
                e = e.langFormat(
                  "accessibility.table.viewAsDataTableButtonText",
                  { chart: e, chartTitle: m(e) }
                );
                return '<button id="' + t + '">' + e + "</button>";
              },
              getSonifyButtonText: function (t) {
                var e = this.chart;
                if (
                  e.options.sonification &&
                  !1 === e.options.sonification.enabled
                )
                  return "";
                e = e.langFormat(
                  "accessibility.sonification.playAsSoundButtonText",
                  { chart: e, chartTitle: m(e) }
                );
                return '<button id="' + t + '">' + e + "</button>";
              },
              getSubtitleText: function () {
                var t = this.chart.options.subtitle;
                return w((t && t.text) || "");
              },
              getEndOfChartMarkerText: function () {
                var t = this.chart,
                  e = t.langFormat(
                    "accessibility.screenReaderSection.endOfChartMarker",
                    { chart: t }
                  );
                return (
                  '<div id="highcharts-end-of-chart-marker-' +
                  t.index +
                  '">' +
                  e +
                  "</div>"
                );
              },
              onDataTableCreated: function (t) {
                var e = this.chart;
                if (e.options.accessibility.enabled) {
                  this.viewDataTableButton &&
                    this.viewDataTableButton.setAttribute(
                      "aria-expanded",
                      "true"
                    );
                  var i = t.tree.attributes || {};
                  i.tabindex = -1;
                  i.summary = e.langFormat("accessibility.table.tableSummary", {
                    chart: e,
                  });
                  t.tree.attributes = i;
                }
              },
              focusDataTable: function () {
                var t = this.dataTableDiv;
                (t = t && t.getElementsByTagName("table")[0]) &&
                  t.focus &&
                  t.focus();
              },
              initSonifyButton: function (t) {
                var e = this,
                  i = (this.sonifyButton = x(t)),
                  n = this.chart,
                  o = function (t) {
                    i &&
                      (i.setAttribute("aria-hidden", "true"),
                      i.setAttribute("aria-label", ""));
                    t.preventDefault();
                    t.stopPropagation();
                    t = n.langFormat(
                      "accessibility.sonification.playAsSoundClickAnnouncement",
                      { chart: n }
                    );
                    e.announcer.announce(t);
                    setTimeout(function () {
                      i &&
                        (i.removeAttribute("aria-hidden"),
                        i.removeAttribute("aria-label"));
                      n.sonify && n.sonify();
                    }, 1e3);
                  };
                i &&
                  n &&
                  (C(i, { tabindex: -1 }),
                  (i.onclick = function (t) {
                    (
                      (n.options.accessibility &&
                        n.options.accessibility.screenReaderSection
                          .onPlayAsSoundClick) ||
                      o
                    ).call(this, t, n);
                  }));
              },
              initDataTableButton: function (t) {
                var e = (this.viewDataTableButton = x(t)),
                  i = this.chart;
                t = t.replace("hc-linkto-", "");
                e &&
                  (C(e, { tabindex: -1, "aria-expanded": !!x(t) }),
                  (e.onclick =
                    i.options.accessibility.screenReaderSection
                      .onViewDataTableClick ||
                    function () {
                      i.viewData();
                    }));
              },
              getAxesDescription: function () {
                var t = this.chart,
                  e = function (e, i) {
                    e = t[e];
                    return (
                      1 < e.length ||
                      (e[0] &&
                        p(
                          e[0].options.accessibility &&
                            e[0].options.accessibility.enabled,
                          i
                        ))
                    );
                  },
                  i = !!t.types && 0 > t.types.indexOf("map"),
                  n = !!t.hasCartesianSeries,
                  o = e("xAxis", !t.angular && n && i);
                e = e("yAxis", n && i);
                i = {};
                o && (i.xAxis = this.getAxisDescriptionText("xAxis"));
                e && (i.yAxis = this.getAxisDescriptionText("yAxis"));
                return i;
              },
              getAxisDescriptionText: function (t) {
                var e = this.chart,
                  i = e[t];
                return e.langFormat(
                  "accessibility.axis." +
                    t +
                    "Description" +
                    (1 < i.length ? "Plural" : "Singular"),
                  {
                    chart: e,
                    names: i.map(function (t) {
                      return f(t);
                    }),
                    ranges: i.map(function (t) {
                      return g(t);
                    }),
                    numAxes: i.length,
                  }
                );
              },
              destroy: function () {
                this.announcer && this.announcer.destroy();
              },
            });
            return e;
          }
        );
        e(
          t,
          "Accessibility/Components/ContainerComponent.js",
          [
            t["Accessibility/AccessibilityComponent.js"],
            t["Accessibility/KeyboardNavigationHandler.js"],
            t["Accessibility/Utils/ChartUtilities.js"],
            t["Core/Globals.js"],
            t["Accessibility/Utils/HTMLUtilities.js"],
            t["Core/Utilities.js"],
          ],
          function (t, e, i, n, o, r) {
            var s = i.unhideChartElementFromAT,
              a = i.getChartTitle,
              h = n.doc,
              l = o.stripHTMLTagsFromString;
            i = r.extend;
            n = function () {};
            n.prototype = new t();
            i(n.prototype, {
              onChartUpdate: function () {
                this.handleSVGTitleElement();
                this.setSVGContainerLabel();
                this.setGraphicContainerAttrs();
                this.setRenderToAttrs();
                this.makeCreditsAccessible();
              },
              handleSVGTitleElement: function () {
                var t = this.chart,
                  e = "highcharts-title-" + t.index,
                  i = l(
                    t.langFormat("accessibility.svgContainerTitle", {
                      chartTitle: a(t),
                    })
                  );
                if (i.length) {
                  var n = (this.svgTitleElement =
                    this.svgTitleElement ||
                    h.createElementNS("http://www.w3.org/2000/svg", "title"));
                  n.textContent = i;
                  n.id = e;
                  t.renderTo.insertBefore(n, t.renderTo.firstChild);
                }
              },
              setSVGContainerLabel: function () {
                var t = this.chart,
                  e = t.langFormat("accessibility.svgContainerLabel", {
                    chartTitle: a(t),
                  });
                t.renderer.box &&
                  e.length &&
                  t.renderer.box.setAttribute("aria-label", e);
              },
              setGraphicContainerAttrs: function () {
                var t = this.chart,
                  e = t.langFormat("accessibility.graphicContainerLabel", {
                    chartTitle: a(t),
                  });
                e.length && t.container.setAttribute("aria-label", e);
              },
              setRenderToAttrs: function () {
                var t = this.chart;
                "disabled" !== t.options.accessibility.landmarkVerbosity
                  ? t.renderTo.setAttribute("role", "region")
                  : t.renderTo.removeAttribute("role");
                t.renderTo.setAttribute(
                  "aria-label",
                  t.langFormat("accessibility.chartContainerLabel", {
                    title: a(t),
                    chart: t,
                  })
                );
              },
              makeCreditsAccessible: function () {
                var t = this.chart,
                  e = t.credits;
                e &&
                  (e.textStr &&
                    e.element.setAttribute(
                      "aria-label",
                      t.langFormat("accessibility.credits", {
                        creditsStr: l(e.textStr),
                      })
                    ),
                  s(t, e.element));
              },
              getKeyboardNavigation: function () {
                var t = this.chart;
                return new e(t, {
                  keyCodeMap: [],
                  validate: function () {
                    return !0;
                  },
                  init: function () {
                    var e = t.accessibility;
                    e && e.keyboardNavigation.tabindexContainer.focus();
                  },
                });
              },
              destroy: function () {
                this.chart.renderTo.setAttribute("aria-hidden", !0);
              },
            });
            return n;
          }
        );
        e(
          t,
          "Accessibility/HighContrastMode.js",
          [t["Core/Globals.js"]],
          function (t) {
            var e = t.doc,
              i = t.isMS,
              n = t.win;
            return {
              isHighContrastModeActive: function () {
                var t = /(Edg)/.test(n.navigator.userAgent);
                if (n.matchMedia && t)
                  return n.matchMedia("(-ms-high-contrast: active)").matches;
                if (i && n.getComputedStyle) {
                  t = e.createElement("div");
                  t.style.backgroundImage =
                    "url(data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==)";
                  e.body.appendChild(t);
                  var o = (t.currentStyle || n.getComputedStyle(t))
                    .backgroundImage;
                  e.body.removeChild(t);
                  return "none" === o;
                }
                return !1;
              },
              setHighContrastTheme: function (t) {
                t.highContrastModeActive = !0;
                var e = t.options.accessibility.highContrastTheme;
                t.update(e, !1);
                t.series.forEach(function (t) {
                  var i = e.plotOptions[t.type] || {};
                  t.update({
                    color: i.color || "windowText",
                    colors: [i.color || "windowText"],
                    borderColor: i.borderColor || "window",
                  });
                  t.points.forEach(function (t) {
                    t.options &&
                      t.options.color &&
                      t.update(
                        {
                          color: i.color || "windowText",
                          borderColor: i.borderColor || "window",
                        },
                        !1
                      );
                  });
                });
                t.redraw();
              },
            };
          }
        );
        e(t, "Accessibility/HighContrastTheme.js", [], function () {
          return {
            chart: { backgroundColor: "window" },
            title: { style: { color: "windowText" } },
            subtitle: { style: { color: "windowText" } },
            colorAxis: {
              minColor: "windowText",
              maxColor: "windowText",
              stops: [],
            },
            colors: ["windowText"],
            xAxis: {
              gridLineColor: "windowText",
              labels: { style: { color: "windowText" } },
              lineColor: "windowText",
              minorGridLineColor: "windowText",
              tickColor: "windowText",
              title: { style: { color: "windowText" } },
            },
            yAxis: {
              gridLineColor: "windowText",
              labels: { style: { color: "windowText" } },
              lineColor: "windowText",
              minorGridLineColor: "windowText",
              tickColor: "windowText",
              title: { style: { color: "windowText" } },
            },
            tooltip: {
              backgroundColor: "window",
              borderColor: "windowText",
              style: { color: "windowText" },
            },
            plotOptions: {
              series: {
                lineColor: "windowText",
                fillColor: "window",
                borderColor: "windowText",
                edgeColor: "windowText",
                borderWidth: 1,
                dataLabels: {
                  connectorColor: "windowText",
                  color: "windowText",
                  style: { color: "windowText", textOutline: "none" },
                },
                marker: { lineColor: "windowText", fillColor: "windowText" },
              },
              pie: {
                color: "window",
                colors: ["window"],
                borderColor: "windowText",
                borderWidth: 1,
              },
              boxplot: { fillColor: "window" },
              candlestick: { lineColor: "windowText", fillColor: "window" },
              errorbar: { fillColor: "window" },
            },
            legend: {
              backgroundColor: "window",
              itemStyle: { color: "windowText" },
              itemHoverStyle: { color: "windowText" },
              itemHiddenStyle: { color: "#555" },
              title: { style: { color: "windowText" } },
            },
            credits: { style: { color: "windowText" } },
            labels: { style: { color: "windowText" } },
            drilldown: {
              activeAxisLabelStyle: { color: "windowText" },
              activeDataLabelStyle: { color: "windowText" },
            },
            navigation: {
              buttonOptions: {
                symbolStroke: "windowText",
                theme: { fill: "window" },
              },
            },
            rangeSelector: {
              buttonTheme: {
                fill: "window",
                stroke: "windowText",
                style: { color: "windowText" },
                states: {
                  hover: {
                    fill: "window",
                    stroke: "windowText",
                    style: { color: "windowText" },
                  },
                  select: {
                    fill: "#444",
                    stroke: "windowText",
                    style: { color: "windowText" },
                  },
                },
              },
              inputBoxBorderColor: "windowText",
              inputStyle: { backgroundColor: "window", color: "windowText" },
              labelStyle: { color: "windowText" },
            },
            navigator: {
              handles: { backgroundColor: "window", borderColor: "windowText" },
              outlineColor: "windowText",
              maskFill: "transparent",
              series: { color: "windowText", lineColor: "windowText" },
              xAxis: { gridLineColor: "windowText" },
            },
            scrollbar: {
              barBackgroundColor: "#444",
              barBorderColor: "windowText",
              buttonArrowColor: "windowText",
              buttonBackgroundColor: "window",
              buttonBorderColor: "windowText",
              rifleColor: "windowText",
              trackBackgroundColor: "window",
              trackBorderColor: "windowText",
            },
          };
        });
        e(
          t,
          "Accessibility/Options/Options.js",
          [t["Core/Color/Palette.js"]],
          function (t) {
            return {
              accessibility: {
                enabled: !0,
                screenReaderSection: {
                  beforeChartFormat:
                    "<{headingTagName}>{chartTitle}</{headingTagName}><div>{typeDescription}</div><div>{chartSubtitle}</div><div>{chartLongdesc}</div><div>{playAsSoundButton}</div><div>{viewTableButton}</div><div>{xAxisDescription}</div><div>{yAxisDescription}</div><div>{annotationsTitle}{annotationsList}</div>",
                  afterChartFormat: "{endOfChartMarker}",
                  axisRangeDateFormat: "%Y-%m-%d %H:%M:%S",
                },
                series: {
                  describeSingleSeries: !1,
                  pointDescriptionEnabledThreshold: 200,
                },
                point: {
                  valueDescriptionFormat:
                    "{index}. {xDescription}{separator}{value}.",
                },
                landmarkVerbosity: "all",
                linkedDescription:
                  '*[data-highcharts-chart="{index}"] + .highcharts-description',
                keyboardNavigation: {
                  enabled: !0,
                  focusBorder: {
                    enabled: !0,
                    hideBrowserFocusOutline: !0,
                    style: {
                      color: t.highlightColor80,
                      lineWidth: 2,
                      borderRadius: 3,
                    },
                    margin: 2,
                  },
                  order: [
                    "series",
                    "zoom",
                    "rangeSelector",
                    "legend",
                    "chartMenu",
                  ],
                  wrapAround: !0,
                  seriesNavigation: {
                    skipNullPoints: !0,
                    pointNavigationEnabledThreshold: !1,
                  },
                },
                announceNewData: {
                  enabled: !1,
                  minAnnounceInterval: 5e3,
                  interruptUser: !1,
                },
              },
              legend: {
                accessibility: {
                  enabled: !0,
                  keyboardNavigation: { enabled: !0 },
                },
              },
              exporting: { accessibility: { enabled: !0 } },
            };
          }
        );
        e(t, "Accessibility/Options/LangOptions.js", [], function () {
          return {
            accessibility: {
              defaultChartTitle: "Chart",
              chartContainerLabel: "{title}. Highcharts interactive chart.",
              svgContainerLabel: "Interactive chart",
              drillUpButton: "{buttonText}",
              credits: "Chart credits: {creditsStr}",
              thousandsSep: ",",
              svgContainerTitle: "",
              graphicContainerLabel: "",
              screenReaderSection: {
                beforeRegionLabel:
                  "Chart screen reader information, {chartTitle}.",
                afterRegionLabel: "",
                annotations: {
                  heading: "Chart annotations summary",
                  descriptionSinglePoint:
                    "{annotationText}. Related to {annotationPoint}",
                  descriptionMultiplePoints:
                    "{annotationText}. Related to {annotationPoint}{ Also related to, #each(additionalAnnotationPoints)}",
                  descriptionNoPoints: "{annotationText}",
                },
                endOfChartMarker: "End of interactive chart.",
              },
              sonification: {
                playAsSoundButtonText: "Play as sound, {chartTitle}",
                playAsSoundClickAnnouncement: "Play",
              },
              legend: {
                legendLabelNoTitle: "Toggle series visibility, {chartTitle}",
                legendLabel: "Chart legend: {legendTitle}",
                legendItem: "Show {itemName}",
              },
              zoom: {
                mapZoomIn: "Zoom chart",
                mapZoomOut: "Zoom out chart",
                resetZoomButton: "Reset zoom",
              },
              rangeSelector: {
                dropdownLabel: "{rangeTitle}",
                minInputLabel: "Select start date.",
                maxInputLabel: "Select end date.",
                clickButtonAnnouncement: "Viewing {axisRangeDescription}",
              },
              table: {
                viewAsDataTableButtonText: "View as data table, {chartTitle}",
                tableSummary: "Table representation of chart.",
              },
              announceNewData: {
                newDataAnnounce: "Updated data for chart {chartTitle}",
                newSeriesAnnounceSingle: "New data series: {seriesDesc}",
                newPointAnnounceSingle: "New data point: {pointDesc}",
                newSeriesAnnounceMultiple:
                  "New data series in chart {chartTitle}: {seriesDesc}",
                newPointAnnounceMultiple:
                  "New data point in chart {chartTitle}: {pointDesc}",
              },
              seriesTypeDescriptions: {
                boxplot:
                  "Box plot charts are typically used to display groups of statistical data. Each data point in the chart can have up to 5 values: minimum, lower quartile, median, upper quartile, and maximum.",
                arearange:
                  "Arearange charts are line charts displaying a range between a lower and higher value for each point.",
                areasplinerange:
                  "These charts are line charts displaying a range between a lower and higher value for each point.",
                bubble:
                  "Bubble charts are scatter charts where each data point also has a size value.",
                columnrange:
                  "Columnrange charts are column charts displaying a range between a lower and higher value for each point.",
                errorbar:
                  "Errorbar series are used to display the variability of the data.",
                funnel:
                  "Funnel charts are used to display reduction of data in stages.",
                pyramid:
                  "Pyramid charts consist of a single pyramid with item heights corresponding to each point value.",
                waterfall:
                  "A waterfall chart is a column chart where each column contributes towards a total end value.",
              },
              chartTypes: {
                emptyChart: "Empty chart",
                mapTypeDescription:
                  "Map of {mapTitle} with {numSeries} data series.",
                unknownMap:
                  "Map of unspecified region with {numSeries} data series.",
                combinationChart:
                  "Combination chart with {numSeries} data series.",
                defaultSingle:
                  "Chart with {numPoints} data {#plural(numPoints, points, point)}.",
                defaultMultiple: "Chart with {numSeries} data series.",
                splineSingle:
                  "Line chart with {numPoints} data {#plural(numPoints, points, point)}.",
                splineMultiple: "Line chart with {numSeries} lines.",
                lineSingle:
                  "Line chart with {numPoints} data {#plural(numPoints, points, point)}.",
                lineMultiple: "Line chart with {numSeries} lines.",
                columnSingle:
                  "Bar chart with {numPoints} {#plural(numPoints, bars, bar)}.",
                columnMultiple: "Bar chart with {numSeries} data series.",
                barSingle:
                  "Bar chart with {numPoints} {#plural(numPoints, bars, bar)}.",
                barMultiple: "Bar chart with {numSeries} data series.",
                pieSingle:
                  "Pie chart with {numPoints} {#plural(numPoints, slices, slice)}.",
                pieMultiple: "Pie chart with {numSeries} pies.",
                scatterSingle:
                  "Scatter chart with {numPoints} {#plural(numPoints, points, point)}.",
                scatterMultiple: "Scatter chart with {numSeries} data series.",
                boxplotSingle:
                  "Boxplot with {numPoints} {#plural(numPoints, boxes, box)}.",
                boxplotMultiple: "Boxplot with {numSeries} data series.",
                bubbleSingle:
                  "Bubble chart with {numPoints} {#plural(numPoints, bubbles, bubble)}.",
                bubbleMultiple: "Bubble chart with {numSeries} data series.",
              },
              axis: {
                xAxisDescriptionSingular:
                  "The chart has 1 X axis displaying {names[0]}. {ranges[0]}",
                xAxisDescriptionPlural:
                  "The chart has {numAxes} X axes displaying {#each(names, -1) }and {names[-1]}.",
                yAxisDescriptionSingular:
                  "The chart has 1 Y axis displaying {names[0]}. {ranges[0]}",
                yAxisDescriptionPlural:
                  "The chart has {numAxes} Y axes displaying {#each(names, -1) }and {names[-1]}.",
                timeRangeDays: "Range: {range} days.",
                timeRangeHours: "Range: {range} hours.",
                timeRangeMinutes: "Range: {range} minutes.",
                timeRangeSeconds: "Range: {range} seconds.",
                rangeFromTo: "Range: {rangeFrom} to {rangeTo}.",
                rangeCategories: "Range: {numCategories} categories.",
              },
              exporting: {
                chartMenuLabel: "Chart menu",
                menuButtonLabel: "View chart menu",
                exportRegionLabel: "Chart menu, {chartTitle}",
              },
              series: {
                summary: {
                  default:
                    "{name}, series {ix} of {numSeries} with {numPoints} data {#plural(numPoints, points, point)}.",
                  defaultCombination:
                    "{name}, series {ix} of {numSeries} with {numPoints} data {#plural(numPoints, points, point)}.",
                  line: "{name}, line {ix} of {numSeries} with {numPoints} data {#plural(numPoints, points, point)}.",
                  lineCombination:
                    "{name}, series {ix} of {numSeries}. Line with {numPoints} data {#plural(numPoints, points, point)}.",
                  spline:
                    "{name}, line {ix} of {numSeries} with {numPoints} data {#plural(numPoints, points, point)}.",
                  splineCombination:
                    "{name}, series {ix} of {numSeries}. Line with {numPoints} data {#plural(numPoints, points, point)}.",
                  column:
                    "{name}, bar series {ix} of {numSeries} with {numPoints} {#plural(numPoints, bars, bar)}.",
                  columnCombination:
                    "{name}, series {ix} of {numSeries}. Bar series with {numPoints} {#plural(numPoints, bars, bar)}.",
                  bar: "{name}, bar series {ix} of {numSeries} with {numPoints} {#plural(numPoints, bars, bar)}.",
                  barCombination:
                    "{name}, series {ix} of {numSeries}. Bar series with {numPoints} {#plural(numPoints, bars, bar)}.",
                  pie: "{name}, pie {ix} of {numSeries} with {numPoints} {#plural(numPoints, slices, slice)}.",
                  pieCombination:
                    "{name}, series {ix} of {numSeries}. Pie with {numPoints} {#plural(numPoints, slices, slice)}.",
                  scatter:
                    "{name}, scatter plot {ix} of {numSeries} with {numPoints} {#plural(numPoints, points, point)}.",
                  scatterCombination:
                    "{name}, series {ix} of {numSeries}, scatter plot with {numPoints} {#plural(numPoints, points, point)}.",
                  boxplot:
                    "{name}, boxplot {ix} of {numSeries} with {numPoints} {#plural(numPoints, boxes, box)}.",
                  boxplotCombination:
                    "{name}, series {ix} of {numSeries}. Boxplot with {numPoints} {#plural(numPoints, boxes, box)}.",
                  bubble:
                    "{name}, bubble series {ix} of {numSeries} with {numPoints} {#plural(numPoints, bubbles, bubble)}.",
                  bubbleCombination:
                    "{name}, series {ix} of {numSeries}. Bubble series with {numPoints} {#plural(numPoints, bubbles, bubble)}.",
                  map: "{name}, map {ix} of {numSeries} with {numPoints} {#plural(numPoints, areas, area)}.",
                  mapCombination:
                    "{name}, series {ix} of {numSeries}. Map with {numPoints} {#plural(numPoints, areas, area)}.",
                  mapline:
                    "{name}, line {ix} of {numSeries} with {numPoints} data {#plural(numPoints, points, point)}.",
                  maplineCombination:
                    "{name}, series {ix} of {numSeries}. Line with {numPoints} data {#plural(numPoints, points, point)}.",
                  mapbubble:
                    "{name}, bubble series {ix} of {numSeries} with {numPoints} {#plural(numPoints, bubbles, bubble)}.",
                  mapbubbleCombination:
                    "{name}, series {ix} of {numSeries}. Bubble series with {numPoints} {#plural(numPoints, bubbles, bubble)}.",
                },
                description: "{description}",
                xAxisDescription: "X axis, {name}",
                yAxisDescription: "Y axis, {name}",
                nullPointValue: "No value",
                pointAnnotationsDescription:
                  "{Annotation: #each(annotations). }",
              },
            },
          };
        });
        e(
          t,
          "Accessibility/Options/DeprecatedOptions.js",
          [t["Core/Utilities.js"]],
          function (t) {
            function e(t, e, i) {
              for (var n, o = 0; o < e.length - 1; ++o)
                (n = e[o]), (t = t[n] = a(t[n], {}));
              t[e[e.length - 1]] = i;
            }
            function i(t, i, n, o) {
              function r(t, e) {
                return e.reduce(function (t, e) {
                  return t[e];
                }, t);
              }
              var a = r(t.options, i),
                h = r(t.options, n);
              Object.keys(o).forEach(function (r) {
                var l,
                  c = a[r];
                "undefined" !== typeof c &&
                  (e(h, o[r], c),
                  s(
                    32,
                    !1,
                    t,
                    ((l = {}),
                    (l[i.join(".") + "." + r] =
                      n.join(".") + "." + o[r].join(".")),
                    l)
                  ));
              });
            }
            function n(t) {
              var e = t.options.chart,
                i = t.options.accessibility || {};
              ["description", "typeDescription"].forEach(function (n) {
                var o;
                e[n] &&
                  ((i[n] = e[n]),
                  s(
                    32,
                    !1,
                    t,
                    ((o = {}), (o["chart." + n] = "use accessibility." + n), o)
                  ));
              });
            }
            function o(t) {
              t.axes.forEach(function (e) {
                (e = e.options) &&
                  e.description &&
                  ((e.accessibility = e.accessibility || {}),
                  (e.accessibility.description = e.description),
                  s(32, !1, t, {
                    "axis.description": "use axis.accessibility.description",
                  }));
              });
            }
            function r(t) {
              var i = {
                description: ["accessibility", "description"],
                exposeElementToA11y: ["accessibility", "exposeAsGroupOnly"],
                pointDescriptionFormatter: [
                  "accessibility",
                  "pointDescriptionFormatter",
                ],
                skipKeyboardNavigation: [
                  "accessibility",
                  "keyboardNavigation",
                  "enabled",
                ],
              };
              t.series.forEach(function (n) {
                Object.keys(i).forEach(function (o) {
                  var r,
                    a = n.options[o];
                  "undefined" !== typeof a &&
                    (e(
                      n.options,
                      i[o],
                      "skipKeyboardNavigation" === o ? !a : a
                    ),
                    s(
                      32,
                      !1,
                      t,
                      ((r = {}),
                      (r["series." + o] = "series." + i[o].join(".")),
                      r)
                    ));
                });
              });
            }
            var s = t.error,
              a = t.pick;
            return function (t) {
              n(t);
              o(t);
              t.series && r(t);
              i(t, ["accessibility"], ["accessibility"], {
                pointDateFormat: ["point", "dateFormat"],
                pointDateFormatter: ["point", "dateFormatter"],
                pointDescriptionFormatter: ["point", "descriptionFormatter"],
                pointDescriptionThreshold: [
                  "series",
                  "pointDescriptionEnabledThreshold",
                ],
                pointNavigationThreshold: [
                  "keyboardNavigation",
                  "seriesNavigation",
                  "pointNavigationEnabledThreshold",
                ],
                pointValueDecimals: ["point", "valueDecimals"],
                pointValuePrefix: ["point", "valuePrefix"],
                pointValueSuffix: ["point", "valueSuffix"],
                screenReaderSectionFormatter: [
                  "screenReaderSection",
                  "beforeChartFormatter",
                ],
                describeSingleSeries: ["series", "describeSingleSeries"],
                seriesDescriptionFormatter: ["series", "descriptionFormatter"],
                onTableAnchorClick: [
                  "screenReaderSection",
                  "onViewDataTableClick",
                ],
                axisRangeDateFormat: [
                  "screenReaderSection",
                  "axisRangeDateFormat",
                ],
              });
              i(
                t,
                ["accessibility", "keyboardNavigation"],
                ["accessibility", "keyboardNavigation", "seriesNavigation"],
                { skipNullPoints: ["skipNullPoints"], mode: ["mode"] }
              );
              i(t, ["lang", "accessibility"], ["lang", "accessibility"], {
                legendItem: ["legend", "legendItem"],
                legendLabel: ["legend", "legendLabel"],
                mapZoomIn: ["zoom", "mapZoomIn"],
                mapZoomOut: ["zoom", "mapZoomOut"],
                resetZoomButton: ["zoom", "resetZoomButton"],
                screenReaderRegionLabel: [
                  "screenReaderSection",
                  "beforeRegionLabel",
                ],
                rangeSelectorButton: ["rangeSelector", "buttonText"],
                rangeSelectorMaxInput: ["rangeSelector", "maxInputLabel"],
                rangeSelectorMinInput: ["rangeSelector", "minInputLabel"],
                svgContainerEnd: ["screenReaderSection", "endOfChartMarker"],
                viewAsDataTable: ["table", "viewAsDataTableButtonText"],
                tableSummary: ["table", "tableSummary"],
              });
            };
          }
        );
        e(
          t,
          "Accessibility/A11yI18n.js",
          [
            t["Core/Chart/Chart.js"],
            t["Core/Globals.js"],
            t["Core/FormatUtilities.js"],
            t["Core/Utilities.js"],
          ],
          function (t, e, i, n) {
            function o(t, e) {
              var i = t.indexOf("#each("),
                n = t.indexOf("#plural("),
                o = t.indexOf("["),
                r = t.indexOf("]");
              if (-1 < i) {
                r = t.slice(i).indexOf(")") + i;
                n = t.substring(0, i);
                o = t.substring(r + 1);
                r = t.substring(i + 6, r).split(",");
                i = Number(r[1]);
                t = "";
                if ((e = e[r[0]]))
                  for (
                    i = isNaN(i) ? e.length : i,
                      i = 0 > i ? e.length + i : Math.min(i, e.length),
                      r = 0;
                    r < i;
                    ++r
                  )
                    t += n + e[r] + o;
                return t.length ? t : "";
              }
              if (-1 < n) {
                o = t.slice(n).indexOf(")") + n;
                n = t.substring(n + 8, o).split(",");
                switch (Number(e[n[0]])) {
                  case 0:
                    t = s(n[4], n[1]);
                    break;
                  case 1:
                    t = s(n[2], n[1]);
                    break;
                  case 2:
                    t = s(n[3], n[1]);
                    break;
                  default:
                    t = n[1];
                }
                t
                  ? ((e = t),
                    (e = (e.trim && e.trim()) || e.replace(/^\s+|\s+$/g, "")))
                  : (e = "");
                return e;
              }
              return -1 < o
                ? ((n = t.substring(0, o)),
                  (o = Number(t.substring(o + 1, r))),
                  (t = void 0),
                  (e = e[n]),
                  !isNaN(o) &&
                    e &&
                    (0 > o
                      ? ((t = e[e.length + o]),
                        "undefined" === typeof t && (t = e[0]))
                      : ((t = e[o]),
                        "undefined" === typeof t && (t = e[e.length - 1]))),
                  "undefined" !== typeof t ? t : "")
                : "{" + t + "}";
            }
            var r = i.format,
              s = n.pick;
            e.i18nFormat = function (t, e, i) {
              var n = function (t, e) {
                  t = t.slice(e || 0);
                  var i = t.indexOf("{"),
                    n = t.indexOf("}");
                  if (-1 < i && n > i)
                    return {
                      statement: t.substring(i + 1, n),
                      begin: e + i + 1,
                      end: e + n,
                    };
                },
                s = [],
                a = 0;
              do {
                var h = n(t, a);
                var l = t.substring(a, h && h.begin - 1);
                l.length && s.push({ value: l, type: "constant" });
                h && s.push({ value: h.statement, type: "statement" });
                a = h ? h.end + 1 : a + 1;
              } while (h);
              s.forEach(function (t) {
                "statement" === t.type && (t.value = o(t.value, e));
              });
              return r(
                s.reduce(function (t, e) {
                  return t + e.value;
                }, ""),
                e,
                i
              );
            };
            t.prototype.langFormat = function (t, i) {
              t = t.split(".");
              for (var n = this.options.lang, o = 0; o < t.length; ++o)
                n = n && n[t[o]];
              return "string" === typeof n ? e.i18nFormat(n, i, this) : "";
            };
          }
        );
        e(
          t,
          "Accessibility/FocusBorder.js",
          [
            t["Core/Chart/Chart.js"],
            t["Core/Renderer/SVG/SVGElement.js"],
            t["Core/Renderer/SVG/SVGLabel.js"],
            t["Core/Utilities.js"],
          ],
          function (t, e, i, n) {
            function o(t) {
              if (!t.focusBorderDestroyHook) {
                var e = t.destroy;
                t.destroy = function () {
                  t.focusBorder &&
                    t.focusBorder.destroy &&
                    t.focusBorder.destroy();
                  return e.apply(t, arguments);
                };
                t.focusBorderDestroyHook = e;
              }
            }
            function r(t) {
              for (var e = [], i = 1; i < arguments.length; i++)
                e[i - 1] = arguments[i];
              t.focusBorderUpdateHooks ||
                ((t.focusBorderUpdateHooks = {}),
                c.forEach(function (i) {
                  i += "Setter";
                  var n = t[i] || t._defaultSetter;
                  t.focusBorderUpdateHooks[i] = n;
                  t[i] = function () {
                    var i = n.apply(t, arguments);
                    t.addFocusBorder.apply(t, e);
                    return i;
                  };
                }));
            }
            function s(t) {
              t.focusBorderUpdateHooks &&
                (Object.keys(t.focusBorderUpdateHooks).forEach(function (e) {
                  var i = t.focusBorderUpdateHooks[e];
                  i === t._defaultSetter ? delete t[e] : (t[e] = i);
                }),
                delete t.focusBorderUpdateHooks);
            }
            var a = n.addEvent,
              h = n.extend,
              l = n.pick,
              c = "x y transform width height r d stroke-width".split(" ");
            h(e.prototype, {
              addFocusBorder: function (t, e) {
                this.focusBorder && this.removeFocusBorder();
                var n = this.getBBox(),
                  s = l(t, 3);
                n.x += this.translateX ? this.translateX : 0;
                n.y += this.translateY ? this.translateY : 0;
                var a = n.x - s,
                  h = n.y - s,
                  c = n.width + 2 * s,
                  d = n.height + 2 * s,
                  p = this instanceof i;
                if ("text" === this.element.nodeName || p) {
                  var u = !!this.rotation;
                  if (p) var f = { x: u ? 1 : 0, y: 0 };
                  else {
                    var g = (f = 0);
                    "middle" === this.attr("text-anchor")
                      ? (f = g = 0.5)
                      : this.rotation
                      ? (f = 0.25)
                      : (g = 0.75);
                    f = { x: f, y: g };
                  }
                  g = +this.attr("x");
                  var m = +this.attr("y");
                  isNaN(g) || (a = g - n.width * f.x - s);
                  isNaN(m) || (h = m - n.height * f.y - s);
                  p &&
                    u &&
                    ((p = c),
                    (c = d),
                    (d = p),
                    isNaN(g) || (a = g - n.height * f.x - s),
                    isNaN(m) || (h = m - n.width * f.y - s));
                }
                this.focusBorder = this.renderer
                  .rect(a, h, c, d, parseInt(((e && e.r) || 0).toString(), 10))
                  .addClass("highcharts-focus-border")
                  .attr({ zIndex: 99 })
                  .add(this.parentGroup);
                this.renderer.styledMode ||
                  this.focusBorder.attr({
                    stroke: e && e.stroke,
                    "stroke-width": e && e.strokeWidth,
                  });
                r(this, t, e);
                o(this);
              },
              removeFocusBorder: function () {
                s(this);
                this.focusBorderDestroyHook &&
                  ((this.destroy = this.focusBorderDestroyHook),
                  delete this.focusBorderDestroyHook);
                this.focusBorder &&
                  (this.focusBorder.destroy(), delete this.focusBorder);
              },
            });
            t.prototype.renderFocusBorder = function () {
              var t = this.focusElement,
                e = this.options.accessibility.keyboardNavigation.focusBorder;
              t &&
                (t.removeFocusBorder(),
                e.enabled &&
                  t.addFocusBorder(e.margin, {
                    stroke: e.style.color,
                    strokeWidth: e.style.lineWidth,
                    r: e.style.borderRadius,
                  }));
            };
            t.prototype.setFocusToElement = function (t, e) {
              var i = this.options.accessibility.keyboardNavigation.focusBorder;
              (e = e || t.element) &&
                e.focus &&
                ((e.hcEvents && e.hcEvents.focusin) ||
                  a(e, "focusin", function () {}),
                e.focus(),
                i.hideBrowserFocusOutline && (e.style.outline = "none"));
              this.focusElement && this.focusElement.removeFocusBorder();
              this.focusElement = t;
              this.renderFocusBorder();
            };
          }
        );
        e(
          t,
          "Accessibility/Accessibility.js",
          [
            t["Core/Chart/Chart.js"],
            t["Accessibility/Utils/ChartUtilities.js"],
            t["Core/Globals.js"],
            t["Accessibility/KeyboardNavigationHandler.js"],
            t["Core/DefaultOptions.js"],
            t["Core/Series/Point.js"],
            t["Core/Series/Series.js"],
            t["Core/Utilities.js"],
            t["Accessibility/AccessibilityComponent.js"],
            t["Accessibility/KeyboardNavigation.js"],
            t["Accessibility/Components/LegendComponent.js"],
            t["Accessibility/Components/MenuComponent.js"],
            t["Accessibility/Components/SeriesComponent/SeriesComponent.js"],
            t["Accessibility/Components/ZoomComponent.js"],
            t["Accessibility/Components/RangeSelectorComponent.js"],
            t["Accessibility/Components/InfoRegionsComponent.js"],
            t["Accessibility/Components/ContainerComponent.js"],
            t["Accessibility/HighContrastMode.js"],
            t["Accessibility/HighContrastTheme.js"],
            t["Accessibility/Options/Options.js"],
            t["Accessibility/Options/LangOptions.js"],
            t["Accessibility/Options/DeprecatedOptions.js"],
            t["Accessibility/Utils/HTMLUtilities.js"],
          ],
          function (
            t,
            e,
            i,
            n,
            o,
            r,
            s,
            a,
            h,
            l,
            c,
            d,
            p,
            u,
            f,
            g,
            m,
            y,
            v,
            x,
            b,
            C,
            w
          ) {
            function S(t) {
              this.init(t);
            }
            var A = i.doc,
              k = a.addEvent,
              T = a.extend,
              M = a.fireEvent,
              P = a.merge;
            P(!0, o.defaultOptions, x, {
              accessibility: { highContrastTheme: v },
              lang: b,
            });
            i.A11yChartUtilities = e;
            i.A11yHTMLUtilities = w;
            i.KeyboardNavigationHandler = n;
            i.AccessibilityComponent = h;
            S.prototype = {
              init: function (t) {
                this.chart = t;
                A.addEventListener && t.renderer.isSVG
                  ? (C(t),
                    this.initComponents(),
                    (this.keyboardNavigation = new l(t, this.components)),
                    this.update())
                  : t.renderTo.setAttribute("aria-hidden", !0);
              },
              initComponents: function () {
                var t = this.chart,
                  e = t.options.accessibility;
                this.components = {
                  container: new m(),
                  infoRegions: new g(),
                  legend: new c(),
                  chartMenu: new d(),
                  rangeSelector: new f(),
                  series: new p(),
                  zoom: new u(),
                };
                e.customComponents && T(this.components, e.customComponents);
                var i = this.components;
                this.getComponentOrder().forEach(function (e) {
                  i[e].initBase(t);
                  i[e].init();
                });
              },
              getComponentOrder: function () {
                if (!this.components) return [];
                if (!this.components.series)
                  return Object.keys(this.components);
                var t = Object.keys(this.components).filter(function (t) {
                  return "series" !== t;
                });
                return ["series"].concat(t);
              },
              update: function () {
                var t = this.components,
                  e = this.chart,
                  i = e.options.accessibility;
                M(e, "beforeA11yUpdate");
                e.types = this.getChartTypes();
                this.getComponentOrder().forEach(function (i) {
                  t[i].onChartUpdate();
                  M(e, "afterA11yComponentUpdate", {
                    name: i,
                    component: t[i],
                  });
                });
                this.keyboardNavigation.update(i.keyboardNavigation.order);
                !e.highContrastModeActive &&
                  y.isHighContrastModeActive() &&
                  y.setHighContrastTheme(e);
                M(e, "afterA11yUpdate", { accessibility: this });
              },
              destroy: function () {
                var t = this.chart || {},
                  e = this.components;
                Object.keys(e).forEach(function (t) {
                  e[t].destroy();
                  e[t].destroyBase();
                });
                this.keyboardNavigation && this.keyboardNavigation.destroy();
                t.renderTo && t.renderTo.setAttribute("aria-hidden", !0);
                t.focusElement && t.focusElement.removeFocusBorder();
              },
              getChartTypes: function () {
                var t = {};
                this.chart.series.forEach(function (e) {
                  t[e.type] = 1;
                });
                return Object.keys(t);
              },
            };
            t.prototype.updateA11yEnabled = function () {
              var t = this.accessibility,
                e = this.options.accessibility;
              e && e.enabled
                ? t
                  ? t.update()
                  : (this.accessibility = new S(this))
                : t
                ? (t.destroy && t.destroy(), delete this.accessibility)
                : this.renderTo.setAttribute("aria-hidden", !0);
            };
            k(t, "render", function (t) {
              this.a11yDirty &&
                this.renderTo &&
                (delete this.a11yDirty, this.updateA11yEnabled());
              var e = this.accessibility;
              e &&
                e.getComponentOrder().forEach(function (t) {
                  e.components[t].onChartRender();
                });
            });
            k(t, "update", function (t) {
              if ((t = t.options.accessibility))
                t.customComponents &&
                  ((this.options.accessibility.customComponents =
                    t.customComponents),
                  delete t.customComponents),
                  P(!0, this.options.accessibility, t),
                  this.accessibility &&
                    this.accessibility.destroy &&
                    (this.accessibility.destroy(), delete this.accessibility);
              this.a11yDirty = !0;
            });
            k(r, "update", function () {
              this.series.chart.accessibility &&
                (this.series.chart.a11yDirty = !0);
            });
            ["addSeries", "init"].forEach(function (e) {
              k(t, e, function () {
                this.a11yDirty = !0;
              });
            });
            ["update", "updatedData", "remove"].forEach(function (t) {
              k(s, t, function () {
                this.chart.accessibility && (this.chart.a11yDirty = !0);
              });
            });
            ["afterDrilldown", "drillupall"].forEach(function (e) {
              k(t, e, function () {
                this.accessibility && this.accessibility.update();
              });
            });
            k(t, "destroy", function () {
              this.accessibility && this.accessibility.destroy();
            });
          }
        );
        e(t, "masters/modules/accessibility.src.js", [], function () {});
      });
    },
  },
]);
//# sourceMappingURL=vendor-highcharts.656dd697e66c207be854.js.map
