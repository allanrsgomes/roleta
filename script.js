! function(e) {
    var t = {};

    function o(n) {
        if (t[n]) return t[n].exports;
        var r = t[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return e[n].call(r.exports, r, r.exports, o), r.l = !0, r.exports
    }
    o.m = e, o.c = t, o.d = function(e, t, n) {
        o.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        })
    }, o.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, o.t = function(e, t) {
        if (1 & t && (e = o(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (o.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var r in e) o.d(n, r, function(t) {
                return e[t]
            }.bind(null, r));
        return n
    }, o.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return o.d(t, "a", t), t
    }, o.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, o.p = "", o(o.s = 10)
}([function(e, t, o) {
    "use strict";

    function n(e, t, o) {
        var n = "";
        if (o) {
            var r = new Date;
            r.setTime(r.getTime() + 24 * o * 60 * 60 * 1e3), n = "expires=" + r.toUTCString()
        }
        document.cookie = e + "=" + t + ";" + n + ";path=/"
    }

    function r(e) {
        for (var t = e + "=", o = decodeURIComponent(document.cookie).split(";"), n = 0; n < o.length; n += 1) {
            for (var r = o[n];
                " " === r.charAt(0);) r = r.substring(1);
            if (0 === r.indexOf(t)) return r.substring(t.length, r.length)
        }
        return ""
    }

    function a(e, t) {
        e() ? t() : window.requestAnimationFrame((function() {
            a(e, t)
        }))
    }

    function c(e) {
        return Object.keys(e).map((function(t) {
            return encodeURIComponent(t) + "=" + encodeURIComponent(e[t])
        })).join("&")
    }

    function i(e, t, o) {
        return e.substr(0, t) + o + e.substr(t + o.length)
    }

    function l(e) {
        var t = e.replace(/\D/g, "");
        return t = (t = (t = t.replace(/^(\d{3})(\d{1,3})$/, "$1.$2")).replace(/^(\d{3})(\d{3})(\d{1,3})$/, "$1.$2.$3")).replace(/^(\d{3})(\d{3})(\d{3})(\d{1,2})$/, "$1.$2.$3-$4")
    }

    function u(e, t) {
        e.addEventListener("input", (function(e) {
            var o = e.target;
            o.value = t(o.value)
        }))
    }

    function s(e) {
        return e.replace(/^0+/, "")
    }
    o.d(t, "g", (function() {
        return n
    })), o.d(t, "c", (function() {
        return r
    })), o.d(t, "h", (function() {
        return a
    })), o.d(t, "d", (function() {
        return c
    })), o.d(t, "f", (function() {
        return i
    })), o.d(t, "b", (function() {
        return l
    })), o.d(t, "a", (function() {
        return u
    })), o.d(t, "e", (function() {
        return s
    }))
}, function(e, t, o) {
    "use strict";

    function n(e) {
        var t = document.createElement("div");
        return t.innerHTML = e, t.firstElementChild
    }

    function r() {
        document.querySelector("html").classList.add("scroll-locked")
    }

    function a() {
        document.querySelector("html").classList.remove("scroll-locked")
    }

    function c() {
        return !(!window.$ || !window.jQuery)
    }

    function i() {
        return window.matchMedia("(max-width: 699px)").matches
    }

    function l(e) {
        for (var t, o = Math.random(), n = 0, r = 0; r < e.length; r++)
            if ((n += e[r].probability) > o) {
                t = r;
                break
            } return t
    }

    function u(e) {
        var t = document.createElement("textarea");
        t.value = e, t.setAttribute("readonly", ""), t.style.position = "absolute", t.style.left = "-9999px", document.body.appendChild(t), t.select(), document.execCommand("copy"), document.body.removeChild(t)
    }

    function s() {
        return (new Date).getTime()
    }
    o.d(t, "f", (function() {
        return n
    })), o.d(t, "e", (function() {
        return r
    })), o.d(t, "h", (function() {
        return a
    })), o.d(t, "c", (function() {
        return c
    })), o.d(t, "d", (function() {
        return i
    })), o.d(t, "g", (function() {
        return l
    })), o.d(t, "a", (function() {
        return u
    })), o.d(t, "b", (function() {
        return s
    }))
}, function(e, t) {
    e.exports = function(e) {
        var t, o = "";
        return o += '<form novalidate><div class="form-row"><div class="form-field-group"><input type="text" name="FIRST_NAME" id="roulette-name" required spellcheck="false" /><label for="roulette-name">Nome</label><span class="error-feedback"></span></div></div><div class="form-row"><div class="form-field-group"><input type="email" name="EMAIL_ADDRESS_" id="roulette-email" required spellcheck="false" /><label for="roulette-email">E-mail</label><span class="error-feedback"></span></div></div><div class="form-row"><div class="form-field-group"><input type="tel" name="PHONE" id="roulette-phone" required spellcheck="false" maxlength="15" /><label for="roulette-phone">Celular</label><span class="error-feedback"></span></div><div class="form-field-group"><input type="text" name="CPF" id="roulette-cpf" required spellcheck="false" maxlength="14" /><label for="roulette-cpf">CPF</label><span id="cpf-error" class="error-feedback"></span></div></div><div class="form-row check-wrapper"><div class="form-field-group"><label for="roulette-accept"><input type="checkbox" name="accept" id="roulette-accept" value="accept" required /><span class="custom-checkbox">' + (null == (t = e.checkbox) ? "" : t) + '</span><span>Aceito receber comunicações da marca.</span></label></div></div><div class="form-row cta-wrapper"><button type="submit" class="btn-disabled">Girar roleta</button></div></form>'
    }
}, function(e, t) {
    e.exports = function(e) {
        var t, o = "";
        Array.prototype.join;
        return o += "<div>  Agora é só aplicar o cupom <strong>" + (null == (t = e.coupon) ? "" : t) + "</strong> e garantir  ", "BEMSAUDAVEL" === e.coupon ? o += "  até 20%OFF em vitaminas e suplementos selecionados.  " : "BELEZA" === e.coupon ? o += "  até 30%OFF em produtos selecionados dos grupos dermocosméticos, tratamento facial e maquiagem.  " : "CUIDESEBEM" === e.coupon ? o += "  até 50%OFF em produtos selecionados de cuidados básicos como álcool gel, proteção solar, higiene pessoal etc.  " : "BEMCORUJA" === e.coupon ? o += "  até 30%OFF em produtos selecionados do grupo infantil.  " : "SUPERPREMIO" === e.coupon && (o += "  até 70%OFF nos queridinhos dos clientes Bem Panvel.  "), o += "</div>"
    }
}, , , , function(e, t, o) {}, , , function(e, t, o) {
    "use strict";
    o.r(t);
    var n = o(0),
        r = o(1),
        a = o(2),
        c = o.n(a),
        i = o(3),
        l = o.n(i);

    function u(e) {
        var t = "string" == typeof e ? document.querySelector(e) : e,
            o = t.id;
        if (o) {
            var n, r, a = t.closest("form").querySelector("label[for=" + o + "]");
            r = a.parentElement, n = document.createElement("div"), a.classList.add("floating-label"), n.classList.add("floating-label-wrapper"), r.appendChild(n), n.appendChild(a), t.addEventListener("focus", (function() {
                n.classList.add("label-up")
            })), t.addEventListener("focusout", (function() {
                "" === t.value && n.classList.remove("label-up")
            }))
        }
    }
    var s;
    o(7);
    document.querySelector("html").classList.add("PAN01");
    var d, p = {
            prizes: [{
                label: "Até 30% OFF",
                coupon: "BELEZA"
            }, {
                label: "Até 20% OFF",
                coupon: "BEMSAUDAVEL"
            }, {
                label: "Até 50% OFF",
                coupon: "CUIDESEBEM"
            }, {
                label: "Até 30% OFF",
                coupon: "BEMCORUJA"
            }, {
                label: "Até 70% OFF",
                coupon: "SUPERPREMIO"
            }],
            formSettings: {
                template: c()({
                    checkbox: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18"><path class="custom-checkbox--unchecked" d="m2,0c-1.09306,0 -2,0.90694 -2,2l0,14c0,1.09306 0.90694,2 2,2l14,0c1.09306,0 2,-0.90694 2,-2l0,-14c0,-1.09306 -0.90694,-2 -2,-2l-14,0zm0,2l14,0l0,14l-14,0l0,-14z" /><path class="custom-checkbox--checked" d="m16,0l-14,0c-1.105,0 -2,0.895 -2,2l0,14c0,1.105 0.895,2 2,2l14,0c1.105,0 2,-0.895 2,-2l0,-14c0,-1.105 -0.895,-2 -2,-2zm-9,14.414l-4.707,-4.707l1.414,-1.414l3.293,3.293l7.293,-7.293l1.414,1.414l-8.707,8.707z" /></svg>'
                }),
                fields: {
                    FIRST_NAME: {
                        notEmpty: {
                            message: "Campo obrigatório"
                        },
                        stringLength: {
                            min: 3,
                            message: "Confira o seu nome"
                        }
                    },
                    EMAIL_ADDRESS_: {
                        notEmpty: {
                            message: "Campo obrigatório"
                        },
                        emailPattern: {
                            message: "Confira o seu e-mail"
                        }
                    },
                    PHONE: {
                        notEmpty: {
                            message: "Campo obrigatório"
                        },
                        phonePattern: {
                            pattern: /^\(\d{2}\)\s\d?\d{5}-\d{4}$/,
                            message: "Confira o número"
                        }
                    },
                    CPF: {
                        notEmpty: {
                            message: "Campo obrigatório"
                        },
                        cpfPattern: {
                            message: "Confira o número do CPF"
                        }
                    },
                    accept: {
                        notEmpty: {
                            message: ""
                        }
                    }
                }
            },
            title: "Já tá se preparando para a Black Friday?",
            subtitle: "Gire a roleta para ganhar um cupom exclusivo do Programa Bem Panvel!",
            successTitle: "Oba! Você ganhou um desconto incrível",
            successSubtitleTemplate: l.a,
            blockCookieName: "pan01-block",
            showAgainIfNoInteraction: "after-x-days",
            showHowManyDaysAfter: 5,
            showAfterInteraction: "never"
        },
        m = location.pathname,
        f = location.search,
        b = !!Object(n.c)(p.blockCookieName),
        g = Object(r.d)() ? 1e4 : 5e3;

    function v() {
        Object(n.h)((function() {
            return "loading" !== document.readyState && Object(r.c)() && void 0 !== window.RouletteForm
        }), (function() {
            var e, t, o, r, a, c = new window.RouletteForm(p);
            void 0 !== c.lightboxElement ? (c.on("open", (function() {
                h("PAN01_Roleta_Visu", "-", !0)
            })), c.on("formSubmitted", (function(e) {
                h("PAN01_Cadastro_Email"),
                    function(e) {
                        var t = {
                            _ri_: "X0Gzc2X%3DAQpglLjHJlDQGoAtcOyzfBkMYgzauOa1KCif7B1RtSJ3zftJ25VwjpnpgHlpgneHmgJoXX0Gzc2X%3DAQpglLjHJlDQGtjOCOoKJtm6RA3Lw9TOzgvoB1RtSJ3zftJ25",
                            _di_: "iqeru4p9masc5cnp3pmiu8rqongoellvhbkv6jnqejjlg8hb8ec0",
                            CUSTOMER_ID_: Object(n.e)(e.CPF.replace(/\D/g, "")),
                            FIRST_NAME: e.FIRST_NAME.trim(),
                            EMAIL_ADDRESS_: e.EMAIL_ADDRESS_.trim(),
                            MOBILE_NUMBER_: "55" + e.PHONE.replace(/\D/g, ""),
                            ORIGEM: "FORM_ROLETABF",
                            CUPOM: e.coupon
                        };
                        0;
                        var o = new XMLHttpRequest;
                        o.open("POST", "https://e.panvel.com/pub/rf"), o.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), o.send(Object(n.d)(t))
                    }(e)
            })), c.on("success", (function(e) {
                h("PAN01_Roleta_Resultado", e.coupon, !0)
            })), c.on("redirect", (function() {
                h("PAN01_Roleta_Click", "Redirect Automático")
            })), e = c.formElement, t = e.querySelector("#roulette-name"), o = e.querySelector("#roulette-email"), r = e.querySelector("#roulette-phone"), a = e.querySelector("#roulette-cpf"), Object(n.a)(t, (function(e) {
                return e.replace(/[^a-zA-Z\u00C0-\u00FF ]|\u00F7|\u00D7/g, "")
            })), Object(n.a)(o, (function(e) {
                return e.toLowerCase()
            })), Object(n.a)(r, E), Object(n.a)(a, n.b), u(t), u(o), u(r), u(a), c.open(), $(document).on("click", ".roulette-lightbox .lightbox-close-btn, .roulette-lightbox .lightbox-background", (function() {
                h("PAN01_Roleta_Click", "Fechar")
            })), $(document).on("click", ".roulette-lightbox form button[type=submit]", (function() {
                h("PAN01_Roleta_Click", "Girar roleta")
            })), $(document).on("click", ".roulette-lightbox .copy-button", (function() {
                h("PAN01_Roleta_Click", "Copiar cupom")
            }))) : document.body.classList.remove("hide-form")
        }))
    }

    function h(e, t, o) {
        void 0 === t && (t = "-"), void 0 === o && (o = !1);
        var r = window.ga;
        s ? r(s + ".send", "event", "Pmweb", e, t, {
            nonInteraction: o
        }) : Object(n.h)((function() {
            return window.ga && window.ga.getAll
        }), (function() {
            s = window.ga.getAll()[0].get("name"), r(s + ".send", "event", "Pmweb", e, t, {
                nonInteraction: o
            })
        }))
    }

    function E(e) {
        var t = e.replace(/\D/g, "").split("");
        if (0 === t.length) return "";
        for (var o = "(dd) ddddd-dddd", r = 0, a = 0; a < Math.min(t.length, 11); a += 1) {
            var c = o.indexOf("d");
            o = Object(n.f)(o, c, t[a]), r = c
        }
        return o.substr(0, r + 1)
    }
    "/panvel/cadastro-promocoes.do" !== m || "" !== f || b ? "/panvel/main.do" === m && setTimeout(v, g) : ((d = document.createElement("script")).src = "https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js", document.head.appendChild(d), document.body.classList.add("hide-form"), setTimeout(v, g))
}]);