! function(t) {
    var e = {};

    function n(o) {
        if (e[o]) return e[o].exports;
        var i = e[o] = {
            i: o,
            l: !1,
            exports: {}
        };
        return t[o].call(i.exports, i, i.exports, n), i.l = !0, i.exports
    }
    n.m = t, n.c = e, n.d = function(t, e, o) {
        n.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: o
        })
    }, n.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, n.t = function(t, e) {
        if (1 & e && (t = n(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var o = Object.create(null);
        if (n.r(o), Object.defineProperty(o, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var i in t) n.d(o, i, function(e) {
                return t[e]
            }.bind(null, i));
        return o
    }, n.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        } : function() {
            return t
        };
        return n.d(e, "a", e), e
    }, n.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, n.p = "", n(n.s = 9)
}([function(t, e, n) {
    "use strict";

    function o(t, e, n) {
        var o = "";
        if (n) {
            var i = new Date;
            i.setTime(i.getTime() + 24 * n * 60 * 60 * 1e3), o = "expires=" + i.toUTCString()
        }
        document.cookie = t + "=" + e + ";" + o + ";path=/"
    }

    function i(t) {
        for (var e = t + "=", n = decodeURIComponent(document.cookie).split(";"), o = 0; o < n.length; o += 1) {
            for (var i = n[o];
                " " === i.charAt(0);) i = i.substring(1);
            if (0 === i.indexOf(e)) return i.substring(e.length, i.length)
        }
        return ""
    }

    function r(t, e) {
        t() ? e() : window.requestAnimationFrame((function() {
            r(t, e)
        }))
    }

    function s(t) {
        return Object.keys(t).map((function(e) {
            return encodeURIComponent(e) + "=" + encodeURIComponent(t[e])
        })).join("&")
    }

    function l(t, e, n) {
        return t.substr(0, e) + n + t.substr(e + n.length)
    }

    function c(t) {
        var e = t.replace(/\D/g, "");
        return e = (e = (e = e.replace(/^(\d{3})(\d{1,3})$/, "$1.$2")).replace(/^(\d{3})(\d{3})(\d{1,3})$/, "$1.$2.$3")).replace(/^(\d{3})(\d{3})(\d{3})(\d{1,2})$/, "$1.$2.$3-$4")
    }

    function a(t, e) {
        t.addEventListener("input", (function(t) {
            var n = t.target;
            n.value = e(n.value)
        }))
    }

    function u(t) {
        return t.replace(/^0+/, "")
    }
    n.d(e, "g", (function() {
        return o
    })), n.d(e, "c", (function() {
        return i
    })), n.d(e, "h", (function() {
        return r
    })), n.d(e, "d", (function() {
        return s
    })), n.d(e, "f", (function() {
        return l
    })), n.d(e, "b", (function() {
        return c
    })), n.d(e, "a", (function() {
        return a
    })), n.d(e, "e", (function() {
        return u
    }))
}, function(t, e, n) {
    "use strict";

    function o(t) {
        var e = document.createElement("div");
        return e.innerHTML = t, e.firstElementChild
    }

    function i() {
        document.querySelector("html").classList.add("scroll-locked")
    }

    function r() {
        document.querySelector("html").classList.remove("scroll-locked")
    }

    function s() {
        return !(!window.$ || !window.jQuery)
    }

    function l() {
        return window.matchMedia("(max-width: 699px)").matches
    }

    function c(t) {
        for (var e, n = Math.random(), o = 0, i = 0; i < t.length; i++)
            if ((o += t[i].probability) > n) {
                e = i;
                break
            } return e
    }

    function a(t) {
        var e = document.createElement("textarea");
        e.value = t, e.setAttribute("readonly", ""), e.style.position = "absolute", e.style.left = "-9999px", document.body.appendChild(e), e.select(), document.execCommand("copy"), document.body.removeChild(e)
    }

    function u() {
        return (new Date).getTime()
    }
    n.d(e, "f", (function() {
        return o
    })), n.d(e, "e", (function() {
        return i
    })), n.d(e, "h", (function() {
        return r
    })), n.d(e, "c", (function() {
        return s
    })), n.d(e, "d", (function() {
        return l
    })), n.d(e, "g", (function() {
        return c
    })), n.d(e, "a", (function() {
        return a
    })), n.d(e, "b", (function() {
        return u
    }))
}, , , function(t, e, n) {
    "use strict";
    var o = this && this.__spreadArrays || function() {
        for (var t = 0, e = 0, n = arguments.length; e < n; e++) t += arguments[e].length;
        var o = Array(t),
            i = 0;
        for (e = 0; e < n; e++)
            for (var r = arguments[e], s = 0, l = r.length; s < l; s++, i++) o[i] = r[s];
        return o
    };
    e.__esModule = !0;
    var i = function() {
        function t() {
            this.listeners = {}
        }
        return t.prototype.trigger = function(t) {
            for (var e = this, n = [], i = 1; i < arguments.length; i++) n[i - 1] = arguments[i];
            return t in this.listeners && (this.listeners[t].map((function(t) {
                t.call.apply(t, o([e], n))
            })), !0)
        }, t.prototype.on = function(t, e) {
            return t in this.listeners || (this.listeners[t] = []), this.listeners[t].push(e), !0
        }, t.prototype.off = function(t, e) {
            return t in this.listeners && (this.listeners[t] = void 0 === e ? [] : this.listeners[t].filter((function(t) {
                return t !== e
            })), !0)
        }, t.prototype.countListeners = function(t) {
            return t in this.listeners ? this.listeners[t].length : 0
        }, t
    }();
    e.default = i
}, function(t, e) {
    t.exports = function(t) {
        var e, n = "";
        Array.prototype.join;
        return n += '<div class="roulette-lightbox"><div class="lightbox-background"></div><div class="lightbox-wrapper"><div class="lightbox-close-btn" title="Fechar"><div class="icon__close"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" height="20px" width="20px"><line x1="0" y1="0" x2="32" y2="32"></line><line x1="32" y1="0" x2="0" y2="32"></line></svg></div></div><div class="lightbox-container"><div class="wheel-container"><div class="wheel-background">' + (null == (e = t.background) ? "" : e) + '</div><div class="wheel-pointer">' + (null == (e = t.pointer) ? "" : e) + '</div><div class="wheel-text-container">          ', t.prizes.forEach((t, o) => {
            n += "          ", n += '          <div class="wheel-text-wrapper" ' + (null == (e = 'style="transform: translate(0px, -50%) rotate(' + (30 * o - 75) + 'deg"') ? "" : e) + '><span class="wheel-text">' + (null == (e = t.label) ? "" : e) + "</span></div>          "
        }), n += '        </div></div><div class="lightbox-content"><p class="content-title">' + (null == (e = t.title) ? "" : e) + "<span>" + (null == (e = t.emojiSVG) ? "" : e) + '</span></p><p class="content-subtitle">' + (null == (e = t.subtitle) ? "" : e) + "</p>        " + (null == (e = t.form) ? "" : e) + '        <button class="copy-button">Copiar o cupom</button><div class="container-advice"><span class="redirect-advice">Redirecionando você para os produtos da categoria...</span></div><span class="promo-rules">*Cupom válido para os canais digitais (site e app) nos produtos selecionados, até          16/11/2020 ou enquanto durarem os estoques.</span><span class="promo-rules">Desconto aplicado ao inserir o cupom na cesta de compras. Não cumulativo com demais          promoções da rede Panvel.</span></div></div></div></div>'
    }
}, function(t, e) {
    t.exports = function(t) {
        var e, n = "";
        return n += "<span>  Usando o cupom <strong>" + (null == (e = t.coupon) ? "" : e) + "</strong> na sua próxima compra, você tem <strong>" + (null == (e = t.label) ? "" : e) + "</strong>.  Demais né?`</span>"
    }
}, , , function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, "RouletteForm", (function() {
        return b
    }));
    var o = n(4),
        i = n.n(o),
        r = n(5),
        s = n.n(r),
        l = '<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18 9C18 13.9705 13.9705 18 9 18C4.0295 18 0 13.9705 0 9C0 4.0295 4.0295 0 9 0C13.9705 0 18 4.0295 18 9Z" fill="#FFCC4D"/><path d="M9 10.5C7.1885 10.5 5.9865 10.289 4.5 10C4.1605 9.9345 3.5 10 3.5 11C3.5 13 5.7975 15.5 9 15.5C12.202 15.5 14.5 13 14.5 11C14.5 10 13.8395 9.934 13.5 10C12.0135 10.289 10.8115 10.5 9 10.5Z" fill="#664500"/><path d="M4.5 11C4.5 11 6 11.5 9 11.5C12 11.5 13.5 11 13.5 11C13.5 11 12.5 13 9 13C5.5 13 4.5 11 4.5 11Z" fill="white"/><path d="M7.84113 2.2065L5.57013 2.607L4.40013 0.480499C4.27113 0.245999 4.00613 0.120499 3.74413 0.166499C3.48063 0.212999 3.27563 0.421999 3.23463 0.685999L2.86213 3.0845L0.591131 3.485C0.323631 3.532 0.117131 3.7475 0.0806311 4.017C0.0441312 4.2865 0.186131 4.5485 0.432131 4.6655L2.46713 5.6315L2.09313 8.0375C2.05163 8.3055 2.18763 8.5695 2.42963 8.692C2.51913 8.737 2.61513 8.7585 2.71063 8.7585C2.87413 8.7585 3.03563 8.6945 3.15613 8.5725L4.91213 6.792L7.17113 7.8645C7.41613 7.9805 7.70813 7.926 7.89413 7.7285C8.08013 7.531 8.11713 7.2365 7.98663 6.999L6.81263 4.865L8.39513 3.261C8.58613 3.0675 8.62963 2.7725 8.50363 2.5315C8.37663 2.2905 8.10713 2.16 7.84113 2.2065ZM10.1591 2.2065L12.4301 2.607L13.6001 0.480499C13.7291 0.245999 13.9941 0.120499 14.2561 0.166499C14.5191 0.212999 14.7241 0.421999 14.7651 0.685999L15.1376 3.0845L17.4086 3.485C17.6766 3.532 17.8831 3.747 17.9191 4.0165C17.9551 4.286 17.8136 4.548 17.5676 4.665L15.5326 5.631L15.9066 8.037C15.9481 8.305 15.8121 8.569 15.5701 8.6915C15.4806 8.7365 15.3846 8.758 15.2891 8.758C15.1256 8.758 14.9641 8.694 14.8436 8.572L13.0876 6.7915L10.8286 7.864C10.5836 7.98 10.2916 7.9255 10.1056 7.728C9.91963 7.5305 9.88263 7.236 10.0131 6.9985L11.1871 4.865L9.60463 3.261C9.41363 3.0675 9.37013 2.7725 9.49613 2.5315C9.62363 2.2905 9.89313 2.16 10.1591 2.2065Z" fill="#E95F28"/></svg>',
        c = n(6),
        a = n.n(c),
        u = n(1),
        p = {
            notEmpty: function(t) {
                return "" !== t
            },
            emailPattern: function(t, e) {
                return (e && e.pattern || /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i).test(t)
            },
            phonePattern: function(t, e) {
                return (e && e.pattern || /^\(\d{2}\)\s\d?\d{4}-\d{4}$/).test(t)
            },
            cpfPattern: function(t) {
                var e, n = t,
                    o = 0;
                if (11 !== (n = n.replace(/\D/g, "")).length || /^(\d)\1{10}$/.test(n)) return !1;
                for (var i = 1; i <= 9; i++) o += parseInt(n.substring(i - 1, i)) * (11 - i);
                if (10 !== (e = 10 * o % 11) && 11 !== e || (e = 0), e !== parseInt(n.substring(9, 10))) return !1;
                o = 0;
                for (i = 1; i <= 10; i++) o += parseInt(n.substring(i - 1, i)) * (12 - i);
                return 10 !== (e = 10 * o % 11) && 11 !== e || (e = 0), e === parseInt(n.substring(10, 11))
            },
            stringLength: function(t, e) {
                if (void 0 !== t.length) {
                    var n = e && e.min || -1,
                        o = e && e.max || 1 / 0,
                        i = t.length;
                    return i >= n && i <= o
                }
            }
        };

    function d(t, e) {
        var n = !0,
            o = "";
        if (void 0 === e || 0 === Object.keys(e).length) return {
            isValid: n,
            message: o
        };
        for (var i = Object.keys(e), r = 0; r < i.length && n;) {
            var s = i[r],
                l = e[s];
            (n = p[s](t, l)) || (o = l.message || ""), r++
        }
        return {
            isValid: n,
            message: o
        }
    }
    var f, h = n(0),
        m = (f = function(t, e) {
            return (f = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                })(t, e)
        }, function(t, e) {
            function n() {
                this.constructor = t
            }
            f(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        }),
        v = function() {
            for (var t = 0, e = 0, n = arguments.length; e < n; e++) t += arguments[e].length;
            var o = Array(t),
                i = 0;
            for (e = 0; e < n; e++)
                for (var r = arguments[e], s = 0, l = r.length; s < l; s++, i++) o[i] = r[s];
            return o
        },
        b = function(t) {
            function e(e) {
                var n, o, i, r, s, l, c = t.call(this) || this;
                return c.isInitialized = !1, c.libsLoaded = !1, c.isOpen = !1, c.formValid = !1, c.blockCookieName = null !== (n = e.blockCookieName) && void 0 !== n ? n : "pm02-block", c.showHowManyDaysAfter = null !== (o = e.showHowManyDaysAfter) && void 0 !== o ? o : 30, c.showAgainIfNoInteraction = null !== (i = e.showAgainIfNoInteraction) && void 0 !== i ? i : "next-session", c.showAfterInteraction = null !== (r = e.showAfterInteraction) && void 0 !== r ? r : "never", Object(h.c)(c.blockCookieName) ? c : (c.applyNoInteractionRules(), c.on("formSubmitted", (function() {
                    return c.applyAfterInteractionRules()
                })), u.c() ? (c.installVelocityPlugin(), c.prizeList = e.prizes, c.addDefaultProbabilities(), c.fields = e.formSettings.fields, c.fieldNames = Object.keys(c.fields), c.successTitle = null !== (s = e.successTitle) && void 0 !== s ? s : "Sucesso!<br> Você ganhou um presente", c.successSubtitleTemplate = null !== (l = e.successSubtitleTemplate) && void 0 !== l ? l : a.a, c.lightboxElement = c.mountElements(e.formSettings.template, e.title, e.subtitle), c.rouletteElement = c.lightboxElement.querySelector(".wheel-container"), c.formElement = c.lightboxElement.querySelector("form"), c.bindCloseEvents(), c.bindSubmitEvent(), c.bindInlineValidationEvents(), c.removeErrorOnInteraction(), c) : c)
            }
            return m(e, t), e.prototype.appendTo = function(t) {
                document.querySelector(t).insertAdjacentElement("beforeend", this.lightboxElement), this.isInitialized = !0
            }, e.prototype.open = function() {
                this.isInitialized || (this.appendTo("body"), this.isInitialized = !0), this.lightboxElement.setAttribute("open", "true"), this.isOpen = !0, u.e(), this.trigger("open")
            }, e.prototype.close = function() {
                this.lightboxElement.removeAttribute("open"), this.isOpen = !1, u.h(), this.trigger("close")
            }, e.prototype.spin = function(t) {
                var e = this;
                this.libsLoaded ? this.animateWheel(t) : this.on("libsLoaded", (function() {
                    e.animateWheel(t)
                }))
            }, e.prototype.applyNoInteractionRules = function() {
                switch (this.showAgainIfNoInteraction) {
                    case "always":
                        break;
                    case "next-session":
                        this.updateBlockCookieDuration(0);
                        break;
                    case "after-x-days":
                        this.updateBlockCookieDuration(this.showHowManyDaysAfter);
                        break;
                    case "never":
                        this.updateBlockCookieDuration(18250)
                }
            }, e.prototype.applyAfterInteractionRules = function() {
                switch (this.showAfterInteraction) {
                    case "always":
                        break;
                    case "next-session":
                        this.updateBlockCookieDuration(0);
                        break;
                    case "after-x-days":
                        this.updateBlockCookieDuration(this.showHowManyDaysAfter);
                        break;
                    case "never":
                        this.updateBlockCookieDuration(18250)
                }
            }, e.prototype.updateBlockCookieDuration = function(t) {
                var e = u.b() + 864e5 * t;
                Object(h.g)(this.blockCookieName, e, t)
            }, e.prototype.mountElements = function(t, e, n) {
                var o = s()({
                    prizes: this.fillRouletteSlots(this.prizeList),
                    background: '<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 564 563"><path d="M281.871 281.983l.182-271.7112 135.515 36.3113L281.871 281.983z" /><path d="M281.646 281.854L417.66 46.6359l99.204 99.2041-235.218 136.014z" /><path d="M281.517 281.629l235.4-135.697 36.311 135.515-271.711.182z" /><path d="M281.517 281.371l271.711.182-36.311 135.515-235.4-135.697z" /><path d="M281.646 281.146L516.864 417.16l-99.204 99.204-136.014-235.218z" /><path d="M281.871 281.017l135.697 235.4-135.515 36.311-.182-271.711z" /><path d="M282.129 281.017l-.182 271.711-135.515-36.311 135.697-235.4z" /><path d="M282.353 281.146L146.34 516.364 47.1357 417.16 282.353 281.146z" /><path d="M282.483 281.371L47.0829 417.068 10.7716 281.553l271.7114-.182z" /><path d="M282.483 281.629l-271.7114-.182 36.3113-135.515L282.483 281.629z" /><path d="M282.354 281.853L47.1358 145.84 146.34 46.6357 282.354 281.853z" /><path d="M282.129 281.983L146.432 46.5832l135.515-36.3113.182 271.7111z" /><circle cx="282" cy="281" r="265" stroke="#fff" stroke-width="12" /><circle cx="282" cy="16" r="4" fill="#C4C4C4" /><circle cx="414.5" cy="51.5033" r="4" fill="#C4C4C4" /><circle cx="511.497" cy="148.5" r="4" fill="#C4C4C4" /><circle cx="547" cy="281" r="4" fill="#C4C4C4" /><circle cx="511.497" cy="413.5" r="4" fill="#C4C4C4" /><circle cx="414.5" cy="510.497" r="4" fill="#C4C4C4" /><circle cx="282" cy="546" r="4" fill="#C4C4C4" /><circle cx="149.5" cy="510.497" r="4" fill="#C4C4C4" /><circle cx="52.5033" cy="413.5" r="4" fill="#C4C4C4" /><circle cx="16.9999" cy="281" r="4" fill="#C4C4C4" /><circle cx="52.5032" cy="148.5" r="4" fill="#C4C4C4" /><circle cx="149.5" cy="51.5033" r="4" fill="#C4C4C4" /><circle cx="282" cy="281" r="65" fill="#fff" /></svg>',
                    pointer: '<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 95 90"><path fill="#000" stroke="#fff" stroke-width="3" d="M66.0582 53.422l.4696-.0904.3306-.3457c2.1717-2.2707 5.1599-6.0074 6.6189-10.5521 1.4841-4.6232 1.3708-10.0696-2.6786-15.4798-4.0408-5.3987-9.3211-7.1817-14.2241-7.1338-4.8306.0473-9.3012 1.8618-12.0045 3.6602l-.324.2155-.1784.3459L26.234 58.6244l-1.4155 2.7447 3.0325-.5843 38.2072-7.3628z" /><circle cx="55.5876" cy="38.3392" r="4" fill="#C4C4C4" /></svg>',
                    form: t,
                    title: e,
                    subtitle: n,
                    emojiSVG: l
                });
                return u.f(o)
            }, e.prototype.bindCloseEvents = function() {
                var t = this;
                this.lightboxElement.querySelector(".lightbox-close-btn").addEventListener("click", (function() {
                    t.close()
                })), this.lightboxElement.querySelector(".lightbox-background").addEventListener("click", (function() {
                    t.close()
                }))
            }, e.prototype.bindSubmitEvent = function() {
                var t = this;
                this.formElement.addEventListener("submit", (function(e) {
                    e.preventDefault();
                    var n = t.checkForm(!0);
                    if (n.isValid) {
                        var o = u.g(t.prizeList);
                        n.values.coupon = t.prizeList[o].coupon, t.changeToSecondScreen(), t.trigger("formSubmitted", n.values), u.d() ? setTimeout((function() {
                            t.spin(o)
                        }), 700) : t.spin(o)
                    }
                }))
            }, e.prototype.bindInlineValidationEvents = function() {
                for (var t = this, e = this.formElement.querySelectorAll("input[type=text], input[type=email], input[type=tel]"), n = function(n) {
                        var o = e[n];
                        o.addEventListener("blur", (function() {
                            var e = o.name,
                                n = d(o.value, t.fields[e]);
                            n.isValid || t.showErrorFeedback(o, n.message), t.checkForm(!1)
                        }))
                    }, o = 0; o < e.length; o++) n(o);
                this.formElement.querySelector("input[type=checkbox]").addEventListener("change", (function() {
                    t.checkForm(!1)
                }))
            }, e.prototype.checkForm = function(t) {
                var e = this.validateForm(t),
                    n = this.formElement.querySelector("button[type=submit]");
                return this.formValid = e.isValid, this.formValid ? n.classList.remove("btn-disabled") : n.classList.add("btn-disabled"), e
            }, e.prototype.validateForm = function(t) {
                var e = this,
                    n = this.getFormValues(),
                    o = !0,
                    i = [];
                return this.fieldNames.forEach((function(r) {
                    var s = d(n[r], e.fields[r]),
                        l = e.formElement.querySelector("[name=" + r + "]");
                    s.isValid || (o = !1, i.push({
                        fieldName: r,
                        errorMessage: s.message
                    }), t && e.showErrorFeedback(l, s.message))
                })), {
                    isValid: o,
                    errors: i,
                    values: n
                }
            }, e.prototype.getFormValues = function() {
                var t = this,
                    e = {};
                return this.fieldNames.forEach((function(n) {
                    e[n] = t.getFieldValue(n)
                })), e
            }, e.prototype.getFieldValue = function(t) {
                var e = this.formElement.querySelector('[name="' + t + '"]');
                return "checkbox" === e.type ? e.checked ? e.value : "" : e.value
            }, e.prototype.showErrorFeedback = function(t, e) {
                var n = t.closest(".form-field-group"),
                    o = n.querySelector(".error-feedback");
                o && (o.textContent = e), n.classList.add("invalid-field")
            }, e.prototype.hideErrorFeedback = function(t) {
                var e = t.closest(".form-field-group"),
                    n = e.querySelector(".error-feedback");
                n && (n.textContent = ""), e.classList.remove("invalid-field")
            }, e.prototype.removeErrorOnInteraction = function() {
                for (var t = this, e = this.formElement.querySelectorAll("input[type=text], input[type=email], input[type=tel], input[type=checkbox]"), n = function(n) {
                        var o = e[n];
                        o.addEventListener("focus", (function() {
                            t.hideErrorFeedback(o)
                        }))
                    }, o = 0; o < e.length; o++) n(o)
            }, e.prototype.changeToSecondScreen = function() {
                var t = this.lightboxElement.querySelector(".content-title"),
                    e = this.lightboxElement.querySelector(".content-subtitle");
                this.lightboxElement.setAttribute("spinning", "true"), t.innerHTML = "Sorteando...", e.innerHTML = "Aguarde para descobrir o seu presente."
            }, e.prototype.changeToFinalScreen = function(t) {
                var e = this.lightboxElement.querySelector(".content-title"),
                    n = this.lightboxElement.querySelector(".content-subtitle"),
                    o = this.prizeList[t];
                this.lightboxElement.removeAttribute("spinning"), this.lightboxElement.setAttribute("success", "true"), e.innerHTML = this.successTitle + "<span>" + l + "</span>", n.innerHTML = this.successSubtitleTemplate({
                    coupon: o.coupon,
                    label: o.label.toLowerCase()
                }), this.bindCopyButtonEvent(o.coupon), this.trigger("success", o)
            }, e.prototype.fillRouletteSlots = function(t) {
                for (var e = t.length, n = v(t), o = 0; o < 12 - e; o++) n.push(n[o]);
                return n
            }, e.prototype.addDefaultProbabilities = function() {
                var t = 1 - this.prizeList.reduce((function(t, e) {
                        return t + (e.probability || 0)
                    }), 0),
                    e = this.prizeList.filter((function(t) {
                        return void 0 === t.probability
                    })).length;
                this.prizeList.forEach((function(n) {
                    void 0 === n.probability && (n.probability = t / e)
                }))
            }, e.prototype.animateWheel = function(t) {
                var e = this,
                    n = (u.d() ? 135 : 45) - 30 * (1 + 2 * t) / 2 + 2160;
                $(".wheel-text-container, .wheel-background svg").velocity({
                    rotateZ: n + "deg"
                }, {
                    duration: 7e3,
                    easing: [.5, 0, 0, 1],
                    complete: function() {
                        return e.afterSpinHandler(t)
                    }
                })
            }, e.prototype.afterSpinHandler = function(t) {
                this.changeToFinalScreen(t), this.trigger("spinEnded")
            }, e.prototype.bindCopyButtonEvent = function(t) {
                var e = this,
                    n = this.lightboxElement.querySelector(".copy-button");
                n.addEventListener("click", (function() {
                    u.a(t), n.textContent = "Cupom copiado!", e.lightboxElement.setAttribute("copied", "true"), e.getURLCoupon(t)
                }))
            }, e.prototype.installVelocityPlugin = function() {
                var t = this,
                    e = document.createElement("script"),
                    n = document.head || document.querySelector("head");
                e.src = "https://cdnjs.cloudflare.com/ajax/libs/velocity/1.5.2/velocity.min.js", n.appendChild(e), Object(h.h)((function() {
                    return void 0 !== $().velocity
                }), (function() {
                    t.libsLoaded = !0, t.trigger("libsLoaded")
                }))
            }, e.prototype.getURLCoupon = function(t) {
                "BEMSAUDAVEL" === t ? this.redirectTimeOut("https://www.panvel.com/panvel/promocao.do?promocao=2834") : "BELEZA" === t ? this.redirectTimeOut("https://www.panvel.com/panvel/promocao.do?promocao=2833") : "CUIDESEBEM" === t ? this.redirectTimeOut("https://www.panvel.com/panvel/promocao.do?promocao=2835") : "BEMCORUJA" === t ? this.redirectTimeOut("https://www.panvel.com/panvel/promocao.do?promocao=2836") : "SUPERPREMIO" === t && this.redirectTimeOut("https://www.panvel.com/panvel/promocao.do?promocao=2837")
            }, e.prototype.redirectTimeOut = function(t) {
                var e = this;
                setTimeout((function() {
                    e.isOpen && (e.trigger("redirect"), location.href = t)
                }), 5e3)
            }, e
        }(i.a);
    window.RouletteForm = b
}]);