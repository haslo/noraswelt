(window.webpackJsonp = window.webpackJsonp || []).push([[0], [function (t, e, r) {
    "use strict";
    (function (t) {
        var r = function () {
                if ("undefined" != typeof Map) return Map;

                function t(t, e) {
                    var r = -1;
                    return t.some((function (t, n) {
                        return t[0] === e && (r = n, !0)
                    })), r
                }

                return function () {
                    function e() {
                        this.__entries__ = []
                    }

                    return Object.defineProperty(e.prototype, "size", {
                        get: function () {
                            return this.__entries__.length
                        }, enumerable: !0, configurable: !0
                    }), e.prototype.get = function (e) {
                        var r = t(this.__entries__, e), n = this.__entries__[r];
                        return n && n[1]
                    }, e.prototype.set = function (e, r) {
                        var n = t(this.__entries__, e);
                        ~n ? this.__entries__[n][1] = r : this.__entries__.push([e, r])
                    }, e.prototype.delete = function (e) {
                        var r = this.__entries__, n = t(r, e);
                        ~n && r.splice(n, 1)
                    }, e.prototype.has = function (e) {
                        return !!~t(this.__entries__, e)
                    }, e.prototype.clear = function () {
                        this.__entries__.splice(0)
                    }, e.prototype.forEach = function (t, e) {
                        void 0 === e && (e = null);
                        for (var r = 0, n = this.__entries__; r < n.length; r++) {
                            var i = n[r];
                            t.call(e, i[1], i[0])
                        }
                    }, e
                }()
            }(), n = "undefined" != typeof window && "undefined" != typeof document && window.document === document,
            i = void 0 !== t && t.Math === Math ? t : "undefined" != typeof self && self.Math === Math ? self : "undefined" != typeof window && window.Math === Math ? window : Function("return this")(),
            o = "function" == typeof requestAnimationFrame ? requestAnimationFrame.bind(i) : function (t) {
                return setTimeout((function () {
                    return t(Date.now())
                }), 1e3 / 60)
            };
        var s = ["top", "right", "bottom", "left", "width", "height", "size", "weight"],
            a = "undefined" != typeof MutationObserver, u = function () {
                function t() {
                    this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = function (t, e) {
                        var r = !1, n = !1, i = 0;

                        function s() {
                            r && (r = !1, t()), n && u()
                        }

                        function a() {
                            o(s)
                        }

                        function u() {
                            var t = Date.now();
                            if (r) {
                                if (t - i < 2) return;
                                n = !0
                            } else r = !0, n = !1, setTimeout(a, e);
                            i = t
                        }

                        return u
                    }(this.refresh.bind(this), 20)
                }

                return t.prototype.addObserver = function (t) {
                    ~this.observers_.indexOf(t) || this.observers_.push(t), this.connected_ || this.connect_()
                }, t.prototype.removeObserver = function (t) {
                    var e = this.observers_, r = e.indexOf(t);
                    ~r && e.splice(r, 1), !e.length && this.connected_ && this.disconnect_()
                }, t.prototype.refresh = function () {
                    this.updateObservers_() && this.refresh()
                }, t.prototype.updateObservers_ = function () {
                    var t = this.observers_.filter((function (t) {
                        return t.gatherActive(), t.hasActive()
                    }));
                    return t.forEach((function (t) {
                        return t.broadcastActive()
                    })), t.length > 0
                }, t.prototype.connect_ = function () {
                    n && !this.connected_ && (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), a ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
                        attributes: !0,
                        childList: !0,
                        characterData: !0,
                        subtree: !0
                    })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0)
                }, t.prototype.disconnect_ = function () {
                    n && this.connected_ && (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1)
                }, t.prototype.onTransitionEnd_ = function (t) {
                    var e = t.propertyName, r = void 0 === e ? "" : e;
                    s.some((function (t) {
                        return !!~r.indexOf(t)
                    })) && this.refresh()
                }, t.getInstance = function () {
                    return this.instance_ || (this.instance_ = new t), this.instance_
                }, t.instance_ = null, t
            }(), c = function (t, e) {
                for (var r = 0, n = Object.keys(e); r < n.length; r++) {
                    var i = n[r];
                    Object.defineProperty(t, i, {value: e[i], enumerable: !1, writable: !1, configurable: !0})
                }
                return t
            }, d = function (t) {
                return t && t.ownerDocument && t.ownerDocument.defaultView || i
            }, f = v(0, 0, 0, 0);

        function h(t) {
            return parseFloat(t) || 0
        }

        function l(t) {
            for (var e = [], r = 1; r < arguments.length; r++) e[r - 1] = arguments[r];
            return e.reduce((function (e, r) {
                return e + h(t["border-" + r + "-width"])
            }), 0)
        }

        function p(t) {
            var e = t.clientWidth, r = t.clientHeight;
            if (!e && !r) return f;
            var n = d(t).getComputedStyle(t), i = function (t) {
                for (var e = {}, r = 0, n = ["top", "right", "bottom", "left"]; r < n.length; r++) {
                    var i = n[r], o = t["padding-" + i];
                    e[i] = h(o)
                }
                return e
            }(n), o = i.left + i.right, s = i.top + i.bottom, a = h(n.width), u = h(n.height);
            if ("border-box" === n.boxSizing && (Math.round(a + o) !== e && (a -= l(n, "left", "right") + o), Math.round(u + s) !== r && (u -= l(n, "top", "bottom") + s)), !function (t) {
                return t === d(t).document.documentElement
            }(t)) {
                var c = Math.round(a + o) - e, p = Math.round(u + s) - r;
                1 !== Math.abs(c) && (a -= c), 1 !== Math.abs(p) && (u -= p)
            }
            return v(i.left, i.top, a, u)
        }

        var g = "undefined" != typeof SVGGraphicsElement ? function (t) {
            return t instanceof d(t).SVGGraphicsElement
        } : function (t) {
            return t instanceof d(t).SVGElement && "function" == typeof t.getBBox
        };

        function m(t) {
            return n ? g(t) ? function (t) {
                var e = t.getBBox();
                return v(0, 0, e.width, e.height)
            }(t) : p(t) : f
        }

        function v(t, e, r, n) {
            return {x: t, y: e, width: r, height: n}
        }

        var b = function () {
            function t(t) {
                this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = v(0, 0, 0, 0), this.target = t
            }

            return t.prototype.isActive = function () {
                var t = m(this.target);
                return this.contentRect_ = t, t.width !== this.broadcastWidth || t.height !== this.broadcastHeight
            }, t.prototype.broadcastRect = function () {
                var t = this.contentRect_;
                return this.broadcastWidth = t.width, this.broadcastHeight = t.height, t
            }, t
        }(), _ = function (t, e) {
            var r, n, i, o, s, a, u,
                d = (n = (r = e).x, i = r.y, o = r.width, s = r.height, a = "undefined" != typeof DOMRectReadOnly ? DOMRectReadOnly : Object, u = Object.create(a.prototype), c(u, {
                    x: n,
                    y: i,
                    width: o,
                    height: s,
                    top: i,
                    right: n + o,
                    bottom: s + i,
                    left: n
                }), u);
            c(this, {target: t, contentRect: d})
        }, w = function () {
            function t(t, e, n) {
                if (this.activeObservations_ = [], this.observations_ = new r, "function" != typeof t) throw new TypeError("The callback provided as parameter 1 is not a function.");
                this.callback_ = t, this.controller_ = e, this.callbackCtx_ = n
            }

            return t.prototype.observe = function (t) {
                if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
                if ("undefined" != typeof Element && Element instanceof Object) {
                    if (!(t instanceof d(t).Element)) throw new TypeError('parameter 1 is not of type "Element".');
                    var e = this.observations_;
                    e.has(t) || (e.set(t, new b(t)), this.controller_.addObserver(this), this.controller_.refresh())
                }
            }, t.prototype.unobserve = function (t) {
                if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
                if ("undefined" != typeof Element && Element instanceof Object) {
                    if (!(t instanceof d(t).Element)) throw new TypeError('parameter 1 is not of type "Element".');
                    var e = this.observations_;
                    e.has(t) && (e.delete(t), e.size || this.controller_.removeObserver(this))
                }
            }, t.prototype.disconnect = function () {
                this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this)
            }, t.prototype.gatherActive = function () {
                var t = this;
                this.clearActive(), this.observations_.forEach((function (e) {
                    e.isActive() && t.activeObservations_.push(e)
                }))
            }, t.prototype.broadcastActive = function () {
                if (this.hasActive()) {
                    var t = this.callbackCtx_, e = this.activeObservations_.map((function (t) {
                        return new _(t.target, t.broadcastRect())
                    }));
                    this.callback_.call(t, e, t), this.clearActive()
                }
            }, t.prototype.clearActive = function () {
                this.activeObservations_.splice(0)
            }, t.prototype.hasActive = function () {
                return this.activeObservations_.length > 0
            }, t
        }(), M = "undefined" != typeof WeakMap ? new WeakMap : new r, y = function t(e) {
            if (!(this instanceof t)) throw new TypeError("Cannot call a class as a function.");
            if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
            var r = u.getInstance(), n = new w(e, r, this);
            M.set(this, n)
        };
        ["observe", "unobserve", "disconnect"].forEach((function (t) {
            y.prototype[t] = function () {
                var e;
                return (e = M.get(this))[t].apply(e, arguments)
            }
        }));
        var O = void 0 !== i.ResizeObserver ? i.ResizeObserver : y;
        e.a = O
    }).call(this, r(7))
}, function (t, e) {
    !function (t, e) {
        for (var r in e) t[r] = e[r]
    }(e, function (t) {
        var e = {};

        function r(n) {
            if (e[n]) return e[n].exports;
            var i = e[n] = {i: n, l: !1, exports: {}};
            return t[n].call(i.exports, i, i.exports, r), i.l = !0, i.exports
        }

        return r.m = t, r.c = e, r.d = function (t, e, n) {
            r.o(t, e) || Object.defineProperty(t, e, {enumerable: !0, get: n})
        }, r.r = function (t) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(t, "__esModule", {value: !0})
        }, r.t = function (t, e) {
            if (1 & e && (t = r(t)), 8 & e) return t;
            if (4 & e && "object" == typeof t && t && t.__esModule) return t;
            var n = Object.create(null);
            if (r.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t) for (var i in t) r.d(n, i, function (e) {
                return t[e]
            }.bind(null, i));
            return n
        }, r.n = function (t) {
            var e = t && t.__esModule ? function () {
                return t.default
            } : function () {
                return t
            };
            return r.d(e, "a", e), e
        }, r.o = function (t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        }, r.p = "", r(r.s = 1)
    }([function (t, e, r) {
        t.exports = function (t) {
            var e = {};

            function r(n) {
                if (e[n]) return e[n].exports;
                var i = e[n] = {i: n, l: !1, exports: {}};
                return t[n].call(i.exports, i, i.exports, r), i.l = !0, i.exports
            }

            return r.m = t, r.c = e, r.d = function (t, e, n) {
                r.o(t, e) || Object.defineProperty(t, e, {enumerable: !0, get: n})
            }, r.r = function (t) {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(t, "__esModule", {value: !0})
            }, r.t = function (t, e) {
                if (1 & e && (t = r(t)), 8 & e) return t;
                if (4 & e && "object" == typeof t && t && t.__esModule) return t;
                var n = Object.create(null);
                if (r.r(n), Object.defineProperty(n, "default", {
                    enumerable: !0,
                    value: t
                }), 2 & e && "string" != typeof t) for (var i in t) r.d(n, i, function (e) {
                    return t[e]
                }.bind(null, i));
                return n
            }, r.n = function (t) {
                var e = t && t.__esModule ? function () {
                    return t.default
                } : function () {
                    return t
                };
                return r.d(e, "a", e), e
            }, r.o = function (t, e) {
                return Object.prototype.hasOwnProperty.call(t, e)
            }, r.p = "", r(r.s = 90)
        }({
            17: function (t, e, r) {
                "use strict";
                e.__esModule = !0, e.default = void 0;
                var n = r(18), i = function () {
                    function t() {
                    }

                    return t.getFirstMatch = function (t, e) {
                        var r = e.match(t);
                        return r && r.length > 0 && r[1] || ""
                    }, t.getSecondMatch = function (t, e) {
                        var r = e.match(t);
                        return r && r.length > 1 && r[2] || ""
                    }, t.matchAndReturnConst = function (t, e, r) {
                        if (t.test(e)) return r
                    }, t.getWindowsVersionName = function (t) {
                        switch (t) {
                            case"NT":
                                return "NT";
                            case"XP":
                                return "XP";
                            case"NT 5.0":
                                return "2000";
                            case"NT 5.1":
                                return "XP";
                            case"NT 5.2":
                                return "2003";
                            case"NT 6.0":
                                return "Vista";
                            case"NT 6.1":
                                return "7";
                            case"NT 6.2":
                                return "8";
                            case"NT 6.3":
                                return "8.1";
                            case"NT 10.0":
                                return "10";
                            default:
                                return
                        }
                    }, t.getMacOSVersionName = function (t) {
                        var e = t.split(".").splice(0, 2).map((function (t) {
                            return parseInt(t, 10) || 0
                        }));
                        if (e.push(0), 10 === e[0]) switch (e[1]) {
                            case 5:
                                return "Leopard";
                            case 6:
                                return "Snow Leopard";
                            case 7:
                                return "Lion";
                            case 8:
                                return "Mountain Lion";
                            case 9:
                                return "Mavericks";
                            case 10:
                                return "Yosemite";
                            case 11:
                                return "El Capitan";
                            case 12:
                                return "Sierra";
                            case 13:
                                return "High Sierra";
                            case 14:
                                return "Mojave";
                            case 15:
                                return "Catalina";
                            default:
                                return
                        }
                    }, t.getAndroidVersionName = function (t) {
                        var e = t.split(".").splice(0, 2).map((function (t) {
                            return parseInt(t, 10) || 0
                        }));
                        if (e.push(0), !(1 === e[0] && e[1] < 5)) return 1 === e[0] && e[1] < 6 ? "Cupcake" : 1 === e[0] && e[1] >= 6 ? "Donut" : 2 === e[0] && e[1] < 2 ? "Eclair" : 2 === e[0] && 2 === e[1] ? "Froyo" : 2 === e[0] && e[1] > 2 ? "Gingerbread" : 3 === e[0] ? "Honeycomb" : 4 === e[0] && e[1] < 1 ? "Ice Cream Sandwich" : 4 === e[0] && e[1] < 4 ? "Jelly Bean" : 4 === e[0] && e[1] >= 4 ? "KitKat" : 5 === e[0] ? "Lollipop" : 6 === e[0] ? "Marshmallow" : 7 === e[0] ? "Nougat" : 8 === e[0] ? "Oreo" : 9 === e[0] ? "Pie" : void 0
                    }, t.getVersionPrecision = function (t) {
                        return t.split(".").length
                    }, t.compareVersions = function (e, r, n) {
                        void 0 === n && (n = !1);
                        var i = t.getVersionPrecision(e), o = t.getVersionPrecision(r), s = Math.max(i, o), a = 0,
                            u = t.map([e, r], (function (e) {
                                var r = s - t.getVersionPrecision(e), n = e + new Array(r + 1).join(".0");
                                return t.map(n.split("."), (function (t) {
                                    return new Array(20 - t.length).join("0") + t
                                })).reverse()
                            }));
                        for (n && (a = s - Math.min(i, o)), s -= 1; s >= a;) {
                            if (u[0][s] > u[1][s]) return 1;
                            if (u[0][s] === u[1][s]) {
                                if (s === a) return 0;
                                s -= 1
                            } else if (u[0][s] < u[1][s]) return -1
                        }
                    }, t.map = function (t, e) {
                        var r, n = [];
                        if (Array.prototype.map) return Array.prototype.map.call(t, e);
                        for (r = 0; r < t.length; r += 1) n.push(e(t[r]));
                        return n
                    }, t.getBrowserAlias = function (t) {
                        return n.BROWSER_ALIASES_MAP[t]
                    }, t.getBrowserTypeByAlias = function (t) {
                        return n.BROWSER_MAP[t] || ""
                    }, t
                }();
                e.default = i, t.exports = e.default
            }, 18: function (t, e, r) {
                "use strict";
                e.__esModule = !0, e.ENGINE_MAP = e.OS_MAP = e.PLATFORMS_MAP = e.BROWSER_MAP = e.BROWSER_ALIASES_MAP = void 0, e.BROWSER_ALIASES_MAP = {
                    "Amazon Silk": "amazon_silk",
                    "Android Browser": "android",
                    Bada: "bada",
                    BlackBerry: "blackberry",
                    Chrome: "chrome",
                    Chromium: "chromium",
                    Epiphany: "epiphany",
                    Firefox: "firefox",
                    Focus: "focus",
                    Generic: "generic",
                    "Google Search": "google_search",
                    Googlebot: "googlebot",
                    "Internet Explorer": "ie",
                    "K-Meleon": "k_meleon",
                    Maxthon: "maxthon",
                    "Microsoft Edge": "edge",
                    "MZ Browser": "mz",
                    "NAVER Whale Browser": "naver",
                    Opera: "opera",
                    "Opera Coast": "opera_coast",
                    PhantomJS: "phantomjs",
                    Puffin: "puffin",
                    QupZilla: "qupzilla",
                    QQ: "qq",
                    QQLite: "qqlite",
                    Safari: "safari",
                    Sailfish: "sailfish",
                    "Samsung Internet for Android": "samsung_internet",
                    SeaMonkey: "seamonkey",
                    Sleipnir: "sleipnir",
                    Swing: "swing",
                    Tizen: "tizen",
                    "UC Browser": "uc",
                    Vivaldi: "vivaldi",
                    "WebOS Browser": "webos",
                    WeChat: "wechat",
                    "Yandex Browser": "yandex",
                    Roku: "roku"
                }, e.BROWSER_MAP = {
                    amazon_silk: "Amazon Silk",
                    android: "Android Browser",
                    bada: "Bada",
                    blackberry: "BlackBerry",
                    chrome: "Chrome",
                    chromium: "Chromium",
                    epiphany: "Epiphany",
                    firefox: "Firefox",
                    focus: "Focus",
                    generic: "Generic",
                    googlebot: "Googlebot",
                    google_search: "Google Search",
                    ie: "Internet Explorer",
                    k_meleon: "K-Meleon",
                    maxthon: "Maxthon",
                    edge: "Microsoft Edge",
                    mz: "MZ Browser",
                    naver: "NAVER Whale Browser",
                    opera: "Opera",
                    opera_coast: "Opera Coast",
                    phantomjs: "PhantomJS",
                    puffin: "Puffin",
                    qupzilla: "QupZilla",
                    qq: "QQ Browser",
                    qqlite: "QQ Browser Lite",
                    safari: "Safari",
                    sailfish: "Sailfish",
                    samsung_internet: "Samsung Internet for Android",
                    seamonkey: "SeaMonkey",
                    sleipnir: "Sleipnir",
                    swing: "Swing",
                    tizen: "Tizen",
                    uc: "UC Browser",
                    vivaldi: "Vivaldi",
                    webos: "WebOS Browser",
                    wechat: "WeChat",
                    yandex: "Yandex Browser"
                }, e.PLATFORMS_MAP = {
                    tablet: "tablet",
                    mobile: "mobile",
                    desktop: "desktop",
                    tv: "tv"
                }, e.OS_MAP = {
                    WindowsPhone: "Windows Phone",
                    Windows: "Windows",
                    MacOS: "macOS",
                    iOS: "iOS",
                    Android: "Android",
                    WebOS: "WebOS",
                    BlackBerry: "BlackBerry",
                    Bada: "Bada",
                    Tizen: "Tizen",
                    Linux: "Linux",
                    ChromeOS: "Chrome OS",
                    PlayStation4: "PlayStation 4",
                    Roku: "Roku"
                }, e.ENGINE_MAP = {
                    EdgeHTML: "EdgeHTML",
                    Blink: "Blink",
                    Trident: "Trident",
                    Presto: "Presto",
                    Gecko: "Gecko",
                    WebKit: "WebKit"
                }
            }, 90: function (t, e, r) {
                "use strict";
                e.__esModule = !0, e.default = void 0;
                var n, i = (n = r(91)) && n.__esModule ? n : {default: n}, o = r(18);
                var s = function () {
                    function t() {
                    }

                    var e;
                    return t.getParser = function (t, e) {
                        if (void 0 === e && (e = !1), "string" != typeof t) throw new Error("UserAgent should be a string");
                        return new i.default(t, e)
                    }, t.parse = function (t) {
                        return new i.default(t).getResult()
                    }, (e = [{
                        key: "BROWSER_MAP", get: function () {
                            return o.BROWSER_MAP
                        }
                    }, {
                        key: "ENGINE_MAP", get: function () {
                            return o.ENGINE_MAP
                        }
                    }, {
                        key: "OS_MAP", get: function () {
                            return o.OS_MAP
                        }
                    }, {
                        key: "PLATFORMS_MAP", get: function () {
                            return o.PLATFORMS_MAP
                        }
                    }]) && function (t, e) {
                        for (var r = 0; r < e.length; r++) {
                            var n = e[r];
                            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                        }
                    }(t, e), t
                }();
                e.default = s, t.exports = e.default
            }, 91: function (t, e, r) {
                "use strict";
                e.__esModule = !0, e.default = void 0;
                var n = u(r(92)), i = u(r(93)), o = u(r(94)), s = u(r(95)), a = u(r(17));

                function u(t) {
                    return t && t.__esModule ? t : {default: t}
                }

                var c = function () {
                    function t(t, e) {
                        if (void 0 === e && (e = !1), null == t || "" === t) throw new Error("UserAgent parameter can't be empty");
                        this._ua = t, this.parsedResult = {}, !0 !== e && this.parse()
                    }

                    var e = t.prototype;
                    return e.getUA = function () {
                        return this._ua
                    }, e.test = function (t) {
                        return t.test(this._ua)
                    }, e.parseBrowser = function () {
                        var t = this;
                        this.parsedResult.browser = {};
                        var e = n.default.find((function (e) {
                            if ("function" == typeof e.test) return e.test(t);
                            if (e.test instanceof Array) return e.test.some((function (e) {
                                return t.test(e)
                            }));
                            throw new Error("Browser's test function is not valid")
                        }));
                        return e && (this.parsedResult.browser = e.describe(this.getUA())), this.parsedResult.browser
                    }, e.getBrowser = function () {
                        return this.parsedResult.browser ? this.parsedResult.browser : this.parseBrowser()
                    }, e.getBrowserName = function (t) {
                        return t ? String(this.getBrowser().name).toLowerCase() || "" : this.getBrowser().name || ""
                    }, e.getBrowserVersion = function () {
                        return this.getBrowser().version
                    }, e.getOS = function () {
                        return this.parsedResult.os ? this.parsedResult.os : this.parseOS()
                    }, e.parseOS = function () {
                        var t = this;
                        this.parsedResult.os = {};
                        var e = i.default.find((function (e) {
                            if ("function" == typeof e.test) return e.test(t);
                            if (e.test instanceof Array) return e.test.some((function (e) {
                                return t.test(e)
                            }));
                            throw new Error("Browser's test function is not valid")
                        }));
                        return e && (this.parsedResult.os = e.describe(this.getUA())), this.parsedResult.os
                    }, e.getOSName = function (t) {
                        var e = this.getOS().name;
                        return t ? String(e).toLowerCase() || "" : e || ""
                    }, e.getOSVersion = function () {
                        return this.getOS().version
                    }, e.getPlatform = function () {
                        return this.parsedResult.platform ? this.parsedResult.platform : this.parsePlatform()
                    }, e.getPlatformType = function (t) {
                        void 0 === t && (t = !1);
                        var e = this.getPlatform().type;
                        return t ? String(e).toLowerCase() || "" : e || ""
                    }, e.parsePlatform = function () {
                        var t = this;
                        this.parsedResult.platform = {};
                        var e = o.default.find((function (e) {
                            if ("function" == typeof e.test) return e.test(t);
                            if (e.test instanceof Array) return e.test.some((function (e) {
                                return t.test(e)
                            }));
                            throw new Error("Browser's test function is not valid")
                        }));
                        return e && (this.parsedResult.platform = e.describe(this.getUA())), this.parsedResult.platform
                    }, e.getEngine = function () {
                        return this.parsedResult.engine ? this.parsedResult.engine : this.parseEngine()
                    }, e.getEngineName = function (t) {
                        return t ? String(this.getEngine().name).toLowerCase() || "" : this.getEngine().name || ""
                    }, e.parseEngine = function () {
                        var t = this;
                        this.parsedResult.engine = {};
                        var e = s.default.find((function (e) {
                            if ("function" == typeof e.test) return e.test(t);
                            if (e.test instanceof Array) return e.test.some((function (e) {
                                return t.test(e)
                            }));
                            throw new Error("Browser's test function is not valid")
                        }));
                        return e && (this.parsedResult.engine = e.describe(this.getUA())), this.parsedResult.engine
                    }, e.parse = function () {
                        return this.parseBrowser(), this.parseOS(), this.parsePlatform(), this.parseEngine(), this
                    }, e.getResult = function () {
                        return Object.assign({}, this.parsedResult)
                    }, e.satisfies = function (t) {
                        var e = this, r = {}, n = 0, i = {}, o = 0;
                        if (Object.keys(t).forEach((function (e) {
                            var s = t[e];
                            "string" == typeof s ? (i[e] = s, o += 1) : "object" == typeof s && (r[e] = s, n += 1)
                        })), n > 0) {
                            var s = Object.keys(r), a = s.find((function (t) {
                                return e.isOS(t)
                            }));
                            if (a) {
                                var u = this.satisfies(r[a]);
                                if (void 0 !== u) return u
                            }
                            var c = s.find((function (t) {
                                return e.isPlatform(t)
                            }));
                            if (c) {
                                var d = this.satisfies(r[c]);
                                if (void 0 !== d) return d
                            }
                        }
                        if (o > 0) {
                            var f = Object.keys(i).find((function (t) {
                                return e.isBrowser(t, !0)
                            }));
                            if (void 0 !== f) return this.compareVersion(i[f])
                        }
                    }, e.isBrowser = function (t, e) {
                        void 0 === e && (e = !1);
                        var r = this.getBrowserName().toLowerCase(), n = t.toLowerCase(),
                            i = a.default.getBrowserTypeByAlias(n);
                        return e && i && (n = i.toLowerCase()), n === r
                    }, e.compareVersion = function (t) {
                        var e = [0], r = t, n = !1, i = this.getBrowserVersion();
                        if ("string" == typeof i) return ">" === t[0] || "<" === t[0] ? (r = t.substr(1), "=" === t[1] ? (n = !0, r = t.substr(2)) : e = [], ">" === t[0] ? e.push(1) : e.push(-1)) : "=" === t[0] ? r = t.substr(1) : "~" === t[0] && (n = !0, r = t.substr(1)), e.indexOf(a.default.compareVersions(i, r, n)) > -1
                    }, e.isOS = function (t) {
                        return this.getOSName(!0) === String(t).toLowerCase()
                    }, e.isPlatform = function (t) {
                        return this.getPlatformType(!0) === String(t).toLowerCase()
                    }, e.isEngine = function (t) {
                        return this.getEngineName(!0) === String(t).toLowerCase()
                    }, e.is = function (t) {
                        return this.isBrowser(t) || this.isOS(t) || this.isPlatform(t)
                    }, e.some = function (t) {
                        var e = this;
                        return void 0 === t && (t = []), t.some((function (t) {
                            return e.is(t)
                        }))
                    }, t
                }();
                e.default = c, t.exports = e.default
            }, 92: function (t, e, r) {
                "use strict";
                e.__esModule = !0, e.default = void 0;
                var n, i = (n = r(17)) && n.__esModule ? n : {default: n}, o = /version\/(\d+(\.?_?\d+)+)/i, s = [{
                    test: [/googlebot/i], describe: function (t) {
                        var e = {name: "Googlebot"},
                            r = i.default.getFirstMatch(/googlebot\/(\d+(\.\d+))/i, t) || i.default.getFirstMatch(o, t);
                        return r && (e.version = r), e
                    }
                }, {
                    test: [/opera/i], describe: function (t) {
                        var e = {name: "Opera"},
                            r = i.default.getFirstMatch(o, t) || i.default.getFirstMatch(/(?:opera)[\s/](\d+(\.?_?\d+)+)/i, t);
                        return r && (e.version = r), e
                    }
                }, {
                    test: [/opr\/|opios/i], describe: function (t) {
                        var e = {name: "Opera"},
                            r = i.default.getFirstMatch(/(?:opr|opios)[\s/](\S+)/i, t) || i.default.getFirstMatch(o, t);
                        return r && (e.version = r), e
                    }
                }, {
                    test: [/SamsungBrowser/i], describe: function (t) {
                        var e = {name: "Samsung Internet for Android"},
                            r = i.default.getFirstMatch(o, t) || i.default.getFirstMatch(/(?:SamsungBrowser)[\s/](\d+(\.?_?\d+)+)/i, t);
                        return r && (e.version = r), e
                    }
                }, {
                    test: [/Whale/i], describe: function (t) {
                        var e = {name: "NAVER Whale Browser"},
                            r = i.default.getFirstMatch(o, t) || i.default.getFirstMatch(/(?:whale)[\s/](\d+(?:\.\d+)+)/i, t);
                        return r && (e.version = r), e
                    }
                }, {
                    test: [/MZBrowser/i], describe: function (t) {
                        var e = {name: "MZ Browser"},
                            r = i.default.getFirstMatch(/(?:MZBrowser)[\s/](\d+(?:\.\d+)+)/i, t) || i.default.getFirstMatch(o, t);
                        return r && (e.version = r), e
                    }
                }, {
                    test: [/focus/i], describe: function (t) {
                        var e = {name: "Focus"},
                            r = i.default.getFirstMatch(/(?:focus)[\s/](\d+(?:\.\d+)+)/i, t) || i.default.getFirstMatch(o, t);
                        return r && (e.version = r), e
                    }
                }, {
                    test: [/swing/i], describe: function (t) {
                        var e = {name: "Swing"},
                            r = i.default.getFirstMatch(/(?:swing)[\s/](\d+(?:\.\d+)+)/i, t) || i.default.getFirstMatch(o, t);
                        return r && (e.version = r), e
                    }
                }, {
                    test: [/coast/i], describe: function (t) {
                        var e = {name: "Opera Coast"},
                            r = i.default.getFirstMatch(o, t) || i.default.getFirstMatch(/(?:coast)[\s/](\d+(\.?_?\d+)+)/i, t);
                        return r && (e.version = r), e
                    }
                }, {
                    test: [/yabrowser/i], describe: function (t) {
                        var e = {name: "Yandex Browser"},
                            r = i.default.getFirstMatch(/(?:yabrowser)[\s/](\d+(\.?_?\d+)+)/i, t) || i.default.getFirstMatch(o, t);
                        return r && (e.version = r), e
                    }
                }, {
                    test: [/ucbrowser/i], describe: function (t) {
                        var e = {name: "UC Browser"},
                            r = i.default.getFirstMatch(o, t) || i.default.getFirstMatch(/(?:ucbrowser)[\s/](\d+(\.?_?\d+)+)/i, t);
                        return r && (e.version = r), e
                    }
                }, {
                    test: [/Maxthon|mxios/i], describe: function (t) {
                        var e = {name: "Maxthon"},
                            r = i.default.getFirstMatch(o, t) || i.default.getFirstMatch(/(?:Maxthon|mxios)[\s/](\d+(\.?_?\d+)+)/i, t);
                        return r && (e.version = r), e
                    }
                }, {
                    test: [/epiphany/i], describe: function (t) {
                        var e = {name: "Epiphany"},
                            r = i.default.getFirstMatch(o, t) || i.default.getFirstMatch(/(?:epiphany)[\s/](\d+(\.?_?\d+)+)/i, t);
                        return r && (e.version = r), e
                    }
                }, {
                    test: [/puffin/i], describe: function (t) {
                        var e = {name: "Puffin"},
                            r = i.default.getFirstMatch(o, t) || i.default.getFirstMatch(/(?:puffin)[\s/](\d+(\.?_?\d+)+)/i, t);
                        return r && (e.version = r), e
                    }
                }, {
                    test: [/sleipnir/i], describe: function (t) {
                        var e = {name: "Sleipnir"},
                            r = i.default.getFirstMatch(o, t) || i.default.getFirstMatch(/(?:sleipnir)[\s/](\d+(\.?_?\d+)+)/i, t);
                        return r && (e.version = r), e
                    }
                }, {
                    test: [/k-meleon/i], describe: function (t) {
                        var e = {name: "K-Meleon"},
                            r = i.default.getFirstMatch(o, t) || i.default.getFirstMatch(/(?:k-meleon)[\s/](\d+(\.?_?\d+)+)/i, t);
                        return r && (e.version = r), e
                    }
                }, {
                    test: [/micromessenger/i], describe: function (t) {
                        var e = {name: "WeChat"},
                            r = i.default.getFirstMatch(/(?:micromessenger)[\s/](\d+(\.?_?\d+)+)/i, t) || i.default.getFirstMatch(o, t);
                        return r && (e.version = r), e
                    }
                }, {
                    test: [/qqbrowser/i], describe: function (t) {
                        var e = {name: /qqbrowserlite/i.test(t) ? "QQ Browser Lite" : "QQ Browser"},
                            r = i.default.getFirstMatch(/(?:qqbrowserlite|qqbrowser)[/](\d+(\.?_?\d+)+)/i, t) || i.default.getFirstMatch(o, t);
                        return r && (e.version = r), e
                    }
                }, {
                    test: [/msie|trident/i], describe: function (t) {
                        var e = {name: "Internet Explorer"},
                            r = i.default.getFirstMatch(/(?:msie |rv:)(\d+(\.?_?\d+)+)/i, t);
                        return r && (e.version = r), e
                    }
                }, {
                    test: [/\sedg\//i], describe: function (t) {
                        var e = {name: "Microsoft Edge"}, r = i.default.getFirstMatch(/\sedg\/(\d+(\.?_?\d+)+)/i, t);
                        return r && (e.version = r), e
                    }
                }, {
                    test: [/edg([ea]|ios)/i], describe: function (t) {
                        var e = {name: "Microsoft Edge"},
                            r = i.default.getSecondMatch(/edg([ea]|ios)\/(\d+(\.?_?\d+)+)/i, t);
                        return r && (e.version = r), e
                    }
                }, {
                    test: [/vivaldi/i], describe: function (t) {
                        var e = {name: "Vivaldi"}, r = i.default.getFirstMatch(/vivaldi\/(\d+(\.?_?\d+)+)/i, t);
                        return r && (e.version = r), e
                    }
                }, {
                    test: [/seamonkey/i], describe: function (t) {
                        var e = {name: "SeaMonkey"}, r = i.default.getFirstMatch(/seamonkey\/(\d+(\.?_?\d+)+)/i, t);
                        return r && (e.version = r), e
                    }
                }, {
                    test: [/sailfish/i], describe: function (t) {
                        var e = {name: "Sailfish"},
                            r = i.default.getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i, t);
                        return r && (e.version = r), e
                    }
                }, {
                    test: [/silk/i], describe: function (t) {
                        var e = {name: "Amazon Silk"}, r = i.default.getFirstMatch(/silk\/(\d+(\.?_?\d+)+)/i, t);
                        return r && (e.version = r), e
                    }
                }, {
                    test: [/phantom/i], describe: function (t) {
                        var e = {name: "PhantomJS"}, r = i.default.getFirstMatch(/phantomjs\/(\d+(\.?_?\d+)+)/i, t);
                        return r && (e.version = r), e
                    }
                }, {
                    test: [/slimerjs/i], describe: function (t) {
                        var e = {name: "SlimerJS"}, r = i.default.getFirstMatch(/slimerjs\/(\d+(\.?_?\d+)+)/i, t);
                        return r && (e.version = r), e
                    }
                }, {
                    test: [/blackberry|\bbb\d+/i, /rim\stablet/i], describe: function (t) {
                        var e = {name: "BlackBerry"},
                            r = i.default.getFirstMatch(o, t) || i.default.getFirstMatch(/blackberry[\d]+\/(\d+(\.?_?\d+)+)/i, t);
                        return r && (e.version = r), e
                    }
                }, {
                    test: [/(web|hpw)[o0]s/i], describe: function (t) {
                        var e = {name: "WebOS Browser"},
                            r = i.default.getFirstMatch(o, t) || i.default.getFirstMatch(/w(?:eb)?[o0]sbrowser\/(\d+(\.?_?\d+)+)/i, t);
                        return r && (e.version = r), e
                    }
                }, {
                    test: [/bada/i], describe: function (t) {
                        var e = {name: "Bada"}, r = i.default.getFirstMatch(/dolfin\/(\d+(\.?_?\d+)+)/i, t);
                        return r && (e.version = r), e
                    }
                }, {
                    test: [/tizen/i], describe: function (t) {
                        var e = {name: "Tizen"},
                            r = i.default.getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.?_?\d+)+)/i, t) || i.default.getFirstMatch(o, t);
                        return r && (e.version = r), e
                    }
                }, {
                    test: [/qupzilla/i], describe: function (t) {
                        var e = {name: "QupZilla"},
                            r = i.default.getFirstMatch(/(?:qupzilla)[\s/](\d+(\.?_?\d+)+)/i, t) || i.default.getFirstMatch(o, t);
                        return r && (e.version = r), e
                    }
                }, {
                    test: [/firefox|iceweasel|fxios/i], describe: function (t) {
                        var e = {name: "Firefox"},
                            r = i.default.getFirstMatch(/(?:firefox|iceweasel|fxios)[\s/](\d+(\.?_?\d+)+)/i, t);
                        return r && (e.version = r), e
                    }
                }, {
                    test: [/chromium/i], describe: function (t) {
                        var e = {name: "Chromium"},
                            r = i.default.getFirstMatch(/(?:chromium)[\s/](\d+(\.?_?\d+)+)/i, t) || i.default.getFirstMatch(o, t);
                        return r && (e.version = r), e
                    }
                }, {
                    test: [/chrome|crios|crmo/i], describe: function (t) {
                        var e = {name: "Chrome"},
                            r = i.default.getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i, t);
                        return r && (e.version = r), e
                    }
                }, {
                    test: [/GSA/i], describe: function (t) {
                        var e = {name: "Google Search"}, r = i.default.getFirstMatch(/(?:GSA)\/(\d+(\.?_?\d+)+)/i, t);
                        return r && (e.version = r), e
                    }
                }, {
                    test: function (t) {
                        var e = !t.test(/like android/i), r = t.test(/android/i);
                        return e && r
                    }, describe: function (t) {
                        var e = {name: "Android Browser"}, r = i.default.getFirstMatch(o, t);
                        return r && (e.version = r), e
                    }
                }, {
                    test: [/playstation 4/i], describe: function (t) {
                        var e = {name: "PlayStation 4"}, r = i.default.getFirstMatch(o, t);
                        return r && (e.version = r), e
                    }
                }, {
                    test: [/safari|applewebkit/i], describe: function (t) {
                        var e = {name: "Safari"}, r = i.default.getFirstMatch(o, t);
                        return r && (e.version = r), e
                    }
                }, {
                    test: [/.*/i], describe: function (t) {
                        var e = -1 !== t.search("\\(") ? /^(.*)\/(.*)[ \t]\((.*)/ : /^(.*)\/(.*) /;
                        return {name: i.default.getFirstMatch(e, t), version: i.default.getSecondMatch(e, t)}
                    }
                }];
                e.default = s, t.exports = e.default
            }, 93: function (t, e, r) {
                "use strict";
                e.__esModule = !0, e.default = void 0;
                var n, i = (n = r(17)) && n.__esModule ? n : {default: n}, o = r(18), s = [{
                    test: [/Roku\/DVP/], describe: function (t) {
                        var e = i.default.getFirstMatch(/Roku\/DVP-(\d+\.\d+)/i, t);
                        return {name: o.OS_MAP.Roku, version: e}
                    }
                }, {
                    test: [/windows phone/i], describe: function (t) {
                        var e = i.default.getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i, t);
                        return {name: o.OS_MAP.WindowsPhone, version: e}
                    }
                }, {
                    test: [/windows/i], describe: function (t) {
                        var e = i.default.getFirstMatch(/Windows ((NT|XP)( \d\d?.\d)?)/i, t),
                            r = i.default.getWindowsVersionName(e);
                        return {name: o.OS_MAP.Windows, version: e, versionName: r}
                    }
                }, {
                    test: [/macintosh/i], describe: function (t) {
                        var e = i.default.getFirstMatch(/mac os x (\d+(\.?_?\d+)+)/i, t).replace(/[_\s]/g, "."),
                            r = i.default.getMacOSVersionName(e), n = {name: o.OS_MAP.MacOS, version: e};
                        return r && (n.versionName = r), n
                    }
                }, {
                    test: [/(ipod|iphone|ipad)/i], describe: function (t) {
                        var e = i.default.getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i, t).replace(/[_\s]/g, ".");
                        return {name: o.OS_MAP.iOS, version: e}
                    }
                }, {
                    test: function (t) {
                        var e = !t.test(/like android/i), r = t.test(/android/i);
                        return e && r
                    }, describe: function (t) {
                        var e = i.default.getFirstMatch(/android[\s/-](\d+(\.\d+)*)/i, t),
                            r = i.default.getAndroidVersionName(e), n = {name: o.OS_MAP.Android, version: e};
                        return r && (n.versionName = r), n
                    }
                }, {
                    test: [/(web|hpw)[o0]s/i], describe: function (t) {
                        var e = i.default.getFirstMatch(/(?:web|hpw)[o0]s\/(\d+(\.\d+)*)/i, t),
                            r = {name: o.OS_MAP.WebOS};
                        return e && e.length && (r.version = e), r
                    }
                }, {
                    test: [/blackberry|\bbb\d+/i, /rim\stablet/i], describe: function (t) {
                        var e = i.default.getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i, t) || i.default.getFirstMatch(/blackberry\d+\/(\d+([_\s]\d+)*)/i, t) || i.default.getFirstMatch(/\bbb(\d+)/i, t);
                        return {name: o.OS_MAP.BlackBerry, version: e}
                    }
                }, {
                    test: [/bada/i], describe: function (t) {
                        var e = i.default.getFirstMatch(/bada\/(\d+(\.\d+)*)/i, t);
                        return {name: o.OS_MAP.Bada, version: e}
                    }
                }, {
                    test: [/tizen/i], describe: function (t) {
                        var e = i.default.getFirstMatch(/tizen[/\s](\d+(\.\d+)*)/i, t);
                        return {name: o.OS_MAP.Tizen, version: e}
                    }
                }, {
                    test: [/linux/i], describe: function () {
                        return {name: o.OS_MAP.Linux}
                    }
                }, {
                    test: [/CrOS/], describe: function () {
                        return {name: o.OS_MAP.ChromeOS}
                    }
                }, {
                    test: [/PlayStation 4/], describe: function (t) {
                        var e = i.default.getFirstMatch(/PlayStation 4[/\s](\d+(\.\d+)*)/i, t);
                        return {name: o.OS_MAP.PlayStation4, version: e}
                    }
                }];
                e.default = s, t.exports = e.default
            }, 94: function (t, e, r) {
                "use strict";
                e.__esModule = !0, e.default = void 0;
                var n, i = (n = r(17)) && n.__esModule ? n : {default: n}, o = r(18), s = [{
                    test: [/googlebot/i], describe: function () {
                        return {type: "bot", vendor: "Google"}
                    }
                }, {
                    test: [/huawei/i], describe: function (t) {
                        var e = i.default.getFirstMatch(/(can-l01)/i, t) && "Nova",
                            r = {type: o.PLATFORMS_MAP.mobile, vendor: "Huawei"};
                        return e && (r.model = e), r
                    }
                }, {
                    test: [/nexus\s*(?:7|8|9|10).*/i], describe: function () {
                        return {type: o.PLATFORMS_MAP.tablet, vendor: "Nexus"}
                    }
                }, {
                    test: [/ipad/i], describe: function () {
                        return {type: o.PLATFORMS_MAP.tablet, vendor: "Apple", model: "iPad"}
                    }
                }, {
                    test: [/kftt build/i], describe: function () {
                        return {type: o.PLATFORMS_MAP.tablet, vendor: "Amazon", model: "Kindle Fire HD 7"}
                    }
                }, {
                    test: [/silk/i], describe: function () {
                        return {type: o.PLATFORMS_MAP.tablet, vendor: "Amazon"}
                    }
                }, {
                    test: [/tablet(?! pc)/i], describe: function () {
                        return {type: o.PLATFORMS_MAP.tablet}
                    }
                }, {
                    test: function (t) {
                        var e = t.test(/ipod|iphone/i), r = t.test(/like (ipod|iphone)/i);
                        return e && !r
                    }, describe: function (t) {
                        var e = i.default.getFirstMatch(/(ipod|iphone)/i, t);
                        return {type: o.PLATFORMS_MAP.mobile, vendor: "Apple", model: e}
                    }
                }, {
                    test: [/nexus\s*[0-6].*/i, /galaxy nexus/i], describe: function () {
                        return {type: o.PLATFORMS_MAP.mobile, vendor: "Nexus"}
                    }
                }, {
                    test: [/[^-]mobi/i], describe: function () {
                        return {type: o.PLATFORMS_MAP.mobile}
                    }
                }, {
                    test: function (t) {
                        return "blackberry" === t.getBrowserName(!0)
                    }, describe: function () {
                        return {type: o.PLATFORMS_MAP.mobile, vendor: "BlackBerry"}
                    }
                }, {
                    test: function (t) {
                        return "bada" === t.getBrowserName(!0)
                    }, describe: function () {
                        return {type: o.PLATFORMS_MAP.mobile}
                    }
                }, {
                    test: function (t) {
                        return "windows phone" === t.getBrowserName()
                    }, describe: function () {
                        return {type: o.PLATFORMS_MAP.mobile, vendor: "Microsoft"}
                    }
                }, {
                    test: function (t) {
                        var e = Number(String(t.getOSVersion()).split(".")[0]);
                        return "android" === t.getOSName(!0) && e >= 3
                    }, describe: function () {
                        return {type: o.PLATFORMS_MAP.tablet}
                    }
                }, {
                    test: function (t) {
                        return "android" === t.getOSName(!0)
                    }, describe: function () {
                        return {type: o.PLATFORMS_MAP.mobile}
                    }
                }, {
                    test: function (t) {
                        return "macos" === t.getOSName(!0)
                    }, describe: function () {
                        return {type: o.PLATFORMS_MAP.desktop, vendor: "Apple"}
                    }
                }, {
                    test: function (t) {
                        return "windows" === t.getOSName(!0)
                    }, describe: function () {
                        return {type: o.PLATFORMS_MAP.desktop}
                    }
                }, {
                    test: function (t) {
                        return "linux" === t.getOSName(!0)
                    }, describe: function () {
                        return {type: o.PLATFORMS_MAP.desktop}
                    }
                }, {
                    test: function (t) {
                        return "playstation 4" === t.getOSName(!0)
                    }, describe: function () {
                        return {type: o.PLATFORMS_MAP.tv}
                    }
                }, {
                    test: function (t) {
                        return "roku" === t.getOSName(!0)
                    }, describe: function () {
                        return {type: o.PLATFORMS_MAP.tv}
                    }
                }];
                e.default = s, t.exports = e.default
            }, 95: function (t, e, r) {
                "use strict";
                e.__esModule = !0, e.default = void 0;
                var n, i = (n = r(17)) && n.__esModule ? n : {default: n}, o = r(18), s = [{
                    test: function (t) {
                        return "microsoft edge" === t.getBrowserName(!0)
                    }, describe: function (t) {
                        if (/\sedg\//i.test(t)) return {name: o.ENGINE_MAP.Blink};
                        var e = i.default.getFirstMatch(/edge\/(\d+(\.?_?\d+)+)/i, t);
                        return {name: o.ENGINE_MAP.EdgeHTML, version: e}
                    }
                }, {
                    test: [/trident/i], describe: function (t) {
                        var e = {name: o.ENGINE_MAP.Trident},
                            r = i.default.getFirstMatch(/trident\/(\d+(\.?_?\d+)+)/i, t);
                        return r && (e.version = r), e
                    }
                }, {
                    test: function (t) {
                        return t.test(/presto/i)
                    }, describe: function (t) {
                        var e = {name: o.ENGINE_MAP.Presto},
                            r = i.default.getFirstMatch(/presto\/(\d+(\.?_?\d+)+)/i, t);
                        return r && (e.version = r), e
                    }
                }, {
                    test: function (t) {
                        var e = t.test(/gecko/i), r = t.test(/like gecko/i);
                        return e && !r
                    }, describe: function (t) {
                        var e = {name: o.ENGINE_MAP.Gecko}, r = i.default.getFirstMatch(/gecko\/(\d+(\.?_?\d+)+)/i, t);
                        return r && (e.version = r), e
                    }
                }, {
                    test: [/(apple)?webkit\/537\.36/i], describe: function () {
                        return {name: o.ENGINE_MAP.Blink}
                    }
                }, {
                    test: [/(apple)?webkit/i], describe: function (t) {
                        var e = {name: o.ENGINE_MAP.WebKit},
                            r = i.default.getFirstMatch(/webkit\/(\d+(\.?_?\d+)+)/i, t);
                        return r && (e.version = r), e
                    }
                }];
                e.default = s, t.exports = e.default
            }
        })
    }, function (t, e, r) {
        t.exports = r(2)
    }, function (t, e, r) {
        "use strict";
        r.r(e);
        var n = r(0), i = t => "Chrome" === t.getBrowserName(), o = t => "Chromium" === t.getBrowserName(),
            s = t => "Microsoft Edge" === t.getBrowserName(), a = t => "Firefox" === t.getBrowserName(),
            u = t => "Internet Explorer" === t.getBrowserName(), c = t => "Opera" === t.getBrowserName(),
            d = t => "Safari" === t.getBrowserName(), f = t => "macOS" === t.getOSName(),
            h = t => "Android" === t.getOSName(), l = t => "iOS" === t.getOSName(),
            p = t => f(t) && window.navigator.maxTouchPoints > 1, g = t => "Linux" === t.getOSName(), m = f,
            v = t => "Windows" === t.getOSName(), b = t => "Chrome OS" === t.getOSName(),
            _ = t => "mobile" === t.getPlatformType(), w = t => "tablet" === t.getPlatformType(),
            M = t => "desktop" === t.getPlatformType(), y = t => t.getOSVersion(), O = (t, e) => t.satisfies(e);
        const S = r.n(n).a.getParser(window.navigator.userAgent || "");
        e.default = {
            chrome: i(S),
            chromium: o(S),
            edge: s(S),
            firefox: a(S),
            ie: u(S),
            opera: c(S),
            safari: d(S),
            android: h(S),
            ios: l(S),
            iPadOS: p(S),
            linux: g(S),
            macOS: m(S) && !p(S),
            windows: v(S),
            chromeOS: b(S),
            mobile: _(S),
            tablet: w(S) || p(S),
            desktop: M(S) && !p(S),
            version: y(S),
            isSatisfied: t => O(S, t)
        }
    }]).default)
}, , , , , , function (t, e) {
    var r;
    r = function () {
        return this
    }();
    try {
        r = r || new Function("return this")()
    } catch (t) {
        "object" == typeof window && (r = window)
    }
    t.exports = r
}, function (t, e) {
    !function () {
        "use strict";
        if ("object" == typeof window) if ("IntersectionObserver" in window && "IntersectionObserverEntry" in window && "intersectionRatio" in window.IntersectionObserverEntry.prototype) "isIntersecting" in window.IntersectionObserverEntry.prototype || Object.defineProperty(window.IntersectionObserverEntry.prototype, "isIntersecting", {
            get: function () {
                return this.intersectionRatio > 0
            }
        }); else {
            var t = window.document, e = [];
            n.prototype.THROTTLE_TIMEOUT = 100, n.prototype.POLL_INTERVAL = null, n.prototype.USE_MUTATION_OBSERVER = !0, n.prototype.observe = function (t) {
                if (!this._observationTargets.some((function (e) {
                    return e.element == t
                }))) {
                    if (!t || 1 != t.nodeType) throw new Error("target must be an Element");
                    this._registerInstance(), this._observationTargets.push({
                        element: t,
                        entry: null
                    }), this._monitorIntersections(t.ownerDocument), this._checkForIntersections()
                }
            }, n.prototype.unobserve = function (t) {
                this._observationTargets = this._observationTargets.filter((function (e) {
                    return e.element != t
                })), this._unmonitorIntersections(t.ownerDocument), 0 == this._observationTargets.length && this._unregisterInstance()
            }, n.prototype.disconnect = function () {
                this._observationTargets = [], this._unmonitorAllIntersections(), this._unregisterInstance()
            }, n.prototype.takeRecords = function () {
                var t = this._queuedEntries.slice();
                return this._queuedEntries = [], t
            }, n.prototype._initThresholds = function (t) {
                var e = t || [0];
                return Array.isArray(e) || (e = [e]), e.sort().filter((function (t, e, r) {
                    if ("number" != typeof t || isNaN(t) || t < 0 || t > 1) throw new Error("threshold must be a number between 0 and 1 inclusively");
                    return t !== r[e - 1]
                }))
            }, n.prototype._parseRootMargin = function (t) {
                var e = (t || "0px").split(/\s+/).map((function (t) {
                    var e = /^(-?\d*\.?\d+)(px|%)$/.exec(t);
                    if (!e) throw new Error("rootMargin must be specified in pixels or percent");
                    return {value: parseFloat(e[1]), unit: e[2]}
                }));
                return e[1] = e[1] || e[0], e[2] = e[2] || e[0], e[3] = e[3] || e[1], e
            }, n.prototype._monitorIntersections = function (e) {
                var r = e.defaultView;
                if (r && -1 == this._monitoringDocuments.indexOf(e)) {
                    var n = this._checkForIntersections, s = null, a = null;
                    if (this.POLL_INTERVAL ? s = r.setInterval(n, this.POLL_INTERVAL) : (i(r, "resize", n, !0), i(e, "scroll", n, !0), this.USE_MUTATION_OBSERVER && "MutationObserver" in r && (a = new r.MutationObserver(n)).observe(e, {
                        attributes: !0,
                        childList: !0,
                        characterData: !0,
                        subtree: !0
                    })), this._monitoringDocuments.push(e), this._monitoringUnsubscribes.push((function () {
                        var t = e.defaultView;
                        t && (s && t.clearInterval(s), o(t, "resize", n, !0)), o(e, "scroll", n, !0), a && a.disconnect()
                    })), e != (this.root && this.root.ownerDocument || t)) {
                        var u = d(e);
                        u && this._monitorIntersections(u.ownerDocument)
                    }
                }
            }, n.prototype._unmonitorIntersections = function (e) {
                var r = this._monitoringDocuments.indexOf(e);
                if (-1 != r) {
                    var n = this.root && this.root.ownerDocument || t;
                    if (!this._observationTargets.some((function (t) {
                        var r = t.element.ownerDocument;
                        if (r == e) return !0;
                        for (; r && r != n;) {
                            var i = d(r);
                            if ((r = i && i.ownerDocument) == e) return !0
                        }
                        return !1
                    }))) {
                        var i = this._monitoringUnsubscribes[r];
                        if (this._monitoringDocuments.splice(r, 1), this._monitoringUnsubscribes.splice(r, 1), i(), e != n) {
                            var o = d(e);
                            o && this._unmonitorIntersections(o.ownerDocument)
                        }
                    }
                }
            }, n.prototype._unmonitorAllIntersections = function () {
                var t = this._monitoringUnsubscribes.slice(0);
                this._monitoringDocuments.length = 0, this._monitoringUnsubscribes.length = 0;
                for (var e = 0; e < t.length; e++) t[e]()
            }, n.prototype._checkForIntersections = function () {
                var t = this._rootIsInDom(),
                    e = t ? this._getRootRect() : {top: 0, bottom: 0, left: 0, right: 0, width: 0, height: 0};
                this._observationTargets.forEach((function (n) {
                    var i = n.element, o = a(i), s = this._rootContainsTarget(i), u = n.entry,
                        c = t && s && this._computeTargetAndRootIntersection(i, o, e), d = n.entry = new r({
                            time: window.performance && performance.now && performance.now(),
                            target: i,
                            boundingClientRect: o,
                            rootBounds: e,
                            intersectionRect: c
                        });
                    u ? t && s ? this._hasCrossedThreshold(u, d) && this._queuedEntries.push(d) : u && u.isIntersecting && this._queuedEntries.push(d) : this._queuedEntries.push(d)
                }), this), this._queuedEntries.length && this._callback(this.takeRecords(), this)
            }, n.prototype._computeTargetAndRootIntersection = function (e, r, n) {
                if ("none" != window.getComputedStyle(e).display) {
                    for (var i, o, u, d, f = r, h = c(e), l = !1; !l && h;) {
                        var p = null, g = 1 == h.nodeType ? window.getComputedStyle(h) : {};
                        if ("none" == g.display) return null;
                        if (h == this.root || 9 == h.nodeType) if (l = !0, h == this.root || h == t) p = n; else {
                            var m = c(h), v = m && a(m), b = m && this._computeTargetAndRootIntersection(m, v, n);
                            v && b ? (h = m, i = v, u = void 0, d = void 0, u = (o = b).top - i.top, d = o.left - i.left, p = {
                                top: u,
                                left: d,
                                height: o.height,
                                width: o.width,
                                bottom: u + o.height,
                                right: d + o.width
                            }) : (h = null, f = null)
                        } else {
                            var _ = h.ownerDocument;
                            h != _.body && h != _.documentElement && "visible" != g.overflow && (p = a(h))
                        }
                        if (p && (f = s(p, f)), !f) break;
                        h = h && c(h)
                    }
                    return f
                }
            }, n.prototype._getRootRect = function () {
                var e;
                if (this.root) e = a(this.root); else {
                    var r = t.documentElement, n = t.body;
                    e = {
                        top: 0,
                        left: 0,
                        right: r.clientWidth || n.clientWidth,
                        width: r.clientWidth || n.clientWidth,
                        bottom: r.clientHeight || n.clientHeight,
                        height: r.clientHeight || n.clientHeight
                    }
                }
                return this._expandRectByRootMargin(e)
            }, n.prototype._expandRectByRootMargin = function (t) {
                var e = this._rootMarginValues.map((function (e, r) {
                    return "px" == e.unit ? e.value : e.value * (r % 2 ? t.width : t.height) / 100
                })), r = {top: t.top - e[0], right: t.right + e[1], bottom: t.bottom + e[2], left: t.left - e[3]};
                return r.width = r.right - r.left, r.height = r.bottom - r.top, r
            }, n.prototype._hasCrossedThreshold = function (t, e) {
                var r = t && t.isIntersecting ? t.intersectionRatio || 0 : -1,
                    n = e.isIntersecting ? e.intersectionRatio || 0 : -1;
                if (r !== n) for (var i = 0; i < this.thresholds.length; i++) {
                    var o = this.thresholds[i];
                    if (o == r || o == n || o < r != o < n) return !0
                }
            }, n.prototype._rootIsInDom = function () {
                return !this.root || u(t, this.root)
            }, n.prototype._rootContainsTarget = function (e) {
                return u(this.root || t, e) && (!this.root || this.root.ownerDocument == e.ownerDocument)
            }, n.prototype._registerInstance = function () {
                e.indexOf(this) < 0 && e.push(this)
            }, n.prototype._unregisterInstance = function () {
                var t = e.indexOf(this);
                -1 != t && e.splice(t, 1)
            }, window.IntersectionObserver = n, window.IntersectionObserverEntry = r
        }

        function r(t) {
            this.time = t.time, this.target = t.target, this.rootBounds = t.rootBounds, this.boundingClientRect = t.boundingClientRect, this.intersectionRect = t.intersectionRect || {
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                width: 0,
                height: 0
            }, this.isIntersecting = !!t.intersectionRect;
            var e = this.boundingClientRect, r = e.width * e.height, n = this.intersectionRect, i = n.width * n.height;
            this.intersectionRatio = r ? Number((i / r).toFixed(4)) : this.isIntersecting ? 1 : 0
        }

        function n(t, e) {
            var r, n, i, o = e || {};
            if ("function" != typeof t) throw new Error("callback must be a function");
            if (o.root && 1 != o.root.nodeType) throw new Error("root must be an Element");
            this._checkForIntersections = (r = this._checkForIntersections.bind(this), n = this.THROTTLE_TIMEOUT, i = null, function () {
                i || (i = setTimeout((function () {
                    r(), i = null
                }), n))
            }), this._callback = t, this._observationTargets = [], this._queuedEntries = [], this._rootMarginValues = this._parseRootMargin(o.rootMargin), this.thresholds = this._initThresholds(o.threshold), this.root = o.root || null, this.rootMargin = this._rootMarginValues.map((function (t) {
                return t.value + t.unit
            })).join(" "), this._monitoringDocuments = [], this._monitoringUnsubscribes = []
        }

        function i(t, e, r, n) {
            "function" == typeof t.addEventListener ? t.addEventListener(e, r, n || !1) : "function" == typeof t.attachEvent && t.attachEvent("on" + e, r)
        }

        function o(t, e, r, n) {
            "function" == typeof t.removeEventListener ? t.removeEventListener(e, r, n || !1) : "function" == typeof t.detatchEvent && t.detatchEvent("on" + e, r)
        }

        function s(t, e) {
            var r = Math.max(t.top, e.top), n = Math.min(t.bottom, e.bottom), i = Math.max(t.left, e.left),
                o = Math.min(t.right, e.right), s = o - i, a = n - r;
            return s >= 0 && a >= 0 && {top: r, bottom: n, left: i, right: o, width: s, height: a} || null
        }

        function a(t) {
            var e;
            try {
                e = t.getBoundingClientRect()
            } catch (t) {
            }
            return e ? (e.width && e.height || (e = {
                top: e.top,
                right: e.right,
                bottom: e.bottom,
                left: e.left,
                width: e.right - e.left,
                height: e.bottom - e.top
            }), e) : {top: 0, bottom: 0, left: 0, right: 0, width: 0, height: 0}
        }

        function u(t, e) {
            for (var r = e; r;) {
                if (r == t) return !0;
                r = c(r)
            }
            return !1
        }

        function c(e) {
            var r = e.parentNode;
            return 9 == e.nodeType && e != t ? d(e) : r && 11 == r.nodeType && r.host ? r.host : r && r.assignedSlot ? r.assignedSlot.parentNode : r
        }

        function d(t) {
            try {
                return t.defaultView && t.defaultView.frameElement || null
            } catch (t) {
                return null
            }
        }
    }()
}]]);
;!function (t) {
    function e(e) {
        for (var o, r, a = e[0], l = e[1], c = e[2], h = 0, p = []; h < a.length; h++) r = a[h], Object.prototype.hasOwnProperty.call(i, r) && i[r] && p.push(i[r][0]), i[r] = 0;
        for (o in l) Object.prototype.hasOwnProperty.call(l, o) && (t[o] = l[o]);
        for (d && d(e); p.length;) p.shift()();
        return s.push.apply(s, c || []), n()
    }

    function n() {
        for (var t, e = 0; e < s.length; e++) {
            for (var n = s[e], o = !0, a = 1; a < n.length; a++) {
                var l = n[a];
                0 !== i[l] && (o = !1)
            }
            o && (s.splice(e--, 1), t = r(r.s = n[0]))
        }
        return t
    }

    var o = {}, i = {2: 0}, s = [];

    function r(e) {
        if (o[e]) return o[e].exports;
        var n = o[e] = {i: e, l: !1, exports: {}};
        return t[e].call(n.exports, n, n.exports, r), n.l = !0, n.exports
    }

    r.m = t, r.c = o, r.d = function (t, e, n) {
        r.o(t, e) || Object.defineProperty(t, e, {enumerable: !0, get: n})
    }, r.r = function (t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(t, "__esModule", {value: !0})
    }, r.t = function (t, e) {
        if (1 & e && (t = r(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var n = Object.create(null);
        if (r.r(n), Object.defineProperty(n, "default", {
            enumerable: !0,
            value: t
        }), 2 & e && "string" != typeof t) for (var o in t) r.d(n, o, function (e) {
            return t[e]
        }.bind(null, o));
        return n
    }, r.n = function (t) {
        var e = t && t.__esModule ? function () {
            return t.default
        } : function () {
            return t
        };
        return r.d(e, "a", e), e
    }, r.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, r.p = "";
    var a = window.webpackJsonp = window.webpackJsonp || [], l = a.push.bind(a);
    a.push = e, a = a.slice();
    for (var c = 0; c < a.length; c++) e(a[c]);
    var d = l;
    s.push([16, 0]), n()
}({
    16: function (t, e, n) {
        t.exports = n(61)
    }, 4: function (t) {
        t.exports = JSON.parse('{"cs":{"Hidden Block":"Skrytý blok","This block is hidden. Press on \'Hide/Show\' trigger on the control pane to activate it.":"Tento blok je skrytý. Stisknutím ovládacího tlačítka „Skrýt / Zobrazit“ na ovládacím panelu jej aktivujte."},"de":{"Hidden Block":"Versteckter Block","This block is hidden. Press on \'Hide/Show\' trigger on the control pane to activate it.":"Dieser Block ist versteckt. Drücken Sie auf den Auslöser \\"Ausblenden / Anzeigen\\" im Steuerungsfenster, um es zu aktivieren."},"es":{"Hidden Block":"Bloque oculto","This block is hidden. Press on \'Hide/Show\' trigger on the control pane to activate it.":"Este bloque está oculto. Presione el gatillo \'Ocultar / Mostrar\' en el panel de control para activarlo."},"fi":{"Hidden Block":"Piilotettu lohko","This block is hidden. Press on \'Hide/Show\' trigger on the control pane to activate it.":"Tämä lohko on piilotettu. Aktivoi se painamalla ohjauspaneelin Piilota/näytä -liipaisinta."},"fr":{"Hidden Block":"Bloc caché","This block is hidden. Press on \'Hide/Show\' trigger on the control pane to activate it.":"Ce bloc est caché. Appuyez sur le déclencheur \'Masquer / Afficher\' du panneau de configuration pour l\'activer."},"hu":{"Hidden Block":"Rejtett blokk","This block is hidden. Press on \'Hide/Show\' trigger on the control pane to activate it.":"Ez a blokk rejtett. A aktiváláshoz nyomja meg a vezérlőpult \'Hide / Show\' ravaszt."},"id":{"Hidden Block":"Blok Tersembunyi","This block is hidden. Press on \'Hide/Show\' trigger on the control pane to activate it.":"Blok ini disembunyikan. Tekan pada pemicu \'Sembunyikan / Tampilkan\' pada panel kontrol untuk mengaktifkannya."},"it":{"Hidden Block":"Blocco nascosto","This block is hidden. Press on \'Hide/Show\' trigger on the control pane to activate it.":"Questo blocco è nascosto. Premi sul grilletto \'Nascondi / Mostra\' sul pannello di controllo per attivarlo."},"ja":{"Hidden Block":"隠しブロック","This block is hidden. Press on \'Hide/Show\' trigger on the control pane to activate it.":"このブロックは非表示です。 有効にするには、コントロールペインの[非表示/表示]トリガーを押します。"},"nb":{"Hidden Block":"Skjult blokk","This block is hidden. Press on \'Hide/Show\' trigger on the control pane to activate it.":"Denne blokken er skjult. Trykk på \\"Skjul / vis\\" trigger på kontrollruten for å aktivere den."},"nl":{"Hidden Block":"Verborgen blok","This block is hidden. Press on \'Hide/Show\' trigger on the control pane to activate it.":"Dit blok is verborgen. Druk op \'Verbergen / Tonen\' op het bedieningspaneel om het te activeren."},"pl":{"Hidden Block":"Ukryty blok","This block is hidden. Press on \'Hide/Show\' trigger on the control pane to activate it.":"Ten blok jest ukryty. Naciśnij przycisk „Ukryj / pokaż” w panelu sterowania, aby go włączyć."},"pt-br":{"Hidden Block":"Bloco oculto","This block is hidden. Press on \'Hide/Show\' trigger on the control pane to activate it.":"Este bloco está oculto. Pressione o gatilho \'Hide / Show\' no painel de controle para ativá-lo."},"ru":{"Hidden Block":"Скрытый блок","This block is hidden. Press on \'Hide/Show\' trigger on the control pane to activate it.":"Этот блок скрыт. Нажмите на триггер «Скрыть / Показать» на панели управления, чтобы активировать его."},"sk":{"Hidden Block":"Skrytý blok","This block is hidden. Press on \'Hide/Show\' trigger on the control pane to activate it.":"Tento blok je skrytý. Stlačením na spínacej ploche „Skryť / Zobraziť“ na ovládacom paneli ju aktivujete."},"sv":{"Hidden Block":"Dold block","This block is hidden. Press on \'Hide/Show\' trigger on the control pane to activate it.":"Detta block är dold. Tryck på \\"Dölj / Visa\\" -trigern på kontrollpanelen för att aktivera den."},"zh-cn":{"Hidden Block":"隐藏块","This block is hidden. Press on \'Hide/Show\' trigger on the control pane to activate it.":"该块被隐藏。 按控制面板上的“隐藏/显示”触发器以将其激活"},"en":{"Hidden Block":"Hidden Block","This block is hidden. Press on \'Hide/Show\' trigger on the control pane to activate it.":"This block is hidden. Press on \'Hide/Show\' trigger on the control pane to activate it."}}')
    }, 61: function (t, e, n) {
        "use strict";
        n.r(e);
        var o = n(1), i = n.n(o);
        var s = Object.freeze({
            surface: "ws-surface",
            section: "section.ws-section",
            surfaceAttribute: "data-surface",
            hiddenState: ".ws-block-hidden-state",
            hiddenStateTitle: ".ws-block-hidden-state__title",
            hiddenStateDescription: ".ws-block-hidden-state__description",
            emptyState: ".ws-block-empty-state",
            emptyStateTitle: ".ws-block-empty-state__title",
            emptyStateDescription: ".ws-block-empty-state__description",
            emptyStateAction: ".ws-block-empty-state__floating-action",
            emptyStateActiveArea: ".ws-block-empty-state__active-area",
            customContent: '[slot="custom-content"]',
            block: "ws-block"
        }), r = {
            ROOT_OBJECT: "__TRANSLATIONS__",
            EMPTY_STATE_TITLE: "WS_BLOCK_EMPTY_STATE_TITLE",
            EMPTY_STATE_DESCRIPTION: "WS_BLOCK_EMPTY_STATE_DESCRIPTION",
            EMPTY_STATE_TOOLTIP: "WS_BLOCK_EMPTY_STATE_TOOLTIP"
        };
        var a = ["0", "8", "16", "24", "32", "40", "48", "56", "64", "72", "80", "88", "96", "104", "112", "120", "128"];
        var l = function () {
            try {
                return Boolean(window.parent.ws)
            } catch (t) {
                return !1
            }
        };
        let c, d, h;
        l() ? (h = window.parent.document, window.parent.__site_cache__ && window.parent.__site_cache__.blockTemplates ? (c = window.parent.__site_cache__.blockTemplates.templatesCache, d = window.parent.__site_cache__.blockTemplates.templatesQue) : (c = new Map, d = new Map, window.parent.__site_cache__ = window.parent.__site_cache__ || {}, window.parent.__site_cache__.blockTemplates = {
            templatesCache: c,
            templatesQue: d
        })) : (h = document, c = new Map, d = new Map);
        var p = {
            get: function (t) {
                if (c.has(t)) return Promise.resolve(c.get(t));
                if (d.has(t)) return d.get(t);
                const e = fetch(t).then(e => e.text().then(e => {
                    if (c.has(t)) return c.get(t);
                    const n = h.createElement("template");
                    return n.innerHTML = e, c.set(t, n), d.delete(t), n
                }));
                return d.set(t, e), e
            }
        };
        var u = () => Boolean(window.previewMode), k = n(4);
        var b = function (t) {
            const e = document.documentElement.lang;
            return k[e] && k[e][t] ? k[e][t] : t
        };
        var w = function (t, e) {
            t.call(this, e)
        };
        const m = /\sslot=".+"/,
            g = /\s*\{([^{}]*)\}\s*(?:\{true\}|\{false\})\s*\{\s*(<[a-z][\s\S]*>)\s*\}\s*\{?([^{}]*)?\}?\s*$/,
            f = ["background-image", "background-position", "background-scale", "background-hidden", "overlay", "overlay-opacity", "filter", "blending-mode", "rounded-images", "overlay-section", "progressive-image", "transform-scale-factor", "safe-mode", "cover-constraints"];

        function _(t) {
            return t && t.trim() ? t.trim().split(" ") : []
        }

        function y(t) {
            const e = new CustomEvent("error");
            t.dispatchEvent(e)
        }

        function v(t) {
            return `data-ws-block-${t}-target`
        }

        const S = document.createElement("template");
        S.innerHTML = '\n<style>\n[hidden] {\n  display: none !important;\n}\n\n.ws-block-hidden-state,\n.ws-block-empty-state {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: center;\n  padding: 24px 16px;\n  padding-top: calc(var(--ws-shadow-top-padding, 0px) + 24px);\n  background-color: var(--ws-editor-gray-200);\n}\n\n.ws-block-hidden-state__icon,\n.ws-block-empty-state__icon {\n  margin: 0 17px;\n}\n\n.ws-block-hidden-state__title,\n.ws-block-empty-state__title {\n  font-family: var(--ws-editor-font-family);\n  font-style: normal;\n  line-height: 24px;\n  font-weight: 500;\n  font-size: 14px;\n  color: var(--ws-editor-gray-700);\n  white-space: nowrap;\n}\n\n.ws-block-hidden-state__description,\n.ws-block-empty-state__description {\n  font-family: var(--ws-editor-font-family);\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  color: var(--ws-editor-gray-700);\n  text-align: left;\n}\n\n.ws-block-hidden-state__description {\n    line-height: 20px;\n}\n\n.ws-block-empty-state__description {\n    line-height: 24px;\n}\n\n.ws-block-empty-state__container {\n    box-sizing: border-box;\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n    justify-content: center;\n    width: 100%;\n    max-width: var(--container-max-width);\n    padding-left: var(--grid-gutter-width-half);\n    padding-right: var(--grid-gutter-width-half);\n}\n\n.ws-block-empty-state__active-area {\n    width: 100%;\n    margin-top: 24px;\n    flex-grow: 1;\n    border: 1px dashed var(--ws-editor-gray-400);\n    border-radius: 2px;\n    box-sizing: border-box;\n    transition: all 175ms cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.ws-block-empty-state__active-area:hover {\n    border-color: transparent;\n    box-shadow: inset 0 0 0 2px var(--ws-editor-warning-800);\n    cursor: pointer;\n}\n\n.ws-block-empty-state__floating-action {\n    position:relative;\n    display: block;\n    width: 24px;\n    height: 24px;\n    margin: 28px auto;\n    background-color: var(--ws-editor-warning-700);\n    border-radius: 50%;\n    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.12);\n}\n\n.ws-block-empty-state__floating-action::before {\n    content: attr(data-tooltip);\n    position: absolute;\n    top: 50%;\n    left: 30px;\n    transform: translateY(-50%);\n    padding: 4px 8px;\n    font-family: var(--ws-editor-font-family);\n    font-size: 14px;\n    line-height: 1;\n    text-align: center;\n    white-space: nowrap;\n    color: var(--ws-editor-white);\n    background: #222;\n    border-radius: 4px;\n    z-index: 1001;\n    pointer-events: none;\n    cursor: pointer;\n    user-select: none;\n    opacity: 0;\n    transition: opacity 175ms cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.ws-block-empty-state__active-area:hover .ws-block-empty-state__floating-action::before {\n    opacity: 0.9;\n    pointer-events: auto;\n}\n\n.ws-touch-device\n.ws-block-empty-state__active-area:hover\n.ws-block-empty-state__floating-action::before {\n  opacity: 0;\n  pointer-events: none;\n}\n\n@media (max-width: 768px) {\n  .ws-block-hidden-state,\n  .ws-block-empty-state,\n  .ws-block-empty-state__container {\n    flex-direction: column;\n  }\n\n  .ws-block-hidden-state__icon,\n  .ws-block-empty-state__icon {\n    order: 0;\n    margin: 9px 0 0 0;\n  }\n\n  .ws-block-hidden-state__title,\n  .ws-block-empty-state__title {\n    order: 1;\n    margin: 13px 0 8px;\n    white-space: normal;\n  }\n\n  .ws-block-hidden-state__description,\n  .ws-block-empty-state__description {\n    order: 2;\n    text-align: center;\n  }\n\n  .ws-block-empty-state__active-area {\n    order: 3;\n  }\n}\n\n:host([surfaces*=\'ws-dark\']) .ws-block-hidden-state,\n:host([surfaces*=\'ws-dark\']) .ws-block-empty-state {\n  background-color: var(--ws-editor-gray-800);\n}\n\n:host([surfaces*=\'ws-dark\']) .ws-block-hidden-state__title,\n:host([surfaces*=\'ws-dark\']) .ws-block-empty-state__title,\n:host([surfaces*=\'ws-dark\']) .ws-block-hidden-state__description,\n:host([surfaces*=\'ws-dark\']) .ws-block-empty-state__description {\n  color: var(--ws-editor-gray-200);\n}\n\n:host([surfaces*=\'ws-dark\']) .ws-block-hidden-state__icon path,\n:host([surfaces*=\'ws-dark\']) .ws-block-empty-state__icon path  {\n  stroke: var(--ws-editor-gray-200);\n}\n\n</style>\n\n<div class="ws-block-hidden-state" hidden>\n  <span class="ws-block-hidden-state__title"></span>\n  <svg class="ws-block-hidden-state__icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n    <path d="M14.12 14.12C13.8454 14.4148 13.5141 14.6512 13.1462 14.8151C12.7782 14.9791 12.3809 15.0673 11.9781 15.0744C11.5753 15.0815 11.1752 15.0074 10.8016 14.8565C10.4281 14.7056 10.0887 14.4811 9.80385 14.1962C9.51897 13.9113 9.29439 13.572 9.14351 13.1984C8.99262 12.8249 8.91853 12.4247 8.92563 12.0219C8.93274 11.6191 9.02091 11.2219 9.18488 10.8539C9.34884 10.4859 9.58525 10.1547 9.88 9.88003M17.94 17.94C16.2306 19.243 14.1491 19.9649 12 20C5 20 1 12 1 12C2.24389 9.68192 3.96914 7.65663 6.06 6.06003L17.94 17.94ZM9.9 4.24002C10.5883 4.0789 11.2931 3.99836 12 4.00003C19 4.00003 23 12 23 12C22.393 13.1356 21.6691 14.2048 20.84 15.19L9.9 4.24002Z" stroke="#30373D" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>\n    <path d="M1 1L23 23" stroke="#30373D" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>\n  </svg>\n  <span class="ws-block-hidden-state__description"></span>\n</div>\n\n<div class="ws-block-empty-state" hidden>\n  <div class="ws-block-empty-state__container">\n    <span class="ws-block-empty-state__title"></span>\n    <svg class="ws-block-empty-state__icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n      <path d="M12.89 1.45015L20.89 5.45015C21.2233 5.61573 21.5037 5.87097 21.6998 6.18719C21.8959 6.50341 21.9999 6.86807 22 7.24015V16.7702C21.9999 17.1422 21.8959 17.5069 21.6998 17.8231C21.5037 18.1393 21.2233 18.3946 20.89 18.5602L12.89 22.5602C12.6122 22.6992 12.3058 22.7716 11.995 22.7716C11.6843 22.7716 11.3779 22.6992 11.1 22.5602L3.10005 18.5602C2.76718 18.3924 2.4878 18.135 2.29344 17.817C2.09907 17.4989 1.99745 17.1329 2.00005 16.7601V7.24015C2.00025 6.86807 2.10424 6.50341 2.30033 6.18719C2.49642 5.87097 2.77684 5.61573 3.11005 5.45015L11.11 1.45015C11.3866 1.31273 11.6912 1.24121 12 1.24121C12.3089 1.24121 12.6135 1.31273 12.89 1.45015V1.45015Z" stroke="#30373D" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>\n      <path d="M2.31982 6.16016L11.9998 11.0002L21.6798 6.16016" stroke="#30373D" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>\n      <path d="M12 22.76V11" stroke="#30373D" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>\n    </svg>\n    <span class="ws-block-empty-state__description"></span>\n    <div class="ws-block-empty-state__active-area">\n      <div class="ws-block-empty-state__floating-action">\n        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n          <path d="M12.8002 6.75C12.8002 6.33579 12.442 6 12.0002 6C11.5584 6 11.2002 6.33579 11.2002 6.75V17.25C11.2002 17.6642 11.5584 18 12.0002 18C12.442 18 12.8002 17.6642 12.8002 17.25V6.75Z" fill="white" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>\n          <path d="M17.25 11.2002H6.75C6.33579 11.2002 6 11.5584 6 12.0002C6 12.442 6.33579 12.8002 6.75 12.8002H17.25C17.6642 12.8002 18 12.442 18 12.0002C18 11.5584 17.6642 11.2002 17.25 11.2002Z" fill="white" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>\n        </svg>\n      </div>\n    </div>\n  </div>\n</div>\n\n<slot></slot>\n';

        class T extends HTMLElement {
            constructor() {
                super(), this.isTouchDevice = i.a.mobile || i.a.tablet, this.updateStrategies = {
                    surfaces: this.updateSurfaces.bind(this),
                    "hidden-state": this.changeHiddenState.bind(this)
                }, this.handlers = {onEmptyStateClick: w.bind(this, this.onEmptyStateClick)};
                this.attachShadow({mode: "open"}).appendChild(document.importNode(S.content, !0)), this.IS_READY = !1, this.PROVIDED_SLOTS = [], this.HIDDEN_CHILDREN = [], this.injectedTranslations = window[r.ROOT_OBJECT] || {}, this.proxyAttributeValue = this.proxyAttributeValue.bind(this), this.applyUIEffects = this.applyUIEffects.bind(this), this.trackProvidedSlots = this.trackProvidedSlots.bind(this), this.trackHiddenChildren = this.trackHiddenChildren.bind(this), this.refreshObservedSlots = this.refreshObservedSlots.bind(this), this.clearObservedSlots = this.clearObservedSlots.bind(this)
            }

            static get observedAttributes() {
                return ["surfaces", "hidden-state", ...f]
            }

            get surfaces() {
                return _(this.getAttribute("surfaces"))
            }

            get src() {
                return this.getAttribute("src")
            }

            set src(t) {
                this.setAttribute("src", t)
            }

            get ready() {
                return this.IS_READY
            }

            get hiddenState() {
                return this.hasAttribute("hidden-state")
            }

            set hiddenState(t) {
                t ? this.setAttribute("hidden-state", "") : this.removeAttribute("hidden-state")
            }

            get providedSlots() {
                return [...this.PROVIDED_SLOTS]
            }

            get hasProvidedSlots() {
                return Boolean(this.PROVIDED_SLOTS.length)
            }

            get hiddenChildren() {
                return [...this.HIDDEN_CHILDREN]
            }

            get hasHiddenChildren() {
                return Boolean(this.HIDDEN_CHILDREN.length)
            }

            connectedCallback() {
                this.isRendered || this.render()
            }

            disconnectedCallback() {
                this.customBlockObserver && (this.customBlockObserver.disconnect(), this.removeEventListener("click", this.handlers.onEmptyStateClick))
            }

            attributeChangedCallback(t, e, n) {
                const o = this.getStrategy(t);
                o ? o(e, n) : this.proxyAttributeValue(t, e, n)
            }

            isContentChanged() {
                this.trackProvidedSlots(), this.trackHiddenChildren(), this.refreshObservedSlots(), this.applyUIEffects()
            }

            getStrategy(t) {
                return this.updateStrategies[t]
            }

            getWhiteSpaceTopValue() {
                const t = this.querySelector(s.section);
                return parseFloat(window.getComputedStyle(t).paddingTop)
            }

            getWhiteSpaceBottomValue() {
                const t = this.querySelector(s.section);
                return parseFloat(window.getComputedStyle(t).paddingBottom)
            }

            getCurrentWhiteSpaceBreakdowns() {
                return a.map(t => {
                    let e;
                    return e = "0" === t ? 0 : parseFloat(getComputedStyle(this).getPropertyValue("--ws-white-space-" + t)), [t, e]
                })
            }

            querySelectorAllFromThisBlock(t, e = this) {
                return [...e.querySelectorAll(t)].filter(t => {
                    const e = t.closest(s.block);
                    return !e || e === this
                })
            }

            getTargetElementForAttribute(t) {
                return this.querySelectorAllFromThisBlock(`[${v(t)}]`)
            }

            getTranslation(t) {
                return this.injectedTranslations[t] || t
            }

            changeHiddenState(t, e) {
                null !== e ? (this.shadowRoot.querySelector(s.hiddenState).hidden = !1, this.shadowRoot.querySelector(s.hiddenStateTitle).innerText = b("Hidden Block"), this.shadowRoot.querySelector(s.hiddenStateDescription).innerText = b("This block is hidden. Press on 'Hide/Show' trigger on the control pane to activate it."), this.shadowRoot.querySelector("slot").hidden = !0) : (this.shadowRoot.querySelector(s.hiddenState).hidden = !0, this.shadowRoot.querySelector("slot").hidden = !1)
            }

            initCustomBlockHandler() {
                if (!this.isBlockCustom() || u()) return;
                const t = this.querySelector(s.customContent);
                this.customBlockObserver = new MutationObserver(([{target: t}]) => {
                    this.handleEmptyState(t)
                }), this.customBlockObserver.observe(t, {childList: !0}), this.handleEmptyState(t), this.shadowRoot.querySelector(s.emptyStateActiveArea).addEventListener("click", this.handlers.onEmptyStateClick)
            }

            isBlockCustom() {
                return this.hasAttribute("custom")
            }

            handleEmptyState(t) {
                t && t.hasChildNodes() ? this.hideEmptyState() : this.showEmptyState()
            }

            showEmptyState() {
                const {EMPTY_STATE_TITLE: t, EMPTY_STATE_DESCRIPTION: e, EMPTY_STATE_TOOLTIP: n} = r,
                    o = this.getTranslation(t), i = this.getTranslation(e), a = this.getTranslation(n),
                    l = this.shadowRoot.querySelector(s.emptyState);
                this.isTouchDevice && l.classList.add("ws-touch-device"), l.hidden = !1, this.shadowRoot.querySelector(s.emptyStateTitle).innerText = o, this.shadowRoot.querySelector(s.emptyStateDescription).innerText = i, this.shadowRoot.querySelector(s.emptyStateAction).setAttribute("data-tooltip", a), this.setAttribute("empty", "")
            }

            hideEmptyState() {
                this.shadowRoot.querySelector(s.emptyState).hidden = !0, this.removeAttribute("empty")
            }

            onEmptyStateClick() {
                !function (t) {
                    const e = new CustomEvent("ws:addWidget", {bubbles: !0});
                    t.dispatchEvent(e)
                }(this.querySelector(s.customContent))
            }

            proxyAttributeValue(t, e, n) {
                const o = v(t);
                this.querySelectorAllFromThisBlock(`[${o}]`).forEach(e => {
                    const i = e.getAttribute(o) || t;
                    null === n ? e.removeAttribute(i) : e.setAttribute(i, n)
                })
            }

            updateSurfaces(t) {
                const e = _(t), n = this.surfaces;
                this.querySelectorAllFromThisBlock(`[${s.surfaceAttribute}]`).forEach(t => {
                    const o = parseInt(t.getAttribute(s.surfaceAttribute), 10);
                    if (0 !== o && !o) return;
                    const i = e[o], r = n[o];
                    i && t.classList.remove(i, s.surface), r && (t.classList.add(r, s.surface), function (t, e) {
                        const n = new CustomEvent("ws:surfaceChange", {bubbles: !0, detail: {surface: e}});
                        t.dispatchEvent(n)
                    }(this, r))
                })
            }

            findChildSlots() {
                return Array.from(this.childNodes).filter(t => {
                    switch (t.nodeType) {
                        case Node.ELEMENT_NODE:
                            return t.hasAttribute("slot");
                        case Node.COMMENT_NODE:
                            return m.test(t.nodeValue);
                        default:
                            return !1
                    }
                })
            }

            replaceTemplateSlotsByContent(t) {
                const e = this.querySelectorAllFromThisBlock("slot", t), n = this.findChildSlots();
                e.forEach(t => {
                    const e = t.getAttribute("name"), o = new RegExp(`\\sslot="${e}"`), i = n.find(t => {
                        switch (t.nodeType) {
                            case Node.ELEMENT_NODE:
                                return t.matches(`[slot="${e}"]`);
                            case Node.COMMENT_NODE:
                                return o.test(t.nodeValue);
                            default:
                                return !1
                        }
                    });
                    i && t.parentNode.replaceChild(i, t)
                })
            }

            applyUIEffects() {
                f.forEach(t => {
                    this.proxyAttributeValue(t, null, this.getAttribute(t))
                })
            }

            trackProvidedSlots() {
                if (!this.firstElementChild) return;
                const t = [];
                this.querySelectorAllFromThisBlock("[slot]").forEach(e => {
                    const n = e.getAttribute("slot");
                    n && n.trim() && t.push(n)
                }), this.firstElementChild.setAttribute("data-ws-slots", t.join(" ")), this.PROVIDED_SLOTS = t
            }

            trackHiddenChildren() {
                if (!this.firstElementChild) return;
                const t = document.createTreeWalker(this, NodeFilter.SHOW_COMMENT), e = [];
                let n = t.nextNode();
                for (; n;) {
                    const o = n.nodeValue.match(g);
                    o && !e.includes(o[3]) && e.push(o[3]), n = t.nextNode()
                }
                this.firstElementChild.setAttribute("data-ws-hidden-children", e.join(" ")), this.HIDDEN_CHILDREN = e
            }

            refreshObservedSlots() {
                this.firstElementChild && this.firstElementChild.setAttribute("data-ws-observed-slots", this.providedSlots.join(" "))
            }

            clearObservedSlots() {
                this.firstElementChild && this.firstElementChild.removeAttribute("data-ws-observed-slots")
            }

            render() {
                if (!this.src) return this.IS_READY = !0, void y(this);
                this.isRendered = !0, p.get(this.src).then(t => {
                    const e = document.importNode(t.content, !0);
                    this.replaceTemplateSlotsByContent(e), this.innerHTML = "", this.appendChild(e)
                }).then(this.applyUIEffects).then(() => this.updateSurfaces()).then(() => this.changeHiddenState(null, this.getAttribute("hidden-state"))).then(() => this.initCustomBlockHandler()).then(this.trackProvidedSlots).then(this.trackHiddenChildren).then(() => {
                    this.IS_READY = !0
                }).then(() => function (t) {
                    const e = new CustomEvent("ready");
                    t.dispatchEvent(e)
                }(this)).catch(() => y(this))
            }
        }

        l() && customElements.define("ws-block", T)
    }
});
;!function (n) {
    function e(e) {
        for (var a, i, l = e[0], r = e[1], d = e[2], h = 0, p = []; h < l.length; h++) i = l[h], Object.prototype.hasOwnProperty.call(o, i) && o[i] && p.push(o[i][0]), o[i] = 0;
        for (a in r) Object.prototype.hasOwnProperty.call(r, a) && (n[a] = r[a]);
        for (c && c(e); p.length;) p.shift()();
        return s.push.apply(s, d || []), t()
    }

    function t() {
        for (var n, e = 0; e < s.length; e++) {
            for (var t = s[e], a = !0, l = 1; l < t.length; l++) {
                var r = t[l];
                0 !== o[r] && (a = !1)
            }
            a && (s.splice(e--, 1), n = i(i.s = t[0]))
        }
        return n
    }

    var a = {}, o = {13: 0}, s = [];

    function i(e) {
        if (a[e]) return a[e].exports;
        var t = a[e] = {i: e, l: !1, exports: {}};
        return n[e].call(t.exports, t, t.exports, i), t.l = !0, t.exports
    }

    i.m = n, i.c = a, i.d = function (n, e, t) {
        i.o(n, e) || Object.defineProperty(n, e, {enumerable: !0, get: t})
    }, i.r = function (n) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(n, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(n, "__esModule", {value: !0})
    }, i.t = function (n, e) {
        if (1 & e && (n = i(n)), 8 & e) return n;
        if (4 & e && "object" == typeof n && n && n.__esModule) return n;
        var t = Object.create(null);
        if (i.r(t), Object.defineProperty(t, "default", {
            enumerable: !0,
            value: n
        }), 2 & e && "string" != typeof n) for (var a in n) i.d(t, a, function (e) {
            return n[e]
        }.bind(null, a));
        return t
    }, i.n = function (n) {
        var e = n && n.__esModule ? function () {
            return n.default
        } : function () {
            return n
        };
        return i.d(e, "a", e), e
    }, i.o = function (n, e) {
        return Object.prototype.hasOwnProperty.call(n, e)
    }, i.p = "";
    var l = window.webpackJsonp = window.webpackJsonp || [], r = l.push.bind(l);
    l.push = e, l = l.slice();
    for (var d = 0; d < l.length; d++) e(l[d]);
    var c = r;
    s.push([33, 0]), t()
}({
    33: function (n, e, t) {
        n.exports = t(52)
    }, 52: function (n, e, t) {
        "use strict";
        t.r(e);
        var a = t(1), o = t.n(a);
        var s = function (n, e) {
            n.call(this, e)
        };
        var i = function () {
            try {
                return Boolean(window.parent.ws)
            } catch (n) {
                return !1
            }
        };
        var l = () => Boolean(window.previewMode);
        var r = function (n) {
            window.ShadyCSS && window.ShadyCSS.prepareTemplate(n, "ws-header")
        };
        const d = new (t(0).a)(n => {
            n.forEach(({target: n}) => {
                n.applyOverlayStyle(n.offsetHeight)
            })
        });
        var c = function (n) {
            return {
                observe() {
                    d.observe(n)
                }, unobserve() {
                    d.unobserve(n)
                }
            }
        }, h = "stick-up", p = "is-stuck", u = "stick-up-clone", g = ".header-bottom-panel", v = 10;
        var m = function (n) {
            const e = n.shadowRoot.querySelector(g);
            let t;
            return n.isStuck ? t = e.clientHeight : (n.setAttribute(p, ""), t = e.clientHeight, n.removeAttribute(p)), t
        };
        var w = (n, e) => {
            if (n.length >= 1) {
                const t = n[0].getAttribute("slot");
                return e.includes(t)
            }
            return !1
        };
        const y = (n, e, t) => {
            n.setAttribute("name", t + "-hidden"), e.setAttribute("name", "" + t)
        };
        var b = (n, e, t) => {
            const a = n.querySelector(`[name^="${e}"][position="1"]`),
                o = n.querySelector(`[name^="${e}"][position="2"]`);
            if (t) {
                if (a.getAttribute("name").includes("hidden")) return;
                y(a, o, e)
            } else {
                // if (o.getAttribute("name").includes("hidden")) return;
                // y(o, a, e)
            }
        };
        var f = function () {
            const n = document.documentElement, e = n.getAttribute("data-locale");
            return n.hasAttribute("data-locale") ? e : null
        };
        var S = n => {
            const {pathname: e} = window.location;
            return !n || !e.startsWith(`/${n}/`)
        };
        var x = function (n, e) {
            const t = n.querySelector(".logo-wrapper");
            t && (t.href = `/${e}/`)
        }, _ = "overlay-section", L = "overlay-opacity", O = "--ws-overlay-opacity";
        const k = document.createElement("template");
        k.innerHTML = `\n  <style>\n    :host([${h}][${p}]) .header-bottom-panel {\n      background-color: hsl(var(--ws-surface-background-color));\n      box-shadow: var(--ws-shadow-effect-3);\n    }\n\n    :host([${h}][${p}]) .header-bottom-panel .container {\n      padding-top: var(--ws-header-stick-up-bottom-panel-indent, 32px);\n      padding-bottom: var(--ws-header-stick-up-bottom-panel-indent, 32px);\n    }\n\n    :host([${h}][${p}]) ${g} {\n      position: fixed;\n      top: 0;\n      right: 0;\n      left: 0;\n      z-index: 1;\n\n      animation-duration: var(--stick-up-duration, 0.2s);\n      animation-timing-function: var(--stick-up-timing-function, cubic-bezier(0.4, 0, 0.2, 1));\n      animation-delay: var(--stick-up-delay, 0s);\n      animation-name: slideIn;\n    }\n\n    [${u}] {\n      background-color: hsl(var(--ws-surface-background-color));\n    }\n\n    :host([${_}]) [${u}] {\n      background-color: transparent;\n    }\n\n    @keyframes slideIn {\n      from {\n        transform: translateY(-100%);\n      }\n\n      to {\n        transform: translateY(0%);\n      }\n    }\n  </style>\n`;
        var A = k, E = new Map([["layout-sm", 576], ["layout-md", 768], ["layout-lg", 992], ["layout-xl", 1200]]);
        const C = document.createElement("template");
        C.innerHTML = `\n<style>\n  .ws-nav__inner {\n    position: relative;\n    top: 0;\n    left: 0;\n    right: 0;\n  }\n\n  .ws-nav__menu {\n    position: fixed;\n    top: 0;\n    bottom: 0;\n    right: 0;\n    z-index: 1;\n    display: flex;\n    flex-direction: column;\n    width: var(--ws-nav-sidebar-width, 270px);\n    min-height: 85vh;\n    transform: translateX(100%);\n    visibility: hidden;\n    opacity: 0;\n    padding: var(--ws-nav-sidebar-padding-top, 60px) var(--ws-nav-sidebar-padding-horizontal, 16px) var(--ws-nav-sidebar-padding-bottom, 32px);\n    background-color: hsl(var(--ws-nav-sidebar-background, var(--ws-surface-background-color)));\n  }\n\n  .ws-nav__menu::before {\n    content: '';\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    right: 100%;\n    width: 100vw;\n    background-color: var(--ws-nav-sidebar-overlay-color, #15171A);\n    opacity: var(--ws-nav-sidebar-overlay-opacity, 0.4);\n    transition: none;\n  }\n\n  .ws-nav__menu[visible] {\n    transition: transform var(--transition-material-standard, 0.2s cubic-bezier(0.4, 0, 0.2, 1));\n    opacity: 1;\n    visibility: visible;\n    transform: translateX(0);\n  }\n\n  .ws-nav--layout-xl .ws-nav__menu {\n    position: static;\n    min-height: auto;\n    display: flex;\n    flex: 1;\n    flex-direction: row;\n    align-items: center;\n    justify-content: flex-end;\n    width: auto;\n    padding: 0;\n    background-color: transparent;\n  }\n\n  .ws-nav--layout-xl .ws-nav__menu::before {\n    display: none;\n  }\n\n  .ws-nav--layout-xl .ws-nav__menu[visible] {\n    transition: none;\n  }\n\n  .ws-nav__toggle {\n    display: block;\n    cursor: pointer;\n    width: var(--ws-nav-toggle-width, 24px);\n    height: var(--ws-nav-toggle-height, 18px);\n    position: absolute;\n    right: var(--ws-nav-toggle-right-position, 16px);\n    top: 50%;\n    transform: translateY(-50%);\n    z-index: 2;\n  }\n\n  .ws-nav__toggle[active] {\n    position: fixed;\n    top: calc(var(--ws-nav-sidebar-padding-top, 60px) / 2);\n  }\n\n  .ws-nav__toggle-inner,\n  .ws-nav__toggle-inner::before,\n  .ws-nav__toggle-inner::after {\n    content: '';\n    position: absolute;\n    height: var(--ws-nav-toogle-line-height);\n    left: 0;\n    width: 100%;\n    background-color: hsla(var(--ws-nav-toggle-color, var(--ws-surface-m-nav-link-color)), var(--ws-nav-toggle-color-opacity, var(--ws-surface-m-nav-link-color-opacity)));\n  }\n\n  .ws-nav__toggle[active] .ws-nav__toggle-inner,\n  .ws-nav__toggle[active] .ws-nav__toggle-inner::before,\n  .ws-nav__toggle[active] .ws-nav__toggle-inner::after {\n    background-color: hsla(var(--ws-nav-toggle-color-active, var(--ws-surface-m-nav-link-color)), var(--ws-nav-toggle-color-active-opacity, var(--ws-surface-m-nav-link-color-opacity)));\n  }\n\n  .ws-nav__toggle-inner {\n    top: 50%;\n    margin-top: calc(var(--ws-nav-toogle-line-height) / 2 * -1);\n  }\n\n  .ws-nav__toggle-inner::before {\n    top: calc(var(--ws-nav-toggle-height, 18px) / 2 + var(--ws-nav-toogle-line-height) * -1);\n  }\n\n  .ws-nav__toggle-inner::after {\n    bottom: calc(var(--ws-nav-toggle-height, 18px) / 2 + var(--ws-nav-toogle-line-height) * -1);\n  }\n\n  .ws-nav__toggle[active] .ws-nav__toggle-inner {\n    transform: rotate(45deg);\n  }\n\n  .ws-nav__toggle[active] .ws-nav__toggle-inner::after {\n    top: 0;\n    opacity: 0;\n  }\n\n  .ws-nav__toggle[active] .ws-nav__toggle-inner::before {\n    top: 0;\n    transform: rotate(90deg);\n  }\n\n  .ws-nav__toggle[disconnected] {\n    display: none;\n  }\n\n  @media (min-width: ${E.get("layout-xl")}px) {\n    [toggle="#ws-nav-collapsed-menu"] {\n      display: none;\n    }\n  }\n</style>\n`;
        var T = C;
        const U = document.createElement("template");
        U.innerHTML = `\n<style>\n  *,\n  *::before,\n  *::after {\n    box-sizing: border-box;\n  }\n\n  :host {\n    display: block;\n    text-align: left;\n  }\n\n  slot {\n    display: block;\n  }\n\n  [hidden],\n  slot[name$="hidden"] {\n    display: none !important;\n  }\n\n  .container {\n    width: 100%;\n    padding-right: var(--container-padding-right, 15px);\n    padding-left: var(--container-padding-left, 15px);\n    margin-right: auto;\n    margin-left: auto;\n  }\n\n  .header-top-panel {\n    background-color: hsl(var(--ws-surface-dark-2-background-color));\n  }\n\n  .header-top-panel .container {\n    padding-top: var(--ws-header-top-panel-indent, 16px);\n    padding-bottom: var(--ws-header-top-panel-indent, 16px);\n  }\n\n  .header-bottom-panel {\n    display: block;\n    background-color: hsl(var(--ws-surface-background-color));\n    transition: background-color 0.15s;\n  }\n\n  :host([${_}][${L}]) .header-bottom-panel {\n    background-color: hsla(var(--ws-surface-background-color), var(${O}, 0));\n  }\n\n  .header-bottom-panel .container {\n    display: flex;\n    align-items: center;\n    padding-top: var(--ws-header-bottom-panel-indent, 32px);\n    padding-bottom: var(--ws-header-bottom-panel-indent, 32px);\n    min-height: var(--ws-header-bottom-panel-min-height, 56px);\n  }\n\n  .logo-wrapper {\n    display: flex;\n    max-width: var(--ws-m-logo-wrapper-max-width);\n    margin-right: var(--ws-header-elements-indent, 49px);\n    text-decoration: none;\n  }\n\n  [name="site-name"] {\n    min-width: var(--ws-m-site-name-min-width);\n    word-wrap: break-word;\n  }\n\n  [name="business-logo"]:not([hidden]) + [name="site-name"] {\n    display: block;\n    align-self: center;\n  }\n\n  [name="business-logo"]:not([hidden]) + [name="site-name"]:not([hidden]) {\n    margin-left: var(--ws-header-logo-wrapper-elements-indent, 16px);\n  }\n\n  [out-of-screen] [name="business-social-profiles"]:not([hidden]) + * {\n    margin-left: inherit;\n    margin-top: var(--ws-header-top-panel-elements-indent, 10px);\n  }\n\n  [name="navigation"] {\n    flex: 1;\n    display: grid;\n  }\n\n  @media (min-width: ${E.get("layout-sm")}px) {\n    .container {\n      max-width: var(--container-max-width-sm, 540px);\n    }\n  }\n\n  @media (min-width: ${E.get("layout-md")}px) {\n    .container {\n      max-width: var(--container-max-width-md, 720px);\n    }\n  }\n\n  @media (min-width: ${E.get("layout-lg")}px) {\n    .container {\n      max-width: var(--container-max-width-lg, 960px);\n    }\n  }\n\n  @media (max-width: ${E.get("layout-xl") - 1}px) {\n    .header-bottom-panel [name="navigation"] ~ slot:not([hidden]) {\n      margin-top: var(--ws-header-buttons-indent, 16px);\n    }\n\n    [name="navigation"] {\n      min-height: 60px;\n    }\n\n    ::slotted([slot="navigation"]) {\n      overflow-y: auto;\n    }\n\n    ::slotted(ws-button) {\n      --ws-button-padding-horizontal: 20px;\n    }\n  }\n\n  @media (min-width: ${E.get("layout-xl")}px) {\n    .container {\n      max-width: var(--container-max-width-xl, 1170px);\n    }\n\n    .header-top-panel .container {\n      min-height: var(--ws-header-top-panel-min-height, 72px);\n    }\n\n    :host(:not([${p}])) .header-bottom-panel .container {\n      min-height: var(--ws-header-bottom-panel-min-height, 112px);\n    }\n\n    :host([layout="empty"]) .wrapper {\n      min-height: var(--ws-header-min-height, 56px);\n      background-color: hsl(var(--ws-surface-background-color));\n    }\n\n    [name="navigation"]:not([hidden]) ~ [name$="-button"]:not([hidden]) {\n      margin-left: var(--ws-header-elements-indent, 49px);\n    }\n\n    [name$="-button"]:not([hidden]) + [name$="-button"]:not([hidden]) {\n      margin-left: var(--ws-header-buttons-indent, 16px);\n    }\n\n    ::slotted([slot="navigation"]) {\n      text-align: right;\n    }\n  }\n</style>\n`;
        var N = {stickUpStyles: A, wsNav: T, layouts: U}, R = "ws-header", M = "ws-defined", $ = "layout", P = {
            SOCIALS: "business-social-profiles",
            PHONE: "business-phone",
            LOGO: "business-logo",
            SITE_NAME: "site-name",
            NAVIGATION: "navigation",
            PRIMARY_BUTTON: "primary-button",
            SECONDARY_BUTTON: "secondary-button",
            LANGUAGE_SELECTOR: "language-selector"
        };
        const H = document.createElement("template");
        H.innerHTML = `\n<style>\n  :host([layout="1"]) .header-top-panel .container {\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n    gap: 10px;\n    justify-content: space-between;\n  }\n\n  :host([layout="1"]) .header-top-panel ::slotted([slot='language-selector']) {\n    --ws-language-selector-title: none;\n  }\n\n  :host([layout="1"]) .header-top-panel [name="business-phone"] {\n    margin-left: auto;\n  }\n\n  :host([layout="1"]) .header-top-panel [name="business-phone"][hidden] + [name="language-selector"] {\n    margin-left: auto;\n  }\n\n  @media (max-width: ${E.get("layout-xl") - 1}px) {\n\n    :host([layout="1"]) .header-top-panel [name="business-phone"] {\n      margin-right: auto;\n      margin-left: 0;\n    }\n\n    :host([layout="1"]) .header-top-panel [name="language-selector"] {\n      display: flex;\n    }\n\n    @supports not (gap: 10px) {\n      :host([layout="1"]) [name="business-social-profiles"] {\n        margin-right: 15px;\n      }\n\n      :host([layout="1"]) .header-top-panel [name] {\n        padding-top: 5px;\n        padding-bottom: 5px;\n      }\n    }\n  }\n\n  @media (min-width: ${E.get("layout-xl")}px) {\n    :host([layout="1"]) .header-top-panel .container {\n      justify-content: flex-end;\n    }\n\n    /* On the desktop version, if business-phone slot off\n    we need to move the business-social-profiles to the right. */\n    :host([layout="1"]) [name="business-phone"],\n    :host([layout="1"]) .header-top-panel [name="language-selector"] {\n      margin-left: auto;\n    }\n\n    :host([layout="1"]) [name="business-phone"]:not([hidden]) + [name="language-selector"]:not([hidden]) {\n      margin-left: var(--ws-header-elements-indent, 49px);\n    }\n  }\n</style>\n<ws-nav class="ws-nav" layout-xl="ws-nav--layout-xl" editable>\n  <div class="header-top-panel">\n    <div class="container">\n      <slot name="business-social-profiles" position="1"></slot>\n      <slot name="business-phone"></slot>\n      <slot name="language-selector"></slot>\n    </div>\n  </div>\n  <ws-nav-content class="header-bottom-panel">\n    <div class="ws-nav__inner">\n      <div class="container">\n        <a href="/" class="logo-wrapper">\n          <slot name="business-logo"></slot>\n          <slot name="site-name"></slot>\n        </a>\n        <ws-nav-toggle toggle="#ws-nav-collapsed-menu" on="click" disconnect-when="layout-xl" class="ws-nav__toggle" group-id="group-1">\n          <span class="ws-nav__toggle-inner"></span>\n        </ws-nav-toggle>\n        <ws-nav-collapse id="ws-nav-collapsed-menu" class="ws-nav__menu" disable-body-scroll="true">\n          <slot name="navigation"></slot>\n          <slot name="primary-button"></slot>\n          <slot name="secondary-button"></slot>\n          <slot name="business-social-profiles" position="2"></slot>\n        </ws-nav-collapse>\n      </div>\n    </div>\n  </ws-nav-content>\n</ws-nav>\n`, r(H);
        var Y = H;
        const G = document.createElement("template");
        G.innerHTML = '\n<ws-nav class="ws-nav" layout-xl="ws-nav--layout-xl" editable>\n  <ws-nav-content class="header-bottom-panel">\n    <div class="ws-nav__inner">\n      <div class="container">\n        <a href="/" class="logo-wrapper">\n          <slot name="business-logo"></slot>\n          <slot name="site-name"></slot>\n        </a>\n        <ws-nav-toggle toggle="#ws-nav-collapsed-menu" on="click" disconnect-when="layout-xl" class="ws-nav__toggle" group-id="group-1">\n          <span class="ws-nav__toggle-inner"></span>\n        </ws-nav-toggle>\n        <ws-nav-collapse id="ws-nav-collapsed-menu" class="ws-nav__menu" disable-body-scroll="true">\n          <slot name="navigation"></slot>\n          <slot name="primary-button"></slot>\n          <slot name="secondary-button"></slot>\n        </ws-nav-collapse>\n      </div>\n    </div>\n  </ws-nav-content>\n</ws-nav>\n';
        var I = G;
        const z = document.createElement("template");
        z.innerHTML = `\n<style>\n  :host([layout="3"]) ::slotted([slot='language-selector']) {\n    --ws-language-selector-title: none;\n  }\n\n  :host([layout="3"]) .header-top-panel .container {\n    display: flex;\n    justify-content: flex-end;\n  }\n\n  @media (min-width: ${E.get("layout-xl")}px) {\n    /* On the desktop version we need left indent for business-phone slot\n     we can't add [name="navigation"]:not([hidden]) + *\n     because we have .header-buttons wrapper after navigation slot in 1st and 2nd layouts */\n    :host([layout="3"]) [name="navigation"]:not([hidden]) ~ slot:not([hidden]) {\n      margin-left: var(--ws-header-elements-indent, 49px);\n    }\n  }\n</style>\n<ws-nav class="ws-nav" layout-xl="ws-nav--layout-xl" editable>\n  <div class="header-top-panel" hidden>\n    <div class="container">\n      <slot name="language-selector" position="2"></slot>\n    </div>\n  </div>\n  <ws-nav-content class="header-bottom-panel">\n    <div class="ws-nav__inner">\n      <div class="container">\n        <a href="/" class="logo-wrapper">\n          <slot name="business-logo"></slot>\n          <slot name="site-name"></slot>\n        </a>\n        <ws-nav-toggle toggle="#ws-nav-collapsed-menu" on="click" disconnect-when="layout-xl" class="ws-nav__toggle" group-id="group-1">\n          <span class="ws-nav__toggle-inner"></span>\n        </ws-nav-toggle>\n        <ws-nav-collapse id="ws-nav-collapsed-menu" class="ws-nav__menu" disable-body-scroll="true">\n          <slot name="navigation"></slot>\n          <slot name="business-social-profiles"></slot>\n          <slot name="business-phone"></slot>\n          <slot name="language-selector" position="1"></slot>\n        </ws-nav-collapse>\n      </div>\n    </div>\n  </ws-nav-content>\n</ws-nav>\n`, r(z);
        var q = z;
        const j = document.createElement("template");
        j.innerHTML = `\n<style>\n  @media (min-width: ${E.get("layout-xl")}px) {\n    :host([layout="4"]) ::slotted([slot="navigation"]) {\n      text-align: center;\n    }\n  }\n</style>\n<ws-nav class="ws-nav" layout-xl="ws-nav--layout-xl" editable>\n  <ws-nav-content class="header-bottom-panel">\n    <div class="ws-nav__inner">\n      <div class="container">\n        <ws-nav-toggle toggle="#ws-nav-collapsed-menu" on="click" disconnect-when="layout-xl" class="ws-nav__toggle" group-id="group-1">\n          <span class="ws-nav__toggle-inner"></span>\n        </ws-nav-toggle>\n        <ws-nav-collapse id="ws-nav-collapsed-menu" class="ws-nav__menu" disable-body-scroll="true">\n          <slot name="navigation"></slot>\n        </ws-nav-collapse>\n      </div>\n    </div>\n  </ws-nav-content>\n</ws-nav>\n`, r(j);
        var B = j;
        const V = document.createElement("template");
        V.innerHTML = `\n<style>\n  :host([layout="5"]) .header-bottom-panel .container {\n    display: grid;\n    grid-template-columns: 1fr auto;\n    gap: 10px 15px;\n  }\n\n  :host([layout="5"]) [name="business-phone"] {\n    grid-column: 1;\n  }\n\n  :host([layout="5"]) [name="language-selector"] {\n    grid-row: 1;\n    grid-column: 2;\n  }\n\n  :host([layout="5"]) ::slotted([slot='language-selector']) {\n    --ws-language-selector-title: none;\n  }\n\n  @media (min-width: ${E.get("layout-sm")}px) {\n    :host([layout="5"]) .header-bottom-panel .container {\n      display: flex;\n      justify-content: space-between;\n    }\n\n    :host([layout="5"]) [name="business-social-profiles"] {\n      margin-right: var(--ws-header-elements-indent, 49px);\n    }\n\n    :host([layout="5"]) [name="business-phone"],\n    :host([layout="5"]) [name="language-selector"] {\n      margin-left: auto;\n    }\n\n    :host([layout="5"]) [name="business-phone"]:not([hidden]) + [name="language-selector"]:not([hidden]) {\n      margin-left: var(--ws-header-elements-indent, 49px);\n    }\n  }\n</style>\n<div class="header-bottom-panel">\n  <div class="container">\n    <slot name="business-social-profiles"></slot>\n    <slot name="business-phone"></slot>\n    <slot name="language-selector"></slot>\n  </div>\n</div>\n`, r(V);
        var D = {LAYOUT_1: Y, LAYOUT_2: I, LAYOUT_3: q, LAYOUT_4: B, LAYOUT_5: V},
            J = [{name: "1", template: D.LAYOUT_1, disabledSlots: []}, {
                name: "2",
                template: D.LAYOUT_2,
                disabledSlots: [P.SOCIALS, P.PHONE, P.LANGUAGE_SELECTOR]
            }, {
                name: "3",
                template: D.LAYOUT_3,
                disabledSlots: [P.PRIMARY_BUTTON, P.SECONDARY_BUTTON, P.SOCIALS, P.LANGUAGE_SELECTOR]
            }, {
                name: "3",
                template: D.LAYOUT_3,
                disabledSlots: [P.PRIMARY_BUTTON, P.SECONDARY_BUTTON, P.PHONE, P.LANGUAGE_SELECTOR]
            }, {
                name: "3",
                template: D.LAYOUT_3,
                disabledSlots: [P.PRIMARY_BUTTON, P.SECONDARY_BUTTON, P.SOCIALS, P.PHONE]
            }, {
                name: "4",
                template: D.LAYOUT_4,
                disabledSlots: [P.LOGO, P.SITE_NAME, P.PRIMARY_BUTTON, P.SECONDARY_BUTTON, P.SOCIALS, P.PHONE, P.LANGUAGE_SELECTOR]
            }, {
                name: "5",
                template: D.LAYOUT_5,
                disabledSlots: [P.LOGO, P.SITE_NAME, P.PRIMARY_BUTTON, P.SECONDARY_BUTTON, P.NAVIGATION]
            }];
        const X = o.a.edge, W = Object.values(P), F = E.get("layout-xl") - 1, K = new MutationObserver(n => {
            n.forEach(n => {
                const {addedNodes: e, removedNodes: t} = n;
                let {target: a} = n;
                const o = [...e, ...t, a].map(n => {
                    if (!n.closest) return "";
                    if (n.slot) return n.slot;
                    const e = n.closest("[slot]"), t = e && e.slot;
                    return W.includes(t) ? t : ""
                }).join("");
                a.tagName !== R && (a = a.closest(R)), a.onMutateChild && o && (X ? (w(e, W) || w(t, W)) && a.onMutateChild(o) : a.onMutateChild(o))
            })
        }), Q = document.createElement("template");
        Q.innerHTML = '\n  <div class="wrapper"></div>\n', r(N.layouts), r(N.wsNav), r(N.stickUpStyles);

        class Z extends HTMLElement {
            static get observedAttributes() {
                return [_, L, $]
            }

            constructor() {
                super();
                const n = this.attachShadow({mode: "open"});
                [N.layouts, N.wsNav, N.stickUpStyles, Q].forEach(e => {
                    n.appendChild(document.importNode(e.content, !0))
                }), this.wrapper = n.querySelector(".wrapper"), this.pageLocale = f(), this.handlers = {
                    applyStickUp: s.bind(this, this.applyStickUp),
                    onChangeSlotPositionOfLayout1: s.bind(this, this.changeSlotPositionOfLayout1),
                    onChangeSlotPositionOfLayout3: s.bind(this, this.changeSlotPositionOfLayout3),
                    onLogoClick: s.bind(this, n => n.preventDefault()),
                    onResize: s.bind(this, this.onResize)
                }, this.disabledSlots = [], this.setDisabledSlots(), this.setLayout(), this.setAttribute(M, !0), this.stickUpCalculatedValues = new Map, this.stickUpScrollingElement = document.scrollingElement, this.stickUpElement = this.shadowRoot.querySelector(g), i() && !l() || (window.addEventListener("scroll", this.handlers.applyStickUp, !1), window.addEventListener("resize", this.handlers.onResize, !1)), Promise.resolve().then(() => {
                    K.observe(this, {attributes: !0, childList: !0, subtree: !0})
                }), this.headerResizeObserver = c(this)
            }

            get layout() {
                return this.getAttribute($)
            }

            get isStuck() {
                return this.hasAttribute(p)
            }

            get isOverlay() {
                return this.hasAttribute(_)
            }

            get overlayOpacity() {
                return this.getAttribute(L)
            }

            get stickyHeaderHeight() {
                return this.stickyHeight || (this.stickyHeight = m(this)), this.stickyHeight
            }

            set isStuck(n) {
                this.isStuck !== n && (n ? (this.createStickUpClone(), this.setAttribute(p, "")) : (this.removeStickUpClone(), this.removeAttribute(p)))
            }

            set overlayOpacityCustomProperty(n) {
                this.style.setProperty(O, n)
            }

            attributeChangedCallback(n, e, t) {
                this.connected && n === _ && (this.overlayOpacityCustomProperty = this.overlayOpacity, this.applyOverlayMechanism()), n === L && e !== t && (this.overlayOpacityCustomProperty = t), this.connected && n === $ && this.onChangeLayout(t, e)
            }

            connectedCallback() {
                this.connected = !0, this.triggerSlotVisibility(), this.hideNavToggle(), window.ShadyCSS && window.ShadyCSS.styleElement(this), i() && this.addLogoLinkEventListener(), this.setLayout(), this.onChangeLayout(this.layout), this.runStickUp(), this.applyOverlayMechanism()
            }

            disconnectedCallback() {
                i() && this.removeLogoLinkEventListener(), i() && !l() || (window.removeEventListener("scroll", this.handlers.applyStickUp, !1), window.removeEventListener("resize", this.handlers.onResize, !1)), this.onChangeLayout(null, this.layout)
            }

            runStickUp() {
                (!i() || l()) && this.hasAttribute(h) && this.stickUpElement && (this.setStickUpConfig(), this.handlers.applyStickUp())
            }

            createStickUpClone() {
                if (!this.shadowRoot.querySelector(`[${u}]`)) {
                    const n = document.createElement("div");
                    n.style.height = this.stickUpElement.offsetHeight + "px", n.setAttribute(u, "");
                    (this.stickUpElement.parentElement || this.shadowRoot).appendChild(n)
                }
            }

            removeStickUpClone() {
                this.shadowRoot.querySelector(`[${u}]`) && this.shadowRoot.querySelector(`[${u}]`).remove()
            }

            setStickUpConfig() {
                const {scrollTop: n} = this.stickUpScrollingElement;
                let {top: e, bottom: t, height: a} = this.stickUpElement.getBoundingClientRect();
                e += n, t += n + v, this.stickUpCalculatedValues.set("top", e), this.stickUpCalculatedValues.set("bottom", t), this.stickUpCalculatedValues.set("height", a)
            }

            applyStickUp() {
                const {scrollTop: n} = this.stickUpScrollingElement;
                let e = this.stickUpCalculatedValues.get("top");
                const t = this.stickUpCalculatedValues.get("bottom"), a = this.stickUpCalculatedValues.get("height"),
                    o = this.stickUpElement.getBoundingClientRect().height;
                o < a && (e += (a - o) / 2), this.isStuck = this.isStuck ? n > e : n > t
            }

            onMutateChild(n) {
                this.setDisabledSlots(), this.onChangeSlot(n), this.triggerSlotVisibility(), this.hideNavToggle(), this.setLayout()
            }

            onChangeLayout(n, e) {
                "1" === n && (this.changeSlotPositionOfLayout1(), window.addEventListener("resize", this.handlers.onChangeSlotPositionOfLayout1, !1)), "3" === n && (this.changeSlotPositionOfLayout3(), window.addEventListener("resize", this.handlers.onChangeSlotPositionOfLayout3, !1)), "1" === e && window.removeEventListener("resize", this.handlers.onChangeSlotPositionOfLayout1, !1), "3" === e && window.removeEventListener("resize", this.handlers.onChangeSlotPositionOfLayout3, !1)
            }

            onChangeSlot(n) {
                switch (n) {
                    case P.PHONE:
                    case P.SOCIALS:
                    case P.LANGUAGE_SELECTOR:
                        "1" === this.layout && this.changeSlotPositionOfLayout1()
                }
            }

            getSuitableLayout() {
                if (![...this.querySelectorAll("[slot]")].length) return null;
                return J.filter(n => n.disabledSlots.every(n => this.disabledSlots.includes(n))).pop()
            }

            setDisabledSlots() {
                const n = [...this.querySelectorAll("[slot]")].filter(n => ![...n.children].every(n => n.hidden)).map(n => n.slot);
                this.disabledSlots = W.filter(e => !n.includes(e))
            }

            setLayout() {
                this.setDisabledSlots(), this.triggerSlotVisibility();
                const n = this.getSuitableLayout();
                if (!n) return this.wrapper.innerHTML = "", void this.setAttribute($, "empty");
                if (this.layout === n.name) return;
                const {name: e, template: t} = n;
                this.wrapper.innerHTML = "", this.wrapper.appendChild(t.content.cloneNode(!0)), this.setAttribute($, e), S(this.pageLocale) || x(this.wrapper, this.pageLocale)
            }

            triggerSlotVisibility() {
                this.shadowRoot.querySelectorAll("slot").forEach(n => {
                    this.disabledSlots.includes(n.name) ? n.setAttribute("hidden", "") : n.removeAttribute("hidden")
                });
                this.shadowRoot.querySelectorAll(".logo-wrapper").forEach(n => {
                    [...n.querySelectorAll("slot")].every(n => n.hidden) ? n.setAttribute("hidden", "") : n.removeAttribute("hidden")
                })
            }

            hideNavToggle() {
                const n = this.shadowRoot.querySelector("ws-nav-toggle"),
                    e = this.shadowRoot.querySelector("ws-nav-collapse");
                if (e) {
                    [...e.querySelectorAll("slot")].every(n => n.hidden || !n.assignedNodes().length) ? n.setAttribute("hidden", "") : n.removeAttribute("hidden")
                }
            }

            addLogoLinkEventListener() {
                this.shadowRoot.querySelector("a.logo-wrapper") && this.addEventListener("click", this.handlers.onLogoClick)
            }

            removeLogoLinkEventListener() {
                this.shadowRoot.querySelector("a.logo-wrapper") && this.removeEventListener("click", this.handlers.onLogoClick)
            }

            changeSlotPositionOfLayout1() {
                const n = !this.disabledSlots.includes(P.LANGUAGE_SELECTOR) && !this.disabledSlots.includes(P.SOCIALS) && window.matchMedia(`(max-width: ${F}px)`).matches;
                b(this.shadowRoot, P.SOCIALS, n)
            }

            changeSlotPositionOfLayout3() {
                const n = !this.disabledSlots.includes(P.LANGUAGE_SELECTOR) && window.matchMedia(`(max-width: ${F}px)`).matches;
                b(this.shadowRoot, P.LANGUAGE_SELECTOR, n);
                const e = this.shadowRoot.querySelector(".header-top-panel");
                // n ? e.removeAttribute("hidden") : e.setAttribute("hidden", "")
            }

            applyOverlayMechanism() {
                this.applyOverlayStyle(), this.isOverlay ? this.headerResizeObserver.observe() : (this.style.removeProperty(O), this.headerResizeObserver.unobserve())
            }

            applyOverlayStyle(n) {
                let e = this.querySelector(".header-style");
                if (e && !this.isOverlay) return void e.remove();
                const t = n || this.offsetHeight;
                t && (e || (e = document.createElement("style"), e.classList.add("header-style"), this.appendChild(e)), e.innerHTML = `\n      :root {\n        --ws-header-height: ${t}px;\n      }\n    `)
            }

            onResize() {
                this.stickyHeight = m(this)
            }
        }

        customElements.define(R, Z)
    }
});
;!function (t) {
    function e(e) {
        for (var n, o, a = e[0], c = e[1], h = e[2], l = 0, u = []; l < a.length; l++) o = a[l], Object.prototype.hasOwnProperty.call(s, o) && s[o] && u.push(s[o][0]), s[o] = 0;
        for (n in c) Object.prototype.hasOwnProperty.call(c, n) && (t[n] = c[n]);
        for (d && d(e); u.length;) u.shift()();
        return r.push.apply(r, h || []), i()
    }

    function i() {
        for (var t, e = 0; e < r.length; e++) {
            for (var i = r[e], n = !0, a = 1; a < i.length; a++) {
                var c = i[a];
                0 !== s[c] && (n = !1)
            }
            n && (r.splice(e--, 1), t = o(o.s = i[0]))
        }
        return t
    }

    var n = {}, s = {1: 0}, r = [];

    function o(e) {
        if (n[e]) return n[e].exports;
        var i = n[e] = {i: e, l: !1, exports: {}};
        return t[e].call(i.exports, i, i.exports, o), i.l = !0, i.exports
    }

    o.m = t, o.c = n, o.d = function (t, e, i) {
        o.o(t, e) || Object.defineProperty(t, e, {enumerable: !0, get: i})
    }, o.r = function (t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(t, "__esModule", {value: !0})
    }, o.t = function (t, e) {
        if (1 & e && (t = o(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var i = Object.create(null);
        if (o.r(i), Object.defineProperty(i, "default", {
            enumerable: !0,
            value: t
        }), 2 & e && "string" != typeof t) for (var n in t) o.d(i, n, function (e) {
            return t[e]
        }.bind(null, n));
        return i
    }, o.n = function (t) {
        var e = t && t.__esModule ? function () {
            return t.default
        } : function () {
            return t
        };
        return o.d(e, "a", e), e
    }, o.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, o.p = "";
    var a = window.webpackJsonp = window.webpackJsonp || [], c = a.push.bind(a);
    a.push = e, a = a.slice();
    for (var h = 0; h < a.length; h++) e(a[h]);
    var d = c;
    r.push([15, 0]), i()
}({
    15: function (t, e, i) {
        t.exports = i(59)
    }, 59: function (t, e, i) {
        "use strict";
        i.r(e);
        var n = {
            CONTAINER_TAG: "ws-background-container",
            BACKGROUND_CONTAINER_CLASS: "ws-background-container-content",
            BACKGROUND_IMAGE_CONTAINER_CLASS: "ws-background-image-container",
            BACKGROUND_IMAGE_CLASS: "ws-inner-background-image",
            OVERLAY_CLASS: "ws-background-container-overlay",
            LOADING_CLASS: "ws-background-loading",
            SAFE_MODE_CLASS: "ws-safe-mode",
            LOADED_CLASS: "ws-background-loaded",
            HEADER_SELECTOR: "ws-block[src*='header']",
            POSITION_REGEXP: /^(-?\d+(?:\.\d+)?)% (-?\d+(?:\.\d+)?)%$/,
            IMAGE_EXTENSION_REGEXP: /\.\w{1,5}$/,
            MOBILE_BREAKPOINT: 576,
            SUPPORTED_FILTERS: {grayscale: "grayscale(1)"}
        };
        const {
            BACKGROUND_IMAGE_CLASS: s,
            BACKGROUND_IMAGE_CONTAINER_CLASS: r,
            BACKGROUND_CONTAINER_CLASS: o,
            OVERLAY_CLASS: a,
            LOADING_CLASS: c,
            LOADED_CLASS: h,
            SAFE_MODE_CLASS: d
        } = n, l = document.createElement("template");
        l.innerHTML = `\n<style>\n    .${o} {\n        position: relative;\n        height: 100%;\n        overflow: hidden;\n    }\n\n    .${r} {\n        position: absolute;\n        width: 100%;\n        height: 100%;\n        transform: translate(-50%, -50%);\n    }\n\n    .${s}{\n        width: 100%;\n        height: 100%;\n        background-position: center center;\n        background-repeat: no-repeat;\n        background-size: cover;\n    }\n\n    .${a} {\n        display: none;\n        position: absolute;\n        left: 0;\n        top: 0;\n        right: 0;\n        bottom: 0;\n        opacity: 0;\n        background: hsl(var(--ws-surface-background-color));\n        pointer-events: none;\n    }\n\n    .${c} {\n        opacity: 0;\n    }\n\n    .${h} {\n        transition: opacity 1s;\n        opacity: 1;\n    }\n    .${d} .${c} {\n        opacity: 1;\n    }\n</style>\n\n<div class="${o}">\n  <div class="${r}">\n    <div class="${s}"></div>\n  </div>\n  <div class="${a}"></div>\n</div>\n`;
        var u = l;
        const g = new Map;
        var p = function (t) {
            if (g.has(t)) return g.get(t);
            const e = new Promise((e, i) => {
                const n = new Image;
                n.onload = () => e(n), n.onerror = i, n.src = t
            });
            return g.set(t, e), e
        };
        var b = async function (t) {
            const e = await p(t), {height: i, width: n} = e;
            return !navigator.userAgent.toLowerCase().includes("firefox") || 0 !== i && 0 !== n ? [n, i] : [150, 150]
        };
        const m = new (i(0).a)(t => {
            t.forEach(({target: t}) => t.handleResize())
        });
        var A = function (t) {
            return m.observe(t), {
                unobserve() {
                    m.unobserve(t)
                }
            }
        };
        var v = function (t) {
            return !isNaN(t) && isFinite(t)
        };
        var y = function (t) {
            return p(t).then(() => !0, () => !1)
        };
        var f = function () {
            return p("data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=").then(() => !0, () => !1)
        };
        var S = function () {
            try {
                return Boolean(window.parent.ws)
            } catch (t) {
                return !1
            }
        };
        i(8);
        const O = new IntersectionObserver((t, e) => {
            t.forEach(({target: t, isIntersecting: i}) => {
                i && (t.setIntersectedStatus(!0), t.src && (t.backgroundElement.classList.add(n.LOADING_CLASS), t.setupSrc().then(() => {
                    t.handleAnimation()
                }), e.unobserve(t)))
            })
        }, {rootMargin: "0px 0px 600px 0px"});
        var E = t => (O.observe(t), {
            disconnect() {
                O.unobserve(t)
            }
        });
        const w = new IntersectionObserver((t, e) => {
            t.forEach(({target: t, isIntersecting: i}) => {
                i && (t.handleAnimation(), e.unobserve(t))
            })
        });
        var C = t => (w.observe(t), {
            disconnect() {
                w.unobserve(t)
            }
        });
        var M = (t, e) => {
            const i = e / 2;
            let n = t;
            return t - i > 98 && (n = 98 + i), t + i < 2 && (n = 2 - i), Math.round(100 * n) / 100
        }, _ = Object.assign || function (t) {
            for (var e = 1; e < arguments.length; e++) {
                var i = arguments[e];
                for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n])
            }
            return t
        };
        const {
            SUPPORTED_FILTERS: I,
            BACKGROUND_CONTAINER_CLASS: L,
            BACKGROUND_IMAGE_CLASS: B,
            BACKGROUND_IMAGE_CONTAINER_CLASS: R,
            OVERLAY_CLASS: k,
            LOADING_CLASS: N,
            LOADED_CLASS: T,
            IMAGE_EXTENSION_REGEXP: P,
            SAFE_MODE_CLASS: G,
            HEADER_SELECTOR: x,
            MOBILE_BREAKPOINT: D
        } = n;

        class F extends HTMLElement {
            static get observedAttributes() {
                return ["overlay", "overlay-opacity", "filter", "blending-mode", "position", "scale", "src", "src-mobile", "transform-scale-factor", "safe-mode", "hidden", "cover-constraints"]
            }

            get scale() {
                const t = this.getAttribute("scale"), e = parseFloat(t);
                return v(e) ? Math.max(e, .1) : 1
            }

            set scale(t) {
                t ? this.setAttribute("scale", t) : t || this.removeAttribute("scale")
            }

            get src() {
                return this.getAttribute("src")
            }

            get srcMobile() {
                return this.getAttribute("src-mobile")
            }

            get hasProgressiveSrc() {
                return !!this.hasAttribute("data-progressive-src") && "true" === this.getAttribute("data-progressive-src").toLowerCase()
            }

            get position() {
                const t = this.getAttribute("position"), e = t && t.match(n.POSITION_REGEXP);
                return e ? e.slice(1, 3).map(t => parseFloat(t)) : [50, 50]
            }

            set position(t) {
                t ? this.setAttribute("position", t) : t || this.removeAttribute("position")
            }

            get overlay() {
                return this.hasAttribute("overlay")
            }

            get overlayOpacity() {
                return this.getAttribute("overlay-opacity")
            }

            get filter() {
                return this.getAttribute("filter")
            }

            get hasFilter() {
                return this.hasAttribute("filter")
            }

            get blendingMode() {
                return this.getAttribute("blending-mode")
            }

            get transformScaleFactor() {
                const t = parseFloat(this.getAttribute("transform-scale-factor"));
                return isNaN(t) ? 1 : t
            }

            get safeMode() {
                return this.hasAttribute("safe-mode")
            }

            get coverConstraintsEnabled() {
                return this.hasAttribute("cover-constraints")
            }

            set wsBlockBackgroundPosition(t) {
                const e = this.closest("ws-block");
                e && e.setAttribute("background-position", t)
            }

            constructor() {
                super();
                const t = this.attachShadow({mode: "open"});
                t.appendChild(document.importNode(u.content, !0)), this.container = t.querySelector("." + L), this.imageContainer = t.querySelector("." + R), this.backgroundElement = t.querySelector("." + B), this.overlayElement = t.querySelector("." + k), this.mobileMediaQuery = window.matchMedia(`(max-width: ${D}px)`), this.mediaHeight = 0, this.mediaWidth = 0, this.wasIntersected = !1, this.preventAnimation = this.shouldPreventAnimation(), this.preventAnimation && this.backgroundElement.classList.add(T), this.isReadyForAnimation = !1, this.setupSrc = this.setupSrc.bind(this)
            }

            shouldPreventAnimation() {
                const t = this.closest("ws-block");
                if (!t || !t.parentNode) return !1;
                const e = Array.from(t.parentNode.children).indexOf(t);
                return !(e > 1) && (0 === e || t.previousElementSibling.matches(x))
            }

            connectedCallback() {
                this.isHidden() || this.init()
            }

            disconnectedCallback() {
                this.destroy()
            }

            init() {
                this.preIntersectionObserver = E(this), this.safeMode || (this.intersectionObserver = C(this)), this.mobileMediaQuery.addListener(this.setupSrc), this.setupOverlay(), this.setupOverlayOpacity(), this.setupFilter(), this.setupOverlayBlendingMode(), this.renderMedia()
            }

            destroy() {
                this.preIntersectionObserver && this.preIntersectionObserver.disconnect(), this.intersectionObserver && this.intersectionObserver.disconnect(), this.resizeObserver && this.resizeObserver.unobserve(), this.mobileMediaQuery.removeListener(this.setupSrc), this.backgroundElement.removeAttribute("style"), this.imageContainer.removeAttribute("style"), this.overlayElement.removeAttribute("style")
            }

            setIntersectedStatus(t) {
                this.wasIntersected = t
            }

            isHidden() {
                return this.hasAttribute("hidden")
            }

            async setupSrc() {
                const t = await this.getImageUrl(), [e, i] = await b(t);
                this.mediaWidth = e, this.mediaHeight = i, this.backgroundElement.style["background-image"] = `url("${t}")`, this.mediaSetupComplete = !0, this.renderMedia(), this.resizeObserver = A(this)
            }

            attributeChangedCallback(t, e, i) {
                if (e !== i) switch (t) {
                    case"safe-mode":
                        this.safeMode ? (this.intersectionObserver && this.intersectionObserver.disconnect(), this.container.classList.add(G)) : (this.intersectionObserver = C(this), this.container.classList.remove(G));
                        break;
                    case"scale":
                        this.mediaSetupComplete && this.handleScaleChange(e, i);
                        break;
                    case"cover-constraints":
                    case"position":
                    case"transform-scale-factor":
                        this.renderMedia();
                        break;
                    case"src":
                    case"src-mobile":
                        this.wasIntersected && this.setupSrc();
                        break;
                    case"overlay":
                        this.setupOverlay(), this.setupOverlayBlendingMode();
                        break;
                    case"overlay-opacity":
                        this.setupOverlayOpacity();
                        break;
                    case"filter":
                        this.setupFilter(), this.setupOverlayBlendingMode();
                        break;
                    case"blending-mode":
                        this.setupOverlayBlendingMode();
                        break;
                    case"hidden":
                        this.isHidden() ? this.destroy() : this.init()
                }
            }

            handleScaleChange() {
                this.renderMedia()
            }

            handleResize() {
                this.renderMedia()
            }

            async getImageUrl() {
                if (S()) return this.src;
                const t = this.mobileMediaQuery.matches && this.srcMobile ? this.srcMobile : this.src, e = await f();
                if (this.hasProgressiveSrc && e) {
                    const e = t.replace(P, "") + ".webp";
                    if (await y(e)) return e
                }
                return t
            }

            async computeBackgroundRectForSource(t, e = {}) {
                const i = {scale: this.scale, position: this.position},
                    n = _({}, i, e), {position: s} = n, [r, o] = await b(t),
                    a = this.getContentBounds({mediaWidth: r, mediaHeight: o});
                return this.computeMedia({position: s, contentBounds: a})
            }

            computeMedia(t = {}) {
                const {position: e = this.position, contentBounds: i = this.getContentBounds()} = t, {
                        width: n,
                        height: s
                    } = this.areaBounds, {mediaAbsoluteTargetWidth: r, mediaAbsoluteTargetHeight: o} = i, [a, c] = e,
                    h = r * a / 100, d = o * c / 100, l = n - r, u = s - o;
                return {
                    width: r,
                    height: o,
                    position: {left: Math.min(0, Math.max(n / 2 - h, l)), top: Math.min(0, Math.max(s / 2 - d, u))}
                }
            }

            getContentPositionInPercents({x: t, y: e}) {
                const {width: i, height: n} = this.getContentBounds();
                return [M(t, i), M(e, n)]
            }

            calculateBoundsByScale(t) {
                this.scale = t;
                const [e, i] = this.position;
                return {scale: t, position: this.getContentPositionInPercents({x: e, y: i})}
            }

            setupOverlayOpacity() {
                this.overlayElement.style.opacity = this.overlayOpacity || ""
            }

            setupOverlay() {
                this.overlayElement.style.display = this.overlay ? "block" : ""
            }

            setupFilter() {
                this.hasFilter ? this.imageContainer.style.filter = I[this.filter] || I.grayscale : this.imageContainer.style.filter = ""
            }

            setupOverlayBlendingMode() {
                const t = this.overlayElement.style["mix-blend-mode"];
                if (this.hasFilter && this.overlay) {
                    const e = this.blendingMode || "hard-light";
                    t !== e && (this.overlayElement.style["mix-blend-mode"] = e)
                } else t && (this.overlayElement.style["mix-blend-mode"] = "")
            }

            get computedBlendingMode() {
                return this.overlayElement.style["mix-blend-mode"] || null
            }

            getContainerBounds() {
                const {width: t, height: e} = this.container.getBoundingClientRect(), i = this.transformScaleFactor;
                return {width: Math.round(t) / i, height: Math.round(e) / i}
            }

            getContentBounds(t = {}) {
                const {width: e, height: i} = this.getContainerBounds(), {
                    mediaWidth: n = this.mediaWidth,
                    mediaHeight: s = this.mediaHeight
                } = t, r = n / s;
                let o, a;
                i >= e / r ? (o = i * r, a = i) : (o = e, a = e / r);
                return {
                    width: o / e * this.scale * 100,
                    height: a / i * this.scale * 100,
                    mediaAbsoluteTargetWidth: o,
                    mediaAbsoluteTargetHeight: a
                }
            }

            calculateScaledBounds(t, e, i) {
                const {width: n, height: s} = this.areaBounds, r = Math.max(n / t, s / e);
                return {width: t * r * i, height: e * r * i, initialScale: r}
            }

            get scaledBounds() {
                return this.calculateScaledBounds(this.mediaWidth, this.mediaHeight, this.scale)
            }

            get areaBounds() {
                const t = this.container, {width: e, height: i} = t.getBoundingClientRect(),
                    n = this.transformScaleFactor;
                return {width: e / n, height: i / n}
            }

            computeBackgroundRect(t, e) {
                const {width: i, height: n} = this.areaBounds, {width: s, height: r} = e, [o, a] = t, c = s * o / 100,
                    h = r * a / 100, d = i - s, l = n - r, u = s / i * 100, g = r / n * 100;
                return {
                    width: u,
                    height: g,
                    position: {
                        left: Math.min(0, Math.max(i / 2 - c, d)) / i * 100 + u / 2,
                        top: Math.min(0, Math.max(n / 2 - h, l)) / n * 100 + g / 2
                    }
                }
            }

            renderMedia() {
                const [t, e] = this.position, {style: i} = this.imageContainer, n = {};
                if (this.coverConstraintsEnabled) {
                    const {
                        width: t,
                        height: e,
                        position: i
                    } = this.computeBackgroundRect(this.position, this.scaledBounds);
                    n.left = i.left + "%", n.top = i.top + "%", n.width = t + "%", n.height = e + "%"
                } else {
                    const {width: i, height: s} = this.getContentBounds();
                    n.width = i + "%", n.height = s + "%", n.left = M(t, i) + "%", n.top = M(e, s) + "%"
                }
                i.width = n.width, i.height = n.height, i.left = n.left, i.top = n.top
            }

            handleAnimation() {
                this.preventAnimation || (this.isReadyForAnimation ? (this.backgroundElement.classList.add(T), setTimeout(() => {
                    this.backgroundElement.classList.remove(T, N)
                }, 1e3)) : this.isReadyForAnimation = !0)
            }
        }

        customElements.define(n.CONTAINER_TAG, F)
    }
});
;!function (n) {
    var e = {};

    function t(o) {
        if (e[o]) return e[o].exports;
        var r = e[o] = {i: o, l: !1, exports: {}};
        return n[o].call(r.exports, r, r.exports, t), r.l = !0, r.exports
    }

    t.m = n, t.c = e, t.d = function (n, e, o) {
        t.o(n, e) || Object.defineProperty(n, e, {enumerable: !0, get: o})
    }, t.r = function (n) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(n, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(n, "__esModule", {value: !0})
    }, t.t = function (n, e) {
        if (1 & e && (n = t(n)), 8 & e) return n;
        if (4 & e && "object" == typeof n && n && n.__esModule) return n;
        var o = Object.create(null);
        if (t.r(o), Object.defineProperty(o, "default", {
            enumerable: !0,
            value: n
        }), 2 & e && "string" != typeof n) for (var r in n) t.d(o, r, function (e) {
            return n[e]
        }.bind(null, r));
        return o
    }, t.n = function (n) {
        var e = n && n.__esModule ? function () {
            return n.default
        } : function () {
            return n
        };
        return t.d(e, "a", e), e
    }, t.o = function (n, e) {
        return Object.prototype.hasOwnProperty.call(n, e)
    }, t.p = "", t(t.s = 18)
}({
    18: function (n, e, t) {
        n.exports = t(66)
    }, 66: function (n, e, t) {
        "use strict";
        t.r(e);
        var o = function (n, e) {
            n.call(this, e)
        };
        var r = function () {
            try {
                return Boolean(window.parent.ws)
            } catch (n) {
                return !1
            }
        };
        const i = {utm_medium: "referral", utm_campaign: "branded_footer", utm_source: window.location.href};
        var a = function (n) {
            return r() ? n : `${n}?${new URLSearchParams(i).toString()}`
        };
        const s = null, c = "#", l = "Made on", d = 46, u = "logo", g = "dark", p = document.createElement("template");
        p.innerHTML = `\n  <style>\n    /* WS branding component */\n\n    .ws-branding-content {\n      /* variables */\n      --component-ws-branding-padding: 16px;\n      --component-ws-branding-text-size: 14px;\n      --component-ws-branding-text-margin-right: 5px;\n      --component-ws-branding-font-family: Arial, -apple-system, BlinkMacSystemFont, 'Segoe UI',\n      'Roboto', 'Helvetica Neue', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif;\n\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      padding: var(--component-ws-branding-padding);\n      font-family: var(--component-ws-branding-font-family);\n      color: var(--component-ws-branding-color);\n      background-color: var(--component-ws-branding-background-color);\n      text-decoration: none;\n    }\n\n    .ws-branding-content.dark {\n     --component-ws-branding-color: #fff;\n     --component-ws-branding-background-color: #141b21;\n    }\n\n    .ws-branding-content.light {\n     --component-ws-branding-color: #141b21;\n     --component-ws-branding-background-color: #fff;\n    }\n\n    .ws-branding-content span {\n      margin-right: var(--component-ws-branding-text-margin-right);\n      font-size: var(--component-ws-branding-text-size);\n    }\n  </style>\n  <a href="${c}" class="ws-branding-content ${g}">\n    <span>${l}</span>\n  </a>\n`;

        class m extends HTMLElement {
            static get observedAttributes() {
                return ["logo", "message", "url", "logo-width", "theme"]
            }

            constructor() {
                super();
                this.attachShadow({mode: "open"}).appendChild(p.content.cloneNode(!0)), this.handlers = {onClick: o.bind(this, this.onClick)}
            }

            connectedCallback() {
                r() && this.addEventListener("click", this.handlers.onClick), this.applyHeightValue()
            }

            disconnectedCallback() {
                r() && this.removeEventListener("click", this.handlers.onClick)
            }

            attributeChangedCallback() {
                this.refreshData()
            }

            getPropsValues() {
                return {
                    logo: this.getAttribute("logo") || s,
                    url: this.getAttribute("url") || c,
                    message: this.getAttribute("message") || l,
                    logoWidth: this.getAttribute("logo-width") || d,
                    theme: this.getAttribute("theme") || g
                }
            }

            refreshData() {
                const {logo: n, url: e, message: t, logoWidth: o, theme: r} = this.getPropsValues(),
                    i = document.createElement("a"), s = document.createElement("span");
                if (i.classList.add("ws-branding-content", r), i.href = a(e), s.innerText = t, i.append(s), n) {
                    const e = document.createElement("img");
                    e.src = n, e.width = o, e.alt = u, i.append(e)
                }
                this.shadowRoot.replaceChild(i, this.shadowRoot.querySelector("a"))
            }

            onClick(n) {
                n.preventDefault()
            }

            applyHeightValue() {
                const n = Math.round(this.getBoundingClientRect().height), e = document.createElement("style");
                e.innerHTML = `\n    :root {\n      --ws-branding-height: ${n}px;\n    }\n    `, this.appendChild(e)
            }
        }

        customElements.define("ws-branding", m)
    }
});
;!function (e) {
    function t(t) {
        for (var s, r, a = t[0], l = t[1], c = t[2], d = 0, h = []; d < a.length; d++) r = a[d], Object.prototype.hasOwnProperty.call(i, r) && i[r] && h.push(i[r][0]), i[r] = 0;
        for (s in l) Object.prototype.hasOwnProperty.call(l, s) && (e[s] = l[s]);
        for (u && u(t); h.length;) h.shift()();
        return o.push.apply(o, c || []), n()
    }

    function n() {
        for (var e, t = 0; t < o.length; t++) {
            for (var n = o[t], s = !0, a = 1; a < n.length; a++) {
                var l = n[a];
                0 !== i[l] && (s = !1)
            }
            s && (o.splice(t--, 1), e = r(r.s = n[0]))
        }
        return e
    }

    var s = {}, i = {20: 0}, o = [];

    function r(t) {
        if (s[t]) return s[t].exports;
        var n = s[t] = {i: t, l: !1, exports: {}};
        return e[t].call(n.exports, n, n.exports, r), n.l = !0, n.exports
    }

    r.m = e, r.c = s, r.d = function (e, t, n) {
        r.o(e, t) || Object.defineProperty(e, t, {enumerable: !0, get: n})
    }, r.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
    }, r.t = function (e, t) {
        if (1 & t && (e = r(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (r.r(n), Object.defineProperty(n, "default", {
            enumerable: !0,
            value: e
        }), 2 & t && "string" != typeof e) for (var s in e) r.d(n, s, function (t) {
            return e[t]
        }.bind(null, s));
        return n
    }, r.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return r.d(t, "a", t), t
    }, r.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, r.p = "";
    var a = window.webpackJsonp = window.webpackJsonp || [], l = a.push.bind(a);
    a.push = t, a = a.slice();
    for (var c = 0; c < a.length; c++) t(a[c]);
    var u = l;
    o.push([44, 0]), n()
}({
    13: function (e, t, n) {
        (function (t) {
            var n = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, s = /^\w*$/, i = /^\./,
                o = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
                r = /\\(\\)?/g, a = /^\[object .+?Constructor\]$/,
                l = "object" == typeof t && t && t.Object === Object && t,
                c = "object" == typeof self && self && self.Object === Object && self,
                u = l || c || Function("return this")();
            var d, h = Array.prototype, m = Function.prototype, p = Object.prototype, v = u["__core-js_shared__"],
                f = (d = /[^.]+$/.exec(v && v.keys && v.keys.IE_PROTO || "")) ? "Symbol(src)_1." + d : "",
                g = m.toString, b = p.hasOwnProperty, y = p.toString,
                w = RegExp("^" + g.call(b).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
                S = u.Symbol, _ = h.splice, E = N(u, "Map"), A = N(Object, "create"), k = S ? S.prototype : void 0,
                M = k ? k.toString : void 0;

            function C(e) {
                var t = -1, n = e ? e.length : 0;
                for (this.clear(); ++t < n;) {
                    var s = e[t];
                    this.set(s[0], s[1])
                }
            }

            function O(e) {
                var t = -1, n = e ? e.length : 0;
                for (this.clear(); ++t < n;) {
                    var s = e[t];
                    this.set(s[0], s[1])
                }
            }

            function x(e) {
                var t = -1, n = e ? e.length : 0;
                for (this.clear(); ++t < n;) {
                    var s = e[t];
                    this.set(s[0], s[1])
                }
            }

            function T(e, t) {
                for (var n, s, i = e.length; i--;) if ((n = e[i][0]) === (s = t) || n != n && s != s) return i;
                return -1
            }

            function L(e, t) {
                for (var i, o = 0, r = (t = function (e, t) {
                    if (H(e)) return !1;
                    var i = typeof e;
                    if ("number" == i || "symbol" == i || "boolean" == i || null == e || z(e)) return !0;
                    return s.test(e) || !n.test(e) || null != t && e in Object(t)
                }(t, e) ? [t] : H(i = t) ? i : q(i)).length; null != e && o < r;) e = e[R(t[o++])];
                return o && o == r ? e : void 0
            }

            function j(e) {
                return !(!I(e) || (t = e, f && f in t)) && (function (e) {
                    var t = I(e) ? y.call(e) : "";
                    return "[object Function]" == t || "[object GeneratorFunction]" == t
                }(e) || function (e) {
                    var t = !1;
                    if (null != e && "function" != typeof e.toString) try {
                        t = !!(e + "")
                    } catch (e) {
                    }
                    return t
                }(e) ? w : a).test(function (e) {
                    if (null != e) {
                        try {
                            return g.call(e)
                        } catch (e) {
                        }
                        try {
                            return e + ""
                        } catch (e) {
                        }
                    }
                    return ""
                }(e));
                var t
            }

            function B(e, t) {
                var n, s, i = e.__data__;
                return ("string" == (s = typeof (n = t)) || "number" == s || "symbol" == s || "boolean" == s ? "__proto__" !== n : null === n) ? i["string" == typeof t ? "string" : "hash"] : i.map
            }

            function N(e, t) {
                var n = function (e, t) {
                    return null == e ? void 0 : e[t]
                }(e, t);
                return j(n) ? n : void 0
            }

            C.prototype.clear = function () {
                this.__data__ = A ? A(null) : {}
            }, C.prototype.delete = function (e) {
                return this.has(e) && delete this.__data__[e]
            }, C.prototype.get = function (e) {
                var t = this.__data__;
                if (A) {
                    var n = t[e];
                    return "__lodash_hash_undefined__" === n ? void 0 : n
                }
                return b.call(t, e) ? t[e] : void 0
            }, C.prototype.has = function (e) {
                var t = this.__data__;
                return A ? void 0 !== t[e] : b.call(t, e)
            }, C.prototype.set = function (e, t) {
                return this.__data__[e] = A && void 0 === t ? "__lodash_hash_undefined__" : t, this
            }, O.prototype.clear = function () {
                this.__data__ = []
            }, O.prototype.delete = function (e) {
                var t = this.__data__, n = T(t, e);
                return !(n < 0) && (n == t.length - 1 ? t.pop() : _.call(t, n, 1), !0)
            }, O.prototype.get = function (e) {
                var t = this.__data__, n = T(t, e);
                return n < 0 ? void 0 : t[n][1]
            }, O.prototype.has = function (e) {
                return T(this.__data__, e) > -1
            }, O.prototype.set = function (e, t) {
                var n = this.__data__, s = T(n, e);
                return s < 0 ? n.push([e, t]) : n[s][1] = t, this
            }, x.prototype.clear = function () {
                this.__data__ = {hash: new C, map: new (E || O), string: new C}
            }, x.prototype.delete = function (e) {
                return B(this, e).delete(e)
            }, x.prototype.get = function (e) {
                return B(this, e).get(e)
            }, x.prototype.has = function (e) {
                return B(this, e).has(e)
            }, x.prototype.set = function (e, t) {
                return B(this, e).set(e, t), this
            };
            var q = P((function (e) {
                var t;
                e = null == (t = e) ? "" : function (e) {
                    if ("string" == typeof e) return e;
                    if (z(e)) return M ? M.call(e) : "";
                    var t = e + "";
                    return "0" == t && 1 / e == -1 / 0 ? "-0" : t
                }(t);
                var n = [];
                return i.test(e) && n.push(""), e.replace(o, (function (e, t, s, i) {
                    n.push(s ? i.replace(r, "$1") : t || e)
                })), n
            }));

            function R(e) {
                if ("string" == typeof e || z(e)) return e;
                var t = e + "";
                return "0" == t && 1 / e == -1 / 0 ? "-0" : t
            }

            function P(e, t) {
                if ("function" != typeof e || t && "function" != typeof t) throw new TypeError("Expected a function");
                var n = function () {
                    var s = arguments, i = t ? t.apply(this, s) : s[0], o = n.cache;
                    if (o.has(i)) return o.get(i);
                    var r = e.apply(this, s);
                    return n.cache = o.set(i, r), r
                };
                return n.cache = new (P.Cache || x), n
            }

            P.Cache = x;
            var H = Array.isArray;

            function I(e) {
                var t = typeof e;
                return !!e && ("object" == t || "function" == t)
            }

            function z(e) {
                return "symbol" == typeof e || function (e) {
                    return !!e && "object" == typeof e
                }(e) && "[object Symbol]" == y.call(e)
            }

            e.exports = function (e, t, n) {
                var s = null == e ? void 0 : L(e, t);
                return void 0 === s ? n : s
            }
        }).call(this, n(7))
    }, 3: function (e, t, n) {
        var s;
        s = function () {
            var e = !0;

            function t(t) {
                function n(e) {
                    var n = t.match(e);
                    return n && n.length > 1 && n[1] || ""
                }

                function s(e) {
                    var n = t.match(e);
                    return n && n.length > 1 && n[2] || ""
                }

                var i, r = n(/(ipod|iphone|ipad)/i).toLowerCase(), a = !/like android/i.test(t) && /android/i.test(t),
                    l = /nexus\s*[0-6]\s*/i.test(t), c = !l && /nexus\s*[0-9]+/i.test(t), u = /CrOS/.test(t),
                    d = /silk/i.test(t), h = /sailfish/i.test(t), m = /tizen/i.test(t), p = /(web|hpw)(o|0)s/i.test(t),
                    v = /windows phone/i.test(t), f = (/SamsungBrowser/i.test(t), !v && /windows/i.test(t)),
                    g = !r && !d && /macintosh/i.test(t), b = !a && !h && !m && !p && /linux/i.test(t),
                    y = s(/edg([ea]|ios)\/(\d+(\.\d+)?)/i), w = n(/version\/(\d+(\.\d+)?)/i),
                    S = /tablet/i.test(t) && !/tablet pc/i.test(t), _ = !S && /[^-]mobi/i.test(t), E = /xbox/i.test(t);
                /opera/i.test(t) ? i = {
                    name: "Opera",
                    opera: e,
                    version: w || n(/(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i)
                } : /opr\/|opios/i.test(t) ? i = {
                    name: "Opera",
                    opera: e,
                    version: n(/(?:opr|opios)[\s\/](\d+(\.\d+)?)/i) || w
                } : /SamsungBrowser/i.test(t) ? i = {
                    name: "Samsung Internet for Android",
                    samsungBrowser: e,
                    version: w || n(/(?:SamsungBrowser)[\s\/](\d+(\.\d+)?)/i)
                } : /Whale/i.test(t) ? i = {
                    name: "NAVER Whale browser",
                    whale: e,
                    version: n(/(?:whale)[\s\/](\d+(?:\.\d+)+)/i)
                } : /MZBrowser/i.test(t) ? i = {
                    name: "MZ Browser",
                    mzbrowser: e,
                    version: n(/(?:MZBrowser)[\s\/](\d+(?:\.\d+)+)/i)
                } : /coast/i.test(t) ? i = {
                    name: "Opera Coast",
                    coast: e,
                    version: w || n(/(?:coast)[\s\/](\d+(\.\d+)?)/i)
                } : /focus/i.test(t) ? i = {
                    name: "Focus",
                    focus: e,
                    version: n(/(?:focus)[\s\/](\d+(?:\.\d+)+)/i)
                } : /yabrowser/i.test(t) ? i = {
                    name: "Yandex Browser",
                    yandexbrowser: e,
                    version: w || n(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)
                } : /ucbrowser/i.test(t) ? i = {
                    name: "UC Browser",
                    ucbrowser: e,
                    version: n(/(?:ucbrowser)[\s\/](\d+(?:\.\d+)+)/i)
                } : /mxios/i.test(t) ? i = {
                    name: "Maxthon",
                    maxthon: e,
                    version: n(/(?:mxios)[\s\/](\d+(?:\.\d+)+)/i)
                } : /epiphany/i.test(t) ? i = {
                    name: "Epiphany",
                    epiphany: e,
                    version: n(/(?:epiphany)[\s\/](\d+(?:\.\d+)+)/i)
                } : /puffin/i.test(t) ? i = {
                    name: "Puffin",
                    puffin: e,
                    version: n(/(?:puffin)[\s\/](\d+(?:\.\d+)?)/i)
                } : /sleipnir/i.test(t) ? i = {
                    name: "Sleipnir",
                    sleipnir: e,
                    version: n(/(?:sleipnir)[\s\/](\d+(?:\.\d+)+)/i)
                } : /k-meleon/i.test(t) ? i = {
                    name: "K-Meleon",
                    kMeleon: e,
                    version: n(/(?:k-meleon)[\s\/](\d+(?:\.\d+)+)/i)
                } : v ? (i = {
                    name: "Windows Phone",
                    osname: "Windows Phone",
                    windowsphone: e
                }, y ? (i.msedge = e, i.version = y) : (i.msie = e, i.version = n(/iemobile\/(\d+(\.\d+)?)/i))) : /msie|trident/i.test(t) ? i = {
                    name: "Internet Explorer",
                    msie: e,
                    version: n(/(?:msie |rv:)(\d+(\.\d+)?)/i)
                } : u ? i = {
                    name: "Chrome",
                    osname: "Chrome OS",
                    chromeos: e,
                    chromeBook: e,
                    chrome: e,
                    version: n(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
                } : /edg([ea]|ios)/i.test(t) ? i = {
                    name: "Microsoft Edge",
                    msedge: e,
                    version: y
                } : /vivaldi/i.test(t) ? i = {
                    name: "Vivaldi",
                    vivaldi: e,
                    version: n(/vivaldi\/(\d+(\.\d+)?)/i) || w
                } : h ? i = {
                    name: "Sailfish",
                    osname: "Sailfish OS",
                    sailfish: e,
                    version: n(/sailfish\s?browser\/(\d+(\.\d+)?)/i)
                } : /seamonkey\//i.test(t) ? i = {
                    name: "SeaMonkey",
                    seamonkey: e,
                    version: n(/seamonkey\/(\d+(\.\d+)?)/i)
                } : /firefox|iceweasel|fxios/i.test(t) ? (i = {
                    name: "Firefox",
                    firefox: e,
                    version: n(/(?:firefox|iceweasel|fxios)[ \/](\d+(\.\d+)?)/i)
                }, /\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i.test(t) && (i.firefoxos = e, i.osname = "Firefox OS")) : d ? i = {
                    name: "Amazon Silk",
                    silk: e,
                    version: n(/silk\/(\d+(\.\d+)?)/i)
                } : /phantom/i.test(t) ? i = {
                    name: "PhantomJS",
                    phantom: e,
                    version: n(/phantomjs\/(\d+(\.\d+)?)/i)
                } : /slimerjs/i.test(t) ? i = {
                    name: "SlimerJS",
                    slimer: e,
                    version: n(/slimerjs\/(\d+(\.\d+)?)/i)
                } : /blackberry|\bbb\d+/i.test(t) || /rim\stablet/i.test(t) ? i = {
                    name: "BlackBerry",
                    osname: "BlackBerry OS",
                    blackberry: e,
                    version: w || n(/blackberry[\d]+\/(\d+(\.\d+)?)/i)
                } : p ? (i = {
                    name: "WebOS",
                    osname: "WebOS",
                    webos: e,
                    version: w || n(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)
                }, /touchpad\//i.test(t) && (i.touchpad = e)) : /bada/i.test(t) ? i = {
                    name: "Bada",
                    osname: "Bada",
                    bada: e,
                    version: n(/dolfin\/(\d+(\.\d+)?)/i)
                } : m ? i = {
                    name: "Tizen",
                    osname: "Tizen",
                    tizen: e,
                    version: n(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i) || w
                } : /qupzilla/i.test(t) ? i = {
                    name: "QupZilla",
                    qupzilla: e,
                    version: n(/(?:qupzilla)[\s\/](\d+(?:\.\d+)+)/i) || w
                } : /chromium/i.test(t) ? i = {
                    name: "Chromium",
                    chromium: e,
                    version: n(/(?:chromium)[\s\/](\d+(?:\.\d+)?)/i) || w
                } : /chrome|crios|crmo/i.test(t) ? i = {
                    name: "Chrome",
                    chrome: e,
                    version: n(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
                } : a ? i = {name: "Android", version: w} : /safari|applewebkit/i.test(t) ? (i = {
                    name: "Safari",
                    safari: e
                }, w && (i.version = w)) : r ? (i = {name: "iphone" == r ? "iPhone" : "ipad" == r ? "iPad" : "iPod"}, w && (i.version = w)) : i = /googlebot/i.test(t) ? {
                    name: "Googlebot",
                    googlebot: e,
                    version: n(/googlebot\/(\d+(\.\d+))/i) || w
                } : {
                    name: n(/^(.*)\/(.*) /),
                    version: s(/^(.*)\/(.*) /)
                }, !i.msedge && /(apple)?webkit/i.test(t) ? (/(apple)?webkit\/537\.36/i.test(t) ? (i.name = i.name || "Blink", i.blink = e) : (i.name = i.name || "Webkit", i.webkit = e), !i.version && w && (i.version = w)) : !i.opera && /gecko\//i.test(t) && (i.name = i.name || "Gecko", i.gecko = e, i.version = i.version || n(/gecko\/(\d+(\.\d+)?)/i)), i.windowsphone || !a && !i.silk ? !i.windowsphone && r ? (i[r] = e, i.ios = e, i.osname = "iOS") : g ? (i.mac = e, i.osname = "macOS") : E ? (i.xbox = e, i.osname = "Xbox") : f ? (i.windows = e, i.osname = "Windows") : b && (i.linux = e, i.osname = "Linux") : (i.android = e, i.osname = "Android");
                var A = "";
                i.windows ? A = function (e) {
                    switch (e) {
                        case"NT":
                            return "NT";
                        case"XP":
                            return "XP";
                        case"NT 5.0":
                            return "2000";
                        case"NT 5.1":
                            return "XP";
                        case"NT 5.2":
                            return "2003";
                        case"NT 6.0":
                            return "Vista";
                        case"NT 6.1":
                            return "7";
                        case"NT 6.2":
                            return "8";
                        case"NT 6.3":
                            return "8.1";
                        case"NT 10.0":
                            return "10";
                        default:
                            return
                    }
                }(n(/Windows ((NT|XP)( \d\d?.\d)?)/i)) : i.windowsphone ? A = n(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i) : i.mac ? A = (A = n(/Mac OS X (\d+([_\.\s]\d+)*)/i)).replace(/[_\s]/g, ".") : r ? A = (A = n(/os (\d+([_\s]\d+)*) like mac os x/i)).replace(/[_\s]/g, ".") : a ? A = n(/android[ \/-](\d+(\.\d+)*)/i) : i.webos ? A = n(/(?:web|hpw)os\/(\d+(\.\d+)*)/i) : i.blackberry ? A = n(/rim\stablet\sos\s(\d+(\.\d+)*)/i) : i.bada ? A = n(/bada\/(\d+(\.\d+)*)/i) : i.tizen && (A = n(/tizen[\/\s](\d+(\.\d+)*)/i)), A && (i.osversion = A);
                var k = !i.windows && A.split(".")[0];
                return S || c || "ipad" == r || a && (3 == k || k >= 4 && !_) || i.silk ? i.tablet = e : (_ || "iphone" == r || "ipod" == r || a || l || i.blackberry || i.webos || i.bada) && (i.mobile = e), i.msedge || i.msie && i.version >= 10 || i.yandexbrowser && i.version >= 15 || i.vivaldi && i.version >= 1 || i.chrome && i.version >= 20 || i.samsungBrowser && i.version >= 4 || i.whale && 1 === o([i.version, "1.0"]) || i.mzbrowser && 1 === o([i.version, "6.0"]) || i.focus && 1 === o([i.version, "1.0"]) || i.firefox && i.version >= 20 || i.safari && i.version >= 6 || i.opera && i.version >= 10 || i.ios && i.osversion && i.osversion.split(".")[0] >= 6 || i.blackberry && i.version >= 10.1 || i.chromium && i.version >= 20 ? i.a = e : i.msie && i.version < 10 || i.chrome && i.version < 20 || i.firefox && i.version < 20 || i.safari && i.version < 6 || i.opera && i.version < 10 || i.ios && i.osversion && i.osversion.split(".")[0] < 6 || i.chromium && i.version < 20 ? i.c = e : i.x = e, i
            }

            var n = t("undefined" != typeof navigator && navigator.userAgent || "");

            function s(e) {
                return e.split(".").length
            }

            function i(e, t) {
                var n, s = [];
                if (Array.prototype.map) return Array.prototype.map.call(e, t);
                for (n = 0; n < e.length; n++) s.push(t(e[n]));
                return s
            }

            function o(e) {
                for (var t = Math.max(s(e[0]), s(e[1])), n = i(e, (function (e) {
                    var n = t - s(e);
                    return i((e += new Array(n + 1).join(".0")).split("."), (function (e) {
                        return new Array(20 - e.length).join("0") + e
                    })).reverse()
                })); --t >= 0;) {
                    if (n[0][t] > n[1][t]) return 1;
                    if (n[0][t] !== n[1][t]) return -1;
                    if (0 === t) return 0
                }
            }

            function r(e, s, i) {
                var r = n;
                "string" == typeof s && (i = s, s = void 0), void 0 === s && (s = !1), i && (r = t(i));
                var a = "" + r.version;
                for (var l in e) if (e.hasOwnProperty(l) && r[l]) {
                    if ("string" != typeof e[l]) throw new Error("Browser version in the minVersion map should be a string: " + l + ": " + String(e));
                    return o([a, e[l]]) < 0
                }
                return s
            }

            return n.test = function (e) {
                for (var t = 0; t < e.length; ++t) {
                    var s = e[t];
                    if ("string" == typeof s && s in n) return !0
                }
                return !1
            }, n.isUnsupportedBrowser = r, n.compareVersions = o, n.check = function (e, t, n) {
                return !r(e, t, n)
            }, n._detect = t, n.detect = t, n
        }, e.exports ? e.exports = s() : n(45)("bowser", s)
    }, 44: function (e, t, n) {
        e.exports = n(53)
    }, 45: function (e, t) {
        e.exports = function () {
            throw new Error("define cannot be used indirect")
        }
    }, 46: function (e, t) {
        class n extends HTMLElement {
        }

        customElements.define("ws-nav-content", n)
    }, 5: function (e) {
        e.exports = JSON.parse('{"cs":{"More":"Více"},"de":{"More":"Mehr"},"es":{"More":"Más"},"fi":{"More":"Lisää"},"fr":{"More":"Plus"},"hu":{"More":"Több"},"id":{"More":"Lebih"},"it":{"More":"Di Più"},"ja":{"More":"もっと"},"nb":{"More":"Mer"},"nl":{"More":"Meer"},"pl":{"More":"Więcej"},"pt-br":{"More":"Mais"},"ru":{"More":"Больше"},"sk":{"More":"viac"},"sv":{"More":"Mer"},"zh-cn":{"More":"更多"},"en":{"More":"More"}}')
    }, 53: function (e, t, n) {
        "use strict";
        n.r(t);
        var s = n(3), i = n.n(s);
        var o = function () {
            try {
                return Boolean(window.parent.ws)
            } catch (e) {
                return !1
            }
        }, r = n(13), a = n.n(r);
        const l = () => !1;
        var c = function (e, t) {
            return a()(e, t, l)
        };
        var u = (e, t) => {
            const {width: n, height: s, x: i, y: o} = e.getBoundingClientRect(), {clientX: r, clientY: a} = t;
            return ((e, t, n) => e > t && e < t + n)(r, i, n) && ((e, t, n) => e > t && e < t + n)(a, o, s)
        };
        var d = function (e, t) {
            e.call(this, t)
        };
        var h = e => e.getRootNode() instanceof ShadowRoot;
        const m = "enabled", p = "disabled";
        var v = Object.freeze({
            menu: ".ws-nav__menu-list",
            menuItem: "li",
            submenu: ".ws-nav__submenu > ul",
            submenuItem: "li",
            itemLink: "a",
            itemText: "span"
        });
        const f = Boolean(i.a.mobile || i.a.tablet), g = document.createElement("template");
        g.innerHTML = "\n<style>\n  :host([disconnected]) {\n    display: none;\n  }\n</style>\n<slot></slot>\n";

        class b extends HTMLElement {
            static get observedAttributes() {
                return ["active", "on", "toggle", "disconnected"]
            }

            static findRelatedElements(e) {
                const t = e.getAttribute("toggle");
                return [...e.getRootNode().querySelectorAll(t)].filter(e => e.matches("ws-nav-collapse"))
            }

            static hideNestedCollapse(e) {
                b.findRelatedElements(e).forEach(e => {
                    e.querySelectorAll("ws-nav-toggle[active]").forEach(e => {
                        e.active = !1
                    })
                })
            }

            constructor() {
                super();
                this.attachShadow({mode: "open"}).appendChild(document.importNode(g.content, !0)), this.strategies = {
                    active: this.toggleRelatedItems.bind(this),
                    on: this.switchEvent.bind(this),
                    toggle: this.changeTargetElements.bind(this),
                    disconnected: this.toggleCollapseConnection.bind(this)
                }, this.handlers = {
                    onMouseOver: d.bind(this, this.onMouseOver),
                    onMouseOut: d.bind(this, this.onMouseOut),
                    onDocumentClick: d.bind(this, this.onDocumentClick),
                    toggleActiveState: d.bind(this, this.toggleActiveState),
                    clearHideTimeout: d.bind(this, this.clearHideTimeout),
                    positionSubmenu: d.bind(this, this.positionSubmenu)
                }, this.cache = new Map
            }

            get active() {
                return this.hasAttribute("active")
            }

            set active(e) {
                e ? this.setAttribute("active", "") : this.removeAttribute("active")
            }

            get disconnected() {
                return this.hasAttribute("disconnected")
            }

            set disconnected(e) {
                e ? this.setAttribute("disconnected", "") : this.removeAttribute("disconnected")
            }

            connectedCallback() {
                this.isMounted = !0;
                let e = this.getAttribute("on");
                e || (e = "hover", this.setAttribute("on", "hover")), this.disconnected && (this.disconnected = !0), this.setupEventHandlers(e)
            }

            attributeChangedCallback(e, t, n) {
                const s = this.getStrategy(e);
                s && s(n, t)
            }

            disconnectedCallback() {
                this.isMounted = !1, this.clearMemory()
            }

            toggleCollapseConnection() {
                if (this.disconnected) this.clearMemory(), this.active = !1; else {
                    const e = this.getAttribute("on");
                    this.setupEventHandlers(e)
                }
                b.findRelatedElements(this).forEach(e => {
                    const t = e;
                    t.disconnected = this.disconnected, t.visible = this.disconnected
                })
            }

            toggleRelatedItems() {
                b.findRelatedElements(this).forEach(e => {
                    e.visible = this.active
                })
            }

            toggleActiveState(e) {
                e.stopPropagation(), this.deactivateGroupMembers(), this.active = !this.active, b.performEditorIntegrationHandlers()
            }

            static performEditorIntegrationHandlers() {
                if (o()) {
                    const e = window.parent.ws;
                    c(e, "view.operations.setHoveredElement")(null)
                }
            }

            switchEvent(e) {
                this.clearMemory(), this.setupEventHandlers(e)
            }

            changeTargetElements() {
                this.clearMemory();
                const e = this.cache.get("on");
                this.setupEventHandlers(e)
            }

            setupEventHandlers(e) {
                this.cache.set("on", e), "click" === e || f ? this.interactOnClick() : this.interactOnHover()
            }

            interactOnClick() {
                this.addEventListener("click", this.handlers.toggleActiveState, !1), document.documentElement.addEventListener("click", this.handlers.onDocumentClick, !1)
            }

            interactOnHover() {
                this.addEventListener("mouseover", this.handlers.onMouseOver, !1), this.addEventListener("mouseout", this.handlers.onMouseOut, !1)
            }

            onDocumentClick(e) {
                const {target: t} = e, n = this.getAttribute("toggle");
                let s;
                if (h(this)) {
                    s = this.closest("ws-nav").querySelector(n)
                } else s = t.closest(n);
                const i = s && u(s, e);
                !this.active || i && t !== this || (this.active = !1, e.stopPropagation(), b.performEditorIntegrationHandlers())
            }

            onMouseOver() {
                this.clearHideTimeout(), this.active || (this.deactivateGroupMembers(), this.active = !0, this.relatedElements = b.findRelatedElements(this), this.relatedElements.forEach(e => {
                    e.addEventListener("mouseover", this.handlers.clearHideTimeout, !1), e.addEventListener("mouseout", this.handlers.onMouseOut, !1), this.handlers.positionSubmenu(e)
                }))
            }

            positionSubmenu(e) {
                const t = this.closest(v.submenu);
                if (e && t) {
                    if (e.hasAttribute("display-top")) e.style.bottom = `calc(100% - ${this.offsetTop}px)`; else {
                        const n = t.scrollTop;
                        e.style.top = this.offsetTop - n + "px"
                    }
                    const n = e.getBoundingClientRect();
                    n.right > (window.innerWidth || document.documentElement && document.documentElement.clientWidth) && (e.style.left = -n.width - 16 + "px")
                }
            }

            onMouseOut() {
                this.hideTimeout = setTimeout(() => {
                    this.active = !1, this.clearRelatedListeners()
                }, 300)
            }

            deactivateGroupMembers() {
                const e = this.getAttribute("group-id");
                document.querySelectorAll(`ws-nav-toggle[active][group-id='${e}']`).forEach(e => {
                    const t = e;
                    t !== this && (t.active = !1, b.hideNestedCollapse(t))
                })
            }

            clearRelatedListeners() {
                this.relatedElements && (this.relatedElements.forEach(e => {
                    e.removeEventListener("mouseover", this.handlers.clearHideTimeout, !1), e.removeEventListener("mouseout", this.handlers.onMouseOut, !1)
                }), this.relatedElements = null)
            }

            clearHideTimeout() {
                this.hideTimeout && (clearTimeout(this.hideTimeout), this.hideTimeout = null)
            }

            removeClickEvents() {
                this.removeEventListener("click", this.handlers.toggleActiveState, !1), document.documentElement.removeEventListener("click", this.handlers.onDocumentClick, !1)
            }

            removeHoverEvents() {
                this.removeEventListener("mouseover", this.handlers.onMouseOver, !1), this.removeEventListener("mouseout", this.handlers.onMouseOut, !1), this.clearRelatedListeners()
            }

            clearMemory() {
                "click" === this.cache.get("on") || f ? this.removeClickEvents() : this.removeHoverEvents()
            }

            getStrategy(e) {
                return this.strategies[e]
            }
        }

        customElements.define("ws-nav-toggle", b);
        var y = function (e) {
            const t = e.getBoundingClientRect(), n = t.left, s = t.right;
            return document.documentElement.clientWidth - s < 0 || n < 0
        };
        var w = e => {
            const t = document.querySelector(".page-container");
            if (!t) return !0;
            const {top: n, height: s} = e.getBoundingClientRect(), i = document.querySelector("html");
            return t.offsetHeight < i.scrollTop + n + s
        };
        var S = () => Boolean(window.previewMode);
        let _ = 0;
        var E = e => {
            const t = window.frameElement, n = t.ownerDocument.querySelector(".ws-view");
            e.visible ? (_ = n.scrollTop, t.style.maxHeight = "100%", document.documentElement.scrollTo({top: _})) : (t.style.removeProperty("max-height"), n.scrollTo({top: _}))
        };

        class A extends HTMLElement {
            get visible() {
                return this.hasAttribute("visible")
            }

            set visible(e) {
                e ? (this.setAttribute("visible", ""), this.getAttribute("disable-body-scroll") && this.disableBodyScroll()) : (this.removeAttribute("visible"), this.getAttribute("disable-body-scroll") && this.enableBodyScroll()), this.outOfScreen = this.visible, this.displayOnTop = this.visible
            }

            set disconnected(e) {
                e ? this.setAttribute("disconnected", "") : this.removeAttribute("disconnected")
            }

            get outOfScreen() {
                return this.hasAttribute("out-of-screen")
            }

            set outOfScreen(e) {
                e && y(this) ? this.setAttribute("out-of-screen", "") : this.removeAttribute("out-of-screen")
            }

            set displayOnTop(e) {
                this.removeAttribute("style"), e && w(this) ? this.setAttribute("display-top", "") : this.removeAttribute("display-top")
            }

            disableBodyScroll() {
                this.hasAttribute("disconnected") || (document.body.classList.add("nav-open"), i.a.ios && o() && !S() && E(this))
            }

            enableBodyScroll() {
                this.hasAttribute("disconnected") || (document.body.classList.remove("nav-open"), i.a.ios && o() && !S() && E(this))
            }
        }

        customElements.define("ws-nav-collapse", A);
        n(46);
        var k = n(0),
            M = new Map([["layout-xs", 0], ["layout-sm", 576], ["layout-md", 768], ["layout-lg", 992], ["layout-xl", 1200]]);
        var C = function (e, t, n) {
            let s = e;
            const i = [];
            for (; s && s !== t;) n ? s.matches(n) && i.push(s) : i.push(s), s = s.parentNode;
            return i
        };
        var O = e => e.startsWith("http://") || e.startsWith("https://") || e.startsWith("//");
        var x = function (e) {
            let t = e.offsetWidth;
            const n = getComputedStyle(e);
            return t += parseInt(n.marginLeft, 10) + parseInt(n.marginRight, 10), t
        };
        var T = (e, t, n, s, i) => {
            let o = 0, r = t.findIndex(e => (o += x(e) + 4, o > s));
            for (i || (o += x(n) - x(t[r])); o > s && r > 0;) r -= 1, o = o - x(t[r]) - 4;
            const a = t.slice(r, t.length - 1);
            if (i) {
                const t = e.children[0];
                a.forEach(e => {
                    t.insertAdjacentElement("beforebegin", e)
                })
            } else a.forEach(t => {
                e.insertAdjacentElement("beforeend", t)
            }), n.setAttribute("auto-collapse", m)
        };
        var L = function (e, t, n, s, i) {
            const o = (e, t, s) => {
                n.insertAdjacentElement("beforebegin", e), t === s.length - 1 && n.setAttribute("auto-collapse", p)
            };
            if (e.length > 1) {
                const {top: n} = e[0].getBoundingClientRect(), {top: s} = e[1].getBoundingClientRect();
                if (n !== s) return void Array.prototype.forEach.call(t, o)
            }
            let r = e.reduce((e, t) => e + x(t) + 4, 0);
            Array.prototype.every.call(t, (e, t, i) => {
                const o = t === i.length - 1, a = document.importNode(e, !0);
                return a.setAttribute("dummy-element", t), n.insertAdjacentElement("beforebegin", a), r += x(a) + 4, o && (r -= x(n) - 4), r < s ? (e.remove(), o && n.setAttribute("auto-collapse", p), !0) : (a.remove(), !1)
            });
            const a = i.querySelectorAll("[dummy-element]");
            Array.prototype.forEach.call(a, e => {
                e.removeAttribute("dummy-element")
            })
        };
        var j = function (e, t, n) {
            if (e.length <= t) return !1;
            const s = n ? e.length - 1 : e.length - 2, {top: i} = e[0].getBoundingClientRect(), {top: o} = e[1].getBoundingClientRect(), {top: r} = e[s].getBoundingClientRect();
            return i === o && i !== r
        }, B = n(5);
        var N = function (e) {
            const t = document.documentElement.lang;
            return B[t] && B[t][e] ? B[t][e] : e
        }, q = Object.freeze({
            menuItem: '<li class="ws-nav__menu-list-item">\n    <a class="ws-nav__menu-link">\n      <span></span>\n    </a>\n  </li>',
            nestableMenuItem: '<li class="ws-nav__menu-list-item">\n    <ws-nav-toggle on="hover" class="ws-nav__toggle">\n      <a class="ws-nav__menu-link">\n        <span></span>\n      </a>\n    </ws-nav-toggle>\n    <ws-nav-collapse class="ws-nav__submenu">\n      <ul class="ws-nav__submenu-list"></ul>\n    </ws-nav-collapse>\n  </li>',
            submenuItem: '<li class="ws-nav__submenu-list-item">\n    <a class="ws-nav__menu-link">\n      <span></span>\n    </a>\n  </li>',
            nestableSubmenuItem: '<li class="ws-nav__submenu-list-item">\n    <ws-nav-toggle on="hover" class="ws-nav__toggle">\n      <a class="ws-nav__menu-link">\n        <span></span>\n      </a>\n    </ws-nav-toggle>\n    <ws-nav-collapse class="ws-nav__submenu">\n      <ul class="ws-nav__submenu-list"></ul>\n    </ws-nav-collapse>\n  </li>'
        });
        var R = e => {
            if (!e.querySelector("[auto-collapse]")) {
                const t = document.createElement("div");
                t.innerHTML = q.nestableMenuItem;
                const n = t.firstChild;
                n.setAttribute("auto-collapse", p);
                const s = n.querySelector("ws-nav-toggle"), i = n.querySelector("ws-nav-collapse");
                s.setAttribute("toggle", "#ws-nav-auto-collapse"), s.setAttribute("group-id", "auto-collapse"), i.setAttribute("id", "ws-nav-auto-collapse");
                n.querySelector(v.itemText).textContent = N("More"), n.insertAdjacentHTML("beforeend", '\n  <style>\n    [auto-collapse="disabled"],\n    [dummy-element]{\n      position: absolute;\n      right: 0;\n      pointer-events: none;\n      opacity: 0;\n      visibility: hidden;\n    }\n  </style>\n'), e.insertAdjacentElement("beforeend", n)
            }
        };

        class P extends HTMLElement {
            constructor() {
                super(), this.cache = new Map, this.scrollingElement = document.scrollingElement, this.isInShadowDom = h(this), this.handlers = {
                    applyLayoutClass: d.bind(this, this.applyLayoutClass),
                    applyStickUp: d.bind(this, this.applyStickUp),
                    autoCollapseNav: d.bind(this, this.autoCollapseNav)
                }, this.templateSettings = q, this.selectorSettings = v
            }

            static getTemplates() {
                return q
            }

            static getSelectors() {
                return v
            }

            static getAutocollapsingAttribute() {
                return "auto-collapse"
            }

            connectedCallback() {
                this.applyActivePage(), this.applyLayoutClass(), window.addEventListener("resize", this.handlers.applyLayoutClass, !1), window.addEventListener("orientationchange", this.handlers.applyLayoutClass, !1), o() && !S() || window.addEventListener("scroll", this.handlers.applyStickUp, !1), this.menu = this.querySelector(v.menu), this.menu && (R(this.menu), this.autoCollapseNav(), this.resizeObserver = new k.a(this.handlers.autoCollapseNav), this.resizeObserver.observe(this.menu)), this.createStickUpClone()
            }

            disconnectedCallback() {
                this.menu && this.resizeObserver.unobserve(this.menu), window.removeEventListener("resize", this.handlers.applyLayoutClass, !1), window.removeEventListener("orientationchange", this.handlers.applyLayoutClass, !1), window.removeEventListener("scroll", this.handlers.applyStickUp, !1)
            }

            get isStuck() {
                return this.hasAttribute("is-stuck")
            }

            get templates() {
                return this.templateSettings
            }

            get selectors() {
                return this.selectorSettings
            }

            set isStuck(e) {
                this.isStuck !== e && (e ? this.setAttribute("is-stuck", "") : this.removeAttribute("is-stuck"))
            }

            set templates(e) {
                this.templateSettings = e
            }

            set selectors(e) {
                this.selectorSettings = e
            }

            autoCollapseNav() {
                this.querySelectorAll("ws-nav-content").forEach(e => {
                    const t = e.querySelector(v.menu), n = e.querySelectorAll(`${v.menu} > ${v.menuItem}`),
                        s = Array.from(n),
                        i = t.querySelector("[auto-collapse]"), {width: o} = t.getBoundingClientRect(),
                        r = i.getAttribute("auto-collapse") === m;
                    if (j(n, 2, r)) {
                        const e = i.querySelector(v.submenu);
                        T(e, s, i, o, r)
                    } else {
                        const n = e.querySelectorAll(`[auto-collapse] > ${v.submenu} > ${v.submenuItem}`);
                        n.length && L(s, n, i, o, t)
                    }
                })
            }

            getCurrentLayout() {
                const {innerWidth: e} = window;
                let t, n = "";
                return M.forEach((s, i) => {
                    e >= s && (t = i, n = this.getAttribute(t) || n)
                }), {className: n, layout: t}
            }

            createStickUpClone() {
                if ((!o() || S()) && this.getAttribute("stick-up-clone")) {
                    const e = this.querySelector("ws-nav-content");
                    if (e) {
                        const t = document.importNode(e, !0);
                        t.classList.add("ws-nav-content-clone"), t.querySelectorAll("ws-nav-toggle").forEach((e, n) => {
                            const s = e.getAttribute("toggle"), i = "ws-nav-toggle-clone-" + n;
                            e.setAttribute("toggle", "." + i), t.querySelectorAll(s).forEach(e => {
                                e.classList.add(i), e.removeAttribute("id")
                            })
                        }), this.appendChild(t), this.setStickUpConfig()
                    }
                }
            }

            setStickUpConfig() {
                const e = this.querySelector("ws-nav-content.ws-nav-content-clone");
                if (e) {
                    const {scrollTop: t} = this.scrollingElement;
                    let {bottom: n, top: s, height: i} = this.getBoundingClientRect();
                    n += t, s += t;
                    const {height: o} = e.getBoundingClientRect(), r = (i - o) / 2;
                    this.cache.set("bottom", n), this.cache.set("top", s), this.cache.set("stick-up-offset", r)
                }
            }

            applyLayoutClass() {
                const {layout: e, className: t} = this.getCurrentLayout(), n = this.cache.get("className"),
                    s = this.cache.get("layout");
                n !== t && (n && this.classList.remove(n), t && this.classList.add(t)), s !== e && this.switchToggleConnection(e), o() && !S() || !this.getAttribute("stick-up-clone") || this.setStickUpConfig(), this.cache.set("layout", e), this.cache.set("className", t)
            }

            applyActivePage() {
                let e, t = window.location.pathname;
                if (document.baseURI && (t = new URL(document.baseURI).pathname), "/" !== t && (t = t.replace(/(\/)+$/, "")), this.isInShadowDom) {
                    if (!this.navigationSlotNode()) return;
                    e = this.getNavigationSlotElements("a[href]", !0)
                } else e = this.querySelectorAll("a[href]");
                e.forEach(e => {
                    let n = e.pathname;
                    const s = e.getAttribute("href");
                    if ("/" !== n && (n = e.pathname.replace(/(\/)+$/, "")), !O(s) && n === t && !e.href.includes("#")) {
                        if (n.split("/").filter(e => e).every(e => t.includes(e))) {
                            const t = this.isInShadowDom ? this.navigationSlotNode() : this;
                            C(e, t, "li").forEach(e => {
                                e.classList.add("active")
                            })
                        }
                    }
                })
            }

            switchToggleConnection(e) {
                const t = M.get(e);
                this.querySelectorAll("ws-nav-toggle[disconnect-when]").forEach(e => {
                    const n = e, s = n.getAttribute("disconnect-when"), i = M.get(s), o = t >= i;
                    n.disconnected !== o && (n.isMounted ? n.disconnected = o : setTimeout(() => {
                        n.disconnected = o
                    }))
                })
            }

            applyStickUp() {
                const {scrollTop: e} = this.scrollingElement, t = this.cache.get("bottom"), n = this.cache.get("top"),
                    s = this.cache.get("stick-up-offset");
                this.isStuck ? this.isStuck = e - s > n : this.isStuck = e > t
            }

            navigationSlotNode() {
                const e = this.querySelector('slot[name="navigation"]');
                return e && e.assignedNodes()[0]
            }

            getNavigationSlotElements(e, t, n) {
                const s = this.navigationSlotNode();
                return s ? n && t ? n.querySelectorAll(e) : n ? n.querySelector(e) : t ? s.querySelectorAll(e) : s.querySelector(e) : null
            }
        }

        customElements.define("ws-nav", P)
    }
});
;!function (e) {
    function t(t) {
        for (var o, i, s = t[0], a = t[1], u = t[2], m = 0, p = []; m < s.length; m++) i = s[m], Object.prototype.hasOwnProperty.call(r, i) && r[i] && p.push(r[i][0]), r[i] = 0;
        for (o in a) Object.prototype.hasOwnProperty.call(a, o) && (e[o] = a[o]);
        for (c && c(t); p.length;) p.shift()();
        return l.push.apply(l, u || []), n()
    }

    function n() {
        for (var e, t = 0; t < l.length; t++) {
            for (var n = l[t], o = !0, s = 1; s < n.length; s++) {
                var a = n[s];
                0 !== r[a] && (o = !1)
            }
            o && (l.splice(t--, 1), e = i(i.s = n[0]))
        }
        return e
    }

    var o = {}, r = {21: 0}, l = [];

    function i(t) {
        if (o[t]) return o[t].exports;
        var n = o[t] = {i: t, l: !1, exports: {}};
        return e[t].call(n.exports, n, n.exports, i), n.l = !0, n.exports
    }

    i.m = e, i.c = o, i.d = function (e, t, n) {
        i.o(e, t) || Object.defineProperty(e, t, {enumerable: !0, get: n})
    }, i.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
    }, i.t = function (e, t) {
        if (1 & t && (e = i(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (i.r(n), Object.defineProperty(n, "default", {
            enumerable: !0,
            value: e
        }), 2 & t && "string" != typeof e) for (var o in e) i.d(n, o, function (t) {
            return e[t]
        }.bind(null, o));
        return n
    }, i.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return i.d(t, "a", t), t
    }, i.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, i.p = "";
    var s = window.webpackJsonp = window.webpackJsonp || [], a = s.push.bind(s);
    s.push = t, s = s.slice();
    for (var u = 0; u < s.length; u++) t(s[u]);
    var c = a;
    l.push([47, 0]), n()
}({
    47: function (e, t, n) {
        e.exports = n(58)
    }, 58: function (e, t, n) {
        "use strict";
        n.r(t);
        var o = n(0), r = Object.freeze({
            menu: ".ws-nav__menu-list",
            menuItem: "li",
            submenu: ".ws-nav__submenu > ul",
            submenuItem: "li",
            itemText: "span"
        });
        const l = "enabled", i = "disabled";
        var s = Object.freeze({nestableMenuItem: '<li class="ws-nav__menu-list-item">\n    <ws-nav-toggle on="hover" class="ws-nav__toggle">\n      <a class="ws-nav__menu-link">\n        <span></span>\n      </a>\n    </ws-nav-toggle>\n    <ws-nav-collapse class="ws-nav__submenu">\n      <ul class="ws-nav__submenu-list"></ul>\n    </ws-nav-collapse>\n  </li>'}),
            a = "--ws-nav-min-width";
        var u = function (e, t) {
            e.call(this, t)
        }, c = new Map([["layout-xl", 1200]]);
        const m = window.matchMedia(`(min-width: ${c.get("layout-xl")}px)`);
        var p = () => m.matches;
        var d = function (e, t) {
            const n = t ? e.length : e.length - 1;
            if (!(n > 2) || !p()) return !1;
            const o = n - 1, {top: r} = e[0].getBoundingClientRect(), {top: l} = e[o].getBoundingClientRect();
            return r !== l
        };
        var h = function (e) {
            let t = e.offsetWidth;
            const n = getComputedStyle(e);
            return t += parseInt(n.marginLeft, 10) + parseInt(n.marginRight, 10), t
        };
        var b = (e, t, n, o, r) => {
            let i = 0, s = t.findIndex(e => (i += h(e), i > o));
            for (r || (i += h(n) - h(t[s])); i > o && s > 0;) s -= 1, i -= h(t[s]);
            const a = t.slice(s, t.length - 1);
            if (r) {
                const t = e.children[0];
                a.forEach(e => {
                    t.insertAdjacentElement("beforebegin", e)
                })
            } else a.forEach(t => {
                e.insertAdjacentElement("beforeend", t)
            }), n.setAttribute("auto-collapse", l)
        };
        var f = function (e, t, n, o, r) {
            const l = (e, t, o) => {
                n.insertAdjacentElement("beforebegin", e), t === o.length - 1 && n.setAttribute("auto-collapse", i)
            };
            if (e.length > 1) {
                const {top: n} = e[0].getBoundingClientRect(), {top: o} = e[1].getBoundingClientRect();
                if (n !== o) return void Array.prototype.forEach.call(t, l)
            }
            let s = e.reduce((e, t) => e + h(t), 0);
            Array.prototype.every.call(t, (e, t, r) => {
                const l = t === r.length - 1, a = e.cloneNode(!0);
                return a.setAttribute("dummy-element", t), n.insertAdjacentElement("beforebegin", a), s += h(a), l && (s -= h(n)), s < o ? (e.remove(), l && n.setAttribute("auto-collapse", i), !0) : (a.remove(), !1)
            });
            const a = r.querySelectorAll("[dummy-element]");
            Array.prototype.forEach.call(a, e => {
                e.removeAttribute("dummy-element")
            })
        }, g = n(6);
        var v = function (e) {
            const t = document.documentElement.lang;
            return g[t] && g[t][e] ? g[t][e] : e
        };

        class y extends HTMLElement {
            constructor() {
                super(), this.handlers = {
                    autoCollapseNav: u.bind(this, this.autoCollapseNav),
                    onToggleMobileAttribute: u.bind(this, this.toggleMobileAttribute)
                }
            }

            get minWidthStyleProperty() {
                return this.style.getPropertyValue(a)
            }

            set minWidthStyleProperty(e) {
                e && e !== this.minWidthStyleProperty && this.style.setProperty(a, e)
            }

            connectedCallback() {
                if (this.menuElement = this.querySelector(r.menu), this.menuElement) {
                    this.buildAutoCollapsingInitialMarkup(), this.autoCollapseNav(), this.toggleMobileAttribute(), m.addListener(this.handlers.onToggleMobileAttribute);
                    const e = new o.a(this.handlers.autoCollapseNav);
                    e.observe(this.menuElement);
                    const t = this.querySelectorAll(`${r.menu} > ${r.menuItem}`);
                    e.observe(t[0])
                }
            }

            disconnectedCallback() {
                m.removeListener(this.handlers.onToggleMobileAttribute)
            }

            autoCollapseNav() {
                const e = this.querySelectorAll(`${r.menu} > ${r.menuItem}`), t = Array.from(e),
                    n = this.menuElement.querySelector("[auto-collapse]"), {width: o} = this.menuElement.getBoundingClientRect(),
                    i = n.getAttribute("auto-collapse") === l;
                if (d(e, i)) {
                    const l = n.querySelector(r.submenu);
                    this.setNonBreakingWidth(e[0], n), b(l, t, n, o, i)
                } else {
                    const e = this.querySelectorAll(`[auto-collapse] > ${r.submenu} > ${r.submenuItem}`);
                    e.length && f(t, e, n, o, this.menuElement)
                }
            }

            buildAutoCollapsingInitialMarkup() {
                if (!this.menuElement.querySelector("[auto-collapse]")) {
                    const e = document.createElement("div");
                    e.innerHTML = s.nestableMenuItem;
                    const t = e.firstChild;
                    t.setAttribute("auto-collapse", i);
                    const n = t.querySelector("ws-nav-toggle"), o = t.querySelector("ws-nav-collapse");
                    n.setAttribute("toggle", "#ws-nav-auto-collapse"), n.setAttribute("group-id", "auto-collapse"), o.setAttribute("id", "ws-nav-auto-collapse");
                    t.querySelector(r.itemText).textContent = v("More"), t.insertAdjacentHTML("beforeend", '\n  <style>\n    [auto-collapse="disabled"],\n    [dummy-element]{\n      position: absolute!important;\n      right: 0!important;\n      pointer-events: none!important;\n      opacity: 0!important;\n      visibility: hidden!important;\n    }\n  </style>\n'), this.menuElement.insertAdjacentElement("beforeend", t)
                }
            }

            setNonBreakingWidth(e, t) {
                const n = h(e), o = h(t);
                this.minWidthStyleProperty = n + o + 10 + "px"
            }

            toggleMobileAttribute(e = m) {
                e.matches ? this.removeAttribute("data-view") : this.setAttribute("data-view", "mobile")
            }
        }

        customElements.define("ws-navigation", y)
    }, 6: function (e) {
        e.exports = JSON.parse('{"cs":{"More":"Více"},"de":{"More":"Mehr"},"es":{"More":"Más"},"fi":{"More":"Lisää"},"fr":{"More":"Plus"},"hu":{"More":"Több"},"id":{"More":"Lebih"},"it":{"More":"Di Più"},"ja":{"More":"もっと"},"nb":{"More":"Mer"},"nl":{"More":"Meer"},"pl":{"More":"Więcej"},"pt-br":{"More":"Mais"},"ru":{"More":"Больше"},"sk":{"More":"viac"},"sv":{"More":"Mer"},"zh-cn":{"More":"更多"},"en":{"More":"More"}}')
    }
});
;!function (n) {
    function t(t) {
        for (var o, r, s = t[0], l = t[1], d = t[2], p = 0, g = []; p < s.length; p++) r = s[p], Object.prototype.hasOwnProperty.call(a, r) && a[r] && g.push(a[r][0]), a[r] = 0;
        for (o in l) Object.prototype.hasOwnProperty.call(l, o) && (n[o] = l[o]);
        for (c && c(t); g.length;) g.shift()();
        return i.push.apply(i, d || []), e()
    }

    function e() {
        for (var n, t = 0; t < i.length; t++) {
            for (var e = i[t], o = !0, s = 1; s < e.length; s++) {
                var l = e[s];
                0 !== a[l] && (o = !1)
            }
            o && (i.splice(t--, 1), n = r(r.s = e[0]))
        }
        return n
    }

    var o = {}, a = {11: 0}, i = [];

    function r(t) {
        if (o[t]) return o[t].exports;
        var e = o[t] = {i: t, l: !1, exports: {}};
        return n[t].call(e.exports, e, e.exports, r), e.l = !0, e.exports
    }

    r.m = n, r.c = o, r.d = function (n, t, e) {
        r.o(n, t) || Object.defineProperty(n, t, {enumerable: !0, get: e})
    }, r.r = function (n) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(n, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(n, "__esModule", {value: !0})
    }, r.t = function (n, t) {
        if (1 & t && (n = r(n)), 8 & t) return n;
        if (4 & t && "object" == typeof n && n && n.__esModule) return n;
        var e = Object.create(null);
        if (r.r(e), Object.defineProperty(e, "default", {
            enumerable: !0,
            value: n
        }), 2 & t && "string" != typeof n) for (var o in n) r.d(e, o, function (t) {
            return n[t]
        }.bind(null, o));
        return e
    }, r.n = function (n) {
        var t = n && n.__esModule ? function () {
            return n.default
        } : function () {
            return n
        };
        return r.d(t, "a", t), t
    }, r.o = function (n, t) {
        return Object.prototype.hasOwnProperty.call(n, t)
    }, r.p = "";
    var s = window.webpackJsonp = window.webpackJsonp || [], l = s.push.bind(s);
    s.push = t, s = s.slice();
    for (var d = 0; d < s.length; d++) t(s[d]);
    var c = l;
    i.push([30, 0]), e()
}({
    30: function (n, t, e) {
        n.exports = e(56)
    }, 56: function (n, t, e) {
        "use strict";
        e.r(t);
        var o = e(0);
        var a = function (n, t) {
            n.call(this, t)
        };
        var i = function () {
            try {
                return Boolean(window.parent.ws)
            } catch (n) {
                return !1
            }
        };
        var r = function (n) {
            window.ShadyCSS && window.ShadyCSS.prepareTemplate(n, "ws-footer")
        };
        const s = new Map;
        [{name: "--screen-width-xs", key: "xs", fallbackValue: 0}, {
            name: "--screen-width-sm",
            key: "sm",
            fallbackValue: 576
        }, {name: "--screen-width-md", key: "md", fallbackValue: 768}, {
            name: "--screen-width-lg",
            key: "lg",
            fallbackValue: 992
        }, {name: "--screen-width-xl", key: "xl", fallbackValue: 1200}].forEach(n => {
            const t = getComputedStyle(document.documentElement).getPropertyValue(n.name),
                e = t ? parseFloat(t) : n.fallbackValue;
            s.set(n.key, e)
        });
        var l = s;
        var d = function () {
            const n = document.documentElement, t = n.getAttribute("data-locale");
            return n.hasAttribute("data-locale") ? t : null
        };
        var c = n => {
            const {pathname: t} = window.location;
            return !n || !t.startsWith(`/${n}/`)
        };
        var p = function (n, t) {
            const e = n.querySelector(".logo-wrapper");
            e && (e.href = `/${t}/`)
        }, g = "ws-defined", m = {
            LOGO: "business-logo",
            SITE_NAME: "site-name",
            DESCRIPTION: "business-description",
            ADDRESS: "business-address",
            PHONE: "business-phone",
            EMAIL: "business-email",
            SOCIALS: "business-social-profiles",
            NAVIGATION: "footer-navigation",
            COPYRIGHT: "copyright"
        };
        const u = document.createElement("template");
        u.innerHTML = `\n<style>\n  :host([layout="1"]) {\n    padding-top: var(--ws-footer-padding-top-lg, var(--footer-padding-vertical-lg));\n  }\n\n  :host([layout="1"]) .container {\n    display: grid;\n    grid-column-gap: var(--ws-footer-column-gap, var(--footer-column-gap));\n    grid-row-gap: var(--ws-footer-row-gap-lg, var(--footer-row-gap-lg));\n    align-items: start;\n  }\n\n  :host([layout="1"]) .footer-info {\n    grid-column: 1 / -1;\n  }\n\n  :host([layout="1"]) [name="copyright"] {\n    grid-column: 1 / -1;\n  }\n\n  @media (min-width: ${l.get("md")}px) {\n    :host([layout="1"]) .container {\n      grid-template-columns: 2fr 1fr;\n    }\n  }\n\n  @media (min-width: ${l.get("lg")}px) {\n    :host([layout="1"]) .container {\n      display: grid;\n      grid-template-columns: repeat(4 , 1fr);\n      grid-column-gap: var(--ws-footer-column-gap, var(--footer-column-gap));\n      grid-row-gap: var(--ws-footer-row-gap-lg, var(--footer-row-gap-lg));\n      align-items: start;\n    }\n\n    :host([layout="1"]) .footer-info {\n      grid-column: auto;\n    }\n\n    :host([layout="1"]) [name="footer-navigation"] {\n      grid-column-start: 2 span;\n    }\n\n    :host([layout="1"]) .footer-info[hidden] ~ .contact-info {\n      grid-column-start: 2 span;\n    }\n\n    :host([layout="1"]) [name="copyright"] {\n      grid-column: 1 / -1;\n    }\n  }\n</style>\n\n<div class="container">\n  <div class="footer-info">\n    <a href="/" class="logo-wrapper">\n      <slot name="business-logo"></slot>\n      <slot name="site-name"></slot>\n    </a>\n    <slot name="business-description"></slot>\n    <slot name="business-social-profiles"></slot>\n  </div>\n  <slot name="footer-navigation"></slot>\n  <div class="contact-info">\n    <slot name="business-address"></slot>\n    <slot name="business-phone"></slot>\n    <slot name="business-email"></slot>\n  </div>\n  <slot name="copyright"></slot>\n</div>\n`, r(u);
        var h = u;
        const f = document.createElement("template");
        f.innerHTML = `\n<style>\n  :host([layout="2"]) {\n    padding-top: var(--ws-footer-padding-top-lg, var(--footer-padding-vertical-lg));\n  }\n\n  :host([layout="2"]) .container {\n    display: grid;\n    grid-row-gap: var(--ws-footer-row-gap-lg, var(--footer-row-gap-lg));\n  }\n\n  @media (min-width: ${l.get("lg")}px) {\n    :host([layout="2"]) .footer-info {\n      max-width: 50%;\n    }\n  }\n</style>\n\n<div class="container">\n  <div class="footer-info">\n    <a href="/" class="logo-wrapper">\n      <slot name="business-logo"></slot>\n      <slot name="site-name"></slot>\n    </a>\n    <slot name="business-description"></slot>\n  </div>\n  <slot name="footer-navigation"></slot>\n  <div class="footer-bottom">\n    <slot name="business-social-profiles"></slot>\n    <slot name="copyright"></slot>\n  </div>\n</div>\n`, r(f);
        var v = f;
        const w = document.createElement("template");
        w.innerHTML = '\n<style>\n  :host([layout="3"]) {\n    padding-top: var(--ws-footer-padding-top-lg, var(--footer-padding-vertical-lg));\n  }\n\n  :host([layout="3"]) .container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    text-align: center;\n  }\n\n  :host([layout="3"]) *:not([hidden]) ~ [name="footer-navigation"] {\n    margin-top: var(--ws-footer-row-gap-md, var(--footer-row-gap-md));\n  }\n\n  :host([layout="3"]) [name="copyright"] {\n    margin-top: var(--ws-footer-row-gap-lg, var(--footer-row-gap-lg));\n  }\n</style>\n\n<div class="container container--small">\n  <a href="/" class="logo-wrapper">\n    <slot name="business-logo"></slot>\n    <slot name="site-name"></slot>\n  </a>\n  <slot name="business-description"></slot>\n  <slot name="footer-navigation"></slot>\n  <slot name="business-social-profiles"></slot>\n  <slot name="copyright"></slot>\n</div>\n', r(w);
        var y = w;
        const b = document.createElement("template");
        b.innerHTML = `\n<style>\n  :host([layout="4"]) .container {\n    display: grid;\n    grid-row-gap: var(--ws-footer-row-gap-sm, var(--footer-row-gap-sm));\n    justify-items: center;\n    text-align: center;\n  }\n\n  @media (min-width: ${l.get("lg")}px) {\n    :host([layout="4"]) .container {\n      display: grid;\n      grid-template-columns: auto 1fr;\n      grid-column-gap: var(--ws-footer-column-gap, var(--footer-column-gap));\n      justify-items: start;\n      align-items: center;\n      text-align: left;\n    }\n\n    :host([layout="4"]) [name="footer-navigation"] {\n      justify-self: end;\n      grid-column-end: -1;\n    }\n\n    :host([layout="4"]) [name="copyright"] {\n      grid-column: 1 / -1;\n    }\n  }\n</style>\n\n<div class="container">\n  <a href="/" class="logo-wrapper">\n    <slot name="business-logo"></slot>\n    <slot name="site-name"></slot>\n  </a>\n  <slot name="footer-navigation"></slot>\n  <slot name="copyright"></slot>\n</div>\n`, r(b);
        var x = b;
        const S = document.createElement("template");
        S.innerHTML = '\n<style>\n  :host([layout="5"]) .container {\n    display: grid;\n    grid-row-gap: var(--ws-footer-row-gap-sm, var(--footer-row-gap-sm));\n    justify-items: center;\n  }\n</style>\n\n<div class="container">\n  <a href="/" class="logo-wrapper">\n    <slot name="business-logo"></slot>\n    <slot name="site-name"></slot>\n  </a>\n  <slot name="copyright"></slot>\n</div>\n', r(S);
        var L = {LAYOUT_1: h, LAYOUT_2: v, LAYOUT_3: y, LAYOUT_4: x, LAYOUT_5: S},
            O = [{name: "1", template: L.LAYOUT_1, disabledSlots: []}, {
                name: "2",
                template: L.LAYOUT_2,
                disabledSlots: [m.ADDRESS, m.PHONE, m.EMAIL],
                columnNavigation: !0
            }, {
                name: "3",
                template: L.LAYOUT_3,
                disabledSlots: [m.ADDRESS, m.PHONE, m.EMAIL],
                navigationCanMutate: !0
            }, {
                name: "4",
                template: L.LAYOUT_4,
                disabledSlots: [m.ADDRESS, m.PHONE, m.EMAIL, m.SOCIALS, m.DESCRIPTION],
                navigationCanMutate: !0
            }, {
                name: "5",
                template: L.LAYOUT_5,
                disabledSlots: [m.DESCRIPTION, m.ADDRESS, m.PHONE, m.EMAIL, m.SOCIALS, m.NAVIGATION]
            }];
        const E = document.createElement("template");
        E.innerHTML = `\n  <style>\n    :host {\n      /* footer fallback variables */\n\n      --footer-container-width: 100%;\n      --footer-container-width-small: 770px;\n\n      --footer-padding-vertical: 30px;\n      --footer-padding-vertical-lg: 30px;\n\n      --footer-column-gap: 30px;\n      --footer-row-gap-lg: 28px;\n      --footer-row-gap-md: 22px;\n      --footer-row-gap-sm: 16px;\n\n      display: block;\n      padding-top: var(--ws-footer-padding-top, var(--footer-padding-vertical));\n      padding-bottom: var(--ws-footer-padding-top, var(--footer-padding-vertical));\n      background-color: var(--ws-footer-background-color, #fff);\n      text-align: left;\n    }\n\n    * {\n      box-sizing: border-box;\n    }\n\n    slot {\n      display: block;\n    }\n\n    [hidden] {\n      display: none !important;\n    }\n\n    .container {\n      max-width: var(--footer-container-width);\n      padding-right: var(--container-padding-right, 15px);\n      padding-left: var(--container-padding-left, 15px);\n      margin-right: auto;\n      margin-left: auto;\n    }\n\n    .logo-wrapper {\n      display: inline-flex;\n      max-width: var(--ws-m-logo-wrapper-max-width);\n      text-decoration: none;\n    }\n\n    .logo-wrapper [name="business-logo"]:not([hidden]) + [name="site-name"] {\n      align-self: center;\n      margin-left: var(--ws-footer-logo-wrapper-gap, 12px);\n    }\n\n    .logo-wrapper [name="site-name"] {\n      min-width: var(--ws-m-site-name-min-width);\n      word-wrap: break-word;\n    }\n\n    *:not([hidden]) ~ [name="business-description"] {\n      margin-top: var(--ws-footer-row-gap-sm, var(--footer-row-gap-sm));\n    }\n\n    *:not([hidden]) ~ [name="business-social-profiles"] {\n      margin-top: var(--ws-footer-social-indent-top, 28px);\n    }\n\n    .contact-info {\n      display: grid;\n      grid-row-gap: var(--ws-footer-contact-info-item-gap, 8px);\n    }\n\n    .footer-bottom {\n      display: grid;\n      grid-row-gap: var(--ws-footer-row-gap-sm, var(--footer-row-gap-sm));\n    }\n\n    @media (min-width: ${l.get("sm")}px) {\n      :host {\n        --footer-container-width: 540px;\n        --footer-padding-vertical: 32px;\n        --footer-padding-vertical-lg: 58px;\n        --footer-row-gap-lg: 30px;\n        --footer-row-gap-md: 24px;\n        --footer-row-gap-sm: 18px;\n      }\n\n      .container {\n        max-width: var(--container-max-width-sm, var(--footer-container-width-sm));\n      }\n    }\n\n    @media (min-width: ${l.get("md")}px) {\n      :host {\n        --footer-container-width: 720px;\n        --footer-padding-vertical: 34px;\n        --footer-padding-vertical-lg: 60px;\n        --footer-row-gap-lg: 34px;\n        --footer-row-gap-md: 26px;\n        --footer-row-gap-sm: 20px;\n      }\n\n      .container {\n        max-width: var(--container-max-width-md, var(--footer-container-width-md));\n      }\n\n      .footer-bottom {\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n      }\n\n      .footer-bottom [name="business-social-profiles"] {\n        order: 1;\n      }\n    }\n\n    @media (min-width: ${l.get("lg")}px) {\n      :host {\n        --footer-container-width: 960px;\n        --footer-padding-vertical: 36px;\n        --footer-padding-vertical-lg: 64px;\n        --footer-row-gap-lg: 36px;\n        --footer-row-gap-md: 28px;\n        --footer-row-gap-sm: 22px;\n      }\n\n      .container {\n        max-width: var(--container-max-width-lg, var(--footer-container-width-lg));\n      }\n\n      .container.container--small {\n        max-width: var(--container-max-width-small, var(--footer-container-width-small));\n      }\n    }\n\n    @media (min-width: ${l.get("xl")}px) {\n      :host {\n        --footer-container-width: 1170px;\n        --footer-padding-vertical: 40px;\n        --footer-padding-vertical-lg: 72px;\n        --footer-row-gap-lg: 40px;\n        --footer-row-gap-md: 32px;\n        --footer-row-gap-sm: 24px;\n      }\n\n      .container {\n        max-width: var(--container-max-width-xl, var(--footer-container-width));\n      }\n    }\n  </style>\n`;
        var A = E;
        const C = new MutationObserver(n => {
            n.forEach(n => {
                n.target.onChangeSlot && n.target.onChangeSlot(n)
            })
        }), N = document.createElement("template");
        N.innerHTML = '\n  <div class="wrapper"></div>\n', r(A);

        class T extends HTMLElement {
            static createCopyrightYear() {
                const n = document.createElement("span"), t = (new Date).getFullYear();
                return n.textContent = "© " + t, n
            }

            static getLayout(n) {
                return O.find(t => t.name === n)
            }

            constructor() {
                super(), this.attachShadow({mode: "open"}), [A, N].forEach(n => {
                    this.shadowRoot.appendChild(n.content.cloneNode(!0))
                }), this.wrapper = this.shadowRoot.querySelector(".wrapper"), this.pageLocale = d(), this.disabledSlots = [], this.currentLayout = {}, this.columnNavigationState = !1, this.handlers = {
                    onChangeNavigation: a.bind(this, this.onChangeNavigation),
                    onLogoClick: a.bind(this, n => n.preventDefault())
                }, this.navigationResizeObserver = new o.a(this.handlers.onChangeNavigation), this.addCopyright(), this.setDisabledSlots(), this.setLayout(), this.setAttribute(g, !0), C.observe(this, {childList: !0})
            }

            connectedCallback() {
                window.ShadyCSS && window.ShadyCSS.styleElement(this), i() && this.addLogoLinkEventListener()
            }

            disconnectedCallback() {
                i() && this.removeLogoLinkEventListener()
            }

            getLayout() {
                let n = O.filter(n => n.disabledSlots.every(n => this.disabledSlots.includes(n)));
                return this.columnNavigationState && (n = n.filter(n => this.isLayoutWithColumnNavigation(n)), this.columnNavigationState = !1), n.pop()
            }

            setDisabledSlots() {
                const n = Object.values(m), t = [...this.querySelectorAll("[slot]")].map(n => n.slot),
                    e = n.filter(n => !t.includes(n));
                this.disabledSlots.push(...e)
            }

            setLayout(n) {
                const t = n ? T.getLayout(n) : this.getLayout();
                t && this.currentLayout.name !== t.name && (this.removeNavigationEventListener(), this.currentLayout = t, this.setAttribute("layout", t.name), this.wrapper.innerHTML = "", this.wrapper.appendChild(t.template.content.cloneNode(!0)), this.triggerSlotVisibility(), this.addNavigationEventListener(), c(this.pageLocale) || p(this.wrapper, this.pageLocale))
            }

            addCopyright() {
                this.querySelector(`[slot="${m.COPYRIGHT}"]`).prepend(T.createCopyrightYear())
            }

            triggerSlotVisibility() {
                this.shadowRoot.querySelectorAll("slot").forEach(n => {
                    this.disabledSlots.includes(n.name) ? n.setAttribute("hidden", "") : n.removeAttribute("hidden")
                });
                this.shadowRoot.querySelectorAll(".logo-wrapper, .footer-info").forEach(n => {
                    [...n.querySelectorAll("slot")].every(n => n.hidden) ? n.setAttribute("hidden", "") : n.removeAttribute("hidden")
                })
            }

            isNavigationCanMutate() {
                return Object.prototype.hasOwnProperty.call(this.currentLayout, "navigationCanMutate") && this.currentLayout.navigationCanMutate
            }

            isLayoutWithColumnNavigation(n = this.currentLayout) {
                return Object.prototype.hasOwnProperty.call(n, "columnNavigation") && n.columnNavigation
            }

            isColumnNavigation() {
                const n = this.querySelector(`[slot="${m.NAVIGATION}"]`), [t, e] = n.querySelectorAll("li:first-child, li:last-child"), {top: o} = t.getBoundingClientRect(), {top: a} = e.getBoundingClientRect();
                return o !== a
            }

            onChangeSlot(n) {
                n && (n.addedNodes.forEach(n => {
                    const t = this.disabledSlots.indexOf(n.slot);
                    this.disabledSlots.includes(n.slot) && this.disabledSlots.splice(t, 1)
                }), n.removedNodes.forEach(n => {
                    Object.values(m).includes(n.slot) && this.disabledSlots.push(n.slot)
                }), this.setLayout(), this.triggerSlotVisibility())
            }

            onChangeNavigation(n) {
                !n[0].target.hidden && window.matchMedia(`(min-width: ${l.get("lg")}px)`).matches && this.isColumnNavigation() && (this.columnNavigationState = !0, this.setLayout())
            }

            addNavigationEventListener() {
                if (this.isNavigationCanMutate()) {
                    const n = this.shadowRoot.querySelector(`[name="${m.NAVIGATION}"]`);
                    this.navigationResizeObserver.observe(n)
                }
            }

            removeNavigationEventListener() {
                if (this.isNavigationCanMutate()) {
                    const n = this.shadowRoot.querySelector(`[name="${m.NAVIGATION}"]`);
                    this.navigationResizeObserver.unobserve(n)
                }
            }

            addLogoLinkEventListener() {
                this.shadowRoot.querySelector("a.logo-wrapper") && this.addEventListener("click", this.handlers.onLogoClick)
            }

            removeLogoLinkEventListener() {
                this.shadowRoot.querySelector("a.logo-wrapper") && this.removeEventListener("click", this.handlers.onLogoClick)
            }
        }

        customElements.define("ws-footer", T)
    }
});
;!function (e) {
    var t = {};

    function n(i) {
        if (t[i]) return t[i].exports;
        var s = t[i] = {i: i, l: !1, exports: {}};
        return e[i].call(s.exports, s, s.exports, n), s.l = !0, s.exports
    }

    n.m = e, n.c = t, n.d = function (e, t, i) {
        n.o(e, t) || Object.defineProperty(e, t, {enumerable: !0, get: i})
    }, n.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
    }, n.t = function (e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var i = Object.create(null);
        if (n.r(i), Object.defineProperty(i, "default", {
            enumerable: !0,
            value: e
        }), 2 & t && "string" != typeof e) for (var s in e) n.d(i, s, function (t) {
            return e[t]
        }.bind(null, s));
        return i
    }, n.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "", n(n.s = 41)
}({
    41: function (e, t, n) {
        e.exports = n(60)
    }, 60: function (e, t, n) {
        "use strict";
        n.r(t);
        var i = {
            LANG_CODE_ATTRIBUTE: "data-lang-code",
            LANG_TITLE_ATTRIBUTE: "data-lang-title",
            MAIN_LANG_ATTRIBUTE: "data-main-lang",
            PAGE_LOCALE_ATTRIBUTE: "data-locale",
            LISTBOX_CLASS: "ws-language-listbox",
            LISTBOX_BUTTON_CLASS: "ws-language-listbox-button",
            SELECT_CLASS: "ws-language-select",
            SELECT_LABEL_CLASS: "ws-language-select-label",
            ORIENTATION_TOP: "top",
            ORIENTATION_BOTTOM: "bottom"
        };
        const s = document.createElement("template");
        s.innerHTML = `\n  <style>\n    :host {\n      display: flex;\n      position: relative;\n    }\n\n    ::slotted(svg) {\n      width: 0;\n      height: 0;\n    }\n\n    ::slotted(.${i.LISTBOX_BUTTON_CLASS}) {\n      outline: none;\n    }\n\n    ::slotted(.${i.LISTBOX_CLASS}) {\n      margin: 0;\n      list-style: none;\n    }\n\n    ::slotted(.${i.LISTBOX_CLASS}[hidden]) {\n      display: none;\n    }\n\n    ::slotted(.${i.SELECT_CLASS}) {\n      position: absolute;\n      top: 0;\n      left: 0;\n      width: 0;\n      height: 100%;\n      padding: 0 0 0 100%;\n      background: none;\n      border: none;\n      -moz-appearance: none;\n      -webkit-appearance: none;\n      appearance: none;\n      outline: none;\n      z-index: 1;\n    }\n  </style>\n  <slot></slot>\n`;
        var a = function (e, t) {
            e.call(this, t)
        };
        var o = function () {
            try {
                return Boolean(window.parent.ws)
            } catch (e) {
                return !1
            }
        };
        var l = function (e) {
            if (o()) return window.parent.ws.siteLocales.accessors.getCurrentLocale();
            const t = document.documentElement, n = t.getAttribute(i.PAGE_LOCALE_ATTRIBUTE);
            return t.hasAttribute(i.PAGE_LOCALE_ATTRIBUTE) ? n : e
        };
        var r = function (e, t = "") {
            return `\n    <svg\n      class="ws-language-flag ${t}"\n      width="24"\n      height="24"\n      fill="none"\n    >\n      <use xlink:href="#flag-${e}" />\n    </svg>\n  `
        };
        var c = function (e, t, n) {
            const s = document.createElement("template"), {title: a, code: o} = t, l = r(o);
            return s.innerHTML = `\n    <button\n      class="${i.LISTBOX_BUTTON_CLASS}"\n      aria-haspopup="true"\n      lang="${o}"\n      aria-label="${a}"\n      data-template="listbox"\n    >${l}</button>\n    <ul\n      class="${i.LISTBOX_CLASS}"\n      role="listbox"\n      data-template="listbox"\n      hidden\n    >\n      ${e.reduce((e, t) => {
                const {title: s, code: a} = t, l = r(a);
                return `\n          ${e}\n          <li class="${i.LISTBOX_CLASS}__item" role="option">\n            <a\n              href="${a === n ? "/" : "/" + a}"\n              lang="${a}"\n              class="${i.LISTBOX_CLASS}__link"\n              hreflang="${a}"\n              ${a === o ? 'aria-selected="true"' : ""}\n            >${l}${s}</a>\n          </li>\n        `
            }, "")}\n    </ul>\n  `, s
        };
        var d = function (e, t, n) {
            const s = document.createElement("template"), {title: a, code: l} = t,
                c = r(l, i.SELECT_LABEL_CLASS + "__flag"), d = o() ? 'disabled="true"' : "";
            return s.innerHTML = `\n    <label\n      class="${i.SELECT_LABEL_CLASS}"\n      aria-label="${a}"\n      for="ws-language-select"\n      data-template="select"\n    >\n      <span hidden>${a}</span>\n      ${c}\n    </label>\n    <select\n      id="ws-language-select"\n      class="${i.SELECT_CLASS}"\n      data-template="select"\n      ${d}\n    >\n      ${e.reduce((e, t) => {
                const {title: i, code: s} = t;
                return `\n          ${e}\n          <option\n            value="${s === n ? "/" : "/" + s}"\n            ${s === l ? "selected" : ""}\n          >${i}</option>\n        `
            }, "")}\n    </select>\n  `, s
        };
        const {ORIENTATION_TOP: u, ORIENTATION_BOTTOM: h} = i;
        var g = function (e) {
            const t = document.querySelector(".page-container");
            if (t && e) {
                const n = t.getBoundingClientRect(), i = e.getBoundingClientRect();
                let s = h;
                i.bottom > n.bottom && i.height < (window.innerHeight || document.documentElement.clientHeight) && (s = u), e.setAttribute("data-orientation", s)
            }
        };
        const L = window.matchMedia("(min-width: 1200px)");
        window.ShadyCSS && window.ShadyCSS.prepareTemplate(s, "ws-language-selector");

        class T extends HTMLElement {
            constructor() {
                super(), this.attachShadow({mode: "open"}), this.shadowRoot.appendChild(s.content.cloneNode(!0)), this.handlers = {
                    onChangeTemplate: a.bind(this, this.changeTemplate),
                    onListboxToggle: a.bind(this, this.onListboxToggle),
                    onListboxClickOutside: a.bind(this, this.onListboxClickOutside),
                    onListboxClick: a.bind(this, e => e.preventDefault()),
                    onSelectChange: a.bind(this, e => {
                        window.location.assign(e.target.value)
                    })
                }
            }

            connectedCallback() {
                this.hidden || (this.isListboxOriented = !1, window.ShadyCSS && window.ShadyCSS.styleElement(this), this.setLanguageData(), this.changeTemplate(), L.addListener(this.handlers.onChangeTemplate), this.connected = !0)
            }

            disconnectedCallback() {
                this.connected && (L.removeListener(this.handlers.onChangeTemplate), this.removeTemplateListeners())
            }

            setLanguageData() {
                this.mainLanguage = this.getAttribute(i.MAIN_LANG_ATTRIBUTE);
                const e = l(this.mainLanguage), t = this.querySelectorAll("symbol");
                this.languages = [...t].map(t => {
                    const n = t.getAttribute(i.LANG_CODE_ATTRIBUTE), s = t.getAttribute(i.LANG_TITLE_ATTRIBUTE);
                    return n === e && (this.currentLanguage = {code: n, title: s}), {code: n, title: s}
                })
            }

            changeTemplate(e = L) {
                const t = this.querySelectorAll("[data-template]");
                let n;
                t && (this.removeTemplateListeners(), [...t].forEach(e => e.remove())), e.matches ? (this.template = "listbox", n = c(this.languages, this.currentLanguage, this.mainLanguage)) : (this.template = "select", n = d(this.languages, this.currentLanguage, this.mainLanguage)), this.appendChild(n.content), this.addTemplateListeners()
            }

            addTemplateListeners() {
                "listbox" === this.template ? (this.listboxButton = this.querySelector("." + i.LISTBOX_BUTTON_CLASS), this.listbox = this.querySelector("." + i.LISTBOX_CLASS), this.listboxButton.addEventListener("click", this.handlers.onListboxToggle), document.addEventListener("click", this.handlers.onListboxClickOutside), o() && this.listbox.addEventListener("click", this.handlers.onListboxClick)) : "select" === this.template && (this.select = this.querySelector("." + i.SELECT_CLASS), o() || this.select.addEventListener("change", this.handlers.onSelectChange))
            }

            removeTemplateListeners() {
                "listbox" === this.template ? (this.listboxButton.removeEventListener("click", this.handlers.onListboxToggle), document.removeEventListener("click", this.handlers.onListboxClickOutside), o() && this.listbox.removeEventListener("click", this.handlers.onListboxClick)) : "select" === this.template && (o() || this.select.removeEventListener("change", this.handlers.onSelectChange))
            }

            onListboxToggle() {
                this.listboxExpanded ? (this.listbox.setAttribute("hidden", ""), this.listboxButton.removeAttribute("aria-expanded"), this.listboxExpanded = !1) : (this.listbox.removeAttribute("hidden"), this.listboxButton.setAttribute("aria-expanded", "true"), this.listboxExpanded = !0, this.isListboxOriented && !o() || (g(this.listbox), this.isListboxOriented = !0))
            }

            onListboxClickOutside(e) {
                !this.contains(e.target) && this.listboxExpanded && this.onListboxToggle()
            }
        }

        customElements.define("ws-language-selector", T)
    }
});
;!function (e) {
    var t = {};

    function n(i) {
        if (t[i]) return t[i].exports;
        var r = t[i] = {i: i, l: !1, exports: {}};
        return e[i].call(r.exports, r, r.exports, n), r.l = !0, r.exports
    }

    n.m = e, n.c = t, n.d = function (e, t, i) {
        n.o(e, t) || Object.defineProperty(e, t, {enumerable: !0, get: i})
    }, n.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
    }, n.t = function (e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var i = Object.create(null);
        if (n.r(i), Object.defineProperty(i, "default", {
            enumerable: !0,
            value: e
        }), 2 & t && "string" != typeof e) for (var r in e) n.d(i, r, function (t) {
            return e[t]
        }.bind(null, r));
        return i
    }, n.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "", n(n.s = 4)
}([function (e, t) {
    !function (e, t) {
        for (var n in t) e[n] = t[n]
    }(t, function (e) {
        var t = {};

        function n(i) {
            if (t[i]) return t[i].exports;
            var r = t[i] = {i: i, l: !1, exports: {}};
            return e[i].call(r.exports, r, r.exports, n), r.l = !0, r.exports
        }

        return n.m = e, n.c = t, n.d = function (e, t, i) {
            n.o(e, t) || Object.defineProperty(e, t, {enumerable: !0, get: i})
        }, n.r = function (e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
        }, n.t = function (e, t) {
            if (1 & t && (e = n(e)), 8 & t) return e;
            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
            var i = Object.create(null);
            if (n.r(i), Object.defineProperty(i, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e) for (var r in e) n.d(i, r, function (t) {
                return e[t]
            }.bind(null, r));
            return i
        }, n.n = function (e) {
            var t = e && e.__esModule ? function () {
                return e.default
            } : function () {
                return e
            };
            return n.d(t, "a", t), t
        }, n.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, n.p = "", n(n.s = 1)
    }([function (e, t, n) {
        e.exports = function (e) {
            var t = {};

            function n(i) {
                if (t[i]) return t[i].exports;
                var r = t[i] = {i: i, l: !1, exports: {}};
                return e[i].call(r.exports, r, r.exports, n), r.l = !0, r.exports
            }

            return n.m = e, n.c = t, n.d = function (e, t, i) {
                n.o(e, t) || Object.defineProperty(e, t, {enumerable: !0, get: i})
            }, n.r = function (e) {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
            }, n.t = function (e, t) {
                if (1 & t && (e = n(e)), 8 & t) return e;
                if (4 & t && "object" == typeof e && e && e.__esModule) return e;
                var i = Object.create(null);
                if (n.r(i), Object.defineProperty(i, "default", {
                    enumerable: !0,
                    value: e
                }), 2 & t && "string" != typeof e) for (var r in e) n.d(i, r, function (t) {
                    return e[t]
                }.bind(null, r));
                return i
            }, n.n = function (e) {
                var t = e && e.__esModule ? function () {
                    return e.default
                } : function () {
                    return e
                };
                return n.d(t, "a", t), t
            }, n.o = function (e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
            }, n.p = "", n(n.s = 90)
        }({
            17: function (e, t, n) {
                "use strict";
                t.__esModule = !0, t.default = void 0;
                var i = n(18), r = function () {
                    function e() {
                    }

                    return e.getFirstMatch = function (e, t) {
                        var n = t.match(e);
                        return n && n.length > 0 && n[1] || ""
                    }, e.getSecondMatch = function (e, t) {
                        var n = t.match(e);
                        return n && n.length > 1 && n[2] || ""
                    }, e.matchAndReturnConst = function (e, t, n) {
                        if (e.test(t)) return n
                    }, e.getWindowsVersionName = function (e) {
                        switch (e) {
                            case"NT":
                                return "NT";
                            case"XP":
                                return "XP";
                            case"NT 5.0":
                                return "2000";
                            case"NT 5.1":
                                return "XP";
                            case"NT 5.2":
                                return "2003";
                            case"NT 6.0":
                                return "Vista";
                            case"NT 6.1":
                                return "7";
                            case"NT 6.2":
                                return "8";
                            case"NT 6.3":
                                return "8.1";
                            case"NT 10.0":
                                return "10";
                            default:
                                return
                        }
                    }, e.getMacOSVersionName = function (e) {
                        var t = e.split(".").splice(0, 2).map((function (e) {
                            return parseInt(e, 10) || 0
                        }));
                        if (t.push(0), 10 === t[0]) switch (t[1]) {
                            case 5:
                                return "Leopard";
                            case 6:
                                return "Snow Leopard";
                            case 7:
                                return "Lion";
                            case 8:
                                return "Mountain Lion";
                            case 9:
                                return "Mavericks";
                            case 10:
                                return "Yosemite";
                            case 11:
                                return "El Capitan";
                            case 12:
                                return "Sierra";
                            case 13:
                                return "High Sierra";
                            case 14:
                                return "Mojave";
                            case 15:
                                return "Catalina";
                            default:
                                return
                        }
                    }, e.getAndroidVersionName = function (e) {
                        var t = e.split(".").splice(0, 2).map((function (e) {
                            return parseInt(e, 10) || 0
                        }));
                        if (t.push(0), !(1 === t[0] && t[1] < 5)) return 1 === t[0] && t[1] < 6 ? "Cupcake" : 1 === t[0] && t[1] >= 6 ? "Donut" : 2 === t[0] && t[1] < 2 ? "Eclair" : 2 === t[0] && 2 === t[1] ? "Froyo" : 2 === t[0] && t[1] > 2 ? "Gingerbread" : 3 === t[0] ? "Honeycomb" : 4 === t[0] && t[1] < 1 ? "Ice Cream Sandwich" : 4 === t[0] && t[1] < 4 ? "Jelly Bean" : 4 === t[0] && t[1] >= 4 ? "KitKat" : 5 === t[0] ? "Lollipop" : 6 === t[0] ? "Marshmallow" : 7 === t[0] ? "Nougat" : 8 === t[0] ? "Oreo" : 9 === t[0] ? "Pie" : void 0
                    }, e.getVersionPrecision = function (e) {
                        return e.split(".").length
                    }, e.compareVersions = function (t, n, i) {
                        void 0 === i && (i = !1);
                        var r = e.getVersionPrecision(t), o = e.getVersionPrecision(n), a = Math.max(r, o), s = 0,
                            l = e.map([t, n], (function (t) {
                                var n = a - e.getVersionPrecision(t), i = t + new Array(n + 1).join(".0");
                                return e.map(i.split("."), (function (e) {
                                    return new Array(20 - e.length).join("0") + e
                                })).reverse()
                            }));
                        for (i && (s = a - Math.min(r, o)), a -= 1; a >= s;) {
                            if (l[0][a] > l[1][a]) return 1;
                            if (l[0][a] === l[1][a]) {
                                if (a === s) return 0;
                                a -= 1
                            } else if (l[0][a] < l[1][a]) return -1
                        }
                    }, e.map = function (e, t) {
                        var n, i = [];
                        if (Array.prototype.map) return Array.prototype.map.call(e, t);
                        for (n = 0; n < e.length; n += 1) i.push(t(e[n]));
                        return i
                    }, e.getBrowserAlias = function (e) {
                        return i.BROWSER_ALIASES_MAP[e]
                    }, e.getBrowserTypeByAlias = function (e) {
                        return i.BROWSER_MAP[e] || ""
                    }, e
                }();
                t.default = r, e.exports = t.default
            }, 18: function (e, t, n) {
                "use strict";
                t.__esModule = !0, t.ENGINE_MAP = t.OS_MAP = t.PLATFORMS_MAP = t.BROWSER_MAP = t.BROWSER_ALIASES_MAP = void 0, t.BROWSER_ALIASES_MAP = {
                    "Amazon Silk": "amazon_silk",
                    "Android Browser": "android",
                    Bada: "bada",
                    BlackBerry: "blackberry",
                    Chrome: "chrome",
                    Chromium: "chromium",
                    Epiphany: "epiphany",
                    Firefox: "firefox",
                    Focus: "focus",
                    Generic: "generic",
                    "Google Search": "google_search",
                    Googlebot: "googlebot",
                    "Internet Explorer": "ie",
                    "K-Meleon": "k_meleon",
                    Maxthon: "maxthon",
                    "Microsoft Edge": "edge",
                    "MZ Browser": "mz",
                    "NAVER Whale Browser": "naver",
                    Opera: "opera",
                    "Opera Coast": "opera_coast",
                    PhantomJS: "phantomjs",
                    Puffin: "puffin",
                    QupZilla: "qupzilla",
                    QQ: "qq",
                    QQLite: "qqlite",
                    Safari: "safari",
                    Sailfish: "sailfish",
                    "Samsung Internet for Android": "samsung_internet",
                    SeaMonkey: "seamonkey",
                    Sleipnir: "sleipnir",
                    Swing: "swing",
                    Tizen: "tizen",
                    "UC Browser": "uc",
                    Vivaldi: "vivaldi",
                    "WebOS Browser": "webos",
                    WeChat: "wechat",
                    "Yandex Browser": "yandex",
                    Roku: "roku"
                }, t.BROWSER_MAP = {
                    amazon_silk: "Amazon Silk",
                    android: "Android Browser",
                    bada: "Bada",
                    blackberry: "BlackBerry",
                    chrome: "Chrome",
                    chromium: "Chromium",
                    epiphany: "Epiphany",
                    firefox: "Firefox",
                    focus: "Focus",
                    generic: "Generic",
                    googlebot: "Googlebot",
                    google_search: "Google Search",
                    ie: "Internet Explorer",
                    k_meleon: "K-Meleon",
                    maxthon: "Maxthon",
                    edge: "Microsoft Edge",
                    mz: "MZ Browser",
                    naver: "NAVER Whale Browser",
                    opera: "Opera",
                    opera_coast: "Opera Coast",
                    phantomjs: "PhantomJS",
                    puffin: "Puffin",
                    qupzilla: "QupZilla",
                    qq: "QQ Browser",
                    qqlite: "QQ Browser Lite",
                    safari: "Safari",
                    sailfish: "Sailfish",
                    samsung_internet: "Samsung Internet for Android",
                    seamonkey: "SeaMonkey",
                    sleipnir: "Sleipnir",
                    swing: "Swing",
                    tizen: "Tizen",
                    uc: "UC Browser",
                    vivaldi: "Vivaldi",
                    webos: "WebOS Browser",
                    wechat: "WeChat",
                    yandex: "Yandex Browser"
                }, t.PLATFORMS_MAP = {
                    tablet: "tablet",
                    mobile: "mobile",
                    desktop: "desktop",
                    tv: "tv"
                }, t.OS_MAP = {
                    WindowsPhone: "Windows Phone",
                    Windows: "Windows",
                    MacOS: "macOS",
                    iOS: "iOS",
                    Android: "Android",
                    WebOS: "WebOS",
                    BlackBerry: "BlackBerry",
                    Bada: "Bada",
                    Tizen: "Tizen",
                    Linux: "Linux",
                    ChromeOS: "Chrome OS",
                    PlayStation4: "PlayStation 4",
                    Roku: "Roku"
                }, t.ENGINE_MAP = {
                    EdgeHTML: "EdgeHTML",
                    Blink: "Blink",
                    Trident: "Trident",
                    Presto: "Presto",
                    Gecko: "Gecko",
                    WebKit: "WebKit"
                }
            }, 90: function (e, t, n) {
                "use strict";
                t.__esModule = !0, t.default = void 0;
                var i, r = (i = n(91)) && i.__esModule ? i : {default: i}, o = n(18);
                var a = function () {
                    function e() {
                    }

                    var t;
                    return e.getParser = function (e, t) {
                        if (void 0 === t && (t = !1), "string" != typeof e) throw new Error("UserAgent should be a string");
                        return new r.default(e, t)
                    }, e.parse = function (e) {
                        return new r.default(e).getResult()
                    }, (t = [{
                        key: "BROWSER_MAP", get: function () {
                            return o.BROWSER_MAP
                        }
                    }, {
                        key: "ENGINE_MAP", get: function () {
                            return o.ENGINE_MAP
                        }
                    }, {
                        key: "OS_MAP", get: function () {
                            return o.OS_MAP
                        }
                    }, {
                        key: "PLATFORMS_MAP", get: function () {
                            return o.PLATFORMS_MAP
                        }
                    }]) && function (e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var i = t[n];
                            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                        }
                    }(e, t), e
                }();
                t.default = a, e.exports = t.default
            }, 91: function (e, t, n) {
                "use strict";
                t.__esModule = !0, t.default = void 0;
                var i = l(n(92)), r = l(n(93)), o = l(n(94)), a = l(n(95)), s = l(n(17));

                function l(e) {
                    return e && e.__esModule ? e : {default: e}
                }

                var u = function () {
                    function e(e, t) {
                        if (void 0 === t && (t = !1), null == e || "" === e) throw new Error("UserAgent parameter can't be empty");
                        this._ua = e, this.parsedResult = {}, !0 !== t && this.parse()
                    }

                    var t = e.prototype;
                    return t.getUA = function () {
                        return this._ua
                    }, t.test = function (e) {
                        return e.test(this._ua)
                    }, t.parseBrowser = function () {
                        var e = this;
                        this.parsedResult.browser = {};
                        var t = i.default.find((function (t) {
                            if ("function" == typeof t.test) return t.test(e);
                            if (t.test instanceof Array) return t.test.some((function (t) {
                                return e.test(t)
                            }));
                            throw new Error("Browser's test function is not valid")
                        }));
                        return t && (this.parsedResult.browser = t.describe(this.getUA())), this.parsedResult.browser
                    }, t.getBrowser = function () {
                        return this.parsedResult.browser ? this.parsedResult.browser : this.parseBrowser()
                    }, t.getBrowserName = function (e) {
                        return e ? String(this.getBrowser().name).toLowerCase() || "" : this.getBrowser().name || ""
                    }, t.getBrowserVersion = function () {
                        return this.getBrowser().version
                    }, t.getOS = function () {
                        return this.parsedResult.os ? this.parsedResult.os : this.parseOS()
                    }, t.parseOS = function () {
                        var e = this;
                        this.parsedResult.os = {};
                        var t = r.default.find((function (t) {
                            if ("function" == typeof t.test) return t.test(e);
                            if (t.test instanceof Array) return t.test.some((function (t) {
                                return e.test(t)
                            }));
                            throw new Error("Browser's test function is not valid")
                        }));
                        return t && (this.parsedResult.os = t.describe(this.getUA())), this.parsedResult.os
                    }, t.getOSName = function (e) {
                        var t = this.getOS().name;
                        return e ? String(t).toLowerCase() || "" : t || ""
                    }, t.getOSVersion = function () {
                        return this.getOS().version
                    }, t.getPlatform = function () {
                        return this.parsedResult.platform ? this.parsedResult.platform : this.parsePlatform()
                    }, t.getPlatformType = function (e) {
                        void 0 === e && (e = !1);
                        var t = this.getPlatform().type;
                        return e ? String(t).toLowerCase() || "" : t || ""
                    }, t.parsePlatform = function () {
                        var e = this;
                        this.parsedResult.platform = {};
                        var t = o.default.find((function (t) {
                            if ("function" == typeof t.test) return t.test(e);
                            if (t.test instanceof Array) return t.test.some((function (t) {
                                return e.test(t)
                            }));
                            throw new Error("Browser's test function is not valid")
                        }));
                        return t && (this.parsedResult.platform = t.describe(this.getUA())), this.parsedResult.platform
                    }, t.getEngine = function () {
                        return this.parsedResult.engine ? this.parsedResult.engine : this.parseEngine()
                    }, t.getEngineName = function (e) {
                        return e ? String(this.getEngine().name).toLowerCase() || "" : this.getEngine().name || ""
                    }, t.parseEngine = function () {
                        var e = this;
                        this.parsedResult.engine = {};
                        var t = a.default.find((function (t) {
                            if ("function" == typeof t.test) return t.test(e);
                            if (t.test instanceof Array) return t.test.some((function (t) {
                                return e.test(t)
                            }));
                            throw new Error("Browser's test function is not valid")
                        }));
                        return t && (this.parsedResult.engine = t.describe(this.getUA())), this.parsedResult.engine
                    }, t.parse = function () {
                        return this.parseBrowser(), this.parseOS(), this.parsePlatform(), this.parseEngine(), this
                    }, t.getResult = function () {
                        return Object.assign({}, this.parsedResult)
                    }, t.satisfies = function (e) {
                        var t = this, n = {}, i = 0, r = {}, o = 0;
                        if (Object.keys(e).forEach((function (t) {
                            var a = e[t];
                            "string" == typeof a ? (r[t] = a, o += 1) : "object" == typeof a && (n[t] = a, i += 1)
                        })), i > 0) {
                            var a = Object.keys(n), s = a.find((function (e) {
                                return t.isOS(e)
                            }));
                            if (s) {
                                var l = this.satisfies(n[s]);
                                if (void 0 !== l) return l
                            }
                            var u = a.find((function (e) {
                                return t.isPlatform(e)
                            }));
                            if (u) {
                                var c = this.satisfies(n[u]);
                                if (void 0 !== c) return c
                            }
                        }
                        if (o > 0) {
                            var d = Object.keys(r).find((function (e) {
                                return t.isBrowser(e, !0)
                            }));
                            if (void 0 !== d) return this.compareVersion(r[d])
                        }
                    }, t.isBrowser = function (e, t) {
                        void 0 === t && (t = !1);
                        var n = this.getBrowserName().toLowerCase(), i = e.toLowerCase(),
                            r = s.default.getBrowserTypeByAlias(i);
                        return t && r && (i = r.toLowerCase()), i === n
                    }, t.compareVersion = function (e) {
                        var t = [0], n = e, i = !1, r = this.getBrowserVersion();
                        if ("string" == typeof r) return ">" === e[0] || "<" === e[0] ? (n = e.substr(1), "=" === e[1] ? (i = !0, n = e.substr(2)) : t = [], ">" === e[0] ? t.push(1) : t.push(-1)) : "=" === e[0] ? n = e.substr(1) : "~" === e[0] && (i = !0, n = e.substr(1)), t.indexOf(s.default.compareVersions(r, n, i)) > -1
                    }, t.isOS = function (e) {
                        return this.getOSName(!0) === String(e).toLowerCase()
                    }, t.isPlatform = function (e) {
                        return this.getPlatformType(!0) === String(e).toLowerCase()
                    }, t.isEngine = function (e) {
                        return this.getEngineName(!0) === String(e).toLowerCase()
                    }, t.is = function (e) {
                        return this.isBrowser(e) || this.isOS(e) || this.isPlatform(e)
                    }, t.some = function (e) {
                        var t = this;
                        return void 0 === e && (e = []), e.some((function (e) {
                            return t.is(e)
                        }))
                    }, e
                }();
                t.default = u, e.exports = t.default
            }, 92: function (e, t, n) {
                "use strict";
                t.__esModule = !0, t.default = void 0;
                var i, r = (i = n(17)) && i.__esModule ? i : {default: i}, o = /version\/(\d+(\.?_?\d+)+)/i, a = [{
                    test: [/googlebot/i], describe: function (e) {
                        var t = {name: "Googlebot"},
                            n = r.default.getFirstMatch(/googlebot\/(\d+(\.\d+))/i, e) || r.default.getFirstMatch(o, e);
                        return n && (t.version = n), t
                    }
                }, {
                    test: [/opera/i], describe: function (e) {
                        var t = {name: "Opera"},
                            n = r.default.getFirstMatch(o, e) || r.default.getFirstMatch(/(?:opera)[\s/](\d+(\.?_?\d+)+)/i, e);
                        return n && (t.version = n), t
                    }
                }, {
                    test: [/opr\/|opios/i], describe: function (e) {
                        var t = {name: "Opera"},
                            n = r.default.getFirstMatch(/(?:opr|opios)[\s/](\S+)/i, e) || r.default.getFirstMatch(o, e);
                        return n && (t.version = n), t
                    }
                }, {
                    test: [/SamsungBrowser/i], describe: function (e) {
                        var t = {name: "Samsung Internet for Android"},
                            n = r.default.getFirstMatch(o, e) || r.default.getFirstMatch(/(?:SamsungBrowser)[\s/](\d+(\.?_?\d+)+)/i, e);
                        return n && (t.version = n), t
                    }
                }, {
                    test: [/Whale/i], describe: function (e) {
                        var t = {name: "NAVER Whale Browser"},
                            n = r.default.getFirstMatch(o, e) || r.default.getFirstMatch(/(?:whale)[\s/](\d+(?:\.\d+)+)/i, e);
                        return n && (t.version = n), t
                    }
                }, {
                    test: [/MZBrowser/i], describe: function (e) {
                        var t = {name: "MZ Browser"},
                            n = r.default.getFirstMatch(/(?:MZBrowser)[\s/](\d+(?:\.\d+)+)/i, e) || r.default.getFirstMatch(o, e);
                        return n && (t.version = n), t
                    }
                }, {
                    test: [/focus/i], describe: function (e) {
                        var t = {name: "Focus"},
                            n = r.default.getFirstMatch(/(?:focus)[\s/](\d+(?:\.\d+)+)/i, e) || r.default.getFirstMatch(o, e);
                        return n && (t.version = n), t
                    }
                }, {
                    test: [/swing/i], describe: function (e) {
                        var t = {name: "Swing"},
                            n = r.default.getFirstMatch(/(?:swing)[\s/](\d+(?:\.\d+)+)/i, e) || r.default.getFirstMatch(o, e);
                        return n && (t.version = n), t
                    }
                }, {
                    test: [/coast/i], describe: function (e) {
                        var t = {name: "Opera Coast"},
                            n = r.default.getFirstMatch(o, e) || r.default.getFirstMatch(/(?:coast)[\s/](\d+(\.?_?\d+)+)/i, e);
                        return n && (t.version = n), t
                    }
                }, {
                    test: [/yabrowser/i], describe: function (e) {
                        var t = {name: "Yandex Browser"},
                            n = r.default.getFirstMatch(/(?:yabrowser)[\s/](\d+(\.?_?\d+)+)/i, e) || r.default.getFirstMatch(o, e);
                        return n && (t.version = n), t
                    }
                }, {
                    test: [/ucbrowser/i], describe: function (e) {
                        var t = {name: "UC Browser"},
                            n = r.default.getFirstMatch(o, e) || r.default.getFirstMatch(/(?:ucbrowser)[\s/](\d+(\.?_?\d+)+)/i, e);
                        return n && (t.version = n), t
                    }
                }, {
                    test: [/Maxthon|mxios/i], describe: function (e) {
                        var t = {name: "Maxthon"},
                            n = r.default.getFirstMatch(o, e) || r.default.getFirstMatch(/(?:Maxthon|mxios)[\s/](\d+(\.?_?\d+)+)/i, e);
                        return n && (t.version = n), t
                    }
                }, {
                    test: [/epiphany/i], describe: function (e) {
                        var t = {name: "Epiphany"},
                            n = r.default.getFirstMatch(o, e) || r.default.getFirstMatch(/(?:epiphany)[\s/](\d+(\.?_?\d+)+)/i, e);
                        return n && (t.version = n), t
                    }
                }, {
                    test: [/puffin/i], describe: function (e) {
                        var t = {name: "Puffin"},
                            n = r.default.getFirstMatch(o, e) || r.default.getFirstMatch(/(?:puffin)[\s/](\d+(\.?_?\d+)+)/i, e);
                        return n && (t.version = n), t
                    }
                }, {
                    test: [/sleipnir/i], describe: function (e) {
                        var t = {name: "Sleipnir"},
                            n = r.default.getFirstMatch(o, e) || r.default.getFirstMatch(/(?:sleipnir)[\s/](\d+(\.?_?\d+)+)/i, e);
                        return n && (t.version = n), t
                    }
                }, {
                    test: [/k-meleon/i], describe: function (e) {
                        var t = {name: "K-Meleon"},
                            n = r.default.getFirstMatch(o, e) || r.default.getFirstMatch(/(?:k-meleon)[\s/](\d+(\.?_?\d+)+)/i, e);
                        return n && (t.version = n), t
                    }
                }, {
                    test: [/micromessenger/i], describe: function (e) {
                        var t = {name: "WeChat"},
                            n = r.default.getFirstMatch(/(?:micromessenger)[\s/](\d+(\.?_?\d+)+)/i, e) || r.default.getFirstMatch(o, e);
                        return n && (t.version = n), t
                    }
                }, {
                    test: [/qqbrowser/i], describe: function (e) {
                        var t = {name: /qqbrowserlite/i.test(e) ? "QQ Browser Lite" : "QQ Browser"},
                            n = r.default.getFirstMatch(/(?:qqbrowserlite|qqbrowser)[/](\d+(\.?_?\d+)+)/i, e) || r.default.getFirstMatch(o, e);
                        return n && (t.version = n), t
                    }
                }, {
                    test: [/msie|trident/i], describe: function (e) {
                        var t = {name: "Internet Explorer"},
                            n = r.default.getFirstMatch(/(?:msie |rv:)(\d+(\.?_?\d+)+)/i, e);
                        return n && (t.version = n), t
                    }
                }, {
                    test: [/\sedg\//i], describe: function (e) {
                        var t = {name: "Microsoft Edge"}, n = r.default.getFirstMatch(/\sedg\/(\d+(\.?_?\d+)+)/i, e);
                        return n && (t.version = n), t
                    }
                }, {
                    test: [/edg([ea]|ios)/i], describe: function (e) {
                        var t = {name: "Microsoft Edge"},
                            n = r.default.getSecondMatch(/edg([ea]|ios)\/(\d+(\.?_?\d+)+)/i, e);
                        return n && (t.version = n), t
                    }
                }, {
                    test: [/vivaldi/i], describe: function (e) {
                        var t = {name: "Vivaldi"}, n = r.default.getFirstMatch(/vivaldi\/(\d+(\.?_?\d+)+)/i, e);
                        return n && (t.version = n), t
                    }
                }, {
                    test: [/seamonkey/i], describe: function (e) {
                        var t = {name: "SeaMonkey"}, n = r.default.getFirstMatch(/seamonkey\/(\d+(\.?_?\d+)+)/i, e);
                        return n && (t.version = n), t
                    }
                }, {
                    test: [/sailfish/i], describe: function (e) {
                        var t = {name: "Sailfish"},
                            n = r.default.getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i, e);
                        return n && (t.version = n), t
                    }
                }, {
                    test: [/silk/i], describe: function (e) {
                        var t = {name: "Amazon Silk"}, n = r.default.getFirstMatch(/silk\/(\d+(\.?_?\d+)+)/i, e);
                        return n && (t.version = n), t
                    }
                }, {
                    test: [/phantom/i], describe: function (e) {
                        var t = {name: "PhantomJS"}, n = r.default.getFirstMatch(/phantomjs\/(\d+(\.?_?\d+)+)/i, e);
                        return n && (t.version = n), t
                    }
                }, {
                    test: [/slimerjs/i], describe: function (e) {
                        var t = {name: "SlimerJS"}, n = r.default.getFirstMatch(/slimerjs\/(\d+(\.?_?\d+)+)/i, e);
                        return n && (t.version = n), t
                    }
                }, {
                    test: [/blackberry|\bbb\d+/i, /rim\stablet/i], describe: function (e) {
                        var t = {name: "BlackBerry"},
                            n = r.default.getFirstMatch(o, e) || r.default.getFirstMatch(/blackberry[\d]+\/(\d+(\.?_?\d+)+)/i, e);
                        return n && (t.version = n), t
                    }
                }, {
                    test: [/(web|hpw)[o0]s/i], describe: function (e) {
                        var t = {name: "WebOS Browser"},
                            n = r.default.getFirstMatch(o, e) || r.default.getFirstMatch(/w(?:eb)?[o0]sbrowser\/(\d+(\.?_?\d+)+)/i, e);
                        return n && (t.version = n), t
                    }
                }, {
                    test: [/bada/i], describe: function (e) {
                        var t = {name: "Bada"}, n = r.default.getFirstMatch(/dolfin\/(\d+(\.?_?\d+)+)/i, e);
                        return n && (t.version = n), t
                    }
                }, {
                    test: [/tizen/i], describe: function (e) {
                        var t = {name: "Tizen"},
                            n = r.default.getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.?_?\d+)+)/i, e) || r.default.getFirstMatch(o, e);
                        return n && (t.version = n), t
                    }
                }, {
                    test: [/qupzilla/i], describe: function (e) {
                        var t = {name: "QupZilla"},
                            n = r.default.getFirstMatch(/(?:qupzilla)[\s/](\d+(\.?_?\d+)+)/i, e) || r.default.getFirstMatch(o, e);
                        return n && (t.version = n), t
                    }
                }, {
                    test: [/firefox|iceweasel|fxios/i], describe: function (e) {
                        var t = {name: "Firefox"},
                            n = r.default.getFirstMatch(/(?:firefox|iceweasel|fxios)[\s/](\d+(\.?_?\d+)+)/i, e);
                        return n && (t.version = n), t
                    }
                }, {
                    test: [/chromium/i], describe: function (e) {
                        var t = {name: "Chromium"},
                            n = r.default.getFirstMatch(/(?:chromium)[\s/](\d+(\.?_?\d+)+)/i, e) || r.default.getFirstMatch(o, e);
                        return n && (t.version = n), t
                    }
                }, {
                    test: [/chrome|crios|crmo/i], describe: function (e) {
                        var t = {name: "Chrome"},
                            n = r.default.getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i, e);
                        return n && (t.version = n), t
                    }
                }, {
                    test: [/GSA/i], describe: function (e) {
                        var t = {name: "Google Search"}, n = r.default.getFirstMatch(/(?:GSA)\/(\d+(\.?_?\d+)+)/i, e);
                        return n && (t.version = n), t
                    }
                }, {
                    test: function (e) {
                        var t = !e.test(/like android/i), n = e.test(/android/i);
                        return t && n
                    }, describe: function (e) {
                        var t = {name: "Android Browser"}, n = r.default.getFirstMatch(o, e);
                        return n && (t.version = n), t
                    }
                }, {
                    test: [/playstation 4/i], describe: function (e) {
                        var t = {name: "PlayStation 4"}, n = r.default.getFirstMatch(o, e);
                        return n && (t.version = n), t
                    }
                }, {
                    test: [/safari|applewebkit/i], describe: function (e) {
                        var t = {name: "Safari"}, n = r.default.getFirstMatch(o, e);
                        return n && (t.version = n), t
                    }
                }, {
                    test: [/.*/i], describe: function (e) {
                        var t = -1 !== e.search("\\(") ? /^(.*)\/(.*)[ \t]\((.*)/ : /^(.*)\/(.*) /;
                        return {name: r.default.getFirstMatch(t, e), version: r.default.getSecondMatch(t, e)}
                    }
                }];
                t.default = a, e.exports = t.default
            }, 93: function (e, t, n) {
                "use strict";
                t.__esModule = !0, t.default = void 0;
                var i, r = (i = n(17)) && i.__esModule ? i : {default: i}, o = n(18), a = [{
                    test: [/Roku\/DVP/], describe: function (e) {
                        var t = r.default.getFirstMatch(/Roku\/DVP-(\d+\.\d+)/i, e);
                        return {name: o.OS_MAP.Roku, version: t}
                    }
                }, {
                    test: [/windows phone/i], describe: function (e) {
                        var t = r.default.getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i, e);
                        return {name: o.OS_MAP.WindowsPhone, version: t}
                    }
                }, {
                    test: [/windows/i], describe: function (e) {
                        var t = r.default.getFirstMatch(/Windows ((NT|XP)( \d\d?.\d)?)/i, e),
                            n = r.default.getWindowsVersionName(t);
                        return {name: o.OS_MAP.Windows, version: t, versionName: n}
                    }
                }, {
                    test: [/macintosh/i], describe: function (e) {
                        var t = r.default.getFirstMatch(/mac os x (\d+(\.?_?\d+)+)/i, e).replace(/[_\s]/g, "."),
                            n = r.default.getMacOSVersionName(t), i = {name: o.OS_MAP.MacOS, version: t};
                        return n && (i.versionName = n), i
                    }
                }, {
                    test: [/(ipod|iphone|ipad)/i], describe: function (e) {
                        var t = r.default.getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i, e).replace(/[_\s]/g, ".");
                        return {name: o.OS_MAP.iOS, version: t}
                    }
                }, {
                    test: function (e) {
                        var t = !e.test(/like android/i), n = e.test(/android/i);
                        return t && n
                    }, describe: function (e) {
                        var t = r.default.getFirstMatch(/android[\s/-](\d+(\.\d+)*)/i, e),
                            n = r.default.getAndroidVersionName(t), i = {name: o.OS_MAP.Android, version: t};
                        return n && (i.versionName = n), i
                    }
                }, {
                    test: [/(web|hpw)[o0]s/i], describe: function (e) {
                        var t = r.default.getFirstMatch(/(?:web|hpw)[o0]s\/(\d+(\.\d+)*)/i, e),
                            n = {name: o.OS_MAP.WebOS};
                        return t && t.length && (n.version = t), n
                    }
                }, {
                    test: [/blackberry|\bbb\d+/i, /rim\stablet/i], describe: function (e) {
                        var t = r.default.getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i, e) || r.default.getFirstMatch(/blackberry\d+\/(\d+([_\s]\d+)*)/i, e) || r.default.getFirstMatch(/\bbb(\d+)/i, e);
                        return {name: o.OS_MAP.BlackBerry, version: t}
                    }
                }, {
                    test: [/bada/i], describe: function (e) {
                        var t = r.default.getFirstMatch(/bada\/(\d+(\.\d+)*)/i, e);
                        return {name: o.OS_MAP.Bada, version: t}
                    }
                }, {
                    test: [/tizen/i], describe: function (e) {
                        var t = r.default.getFirstMatch(/tizen[/\s](\d+(\.\d+)*)/i, e);
                        return {name: o.OS_MAP.Tizen, version: t}
                    }
                }, {
                    test: [/linux/i], describe: function () {
                        return {name: o.OS_MAP.Linux}
                    }
                }, {
                    test: [/CrOS/], describe: function () {
                        return {name: o.OS_MAP.ChromeOS}
                    }
                }, {
                    test: [/PlayStation 4/], describe: function (e) {
                        var t = r.default.getFirstMatch(/PlayStation 4[/\s](\d+(\.\d+)*)/i, e);
                        return {name: o.OS_MAP.PlayStation4, version: t}
                    }
                }];
                t.default = a, e.exports = t.default
            }, 94: function (e, t, n) {
                "use strict";
                t.__esModule = !0, t.default = void 0;
                var i, r = (i = n(17)) && i.__esModule ? i : {default: i}, o = n(18), a = [{
                    test: [/googlebot/i], describe: function () {
                        return {type: "bot", vendor: "Google"}
                    }
                }, {
                    test: [/huawei/i], describe: function (e) {
                        var t = r.default.getFirstMatch(/(can-l01)/i, e) && "Nova",
                            n = {type: o.PLATFORMS_MAP.mobile, vendor: "Huawei"};
                        return t && (n.model = t), n
                    }
                }, {
                    test: [/nexus\s*(?:7|8|9|10).*/i], describe: function () {
                        return {type: o.PLATFORMS_MAP.tablet, vendor: "Nexus"}
                    }
                }, {
                    test: [/ipad/i], describe: function () {
                        return {type: o.PLATFORMS_MAP.tablet, vendor: "Apple", model: "iPad"}
                    }
                }, {
                    test: [/kftt build/i], describe: function () {
                        return {type: o.PLATFORMS_MAP.tablet, vendor: "Amazon", model: "Kindle Fire HD 7"}
                    }
                }, {
                    test: [/silk/i], describe: function () {
                        return {type: o.PLATFORMS_MAP.tablet, vendor: "Amazon"}
                    }
                }, {
                    test: [/tablet(?! pc)/i], describe: function () {
                        return {type: o.PLATFORMS_MAP.tablet}
                    }
                }, {
                    test: function (e) {
                        var t = e.test(/ipod|iphone/i), n = e.test(/like (ipod|iphone)/i);
                        return t && !n
                    }, describe: function (e) {
                        var t = r.default.getFirstMatch(/(ipod|iphone)/i, e);
                        return {type: o.PLATFORMS_MAP.mobile, vendor: "Apple", model: t}
                    }
                }, {
                    test: [/nexus\s*[0-6].*/i, /galaxy nexus/i], describe: function () {
                        return {type: o.PLATFORMS_MAP.mobile, vendor: "Nexus"}
                    }
                }, {
                    test: [/[^-]mobi/i], describe: function () {
                        return {type: o.PLATFORMS_MAP.mobile}
                    }
                }, {
                    test: function (e) {
                        return "blackberry" === e.getBrowserName(!0)
                    }, describe: function () {
                        return {type: o.PLATFORMS_MAP.mobile, vendor: "BlackBerry"}
                    }
                }, {
                    test: function (e) {
                        return "bada" === e.getBrowserName(!0)
                    }, describe: function () {
                        return {type: o.PLATFORMS_MAP.mobile}
                    }
                }, {
                    test: function (e) {
                        return "windows phone" === e.getBrowserName()
                    }, describe: function () {
                        return {type: o.PLATFORMS_MAP.mobile, vendor: "Microsoft"}
                    }
                }, {
                    test: function (e) {
                        var t = Number(String(e.getOSVersion()).split(".")[0]);
                        return "android" === e.getOSName(!0) && t >= 3
                    }, describe: function () {
                        return {type: o.PLATFORMS_MAP.tablet}
                    }
                }, {
                    test: function (e) {
                        return "android" === e.getOSName(!0)
                    }, describe: function () {
                        return {type: o.PLATFORMS_MAP.mobile}
                    }
                }, {
                    test: function (e) {
                        return "macos" === e.getOSName(!0)
                    }, describe: function () {
                        return {type: o.PLATFORMS_MAP.desktop, vendor: "Apple"}
                    }
                }, {
                    test: function (e) {
                        return "windows" === e.getOSName(!0)
                    }, describe: function () {
                        return {type: o.PLATFORMS_MAP.desktop}
                    }
                }, {
                    test: function (e) {
                        return "linux" === e.getOSName(!0)
                    }, describe: function () {
                        return {type: o.PLATFORMS_MAP.desktop}
                    }
                }, {
                    test: function (e) {
                        return "playstation 4" === e.getOSName(!0)
                    }, describe: function () {
                        return {type: o.PLATFORMS_MAP.tv}
                    }
                }, {
                    test: function (e) {
                        return "roku" === e.getOSName(!0)
                    }, describe: function () {
                        return {type: o.PLATFORMS_MAP.tv}
                    }
                }];
                t.default = a, e.exports = t.default
            }, 95: function (e, t, n) {
                "use strict";
                t.__esModule = !0, t.default = void 0;
                var i, r = (i = n(17)) && i.__esModule ? i : {default: i}, o = n(18), a = [{
                    test: function (e) {
                        return "microsoft edge" === e.getBrowserName(!0)
                    }, describe: function (e) {
                        if (/\sedg\//i.test(e)) return {name: o.ENGINE_MAP.Blink};
                        var t = r.default.getFirstMatch(/edge\/(\d+(\.?_?\d+)+)/i, e);
                        return {name: o.ENGINE_MAP.EdgeHTML, version: t}
                    }
                }, {
                    test: [/trident/i], describe: function (e) {
                        var t = {name: o.ENGINE_MAP.Trident},
                            n = r.default.getFirstMatch(/trident\/(\d+(\.?_?\d+)+)/i, e);
                        return n && (t.version = n), t
                    }
                }, {
                    test: function (e) {
                        return e.test(/presto/i)
                    }, describe: function (e) {
                        var t = {name: o.ENGINE_MAP.Presto},
                            n = r.default.getFirstMatch(/presto\/(\d+(\.?_?\d+)+)/i, e);
                        return n && (t.version = n), t
                    }
                }, {
                    test: function (e) {
                        var t = e.test(/gecko/i), n = e.test(/like gecko/i);
                        return t && !n
                    }, describe: function (e) {
                        var t = {name: o.ENGINE_MAP.Gecko}, n = r.default.getFirstMatch(/gecko\/(\d+(\.?_?\d+)+)/i, e);
                        return n && (t.version = n), t
                    }
                }, {
                    test: [/(apple)?webkit\/537\.36/i], describe: function () {
                        return {name: o.ENGINE_MAP.Blink}
                    }
                }, {
                    test: [/(apple)?webkit/i], describe: function (e) {
                        var t = {name: o.ENGINE_MAP.WebKit},
                            n = r.default.getFirstMatch(/webkit\/(\d+(\.?_?\d+)+)/i, e);
                        return n && (t.version = n), t
                    }
                }];
                t.default = a, e.exports = t.default
            }
        })
    }, function (e, t, n) {
        e.exports = n(2)
    }, function (e, t, n) {
        "use strict";
        n.r(t);
        var i = n(0), r = e => "Chrome" === e.getBrowserName(), o = e => "Chromium" === e.getBrowserName(),
            a = e => "Microsoft Edge" === e.getBrowserName(), s = e => "Firefox" === e.getBrowserName(),
            l = e => "Internet Explorer" === e.getBrowserName(), u = e => "Opera" === e.getBrowserName(),
            c = e => "Safari" === e.getBrowserName(), d = e => "macOS" === e.getOSName(),
            f = e => "Android" === e.getOSName(), p = e => "iOS" === e.getOSName(),
            m = e => d(e) && window.navigator.maxTouchPoints > 1, h = e => "Linux" === e.getOSName(), v = d,
            g = e => "Windows" === e.getOSName(), w = e => "Chrome OS" === e.getOSName(),
            b = e => "mobile" === e.getPlatformType(), y = e => "tablet" === e.getPlatformType(),
            x = e => "desktop" === e.getPlatformType(), _ = e => e.getOSVersion(), M = (e, t) => e.satisfies(t);
        const S = n.n(i).a.getParser(window.navigator.userAgent || "");
        t.default = {
            chrome: r(S),
            chromium: o(S),
            edge: a(S),
            firefox: s(S),
            ie: l(S),
            opera: u(S),
            safari: c(S),
            android: f(S),
            ios: p(S),
            iPadOS: m(S),
            linux: h(S),
            macOS: v(S) && !m(S),
            windows: g(S),
            chromeOS: w(S),
            mobile: b(S),
            tablet: y(S) || m(S),
            desktop: x(S) && !m(S),
            version: _(S),
            isSatisfied: e => M(S, e)
        }
    }]).default)
}, function (e, t, n) {
    var i, r;
    /*! PhotoSwipe - v4.1.3 - 2019-01-08
* http://photoswipe.com
* Copyright (c) 2019 Dmitry Semenov; */
    void 0 === (r = "function" == typeof (i = function () {
        "use strict";
        return function (e, t, n, i) {
            var r = {
                features: null, bind: function (e, t, n, i) {
                    var r = (i ? "remove" : "add") + "EventListener";
                    t = t.split(" ");
                    for (var o = 0; o < t.length; o++) t[o] && e[r](t[o], n, !1)
                }, isArray: function (e) {
                    return e instanceof Array
                }, createEl: function (e, t) {
                    var n = document.createElement(t || "div");
                    return e && (n.className = e), n
                }, getScrollY: function () {
                    var e = window.pageYOffset;
                    return void 0 !== e ? e : document.documentElement.scrollTop
                }, unbind: function (e, t, n) {
                    r.bind(e, t, n, !0)
                }, removeClass: function (e, t) {
                    var n = new RegExp("(\\s|^)" + t + "(\\s|$)");
                    e.className = e.className.replace(n, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "")
                }, addClass: function (e, t) {
                    r.hasClass(e, t) || (e.className += (e.className ? " " : "") + t)
                }, hasClass: function (e, t) {
                    return e.className && new RegExp("(^|\\s)" + t + "(\\s|$)").test(e.className)
                }, getChildByClass: function (e, t) {
                    for (var n = e.firstChild; n;) {
                        if (r.hasClass(n, t)) return n;
                        n = n.nextSibling
                    }
                }, arraySearch: function (e, t, n) {
                    for (var i = e.length; i--;) if (e[i][n] === t) return i;
                    return -1
                }, extend: function (e, t, n) {
                    for (var i in t) if (t.hasOwnProperty(i)) {
                        if (n && e.hasOwnProperty(i)) continue;
                        e[i] = t[i]
                    }
                }, easing: {
                    sine: {
                        out: function (e) {
                            return Math.sin(e * (Math.PI / 2))
                        }, inOut: function (e) {
                            return -(Math.cos(Math.PI * e) - 1) / 2
                        }
                    }, cubic: {
                        out: function (e) {
                            return --e * e * e + 1
                        }
                    }
                }, detectFeatures: function () {
                    if (r.features) return r.features;
                    var e = r.createEl().style, t = "", n = {};
                    if (n.oldIE = document.all && !document.addEventListener, n.touch = "ontouchstart" in window, window.requestAnimationFrame && (n.raf = window.requestAnimationFrame, n.caf = window.cancelAnimationFrame), n.pointerEvent = !!window.PointerEvent || navigator.msPointerEnabled, !n.pointerEvent) {
                        var i = navigator.userAgent;
                        if (/iP(hone|od)/.test(navigator.platform)) {
                            var o = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
                            o && o.length > 0 && (o = parseInt(o[1], 10)) >= 1 && o < 8 && (n.isOldIOSPhone = !0)
                        }
                        var a = i.match(/Android\s([0-9\.]*)/), s = a ? a[1] : 0;
                        (s = parseFloat(s)) >= 1 && (s < 4.4 && (n.isOldAndroid = !0), n.androidVersion = s), n.isMobileOpera = /opera mini|opera mobi/i.test(i)
                    }
                    for (var l, u, c = ["transform", "perspective", "animationName"], d = ["", "webkit", "Moz", "ms", "O"], f = 0; f < 4; f++) {
                        t = d[f];
                        for (var p = 0; p < 3; p++) l = c[p], u = t + (t ? l.charAt(0).toUpperCase() + l.slice(1) : l), !n[l] && u in e && (n[l] = u);
                        t && !n.raf && (t = t.toLowerCase(), n.raf = window[t + "RequestAnimationFrame"], n.raf && (n.caf = window[t + "CancelAnimationFrame"] || window[t + "CancelRequestAnimationFrame"]))
                    }
                    if (!n.raf) {
                        var m = 0;
                        n.raf = function (e) {
                            var t = (new Date).getTime(), n = Math.max(0, 16 - (t - m)),
                                i = window.setTimeout((function () {
                                    e(t + n)
                                }), n);
                            return m = t + n, i
                        }, n.caf = function (e) {
                            clearTimeout(e)
                        }
                    }
                    return n.svg = !!document.createElementNS && !!document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect, r.features = n, n
                }
            };
            r.detectFeatures(), r.features.oldIE && (r.bind = function (e, t, n, i) {
                t = t.split(" ");
                for (var r, o = (i ? "detach" : "attach") + "Event", a = function () {
                    n.handleEvent.call(n)
                }, s = 0; s < t.length; s++) if (r = t[s]) if ("object" == typeof n && n.handleEvent) {
                    if (i) {
                        if (!n["oldIE" + r]) return !1
                    } else n["oldIE" + r] = a;
                    e[o]("on" + r, n["oldIE" + r])
                } else e[o]("on" + r, n)
            });
            var o = this, a = {
                allowPanToNext: !0,
                spacing: .12,
                bgOpacity: 1,
                mouseUsed: !1,
                loop: !0,
                pinchToClose: !0,
                closeOnScroll: !0,
                closeOnVerticalDrag: !0,
                verticalDragRange: .75,
                hideAnimationDuration: 333,
                showAnimationDuration: 333,
                showHideOpacity: !1,
                focus: !0,
                escKey: !0,
                arrowKeys: !0,
                mainScrollEndFriction: .35,
                panEndFriction: .35,
                isClickableElement: function (e) {
                    return "A" === e.tagName
                },
                getDoubleTapZoom: function (e, t) {
                    return e || t.initialZoomLevel < .7 ? 1 : 1.33
                },
                maxSpreadZoom: 1.33,
                modal: !0,
                scaleMode: "fit"
            };
            r.extend(a, i);
            var s, l, u, c, d, f, p, m, h, v, g, w, b, y, x, _, M, S, O, A, T, E, P, F, C, I, k, R, L, B, N, D, z, Z, W,
                G, j, V, q, U, K, H, Y, X, Q, $, J, ee, te, ne, ie, re, oe, ae, se, le, ue = {x: 0, y: 0},
                ce = {x: 0, y: 0}, de = {x: 0, y: 0}, fe = {}, pe = 0, me = {}, he = {x: 0, y: 0}, ve = 0, ge = !0,
                we = [], be = {}, ye = !1, xe = function (e, t) {
                    r.extend(o, t.publicMethods), we.push(e)
                }, _e = function (e) {
                    var t = Wt();
                    return e > t - 1 ? e - t : e < 0 ? t + e : e
                }, Me = {}, Se = function (e, t) {
                    return Me[e] || (Me[e] = []), Me[e].push(t)
                }, Oe = function (e) {
                    var t = Me[e];
                    if (t) {
                        var n = Array.prototype.slice.call(arguments);
                        n.shift();
                        for (var i = 0; i < t.length; i++) t[i].apply(o, n)
                    }
                }, Ae = function () {
                    return (new Date).getTime()
                }, Te = function (e) {
                    ae = e, o.bg.style.opacity = e * a.bgOpacity
                }, Ee = function (e, t, n, i, r) {
                    (!ye || r && r !== o.currItem) && (i /= r ? r.fitRatio : o.currItem.fitRatio), e[E] = w + t + "px, " + n + "px" + b + " scale(" + i + ")"
                }, Pe = function (e) {
                    te && (e && (v > o.currItem.fitRatio ? ye || (Xt(o.currItem, !1, !0), ye = !0) : ye && (Xt(o.currItem), ye = !1)), Ee(te, de.x, de.y, v))
                }, Fe = function (e) {
                    e.container && Ee(e.container.style, e.initialPosition.x, e.initialPosition.y, e.initialZoomLevel, e)
                }, Ce = function (e, t) {
                    t[E] = w + e + "px, 0px" + b
                }, Ie = function (e, t) {
                    if (!a.loop && t) {
                        var n = c + (he.x * pe - e) / he.x, i = Math.round(e - ct.x);
                        (n < 0 && i > 0 || n >= Wt() - 1 && i < 0) && (e = ct.x + i * a.mainScrollEndFriction)
                    }
                    ct.x = e, Ce(e, d)
                }, ke = function (e, t) {
                    var n = dt[e] - me[e];
                    return ce[e] + ue[e] + n - n * (t / g)
                }, Re = function (e, t) {
                    e.x = t.x, e.y = t.y, t.id && (e.id = t.id)
                }, Le = function (e) {
                    e.x = Math.round(e.x), e.y = Math.round(e.y)
                }, Be = null, Ne = function () {
                    Be && (r.unbind(document, "mousemove", Ne), r.addClass(e, "pswp--has_mouse"), a.mouseUsed = !0, Oe("mouseUsed")), Be = setTimeout((function () {
                        Be = null
                    }), 100)
                }, De = function (e, t) {
                    var n = Ut(o.currItem, fe, e);
                    return t && (ee = n), n
                }, ze = function (e) {
                    return e || (e = o.currItem), e.initialZoomLevel
                }, Ze = function (e) {
                    return e || (e = o.currItem), e.w > 0 ? a.maxSpreadZoom : 1
                }, We = function (e, t, n, i) {
                    return i === o.currItem.initialZoomLevel ? (n[e] = o.currItem.initialPosition[e], !0) : (n[e] = ke(e, i), n[e] > t.min[e] ? (n[e] = t.min[e], !0) : n[e] < t.max[e] && (n[e] = t.max[e], !0))
                }, Ge = function (e) {
                    var t = "";
                    a.escKey && 27 === e.keyCode ? t = "close" : a.arrowKeys && (37 === e.keyCode ? t = "prev" : 39 === e.keyCode && (t = "next")), t && (e.ctrlKey || e.altKey || e.shiftKey || e.metaKey || (e.preventDefault ? e.preventDefault() : e.returnValue = !1, o[t]()))
                }, je = function (e) {
                    e && (H || K || ne || j) && (e.preventDefault(), e.stopPropagation())
                }, Ve = function () {
                    o.setScrollOffset(0, r.getScrollY())
                }, qe = {}, Ue = 0, Ke = function (e) {
                    qe[e] && (qe[e].raf && I(qe[e].raf), Ue--, delete qe[e])
                }, He = function (e) {
                    qe[e] && Ke(e), qe[e] || (Ue++, qe[e] = {})
                }, Ye = function () {
                    for (var e in qe) qe.hasOwnProperty(e) && Ke(e)
                }, Xe = function (e, t, n, i, r, o, a) {
                    var s, l = Ae();
                    He(e);
                    var u = function () {
                        if (qe[e]) {
                            if ((s = Ae() - l) >= i) return Ke(e), o(n), void (a && a());
                            o((n - t) * r(s / i) + t), qe[e].raf = C(u)
                        }
                    };
                    u()
                }, Qe = {
                    shout: Oe, listen: Se, viewportSize: fe, options: a, isMainScrollAnimating: function () {
                        return ne
                    }, getZoomLevel: function () {
                        return v
                    }, getCurrentIndex: function () {
                        return c
                    }, isDragging: function () {
                        return q
                    }, isZooming: function () {
                        return $
                    }, setScrollOffset: function (e, t) {
                        me.x = e, B = me.y = t, Oe("updateScrollOffset", me)
                    }, applyZoomPan: function (e, t, n, i) {
                        de.x = t, de.y = n, v = e, Pe(i)
                    }, init: function () {
                        if (!s && !l) {
                            var n;
                            o.framework = r, o.template = e, o.bg = r.getChildByClass(e, "pswp__bg"), k = e.className, s = !0, N = r.detectFeatures(), C = N.raf, I = N.caf, E = N.transform, L = N.oldIE, o.scrollWrap = r.getChildByClass(e, "pswp__scroll-wrap"), o.container = r.getChildByClass(o.scrollWrap, "pswp__container"), d = o.container.style, o.itemHolders = _ = [{
                                el: o.container.children[0],
                                wrap: 0,
                                index: -1
                            }, {el: o.container.children[1], wrap: 0, index: -1}, {
                                el: o.container.children[2],
                                wrap: 0,
                                index: -1
                            }], _[0].el.style.display = _[2].el.style.display = "none", function () {
                                if (E) {
                                    var t = N.perspective && !F;
                                    return w = "translate" + (t ? "3d(" : "("), void (b = N.perspective ? ", 0px)" : ")")
                                }
                                E = "left", r.addClass(e, "pswp--ie"), Ce = function (e, t) {
                                    t.left = e + "px"
                                }, Fe = function (e) {
                                    var t = e.fitRatio > 1 ? 1 : e.fitRatio, n = e.container.style, i = t * e.w,
                                        r = t * e.h;
                                    n.width = i + "px", n.height = r + "px", n.left = e.initialPosition.x + "px", n.top = e.initialPosition.y + "px"
                                }, Pe = function () {
                                    if (te) {
                                        var e = te, t = o.currItem, n = t.fitRatio > 1 ? 1 : t.fitRatio, i = n * t.w,
                                            r = n * t.h;
                                        e.width = i + "px", e.height = r + "px", e.left = de.x + "px", e.top = de.y + "px"
                                    }
                                }
                            }(), h = {
                                resize: o.updateSize, orientationchange: function () {
                                    clearTimeout(D), D = setTimeout((function () {
                                        fe.x !== o.scrollWrap.clientWidth && o.updateSize()
                                    }), 500)
                                }, scroll: Ve, keydown: Ge, click: je
                            };
                            var i = N.isOldIOSPhone || N.isOldAndroid || N.isMobileOpera;
                            for (N.animationName && N.transform && !i || (a.showAnimationDuration = a.hideAnimationDuration = 0), n = 0; n < we.length; n++) o["init" + we[n]]();
                            t && (o.ui = new t(o, r)).init(), Oe("firstUpdate"), c = c || a.index || 0, (isNaN(c) || c < 0 || c >= Wt()) && (c = 0), o.currItem = Zt(c), (N.isOldIOSPhone || N.isOldAndroid) && (ge = !1), e.setAttribute("aria-hidden", "false"), a.modal && (ge ? e.style.position = "fixed" : (e.style.position = "absolute", e.style.top = r.getScrollY() + "px")), void 0 === B && (Oe("initialLayout"), B = R = r.getScrollY());
                            var u = "pswp--open ";
                            for (a.mainClass && (u += a.mainClass + " "), a.showHideOpacity && (u += "pswp--animate_opacity "), u += F ? "pswp--touch" : "pswp--notouch", u += N.animationName ? " pswp--css_animation" : "", u += N.svg ? " pswp--svg" : "", r.addClass(e, u), o.updateSize(), f = -1, ve = null, n = 0; n < 3; n++) Ce((n + f) * he.x, _[n].el.style);
                            L || r.bind(o.scrollWrap, m, o), Se("initialZoomInEnd", (function () {
                                o.setContent(_[0], c - 1), o.setContent(_[2], c + 1), _[0].el.style.display = _[2].el.style.display = "block", a.focus && e.focus(), r.bind(document, "keydown", o), N.transform && r.bind(o.scrollWrap, "click", o), a.mouseUsed || r.bind(document, "mousemove", Ne), r.bind(window, "resize scroll orientationchange", o), Oe("bindEvents")
                            })), o.setContent(_[1], c), o.updateCurrItem(), Oe("afterInit"), ge || (y = setInterval((function () {
                                Ue || q || $ || v !== o.currItem.initialZoomLevel || o.updateSize()
                            }), 1e3)), r.addClass(e, "pswp--visible")
                        }
                    }, close: function () {
                        s && (s = !1, l = !0, Oe("close"), r.unbind(window, "resize scroll orientationchange", o), r.unbind(window, "scroll", h.scroll), r.unbind(document, "keydown", o), r.unbind(document, "mousemove", Ne), N.transform && r.unbind(o.scrollWrap, "click", o), q && r.unbind(window, p, o), clearTimeout(D), Oe("unbindEvents"), Gt(o.currItem, null, !0, o.destroy))
                    }, destroy: function () {
                        Oe("destroy"), Bt && clearTimeout(Bt), e.setAttribute("aria-hidden", "true"), e.className = k, y && clearInterval(y), r.unbind(o.scrollWrap, m, o), r.unbind(window, "scroll", o), mt(), Ye(), Me = null
                    }, panTo: function (e, t, n) {
                        n || (e > ee.min.x ? e = ee.min.x : e < ee.max.x && (e = ee.max.x), t > ee.min.y ? t = ee.min.y : t < ee.max.y && (t = ee.max.y)), de.x = e, de.y = t, Pe()
                    }, handleEvent: function (e) {
                        e = e || window.event, h[e.type] && h[e.type](e)
                    }, goTo: function (e) {
                        var t = (e = _e(e)) - c;
                        ve = t, c = e, o.currItem = Zt(c), pe -= t, Ie(he.x * pe), Ye(), ne = !1, o.updateCurrItem()
                    }, next: function () {
                        o.goTo(c + 1)
                    }, prev: function () {
                        o.goTo(c - 1)
                    }, updateCurrZoomItem: function (e) {
                        if (e && Oe("beforeChange", 0), _[1].el.children.length) {
                            var t = _[1].el.children[0];
                            te = r.hasClass(t, "pswp__zoom-wrap") ? t.style : null
                        } else te = null;
                        ee = o.currItem.bounds, g = v = o.currItem.initialZoomLevel, de.x = ee.center.x, de.y = ee.center.y, e && Oe("afterChange")
                    }, invalidateCurrItems: function () {
                        x = !0;
                        for (var e = 0; e < 3; e++) _[e].item && (_[e].item.needsUpdate = !0)
                    }, updateCurrItem: function (e) {
                        if (0 !== ve) {
                            var t, n = Math.abs(ve);
                            if (!(e && n < 2)) {
                                o.currItem = Zt(c), ye = !1, Oe("beforeChange", ve), n >= 3 && (f += ve + (ve > 0 ? -3 : 3), n = 3);
                                for (var i = 0; i < n; i++) ve > 0 ? (t = _.shift(), _[2] = t, f++, Ce((f + 2) * he.x, t.el.style), o.setContent(t, c - n + i + 1 + 1)) : (t = _.pop(), _.unshift(t), f--, Ce(f * he.x, t.el.style), o.setContent(t, c + n - i - 1 - 1));
                                if (te && 1 === Math.abs(ve)) {
                                    var r = Zt(M);
                                    r.initialZoomLevel !== v && (Ut(r, fe), Xt(r), Fe(r))
                                }
                                ve = 0, o.updateCurrZoomItem(), M = c, Oe("afterChange")
                            }
                        }
                    }, updateSize: function (t) {
                        if (!ge && a.modal) {
                            var n = r.getScrollY();
                            if (B !== n && (e.style.top = n + "px", B = n), !t && be.x === window.innerWidth && be.y === window.innerHeight) return;
                            be.x = window.innerWidth, be.y = window.innerHeight, e.style.height = be.y + "px"
                        }
                        if (fe.x = o.scrollWrap.clientWidth, fe.y = o.scrollWrap.clientHeight, Ve(), he.x = fe.x + Math.round(fe.x * a.spacing), he.y = fe.y, Ie(he.x * pe), Oe("beforeResize"), void 0 !== f) {
                            for (var i, s, l, u = 0; u < 3; u++) i = _[u], Ce((u + f) * he.x, i.el.style), l = c + u - 1, a.loop && Wt() > 2 && (l = _e(l)), (s = Zt(l)) && (x || s.needsUpdate || !s.bounds) ? (o.cleanSlide(s), o.setContent(i, l), 1 === u && (o.currItem = s, o.updateCurrZoomItem(!0)), s.needsUpdate = !1) : -1 === i.index && l >= 0 && o.setContent(i, l), s && s.container && (Ut(s, fe), Xt(s), Fe(s));
                            x = !1
                        }
                        g = v = o.currItem.initialZoomLevel, (ee = o.currItem.bounds) && (de.x = ee.center.x, de.y = ee.center.y, Pe(!0)), Oe("resize")
                    }, zoomTo: function (e, t, n, i, o) {
                        t && (g = v, dt.x = Math.abs(t.x) - de.x, dt.y = Math.abs(t.y) - de.y, Re(ce, de));
                        var a = De(e, !1), s = {};
                        We("x", a, s, e), We("y", a, s, e);
                        var l = v, u = de.x, c = de.y;
                        Le(s);
                        var d = function (t) {
                            1 === t ? (v = e, de.x = s.x, de.y = s.y) : (v = (e - l) * t + l, de.x = (s.x - u) * t + u, de.y = (s.y - c) * t + c), o && o(t), Pe(1 === t)
                        };
                        n ? Xe("customZoomTo", 0, 1, n, i || r.easing.sine.inOut, d) : d(1)
                    }
                }, $e = {}, Je = {}, et = {}, tt = {}, nt = {}, it = [], rt = {}, ot = [], at = {}, st = 0,
                lt = {x: 0, y: 0}, ut = 0, ct = {x: 0, y: 0}, dt = {x: 0, y: 0}, ft = {x: 0, y: 0},
                pt = function (e, t) {
                    return at.x = Math.abs(e.x - t.x), at.y = Math.abs(e.y - t.y), Math.sqrt(at.x * at.x + at.y * at.y)
                }, mt = function () {
                    Y && (I(Y), Y = null)
                }, ht = function () {
                    q && (Y = C(ht), Pt())
                }, vt = function (e, t) {
                    return !(!e || e === document) && !(e.getAttribute("class") && e.getAttribute("class").indexOf("pswp__scroll-wrap") > -1) && (t(e) ? e : vt(e.parentNode, t))
                }, gt = {}, wt = function (e, t) {
                    return gt.prevent = !vt(e.target, a.isClickableElement), Oe("preventDragEvent", e, t, gt), gt.prevent
                }, bt = function (e, t) {
                    return t.x = e.pageX, t.y = e.pageY, t.id = e.identifier, t
                }, yt = function (e, t, n) {
                    n.x = .5 * (e.x + t.x), n.y = .5 * (e.y + t.y)
                }, xt = function () {
                    var e = de.y - o.currItem.initialPosition.y;
                    return 1 - Math.abs(e / (fe.y / 2))
                }, _t = {}, Mt = {}, St = [], Ot = function (e) {
                    for (; St.length > 0;) St.pop();
                    return P ? (le = 0, it.forEach((function (e) {
                        0 === le ? St[0] = e : 1 === le && (St[1] = e), le++
                    }))) : e.type.indexOf("touch") > -1 ? e.touches && e.touches.length > 0 && (St[0] = bt(e.touches[0], _t), e.touches.length > 1 && (St[1] = bt(e.touches[1], Mt))) : (_t.x = e.pageX, _t.y = e.pageY, _t.id = "", St[0] = _t), St
                }, At = function (e, t) {
                    var n, i, r, s, l = de[e] + t[e], u = t[e] > 0, c = ct.x + t.x, d = ct.x - rt.x;
                    if (n = l > ee.min[e] || l < ee.max[e] ? a.panEndFriction : 1, l = de[e] + t[e] * n, (a.allowPanToNext || v === o.currItem.initialZoomLevel) && (te ? "h" !== ie || "x" !== e || K || (u ? (l > ee.min[e] && (n = a.panEndFriction, ee.min[e], i = ee.min[e] - ce[e]), (i <= 0 || d < 0) && Wt() > 1 ? (s = c, d < 0 && c > rt.x && (s = rt.x)) : ee.min.x !== ee.max.x && (r = l)) : (l < ee.max[e] && (n = a.panEndFriction, ee.max[e], i = ce[e] - ee.max[e]), (i <= 0 || d > 0) && Wt() > 1 ? (s = c, d > 0 && c < rt.x && (s = rt.x)) : ee.min.x !== ee.max.x && (r = l))) : s = c, "x" === e)) return void 0 !== s && (Ie(s, !0), X = s !== rt.x), ee.min.x !== ee.max.x && (void 0 !== r ? de.x = r : X || (de.x += t.x * n)), void 0 !== s;
                    ne || X || v > o.currItem.fitRatio && (de[e] += t[e] * n)
                }, Tt = function (e) {
                    if (!("mousedown" === e.type && e.button > 0)) if (zt) e.preventDefault(); else if (!V || "mousedown" !== e.type) {
                        if (wt(e, !0) && e.preventDefault(), Oe("pointerDown"), P) {
                            var t = r.arraySearch(it, e.pointerId, "id");
                            t < 0 && (t = it.length), it[t] = {x: e.pageX, y: e.pageY, id: e.pointerId}
                        }
                        var n = Ot(e), i = n.length;
                        Q = null, Ye(), q && 1 !== i || (q = re = !0, r.bind(window, p, o), G = se = oe = j = X = H = U = K = !1, ie = null, Oe("firstTouchStart", n), Re(ce, de), ue.x = ue.y = 0, Re(tt, n[0]), Re(nt, tt), rt.x = he.x * pe, ot = [{
                            x: tt.x,
                            y: tt.y
                        }], Z = z = Ae(), De(v, !0), mt(), ht()), !$ && i > 1 && !ne && !X && (g = v, K = !1, $ = U = !0, ue.y = ue.x = 0, Re(ce, de), Re($e, n[0]), Re(Je, n[1]), yt($e, Je, ft), dt.x = Math.abs(ft.x) - de.x, dt.y = Math.abs(ft.y) - de.y, J = pt($e, Je))
                    }
                }, Et = function (e) {
                    if (e.preventDefault(), P) {
                        var t = r.arraySearch(it, e.pointerId, "id");
                        if (t > -1) {
                            var n = it[t];
                            n.x = e.pageX, n.y = e.pageY
                        }
                    }
                    if (q) {
                        var i = Ot(e);
                        if (ie || H || $) Q = i; else if (ct.x !== he.x * pe) ie = "h"; else {
                            var o = Math.abs(i[0].x - tt.x) - Math.abs(i[0].y - tt.y);
                            Math.abs(o) >= 10 && (ie = o > 0 ? "h" : "v", Q = i)
                        }
                    }
                }, Pt = function () {
                    if (Q) {
                        var e = Q.length;
                        if (0 !== e) if (Re($e, Q[0]), et.x = $e.x - tt.x, et.y = $e.y - tt.y, $ && e > 1) {
                            if (tt.x = $e.x, tt.y = $e.y, !et.x && !et.y && function (e, t) {
                                return e.x === t.x && e.y === t.y
                            }(Q[1], Je)) return;
                            Re(Je, Q[1]), K || (K = !0, Oe("zoomGestureStarted"));
                            var t = pt($e, Je), n = Rt(t);
                            n > o.currItem.initialZoomLevel + o.currItem.initialZoomLevel / 15 && (se = !0);
                            var i = 1, r = ze(), s = Ze();
                            if (n < r) if (a.pinchToClose && !se && g <= o.currItem.initialZoomLevel) {
                                var l = 1 - (r - n) / (r / 1.2);
                                Te(l), Oe("onPinchClose", l), oe = !0
                            } else (i = (r - n) / r) > 1 && (i = 1), n = r - i * (r / 3); else n > s && ((i = (n - s) / (6 * r)) > 1 && (i = 1), n = s + i * r);
                            i < 0 && (i = 0), yt($e, Je, lt), ue.x += lt.x - ft.x, ue.y += lt.y - ft.y, Re(ft, lt), de.x = ke("x", n), de.y = ke("y", n), G = n > v, v = n, Pe()
                        } else {
                            if (!ie) return;
                            if (re && (re = !1, Math.abs(et.x) >= 10 && (et.x -= Q[0].x - nt.x), Math.abs(et.y) >= 10 && (et.y -= Q[0].y - nt.y)), tt.x = $e.x, tt.y = $e.y, 0 === et.x && 0 === et.y) return;
                            if ("v" === ie && a.closeOnVerticalDrag && "fit" === a.scaleMode && v === o.currItem.initialZoomLevel) {
                                ue.y += et.y, de.y += et.y;
                                var u = xt();
                                return j = !0, Oe("onVerticalDrag", u), Te(u), void Pe()
                            }
                            !function (e, t, n) {
                                if (e - Z > 50) {
                                    var i = ot.length > 2 ? ot.shift() : {};
                                    i.x = t, i.y = n, ot.push(i), Z = e
                                }
                            }(Ae(), $e.x, $e.y), H = !0, ee = o.currItem.bounds, At("x", et) || (At("y", et), Le(de), Pe())
                        }
                    }
                }, Ft = function (e) {
                    if (N.isOldAndroid) {
                        if (V && "mouseup" === e.type) return;
                        e.type.indexOf("touch") > -1 && (clearTimeout(V), V = setTimeout((function () {
                            V = 0
                        }), 600))
                    }
                    var t;
                    if (Oe("pointerUp"), wt(e, !1) && e.preventDefault(), P) {
                        var n = r.arraySearch(it, e.pointerId, "id");
                        n > -1 && (t = it.splice(n, 1)[0], navigator.msPointerEnabled ? (t.type = {
                            4: "mouse",
                            2: "touch",
                            3: "pen"
                        }[e.pointerType], t.type || (t.type = e.pointerType || "mouse")) : t.type = e.pointerType || "mouse")
                    }
                    var i, s = Ot(e), l = s.length;
                    if ("mouseup" === e.type && (l = 0), 2 === l) return Q = null, !0;
                    1 === l && Re(nt, s[0]), 0 !== l || ie || ne || (t || ("mouseup" === e.type ? t = {
                        x: e.pageX,
                        y: e.pageY,
                        type: "mouse"
                    } : e.changedTouches && e.changedTouches[0] && (t = {
                        x: e.changedTouches[0].pageX,
                        y: e.changedTouches[0].pageY,
                        type: "touch"
                    })), Oe("touchRelease", e, t));
                    var u = -1;
                    if (0 === l && (q = !1, r.unbind(window, p, o), mt(), $ ? u = 0 : -1 !== ut && (u = Ae() - ut)), ut = 1 === l ? Ae() : -1, i = -1 !== u && u < 150 ? "zoom" : "swipe", $ && l < 2 && ($ = !1, 1 === l && (i = "zoomPointerUp"), Oe("zoomGestureEnded")), Q = null, H || K || ne || j) if (Ye(), W || (W = Ct()), W.calculateSwipeSpeed("x"), j) if (xt() < a.verticalDragRange) o.close(); else {
                        var c = de.y, d = ae;
                        Xe("verticalDrag", 0, 1, 300, r.easing.cubic.out, (function (e) {
                            de.y = (o.currItem.initialPosition.y - c) * e + c, Te((1 - d) * e + d), Pe()
                        })), Oe("onVerticalDrag", 1)
                    } else {
                        if ((X || ne) && 0 === l) {
                            if (kt(i, W)) return;
                            i = "zoomPointerUp"
                        }
                        ne || ("swipe" === i ? !X && v > o.currItem.fitRatio && It(W) : Lt())
                    }
                }, Ct = function () {
                    var e, t, n = {
                        lastFlickOffset: {},
                        lastFlickDist: {},
                        lastFlickSpeed: {},
                        slowDownRatio: {},
                        slowDownRatioReverse: {},
                        speedDecelerationRatio: {},
                        speedDecelerationRatioAbs: {},
                        distanceOffset: {},
                        backAnimDestination: {},
                        backAnimStarted: {},
                        calculateSwipeSpeed: function (i) {
                            ot.length > 1 ? (e = Ae() - Z + 50, t = ot[ot.length - 2][i]) : (e = Ae() - z, t = nt[i]), n.lastFlickOffset[i] = tt[i] - t, n.lastFlickDist[i] = Math.abs(n.lastFlickOffset[i]), n.lastFlickDist[i] > 20 ? n.lastFlickSpeed[i] = n.lastFlickOffset[i] / e : n.lastFlickSpeed[i] = 0, Math.abs(n.lastFlickSpeed[i]) < .1 && (n.lastFlickSpeed[i] = 0), n.slowDownRatio[i] = .95, n.slowDownRatioReverse[i] = 1 - n.slowDownRatio[i], n.speedDecelerationRatio[i] = 1
                        },
                        calculateOverBoundsAnimOffset: function (e, t) {
                            n.backAnimStarted[e] || (de[e] > ee.min[e] ? n.backAnimDestination[e] = ee.min[e] : de[e] < ee.max[e] && (n.backAnimDestination[e] = ee.max[e]), void 0 !== n.backAnimDestination[e] && (n.slowDownRatio[e] = .7, n.slowDownRatioReverse[e] = 1 - n.slowDownRatio[e], n.speedDecelerationRatioAbs[e] < .05 && (n.lastFlickSpeed[e] = 0, n.backAnimStarted[e] = !0, Xe("bounceZoomPan" + e, de[e], n.backAnimDestination[e], t || 300, r.easing.sine.out, (function (t) {
                                de[e] = t, Pe()
                            })))))
                        },
                        calculateAnimOffset: function (e) {
                            n.backAnimStarted[e] || (n.speedDecelerationRatio[e] = n.speedDecelerationRatio[e] * (n.slowDownRatio[e] + n.slowDownRatioReverse[e] - n.slowDownRatioReverse[e] * n.timeDiff / 10), n.speedDecelerationRatioAbs[e] = Math.abs(n.lastFlickSpeed[e] * n.speedDecelerationRatio[e]), n.distanceOffset[e] = n.lastFlickSpeed[e] * n.speedDecelerationRatio[e] * n.timeDiff, de[e] += n.distanceOffset[e])
                        },
                        panAnimLoop: function () {
                            if (qe.zoomPan && (qe.zoomPan.raf = C(n.panAnimLoop), n.now = Ae(), n.timeDiff = n.now - n.lastNow, n.lastNow = n.now, n.calculateAnimOffset("x"), n.calculateAnimOffset("y"), Pe(), n.calculateOverBoundsAnimOffset("x"), n.calculateOverBoundsAnimOffset("y"), n.speedDecelerationRatioAbs.x < .05 && n.speedDecelerationRatioAbs.y < .05)) return de.x = Math.round(de.x), de.y = Math.round(de.y), Pe(), void Ke("zoomPan")
                        }
                    };
                    return n
                }, It = function (e) {
                    if (e.calculateSwipeSpeed("y"), ee = o.currItem.bounds, e.backAnimDestination = {}, e.backAnimStarted = {}, Math.abs(e.lastFlickSpeed.x) <= .05 && Math.abs(e.lastFlickSpeed.y) <= .05) return e.speedDecelerationRatioAbs.x = e.speedDecelerationRatioAbs.y = 0, e.calculateOverBoundsAnimOffset("x"), e.calculateOverBoundsAnimOffset("y"), !0;
                    He("zoomPan"), e.lastNow = Ae(), e.panAnimLoop()
                }, kt = function (e, t) {
                    var n, i, s;
                    if (ne || (st = c), "swipe" === e) {
                        var l = tt.x - nt.x, u = t.lastFlickDist.x < 10;
                        l > 30 && (u || t.lastFlickOffset.x > 20) ? i = -1 : l < -30 && (u || t.lastFlickOffset.x < -20) && (i = 1)
                    }
                    i && ((c += i) < 0 ? (c = a.loop ? Wt() - 1 : 0, s = !0) : c >= Wt() && (c = a.loop ? 0 : Wt() - 1, s = !0), s && !a.loop || (ve += i, pe -= i, n = !0));
                    var d, f = he.x * pe, p = Math.abs(f - ct.x);
                    return n || f > ct.x == t.lastFlickSpeed.x > 0 ? (d = Math.abs(t.lastFlickSpeed.x) > 0 ? p / Math.abs(t.lastFlickSpeed.x) : 333, d = Math.min(d, 400), d = Math.max(d, 250)) : d = 333, st === c && (n = !1), ne = !0, Oe("mainScrollAnimStart"), Xe("mainScroll", ct.x, f, d, r.easing.cubic.out, Ie, (function () {
                        Ye(), ne = !1, st = -1, (n || st !== c) && o.updateCurrItem(), Oe("mainScrollAnimComplete")
                    })), n && o.updateCurrItem(!0), n
                }, Rt = function (e) {
                    return 1 / J * e * g
                }, Lt = function () {
                    var e = v, t = ze(), n = Ze();
                    v < t ? e = t : v > n && (e = n);
                    var i, a = ae;
                    return oe && !G && !se && v < t ? (o.close(), !0) : (oe && (i = function (e) {
                        Te((1 - a) * e + a)
                    }), o.zoomTo(e, 0, 200, r.easing.cubic.out, i), !0)
                };
            xe("Gestures", {
                publicMethods: {
                    initGestures: function () {
                        var e = function (e, t, n, i, r) {
                            S = e + t, O = e + n, A = e + i, T = r ? e + r : ""
                        };
                        (P = N.pointerEvent) && N.touch && (N.touch = !1), P ? navigator.msPointerEnabled ? e("MSPointer", "Down", "Move", "Up", "Cancel") : e("pointer", "down", "move", "up", "cancel") : N.touch ? (e("touch", "start", "move", "end", "cancel"), F = !0) : e("mouse", "down", "move", "up"), p = O + " " + A + " " + T, m = S, P && !F && (F = navigator.maxTouchPoints > 1 || navigator.msMaxTouchPoints > 1), o.likelyTouchDevice = F, h[S] = Tt, h[O] = Et, h[A] = Ft, T && (h[T] = h[A]), N.touch && (m += " mousedown", p += " mousemove mouseup", h.mousedown = h[S], h.mousemove = h[O], h.mouseup = h[A]), F || (a.allowPanToNext = !1)
                    }
                }
            });
            var Bt, Nt, Dt, zt, Zt, Wt, Gt = function (t, n, i, s) {
                var l;
                Bt && clearTimeout(Bt), zt = !0, Dt = !0, t.initialLayout ? (l = t.initialLayout, t.initialLayout = null) : l = a.getThumbBoundsFn && a.getThumbBoundsFn(c);
                var d, f, p = i ? a.hideAnimationDuration : a.showAnimationDuration, m = function () {
                    Ke("initialZoom"), i ? (o.template.removeAttribute("style"), o.bg.removeAttribute("style")) : (Te(1), n && (n.style.display = "block"), r.addClass(e, "pswp--animated-in"), Oe("initialZoom" + (i ? "OutEnd" : "InEnd"))), s && s(), zt = !1
                };
                if (!p || !l || void 0 === l.x) return Oe("initialZoom" + (i ? "Out" : "In")), v = t.initialZoomLevel, Re(de, t.initialPosition), Pe(), e.style.opacity = i ? 0 : 1, Te(1), void (p ? setTimeout((function () {
                    m()
                }), p) : m());
                d = u, f = !o.currItem.src || o.currItem.loadError || a.showHideOpacity, t.miniImg && (t.miniImg.style.webkitBackfaceVisibility = "hidden"), i || (v = l.w / t.w, de.x = l.x, de.y = l.y - R, o[f ? "template" : "bg"].style.opacity = .001, Pe()), He("initialZoom"), i && !d && r.removeClass(e, "pswp--animated-in"), f && (i ? r[(d ? "remove" : "add") + "Class"](e, "pswp--animate_opacity") : setTimeout((function () {
                    r.addClass(e, "pswp--animate_opacity")
                }), 30)), Bt = setTimeout((function () {
                    if (Oe("initialZoom" + (i ? "Out" : "In")), i) {
                        var n = l.w / t.w, o = {x: de.x, y: de.y}, a = v, s = ae, u = function (t) {
                            1 === t ? (v = n, de.x = l.x, de.y = l.y - B) : (v = (n - a) * t + a, de.x = (l.x - o.x) * t + o.x, de.y = (l.y - B - o.y) * t + o.y), Pe(), f ? e.style.opacity = 1 - t : Te(s - t * s)
                        };
                        d ? Xe("initialZoom", 0, 1, p, r.easing.cubic.out, u, m) : (u(1), Bt = setTimeout(m, p + 20))
                    } else v = t.initialZoomLevel, Re(de, t.initialPosition), Pe(), Te(1), f ? e.style.opacity = 1 : Te(1), Bt = setTimeout(m, p + 20)
                }), i ? 25 : 90)
            }, jt = {}, Vt = [], qt = {
                index: 0,
                errorMsg: '<div class="pswp__error-msg"><a href="%url%" target="_blank">The image</a> could not be loaded.</div>',
                forceProgressiveLoading: !1,
                preload: [1, 1],
                getNumItemsFn: function () {
                    return Nt.length
                }
            }, Ut = function (e, t, n) {
                if (e.src && !e.loadError) {
                    var i = !n;
                    if (i && (e.vGap || (e.vGap = {
                        top: 0,
                        bottom: 0
                    }), Oe("parseVerticalMargin", e)), jt.x = t.x, jt.y = t.y - e.vGap.top - e.vGap.bottom, i) {
                        var r = jt.x / e.w, o = jt.y / e.h;
                        e.fitRatio = r < o ? r : o;
                        var s = a.scaleMode;
                        "orig" === s ? n = 1 : "fit" === s && (n = e.fitRatio), n > 1 && (n = 1), e.initialZoomLevel = n, e.bounds || (e.bounds = {
                            center: {
                                x: 0,
                                y: 0
                            }, max: {x: 0, y: 0}, min: {x: 0, y: 0}
                        })
                    }
                    if (!n) return;
                    return function (e, t, n) {
                        var i = e.bounds;
                        i.center.x = Math.round((jt.x - t) / 2), i.center.y = Math.round((jt.y - n) / 2) + e.vGap.top, i.max.x = t > jt.x ? Math.round(jt.x - t) : i.center.x, i.max.y = n > jt.y ? Math.round(jt.y - n) + e.vGap.top : i.center.y, i.min.x = t > jt.x ? 0 : i.center.x, i.min.y = n > jt.y ? e.vGap.top : i.center.y
                    }(e, e.w * n, e.h * n), i && n === e.initialZoomLevel && (e.initialPosition = e.bounds.center), e.bounds
                }
                return e.w = e.h = 0, e.initialZoomLevel = e.fitRatio = 1, e.bounds = {
                    center: {x: 0, y: 0},
                    max: {x: 0, y: 0},
                    min: {x: 0, y: 0}
                }, e.initialPosition = e.bounds.center, e.bounds
            }, Kt = function (e, t, n, i, r, a) {
                t.loadError || i && (t.imageAppended = !0, Xt(t, i, t === o.currItem && ye), n.appendChild(i), a && setTimeout((function () {
                    t && t.loaded && t.placeholder && (t.placeholder.style.display = "none", t.placeholder = null)
                }), 500))
            }, Ht = function (e) {
                e.loading = !0, e.loaded = !1;
                var t = e.img = r.createEl("pswp__img", "img"), n = function () {
                    e.loading = !1, e.loaded = !0, e.loadComplete ? e.loadComplete(e) : e.img = null, t.onload = t.onerror = null, t = null
                };
                return t.onload = n, t.onerror = function () {
                    e.loadError = !0, n()
                }, t.src = e.src, t
            }, Yt = function (e, t) {
                if (e.src && e.loadError && e.container) return t && (e.container.innerHTML = ""), e.container.innerHTML = a.errorMsg.replace("%url%", e.src), !0
            }, Xt = function (e, t, n) {
                if (e.src) {
                    t || (t = e.container.lastChild);
                    var i = n ? e.w : Math.round(e.w * e.fitRatio), r = n ? e.h : Math.round(e.h * e.fitRatio);
                    e.placeholder && !e.loaded && (e.placeholder.style.width = i + "px", e.placeholder.style.height = r + "px"), t.style.width = i + "px", t.style.height = r + "px"
                }
            }, Qt = function () {
                if (Vt.length) {
                    for (var e, t = 0; t < Vt.length; t++) (e = Vt[t]).holder.index === e.index && Kt(e.index, e.item, e.baseDiv, e.img, 0, e.clearPlaceholder);
                    Vt = []
                }
            };
            xe("Controller", {
                publicMethods: {
                    lazyLoadItem: function (e) {
                        e = _e(e);
                        var t = Zt(e);
                        t && (!t.loaded && !t.loading || x) && (Oe("gettingData", e, t), t.src && Ht(t))
                    }, initController: function () {
                        r.extend(a, qt, !0), o.items = Nt = n, Zt = o.getItemAt, Wt = a.getNumItemsFn, a.loop, Wt() < 3 && (a.loop = !1), Se("beforeChange", (function (e) {
                            var t, n = a.preload, i = null === e || e >= 0, r = Math.min(n[0], Wt()),
                                s = Math.min(n[1], Wt());
                            for (t = 1; t <= (i ? s : r); t++) o.lazyLoadItem(c + t);
                            for (t = 1; t <= (i ? r : s); t++) o.lazyLoadItem(c - t)
                        })), Se("initialLayout", (function () {
                            o.currItem.initialLayout = a.getThumbBoundsFn && a.getThumbBoundsFn(c)
                        })), Se("mainScrollAnimComplete", Qt), Se("initialZoomInEnd", Qt), Se("destroy", (function () {
                            for (var e, t = 0; t < Nt.length; t++) (e = Nt[t]).container && (e.container = null), e.placeholder && (e.placeholder = null), e.img && (e.img = null), e.preloader && (e.preloader = null), e.loadError && (e.loaded = e.loadError = !1);
                            Vt = null
                        }))
                    }, getItemAt: function (e) {
                        return e >= 0 && void 0 !== Nt[e] && Nt[e]
                    }, allowProgressiveImg: function () {
                        return a.forceProgressiveLoading || !F || a.mouseUsed || screen.width > 1200
                    }, setContent: function (e, t) {
                        a.loop && (t = _e(t));
                        var n = o.getItemAt(e.index);
                        n && (n.container = null);
                        var i, l = o.getItemAt(t);
                        if (l) {
                            Oe("gettingData", t, l), e.index = t, e.item = l;
                            var u = l.container = r.createEl("pswp__zoom-wrap");
                            if (!l.src && l.html && (l.html.tagName ? u.appendChild(l.html) : u.innerHTML = l.html), Yt(l), Ut(l, fe), !l.src || l.loadError || l.loaded) l.src && !l.loadError && ((i = r.createEl("pswp__img", "img")).style.opacity = 1, i.src = l.src, Xt(l, i), Kt(0, l, u, i)); else {
                                if (l.loadComplete = function (n) {
                                    if (s) {
                                        if (e && e.index === t) {
                                            if (Yt(n, !0)) return n.loadComplete = n.img = null, Ut(n, fe), Fe(n), void (e.index === c && o.updateCurrZoomItem());
                                            n.imageAppended ? !zt && n.placeholder && (n.placeholder.style.display = "none", n.placeholder = null) : N.transform && (ne || zt) ? Vt.push({
                                                item: n,
                                                baseDiv: u,
                                                img: n.img,
                                                index: t,
                                                holder: e,
                                                clearPlaceholder: !0
                                            }) : Kt(0, n, u, n.img, 0, !0)
                                        }
                                        n.loadComplete = null, n.img = null, Oe("imageLoadComplete", t, n)
                                    }
                                }, r.features.transform) {
                                    var d = "pswp__img pswp__img--placeholder";
                                    d += l.msrc ? "" : " pswp__img--placeholder--blank";
                                    var f = r.createEl(d, l.msrc ? "img" : "");
                                    l.msrc && (f.src = l.msrc), Xt(l, f), u.appendChild(f), l.placeholder = f
                                }
                                l.loading || Ht(l), o.allowProgressiveImg() && (!Dt && N.transform ? Vt.push({
                                    item: l,
                                    baseDiv: u,
                                    img: l.img,
                                    index: t,
                                    holder: e
                                }) : Kt(0, l, u, l.img, 0, !0))
                            }
                            Dt || t !== c ? Fe(l) : (te = u.style, Gt(l, i || l.img)), e.el.innerHTML = "", e.el.appendChild(u)
                        } else e.el.innerHTML = ""
                    }, cleanSlide: function (e) {
                        e.img && (e.img.onload = e.img.onerror = null), e.loaded = e.loading = e.img = e.imageAppended = !1
                    }
                }
            });
            var $t, Jt, en = {}, tn = function (e, t, n) {
                var i = document.createEvent("CustomEvent"),
                    r = {origEvent: e, target: e.target, releasePoint: t, pointerType: n || "touch"};
                i.initCustomEvent("pswpTap", !0, !0, r), e.target.dispatchEvent(i)
            };
            xe("Tap", {
                publicMethods: {
                    initTap: function () {
                        Se("firstTouchStart", o.onTapStart), Se("touchRelease", o.onTapRelease), Se("destroy", (function () {
                            en = {}, $t = null
                        }))
                    }, onTapStart: function (e) {
                        e.length > 1 && (clearTimeout($t), $t = null)
                    }, onTapRelease: function (e, t) {
                        var n, i;
                        if (t && !H && !U && !Ue) {
                            var o = t;
                            if ($t && (clearTimeout($t), $t = null, n = o, i = en, Math.abs(n.x - i.x) < 25 && Math.abs(n.y - i.y) < 25)) return void Oe("doubleTap", o);
                            if ("mouse" === t.type) return void tn(e, t, "mouse");
                            if ("BUTTON" === e.target.tagName.toUpperCase() || r.hasClass(e.target, "pswp__single-tap")) return void tn(e, t);
                            Re(en, o), $t = setTimeout((function () {
                                tn(e, t), $t = null
                            }), 300)
                        }
                    }
                }
            }), xe("DesktopZoom", {
                publicMethods: {
                    initDesktopZoom: function () {
                        L || (F ? Se("mouseUsed", (function () {
                            o.setupDesktopZoom()
                        })) : o.setupDesktopZoom(!0))
                    }, setupDesktopZoom: function (t) {
                        Jt = {};
                        var n = "wheel mousewheel DOMMouseScroll";
                        Se("bindEvents", (function () {
                            r.bind(e, n, o.handleMouseWheel)
                        })), Se("unbindEvents", (function () {
                            Jt && r.unbind(e, n, o.handleMouseWheel)
                        })), o.mouseZoomedIn = !1;
                        var i, a = function () {
                            o.mouseZoomedIn && (r.removeClass(e, "pswp--zoomed-in"), o.mouseZoomedIn = !1), v < 1 ? r.addClass(e, "pswp--zoom-allowed") : r.removeClass(e, "pswp--zoom-allowed"), s()
                        }, s = function () {
                            i && (r.removeClass(e, "pswp--dragging"), i = !1)
                        };
                        Se("resize", a), Se("afterChange", a), Se("pointerDown", (function () {
                            o.mouseZoomedIn && (i = !0, r.addClass(e, "pswp--dragging"))
                        })), Se("pointerUp", s), t || a()
                    }, handleMouseWheel: function (e) {
                        if (v <= o.currItem.fitRatio) return a.modal && (!a.closeOnScroll || Ue || q ? e.preventDefault() : E && Math.abs(e.deltaY) > 2 && (u = !0, o.close())), !0;
                        if (e.stopPropagation(), Jt.x = 0, "deltaX" in e) 1 === e.deltaMode ? (Jt.x = 18 * e.deltaX, Jt.y = 18 * e.deltaY) : (Jt.x = e.deltaX, Jt.y = e.deltaY); else if ("wheelDelta" in e) e.wheelDeltaX && (Jt.x = -.16 * e.wheelDeltaX), e.wheelDeltaY ? Jt.y = -.16 * e.wheelDeltaY : Jt.y = -.16 * e.wheelDelta; else {
                            if (!("detail" in e)) return;
                            Jt.y = e.detail
                        }
                        De(v, !0);
                        var t = de.x - Jt.x, n = de.y - Jt.y;
                        (a.modal || t <= ee.min.x && t >= ee.max.x && n <= ee.min.y && n >= ee.max.y) && e.preventDefault(), o.panTo(t, n)
                    }, toggleDesktopZoom: function (t) {
                        t = t || {x: fe.x / 2 + me.x, y: fe.y / 2 + me.y};
                        var n = a.getDoubleTapZoom(!0, o.currItem), i = v === n;
                        o.mouseZoomedIn = !i, o.zoomTo(i ? o.currItem.initialZoomLevel : n, t, 333), r[(i ? "remove" : "add") + "Class"](e, "pswp--zoomed-in")
                    }
                }
            });
            var nn, rn, on, an, sn, ln, un, cn, dn, fn, pn, mn, hn = {history: !0, galleryUID: 1}, vn = function () {
                return pn.hash.substring(1)
            }, gn = function () {
                nn && clearTimeout(nn), on && clearTimeout(on)
            }, wn = function () {
                var e = vn(), t = {};
                if (e.length < 5) return t;
                var n, i = e.split("&");
                for (n = 0; n < i.length; n++) if (i[n]) {
                    var r = i[n].split("=");
                    r.length < 2 || (t[r[0]] = r[1])
                }
                if (a.galleryPIDs) {
                    var o = t.pid;
                    for (t.pid = 0, n = 0; n < Nt.length; n++) if (Nt[n].pid === o) {
                        t.pid = n;
                        break
                    }
                } else t.pid = parseInt(t.pid, 10) - 1;
                return t.pid < 0 && (t.pid = 0), t
            }, bn = function () {
                if (on && clearTimeout(on), Ue || q) on = setTimeout(bn, 500); else {
                    an ? clearTimeout(rn) : an = !0;
                    var e = c + 1, t = Zt(c);
                    t.hasOwnProperty("pid") && (e = t.pid);
                    var n = un + "&gid=" + a.galleryUID + "&pid=" + e;
                    cn || -1 === pn.hash.indexOf(n) && (fn = !0);
                    var i = pn.href.split("#")[0] + "#" + n;
                    mn ? "#" + n !== window.location.hash && history[cn ? "replaceState" : "pushState"]("", document.title, i) : cn ? pn.replace(i) : pn.hash = n, cn = !0, rn = setTimeout((function () {
                        an = !1
                    }), 60)
                }
            };
            xe("History", {
                publicMethods: {
                    initHistory: function () {
                        if (r.extend(a, hn, !0), a.history) {
                            pn = window.location, fn = !1, dn = !1, cn = !1, un = vn(), mn = "pushState" in history, un.indexOf("gid=") > -1 && (un = (un = un.split("&gid=")[0]).split("?gid=")[0]), Se("afterChange", o.updateURL), Se("unbindEvents", (function () {
                                r.unbind(window, "hashchange", o.onHashChange)
                            }));
                            var e = function () {
                                ln = !0, dn || (fn ? history.back() : un ? pn.hash = un : mn ? history.pushState("", document.title, pn.pathname + pn.search) : pn.hash = ""), gn()
                            };
                            Se("unbindEvents", (function () {
                                u && e()
                            })), Se("destroy", (function () {
                                ln || e()
                            })), Se("firstUpdate", (function () {
                                c = wn().pid
                            }));
                            var t = un.indexOf("pid=");
                            t > -1 && "&" === (un = un.substring(0, t)).slice(-1) && (un = un.slice(0, -1)), setTimeout((function () {
                                s && r.bind(window, "hashchange", o.onHashChange)
                            }), 40)
                        }
                    }, onHashChange: function () {
                        if (vn() === un) return dn = !0, void o.close();
                        an || (sn = !0, o.goTo(wn().pid), sn = !1)
                    }, updateURL: function () {
                        gn(), sn || (cn ? nn = setTimeout(bn, 800) : bn())
                    }
                }
            }), r.extend(o, Qe)
        }
    }) ? i.call(t, n, t, e) : i) || (e.exports = r)
}, function (e, t, n) {
    var i, r;
    /*! PhotoSwipe Default UI - 4.1.3 - 2019-01-08
* http://photoswipe.com
* Copyright (c) 2019 Dmitry Semenov; */
    void 0 === (r = "function" == typeof (i = function () {
        "use strict";
        return function (e, t) {
            var n, i, r, o, a, s, l, u, c, d, f, p, m, h, v, g, w, b, y = this, x = !1, _ = !0, M = !0, S = {
                barsSize: {top: 44, bottom: "auto"},
                closeElClasses: ["item", "caption", "zoom-wrap", "ui", "top-bar"],
                timeToIdle: 4e3,
                timeToIdleOutside: 1e3,
                loadingIndicatorDelay: 1e3,
                addCaptionHTMLFn: function (e, t) {
                    return e.title ? (t.children[0].innerHTML = e.title, !0) : (t.children[0].innerHTML = "", !1)
                },
                closeEl: !0,
                captionEl: !0,
                fullscreenEl: !0,
                zoomEl: !0,
                shareEl: !0,
                counterEl: !0,
                arrowEl: !0,
                preloaderEl: !0,
                tapToClose: !1,
                tapToToggleControls: !0,
                clickToCloseNonZoomable: !0,
                shareButtons: [{
                    id: "facebook",
                    label: "Share on Facebook",
                    url: "https://www.facebook.com/sharer/sharer.php?u={{url}}"
                }, {
                    id: "twitter",
                    label: "Tweet",
                    url: "https://twitter.com/intent/tweet?text={{text}}&url={{url}}"
                }, {
                    id: "pinterest",
                    label: "Pin it",
                    url: "http://www.pinterest.com/pin/create/button/?url={{url}}&media={{image_url}}&description={{text}}"
                }, {id: "download", label: "Download image", url: "{{raw_image_url}}", download: !0}],
                getImageURLForShare: function () {
                    return e.currItem.src || ""
                },
                getPageURLForShare: function () {
                    return window.location.href
                },
                getTextForShare: function () {
                    return e.currItem.title || ""
                },
                indexIndicatorSep: " / ",
                fitControlsWidth: 1200
            }, O = function (e) {
                if (g) return !0;
                e = e || window.event, v.timeToIdle && v.mouseUsed && !c && R();
                for (var n, i, r = (e.target || e.srcElement).getAttribute("class") || "", o = 0; o < D.length; o++) (n = D[o]).onTap && r.indexOf("pswp__" + n.name) > -1 && (n.onTap(), i = !0);
                if (i) {
                    e.stopPropagation && e.stopPropagation(), g = !0;
                    var a = t.features.isOldAndroid ? 600 : 30;
                    setTimeout((function () {
                        g = !1
                    }), a)
                }
            }, A = function (e, n, i) {
                t[(i ? "add" : "remove") + "Class"](e, "pswp__" + n)
            }, T = function () {
                var e = 1 === v.getNumItemsFn();
                e !== h && (A(i, "ui--one-slide", e), h = e)
            }, E = function () {
                A(l, "share-modal--hidden", M)
            }, P = function () {
                return (M = !M) ? (t.removeClass(l, "pswp__share-modal--fade-in"), setTimeout((function () {
                    M && E()
                }), 300)) : (E(), setTimeout((function () {
                    M || t.addClass(l, "pswp__share-modal--fade-in")
                }), 30)), M || C(), !1
            }, F = function (t) {
                var n = (t = t || window.event).target || t.srcElement;
                return e.shout("shareLinkClick", t, n), !(!n.href || !n.hasAttribute("download") && (window.open(n.href, "pswp_share", "scrollbars=yes,resizable=yes,toolbar=no,location=yes,width=550,height=420,top=100,left=" + (window.screen ? Math.round(screen.width / 2 - 275) : 100)), M || P(), 1))
            }, C = function () {
                for (var e, t, n, i, r = "", o = 0; o < v.shareButtons.length; o++) e = v.shareButtons[o], t = v.getImageURLForShare(e), n = v.getPageURLForShare(e), i = v.getTextForShare(e), r += '<a href="' + e.url.replace("{{url}}", encodeURIComponent(n)).replace("{{image_url}}", encodeURIComponent(t)).replace("{{raw_image_url}}", t).replace("{{text}}", encodeURIComponent(i)) + '" target="_blank" class="pswp__share--' + e.id + '"' + (e.download ? "download" : "") + ">" + e.label + "</a>", v.parseShareButtonOut && (r = v.parseShareButtonOut(e, r));
                l.children[0].innerHTML = r, l.children[0].onclick = F
            }, I = function (e) {
                for (var n = 0; n < v.closeElClasses.length; n++) if (t.hasClass(e, "pswp__" + v.closeElClasses[n])) return !0
            }, k = 0, R = function () {
                clearTimeout(b), k = 0, c && y.setIdle(!1)
            }, L = function (e) {
                var t = (e = e || window.event).relatedTarget || e.toElement;
                t && "HTML" !== t.nodeName || (clearTimeout(b), b = setTimeout((function () {
                    y.setIdle(!0)
                }), v.timeToIdleOutside))
            }, B = function (e) {
                p !== e && (A(f, "preloader--active", !e), p = e)
            }, N = function (n) {
                var a = n.vGap;
                if (!e.likelyTouchDevice || v.mouseUsed || screen.width > v.fitControlsWidth) {
                    var s = v.barsSize;
                    if (v.captionEl && "auto" === s.bottom) if (o || ((o = t.createEl("pswp__caption pswp__caption--fake")).appendChild(t.createEl("pswp__caption__center")), i.insertBefore(o, r), t.addClass(i, "pswp__ui--fit")), v.addCaptionHTMLFn(n, o, !0)) {
                        var l = o.clientHeight;
                        a.bottom = parseInt(l, 10) || 44
                    } else a.bottom = s.top; else a.bottom = "auto" === s.bottom ? 0 : s.bottom;
                    a.top = s.top
                } else a.top = a.bottom = 0
            }, D = [{
                name: "caption", option: "captionEl", onInit: function (e) {
                    r = e
                }
            }, {
                name: "share-modal", option: "shareEl", onInit: function (e) {
                    l = e
                }, onTap: function () {
                    P()
                }
            }, {
                name: "button--share", option: "shareEl", onInit: function (e) {
                    s = e
                }, onTap: function () {
                    P()
                }
            }, {name: "button--zoom", option: "zoomEl", onTap: e.toggleDesktopZoom}, {
                name: "counter",
                option: "counterEl",
                onInit: function (e) {
                    a = e
                }
            }, {name: "button--close", option: "closeEl", onTap: e.close}, {
                name: "button--arrow--left",
                option: "arrowEl",
                onTap: e.prev
            }, {name: "button--arrow--right", option: "arrowEl", onTap: e.next}, {
                name: "button--fs",
                option: "fullscreenEl",
                onTap: function () {
                    n.isFullscreen() ? n.exit() : n.enter()
                }
            }, {
                name: "preloader", option: "preloaderEl", onInit: function (e) {
                    f = e
                }
            }];
            y.init = function () {
                var a;
                t.extend(e.options, S, !0), v = e.options, i = t.getChildByClass(e.scrollWrap, "pswp__ui"), (d = e.listen)("onVerticalDrag", (function (e) {
                    _ && e < .95 ? y.hideControls() : !_ && e >= .95 && y.showControls()
                })), d("onPinchClose", (function (e) {
                    _ && e < .9 ? (y.hideControls(), a = !0) : a && !_ && e > .9 && y.showControls()
                })), d("zoomGestureEnded", (function () {
                    (a = !1) && !_ && y.showControls()
                })), d("beforeChange", y.update), d("doubleTap", (function (t) {
                    var n = e.currItem.initialZoomLevel;
                    e.getZoomLevel() !== n ? e.zoomTo(n, t, 333) : e.zoomTo(v.getDoubleTapZoom(!1, e.currItem), t, 333)
                })), d("preventDragEvent", (function (e, t, n) {
                    var i = e.target || e.srcElement;
                    i && i.getAttribute("class") && e.type.indexOf("mouse") > -1 && (i.getAttribute("class").indexOf("__caption") > 0 || /(SMALL|STRONG|EM)/i.test(i.tagName)) && (n.prevent = !1)
                })), d("bindEvents", (function () {
                    t.bind(i, "pswpTap click", O), t.bind(e.scrollWrap, "pswpTap", y.onGlobalTap), e.likelyTouchDevice || t.bind(e.scrollWrap, "mouseover", y.onMouseOver)
                })), d("unbindEvents", (function () {
                    M || P(), w && clearInterval(w), t.unbind(document, "mouseout", L), t.unbind(document, "mousemove", R), t.unbind(i, "pswpTap click", O), t.unbind(e.scrollWrap, "pswpTap", y.onGlobalTap), t.unbind(e.scrollWrap, "mouseover", y.onMouseOver), n && (t.unbind(document, n.eventK, y.updateFullscreen), n.isFullscreen() && (v.hideAnimationDuration = 0, n.exit()), n = null)
                })), d("destroy", (function () {
                    v.captionEl && (o && i.removeChild(o), t.removeClass(r, "pswp__caption--empty")), l && (l.children[0].onclick = null), t.removeClass(i, "pswp__ui--over-close"), t.addClass(i, "pswp__ui--hidden"), y.setIdle(!1)
                })), v.showAnimationDuration || t.removeClass(i, "pswp__ui--hidden"), d("initialZoomIn", (function () {
                    v.showAnimationDuration && t.removeClass(i, "pswp__ui--hidden")
                })), d("initialZoomOut", (function () {
                    t.addClass(i, "pswp__ui--hidden")
                })), d("parseVerticalMargin", N), function () {
                    var e, n, r, o = function (i) {
                        if (i) for (var o = i.length, a = 0; a < o; a++) {
                            e = i[a], n = e.className;
                            for (var s = 0; s < D.length; s++) r = D[s], n.indexOf("pswp__" + r.name) > -1 && (v[r.option] ? (t.removeClass(e, "pswp__element--disabled"), r.onInit && r.onInit(e)) : t.addClass(e, "pswp__element--disabled"))
                        }
                    };
                    o(i.children);
                    var a = t.getChildByClass(i, "pswp__top-bar");
                    a && o(a.children)
                }(), v.shareEl && s && l && (M = !0), T(), v.timeToIdle && d("mouseUsed", (function () {
                    t.bind(document, "mousemove", R), t.bind(document, "mouseout", L), w = setInterval((function () {
                        2 == ++k && y.setIdle(!0)
                    }), v.timeToIdle / 2)
                })), v.fullscreenEl && !t.features.isOldAndroid && (n || (n = y.getFullscreenAPI()), n ? (t.bind(document, n.eventK, y.updateFullscreen), y.updateFullscreen(), t.addClass(e.template, "pswp--supports-fs")) : t.removeClass(e.template, "pswp--supports-fs")), v.preloaderEl && (B(!0), d("beforeChange", (function () {
                    clearTimeout(m), m = setTimeout((function () {
                        e.currItem && e.currItem.loading ? (!e.allowProgressiveImg() || e.currItem.img && !e.currItem.img.naturalWidth) && B(!1) : B(!0)
                    }), v.loadingIndicatorDelay)
                })), d("imageLoadComplete", (function (t, n) {
                    e.currItem === n && B(!0)
                })))
            }, y.setIdle = function (e) {
                c = e, A(i, "ui--idle", e)
            }, y.update = function () {
                _ && e.currItem ? (y.updateIndexIndicator(), v.captionEl && (v.addCaptionHTMLFn(e.currItem, r), A(r, "caption--empty", !e.currItem.title)), x = !0) : x = !1, M || P(), T()
            }, y.updateFullscreen = function (i) {
                i && setTimeout((function () {
                    e.setScrollOffset(0, t.getScrollY())
                }), 50), t[(n.isFullscreen() ? "add" : "remove") + "Class"](e.template, "pswp--fs")
            }, y.updateIndexIndicator = function () {
                v.counterEl && (a.innerHTML = e.getCurrentIndex() + 1 + v.indexIndicatorSep + v.getNumItemsFn())
            }, y.onGlobalTap = function (n) {
                var i = (n = n || window.event).target || n.srcElement;
                if (!g) if (n.detail && "mouse" === n.detail.pointerType) {
                    if (I(i)) return void e.close();
                    t.hasClass(i, "pswp__img") && (1 === e.getZoomLevel() && e.getZoomLevel() <= e.currItem.fitRatio ? v.clickToCloseNonZoomable && e.close() : e.toggleDesktopZoom(n.detail.releasePoint))
                } else if (v.tapToToggleControls && (_ ? y.hideControls() : y.showControls()), v.tapToClose && (t.hasClass(i, "pswp__img") || I(i))) return void e.close()
            }, y.onMouseOver = function (e) {
                var t = (e = e || window.event).target || e.srcElement;
                A(i, "ui--over-close", I(t))
            }, y.hideControls = function () {
                t.addClass(i, "pswp__ui--hidden"), _ = !1
            }, y.showControls = function () {
                _ = !0, x || y.update(), t.removeClass(i, "pswp__ui--hidden")
            }, y.supportsFullscreen = function () {
                var e = document;
                return !!(e.exitFullscreen || e.mozCancelFullScreen || e.webkitExitFullscreen || e.msExitFullscreen)
            }, y.getFullscreenAPI = function () {
                var t, n = document.documentElement, i = "fullscreenchange";
                return n.requestFullscreen ? t = {
                    enterK: "requestFullscreen",
                    exitK: "exitFullscreen",
                    elementK: "fullscreenElement",
                    eventK: i
                } : n.mozRequestFullScreen ? t = {
                    enterK: "mozRequestFullScreen",
                    exitK: "mozCancelFullScreen",
                    elementK: "mozFullScreenElement",
                    eventK: "moz" + i
                } : n.webkitRequestFullscreen ? t = {
                    enterK: "webkitRequestFullscreen",
                    exitK: "webkitExitFullscreen",
                    elementK: "webkitFullscreenElement",
                    eventK: "webkit" + i
                } : n.msRequestFullscreen && (t = {
                    enterK: "msRequestFullscreen",
                    exitK: "msExitFullscreen",
                    elementK: "msFullscreenElement",
                    eventK: "MSFullscreenChange"
                }), t && (t.enter = function () {
                    if (u = v.closeOnScroll, v.closeOnScroll = !1, "webkitRequestFullscreen" !== this.enterK) return e.template[this.enterK]();
                    e.template[this.enterK](Element.ALLOW_KEYBOARD_INPUT)
                }, t.exit = function () {
                    return v.closeOnScroll = u, document[this.exitK]()
                }, t.isFullscreen = function () {
                    return document[this.elementK]
                }), t
            }
        }
    }) ? i.call(t, n, t, e) : i) || (e.exports = r)
}, function (e, t, n) {
    !function () {
        "use strict";
        e.exports = {
            polyfill: function () {
                var e = window, t = document;
                if (!("scrollBehavior" in t.documentElement.style) || !0 === e.__forceSmoothScrollPolyfill__) {
                    var n, i = e.HTMLElement || e.Element, r = {
                            scroll: e.scroll || e.scrollTo,
                            scrollBy: e.scrollBy,
                            elementScroll: i.prototype.scroll || s,
                            scrollIntoView: i.prototype.scrollIntoView
                        }, o = e.performance && e.performance.now ? e.performance.now.bind(e.performance) : Date.now,
                        a = (n = e.navigator.userAgent, new RegExp(["MSIE ", "Trident/", "Edge/"].join("|")).test(n) ? 1 : 0);
                    e.scroll = e.scrollTo = function () {
                        void 0 !== arguments[0] && (!0 !== l(arguments[0]) ? m.call(e, t.body, void 0 !== arguments[0].left ? ~~arguments[0].left : e.scrollX || e.pageXOffset, void 0 !== arguments[0].top ? ~~arguments[0].top : e.scrollY || e.pageYOffset) : r.scroll.call(e, void 0 !== arguments[0].left ? arguments[0].left : "object" != typeof arguments[0] ? arguments[0] : e.scrollX || e.pageXOffset, void 0 !== arguments[0].top ? arguments[0].top : void 0 !== arguments[1] ? arguments[1] : e.scrollY || e.pageYOffset))
                    }, e.scrollBy = function () {
                        void 0 !== arguments[0] && (l(arguments[0]) ? r.scrollBy.call(e, void 0 !== arguments[0].left ? arguments[0].left : "object" != typeof arguments[0] ? arguments[0] : 0, void 0 !== arguments[0].top ? arguments[0].top : void 0 !== arguments[1] ? arguments[1] : 0) : m.call(e, t.body, ~~arguments[0].left + (e.scrollX || e.pageXOffset), ~~arguments[0].top + (e.scrollY || e.pageYOffset)))
                    }, i.prototype.scroll = i.prototype.scrollTo = function () {
                        if (void 0 !== arguments[0]) if (!0 !== l(arguments[0])) {
                            var e = arguments[0].left, t = arguments[0].top;
                            m.call(this, this, void 0 === e ? this.scrollLeft : ~~e, void 0 === t ? this.scrollTop : ~~t)
                        } else {
                            if ("number" == typeof arguments[0] && void 0 === arguments[1]) throw new SyntaxError("Value could not be converted");
                            r.elementScroll.call(this, void 0 !== arguments[0].left ? ~~arguments[0].left : "object" != typeof arguments[0] ? ~~arguments[0] : this.scrollLeft, void 0 !== arguments[0].top ? ~~arguments[0].top : void 0 !== arguments[1] ? ~~arguments[1] : this.scrollTop)
                        }
                    }, i.prototype.scrollBy = function () {
                        void 0 !== arguments[0] && (!0 !== l(arguments[0]) ? this.scroll({
                            left: ~~arguments[0].left + this.scrollLeft,
                            top: ~~arguments[0].top + this.scrollTop,
                            behavior: arguments[0].behavior
                        }) : r.elementScroll.call(this, void 0 !== arguments[0].left ? ~~arguments[0].left + this.scrollLeft : ~~arguments[0] + this.scrollLeft, void 0 !== arguments[0].top ? ~~arguments[0].top + this.scrollTop : ~~arguments[1] + this.scrollTop))
                    }, i.prototype.scrollIntoView = function () {
                        if (!0 !== l(arguments[0])) {
                            var n = f(this), i = n.getBoundingClientRect(), o = this.getBoundingClientRect();
                            n !== t.body ? (m.call(this, n, n.scrollLeft + o.left - i.left, n.scrollTop + o.top - i.top), "fixed" !== e.getComputedStyle(n).position && e.scrollBy({
                                left: i.left,
                                top: i.top,
                                behavior: "smooth"
                            })) : e.scrollBy({left: o.left, top: o.top, behavior: "smooth"})
                        } else r.scrollIntoView.call(this, void 0 === arguments[0] || arguments[0])
                    }
                }

                function s(e, t) {
                    this.scrollLeft = e, this.scrollTop = t
                }

                function l(e) {
                    if (null === e || "object" != typeof e || void 0 === e.behavior || "auto" === e.behavior || "instant" === e.behavior) return !0;
                    if ("object" == typeof e && "smooth" === e.behavior) return !1;
                    throw new TypeError("behavior member of ScrollOptions " + e.behavior + " is not a valid value for enumeration ScrollBehavior.")
                }

                function u(e, t) {
                    return "Y" === t ? e.clientHeight + a < e.scrollHeight : "X" === t ? e.clientWidth + a < e.scrollWidth : void 0
                }

                function c(t, n) {
                    var i = e.getComputedStyle(t, null)["overflow" + n];
                    return "auto" === i || "scroll" === i
                }

                function d(e) {
                    var t = u(e, "Y") && c(e, "Y"), n = u(e, "X") && c(e, "X");
                    return t || n
                }

                function f(e) {
                    for (; e !== t.body && !1 === d(e);) e = e.parentNode || e.host;
                    return e
                }

                function p(t) {
                    var n, i, r, a, s = (o() - t.startTime) / 468;
                    a = s = s > 1 ? 1 : s, n = .5 * (1 - Math.cos(Math.PI * a)), i = t.startX + (t.x - t.startX) * n, r = t.startY + (t.y - t.startY) * n, t.method.call(t.scrollable, i, r), i === t.x && r === t.y || e.requestAnimationFrame(p.bind(e, t))
                }

                function m(n, i, a) {
                    var l, u, c, d, f = o();
                    n === t.body ? (l = e, u = e.scrollX || e.pageXOffset, c = e.scrollY || e.pageYOffset, d = r.scroll) : (l = n, u = n.scrollLeft, c = n.scrollTop, d = s), p({
                        scrollable: l,
                        method: d,
                        startTime: f,
                        startX: u,
                        startY: c,
                        x: i,
                        y: a
                    })
                }
            }
        }
    }()
}, function (e, t, n) {
    e.exports = n(5)
}, function (e, t, n) {
    "use strict";
    n.r(t), function () {
        if (!("customElements" in window && "content" in document.createElement("template"))) {
            const e = new XMLHttpRequest;
            e.open("GET", "https://unpkg.com/@webcomponents/webcomponentsjs@2.2.10/webcomponents-bundle.js", !1), e.send("");
            const t = document.createElement("script");
            t.type = "text/javascript", t.text = e.responseText, document.body.appendChild(t)
        }
    }();
    var i = n(1), r = n.n(i), o = n(2), a = n.n(o);
    var s = function () {
        try {
            return Boolean(window.parent.ws)
        } catch (e) {
            return !1
        }
    };
    var l = () => Boolean(window.previewMode);
    var u = (e, t) => `${e ? `<span class="pswp__caption__title">${e}</span>` : ""}${t ? `<small class="pswp__caption__description">${t}</small>` : ""}`,
        c = n(0), d = n.n(c);
    var f = () => d.a.iPadOS || d.a.ios && d.a.tablet;

    class p {
        constructor() {
            this.init()
        }

        init() {
            this.injectTemplate(), this.galleries = this.createGalleriesGroups(), this.setListeners()
        }

        injectTemplate() {
            if (!document.getElementById("pswp-template")) {
                const e = document.createElement("div"), t = this.generateLightboxClasses();
                e.classList.add(...t), e.innerHTML = '<div class="pswp" tabIndex="-1" role="dialog" aria-hidden="true" id="pswp-template">\n  <div class="pswp__bg"></div>\n  <div class="pswp__scroll-wrap">\n    <div class="pswp__container">\n      <div class="pswp__item"></div>\n      <div class="pswp__item"></div>\n      <div class="pswp__item"></div>\n    </div>\n    <div class="pswp__ui pswp__ui--hidden">\n      <div class="pswp__top-bar">\n        <div class="pswp__counter"></div>\n        <button class="pswp__button pswp__button--close">\n          <span aria-hidden="true" hidden>Close</span>\n        </button>\n        <button class="pswp__button pswp__button--share">\n          <span aria-hidden="true" hidden>Share</span>\n        </button>\n        <button class="pswp__button pswp__button--fs">\n          <span aria-hidden="true" hidden>Fullscreen</span>\n        </button>\n        <button class="pswp__button pswp__button--zoom">\n          <span aria-hidden="true" hidden>Zoom</span>\n        </button>\n        <div class="pswp__preloader">\n          <div class="pswp__preloader__icn">\n            <div class="pswp__preloader__cut">\n              <div class="pswp__preloader__donut"></div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">\n        <div class="pswp__share-tooltip"></div>\n      </div>\n      <button class="pswp__button pswp__button--arrow--left">\n        <span aria-hidden="true" hidden>Arrow left</span>\n      </button>\n      <button class="pswp__button pswp__button--arrow--right">\n        <span aria-hidden="true" hidden>Arrow right</span>\n      </button>\n      <div class="pswp__caption">\n        <div class="pswp__caption__center"></div>\n      </div>\n    </div>\n  </div>\n</div>', document.body.appendChild(e)
            }
        }

        setListeners() {
            this.galleries.forEach((e, t) => {
                t.addEventListener("click", e => {
                    const n = e.target.closest("ws-media-container[origin-src]:not([lightbox-disabled])");
                    n && this.openLightbox(n, t)
                })
            })
        }

        generateLightboxClasses() {
            const e = ["ws-lightbox-gallery"];
            return f() && e.push("pswp-for-ipad"), e
        }

        openLightbox(e, t) {
            const n = this.galleries.get(t), i = n.itemsMap.get(e);
            this.initPhotoSwipe(i, n.items)
        }

        initPhotoSwipe(e, t) {
            const n = {
                index: e,
                mainClass: "pswp--minimal--dark",
                bgOpacity: .85,
                history: !1,
                shareEl: !1,
                fullscreenEl: !l()
            };
            new r.a(document.querySelector(".pswp"), a.a, t, n).init()
        }

        createGalleriesGroups() {
            const e = new Map, t = document.querySelectorAll("ws-media-container[origin-src]:not([lightbox-disabled])");
            return Array.from(t).forEach(t => {
                const n = t.closest("ws-block");
                if (!n) return;
                e.has(n) || e.set(n, {items: [], itemsMap: new Map});
                const i = e.get(n), r = this.createSlideFromNode(t, i.items.length);
                i.items.push(r), i.itemsMap.set(t, r.index)
            }), e
        }

        createSlideFromNode(e, t) {
            const n = e.getAttribute("origin-src"), i = e.getAttribute("origin-width"),
                r = e.getAttribute("origin-height"), o = e.querySelector("img"),
                a = o.hasAttribute("data-title") ? o.getAttribute("data-title") : o.getAttribute("alt"),
                s = o.getAttribute("data-description");
            return {index: t, src: n, w: i, h: r, el: e, title: u(a, s)}
        }
    }

    s() && !l() || document.addEventListener("DOMContentLoaded", () => {
        new p
    });
    var m = n(3), h = n.n(m);
    var v = function () {
        const e = document.querySelectorAll("ws-block"), t = [];
        for (let n = 0; n < e.length; n += 1) {
            const {id: i} = e[n];
            t.push(i);
            const r = e[n + 1];
            if (r && i.includes("ws-block-header")) {
                t.push(r.id);
                break
            }
        }
        return t
    };
    var g = function (e, t) {
        const n = t.slice(1);
        return e.includes(n)
    };
    var w = function ({hash: e, origin: t, pathname: n}) {
        if (!e || !e.includes("ws-block")) return !1;
        const i = t === window.location.origin, r = n === window.location.pathname;
        return i && r
    };
    s() && !l() || (!function () {
        const e = document.querySelector(".page-container"), t = e.offsetTop, n = e.querySelector("ws-header"),
            i = n && n.hasAttribute("stick-up"), r = i ? v() : [];
        e.addEventListener("click", e => {
            const o = e.target, a = o && o.href ? o : o.closest("[href]");
            if (!a) return;
            if (w(a)) {
                e.preventDefault();
                const {hash: o} = a, s = document.querySelector(o), l = i && !g(r, o);
                if (s && l) {
                    const e = s.offsetTop + t - n.stickyHeaderHeight;
                    window.scroll({top: e, behavior: "smooth"})
                } else s && s.scrollIntoView({behavior: "smooth"})
            }
            "#" === a.getAttribute("href") && e.preventDefault()
        })
    }(), h.a.polyfill()), s() && (window.__custom_load_event__ = !0, window.addEventListener("load", () => {
        const e = new CustomEvent("WSSiteLoaded");
        !function (e, t = (() => {
        })) {
            const n = [...document.querySelectorAll("ws-block[src]")].filter(e => !1 === e.ready);
            if (!n.length) return void e();
            const i = n.map(e => new Promise((t, n) => {
                function i() {
                    t(), e.removeEventListener("error", r)
                }

                function r() {
                    n(), e.removeEventListener("ready", i)
                }

                e.addEventListener("ready", i, {once: !0}), e.addEventListener("error", r, {once: !0})
            }));
            Promise.all(i).then(e, t)
        }(() => document.dispatchEvent(e), () => setTimeout(() => document.dispatchEvent(e), 2e3))
    }))
}]);