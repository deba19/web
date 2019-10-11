(function (e) {
    function a(a) {
        for (var n, r, s = a[0], l = a[1], p = a[2], m = 0, c = []; m < s.length; m++) r = s[m], Object.prototype.hasOwnProperty.call(o, r) && o[r] && c.push(o[r][0]), o[r] = 0;
        for (n in l) Object.prototype.hasOwnProperty.call(l, n) && (e[n] = l[n]);
        u && u(a);
        while (c.length) c.shift()();
        return i.push.apply(i, p || []), t()
    }

    function t() {
        for (var e, a = 0; a < i.length; a++) {
            for (var t = i[a], n = !0, r = 1; r < t.length; r++) {
                var s = t[r];
                0 !== o[s] && (n = !1)
            }
            n && (i.splice(a--, 1), e = l(l.s = t[0]))
        }
        return e
    }

    var n = {}, r = {app: 0}, o = {app: 0}, i = [];

    function s(e) {
        return l.p + "js/" + ({}[e] || e) + "." + {"chunk-d57d6b5e": "ff2b04e4"}[e] + ".js"
    }

    function l(a) {
        if (n[a]) return n[a].exports;
        var t = n[a] = {i: a, l: !1, exports: {}};
        return e[a].call(t.exports, t, t.exports, l), t.l = !0, t.exports
    }

    l.e = function (e) {
        var a = [], t = {"chunk-d57d6b5e": 1};
        r[e] ? a.push(r[e]) : 0 !== r[e] && t[e] && a.push(r[e] = new Promise((function (a, t) {
            for (var n = "css/" + ({}[e] || e) + "." + {"chunk-d57d6b5e": "70c51574"}[e] + ".css", o = l.p + n, i = document.getElementsByTagName("link"), s = 0; s < i.length; s++) {
                var p = i[s], m = p.getAttribute("data-href") || p.getAttribute("href");
                if ("stylesheet" === p.rel && (m === n || m === o)) return a()
            }
            var c = document.getElementsByTagName("style");
            for (s = 0; s < c.length; s++) {
                p = c[s], m = p.getAttribute("data-href");
                if (m === n || m === o) return a()
            }
            var u = document.createElement("link");
            u.rel = "stylesheet", u.type = "text/css", u.onload = a, u.onerror = function (a) {
                var n = a && a.target && a.target.src || o,
                    i = new Error("Loading CSS chunk " + e + " failed.\n(" + n + ")");
                i.code = "CSS_CHUNK_LOAD_FAILED", i.request = n, delete r[e], u.parentNode.removeChild(u), t(i)
            }, u.href = o;
            var d = document.getElementsByTagName("head")[0];
            d.appendChild(u)
        })).then((function () {
            r[e] = 0
        })));
        var n = o[e];
        if (0 !== n) if (n) a.push(n[2]); else {
            var i = new Promise((function (a, t) {
                n = o[e] = [a, t]
            }));
            a.push(n[2] = i);
            var p, m = document.createElement("script");
            m.charset = "utf-8", m.timeout = 120, l.nc && m.setAttribute("nonce", l.nc), m.src = s(e);
            var c = new Error;
            p = function (a) {
                m.onerror = m.onload = null, clearTimeout(u);
                var t = o[e];
                if (0 !== t) {
                    if (t) {
                        var n = a && ("load" === a.type ? "missing" : a.type), r = a && a.target && a.target.src;
                        c.message = "Loading chunk " + e + " failed.\n(" + n + ": " + r + ")", c.name = "ChunkLoadError", c.type = n, c.request = r, t[1](c)
                    }
                    o[e] = void 0
                }
            };
            var u = setTimeout((function () {
                p({type: "timeout", target: m})
            }), 12e4);
            m.onerror = m.onload = p, document.head.appendChild(m)
        }
        return Promise.all(a)
    }, l.m = e, l.c = n, l.d = function (e, a, t) {
        l.o(e, a) || Object.defineProperty(e, a, {enumerable: !0, get: t})
    }, l.r = function (e) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
    }, l.t = function (e, a) {
        if (1 & a && (e = l(e)), 8 & a) return e;
        if (4 & a && "object" === typeof e && e && e.__esModule) return e;
        var t = Object.create(null);
        if (l.r(t), Object.defineProperty(t, "default", {
            enumerable: !0,
            value: e
        }), 2 & a && "string" != typeof e) for (var n in e) l.d(t, n, function (a) {
            return e[a]
        }.bind(null, n));
        return t
    }, l.n = function (e) {
        var a = e && e.__esModule ? function () {
            return e["default"]
        } : function () {
            return e
        };
        return l.d(a, "a", a), a
    }, l.o = function (e, a) {
        return Object.prototype.hasOwnProperty.call(e, a)
    }, l.p = "/", l.oe = function (e) {
        throw console.error(e), e
    };
    var p = window["webpackJsonp"] = window["webpackJsonp"] || [], m = p.push.bind(p);
    p.push = a, p = p.slice();
    for (var c = 0; c < p.length; c++) a(p[c]);
    var u = m;
    i.push([0, "chunk-vendors"]), t()
})({
    0: function (e, a, t) {
        e.exports = t("56d7")
    }, "06a4": function (e, a, t) {
        "use strict";
        var n = t("b951"), r = t.n(n);
        r.a
    }, "0d46": function (e, a, t) {
        "use strict";
        var n = t("8433"), r = t.n(n);
        r.a
    }, "0fe5": function (e, a, t) {
    }, "1f17": function (e, a, t) {
        "use strict";
        t.r(a);
        var n = function () {
                var e = this, a = e.$createElement;
                e._self._c;
                return e._m(0)
            }, r = [function () {
                var e = this, a = e.$createElement, n = e._self._c || a;
                return n("div", {staticClass: "event"}, [n("div", {
                    staticClass: "event-holder",
                    attrs: {
                        "data-aos": "slide-left",
                        "data-aos-offset": "200",
                        "data-aos-duration": "800",
                        "data-aos-easing": "ease-in-out"
                    }
                }, [n("h1", [e._v("About "), n("span", [e._v("Us")])]), n("div", {staticClass: "event-holder-data"}, [n("div", {staticClass: "event-down-left"}, [n("div", {staticClass: "gallery"}, [n("img", {
                    staticClass: "left-2",
                    attrs: {src: t("8a97"), alt: ""}
                }), n("img", {staticClass: "left-1", attrs: {src: t("8a97"), alt: ""}}), n("img", {
                    staticClass: "main",
                    attrs: {src: t("8a97"), alt: ""}
                }), n("img", {staticClass: "right-2", attrs: {src: t("8a97"), alt: ""}}), n("img", {
                    staticClass: "right-1",
                    attrs: {src: t("8a97"), alt: ""}
                })])])])]), n("div", {
                    staticClass: "event-down",
                    attrs: {
                        "data-aos": "fade-up",
                        "data-aos-offset": "200",
                        "data-aos-duration": "800",
                        "data-aos-easing": "ease-in-out"
                    }
                }, [n("div", {staticClass: "event-down-left"}, [n("h3", [e._v("Something")]), n("p", {staticClass: "content"}, [e._v("But I must explain to you how all this mistaken idea of denouncing pleasure and\n                praising pain was\n                born and I will give you a complete account of the system, and expound the actual teachings of the\n                great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or\n                avoids pleasure itself, because it is pleasure, but because those who do not…")])]), n("div", {staticClass: "event-down-right"}, [n("h3", [e._v("Event Details")]), n("p", {staticClass: "content"}, [e._v("But I must explain to you how all this mistaken idea of denouncing pleasure and\n                praising pain was\n                born and I will give you a complete account of the system, and expound the actual teachings of the\n                great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or\n                avoids pleasure itself, because it is pleasure, but because those who do not…")]), n("div", {staticClass: "more"}, [n("div", {
                    staticClass: "more-detials",
                    attrs: {
                        "data-aos": "fade-up",
                        "data-aos-offset": "200",
                        "data-aos-duration": "800",
                        "data-aos-delay": "500",
                        "data-aos-easing": "ease-in-out"
                    }
                }, [n("p", [e._v("Date: "), n("span", [e._v("25/09/2019")])]), n("p", [e._v("Time: "), n("span", [e._v("12pm")])]), n("p", [e._v("Venue: "), n("span", [e._v("Lovely Professional University")])])]), n("div", {
                    staticClass: "reg",
                    attrs: {
                        "data-aos": "fade-up",
                        "data-aos-offset": "100",
                        "data-aos-duration": "100",
                        "data-aos-delay": "1000",
                        "data-aos-easing": "ease-in-out"
                    }
                })])])])])
            }], o = {name: "AboutComponent"}, i = o, s = (t("06a4"), t("2877")),
            l = Object(s["a"])(i, n, r, !1, null, "511184ee", null);
        a["default"] = l.exports
    }, "3e03": function (e, a, t) {
        "use strict";
        var n = t("6db0"), r = t.n(n);
        r.a
    }, "50a6": function (e, a, t) {
        "use strict";
        t.r(a);
        var n = function () {
            var e = this, a = e.$createElement, n = e._self._c || a;
            return n("div", {staticClass: "registration"}, [this.step < 6 ? n("img", {
                staticClass: "center-logo",
                attrs: {src: t("58c3"), alt: ""}
            }) : e._e(), this.step < 7 ? n("div", {staticClass: "registration-left"}, [n("h2", [e._v("Register")]), n("h5", [e._v("Step 1 of 4")]), 1 === this.step ? n("div", {staticClass: "input"}, [n("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.formData.teamName,
                    expression: "formData.teamName"
                }],
                attrs: {type: "text", placeholder: "Team Name"},
                domProps: {value: e.formData.teamName},
                on: {
                    input: function (a) {
                        a.target.composing || e.$set(e.formData, "teamName", a.target.value)
                    }
                }
            }), n("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.formData.college_name,
                    expression: "formData.college_name"
                }],
                attrs: {type: "text", placeholder: "College Name"},
                domProps: {value: e.formData.college_name},
                on: {
                    input: function (a) {
                        a.target.composing || e.$set(e.formData, "college_name", a.target.value)
                    }
                }
            }), n("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.formData.college_address,
                    expression: "formData.college_address"
                }],
                attrs: {type: "text", placeholder: "College Address"},
                domProps: {value: e.formData.college_address},
                on: {
                    input: function (a) {
                        a.target.composing || e.$set(e.formData, "college_address", a.target.value)
                    }
                }
            }), n("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.formData.captain.name,
                    expression: "formData.captain.name"
                }],
                attrs: {type: "text", placeholder: "Camptain's Name"},
                domProps: {value: e.formData.captain.name},
                on: {
                    input: function (a) {
                        a.target.composing || e.$set(e.formData.captain, "name", a.target.value)
                    }
                }
            }), n("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.formData.captain.reg,
                    expression: "formData.captain.reg"
                }],
                attrs: {type: "text", placeholder: "Captain Aadhar No."},
                domProps: {value: e.formData.captain.reg},
                on: {
                    input: function (a) {
                        a.target.composing || e.$set(e.formData.captain, "reg", a.target.value)
                    }
                }
            }), n("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.formData.captain.email,
                    expression: "formData.captain.email"
                }],
                attrs: {type: "text", placeholder: "Email"},
                domProps: {value: e.formData.captain.email},
                on: {
                    input: function (a) {
                        a.target.composing || e.$set(e.formData.captain, "email", a.target.value)
                    }
                }
            }), n("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.formData.captain.contact,
                    expression: "formData.captain.contact"
                }],
                attrs: {type: "text", placeholder: "Contact No."},
                domProps: {value: e.formData.captain.contact},
                on: {
                    input: function (a) {
                        a.target.composing || e.$set(e.formData.captain, "contact", a.target.value)
                    }
                }
            }), n("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.formData.captain.whatsApp,
                    expression: "formData.captain.whatsApp"
                }],
                attrs: {type: "text", placeholder: "WhatsApp No."},
                domProps: {value: e.formData.captain.whatsApp},
                on: {
                    input: function (a) {
                        a.target.composing || e.$set(e.formData.captain, "whatsApp", a.target.value)
                    }
                }
            })]) : e._e(), 2 === this.step ? n("div", {staticClass: "input"}, [n("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.formData.viceCaptain.name,
                    expression: "formData.viceCaptain.name"
                }],
                attrs: {type: "text", placeholder: "Vice Captain's Name"},
                domProps: {value: e.formData.viceCaptain.name},
                on: {
                    input: function (a) {
                        a.target.composing || e.$set(e.formData.viceCaptain, "name", a.target.value)
                    }
                }
            }), n("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.formData.viceCaptain.reg,
                    expression: "formData.viceCaptain.reg"
                }],
                attrs: {type: "text", placeholder: "Vice Captain Aadhar No."},
                domProps: {value: e.formData.viceCaptain.reg},
                on: {
                    input: function (a) {
                        a.target.composing || e.$set(e.formData.viceCaptain, "reg", a.target.value)
                    }
                }
            }), n("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.formData.viceCaptain.email,
                    expression: "formData.viceCaptain.email"
                }],
                attrs: {type: "text", placeholder: "Email"},
                domProps: {value: e.formData.viceCaptain.email},
                on: {
                    input: function (a) {
                        a.target.composing || e.$set(e.formData.viceCaptain, "email", a.target.value)
                    }
                }
            }), n("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.formData.viceCaptain.contact,
                    expression: "formData.viceCaptain.contact"
                }],
                attrs: {type: "text", placeholder: "Contact No."},
                domProps: {value: e.formData.viceCaptain.contact},
                on: {
                    input: function (a) {
                        a.target.composing || e.$set(e.formData.viceCaptain, "contact", a.target.value)
                    }
                }
            }), n("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.formData.player3name,
                    expression: "formData.player3name"
                }],
                attrs: {type: "text", placeholder: "Player 3 Name"},
                domProps: {value: e.formData.player3name},
                on: {
                    input: function (a) {
                        a.target.composing || e.$set(e.formData, "player3name", a.target.value)
                    }
                }
            }), n("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.formData.player3Reg,
                    expression: "formData.player3Reg"
                }],
                attrs: {type: "text", placeholder: "Player 3 Reg no."},
                domProps: {value: e.formData.player3Reg},
                on: {
                    input: function (a) {
                        a.target.composing || e.$set(e.formData, "player3Reg", a.target.value)
                    }
                }
            })]) : e._e(), 3 === this.step ? n("div", {staticClass: "input"}, [n("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.formData.player4name,
                    expression: "formData.player4name"
                }],
                attrs: {type: "text", placeholder: "Player 4 Name"},
                domProps: {value: e.formData.player4name},
                on: {
                    input: function (a) {
                        a.target.composing || e.$set(e.formData, "player4name", a.target.value)
                    }
                }
            }), n("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.formData.player4Reg,
                    expression: "formData.player4Reg"
                }],
                attrs: {type: "text", placeholder: "Player 4 Reg no."},
                domProps: {value: e.formData.player4Reg},
                on: {
                    input: function (a) {
                        a.target.composing || e.$set(e.formData, "player4Reg", a.target.value)
                    }
                }
            }), n("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.formData.player5name,
                    expression: "formData.player5name"
                }],
                attrs: {type: "text", placeholder: "Player 5 Name"},
                domProps: {value: e.formData.player5name},
                on: {
                    input: function (a) {
                        a.target.composing || e.$set(e.formData, "player5name", a.target.value)
                    }
                }
            }), n("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.formData.player5Reg,
                    expression: "formData.player5Reg"
                }],
                attrs: {type: "text", placeholder: "Player 5 Reg no."},
                domProps: {value: e.formData.player5Reg},
                on: {
                    input: function (a) {
                        a.target.composing || e.$set(e.formData, "player5Reg", a.target.value)
                    }
                }
            }), n("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.formData.player6name,
                    expression: "formData.player6name"
                }],
                attrs: {type: "text", placeholder: "Player 6 Name"},
                domProps: {value: e.formData.player6name},
                on: {
                    input: function (a) {
                        a.target.composing || e.$set(e.formData, "player6name", a.target.value)
                    }
                }
            }), n("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.formData.player6Reg,
                    expression: "formData.player6Reg"
                }],
                attrs: {type: "text", placeholder: "Player 6 Reg no."},
                domProps: {value: e.formData.player6Reg},
                on: {
                    input: function (a) {
                        a.target.composing || e.$set(e.formData, "player6Reg", a.target.value)
                    }
                }
            })]) : e._e(), 4 === this.step ? n("div", {staticClass: "input"}, [n("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.formData.player7name,
                    expression: "formData.player7name"
                }],
                attrs: {type: "text", placeholder: "Player 7 Name"},
                domProps: {value: e.formData.player7name},
                on: {
                    input: function (a) {
                        a.target.composing || e.$set(e.formData, "player7name", a.target.value)
                    }
                }
            }), n("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.formData.player7Reg,
                    expression: "formData.player7Reg"
                }],
                attrs: {type: "text", placeholder: "Player 7 Reg no."},
                domProps: {value: e.formData.player7Reg},
                on: {
                    input: function (a) {
                        a.target.composing || e.$set(e.formData, "player7Reg", a.target.value)
                    }
                }
            }), n("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.formData.player8name,
                    expression: "formData.player8name"
                }],
                attrs: {type: "text", placeholder: "Player 8 Name"},
                domProps: {value: e.formData.player8name},
                on: {
                    input: function (a) {
                        a.target.composing || e.$set(e.formData, "player8name", a.target.value)
                    }
                }
            }), n("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.formData.player8Reg,
                    expression: "formData.player8Reg"
                }],
                attrs: {type: "text", placeholder: "Player 8 Reg no."},
                domProps: {value: e.formData.player8Reg},
                on: {
                    input: function (a) {
                        a.target.composing || e.$set(e.formData, "player8Reg", a.target.value)
                    }
                }
            }), n("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.formData.player9name,
                    expression: "formData.player9name"
                }],
                attrs: {type: "text", placeholder: "Player 9 Name"},
                domProps: {value: e.formData.player9name},
                on: {
                    input: function (a) {
                        a.target.composing || e.$set(e.formData, "player9name", a.target.value)
                    }
                }
            }), n("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.formData.player9Reg,
                    expression: "formData.player9Reg"
                }],
                attrs: {type: "text", placeholder: "Player 9 Reg no."},
                domProps: {value: e.formData.player9Reg},
                on: {
                    input: function (a) {
                        a.target.composing || e.$set(e.formData, "player9Reg", a.target.value)
                    }
                }
            })]) : e._e(), 5 === this.step ? n("div", {staticClass: "input"}, [n("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.formData.player10name,
                    expression: "formData.player10name"
                }],
                attrs: {type: "text", placeholder: "Player 10 Name"},
                domProps: {value: e.formData.player10name},
                on: {
                    input: function (a) {
                        a.target.composing || e.$set(e.formData, "player10name", a.target.value)
                    }
                }
            }), n("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.formData.player10Reg,
                    expression: "formData.player10Reg"
                }],
                attrs: {type: "text", placeholder: "Player 10 Reg no."},
                domProps: {value: e.formData.player10Reg},
                on: {
                    input: function (a) {
                        a.target.composing || e.$set(e.formData, "player10Reg", a.target.value)
                    }
                }
            }), n("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.formData.player11name,
                    expression: "formData.player11name"
                }],
                attrs: {type: "text", placeholder: "Player 11 Name"},
                domProps: {value: e.formData.player11name},
                on: {
                    input: function (a) {
                        a.target.composing || e.$set(e.formData, "player11name", a.target.value)
                    }
                }
            }), n("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.formData.player11Reg,
                    expression: "formData.player11Reg"
                }],
                attrs: {type: "text", placeholder: "Player 11 Reg no."},
                domProps: {value: e.formData.player11Reg},
                on: {
                    input: function (a) {
                        a.target.composing || e.$set(e.formData, "player11Reg", a.target.value)
                    }
                }
            }), n("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.formData.player12name,
                    expression: "formData.player12name"
                }],
                attrs: {type: "text", placeholder: "Player 12 Name"},
                domProps: {value: e.formData.player12name},
                on: {
                    input: function (a) {
                        a.target.composing || e.$set(e.formData, "player12name", a.target.value)
                    }
                }
            }), n("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.formData.player12Reg,
                    expression: "formData.player12Reg"
                }],
                attrs: {type: "text", placeholder: "Player 12 Reg no."},
                domProps: {value: e.formData.player12Reg},
                on: {
                    input: function (a) {
                        a.target.composing || e.$set(e.formData, "player12Reg", a.target.value)
                    }
                }
            })]) : e._e(), 6 === this.step ? n("div", {staticClass: "input"}, [n("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.formData.player13name,
                    expression: "formData.player13name"
                }],
                attrs: {type: "text", placeholder: "Player 13 Name"},
                domProps: {value: e.formData.player13name},
                on: {
                    input: function (a) {
                        a.target.composing || e.$set(e.formData, "player13name", a.target.value)
                    }
                }
            }), n("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.formData.player13Reg,
                    expression: "formData.player13Reg"
                }],
                attrs: {type: "text", placeholder: "Player 13 Reg no."},
                domProps: {value: e.formData.player13Reg},
                on: {
                    input: function (a) {
                        a.target.composing || e.$set(e.formData, "player13Reg", a.target.value)
                    }
                }
            }), n("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.formData.player14name,
                    expression: "formData.player14name"
                }],
                attrs: {type: "text", placeholder: "Player 14 Name"},
                domProps: {value: e.formData.player14name},
                on: {
                    input: function (a) {
                        a.target.composing || e.$set(e.formData, "player14name", a.target.value)
                    }
                }
            }), n("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.formData.player14Reg,
                    expression: "formData.player14Reg"
                }],
                attrs: {type: "text", placeholder: "Player 14 Reg no."},
                domProps: {value: e.formData.player14Reg},
                on: {
                    input: function (a) {
                        a.target.composing || e.$set(e.formData, "player14Reg", a.target.value)
                    }
                }
            }), n("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.formData.player15name,
                    expression: "formData.player15name"
                }],
                attrs: {type: "text", placeholder: "Player 15 Name"},
                domProps: {value: e.formData.player15name},
                on: {
                    input: function (a) {
                        a.target.composing || e.$set(e.formData, "player15name", a.target.value)
                    }
                }
            }), n("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.formData.player15Reg,
                    expression: "formData.player15Reg"
                }],
                attrs: {type: "text", placeholder: "Player 15 Reg no."},
                domProps: {value: e.formData.player15Reg},
                on: {
                    input: function (a) {
                        a.target.composing || e.$set(e.formData, "player15Reg", a.target.value)
                    }
                }
            })]) : e._e(), n("div", {staticClass: "buttons"}, [this.step < 1 ? n("button", {on: {click: e.back}}, [e._v("Back")]) : e._e(), this.step < 7 ? n("button", {
                staticStyle: {"margin-left": "auto"},
                on: {click: e.next}
            }, [e._v("Next")]) : e._e()])]) : e._e(), this.step < 7 ? n("div", {staticClass: "registration-right"}, [e._m(0), n("img", {
                staticClass: "reg-img",
                attrs: {src: t("53b7"), alt: ""}
            })]) : e._e(), 7 === this.step ? n("div", {staticClass: "registration-left"}, [n("h2", {
                staticStyle: {
                    "font-size": "3vw",
                    color: "white"
                }
            }, [e._v("Accommodation Required")]), n("button", {
                staticClass: "button",
                staticStyle: {"background-color": "#EF5939"},
                attrs: {tag: "button", to: "/reg"},
                on: {click: e.yes}
            }, [e._v("Yes\n        ")]), n("button", {
                staticClass: "button",
                staticStyle: {"background-color": "#2D5D7C"},
                attrs: {tag: "button", to: "/reg"},
                on: {click: e.not}
            }, [e._v("No\n        ")])]) : e._e(), 8 === this.step && !0 !== this.message ? n("div", {staticClass: "registration-left"}, [n("h2", {
                staticStyle: {
                    "font-size": "3vw",
                    color: "white"
                }
            }, [e._v("Successful")]), n("button", {
                staticClass: "button",
                staticStyle: {"background-color": "green"},
                attrs: {tag: "button"},
                on: {click: e.register}
            }, [e._v("Submit\n        ")])]) : e._e(), e.message ? n("div", {staticClass: "registration-left"}, [n("h2", {
                staticStyle: {
                    "font-size": "3vw",
                    color: "white"
                }
            }, [e._v("Registration Successful")])]) : e._e()])
        }, r = [function () {
            var e = this, a = e.$createElement, t = e._self._c || a;
            return t("div", {staticClass: "reg-right"}, [t("p", [e._v("Witness")]), t("span", {staticClass: "small"}, [e._v("the")]), t("span", {staticClass: "large"}, [e._v("Change")])])
        }], o = (t("7f7f"), t("bc3a")), i = t.n(o), s = {
            name: "ExternalRegistrationComponents", data: function () {
                return {
                    message: !1,
                    activeIndex: 0,
                    step: 1,
                    formData: {
                        teamName: "Nitish",
                        college_name: "test",
                        college_address: "edas",
                        captain: {
                            name: "Nitish",
                            reg: 11701703,
                            email: "nkpc14@gmail.com",
                            contact: 7376977077,
                            whatsApp: 7376977077
                        },
                        viceCaptain: {name: "Nitish", reg: 11701703, email: "nkpc14@gmail.com", contact: 7376977077},
                        player3name: "Nitish",
                        player3Reg: 11701703,
                        player4name: "Nitish",
                        player4Reg: 11701703,
                        player5name: "Nitish",
                        player5Reg: 11701703,
                        player6name: "Nitish",
                        player6Reg: 11701703,
                        player7name: "Nitish",
                        player7Reg: 11701703,
                        player8name: "Nitish",
                        player8Reg: 11701703,
                        player9name: "Nitish",
                        player9Reg: 11701703,
                        player10name: "Nitish",
                        player10Reg: 11701703,
                        player11name: "Nitish",
                        player11Reg: 11701703,
                        player12name: "Nitish",
                        player12Reg: 11701703,
                        player13name: "Nitish",
                        player13Reg: 11701703,
                        player14name: "Nitish",
                        player14Reg: 11701703,
                        player15name: "Nitish",
                        player15Reg: 11701703,
                        accomodation: !1,
                        externalTeam: !1
                    }
                }
            }, props: {eventData: Array}, methods: {
                back: function () {
                    this.step > 1 && (this.step = this.step - 1)
                }, next: function () {
                    this.step < 8 && (this.step = this.step + 1)
                }, register: function () {
                    var e = this;
                    console.log(this.formData);
                    var a = new FormData;
                    a.append("team_name", this.formData.teamName), a.append("college_name", this.formData.college_name), a.append("college_address", this.formData.college_address), a.append("captain_name", this.formData.captain.name), a.append("aadhar_number", this.formData.captain.reg), a.append("email", this.formData.captain.email), a.append("contact_number", this.formData.captain.contact), a.append("whatsapp_number", this.formData.captain.whatsApp), a.append("vice_captain_name", this.formData.viceCaptain.name), a.append("vice_aadhar_number", this.formData.viceCaptain.reg), a.append("vice_email", this.formData.viceCaptain.email), a.append("vice_contact_number", this.formData.viceCaptain.contact), a.append("player_name3", this.formData.player3name), a.append("player_registration_number3", this.formData.player3Reg), a.append("player_name4", this.formData.player4name), a.append("player_registration_number4", this.formData.player4Reg), a.append("player_name5", this.formData.player5name), a.append("player_registration_number5", this.formData.player5Reg), a.append("player_name6", this.formData.player6name), a.append("player_registration_number6", this.formData.player6Reg), a.append("player_name7", this.formData.player7name), a.append("player_registration_number7", this.formData.player7Reg), a.append("player_name8", this.formData.player8name), a.append("player_registration_number8", this.formData.player8Reg), a.append("player_name9", this.formData.player9name), a.append("player_registration_number9", this.formData.player9Reg), a.append("player_name10", this.formData.player10name), a.append("player_registration_number10", this.formData.player10Reg), a.append("player_name11", this.formData.player11name), a.append("player_registration_number11", this.formData.player11Reg), a.append("player_name12", this.formData.player12name), a.append("player_registration_number12", this.formData.player12Reg), a.append("player_name13", this.formData.player13name), a.append("player_registration_number13", this.formData.player13Reg), a.append("player_name14", this.formData.player14name), a.append("player_registration_number14", this.formData.player14Reg), a.append("player_name15", this.formData.player15name), a.append("player_registration_number15", this.formData.player15Reg), a.append("accommodation", this.formData.accomodation), i.a.post("/api/externalReg/", a).then((function (a) {
                        a && (e.message = !0)
                    })).catch((function (e) {
                        console.log(e)
                    }))
                }, not: function () {
                    this.formData.accomodation = !1, this.step = 8
                }, yes: function () {
                    this.formData.accomodation = !0, this.step = 8
                }
            }
        }, l = s, p = (t("cec2"), t("2877")), m = Object(p["a"])(l, n, r, !1, null, "674234fb", null);
        a["default"] = m.exports
    }, "534f": function (e, a, t) {
        e.exports = t.p + "img/logo1.5c04a1a4.png"
    }, 5372: function (e, a, t) {
        "use strict";
        var n = t("0fe5"), r = t.n(n);
        r.a
    }, "53b7": function (e, a, t) {
        e.exports = t.p + "img/reg.79e2ce27.png"
    }, "56d7": function (e, a, t) {
        "use strict";
        t.r(a);
        t("cadf"), t("551c"), t("f751"), t("097d");
        var n = t("2b0e"), r = function () {
                var e = this, a = e.$createElement, t = e._self._c || a;
                return t("div", {attrs: {id: "app"}}, [t("router-view")], 1)
            }, o = [], i = (t("5c0b"), t("2877")), s = {}, l = Object(i["a"])(s, r, o, !1, null, null, null), p = l.exports,
            m = t("8c4f"), c = function () {
                var e = this, a = e.$createElement, n = e._self._c || a;
                return n("div", {staticClass: "home"}, [n("div", {staticClass: "section_loader"}, [n("input", {
                    staticClass: "section_loader_screen-checkbox",
                    attrs: {type: "checkbox", id: "navi-toggle"}
                }), n("label", {
                    staticClass: "navigation_button",
                    attrs: {for: "navi-toggle"}
                }, [n("div", {staticClass: "navigation_button-adjust"}, [n("img", {
                    staticClass: "navigation_logo",
                    attrs: {src: t("534f")},
                    on: {click: e.toggleMainComponent}
                })])]), n("div", {staticClass: "section_loader_screen"})]), n("div", {staticClass: "section_main"}, [n("div", {staticClass: "section_menu"}, [e._m(0), n("div", {staticClass: "section_menu-heading"}, [n("div", {staticClass: "section_menu_heading-home"}, [n("router-link", {
                    staticClass: "section_menu_heading-homeEdit",
                    attrs: {tag: "a", to: "/"}
                }, [e._v("Home")])], 1), n("div", {staticClass: "section_menu_heading-Events"}, [n("router-link", {
                    staticClass: "section_menu_heading-EventsEdit",
                    attrs: {tag: "a", to: "/event"}
                }, [e._v("Events\n                    ")])], 1), n("div", {staticClass: "section_menu_heading-About"}, [n("router-link", {
                    staticClass: "section_menu_heading-AboutEdit",
                    attrs: {tag: "a", to: "/about"}
                }, [e._v("About\n                    ")])], 1), n("div", {staticClass: "section_menu_heading-contact"}, [n("router-link", {
                    staticClass: "section_menu_heading-contactEdit",
                    attrs: {tag: "a", to: "/contactUs"}
                }, [e._v("Contact\n                    ")])], 1)]), e._m(1)]), e.mainComponent && "/" === this.$route.path ? n("MainComponent", {attrs: {eventData: e.eventData[0]}}) : e._e(), "/event" === this.$route.path ? n("EventComponentNew", {attrs: {eventData: e.eventData}}) : e._e(), "/reg" === this.$route.path ? n("RegistrationComponents", {attrs: {eventData: e.eventData}}) : e._e(), "/regExternal" === this.$route.path ? n("ExternalRegistrationComponents", {attrs: {eventData: e.eventData}}) : e._e(), "/regSelection" === this.$route.path ? n("RegistrationSelection", {attrs: {eventData: e.eventData}}) : e._e(), "/about" === this.$route.path ? n("AboutComponent") : e._e(), "/contactUs" === this.$route.path ? n("ContactUsComponent") : e._e()], 1)])
            }, u = [function () {
                var e = this, a = e.$createElement, n = e._self._c || a;
                return n("div", {staticClass: "section_menu_logo"}, [n("img", {
                    staticClass: "section_menu_logo-image",
                    attrs: {src: t("cf05")}
                }), n("hr", {staticClass: "line_color"})])
            }, function () {
                var e = this, a = e.$createElement, n = e._self._c || a;
                return n("div", {staticClass: "section_menu_heading-sociallinks"}, [n("div", {staticClass: "section_menu_heading_sociallinks-facebook"}, [n("a", {attrs: {href: "#"}}, [n("img", {
                    staticClass: "social_link-sizing",
                    attrs: {src: t("d553")}
                })])]), n("div", {staticClass: "section_menu_heading_sociallinks-linkedIn"}, [n("a", {attrs: {href: "#"}}, [n("img", {
                    staticClass: "social_link-sizing",
                    attrs: {src: t("5a44")}
                })])]), n("div", {staticClass: "section_menu_heading_sociallinks-instagram"}, [n("a", {attrs: {href: "#"}}, [n("img", {
                    staticClass: "social_link-sizing",
                    attrs: {src: t("678f")}
                })])])])
            }], d = function () {
                var e = this, a = e.$createElement, t = e._self._c || a;
                return t("div", {staticClass: "section_content"}, [e._m(0), t("div", {staticClass: "section_content-video"}, [t("img", {
                    staticClass: "section_content-video-dim",
                    attrs: {
                        "data-aos": "fade-left",
                        "data-aos-offset": "500",
                        "data-aos-delay": "1000",
                        "data-aos-duration": "800",
                        "data-aos-easing": "ease-in-out",
                        src: e.eventData.poster
                    }
                })]), t("div", {
                    staticClass: "section_content-EventContent",
                    attrs: {
                        "data-aos": "fade-up",
                        "data-aos-offset": "100",
                        "data-aos-delay": "2000",
                        "data-aos-duration": "5000",
                        "data-aos-easing": "ease-in-out"
                    }
                }, [t("router-link", {
                    staticClass: "section_content-EventContent-left",
                    attrs: {tag: "div", to: "/event"}
                }, [t("img", {
                    staticClass: "section_content-EventContent-left-image",
                    attrs: {src: e.eventData.image}
                })]), t("div", {staticClass: "section_content-EventContent-right"}, [t("div", {staticClass: "section_content-EventContent-right-heading-main"}, [e._v(e._s(e.eventData.name))]), t("div", {staticClass: "section_content-EventContent-right-heading-date"}, [e._v("Date: " + e._s(e.eventData.date))]), t("div", {staticClass: "section_content-EventContent-right-heading-content"}, [e._v("\n                    " + e._s(e.eventData.discription) + "\n                ")]), t("div", {staticClass: "section_content-EventContent-right-heading-inDetail"}, [t("div", {staticClass: "section_content-EventContent-right-heading-inDetail-Button"}, [t("router-link", {
                    attrs: {
                        tag: "a",
                        to: "/regSelection"
                    }
                }, [t("button", {staticClass: "section_content-EventContent-right-heading-inDetail-ButtonMain btn"}, [e._v("\n                                Register Now\n                            ")])])], 1), t("div", {staticClass: "section_content-EventContent-right-heading-inDetail-MoreDetails"}, [e._v("\n                        View Details\n                    ")])])])], 1)])
            }, g = [function () {
                var e = this, a = e.$createElement, t = e._self._c || a;
                return t("div", {
                    staticClass: "section_content-heading",
                    attrs: {
                        "data-aos": "slide-left",
                        "data-aos-offset": "200",
                        "data-aos-duration": "800",
                        "data-aos-easing": "ease-in-out"
                    }
                }, [t("h1", {staticClass: "left"}, [e._v("One "), t("span", [e._v("Team")])]), t("h1", {staticClass: "right"}, [e._v("One "), t("span", [e._v("Dream")])])])
            }], v = {name: "MainComponent", props: {eventData: Object}}, f = v,
            y = (t("bf56"), Object(i["a"])(f, d, g, !1, null, "caf7d812", null)), h = y.exports, D = function () {
                var e = this, a = e.$createElement, n = e._self._c || a;
                return n("div", {staticClass: "event"}, [n("div", {
                    staticClass: "event-holder",
                    attrs: {
                        "data-aos": "slide-left",
                        "data-aos-offset": "200",
                        "data-aos-duration": "800",
                        "data-aos-easing": "ease-in-out"
                    }
                }, [n("img", {
                    staticClass: "event-holder-banner",
                    attrs: {src: e.event[e.activeIndex].poster, alt: ""}
                }), n("div", {staticClass: "event-holder-data"}, [n("div", {staticClass: "arrow"}, [n("img", {
                    staticClass: "arrow-left",
                    attrs: {src: t("c5d4"), alt: ""},
                    on: {click: e.leftEventToggle}
                }), n("img", {
                    staticClass: "arrow-right",
                    attrs: {src: t("c5d4"), alt: ""},
                    on: {click: e.rightEventToggle}
                })]), n("div", {staticClass: "title"}, [n("h1", [e._v(e._s(e.event[e.activeIndex].name))]), n("span", [e._v(e._s(e.event[e.activeIndex].tagline))])]), n("div", {staticClass: "event-holder-data-details"}, [n("p", [e._v(e._s(e.event[e.activeIndex].date))]), e._m(0), n("span", [e._v("Rs." + e._s(e.event[e.activeIndex].fee))])])])]), n("div", {
                    staticClass: "event-down",
                    attrs: {
                        "data-aos": "fade-up",
                        "data-aos-offset": "200",
                        "data-aos-duration": "800",
                        "data-aos-easing": "ease-in-out"
                    }
                }, [n("div", {staticClass: "event-down-left"}, [n("div", {staticClass: "gallery"}, [n("img", {
                    staticClass: "left-2",
                    attrs: {src: e.event[e.activeIndex].image, alt: ""},
                    on: {
                        click: function (a) {
                            e.activeIndex = 1
                        }
                    }
                }), n("img", {
                    staticClass: "left-1",
                    attrs: {src: e.event[e.activeIndex].image, alt: ""},
                    on: {
                        click: function (a) {
                            e.activeIndex = 2
                        }
                    }
                }), n("img", {
                    staticClass: "main",
                    attrs: {src: e.event[e.activeIndex].image, alt: ""},
                    on: {
                        click: function (a) {
                            e.activeIndex = 0
                        }
                    }
                }), n("img", {
                    staticClass: "right-2",
                    attrs: {src: e.event[e.activeIndex].image, alt: ""},
                    on: {
                        click: function (a) {
                            e.activeIndex = 3
                        }
                    }
                }), n("img", {
                    staticClass: "right-1",
                    attrs: {src: e.event[e.activeIndex].image, alt: ""},
                    on: {
                        click: function (a) {
                            e.activeIndex = 4
                        }
                    }
                })])]), n("div", {staticClass: "event-down-right"}, [n("h3", [e._v(e._s(e.event[e.activeIndex].name))]), n("p", {staticClass: "content"}, [e._v(e._s(e.event[e.activeIndex].discription))]), n("div", {staticClass: "more"}, [n("div", {
                    staticClass: "more-detials",
                    attrs: {
                        "data-aos": "fade-up",
                        "data-aos-offset": "200",
                        "data-aos-duration": "800",
                        "data-aos-delay": "500",
                        "data-aos-easing": "ease-in-out"
                    }
                }, [n("p", [e._v("Date: "), n("span", [e._v(e._s(e.event[e.activeIndex].date))])]), n("p", [e._v("Time: "), n("span", [e._v(e._s(e.event[e.activeIndex].time))])]), n("p", [e._v("Venue: "), n("span", [e._v(e._s(e.event[e.activeIndex].venue))])])]), n("div", {staticClass: "reg"}, [n("router-link", {
                    attrs: {
                        tag: "a",
                        to: "/regSelection"
                    }
                }, [e._v("Register Now")])], 1)])])])])
            }, C = [function () {
                var e = this, a = e.$createElement, n = e._self._c || a;
                return n("div", {staticClass: "event-holder-data-details--img"}, [n("img", {
                    attrs: {
                        src: t("b423"),
                        alt: ""
                    }
                }), n("img", {attrs: {src: t("b423"), alt: ""}}), n("img", {attrs: {src: t("b423"), alt: ""}})])
            }], _ = t("bc3a"), x = t.n(_), A = {
                name: "EventComponentNew", data: function () {
                    return {activeIndex: 0, event: Array}
                }, props: {eventData: Array}, methods: {
                    leftEventToggle: function () {
                        this.activeIndex > 0 && (this.activeIndex = this.activeIndex - 1, console.log(this.activeIndex))
                    }, rightEventToggle: function () {
                        this.activeIndex < this.eventData.length - 1 && (this.activeIndex = this.activeIndex + 1, console.log(this.activeIndex))
                    }
                }, created: function () {
                    var e = this;
                    this.event = this.eventData, this.event || x.a.get("/api/events").then((function (a) {
                        e.event = a.data.toArray()
                    })).catch((function (e) {
                        console.log(e)
                    }))
                }
            }, R = A, b = (t("8cd2"), Object(i["a"])(R, D, C, !1, null, "8f2dfd80", null)), N = b.exports, w = t("d5df"),
            P = t("ce61"), E = t("1f17"), I = t("9140"), k = t("50a6"), S = {
                name: "home",
                data: function () {
                    return {mainComponent: !1, mainComponentActive: !0, eventData: []}
                },
                methods: {
                    toggleMainComponent: function () {
                        this.mainComponent = !this.mainComponent
                    }
                },
                components: {
                    ExternalRegistrationComponents: k["default"],
                    ContactUsComponent: I["default"],
                    AboutComponent: E["default"],
                    RegistrationSelection: P["default"],
                    RegistrationComponents: w["default"],
                    EventComponentNew: N,
                    MainComponent: h
                },
                created: function () {
                    var e = this;
                    x.a.get("/api/events").then((function (a) {
                        e.eventData = a.data, console.log(e.eventData)
                    })).catch((function (e) {
                        console.log(e)
                    }))
                }
            }, U = S, B = (t("b5fd"), Object(i["a"])(U, c, u, !1, null, "9adc2f46", null)), O = B.exports;
        n["a"].use(m["a"]);
        var Q = new m["a"]({
            routes: [{
                path: "/",
                name: "home",
                component: O,
                children: [{
                    path: "/event", name: "event", component: function () {
                        return t.e("chunk-d57d6b5e").then(t.bind(null, "600d"))
                    }
                }, {
                    path: "/reg", name: "reg", component: function () {
                        return Promise.resolve().then(t.bind(null, "d5df"))
                    }
                }, {
                    path: "/regSelection", name: "regSelection", component: function () {
                        return Promise.resolve().then(t.bind(null, "ce61"))
                    }
                }, {
                    path: "/about", name: "about", component: function () {
                        return Promise.resolve().then(t.bind(null, "1f17"))
                    }
                }, {
                    path: "/contactUs", name: "contactUs", component: function () {
                        return Promise.resolve().then(t.bind(null, "9140"))
                    }
                }, {
                    path: "/regExternal", name: "regExternal", component: function () {
                        return Promise.resolve().then(t.bind(null, "50a6"))
                    }
                }]
            }], mode: "history"
        }), j = t("2f62");
        n["a"].use(j["a"]);
        var T = new j["a"].Store({state: {}, mutations: {}, actions: {}, getters: {}}), z = t("f5af"), F = t.n(z);
        t("e829");
        x.a.defaults.baseURL = "http://127.0.0.1:8000/", F.a.init(), n["a"].config.productionTip = !1, new n["a"]({
            router: Q,
            store: T,
            render: function (e) {
                return e(p)
            }
        }).$mount("#app")
    }, "58c3": function (e, a, t) {
        e.exports = t.p + "img/logo-center.c5451fc4.png"
    }, "5a44": function (e, a) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAYAAAA6RwvCAAAABHNCSVQICAgIfAhkiAAAAipJREFUWIXtlk1oE0EYhp/dzcZNmqitpCImtKKtV+2PICKIeBTEi6CeBRFBBRUFDyIICh5EsCj+nMWDBwUreLCorSARI1aFiFKrSaW0pJrWYH52PKih25kc3GyaCH1Pu+/37eyzO998MxoHHwkaQHq9Af5qAWSuGgbEVynQEwuxt3c5U7kilx+nmJgpzj/I2e2rOLYthmn8/mGHtkTZeilBIjVTMxDl1OzbtKIMAdAcNDm/Y3XNICqCmIYmeUsCxvyDxD9lHfclW3B9aKymIJqqs+oa3Nyzlt62xeRLNlcG01x9WgeQeqji8q1WG9vDBPwGLz9nyeRK7kDix7vpjAQc3om7H+l7kgbg9cke2losR/zcw1GuDY3x/GgX0aUWvj8FbwvBt1yRM/0jXBxI/RtIk98gbDlDs1eSZcrxjtYg705tYFmT6fB1TaM5aHJh5xraWywO3/mgBHHV4oWQy2p3d6sEMVuGrrF/80o6IpYy7g5E4S3y6QgheJWa5sHbSTI/Csqcvl2dyjE9K9Z80ebA7SQ3nn0FIGBqDB7pYn0s7MhbFw0pn/ds9x14P1WGAMgVBKf7R6Q8y1R3aM9A4qPfZbhkRvKMCm/0DKRgy172p2xqyPuYpyDVyhWIrqm/qhq5A/Gawu2YWg1I3IFUKLhq9H8Xay2kbPH330yS+DLt8JLjufL1veEJIiG/Iz6clk/4Arj1Ytzh5UuKhkMDndAaZmoWQOaqYUB+ATMRkkS3Bz83AAAAAElFTkSuQmCC"
    }, "5a89": function (e, a, t) {
    }, "5c0b": function (e, a, t) {
        "use strict";
        var n = t("e332"), r = t.n(n);
        r.a
    }, "678f": function (e, a) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAYAAAA6RwvCAAAABHNCSVQICAgIfAhkiAAACj5JREFUWIWVl33MnWV9xz+/33XdL+ec9unTUrC0lpe2WAo4yRKpShBhYGjEYhEcbO5NY2Iy5l7cli1ZliXLtiyasD82t0TCiCZq3EpsVNgLDKqyqRjqKExcwcLoAKFrn6fPeb/v6/fbH9f9PO2S/eOdXOc+5+Q65/e5vr/XWzjnuuLOZ8s3L8jtrrZf4WrBtwr01Qm4i7iJuhPMiOZEd2Lq7uaE1ZUgGN1nMU1mwWQcGn8tJH86JL7avNp++Y9evGG6altW39zys0ferlX8O8UvEk8iOOKOdncxJ3g2Wph1xo3CnZDOAXGIyQkGeg6UdktcEFfH5SSe7vytJ288vAZy++1PXkvQw+AhG7Y1AO1WNCO6UbitAUTzNWVCyiDRHHUICaKDpmxEvTuzKJ6/AcTc5P33fO/Gh+TAe5+4oCrCc+q2UcUR8snpYNRSBkiJYHZWDc/uKSxDBs9qrKqiCIrkVxEEQUQBwVHImuMShrNmflVcmKWPamOLgZRPjyEYYkbwhKSWQU9467u3sPWSdazfWFH1AjEqKvlcAOIODt4azahldnrK8o/O8PLjJ0hDQyVkEA0ZxlehbF2l4ddir0l3B0mibhnCDbGEeMveW7dz88cuZ8MFfVTXwuknutyc8etjnvmbo7x06DjiEdGQ1cia46IH5BPv/KehShooGSRYi9Jy2+9czTUf2Imo4O5Mz8xYfmmJ+ZkZNm3x1sF9LdoFEAENSqgDxfqK9ZcsUm6oERHcnOMPHuPf/+RJVCKongVBZ7HUeR28JZBdoT7n+o9eyTUf2AnAfz5yjKc++z1Wnj9FRCiA0MVRDmTAczAKkt3jhlnCLLFh93ns/thetr/vci69/TLmJ0c8/9dHUY+4BFwUJxSx8rnm+EgEb+mvE6654y0g8OzBozzxp49RS2SdQIGfhZAuswTUO0VcwATHsQCDPeczfm2ZI799iLQy5ZK7rmbHXXs48bmj2LgFnByVplp6S0FD5Q21zbnqxjfTX6yZLk34/me+xUBgIEaPRE1L5S2lN5TeUHhDYXMK75bMKcOMShsuvesqrjv4i9z06MfZtGOR4395mGZ5SrGh4sKf2U70hugt0RMFCQ00UlpD7Q2VzdmxdysiwsmjryCnRvTXABpKayhtTmEz6gFsvGITW2/ZxZZbdrF45SbqAcQ0JTJl87u2A6BVZPGSTfgbKywfeRkR4fzrLyJYBgmeCJ6IlTeUbpTWEHzO+vP7AEz++zR9Wip3okPsMiqoceGdP83OT74XLeL/yRBrWo5/+iFe/9J3+K9PfZ3BZeczeeEk4+8ep1SYvXwKgN6WAcFbxHMJcA/EylflblFrKKruz8dTKloKchVVd9Tm7Ln35zjvPXv+31TVIrLz9/ez6V27OPbx+3lm372IRCIKwfDRDIDQi0Ra8AAOBsTskpZoDepzQuwScjan9JbCpMuQhot+/WY2XX857s7Jr3ybE39+CB/PERd0ULDtd2/jvAPvYPG6PVz0yX28+hePoCgIiBrSzHOqR0U9gbRnD1F5S0FL2cWBdKUyWEPJbG1VPedNB96OiPDjzz3KiT/4AmFlRmmBwpWw0vDqH36JNx54FFFh8x3voCiFQEJJRAxNlkFUUJquXFjeU3pD7XNqptQ6QXEACp3Tq0bU1ZCqWmHzTbuIiwPa5SGnH3iIUhNlcAoxCnEKgWhw+m8fJa2MCQt9Ft79FrQLSPUWceuqnxOkRTtI9YT2dEy/GDGohwzqFVTz5hjn1PWQuh5S1UMW9u5AVJg//xJx9GPq3pSymhDjhKgzgrREcTi5zOyHJxAV1r/zMpQ2G/Lcw1arsEq7BiMYsV8PqcOcQqYEnyCSFYlFQ12PUQU1I8TsT5FEWU1QSeAFnhRPEW8C1ii0Cdw7g9bFgkDXXdZAMERaVttm7NcjqjWQKSKdIqGlqCcEBXGjfe77+L6bKHdeTPmmEl8eI0Q8FdAqFkKO/k0LVLu34eZMv/0cwQ2XBM4aCDhKAgyVhLuidT2iqsdU9aQ7aQYJRUtZTyh6U4rejHTkMD48Q9iwgYUP7SeWI0IxJlZDQjkiFENCNWbDL91IWFiHrYyZPv40q800jxcdiDviqVMlodKiVTWhrMaU9YSqnq35MZRO0Zvl1Z8RZInZtx7G3enfeTfr7/kEoZ4TwjgD9eYs/t5HWPiVD+LujL72TbQd557kCSEhoeOwc+YeDBUjltWUMs4JNKjPcGu6vFZiMUOLXFekcJoH7yVu3U7xtmupb9lPfdM+vGmy7GUBsUBEmH73CKPP3E+oanyupFTm6aPoSNq0SpQHqlWQGBqi5IImzSSD9CtCNUcKQaSbwBLM7/tN7D0/T3nbryJFiRTlWlHypmH0+QeYHPwqsQwkUUwEn4I1ig7yXpvMUXdcHDAcJRbljBAborSoN/jKG9k1my8kxA4kSM4EA1KDHf4s0+8cRLbsRjZfDCakV16h/dFx7PSIEEqsrsiNRHADSUrcvjkL8tpSTqQ8MOT0jeXcQ2glhJZAS3rhX/G33UC49K3ownokLSFRcgoaebVAexJ/8X+wY/+Gp4C3AU0RqQpMuv0OnsDaRLxgI72rd+LujL/xTDfZ5ScFx9FQNoSqJdQJ7Rn2w4fx8Wlk3SaKW38DKQWtBO0JOgjoICDrAjJQdCBoH7ROaNWiRYuWDVo2SDFH4hyJUyRM2XDPAXTjetLSiPE/PHUWpLvHUJuHwkUjqAoqK9jRBwl7P0K45kPIYIA9eR+cybNEdo9DC94YEh1m3YjmLZ4MUc8ZIUbcvoPBHXfT23czuDP8+2/mLqx1/kkudB61lmkotK8FaFQkCPb0fch5W9FdtxCuej965a0wXcJPvwjTM9BMICUwx5NBAlJ2A0SIPehvQLftQBY2dMOzMX74CZb/6iAigxy0eK4szjyGWl6UQq7QKiBlQIqQg/OpT2Mrx9ArfxnKBaS3Eelt5Ce93I105gzD+7/I6MuPoXEdlgzWqiwgvBpjr/gilf6xVBEpNU9dMSBB4fXH8Nf/BeIA33Itsu5iKBch1CARPAck5rg5tAlvGnw0wk+foj3+ArPHv0E63ZDmPbTsY2ZIY5ixOnHjZodk9PnrLizK/n9IEReljFAEJEYIATQ/GnY9K6dwctwMkuFNgnmCJuHTFp+0+Dhhw4QNDRuCrShpXNBOamzao530aCZ9UjMgScQIowb7KQFoDu2/Qavqn72IQYoIMYIGJAQQXUvF7qElQ6QOoE0wb/FpC9MGmzT4KGErCVtx7IzTLitpWJImNe2kn0FmfZKXlpJ+8Iof/NlX1p4j/ZEPX+f96gsUxTY0SlbkHBDOUcVShmlbaPLyWYNPG3zS4KMGHybSSiItG2kJ2qVIGlU0kx5pMvBm3D+VrPjw5c9+6h/JTj4nsB7aV7Ft9y8Qy/e5xKskxgsQ7blIFAQ3E8zALfeL1OZe07Qwn2eI6RwfNdiwxYYtack8LZPaUzJpl4o32nHvB+2093B4ef3920/cO1m1/b8AV6Q6zW/SgAAAAABJRU5ErkJggg=="
    }, "6db0": function (e, a, t) {
    }, 8433: function (e, a, t) {
    }, "8a97": function (e, a, t) {
        e.exports = t.p + "img/twenty20_1b942ad2-b8fc-4a2f-9b92-2dce9c71880c-1500x750@2x.201121c0.png"
    }, "8cd2": function (e, a, t) {
        "use strict";
        var n = t("df0b"), r = t.n(n);
        r.a
    }, 9140: function (e, a, t) {
        "use strict";
        t.r(a);
        var n = function () {
                var e = this, a = e.$createElement;
                e._self._c;
                return e._m(0)
            }, r = [function () {
                var e = this, a = e.$createElement, n = e._self._c || a;
                return n("div", {staticClass: "event"}, [n("div", {
                    staticClass: "event-holder",
                    attrs: {
                        "data-aos": "slide-left",
                        "data-aos-offset": "200",
                        "data-aos-duration": "800",
                        "data-aos-easing": "ease-in-out"
                    }
                }, [n("h1", [e._v("Contact "), n("span", [e._v("Us")])]), n("div", {staticClass: "event-holder-data"}, [n("div", {staticClass: "event-down-left"}, [n("div", {staticClass: "gallery"}, [n("img", {
                    staticClass: "left-2",
                    attrs: {src: t("8a97"), alt: ""}
                }), n("img", {staticClass: "left-1", attrs: {src: t("8a97"), alt: ""}}), n("img", {
                    staticClass: "main",
                    attrs: {src: t("8a97"), alt: ""}
                }), n("img", {staticClass: "right-2", attrs: {src: t("8a97"), alt: ""}}), n("img", {
                    staticClass: "right-1",
                    attrs: {src: t("8a97"), alt: ""}
                })])])])]), n("div", {
                    staticClass: "event-down",
                    attrs: {
                        "data-aos": "fade-up",
                        "data-aos-offset": "200",
                        "data-aos-duration": "800",
                        "data-aos-easing": "ease-in-out"
                    }
                }, [n("div", {staticClass: "event-down-left"}, [n("h3", [e._v("Organisation Vision")]), n("p", {staticClass: "content"}, [e._v("But I must explain to you how all this mistaken idea of denouncing pleasure and\n                praising pain was\n                born and I will give you a complete account of the system, and expound the actual teachings of the\n                great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or\n                avoids pleasure itself, because it is pleasure, but because those who do not…")])]), n("div", {staticClass: "event-down-right"}, [n("h3", [e._v("Team Details")]), n("p", {staticClass: "content"}, [e._v("But I must explain to you how all this mistaken idea of denouncing pleasure and\n                praising pain was\n                born and I will give you a complete account of the system, and expound the actual teachings of the\n                great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or\n                avoids pleasure itself, because it is pleasure, but because those who do not…")]), n("div", {staticClass: "more"}, [n("div", {
                    staticClass: "more-detials",
                    attrs: {
                        "data-aos": "fade-up",
                        "data-aos-offset": "200",
                        "data-aos-duration": "800",
                        "data-aos-delay": "500",
                        "data-aos-easing": "ease-in-out"
                    }
                }, [n("p", [e._v("CEO: "), n("span", [e._v("25/09/2019")])]), n("p", [e._v("Time: "), n("span", [e._v("12pm")])]), n("p", [e._v("Developed By: "), n("span", [e._v("Nitish Kumar")]), e._v(" ( UI & UX + Developer ) ")]), n("p", [e._v("Developed By: "), n("span", [e._v("Pankaj Sharma")]), e._v(" ( Developer )")])]), n("div", {
                    staticClass: "reg",
                    attrs: {
                        "data-aos": "fade-up",
                        "data-aos-offset": "100",
                        "data-aos-duration": "100",
                        "data-aos-delay": "1000",
                        "data-aos-easing": "ease-in-out"
                    }
                })])])])])
            }], o = {name: "ContactUsComponent"}, i = o, s = (t("3e03"), t("2877")),
            l = Object(s["a"])(i, n, r, !1, null, "788603e8", null);
        a["default"] = l.exports
    }, "96ce": function (e, a, t) {
    }, "9c25": function (e, a, t) {
    }, b423: function (e, a) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAHCAYAAAB+8d+zAAAABHNCSVQICAgIfAhkiAAAAGJJREFUOI3NzjENhUAQANFZggAkfAdYwdGBAyQg4TsBFBCUDA0lCdctr5tuUDu1qKvfc6gFINQRKHzbFOoB/LJPXmyhmn1RowHO7IkKewMs2RcV/i0w3zEAfeLMkxNYImK8AIFgtIPkY3b1AAAAAElFTkSuQmCC"
    }, b5fd: function (e, a, t) {
        "use strict";
        var n = t("5a89"), r = t.n(n);
        r.a
    }, b951: function (e, a, t) {
    }, bf56: function (e, a, t) {
        "use strict";
        var n = t("96ce"), r = t.n(n);
        r.a
    }, c5d4: function (e, a) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAwCAYAAADgvwGgAAAABHNCSVQICAgIfAhkiAAAAuhJREFUWIW1mM1LVUEYxn+vopRIIYWC4EJIaCMhRAsXCSEEbYQ2faztOyPJkoyEyk1mGvSxDDL6AyJICN26qEWLu3ERuCiCopBCLBR7WsxYt+u9d+bOPT3LOc/M7xzOmee870DGktQsaUJSY9ZrF4IaJT2VNCfpoaT6/Os1GYLqgdtAqx/aDdyS9IeRCcwveMMD8rUXuJopDBgG9pW4dkDSuUxgkvqB3oDtsKTOqmCS+oBjEdbnZpZLhknqAQYirPPAfQBLBHXhvrzagDUHXDaztSSYpHbcnW4NWBeBC2a2sjFQEUxSM/AIaApYvwCnzWwpfzD6nUnaBtyNAC0DQ4WgaJikLcA4f9OhlFaBYTN7X+xiECapFhgDOgLWX8ComS2UMpSFSTLgGtAVuilg0szelDOEnmwA6IkATZvZTMhUEibpCNAXAZo1sycRvuIwSb3AyYj5r3GbO0qb9lkF6bAADJrZahJM0i7gHuF0+AicMbPlWNA/MEmtwANge2DOEnDWzD5XAgL/ziQ1ARMRoBVcsFYMAqiR1ADcAVoC3nVgxMwWU0Dgnuw60B7hnTKzXCpoA/YCFzUhHZRUVxXMzOaByQhvJzCaX5pVDAPwUfMswt8NDFYF88DHwGzEnEOSYoqc0jCv27gICqnfR1pFKhZX9cAUm6vbQq3jfpRvk2Ee2IhLk7bA/B/ARTN7lwzzwB244mZnYI1vwHkz+5gM88A2D2wIrPMJV019L2cqu2d84TICrAVgLcC4L4zSYB6YA24STpkOYMwXSGkwD4xNmS5cgZQO88AZIKbW6JF0oiqYB04DLyOsR307lQ7zmsK1QSENSOrOH0htmepwP9zOgHUN92fPJcM8sAG3B0Mps4JrnRaTYR4YmzJLwKmqemoz+woM4dqkcloHaqs+LfApM4xrl4ppGbhkZp8zOQfxbdIo7gny9RO4YmYfsuD8I0m9/txqTtIrSXsyhxQAj0ualbT/v4LygEX332+tlBkRj1897wAAAABJRU5ErkJggg=="
    }, ce61: function (e, a, t) {
        "use strict";
        t.r(a);
        var n = function () {
                var e = this, a = e.$createElement, n = e._self._c || a;
                return n("div", {staticClass: "registration"}, [n("img", {
                    staticClass: "center-logo",
                    attrs: {src: t("58c3"), alt: ""}
                }), n("div", {staticClass: "registration-left"}, [n("h2", [e._v("Lpu Team Registration")]), n("router-link", {
                    attrs: {
                        tag: "button",
                        to: "/reg"
                    }
                }, [e._v("Register")])], 1), n("div", {staticClass: "registration-right"}, [n("h2", [e._v("External Team Registration")]), n("router-link", {
                    attrs: {
                        tag: "button",
                        to: "/regExternal"
                    }
                }, [e._v("Register")])], 1)])
            }, r = [], o = {name: "RegistrationSelection"}, i = o, s = (t("0d46"), t("2877")),
            l = Object(s["a"])(i, n, r, !1, null, "e58a096c", null);
        a["default"] = l.exports
    }, cec2: function (e, a, t) {
        "use strict";
        var n = t("9c25"), r = t.n(n);
        r.a
    }, cf05: function (e, a, t) {
        e.exports = t.p + "img/logo.3dfae705.png"
    }, d553: function (e, a) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAYAAAA6RwvCAAAABHNCSVQICAgIfAhkiAAAAZlJREFUWIXtl81LAkEYxp/ZtczUcsUOSQqSBUZ06lpEl0jI7nXq2KHob6hj1yDo7MUgOto/kJ0iIYI6GF06SPlBIrm663TKmiVjGndzEZ/bOx8Pv533nY8lqzupJiEg6KIoBZW6DQEAhIBI3Yb4lG1AHGaYBANurC9NIxYJQJYI9CbFS7GK47MbvJbfrQfxeZzY315EJOiDJLGlNjmhIJm+sx7EIRMc7i0jOOZtO0bTm9x+wjWylZj7FQIAmpRy+wmvyHxsnInVuoaLzCPyxSoAgBCgXFGtB3G7Bpg4+5DHyXlW1K6T7csWZ/GtJm7VGYi5sg0Id414hwexthBtxS6nzPRHQwo2VmaYtnQmhxJnwXKDjHqc2IzPtu2fCvsxFfYzbVe3z9wglqamof3DgcajuqZzj+VOjdrQcf9UaMXRkAKH/PUdpUoN+UKVmVNTNW4QEt9N8Z/D35Q8SEAZGWrF6cscjk6vRawA2Gj79kGM6oMY1QcxShzE5N+yHlgRkyUOYnih/+XF/pOE7xqz1QOpMVkSpbBFaj4AxLdpg3bd2VIAAAAASUVORK5CYII="
    }, d5df: function (e, a, t) {
        "use strict";
        t.r(a);
        var n = function () {
            var e = this, a = e.$createElement, n = e._self._c || a;
            return n("div", {staticClass: "registration"}, [this.step < 6 ? n("img", {
                staticClass: "center-logo",
                attrs: {src: t("58c3"), alt: ""}
            }) : e._e(), this.step < 7 ? n("div", {staticClass: "registration-left"}, [n("h2", [e._v("Register")]), n("h5", [e._v("Step 1 of 4")]), 1 === this.step ? n("div", {staticClass: "input"}, [n("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.formData.teamName,
                    expression: "formData.teamName"
                }],
                attrs: {type: "text", placeholder: "Team Name"},
                domProps: {value: e.formData.teamName},
                on: {
                    input: function (a) {
                        a.target.composing || e.$set(e.formData, "teamName", a.target.value)
                    }
                }
            }), n("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.formData.captain.name,
                    expression: "formData.captain.name"
                }],
                attrs: {type: "text", placeholder: "Camptain's Name"},
                domProps: {value: e.formData.captain.name},
                on: {
                    input: function (a) {
                        a.target.composing || e.$set(e.formData.captain, "name", a.target.value)
                    }
                }
            }), n("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.formData.captain.reg,
                    expression: "formData.captain.reg"
                }],
                attrs: {type: "text", placeholder: "Registration No."},
                domProps: {value: e.formData.captain.reg},
                on: {
                    input: function (a) {
                        a.target.composing || e.$set(e.formData.captain, "reg", a.target.value)
                    }
                }
            }), n("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.formData.captain.email,
                    expression: "formData.captain.email"
                }],
                attrs: {type: "text", placeholder: "Email"},
                domProps: {value: e.formData.captain.email},
                on: {
                    input: function (a) {
                        a.target.composing || e.$set(e.formData.captain, "email", a.target.value)
                    }
                }
            }), n("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.formData.captain.contact,
                    expression: "formData.captain.contact"
                }],
                attrs: {type: "text", placeholder: "Contact No."},
                domProps: {value: e.formData.captain.contact},
                on: {
                    input: function (a) {
                        a.target.composing || e.$set(e.formData.captain, "contact", a.target.value)
                    }
                }
            }), n("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.formData.captain.whatsApp,
                    expression: "formData.captain.whatsApp"
                }],
                attrs: {type: "text", placeholder: "WhatsApp No."},
                domProps: {value: e.formData.captain.whatsApp},
                on: {
                    input: function (a) {
                        a.target.composing || e.$set(e.formData.captain, "whatsApp", a.target.value)
                    }
                }
            })]) : e._e(), 2 === this.step ? n("div", {staticClass: "input"}, [n("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.formData.viceCaptain.name,
                    expression: "formData.viceCaptain.name"
                }],
                attrs: {type: "text", placeholder: "Vice Captain's Name"},
                domProps: {value: e.formData.viceCaptain.name},
                on: {
                    input: function (a) {
                        a.target.composing || e.$set(e.formData.viceCaptain, "name", a.target.value)
                    }
                }
            }), n("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.formData.viceCaptain.reg,
                    expression: "formData.viceCaptain.reg"
                }],
                attrs: {type: "text", placeholder: "Registration No."},
                domProps: {value: e.formData.viceCaptain.reg},
                on: {
                    input: function (a) {
                        a.target.composing || e.$set(e.formData.viceCaptain, "reg", a.target.value)
                    }
                }
            }), n("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.formData.viceCaptain.email,
                    expression: "formData.viceCaptain.email"
                }],
                attrs: {type: "text", placeholder: "Email"},
                domProps: {value: e.formData.viceCaptain.email},
                on: {
                    input: function (a) {
                        a.target.composing || e.$set(e.formData.viceCaptain, "email", a.target.value)
                    }
                }
            }), n("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.formData.viceCaptain.contact,
                    expression: "formData.viceCaptain.contact"
                }],
                attrs: {type: "text", placeholder: "Contact No."},
                domProps: {value: e.formData.viceCaptain.contact},
                on: {
                    input: function (a) {
                        a.target.composing || e.$set(e.formData.viceCaptain, "contact", a.target.value)
                    }
                }
            }), n("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.formData.player3name,
                    expression: "formData.player3name"
                }],
                attrs: {type: "text", placeholder: "Player 3 Name"},
                domProps: {value: e.formData.player3name},
                on: {
                    input: function (a) {
                        a.target.composing || e.$set(e.formData, "player3name", a.target.value)
                    }
                }
            }), n("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.formData.player3Reg,
                    expression: "formData.player3Reg"
                }],
                attrs: {type: "text", placeholder: "Player 3 Reg no."},
                domProps: {value: e.formData.player3Reg},
                on: {
                    input: function (a) {
                        a.target.composing || e.$set(e.formData, "player3Reg", a.target.value)
                    }
                }
            })]) : e._e(), 3 === this.step ? n("div", {staticClass: "input"}, [n("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.formData.player4name,
                    expression: "formData.player4name"
                }],
                attrs: {type: "text", placeholder: "Player 4 Name"},
                domProps: {value: e.formData.player4name},
                on: {
                    input: function (a) {
                        a.target.composing || e.$set(e.formData, "player4name", a.target.value)
                    }
                }
            }), n("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.formData.player4Reg,
                    expression: "formData.player4Reg"
                }],
                attrs: {type: "text", placeholder: "Player 4 Reg no."},
                domProps: {value: e.formData.player4Reg},
                on: {
                    input: function (a) {
                        a.target.composing || e.$set(e.formData, "player4Reg", a.target.value)
                    }
                }
            }), n("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.formData.player5name,
                    expression: "formData.player5name"
                }],
                attrs: {type: "text", placeholder: "Player 5 Name"},
                domProps: {value: e.formData.player5name},
                on: {
                    input: function (a) {
                        a.target.composing || e.$set(e.formData, "player5name", a.target.value)
                    }
                }
            }), n("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.formData.player5Reg,
                    expression: "formData.player5Reg"
                }],
                attrs: {type: "text", placeholder: "Player 5 Reg no."},
                domProps: {value: e.formData.player5Reg},
                on: {
                    input: function (a) {
                        a.target.composing || e.$set(e.formData, "player5Reg", a.target.value)
                    }
                }
            }), n("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.formData.player6name,
                    expression: "formData.player6name"
                }],
                attrs: {type: "text", placeholder: "Player 6 Name"},
                domProps: {value: e.formData.player6name},
                on: {
                    input: function (a) {
                        a.target.composing || e.$set(e.formData, "player6name", a.target.value)
                    }
                }
            }), n("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.formData.player6Reg,
                    expression: "formData.player6Reg"
                }],
                attrs: {type: "text", placeholder: "Player 6 Reg no."},
                domProps: {value: e.formData.player6Reg},
                on: {
                    input: function (a) {
                        a.target.composing || e.$set(e.formData, "player6Reg", a.target.value)
                    }
                }
            })]) : e._e(), 4 === this.step ? n("div", {staticClass: "input"}, [n("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.formData.player7name,
                    expression: "formData.player7name"
                }],
                attrs: {type: "text", placeholder: "Player 7 Name"},
                domProps: {value: e.formData.player7name},
                on: {
                    input: function (a) {
                        a.target.composing || e.$set(e.formData, "player7name", a.target.value)
                    }
                }
            }), n("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.formData.player7Reg,
                    expression: "formData.player7Reg"
                }],
                attrs: {type: "text", placeholder: "Player 7 Reg no."},
                domProps: {value: e.formData.player7Reg},
                on: {
                    input: function (a) {
                        a.target.composing || e.$set(e.formData, "player7Reg", a.target.value)
                    }
                }
            }), n("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.formData.player8name,
                    expression: "formData.player8name"
                }],
                attrs: {type: "text", placeholder: "Player 8 Name"},
                domProps: {value: e.formData.player8name},
                on: {
                    input: function (a) {
                        a.target.composing || e.$set(e.formData, "player8name", a.target.value)
                    }
                }
            }), n("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.formData.player8Reg,
                    expression: "formData.player8Reg"
                }],
                attrs: {type: "text", placeholder: "Player 8 Reg no."},
                domProps: {value: e.formData.player8Reg},
                on: {
                    input: function (a) {
                        a.target.composing || e.$set(e.formData, "player8Reg", a.target.value)
                    }
                }
            }), n("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.formData.player9name,
                    expression: "formData.player9name"
                }],
                attrs: {type: "text", placeholder: "Player 9 Name"},
                domProps: {value: e.formData.player9name},
                on: {
                    input: function (a) {
                        a.target.composing || e.$set(e.formData, "player9name", a.target.value)
                    }
                }
            }), n("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.formData.player9Reg,
                    expression: "formData.player9Reg"
                }],
                attrs: {type: "text", placeholder: "Player 9 Reg no."},
                domProps: {value: e.formData.player9Reg},
                on: {
                    input: function (a) {
                        a.target.composing || e.$set(e.formData, "player9Reg", a.target.value)
                    }
                }
            })]) : e._e(), 5 === this.step ? n("div", {staticClass: "input"}, [n("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.formData.player10name,
                    expression: "formData.player10name"
                }],
                attrs: {type: "text", placeholder: "Player 10 Name"},
                domProps: {value: e.formData.player10name},
                on: {
                    input: function (a) {
                        a.target.composing || e.$set(e.formData, "player10name", a.target.value)
                    }
                }
            }), n("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.formData.player10Reg,
                    expression: "formData.player10Reg"
                }],
                attrs: {type: "text", placeholder: "Player 10 Reg no."},
                domProps: {value: e.formData.player10Reg},
                on: {
                    input: function (a) {
                        a.target.composing || e.$set(e.formData, "player10Reg", a.target.value)
                    }
                }
            }), n("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.formData.player11name,
                    expression: "formData.player11name"
                }],
                attrs: {type: "text", placeholder: "Player 11 Name"},
                domProps: {value: e.formData.player11name},
                on: {
                    input: function (a) {
                        a.target.composing || e.$set(e.formData, "player11name", a.target.value)
                    }
                }
            }), n("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.formData.player11Reg,
                    expression: "formData.player11Reg"
                }],
                attrs: {type: "text", placeholder: "Player 11 Reg no."},
                domProps: {value: e.formData.player11Reg},
                on: {
                    input: function (a) {
                        a.target.composing || e.$set(e.formData, "player11Reg", a.target.value)
                    }
                }
            }), n("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.formData.player12name,
                    expression: "formData.player12name"
                }],
                attrs: {type: "text", placeholder: "Player 12 Name"},
                domProps: {value: e.formData.player12name},
                on: {
                    input: function (a) {
                        a.target.composing || e.$set(e.formData, "player12name", a.target.value)
                    }
                }
            }), n("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.formData.player12Reg,
                    expression: "formData.player12Reg"
                }],
                attrs: {type: "text", placeholder: "Player 12 Reg no."},
                domProps: {value: e.formData.player12Reg},
                on: {
                    input: function (a) {
                        a.target.composing || e.$set(e.formData, "player12Reg", a.target.value)
                    }
                }
            })]) : e._e(), 6 === this.step ? n("div", {staticClass: "input"}, [n("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.formData.player13name,
                    expression: "formData.player13name"
                }],
                attrs: {type: "text", placeholder: "Player 13 Name"},
                domProps: {value: e.formData.player13name},
                on: {
                    input: function (a) {
                        a.target.composing || e.$set(e.formData, "player13name", a.target.value)
                    }
                }
            }), n("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.formData.player13Reg,
                    expression: "formData.player13Reg"
                }],
                attrs: {type: "text", placeholder: "Player 13 Reg no."},
                domProps: {value: e.formData.player13Reg},
                on: {
                    input: function (a) {
                        a.target.composing || e.$set(e.formData, "player13Reg", a.target.value)
                    }
                }
            }), n("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.formData.player14name,
                    expression: "formData.player14name"
                }],
                attrs: {type: "text", placeholder: "Player 14 Name"},
                domProps: {value: e.formData.player14name},
                on: {
                    input: function (a) {
                        a.target.composing || e.$set(e.formData, "player14name", a.target.value)
                    }
                }
            }), n("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.formData.player14Reg,
                    expression: "formData.player14Reg"
                }],
                attrs: {type: "text", placeholder: "Player 14 Reg no."},
                domProps: {value: e.formData.player14Reg},
                on: {
                    input: function (a) {
                        a.target.composing || e.$set(e.formData, "player14Reg", a.target.value)
                    }
                }
            }), n("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.formData.player15name,
                    expression: "formData.player15name"
                }],
                attrs: {type: "text", placeholder: "Player 15 Name"},
                domProps: {value: e.formData.player15name},
                on: {
                    input: function (a) {
                        a.target.composing || e.$set(e.formData, "player15name", a.target.value)
                    }
                }
            }), n("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.formData.player15Reg,
                    expression: "formData.player15Reg"
                }],
                attrs: {type: "text", placeholder: "Player 15 Reg no."},
                domProps: {value: e.formData.player15Reg},
                on: {
                    input: function (a) {
                        a.target.composing || e.$set(e.formData, "player15Reg", a.target.value)
                    }
                }
            })]) : e._e(), n("div", {staticClass: "buttons"}, [this.step < 1 ? n("button", {on: {click: e.back}}, [e._v("Back")]) : e._e(), this.step < 7 ? n("button", {
                staticStyle: {"margin-left": "auto"},
                on: {click: e.next}
            }, [e._v("Next")]) : e._e()])]) : e._e(), this.step < 7 ? n("div", {staticClass: "registration-right"}, [e._m(0), n("img", {
                staticClass: "reg-img",
                attrs: {src: t("53b7"), alt: ""}
            })]) : e._e(), 7 === this.step ? n("div", {staticClass: "registration-left"}, [n("h2", {
                staticStyle: {
                    "font-size": "3vw",
                    color: "white"
                }
            }, [e._v("Accommodation Required")]), n("button", {
                staticClass: "button",
                staticStyle: {"background-color": "#EF5939"},
                attrs: {tag: "button", to: "/reg"},
                on: {click: e.yes}
            }, [e._v("Yes\n        ")]), n("button", {
                staticClass: "button",
                staticStyle: {"background-color": "#2D5D7C"},
                attrs: {tag: "button", to: "/reg"},
                on: {click: e.not}
            }, [e._v("No\n        ")])]) : e._e(), 8 === this.step && !0 !== this.message ? n("div", {staticClass: "registration-left"}, [n("h2", {
                staticStyle: {
                    "font-size": "3vw",
                    color: "white"
                }
            }, [e._v("Successful")]), n("button", {
                staticClass: "button",
                staticStyle: {"background-color": "green"},
                attrs: {tag: "button"},
                on: {click: e.register}
            }, [e._v("Submit\n        ")])]) : e._e(), e.message ? n("div", {staticClass: "registration-left"}, [n("h2", {
                staticStyle: {
                    "font-size": "3vw",
                    color: "white"
                }
            }, [e._v("Registration Successful")])]) : e._e()])
        }, r = [function () {
            var e = this, a = e.$createElement, t = e._self._c || a;
            return t("div", {staticClass: "reg-right"}, [t("p", [e._v("Witness")]), t("span", {staticClass: "small"}, [e._v("the")]), t("span", {staticClass: "large"}, [e._v("Change")])])
        }], o = (t("7f7f"), t("bc3a")), i = t.n(o), s = {
            name: "RegistrationComponents", data: function () {
                return {
                    message: !1,
                    activeIndex: 0,
                    step: 1,
                    formData: {
                        teamName: "Nitish",
                        captain: {
                            name: "Nitish",
                            reg: 11701703,
                            email: "nkpc14@gmail.com",
                            contact: 7376977077,
                            whatsApp: 7376977077
                        },
                        viceCaptain: {name: "Nitish", reg: 11701703, email: "nkpc14@gmail.com", contact: 7376977077},
                        player3name: "Nitish",
                        player3Reg: 11701703,
                        player4name: "Nitish",
                        player4Reg: 11701703,
                        player5name: "Nitish",
                        player5Reg: 11701703,
                        player6name: "Nitish",
                        player6Reg: 11701703,
                        player7name: "Nitish",
                        player7Reg: 11701703,
                        player8name: "Nitish",
                        player8Reg: 11701703,
                        player9name: "Nitish",
                        player9Reg: 11701703,
                        player10name: "Nitish",
                        player10Reg: 11701703,
                        player11name: "Nitish",
                        player11Reg: 11701703,
                        player12name: "Nitish",
                        player12Reg: 11701703,
                        player13name: "Nitish",
                        player13Reg: 11701703,
                        player14name: "Nitish",
                        player14Reg: 11701703,
                        player15name: "Nitish",
                        player15Reg: 11701703,
                        accomodation: !1,
                        externalTeam: !1
                    }
                }
            }, props: {eventData: Array}, methods: {
                back: function () {
                    this.step > 1 && (this.step = this.step - 1)
                }, next: function () {
                    this.step < 8 && (this.step = this.step + 1)
                }, register: function () {
                    var e = this;
                    console.log(this.formData);
                    var a = new FormData;
                    a.append("team_name", this.formData.teamName), a.append("captain_name", this.formData.captain.name), a.append("captain_registration_number", this.formData.captain.reg), a.append("email", this.formData.captain.email), a.append("contact_number", this.formData.captain.contact), a.append("whatsapp_number", this.formData.captain.whatsApp), a.append("vice_captain_name", this.formData.viceCaptain.name), a.append("vice_captain_registration_number", this.formData.viceCaptain.reg), a.append("vice_email", this.formData.viceCaptain.email), a.append("vice_contact_number", this.formData.viceCaptain.contact), a.append("player_name3", this.formData.player3name), a.append("player_registration_number3", this.formData.player3Reg), a.append("player_name4", this.formData.player4name), a.append("player_registration_number4", this.formData.player4Reg), a.append("player_name5", this.formData.player5name), a.append("player_registration_number5", this.formData.player5Reg), a.append("player_name6", this.formData.player6name), a.append("player_registration_number6", this.formData.player6Reg), a.append("player_name7", this.formData.player7name), a.append("player_registration_number7", this.formData.player7Reg), a.append("player_name8", this.formData.player8name), a.append("player_registration_number8", this.formData.player8Reg), a.append("player_name9", this.formData.player9name), a.append("player_registration_number9", this.formData.player9Reg), a.append("player_name10", this.formData.player10name), a.append("player_registration_number10", this.formData.player10Reg), a.append("player_name11", this.formData.player11name), a.append("player_registration_number11", this.formData.player11Reg), a.append("player_name12", this.formData.player12name), a.append("player_registration_number12", this.formData.player12Reg), a.append("player_name13", this.formData.player13name), a.append("player_registration_number13", this.formData.player13Reg), a.append("player_name14", this.formData.player14name), a.append("player_registration_number14", this.formData.player14Reg), a.append("player_name15", this.formData.player15name), a.append("player_registration_number15", this.formData.player15Reg), a.append("accommodation", this.formData.accomodation), i.a.post("/api/internalReg/", a).then((function (a) {
                        a && (e.message = !0)
                    })).catch((function (e) {
                        console.log(e)
                    }))
                }, not: function () {
                    this.formData.accomodation = !1, this.step = 8
                }, yes: function () {
                    this.formData.accomodation = !0, this.step = 8
                }
            }
        }, l = s, p = (t("5372"), t("2877")), m = Object(p["a"])(l, n, r, !1, null, "3925d496", null);
        a["default"] = m.exports
    }, df0b: function (e, a, t) {
    }, e332: function (e, a, t) {
    }
});
//# sourceMappingURL=app.4cb952d9.js.map