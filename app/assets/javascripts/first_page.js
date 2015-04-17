(function() {
    var p = 0;
    window.zachModule = function(h) {
        zachModule[p++] = {};
        h()
    };
    window.main = function(h) {
        h()
    }
})();
zachModule(function() {
    function p(a, n) {
        for (var f, b = 0, c = a.length; b !== c; ++b)
            if (void 0 !== (f = n(a[b], b)
                ))return f
    }
    function h(a, n) {
        var b, f;
        for (f in a)
            if (b = void 0 !== n(f, a[f])
                )return b
    }
    function e(a, n) {
        return void 0 === a ? n : a
    }
    function c(a, n) {
        p(n, function(n) {
            h(n, function(n, b) {
                void 0 !== b && (a[n] = b)
            })
        });
        return a
    }
    function k() {
        return c({}, arguments)
    }
    function g(a, n) {
        var f = b(n), c = {};
        h(a, function(a, n) {
            !f.contains(a) && (c[a] = n)
        });
        return c
    }
    function m(a, n, b) {
        u(function(a) {
            r.String(n) ? a(n, b) : h(n, a)
        }, function(n, b) {
            Object.defineProperty(a,
            n, {
                get: b
            })
        })
    }
    function q(a) {
        var n = "", b = 0;
        h(a || {}, function(a, v) {
            b++&&(n += "&");
            n += encodeURIComponent(a);
            n += "=";
            n += encodeURIComponent(v)
        });
        return n
    }
    function f(a, n, b, f) {
        p(a.split(n), function(a) {
            a = a.split(b);
            f(a[0], a[1])
        })
    }
    function l() {
        var a = null, n = null;
        return {
            head: function() {
                return a
            },
            tail: function() {
                return n
            },
            insert: function(b, f) {
                var c = f ? f.previous: n;
                b.next = f;
                (b.previous = c) ? c.next = b : a = b;
                f ? f.previous = b : n = b;
                return b
            },
            remove: function(b) {
                b.previous ? b.previous.next = b.next : a = b.next;
                b.next ? b.next.previous = b.previous :
                n = b.previous
            }
        }
    }
    function b(a) {
        var n = {};
        p(a, function(a) {
            n[a]=!0
        });
        return {
            contains: function(a) {
                return !0 === n[a]
            }
        }
    }
    function a(a) {
        a.apply(null, Array.prototype.slice.call(arguments, 1))
    }
    function n(n) {
        var b = [];
        return {
            load: function(a) {
                b.push(a)
            },
            start: function(f) {
                if (0 === b.length)
                    f();
                else if (n)
                    a(function C(a) {
                        var n = b[a];
                        n ? n(function() {
                            C(a + 1)
                        }) : f()
                    }, 0);
                else {
                    var c = b.length;
                    p(b, function(a) {
                        a(function() {
                            0===--c && f()
                        })
                    })
                }
            }
        }
    }
    function u(a, n) {
        return a(n)
    }
    var r = function() {
        var a = {};
        p("Array Boolean Date Function Number Object RegExp String Window HTMLDocument".split(" "),
        function(n) {
            a[n] = function(a) {
                return Object.prototype.toString.call(a) == "[object " + n + "]"
            }
        });
        return a
    }(), t = /(?:((?:[^:/]*):)\/\/)?([^:/?#]*)(?::([0-9]*))?(\/[^?#]*)?(\?[^#]*)?(#.*)?/;
    p("protocol hostname port pathname search hash".split(" "), function(a, n) {
        m(String.prototype, a, function() {
            return t.test(this) ? RegExp["$" + (n + 1)] : ""
        })
    });
    h({
        host: function() {
            return this.hostname + (this.port ? ":" + this.port : "")
        },
        origin: function() {
            return this.protocol + "//" + this.host
        },
        arg: function() {
            var a = {};
            f(this.search.substring(1),
            "&", "=", function(n, b) {
                "" !== n && (a[n] = decodeURIComponent(b))
            });
            return a
        }
    }, function(a, n) {
        m(String.prototype, a, n)
    });
    l.Node = function(a) {
        return {
            previous: null,
            next: null,
            value: a
        }
    };
    l.loop = function(a, n) {
        for (var b, f = a.head(); null !== f; f = f.next)
            if (void 0 !== (b = n(f.value, f)
                ))return b
    };
    Object.defineProperty(Array.prototype, "top", {
        get: function() {
            return this[this.length - 1]
        },
        set: function(a) {
            this[this.length - 1] = a
        }
    });
    zachModule["0"].is = r;
    zachModule["0"].callFunction = function(a) {
        return (new Function("return " + a))().apply(null,
        Array.prototype.slice.call(arguments, 1))
    };
    zachModule["0"].loop = function(a, n) {
        for (var b = 0; b !== a; ++b)
            n(b)
    };
    zachModule["0"].loopArray = p;
    zachModule["0"].loopObj = h;
    zachModule["0"].loopString = function(a, n, b) {
        var f, c;
        f = 0;
        for (c = a.length; f !== c; ++f)
            n(b ? a.charAt(f) : a.charCodeAt(f), f)
    };
    zachModule["0"].defaultValue = e;
    zachModule["0"].insert = function(a) {
        return c(a, Array.prototype.slice.call(arguments, 1))
    };
    zachModule["0"].extend = k;
    zachModule["0"].extract = function(a, n) {
        var b = {};
        h(n, function(n, f) {
            b[n] = e(a[n], f)
        });
        return b
    };
    zachModule["0"].exclude = g;
    zachModule["0"].keys = function(a) {
        var n = [];
        h(a, function(a) {
            n.push(a)
        });
        return n
    };
    zachModule["0"].defineGetter = m;
    zachModule["0"].defineAutoProperty = function(a, n, b) {
        u(function(a) {
            r.String(n) ? a(n, b) : h(n, a)
        }, function(n, b) {
            b = b || {};
            var f = b.value, c = b.set;
            void 0 !== f && c(f);
            Object.defineProperty(a, n, {
                get: function() {
                    return f
                },
                set: function(a) {
                    f = c ? e(c(a), a) : a
                }
            })
        })
    };
    zachModule["0"].encodeURIObject = q;
    zachModule["0"].tupleString = function(a, n) {
        return a + "(" + n.join(",") + ")"
    };
    zachModule["0"].TupleString =
    function(a) {
        return function() {
            return a + "(" + Array.prototype.join.call(arguments, ",") + ")"
        }
    };
    zachModule["0"].parsePairString = f;
    zachModule["0"].concatUrlArg = function(a, n) {
        var b = q(k(a.arg, n));
        return a.origin + a.pathname + (b ? "?" : "") + b + a.hash
    };
    zachModule["0"].removeUrlArg = function(a, n) {
        var b = q(g(a.arg, n));
        return a.origin + a.pathname + (b ? "?" : "") + b + a.hash
    };
    zachModule["0"].Set = b;
    zachModule["0"].LinkedList = l;
    zachModule["0"].Event = function() {
        var a = l();
        return {
            trig: function() {
                var n = arguments;
                l.loop(a, function(a) {
                    a &&
                    a.apply(null, n)
                })
            },
            regist: function(n) {
                var b = a.insert(l.Node(n), null);
                return {
                    remove: function() {
                        a.remove(b)
                    }
                }
            }
        }
    };
    zachModule["0"].Loader = n;
    zachModule["0"].Resource = function(a) {
        var n, b;
        return {
            load: function(f) {
                a ? (b || (b = [], a(function(f) {
                    n = f;
                    p(b, function(a) {
                        a(n)
                    });
                    a = b = null
                })), b.push(f)) : f(n)
            }
        }
    };
    zachModule["0"].procedure = function(n) {
        var b = n.length;
        a(function y(a, f) {
            var c = n[a];
            c && c.apply(null, a === b - 1 ? f : [function() {
                y(a + 1, Array.prototype.slice.call(arguments, 0))
            }
            ].concat(f))
        }, 0, [])
    };
    zachModule["0"].recursion =
    a;
    zachModule["0"].request = u;
    zachModule["0"].loopArrayAsync = function(a, b, f, c) {
        var l = n(c);
        p(a, function(a, n) {
            l.load(function(f) {
                b(f, a, n)
            })
        });
        l.start(f)
    }
});
zachModule(function() {
    function p(a, b, f) {
        function c(b, f) {
            b in nonstandardStyles ? k(nonstandardStyles[b], function(b) {
                a.style.setProperty(b, f, "")
            }) : a.style.setProperty(b, f, "")
        }
        q.String(b) ? c(b, f) : g(b, c);
        return a
    }
    function h(a, b, f, c) {
        var v;
        a.addEventListener ? (a.addEventListener(b, f, c ||!1), v = function() {
            a.removeEventListener(b, f, c ||!1)
        }) : (a.attachEvent("on" + b, f), v = function() {
            a.detachEvent("on" + b, f)
        });
        return {
            remove: v
        }
    }
    var e = zachModule["0"], c = e.insert, k = e.loopArray, g = e.loopObj, m = e.LinkedList, q = e.is, f = e.defineGetter,
    l = e.Event;
    (function(a, b, f) {
        c(window.ua = window.ua || {}, {
            win32: "Win32" === f,
            ie: !!window.ActiveXObject || "ActiveXObject"in window,
            ieVersion: Math.floor((/MSIE ([^;]+)/.exec(a) || [0, "0"])[1]),
            ios: /iphone|ipad/gi.test(b),
            iphone: /iphone/gi.test(b),
            ipad: /ipad/gi.test(b),
            iosVersion: parseFloat(("" + (/CPU.*OS ([0-9_]{1,5})|(CPU like).*AppleWebKit.*Mobile/i.exec(a) || [0, ""])[1]).replace("undefined", "3_2").replace("_", ".").replace("_", "")) ||!1,
            safari: /Version\//gi.test(b) && /Safari/gi.test(b),
            uiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(a),
            android: /android/gi.test(b),
            androidVersion: parseFloat("" + (/android ([0-9\.]*)/i.exec(a) || [0, ""])[1]),
            chrome: /Chrome/gi.test(a),
            chromeVersion: parseInt((/Chrome\/([0-9]*)/gi.exec(a) || [0, 0])[1], 10),
            webkit: /AppleWebKit/.test(b),
            uc: - 1 !== b.indexOf("UCBrowser"),
            Browser: / Browser/gi.test(b),
            MiuiBrowser: /MiuiBrowser/gi.test(b),
            MicroMessenger: "micromessenger" == a.toLowerCase().match(/MicroMessenger/i),
            canTouch: "ontouchstart"in document,
            msPointer: window.navigator.msPointerEnabled
        })
    })(navigator.userAgent, navigator.appVersion,
    navigator.platform);
    k(["Left", "Top"], function(a) {
        f(HTMLElement.prototype, "page" + a, function() {
            var b = 0, f, c = document.body;
            for (f = this; f !== c; f = f.offsetParent || f.parentElement)
                b += f["offset" + a] - (f === this ? 0 : f["scroll" + a]);
            return b
        })
    });
    k(["pageX", "pageY", "clientX", "clientY"], function(a) {
        Object.defineProperty(UIEvent.prototype, "z" + a.replace(/^./, function(a) {
            return a.toUpperCase()
        }), {
            get: function() {
                return "touches"in this && void 0 !== this.touches[0] ? this.touches[0][a] : this[a]
            }
        })
    });
    window.nonstandardStyles = {};
    p.size =
    function(a, b, f) {
        p(a, {
            width: b + "px",
            height: f + "px"
        })
    };
    var b = function() {
        var a = null, b = m();
        return function(f) {
            function c() {
                null === v && (v = b.insert(m.Node(f), null), null === a && (a = setTimeout(function x() {
                    var f;
                    if (null !== b.tail())
                        for (a = setTimeout(x, 1E3 / 60), f = b.head(); null !== f; f = f.next)
                            f.value();
                    else 
                        a = null
                }, 1E3 / 60)))
            }
            var v = null;
            c();
            return {
                start: c,
                remove: function() {
                    v && b.remove(v);
                    v = null
                }
            }
        }
    }(), a = function() {
        var a = null;
        return function(b) {
            if ("complete" === document.readyState)
                b();
            else {
                if (null === a) {
                    a = l();
                    var f = h(window,
                    "load", function() {
                        a.trig();
                        f.remove();
                        a = null
                    })
                }
                a.regist(b)
            }
        }
    }();
    zachModule["1"].toAbsURL = function(a) {
        var b = document.createElement("a");
        b.href = a;
        return b.href
    };
    zachModule["1"].css = p;
    zachModule["1"].bindEvent = h;
    zachModule["1"].Bind = function(a) {
        return function(b, f, c) {
            return h(b, a, f, c)
        }
    };
    zachModule["1"].onInsert = function(a, b) {
        if (document.documentElement.contains(a))
            b && b();
        else 
            var f = h(a, "DOMNodeInsertedIntoDocument", function() {
                b && b(a);
                f.remove()
            })
    };
    zachModule["1"].requestAnimate = b;
    zachModule["1"].ajax =
    function(a) {
        var b = a.url + e.encodeURIObject(a.arg), f = new XMLHttpRequest;
        h(f, "load", function() {
            var b = f.responseText;
            try {
                a.isJson && (b = JSON.parse(b))
            } catch (c) {
                a.onError && a.onError(f);
                return 
            }
            a.onLoad && a.onLoad(b, f)
        });
        h(f, "error", function() {
            a.onError && a.onError(f)
        });
        f.open(a.method || "get", b, !0);
        a.requestHeader && g(a.requestHeader, function(a, b) {
            f.setRequestHeader(a, b)
        });
        f.send(a.data || null);
        return f
    };
    zachModule["1"].onLoad = a
});
zachModule(function() {
    function p(a) {
        var b = "";
        l(a, function(a, n) {
            function c(a) {
                b += a + ":" + n + ";"
            }
            a in nonstandardStyles ? f(nonstandardStyles[a], c) : c(a)
        });
        return b
    }
    function h(a, b) {
        function n(b) {
            function c(b) {
                a.style.removeProperty(b)
            }
            b in nonstandardStyles ? f(nonstandardStyles[b], c) : c(b)
        }
        q.String(b) ? n(b) : q.Object(b) ? l(b, n) : f(b, n);
        return a
    }
    function e(a) {
        return .01 > Math.abs(a) ? 0 : a
    }
    function c(b) {
        return function(f, n) {
            return a(b, [e(f) + (n || "rad")])
        }
    }
    function k(a, b, f) {
        for (var n; null !== a && a !== document && a !== f;) {
            if (n =
            b(a))
                return n;
            a = a.parentNode
        }
    }
    function g(a, b) {
        document.addEventListener(a, function(a) {
            k(a.target, function(a) {
                b(a)
            }, document.documentElement)
        }, !1)
    }
    var m = zachModule["0"], q = m.is, f = m.loopArray, l = m.loopObj, b = m.insert, a = m.tupleString, n = m.LinkedList, m = zachModule["1"], u = m.css, r = m.bindEvent;
    b(nonstandardStyles, {
        transform: ["-webkit-transform", "-ms-transform", "transform"],
        "transform-origin": ["-webkit-transform-origin", "transform-origin"],
        animation: ["-webkit-animation"],
        transition: ["-webkit-transition", "transition"],
        "backface-visibility": ["-webkit-backface-visibility", "-mozila-backface-visibility", "backface-visibility"],
        "transform-style": ["-webkit-transform-style", "transform-style"],
        perspective: ["-webkit-perspective", "perspective"]
    });
    var t = function() {
        var a = n(), b = n();
        return function(f, c) {
            var l = c ? b: a;
            void 0 === l.el && (l.el = document.head.insertBefore(document.createElement("style"), c ? document.head.firstChild : null));
            var e = l.tail(), k = l.insert(n.Node(null === e ? 0 : e.value + 1), null);
            l.el.sheet.insertRule(f, k.value);
            return {
                remove: function() {
                    for (var a =
                    k.value, b = k.next; null !== b; b = b.next)
                        b.value = a++;
                    l.remove(k);
                    l.el.sheet.deleteRule(a)
                }
            }
        }
    }();
    u.transform = function() {
        var a = [];
        f(arguments, function(b, f) {
            0 !== f && a.push(b)
        });
        u(arguments[0], "transform", a.join(" "))
    };
    u.matrix = function(b) {
        return a("matrix", [e(b[0]), e(b[1]), e(b[2]), e(b[3]), e(b[4]), e(b[5])])
    };
    u.translate = function(b, f, n) {
        return a("translate3d", [e(b) + "px", e(f) + "px", e(n) + "px"])
    };
    u.rotateX = c("rotateX");
    u.rotateY = c("rotateY");
    u.rotateZ = c("rotateZ");
    u.scale = function() {
        return "scale(" + Array.prototype.join.call(arguments,
        ",") + ")"
    };
    u.px = function(a) {
        return 0 === a ? 0 : e(a) + "px"
    };
    u.s = function(a) {
        return 0 === a ? 0 : e(a) + "s"
    };
    u.url = function(a) {
        return "url(" + a + ")"
    };
    m.onLoad(function() {
        g("focusin", function(a) {
            a.classList.add("focus")
        });
        g("focusout", function(a) {
            a.classList.remove("focus")
        })
    });
    zachModule["2"].removeCss = h;
    zachModule["2"].cssRuleString = p;
    zachModule["2"].insertCSSRule = t;
    zachModule["2"].insertCSSRules = function(a, b, f) {
        function n(a, b, f) {
            b = q.String(b) ? b : p(b);
            t(a + " {" + b + "}", f)
        }
        q.String(a) ? n(a, b, f) : l(a, function(a, f) {
            n(a, f,
            b)
        })
    };
    zachModule["2"].onTransitionEnd = function(a, b) {
        var f = r(a, "webkitTransitionEnd", function() {
            f.remove();
            b()
        })
    };
    zachModule["2"].transition = function(a, b, f, n, c) {
        c = q.String(f) ? c : n;
        if (ua.android && 3 > ua.androidVersion)
            u(a, f, n), c && c();
        else {
            var l = function() {
                a.transition && (k.remove(), e.remove(), h(a, "transition"), c && c(), a.transition = null)
            };
            u(a, "transition", b);
            a.transition && a.transition.remove();
            var e = r(a, "DOMNodeRemovedFromDocument", l), k = a.transition = r(a, "webkitTransitionEnd", l);
            setTimeout(function() {
                u(a,
                f, n)
            }, 20)
        }
    };
    zachModule["2"].element = function(a, b, n) {
        var c, e = {};
        if ("<" === a.charAt(0))
            c = document.createElement("div"), c.innerHTML = a, c = c.firstElementChild;
        else {
            var k = /([.#][^.#]*)/g, g;
            for (c = document.createElement(a.split(/[#.]/)[0]); g = k.exec(a);)
                g = g[0], "#" === g.charAt(0) ? c.id = g.substring(1) : c.classList.add(g.substring(1))
        }
        q.String(b) ? c.innerHTML = b : q.Object(b) ? e = b : q.Array(b) ? e.children = b : n = b;
        e && l(e, function(a, b) {
            if (void 0 !== b)
                switch (a) {
                case "classList":
                    q.String(b) ? c.classList.add(b) : q.Array(b) && f(b, function(a) {
                        c.classList.add(a)
                    });
                    break;
                case "css":
                    u(c, b);
                    break;
                case "children":
                    q.Array(b) ? f(b, function(a) {
                        c.appendChild(a)
                    }) : c.appendChild(b);
                    break;
                default:
                    "data-" === a.substring(0, 5) ? c.setAttribute(a, b) : c[a] = b
                }
        });
        n && n.appendChild(c);
        return c
    };
    zachModule["2"].removeNode = function(a) {
        a && a.parentNode && a.parentNode.removeChild(a)
    };
    zachModule["2"].toggleState = function(a, b, f) {
        a.classList.remove(b);
        a.classList.add(f)
    };
    zachModule["2"].switchClass = function(a, b, f) {
        b ? a.classList.add(f) : a.classList.remove(f)
    };
    zachModule["2"].bubble = k;
    zachModule["2"].onBubble =
    g;
    zachModule["2"].findAncestor = function(a, b) {
        return k(a, function(a) {
            if (b(a))
                return a
        })
    };
    zachModule["2"].css = u;
    zachModule["2"].toAbsURL = m.toAbsURL;
    zachModule["2"].bindEvent = r;
    zachModule["2"].Bind = m.Bind;
    zachModule["2"].onInsert = m.onInsert;
    zachModule["2"].requestAnimate = m.requestAnimate;
    zachModule["2"].ajax = m.ajax;
    zachModule["2"].onLoad = m.onLoad
});
zachModule(function() {
    function p(c, e, g) {
        return e <= g ? c < e ? e : c > g ? g : c : p(c, g, e)
    }
    function h(c, e, g) {
        return e <= g ? c >= e && c < g : h(c, g, e)
    }
    function e(c, e) {
        return Math.sqrt(c * c + e * e)
    }
    zachModule["3"].sign = function(c) {
        return 0 <= c ? 1 : - 1
    };
    zachModule["3"].inRect = function(c, e, g, m, h, f) {
        c -= g;
        e -= m;
        return 0 <= c && c < h && 0 <= e && e < f
    };
    zachModule["3"].range = p;
    zachModule["3"].inRange = h;
    zachModule["3"].distance = e;
    zachModule["3"].sin2 = function(c, k) {
        return c / e(c, k)
    };
    zachModule["3"].Bezier = function(c, e, g, m, h) {
        h = h || function(f) {
            function l(a,
            b, f) {
                var c = 1 - a, e = a * a;
                return 3 * b * a * c * c + 3 * f * e * c + e * a
            }
            for (var b = .5; 1E-4 < Math.abs(f - l(b, c, g));)
                b -= (l(b, c, g) - f) / ((9 * c - 9 * g + 3) * b * b + (6 * g - 12 * c) * b + 3 * c);
            return l(b, e, m)
        };
        h.arg = [c, e, g, m];
        return h
    }
});
zachModule(function() {
    function p(a, n, c) {
        function e(l, m, k) {
            return g.request(function(f) {
                return a.onTouchStart || a.onCursorDown ? ua.msPointer ||!ua.canTouch ? a.onCursorDown(f) : a.onTouchDown(f) : b(a, l, f, c)
            }, function(a) {
                var c = a.zPageX, e = a.zPageY, l = c, g = e, h = f(), u = f(), q = b(document, m, function(a) {
                    c = a.zPageX;
                    e = a.zPageY;
                    a.distanceX = c - l;
                    a.distanceY = e - g;
                    a.onMove = h.regist;
                    a.onUp = u.regist;
                    h.trig(a, c, e)
                }), r = b(document, k, function(a) {
                    q.remove();
                    r.remove();
                    u.trig(a, c, e)
                });
                a.onMove = h.regist;
                a.onUp = u.regist;
                n(a, c, e)
            })
        }
        return ua.canTouch ?
        e("touchstart", "touchmove", "touchend") : e("mousedown", "mousemove", "mouseup")
    }
    function h(a, f, c) {
        return a.tagName ? b(a, ua.canTouch ? "touchend" : "mouseup", f, c) : ua.msPointer ||!ua.canTouch ? a.onCursorUp(f) : a.onTouchUp(f)
    }
    function e(a) {
        return 8 < l.distance(a.distanceX, a.distanceY)
    }
    function c(a, b, c) {
        c = g.defaultValue(c, function(a) {
            return e(a) || void 0
        });
        return p(a, function(a) {
            var e = a.onMove(function(a, l, g) {
                var k=!c || c(a);
                if (void 0 !== k) {
                    var h = function() {
                        return {
                            distanceX: E.distance(),
                            distanceY: F.distance(),
                            directionX: E.direction(),
                            directionY: F.direction()
                        }
                    }, r = function(a, b) {
                        var f = 0 === a ? void 0: 0 < a, c = [], n = 0, e =+ new Date, l = b;
                        return {
                            test: function(a) {
                                return void 0 === f ||!( - 20 > (a - b) * (f ? 1 : - 1))
                            },
                            track: function(a) {
                                a = a || b;
                                var l =+ new Date, g = l - e, m = a === b ? f : a > b;
                                if (m !== f || 200 < g)
                                    c = [], n = 0;
                                else if (200 < g)
                                    c = [], n = 0;
                                else {
                                    for (n += g; 300 < n;)
                                        n -= c.shift().duration;
                                    c.push({
                                        duration: g,
                                        distance: a - b
                                    })
                                }
                                f = m;
                                b = a;
                                e = l
                            },
                            distance: function() {
                                return b - l + a
                            },
                            direction: function() {
                                return f
                            },
                            speed: function() {
                                var a = 0;
                                q(c, function(b) {
                                    a += b.distance
                                });
                                return 0 === n ? 0 : a / n
                            }
                        }
                    };
                    e.remove();
                    if (k) {
                        var p = new Date, z = f(), D = f(), E = r(a.distanceX, l), F = r(a.distanceY, g);
                        b(m(h(), {
                            onDragEnd: D.regist,
                            onDragMove: z.regist
                        }));
                        a.onMove(function(a, b, f) {
                            E.test(b) && F.test(f) && (E.track(b), F.track(f), z.trig(h()))
                        });
                        a.onUp(function() {
                            E.track();
                            F.track();
                            D.trig(m(h(), {
                                speedX: E.speed(),
                                speedY: F.speed(),
                                duration: + new Date - p
                            }))
                        })
                    }
                }
            })
        })
    }
    function k(a) {
        return function(b, f) {
            return c(b, f, function(b) {
                return e(b) ? .8 <= Math.abs(l.sin2(b.distanceY, b.distanceX))^a : void 0
            })
        }
    }
    var g = zachModule["0"], m = g.insert, q = g.loopArray,
    f = g.Event, l = zachModule["3"], b = zachModule["1"].bindEvent;
    zachModule["4"].onPointerDown = p;
    zachModule["4"].onPointerUp = h;
    zachModule["4"].onTap = function(a, b, f) {
        f = f || e;
        return p(a, function(c) {
            var e = h(a, function(a) {
                b(a)
            }), l = c.onMove(function(a) {
                f(a) && (l.remove(), e.remove())
            });
            c.onUp(function() {
                e.remove()
            })
        })
    };
    zachModule["4"].onDrag = c;
    zachModule["4"].onDragH = k(!0);
    zachModule["4"].onDragV = k(!1)
});
zachModule(function() {
    var p = zachModule["0"], h = p.loopArray, e = p.loopObj, c = zachModule["2"], k = c.css.px, g = zachModule["4"].onPointerDown, m = p.Resource(function(f) {
        window.bdmapInit = function() {
            f();
            delete window.bdmapInit
        };
        c.element("script", {
            src: "http://api.map.baidu.com/api?type=quick&ak=D5a271a3083d77f21c63ff307e9f60b9&v=1.0&callback=bdmapInit"
        }, document.head)
    }), q = function(f) {
        return function(c) {
            m.load(function() {
                f(c)
            })
        }
    }(function(f) {
        var e = c.element("div", {
            css: {
                height: "100%",
                width: "100%"
            }
        }, f.parent), b = [];
        c.onInsert(e, function() {
            var a = new BMap.Map(e);
            g(f.parent, function(a) {
                a.stopPropagation()
            });
            h(f.data, function(c) {
                var e = new BMap.Point(parseFloat(c.lng), parseFloat(c.lat)), l = new BMap.Marker(e), g = new BMap.Icon(staticImgSrc("layout-map-mark.png"), new BMap.Size(30, 30));
                l.setIcon(g);
                a.addOverlay(l);
                b.push(e);
                if (f.make) {
                    var m = new BMap.InfoWindow(f.make(c));
                    l.addEventListener("click", function() {
                        l.openInfoWindow(m)
                    })
                }
            });
            0 !== b.length ? (a.centerAndZoom(b[0], 16), a.setViewport(b)) : a.centerAndZoom("\u5317\u4eac\u5e02")
        });
        f.onLoad && f.onLoad()
    });
    zachModule["5"].extract = function(f, c) {
        var b = {};
        e(c, function(a, c) {
            b[a] = void 0 === f[a] ? c : f[a]
        });
        return b
    };
    zachModule["5"].dateString = function(f, c) {
        function b(a, b) {
            function f(a) {
                var b = "";
                p.loop(a, function() {
                    b += "0"
                });
                return b
            }
            var c = a + "";
            return b > c.length ? f(b - c.length) + c : c
        }
        f = new Date(f);
        for (var a = {
            Y: f.getFullYear() + "",
            M: b(f.getMonth() + 1, 2),
            D: b(f.getDate(), 2),
            h: b(f.getHours(), 2),
            m: b(f.getMinutes(), 2),
            s: b(f.getSeconds(), 2)
        }, n = "", e = "", g = "", m = 0, k = c.length; m !== k; ++m)
            g = c.charAt(m), "%" ===
            g ? (e += a[n] || n, n = "") : (e += n, n = g);
        return e + n
    };
    zachModule["5"].KeyValueFunction = function(f) {
        return function(c, b) {
            p.is.Object(c) ? e(c, f) : f(c, b)
        }
    };
    zachModule["5"].getImageCoverStyle = function(f, c, b, a) {
        var n = f.naturalWidth || f.width || f.clientWidth;
        f = f.naturalHeight || f.height || f.clientHeight;
        var e = n / f, g = {};
        c / b < e ? (g.height = k(b), g["margin-left"] = k((c - b / f * n) / 2<<0), g["margin-top"] = 0, ua.ie && (g.width = k(b * e)), a && (a.h = b)) : (g.width = k(c), g["margin-left"] = 0, g["margin-top"] = k((b - c / n * f) / 2<<0), ua.ie && (g.height = k(c / e)), a &&
        (a.h = c / e));
        return g
    };
    zachModule["5"].doRedPoints = function(f, e) {
        e = e || f.querySelector(".red-point .wrapper");
        var b = [], a = null;
        p.loop(f.length(), function() {
            b.push(c.element("span", e))
        });
        f.onCutTo(function(f) {
            a && a.classList.remove("active");
            a = b[f.curIndex];
            a.classList.add("active")
        })
    };
    zachModule["5"].markerMap = q
});
zachModule(function() {
    function p(c, f, e) {
        if (g.is.Array(c)) {
            var b = [];
            g.loopArray(c, function(a, c) {
                b.push(p(a, f[c], e))
            });
            return b
        }
        return c + (f - c) * e
    }
    function h(c) {
        var f = 1E3 * (c.duration || 1), e = c.timing || m.ease, b = 1E3*-(c.delay || 0), a = new Date;
        return {
            ratio: function() {
                var c = new Date;
                b += c - a;
                a = c;
                return 0 > b ? null : e(b >= f ? 1 : b / f)
            },
            isEnd: function() {
                return b >= f
            },
            progress: function(c) {
                b = c * f;
                a = new Date
            }
        }
    }
    function e(c, f) {
        function e(f) {
            null !== f && (a && (c.onStart && c.onStart(), a=!1), c.onAnimate(p(n, g, f)), b.isEnd() && (c.onEnd &&
            c.onEnd(), m.remove()))
        }
        var b = h(c), a=!0, n = c.start || 0, g = c.end || 1;
        e(0);
        var m = (f || k)(function() {
            e(b.ratio())
        });
        return {
            remove: m.remove,
            progress: b.progress
        }
    }
    var c = zachModule["3"].Bezier, k = zachModule["1"].requestAnimate, g = zachModule["0"], m = {
        linear: c(1, 1, 1, 1, function(c) {
            return c
        }),
        ease: c(.25, .1, .25, 1),
        easeOut: c(0, 0, .58, 1),
        easeInOut: c(.42, 0, .58, 1)
    };
    e.Bezier = c;
    e.Timing = m;
    e.Progress = h;
    e.animate = e;
    e.fromTo = p;
    zachModule["6"] = e
});
zachModule(function() {
    var p = zachModule["0"], h = p.loopArray, e = p.loop;
    zachModule["7"] = {
        remove: function(c, e) {
            var g = [];
            h(c, function(c) {
                c != e && g.push(c)
            });
            return g
        },
        reverse: function(c) {
            var e = c.length - 1, g =- 1 === e ? [] : Array(e);
            h(c, function(c, h) {
                g[e - h] = c
            });
            return g
        },
        zip: function(c) {
            var k = [];
            e(c[0].length, function(e) {
                h(c, function(c) {
                    k.push(c[e])
                })
            });
            return k
        },
        loopSection: function(c, e) {
            var g = null;
            h(c, function(c) {
                g && e(g, c);
                g = c
            });
            e(g, null)
        }
    }
});
zachModule(function() {
    var p = zachModule["7"];
    zachModule["8"].drawImageLayout = function(h, e) {
        var c = e[0], k = e.ratio, g = c.naturalWidth, m = c.naturalHeight, q = e[1], f = e[2], l = e[3], b = e[4], a = e[5], n = e[6], u = e[7], p = e[8];
        if (ua.ios) {
            var t = 1 - l * b / g / m;
            .02 > t ? h.drawImage(c, a, n, u, p) : .05 > t || 6500 > u * p ? (h.save(), h.beginPath(), h.rect(a, n, u, p), h.clip(), h.drawImage(c, - q / l * u, - f / b * p, g * k, m * k), h.restore()) : h.drawImage.apply(h, e)
        } else 
            h.drawImage.apply(h, e)
    };
    zachModule["8"].layImageByFrame = function(h, e) {
        function c(f, c, b) {
            b*=f - c * q;
            return 0 <
            b ? [0, c, b, c * q] : [ - b / q, f / q, 0, f]
        }
        var k = e.width, g = e.height, m = e.align, q = e.size(h, e.width, e.height), q = e.noStretch ? Math.min(q, 1): q, k = [h].concat(p.zip([c(k, h.naturalWidth || h.width || h.clientWidth, m[0]), c(g, h.naturalHeight || h.height || h.clientHeight, m[1])]));
        k.ratio = q;
        return k
    };
    zachModule["8"].Size = {
        contain: function(h, e, c) {
            var k = h.naturalWidth || h.width || h.clientWidth;
            h = h.naturalHeight || h.height || h.clientHeight;
            return e / c < k / h ? e / k : c / h
        },
        cover: function(h, e, c) {
            var k = h.naturalWidth || h.width || h.clientWidth;
            h = h.naturalHeight ||
            h.height || h.clientHeight;
            return e / c < k / h ? c / h : e / k
        }
    }
});
zachModule(function() {
    function p(e, c) {
        return [e[0] * c[0] + e[2] * c[1], e[1] * c[0] + e[3] * c[1], e[0] * c[2] + e[2] * c[3], e[1] * c[2] + e[3] * c[3], e[0] * c[4] + e[2] * c[5] + e[4], e[1] * c[4] + e[3] * c[5] + e[5]]
    }
    var h = {
        translate: function(e, c) {
            return [1, 0, 0, 1, e, c]
        },
        scale: function(e, c) {
            return [e, 0, 0, c, 0, 0]
        },
        rotate: function(e) {
            var c = Math.sin(e);
            e = Math.cos(e);
            return [e, c, - c, e, 0, 0]
        }
    };
    zachModule["9"].isTransformEqual = function(e, c) {
        return e[0] === c[0] && e[1] === c[1] && e[2] === c[2] && e[3] === c[3] && e[4] === c[4] && e[5] === c[5]
    };
    zachModule["9"].matrix = h;
    zachModule["9"].inverse =
    function(e) {
        var c = e[0] * e[3] - e[1] * e[2];
        return [e[3] / c, - e[1] / c, - e[2] / c, e[0] / c, (e[2] * e[5] - e[3] * e[4]) / c, (e[1] * e[4] - e[0] * e[5]) / c]
    };
    zachModule["9"].transform = function(e, c) {
        return [e[0] * c[0] + e[2] * c[1] + e[4] * c[2], e[1] * c[0] + e[3] * c[1] + e[5] * c[2], c[2]]
    };
    zachModule["9"].combine = p;
    zachModule["9"].transformOrigin = function(e, c, k) {
        return p(p(h.translate(c, k), e), h.translate( - c, - k))
    }
});
zachModule(function() {
    function p(b) {
        function c() {
            var a = n(g, l);
            b.setTransform(a[0], a[1], a[2], a[3], a[4], a[5])
        }
        function f(a) {
            l = n(l, a);
            c()
        }
        function e(a) {
            return function() {
                f(a.apply(null, arguments))
            }
        }
        var g = [1, 0, 0, 1, 0, 0], l = [1, 0, 0, 1, 0, 0], k = [];
        return m(b, {
            setPrepareTransform: function(a) {
                g = a;
                c()
            },
            transform: f,
            getTransform: function() {
                return [l[0], l[1], l[2], l[3], l[4], l[5]]
            },
            save: function() {
                CanvasRenderingContext2D.prototype.save.call(b);
                k.push(l)
            },
            restore: function() {
                CanvasRenderingContext2D.prototype.restore.call(b);
                l = k.pop();
                c()
            },
            translate: e(a.translate),
            rotate: e(a.rotate),
            scale: e(a.scale)
        })
    }
    function h() {
        var b = w(document.createElement("canvas"), "display", "block"), c = p(b.getContext("2d")), f = 1;
        g.defineAutoProperty(b, "dpr", {
            value: (window.devicePixelRatio || 1) / (c.webkitBackingStorePixelRatio || c.mozBackingStorePixelRatio || c.msBackingStorePixelRatio || c.oBackingStorePixelRatio || c.backingStorePixelRatio || 1),
            set: function(b) {
                c.dpr = f = b;
                c.setPrepareTransform(a.scale(b, b))
            }
        });
        return m(b, {
            isDirty: !0,
            clear: !0,
            draw: function(a) {
                b.clear &&
                c.clearRect(0, 0, b.width, b.height);
                c.layer = b;
                c.save();
                a(c);
                c.restore()
            },
            resize: function(a, c) {
                b.width = a * b.dpr;
                b.height = c * b.dpr;
                w.size(b, b.logicalWidth = a, b.logicalHeight = c);
                b.dpr = f
            },
            drawTo: function(a) {
                b.parentLayer = a.layer;
                b.transformation = a.getTransform();
                a.drawImage(b, 0, 0, b.width, b.height)
            },
            dirty: function() {
                b.isDirty=!0;
                b.parentLayer && b.parentLayer.dirty()
            }
        })
    }
    function e(a, b) {
        return a && a.transformation ? u(r(a.transformation), e(a.parentLayer, b)) : b
    }
    function c(a, b) {
        return a && a.transformation ? c(a.parentLayer,
        u(a.transformation, b)) : b
    }
    function k() {
        function b(a, c, f, g, m, k) {
            function h() {
                t = [];
                l(function T(a) {
                    a && (t.push(a), q(a.areaFromPoint ? [].concat(a.areaFromPoint.apply(null, e(a, [x, r, 1]))) : [], T))
                }, n.root);
                t.reverse()
            }
            function v(b, c) {
                if (u) {
                    var f = t;
                    q(f, function(a) {
                        a[y] = a[z] ||!1;
                        a[z]=!1
                    });
                    c ? t = c : h();
                    q(t, function(c) {
                        c[z]=!0;
                        p(c, a + "Move", b);
                        c[y] || p(c, a + "Enter", b)
                    });
                    q(f, function(c) {
                        c[z] || p(c, a + "Leave", b);
                        delete c[y]
                    })
                }
            }
            function p(a, b, c) {
                a[b] && a[b](c, x, r)
            }
            var x = 0, r = 0, w=!1, t = [], y = "last" + c, z = "is" + c;
            f(n, v);
            g(n, function(b) {
                k &&
                k(b);
                b.preventDefault();
                q(t, function(c) {
                    p(c, a + "Down", b)
                })
            });
            m(n, function(b) {
                q(t, function(c) {
                    p(c, a + "Up", b)
                })
            });
            return {
                focus: function() {
                    w=!0
                },
                blur: function() {
                    w=!1;
                    v(event, [])
                },
                move: function(a, b) {
                    x = a;
                    r = b
                },
                calculate: function() {
                    w && v({})
                }
            }
        }
        function c() {
            n.transformation = a.translate(n.pageLeft, n.pageTop)
        }
        var n = h(), g, k, u=!1, p = f();
        g = b("cursor", "Hover", B, A, C);
        B(document, function(a) {
            g.move(a.pageX, a.pageY)
        }, !0);
        x(n, g.focus);
        y(n, g.blur);
        ua.msPointer || (k = b("touch", "Touch", E, z, D, function(a) {
            k.focus();
            k.move(a.zPageX,
            a.zPageY);
            k.calculate()
        }), E(document, function(a) {
            k.move(a.zPageX, a.zPageY)
        }, !0), D(document, k.blur));
        v(function() {
            p.trig();
            n.isDirty && (n.isDirty=!1, u=!0, n.root && n.draw(n.root.draw), g.calculate(), k && k.calculate())
        });
        t.onInsert(n, c);
        return m(n, {
            root: null,
            alter: c,
            requestAnimate: p.regist
        })
    }
    var g = zachModule["0"], m = g.insert, q = g.loopArray, f = g.Event, l = g.recursion, b = zachModule["9"], a = b.matrix, n = b.combine, u = b.transform, r = b.inverse, t = zachModule["1"], b = t.Bind, v = t.requestAnimate, w = t.css, x = b(ua.msPointer ? "MSPointerOver" :
    "mouseover"), y = b(ua.msPointer ? "MSPointerOut" : "mouseout"), A = b(ua.msPointer ? "MSPointerDown" : "mousedown"), C = b(ua.msPointer ? "MSPointerUp" : "mouseup"), B = b(ua.msPointer ? "MSPointerMove" : "mousemove"), z = b("touchstart"), D = b("touchend"), E = b("touchmove"), F = 0;
    k.Context2D = p;
    k.Layer = h;
    k.Area = function() {
        var a = null, b = {
            id: F++,
            areaFromPoint: null,
            dirty: function() {
                b.parentLayer && b.parentLayer.dirty()
            }
        };
        Object.defineProperty(b, "draw", {
            set: function(b) {
                a = b
            },
            get: function() {
                return function(c) {
                    c.getTransform && (b.transformation =
                    c.getTransform());
                    b.parentLayer = c.layer;
                    a(c)
                }
            }
        });
        q("cursorDown cursorUp cursorMove cursorEnter cursorLeave touchDown touchMove touchUp touchEnter touchLeave".split(" "), function(a) {
            var c = f();
            b[a] = c.trig;
            b["on" + a.replace(/./, function(a) {
                return a.toUpperCase()
            })] = c.regist
        });
        return b
    };
    k.coordinatePageToArea = e;
    k.coordinateAreaToPage = c;
    zachModule["10"] = k
});
zachModule(function() {
    function p(a, c, f) {
        b(a, "transform", b.translate(a.zLeft = c, a.zTop = f, 0))
    }
    function h(e, t) {
        function v(a) {
            return D ? (a + z.length)%z.length : a
        }
        function w(c, f) {
            b(c, "width", a(H));
            F && b(c, "margin", "0 " + a(P / 2));
            f && F && b(c, a("margin-left", - P * (O - 1) / 2));
            return c
        }
        function x() {
            var a = t.lay, b =- Math.floor((B.zLeft + H / 2) / H);
            t.lay && q(B.children, function(c, f) {
                var n = f - (O - 1) / 2;
                !c.zEmpty && a(c, {
                    index: n - b,
                    offset: n * (H + P) + B.zLeft,
                    width: H
                })
            })
        }
        function y(a) {
            function b() {
                var a = document.createElement("li");
                a.zEmpty =
                !0;
                return a
            }
            B.innerHTML = "";
            p(B, 0, 0);
            m(O, function(c) {
                var f = c - (O - 1) / 2 + a, f = D && 2 >= z.length ? 1 === c ? z[a]: b(): z[v(f)] || b();
                B.appendChild(w(f, 0 === c))
            });
            x();
            J = a;
            N.trig({
                curIndex: a
            })
        }
        function A(a) {
            var b = z[v(J + 1)], c = B.children[0 < a ? 0: 2];
            a = B.children[0 > a ? 0: 2];
            c !== b && (B.replaceChild(w(document.createElement("li")), a), B.replaceChild(w(b), c))
        }
        function C(a) {
            function c() {
                y(e);
                R=!1
            }
            if (1 !== z.length) {
                var e = f(v(J + a), 0, z.length - 1);
                R=!0;
                M.trig({
                    curIndex: J,
                    targetIndex: e
                });
                D && 2 === z.length && A( - a);
                t.lay ? n({
                    start: B.zLeft,
                    end: (J -
                    e) * (H + P),
                    onAnimate: function(a) {
                        p(B, a<<0, 0);
                        x(H)
                    },
                    onEnd: c,
                    duration: .2
                }) : l.transition(B, "0.2s", {
                    transform: b.translate((D?-a : J - e) * (1 + F) * H, 0, 0)
                }, c)
            }
        }
        h.hasCall || (l.insertCSSRules({
            ".z-slide-list-panel": {
                overflow: "hidden",
                position: "relative"
            },
            ".z-slide-list-panel > ul": {
                height: "100%",
                overflow: "hidden"
            },
            ".z-slide-list-panel > ul > li": {
                height: "100%",
                "float": "left",
                "min-height": "1px"
            }
        }, !0), h.hasCall=!0);
        e.classList.add("z-slide-list-panel");
        t = k({
            width: 1,
            cycle: !1,
            slideRatio: 1,
            margin: 0
        }, t || {});
        var B = e.querySelector("ul"),
        z = [], D = t.cycle, E = t.slideRatio, F = t.margin, I = t.width + F, L=!1, N = g(), M = g(), Q = g(), G, H, P, O, J = 0, R=!1;
        l.onInsert(e, function() {
            G = e.offsetWidth;
            H = G * t.width;
            P = G * F;
            for (var c = 1; 1 > t.width * c + F * (c - 2);)
                c += 2;
            O = c + 2 * E;
            b(B, {
                width: a(O * H + (0 < F ? P * O : 0)),
                "margin-left": a( - (O * t.width - 1) / 2 * G)
            })
        });
        if (ua.win32)
            u.onPointerDown(e, function(a) {
                a.preventDefault()
            });
        q(B.children, function(a) {
            z.push(a)
        });
        B.innerHTML = "";
        u.onDragH(B, function(a) {
            L || R || D && 1 === z.length || (Q.trig({
                curIndex: J
            }), a.onDragMove(function(a) {
                a = a.distanceX;
                var b = z.length;
                !D && (0 === J && 0 < a || J === b - 1 && 0 > a) ? a = Math.atan(a / G / 2) * G * t.width / 2 : D && 2 === b && A(a);
                p(B, f(a, - G + 2, G - 2) * I, 0);
                x()
            }), a.onDragEnd(function(a) {
                var b = a.directionX ? 1: - 1;
                a = 200 > a.duration?-b : - b * (.5 < Math.abs(B.zLeft / G + .3 * b) ? 1 : 0);
                C(a)
            }))
        });
        return c(e, {
            item: function(a) {
                return z[a]
            },
            disable: function(a) {
                L = a
            },
            length: function() {
                return z.length
            },
            addItem: function(a) {
                z.push(a)
            },
            clear: function() {
                J = 0;
                z = []
            },
            curIndex: function() {
                return J
            },
            display: y,
            cutTo: function(a) {
                C(a - J)
            },
            cutRight: function(a) {
                C(a || 1)
            },
            onCutTo: N.regist,
            onSlideStart: Q.regist,
            onAnimateStart: M.regist
        })
    }
    var e = zachModule["0"], c = e.insert, k = e.extend, g = e.Event, m = e.loop, q = e.loopArray, f = zachModule["3"].range, l = zachModule["2"], b = l.css, a = b.px, n = zachModule["6"], u = zachModule["4"];
    zachModule["11"] = h
});
zachModule(function() {
    function p(a) {
        return [a[0][0], a[0][1], a[0][2], a[0][3], a[1][0], a[1][1], a[1][2], a[1][3], a[2][0], a[2][1], a[2][2], a[2][3], a[3][0], a[3][1], a[3][2], a[3][3]]
    }
    function h(a) {
        return [a[0][0], a[1][0], a[2][0], a[3][0], a[0][1], a[1][1], a[2][1], a[3][1], a[0][2], a[1][2], a[2][2], a[3][2], a[0][3], a[1][3], a[2][3], a[3][3]]
    }
    function e(a, b) {
        var c = 4 * b;
        return [a[c], a[c + 1], a[c + 2], a[c + 3]]
    }
    function c(a, b) {
        return [a[b], a[b + 4], a[b + 8], a[b + 12]]
    }
    function k(a, b) {
        return a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3]
    }
    function g(a,
    b) {
        return [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0], 0]
    }
    function m(a) {
        var b = 1 / Math.sqrt(k(a, a));
        return [a[0] * b, a[1] * b, a[2] * b, a[3] * b]
    }
    function q(a, b) {
        return [k(e(a, 0), b), k(e(a, 1), b), k(e(a, 2), b), k(e(a, 3), b)]
    }
    function f(a, b) {
        return h([q(a, c(b, 0)), q(a, c(b, 1)), q(a, c(b, 2)), q(a, c(b, 3))])
    }
    var l = {}, b = {};
    l.unit = function() {
        return [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]
    };
    l.translate = function(a, b, c) {
        return [1, 0, 0, a, 0, 1, 0, b, 0, 0, 1, c, 0, 0, 0, 1]
    };
    l.scale = function(a, b, c) {
        return [a, 0, 0, 0, 0, b, 0, 0, 0, 0, c, 0, 0, 0, 0, 1]
    };
    l.rotateX = function(a) {
        var b = Math.sin(a);
        a = Math.cos(a);
        return [1, 0, 0, 0, 0, a, - b, 0, 0, b, a, 0, 0, 0, 0, 1]
    };
    l.rotateY = function(a) {
        var b = Math.sin(a);
        a = Math.cos(a);
        return [a, 0, b, 0, 0, 1, 0, 0, - b, 0, a, 0, 0, 0, 0, 1]
    };
    l.rotateZ = function(a) {
        var b = Math.sin(a);
        a = Math.cos(a);
        return [a, - b, 0, 0, b, a, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]
    };
    l.rotateBase = function(a, b, c) {
        return p([a, b, c, [0, 0, 0, 1]])
    };
    l.lookAt = function(a, b, c) {
        b = m([a[0] - b[0], a[1] - b[1], a[2] - b[2], 0]);
        c = m(g(c, b));
        var e = m(g(b, c));
        return f(l.rotateBase(c, e, b), l.translate( - a[0], - a[1], - a[2]))
    };
    l.perspectiveProject =
    function(a, b, c, f) {
        return [2 * c / a, 0, 0, 0, 0, 2 * c / b, 0, 0, 0, 0, - (f + c) / (f - c), - 2 * f * c / (f - c), 0, 0, - 1, 0]
    };
    b.crystal = function() {
        return {
            vertex: [1, 1, 1, - 1, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 1, 0, - 1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0, - 1, 1, 0, 0, 0, 1, 0, 1, 0, 0, - 1, - 1, - 1, 0, - 1, 0, 0, 0, - 1, 0, 1, 0, - 1, - 1, - 1, 0, 0, - 1, - 1, 0, 0, 0, 0, 0, - 1, - 1, - 1, 0, 0, 0, - 1, 0],
            index: [0, 2, 3, 1, 3, 2, 4, 6, 7, 5, 7, 6, 8, 10, 11, 9, 11, 10, 12, 14, 15, 13, 15, 14, 16, 18, 19, 17, 19, 18, 20, 22, 23, 21, 23, 22],
            uv: [.5, 0, .5, 1, 0, .5, 1, .5, .5, 0, .5, 1, 0, .5, 1, .5, .5, 0, .5, 1, 0, .5, 1, .5, .5, 0, .5, 1, 0, .5, 1, .5, .5, 0, .5, 1, 0, .5, 1, .5, .5, 0, .5, 1,
            0, .5, 1, .5]
        }
    };
    b.diamond = function() {
        return {
            vertex: [ - 1, 0, 0, 1, 0, 0, 0, 1.73, 0, 0, - 1.73, 0],
            index: [2, 0, 1, 1, 0, 3],
            uv: [0, .5, 1, .5, .5, 0, .5, 1]
        }
    };
    b.square = function() {
        return {
            vertex: [ - 1, 1, 0, 1, 1, 0, - 1, - 1, 0, 1, - 1, 0],
            index: [0, 2, 1, 1, 2, 3],
            uv: [0, 0, 1, 0, 0, 1, 1, 1]
        }
    };
    zachModule["12"].MatrixFromRows = p;
    zachModule["12"].MatrixFromColumns = h;
    zachModule["12"].VectorFromRow = e;
    zachModule["12"].VectorFromColumn = c;
    zachModule["12"].dot = k;
    zachModule["12"].cross = g;
    zachModule["12"].uniform = m;
    zachModule["12"].transform = q;
    zachModule["12"].combine =
    f;
    zachModule["12"].transpose = function(a) {
        return [a[0], a[4], a[8], a[12], a[1], a[5], a[9], a[13], a[2], a[6], a[10], a[14], a[3], a[7], a[11], a[15]]
    };
    zachModule["12"].inverse = function(a) {
        var b = a[5] * a[10] - a[6] * a[9], c = a[4] * a[10] - a[6] * a[8], f = a[4] * a[9] - a[5] * a[8], e = a[6] * a[11] - a[7] * a[10], g = a[5] * a[11] - a[7] * a[9], l = a[4] * a[11] - a[7] * a[8], k = 1 / (a[0] * b - a[1] * c + a[2] * f);
        return [b * k, - (a[1] * a[10] - a[2] * a[9]) * k, (a[1] * a[6] - a[2] * a[5]) * k, ( - a[1] * e + a[2] * g - a[3] * b) * k, - c * k, (a[0] * a[10] - a[2] * a[8]) * k, - (a[0] * a[6] - a[2] * a[4]) * k, (a[0] * e - a[2] * l + a[3] *
        c) * k, f * k, - (a[0] * a[9] - a[1] * a[8]) * k, (a[0] * a[5] - a[1] * a[4]) * k, ( - a[0] * g + a[1] * l - a[3] * f) * k, 0, 0, 0, 1]
    };
    zachModule["12"].matrix = l;
    zachModule["12"].geometry = b
});
zachModule(function() {
    var p = zachModule["0"], h = p.is, e = p.LinkedList;
    e.loopNodes = function(c, e, g, m) {
        var q;
        h.Function(e) ? q = null : (q = e, e = g, g = m);
        for (; c !== q; c = g ? c.previous : c.next)
            if (void 0 !== (m = e(c.value, c)
                ))return m
    };
    e.loopSection = function(c, k) {
        var g = c.head(), m = g.value;
        e.loopNodes(g.next, function(c) {
            k(m, c);
            m = c
        });
        k(m, null)
    };
    e.toArray = function(c) {
        var k = [];
        e.loop(c, function(c) {
            k.push(c)
        });
        return k
    };
    e.push = function(c, k) {
        return c.insert(e.Node(k), null)
    };
    e.pop = function(c) {
        var e = c.tail();
        c.remove(e);
        return e.value
    };
    e.isBefore = function(c, e) {
        for (; e && e !== c; e = e.next);
        return null === e
    };
    zachModule["13"] = e
});
zachModule(function() {
    function p(b, a) {
        return b && a && (c.test(b)&&!m.test(a) ||!m.test(b) && k.test(a) || g.test(b) && g.test(a) || m.test(b) && m.test(a))
    }
    function h(b, a) {
        return function(c, f, g, l) {
            var k = l, h = c, p = 0, y = "", A = c, C = [];
            e.loopNodes(c, f, function(c, e) {
                p += c.width;
                y += c.character || "";
                b(c.character || "", e.next === f ? "" : e.next.value.character || "") && (q.test(y) ? (C.push(h), h = e.next, k = l) : !(A !== h && k + p > g) || a && m.test(A.value.character || "") ? k += p : (C.push(h), h = A, k = p), y = "", p = 0, A = e.next)
            });
            C.push(h);
            return C
        }
    }
    var e = zachModule["13"],
    c = /^[\uff08\u3010\u201c\u2018]$/, k = /^[\uff09\u3011\u201d\u2019\uff0c\u3002\uff1b\uff1a\uff1f\uff01\u3001]$/, g = /^[0-9a-zA-Z`~!@#\$%\^&\*\(\)\-_=\+\[\{\]\}\\\|:;"'<,>\.\?\/]$/, m = /^[ \t\u3000]$/, q = /^[\n\r]$/, f = h(function(b, a) {
        return !0
    }, !1), l = h(function(b, a) {
        return !p(b, a)
    }, !0);
    zachModule["14"].buildAllBreakLines = f;
    zachModule["14"].buildWordBreakLines = l;
    zachModule["14"].alignLeftLine = function(b, a, c, f) {
        var g = f;
        e.loopNodes(b, a, function(a) {
            a.offsetX = g;
            g += a.width
        })
    };
    zachModule["14"].alignSideLine = function(b,
    a, c, f) {
        var g = b;
        e.loopNodes(b, a, function(a, b) {
            a.character && m.test(a.character) || (g = b)
        });
        var l = 0, k = 0;
        e.loopNodes(b, g.next, function(a, b) {
            k += a.width;
            b.next === g.next || p(a.character, b.next.value.character) || l++
        });
        var h = 0 < l ? (c - f - k) / l: 0, q = f, y = 0, A = 0;
        e.loopNodes(b, a, function(b, c) {
            b.offsetX = q + y;
            q += b.width;
            c.next === a || p(b.character, c.next.value.character) || (A++, y = h * Math.min(A, l) + .5<<0)
        })
    }
});
zachModule(function() {
    function p(c) {
        c = c || {};
        return [c.fontStyle || "normal", c.fontVariant || "normal", c.fontWeight || "normal", (c.fontSize || 12) + "px", c.fontFamily || "sans-serif"].join(" ")
    }
    var h = zachModule["14"], e = zachModule["0"], c = zachModule["13"], k = zachModule["7"], g = function() {
        var c;
        return function() {
            return c ? c : c = document.createElement("canvas").getContext("2d")
        }
    }();
    zachModule["15"].LineBreak = {
        breakAll: h.buildAllBreakLines,
        normal: h.buildWordBreakLines
    };
    zachModule["15"].Align = {
        left: h.alignLeftLine,
        side: function(c,
        e, f) {
            (e && "\n" !== e.previous.value.character ? h.alignSideLine : h.alignLeftLine)(c, e, f, 0)
        }
    };
    zachModule["15"].Font = p;
    zachModule["15"].measureText = function(c, e) {
        var f = g();
        f.font = p(e);
        return f.measureText(c)
    };
    zachModule["15"].layText = function(m, h, f) {
        var l = g(), b = 0, a = 0, n = c(), u = f.align;
        l.font = p(f);
        e.loopString(m.replace(/\r/g, ""), function(a) {
            c.push(n, {
                character: a,
                width: "\n" === a ? 0: l.measureText(a).width
            });
            "\n" === a&&++b
        }, !0);
        k.loopSection(f.lineBreak(n.head(), null, h, 0), function(b, c) {
            b && (b.value.lineStart=!0);
            u(b, c, h, 0);
            ++a
        });
        n.style = f;
        n.width = h;
        n.height = a * f.lineHeight + b * (f.margin || (f.margin = 0));
        return n
    };
    zachModule["15"].drawTextLayout = function(e, g) {
        var f = g.style, l = f.lineHeight, b = f.margin, a =- l, n = l / 2<<0;
        e.font = p(f);
        e.fillStyle = f.color;
        e.textBaseline = "middle";
        c.loop(g, function(c) {
            c.lineStart && (a += l);
            "\n" === c.character && (a += b);
            e.fillText(c.character, c.offsetX, a + n)
        })
    }
});
(function() {
    var p = zachModule["0"], h = p.loopArray, e = p.extract, c = p.insert, k = p.Event, g = zachModule["2"], m = g.element, q = g.css, g = zachModule["5"].KeyValueFunction, f = zachModule["6"], l = window.fp = window.fp || {}, b = window.specialPage = {}, a = window.layoutFormat = {}, n = window.functionPages = {}, u = window.enterAnimate = {}, r = window.pageEffects = {}, t = window.switchAnimates = [];
    c(ua, {
        iphone4: ua.iphone && 480 === screen.height,
        iphone5: ua.iphone && 568 === screen.height,
        iphone6: ua.iphone && 568 < screen.height,
        mi4: /Mi 4LTE/gi.test(navigator.userAgent)
    });
    window.staticImgSrc = function(a) {
        return contentSrc("image/" + a)
    };
    window.componentAttr = function(a) {
        return e(a, {
            x: 0,
            y: 0,
            opacity: 1,
            scale: 1,
            rotate: 0,
            "z-index": 0,
            transform: 0
        })
    };
    window.center = function(a, b) {
        return (a - b) / 2<<0
    };
    window.middleY = function(a, b) {
        return (a - idealHeight / 2) * (b || 1) + clientHeight / 2<<0
    };
    window.middleX = function(a, b) {
        return (a - idealWidth / 2) * (b || 1) + clientWidth / 2<<0
    };
    window.registLayout = g(function(b, c) {
        a[b] = c
    });
    window.registPageEffect = g(function(a, b) {
        r[a] = b
    });
    window.registEnterAnimate = g(function(a,
    b) {
        u[a] = (window.highPerformance ? void 0 : b.fallback) || function(a) {
            var c = b.progress ? b.progress.apply(null, [a].concat(Array.prototype.slice.call(arguments, 1))): void 0;
            if (c) {
                var e = {};
                p.loopObj(c, function(a, b) {
                    h(a.split(" "), function(a) {
                        e[a] = b
                    })
                });
                c = e
            }
            return {
                component: a,
                duration: b.duration || 1,
                timing: b.timing || f.Timing.ease,
                progress: c,
                onAnimate: b.onAnimate
            }
        }
    });
    window.registSwitchAnimate = g(function(a, b) {
        t.push(b);
        t[a] = b
    });
    window.registFunctionPage = function(a, b) {
        return n[a] = function(c) {
            function f() {
                var a =
                l.slidePage();
                b(a, c.data);
                a.slideIn(c.noTransition)
            }
            c.noLog || l.isLogIn() ? f() : l.canNotLogin ? l.canNotLogin() : (sessionStorage.setItem("lastPageIndex", curPageIndex), sessionStorage.setItem("functionData", JSON.stringify({
                name: a,
                data: c.data
            })), l.logIn({
                returnUrl: location.href,
                onLogIn: f
            }))
        }
    };
    window.registSpecialPage = g(function(a, f) {
        b[a] = function() {
            var a = {
                type: "special",
                load: function(b) {
                    f(function(f) {
                        a.create = function() {
                            var a = m("div.special-page.page"), b = k(), e = k();
                            c(a, {
                                start: b.trig,
                                recycle: e.trig,
                                onShow: b.regist,
                                onRemove: e.regist
                            });
                            f.create(a);
                            return a
                        };
                        b()
                    })
                }
            };
            return a
        }
    });
    window.isImageRect = function(a) {
        return /^#/.test(a) || /^rgba/gi.test(a)
    };
    window.LayoutPage = function(b) {
        var f = b.layout, e = a[f.label] || a.SingleImage, n = (e.resource || []).concat([]), g = f.image || [], l = b.pageEffect ? r[b.pageEffect]: null, k = l ? (l.resource || []).concat([]): null;
        return {
            pageData: b,
            create: function(a) {
                e.create(a, f);
                l && l.create(a, k);
                return a
            },
            load: function(a) {
                function b(a, c) {
                    h(a, function(b, f) {
                        l.load(function(n) {
                            if (isImageRect(b))
                                n();
                            else {
                                var g =
                                a[f] = new Image;
                                e.crossOrigin && (g.crossOrigin = "*");
                                g.onload = function() {
                                    g.halfWidth = (g.naturalWidth || g.width) / 2<<0;
                                    g.halfHeight = (g.naturalHeight || g.height) / 2<<0;
                                    g.onload = null;
                                    !c && m && m.isSmall && 150 <= g.halfWidth && 150 <= g.halfHeight && (m.isSmall=!1, m.src = g.src);
                                    n()
                                };
                                g.onerror = function() {
                                    g.src = staticImgSrc("firstPage-404.jpg")
                                };
                                g.src = c ? c(b) : b
                            }
                        })
                    })
                }
                var l = p.Loader(), m = window.shareImg;
                b(g);
                b(n, staticImgSrc);
                k && b(k, staticImgSrc);
                l.start(function() {
                    c(f, {
                        resource: n,
                        image: g
                    });
                    a()
                })
            }
        }
    };
    window.bindDataSource = function(a,
    b, c) {
        a.nodeName && (a.classList.add("layout-component-from-data"), a.dataSource = {
            from: b,
            index: c
        });
        return a
    };
    window.Icon = function(a, b, c, f) {
        var e = new Image;
        e.src = a;
        q(e, {
            width: q.px(b),
            display: "block",
            position: "absolute"
        });
        e.componentWidth = b;
        e.componentHeight = c;
        e.pos = function(a, b) {
            q(e, {
                x: q.px(a),
                y: q.px(b)
            })
        };
        f && f.appendChild(e);
        return e
    }
})();
(function() {
    function p(a, b) {
        g.switchClass(b || document.documentElement, a, "lock")
    }
    var h = zachModule["0"], e = h.loopObj, c = h.insert, k = h.Event, g = zachModule["2"], m = g.removeNode, q = g.element, f = g.bubble, l = g.toggleState, b = g.onTransitionEnd, a = zachModule["4"].onPointerDown, h = ua.iphone ? "iphone": ua.ipad ? "ipad": ua.ios ? "ios-other": ua.android ? "android": "other", n = function() {
        function a() {
            localStorage.setItem("cookie", JSON.stringify(b))
        }
        var b = JSON.parse(localStorage.getItem("cookie") || "{}");
        e(b, function(a, c) {
            c.expires <
            new Date && delete b[a]
        });
        a();
        return {
            getItem: function(a) {
                return b[a] ? b[a].value : null
            },
            setItem: function(c, f, e) {
                b[c] = {
                    value: f,
                    expires: (new Date).getTime() + 1E3 * e
                };
                a()
            },
            expires: function(c, f) {
                b[c] && (b[c].expires = (new Date).getTime() + 1E3 * f, a())
            },
            remove: function(c) {
                delete b[c];
                a()
            }
        }
    }(), u = function() {
        var a = [], b=!1;
        setTimeout(function() {
            g.bindEvent(window, "popstate", function() {
                if (0 !== a.length) {
                    var c = a.top;
                    a.pop();
                    c.onPop(c.actionEnd);
                    1 < a.length ? history.pushState(null, "", location.href) : b=!1
                }
            })
        }, 0);
        return {
            pushAction: function(c) {
                var f =
                k();
                a.push({
                    onPop: c,
                    actionEnd: f.trig
                });
                b || (b=!0, history.pushState(null, "", location.href));
                return f.regist
            },
            back: function() {
                history.back()
            }
        }
    }(), r = function() {
        var a;
        return function(b, c) {
            a || (a = q("div.loading", [q("div.point"), q("div.circle")]));
            if (b) {
                var f = c ? null: b.appendChild(a.cloneNode(!0)), e = null;
                c && (e = setTimeout(function() {
                    f = b.appendChild(a.cloneNode(!0))
                }, c));
                return {
                    remove: function() {
                        e && clearTimeout(e);
                        m(f)
                    }
                }
            }
            p(!0);
            document.body.appendChild(a);
            return {
                remove: function() {
                    p(!1);
                    m(a)
                }
            }
        }
    }(), t = function() {
        var b,
        c;
        return function(f, e) {
            function n() {
                l(b, "show", "remove");
                g.remove();
                clearTimeout(k)
            }
            b || (b = q("div.msg-box", document.body), c = q("div.msg", b));
            c.innerHTML = f;
            l(b, "remove", "show");
            var g = a(document, n), k = setTimeout(n, e || 2E3)
        }
    }();
    c(fp, {
        lock: p,
        jump: function(a) {
            sessionStorage.setItem("lastPageIndex", curPageIndex);
            location.href = a
        },
        preventEvent: function(b, c) {
            var e = document.body;
            if (b) {
                b.classList.add("event-all");
                f(b, function(a) {
                    a.classList.add("event-target")
                });
                e.classList.add("event-mask");
                fp.history.pushAction(function() {
                    b.classList.remove("event-all");
                    f(b, function(a) {
                        a.classList.remove("event-target")
                    });
                    e.classList.remove("event-mask");
                    n.remove();
                    c && c()
                });
                var n = a(document, function(a) {
                    b.contains(a.target) || (a.preventDefault(), fp.history.back())
                })
            } else {
                var g = q("div.body-mask", e);
                fp.history.pushAction(function() {
                    m(g);
                    c && c()
                });
                a(g, function(a) {
                    a.preventDefault();
                    a.stopPropagation();
                    fp.history.back()
                })
            }
        },
        cookie: n,
        history: u,
        Loading: r,
        alert: t,
        slidePage: function() {
            var f = q("div.slide-page"), e = k(), n = k();
            a(f, function(a) {
                a.stopPropagation()
            });
            return c(f, {
                onSlideIn: e.regist,
                onSlideOut: n.regist,
                isIn: function() {
                    return f.classList.contains("slide-in")
                },
                slideIn: function(a) {
                    body.appendChild(f);
                    a ? (a && f.classList.add("no-transition"), f.classList.add("slide-in"), e.trig()) : (fp.lock(!0), setTimeout(function() {
                        f.classList.add("slide-in");
                        b(f, function() {
                            fp.lock(!1);
                            e.trig()
                        })
                    }, 10));
                    fp.history.pushAction(function() {
                        fp.lock(!0);
                        n.trig();
                        f.classList.remove("no-transition");
                        f.classList.remove("slide-in");
                        b(f, function() {
                            fp.lock(!1);
                            m(f)
                        })
                    })
                }
            })
        },
        getSessionData: function(a, b) {
            var c = sessionStorage.getItem(a);
            sessionStorage.removeItem(a);
            return null === c ? b : c
        },
        downloadFirstPage: function() {
            ua.chuye ? fp.alert("\u60a8\u6b63\u5728\u4f7f\u7528\u521d\u9875") : (fp.track(["Download", "Click", fp.systemName]), location.href = ua.android ? "http://a.app.qq.com/o/simple.jsp?pkgname=com.cloud7.firstpage" : ua.ios ? ua.MicroMessenger ? "http://a.app.qq.com/o/simple.jsp?pkgname=com.cloud7.firstpage" : "https://itunes.apple.com/cn/app/chu-ye/id910560238?mt=8" : "http://www.cloud7.com.cn/chuye")
        },
        LoadingNextPageTips: function(a) {
            return q("div.loading-next-page-tips",
            [q("div.circle")], a)
        },
        systemName: h
    })
})();
(function() {
    var p = zachModule["0"], h = p.Event, e = zachModule["2"], c = e.element, k = zachModule["8"], g = zachModule["6"], m = zachModule["4"], q = m.onPointerDown, f = m.onTap, l=!1;
    window.stopAudio = function() {
        l=!0
    };
    fp.runSystem = function() {
        var b = fp.Loading();
        ua.chuye = /chuye/gi.test(navigator.userAgent);
        ua.ios && document.documentElement.classList.add("ios");
        ua.win32 && document.documentElement.classList.add("win32");
        window.body = c("div.body", document.body);
        q(document, function(a) {
            var b=!0;
            e.bubble(a.target, function(a) {
                a.classList.contains("need-default") &&
                (b=!1)
            });
            b && a.preventDefault()
        });
        window.onSystemPrepare && window.onSystemPrepare(function(a) {
            function n() {
                window.clientWidth = document.documentElement.clientWidth;
                window.clientHeight = document.documentElement.clientHeight;
                window.xRatio = clientWidth / idealWidth;
                window.yRatio = clientHeight / idealHeight;
                window.globalScale = k.Size.cover({
                    width: idealWidth,
                    height: idealHeight
                }, clientWidth, clientHeight)
            }
            var m = a.pages, r = window.pageNumber = m.length, t = fp.getSessionData("functionData"), v = Array(r), w = {}, x = [];
            window.idealWidth =
            320;
            window.idealHeight = 504;
            n();
            e.bindEvent(window, "resize", function() {
                n();
                fp.resize && fp.resize();
                window.jumpPage && window.jumpPage(window.curPageIndex)
            });
            window.color = a.color;
            v.data = a;
            t && (t = JSON.parse(t), functionPages[t.name]({
                data: t.data,
                noTransition: !0
            }));
            window.curPageIndex = parseInt(fp.getSessionData("lastPageIndex", "0"), 10);
            window.getIndex = function(a) {
                return (a + r)%r
            };
            w.isPageLoad = function(a) {
                return !0 === x[getIndex(a)]
            };
            w.loadPage = function(a, b) {
                var c = x[a];
                if (!(0 > a || a >= v.length))
                    if (!0 === c)
                        b && b();
                    else {
                        if (void 0 ===
                        c) {
                            var c = x[a] = p.Event(), f = m[a], e = v[a] = f.special ? specialPage[f.special](): LayoutPage(f), c = x[a] = h();
                            e.load(function() {
                                e.isLoad=!0;
                                c.trig();
                                x[a]=!0;
                                delete e.load
                            })
                        }
                        return c.regist(b)
                    }
                };
            w.startShow = function() {
                b.remove();
                if (!window.noMusic && a.music && a.music.src) {
                    var n = c("<audio loop></audio>", document.body), k = c("div.music-icon", {
                        classList: l ? []: ["play"]
                    }, body);
                    window.stopAudio = function() {
                        k.classList.remove("play");
                        n.src && n.pause()
                    };
                    window.playAudio = function() {
                        k.classList.add("play");
                        n.src && n.play()
                    };
                    f(k,
                    function() {
                        k.classList.contains("play") ? stopAudio() : playAudio()
                    });
                    w.startMusic = function() {
                        function b() {
                            k.classList.contains("play") && n.play()
                        }
                        n.onerror = function() {
                            n.src = a.music.src + "?t=" + (new Date).getTime();
                            k.classList.contains("play") && n.play();
                            n.onerror = null
                        };
                        n.src = a.music.src;
                        ua.ios || e.bindEvent(n, "loadeddata", function() {
                            g({
                                duration: 3,
                                onAnimate: function(a) {
                                    n.volume = a
                                }
                            })
                        });
                        b();
                        if (n.paused)
                            var c = q(document, function() {
                                b();
                                c.remove()
                            });
                        delete w.startMusic
                    }
                }
            };
            window.getPageInfo = function(a) {
                return (a =
                v[getIndex(a)]) && a.isLoad ? a : null
            };
            window.jumpPage = function() {
                var a = null;
                return function(b) {
                    fp.lock(!1);
                    a && a.remove();
                    var c = getIndex(b);
                    getPageInfo(c) ? (fp.jumpPage(c), window.curPageIndex = c) : (fp.lock(!0), a = w.loadPage(c, function() {
                        jumpPage(c)
                    }))
                }
            }();
            (window.highPerformance ? CanvasSystem : DOMSystem)(v, w);
            window.onFirstPageLoad && window.onFirstPageLoad()
        }, b)
    }
})();
(function() {
    function p(c, e, m, h) {
        return c.componentWidth * e - m.componentWidth * h
    }
    function h(c, e, h, p) {
        return c.componentHeight * e - h.componentHeight * p
    }
    function e(c, e) {
        return function(h, q) {
            return p(h, c, q, e)
        }
    }
    function c(c, e) {
        return function(m, p) {
            return h(m, c, p, e)
        }
    }
    window.d = function(c) {
        return c * globalScale<<0
    };
    window.position = {
        relativeX: p,
        relativeY: h,
        leftIn: e(0, 0),
        leftTo: e(0, 1),
        rightIn: e(1, 1),
        rightTo: e(1, 0),
        center: e(.5, .5),
        topIn: c(0, 0),
        topTo: c(0, 1),
        bottomIn: c(1, 1),
        bottomTo: c(1, 0),
        middle: c(.5, .5)
    }
})();
(function() {
    function p(m) {
        return k.ajax({
            method: "post",
            url: h.concatUrlArg("http://c.cloud7.com.cn" + m.url, g ? {
                _token: g
            } : {}),
            data: e.String(m.data) ? m.data: h.encodeURIObject(m.data),
            requestHeader: c({
                Accept: "application/json",
                "Content-Type": "application/x-www-form-urlencoded"
            }, m.requestHeader || {}),
            isJson: !0,
            onLoad: function(c) {
                302 === c.code ? m.on302 && m.on302(c.data) : m.success(c.data)
            }
        })
    }
    if (!window.debug) {
        var h = zachModule["0"], e = h.is, c = h.extend, k = zachModule["2"], g;
        (function() {
            var c = null;
            if (ua.MicroMessenger)
                if (g =
                location.href.arg._token)
                    fp.cookie.setItem("token", g, 604800), fp.getUserInfo = function(f) {
                        c ? f(c) : p({
                            url: "/api/Wechat/CurrentUser",
                            success: function(b) {
                                f(c = b)
                            }
                        })
                    }, fp.isLogIn = function() {
                        return !0
                    };
                else if (g = fp.cookie.getItem("token"), fp.getUserInfo = function(f) {
                    f(c)
                }, fp.isLogIn = function() {
                    return null !== c
                }, g) {
                    var e = null, f = null;
                    p({
                        url: "/api/Wechat/CurrentUser",
                        on302: function(c) {
                            e && e(c);
                            fp.logIn = function() {
                                p({
                                    url: "/api/Wechat/CurrentUser",
                                    on302: fp.jump
                                })
                            }
                        },
                        success: function(e) {
                            c = e;
                            f && f()
                        }
                    });
                    fp.logIn = function(g) {
                        if (c)
                            g.onLogIn();
                        else 
                            e = fp.jump, f = g.onLogIn
                        }
                } else 
                    fp.logIn = function() {
                        location.href = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx9d492ee399e6a24c&redirect_uri=" + encodeURIComponent("http://c.cloud7.com.cn/Auth?returnUrl=" + encodeURIComponent(location.href)) + "&response_type=code&scope=snsapi_base&state=#wechat_redirect"
                    };
            else 
                fp.canNotLogin = function() {
                    fp.alert("\u8bf7\u5728\u5fae\u4fe1\u4e2d\u4f7f\u7528")
                }, fp.isLogIn = function() {
                    return !1
                };
            return g
        })();
        fp.getCommentSummary = function(c, e) {
            p({
                url: "/api/Blog/SaveContentSummary",
                data: e,
                success: function(f) {
                    c(f)
                }
            })
        };
        fp.getCommentCount = function(c) {
            var e = fp.getWorkInfo();
            p({
                url: "/api/Blog/GetCommentCounts",
                data: {
                    Site: e.Site,
                    ContentID: e.ContentID
                },
                success: function(f) {
                    c(f[1])
                }
            })
        };
        fp.getComments = function(c, e) {
            p({
                url: "/api/blog/GetCommentWall",
                data: {
                    ContentSummaryID: e.contentSummaryId
                },
                success: function(f) {
                    var e = [];
                    h.loopArray(f, function(b) {
                        e.push({
                            text: b.Text,
                            userName: b.NickName,
                            avatar: b.HeadPhoto || staticImgSrc("firstPage-defaultAvatar.png"),
                            date: new Date(b.Time)
                        })
                    });
                    c(e)
                }
            })
        };
        fp.saveComment =
        function(c, e) {
            p({
                url: "/api/blog/SaveTextComment",
                data: {
                    ContentSummaryID: e.contentSummaryId,
                    Text: e.text
                },
                success: c
            })
        }
    }
})();
(function() {
    function p() {
        function b(a, b) {
            var c = {
                title: m.title,
                link: m.url,
                imgUrl: m.picture,
                success: function() {
                    var b = new XMLHttpRequest;
                    b.open("post", virtualPath + "/Work/Share", !0);
                    b.send(null);
                    fp.track(["Share", a])
                }
            }, f = e.extend(c, {
                desc: m.desc
            });
            return b ? c : f
        }
        window.wx && void 0 !== m.title && (wx.onMenuShareTimeline(b("TimeLine", !0)), wx.onMenuShareAppMessage(b("AppMessage")), wx.onMenuShareQQ(b("QQ")), wx.onMenuShareWeibo(b("Weibo")))
    }
    function h(b) {
        return c.element("div", {
            id: b,
            css: {
                display: "none"
            }
        }, ua.win32 ?
        null : document.body)
    }
    var e = zachModule["0"], c = zachModule["2"], k = zachModule["4"], g = c.ajax, m = window.shareData = {};
    fp.getWorkInfo = function() {
        return {
            Site: "chuye.cloud7.com.cn",
            ContentID: window.workDetailUrl.split("/").top,
            Url: m.url || location.href,
            Thumbnail: m.picture,
            Title: m.title,
            Text: m.desc
        }
    };
    fp.track = function(b) {
        window.cas && cas.trackEvent(b)
    };
    fp.sendForm = function(b, a) {
        g({
            url: virtualPath + "/Integra/SaveData",
            method: "post",
            requestHeader: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            data: e.encodeURIObject({
                formid: a.id,
                data: JSON.stringify(a.data)
            }),
            onLoad: b
        })
    };
    void 0 === window.highPerformance && (ua.ios && 7 <= ua.iosVersion || ua.win32 || /chuye/gi.test(navigator.userAgent)&&!ua.android) && (window.highPerformance=!0);
    window.contentSrc = function(b) {
        return ((contentPath || virtualPath) + "/Content/" + b).toLowerCase()
    };
    var q = window.shareImg = ua.MicroMessenger&&!window.wxConfig ? c.element("img", {
        css: {
            position: "absolute",
            width: "300px",
            left: "-300px",
            "z-index": - 2
        }
    }, document.body): null;
    if (ua.MicroMessenger && window.wxConfig) {
        var f = c.element("script",
        {
            src: "http://res.wx.qq.com/open/js/jweixin-1.0.0.js"
        });
        f.onload = function() {
            wx.config(e.extend(window.wxConfig, {
                debug: !1,
                jsApiList: ["onMenuShareTimeline", "onMenuShareAppMessage", "onMenuShareQQ", "onMenuShareWeibo", "getNetworkType"]
            }));
            wx.ready(function() {
                p();
                wx.getNetworkType({
                    success: function(b) {
                        ua.networkType = b.networkType
                    }
                })
            })
        };
        document.head.appendChild(f)
    }
    var l = {
        picture: h("ifeng_share_thumbnail"),
        title: h("ifeng_share_title"),
        desc: h("ifeng_share_description"),
        url: h("ifeng_share_url")
    };
    window.setShareData =
    function(b) {
        b.picture && q && (q.src = b.picture, q.onload = function() {
            q.isSmall = 300 > (q.naturalHeight || q.height) || 300 > (q.naturalWidth || q.width)
        });
        e.insert(m, b);
        e.loopObj(b, function(a, b) {
            l[a].innerHTML = b
        });
        b.title && (document.title = b.title);
        p()
    };
    window.onSystemPrepare = function(b, a) {
        g({
            url: workDetailUrl + "?" + e.encodeURIObject({
                isPreview: ua.chuye
            }),
            isJson: !0,
            onLoad: function(f) {
                if (1401 === f.code)
                    document.documentElement.classList.add("work-1401"), document.documentElement.classList.add("no-work");
                else if (200 !== f.code) {
                    a.remove();
                    document.documentElement.classList.add("work-404");
                    document.documentElement.classList.add("no-work");
                    return 
                }
                if (f = f.data) {
                    var g = function() {
                        b({
                            mode: f.mode || "push",
                            color: {
                                background: "FFFFFF" === f.backgroud.color ? "#FFFFFF": f.backgroud.color
                            },
                            pageSwitch: f.pageSwitch || {
                                animateId: "push"
                            },
                            music: f.music,
                            pages: p
                        })
                    };
                    setShareData({
                        picture: f.thumbnail,
                        title: f.title,
                        url: location.origin + location.pathname,
                        desc: f.description || ""
                    });
                    document.description = f.description || "";
                    document.thumbnail = f.thumbnail;
                    if (ua.chuye)
                        if (document.onFirstPageDataLoad)
                            document.onFirstPageDataLoad();
                        else 
                            var l = window.setInterval(function() {
                                document.onFirstPageDataLoad && (document.onFirstPageDataLoad(), window.clearInterval(l))
                            }, 1E3);
                    var h = f.userworks, m = h.works, p = f.pages, h = {
                        layout: {
                            label: "copyright",
                            author: f.author,
                            image: [f.headimgurl, m[0].thumbnail, m[1].thumbnail, m[2].thumbnail],
                            title: h.title,
                            works: m,
                            commentCount: 0
                        }
                    };
                    f.praise && p.push({
                        special: "comment"
                    });
                    if ("110005" === window.workDetailUrl.split("/").top) {
                        var q;
                        if (h = localStorage.getItem("razzies")) {
                            var y = fp.Loading(document.body);
                            RazziesPreviewPage(JSON.parse(h),
                            function(a) {
                                localStorage.removeItem("razzies");
                                y.remove();
                                window.body.appendChild(a)
                            })
                        } else (q = location.href.arg.razzies) 
                            ? c.ajax({
                                url: "http://chuye.cloud7.com.cn/beta/Event/GetCustomAwards",
                                method: "post",
                                requestHeader: {
                                    "Content-Type": "application/x-www-form-urlencoded"
                                },
                                data: e.encodeURIObject({
                                    razzies: q
                                }),
                                isJson: !0,
                                onLoad: function(a) {
                                    a = a.data;
                                    a.image = a.image || [];
                                    window.setRazziesShareData({
                                        text: a.text,
                                        id: parseInt(q, 10)
                                    });
                                    p.push({
                                        layout: e.extend(a, {
                                            label: "razzies-custom"
                                        })
                                    });
                                    p.push({
                                        special: "razzies"
                                    });
                                    g()
                                }
                            }) : (p.push({
                                special: "razzies"
                            }), g())
                        } else {
                        if (f.copyrightUrl)
                            window.copyrightUrl = f.copyrightUrl, p.push({
                                special: "copyright"
                            });
                        else if (f.copyright)
                            p.push(h);
                        else {
                            var h = function(a, b, f, e) {
                                return c.element("div", {
                                    css: {
                                        position: "absolute",
                                        left: c.css.px(a / 2<<0),
                                        top: c.css.px(b / 2<<0),
                                        width: c.css.px(f / 2<<0),
                                        height: c.css.px(e / 2<<0)
                                    }
                                }, A)
                            }, A = c.element("div.copy-tips", window.body);
                            k.onTap(h(80, 90, 204, 54), function() {
                                location.href = "http://chuye.cloud7.com.cn"
                            });
                            k.onTap(h(336, 90, 204, 54), fp.downloadFirstPage);
                            k.onTap(c.element("div.copy-icon", [c.element("div.enlarge")], window.body), function() {
                                document.body.classList.add("show-copy-tips")
                            })
                        }
                        g()
                    }
                }
                window.onDataLoad && window.onDataLoad(f)
            }
        })
    }
})();
(function() {
    function p(b, a) {
        var c = f(b, function() {
            c.remove();
            a()
        });
        return c
    }
    function h(b) {
        return (b = b && b.pageSwitch ? b.pageSwitch.animateId : null) ? switchAnimates["random" === b ? Math.random() * switchAnimates.length<<0: b] : b
    }
    var e = zachModule["0"].extend, c = zachModule["6"], k = zachModule["2"], g = k.element, m = k.css, q = k.removeNode, f = zachModule["4"].onTap, l = window.CanvasMode = window.CanvasMode || {};
    window.prepareSnapshot = function(b, a, c, f) {
        var e = window.body;
        b && e.appendChild(b);
        a && e.appendChild(a);
        q(c);
        m(e, f);
        return function() {
            q(b);
            q(a);
            e.appendChild(c);
            k.removeCss(e, f)
        }
    };
    l.click = function(b, a) {
        function n(b) {
            var c = x(b);
            f(c, function() {
                window.preventJump || c.runNextFrame && c.runNextFrame() || (a.startMusic && a.startMusic(), l(c, curPageIndex + 1));
                window.preventJump=!1
            });
            C && c.onEnterEnd && c.onEnterEnd(function() {
                C && k.toggleState(C, "hide", "show")
            });
            a.loadPage(window.curPageIndex + 1);
            return c
        }
        function l(f, g) {
            window.curPageIndex = getIndex(g);
            var k = fp.Loading();
            a.loadPage(curPageIndex, function() {
                function a() {
                    u.onEnd && u.onEnd();
                    r.remove();
                    y(m);
                    curPageIndex === pageNumber - 1 && document.body.classList.add("last-page")
                }
                var l = b[getIndex(g)];
                k.remove();
                var m = n(l), u = (f.nodeName || l.type ? switchAnimates.fade : h(l.pageData) || h(t) || switchAnimates.push)(PageLayer(f), PageLayer(m), w), r;
                A();
                document.body.classList.remove("show-copy-tips");
                document.body.classList.remove("last-page");
                if (u.onDraw) {
                    var x = c.Progress(u);
                    r = p(w, function() {
                        x.progress(1)
                    });
                    w.root = {
                        draw: function(b) {
                            u.onDraw(b, x.ratio());
                            x.isEnd() ? a() : w.dirty()
                        }
                    };
                    u.onStart && u.onStart()
                } else {
                    var C = c(e(u,
                    {
                        onEnd: function() {
                            v.appendChild(w);
                            a()
                        }
                    }), w.requestAnimate);
                    q(w);
                    r = p(v, function() {
                        C && C.progress(1)
                    })
                }
                w.dirty()
            })
        }
        var m = window.curPageIndex, t = b.data, v = window.body, w = a.canvas, x = a.makePage, y = a.setPage, A = a.removeCurrentPage, C = 0 === m ? g("div#tap-tips.hide.switch-tips", {
            children: [g("div.gray-circle"), g("div.red-circle")]
        }, v): null;
        window.inClickMode=!0;
        a.loadPage(m, function() {
            var c = b[m];
            a.startShow();
            p(v, function() {
                q(C);
                C = null
            });
            y(n(c))
        });
        fp.jumpPage = function(a) {
            A();
            y(n(b[a]))
        }
    }
})();
(function() {
    var p = zachModule["0"].loopArray, h = zachModule["3"], e = zachModule["6"], c = zachModule["2"], k = c.css, g = c.removeNode, m = c.toggleState, q = c.element, f = zachModule["4"];
    (window.CanvasMode = window.CanvasMode || {}).push = function(l, b) {
        function a() {
            b.loadPage(window.curPageIndex + 1);
            b.loadPage(window.curPageIndex - 1)
        }
        var n = window.curPageIndex, u = window.body, r = b.canvas, t = b.makePage, v = b.setPage, w = b.removeCurrentPage, x=!1, y;
        b.loadPage(n, function() {
            var A = 0 === n ? q("div#slide-tips.switch-tips", u): null, C=!1;
            q("div.slide-arrow.switch-tips",
            u);
            fp.LoadingNextPageTips(window.body);
            0 !== n && m(document.body, "can-not-push", "can-push");
            b.startShow();
            v(t(l[n]));
            a();
            f.onDragV(u, function(f) {
                function n() {
                    document.body.classList.remove("loading-next-page");
                    var b = 0 !== curPageIndex || C ? getPageInfo(curPageIndex - 1): null, e = getPageInfo(curPageIndex + 1), l=!f.directionY, h = k(u.appendChild(PageLayer(t(l ? e : b)))), m = l ? "up" : "down";
                    window.curPageIndex = getIndex(curPageIndex + (l ? 1 : - 1));
                    r.classList.add("cur-" + m);
                    h.classList.add("new-" + m);
                    var p = c.bindEvent(r, "webkitAnimationEnd",
                    function() {
                        p.remove();
                        a();
                        E(function() {
                            g(h);
                            r.classList.remove("cur-" + m);
                            h.classList.remove("new-" + m)
                        })
                    })
                }
                function q() {
                    A && (g(A), A = null);
                    x=!0;
                    w();
                    document.body.classList.remove("loading-next-page");
                    document.body.classList.remove("show-copy-tips");
                    document.body.classList.remove("last-page")
                }
                function E(b) {
                    var c = l[window.curPageIndex], f = null;
                    c.type || (r.root = f = t(c), r.dirty());
                    var e = r.requestAnimate(function() {
                        e.remove();
                        b && b();
                        v(f || t(c));
                        curPageIndex === pageNumber - 1 && (document.body.classList.add("last-page"),
                        C=!0);
                        a();
                        m(document.body, "can-not-push", "can-push");
                        x=!1
                    })
                }
                var F = 0 !== curPageIndex || C ? getPageInfo(curPageIndex - 1): null, I = getPageInfo(curPageIndex + 1);
                y && y.remove();
                y = null;
                x ||!0 === f.directionY && 0 === curPageIndex&&!C || (b.isPageLoad(curPageIndex + (f.directionY?-1 : 1)) ? (q(), b.startMusic && b.startMusic(), ua.iphone6 ? n() : function() {
                    function a(b, c) {
                        return b || c ? k(c || u.appendChild(PageLayer(t(b))), "z-index", 5 + Math.abs(b ? 1 : 0)) : null
                    }
                    function b(a) {
                        q = a;
                        a = Math.abs(q / clientHeight / 2);
                        k.transform(l, k.translate(0, q / 4, 0),
                        k.scale(1 - a));
                        n && k.transform(n, k.translate(0, q - clientHeight, 0));
                        m && k.transform(m, k.translate(0, q + clientHeight, 0))
                    }
                    var n = a(F), l = a(null, r), m = a(I), q = 0, x = m?-clientHeight : 0, v = n ? clientHeight : 0, w = 0;
                    b(0);
                    f.onDragMove(function(a) {
                        ++w;
                        b(h.range(a.distanceY, x, v))
                    });
                    f.onDragEnd(function(a) {
                        var f = q / clientHeight + (0 < a.speedY ? .5 : - .5), k = h.range(300 > a.duration || 3 > w ? 0 > a.distanceY?-1 : 1 : - .5 >= f?-1 : .5 >= f ? 0 : 1, x / clientHeight, v / clientHeight), u = q, t = k * clientHeight;
                        e({
                            duration: .4,
                            onAnimate: function(a) {
                                b(e.fromTo(u, t, a))
                            },
                            onEnd: function() {
                                window.curPageIndex =
                                getIndex(curPageIndex - k);
                                E(function() {
                                    p([n, l, m], g);
                                    c.removeCss(r, ["transform"])
                                })
                            }
                        })
                    })
                }()) : (document.body.classList.add("loading-next-page"), y = b.loadPage(curPageIndex + (f.directionY?-1 : 1), function() {
                    q();
                    setTimeout(n)
                })))
            })
        });
        fp.jumpPage = function(a) {
            w();
            v(t(l[a]))
        }
    }
})();
(function() {
    function p() {
        function l() {
            var a = v.Area(), b = [], m = [];
            a.x = a.y = 0;
            a.componentWidth = clientWidth;
            a.componentHeight = clientHeight;
            a.draw = function(c) {
                c.save();
                if (a.drawSelf) {
                    1 !== a.opacity && (c.globalAlpha = a.opacity);
                    0 !== a.transform && c.transform(a.transform);
                    if (1 !== a.scale || 0 !== a.rotate)
                        c.translate(a.componentWidth / 2<<0, a.componentHeight / 2<<0), c.scale(a.scale, a.scale), c.rotate(a.rotate), c.translate( - a.componentWidth / 2<<0, - a.componentHeight / 2<<0);
                    a.drawSelf(c)
                } else 
                    c.fillStyle = "#000000", c.fillRect(0,
                    0, clientWidth, clientHeight);
                m = [];
                e(b.sort(function(a, b) {
                    return a["z-index"] < b["z-index"]?-1 : a["z-index"] === b["z-index"] ? 0 : 1
                }), function(a) {
                    a.visible && (c.save(), c.translate(a.x, a.y), a.draw(c), m.push(a), c.restore())
                });
                c.restore()
            };
            a.areaFromPoint = function(a, b) {
                return e(n.reverse(m), function(c) {
                    if (f.inRect(a, b, c.x, c.y, c.componentWidth, c.componentHeight))
                        return c
                })
            };
            return k(a, {
                component: function(a) {
                    void 0 === a.content && (a = {
                        content: a
                    });
                    var f = a.content, e = l();
                    c(g(componentAttr(a), {
                        visible: !0
                    }), function(a,
                    b) {
                        var c = w[a];
                        h.defineAutoProperty(e, a, {
                            value: b,
                            set: function(a) {
                                e.dirty();
                                return c ? c(a) : a
                            }
                        })
                    });
                    b.push(e);
                    return k(e, {
                        componentWidth: f.width,
                        componentHeight: f.height,
                        drawSelf: f.draw,
                        transition: function(a) {
                            return p({
                                component: e,
                                delay: a.delay,
                                duration: a.duration,
                                timing: a.timing,
                                onEnd: a.onEnd,
                                progress: {
                                    0: a.start,
                                    100: a.end
                                }
                            })
                        },
                        infiniteAnimate: function(a) {
                            return p(g(a, {
                                component: e
                            }), !0)
                        },
                        remove: function() {
                            e.visible=!1;
                            e.dirty()
                        }
                    })
                }
            })
        }
        function p(f, n) {
            function l(n) {
                return b({
                    delay: f.delay,
                    duration: m,
                    timing: a.linear,
                    onStart: f.onStart,
                    onAnimate: function(a) {
                        if (f.progress) {
                            var n = m * a, g = null;
                            1 === a ? g = r.length - 1 : e(r, function(a, b) {
                                null === g && n < a.time && (g = b)
                            });
                            var l = r[g - 1], p = r[g], q = u((n - l.time) / (p.time - l.time));
                            c(l.style, function(a) {
                                k[a] = b.fromTo(l.style[a], p.style[a], q)
                            })
                        } else 
                            f.onAnimate(k, a, h);
                        t.dirty()
                    },
                    onEnd: n
                })
            }
            var k = f.component, h = f.baseStyle || componentAttr(k), m = f.duration, u = f.timing || a.ease, r = [], x;
            f.progress && (c(f.progress, function(a, b) {
                r.push({
                    time: m * (parseInt(a, 10) / 100),
                    style: g(h, b || {})
                })
            }), 0 !== r[0].time && r.unshift({
                time: 0,
                style: h
            }), r.top.time !== m && r.push({
                time: m,
                style: h
            }));
            if (n) {
                var v = l(function U() {
                    v = l(U)
                });
                F.regist(x = function() {
                    v.remove()
                })
            } else {
                var w = z.insert(q.Node(l(function() {
                    f.onEnd && f.onEnd();
                    z.remove(w)
                })), null);
                x = function() {
                    z.remove(w);
                    w.value.remove()
                }
            }
            return {
                remove: x
            }
        }
        function u(a) {
            e(a, function(a) {
                p(a)
            })
        }
        function r(a, b) {
            var c = a.length;
            0 === c ? b && b() : e(a, function(a) {
                a.onEnd = function() {
                    a.onEnter && a.onEnter();
                    0===--c && b && b()
                }
            })
        }
        var t = l(), z = q(), D = null, E = m(), F = m(), I = m(), L = null;
        return k(t, {
            recycle: function() {
                q.loop(z,
                function(a, b) {
                    a.remove();
                    z.remove(b)
                });
                F.trig()
            },
            registEnterAnimation: function(a) {
                0 !== a.length && e(a, function(a) {
                    e(a, function(a) {
                        a.baseStyle = componentAttr(a.component);
                        if (a.progress)
                            k(a.component, a.progress["0"] || {});
                        else 
                            a.onAnimate(a.component, 0, a.component)
                    });
                    L && r(L, function() {
                        u(a)
                    });
                    null === D && (D = a);
                    L = a
                })
            },
            runNextFrame: function() {
                var a=!1;
                q.loop(z, function(b) {
                    b.progress(1);
                    a=!0
                });
                return a
            },
            start: function() {
                I.trig();
                D ? (r(L, E.trig), u(D)) : E.trig()
            },
            onShow: I.regist,
            onRemove: F.regist,
            onEnterEnd: E.regist
        })
    }
    var h = zachModule["0"], e = h.loopArray, c = h.loopObj, k = h.insert, g = h.extend, m = h.Event, q = h.LinkedList, f = zachModule["3"], l = f.range, b = zachModule["6"], a = b.Timing, n = zachModule["7"], u = zachModule["2"], r = u.css, t = u.removeNode, v = zachModule["10"], w = {
        opacity: function(a) {
            return l(a, 0, 1)
        },
        scale: function(a) {
            return Math.max(a, 0)
        }
    };
    window.PageLayer = function(a) {
        if (a.nodeName)
            return a;
        var b = v.Layer();
        b.classList.add("layer");
        b.resize(clientWidth, clientHeight);
        b.draw(a.draw);
        return b
    };
    window.CanvasSystem = function(a, b) {
        var c =
        window.body, f = c.appendChild(r(v(), {
            position: "absolute",
            left: 0,
            top: 0,
            "z-index": 4
        })), e = null;
        f.resize(clientWidth, clientHeight);
        fp.resize = function() {
            f.resize(clientWidth, clientHeight)
        };
        k(b, {
            canvas: f,
            makePage: function(a) {
                if (a.type)
                    return a.create();
                var b = p();
                a.create(b);
                return b
            },
            setPage: function(a) {
                a.nodeName ? (c.appendChild(a), t(f)) : (!f.parentNode && c.appendChild(f), f.root !== a && (f.root = a), f.dirty());
                e = a;
                a.start()
            },
            removeCurrentPage: function() {
                f.root = null;
                e && e.nodeName && t(e);
                e && e.recycle()
            }
        });
        CanvasMode[a.data.mode](a,
        b)
    };
    fp.createPage = p
})();
(function(p) {
    function h() {
        function h(a) {
            var c, f;
            0 === a.transform ? c = [b.translate(a.x, a.y, 0), b.scale(Math.max(a.scale, .01)), b.rotateZ(a.rotate)] : (c = [b.translate(a.x, a.y, 0), b.matrix(a.transform), b.scale(Math.max(a.scale, .01)), b.rotateZ(a.rotate)], f = "left top 0");
            return g({
                transform: c.join(" "),
                "transform-origin": f,
                opacity: a.opacity
            }, void 0 === a["z-index"] ? {} : {
                "z-index" : a["z-index"]
            })
        }
        function p(a, b, c, f) {
            var g = "animate" + w++, u = b.timing ? q("cubic-bezier", b.timing.arg): "ease", r = "";
            k(b.progress, function(b, c) {
                r +=
                b + "% {" + l.cssRuleString(h(e.exclude(m(componentAttr(a), c), ["z-index"]))) + "}"
            });
            l.insertCSSRules("@-webkit-keyframes " + g, r);
            return [g, u, n(b.duration), n(c || 0), f].join(" ")
        }
        function t(f) {
            return g(f, {
                component: function(e) {
                    void 0 === e.content && (e = {
                        content: e
                    });
                    var k = e.content, r = f.appendChild(k.element()), v = componentAttr(e);
                    b(r, m(h(v), {
                        position: "absolute",
                        left: 0,
                        top: 0,
                        width: a(k.width),
                        height: a(k.height)
                    }));
                    c("x y opacity scale rotate z-index".split(" "), function(a) {
                        Object.defineProperty(r, a, {
                            get: function() {
                                return v[a]
                            },
                            set: function(c) {
                                v[a] = c;
                                b(r, h(v))
                            }
                        })
                    });
                    return t(g(r, {
                        componentWidth: k.width,
                        componentHeight: k.height,
                        transition: function(a) {
                            var c = a.timing ? q("cubic-bezier", a.timing.arg): "ease";
                            b(r, "transition", [c, n(a.duration), n(a.delay || 0)].join(" "));
                            b(r, b(h(m(v, a.end))));
                            var f = u(r, "webkitTransitionEnd", function() {
                                l.removeCss(r, "transition");
                                a.onEnd && a.onEnd(r);
                                f.remove()
                            });
                            return {
                                remove: function() {}
                            }
                        },
                        infiniteAnimate: function(a) {
                            b(r, "animation", p(r, a, 0, "infinite"))
                        },
                        remove: function() {
                            l.removeNode(r)
                        }
                    }))
                }
            })
        }
        var v =
        r("div.page.animation-prepare"), B = f(), z = f(), D = 0, E = [];
        v.x = v.y = 0;
        v.componentWidth = clientWidth;
        v.componentHeight = clientHeight;
        return g(t(v), {
            registEnterAnimation: function(a) {
                c(a, function(a) {
                    var b = 0;
                    c(a, function(a) {
                        var c = a.component, f = a.delay || 0;
                        c.enterAnimation = p(c, a, D + f, "backwards");
                        c.onEnter = a.onEnter;
                        b = Math.max(a.duration + f, b);
                        E.push(c)
                    });
                    D += b
                });
                c(E, function(a) {
                    b(a, "animation", a.enterAnimation);
                    if (a.onEnter)
                        var c = u(a, "webkitAnimationEnd", function() {
                            a.onEnter(a);
                            c.remove()
                        })
                })
            },
            start: function() {
                l.toggleState(v,
                "animation-prepare", "animation-run");
                B.trig()
            },
            onShow: B.regist,
            recycle: z.trig,
            onRemove: z.regist
        })
    }
    var e = zachModule["0"], c = e.loopArray, k = e.loopObj, g = e.insert, m = e.extend, q = e.tupleString, f = e.Event, l = zachModule["2"], b = l.css, a = b.px, n = b.s, u = l.bindEvent, r = l.element, t = l.removeNode, v = zachModule["4"], w = 0;
    window.DOMSystem = function(a, b) {
        function c() {
            b.loadPage(window.curPageIndex + 1);
            b.loadPage(window.curPageIndex - 1)
        }
        function f(b) {
            var c;
            b = getIndex(b);
            if ((c = a[b]) && c.isLoad)
                return c = c.special ? c.create() : c.create(h()),
                window.curPageIndex = b, e.appendChild(c), b === pageNumber - 1 && (q=!0, document.body.classList.add("last-page")), n = c, !0
        }
        document.documentElement.classList.add("dom-mode");
        var e = window.body, n = null, g = window.curPageIndex, k, m = r("div.slide-arrow.switch-tips", document.body), q=!1;
        p.LoadingNextPageTips(window.body);
        b.loadPage(g, function() {
            b.startShow();
            f(g);
            n.start();
            var a = null;
            0 === g && (a = r("div#slide-tips.switch-tips", e), document.body.classList.add("first"));
            c();
            v.onDragV(e, function(e) {
                function g() {
                    function a(b,
                    e) {
                        var g = n;
                        document.body.classList.remove("show-copy-tips");
                        document.body.classList.remove("last-page");
                        m.classList.add("can-push");
                        if (f(curPageIndex + b)) {
                            p.lock(!0);
                            g && g.recycle();
                            g.classList.add("cur-" + e);
                            n.classList.add("new-" + e);
                            var k = l.bindEvent(n, "webkitAnimationEnd", function() {
                                c();
                                k.remove();
                                g.classList.remove("cur-" + e);
                                n.classList.remove("new-" + e);
                                t(g);
                                n.start();
                                p.lock(!1)
                            })
                        }
                    }
                    document.body.classList.remove("loading-next-page");
                    e.directionY ? (0 !== curPageIndex || q) && a( - 1, "down") : a(1, "up")
                }
                a && (t(a),
                a = null, document.body.classList.remove("first"));
                k && k.remove();
                k = null;
                if (!0 !== e.directionY || 0 !== curPageIndex || q)
                    b.isPageLoad(curPageIndex + (e.directionY?-1 : 1)) ? g() : (document.body.classList.add("loading-next-page"), k = b.loadPage(curPageIndex + (e.directionY?-1 : 1), function() {
                        g()
                    })), b.startMusic && b.startMusic()
            })
        });
        p.jumpPage = function(a) {
            n.recycle();
            t(n);
            f(a);
            n.start()
        }
    };
    window.DOMPage = h
})(window.fp);
(function() {
    function p(a, b) {
        return a.replace(/\[([^\]]*)]/g, function(a) {
            return RegExp.$1 in G ? G[RegExp.$1].element(b).outerHTML : a
        })
    }
    function h(a) {
        var b = void 0;
        return {
            value: function(c) {
                if (void 0 === c) {
                    var f = [];
                    l.loop(a, function(a) {
                        a !== b && f.push(a)
                    });
                    return b = f[Math.random() * f.length<<0]
                }
                b = c
            }
        }
    }
    function e() {
        function c() {
            t.switchClass(e, "" === g.value, "disabled");
            x(g, "height", 0);
            x(g, "height", g.scrollHeight - 6 + "px")
        }
        var f = w("div.comment-input-bar.normal", [w("form.text-area.need-default", [w("div.text-area-wrapper",
        [w("textarea", {
            placeholder: "\u8bc4\u8bba"
        })]), w("div.send-button", "\u53d1\u9001"), w("div.small-icon.icon-keyboard", [w("div")]), w("div.small-icon.icon-face", [w("div")])]), w("div.face-list", [w("ul"), w("div.red-point", [w("div.wrapper")])])]), e = f.querySelector(".send-button"), g = f.querySelector("textarea"), k = f.querySelector("ul"), h = null, m = null, p = l.Event();
        b(G, function(a, b) {
            0 === b%20 && (h = w("li.face-list-page", [w("div.content")], k));
            w("div.face-list-item", [a.element(30), w("div.face-list-item-tips.small-icon",
            [a.element(40), w("div.caption", a.name)])], h.querySelector(".content")).face = a
        });
        b(f.querySelectorAll(".face-list-page"), function(a) {
            u(w("div.delete-face.icon", a.querySelector(".content")), function() {
                /\[([^\]]*)]$/.test(g.value) && (g.value = g.value.substring(0, g.value.length - (RegExp.$1.length + 2)));
                c()
            })
        });
        n.onPointerUp(f.querySelector(".icon-keyboard"), function(a) {
            a.preventDefault();
            f.classList.remove("face-select");
            g.focus()
        });
        t.bindEvent(g, "focus", function() {
            f.classList.remove("face-select")
        });
        r(f.querySelector(".icon-face"),
        function(a) {
            a.preventDefault();
            g.blur();
            f.classList.add("face-select");
            null === m && (m = A(k.parentNode), C.doRedPoints(m), m.display(0), r(m, function(a) {
                function b(a, c) {
                    a.preventDefault();
                    var e = document.elementFromPoint(a.zClientX, a.zClientY), e = t.findAncestor(e, function(a) {
                        return a.classList.contains("face-list-item")
                    });
                    !1 !== c && (null !== f && f.classList.remove("active"), null !== e && e.classList.add("active"));
                    f = e
                }
                var f = null, e = setTimeout(function() {
                    m.disable(!0);
                    b(a);
                    a.onMove(b)
                }, 200), n = m.onSlideStart(function() {
                    clearTimeout(e);
                    e = null
                }), l = a;
                a.onMove(function(a) {
                    l = a
                });
                a.onUp(function() {
                    e && (clearTimeout(e), b(l, !1));
                    f && (f.classList.remove("active"), g.value = g.value + "[" + f.face.name + "]", c());
                    m.disable(!1);
                    n.remove()
                })
            }))
        });
        u(e, function() {
            f.classList.contains(".empty") || (f.classList.remove("face-select"), p.trig(g.value))
        });
        t.bindEvent(g, "input", c);
        t.onInsert(f, c);
        return a(f, {
            onCommit: p.regist,
            value: function(a) {
                if (void 0 !== a)
                    g.value = a;
                else 
                    return g.value
            },
            focus: function() {
                g.focus()
            },
            blur: function() {
                g.blur()
            },
            onFocus: function(a) {
                return t.bindEvent(g,
                "focus", a)
            },
            onBlur: function(a) {
                return t.bindEvent(g, "blur", a)
            }
        })
    }
    function c(a, b, c) {
        return I(I(E( - c), F(b)), a)
    }
    function k(a, b) {
        var c = Math.sqrt(a * a + b * b);
        return [a / c, b / c]
    }
    function g(a) {
        var b = a[0], c = a[1], f = a[2], e = Math.sqrt(b * b + c * c + f * f);
        return {
            lat: Math.acos(c / e) - Math.PI / 2,
            lng: 0 <= a[2] ? Math.atan(b / f): Math.atan(b / f) + Math.PI
        }
    }
    function m(a, b, c, f) {
        x.transform(a, x.translate.apply(null, a.position = b), x.rotateY(a.rotateY = f), x.rotateX(a.rotateX = c))
    }
    function q(a, b) {
        if (b || window.inClickMode)
            return r(a.fragmentsParent,
            function(b) {
                b.preventDefault();
                0 < a.fragments.length && b.stopPropagation()
            })
    }
    function f(c, f) {
        function e() {
            var a = 0;
            E = t.requestAnimate(function() {
                b(A, function(a) {
                    a.tips && a.tips.adjust()
                });
                K.onAnimate && K.onAnimate(a++)
            })
        }
        function g() {
            K.onAnimateStop && K.onAnimateStop();
            E && E.remove()
        }
        function k(a, b) {
            var c = w("div.item"), f = new Image;
            f.onload = function() {
                t.onInsert(f, function() {
                    x(f, C.getImageCoverStyle(f, 30, 30))
                });
                c.appendChild(f);
                c.comment = a;
                b && b()
            };
            f.src = a.avatar || staticImgSrc("firstPage-defaultAvatar.png");
            c.showTips = function(a) {
                if (a ||!F)
                    return c.tips && v(c.tips), q(c, !0), ++D, !0
            };
            u(c, function() {
                if (!K.canTipsShow || K.canTipsShow(c)) {
                    I();
                    g();
                    var a = q(c), b = n.onPointerUp(document, function() {
                        b.remove();
                        a.remove();
                        e()
                    }, !0);
                    a.adjust()
                }
            });
            return c
        }
        function q(b, c) {
            var f = b.position, e = b.comment, g = w("div.tips", {
                children: [w("div.name.ellipsis", e.userName), w("div.date", C.dateString(e.date, "M%-D% h%:m%")), w("div.text", p(e.text, 12))]
            }, z), e = w("div.triangle", g), n = Math.min(f[0] + 40, (clientWidth - g.offsetWidth) / 2 - 28), k = n - f[0],
            h =- g.offsetHeight / 2 - 25, m = 1;
            x(g, {
                "margin-top": y( - g.offsetHeight / 2),
                "-webkit-transform-origin": [y(f[0] + 40 - n + 15), "100%", 0].join(" "),
                visibility: "hidden"
            });
            x(e, "left", y(f[0] + 40 - n + 15));
            c && B({
                start: .01,
                duration: .2,
                onAnimate: function(a) {
                    m = a
                }
            });
            g.fragment = b;
            b.tips = g;
            return a(g, {
                adjust: function() {
                    f = b.position;
                    x(g, "visibility", "visible");
                    x.transform(g, x.translate(f[0] + k, f[1] + h, f[2]), x.scale(m))
                },
                remove: function(a) {
                    --D;
                    l.request(function(b) {
                        a ? B({
                            start: 1,
                            end: .01,
                            duration: .2,
                            onAnimate: function(a) {
                                m = a
                            },
                            onEnd: b
                        }) :
                        b()
                    }, function() {
                        b.tips = null;
                        v(g)
                    })
                }
            })
        }
        var r = w("div.fragments-parent", c), z = w("div.tips-parent", c), A = [], F=!1, D = 0, E = null, K = null, S = h(H.length), I = function() {
            var a = null;
            return function(c) {
                b(A, function(a) {
                    a.tips && a.tips.remove()
                });
                c && (F=!0, a && clearTimeout(a), a = setTimeout(function() {
                    F=!1;
                    a = null
                }, c))
            }
        }();
        b(f, function(a) {
            a = k(a);
            r.appendChild(a);
            A.push(a)
        });
        var G = {
            newComment: function(a, c) {
                var f = k(a, function() {
                    c && c();
                    g();
                    fp.lock(!0);
                    x.transform(f, x.scale(.01));
                    r.appendChild(f);
                    A.length > M && v(A.pop());
                    A.unshift(f);
                    K && K.remove();
                    K = H[S.value()](G);
                    B({
                        duration: .5,
                        onAnimate: function(a) {
                            b(A, function(b) {
                                var c = b.prePosition, e = b.position;
                                if (b !== f) {
                                    var g = function(b) {
                                        return B.fromTo(e[b], c[b], a)
                                    };
                                    m(b, [g(0), g(1), g(2)], B.fromTo(b.rotateX, b.preRotateX, a), B.fromTo(b.rotateY, b.preRotateY, a))
                                } else 
                                    x.transform(f, x.translate(0, 0, c[2]), x.scale(a))
                            })
                        },
                        onEnd: function() {
                            fp.lock(!1);
                            K.start();
                            e();
                            f.showTips(!0)
                        }
                    })
                })
            },
            fragmentsParent: r,
            fragments: A,
            setSize: function(a, c) {
                b([r, z], function(b) {
                    x(b, {
                        height: y(c),
                        width: y(a),
                        "margin-left": y( - a /
                        2<<0),
                        "margin-top": y( - c / 2<<0)
                    })
                })
            },
            tipsNum: function() {
                return D
            },
            runAnimate: e,
            stopAnimate: g,
            removeTips: I
        }, K = H[S.value()](G);
        K.start();
        return a(c, G)
    }
    var l = zachModule["0"], b = l.loopArray, a = l.insert, n = zachModule["4"], u = n.onTap, r = n.onPointerDown, t = zachModule["2"], v = t.removeNode, w = t.element, x = t.css, y = x.px, A = zachModule["11"], C = zachModule["5"], B = zachModule["6"], z = zachModule["12"], D = z.matrix.unit, E = z.matrix.rotateX, F = z.matrix.rotateY, I = z.combine, L = z.transform, N, M, Q, G = [];
    b("\u5fae\u7b11 \u6487\u5634 \u8272 \u53d1\u5446 \u5f97\u610f \u6d41\u6cea \u5bb3\u7f9e \u95ed\u5634 \u7761 \u5927\u54ed \u5c34\u5c2c \u53d1\u6012 \u8c03\u76ae \u5472\u7259 \u60ca\u8bb6 \u96be\u8fc7 \u9177 \u51b7\u6c57 \u6293\u72c2 \u5410 \u5077\u7b11 \u6109\u5feb \u767d\u773c \u50b2\u6162 \u9965\u997f \u56f0 \u60ca\u6050 \u6d41\u6c57 \u61a8\u7b11 \u60a0\u95f2 \u594b\u6597 \u5492\u9a82 \u7591\u95ee \u5618 \u6655 \u75af\u4e86 \u8870 \u9ab7\u9ac5 \u6572\u6253 \u518d\u89c1 \u64e6\u6c57 \u62a0\u9f3b \u9f13\u638c \u7cd7\u5927\u4e86 \u574f\u7b11 \u5de6\u54fc\u54fc \u53f3\u54fc\u54fc \u54c8\u6b20 \u9119\u89c6 \u59d4\u5c48 \u5feb\u54ed\u4e86 \u9634\u9669 \u4eb2\u4eb2 \u5413 \u53ef\u601c \u83dc\u5200 \u897f\u74dc \u5564\u9152 \u7bee\u7403 \u4e52\u4e53 \u5496\u5561 \u996d \u732a\u5934 \u73ab\u7470 \u51cb\u8c22 \u5634\u5507 \u7231\u5fc3 \u5fc3\u788e \u86cb\u7cd5 \u95ea\u7535 \u70b8\u5f39 \u5200 \u8db3\u7403 \u74e2\u866b \u4fbf\u4fbf \u6708\u4eae \u592a\u9633 \u793c\u7269 \u62e5\u62b1 \u5f3a \u5f31 \u63e1\u624b \u80dc\u5229 \u62b1\u62f3 \u52fe\u5f15 \u62f3\u5934 \u5dee\u52b2 \u7231\u4f60 NO OK \u7231\u60c5 \u98de\u543b \u8df3\u8df3 \u53d1\u6296 \u6004\u706b \u8f6c\u5708 \u78d5\u5934 \u56de\u5934 \u8df3\u7ef3 \u6295\u964d".split(" "),
    function(a, b) {
        G[a] = G[b] = {
            name: a,
            element: function(a) {
                return w("div.face-icon", {
                    css: {
                        "background-position": - b * a + "px 0",
                        "background-size": "auto " + a + "px",
                        width: y(a),
                        height: y(a)
                    }
                })
            }
        }
    });
    ua.win32 ? (N = 126, M = 60) : ua.iphone6 ? (N = 136, M = 40) : ua.iphone5 ? (N = 126, M = 30) : ua.iphone4 ? (N = 100, M = 20) : (N = 120, M = 25);
    var H = [function(a) {
        function f(a) {
            r = a;
            b(e, function(a) {
                var b = a.position = L(r, a.prePosition), c = g(b);
                m(a, b, c.lat, c.lng)
            })
        }
        var e = a.fragments, l = a.fragmentsParent, h = N, p = Q[Math.max(e.length, 4)], r = null, u = k(Math.random(), Math.random()),
        t = .003;
        a.setSize(2 * h, 2 * h);
        b(e, function(a, b) {
            var c = a.prePosition = [p[3 * b] * h, p[3 * b + 1] * h, p[3 * b + 2] * h, 1], c = g(c);
            a.isIn=!1;
            a.preRotateX = c.lat;
            a.preRotateY = c.lng;
            a.preRotateZ = 0
        });
        var v = n.onDrag(l, function(b) {
            var e = r;
            fp.lock(!0, l);
            l.classList.add("lock");
            a.stopAnimate();
            a.removeTips();
            b.onDragMove(function(a) {
                f(c(e, a.distanceX / 200, a.distanceY / 200))
            });
            b.onDragEnd(function(b) {
                var c = b.speedX;
                b = b.speedY;
                var f = Math.sqrt(c * c + b * b);
                fp.lock(!1, l);
                t = f / 10;
                0 !== t && (u = [c / f, b / f]);
                a.runAnimate()
            })
        }), x = q(a, !0);
        return {
            start: function() {
                f(D())
            },
            canTipsShow: function(a) {
                return a.position[2] > .2 * h
            },
            onAnimate: function(g) {
                var n = a.tipsNum();
                t += (.003 - t) / 20;
                f(c(r, u[0] * t, u[1] * t));
                if (20<++g && .001 > Math.abs(t - .003)
                    ) {
                    var l=!1;
                    b(e, function(a) {
                        if (!a.isIn && a.position[2] > .85 * h) {
                            var b = Math.random();
                            a.isIn=!0;
                            !l && a.comment && (0 === n && .9 > b || 1 === n && .4 > b || 2 > n && .2 > b) && (l = a.showTips())
                        } else 
                            a.isIn && a.position[2] < .85 * h && (a.isIn=!1, a.tips && a.tips.remove(!0))
                    })
                }
            },
            onAnimateStop: function() {
                t = .003
            },
            remove: function() {
                v.remove();
                x && x.remove()
            }
        }
    }, function(a) {
        function f(a) {
            h =
            a;
            b(e, function(a) {
                var b = a.position = L(h, a.prePosition), c = Math.atan(b[0] / b[2]);
                m(a, b, 0, c);
                a.tips && a.tips.adjust()
            })
        }
        var e = a.fragments, g = a.fragmentsParent, l = Math.min((clientHeight - 60) / e.length - 3<<0, 30), k = Math.max(10 / e.length, .4), h = null, p=!0, r = .003;
        a.setSize(240, clientHeight);
        b(e, function(a, b) {
            b = b%2 ? (b + 1) / 2 : - b / 2;
            var c = a.prePosition = [120 * Math.sin(b * k), b * l, 120 * Math.cos(b * k), 1];
            a.isIn=!1;
            a.preRotateX = 0;
            a.preRotateY = Math.atan(c[0] / c[2]);
            a.preRotateZ = 0
        });
        var u = n.onDragH(g, function(b) {
            var e = h;
            fp.lock(!0, g);
            g.classList.add("lock");
            a.stopAnimate();
            a.removeTips();
            b.onDragMove(function(a) {
                f(c(e, a.distanceX / 200, 0))
            });
            b.onDragEnd(function(b) {
                b = b.speedX;
                fp.lock(!1, g);
                r = Math.abs(b) / 10;
                p = 0 < b;
                a.runAnimate()
            })
        }), t = q(a);
        return {
            start: function() {
                f(D())
            },
            canTipsShow: function(a) {
                return 24 < a.position[2]
            },
            onAnimate: function(a) {
                var g=!1;
                r += (.003 - r) / 20;
                f(c(h, (p ? 1 : - 1) * r, 0));
                20<++a && .001 > Math.abs(r - .003) && b(e, function(a) {
                    !a.isIn && 96 < a.position[2] ? (a.isIn=!0, !g && a.comment && .25 > Math.random() && (g = a.showTips())) : a.isIn && 96 >
                    a.position[2] && (a.isIn=!1, a.tips && a.tips.remove(!0))
                })
            },
            onAnimateStop: function() {
                r = .003
            },
            remove: function() {
                u.remove();
                t && t.remove()
            }
        }
    }
    ];
    registSpecialPage("comment", function(a) {
        var b;
        l.procedure([function(a) {
            t.ajax({
                url: contentSrc("sphere.json"),
                isJson: !0,
                onLoad: function(b) {
                    Q = b;
                    a()
                }
            })
        }, function(a) {
            fp.getCommentSummary(a, fp.getWorkInfo())
        }, function(a, c) {
            b = c;
            fp.getComments(a, {
                contentSummaryId: b
            })
        }, function(c) {
            var g = f(w("div.comment-wall"), c.slice(0, M));
            0 === g.fragments.length && g.classList.add("empty");
            a({
                create: function(a) {
                    function c(e, n) {
                        var k, h;
                        l.procedure([function(a) {
                            fp.getUserInfo(a)
                        }, function(c, g) {
                            k = g;
                            h = fp.Loading(a, 300);
                            f.blur();
                            f.classList.add("lock");
                            fp.saveComment(c, {
                                text: e,
                                contentSummaryId: b
                            })
                        }, function() {
                            g.newComment({
                                avatar: k.HeadPhoto,
                                userName: k.NickName,
                                date: new Date,
                                text: e
                            }, function() {
                                h.remove();
                                f.classList.remove("lock");
                                f.value("");
                                g.removeTips(2E3);
                                g.classList.remove("empty")
                            });
                            n && n()
                        }
                        ])
                    }
                    var f = a.appendChild(e()), n = fp.getSessionData("comment"), k;
                    f.onFocus(function() {
                        k = r(g, f.blur)
                    });
                    f.onBlur(function() {
                        k.remove();
                        k = null
                    });
                    n && fp.isLogIn() && c(n, function() {
                        fp.alert("\u8bc4\u8bba\u53d1\u8868\u6210\u529f")
                    });
                    f.onCommit(function(a) {
                        fp.isLogIn() ? c(a) : fp.canNotLogin ? fp.canNotLogin() : (sessionStorage.setItem("comment", a), sessionStorage.setItem("lastPageIndex", curPageIndex), fp.logIn())
                    });
                    a.classList.add("comment-page");
                    a.appendChild(g);
                    a.onShow(g.runAnimate);
                    a.onRemove(function() {
                        g.stopAnimate();
                        g.removeTips()
                    })
                }
            })
        }
        ])
    })
})();
(function() {
    function p(c) {
        return c / 180 * Math.PI
    }
    var h = zachModule["6"], e = zachModule["9"];
    registEnterAnimate({
        flyInto: {
            progress: function(c, e) {
                var g = c.x, h = c.y;
                switch (e) {
                case "left":
                    g =- c.componentWidth;
                    break;
                case "right":
                    g = clientWidth;
                    break;
                case "top":
                    h =- c.componentHeight;
                    break;
                case "bottom":
                    h = clientHeight
                }
                return {
                    0: {
                        x: g,
                        y: h
                    }
                }
            }
        },
        emerge: {
            progress: function(c, e) {
                var g = 0, h = 0;
                switch (e) {
                case "left":
                    g =- 20;
                    break;
                case "right":
                    g = 20;
                    break;
                case "top":
                    h =- 20;
                    break;
                default:
                    h = 20
                }
                return {
                    0: {
                        x: c.x + g,
                        y: c.y + h,
                        opacity: 0
                    }
                }
            }
        },
        scale: {
            progress: function() {
                return {
                    0: {
                        scale: 0
                    }
                }
            }
        },
        shrink: {
            duration: .6,
            timing: h.Bezier(.52, .21, .8, .51),
            progress: function() {
                return {
                    0: {
                        scale: 5,
                        opacity: 0
                    }
                }
            }
        },
        fadeIn: {
            progress: function() {
                return {
                    0: {
                        opacity: 0
                    }
                }
            }
        },
        circleRound: {
            progress: function() {
                return {
                    0: {
                        scale: 0,
                        opacity: 0,
                        rotate: 2.5 * Math.PI
                    }
                }
            },
            duration: .6
        },
        roundFromFarAndNear: {
            progress: function() {
                return {
                    0: {
                        scale: 0,
                        opacity: 0,
                        rotate: .65 * Math.PI
                    }
                }
            }
        },
        fallDownAndShake: {
            timing: h.Timing.easeOut,
            duration: .7,
            progress: function(c) {
                var e = c.rotate;
                return {
                    0: {
                        y: 2*-c.componentHeight,
                        rotate: e + p( - 15)
                    },
                    40: {
                        rotate: e + p( - 15)
                    },
                    45: {
                        rotate: e + p(13)
                    },
                    52: {
                        rotate: e + p( - 8)
                    },
                    62: {
                        rotate: e + p(5)
                    },
                    74: {
                        rotate: e + p( - 3)
                    },
                    87: {
                        rotate: e + p(1)
                    }
                }
            }
        }
    });
    registEnterAnimate({
        curveUp: {
            onAnimate: function(c, e, g) {
                var h = 3 * (1 - e);
                c.scale = .4 * (1 - e) + 1;
                c.opacity = e;
                c.x = g.x + 100 * h * Math.cos(h);
                c.y = g.y + 100 * h * Math.sin(h)
            },
            duration: 1,
            fallback: enterAnimate.circleRound
        }
    });
    registEnterAnimate({
        flash: {
            timing: h.Timing.linear,
            duration: 1,
            progress: function() {
                return {
                    "0 50 100": {
                        opacity: 1
                    },
                    "25 75": {
                        opacity: 0
                    }
                }
            }
        },
        shake: {
            timing: h.Timing.linear,
            duration: 1,
            progress: function(c) {
                return {
                    "10 30 50 70 90": {
                        x: c.x - 10
                    },
                    "20 40 60 80": {
                        x: c.x + 10
                    }
                }
            }
        },
        swing: {
            duration: 1,
            progress: function(c) {
                function h(g) {
                    return e.transformOrigin(e.matrix.rotate(c.rotate + p(g)), c.componentWidth / 2<<0, 0)
                }
                return {
                    "0 100": {
                        transform: h(0)
                    },
                    20: {
                        transform: h(15)
                    },
                    40: {
                        transform: h( - 10)
                    },
                    60: {
                        transform: h(5)
                    },
                    80: {
                        transform: h( - 5)
                    }
                }
            }
        },
        tada: {
            timing: h.Timing.linear,
            duration: 1,
            progress: function(c) {
                return {
                    "10 20": {
                        scale: .9,
                        rotate: c.rotate + p( - 3)
                    },
                    "30 50 70 90": {
                        scale: 1.1,
                        rotate: c.rotate + p(3)
                    },
                    "40 60 80": {
                        scale: 1.1,
                        rotate: c.rotate + p( - 3)
                    }
                }
            }
        },
        wobble: {
            timing: h.Timing.linear,
            duration: .8,
            progress: function(c) {
                var e = c.componentWidth;
                return {
                    15: {
                        x: c.x +- .25 * e,
                        rotate: c.rotate + p( - 5)
                    },
                    30: {
                        x: c.x + .2 * e,
                        rotate: c.rotate + p(3)
                    },
                    45: {
                        x: c.x +- .15 * e,
                        rotate: c.rotate + p( - 3)
                    },
                    60: {
                        x: c.x + .1 * e,
                        rotate: c.rotate + p(2)
                    },
                    75: {
                        x: c.x +- .05 * e,
                        rotate: c.rotate + p( - 1)
                    }
                }
            }
        },
        bounceIn: {
            timing: h.Bezier(.215, .61, .355, 1),
            duration: .75,
            progress: function() {
                return {
                    0: {
                        opacity: 0,
                        scale: .3
                    },
                    20: {
                        scale: 1.1
                    },
                    40: {
                        scale: .9
                    },
                    60: {
                        scale: 1.03
                    },
                    80: {
                        scale: .97
                    }
                }
            }
        },
        bounceFlying: {
            timing: h.Bezier(.215, .61, .355, 1),
            duration: .75,
            progress: function(c, e) {
                var g = c.x, h = c.y, p = 0, f = 0;
                switch (e) {
                case "left":
                    p = 1;
                    break;
                case "right":
                    p =- 1;
                    break;
                case "top":
                    f = 1;
                    break;
                case "bottom":
                    f =- 1
                }
                return {
                    0: {
                        x: - 3E3 * p,
                        y: - 3E3 * f
                    },
                    60: {
                        x: g + 25 * p,
                        y: h + 25 * f
                    },
                    75: {
                        x: g +- 10 * p,
                        y: h +- 10 * f
                    },
                    90: {
                        x: g + 5 * p,
                        y: h + 5 * f
                    }
                }
            }
        },
        rubberBand: {
            duration: 1,
            progress: function(c) {
                function h(g, k) {
                    return e.transformOrigin(e.matrix.scale(g, k), c.componentWidth / 2<<0, c.componentHeight / 2<<0)
                }
                return {
                    "0 100": {
                        transform: h(1, 1)
                    },
                    30: {
                        transform: h(1.25,
                        .75)
                    },
                    40: {
                        transform: h(.75, 1.25)
                    },
                    50: {
                        transform: h(1.15, .85)
                    },
                    65: {
                        transform: h(.95, 1.05)
                    },
                    75: {
                        transform: h(1.05, .95)
                    }
                }
            }
        }
    })
})();
(function() {
    var p = zachModule["2"], h = p.element, e = p.css, c = e.px, k = zachModule["0"], g = k.loopArray, m = zachModule["4"], q = zachModule["6"], f = zachModule["3"], l = zachModule["8"], b = zachModule["5"];
    window.Content = window.Content || {};
    window.Component = window.Component || {};
    Content.Custom = function(a, b, c) {
        return isImageRect(a) ? Content.Rect({
            color: a,
            width: b,
            height: c
        }) : Content.Image(a, b, c)
    };
    Content.Image = function(a, b, f) {
        var g, l;
        void 0 === f ? (g = a.halfWidth, l = a.halfHeight) : (g = b, l = f);
        void 0 !== b && void 0 === f && (g*=b, l*=b);
        e(a,
        {
            position: "absolute",
            width: c(g),
            height: c(l),
            left: 0,
            top: 0
        });
        return {
            width: g,
            height: l,
            element: function() {
                return a.hasChild || ua.ios&&!ua.win32 || ua.safari&&!ua.android ? h("div", [a.cloneNode(!0)]) : a.cloneNode(!0)
            },
            draw: function(b) {
                b.drawImage(a, 0, 0, g, l)
            }
        }
    };
    Content.ImageCover = function(a, c, f) {
        var g = l.layImageByFrame(a, {
            width: c,
            height: f,
            size: l.Size.cover,
            align: [.5, .5]
        });
        return {
            width: c,
            height: f,
            element: function() {
                return h("div", {
                    css: {
                        overflow: "hidden"
                    },
                    children: e(a.cloneNode(!1), b.getImageCoverStyle(a, c, f))
                })
            },
            draw: function(a) {
                l.drawImageLayout(a, g)
            }
        }
    };
    Content.Border = function(a, b) {
        var f = b.width || 0, g = b.color || "transparent", l = b.radius || 0, h = a.width, k = a.height;
        return {
            width: h + f,
            height: k + f,
            element: function() {
                var b = a.element(), n = b;
                e(b, {
                    overflow: "hidden",
                    "box-sizing": "border-box",
                    border: ["solid", c(f), g].join(" "),
                    "border-radius": c(l)
                });
                ua.android && b.querySelector("img") && (n = p.element("div", [b]), e.size(b, h + f, k + f));
                return n
            },
            draw: function(b) {
                b.save();
                l && (b.beginPath(), b.moveTo(l, 0), b.lineTo(h - l, 0), b.arcTo(h, 0, h,
                l, l), b.lineTo(h, k - l), b.arcTo(h, k, h - l, k, l), b.lineTo(l, k), b.arcTo(0, k, 0, k - l, l), b.lineTo(0, l), b.arcTo(0, 0, l, 0, l), b.clip());
                b.save();
                b.translate(f, f);
                a.draw(b);
                b.restore();
                f && (b.fillStyle = g, b.fillRect(0, 0, h, f), b.fillRect(0, 0, f, k), b.fillRect(h, 0, f, k + f), b.fillRect(0, k, h + f, f));
                b.restore()
            }
        }
    };
    Content.FrameImage = function(a) {
        var c = a.img, f = a.frame, g = a.frameWidth<<0, k = a.frameHeight<<0, m = a.imgX<<0, p = a.imgY<<0, q = a.imgWidth + 1<<0, y = a.imgHeight + 1<<0, A = l.layImageByFrame(c, {
            width: q,
            height: y,
            size: l.Size.cover,
            align: [.5,
            .5]
        });
        return {
            width: g,
            height: k,
            element: function() {
                return h("div", {
                    css: {
                        overflow: "hidden"
                    },
                    children: [h("div", {
                        css: {
                            position: "absolute",
                            overflow: "hidden",
                            left: e.px(m),
                            top: e.px(p),
                            width: e.px(q),
                            height: e.px(y)
                        },
                        children: e(c.cloneNode(!1), b.getImageCoverStyle(c, q, y))
                    }), e(f.cloneNode(!1), {
                        position: "absolute",
                        left: 0,
                        right: 0,
                        top: 0,
                        bottom: 0,
                        width: e.px(g),
                        height: e.px(k),
                        "z-index": 1
                    })]
                })
            },
            draw: function(a) {
                a.save();
                a.translate(m, p);
                l.drawImageLayout(a, A);
                a.restore();
                a.drawImage(f, 0, 0, g, k)
            }
        }
    };
    Component.BackgroundImage =
    function(a, b, c) {
        return a.component({
            content: Content.ImageCover(b, clientWidth, clientHeight),
            x: 0,
            y: 0,
            "z-index": c || 0
        })
    };
    Component.MultiImageArea = function(a) {
        var b = a.page, c = a.parent, l = a.contents.length, h = c.componentWidth, v = c.componentHeight, w = [], x = [], y = f.range(3 / l, .08, .6), A = f.range(1.5 / l, .04, .3), C = a.sign * Math.min(25 / l * Math.PI / 180, 4 * Math.PI / 180), B = a.icon, z;
        bindDataSource(c, "multi-image");
        g(a.contents, function(a, b) {
            a["z-index"] = 1E4 + b;
            a.rotate = (b + 1 - l) * C;
            x.push({
                component: a,
                duration: .6,
                delay: .3 * b,
                progress: {
                    0: {
                        rotate: - Math.PI /
                        6,
                        scale: ua.ios || ua.iphone6 ? 3: 1,
                        x: 2.4*-h,
                        y: 2.4 * v
                    }
                }
            });
            w.push(a)
        });
        k.request(function(c) {
            !0 === a.noAnimation ? b.onShow(c) : x.top.onEnter = c
        }, function() {
            function b() {
                v && (g(v, function(a) {
                    a.remove()
                }), v = null)
            }
            function f(a) {
                b();
                v = [];
                k.loop(l, function(b) {
                    v[b] = w[((a + b)%l + l)%l].transition({
                        end: {
                            rotate: (b + 1 - l) * C
                        },
                        timing: q.Timing.easeOut,
                        delay: A * b / 2,
                        duration: y / 2
                    })
                })
            }
            function n(a) {
                window.highPerformance || fp.lock(!0);
                b();
                var e = p, g = w[(e%l + l)%l];
                g.transition({
                    end: {
                        x: (a ? clientWidth : - h) - c.x,
                        y: 0,
                        opacity: 0
                    },
                    duration: .3,
                    onEnd: function() {
                        g.x = 0;
                        g.opacity = 1;
                        g["z-index"] -= l;
                        g.rotate = (1 - l) * C;
                        f(e);
                        fp.lock(!1)
                    }
                });
                --p
            }
            B && (e(B.prev, "opacity", 1), e(B.next, "opacity", 1));
            var p = l - 1, v = null;
            m.onDragH(c, function(a) {
                n(a.directionX)
            });
            a.auto && (z = setTimeout(function() {
                n(.5 < Math.random());
                z = setTimeout(arguments.callee, 3E3)
            }, 1500))
        });
        b.onRemove(function() {
            z && clearTimeout(z)
        });
        if (B) {
            var D = B.prev, E = B.next;
            g([D, E], function(a) {
                e(a, {
                    "z-index": "10000",
                    opacity: 0,
                    "-webkit-transition": "0.8s"
                })
            });
            e(D, {
                left: e.px(position.leftIn(b, D) + 15),
                top: e.px(position.middle(c,
                D) + c.y),
                "-webkit-animation": "guidePrev 1.5s infinite"
            });
            e(E, {
                left: e.px(position.rightIn(b, E) - 15),
                top: e.px(position.middle(c, E) + c.y),
                "-webkit-animation": "guideNext 1.5s infinite"
            });
            b.onShow(function() {
                window.body.appendChild(D);
                window.body.appendChild(E)
            });
            b.onRemove(function() {
                p.removeNode(D);
                p.removeNode(E)
            })
        }
        return {
            enterAnimation: x
        }
    }
})();
(function() {
    var p = zachModule["2"], h = zachModule["10"], e = zachModule["0"];
    registPageEffect("flake", {
        resource: ["firstpage-flake.png"],
        create: function(c, k) {
            var g = null, m = null;
            c.onShow(function() {
                function c() {
                    return {
                        x: Math.random() * clientWidth<<0,
                        y: (Math.random() - 1) * clientHeight<<0,
                        omega: Math.random() * Math.PI,
                        size: 8 * Math.random() + 10<<0,
                        speed: Math.random() + 1,
                        a: 10 * Math.random() + 2
                    }
                }
                g = h.Layer();
                var f = [], l = 20;
                ua.iphone4 ? l = 25 : ua.iphone5 ? l = 30 : ua.iphone6 && ua.win32 && (l = 40);
                p.css(g, {
                    position: "absolute",
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0,
                    "z-index": 100,
                    "pointer-events": "none"
                });
                g.resize(clientWidth, clientHeight);
                e.loop(l, function() {
                    f.push(c())
                });
                window.body.appendChild(g);
                m = p.requestAnimate(function() {
                    g.draw(function(b) {
                        e.loopArray(f, function(a, e) {
                            var g = a.y += a.speed, l = a.x + Math.sin(.02 * a.y + a.omega) * a.a, h = a.size;
                            b.drawImage(k[0], l, g, h, h);
                            a.y >= clientHeight && (a = c(), a.y =- 20, f[e] = a)
                        })
                    })
                })
            });
            c.onRemove(function() {
                m.remove();
                p.removeNode(g)
            })
        }
    })
})();
(function() {
    var p = zachModule["2"], h = p.element, e = p.css.px;
    window.Content = window.Content || {};
    Content.Rect = function(c) {
        var e = c.color || "";
        return {
            width: c.width,
            height: c.height,
            element: function() {
                return h("div", {
                    css: {
                        background: e
                    }
                })
            },
            draw: function(g) {
                e && (g.fillStyle = e, g.fillRect(0, 0, c.width, c.height))
            }
        }
    };
    Content.Circle = function(c) {
        var k = c.r;
        return {
            width: 2 * k,
            height: 2 * k,
            element: function() {
                return h("div", {
                    css: {
                        "border-radius": e(k),
                        background: c.color
                    }
                })
            },
            draw: function(e) {
                e.save();
                e.beginPath();
                e.arc(k, k, k,
                0, 2 * Math.PI);
                e.closePath();
                e.fillStyle = c.color;
                e.fill();
                e.restore()
            }
        }
    }
})();
(function() {
    function p(a) {
        var b = {};
        m.loopObj(a, function(a, c) {
            switch (a) {
            case "fontSize":
                b["font-size"] = g(c);
                break;
            case "lineHeight":
                b["line-height"] = g(c);
                break;
            case "fontWeight":
                b["font-weight"] = c;
                break;
            case "fontStyle":
                b["font-style"] = c;
                break;
            case "color":
                b.color = c
            }
        });
        return b
    }
    function h(a) {
        var b;
        a = a.cloneNode(!0);
        document.body.appendChild(a);
        k(a, {
            position: "absolute"
        });
        b = {
            width: a.offsetWidth,
            height: a.offsetHeight
        };
        e.removeNode(a);
        return b
    }
    var e = zachModule["2"], c = e.element, k = e.css, g = k.px, m = zachModule["0"],
    q = m.insert, f = m.loopArray, l = zachModule["15"], b = l.Font;
    window.Content = window.Content || {};
    Content.Label = function(a) {
        var f = a.text, e = c("span", {
            css: q(p(a), {
                display: "inline-block",
                "white-space": "nowrap"
            }),
            innerHTML: f
        });
        return {
            width: window.highPerformance ? l.measureText(f, a).width: h(e).width,
            height: a.lineHeight,
            element: function() {
                return e.cloneNode(!0)
            },
            draw: function(c) {
                c.font = b(a);
                c.textBaseline = "middle";
                c.fillStyle = a.color;
                c.fillText(f, 0, a.lineHeight / 2<<0)
            }
        }
    };
    Content.LineText = function(a) {
        var f = a.text, e =
        a.width, l;
        return {
            width: e,
            height: a.lineHeight,
            element: function() {
                return c("span", {
                    css: q(p(a), {
                        "text-align": a.isLeft ? "left": "center",
                        width: g(a.width),
                        "white-space": "nowrap"
                    }, a.overflow ? {
                        overflow: "hidden",
                        "white-space": "nowrap",
                        "text-overflow": "ellipsis"
                    } : {}),
                    innerHTML: f
                })
            },
            draw: function(c) {
                c.font = b(a);
                c.textBaseline = "middle";
                c.fillStyle = a.color;
                if (void 0 === l)
                    if (a.overflow && c.measureText(f).width > e) {
                        for (var g = 0; g !== f.length; ++g) {
                            var h = f.substring(0, g + 1) + "\u2026";
                            if (c.measureText(h).width > e)
                                break
                        }
                        l = f.substring(0,
                        g) + "\u2026"
                    } else 
                        l = f;
                c.fillText(l, a.isLeft ? 0 : center(e, c.measureText(l).width), a.lineHeight / 2<<0)
            }
        }
    };
    Content.BlockText = function(a) {
        var b = a.text, e, k;
        window.highPerformance ? k = l.layText(b, a.width, q(a, {
            lineBreak: a.breakWord ? l.LineBreak.breakAll: l.LineBreak.normal,
            align: a.breakWord ? l.Align.left: l.Align.side
        })) : (e = c("div", {
            css: q(p(a), {
                width: g(a.width)
            })
        }), f(b.split("\n"), function(b) {
            c("p", {
                innerHTML: b || "&nbsp",
                css: q({
                    margin: g(2 * a.margin) + " 0"
                }, a.breakWord ? {
                    "word-break": "break-all",
                    "word-wrap": "break-word"
                } :
                {})
            }, e)
        }));
        return {
            width: a.width,
            height: window.highPerformance ? k.height: h(e).height,
            element: function() {
                return e.cloneNode(!0)
            },
            draw: function(a) {
                l.drawTextLayout(a, k)
            }
        }
    }
})();
(function() {
    var p = zachModule["2"], h = zachModule["0"], e = zachModule["6"], c = zachModule["3"], k = zachModule["10"];
    registSwitchAnimate("chessboard", function(g, m, q) {
        var f = p.css, l = f.px, b = prepareSnapshot(null, null, q, {
            perspective: 1E3,
            background: "#FFFFFF"
        }), a = 4, n = 5, u = [], r, t = 0, v = 0, w, x, y, A;
        clientWidth > clientHeight && (a = 5, n = 4);
        h.loop(a, function(b) {
            w = (b + 1) / a * clientWidth<<0;
            v = 0;
            r = [];
            u.push(r);
            h.loop(n, function(a) {
                x = (a + 1) / n * clientHeight<<0;
                y = w - t;
                A = x - v;
                var b = [];
                b.start = Math.random();
                b.isTurn=!1;
                h.loop(2, function(a) {
                    var c =
                    0 === a ? g: m, e = k.Layer();
                    e.resize(y, A);
                    e.draw(function(a) {
                        var b = a.dpr;
                        a.drawImage(c, t * b, v * b, y * b, A * b, 0, 0, y, A)
                    });
                    f(e, {
                        position: "absolute",
                        left: l(t),
                        top: l(v),
                        "backface-visibility": "hidden",
                        "z-index": 2 - a
                    });
                    window.body.appendChild(e);
                    b.push(e)
                });
                r.push(b);
                v = x
            });
            t = w
        });
        return {
            duration: 1.6,
            timing: e.Timing.linear,
            onAnimate: function(b) {
                f(g, "visibility", "hidden");
                f(m, "visibility", "hidden");
                for (var e, l = 0; l !== a; ++l)
                    for (var h = 0; h !== n; ++h) {
                        var k = e = u[l][h];
                        e = c.range(2.5 * (b - l / (a - 1) * .3 - .3 * e.start), 0, 1);
                        var p = k[0], q = k[1];
                        !k.isTurn && .5 > e && (f(p, "z-index", 1), f(q, "z-index", 0), k.isTurn=!0);
                        k.isTurn && .5 <= e && (f(p, "z-index", 0), f(q, "z-index", 1), k.isTurn=!1);
                        f.transform(p, f.rotateY(e * Math.PI));
                        f.transform(q, f.rotateY(e * Math.PI + Math.PI))
                    }
            },
            onEnd: function() {
                b();
                for (var c = 0; c !== a; ++c)
                    for (var f = 0; f !== n; ++f)
                        for (var e = 0; 2 !== e; ++e)
                            p.removeNode(u[c][f][e])
            }
        }
    })
})();
(function() {
    var p = zachModule["2"], h = zachModule["6"];
    registSwitchAnimate("cube", function(e, c, k) {
        var g = p.css, m=!1, q = clientWidth / 2;
        k = prepareSnapshot(e, c, k, {
            perspective: 1E3,
            background: "#FFFFFF"
        });
        return {
            duration: 1,
            timing: h.Timing.linear,
            onAnimate: function(f) {
                !m && .5 > f && (g(e, "z-index", 6), g(c, "z-index", 5), m=!0);
                m && .5 <= f && (m=!1, g(e, "z-index", 5), g(c, "z-index", 6));
                var l = f * Math.PI / 2;
                f = f * Math.PI / 2 - Math.PI / 2;
                var b = Math.cos(l) * q - q, a = b + Math.sin(l) * q;
                g.transform(e, g.translate( - q * Math.sin(l), 0, b - a), g.rotateY( - l));
                g.transform(c, g.translate( - q * Math.sin(f), 0, Math.cos(f) * q - q - a), g.rotateY( - f))
            },
            onEnd: k
        }
    })
})();
(function() {
    var p = zachModule["2"], h = zachModule["6"];
    registSwitchAnimate("fade", function(e, c, k) {
        var g = p.css;
        k = prepareSnapshot(e, c, k, {});
        return {
            duration: .8,
            timing: h.Timing.linear,
            onAnimate: function(h) {
                g(e, "opacity", 1 - h);
                g(c, "opacity", h)
            },
            onEnd: k
        }
    })
})();
(function() {
    var p = zachModule["2"], h = zachModule["6"];
    registSwitchAnimate("overturn", function(e, c, k) {
        var g = p.css, m=!1, q = clientWidth / 2;
        k = prepareSnapshot(e, c, k, {
            perspective: 1E3,
            background: "#FFFFFF"
        });
        return {
            duration: 1,
            timing: h.Timing.linear,
            onAnimate: function(f) {
                !m && .5 > f && (g(e, "z-index", 6), g(c, "z-index", 5), m=!0);
                m && .5 <= f && (m=!1, g(e, "z-index", 5), g(c, "z-index", 6));
                var l = Math.sin((.5 - Math.abs(f - .5)) * Math.PI) * q * .6;
                g.transform(e, g.translate(0, 0, - l), g.rotateY(f * Math.PI));
                g.transform(c, g.translate(0, 0, - l), g.rotateY(f *
                Math.PI + Math.PI))
            },
            onEnd: k
        }
    })
})();
registSwitchAnimate("push", function(p, h) {
    return {
        duration: .8,
        onDraw: function(e, c) {
            e.save();
            e.drawImage(p, 0, - c * clientHeight, clientWidth, clientHeight);
            e.drawImage(h, 0, (1 - c) * clientHeight, clientWidth, clientHeight);
            e.restore()
        }
    }
});
(function() {
    var p = zachModule["2"], h = zachModule["6"];
    registSwitchAnimate("switch", function(e, c, k) {
        var g = p.css, m=!1, q = clientWidth / 2;
        k = prepareSnapshot(e, c, k, {
            perspective: 1200,
            background: "#FFFFFF"
        });
        return {
            duration: 1,
            timing: h.Timing.linear,
            onAnimate: function(f) {
                f*=2;
                if (1 >= f)
                    m || (g(c, "z-index", 5), g(e, "z-index", 6), m=!0), g.transform(e, g.translate(f * q<<0, 0, 150*-f), g.rotateY(30*-f, "deg")), g.transform(c, g.translate( - f * q<<0, 0, - 150 +- 150 * (1 - f)), g.rotateY(30 * f, "deg"));
                else {
                    --f;
                    var l = 1 - f;
                    m && (g(c, "z-index", 6), g(e,
                    "z-index", 5), m=!1);
                    g.transform(e, g.translate(l * q<<0, 0, - 150 +- 150 * f), g.rotateY(30*-l, "deg"));
                    g.transform(c, g.translate( - l * q<<0, 0, - 150 * (1 - f)), g.rotateY(30 * l, "deg"))
                }
            },
            onEnd: k
        }
    })
})();
(function() {
    var p = zachModule["0"], h = zachModule["6"];
    registSwitchAnimate("tease", function(e, c) {
        return {
            duration: .8,
            timing: h.Timing.linear,
            onDraw: function(h, g) {
                var m = h.dpr, q = clientWidth * m;
                h.drawImage(c, 0, 0, clientWidth, clientHeight);
                p.loop(8, function(c) {
                    var l = c / 8 * clientHeight<<0, b = ((c + 1) / 8 * clientHeight<<0) - l, a = Math.max(2 * g + (c + 1) / 8 - 1, 0);
                    h.drawImage(e, 0, l * m, q, b * m, (0 === c%2 ? 1 : - 1) * a * a * clientWidth, l, clientWidth, b)
                })
            }
        }
    })
})();
(function() {
    var p = zachModule["0"], h = zachModule["4"];
    registLayout("contact", {
        resource: ["layout-contact-background.png", "layout-context-text-frame.png"],
        create: function(e, c) {
            var k = c.resource[1], g = k.halfWidth, m = k.halfHeight;
            Component.BackgroundImage(e, c.image[0]);
            e.component({
                content: Content.ImageCover(c.resource[0], clientWidth, clientHeight),
                x: 0,
                y: 0,
                "z-index": 1
            });
            var q = [];
            p.loopArray([{
                caption: "\u8054\u7cfb\u7535\u8bdd",
                click: function(b) {
                    location.href = "tel:" + b
                }
            }, {
                caption: "\u8054\u7cfb\u90ae\u7bb1",
                click: function(b) {
                    location.href =
                    "mailto:" + b
                }
            }, {
                caption: "\u5b98\u65b9\u7f51\u7ad9",
                click: function(b) {
                    fp.jump(b)
                }
            }, {
                caption: "\u5fae\u4fe1\u53f7"
            }, {
                caption: "\u5fae\u535a",
                click: function(b) {
                    fp.jump("http://weibo.com/n/" + b)
                }
            }
            ], function(b, a) {
                if ("" !== c.text[a]) {
                    var f = Content.Label({
                        text: b.caption + "\uff1a",
                        lineHeight: 44,
                        fontSize: 14,
                        color: "#FFFFFF"
                    }), l = f.width, k = c.text[a], m = Content.BlockText({
                        text: c.text[a],
                        lineHeight: 16,
                        fontSize: 12,
                        color: "#FFFFFF",
                        margin: 0,
                        width: g - 28 - 8 - l,
                        breakWord: !0
                    });
                    c.resource[1].hasChild=!0;
                    var p = e.component({
                        content: Content.Image(c.resource[1]),
                        x: (clientWidth - g) / 2<<0,
                        "z-index": 2
                    });
                    p.component({
                        content: f,
                        x: 14,
                        y: 0
                    });
                    p.component({
                        content: m,
                        x: 22 + l,
                        y: center(44, m.height)
                    });
                    h.onTap(p, function() {
                        window.preventJump=!0;
                        b.click && b.click(k)
                    });
                    q.push(p)
                }
            });
            var f = middleY(143), k = q.length, l = (315 - m * k) / (k + 1)<<0;
            p.loopArray(q, function(b, a) {
                b.y = f + l * (a + 1) + m * a
            })
        }
    })
})();
(function() {
    var p = zachModule["0"], h = zachModule["2"], e = zachModule["4"], c=!1;
    registSpecialPage("copyright", function(c) {
        h.ajax({
            url: window.copyrightUrl,
            onLoad: function(g) {
                g = h.element("div", g);
                var m = g.querySelector("#content");
                p.loopArray(g.querySelectorAll("style"), function(c) {
                    document.head.appendChild(c)
                });
                c({
                    create: function(c) {
                        c.innerHTML = m.outerHTML;
                        p.loopArray(c.querySelectorAll("a"), function(c) {
                            e.onPointerDown(c, function(c) {
                                c.preventDefault()
                            });
                            e.onTap(c, function() {
                                location.href = c.href
                            })
                        })
                    }
                })
            }
        })
    });
    registLayout("copyright", {
        resource: ["layout-copyright-background.png"],
        create: function(h, g) {
            var m = g.resource[0], q = Content.Label({
                text: g.author,
                lineHeight: 16,
                fontSize: 16,
                fontStyle: "italic",
                color: "#fc5e28"
            }), f = q.width, l = Content.Label({
                text: "\u4f5c\u54c1",
                lineHeight: 16,
                fontSize: 16,
                fontStyle: "italic",
                color: "#A3AEC1"
            }), b = f + 20 + l.width;
            h.component({
                content: Content.Image(m),
                x: center(clientWidth, m.halfWidth),
                y: center(clientHeight, m.halfHeight) + 15,
                "z-index": 1
            });
            h.component({
                content: Content.ImageCover(g.image[0],
                56, 56),
                x: middleX(136),
                y: middleY(81)
            });
            m = h.component({
                content: Content.Rect({
                    width: b,
                    height: 16
                }),
                x: center(clientWidth, b),
                y: middleY(154),
                "z-index": 2
            });
            m.component({
                content: q,
                x: 0,
                y: 0
            });
            m.component({
                content: l,
                x: f + 20,
                y: 0
            });
            h.component({
                content: Content.LineText({
                    text: g.title,
                    width: 241,
                    lineHeight: 14,
                    fontSize: 12,
                    color: "#A3AEC1",
                    isLeft: !0
                }),
                x: middleX(40),
                y: middleY(203),
                "z-index": 2
            });
            var a = [40, 130, 220];
            p.loopArray(g.works, function(b, c) {
                if (!(2 < c)) {
                    var f = h.component({
                        content: Content.Rect({
                            width: 60,
                            height: 83
                        }),
                        x: middleX(a[c]),
                        y: middleY(233),
                        "z-index": 2
                    });
                    f.component({
                        content: Content.ImageCover(g.image[c + 1], 60, 60),
                        x: 0,
                        y: 0,
                        "z-index": 2
                    });
                    f.component({
                        content: Content.LineText({
                            text: b.title,
                            width: 80,
                            lineHeight: 14,
                            fontSize: 10,
                            color: "#A3AEC1",
                            overflow: !0,
                            isLeft: !0
                        }),
                        x: 0,
                        y: 69,
                        "z-index": 2
                    });
                    e.onTap(f, function() {
                        window.preventJump=!0;
                        location.href = b.url
                    })
                }
            });
            e.onTap(h.component({
                content: Content.Rect({
                    width: 140,
                    height: 40
                }),
                x: center(clientWidth, 140),
                y: middleY(343),
                "z-index": 2
            }), fp.downloadFirstPage);
            e.onTap(h.component({
                content: Content.Rect({
                    width: 150,
                    height: 40
                }),
                x: center(clientWidth, 150),
                y: middleY(418),
                "z-index": 2
            }), function() {
                location.href = "http://chuye.cloud7.com.cn"
            });
            c || ua.chuye || (fp.track(["Download", "View", fp.systemName]), c=!0)
        }
    })
})();
(function() {
    var p = zachModule["0"], h = zachModule["3"], e = {
        "fly-into-left": {
            func: enterAnimate.flyInto,
            arg: ["left"]
        },
        "fly-into-top": {
            func: enterAnimate.flyInto,
            arg: ["top"]
        },
        "fly-into-right": {
            func: enterAnimate.flyInto,
            arg: ["right"]
        },
        "fly-into-bottom": {
            func: enterAnimate.flyInto,
            arg: ["bottom"]
        },
        "emerge-left": {
            func: enterAnimate.emerge,
            arg: ["left"]
        },
        "emerge-top": {
            func: enterAnimate.emerge,
            arg: ["top"]
        },
        "emerge-right": {
            func: enterAnimate.emerge,
            arg: ["right"]
        },
        "emerge-bottom": {
            func: enterAnimate.emerge,
            arg: ["bottom"]
        },
        scale: enterAnimate.scale,
        "fade-in": enterAnimate.fadeIn,
        "circle-round": enterAnimate.circleRound,
        "round-from-far-and-near": enterAnimate.roundFromFarAndNear,
        "curve-up": enterAnimate.curveUp,
        "fall-down-and-shake": enterAnimate.fallDownAndShake,
        shrink: enterAnimate.shrink,
        flash: enterAnimate.flash,
        shake: enterAnimate.shake,
        wobble: enterAnimate.wobble,
        tada: enterAnimate.tada,
        "bounce-in": enterAnimate.bounceIn,
        "bounce-in-down": {
            func: enterAnimate.bounceFlying,
            arg: ["bottom"]
        },
        "bounce-in-up": {
            func: enterAnimate.bounceFlying,
            arg: ["top"]
        },
        "bounce-in-left": {
            func: enterAnimate.bounceFlying,
            arg: ["left"]
        },
        "bounce-in-right": {
            func: enterAnimate.bounceFlying,
            arg: ["right"]
        },
        swing: enterAnimate.swing,
        "rubber-band": enterAnimate.rubberBand
    };
    registLayout("custom", {
        create: function(c, k) {
            var g = [], m = k.imageinfo;
            p.loopArray(m, function(f, b) {
                function a(a) {
                    return f.maskRadius ? Content.Border(a, {
                        radius: f.maskRadius
                    }) : a
                }
                var e = k.image[b];
                if (null !== f)
                    var m = f.width, e = c.component({
                        content: a(Content.Custom(e, m * globalScale, (e.halfWidth ? m / e.halfWidth *
                        e.halfHeight : f.height) * globalScale)),
                        x: h.range(middleX(f.x, globalScale), 0, clientWidth - m * globalScale),
                        y: middleY(f.y, globalScale),
                        rotate: f.rotate || 0
                    });
                else 
                    e = c.component({
                        content: (isImageRect(e) ? Content.Custom : Content.ImageCover)(e, clientWidth, clientHeight)
                    });
                e["z-index"] = b;
                bindDataSource(g[b] = e, "image", b)
            });
            var q = 0, f = [];
            p.loopArray(m, function(c, b) {
                if (c && c.animation) {
                    var a = e[c.animation] || e["fly-into-left"], a = p.insert((a.func || a).apply(null, [g[b]].concat(a.arg || [])), {
                        delay: c["animation-delay"],
                        duration: c["animation-duration"]
                    });
                    if (void 0 === a.delay || null === a.delay)
                        a.delay = q;
                    q = a.delay + a.duration;
                    f.push(a)
                }
            });
            c.registEnterAnimation([f])
        }
    })
})();
(function() {
    var p = zachModule["0"];
    zachModule["5"].KeyValueFunction(function(h, e) {
        registLayout(h, {
            resource: [e.frame],
            create: function(c, h) {
                var g = [];
                p.loopArray(h.image, function(h, k) {
                    var f = e.img[k], l = bindDataSource(c.component({
                        content: Content.ImageCover(h, Math.ceil(f.width * xRatio) + 1, Math.ceil(f.height * yRatio) + 1),
                        x: f.x * xRatio<<0,
                        y: f.y * yRatio<<0
                    }), "image", k), f = f.enterAnimate;
                    g.push([enterAnimate[f.name].apply(null, [l].concat([f.arg]))])
                });
                c.component({
                    content: Content.Image(h.resource[0], clientWidth, clientHeight),
                    x: 0,
                    y: 0,
                    "z-index": 100
                });
                c.registEnterAnimation(g)
            }
        })
    })({
        MutipleImage02: {
            frame: "layout-MutipleImage02-frame.png",
            img: [{
                x: 25,
                y: 16,
                width: 280,
                height: 157,
                enterAnimate: {
                    name: "flyInto",
                    arg: "left"
                }
            }, {
                x: 25,
                y: 173,
                width: 280,
                height: 157,
                enterAnimate: {
                    name: "flyInto",
                    arg: "right"
                }
            }, {
                x: 25,
                y: 330,
                width: 280,
                height: 157,
                enterAnimate: {
                    name: "flyInto",
                    arg: "left"
                }
            }
            ]
        },
        MutipleImage03: {
            frame: "layout-MutipleImage03-frame.png",
            img: [{
                x: 15,
                y: 15,
                width: 290,
                height: 231,
                enterAnimate: {
                    name: "flyInto",
                    arg: "top"
                }
            }, {
                x: 15,
                y: 250,
                width: 143,
                height: 239,
                enterAnimate: {
                    name: "flyInto",
                    arg: "left"
                }
            }, {
                x: 162,
                y: 250,
                width: 143,
                height: 239,
                enterAnimate: {
                    name: "flyInto",
                    arg: "right"
                }
            }
            ]
        }
    })
})();
(function() {
    function p(c, e, b) {
        return {
            content: Content.Image(c),
            x: middleX(e),
            y: middleY(b),
            "z-index": 5
        }
    }
    function h(f) {
        return {
            create: function(e, b) {
                var a = [27, 16, 10], g = [22, 57, 88], h = 115 * yRatio<<0, k, m, p;
                switch (f) {
                case "top":
                    k = 0;
                    m = h;
                    p = clientHeight;
                    break;
                case "middle":
                    k = .6 * clientHeight<<0;
                    m = 0;
                    p = clientHeight;
                    break;
                case "bottom":
                    m = 0, k = p = clientHeight - h
                }
                var q = [], x = color.background || "#FFFFFF";
                c.loopArray(b.text, function(b, c) {
                    var f = bindDataSource(e.component({
                        content: Content.LineText({
                            text: b,
                            lineHeight: a[c],
                            fontSize: a[c],
                            color: "#FFFFFF" === x.toUpperCase() ? "#000000": "#FFFFFF",
                            width: clientWidth
                        }),
                        x: 0,
                        y: k + g[c] * yRatio<<0,
                        "z-index": 2
                    }), "text", c);
                    b && q.push([enterAnimate.emerge(f)])
                });
                bindDataSource(e.component({
                    content: Content.ImageCover(b.image[0], clientWidth, p - m),
                    x: 0,
                    y: m
                }), "image", 0);
                e.component({
                    content: Content.Rect({
                        color: x,
                        width: clientWidth,
                        height: h
                    }),
                    x: 0,
                    y: k,
                    "z-index": 1
                });
                e.registEnterAnimation(q)
            }
        }
    }
    function e(c) {
        var e = c.padding;
        return {
            create: function(b, a) {
                var g = Content.BlockText({
                    text: a.text[0],
                    margin: c.margin,
                    lineHeight: c.lineHeight,
                    fontSize: c.fontSize,
                    color: c.color,
                    width: clientWidth - 2 * e
                });
                bindDataSource(Component.BackgroundImage(b, a.image[0]), "image", 0);
                b.component({
                    content: Content.Rect({
                        width: clientWidth,
                        height: clientHeight,
                        color: c.background
                    }),
                    x: 0,
                    y: 0,
                    "z-index": 1
                });
                b.registEnterAnimation([[enterAnimate.emerge(bindDataSource(b.component({
                    content: g,
                    "z-index": 2,
                    x: e,
                    y: center(clientHeight, g.height)
                }), "text", 0))]])
            }
        }
    }
    var c = zachModule["0"], k = c.TupleString("rgba"), g = zachModule["2"], m = zachModule["10"];
    registLayout("ImageText01", h("top"));
    registLayout("ImageText02", h("bottom"));
    registLayout("ImageText03", h("middle"));
    registLayout("SingleImage", {
        create: function(c, e) {
            bindDataSource(Component.BackgroundImage(c, e.image[0]), "image", 0)
        }
    });
    registLayout("ImageText04", e({
        margin: 5,
        lineHeight: 25,
        fontSize: 15,
        color: "#FFFFFF",
        background: k(0, 0, 0, .8),
        padding: 20
    }));
    registLayout("ImageText07", e({
        margin: 5,
        lineHeight: 25,
        fontSize: 14,
        color: "#333333",
        background: k(255, 255, 255, .85),
        padding: 20
    }));
    registLayout("ImageText05", {
        create: function(c, e) {
            var b = Content.BlockText({
                text: e.text[0],
                width: 157,
                lineHeight: 30,
                fontSize: 22,
                color: "#FFFFFF",
                breakWord: !0
            }), a = Math.max(b.height + 20, 60);
            bindDataSource(Component.BackgroundImage(c, e.image[0]), "image", 0);
            var g = c.component({
                content: Content.Rect({
                    width: 191,
                    height: a,
                    color: k(0, 0, 0, .85)
                }),
                x: clientWidth - 191,
                y: center(clientHeight, a),
                "z-index": 1
            });
            bindDataSource(g.component({
                content: b,
                x: 17,
                y: center(a, b.height)
            }), "text", 0)
        }
    });
    registLayout("ImageText06", {
        create: function(f, e) {
            function b(b, f) {
                var g = Content.BlockText({
                    text: e.text[b],
                    width: 216,
                    lineHeight: 25,
                    fontSize: 14,
                    color: "#FFFFFF",
                    breakWord: !0
                });
                return c.extend(enterAnimate.flyInto(bindDataSource(a.component({
                    content: g,
                    x: 17,
                    y: f + center(97, g.height)
                }), "text", b), "right"), {
                    delay: .3 * b
                })
            }
            bindDataSource(Component.BackgroundImage(f, e.image[0]), "image", 0);
            var a = f.component({
                content: Content.Rect({
                    width: 250,
                    height: 350,
                    color: k(0, 0, 0, .85)
                }),
                x: center(clientWidth, 250),
                y: center(clientHeight, 350),
                "z-index": 1
            });
            f.registEnterAnimation([[b(0, 35), b(1, 132), b(2, 229)]])
        }
    });
    registLayout("ImageText08", {
        create: function(c,
        e) {
            bindDataSource(Component.BackgroundImage(c, e.image[0]), "image", 0);
            var b = Content.Image(e.image[1], globalScale);
            c.registEnterAnimation([[enterAnimate.emerge(bindDataSource(c.component({
                content: b,
                x: clientWidth - b.width,
                y: middleY(354, globalScale),
                "z-index": 5,
                duration: 1
            }), "image", 1))]])
        }
    });
    registLayout("ImageText09", {
        create: function(c, e) {
            var b = Content.Image(e.image[1], globalScale);
            bindDataSource(Component.BackgroundImage(c, e.image[0]), "image", 0);
            c.registEnterAnimation([[enterAnimate.emerge(bindDataSource(c.component({
                content: b,
                x: center(clientWidth, b.width),
                y: middleY(289, globalScale),
                "z-index": 5,
                duration: 1
            }), "image", 1))]])
        }
    });
    registLayout("ImageText10", {
        create: function(c, e) {
            bindDataSource(Component.BackgroundImage(c, e.image[0]), "image", 0);
            c.registEnterAnimation([[enterAnimate.emerge(bindDataSource(c.component({
                content: Content.Image(e.image[1], globalScale),
                x: 25,
                y: middleY(155, globalScale),
                "z-index": 5,
                duration: 1
            }), "image", 1))]])
        }
    });
    registLayout("ImageText11", {
        create: function(c, e) {
            var b = Content.Image(e.image[1], globalScale),
            a = Content.Image(e.image[2], globalScale);
            bindDataSource(Component.BackgroundImage(c, e.image[0]), "image", 0);
            c.registEnterAnimation([[enterAnimate.emerge(bindDataSource(c.component({
                content: b,
                x: center(clientWidth, b.width),
                y: middleY(189, globalScale),
                "z-index": 5,
                duration: 1
            }), "image", 1))], [enterAnimate.emerge(bindDataSource(c.component({
                content: a,
                x: center(clientWidth, a.width),
                y: middleY(269, globalScale),
                "z-index": 5,
                duration: 1
            }), "image", 2))]])
        }
    });
    registLayout("ImageText12", {
        resource: ["layout-ImageText12-mayun.jpg",
        "layout-ImageText12-mask.png"],
        create: function(c, e) {
            var b = e.image[1], a = 818 / 1008 * clientHeight, g = 400 / 1008 * clientHeight;
            c.component({
                content: Content.ImageCover(e.resource[0], clientWidth / 2, a),
                x: 0,
                y: 0
            });
            bindDataSource(c.component({
                content: Content.ImageCover(e.image[0], clientWidth / 2, a),
                x: clientWidth / 2,
                y: 0
            }), "image", 0);
            a = c.component({
                content: Content.ImageCover(e.resource[1], clientWidth, g),
                x: 0,
                y: clientHeight - g,
                "z-index": 5
            });
            c.registEnterAnimation([[enterAnimate.emerge(bindDataSource(a.component({
                content: Content.Image(b),
                x: (clientWidth - b.halfWidth) / 2<<0,
                y: 75,
                duration: 1
            }), "image", 1))]])
        }
    });
    registLayout("ImageText13", {
        create: function(c, e) {
            var b = 124 * yRatio, a = clientHeight - b, g = e.image[1], h = g.halfWidth * yRatio<<0;
            bindDataSource(Component.BackgroundImage(c, e.image[0]), "image", 0);
            b = c.component({
                content: Content.Rect({
                    color: "#FFFFFF",
                    width: clientWidth,
                    height: b
                }),
                x: 0,
                y: a
            });
            c.registEnterAnimation([[enterAnimate.fadeIn(bindDataSource(b.component({
                content: Content.Image(g, h, g.halfHeight * yRatio<<0),
                x: center(clientWidth, h),
                y: 3 * yRatio<<
                0,
                "z-index": 5,
                duration: 1
            }), "image", 1))]])
        }
    });
    registLayout("ImageText14", {
        create: function(c, e) {
            var b = Content.Image(e.image[1], globalScale);
            bindDataSource(Component.BackgroundImage(c, e.image[0]), "image", 0);
            c.registEnterAnimation([[enterAnimate.emerge(bindDataSource(c.component({
                content: b,
                x: clientWidth - 14 - b.width,
                y: middleY(78),
                "z-index": 5,
                duration: 1
            }), "image", 1))]])
        }
    });
    registLayout("ImageText15", {
        create: function(c, e) {
            function b(a, b, c, f) {
                return enterAnimate.emerge(bindDataSource(q.component({
                    content: Content.Image(a),
                    x: b<<0,
                    y: c<<0,
                    "z-index": 5,
                    duration: 1
                }), "image", f))
            }
            var a = e.image[1], g = e.image[2], h = a.halfHeight + g.halfHeight + 15, k = Math.max(a.halfWidth, 246) + 46, m = (clientWidth - k) / 2, h = h + 80, p = (clientHeight - h) / 2;
            bindDataSource(Component.BackgroundImage(c, e.image[0]), "image", 0);
            var q = c.component({
                content: Content.Rect({
                    width: k,
                    height: h,
                    color: "rgba(255,255,255,0.9)"
                }),
                x: m,
                y: p
            });
            c.registEnterAnimation([[b(a, 23, 40, 1)], [b(g, k - 23 - g.halfWidth, 40 + a.halfHeight + 15, 2)]])
        }
    });
    registLayout("ImageText16", {
        create: function(c, e) {
            var b =
            e.image[1], a = e.image[2];
            bindDataSource(Component.BackgroundImage(c, e.image[0]), "image", 0);
            c.registEnterAnimation([[enterAnimate.fadeIn(bindDataSource(c.component(p(b, 162, 57)), "image", 1))], [enterAnimate.fadeIn(bindDataSource(c.component(p(a, 165, 57 + b.halfHeight + 5)), "image", 2))]])
        }
    });
    registLayout("ImageText17", {
        create: function(c, e) {
            var b = e.image[1], a = e.image[2];
            bindDataSource(Component.BackgroundImage(c, e.image[0]), "image", 0);
            c.registEnterAnimation([[enterAnimate.fadeIn(bindDataSource(c.component(p(b,
            34, 348)), "image", 1))], [enterAnimate.fadeIn(bindDataSource(c.component(p(a, 38, 348 + b.halfHeight + 5)), "image", 2))]])
        }
    });
    var q = {
        create: function(c, e) {
            var b = e.image[1], a = e.image[2];
            bindDataSource(Component.BackgroundImage(c, e.image[0]), "image", 0);
            c.registEnterAnimation([[enterAnimate.emerge(bindDataSource(c.component(p(b, 258, 97.5)), "image", 1), "right"), enterAnimate.emerge(bindDataSource(c.component(p(a, 258 + b.halfWidth - a.halfWidth, 97.5 + b.halfHeight + 5)), "image", 2), "left")]])
        }
    };
    registLayout("ImageText21", q);
    registLayout("ImageText22", q);
    registLayout("ImageText23", {
        create: function(c, e) {
            var b = e.image[1], a = e.image[2];
            bindDataSource(Component.BackgroundImage(c, e.image[0]), "image", 0);
            c.registEnterAnimation([[enterAnimate.emerge(bindDataSource(c.component(p(b, 30, 70)), "image", 1), "top"), enterAnimate.emerge(bindDataSource(c.component(p(a, 32, 70 + b.halfHeight + 5)), "image", 2), "bottom")]])
        }
    });
    registLayout("ImageText24", {
        create: function(c, e) {
            var b = e.image[1], a = e.image[2];
            bindDataSource(Component.BackgroundImage(c, e.image[0]),
            "image", 0);
            c.registEnterAnimation([[enterAnimate.emerge(bindDataSource(c.component(p(b, 41, 360)), "image", 1), "top"), enterAnimate.emerge(bindDataSource(c.component(p(a, 43, 360 + b.halfHeight + 5)), "image", 2), "bottom")]])
        }
    });
    registLayout("ImageText25", {
        create: function(c, e) {
            var b = Content.Image(e.image[1], globalScale);
            bindDataSource(Component.BackgroundImage(c, e.image[0]), "image", 0);
            c.registEnterAnimation([[enterAnimate.emerge(bindDataSource(c.component({
                content: b,
                x: center(clientWidth, b.width),
                y: middleY(idealHeight -
                40 - e.image[1].halfHeight, globalScale)
            }, "top"), "image", 1))]])
        }
    });
    registLayout("ImageText26", {
        create: function(c, e) {
            var b = Content.Image(e.image[1], globalScale), a = Content.Image(e.image[2], globalScale);
            bindDataSource(Component.BackgroundImage(c, e.image[0]), "image", 0);
            c.registEnterAnimation([[enterAnimate.emerge(bindDataSource(c.component({
                content: b,
                x: 0,
                y: middleY(294, globalScale)
            }), "image", 1), "right")], [enterAnimate.emerge(bindDataSource(c.component({
                content: a,
                x: middleX(72, globalScale),
                y: middleY(294, globalScale) +
                b.height
            }), "image", 2), "right")]])
        }
    });
    registLayout("ImageText27", {
        resource: ["firstpage-flake.png"],
        create: function(e, h) {
            var b = Content.Image(h.image[1], globalScale);
            bindDataSource(Component.BackgroundImage(e, h.image[0]), "image", 0);
            e.registEnterAnimation([[enterAnimate.emerge(bindDataSource(e.component({
                content: b,
                x: center(clientWidth, b.width),
                y: middleY(251.5, globalScale)
            }), "image", 1))]]);
            if (window.highPerformance) {
                var a = function() {
                    return {
                        x: Math.random() * clientWidth<<0,
                        y: (Math.random() - 1) * clientHeight<<
                        0,
                        omega: Math.random() * Math.PI,
                        size: 8 * Math.random() + 10<<0,
                        speed: Math.random() + 1,
                        a: 10 * Math.random() + 2
                    }
                }, k = m.Layer(), p = [], b = 40;
                ua.iphone4 ? b = 25 : ua.iphone5 ? b = 30 : ua.iphone6 && (b = 40);
                g.css(k, {
                    position: "absolute",
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0,
                    "z-index": 100,
                    "pointer-events": "none"
                });
                k.resize(clientWidth, clientHeight);
                c.loop(b, function() {
                    p.push(a())
                });
                var q = null;
                e.onShow(function() {
                    window.body.appendChild(k);
                    q = g.requestAnimate(function() {
                        k.draw(function(b) {
                            c.loopArray(p, function(c, e) {
                                var f = c.y += c.speed, g = c.x +
                                Math.sin(.02 * c.y + c.omega) * c.a, k = c.size;
                                b.drawImage(h.resource[0], g, f, k, k);
                                c.y >= clientHeight && (c = a(), c.y =- 20, p[e] = c)
                            })
                        })
                    })
                });
                e.onRemove(function() {
                    q.remove();
                    g.removeNode(k)
                })
            }
        }
    })
})();
(function() {
    var p = zachModule["5"], h = zachModule["4"], e = zachModule["2"].element;
    registLayout("map", {
        resource: ["layout-map-location.png"],
        create: function(c, k) {
            var g = k.resource[0], m;
            bindDataSource(Component.BackgroundImage(c, k.image[0]), "image", 0);
            var q = bindDataSource(c.component({
                content: Content.Image(g),
                x: center(clientWidth, g.halfWidth),
                y: middleY(287)
            }), "map", 0);
            c.component({
                content: Content.LineText({
                    text: k.location[0].address,
                    lineHeight: 12,
                    fontSize: 12,
                    color: "#FFFFFF",
                    width: clientWidth
                }),
                x: 0,
                y: middleY(341)
            });
            c.onShow(function() {
                q.infiniteAnimate({
                    duration: 3,
                    progress: {
                        0: {
                            opacity: 1
                        },
                        50: {
                            opacity: .4
                        }
                    }
                })
            });
            h.onTap(c.component({
                content: Content.Rect({
                    width: 120,
                    height: 100
                }),
                x: center(clientWidth, 120),
                y: middleY(267)
            }), function() {
                window.preventJump=!0;
                if (!m) {
                    m = fp.slidePage();
                    m.classList.add("map-slide-page");
                    var c = m.appendChild(e("div.title-bar", {
                        children: [e("div.icon.back"), e("div.line"), e("div.caption")]
                    })), g = fp.Loading(m);
                    h.onTap(c, fp.history.back);
                    p.markerMap({
                        data: k.location,
                        parent: m,
                        make: function(b) {
                            var a =
                            e('<div class="map-info-window"><div class="name"></div><div class="info"><div>\u5730\u5740:<span class="address"></span></div></div></div>');
                            a.querySelector(".name").innerHTML = b.name;
                            a.querySelector(".address").innerHTML = b.address;
                            return a
                        },
                        onLoad: g.remove
                    })
                }
                m.slideIn()
            })
        }
    })
})();
(function() {
    var p = zachModule["0"].loopArray;
    registLayout("MutipleImage01", {
        create: function(h, e) {
            var c = [], k = Math.min(1, yRatio) * globalScale, g = h.component({
                content: Content.Rect({
                    width: 244 * k<<0,
                    height: 410 * k<<0
                })
            });
            p(e.image, function(e) {
                c.push(g.component(Content.Border(Content.ImageCover(e, g.componentWidth, g.componentHeight), {
                    width: 3,
                    color: "#FFFFFF"
                })))
            });
            g.x = position.center(h, g);
            g.y = position.middle(h, g);
            k = Component.MultiImageArea({
                page: h,
                contents: c,
                sign: - 1,
                parent: g,
                icon: {
                    prev: Icon(staticImgSrc("layout-MutipleImage01-arrow-left.png"),
                    20, 32),
                    next: Icon(staticImgSrc("layout-MutipleImage01-arrow-right.png"), 20, 32)
                }
            });
            h.registEnterAnimation([k.enterAnimation])
        }
    });
    registLayout("MutipleImage04", {
        resource: ["layout-MutipleImage04-background.jpg"],
        create: function(h, e) {
            var c = [];
            h.component(Content.Image(e.resource[0], clientWidth, clientHeight));
            var k = bindDataSource(h.component(Content.Image(e.image[0], globalScale)), "image", 0), g = bindDataSource(h.component(Content.Image(e.image[1], globalScale)), "image", 1), m = bindDataSource(h.component(Content.Image(e.image[2],
            globalScale)), "image", 2), q = h.component(Content.Rect({
                width: 178 * globalScale<<0,
                height: 259 * globalScale<<0
            })), f = d(11), l = d(19), b = d(39);
            p([k, g, m, q], function(a) {
                a.x = position.center(h, a)
            });
            k.y = (clientHeight - (k.componentHeight + g.componentHeight + m.componentHeight + q.componentHeight + f + l + b)) / 2<<0;
            g.y = position.bottomTo(k, g) + f + k.y;
            m.y = position.bottomTo(g, m) + l + g.y;
            q.y = position.bottomTo(m, q) + b + m.y;
            p(e.image.slice(3), function(a) {
                c.push(q.component(Content.Border(Content.ImageCover(a, q.componentWidth, q.componentHeight),
                {
                    width: 1,
                    color: "#FFFFFF"
                })))
            });
            f = Component.MultiImageArea({
                page: h,
                contents: c,
                sign: - 1,
                parent: q,
                icon: {
                    prev: Icon(staticImgSrc("layout-MutipleImage04-arrow-left.png"), 14, 22),
                    next: Icon(staticImgSrc("layout-MutipleImage04-arrow-right.png"), 14, 22)
                }
            });
            h.registEnterAnimation([[enterAnimate.emerge(k)], [enterAnimate.emerge(g)], [enterAnimate.emerge(m)], f.enterAnimation])
        }
    })
})();
(function() {
    function p(c, e) {
        registLayout(c, {
            resource: "layout-razzies-background-single.png layout-razzies-background-double.png layout-razzies-banner-left.png layout-razzies-banner-center.png layout-razzies-banner-right.png layout-razzies-cup.png".split(" "),
            create: function(b, a) {
                var c = a.text[2].split("\n");
                Component.BackgroundImage(b, a.resource[e ? 0: 1], 1);
                var f = Content.Label({
                    fontSize: 15 * globalScale<<0,
                    lineHeight: 15 * globalScale<<0,
                    color: "#fdf1c8",
                    text: a.text[0]
                }), g = f.width + 50 * globalScale<<0, g = b.component({
                    content: Content.Rect({
                        width: g,
                        height: 36 * globalScale<<0
                    }),
                    x: center(clientWidth, g),
                    y: middleY(153, globalScale),
                    "z-index": 2
                }), k = 20 * globalScale<<0;
                g.component({
                    content: Content.Image(a.resource[2], globalScale),
                    x: 0,
                    y: 0
                });
                g.component({
                    content: Content.Image(a.resource[3], g.componentWidth - 2 * k + 8, g.componentHeight),
                    x: k - 3,
                    y: 0
                });
                g.component({
                    content: Content.Image(a.resource[4], globalScale),
                    x: g.componentWidth - k,
                    y: 0
                });
                bindDataSource(g.component({
                    content: f,
                    x: center(g.componentWidth, f.width),
                    y: center(30 * globalScale<<0, f.height)
                }), "text", 0);
                f = 250 *
                globalScale;
                f = bindDataSource(b.component({
                    content: Content.BlockText({
                        width: f,
                        lineHeight: 20 * globalScale<<0,
                        fontSize: 12 * globalScale<<0,
                        text: a.text[1],
                        color: "#fdf1c9"
                    }),
                    x: center(clientWidth, f),
                    y: middleY(200, globalScale),
                    "z-index": 2
                }), "text", 1);
                e ? bindDataSource(b.component({
                    content: Content.ImageCover(a.image[0], 104 * globalScale<<0, 104 * globalScale<<0),
                    x: middleX(108, globalScale),
                    y: middleY(41, globalScale)
                }), "image", 0) : (bindDataSource(b.component({
                    content: Content.ImageCover(a.image[0], 104 * globalScale<<0, 104 *
                    globalScale<<0),
                    x: middleX(56, globalScale),
                    y: middleY(41, globalScale)
                }), "image", 0), bindDataSource(b.component({
                    content: Content.ImageCover(a.image[1], 104 * globalScale<<0, 104 * globalScale<<0),
                    x: middleX(161, globalScale),
                    y: middleY(41, globalScale)
                }), "image", 1));
                a.resource[5].hasChild=!0;
                var k = b.component({
                    content: Content.Image(a.resource[5], globalScale),
                    x: middleX(66, globalScale),
                    y: middleY(283, globalScale),
                    "z-index": 2
                }), m = 85 * globalScale<<0, p = bindDataSource(k.component({
                    content: Content.Rect({
                        height: 37 * globalScale<<
                        0,
                        width: m
                    }),
                    x: center(k.componentWidth, m) - 1,
                    y: 129 * globalScale<<0
                }), "text", 2), q = 15 * globalScale<<0;
                1 === c.length ? p.component({
                    content: Content.LineText({
                        fontSize: q,
                        lineHeight: q,
                        fontWeight: "bold",
                        width: m,
                        text: c[0],
                        color: "#40234a"
                    }),
                    y: center(p.height, q),
                    x: 0
                }) : (p.component({
                    content: Content.LineText({
                        fontSize: q,
                        lineHeight: q,
                        fontWeight: "bold",
                        width: m,
                        text: c[0],
                        color: "#40234a"
                    }),
                    y: 0,
                    x: 0
                }), p.component({
                    content: Content.LineText({
                        fontSize: q,
                        lineHeight: q,
                        fontWeight: "bold",
                        width: m,
                        text: c[1],
                        color: "#40234a"
                    }),
                    y: 20 *
                    globalScale<<0,
                    x: 0
                }));
                b.registEnterAnimation([[enterAnimate.fallDownAndShake(g)], [enterAnimate.emerge(f)], [h.insert(enterAnimate.shrink(k), {
                    delay: .3
                })]])
            }
        })
    }
    var h = zachModule["0"], e = zachModule["5"], c = zachModule["4"], k = zachModule["2"], g = k.element, m = k.css, q = ua.android && location.href.arg.ifeng;
    p("razzies-single", !0);
    p("razzies-double", !1);
    window.setRazziesShareData = function(c) {
        var e = c.text;
        window.setShareData({
            url: h.removeUrlArg(h.concatUrlArg(location.href, {
                razzies: c.id
            }), ["ifeng"]),
            title: "2014\u4e2d\u56fd\u81ea\u5a92\u4f53\u91d1\u9178\u5a92\u5956\uff1a\u51e4\u51f0\u65b0\u95fb\u4e0e" +
            e[2] + "\u8054\u5408\u9881\u53d1",
            desc: e[0] + "\u7b49\u5927\u5496\u559c\u83b7\u201c\u91d1\u9178\u5a92\u201d\u5956\u3002\u00a0\u4e5f\u60f3\u9881\u5956\uff1f\u70b9\u6211\uff01"
        })
    };
    window.RazziesPreviewPage = function(e, g) {
        var b = e.text, a = LayoutPage({
            layout: {
                label: "razzies-custom",
                image: [e.image],
                text: b,
                preview: JSON.stringify({
                    id: e.id,
                    image: [e.image],
                    text: b
                })
            }
        }), h = DOMPage();
        window.setRazziesShareData(e);
        a.load(function() {
            window.highPerformance=!1;
            a.create(h);
            k.toggleState(document.body, "can-push", "can-not-push");
            g && g(h);
            h.start()
        });
        c.onPointerDown(h, function(a) {
            a.preventDefault();
            a.stopPropagation()
        });
        m(h, {
            width: m.px(clientWidth),
            height: m.px(clientHeight),
            "z-index": 5,
            background: "#000000"
        })
    };
    registSpecialPage("razzies", function(f) {
        function l(a) {
            var c = new Image;
            b.load(function(b) {
                c.onload = function() {
                    b();
                    c.onload = b
                };
                c.src = staticImgSrc(a)
            });
            return c
        }
        var b = h.Loader(), a = l("layout-razzies-make.png"), n = l(q ? "layout-razzies-default-cup.png" : "layout-razzies-add-photo.png"), p = l("layout-razzies-copyright.png");
        b.start(function() {
            var b;
            f({
                create: function(f) {
                    if (!b) {
                        var l = function(a) {
                            var e = g(a.textArea ? "textarea" : "input", {
                                classList: "text",
                                css: {
                                    border: "none",
                                    "line-height": m.px(a.lineHeight || a.height / 2 * globalScale<<0),
                                    "font-size": m.px(a.fontSize * globalScale<<0),
                                    padding: a.textArea ? "4px 6px": "0 4px",
                                    resize: "none",
                                    color: a.color,
                                    background: "transparent",
                                    "text-align": a.textArea ? "start": "center",
                                    "font-weight": a.bold || "normal"
                                },
                                name: a.name
                            }, b);
                            e.arg = a;
                            e.maxLength = a.max;
                            a.className && e.classList.add(a.className);
                            a.placeholder && (e.placeholder =
                            a.placeholder);
                            k.bindEvent(e, "focus", function() {
                                y = e
                            });
                            c.onPointerDown(e, function(a) {
                                a.stopPropagation()
                            });
                            return w(e, a.width, a.height, a.x, a.y, 3)
                        }, w = function(a, b, e, f, g, h) {
                            m(a, {
                                position: "absolute",
                                left: m.px(middleX(f / 2<<0, globalScale)),
                                top: m.px(middleY(g / 2<<0, globalScale)),
                                width: m.px(b / 2 * globalScale<<0),
                                height: m.px(e / 2 * globalScale<<0),
                                "box-sizing": "border-box",
                                "z-index": h
                            });
                            c.onPointerDown(a, function(a) {
                                a.stopPropagation()
                            });
                            return a
                        };
                        m(a, e.getImageCoverStyle(a, clientWidth, clientHeight));
                        var x=!1;
                        b =
                        g("form", {
                            css: {
                                position: "absolute",
                                left: 0,
                                right: 0,
                                top: 0,
                                bottom: 0,
                                "z-index": 0
                            }
                        });
                        m(a, {
                            "pointer-events": "none",
                            "z-index": 3
                        });
                        b.appendChild(a);
                        var y = null, A = w(g("div", b), 216, 216, 212, 62, 2);
                        m(A, {
                            "pointer-events": "none"
                        });
                        A.appendChild(n);
                        m(n, e.getImageCoverStyle(n, 108 * globalScale<<0, 108 * globalScale<<0));
                        if (!q) {
                            var C = w(g("input", {
                                type: "file",
                                name: "picture",
                                accept: "image/*"
                            }, b), 216, 216, 212, 62, 1), x = "\u8bf7\u4e0a\u4f20\u7167\u7247";
                            C.onchange = function() {
                                var a = C.files[0], b = new FileReader;
                                b.onload = function() {
                                    x =
                                    !1;
                                    n.onload = function() {
                                        k.removeCss(n, "width");
                                        k.removeCss(n, "height");
                                        m(n, e.getImageCoverStyle(n, 108, 108))
                                    };
                                    n.src = a.type ? b.result : "data:application/octet-stream;" + b.result.substr(b.result.indexOf("base64,"))
                                };
                                b.readAsDataURL(a)
                            }
                        }
                        l({
                            width: 130,
                            height: 46,
                            x: 312,
                            y: 306,
                            fontSize: 14,
                            name: "Honoree",
                            caption: "\u83b7\u5956\u4eba",
                            index: 0,
                            color: "#fdf1c8",
                            min: 2,
                            max: 4,
                            bold: "bold"
                        });
                        m.transform(l({
                            width: 134,
                            height: 40,
                            x: 484,
                            y: 576,
                            fontSize: 14,
                            name: "Awards",
                            caption: "\u9881\u5956\u4eba",
                            index: 2,
                            bold: "bold",
                            color: "#d8271c",
                            min: 2,
                            max: 4
                        }), m.rotateZ( - 20, "deg"));
                        l({
                            width: 504,
                            height: 134,
                            x: 68,
                            y: 390,
                            fontSize: 12,
                            lineHeight: 18,
                            name: "Reason",
                            className: "reason",
                            textArea: !0,
                            index: 1,
                            caption: "\u83b7\u5956\u7406\u7531",
                            placeholder: "\u83b7\u5956\u7406\u7531\uff1a",
                            min: 10,
                            max: 60,
                            color: "#2d3e0a"
                        });
                        k.insertCSSRules({
                            "::-webkit-input-placeholder": {
                                color: "#2d3e0a"
                            }
                        });
                        l({
                            width: 210,
                            height: 46,
                            x: 236,
                            y: 680,
                            fontSize: 20,
                            name: "AwardsName",
                            caption: "\u83b7\u5956\u540d\u79f0",
                            index: 3,
                            min: 2,
                            max: 5,
                            color: "#fdf1c8",
                            bold: "bold"
                        });
                        c.onPointerDown(b, function() {
                            y &&
                            y.blur()
                        });
                        l = w(g("div", b), 206, 84, 219, 803, 3);
                        c.onTap(l, function() {
                            function a(b) {
                                "" !== c && (c += "<br>");
                                c += b
                            }
                            y && y.blur();
                            var c = "", e = [];
                            !1 !== x && a(x);
                            h.loopArray(b.querySelectorAll(".text"), function(b) {
                                var c = b.arg;
                                b.value.length < c.min && a(c.caption + "\u81f3\u5c11" + c.min + "\u4e2a\u5b57");
                                e[c.index] = b.value
                            });
                            if (c)
                                fp.alert(c);
                            else {
                                fp.lock(!0, b);
                                var f = fp.Loading(body);
                                k.ajax({
                                    method: "post",
                                    url: "http://chuye.cloud7.com.cn/beta/Event/AwardsCustom",
                                    data: new FormData(b),
                                    isJson: !0,
                                    onLoad: function(a) {
                                        RazziesPreviewPage({
                                            image: n.src,
                                            text: e,
                                            id: a.data
                                        }, function(a) {
                                            f.remove();
                                            body.appendChild(a)
                                        })
                                    }
                                })
                            }
                        });
                        b.appendChild(w(p, 326, 20, 158, 948, 3));
                        c.onTap(p, fp.downloadFirstPage)
                    }
                    f.appendChild(b)
                }
            })
        })
    });
    registLayout("razzies-custom", {
        resource: "layout-razzies-background-custom.png layout-razzies-banner-left-new.png layout-razzies-banner-center-new.png layout-razzies-banner-right-new.png layout-razzies-print.png layout-razzies-share.png layout-razzies-more.png layout-razzies-copyright.png layout-razzies-cup.png layout-razzies-tips-continue.png layout-razzies-default-cup.png".split(" "),
        create: function(e, l) {
            var b=!l.image || 0 === l.image.length ||!l.image[0];
            Component.BackgroundImage(e, l.resource[0], 1);
            var a = Content.Label({
                fontSize: 15 * globalScale<<0,
                lineHeight: 15 * globalScale<<0,
                color: "#fdf1c8",
                text: "\u83b7\u5956\u4eba\uff1a" + l.text[0]
            }), n = a.width + 50 * globalScale<<0, m = e.component({
                content: Content.Rect({
                    width: n,
                    height: 35 * globalScale<<0
                }),
                x: center(clientWidth, n),
                y: middleY(150, globalScale),
                "z-index": 2
            }), n = 20 * globalScale<<0;
            m.component({
                content: Content.Image(l.resource[1], globalScale),
                x: 0,
                y: 0
            });
            m.component({
                content: Content.Image(l.resource[2], m.componentWidth - 2 * n + 8, m.componentHeight),
                x: n - 3,
                y: 0
            });
            m.component({
                content: Content.Image(l.resource[3], globalScale),
                x: m.componentWidth - n,
                y: 0
            });
            m.component({
                content: a,
                x: center(m.componentWidth, a.width),
                y: center(30 * globalScale<<0, a.height)
            });
            var a = 250 * globalScale, p = bindDataSource(e.component({
                content: Content.BlockText({
                    width: a,
                    lineHeight: 20 * globalScale<<0,
                    fontSize: 12 * globalScale<<0,
                    text: l.text[1],
                    color: "#2d3e0a"
                }),
                x: center(clientWidth, a),
                y: middleY(196,
                globalScale),
                "z-index": 2
            }), "text", 1);
            e.component({
                content: Content.ImageCover(b ? l.resource[10] : l.image[0], 104 * globalScale<<0, 104 * globalScale<<0),
                x: middleX(108, globalScale),
                y: middleY(33, globalScale)
            });
            l.resource[4].hasChild=!0;
            var q = e.component({
                content: Content.Image(l.resource[4], globalScale),
                x: middleX(231, globalScale),
                y: middleY(248, globalScale),
                rotate: - 20 / 180 * Math.PI,
                "z-index": 2
            }), a = q.componentHeight, n = q.component({
                content: Content.Rect({
                    height: a,
                    width: a
                }),
                x: 0,
                y: 0
            }), v = 14 * globalScale<<0;
            n.component({
                content: Content.LineText({
                    fontSize: v,
                    lineHeight: v,
                    fontWeight: "bold",
                    width: a,
                    text: "\u9881\u5956\u4eba",
                    color: "#d8271c"
                }),
                y: 25 * globalScale<<0,
                x: 0
            });
            n.component({
                content: Content.LineText({
                    fontSize: v,
                    lineHeight: v,
                    fontWeight: "bold",
                    width: a,
                    text: l.text[2],
                    color: "#d8271c"
                }),
                y: 45 * globalScale<<0,
                x: 0
            });
            l.preview ? function() {
                function a() {
                    localStorage.setItem("razzies", l.preview);
                    fp.downloadFirstPage()
                }
                var b = 20 * globalScale<<0, b = e.component({
                    content: Content.LineText({
                        fontSize: b,
                        lineHeight: b,
                        fontWeight: "bold",
                        width: clientWidth,
                        text: "\u5e74\u5ea6" +
                        l.text[3] + "\u5956",
                        color: "#fdf1c8"
                    }),
                    y: middleY(340, globalScale),
                    x: 0,
                    "z-index": 2
                });
                c.onTap(e.component({
                    content: Content.Image(l.resource[7], globalScale),
                    x: middleX(79, globalScale),
                    y: middleY(474, globalScale),
                    "z-index": 2
                }), a);
                var n = e.component({
                    content: Content.Image(l.resource[5], globalScale),
                    x: middleX(48, globalScale),
                    y: middleY(402, globalScale),
                    "z-index": 2
                });
                c.onTap(n, function() {
                    var a = g("div", {
                        css: {
                            position: "absolute",
                            left: 0,
                            right: 0,
                            top: 0,
                            bottom: 0,
                            "z-index": 1E4,
                            background: h.tupleString("url", [staticImgSrc(ua.MicroMessenger ?
                            ua.ios ? "firstpage-tips-up-ios.png" : "firstpage-tips-up-android.png" : ua.ios ? "firstpage-tips-down-ios.png" : "firstpage-tips-down-android.png")]),
                            "background-position": ua.MicroMessenger ? "right top": "center bottom",
                            "background-size": "cover",
                            "background-color": "rgba(0,0,0,0.9)"
                        }
                    }, document.body);
                    c.onTap(a, function() {
                        k.removeNode(a)
                    })
                });
                var v = e.component({
                    content: Content.Image(l.resource[6], globalScale),
                    x: middleX(172, globalScale),
                    y: middleY(402, globalScale),
                    "z-index": 2
                });
                c.onTap(v, a);
                e.registEnterAnimation([[enterAnimate.fallDownAndShake(m)],
                [enterAnimate.emerge(p)], [enterAnimate.circleRound(b)], [h.insert(enterAnimate.shrink(q), {
                    delay: .3
                })], [enterAnimate.emerge(n), enterAnimate.emerge(v)]])
            }() : b ? function() {
                var a = 20 * globalScale<<0, a = e.component({
                    content: Content.LineText({
                        fontSize: a,
                        lineHeight: a,
                        fontWeight: "bold",
                        width: clientWidth,
                        text: "\u5e74\u5ea6" + l.text[3] + "\u5956",
                        color: "#fdf1c8"
                    }),
                    y: middleY(340, globalScale),
                    x: 0,
                    "z-index": 2
                }), b = e.component({
                    content: Content.Image(l.resource[9], globalScale),
                    x: middleX(100.5, globalScale),
                    y: middleY(426.5,
                    globalScale),
                    "z-index": 2
                });
                e.registEnterAnimation([[enterAnimate.fallDownAndShake(m)], [enterAnimate.emerge(p)], [enterAnimate.circleRound(a)], [h.insert(enterAnimate.shrink(q), {
                    delay: .3
                })], [h.insert(enterAnimate.fadeIn(b), {
                    delay: 2
                })]])
            }() : function() {
                l.resource[8].hasChild=!0;
                var a = e.component({
                    content: Content.Image(l.resource[8], globalScale),
                    x: middleX(66, globalScale),
                    y: middleY(275.5, globalScale),
                    "z-index": 2
                }), b = 85 * globalScale<<0, c = a.component({
                    content: Content.Rect({
                        height: 37 * globalScale<<0,
                        width: b
                    }),
                    x: center(a.componentWidth, b) - 1,
                    y: 129 * globalScale<<0
                }), g = 15 * globalScale<<0;
                c.component({
                    content: Content.LineText({
                        fontSize: g,
                        lineHeight: g,
                        fontWeight: "bold",
                        width: b,
                        text: "\u5e74\u5ea6",
                        color: "#40234a"
                    }),
                    y: 0,
                    x: 0
                });
                c.component({
                    content: Content.LineText({
                        fontSize: g,
                        lineHeight: g,
                        fontWeight: "bold",
                        width: b,
                        text: l.text[3] + "\u5956",
                        color: "#40234a"
                    }),
                    y: 20 * globalScale<<0,
                    x: 0
                });
                e.registEnterAnimation([[enterAnimate.fallDownAndShake(m)], [enterAnimate.emerge(p)], [h.insert(enterAnimate.shrink(a), {
                    delay: .3
                })], [h.insert(enterAnimate.shrink(q),
                {
                    duration: .4
                })]])
            }()
        }
    })
})();
(function() {
    var p = zachModule["0"], h = zachModule["2"], e = zachModule["4"], c = zachModule["10"], k = zachModule["8"];
    registLayout("scratch-card", {
        crossOrigin: "*",
        create: function(g, m) {
            g.component({
                content: Content.ImageCover(m.image[0], clientWidth, clientHeight),
                x: 0,
                y: 0
            });
            if (!m.complete) {
                var q = g.component({
                    content: Content.ImageCover(m.image[1], clientWidth, clientHeight),
                    x: 0,
                    y: 0
                }), f = c.Layer(), l = k.layImageByFrame(m.image[1], {
                    width: clientWidth,
                    height: clientHeight,
                    size: k.Size.cover,
                    align: [.5, .5]
                });
                g.onShow(function() {
                    f.resize(clientWidth,
                    clientHeight);
                    f.classList.add("scratch-card");
                    f.draw(function(a) {
                        k.drawImageLayout(a, l)
                    });
                    document.body.appendChild(f);
                    document.body.classList.add("hide-tips");
                    var b = [], a = e.onPointerDown(f, function(c, e, g) {
                        var q = [], v=!0;
                        b.push(q);
                        c.preventDefault();
                        c.stopPropagation();
                        q.push({
                            x: e,
                            y: g
                        });
                        c.onMove(function(a, b, c) {
                            q.push({
                                x: b,
                                y: c
                            })
                        });
                        c.onUp(function() {
                            v=!1
                        });
                        var w = h.requestAnimate(function() {
                            f.draw(function(c) {
                                k.drawImageLayout(c, l);
                                c.lineCap = "round";
                                c.lineJoin = "round";
                                c.globalCompositeOperation = "destination-out";
                                c.beginPath();
                                p.loopArray(b, function(a) {
                                    p.loopArray(a, function(a, b) {
                                        0 === b ? c.moveTo(a.x, a.y) : c.lineTo(a.x, a.y)
                                    });
                                    c.lineWidth = 50;
                                    ua.android && (f.style.display = "none", f.offsetHeight, f.style.display = "inherit");
                                    c.stroke()
                                });
                                if (!v) {
                                    var e=!1;
                                    w.remove();
                                    try {
                                        for (var g = c.getImageData(0, 0, f.width, f.height).data, n = 0, q = 0, r = g.length; q < r; q += 4)
                                            128 > g[q + 3]&&++n
                                    } catch (t) {
                                        e=!0
                                    }
                                    if (e || .3 < n / (g.length / 4))
                                        a.remove(), h.transition(f, "0.8s", {
                                            opacity: 0
                                        }, function() {
                                            document.body.classList.remove("hide-tips");
                                            m.complete=!0;
                                            h.removeNode(f)
                                        })
                                }
                            })
                        })
                    });
                    q.remove()
                });
                g.onRemove(function() {
                    h.removeNode(f)
                })
            }
        }
    })
})();
(function() {
    var p = zachModule["0"], h = zachModule["2"], e = h.element, c = zachModule["4"];
    registLayout("Sign-Up02", {
        create: function(e, h) {
            bindDataSource(e.component({
                content: Content.ImageCover(h.image[0], clientWidth, clientHeight),
                x: 0,
                y: 0
            }), "image", 0);
            c.onTap(bindDataSource(e.component({
                content: Content.Rect({
                    width: 125,
                    height: 125
                }),
                x: (clientWidth - 125) / 2<<0,
                y: {
                    top: 148,
                    middle: 417,
                    bottom: 687
                }
                [h.position[0]] / 2 - 252 + clientHeight / 2<<0
            }), "link", 0), function() {
                fp.track(["Externallinks", "Sign-Up02", h.actionlinks[0]]);
                fp.jump(h.actionlinks[0])
            })
        }
    });
    var k = registFunctionPage("sign-up", function(g, k) {
        function q() {
            function a(c, e) {
                b.push({
                    name: c.name,
                    label: c.label,
                    value: e
                })
            }
            n && n.blur();
            var b = [], c = [], e = [];
            p.loopArray(r, function(b) {
                var f = b.input.value;
                if (b.data.required)
                    if ("" === f)
                        c.push(b.data.label), b.input.classList.add("error");
                    else {
                        var g = b.validate ? b.validate(f): null;
                        g ? (e.push(g), b.input.classList.add("error")) : (a(b.data, f), b.input.classList.remove("error"))
                    } else 
                        a(b.data, b.input.value)
            });
            if (0 !== c.length || 0 !== e.length)
                fp.alert((c.length ?
                [c.join("\uff0c") + "\u4e0d\u80fd\u4e3a\u7a7a\u3002"] : []).concat(e).join("<br>"));
            else {
                var h = p.Loader(), q = fp.Loading(g), u = {};
                fp.lock(!0, l);
                fp.isLogIn() && h.load(function(a) {
                    fp.getUserInfo(function(b) {
                        u = b;
                        a()
                    })
                });
                h.start(function() {
                    var c = {
                        "\u62a5\u540d\u65f6\u95f4": (new Date).getTime(),
                        "\u5fae\u4fe1\u6635\u79f0": u.NickName,
                        "\u5fae\u4fe1\u5934\u50cf": u.HeadPhoto,
                        "\u5fae\u4fe1\u6027\u522b": u.Sex,
                        "\u5fae\u4fe1City": u.City,
                        "\u5fae\u4fe1Province": u.Province,
                        "\u5fae\u4fe1Country": u.Country
                    };
                    p.loopObj(t, function(b,
                    e) {
                        a(e, void 0 === c[b] ? "" : c[b])
                    });
                    fp.sendForm(function() {
                        q.remove();
                        fp.alert(f.data.submitComplete.value, 1E3);
                        setTimeout(function() {
                            g.isIn() && fp.history.back()
                        }, 1E3)
                    }, {
                        id: k.formId,
                        data: b
                    })
                })
            }
        }
        var f = JSON.parse(k.template), l = e("div.page-content", g), b = e("form", {
            action: "/"
        }, l), a = e("div.icon.back", g), n = null, u = null, r = [], t = {};
        g.classList.add("sign-up-form-slide-page");
        g.classList.add("scroll");
        c.onTap(a, fp.history.back);
        h.bindEvent(b, "submit", function(a) {
            a.preventDefault()
        });
        p.loopArray(f.data.component, function(a) {
            if (a.enable)
                if (a.visiable)
                    switch (a.name) {
                    case "textbox":
                        (function() {
                            var c =
                            {}, f = e("label", b), g = c.caption = e("div.caption", a.label + "\uff1a", f), k = c.input = e("input", {
                                placeholder: a.placeholder,
                                name: a.id
                            }, f);
                            switch (a.label) {
                            case "\u7535\u8bdd":
                                k.type = "tel";
                                break;
                            case "\u90ae\u7bb1":
                                k.type = "email", c.validate = function(a) {
                                    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(a) ? null : "\u8bf7\u8f93\u5165\u6b63\u786e\u7684\u90ae\u7bb1\u5730\u5740"
                                }
                            }
                            h.bindEvent(k, "focus", function() {
                                n = k
                            });
                            a.required && e("div.required.icon", g);
                            u && h.bindEvent(u, "keypress", function(a) {
                                13 === a.keyCode &&
                                k.focus()
                            });
                            u = k;
                            c.data = a;
                            r.push(c)
                        })();
                        break;
                    case "btn":
                        (function() {
                            var f = e("label", b), f = e("div.button", {
                                innerHTML: a.value
                            }, f);
                            c.onTap(f, q)
                        })()
                    } else 
                        t[a.label] = a
        });
        u && h.bindEvent(u, "keypress", function(a) {
            13 === a.keyCode && q()
        })
    });
    registLayout("Sign-Up03", {
        create: function(e, h) {
            e.component({
                content: Content.ImageCover(h.image[0], clientWidth, clientHeight),
                x: 0,
                y: 0
            });
            var p = h.image[1];
            c.onTap(e.component({
                content: Content.Image(p),
                x: (clientWidth - p.halfWidth) / 2<<0,
                y: - 44 + clientHeight / 2<<0
            }), function() {
                window.preventJump =
                !0;
                k({
                    data: h.signup,
                    noLog: !JSON.parse(h.signup.template).allowAnymous
                })
            })
        }
    })
})();
(function() {
    var p = zachModule["6"], h = zachModule["0"], e = zachModule["9"];
    registLayout("valentine-01", {
        resource: ["layout-valentine-01-background.png"],
        create: function(c, e) {
            h.loopArray([{
                x: 62,
                y: 608,
                width: 230,
                height: 324,
                rotate: - 6 / 180 * Math.PI
            }, {
                x: 348,
                y: 608,
                width: 230,
                height: 324
            }, {
                x: 222,
                y: 90,
                width: 356,
                height: 462
            }
            ], function(g, f) {
                c.component({
                    content: Content.ImageCover(e.image[f], g.width / 2 * globalScale, g.height / 2 * globalScale),
                    x: middleX(g.x / 2, globalScale),
                    y: middleY(g.y / 2, globalScale),
                    rotate: g.rotate || 0
                })
            });
            Component.BackgroundImage(c,
            e.resource[0], 1);
            var g = bindDataSource(c.component(Content.Image(e.image[3], globalScale)), "image", 3), m = bindDataSource(c.component(Content.Image(e.image[4], globalScale)), "image", 4);
            g["z-index"] = m["z-index"] = 2;
            m.x = g.x = middleX(35, globalScale);
            g.y = middleY(41, globalScale);
            m.y = position.bottomTo(g, m) + g.y + d(9);
            c.registEnterAnimation([[enterAnimate.fadeIn(g)], [enterAnimate.fadeIn(m)]])
        }
    });
    registLayout("valentine-02", {
        resource: ["layout-valentine-02-background.jpg", "layout-valentine-02-frame.png", "layout-valentine-02-love.png",
        "layout-valentine-02-rose.png"],
        create: function(c, k) {
            var g = [];
            c.component(Content.Image(k.resource[0], clientWidth, clientHeight));
            var m = c.component({
                content: Content.Rect({
                    width: 191 * yRatio<<0,
                    height: 200 * yRatio<<0
                })
            });
            h.loopArray(k.image.slice(1), function(a) {
                g.push(m.component(Content.FrameImage({
                    frame: k.resource[1],
                    img: a,
                    imgX: 13 * yRatio,
                    imgY: 15 * yRatio,
                    imgWidth: 164 * yRatio,
                    imgHeight: 162 * yRatio,
                    frameWidth: m.componentWidth,
                    frameHeight: m.componentHeight
                })))
            });
            Component.MultiImageArea({
                page: c,
                contents: g,
                sign: - 1,
                parent: m,
                noAnimation: !0,
                auto: !0
            });
            var q = c.component(Content.Image(k.resource[2], yRatio)), f = c.component(Content.Rect({
                width: 78 * yRatio,
                height: 16 * yRatio<<0
            })), l = bindDataSource(c.component(Content.Image(k.image[0], yRatio)), "image", 0), b = c.component(Content.Image(k.resource[3], yRatio));
            h.loopArray([m, q, f, b], function(a) {
                a.x = center(clientWidth, a.componentWidth)
            });
            m.y = Math.round(37 * yRatio);
            q.y = position.bottomTo(m, q) + m.y + Math.round(25 * yRatio);
            f.y = position.bottomTo(q, f) + q.y + Math.round(20 * yRatio);
            l.x = position.center(f,
            l) + f.x;
            l.y = position.middle(f, l) + f.y;
            b.y = clientHeight - b.componentHeight + 2;
            c.onShow(function() {
                function a(a) {
                    return e.transformOrigin(e.matrix.rotate(a), b.componentWidth / 2<<0, 1.5 * b.componentHeight<<0)
                }
                b.infiniteAnimate({
                    timing: p.Timing.linear,
                    duration: 3.6,
                    progress: {
                        0: {
                            transform: a(0)
                        },
                        25: {
                            transform: a(.2)
                        },
                        50: {
                            transform: a(0)
                        },
                        75: {
                            transform: a( - .2)
                        },
                        100: {
                            transform: a(0)
                        }
                    }
                })
            })
        }
    })
})();
(function() {
    var p = zachModule["2"], h = zachModule["4"];
    registLayout("video", {
        resource: ["layout-video-icon.png"],
        create: function(e, c) {
            var k = c.resource[0], g = k.halfWidth, m = (clientWidth - g) / 2<<0, q =- 36 + clientHeight / 2<<0, f = c.video[0];
            bindDataSource(Component.BackgroundImage(e, c.image[0]), "image", 0);
            h.onTap(bindDataSource(e.component({
                content: Content.Image(k),
                "z-index": 2,
                x: m,
                y: q
            }), "video", 0), function() {
                window.preventJump=!0;
                var b, a;
                if (a = p.element("div", f).querySelector("iframe")) {
                    b = fp.slidePage();
                    b.onSlideIn(function() {
                        window.stopAudio &&
                        window.stopAudio()
                    });
                    b.onSlideOut(function() {
                        window.playAudio && window.playAudio()
                    });
                    b.classList.add("video-slide-page");
                    a.width = clientWidth;
                    a.height = clientWidth / 16 * 9<<0;
                    p.css(a, {
                        position: "absolute",
                        left: 0,
                        top: p.css.px((clientHeight - a.height) / 2<<0)
                    });
                    var c = fp.Loading(b);
                    a.onload = function() {
                        c.remove();
                        a.onload = null
                    };
                    b.appendChild(a);
                    h.onTap(p.element("div.close", b), fp.history.back)
                }
                b ? b.slideIn() : /(^http:\/\/)|(^https:\/\/)/.test(f) ? fp.jump(f) : alert("\u672a\u8bc6\u522b\u7684\u89c6\u9891\u5730\u5740")
            });
            var l = e.component({
                content: Content.Circle({
                    color: "#FFFFFF",
                    r: g / 2<<0
                }),
                "z-index": 1,
                x: m,
                y: q
            });
            e.onShow(function() {
                l.infiniteAnimate({
                    duration: 2.5,
                    progress: {
                        0: {
                            scale: 1,
                            opacity: .8
                        },
                        100: {
                            scale: 2,
                            opacity: 0
                        }
                    }
                })
            })
        }
    })
})();
registLayout("ImageText18", {
    create: function(p, h) {
        bindDataSource(Component.BackgroundImage(p, h.image[0]), "image", 0);
        p.registEnterAnimation([[enterAnimate.emerge(bindDataSource(p.component({
            content: Content.Image(h.image[1]),
            x: (clientWidth - h.image[1].halfWidth) / 2,
            y: .229167 * clientHeight
        }), "image", 1))], [enterAnimate.emerge(bindDataSource(p.component({
            content: Content.Image(h.image[2]),
            x: (clientWidth - h.image[2].halfWidth) / 2,
            y: .229167 * clientHeight + h.image[1].halfHeight + 29
        }), "image", 2))], [enterAnimate.emerge(bindDataSource(p.component({
            content: Content.Image(h.image[3]),
            x: (clientWidth - h.image[3].halfWidth) / 2,
            y: .229167 * clientHeight + h.image[1].halfHeight + h.image[2].halfHeight + 51
        }), "image", 3))]])
    }
});
registLayout("ImageText19", {
    create: function(p, h) {
        bindDataSource(Component.BackgroundImage(p, h.image[0]), "image", 0);
        p.registEnterAnimation([[enterAnimate.emerge(bindDataSource(p.component({
            content: Content.Image(h.image[1]),
            x: (clientWidth - h.image[1].halfWidth) / 2,
            y: .84126 * clientHeight - h.image[3].halfHeight - h.image[2].halfHeight - h.image[1].halfHeight - 51
        }), "image", 1))], [enterAnimate.emerge(bindDataSource(p.component({
            content: Content.Image(h.image[2]),
            x: (clientWidth - h.image[2].halfWidth) / 2,
            y: .84126 * clientHeight -
            h.image[3].halfHeight - 12 - h.image[2].halfHeight - 10
        }), "image", 2))], [enterAnimate.emerge(bindDataSource(p.component({
            content: Content.Image(h.image[3]),
            x: (clientWidth - h.image[3].halfWidth) / 2,
            y: .84126 * clientHeight - h.image[3].halfHeight
        }), "image", 3))]])
    }
});
registLayout("ImageText20", {
    create: function(p, h) {
        bindDataSource(Component.BackgroundImage(p, h.image[0]), "image", 0);
        var e = bindDataSource(p.component({
            content: Content.BlockText({
                width: clientWidth - 150,
                fontSize: 27,
                lineHeight: 35,
                text: h.text[0],
                fontWeight: "bold",
                color: "white"
            }),
            x: 75,
            y: 95
        }), "text", 0);
        p.registEnterAnimation([[enterAnimate.emerge(e)], [enterAnimate.emerge(bindDataSource(p.component({
            content: Content.BlockText({
                width: clientWidth - 150,
                fontSize: 10,
                lineHeight: 20,
                text: h.text[1],
                color: "#d2d2d2"
            }),
            x: 75,
            y: 95 + e.componentHeight + 26
        }), "text", 1))]])
    }
});

