 (function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 5)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

    // Initialize and Configure Scroll Reveal Animation
    window.sr = ScrollReveal();
    sr.reveal('.sr-icons', {
        duration: 600,
        scale: 0.3,
        distance: '0px'
    }, 200);
    sr.reveal('.sr-button', {
        duration: 1000,
        delay: 200
    });
    sr.reveal('.sr-contact', {
        duration: 600,
        scale: 0.3,
        distance: '0px'
    }, 300);

    // Initialize and Configure Magnific Popup Lightbox Plugin
    $('.popup-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
        }
    });

})(jQuery); // End of use strict

/*!
 * Start Bootstrap - Creative v3.3.7+1 (http://startbootstrap.com/template-overviews/creative)
 * Copyright 2013-2016 Start Bootstrap
 * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap/blob/gh-pages/LICENSE)
 */
!function(a){"use strict";a("a.page-scroll").bind("click",function(e){var l=a(this);a("html, body").stop().animate({scrollTop:a(l.attr("href")).offset().top-50},1250,"easeInOutExpo"),e.preventDefault()}),a("body").scrollspy({target:".navbar-fixed-top",offset:51}),a(".navbar-collapse ul li a").click(function(){a(".navbar-toggle:visible").click()}),a("#mainNav").affix({offset:{top:100}}),window.sr=ScrollReveal(),sr.reveal(".sr-icons",{duration:600,scale:.3,distance:"0px"},200),sr.reveal(".sr-button",{duration:1e3,delay:200}),sr.reveal(".sr-contact",{duration:600,scale:.3,distance:"0px"},300),a(".popup-gallery").magnificPopup({delegate:"a",type:"image",tLoading:"Loading image #%curr%...",mainClass:"mfp-img-mobile",gallery:{enabled:!0,navigateByImgClick:!0,preload:[0,1]},image:{tError:'<a href="%url%">The image #%curr%</a> could not be loaded.'}})}(jQuery);
/*! Magnific Popup - v1.1.0 - 2016-02-20
* http://dimsemenov.com/plugins/magnific-popup/
* Copyright (c) 2016 Dmitry Semenov; */
!function (a) { "function" == typeof define && define.amd ? define(["jquery"], a) : a("object" == typeof exports ? require("jquery") : window.jQuery || window.Zepto) }(function (a) { var b, c, d, e, f, g, h = "Close", i = "BeforeClose", j = "AfterClose", k = "BeforeAppend", l = "MarkupParse", m = "Open", n = "Change", o = "mfp", p = "." + o, q = "mfp-ready", r = "mfp-removing", s = "mfp-prevent-close", t = function () { }, u = !!window.jQuery, v = a(window), w = function (a, c) { b.ev.on(o + a + p, c) }, x = function (b, c, d, e) { var f = document.createElement("div"); return f.className = "mfp-" + b, d && (f.innerHTML = d), e ? c && c.appendChild(f) : (f = a(f), c && f.appendTo(c)), f }, y = function (c, d) { b.ev.triggerHandler(o + c, d), b.st.callbacks && (c = c.charAt(0).toLowerCase() + c.slice(1), b.st.callbacks[c] && b.st.callbacks[c].apply(b, a.isArray(d) ? d : [d])) }, z = function (c) { return c === g && b.currTemplate.closeBtn || (b.currTemplate.closeBtn = a(b.st.closeMarkup.replace("%title%", b.st.tClose)), g = c), b.currTemplate.closeBtn }, A = function () { a.magnificPopup.instance || (b = new t, b.init(), a.magnificPopup.instance = b) }, B = function () { var a = document.createElement("p").style, b = ["ms", "O", "Moz", "Webkit"]; if (void 0 !== a.transition) return !0; for (; b.length;) if (b.pop() + "Transition" in a) return !0; return !1 }; t.prototype = { constructor: t, init: function () { var c = navigator.appVersion; b.isLowIE = b.isIE8 = document.all && !document.addEventListener, b.isAndroid = /android/gi.test(c), b.isIOS = /iphone|ipad|ipod/gi.test(c), b.supportsTransition = B(), b.probablyMobile = b.isAndroid || b.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), d = a(document), b.popupsCache = {} }, open: function (c) { var e; if (c.isObj === !1) { b.items = c.items.toArray(), b.index = 0; var g, h = c.items; for (e = 0; e < h.length; e++) if (g = h[e], g.parsed && (g = g.el[0]), g === c.el[0]) { b.index = e; break } } else b.items = a.isArray(c.items) ? c.items : [c.items], b.index = c.index || 0; if (b.isOpen) return void b.updateItemHTML(); b.types = [], f = "", c.mainEl && c.mainEl.length ? b.ev = c.mainEl.eq(0) : b.ev = d, c.key ? (b.popupsCache[c.key] || (b.popupsCache[c.key] = {}), b.currTemplate = b.popupsCache[c.key]) : b.currTemplate = {}, b.st = a.extend(!0, {}, a.magnificPopup.defaults, c), b.fixedContentPos = "auto" === b.st.fixedContentPos ? !b.probablyMobile : b.st.fixedContentPos, b.st.modal && (b.st.closeOnContentClick = !1, b.st.closeOnBgClick = !1, b.st.showCloseBtn = !1, b.st.enableEscapeKey = !1), b.bgOverlay || (b.bgOverlay = x("bg").on("click" + p, function () { b.close() }), b.wrap = x("wrap").attr("tabindex", -1).on("click" + p, function (a) { b._checkIfClose(a.target) && b.close() }), b.container = x("container", b.wrap)), b.contentContainer = x("content"), b.st.preloader && (b.preloader = x("preloader", b.container, b.st.tLoading)); var i = a.magnificPopup.modules; for (e = 0; e < i.length; e++) { var j = i[e]; j = j.charAt(0).toUpperCase() + j.slice(1), b["init" + j].call(b) } y("BeforeOpen"), b.st.showCloseBtn && (b.st.closeBtnInside ? (w(l, function (a, b, c, d) { c.close_replaceWith = z(d.type) }), f += " mfp-close-btn-in") : b.wrap.append(z())), b.st.alignTop && (f += " mfp-align-top"), b.fixedContentPos ? b.wrap.css({ overflow: b.st.overflowY, overflowX: "hidden", overflowY: b.st.overflowY }) : b.wrap.css({ top: v.scrollTop(), position: "absolute" }), (b.st.fixedBgPos === !1 || "auto" === b.st.fixedBgPos && !b.fixedContentPos) && b.bgOverlay.css({ height: d.height(), position: "absolute" }), b.st.enableEscapeKey && d.on("keyup" + p, function (a) { 27 === a.keyCode && b.close() }), v.on("resize" + p, function () { b.updateSize() }), b.st.closeOnContentClick || (f += " mfp-auto-cursor"), f && b.wrap.addClass(f); var k = b.wH = v.height(), n = {}; if (b.fixedContentPos && b._hasScrollBar(k)) { var o = b._getScrollbarSize(); o && (n.marginRight = o) } b.fixedContentPos && (b.isIE7 ? a("body, html").css("overflow", "hidden") : n.overflow = "hidden"); var r = b.st.mainClass; return b.isIE7 && (r += " mfp-ie7"), r && b._addClassToMFP(r), b.updateItemHTML(), y("BuildControls"), a("html").css(n), b.bgOverlay.add(b.wrap).prependTo(b.st.prependTo || a(document.body)), b._lastFocusedEl = document.activeElement, setTimeout(function () { b.content ? (b._addClassToMFP(q), b._setFocus()) : b.bgOverlay.addClass(q), d.on("focusin" + p, b._onFocusIn) }, 16), b.isOpen = !0, b.updateSize(k), y(m), c }, close: function () { b.isOpen && (y(i), b.isOpen = !1, b.st.removalDelay && !b.isLowIE && b.supportsTransition ? (b._addClassToMFP(r), setTimeout(function () { b._close() }, b.st.removalDelay)) : b._close()) }, _close: function () { y(h); var c = r + " " + q + " "; if (b.bgOverlay.detach(), b.wrap.detach(), b.container.empty(), b.st.mainClass && (c += b.st.mainClass + " "), b._removeClassFromMFP(c), b.fixedContentPos) { var e = { marginRight: "" }; b.isIE7 ? a("body, html").css("overflow", "") : e.overflow = "", a("html").css(e) } d.off("keyup" + p + " focusin" + p), b.ev.off(p), b.wrap.attr("class", "mfp-wrap").removeAttr("style"), b.bgOverlay.attr("class", "mfp-bg"), b.container.attr("class", "mfp-container"), !b.st.showCloseBtn || b.st.closeBtnInside && b.currTemplate[b.currItem.type] !== !0 || b.currTemplate.closeBtn && b.currTemplate.closeBtn.detach(), b.st.autoFocusLast && b._lastFocusedEl && a(b._lastFocusedEl).focus(), b.currItem = null, b.content = null, b.currTemplate = null, b.prevHeight = 0, y(j) }, updateSize: function (a) { if (b.isIOS) { var c = document.documentElement.clientWidth / window.innerWidth, d = window.innerHeight * c; b.wrap.css("height", d), b.wH = d } else b.wH = a || v.height(); b.fixedContentPos || b.wrap.css("height", b.wH), y("Resize") }, updateItemHTML: function () { var c = b.items[b.index]; b.contentContainer.detach(), b.content && b.content.detach(), c.parsed || (c = b.parseEl(b.index)); var d = c.type; if (y("BeforeChange", [b.currItem ? b.currItem.type : "", d]), b.currItem = c, !b.currTemplate[d]) { var f = b.st[d] ? b.st[d].markup : !1; y("FirstMarkupParse", f), f ? b.currTemplate[d] = a(f) : b.currTemplate[d] = !0 } e && e !== c.type && b.container.removeClass("mfp-" + e + "-holder"); var g = b["get" + d.charAt(0).toUpperCase() + d.slice(1)](c, b.currTemplate[d]); b.appendContent(g, d), c.preloaded = !0, y(n, c), e = c.type, b.container.prepend(b.contentContainer), y("AfterChange") }, appendContent: function (a, c) { b.content = a, a ? b.st.showCloseBtn && b.st.closeBtnInside && b.currTemplate[c] === !0 ? b.content.find(".mfp-close").length || b.content.append(z()) : b.content = a : b.content = "", y(k), b.container.addClass("mfp-" + c + "-holder"), b.contentContainer.append(b.content) }, parseEl: function (c) { var d, e = b.items[c]; if (e.tagName ? e = { el: a(e) } : (d = e.type, e = { data: e, src: e.src }), e.el) { for (var f = b.types, g = 0; g < f.length; g++) if (e.el.hasClass("mfp-" + f[g])) { d = f[g]; break } e.src = e.el.attr("data-mfp-src"), e.src || (e.src = e.el.attr("href")) } return e.type = d || b.st.type || "inline", e.index = c, e.parsed = !0, b.items[c] = e, y("ElementParse", e), b.items[c] }, addGroup: function (a, c) { var d = function (d) { d.mfpEl = this, b._openClick(d, a, c) }; c || (c = {}); var e = "click.magnificPopup"; c.mainEl = a, c.items ? (c.isObj = !0, a.off(e).on(e, d)) : (c.isObj = !1, c.delegate ? a.off(e).on(e, c.delegate, d) : (c.items = a, a.off(e).on(e, d))) }, _openClick: function (c, d, e) { var f = void 0 !== e.midClick ? e.midClick : a.magnificPopup.defaults.midClick; if (f || !(2 === c.which || c.ctrlKey || c.metaKey || c.altKey || c.shiftKey)) { var g = void 0 !== e.disableOn ? e.disableOn : a.magnificPopup.defaults.disableOn; if (g) if (a.isFunction(g)) { if (!g.call(b)) return !0 } else if (v.width() < g) return !0; c.type && (c.preventDefault(), b.isOpen && c.stopPropagation()), e.el = a(c.mfpEl), e.delegate && (e.items = d.find(e.delegate)), b.open(e) } }, updateStatus: function (a, d) { if (b.preloader) { c !== a && b.container.removeClass("mfp-s-" + c), d || "loading" !== a || (d = b.st.tLoading); var e = { status: a, text: d }; y("UpdateStatus", e), a = e.status, d = e.text, b.preloader.html(d), b.preloader.find("a").on("click", function (a) { a.stopImmediatePropagation() }), b.container.addClass("mfp-s-" + a), c = a } }, _checkIfClose: function (c) { if (!a(c).hasClass(s)) { var d = b.st.closeOnContentClick, e = b.st.closeOnBgClick; if (d && e) return !0; if (!b.content || a(c).hasClass("mfp-close") || b.preloader && c === b.preloader[0]) return !0; if (c === b.content[0] || a.contains(b.content[0], c)) { if (d) return !0 } else if (e && a.contains(document, c)) return !0; return !1 } }, _addClassToMFP: function (a) { b.bgOverlay.addClass(a), b.wrap.addClass(a) }, _removeClassFromMFP: function (a) { this.bgOverlay.removeClass(a), b.wrap.removeClass(a) }, _hasScrollBar: function (a) { return (b.isIE7 ? d.height() : document.body.scrollHeight) > (a || v.height()) }, _setFocus: function () { (b.st.focus ? b.content.find(b.st.focus).eq(0) : b.wrap).focus() }, _onFocusIn: function (c) { return c.target === b.wrap[0] || a.contains(b.wrap[0], c.target) ? void 0 : (b._setFocus(), !1) }, _parseMarkup: function (b, c, d) { var e; d.data && (c = a.extend(d.data, c)), y(l, [b, c, d]), a.each(c, function (c, d) { if (void 0 === d || d === !1) return !0; if (e = c.split("_"), e.length > 1) { var f = b.find(p + "-" + e[0]); if (f.length > 0) { var g = e[1]; "replaceWith" === g ? f[0] !== d[0] && f.replaceWith(d) : "img" === g ? f.is("img") ? f.attr("src", d) : f.replaceWith(a("<img>").attr("src", d).attr("class", f.attr("class"))) : f.attr(e[1], d) } } else b.find(p + "-" + c).html(d) }) }, _getScrollbarSize: function () { if (void 0 === b.scrollbarSize) { var a = document.createElement("div"); a.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(a), b.scrollbarSize = a.offsetWidth - a.clientWidth, document.body.removeChild(a) } return b.scrollbarSize } }, a.magnificPopup = { instance: null, proto: t.prototype, modules: [], open: function (b, c) { return A(), b = b ? a.extend(!0, {}, b) : {}, b.isObj = !0, b.index = c || 0, this.instance.open(b) }, close: function () { return a.magnificPopup.instance && a.magnificPopup.instance.close() }, registerModule: function (b, c) { c.options && (a.magnificPopup.defaults[b] = c.options), a.extend(this.proto, c.proto), this.modules.push(b) }, defaults: { disableOn: 0, key: null, midClick: !1, mainClass: "", preloader: !0, focus: "", closeOnContentClick: !1, closeOnBgClick: !0, closeBtnInside: !0, showCloseBtn: !0, enableEscapeKey: !0, modal: !1, alignTop: !1, removalDelay: 0, prependTo: null, fixedContentPos: "auto", fixedBgPos: "auto", overflowY: "auto", closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>', tClose: "Close (Esc)", tLoading: "Loading...", autoFocusLast: !0 } }, a.fn.magnificPopup = function (c) { A(); var d = a(this); if ("string" == typeof c) if ("open" === c) { var e, f = u ? d.data("magnificPopup") : d[0].magnificPopup, g = parseInt(arguments[1], 10) || 0; f.items ? e = f.items[g] : (e = d, f.delegate && (e = e.find(f.delegate)), e = e.eq(g)), b._openClick({ mfpEl: e }, d, f) } else b.isOpen && b[c].apply(b, Array.prototype.slice.call(arguments, 1)); else c = a.extend(!0, {}, c), u ? d.data("magnificPopup", c) : d[0].magnificPopup = c, b.addGroup(d, c); return d }; var C, D, E, F = "inline", G = function () { E && (D.after(E.addClass(C)).detach(), E = null) }; a.magnificPopup.registerModule(F, { options: { hiddenClass: "hide", markup: "", tNotFound: "Content not found" }, proto: { initInline: function () { b.types.push(F), w(h + "." + F, function () { G() }) }, getInline: function (c, d) { if (G(), c.src) { var e = b.st.inline, f = a(c.src); if (f.length) { var g = f[0].parentNode; g && g.tagName && (D || (C = e.hiddenClass, D = x(C), C = "mfp-" + C), E = f.after(D).detach().removeClass(C)), b.updateStatus("ready") } else b.updateStatus("error", e.tNotFound), f = a("<div>"); return c.inlineElement = f, f } return b.updateStatus("ready"), b._parseMarkup(d, {}, c), d } } }); var H, I = "ajax", J = function () { H && a(document.body).removeClass(H) }, K = function () { J(), b.req && b.req.abort() }; a.magnificPopup.registerModule(I, { options: { settings: null, cursor: "mfp-ajax-cur", tError: '<a href="%url%">The content</a> could not be loaded.' }, proto: { initAjax: function () { b.types.push(I), H = b.st.ajax.cursor, w(h + "." + I, K), w("BeforeChange." + I, K) }, getAjax: function (c) { H && a(document.body).addClass(H), b.updateStatus("loading"); var d = a.extend({ url: c.src, success: function (d, e, f) { var g = { data: d, xhr: f }; y("ParseAjax", g), b.appendContent(a(g.data), I), c.finished = !0, J(), b._setFocus(), setTimeout(function () { b.wrap.addClass(q) }, 16), b.updateStatus("ready"), y("AjaxContentAdded") }, error: function () { J(), c.finished = c.loadError = !0, b.updateStatus("error", b.st.ajax.tError.replace("%url%", c.src)) } }, b.st.ajax.settings); return b.req = a.ajax(d), "" } } }); var L, M = function (c) { if (c.data && void 0 !== c.data.title) return c.data.title; var d = b.st.image.titleSrc; if (d) { if (a.isFunction(d)) return d.call(b, c); if (c.el) return c.el.attr(d) || "" } return "" }; a.magnificPopup.registerModule("image", { options: { markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>', cursor: "mfp-zoom-out-cur", titleSrc: "title", verticalFit: !0, tError: '<a href="%url%">The image</a> could not be loaded.' }, proto: { initImage: function () { var c = b.st.image, d = ".image"; b.types.push("image"), w(m + d, function () { "image" === b.currItem.type && c.cursor && a(document.body).addClass(c.cursor) }), w(h + d, function () { c.cursor && a(document.body).removeClass(c.cursor), v.off("resize" + p) }), w("Resize" + d, b.resizeImage), b.isLowIE && w("AfterChange", b.resizeImage) }, resizeImage: function () { var a = b.currItem; if (a && a.img && b.st.image.verticalFit) { var c = 0; b.isLowIE && (c = parseInt(a.img.css("padding-top"), 10) + parseInt(a.img.css("padding-bottom"), 10)), a.img.css("max-height", b.wH - c) } }, _onImageHasSize: function (a) { a.img && (a.hasSize = !0, L && clearInterval(L), a.isCheckingImgSize = !1, y("ImageHasSize", a), a.imgHidden && (b.content && b.content.removeClass("mfp-loading"), a.imgHidden = !1)) }, findImageSize: function (a) { var c = 0, d = a.img[0], e = function (f) { L && clearInterval(L), L = setInterval(function () { return d.naturalWidth > 0 ? void b._onImageHasSize(a) : (c > 200 && clearInterval(L), c++, void (3 === c ? e(10) : 40 === c ? e(50) : 100 === c && e(500))) }, f) }; e(1) }, getImage: function (c, d) { var e = 0, f = function () { c && (c.img[0].complete ? (c.img.off(".mfploader"), c === b.currItem && (b._onImageHasSize(c), b.updateStatus("ready")), c.hasSize = !0, c.loaded = !0, y("ImageLoadComplete")) : (e++, 200 > e ? setTimeout(f, 100) : g())) }, g = function () { c && (c.img.off(".mfploader"), c === b.currItem && (b._onImageHasSize(c), b.updateStatus("error", h.tError.replace("%url%", c.src))), c.hasSize = !0, c.loaded = !0, c.loadError = !0) }, h = b.st.image, i = d.find(".mfp-img"); if (i.length) { var j = document.createElement("img"); j.className = "mfp-img", c.el && c.el.find("img").length && (j.alt = c.el.find("img").attr("alt")), c.img = a(j).on("load.mfploader", f).on("error.mfploader", g), j.src = c.src, i.is("img") && (c.img = c.img.clone()), j = c.img[0], j.naturalWidth > 0 ? c.hasSize = !0 : j.width || (c.hasSize = !1) } return b._parseMarkup(d, { title: M(c), img_replaceWith: c.img }, c), b.resizeImage(), c.hasSize ? (L && clearInterval(L), c.loadError ? (d.addClass("mfp-loading"), b.updateStatus("error", h.tError.replace("%url%", c.src))) : (d.removeClass("mfp-loading"), b.updateStatus("ready")), d) : (b.updateStatus("loading"), c.loading = !0, c.hasSize || (c.imgHidden = !0, d.addClass("mfp-loading"), b.findImageSize(c)), d) } } }); var N, O = function () { return void 0 === N && (N = void 0 !== document.createElement("p").style.MozTransform), N }; a.magnificPopup.registerModule("zoom", { options: { enabled: !1, easing: "ease-in-out", duration: 300, opener: function (a) { return a.is("img") ? a : a.find("img") } }, proto: { initZoom: function () { var a, c = b.st.zoom, d = ".zoom"; if (c.enabled && b.supportsTransition) { var e, f, g = c.duration, j = function (a) { var b = a.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"), d = "all " + c.duration / 1e3 + "s " + c.easing, e = { position: "fixed", zIndex: 9999, left: 0, top: 0, "-webkit-backface-visibility": "hidden" }, f = "transition"; return e["-webkit-" + f] = e["-moz-" + f] = e["-o-" + f] = e[f] = d, b.css(e), b }, k = function () { b.content.css("visibility", "visible") }; w("BuildControls" + d, function () { if (b._allowZoom()) { if (clearTimeout(e), b.content.css("visibility", "hidden"), a = b._getItemToZoom(), !a) return void k(); f = j(a), f.css(b._getOffset()), b.wrap.append(f), e = setTimeout(function () { f.css(b._getOffset(!0)), e = setTimeout(function () { k(), setTimeout(function () { f.remove(), a = f = null, y("ZoomAnimationEnded") }, 16) }, g) }, 16) } }), w(i + d, function () { if (b._allowZoom()) { if (clearTimeout(e), b.st.removalDelay = g, !a) { if (a = b._getItemToZoom(), !a) return; f = j(a) } f.css(b._getOffset(!0)), b.wrap.append(f), b.content.css("visibility", "hidden"), setTimeout(function () { f.css(b._getOffset()) }, 16) } }), w(h + d, function () { b._allowZoom() && (k(), f && f.remove(), a = null) }) } }, _allowZoom: function () { return "image" === b.currItem.type }, _getItemToZoom: function () { return b.currItem.hasSize ? b.currItem.img : !1 }, _getOffset: function (c) { var d; d = c ? b.currItem.img : b.st.zoom.opener(b.currItem.el || b.currItem); var e = d.offset(), f = parseInt(d.css("padding-top"), 10), g = parseInt(d.css("padding-bottom"), 10); e.top -= a(window).scrollTop() - f; var h = { width: d.width(), height: (u ? d.innerHeight() : d[0].offsetHeight) - g - f }; return O() ? h["-moz-transform"] = h.transform = "translate(" + e.left + "px," + e.top + "px)" : (h.left = e.left, h.top = e.top), h } } }); var P = "iframe", Q = "//about:blank", R = function (a) { if (b.currTemplate[P]) { var c = b.currTemplate[P].find("iframe"); c.length && (a || (c[0].src = Q), b.isIE8 && c.css("display", a ? "block" : "none")) } }; a.magnificPopup.registerModule(P, { options: { markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>', srcAction: "iframe_src", patterns: { youtube: { index: "youtube.com", id: "v=", src: "//www.youtube.com/embed/%id%?autoplay=1" }, vimeo: { index: "vimeo.com/", id: "/", src: "//player.vimeo.com/video/%id%?autoplay=1" }, gmaps: { index: "//maps.google.", src: "%id%&output=embed" } } }, proto: { initIframe: function () { b.types.push(P), w("BeforeChange", function (a, b, c) { b !== c && (b === P ? R() : c === P && R(!0)) }), w(h + "." + P, function () { R() }) }, getIframe: function (c, d) { var e = c.src, f = b.st.iframe; a.each(f.patterns, function () { return e.indexOf(this.index) > -1 ? (this.id && (e = "string" == typeof this.id ? e.substr(e.lastIndexOf(this.id) + this.id.length, e.length) : this.id.call(this, e)), e = this.src.replace("%id%", e), !1) : void 0 }); var g = {}; return f.srcAction && (g[f.srcAction] = e), b._parseMarkup(d, g, c), b.updateStatus("ready"), d } } }); var S = function (a) { var c = b.items.length; return a > c - 1 ? a - c : 0 > a ? c + a : a }, T = function (a, b, c) { return a.replace(/%curr%/gi, b + 1).replace(/%total%/gi, c) }; a.magnificPopup.registerModule("gallery", { options: { enabled: !1, arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>', preload: [0, 2], navigateByImgClick: !0, arrows: !0, tPrev: "Previous (Left arrow key)", tNext: "Next (Right arrow key)", tCounter: "%curr% of %total%" }, proto: { initGallery: function () { var c = b.st.gallery, e = ".mfp-gallery"; return b.direction = !0, c && c.enabled ? (f += " mfp-gallery", w(m + e, function () { c.navigateByImgClick && b.wrap.on("click" + e, ".mfp-img", function () { return b.items.length > 1 ? (b.next(), !1) : void 0 }), d.on("keydown" + e, function (a) { 37 === a.keyCode ? b.prev() : 39 === a.keyCode && b.next() }) }), w("UpdateStatus" + e, function (a, c) { c.text && (c.text = T(c.text, b.currItem.index, b.items.length)) }), w(l + e, function (a, d, e, f) { var g = b.items.length; e.counter = g > 1 ? T(c.tCounter, f.index, g) : "" }), w("BuildControls" + e, function () { if (b.items.length > 1 && c.arrows && !b.arrowLeft) { var d = c.arrowMarkup, e = b.arrowLeft = a(d.replace(/%title%/gi, c.tPrev).replace(/%dir%/gi, "left")).addClass(s), f = b.arrowRight = a(d.replace(/%title%/gi, c.tNext).replace(/%dir%/gi, "right")).addClass(s); e.click(function () { b.prev() }), f.click(function () { b.next() }), b.container.append(e.add(f)) } }), w(n + e, function () { b._preloadTimeout && clearTimeout(b._preloadTimeout), b._preloadTimeout = setTimeout(function () { b.preloadNearbyImages(), b._preloadTimeout = null }, 16) }), void w(h + e, function () { d.off(e), b.wrap.off("click" + e), b.arrowRight = b.arrowLeft = null })) : !1 }, next: function () { b.direction = !0, b.index = S(b.index + 1), b.updateItemHTML() }, prev: function () { b.direction = !1, b.index = S(b.index - 1), b.updateItemHTML() }, goTo: function (a) { b.direction = a >= b.index, b.index = a, b.updateItemHTML() }, preloadNearbyImages: function () { var a, c = b.st.gallery.preload, d = Math.min(c[0], b.items.length), e = Math.min(c[1], b.items.length); for (a = 1; a <= (b.direction ? e : d) ; a++) b._preloadItem(b.index + a); for (a = 1; a <= (b.direction ? d : e) ; a++) b._preloadItem(b.index - a) }, _preloadItem: function (c) { if (c = S(c), !b.items[c].preloaded) { var d = b.items[c]; d.parsed || (d = b.parseEl(c)), y("LazyLoad", d), "image" === d.type && (d.img = a('<img class="mfp-img" />').on("load.mfploader", function () { d.hasSize = !0 }).on("error.mfploader", function () { d.hasSize = !0, d.loadError = !0, y("LazyLoadError", d) }).attr("src", d.src)), d.preloaded = !0 } } } }); var U = "retina"; a.magnificPopup.registerModule(U, { options: { replaceSrc: function (a) { return a.src.replace(/\.\w+$/, function (a) { return "@2x" + a }) }, ratio: 1 }, proto: { initRetina: function () { if (window.devicePixelRatio > 1) { var a = b.st.retina, c = a.ratio; c = isNaN(c) ? c() : c, c > 1 && (w("ImageHasSize." + U, function (a, b) { b.img.css({ "max-width": b.img[0].naturalWidth / c, width: "100%" }) }), w("ElementParse." + U, function (b, d) { d.src = a.replaceSrc(d, c) })) } } } }), A() });


    var app = angular.module('rylew', ['ngRoute', 'angular-toArrayFilter'] );

    /**
     * Configure the Routes
     */
    app.config(['$routeProvider', function ($routeProvider) {
      $routeProvider
        // Home
        .when("/", {templateUrl: "partials/home.html", controller: "PageCtrl"})
        // Pages
        .when("/about", { templateUrl: "partials/about.html", controller: "PageCtrl" })
        .when("/projects", { templateUrl: "partials/projects.html", controller: "PageCtrl" })
        .when("/places", { templateUrl: "partials/places.html", controller: "PageCtrl" })
        .when("/contact", { templateUrl: "partials/contact.html", controller: "PageCtrl" })

            //GitHub Viewer
            .when("/ghv/main", {
                templateUrl: "partials/githubBrowser/main.html",
                controller: "MainController",
                message: 'Viewing main'
            })
            .when("/ghv/user/:username", { // : denotes a url parameter
                templateUrl: "partials/githubBrowser/user.html",
                controller: "UserController",
                message: 'Viewing user'
            })
            .when("/ghv/repo/:username/:reponame", { // :  denotes a url parameter
                templateUrl: "partials/githubBrowser/repo.html",
                controller: "RepoController",
                message: 'Viewing repo'
            })


        // else 404
        .otherwise("/404", {templateUrl: "partials/404.html", controller: "PageCtrl"});
    }]);


    /**
     * Controls all other Pages
     */
    app.controller('PageCtrl', function (/* $scope, $location, $http */) {
     // console.log("Page Controller reporting for duty.");

    });


    app.controller('FooterCtrl', function ($scope) {
       // $scope.year = Date();

    });


    //bootstrap nav menu hide on click
    $(document).on('click', '.navbar-collapse.in', function (e) {
        if ($(e.target).is('a')) {
            $(this).collapse('hide');
        }
    });

    $(window).scroll(function () {
        if ($(document).scrollTop() > 50) {
            $('nav').addClass('shrink');
        } else {
            $('nav').removeClass('shrink');
        }
    });
!function (e, t) { "function" == typeof define && define.amd ? define(t) : "object" == typeof exports ? module.exports = t(require, exports, module) : e.ScrollReveal = t() }(this, function (e, t, n) { return function () { "use strict"; var e, t, n; this.ScrollReveal = function () { function i(n) { return "undefined" == typeof this || Object.getPrototypeOf(this) !== i.prototype ? new i(n) : (e = this, e.tools = new t, e.isSupported() ? (e.tools.extend(e.defaults, n || {}), o(e.defaults), e.store = { elements: {}, containers: [] }, e.sequences = {}, e.history = [], e.uid = 0, e.initialized = !1) : "undefined" != typeof console && null !== console, e) } function o(t) { var n = t.container; return n && "string" == typeof n ? t.container = window.document.querySelector(n) : (n && !e.tools.isNode(n) && (t.container = null), null == n && (t.container = window.document.documentElement), t.container) } function r() { return ++e.uid } function s(t, n) { t.config ? t.config = e.tools.extendClone(t.config, n) : t.config = e.tools.extendClone(e.defaults, n), "top" === t.config.origin || "bottom" === t.config.origin ? t.config.axis = "Y" : t.config.axis = "X", "top" !== t.config.origin && "left" !== t.config.origin || (t.config.distance = "-" + t.config.distance) } function a(e) { var t = window.getComputedStyle(e.domEl); e.styles || (e.styles = { transition: {}, transform: {}, computed: {} }, e.styles.inline = e.domEl.getAttribute("style") || "", e.styles.inline += "; visibility: visible; ", e.styles.computed.opacity = t.opacity, t.transition && "all 0s ease 0s" != t.transition ? e.styles.computed.transition = t.transition + ", " : e.styles.computed.transition = ""), e.styles.transition.instant = l(e, 0), e.styles.transition.delayed = l(e, e.config.delay), e.styles.transform.initial = " -webkit-transform:", e.styles.transform.target = " -webkit-transform:", c(e), e.styles.transform.initial += "transform:", e.styles.transform.target += "transform:", c(e) } function l(e, t) { var n = e.config; return "-webkit-transition: " + e.styles.computed.transition + "-webkit-transform " + n.duration / 1e3 + "s " + n.easing + " " + t / 1e3 + "s, opacity " + n.duration / 1e3 + "s " + n.easing + " " + t / 1e3 + "s; transition: " + e.styles.computed.transition + "transform " + n.duration / 1e3 + "s " + n.easing + " " + t / 1e3 + "s, opacity " + n.duration / 1e3 + "s " + n.easing + " " + t / 1e3 + "s; " } function c(e) { var t = e.config, n = e.styles.transform; parseInt(t.distance) && (n.initial += " translate" + t.axis + "(" + t.distance + ")", n.target += " translate" + t.axis + "(0)"), t.scale && (n.initial += " scale(" + t.scale + ")", n.target += " scale(1)"), t.rotate.x && (n.initial += " rotateX(" + t.rotate.x + "deg)", n.target += " rotateX(0)"), t.rotate.y && (n.initial += " rotateY(" + t.rotate.y + "deg)", n.target += " rotateY(0)"), t.rotate.z && (n.initial += " rotateZ(" + t.rotate.z + "deg)", n.target += " rotateZ(0)"), n.initial += "; opacity: " + t.opacity + ";", n.target += "; opacity: " + e.styles.computed.opacity + ";" } function f(t) { var n = t.config.container; n && -1 == e.store.containers.indexOf(n) && e.store.containers.push(t.config.container), e.store.elements[t.id] = t } function u(t, n, i) { var o = { selector: t, config: n, interval: i }; e.history.push(o) } function d() { if (e.isSupported()) { p(); for (var t = 0; t < e.store.containers.length; t++) e.store.containers[t].addEventListener("scroll", y), e.store.containers[t].addEventListener("resize", y); e.initialized || (window.addEventListener("scroll", y), window.addEventListener("resize", y), e.initialized = !0) } return e } function y() { n(p) } function m() { var t, n, i, o; e.tools.forOwn(e.sequences, function (r) { o = e.sequences[r], t = !1; for (var s = 0; s < o.elemIds.length; s++) i = o.elemIds[s], n = e.store.elements[i], O(n) && !t && (t = !0); o.active = t }) } function p() { var t, n; m(), e.tools.forOwn(e.store.elements, function (i) { n = e.store.elements[i], t = b(n), v(n) ? (t ? n.domEl.setAttribute("style", n.styles.inline + n.styles.transform.target + n.styles.transition.delayed) : n.domEl.setAttribute("style", n.styles.inline + n.styles.transform.target + n.styles.transition.instant), w("reveal", n, t), n.revealing = !0, n.seen = !0, n.sequence && g(n, t)) : h(n) && (n.domEl.setAttribute("style", n.styles.inline + n.styles.transform.initial + n.styles.transition.instant), w("reset", n), n.revealing = !1) }) } function g(t, n) { var i = 0, o = 0, r = e.sequences[t.sequence.id]; r.blocked = !0, n && "onload" == t.config.useDelay && (o = t.config.delay), t.sequence.timer && (i = Math.abs(t.sequence.timer.started - new Date), window.clearTimeout(t.sequence.timer)), t.sequence.timer = { started: new Date }, t.sequence.timer.clock = window.setTimeout(function () { r.blocked = !1, t.sequence.timer = null, y() }, Math.abs(r.interval) + o - i) } function w(e, t, n) { var i = 0, o = 0, r = "after"; switch (e) { case "reveal": o = t.config.duration, n && (o += t.config.delay), r += "Reveal"; break; case "reset": o = t.config.duration, r += "Reset" } t.timer && (i = Math.abs(t.timer.started - new Date), window.clearTimeout(t.timer.clock)), t.timer = { started: new Date }, t.timer.clock = window.setTimeout(function () { t.config[r](t.domEl), t.timer = null }, o - i) } function v(t) { if (t.sequence) { var n = e.sequences[t.sequence.id]; return n.active && !n.blocked && !t.revealing && !t.disabled } return O(t) && !t.revealing && !t.disabled } function b(t) { var n = t.config.useDelay; return "always" === n || "onload" === n && !e.initialized || "once" === n && !t.seen } function h(t) { if (t.sequence) { var n = e.sequences[t.sequence.id]; return !n.active && t.config.reset && t.revealing && !t.disabled } return !O(t) && t.config.reset && t.revealing && !t.disabled } function x(e) { return { width: e.clientWidth, height: e.clientHeight } } function q(e) { if (e && e !== window.document.documentElement) { var t = E(e); return { x: e.scrollLeft + t.left, y: e.scrollTop + t.top } } return { x: window.pageXOffset, y: window.pageYOffset } } function E(e) { var t = 0, n = 0, i = e.offsetHeight, o = e.offsetWidth; do isNaN(e.offsetTop) || (t += e.offsetTop), isNaN(e.offsetLeft) || (n += e.offsetLeft); while (e = e.offsetParent); return { top: t, left: n, height: i, width: o } } function O(e) { function t() { var t = c + a * s, n = f + l * s, i = u - a * s, y = d - l * s, m = r.y + e.config.viewOffset.top, p = r.x + e.config.viewOffset.left, g = r.y - e.config.viewOffset.bottom + o.height, w = r.x - e.config.viewOffset.right + o.width; return g > t && i > m && n > p && w > y } function n() { return "fixed" === window.getComputedStyle(e.domEl).position } var i = E(e.domEl), o = x(e.config.container), r = q(e.config.container), s = e.config.viewFactor, a = i.height, l = i.width, c = i.top, f = i.left, u = c + a, d = f + l; return t() || n() } return i.prototype.defaults = { origin: "bottom", distance: "20px", duration: 500, delay: 0, rotate: { x: 0, y: 0, z: 0 }, opacity: 0, scale: .9, easing: "cubic-bezier(0.6, 0.2, 0.1, 1)", container: null, mobile: !0, reset: !1, useDelay: "always", viewFactor: .2, viewOffset: { top: 0, right: 0, bottom: 0, left: 0 }, afterReveal: function (e) { }, afterReset: function (e) { } }, i.prototype.isSupported = function () { var e = document.documentElement.style; return "WebkitTransition" in e && "WebkitTransform" in e || "transition" in e && "transform" in e }, i.prototype.reveal = function (t, n, i, l) { var c, y, m, p, g, w; if (c = n && n.container ? o(n) : e.defaults.container, y = e.tools.isNode(t) ? [t] : Array.prototype.slice.call(c.querySelectorAll(t)), !y.length) return e; n && "number" == typeof n && (i = n, n = {}), i && "number" == typeof i && (w = r(), g = e.sequences[w] = { id: w, interval: i, elemIds: [], active: !1 }); for (var v = 0; v < y.length; v++) p = y[v].getAttribute("data-sr-id"), p ? m = e.store.elements[p] : (m = { id: r(), domEl: y[v], seen: !1, revealing: !1 }, m.domEl.setAttribute("data-sr-id", m.id)), g && (m.sequence = { id: g.id, index: g.elemIds.length }, g.elemIds.push(m.id)), s(m, n || {}), a(m), f(m), e.tools.isMobile() && !m.config.mobile || !e.isSupported() ? (m.domEl.setAttribute("style", m.styles.inline), m.disabled = !0) : m.revealing || m.domEl.setAttribute("style", m.styles.inline + m.styles.transform.initial); return !l && e.isSupported() && (u(t, n), e.initTimeout && window.clearTimeout(e.initTimeout), e.initTimeout = window.setTimeout(d, 0)), e }, i.prototype.sync = function () { if (e.history.length && e.isSupported()) { for (var t = 0; t < e.history.length; t++) { var n = e.history[t]; e.reveal(n.selector, n.config, n.interval, !0) } d() } return e }, i }(), t = function () { function e() { } return e.prototype.isObject = function (e) { return null !== e && "object" == typeof e && e.constructor == Object }, e.prototype.isNode = function (e) { return "object" == typeof Node ? e instanceof Node : e && "object" == typeof e && "number" == typeof e.nodeType && "string" == typeof e.nodeName }, e.prototype.forOwn = function (e, t) { if (!this.isObject(e)) throw new TypeError('Expected "object", but received "' + typeof e + '".'); for (var n in e) e.hasOwnProperty(n) && t(n) }, e.prototype.extend = function (e, t) { return this.forOwn(t, function (n) { this.isObject(t[n]) ? (e[n] && this.isObject(e[n]) || (e[n] = {}), this.extend(e[n], t[n])) : e[n] = t[n] }.bind(this)), e }, e.prototype.extendClone = function (e, t) { return this.extend(this.extend({}, e), t) }, e.prototype.isMobile = function () { return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) }, e }(), n = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame }.call(this), this.ScrollReveal });

// angular.module('rylew', ['angular-toArrayFilter'])

angular.module('angular-toArrayFilter', [])

.filter('toArray', function () {
    return function (obj, addKey) {
        if (!angular.isObject(obj)) return obj;
        if (addKey === false) {
            return Object.keys(obj).map(function (key) {
                return obj[key];
            });
        } else {
            return Object.keys(obj).map(function (key) {
                var value = obj[key];
                return angular.isObject(value) ?
                  Object.defineProperty(value, '$key', { enumerable: false, value: key }) :
          { $key: key, $value: value };
            });
        }
    };
});




function render(dataset) {

    // Dimensions for the chart: height, width, and space b/t the bars
    var margins = { top: 30, right: 50, bottom: 30, left: 50 }
    var height = 400 - margins.left - margins.right,
        width = 700 - margins.top - margins.bottom,
        barPadding = 5

    // Create a scale for the y-axis based on data
    // >> Domain - min and max values in the dataset
    // >> Range - physical range of the scale (reversed)
    var yScale = d3.scale.linear()
      .domain([0, d3.max(dataset, function (d) {
          return d.snow;
      })])
      .range([height, 0]);

    // Implements the scale as an actual axis
    // >> Orient - places the axis on the left of the graph
    // >> Ticks - number of points on the axis, automated
    var yAxis = d3.svg.axis()
      .scale(yScale)
      .orient('left')
      .ticks(5);

    // Creates a scale for the x-axis based on city names
    var xScale = d3.scale.ordinal()
      .domain(dataset.map(function (d) {
          return d.city;
      }))
      .rangeRoundBands([0, width], .1);

    // Creates an axis based off the xScale properties
    var xAxis = d3.svg.axis()
      .scale(xScale)
      .orient('bottom');

    // Creates the initial space for the chart
    // >> Select - grabs the empty <div> above this script
    // >> Append - places an <svg> wrapper inside the div
    // >> Attr - applies our height & width values from above
    var chart = d3.select('.barChart')
      .append('svg').attr('class', 'svgBarChart')
      .attr('width', width + margins.left + margins.right)
      .attr('height', height + margins.top + margins.bottom)
      .append('g')
      .attr('transform', 'translate(' + margins.left + ',' + margins.top + ')');


    var tooltip = d3.select('body').append('div')
    .style('position', 'absolute')
    .style('padding', '0 10px')
    .style('background', 'white')
    .style('opacity', 0)


    // For each value in our dataset, places and styles a bar on the chart

    // Step 1: selectAll.data.enter.append
    // >> Loops through the dataset and appends a rectangle for each value
    chart.selectAll('rect')
      .data(dataset)
      .enter()
      .append('rect')
        .attr('class', 'barChartMouseover()')
      // Step 2: X & Y
      // >> X - Places the bars in horizontal order, based on number of
      //        points & the width of the chart
      // >> Y - Places vertically based on scale
      .attr('x', function (d, i) {
          return xScale(d.city);
      })
      .attr('y', function (d) {
          return yScale(d.snow);
      })
      .on('mouseover', function (d) {

          tooltip.transition()
              .style('opacity', .7)

          tooltip.html(d.snow.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + ' lines')
              .style('left', (d3.event.pageX - 35) + 'px')
              .style('top', (d3.event.pageY - 30) + 'px')

      })
      .on('mouseout', function (d) {

          tooltip.transition()
              .style('opacity', 0)
      })



      // Step 3: Height & Width
      // >> Width - Based on barpadding and number of points in dataset
      // >> Height - Scale and height of the chart area
      .attr('width', (width / dataset.length) - barPadding)
      .attr('height', function (d) {
          return height - yScale(d.snow);
      })
      .attr('fill', 'steelblue')

      // Step 4: Info for hover interaction
      .attr('class', function (d) {
          return d.city;
      })
      .attr('id', function (d) {
          return d.snow;
      });

    // Renders the yAxis once the chart is finished
    // >> Moves it to the left 10 pixels so it doesn't overlap
    chart.append('g')
      .attr('class', 'axis')
      .attr('transform', 'translate(-10, 0)')
      .call(yAxis);

    // Appends the yAxis
    chart.append('g')
      .attr('class', 'axis')
      .attr('transform', 'translate(0,' + (height + 10) + ')')
      .call(xAxis)
     .selectAll("text")
            .style("text-anchor", "end")
            .attr("dx", "-.8em")
            .attr("dy", ".15em")
            .attr("transform", function (d) {
                return "rotate(-65)"
            }).attr("class", "langTotalText");

    // Adds yAxis title
    chart.append('text')
      .text('Lines of Code')
      .attr('transform', 'translate(-70, -20)');
}




var svg = d3.select("#chart")
    .append("svg").attr("ng-show", "chartMessage==null")
    .append("g")

svg.append("g")
    .attr("class", "slices");
svg.append("g")
    .attr("class", "labelName");
svg.append("g")
    .attr("class", "labelValue");
svg.append("g")
    .attr("class", "lines");

var width = 960 / 2,
    height = 450 / 2,
    radius = (Math.min(width, height) / 2) + 20;

var pie = d3.layout.pie()
    .sort(null)
    .value(function (d) {
        return d.value;
    });

var arc = d3.svg.arc()
    .outerRadius(radius * 0.8)
    .innerRadius(radius * 0.4);

var outerArc = d3.svg.arc()
    .innerRadius(radius * 0.9)
    .outerRadius(radius * 0.9);

var legendRectSize = (radius * 0.05);
var legendSpacing = radius * 0.02;


var div = d3.select("body").append("div").attr("class", "toolTip");



//var width = 960 / 2,
//    height = 450 / 2,
//    radius = (Math.min(width, height) / 2) + 20;

svg.attr("transform", "translate(" + width / 2 + "," + ((height / 2) + 55) + ")");

var colorRange = d3.scale.category20();
var color = d3.scale.ordinal()
    .range(colorRange.range());


function change(data) {

    /* ------- PIE SLICES -------*/
    var slice = svg.select(".slices").selectAll("path.slice")
        .data(pie(data), function (d) { return d.data.label });

    slice.enter()
        .insert("path")
        .style("fill", function (d) { return color(d.data.label); })
        .attr("class", "slice");

    slice
        .transition().duration(1000)
        .attrTween("d", function (d) {
            this._current = this._current || d;
            var interpolate = d3.interpolate(this._current, d);
            this._current = interpolate(0);
            return function (t) {
                return arc(interpolate(t));
            };
        })
    slice
        .on("mousemove", function (d) {
            div.style("left", d3.event.pageX + 10 + "px");
            div.style("top", d3.event.pageY - 25 + "px");
            div.style("display", "inline-block");
            div.html((d.data.label) + "<br>" + (d.data.value) + "%");
        });
    slice
        .on("mouseout", function (d) {
            div.style("display", "none");
        });

    slice.exit()
        .remove();



    /* ------- SLICE TO TEXT POLYLINES -------*/

    var polyline = svg.select(".lines").selectAll("polyline")
        .data(pie(data), function (d) { return d.data.label });

    polyline.enter()
        .append("polyline");

    polyline.transition().duration(1000)
        .attrTween("points", function (d) {
            this._current = this._current || d;
            var interpolate = d3.interpolate(this._current, d);
            this._current = interpolate(0);
            return function (t) {
                var d2 = interpolate(t);
                var pos = outerArc.centroid(d2);
                pos[0] = radius * 0.95 * (midAngle(d2) < Math.PI ? 1 : -1);
                return [arc.centroid(d2), outerArc.centroid(d2), pos];
            };
        });

    polyline.exit()
        .remove();



    /* ------- TEXT LABELS -------*/

    var text = svg.select(".labelName").selectAll("text")
        .data(pie(data), function (d) { return d.data.label })
	  .attr("dy", ".35em")
	  .attr('text-anchor', 'middle')
	  .text(function (d) { return (d.data.cars > 10000) ? d.data.make : null; });

        
    text.enter()
        .append("text")
        .attr("dy", ".35em")
        .text(function (d) {
            return (d.data.label + ": " + d.value + "%");

        })
         .selectAll("text")
            .style("text-anchor", "end")
            .attr("dx", "-.8em")
            .attr("dy", ".15em")
            .attr("transform", function (d) {
                return "rotate(-65)"
            })     ;




    function midAngle(d) {
        return d.startAngle + (d.endAngle - d.startAngle) / 2;
    }

    text
        .transition().duration(1000)
        .attrTween("transform", function (d) {
            this._current = this._current || d;
            var interpolate = d3.interpolate(this._current, d);
            this._current = interpolate(0);
            return function (t) {
                var d2 = interpolate(t);
                var pos = outerArc.centroid(d2);
                pos[0] = radius * (midAngle(d2) < Math.PI ? 1 : -1);
                return "translate(" + pos + ")";
            };
        })
        .styleTween("text-anchor", function (d) {
            this._current = this._current || d;
            var interpolate = d3.interpolate(this._current, d);
            this._current = interpolate(0);
            return function (t) {
                var d2 = interpolate(t);
                return midAngle(d2) < Math.PI ? "start" : "end";
            };
        })
        .text(function (d) {
            return (d.data.label + ": " + d.value + "%");
        });


    text.exit()
        .remove();


    alpha = .8;
    spacing = 11;

    function relax() {
        again = false;
        text.each(function (d, i) {
            a = this; //reference to text label
            da = d3.select(a);
            y1 = da.attr("y");
            text.each(function (d, j) {
                b = this;
                // a & b are the same element and don't collide.
                if (a == b) return;
                db = d3.select(b);
                // a & b are on opposite sides of the chart and
                // don't collide
                if (da.attr("text-anchor") != db.attr("text-anchor")) return;
                // Now let's calculate the distance between
                // these elements. 
                y2 = db.attr("y");
                deltaY = y1 - y2;

                // If spacing is greater than our specified spacing,
                // they don't collide.
                if (Math.abs(deltaY) > spacing) return;

                // If the labels collide, we'll push each 
                // of the two labels up and down a little bit.
                again = true;
                sign = deltaY > 0 ? 1 : -1;
                adjust = sign * alpha;
                da.attr("y", +y1 + adjust);
                db.attr("y", +y2 - adjust);
            });

        });
        // Adjust our line leaders here
        // so that they follow the labels. 
        if (again) {
            //debugger;
            labelElements = text[0];
            //  debugger;
            polyline.attr("y2", function (d, i) {
                //  debugger;
                labelForLine = d3.select(labelElements[i]);
                return labelForLine.attr("y");
            });




            setTimeout(relax, 20)
        }
    }

    relax();



};



var svg = dimple.newSvg('#chart', "100%", "85%");

function dimpleStacked(data) {
   // debugger;

    //d3.tsv("/content/example_data.tsv", function (data) {
    var myChart = new dimple.chart(svg, data);
    //myChart.setBounds(60, 30, 900, 400);

    var x = myChart.addCategoryAxis("x", "User");
    //x.addOrderRule(['Jan', 'Feb', 'Mar', 'Apr']);
    var y = myChart.addMeasureAxis("y", "Tasks");

    // In order to deal with cases where order differs by column 
    // you need to include it in your series definition
    var s = myChart.addSeries(["Tasks", "MyValue" ], dimple.plot.bar);

    s.getTooltipText = function (e) {
      //  debugger;
        var AorD = e.aggField[1] == "Additions" ? "Additions" : "Deletions";

        return [
            e.cx + " had " + e.aggField[0] + " " + AorD
        ];
    };
    d3.svg.axis()
    .tickFormat(d3.format("d"));

    // Your function approach would also work, but as it is the default 
    // handling for a numeric column you can just specify order like this
    s.addOrderRule("MyValue");

    y.showPercent = false;
    y.hidden = false;
   // y.overrideMax = 500;
    myChart.assignColor('Additions', '#c1f4cb');
    myChart.assignColor('Deletions', '#f2bba2');

    myChart.addLegend(60, 10, 510, 20, "right");
    myChart.draw();

    // If you don't want the order to show in the tooltip
    // the easiest way is to remove it here once the chart is drawn
    s.categoryFields = ["User"];




}
(function () {

    //Revealing module pattern
    //Get user and repos for user
    var github = function ($http) {
        var clientSecret = '?client_id=9b254584c151259f146a&client_secret=552ead4d53b54ebd99adf72edd017626c5f496cf';

        //Return github user profile
        var getUser = function (username) {
            return $http.get("https://api.github.com/users/" + username + clientSecret)
                  .then(function (response) {
                      return response.data;
                  });
        }

        //return repos for user
        var getRepos = function (user) {

            return $http.get(user.repos_url + clientSecret)
                        .then(function (response) {
                            return response.data;
                        });
        };


        var getRepoDetails = function (username, reponame) {

            var repo;
            var repoUrl = "https://api.github.com/repos/" + username + "/" + reponame;

            //Chained promises
            //each return is the input to the next success function
            return $http.get(repoUrl + clientSecret)
                        .then(function (response) {
                            repo = response.data;
                            return $http.get(repoUrl + "/contributors" + clientSecret);
                        })
                        .then(function (response) {
                            repo.contributors = response.data;
                            return repo;
                        });
        };


        //return repos for user
        var getLanguages = function (langURL) {

            return $http.get(langURL + clientSecret)
                        .then(function (response) {
                            return response.data;
                        });
        };

        return {
            getUser: getUser,
            getRepos: getRepos,
            getRepoDetails: getRepoDetails,
            getLanguages: getLanguages
        };

    }



    var module = angular.module("rylew"); //no second parameter because we're not creating a module, just trying to create a module
    module.factory("github", github); //register the service with angular
    // (name of service , name of function that returns function api object ) 





})();
(function () {

    app.controller('MainController', function ($scope, $interval, $location, $routeParams) {

        //not needed
        var onError = function (reason) {
            $scope.error = "Could not fetch the data from GitHub";

        };

        $scope.search = function (username) {
            $location.path("/ghv/user/" + username);
        };
    });


})();
(function () {

    /*Repo Controller*/
    app.controller('RepoController', function ($scope, github, $routeParams,  $http, $timeout) {

        var onContributors = function (data) {
            $scope.repo = data;
          
            $scope.contributorTotal = data.contributors.length;
            $scope.loading = null;

            var clientSecret = '?client_id=9b254584c151259f146a&client_secret=552ead4d53b54ebd99adf72edd017626c5f496cf';
            var langURL = "https://api.github.com/repos/" + username + "/" + reponame + '/stats/contributors' + clientSecret;
            
            //Statistics come back with 202 status code while github computes
            // Poll until status is 200
             var doPoll = function () {
                    $http.get(langURL).then(function (response) {
                        if (response.status == 202) {
                            $scope.chartMessage = null;
                            $timeout(doPoll , 1000);
                        }
                        else if (response.status == 200) {
                            onStats(response);
                        }
                    });
                }
                doPoll();



        }; //end onContributors

        var onStats = function (data) {
            $scope.chartMessage = "resolved"
            $scope.commitStats = [];
            var responseData = data.data;
            var obj = {};
            for (var i = 0; i < responseData.length; i++) {
                obj = {};
                obj.a = 0, obj.d = 0, obj.author="", obj.total = 0;
                obj.author = responseData[i].author.login;
                obj.total = responseData[i].total;

                var weeks = responseData[i].weeks;

                for (var j = 0; j < responseData[i].weeks.length; j++) {
                    if (j == 0) {
                        $scope.firstDate = timeConverter( weeks[j].w ) ;
                    }

                    obj.a = obj.a + weeks[j].a;               
                    obj.d = obj.d + weeks[j].d;                    
                }
                $scope.commitStats.push(obj);

            }

            var chartData = [];
            

            $scope.statUserCount = 0;
            for (var i = $scope.commitStats.length-1; (i > ($scope.commitStats.length -6)) ; i--) {
                
     
                if ( ($scope.commitStats[i] != undefined) && i>=0) {
                    $scope.statUserCount++;
                    chartData.push(
                        {
                            Tasks: $scope.commitStats[i].a.toString(),
                            User: $scope.commitStats[i].author,
                            MyValue: "Additions"
                        }
                    );

                    chartData.push(
                     {
                         Tasks: $scope.commitStats[i].d.toString(),
                         User: $scope.commitStats[i].author.toString(),
                         MyValue: "Deletions"
                     }
                     );   

                }            
            }

            dimpleStacked(chartData);


        }; //end onStats

        var onError = function (reason) {
            $scope.error = reason;
        };

        //username and repo passed as URL route parameters from user.html
        var reponame = $routeParams.reponame;
        var username = $routeParams.username;

        github.getRepoDetails(username, reponame).then(onContributors, onError);

        $scope.loading = "loading";


        /* Convert unix time from github api to date */
        function timeConverter(UNIX_timestamp) {
            var a = new Date(UNIX_timestamp * 1000);
            var months = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
            var year = a.getFullYear();
            var month = months[a.getMonth()];
            var date = a.getDate();
            var hour = a.getHours();
            var min = a.getMinutes();
            var sec = a.getSeconds();
            //var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec;
            var time = getOrdinal(date) + ' ' + month + ' ' + year;
            return time;

            function getOrdinal(n) {
                var s = ["th", "st", "nd", "rd"],
                v = n % 100;
                return n + (s[(v - 20) % 10] || s[v] || s[0]);
            }
        }



    });
    /* End Repo Controller*/


})();


/* User Controller */

(function() {
     
    


app.controller('UserController', function ($scope, github, $routeParams, $http, $q) {
    $scope.repos = {};
    var a = [];
    var obj = {};

    function lookup(name) {
        for (var i = 0, len = a.length; i < len; i++) {
            if (a[i].city === name)
                return [true, i];
        }
        return [false];
    }


    //1.) Successful return of Github user
    var onUserComplete = function (data) {
        $scope.user = data;
        github.getRepos($scope.user).then(onRepos, onError);
    };

    // 2.) get all the repos
    var onRepos = function (data) {
        var clientSecret = '?client_id=9b254584c151259f146a&client_secret=552ead4d53b54ebd99adf72edd017626c5f496cf';

        $scope.repos = data;

        var promises = [];

        for (var i = 0; i < data.length; i++) {
            var langURL = data[i].languages_url;
            // var promise = $http.get(langURL + clientSecret);
            var promise = github.getLanguages(langURL);
            promises.push(promise);
        }
        $q.all(promises).then(onLanguages, onError);

    };

    // 3.) get and format programming language data
    var onLanguages = function (data) {
        $scope.langTotalCount = data.length;
        for (var i = 0; i < data.length; i++) {
            var o = data[i];
            $scope.repos[i].languages = o;
            Object.keys(o).forEach(function (key, index) {
                var lines = o[key];
                var b = lookup(key);
                if (!b[0]) {
                    a.push({ 'city': key, snow: lines });
                }
                else {

                    a[b[1]].snow = a[b[1]].snow + lines;
                }

            });


        }
        $scope.langTotals = a;

        a.sort(function (a, b) {
            return b.snow - a.snow;
        });

        render(a);
        $('rect').mouseenter(function () {
          //  debugger;
            $('#city').html(this.className.animVal);
            $('#inches').html($(this).attr('id').toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + ' lines');
        });

        $('.langTotalText').mouseenter(function () {
            var t = this.innerHTML;
            //debugger;
            var lines = $('rect.' + t)[0].id;
            $('#city').html(t);
            $('#inches').html(lines.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + ' lines');
           
        });

        //$('.langTotalText').mouseout(function () {
            
        //    var t = this.innerHTML;
        //    $('rect.' + t)[0].removeClass('textHovered');
        //    debugger;
        //});


        $scope.loading = null;
    }

    var onError = function (reason) {

        $scope.error = "Could not find this user or error returning data from GitHub.";
        $scope.chartMessage = "Error returning Github data.";

    };

    $scope.changeRepo = function (event) {

        var dataset = [];
        var total = 0;
        var x = event.currentTarget;
        var myVal;
        //  $scope.mycheck = true;
        angular.element(x).find('.languageSPAN').each(function () {
            myVal = parseInt(angular.element(this).attr("data-value"));
            total = total + myVal;
        });

        $scope.thisRepo = angular.element(x).find('a').text();


        // angular.element(x).find('input').attr('checked') = checked;
        angular.element(x).addClass("selected").siblings().removeClass("selected");
        angular.element(x).find('.languageSPAN').each(function () {
            var key = angular.element(this).attr("data-key");
            var percent = ((parseInt(angular.element(this).attr("data-value")) / total) * 100).toFixed(2);
            var o = { label: key, value: percent };
            dataset.push(o);
        });
        total = 0;


        if (dataset.length > 0) {
            $scope.chartMessage = null;
            change(dataset);
        }
        else {
            // debugger;
            $scope.chartMessage = "No languages associated with this repository.";
        }

    };


    $scope.loading = "loading";
    $scope.repoSortOrder = "-stargazers_count";
    github.getUser($routeParams.username).then(onUserComplete, onError);
    $scope.chartMessage = "Please select a repository row.";

    //selected new repository - update donut chart with new data



});



})();

 (function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 5)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

    // Initialize and Configure Scroll Reveal Animation
    window.sr = ScrollReveal();
    sr.reveal('.sr-icons', {
        duration: 600,
        scale: 0.3,
        distance: '0px'
    }, 200);
    sr.reveal('.sr-button', {
        duration: 1000,
        delay: 200
    });
    sr.reveal('.sr-contact', {
        duration: 600,
        scale: 0.3,
        distance: '0px'
    }, 300);

    // Initialize and Configure Magnific Popup Lightbox Plugin
    $('.popup-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
        }
    });

})(jQuery); // End of use strict

/*!
 * Start Bootstrap - Creative v3.3.7+1 (http://startbootstrap.com/template-overviews/creative)
 * Copyright 2013-2016 Start Bootstrap
 * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap/blob/gh-pages/LICENSE)
 */
!function(a){"use strict";a("a.page-scroll").bind("click",function(e){var l=a(this);a("html, body").stop().animate({scrollTop:a(l.attr("href")).offset().top-50},1250,"easeInOutExpo"),e.preventDefault()}),a("body").scrollspy({target:".navbar-fixed-top",offset:51}),a(".navbar-collapse ul li a").click(function(){a(".navbar-toggle:visible").click()}),a("#mainNav").affix({offset:{top:100}}),window.sr=ScrollReveal(),sr.reveal(".sr-icons",{duration:600,scale:.3,distance:"0px"},200),sr.reveal(".sr-button",{duration:1e3,delay:200}),sr.reveal(".sr-contact",{duration:600,scale:.3,distance:"0px"},300),a(".popup-gallery").magnificPopup({delegate:"a",type:"image",tLoading:"Loading image #%curr%...",mainClass:"mfp-img-mobile",gallery:{enabled:!0,navigateByImgClick:!0,preload:[0,1]},image:{tError:'<a href="%url%">The image #%curr%</a> could not be loaded.'}})}(jQuery);
/*! Magnific Popup - v1.1.0 - 2016-02-20
* http://dimsemenov.com/plugins/magnific-popup/
* Copyright (c) 2016 Dmitry Semenov; */
!function (a) { "function" == typeof define && define.amd ? define(["jquery"], a) : a("object" == typeof exports ? require("jquery") : window.jQuery || window.Zepto) }(function (a) { var b, c, d, e, f, g, h = "Close", i = "BeforeClose", j = "AfterClose", k = "BeforeAppend", l = "MarkupParse", m = "Open", n = "Change", o = "mfp", p = "." + o, q = "mfp-ready", r = "mfp-removing", s = "mfp-prevent-close", t = function () { }, u = !!window.jQuery, v = a(window), w = function (a, c) { b.ev.on(o + a + p, c) }, x = function (b, c, d, e) { var f = document.createElement("div"); return f.className = "mfp-" + b, d && (f.innerHTML = d), e ? c && c.appendChild(f) : (f = a(f), c && f.appendTo(c)), f }, y = function (c, d) { b.ev.triggerHandler(o + c, d), b.st.callbacks && (c = c.charAt(0).toLowerCase() + c.slice(1), b.st.callbacks[c] && b.st.callbacks[c].apply(b, a.isArray(d) ? d : [d])) }, z = function (c) { return c === g && b.currTemplate.closeBtn || (b.currTemplate.closeBtn = a(b.st.closeMarkup.replace("%title%", b.st.tClose)), g = c), b.currTemplate.closeBtn }, A = function () { a.magnificPopup.instance || (b = new t, b.init(), a.magnificPopup.instance = b) }, B = function () { var a = document.createElement("p").style, b = ["ms", "O", "Moz", "Webkit"]; if (void 0 !== a.transition) return !0; for (; b.length;) if (b.pop() + "Transition" in a) return !0; return !1 }; t.prototype = { constructor: t, init: function () { var c = navigator.appVersion; b.isLowIE = b.isIE8 = document.all && !document.addEventListener, b.isAndroid = /android/gi.test(c), b.isIOS = /iphone|ipad|ipod/gi.test(c), b.supportsTransition = B(), b.probablyMobile = b.isAndroid || b.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), d = a(document), b.popupsCache = {} }, open: function (c) { var e; if (c.isObj === !1) { b.items = c.items.toArray(), b.index = 0; var g, h = c.items; for (e = 0; e < h.length; e++) if (g = h[e], g.parsed && (g = g.el[0]), g === c.el[0]) { b.index = e; break } } else b.items = a.isArray(c.items) ? c.items : [c.items], b.index = c.index || 0; if (b.isOpen) return void b.updateItemHTML(); b.types = [], f = "", c.mainEl && c.mainEl.length ? b.ev = c.mainEl.eq(0) : b.ev = d, c.key ? (b.popupsCache[c.key] || (b.popupsCache[c.key] = {}), b.currTemplate = b.popupsCache[c.key]) : b.currTemplate = {}, b.st = a.extend(!0, {}, a.magnificPopup.defaults, c), b.fixedContentPos = "auto" === b.st.fixedContentPos ? !b.probablyMobile : b.st.fixedContentPos, b.st.modal && (b.st.closeOnContentClick = !1, b.st.closeOnBgClick = !1, b.st.showCloseBtn = !1, b.st.enableEscapeKey = !1), b.bgOverlay || (b.bgOverlay = x("bg").on("click" + p, function () { b.close() }), b.wrap = x("wrap").attr("tabindex", -1).on("click" + p, function (a) { b._checkIfClose(a.target) && b.close() }), b.container = x("container", b.wrap)), b.contentContainer = x("content"), b.st.preloader && (b.preloader = x("preloader", b.container, b.st.tLoading)); var i = a.magnificPopup.modules; for (e = 0; e < i.length; e++) { var j = i[e]; j = j.charAt(0).toUpperCase() + j.slice(1), b["init" + j].call(b) } y("BeforeOpen"), b.st.showCloseBtn && (b.st.closeBtnInside ? (w(l, function (a, b, c, d) { c.close_replaceWith = z(d.type) }), f += " mfp-close-btn-in") : b.wrap.append(z())), b.st.alignTop && (f += " mfp-align-top"), b.fixedContentPos ? b.wrap.css({ overflow: b.st.overflowY, overflowX: "hidden", overflowY: b.st.overflowY }) : b.wrap.css({ top: v.scrollTop(), position: "absolute" }), (b.st.fixedBgPos === !1 || "auto" === b.st.fixedBgPos && !b.fixedContentPos) && b.bgOverlay.css({ height: d.height(), position: "absolute" }), b.st.enableEscapeKey && d.on("keyup" + p, function (a) { 27 === a.keyCode && b.close() }), v.on("resize" + p, function () { b.updateSize() }), b.st.closeOnContentClick || (f += " mfp-auto-cursor"), f && b.wrap.addClass(f); var k = b.wH = v.height(), n = {}; if (b.fixedContentPos && b._hasScrollBar(k)) { var o = b._getScrollbarSize(); o && (n.marginRight = o) } b.fixedContentPos && (b.isIE7 ? a("body, html").css("overflow", "hidden") : n.overflow = "hidden"); var r = b.st.mainClass; return b.isIE7 && (r += " mfp-ie7"), r && b._addClassToMFP(r), b.updateItemHTML(), y("BuildControls"), a("html").css(n), b.bgOverlay.add(b.wrap).prependTo(b.st.prependTo || a(document.body)), b._lastFocusedEl = document.activeElement, setTimeout(function () { b.content ? (b._addClassToMFP(q), b._setFocus()) : b.bgOverlay.addClass(q), d.on("focusin" + p, b._onFocusIn) }, 16), b.isOpen = !0, b.updateSize(k), y(m), c }, close: function () { b.isOpen && (y(i), b.isOpen = !1, b.st.removalDelay && !b.isLowIE && b.supportsTransition ? (b._addClassToMFP(r), setTimeout(function () { b._close() }, b.st.removalDelay)) : b._close()) }, _close: function () { y(h); var c = r + " " + q + " "; if (b.bgOverlay.detach(), b.wrap.detach(), b.container.empty(), b.st.mainClass && (c += b.st.mainClass + " "), b._removeClassFromMFP(c), b.fixedContentPos) { var e = { marginRight: "" }; b.isIE7 ? a("body, html").css("overflow", "") : e.overflow = "", a("html").css(e) } d.off("keyup" + p + " focusin" + p), b.ev.off(p), b.wrap.attr("class", "mfp-wrap").removeAttr("style"), b.bgOverlay.attr("class", "mfp-bg"), b.container.attr("class", "mfp-container"), !b.st.showCloseBtn || b.st.closeBtnInside && b.currTemplate[b.currItem.type] !== !0 || b.currTemplate.closeBtn && b.currTemplate.closeBtn.detach(), b.st.autoFocusLast && b._lastFocusedEl && a(b._lastFocusedEl).focus(), b.currItem = null, b.content = null, b.currTemplate = null, b.prevHeight = 0, y(j) }, updateSize: function (a) { if (b.isIOS) { var c = document.documentElement.clientWidth / window.innerWidth, d = window.innerHeight * c; b.wrap.css("height", d), b.wH = d } else b.wH = a || v.height(); b.fixedContentPos || b.wrap.css("height", b.wH), y("Resize") }, updateItemHTML: function () { var c = b.items[b.index]; b.contentContainer.detach(), b.content && b.content.detach(), c.parsed || (c = b.parseEl(b.index)); var d = c.type; if (y("BeforeChange", [b.currItem ? b.currItem.type : "", d]), b.currItem = c, !b.currTemplate[d]) { var f = b.st[d] ? b.st[d].markup : !1; y("FirstMarkupParse", f), f ? b.currTemplate[d] = a(f) : b.currTemplate[d] = !0 } e && e !== c.type && b.container.removeClass("mfp-" + e + "-holder"); var g = b["get" + d.charAt(0).toUpperCase() + d.slice(1)](c, b.currTemplate[d]); b.appendContent(g, d), c.preloaded = !0, y(n, c), e = c.type, b.container.prepend(b.contentContainer), y("AfterChange") }, appendContent: function (a, c) { b.content = a, a ? b.st.showCloseBtn && b.st.closeBtnInside && b.currTemplate[c] === !0 ? b.content.find(".mfp-close").length || b.content.append(z()) : b.content = a : b.content = "", y(k), b.container.addClass("mfp-" + c + "-holder"), b.contentContainer.append(b.content) }, parseEl: function (c) { var d, e = b.items[c]; if (e.tagName ? e = { el: a(e) } : (d = e.type, e = { data: e, src: e.src }), e.el) { for (var f = b.types, g = 0; g < f.length; g++) if (e.el.hasClass("mfp-" + f[g])) { d = f[g]; break } e.src = e.el.attr("data-mfp-src"), e.src || (e.src = e.el.attr("href")) } return e.type = d || b.st.type || "inline", e.index = c, e.parsed = !0, b.items[c] = e, y("ElementParse", e), b.items[c] }, addGroup: function (a, c) { var d = function (d) { d.mfpEl = this, b._openClick(d, a, c) }; c || (c = {}); var e = "click.magnificPopup"; c.mainEl = a, c.items ? (c.isObj = !0, a.off(e).on(e, d)) : (c.isObj = !1, c.delegate ? a.off(e).on(e, c.delegate, d) : (c.items = a, a.off(e).on(e, d))) }, _openClick: function (c, d, e) { var f = void 0 !== e.midClick ? e.midClick : a.magnificPopup.defaults.midClick; if (f || !(2 === c.which || c.ctrlKey || c.metaKey || c.altKey || c.shiftKey)) { var g = void 0 !== e.disableOn ? e.disableOn : a.magnificPopup.defaults.disableOn; if (g) if (a.isFunction(g)) { if (!g.call(b)) return !0 } else if (v.width() < g) return !0; c.type && (c.preventDefault(), b.isOpen && c.stopPropagation()), e.el = a(c.mfpEl), e.delegate && (e.items = d.find(e.delegate)), b.open(e) } }, updateStatus: function (a, d) { if (b.preloader) { c !== a && b.container.removeClass("mfp-s-" + c), d || "loading" !== a || (d = b.st.tLoading); var e = { status: a, text: d }; y("UpdateStatus", e), a = e.status, d = e.text, b.preloader.html(d), b.preloader.find("a").on("click", function (a) { a.stopImmediatePropagation() }), b.container.addClass("mfp-s-" + a), c = a } }, _checkIfClose: function (c) { if (!a(c).hasClass(s)) { var d = b.st.closeOnContentClick, e = b.st.closeOnBgClick; if (d && e) return !0; if (!b.content || a(c).hasClass("mfp-close") || b.preloader && c === b.preloader[0]) return !0; if (c === b.content[0] || a.contains(b.content[0], c)) { if (d) return !0 } else if (e && a.contains(document, c)) return !0; return !1 } }, _addClassToMFP: function (a) { b.bgOverlay.addClass(a), b.wrap.addClass(a) }, _removeClassFromMFP: function (a) { this.bgOverlay.removeClass(a), b.wrap.removeClass(a) }, _hasScrollBar: function (a) { return (b.isIE7 ? d.height() : document.body.scrollHeight) > (a || v.height()) }, _setFocus: function () { (b.st.focus ? b.content.find(b.st.focus).eq(0) : b.wrap).focus() }, _onFocusIn: function (c) { return c.target === b.wrap[0] || a.contains(b.wrap[0], c.target) ? void 0 : (b._setFocus(), !1) }, _parseMarkup: function (b, c, d) { var e; d.data && (c = a.extend(d.data, c)), y(l, [b, c, d]), a.each(c, function (c, d) { if (void 0 === d || d === !1) return !0; if (e = c.split("_"), e.length > 1) { var f = b.find(p + "-" + e[0]); if (f.length > 0) { var g = e[1]; "replaceWith" === g ? f[0] !== d[0] && f.replaceWith(d) : "img" === g ? f.is("img") ? f.attr("src", d) : f.replaceWith(a("<img>").attr("src", d).attr("class", f.attr("class"))) : f.attr(e[1], d) } } else b.find(p + "-" + c).html(d) }) }, _getScrollbarSize: function () { if (void 0 === b.scrollbarSize) { var a = document.createElement("div"); a.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(a), b.scrollbarSize = a.offsetWidth - a.clientWidth, document.body.removeChild(a) } return b.scrollbarSize } }, a.magnificPopup = { instance: null, proto: t.prototype, modules: [], open: function (b, c) { return A(), b = b ? a.extend(!0, {}, b) : {}, b.isObj = !0, b.index = c || 0, this.instance.open(b) }, close: function () { return a.magnificPopup.instance && a.magnificPopup.instance.close() }, registerModule: function (b, c) { c.options && (a.magnificPopup.defaults[b] = c.options), a.extend(this.proto, c.proto), this.modules.push(b) }, defaults: { disableOn: 0, key: null, midClick: !1, mainClass: "", preloader: !0, focus: "", closeOnContentClick: !1, closeOnBgClick: !0, closeBtnInside: !0, showCloseBtn: !0, enableEscapeKey: !0, modal: !1, alignTop: !1, removalDelay: 0, prependTo: null, fixedContentPos: "auto", fixedBgPos: "auto", overflowY: "auto", closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>', tClose: "Close (Esc)", tLoading: "Loading...", autoFocusLast: !0 } }, a.fn.magnificPopup = function (c) { A(); var d = a(this); if ("string" == typeof c) if ("open" === c) { var e, f = u ? d.data("magnificPopup") : d[0].magnificPopup, g = parseInt(arguments[1], 10) || 0; f.items ? e = f.items[g] : (e = d, f.delegate && (e = e.find(f.delegate)), e = e.eq(g)), b._openClick({ mfpEl: e }, d, f) } else b.isOpen && b[c].apply(b, Array.prototype.slice.call(arguments, 1)); else c = a.extend(!0, {}, c), u ? d.data("magnificPopup", c) : d[0].magnificPopup = c, b.addGroup(d, c); return d }; var C, D, E, F = "inline", G = function () { E && (D.after(E.addClass(C)).detach(), E = null) }; a.magnificPopup.registerModule(F, { options: { hiddenClass: "hide", markup: "", tNotFound: "Content not found" }, proto: { initInline: function () { b.types.push(F), w(h + "." + F, function () { G() }) }, getInline: function (c, d) { if (G(), c.src) { var e = b.st.inline, f = a(c.src); if (f.length) { var g = f[0].parentNode; g && g.tagName && (D || (C = e.hiddenClass, D = x(C), C = "mfp-" + C), E = f.after(D).detach().removeClass(C)), b.updateStatus("ready") } else b.updateStatus("error", e.tNotFound), f = a("<div>"); return c.inlineElement = f, f } return b.updateStatus("ready"), b._parseMarkup(d, {}, c), d } } }); var H, I = "ajax", J = function () { H && a(document.body).removeClass(H) }, K = function () { J(), b.req && b.req.abort() }; a.magnificPopup.registerModule(I, { options: { settings: null, cursor: "mfp-ajax-cur", tError: '<a href="%url%">The content</a> could not be loaded.' }, proto: { initAjax: function () { b.types.push(I), H = b.st.ajax.cursor, w(h + "." + I, K), w("BeforeChange." + I, K) }, getAjax: function (c) { H && a(document.body).addClass(H), b.updateStatus("loading"); var d = a.extend({ url: c.src, success: function (d, e, f) { var g = { data: d, xhr: f }; y("ParseAjax", g), b.appendContent(a(g.data), I), c.finished = !0, J(), b._setFocus(), setTimeout(function () { b.wrap.addClass(q) }, 16), b.updateStatus("ready"), y("AjaxContentAdded") }, error: function () { J(), c.finished = c.loadError = !0, b.updateStatus("error", b.st.ajax.tError.replace("%url%", c.src)) } }, b.st.ajax.settings); return b.req = a.ajax(d), "" } } }); var L, M = function (c) { if (c.data && void 0 !== c.data.title) return c.data.title; var d = b.st.image.titleSrc; if (d) { if (a.isFunction(d)) return d.call(b, c); if (c.el) return c.el.attr(d) || "" } return "" }; a.magnificPopup.registerModule("image", { options: { markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>', cursor: "mfp-zoom-out-cur", titleSrc: "title", verticalFit: !0, tError: '<a href="%url%">The image</a> could not be loaded.' }, proto: { initImage: function () { var c = b.st.image, d = ".image"; b.types.push("image"), w(m + d, function () { "image" === b.currItem.type && c.cursor && a(document.body).addClass(c.cursor) }), w(h + d, function () { c.cursor && a(document.body).removeClass(c.cursor), v.off("resize" + p) }), w("Resize" + d, b.resizeImage), b.isLowIE && w("AfterChange", b.resizeImage) }, resizeImage: function () { var a = b.currItem; if (a && a.img && b.st.image.verticalFit) { var c = 0; b.isLowIE && (c = parseInt(a.img.css("padding-top"), 10) + parseInt(a.img.css("padding-bottom"), 10)), a.img.css("max-height", b.wH - c) } }, _onImageHasSize: function (a) { a.img && (a.hasSize = !0, L && clearInterval(L), a.isCheckingImgSize = !1, y("ImageHasSize", a), a.imgHidden && (b.content && b.content.removeClass("mfp-loading"), a.imgHidden = !1)) }, findImageSize: function (a) { var c = 0, d = a.img[0], e = function (f) { L && clearInterval(L), L = setInterval(function () { return d.naturalWidth > 0 ? void b._onImageHasSize(a) : (c > 200 && clearInterval(L), c++, void (3 === c ? e(10) : 40 === c ? e(50) : 100 === c && e(500))) }, f) }; e(1) }, getImage: function (c, d) { var e = 0, f = function () { c && (c.img[0].complete ? (c.img.off(".mfploader"), c === b.currItem && (b._onImageHasSize(c), b.updateStatus("ready")), c.hasSize = !0, c.loaded = !0, y("ImageLoadComplete")) : (e++, 200 > e ? setTimeout(f, 100) : g())) }, g = function () { c && (c.img.off(".mfploader"), c === b.currItem && (b._onImageHasSize(c), b.updateStatus("error", h.tError.replace("%url%", c.src))), c.hasSize = !0, c.loaded = !0, c.loadError = !0) }, h = b.st.image, i = d.find(".mfp-img"); if (i.length) { var j = document.createElement("img"); j.className = "mfp-img", c.el && c.el.find("img").length && (j.alt = c.el.find("img").attr("alt")), c.img = a(j).on("load.mfploader", f).on("error.mfploader", g), j.src = c.src, i.is("img") && (c.img = c.img.clone()), j = c.img[0], j.naturalWidth > 0 ? c.hasSize = !0 : j.width || (c.hasSize = !1) } return b._parseMarkup(d, { title: M(c), img_replaceWith: c.img }, c), b.resizeImage(), c.hasSize ? (L && clearInterval(L), c.loadError ? (d.addClass("mfp-loading"), b.updateStatus("error", h.tError.replace("%url%", c.src))) : (d.removeClass("mfp-loading"), b.updateStatus("ready")), d) : (b.updateStatus("loading"), c.loading = !0, c.hasSize || (c.imgHidden = !0, d.addClass("mfp-loading"), b.findImageSize(c)), d) } } }); var N, O = function () { return void 0 === N && (N = void 0 !== document.createElement("p").style.MozTransform), N }; a.magnificPopup.registerModule("zoom", { options: { enabled: !1, easing: "ease-in-out", duration: 300, opener: function (a) { return a.is("img") ? a : a.find("img") } }, proto: { initZoom: function () { var a, c = b.st.zoom, d = ".zoom"; if (c.enabled && b.supportsTransition) { var e, f, g = c.duration, j = function (a) { var b = a.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"), d = "all " + c.duration / 1e3 + "s " + c.easing, e = { position: "fixed", zIndex: 9999, left: 0, top: 0, "-webkit-backface-visibility": "hidden" }, f = "transition"; return e["-webkit-" + f] = e["-moz-" + f] = e["-o-" + f] = e[f] = d, b.css(e), b }, k = function () { b.content.css("visibility", "visible") }; w("BuildControls" + d, function () { if (b._allowZoom()) { if (clearTimeout(e), b.content.css("visibility", "hidden"), a = b._getItemToZoom(), !a) return void k(); f = j(a), f.css(b._getOffset()), b.wrap.append(f), e = setTimeout(function () { f.css(b._getOffset(!0)), e = setTimeout(function () { k(), setTimeout(function () { f.remove(), a = f = null, y("ZoomAnimationEnded") }, 16) }, g) }, 16) } }), w(i + d, function () { if (b._allowZoom()) { if (clearTimeout(e), b.st.removalDelay = g, !a) { if (a = b._getItemToZoom(), !a) return; f = j(a) } f.css(b._getOffset(!0)), b.wrap.append(f), b.content.css("visibility", "hidden"), setTimeout(function () { f.css(b._getOffset()) }, 16) } }), w(h + d, function () { b._allowZoom() && (k(), f && f.remove(), a = null) }) } }, _allowZoom: function () { return "image" === b.currItem.type }, _getItemToZoom: function () { return b.currItem.hasSize ? b.currItem.img : !1 }, _getOffset: function (c) { var d; d = c ? b.currItem.img : b.st.zoom.opener(b.currItem.el || b.currItem); var e = d.offset(), f = parseInt(d.css("padding-top"), 10), g = parseInt(d.css("padding-bottom"), 10); e.top -= a(window).scrollTop() - f; var h = { width: d.width(), height: (u ? d.innerHeight() : d[0].offsetHeight) - g - f }; return O() ? h["-moz-transform"] = h.transform = "translate(" + e.left + "px," + e.top + "px)" : (h.left = e.left, h.top = e.top), h } } }); var P = "iframe", Q = "//about:blank", R = function (a) { if (b.currTemplate[P]) { var c = b.currTemplate[P].find("iframe"); c.length && (a || (c[0].src = Q), b.isIE8 && c.css("display", a ? "block" : "none")) } }; a.magnificPopup.registerModule(P, { options: { markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>', srcAction: "iframe_src", patterns: { youtube: { index: "youtube.com", id: "v=", src: "//www.youtube.com/embed/%id%?autoplay=1" }, vimeo: { index: "vimeo.com/", id: "/", src: "//player.vimeo.com/video/%id%?autoplay=1" }, gmaps: { index: "//maps.google.", src: "%id%&output=embed" } } }, proto: { initIframe: function () { b.types.push(P), w("BeforeChange", function (a, b, c) { b !== c && (b === P ? R() : c === P && R(!0)) }), w(h + "." + P, function () { R() }) }, getIframe: function (c, d) { var e = c.src, f = b.st.iframe; a.each(f.patterns, function () { return e.indexOf(this.index) > -1 ? (this.id && (e = "string" == typeof this.id ? e.substr(e.lastIndexOf(this.id) + this.id.length, e.length) : this.id.call(this, e)), e = this.src.replace("%id%", e), !1) : void 0 }); var g = {}; return f.srcAction && (g[f.srcAction] = e), b._parseMarkup(d, g, c), b.updateStatus("ready"), d } } }); var S = function (a) { var c = b.items.length; return a > c - 1 ? a - c : 0 > a ? c + a : a }, T = function (a, b, c) { return a.replace(/%curr%/gi, b + 1).replace(/%total%/gi, c) }; a.magnificPopup.registerModule("gallery", { options: { enabled: !1, arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>', preload: [0, 2], navigateByImgClick: !0, arrows: !0, tPrev: "Previous (Left arrow key)", tNext: "Next (Right arrow key)", tCounter: "%curr% of %total%" }, proto: { initGallery: function () { var c = b.st.gallery, e = ".mfp-gallery"; return b.direction = !0, c && c.enabled ? (f += " mfp-gallery", w(m + e, function () { c.navigateByImgClick && b.wrap.on("click" + e, ".mfp-img", function () { return b.items.length > 1 ? (b.next(), !1) : void 0 }), d.on("keydown" + e, function (a) { 37 === a.keyCode ? b.prev() : 39 === a.keyCode && b.next() }) }), w("UpdateStatus" + e, function (a, c) { c.text && (c.text = T(c.text, b.currItem.index, b.items.length)) }), w(l + e, function (a, d, e, f) { var g = b.items.length; e.counter = g > 1 ? T(c.tCounter, f.index, g) : "" }), w("BuildControls" + e, function () { if (b.items.length > 1 && c.arrows && !b.arrowLeft) { var d = c.arrowMarkup, e = b.arrowLeft = a(d.replace(/%title%/gi, c.tPrev).replace(/%dir%/gi, "left")).addClass(s), f = b.arrowRight = a(d.replace(/%title%/gi, c.tNext).replace(/%dir%/gi, "right")).addClass(s); e.click(function () { b.prev() }), f.click(function () { b.next() }), b.container.append(e.add(f)) } }), w(n + e, function () { b._preloadTimeout && clearTimeout(b._preloadTimeout), b._preloadTimeout = setTimeout(function () { b.preloadNearbyImages(), b._preloadTimeout = null }, 16) }), void w(h + e, function () { d.off(e), b.wrap.off("click" + e), b.arrowRight = b.arrowLeft = null })) : !1 }, next: function () { b.direction = !0, b.index = S(b.index + 1), b.updateItemHTML() }, prev: function () { b.direction = !1, b.index = S(b.index - 1), b.updateItemHTML() }, goTo: function (a) { b.direction = a >= b.index, b.index = a, b.updateItemHTML() }, preloadNearbyImages: function () { var a, c = b.st.gallery.preload, d = Math.min(c[0], b.items.length), e = Math.min(c[1], b.items.length); for (a = 1; a <= (b.direction ? e : d) ; a++) b._preloadItem(b.index + a); for (a = 1; a <= (b.direction ? d : e) ; a++) b._preloadItem(b.index - a) }, _preloadItem: function (c) { if (c = S(c), !b.items[c].preloaded) { var d = b.items[c]; d.parsed || (d = b.parseEl(c)), y("LazyLoad", d), "image" === d.type && (d.img = a('<img class="mfp-img" />').on("load.mfploader", function () { d.hasSize = !0 }).on("error.mfploader", function () { d.hasSize = !0, d.loadError = !0, y("LazyLoadError", d) }).attr("src", d.src)), d.preloaded = !0 } } } }); var U = "retina"; a.magnificPopup.registerModule(U, { options: { replaceSrc: function (a) { return a.src.replace(/\.\w+$/, function (a) { return "@2x" + a }) }, ratio: 1 }, proto: { initRetina: function () { if (window.devicePixelRatio > 1) { var a = b.st.retina, c = a.ratio; c = isNaN(c) ? c() : c, c > 1 && (w("ImageHasSize." + U, function (a, b) { b.img.css({ "max-width": b.img[0].naturalWidth / c, width: "100%" }) }), w("ElementParse." + U, function (b, d) { d.src = a.replaceSrc(d, c) })) } } } }), A() });


    var app = angular.module('rylew', ['ngRoute', 'angular-toArrayFilter'] );

    /**
     * Configure the Routes
     */
    app.config(['$routeProvider', function ($routeProvider) {
      $routeProvider
        // Home
        .when("/", {templateUrl: "partials/home.html", controller: "PageCtrl"})
        // Pages
        .when("/about", { templateUrl: "partials/about.html", controller: "PageCtrl" })
        .when("/projects", { templateUrl: "partials/projects.html", controller: "PageCtrl" })
        .when("/places", { templateUrl: "partials/places.html", controller: "PageCtrl" })
        .when("/contact", { templateUrl: "partials/contact.html", controller: "PageCtrl" })

            //GitHub Viewer
            .when("/ghv/main", {
                templateUrl: "partials/githubBrowser/main.html",
                controller: "MainController",
                message: 'Viewing main'
            })
            .when("/ghv/user/:username", { // : denotes a url parameter
                templateUrl: "partials/githubBrowser/user.html",
                controller: "UserController",
                message: 'Viewing user'
            })
            .when("/ghv/repo/:username/:reponame", { // :  denotes a url parameter
                templateUrl: "partials/githubBrowser/repo.html",
                controller: "RepoController",
                message: 'Viewing repo'
            })


        // else 404
        .otherwise("/404", {templateUrl: "partials/404.html", controller: "PageCtrl"});
    }]);


    /**
     * Controls all other Pages
     */
    app.controller('PageCtrl', function (/* $scope, $location, $http */) {
     // console.log("Page Controller reporting for duty.");

    });


    app.controller('FooterCtrl', function ($scope) {
       // $scope.year = Date();

    });


    //bootstrap nav menu hide on click
    $(document).on('click', '.navbar-collapse.in', function (e) {
        if ($(e.target).is('a')) {
            $(this).collapse('hide');
        }
    });

    $(window).scroll(function () {
        if ($(document).scrollTop() > 50) {
            $('nav').addClass('shrink');
        } else {
            $('nav').removeClass('shrink');
        }
    });
!function (e, t) { "function" == typeof define && define.amd ? define(t) : "object" == typeof exports ? module.exports = t(require, exports, module) : e.ScrollReveal = t() }(this, function (e, t, n) { return function () { "use strict"; var e, t, n; this.ScrollReveal = function () { function i(n) { return "undefined" == typeof this || Object.getPrototypeOf(this) !== i.prototype ? new i(n) : (e = this, e.tools = new t, e.isSupported() ? (e.tools.extend(e.defaults, n || {}), o(e.defaults), e.store = { elements: {}, containers: [] }, e.sequences = {}, e.history = [], e.uid = 0, e.initialized = !1) : "undefined" != typeof console && null !== console, e) } function o(t) { var n = t.container; return n && "string" == typeof n ? t.container = window.document.querySelector(n) : (n && !e.tools.isNode(n) && (t.container = null), null == n && (t.container = window.document.documentElement), t.container) } function r() { return ++e.uid } function s(t, n) { t.config ? t.config = e.tools.extendClone(t.config, n) : t.config = e.tools.extendClone(e.defaults, n), "top" === t.config.origin || "bottom" === t.config.origin ? t.config.axis = "Y" : t.config.axis = "X", "top" !== t.config.origin && "left" !== t.config.origin || (t.config.distance = "-" + t.config.distance) } function a(e) { var t = window.getComputedStyle(e.domEl); e.styles || (e.styles = { transition: {}, transform: {}, computed: {} }, e.styles.inline = e.domEl.getAttribute("style") || "", e.styles.inline += "; visibility: visible; ", e.styles.computed.opacity = t.opacity, t.transition && "all 0s ease 0s" != t.transition ? e.styles.computed.transition = t.transition + ", " : e.styles.computed.transition = ""), e.styles.transition.instant = l(e, 0), e.styles.transition.delayed = l(e, e.config.delay), e.styles.transform.initial = " -webkit-transform:", e.styles.transform.target = " -webkit-transform:", c(e), e.styles.transform.initial += "transform:", e.styles.transform.target += "transform:", c(e) } function l(e, t) { var n = e.config; return "-webkit-transition: " + e.styles.computed.transition + "-webkit-transform " + n.duration / 1e3 + "s " + n.easing + " " + t / 1e3 + "s, opacity " + n.duration / 1e3 + "s " + n.easing + " " + t / 1e3 + "s; transition: " + e.styles.computed.transition + "transform " + n.duration / 1e3 + "s " + n.easing + " " + t / 1e3 + "s, opacity " + n.duration / 1e3 + "s " + n.easing + " " + t / 1e3 + "s; " } function c(e) { var t = e.config, n = e.styles.transform; parseInt(t.distance) && (n.initial += " translate" + t.axis + "(" + t.distance + ")", n.target += " translate" + t.axis + "(0)"), t.scale && (n.initial += " scale(" + t.scale + ")", n.target += " scale(1)"), t.rotate.x && (n.initial += " rotateX(" + t.rotate.x + "deg)", n.target += " rotateX(0)"), t.rotate.y && (n.initial += " rotateY(" + t.rotate.y + "deg)", n.target += " rotateY(0)"), t.rotate.z && (n.initial += " rotateZ(" + t.rotate.z + "deg)", n.target += " rotateZ(0)"), n.initial += "; opacity: " + t.opacity + ";", n.target += "; opacity: " + e.styles.computed.opacity + ";" } function f(t) { var n = t.config.container; n && -1 == e.store.containers.indexOf(n) && e.store.containers.push(t.config.container), e.store.elements[t.id] = t } function u(t, n, i) { var o = { selector: t, config: n, interval: i }; e.history.push(o) } function d() { if (e.isSupported()) { p(); for (var t = 0; t < e.store.containers.length; t++) e.store.containers[t].addEventListener("scroll", y), e.store.containers[t].addEventListener("resize", y); e.initialized || (window.addEventListener("scroll", y), window.addEventListener("resize", y), e.initialized = !0) } return e } function y() { n(p) } function m() { var t, n, i, o; e.tools.forOwn(e.sequences, function (r) { o = e.sequences[r], t = !1; for (var s = 0; s < o.elemIds.length; s++) i = o.elemIds[s], n = e.store.elements[i], O(n) && !t && (t = !0); o.active = t }) } function p() { var t, n; m(), e.tools.forOwn(e.store.elements, function (i) { n = e.store.elements[i], t = b(n), v(n) ? (t ? n.domEl.setAttribute("style", n.styles.inline + n.styles.transform.target + n.styles.transition.delayed) : n.domEl.setAttribute("style", n.styles.inline + n.styles.transform.target + n.styles.transition.instant), w("reveal", n, t), n.revealing = !0, n.seen = !0, n.sequence && g(n, t)) : h(n) && (n.domEl.setAttribute("style", n.styles.inline + n.styles.transform.initial + n.styles.transition.instant), w("reset", n), n.revealing = !1) }) } function g(t, n) { var i = 0, o = 0, r = e.sequences[t.sequence.id]; r.blocked = !0, n && "onload" == t.config.useDelay && (o = t.config.delay), t.sequence.timer && (i = Math.abs(t.sequence.timer.started - new Date), window.clearTimeout(t.sequence.timer)), t.sequence.timer = { started: new Date }, t.sequence.timer.clock = window.setTimeout(function () { r.blocked = !1, t.sequence.timer = null, y() }, Math.abs(r.interval) + o - i) } function w(e, t, n) { var i = 0, o = 0, r = "after"; switch (e) { case "reveal": o = t.config.duration, n && (o += t.config.delay), r += "Reveal"; break; case "reset": o = t.config.duration, r += "Reset" } t.timer && (i = Math.abs(t.timer.started - new Date), window.clearTimeout(t.timer.clock)), t.timer = { started: new Date }, t.timer.clock = window.setTimeout(function () { t.config[r](t.domEl), t.timer = null }, o - i) } function v(t) { if (t.sequence) { var n = e.sequences[t.sequence.id]; return n.active && !n.blocked && !t.revealing && !t.disabled } return O(t) && !t.revealing && !t.disabled } function b(t) { var n = t.config.useDelay; return "always" === n || "onload" === n && !e.initialized || "once" === n && !t.seen } function h(t) { if (t.sequence) { var n = e.sequences[t.sequence.id]; return !n.active && t.config.reset && t.revealing && !t.disabled } return !O(t) && t.config.reset && t.revealing && !t.disabled } function x(e) { return { width: e.clientWidth, height: e.clientHeight } } function q(e) { if (e && e !== window.document.documentElement) { var t = E(e); return { x: e.scrollLeft + t.left, y: e.scrollTop + t.top } } return { x: window.pageXOffset, y: window.pageYOffset } } function E(e) { var t = 0, n = 0, i = e.offsetHeight, o = e.offsetWidth; do isNaN(e.offsetTop) || (t += e.offsetTop), isNaN(e.offsetLeft) || (n += e.offsetLeft); while (e = e.offsetParent); return { top: t, left: n, height: i, width: o } } function O(e) { function t() { var t = c + a * s, n = f + l * s, i = u - a * s, y = d - l * s, m = r.y + e.config.viewOffset.top, p = r.x + e.config.viewOffset.left, g = r.y - e.config.viewOffset.bottom + o.height, w = r.x - e.config.viewOffset.right + o.width; return g > t && i > m && n > p && w > y } function n() { return "fixed" === window.getComputedStyle(e.domEl).position } var i = E(e.domEl), o = x(e.config.container), r = q(e.config.container), s = e.config.viewFactor, a = i.height, l = i.width, c = i.top, f = i.left, u = c + a, d = f + l; return t() || n() } return i.prototype.defaults = { origin: "bottom", distance: "20px", duration: 500, delay: 0, rotate: { x: 0, y: 0, z: 0 }, opacity: 0, scale: .9, easing: "cubic-bezier(0.6, 0.2, 0.1, 1)", container: null, mobile: !0, reset: !1, useDelay: "always", viewFactor: .2, viewOffset: { top: 0, right: 0, bottom: 0, left: 0 }, afterReveal: function (e) { }, afterReset: function (e) { } }, i.prototype.isSupported = function () { var e = document.documentElement.style; return "WebkitTransition" in e && "WebkitTransform" in e || "transition" in e && "transform" in e }, i.prototype.reveal = function (t, n, i, l) { var c, y, m, p, g, w; if (c = n && n.container ? o(n) : e.defaults.container, y = e.tools.isNode(t) ? [t] : Array.prototype.slice.call(c.querySelectorAll(t)), !y.length) return e; n && "number" == typeof n && (i = n, n = {}), i && "number" == typeof i && (w = r(), g = e.sequences[w] = { id: w, interval: i, elemIds: [], active: !1 }); for (var v = 0; v < y.length; v++) p = y[v].getAttribute("data-sr-id"), p ? m = e.store.elements[p] : (m = { id: r(), domEl: y[v], seen: !1, revealing: !1 }, m.domEl.setAttribute("data-sr-id", m.id)), g && (m.sequence = { id: g.id, index: g.elemIds.length }, g.elemIds.push(m.id)), s(m, n || {}), a(m), f(m), e.tools.isMobile() && !m.config.mobile || !e.isSupported() ? (m.domEl.setAttribute("style", m.styles.inline), m.disabled = !0) : m.revealing || m.domEl.setAttribute("style", m.styles.inline + m.styles.transform.initial); return !l && e.isSupported() && (u(t, n), e.initTimeout && window.clearTimeout(e.initTimeout), e.initTimeout = window.setTimeout(d, 0)), e }, i.prototype.sync = function () { if (e.history.length && e.isSupported()) { for (var t = 0; t < e.history.length; t++) { var n = e.history[t]; e.reveal(n.selector, n.config, n.interval, !0) } d() } return e }, i }(), t = function () { function e() { } return e.prototype.isObject = function (e) { return null !== e && "object" == typeof e && e.constructor == Object }, e.prototype.isNode = function (e) { return "object" == typeof Node ? e instanceof Node : e && "object" == typeof e && "number" == typeof e.nodeType && "string" == typeof e.nodeName }, e.prototype.forOwn = function (e, t) { if (!this.isObject(e)) throw new TypeError('Expected "object", but received "' + typeof e + '".'); for (var n in e) e.hasOwnProperty(n) && t(n) }, e.prototype.extend = function (e, t) { return this.forOwn(t, function (n) { this.isObject(t[n]) ? (e[n] && this.isObject(e[n]) || (e[n] = {}), this.extend(e[n], t[n])) : e[n] = t[n] }.bind(this)), e }, e.prototype.extendClone = function (e, t) { return this.extend(this.extend({}, e), t) }, e.prototype.isMobile = function () { return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) }, e }(), n = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame }.call(this), this.ScrollReveal });

// angular.module('rylew', ['angular-toArrayFilter'])

angular.module('angular-toArrayFilter', [])

.filter('toArray', function () {
    return function (obj, addKey) {
        if (!angular.isObject(obj)) return obj;
        if (addKey === false) {
            return Object.keys(obj).map(function (key) {
                return obj[key];
            });
        } else {
            return Object.keys(obj).map(function (key) {
                var value = obj[key];
                return angular.isObject(value) ?
                  Object.defineProperty(value, '$key', { enumerable: false, value: key }) :
          { $key: key, $value: value };
            });
        }
    };
});




function render(dataset) {

    // Dimensions for the chart: height, width, and space b/t the bars
    var margins = { top: 30, right: 50, bottom: 30, left: 50 }
    var height = 400 - margins.left - margins.right,
        width = 700 - margins.top - margins.bottom,
        barPadding = 5

    // Create a scale for the y-axis based on data
    // >> Domain - min and max values in the dataset
    // >> Range - physical range of the scale (reversed)
    var yScale = d3.scale.linear()
      .domain([0, d3.max(dataset, function (d) {
          return d.snow;
      })])
      .range([height, 0]);

    // Implements the scale as an actual axis
    // >> Orient - places the axis on the left of the graph
    // >> Ticks - number of points on the axis, automated
    var yAxis = d3.svg.axis()
      .scale(yScale)
      .orient('left')
      .ticks(5);

    // Creates a scale for the x-axis based on city names
    var xScale = d3.scale.ordinal()
      .domain(dataset.map(function (d) {
          return d.city;
      }))
      .rangeRoundBands([0, width], .1);

    // Creates an axis based off the xScale properties
    var xAxis = d3.svg.axis()
      .scale(xScale)
      .orient('bottom');

    // Creates the initial space for the chart
    // >> Select - grabs the empty <div> above this script
    // >> Append - places an <svg> wrapper inside the div
    // >> Attr - applies our height & width values from above
    var chart = d3.select('.barChart')
      .append('svg').attr('class', 'svgBarChart')
      .attr('width', width + margins.left + margins.right)
      .attr('height', height + margins.top + margins.bottom)
      .append('g')
      .attr('transform', 'translate(' + margins.left + ',' + margins.top + ')');


    var tooltip = d3.select('body').append('div')
    .style('position', 'absolute')
    .style('padding', '0 10px')
    .style('background', 'white')
    .style('opacity', 0)


    // For each value in our dataset, places and styles a bar on the chart

    // Step 1: selectAll.data.enter.append
    // >> Loops through the dataset and appends a rectangle for each value
    chart.selectAll('rect')
      .data(dataset)
      .enter()
      .append('rect')
        .attr('class', 'barChartMouseover()')
      // Step 2: X & Y
      // >> X - Places the bars in horizontal order, based on number of
      //        points & the width of the chart
      // >> Y - Places vertically based on scale
      .attr('x', function (d, i) {
          return xScale(d.city);
      })
      .attr('y', function (d) {
          return yScale(d.snow);
      })
      .on('mouseover', function (d) {

          tooltip.transition()
              .style('opacity', .7)

          tooltip.html(d.snow.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + ' lines')
              .style('left', (d3.event.pageX - 35) + 'px')
              .style('top', (d3.event.pageY - 30) + 'px')

      })
      .on('mouseout', function (d) {

          tooltip.transition()
              .style('opacity', 0)
      })



      // Step 3: Height & Width
      // >> Width - Based on barpadding and number of points in dataset
      // >> Height - Scale and height of the chart area
      .attr('width', (width / dataset.length) - barPadding)
      .attr('height', function (d) {
          return height - yScale(d.snow);
      })
      .attr('fill', 'steelblue')

      // Step 4: Info for hover interaction
      .attr('class', function (d) {
          return d.city;
      })
      .attr('id', function (d) {
          return d.snow;
      });

    // Renders the yAxis once the chart is finished
    // >> Moves it to the left 10 pixels so it doesn't overlap
    chart.append('g')
      .attr('class', 'axis')
      .attr('transform', 'translate(-10, 0)')
      .call(yAxis);

    // Appends the yAxis
    chart.append('g')
      .attr('class', 'axis')
      .attr('transform', 'translate(0,' + (height + 10) + ')')
      .call(xAxis)
     .selectAll("text")
            .style("text-anchor", "end")
            .attr("dx", "-.8em")
            .attr("dy", ".15em")
            .attr("transform", function (d) {
                return "rotate(-65)"
            }).attr("class", "langTotalText");

    // Adds yAxis title
    chart.append('text')
      .text('Lines of Code')
      .attr('transform', 'translate(-70, -20)');
}




var svg = d3.select("#chart")
    .append("svg").attr("ng-show", "chartMessage==null")
    .append("g")

svg.append("g")
    .attr("class", "slices");
svg.append("g")
    .attr("class", "labelName");
svg.append("g")
    .attr("class", "labelValue");
svg.append("g")
    .attr("class", "lines");

var width = 960 / 2,
    height = 450 / 2,
    radius = (Math.min(width, height) / 2) + 20;

var pie = d3.layout.pie()
    .sort(null)
    .value(function (d) {
        return d.value;
    });

var arc = d3.svg.arc()
    .outerRadius(radius * 0.8)
    .innerRadius(radius * 0.4);

var outerArc = d3.svg.arc()
    .innerRadius(radius * 0.9)
    .outerRadius(radius * 0.9);

var legendRectSize = (radius * 0.05);
var legendSpacing = radius * 0.02;


var div = d3.select("body").append("div").attr("class", "toolTip");



//var width = 960 / 2,
//    height = 450 / 2,
//    radius = (Math.min(width, height) / 2) + 20;

svg.attr("transform", "translate(" + width / 2 + "," + ((height / 2) + 55) + ")");

var colorRange = d3.scale.category20();
var color = d3.scale.ordinal()
    .range(colorRange.range());


function change(data) {

    /* ------- PIE SLICES -------*/
    var slice = svg.select(".slices").selectAll("path.slice")
        .data(pie(data), function (d) { return d.data.label });

    slice.enter()
        .insert("path")
        .style("fill", function (d) { return color(d.data.label); })
        .attr("class", "slice");

    slice
        .transition().duration(1000)
        .attrTween("d", function (d) {
            this._current = this._current || d;
            var interpolate = d3.interpolate(this._current, d);
            this._current = interpolate(0);
            return function (t) {
                return arc(interpolate(t));
            };
        })
    slice
        .on("mousemove", function (d) {
            div.style("left", d3.event.pageX + 10 + "px");
            div.style("top", d3.event.pageY - 25 + "px");
            div.style("display", "inline-block");
            div.html((d.data.label) + "<br>" + (d.data.value) + "%");
        });
    slice
        .on("mouseout", function (d) {
            div.style("display", "none");
        });

    slice.exit()
        .remove();



    /* ------- SLICE TO TEXT POLYLINES -------*/

    var polyline = svg.select(".lines").selectAll("polyline")
        .data(pie(data), function (d) { return d.data.label });

    polyline.enter()
        .append("polyline");

    polyline.transition().duration(1000)
        .attrTween("points", function (d) {
            this._current = this._current || d;
            var interpolate = d3.interpolate(this._current, d);
            this._current = interpolate(0);
            return function (t) {
                var d2 = interpolate(t);
                var pos = outerArc.centroid(d2);
                pos[0] = radius * 0.95 * (midAngle(d2) < Math.PI ? 1 : -1);
                return [arc.centroid(d2), outerArc.centroid(d2), pos];
            };
        });

    polyline.exit()
        .remove();



    /* ------- TEXT LABELS -------*/

    var text = svg.select(".labelName").selectAll("text")
        .data(pie(data), function (d) { return d.data.label })
	  .attr("dy", ".35em")
	  .attr('text-anchor', 'middle')
	  .text(function (d) { return (d.data.cars > 10000) ? d.data.make : null; });

        
    text.enter()
        .append("text")
        .attr("dy", ".35em")
        .text(function (d) {
            return (d.data.label + ": " + d.value + "%");

        })
         .selectAll("text")
            .style("text-anchor", "end")
            .attr("dx", "-.8em")
            .attr("dy", ".15em")
            .attr("transform", function (d) {
                return "rotate(-65)"
            })     ;




    function midAngle(d) {
        return d.startAngle + (d.endAngle - d.startAngle) / 2;
    }

    text
        .transition().duration(1000)
        .attrTween("transform", function (d) {
            this._current = this._current || d;
            var interpolate = d3.interpolate(this._current, d);
            this._current = interpolate(0);
            return function (t) {
                var d2 = interpolate(t);
                var pos = outerArc.centroid(d2);
                pos[0] = radius * (midAngle(d2) < Math.PI ? 1 : -1);
                return "translate(" + pos + ")";
            };
        })
        .styleTween("text-anchor", function (d) {
            this._current = this._current || d;
            var interpolate = d3.interpolate(this._current, d);
            this._current = interpolate(0);
            return function (t) {
                var d2 = interpolate(t);
                return midAngle(d2) < Math.PI ? "start" : "end";
            };
        })
        .text(function (d) {
            return (d.data.label + ": " + d.value + "%");
        });


    text.exit()
        .remove();


    alpha = .8;
    spacing = 11;

    function relax() {
        again = false;
        text.each(function (d, i) {
            a = this; //reference to text label
            da = d3.select(a);
            y1 = da.attr("y");
            text.each(function (d, j) {
                b = this;
                // a & b are the same element and don't collide.
                if (a == b) return;
                db = d3.select(b);
                // a & b are on opposite sides of the chart and
                // don't collide
                if (da.attr("text-anchor") != db.attr("text-anchor")) return;
                // Now let's calculate the distance between
                // these elements. 
                y2 = db.attr("y");
                deltaY = y1 - y2;

                // If spacing is greater than our specified spacing,
                // they don't collide.
                if (Math.abs(deltaY) > spacing) return;

                // If the labels collide, we'll push each 
                // of the two labels up and down a little bit.
                again = true;
                sign = deltaY > 0 ? 1 : -1;
                adjust = sign * alpha;
                da.attr("y", +y1 + adjust);
                db.attr("y", +y2 - adjust);
            });

        });
        // Adjust our line leaders here
        // so that they follow the labels. 
        if (again) {
            //debugger;
            labelElements = text[0];
            //  debugger;
            polyline.attr("y2", function (d, i) {
                //  debugger;
                labelForLine = d3.select(labelElements[i]);
                return labelForLine.attr("y");
            });




            setTimeout(relax, 20)
        }
    }

    relax();



};



var svg = dimple.newSvg('#chart', "100%", "85%");

function dimpleStacked(data) {
   // debugger;

    //d3.tsv("/content/example_data.tsv", function (data) {
    var myChart = new dimple.chart(svg, data);
    //myChart.setBounds(60, 30, 900, 400);

    var x = myChart.addCategoryAxis("x", "User");
    //x.addOrderRule(['Jan', 'Feb', 'Mar', 'Apr']);
    var y = myChart.addMeasureAxis("y", "Tasks");

    // In order to deal with cases where order differs by column 
    // you need to include it in your series definition
    var s = myChart.addSeries(["Tasks", "MyValue" ], dimple.plot.bar);

    s.getTooltipText = function (e) {
      //  debugger;
        var AorD = e.aggField[1] == "Additions" ? "Additions" : "Deletions";

        return [
            e.cx + " had " + e.aggField[0] + " " + AorD
        ];
    };
    d3.svg.axis()
    .tickFormat(d3.format("d"));

    // Your function approach would also work, but as it is the default 
    // handling for a numeric column you can just specify order like this
    s.addOrderRule("MyValue");

    y.showPercent = false;
    y.hidden = false;
   // y.overrideMax = 500;
    myChart.assignColor('Additions', '#c1f4cb');
    myChart.assignColor('Deletions', '#f2bba2');

    myChart.addLegend(60, 10, 510, 20, "right");
    myChart.draw();

    // If you don't want the order to show in the tooltip
    // the easiest way is to remove it here once the chart is drawn
    s.categoryFields = ["User"];




}
(function () {

    //Revealing module pattern
    //Get user and repos for user
    var github = function ($http) {
        var clientSecret = '?client_id=9b254584c151259f146a&client_secret=552ead4d53b54ebd99adf72edd017626c5f496cf';

        //Return github user profile
        var getUser = function (username) {
            return $http.get("https://api.github.com/users/" + username + clientSecret)
                  .then(function (response) {
                      return response.data;
                  });
        }

        //return repos for user
        var getRepos = function (user) {

            return $http.get(user.repos_url + clientSecret)
                        .then(function (response) {
                            return response.data;
                        });
        };


        var getRepoDetails = function (username, reponame) {

            var repo;
            var repoUrl = "https://api.github.com/repos/" + username + "/" + reponame;

            //Chained promises
            //each return is the input to the next success function
            return $http.get(repoUrl + clientSecret)
                        .then(function (response) {
                            repo = response.data;
                            return $http.get(repoUrl + "/contributors" + clientSecret);
                        })
                        .then(function (response) {
                            repo.contributors = response.data;
                            return repo;
                        });
        };


        //return repos for user
        var getLanguages = function (langURL) {

            return $http.get(langURL + clientSecret)
                        .then(function (response) {
                            return response.data;
                        });
        };

        return {
            getUser: getUser,
            getRepos: getRepos,
            getRepoDetails: getRepoDetails,
            getLanguages: getLanguages
        };

    }



    var module = angular.module("rylew"); //no second parameter because we're not creating a module, just trying to create a module
    module.factory("github", github); //register the service with angular
    // (name of service , name of function that returns function api object ) 





})();
(function () {

    app.controller('MainController', function ($scope, $interval, $location, $routeParams) {

        //not needed
        var onError = function (reason) {
            $scope.error = "Could not fetch the data from GitHub";

        };

        $scope.search = function (username) {
            $location.path("/ghv/user/" + username);
        };
    });


})();
(function () {

    /*Repo Controller*/
    app.controller('RepoController', function ($scope, github, $routeParams,  $http, $timeout) {

        var onContributors = function (data) {
            $scope.repo = data;
          
            $scope.contributorTotal = data.contributors.length;
            $scope.loading = null;

            var clientSecret = '?client_id=9b254584c151259f146a&client_secret=552ead4d53b54ebd99adf72edd017626c5f496cf';
            var langURL = "https://api.github.com/repos/" + username + "/" + reponame + '/stats/contributors' + clientSecret;
            
            //Statistics come back with 202 status code while github computes
            // Poll until status is 200
             var doPoll = function () {
                    $http.get(langURL).then(function (response) {
                        if (response.status == 202) {
                            $scope.chartMessage = null;
                            $timeout(doPoll , 1000);
                        }
                        else if (response.status == 200) {
                            onStats(response);
                        }
                    });
                }
                doPoll();



        }; //end onContributors

        var onStats = function (data) {
            $scope.chartMessage = "resolved"
            $scope.commitStats = [];
            var responseData = data.data;
            var obj = {};
            for (var i = 0; i < responseData.length; i++) {
                obj = {};
                obj.a = 0, obj.d = 0, obj.author="", obj.total = 0;
                obj.author = responseData[i].author.login;
                obj.total = responseData[i].total;

                var weeks = responseData[i].weeks;

                for (var j = 0; j < responseData[i].weeks.length; j++) {
                    if (j == 0) {
                        $scope.firstDate = timeConverter( weeks[j].w ) ;
                    }

                    obj.a = obj.a + weeks[j].a;               
                    obj.d = obj.d + weeks[j].d;                    
                }
                $scope.commitStats.push(obj);

            }

            var chartData = [];
            

            $scope.statUserCount = 0;
            for (var i = $scope.commitStats.length-1; (i > ($scope.commitStats.length -6)) ; i--) {
                
     
                if ( ($scope.commitStats[i] != undefined) && i>=0) {
                    $scope.statUserCount++;
                    chartData.push(
                        {
                            Tasks: $scope.commitStats[i].a.toString(),
                            User: $scope.commitStats[i].author,
                            MyValue: "Additions"
                        }
                    );

                    chartData.push(
                     {
                         Tasks: $scope.commitStats[i].d.toString(),
                         User: $scope.commitStats[i].author.toString(),
                         MyValue: "Deletions"
                     }
                     );   

                }            
            }

            dimpleStacked(chartData);


        }; //end onStats

        var onError = function (reason) {
            $scope.error = reason;
        };

        //username and repo passed as URL route parameters from user.html
        var reponame = $routeParams.reponame;
        var username = $routeParams.username;

        github.getRepoDetails(username, reponame).then(onContributors, onError);

        $scope.loading = "loading";


        /* Convert unix time from github api to date */
        function timeConverter(UNIX_timestamp) {
            var a = new Date(UNIX_timestamp * 1000);
            var months = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
            var year = a.getFullYear();
            var month = months[a.getMonth()];
            var date = a.getDate();
            var hour = a.getHours();
            var min = a.getMinutes();
            var sec = a.getSeconds();
            //var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec;
            var time = getOrdinal(date) + ' ' + month + ' ' + year;
            return time;

            function getOrdinal(n) {
                var s = ["th", "st", "nd", "rd"],
                v = n % 100;
                return n + (s[(v - 20) % 10] || s[v] || s[0]);
            }
        }



    });
    /* End Repo Controller*/


})();


/* User Controller */

(function() {
     
    


app.controller('UserController', function ($scope, github, $routeParams, $http, $q) {
    $scope.repos = {};
    var a = [];
    var obj = {};

    function lookup(name) {
        for (var i = 0, len = a.length; i < len; i++) {
            if (a[i].city === name)
                return [true, i];
        }
        return [false];
    }


    //1.) Successful return of Github user
    var onUserComplete = function (data) {
        $scope.user = data;
        github.getRepos($scope.user).then(onRepos, onError);
    };

    // 2.) get all the repos
    var onRepos = function (data) {
        var clientSecret = '?client_id=9b254584c151259f146a&client_secret=552ead4d53b54ebd99adf72edd017626c5f496cf';

        $scope.repos = data;

        var promises = [];

        for (var i = 0; i < data.length; i++) {
            var langURL = data[i].languages_url;
            // var promise = $http.get(langURL + clientSecret);
            var promise = github.getLanguages(langURL);
            promises.push(promise);
        }
        $q.all(promises).then(onLanguages, onError);

    };

    // 3.) get and format programming language data
    var onLanguages = function (data) {
        $scope.langTotalCount = data.length;
        for (var i = 0; i < data.length; i++) {
            var o = data[i];
            $scope.repos[i].languages = o;
            Object.keys(o).forEach(function (key, index) {
                var lines = o[key];
                var b = lookup(key);
                if (!b[0]) {
                    a.push({ 'city': key, snow: lines });
                }
                else {

                    a[b[1]].snow = a[b[1]].snow + lines;
                }

            });


        }
        $scope.langTotals = a;

        a.sort(function (a, b) {
            return b.snow - a.snow;
        });

        render(a);
        $('rect').mouseenter(function () {
          //  debugger;
            $('#city').html(this.className.animVal);
            $('#inches').html($(this).attr('id').toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + ' lines');
        });

        $('.langTotalText').mouseenter(function () {
            var t = this.innerHTML;
            //debugger;
            var lines = $('rect.' + t)[0].id;
            $('#city').html(t);
            $('#inches').html(lines.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + ' lines');
           
        });

        //$('.langTotalText').mouseout(function () {
            
        //    var t = this.innerHTML;
        //    $('rect.' + t)[0].removeClass('textHovered');
        //    debugger;
        //});


        $scope.loading = null;
    }

    var onError = function (reason) {

        $scope.error = "Could not find this user or error returning data from GitHub.";
        $scope.chartMessage = "Error returning Github data.";

    };

    $scope.changeRepo = function (event) {

        var dataset = [];
        var total = 0;
        var x = event.currentTarget;
        var myVal;
        //  $scope.mycheck = true;
        angular.element(x).find('.languageSPAN').each(function () {
            myVal = parseInt(angular.element(this).attr("data-value"));
            total = total + myVal;
        });

        $scope.thisRepo = angular.element(x).find('a').text();


        // angular.element(x).find('input').attr('checked') = checked;
        angular.element(x).addClass("selected").siblings().removeClass("selected");
        angular.element(x).find('.languageSPAN').each(function () {
            var key = angular.element(this).attr("data-key");
            var percent = ((parseInt(angular.element(this).attr("data-value")) / total) * 100).toFixed(2);
            var o = { label: key, value: percent };
            dataset.push(o);
        });
        total = 0;


        if (dataset.length > 0) {
            $scope.chartMessage = null;
            change(dataset);
        }
        else {
            // debugger;
            $scope.chartMessage = "No languages associated with this repository.";
        }

    };


    $scope.loading = "loading";
    $scope.repoSortOrder = "-stargazers_count";
    github.getUser($routeParams.username).then(onUserComplete, onError);
    $scope.chartMessage = "Please select a repository row.";

    //selected new repository - update donut chart with new data



});



})();

 (function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 5)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

    // Initialize and Configure Scroll Reveal Animation
    window.sr = ScrollReveal();
    sr.reveal('.sr-icons', {
        duration: 600,
        scale: 0.3,
        distance: '0px'
    }, 200);
    sr.reveal('.sr-button', {
        duration: 1000,
        delay: 200
    });
    sr.reveal('.sr-contact', {
        duration: 600,
        scale: 0.3,
        distance: '0px'
    }, 300);

    // Initialize and Configure Magnific Popup Lightbox Plugin
    $('.popup-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
        }
    });

})(jQuery); // End of use strict

/*!
 * Start Bootstrap - Creative v3.3.7+1 (http://startbootstrap.com/template-overviews/creative)
 * Copyright 2013-2016 Start Bootstrap
 * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap/blob/gh-pages/LICENSE)
 */
!function(a){"use strict";a("a.page-scroll").bind("click",function(e){var l=a(this);a("html, body").stop().animate({scrollTop:a(l.attr("href")).offset().top-50},1250,"easeInOutExpo"),e.preventDefault()}),a("body").scrollspy({target:".navbar-fixed-top",offset:51}),a(".navbar-collapse ul li a").click(function(){a(".navbar-toggle:visible").click()}),a("#mainNav").affix({offset:{top:100}}),window.sr=ScrollReveal(),sr.reveal(".sr-icons",{duration:600,scale:.3,distance:"0px"},200),sr.reveal(".sr-button",{duration:1e3,delay:200}),sr.reveal(".sr-contact",{duration:600,scale:.3,distance:"0px"},300),a(".popup-gallery").magnificPopup({delegate:"a",type:"image",tLoading:"Loading image #%curr%...",mainClass:"mfp-img-mobile",gallery:{enabled:!0,navigateByImgClick:!0,preload:[0,1]},image:{tError:'<a href="%url%">The image #%curr%</a> could not be loaded.'}})}(jQuery);
/*! Magnific Popup - v1.1.0 - 2016-02-20
* http://dimsemenov.com/plugins/magnific-popup/
* Copyright (c) 2016 Dmitry Semenov; */
!function (a) { "function" == typeof define && define.amd ? define(["jquery"], a) : a("object" == typeof exports ? require("jquery") : window.jQuery || window.Zepto) }(function (a) { var b, c, d, e, f, g, h = "Close", i = "BeforeClose", j = "AfterClose", k = "BeforeAppend", l = "MarkupParse", m = "Open", n = "Change", o = "mfp", p = "." + o, q = "mfp-ready", r = "mfp-removing", s = "mfp-prevent-close", t = function () { }, u = !!window.jQuery, v = a(window), w = function (a, c) { b.ev.on(o + a + p, c) }, x = function (b, c, d, e) { var f = document.createElement("div"); return f.className = "mfp-" + b, d && (f.innerHTML = d), e ? c && c.appendChild(f) : (f = a(f), c && f.appendTo(c)), f }, y = function (c, d) { b.ev.triggerHandler(o + c, d), b.st.callbacks && (c = c.charAt(0).toLowerCase() + c.slice(1), b.st.callbacks[c] && b.st.callbacks[c].apply(b, a.isArray(d) ? d : [d])) }, z = function (c) { return c === g && b.currTemplate.closeBtn || (b.currTemplate.closeBtn = a(b.st.closeMarkup.replace("%title%", b.st.tClose)), g = c), b.currTemplate.closeBtn }, A = function () { a.magnificPopup.instance || (b = new t, b.init(), a.magnificPopup.instance = b) }, B = function () { var a = document.createElement("p").style, b = ["ms", "O", "Moz", "Webkit"]; if (void 0 !== a.transition) return !0; for (; b.length;) if (b.pop() + "Transition" in a) return !0; return !1 }; t.prototype = { constructor: t, init: function () { var c = navigator.appVersion; b.isLowIE = b.isIE8 = document.all && !document.addEventListener, b.isAndroid = /android/gi.test(c), b.isIOS = /iphone|ipad|ipod/gi.test(c), b.supportsTransition = B(), b.probablyMobile = b.isAndroid || b.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), d = a(document), b.popupsCache = {} }, open: function (c) { var e; if (c.isObj === !1) { b.items = c.items.toArray(), b.index = 0; var g, h = c.items; for (e = 0; e < h.length; e++) if (g = h[e], g.parsed && (g = g.el[0]), g === c.el[0]) { b.index = e; break } } else b.items = a.isArray(c.items) ? c.items : [c.items], b.index = c.index || 0; if (b.isOpen) return void b.updateItemHTML(); b.types = [], f = "", c.mainEl && c.mainEl.length ? b.ev = c.mainEl.eq(0) : b.ev = d, c.key ? (b.popupsCache[c.key] || (b.popupsCache[c.key] = {}), b.currTemplate = b.popupsCache[c.key]) : b.currTemplate = {}, b.st = a.extend(!0, {}, a.magnificPopup.defaults, c), b.fixedContentPos = "auto" === b.st.fixedContentPos ? !b.probablyMobile : b.st.fixedContentPos, b.st.modal && (b.st.closeOnContentClick = !1, b.st.closeOnBgClick = !1, b.st.showCloseBtn = !1, b.st.enableEscapeKey = !1), b.bgOverlay || (b.bgOverlay = x("bg").on("click" + p, function () { b.close() }), b.wrap = x("wrap").attr("tabindex", -1).on("click" + p, function (a) { b._checkIfClose(a.target) && b.close() }), b.container = x("container", b.wrap)), b.contentContainer = x("content"), b.st.preloader && (b.preloader = x("preloader", b.container, b.st.tLoading)); var i = a.magnificPopup.modules; for (e = 0; e < i.length; e++) { var j = i[e]; j = j.charAt(0).toUpperCase() + j.slice(1), b["init" + j].call(b) } y("BeforeOpen"), b.st.showCloseBtn && (b.st.closeBtnInside ? (w(l, function (a, b, c, d) { c.close_replaceWith = z(d.type) }), f += " mfp-close-btn-in") : b.wrap.append(z())), b.st.alignTop && (f += " mfp-align-top"), b.fixedContentPos ? b.wrap.css({ overflow: b.st.overflowY, overflowX: "hidden", overflowY: b.st.overflowY }) : b.wrap.css({ top: v.scrollTop(), position: "absolute" }), (b.st.fixedBgPos === !1 || "auto" === b.st.fixedBgPos && !b.fixedContentPos) && b.bgOverlay.css({ height: d.height(), position: "absolute" }), b.st.enableEscapeKey && d.on("keyup" + p, function (a) { 27 === a.keyCode && b.close() }), v.on("resize" + p, function () { b.updateSize() }), b.st.closeOnContentClick || (f += " mfp-auto-cursor"), f && b.wrap.addClass(f); var k = b.wH = v.height(), n = {}; if (b.fixedContentPos && b._hasScrollBar(k)) { var o = b._getScrollbarSize(); o && (n.marginRight = o) } b.fixedContentPos && (b.isIE7 ? a("body, html").css("overflow", "hidden") : n.overflow = "hidden"); var r = b.st.mainClass; return b.isIE7 && (r += " mfp-ie7"), r && b._addClassToMFP(r), b.updateItemHTML(), y("BuildControls"), a("html").css(n), b.bgOverlay.add(b.wrap).prependTo(b.st.prependTo || a(document.body)), b._lastFocusedEl = document.activeElement, setTimeout(function () { b.content ? (b._addClassToMFP(q), b._setFocus()) : b.bgOverlay.addClass(q), d.on("focusin" + p, b._onFocusIn) }, 16), b.isOpen = !0, b.updateSize(k), y(m), c }, close: function () { b.isOpen && (y(i), b.isOpen = !1, b.st.removalDelay && !b.isLowIE && b.supportsTransition ? (b._addClassToMFP(r), setTimeout(function () { b._close() }, b.st.removalDelay)) : b._close()) }, _close: function () { y(h); var c = r + " " + q + " "; if (b.bgOverlay.detach(), b.wrap.detach(), b.container.empty(), b.st.mainClass && (c += b.st.mainClass + " "), b._removeClassFromMFP(c), b.fixedContentPos) { var e = { marginRight: "" }; b.isIE7 ? a("body, html").css("overflow", "") : e.overflow = "", a("html").css(e) } d.off("keyup" + p + " focusin" + p), b.ev.off(p), b.wrap.attr("class", "mfp-wrap").removeAttr("style"), b.bgOverlay.attr("class", "mfp-bg"), b.container.attr("class", "mfp-container"), !b.st.showCloseBtn || b.st.closeBtnInside && b.currTemplate[b.currItem.type] !== !0 || b.currTemplate.closeBtn && b.currTemplate.closeBtn.detach(), b.st.autoFocusLast && b._lastFocusedEl && a(b._lastFocusedEl).focus(), b.currItem = null, b.content = null, b.currTemplate = null, b.prevHeight = 0, y(j) }, updateSize: function (a) { if (b.isIOS) { var c = document.documentElement.clientWidth / window.innerWidth, d = window.innerHeight * c; b.wrap.css("height", d), b.wH = d } else b.wH = a || v.height(); b.fixedContentPos || b.wrap.css("height", b.wH), y("Resize") }, updateItemHTML: function () { var c = b.items[b.index]; b.contentContainer.detach(), b.content && b.content.detach(), c.parsed || (c = b.parseEl(b.index)); var d = c.type; if (y("BeforeChange", [b.currItem ? b.currItem.type : "", d]), b.currItem = c, !b.currTemplate[d]) { var f = b.st[d] ? b.st[d].markup : !1; y("FirstMarkupParse", f), f ? b.currTemplate[d] = a(f) : b.currTemplate[d] = !0 } e && e !== c.type && b.container.removeClass("mfp-" + e + "-holder"); var g = b["get" + d.charAt(0).toUpperCase() + d.slice(1)](c, b.currTemplate[d]); b.appendContent(g, d), c.preloaded = !0, y(n, c), e = c.type, b.container.prepend(b.contentContainer), y("AfterChange") }, appendContent: function (a, c) { b.content = a, a ? b.st.showCloseBtn && b.st.closeBtnInside && b.currTemplate[c] === !0 ? b.content.find(".mfp-close").length || b.content.append(z()) : b.content = a : b.content = "", y(k), b.container.addClass("mfp-" + c + "-holder"), b.contentContainer.append(b.content) }, parseEl: function (c) { var d, e = b.items[c]; if (e.tagName ? e = { el: a(e) } : (d = e.type, e = { data: e, src: e.src }), e.el) { for (var f = b.types, g = 0; g < f.length; g++) if (e.el.hasClass("mfp-" + f[g])) { d = f[g]; break } e.src = e.el.attr("data-mfp-src"), e.src || (e.src = e.el.attr("href")) } return e.type = d || b.st.type || "inline", e.index = c, e.parsed = !0, b.items[c] = e, y("ElementParse", e), b.items[c] }, addGroup: function (a, c) { var d = function (d) { d.mfpEl = this, b._openClick(d, a, c) }; c || (c = {}); var e = "click.magnificPopup"; c.mainEl = a, c.items ? (c.isObj = !0, a.off(e).on(e, d)) : (c.isObj = !1, c.delegate ? a.off(e).on(e, c.delegate, d) : (c.items = a, a.off(e).on(e, d))) }, _openClick: function (c, d, e) { var f = void 0 !== e.midClick ? e.midClick : a.magnificPopup.defaults.midClick; if (f || !(2 === c.which || c.ctrlKey || c.metaKey || c.altKey || c.shiftKey)) { var g = void 0 !== e.disableOn ? e.disableOn : a.magnificPopup.defaults.disableOn; if (g) if (a.isFunction(g)) { if (!g.call(b)) return !0 } else if (v.width() < g) return !0; c.type && (c.preventDefault(), b.isOpen && c.stopPropagation()), e.el = a(c.mfpEl), e.delegate && (e.items = d.find(e.delegate)), b.open(e) } }, updateStatus: function (a, d) { if (b.preloader) { c !== a && b.container.removeClass("mfp-s-" + c), d || "loading" !== a || (d = b.st.tLoading); var e = { status: a, text: d }; y("UpdateStatus", e), a = e.status, d = e.text, b.preloader.html(d), b.preloader.find("a").on("click", function (a) { a.stopImmediatePropagation() }), b.container.addClass("mfp-s-" + a), c = a } }, _checkIfClose: function (c) { if (!a(c).hasClass(s)) { var d = b.st.closeOnContentClick, e = b.st.closeOnBgClick; if (d && e) return !0; if (!b.content || a(c).hasClass("mfp-close") || b.preloader && c === b.preloader[0]) return !0; if (c === b.content[0] || a.contains(b.content[0], c)) { if (d) return !0 } else if (e && a.contains(document, c)) return !0; return !1 } }, _addClassToMFP: function (a) { b.bgOverlay.addClass(a), b.wrap.addClass(a) }, _removeClassFromMFP: function (a) { this.bgOverlay.removeClass(a), b.wrap.removeClass(a) }, _hasScrollBar: function (a) { return (b.isIE7 ? d.height() : document.body.scrollHeight) > (a || v.height()) }, _setFocus: function () { (b.st.focus ? b.content.find(b.st.focus).eq(0) : b.wrap).focus() }, _onFocusIn: function (c) { return c.target === b.wrap[0] || a.contains(b.wrap[0], c.target) ? void 0 : (b._setFocus(), !1) }, _parseMarkup: function (b, c, d) { var e; d.data && (c = a.extend(d.data, c)), y(l, [b, c, d]), a.each(c, function (c, d) { if (void 0 === d || d === !1) return !0; if (e = c.split("_"), e.length > 1) { var f = b.find(p + "-" + e[0]); if (f.length > 0) { var g = e[1]; "replaceWith" === g ? f[0] !== d[0] && f.replaceWith(d) : "img" === g ? f.is("img") ? f.attr("src", d) : f.replaceWith(a("<img>").attr("src", d).attr("class", f.attr("class"))) : f.attr(e[1], d) } } else b.find(p + "-" + c).html(d) }) }, _getScrollbarSize: function () { if (void 0 === b.scrollbarSize) { var a = document.createElement("div"); a.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(a), b.scrollbarSize = a.offsetWidth - a.clientWidth, document.body.removeChild(a) } return b.scrollbarSize } }, a.magnificPopup = { instance: null, proto: t.prototype, modules: [], open: function (b, c) { return A(), b = b ? a.extend(!0, {}, b) : {}, b.isObj = !0, b.index = c || 0, this.instance.open(b) }, close: function () { return a.magnificPopup.instance && a.magnificPopup.instance.close() }, registerModule: function (b, c) { c.options && (a.magnificPopup.defaults[b] = c.options), a.extend(this.proto, c.proto), this.modules.push(b) }, defaults: { disableOn: 0, key: null, midClick: !1, mainClass: "", preloader: !0, focus: "", closeOnContentClick: !1, closeOnBgClick: !0, closeBtnInside: !0, showCloseBtn: !0, enableEscapeKey: !0, modal: !1, alignTop: !1, removalDelay: 0, prependTo: null, fixedContentPos: "auto", fixedBgPos: "auto", overflowY: "auto", closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>', tClose: "Close (Esc)", tLoading: "Loading...", autoFocusLast: !0 } }, a.fn.magnificPopup = function (c) { A(); var d = a(this); if ("string" == typeof c) if ("open" === c) { var e, f = u ? d.data("magnificPopup") : d[0].magnificPopup, g = parseInt(arguments[1], 10) || 0; f.items ? e = f.items[g] : (e = d, f.delegate && (e = e.find(f.delegate)), e = e.eq(g)), b._openClick({ mfpEl: e }, d, f) } else b.isOpen && b[c].apply(b, Array.prototype.slice.call(arguments, 1)); else c = a.extend(!0, {}, c), u ? d.data("magnificPopup", c) : d[0].magnificPopup = c, b.addGroup(d, c); return d }; var C, D, E, F = "inline", G = function () { E && (D.after(E.addClass(C)).detach(), E = null) }; a.magnificPopup.registerModule(F, { options: { hiddenClass: "hide", markup: "", tNotFound: "Content not found" }, proto: { initInline: function () { b.types.push(F), w(h + "." + F, function () { G() }) }, getInline: function (c, d) { if (G(), c.src) { var e = b.st.inline, f = a(c.src); if (f.length) { var g = f[0].parentNode; g && g.tagName && (D || (C = e.hiddenClass, D = x(C), C = "mfp-" + C), E = f.after(D).detach().removeClass(C)), b.updateStatus("ready") } else b.updateStatus("error", e.tNotFound), f = a("<div>"); return c.inlineElement = f, f } return b.updateStatus("ready"), b._parseMarkup(d, {}, c), d } } }); var H, I = "ajax", J = function () { H && a(document.body).removeClass(H) }, K = function () { J(), b.req && b.req.abort() }; a.magnificPopup.registerModule(I, { options: { settings: null, cursor: "mfp-ajax-cur", tError: '<a href="%url%">The content</a> could not be loaded.' }, proto: { initAjax: function () { b.types.push(I), H = b.st.ajax.cursor, w(h + "." + I, K), w("BeforeChange." + I, K) }, getAjax: function (c) { H && a(document.body).addClass(H), b.updateStatus("loading"); var d = a.extend({ url: c.src, success: function (d, e, f) { var g = { data: d, xhr: f }; y("ParseAjax", g), b.appendContent(a(g.data), I), c.finished = !0, J(), b._setFocus(), setTimeout(function () { b.wrap.addClass(q) }, 16), b.updateStatus("ready"), y("AjaxContentAdded") }, error: function () { J(), c.finished = c.loadError = !0, b.updateStatus("error", b.st.ajax.tError.replace("%url%", c.src)) } }, b.st.ajax.settings); return b.req = a.ajax(d), "" } } }); var L, M = function (c) { if (c.data && void 0 !== c.data.title) return c.data.title; var d = b.st.image.titleSrc; if (d) { if (a.isFunction(d)) return d.call(b, c); if (c.el) return c.el.attr(d) || "" } return "" }; a.magnificPopup.registerModule("image", { options: { markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>', cursor: "mfp-zoom-out-cur", titleSrc: "title", verticalFit: !0, tError: '<a href="%url%">The image</a> could not be loaded.' }, proto: { initImage: function () { var c = b.st.image, d = ".image"; b.types.push("image"), w(m + d, function () { "image" === b.currItem.type && c.cursor && a(document.body).addClass(c.cursor) }), w(h + d, function () { c.cursor && a(document.body).removeClass(c.cursor), v.off("resize" + p) }), w("Resize" + d, b.resizeImage), b.isLowIE && w("AfterChange", b.resizeImage) }, resizeImage: function () { var a = b.currItem; if (a && a.img && b.st.image.verticalFit) { var c = 0; b.isLowIE && (c = parseInt(a.img.css("padding-top"), 10) + parseInt(a.img.css("padding-bottom"), 10)), a.img.css("max-height", b.wH - c) } }, _onImageHasSize: function (a) { a.img && (a.hasSize = !0, L && clearInterval(L), a.isCheckingImgSize = !1, y("ImageHasSize", a), a.imgHidden && (b.content && b.content.removeClass("mfp-loading"), a.imgHidden = !1)) }, findImageSize: function (a) { var c = 0, d = a.img[0], e = function (f) { L && clearInterval(L), L = setInterval(function () { return d.naturalWidth > 0 ? void b._onImageHasSize(a) : (c > 200 && clearInterval(L), c++, void (3 === c ? e(10) : 40 === c ? e(50) : 100 === c && e(500))) }, f) }; e(1) }, getImage: function (c, d) { var e = 0, f = function () { c && (c.img[0].complete ? (c.img.off(".mfploader"), c === b.currItem && (b._onImageHasSize(c), b.updateStatus("ready")), c.hasSize = !0, c.loaded = !0, y("ImageLoadComplete")) : (e++, 200 > e ? setTimeout(f, 100) : g())) }, g = function () { c && (c.img.off(".mfploader"), c === b.currItem && (b._onImageHasSize(c), b.updateStatus("error", h.tError.replace("%url%", c.src))), c.hasSize = !0, c.loaded = !0, c.loadError = !0) }, h = b.st.image, i = d.find(".mfp-img"); if (i.length) { var j = document.createElement("img"); j.className = "mfp-img", c.el && c.el.find("img").length && (j.alt = c.el.find("img").attr("alt")), c.img = a(j).on("load.mfploader", f).on("error.mfploader", g), j.src = c.src, i.is("img") && (c.img = c.img.clone()), j = c.img[0], j.naturalWidth > 0 ? c.hasSize = !0 : j.width || (c.hasSize = !1) } return b._parseMarkup(d, { title: M(c), img_replaceWith: c.img }, c), b.resizeImage(), c.hasSize ? (L && clearInterval(L), c.loadError ? (d.addClass("mfp-loading"), b.updateStatus("error", h.tError.replace("%url%", c.src))) : (d.removeClass("mfp-loading"), b.updateStatus("ready")), d) : (b.updateStatus("loading"), c.loading = !0, c.hasSize || (c.imgHidden = !0, d.addClass("mfp-loading"), b.findImageSize(c)), d) } } }); var N, O = function () { return void 0 === N && (N = void 0 !== document.createElement("p").style.MozTransform), N }; a.magnificPopup.registerModule("zoom", { options: { enabled: !1, easing: "ease-in-out", duration: 300, opener: function (a) { return a.is("img") ? a : a.find("img") } }, proto: { initZoom: function () { var a, c = b.st.zoom, d = ".zoom"; if (c.enabled && b.supportsTransition) { var e, f, g = c.duration, j = function (a) { var b = a.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"), d = "all " + c.duration / 1e3 + "s " + c.easing, e = { position: "fixed", zIndex: 9999, left: 0, top: 0, "-webkit-backface-visibility": "hidden" }, f = "transition"; return e["-webkit-" + f] = e["-moz-" + f] = e["-o-" + f] = e[f] = d, b.css(e), b }, k = function () { b.content.css("visibility", "visible") }; w("BuildControls" + d, function () { if (b._allowZoom()) { if (clearTimeout(e), b.content.css("visibility", "hidden"), a = b._getItemToZoom(), !a) return void k(); f = j(a), f.css(b._getOffset()), b.wrap.append(f), e = setTimeout(function () { f.css(b._getOffset(!0)), e = setTimeout(function () { k(), setTimeout(function () { f.remove(), a = f = null, y("ZoomAnimationEnded") }, 16) }, g) }, 16) } }), w(i + d, function () { if (b._allowZoom()) { if (clearTimeout(e), b.st.removalDelay = g, !a) { if (a = b._getItemToZoom(), !a) return; f = j(a) } f.css(b._getOffset(!0)), b.wrap.append(f), b.content.css("visibility", "hidden"), setTimeout(function () { f.css(b._getOffset()) }, 16) } }), w(h + d, function () { b._allowZoom() && (k(), f && f.remove(), a = null) }) } }, _allowZoom: function () { return "image" === b.currItem.type }, _getItemToZoom: function () { return b.currItem.hasSize ? b.currItem.img : !1 }, _getOffset: function (c) { var d; d = c ? b.currItem.img : b.st.zoom.opener(b.currItem.el || b.currItem); var e = d.offset(), f = parseInt(d.css("padding-top"), 10), g = parseInt(d.css("padding-bottom"), 10); e.top -= a(window).scrollTop() - f; var h = { width: d.width(), height: (u ? d.innerHeight() : d[0].offsetHeight) - g - f }; return O() ? h["-moz-transform"] = h.transform = "translate(" + e.left + "px," + e.top + "px)" : (h.left = e.left, h.top = e.top), h } } }); var P = "iframe", Q = "//about:blank", R = function (a) { if (b.currTemplate[P]) { var c = b.currTemplate[P].find("iframe"); c.length && (a || (c[0].src = Q), b.isIE8 && c.css("display", a ? "block" : "none")) } }; a.magnificPopup.registerModule(P, { options: { markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>', srcAction: "iframe_src", patterns: { youtube: { index: "youtube.com", id: "v=", src: "//www.youtube.com/embed/%id%?autoplay=1" }, vimeo: { index: "vimeo.com/", id: "/", src: "//player.vimeo.com/video/%id%?autoplay=1" }, gmaps: { index: "//maps.google.", src: "%id%&output=embed" } } }, proto: { initIframe: function () { b.types.push(P), w("BeforeChange", function (a, b, c) { b !== c && (b === P ? R() : c === P && R(!0)) }), w(h + "." + P, function () { R() }) }, getIframe: function (c, d) { var e = c.src, f = b.st.iframe; a.each(f.patterns, function () { return e.indexOf(this.index) > -1 ? (this.id && (e = "string" == typeof this.id ? e.substr(e.lastIndexOf(this.id) + this.id.length, e.length) : this.id.call(this, e)), e = this.src.replace("%id%", e), !1) : void 0 }); var g = {}; return f.srcAction && (g[f.srcAction] = e), b._parseMarkup(d, g, c), b.updateStatus("ready"), d } } }); var S = function (a) { var c = b.items.length; return a > c - 1 ? a - c : 0 > a ? c + a : a }, T = function (a, b, c) { return a.replace(/%curr%/gi, b + 1).replace(/%total%/gi, c) }; a.magnificPopup.registerModule("gallery", { options: { enabled: !1, arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>', preload: [0, 2], navigateByImgClick: !0, arrows: !0, tPrev: "Previous (Left arrow key)", tNext: "Next (Right arrow key)", tCounter: "%curr% of %total%" }, proto: { initGallery: function () { var c = b.st.gallery, e = ".mfp-gallery"; return b.direction = !0, c && c.enabled ? (f += " mfp-gallery", w(m + e, function () { c.navigateByImgClick && b.wrap.on("click" + e, ".mfp-img", function () { return b.items.length > 1 ? (b.next(), !1) : void 0 }), d.on("keydown" + e, function (a) { 37 === a.keyCode ? b.prev() : 39 === a.keyCode && b.next() }) }), w("UpdateStatus" + e, function (a, c) { c.text && (c.text = T(c.text, b.currItem.index, b.items.length)) }), w(l + e, function (a, d, e, f) { var g = b.items.length; e.counter = g > 1 ? T(c.tCounter, f.index, g) : "" }), w("BuildControls" + e, function () { if (b.items.length > 1 && c.arrows && !b.arrowLeft) { var d = c.arrowMarkup, e = b.arrowLeft = a(d.replace(/%title%/gi, c.tPrev).replace(/%dir%/gi, "left")).addClass(s), f = b.arrowRight = a(d.replace(/%title%/gi, c.tNext).replace(/%dir%/gi, "right")).addClass(s); e.click(function () { b.prev() }), f.click(function () { b.next() }), b.container.append(e.add(f)) } }), w(n + e, function () { b._preloadTimeout && clearTimeout(b._preloadTimeout), b._preloadTimeout = setTimeout(function () { b.preloadNearbyImages(), b._preloadTimeout = null }, 16) }), void w(h + e, function () { d.off(e), b.wrap.off("click" + e), b.arrowRight = b.arrowLeft = null })) : !1 }, next: function () { b.direction = !0, b.index = S(b.index + 1), b.updateItemHTML() }, prev: function () { b.direction = !1, b.index = S(b.index - 1), b.updateItemHTML() }, goTo: function (a) { b.direction = a >= b.index, b.index = a, b.updateItemHTML() }, preloadNearbyImages: function () { var a, c = b.st.gallery.preload, d = Math.min(c[0], b.items.length), e = Math.min(c[1], b.items.length); for (a = 1; a <= (b.direction ? e : d) ; a++) b._preloadItem(b.index + a); for (a = 1; a <= (b.direction ? d : e) ; a++) b._preloadItem(b.index - a) }, _preloadItem: function (c) { if (c = S(c), !b.items[c].preloaded) { var d = b.items[c]; d.parsed || (d = b.parseEl(c)), y("LazyLoad", d), "image" === d.type && (d.img = a('<img class="mfp-img" />').on("load.mfploader", function () { d.hasSize = !0 }).on("error.mfploader", function () { d.hasSize = !0, d.loadError = !0, y("LazyLoadError", d) }).attr("src", d.src)), d.preloaded = !0 } } } }); var U = "retina"; a.magnificPopup.registerModule(U, { options: { replaceSrc: function (a) { return a.src.replace(/\.\w+$/, function (a) { return "@2x" + a }) }, ratio: 1 }, proto: { initRetina: function () { if (window.devicePixelRatio > 1) { var a = b.st.retina, c = a.ratio; c = isNaN(c) ? c() : c, c > 1 && (w("ImageHasSize." + U, function (a, b) { b.img.css({ "max-width": b.img[0].naturalWidth / c, width: "100%" }) }), w("ElementParse." + U, function (b, d) { d.src = a.replaceSrc(d, c) })) } } } }), A() });


    var app = angular.module('rylew', ['ngRoute', 'angular-toArrayFilter'] );

    /**
     * Configure the Routes
     */
    app.config(['$routeProvider', function ($routeProvider) {
      $routeProvider
        // Home
        .when("/", {templateUrl: "partials/home.html", controller: "PageCtrl"})
        // Pages
        .when("/about", { templateUrl: "partials/about.html", controller: "PageCtrl" })
        .when("/projects", { templateUrl: "partials/projects.html", controller: "PageCtrl" })
        .when("/places", { templateUrl: "partials/places.html", controller: "PageCtrl" })
        .when("/contact", { templateUrl: "partials/contact.html", controller: "PageCtrl" })

            //GitHub Viewer
            .when("/ghv/main", {
                templateUrl: "partials/githubBrowser/main.html",
                controller: "MainController",
                message: 'Viewing main'
            })
            .when("/ghv/user/:username", { // : denotes a url parameter
                templateUrl: "partials/githubBrowser/user.html",
                controller: "UserController",
                message: 'Viewing user'
            })
            .when("/ghv/repo/:username/:reponame", { // :  denotes a url parameter
                templateUrl: "partials/githubBrowser/repo.html",
                controller: "RepoController",
                message: 'Viewing repo'
            })


        // else 404
        .otherwise("/404", {templateUrl: "partials/404.html", controller: "PageCtrl"});
    }]);


    /**
     * Controls all other Pages
     */
    app.controller('PageCtrl', function (/* $scope, $location, $http */) {
     // console.log("Page Controller reporting for duty.");

    });


    app.controller('FooterCtrl', function ($scope) {
       // $scope.year = Date();

    });


    //bootstrap nav menu hide on click
    $(document).on('click', '.navbar-collapse.in', function (e) {
        if ($(e.target).is('a')) {
            $(this).collapse('hide');
        }
    });

    $(window).scroll(function () {
        if ($(document).scrollTop() > 50) {
            $('nav').addClass('shrink');
        } else {
            $('nav').removeClass('shrink');
        }
    });
!function (e, t) { "function" == typeof define && define.amd ? define(t) : "object" == typeof exports ? module.exports = t(require, exports, module) : e.ScrollReveal = t() }(this, function (e, t, n) { return function () { "use strict"; var e, t, n; this.ScrollReveal = function () { function i(n) { return "undefined" == typeof this || Object.getPrototypeOf(this) !== i.prototype ? new i(n) : (e = this, e.tools = new t, e.isSupported() ? (e.tools.extend(e.defaults, n || {}), o(e.defaults), e.store = { elements: {}, containers: [] }, e.sequences = {}, e.history = [], e.uid = 0, e.initialized = !1) : "undefined" != typeof console && null !== console, e) } function o(t) { var n = t.container; return n && "string" == typeof n ? t.container = window.document.querySelector(n) : (n && !e.tools.isNode(n) && (t.container = null), null == n && (t.container = window.document.documentElement), t.container) } function r() { return ++e.uid } function s(t, n) { t.config ? t.config = e.tools.extendClone(t.config, n) : t.config = e.tools.extendClone(e.defaults, n), "top" === t.config.origin || "bottom" === t.config.origin ? t.config.axis = "Y" : t.config.axis = "X", "top" !== t.config.origin && "left" !== t.config.origin || (t.config.distance = "-" + t.config.distance) } function a(e) { var t = window.getComputedStyle(e.domEl); e.styles || (e.styles = { transition: {}, transform: {}, computed: {} }, e.styles.inline = e.domEl.getAttribute("style") || "", e.styles.inline += "; visibility: visible; ", e.styles.computed.opacity = t.opacity, t.transition && "all 0s ease 0s" != t.transition ? e.styles.computed.transition = t.transition + ", " : e.styles.computed.transition = ""), e.styles.transition.instant = l(e, 0), e.styles.transition.delayed = l(e, e.config.delay), e.styles.transform.initial = " -webkit-transform:", e.styles.transform.target = " -webkit-transform:", c(e), e.styles.transform.initial += "transform:", e.styles.transform.target += "transform:", c(e) } function l(e, t) { var n = e.config; return "-webkit-transition: " + e.styles.computed.transition + "-webkit-transform " + n.duration / 1e3 + "s " + n.easing + " " + t / 1e3 + "s, opacity " + n.duration / 1e3 + "s " + n.easing + " " + t / 1e3 + "s; transition: " + e.styles.computed.transition + "transform " + n.duration / 1e3 + "s " + n.easing + " " + t / 1e3 + "s, opacity " + n.duration / 1e3 + "s " + n.easing + " " + t / 1e3 + "s; " } function c(e) { var t = e.config, n = e.styles.transform; parseInt(t.distance) && (n.initial += " translate" + t.axis + "(" + t.distance + ")", n.target += " translate" + t.axis + "(0)"), t.scale && (n.initial += " scale(" + t.scale + ")", n.target += " scale(1)"), t.rotate.x && (n.initial += " rotateX(" + t.rotate.x + "deg)", n.target += " rotateX(0)"), t.rotate.y && (n.initial += " rotateY(" + t.rotate.y + "deg)", n.target += " rotateY(0)"), t.rotate.z && (n.initial += " rotateZ(" + t.rotate.z + "deg)", n.target += " rotateZ(0)"), n.initial += "; opacity: " + t.opacity + ";", n.target += "; opacity: " + e.styles.computed.opacity + ";" } function f(t) { var n = t.config.container; n && -1 == e.store.containers.indexOf(n) && e.store.containers.push(t.config.container), e.store.elements[t.id] = t } function u(t, n, i) { var o = { selector: t, config: n, interval: i }; e.history.push(o) } function d() { if (e.isSupported()) { p(); for (var t = 0; t < e.store.containers.length; t++) e.store.containers[t].addEventListener("scroll", y), e.store.containers[t].addEventListener("resize", y); e.initialized || (window.addEventListener("scroll", y), window.addEventListener("resize", y), e.initialized = !0) } return e } function y() { n(p) } function m() { var t, n, i, o; e.tools.forOwn(e.sequences, function (r) { o = e.sequences[r], t = !1; for (var s = 0; s < o.elemIds.length; s++) i = o.elemIds[s], n = e.store.elements[i], O(n) && !t && (t = !0); o.active = t }) } function p() { var t, n; m(), e.tools.forOwn(e.store.elements, function (i) { n = e.store.elements[i], t = b(n), v(n) ? (t ? n.domEl.setAttribute("style", n.styles.inline + n.styles.transform.target + n.styles.transition.delayed) : n.domEl.setAttribute("style", n.styles.inline + n.styles.transform.target + n.styles.transition.instant), w("reveal", n, t), n.revealing = !0, n.seen = !0, n.sequence && g(n, t)) : h(n) && (n.domEl.setAttribute("style", n.styles.inline + n.styles.transform.initial + n.styles.transition.instant), w("reset", n), n.revealing = !1) }) } function g(t, n) { var i = 0, o = 0, r = e.sequences[t.sequence.id]; r.blocked = !0, n && "onload" == t.config.useDelay && (o = t.config.delay), t.sequence.timer && (i = Math.abs(t.sequence.timer.started - new Date), window.clearTimeout(t.sequence.timer)), t.sequence.timer = { started: new Date }, t.sequence.timer.clock = window.setTimeout(function () { r.blocked = !1, t.sequence.timer = null, y() }, Math.abs(r.interval) + o - i) } function w(e, t, n) { var i = 0, o = 0, r = "after"; switch (e) { case "reveal": o = t.config.duration, n && (o += t.config.delay), r += "Reveal"; break; case "reset": o = t.config.duration, r += "Reset" } t.timer && (i = Math.abs(t.timer.started - new Date), window.clearTimeout(t.timer.clock)), t.timer = { started: new Date }, t.timer.clock = window.setTimeout(function () { t.config[r](t.domEl), t.timer = null }, o - i) } function v(t) { if (t.sequence) { var n = e.sequences[t.sequence.id]; return n.active && !n.blocked && !t.revealing && !t.disabled } return O(t) && !t.revealing && !t.disabled } function b(t) { var n = t.config.useDelay; return "always" === n || "onload" === n && !e.initialized || "once" === n && !t.seen } function h(t) { if (t.sequence) { var n = e.sequences[t.sequence.id]; return !n.active && t.config.reset && t.revealing && !t.disabled } return !O(t) && t.config.reset && t.revealing && !t.disabled } function x(e) { return { width: e.clientWidth, height: e.clientHeight } } function q(e) { if (e && e !== window.document.documentElement) { var t = E(e); return { x: e.scrollLeft + t.left, y: e.scrollTop + t.top } } return { x: window.pageXOffset, y: window.pageYOffset } } function E(e) { var t = 0, n = 0, i = e.offsetHeight, o = e.offsetWidth; do isNaN(e.offsetTop) || (t += e.offsetTop), isNaN(e.offsetLeft) || (n += e.offsetLeft); while (e = e.offsetParent); return { top: t, left: n, height: i, width: o } } function O(e) { function t() { var t = c + a * s, n = f + l * s, i = u - a * s, y = d - l * s, m = r.y + e.config.viewOffset.top, p = r.x + e.config.viewOffset.left, g = r.y - e.config.viewOffset.bottom + o.height, w = r.x - e.config.viewOffset.right + o.width; return g > t && i > m && n > p && w > y } function n() { return "fixed" === window.getComputedStyle(e.domEl).position } var i = E(e.domEl), o = x(e.config.container), r = q(e.config.container), s = e.config.viewFactor, a = i.height, l = i.width, c = i.top, f = i.left, u = c + a, d = f + l; return t() || n() } return i.prototype.defaults = { origin: "bottom", distance: "20px", duration: 500, delay: 0, rotate: { x: 0, y: 0, z: 0 }, opacity: 0, scale: .9, easing: "cubic-bezier(0.6, 0.2, 0.1, 1)", container: null, mobile: !0, reset: !1, useDelay: "always", viewFactor: .2, viewOffset: { top: 0, right: 0, bottom: 0, left: 0 }, afterReveal: function (e) { }, afterReset: function (e) { } }, i.prototype.isSupported = function () { var e = document.documentElement.style; return "WebkitTransition" in e && "WebkitTransform" in e || "transition" in e && "transform" in e }, i.prototype.reveal = function (t, n, i, l) { var c, y, m, p, g, w; if (c = n && n.container ? o(n) : e.defaults.container, y = e.tools.isNode(t) ? [t] : Array.prototype.slice.call(c.querySelectorAll(t)), !y.length) return e; n && "number" == typeof n && (i = n, n = {}), i && "number" == typeof i && (w = r(), g = e.sequences[w] = { id: w, interval: i, elemIds: [], active: !1 }); for (var v = 0; v < y.length; v++) p = y[v].getAttribute("data-sr-id"), p ? m = e.store.elements[p] : (m = { id: r(), domEl: y[v], seen: !1, revealing: !1 }, m.domEl.setAttribute("data-sr-id", m.id)), g && (m.sequence = { id: g.id, index: g.elemIds.length }, g.elemIds.push(m.id)), s(m, n || {}), a(m), f(m), e.tools.isMobile() && !m.config.mobile || !e.isSupported() ? (m.domEl.setAttribute("style", m.styles.inline), m.disabled = !0) : m.revealing || m.domEl.setAttribute("style", m.styles.inline + m.styles.transform.initial); return !l && e.isSupported() && (u(t, n), e.initTimeout && window.clearTimeout(e.initTimeout), e.initTimeout = window.setTimeout(d, 0)), e }, i.prototype.sync = function () { if (e.history.length && e.isSupported()) { for (var t = 0; t < e.history.length; t++) { var n = e.history[t]; e.reveal(n.selector, n.config, n.interval, !0) } d() } return e }, i }(), t = function () { function e() { } return e.prototype.isObject = function (e) { return null !== e && "object" == typeof e && e.constructor == Object }, e.prototype.isNode = function (e) { return "object" == typeof Node ? e instanceof Node : e && "object" == typeof e && "number" == typeof e.nodeType && "string" == typeof e.nodeName }, e.prototype.forOwn = function (e, t) { if (!this.isObject(e)) throw new TypeError('Expected "object", but received "' + typeof e + '".'); for (var n in e) e.hasOwnProperty(n) && t(n) }, e.prototype.extend = function (e, t) { return this.forOwn(t, function (n) { this.isObject(t[n]) ? (e[n] && this.isObject(e[n]) || (e[n] = {}), this.extend(e[n], t[n])) : e[n] = t[n] }.bind(this)), e }, e.prototype.extendClone = function (e, t) { return this.extend(this.extend({}, e), t) }, e.prototype.isMobile = function () { return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) }, e }(), n = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame }.call(this), this.ScrollReveal });

// angular.module('rylew', ['angular-toArrayFilter'])

angular.module('angular-toArrayFilter', [])

.filter('toArray', function () {
    return function (obj, addKey) {
        if (!angular.isObject(obj)) return obj;
        if (addKey === false) {
            return Object.keys(obj).map(function (key) {
                return obj[key];
            });
        } else {
            return Object.keys(obj).map(function (key) {
                var value = obj[key];
                return angular.isObject(value) ?
                  Object.defineProperty(value, '$key', { enumerable: false, value: key }) :
          { $key: key, $value: value };
            });
        }
    };
});




function render(dataset) {

    // Dimensions for the chart: height, width, and space b/t the bars
    var margins = { top: 30, right: 50, bottom: 30, left: 50 }
    var height = 400 - margins.left - margins.right,
        width = 700 - margins.top - margins.bottom,
        barPadding = 5

    // Create a scale for the y-axis based on data
    // >> Domain - min and max values in the dataset
    // >> Range - physical range of the scale (reversed)
    var yScale = d3.scale.linear()
      .domain([0, d3.max(dataset, function (d) {
          return d.snow;
      })])
      .range([height, 0]);

    // Implements the scale as an actual axis
    // >> Orient - places the axis on the left of the graph
    // >> Ticks - number of points on the axis, automated
    var yAxis = d3.svg.axis()
      .scale(yScale)
      .orient('left')
      .ticks(5);

    // Creates a scale for the x-axis based on city names
    var xScale = d3.scale.ordinal()
      .domain(dataset.map(function (d) {
          return d.city;
      }))
      .rangeRoundBands([0, width], .1);

    // Creates an axis based off the xScale properties
    var xAxis = d3.svg.axis()
      .scale(xScale)
      .orient('bottom');

    // Creates the initial space for the chart
    // >> Select - grabs the empty <div> above this script
    // >> Append - places an <svg> wrapper inside the div
    // >> Attr - applies our height & width values from above
    var chart = d3.select('.barChart')
      .append('svg').attr('class', 'svgBarChart')
      .attr('width', width + margins.left + margins.right)
      .attr('height', height + margins.top + margins.bottom)
      .append('g')
      .attr('transform', 'translate(' + margins.left + ',' + margins.top + ')');


    var tooltip = d3.select('body').append('div')
    .style('position', 'absolute')
    .style('padding', '0 10px')
    .style('background', 'white')
    .style('opacity', 0)


    // For each value in our dataset, places and styles a bar on the chart

    // Step 1: selectAll.data.enter.append
    // >> Loops through the dataset and appends a rectangle for each value
    chart.selectAll('rect')
      .data(dataset)
      .enter()
      .append('rect')
        .attr('class', 'barChartMouseover()')
      // Step 2: X & Y
      // >> X - Places the bars in horizontal order, based on number of
      //        points & the width of the chart
      // >> Y - Places vertically based on scale
      .attr('x', function (d, i) {
          return xScale(d.city);
      })
      .attr('y', function (d) {
          return yScale(d.snow);
      })
      .on('mouseover', function (d) {

          tooltip.transition()
              .style('opacity', .7)

          tooltip.html(d.snow.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + ' lines')
              .style('left', (d3.event.pageX - 35) + 'px')
              .style('top', (d3.event.pageY - 30) + 'px')

      })
      .on('mouseout', function (d) {

          tooltip.transition()
              .style('opacity', 0)
      })



      // Step 3: Height & Width
      // >> Width - Based on barpadding and number of points in dataset
      // >> Height - Scale and height of the chart area
      .attr('width', (width / dataset.length) - barPadding)
      .attr('height', function (d) {
          return height - yScale(d.snow);
      })
      .attr('fill', 'steelblue')

      // Step 4: Info for hover interaction
      .attr('class', function (d) {
          return d.city;
      })
      .attr('id', function (d) {
          return d.snow;
      });

    // Renders the yAxis once the chart is finished
    // >> Moves it to the left 10 pixels so it doesn't overlap
    chart.append('g')
      .attr('class', 'axis')
      .attr('transform', 'translate(-10, 0)')
      .call(yAxis);

    // Appends the yAxis
    chart.append('g')
      .attr('class', 'axis')
      .attr('transform', 'translate(0,' + (height + 10) + ')')
      .call(xAxis)
     .selectAll("text")
            .style("text-anchor", "end")
            .attr("dx", "-.8em")
            .attr("dy", ".15em")
            .attr("transform", function (d) {
                return "rotate(-65)"
            }).attr("class", "langTotalText");

    // Adds yAxis title
    chart.append('text')
      .text('Lines of Code')
      .attr('transform', 'translate(-70, -20)');
}




var svg = d3.select("#chart")
    .append("svg").attr("ng-show", "chartMessage==null")
    .append("g")

svg.append("g")
    .attr("class", "slices");
svg.append("g")
    .attr("class", "labelName");
svg.append("g")
    .attr("class", "labelValue");
svg.append("g")
    .attr("class", "lines");

var width = 960 / 2,
    height = 450 / 2,
    radius = (Math.min(width, height) / 2) + 20;

var pie = d3.layout.pie()
    .sort(null)
    .value(function (d) {
        return d.value;
    });

var arc = d3.svg.arc()
    .outerRadius(radius * 0.8)
    .innerRadius(radius * 0.4);

var outerArc = d3.svg.arc()
    .innerRadius(radius * 0.9)
    .outerRadius(radius * 0.9);

var legendRectSize = (radius * 0.05);
var legendSpacing = radius * 0.02;


var div = d3.select("body").append("div").attr("class", "toolTip");



//var width = 960 / 2,
//    height = 450 / 2,
//    radius = (Math.min(width, height) / 2) + 20;

svg.attr("transform", "translate(" + width / 2 + "," + ((height / 2) + 55) + ")");

var colorRange = d3.scale.category20();
var color = d3.scale.ordinal()
    .range(colorRange.range());


function change(data) {

    /* ------- PIE SLICES -------*/
    var slice = svg.select(".slices").selectAll("path.slice")
        .data(pie(data), function (d) { return d.data.label });

    slice.enter()
        .insert("path")
        .style("fill", function (d) { return color(d.data.label); })
        .attr("class", "slice");

    slice
        .transition().duration(1000)
        .attrTween("d", function (d) {
            this._current = this._current || d;
            var interpolate = d3.interpolate(this._current, d);
            this._current = interpolate(0);
            return function (t) {
                return arc(interpolate(t));
            };
        })
    slice
        .on("mousemove", function (d) {
            div.style("left", d3.event.pageX + 10 + "px");
            div.style("top", d3.event.pageY - 25 + "px");
            div.style("display", "inline-block");
            div.html((d.data.label) + "<br>" + (d.data.value) + "%");
        });
    slice
        .on("mouseout", function (d) {
            div.style("display", "none");
        });

    slice.exit()
        .remove();



    /* ------- SLICE TO TEXT POLYLINES -------*/

    var polyline = svg.select(".lines").selectAll("polyline")
        .data(pie(data), function (d) { return d.data.label });

    polyline.enter()
        .append("polyline");

    polyline.transition().duration(1000)
        .attrTween("points", function (d) {
            this._current = this._current || d;
            var interpolate = d3.interpolate(this._current, d);
            this._current = interpolate(0);
            return function (t) {
                var d2 = interpolate(t);
                var pos = outerArc.centroid(d2);
                pos[0] = radius * 0.95 * (midAngle(d2) < Math.PI ? 1 : -1);
                return [arc.centroid(d2), outerArc.centroid(d2), pos];
            };
        });

    polyline.exit()
        .remove();



    /* ------- TEXT LABELS -------*/

    var text = svg.select(".labelName").selectAll("text")
        .data(pie(data), function (d) { return d.data.label })
	  .attr("dy", ".35em")
	  .attr('text-anchor', 'middle')
	  .text(function (d) { return (d.data.cars > 10000) ? d.data.make : null; });

        
    text.enter()
        .append("text")
        .attr("dy", ".35em")
        .text(function (d) {
            return (d.data.label + ": " + d.value + "%");

        })
         .selectAll("text")
            .style("text-anchor", "end")
            .attr("dx", "-.8em")
            .attr("dy", ".15em")
            .attr("transform", function (d) {
                return "rotate(-65)"
            })     ;




    function midAngle(d) {
        return d.startAngle + (d.endAngle - d.startAngle) / 2;
    }

    text
        .transition().duration(1000)
        .attrTween("transform", function (d) {
            this._current = this._current || d;
            var interpolate = d3.interpolate(this._current, d);
            this._current = interpolate(0);
            return function (t) {
                var d2 = interpolate(t);
                var pos = outerArc.centroid(d2);
                pos[0] = radius * (midAngle(d2) < Math.PI ? 1 : -1);
                return "translate(" + pos + ")";
            };
        })
        .styleTween("text-anchor", function (d) {
            this._current = this._current || d;
            var interpolate = d3.interpolate(this._current, d);
            this._current = interpolate(0);
            return function (t) {
                var d2 = interpolate(t);
                return midAngle(d2) < Math.PI ? "start" : "end";
            };
        })
        .text(function (d) {
            return (d.data.label + ": " + d.value + "%");
        });


    text.exit()
        .remove();


    alpha = .8;
    spacing = 11;

    function relax() {
        again = false;
        text.each(function (d, i) {
            a = this; //reference to text label
            da = d3.select(a);
            y1 = da.attr("y");
            text.each(function (d, j) {
                b = this;
                // a & b are the same element and don't collide.
                if (a == b) return;
                db = d3.select(b);
                // a & b are on opposite sides of the chart and
                // don't collide
                if (da.attr("text-anchor") != db.attr("text-anchor")) return;
                // Now let's calculate the distance between
                // these elements. 
                y2 = db.attr("y");
                deltaY = y1 - y2;

                // If spacing is greater than our specified spacing,
                // they don't collide.
                if (Math.abs(deltaY) > spacing) return;

                // If the labels collide, we'll push each 
                // of the two labels up and down a little bit.
                again = true;
                sign = deltaY > 0 ? 1 : -1;
                adjust = sign * alpha;
                da.attr("y", +y1 + adjust);
                db.attr("y", +y2 - adjust);
            });

        });
        // Adjust our line leaders here
        // so that they follow the labels. 
        if (again) {
            //debugger;
            labelElements = text[0];
            //  debugger;
            polyline.attr("y2", function (d, i) {
                //  debugger;
                labelForLine = d3.select(labelElements[i]);
                return labelForLine.attr("y");
            });




            setTimeout(relax, 20)
        }
    }

    relax();



};



var svg = dimple.newSvg('#chart', "100%", "85%");

function dimpleStacked(data) {
   // debugger;

    //d3.tsv("/content/example_data.tsv", function (data) {
    var myChart = new dimple.chart(svg, data);
    //myChart.setBounds(60, 30, 900, 400);

    var x = myChart.addCategoryAxis("x", "User");
    //x.addOrderRule(['Jan', 'Feb', 'Mar', 'Apr']);
    var y = myChart.addMeasureAxis("y", "Tasks");

    // In order to deal with cases where order differs by column 
    // you need to include it in your series definition
    var s = myChart.addSeries(["Tasks", "MyValue" ], dimple.plot.bar);

    s.getTooltipText = function (e) {
      //  debugger;
        var AorD = e.aggField[1] == "Additions" ? "Additions" : "Deletions";

        return [
            e.cx + " had " + e.aggField[0] + " " + AorD
        ];
    };
    d3.svg.axis()
    .tickFormat(d3.format("d"));

    // Your function approach would also work, but as it is the default 
    // handling for a numeric column you can just specify order like this
    s.addOrderRule("MyValue");

    y.showPercent = false;
    y.hidden = false;
   // y.overrideMax = 500;
    myChart.assignColor('Additions', '#c1f4cb');
    myChart.assignColor('Deletions', '#f2bba2');

    myChart.addLegend(60, 10, 510, 20, "right");
    myChart.draw();

    // If you don't want the order to show in the tooltip
    // the easiest way is to remove it here once the chart is drawn
    s.categoryFields = ["User"];




}
(function () {

    //Revealing module pattern
    //Get user and repos for user
    var github = function ($http) {
        var clientSecret = '?client_id=9b254584c151259f146a&client_secret=552ead4d53b54ebd99adf72edd017626c5f496cf';

        //Return github user profile
        var getUser = function (username) {
            return $http.get("https://api.github.com/users/" + username + clientSecret)
                  .then(function (response) {
                      return response.data;
                  });
        }

        //return repos for user
        var getRepos = function (user) {

            return $http.get(user.repos_url + clientSecret)
                        .then(function (response) {
                            return response.data;
                        });
        };


        var getRepoDetails = function (username, reponame) {

            var repo;
            var repoUrl = "https://api.github.com/repos/" + username + "/" + reponame;

            //Chained promises
            //each return is the input to the next success function
            return $http.get(repoUrl + clientSecret)
                        .then(function (response) {
                            repo = response.data;
                            return $http.get(repoUrl + "/contributors" + clientSecret);
                        })
                        .then(function (response) {
                            repo.contributors = response.data;
                            return repo;
                        });
        };


        //return repos for user
        var getLanguages = function (langURL) {

            return $http.get(langURL + clientSecret)
                        .then(function (response) {
                            return response.data;
                        });
        };

        return {
            getUser: getUser,
            getRepos: getRepos,
            getRepoDetails: getRepoDetails,
            getLanguages: getLanguages
        };

    }



    var module = angular.module("rylew"); //no second parameter because we're not creating a module, just trying to create a module
    module.factory("github", github); //register the service with angular
    // (name of service , name of function that returns function api object ) 





})();
(function () {

    app.controller('MainController', function ($scope, $interval, $location, $routeParams) {

        //not needed
        var onError = function (reason) {
            $scope.error = "Could not fetch the data from GitHub";

        };

        $scope.search = function (username) {
            $location.path("/ghv/user/" + username);
        };
    });


})();
(function () {

    /*Repo Controller*/
    app.controller('RepoController', function ($scope, github, $routeParams,  $http, $timeout) {

        var onContributors = function (data) {
            $scope.repo = data;
          
            $scope.contributorTotal = data.contributors.length;
            $scope.loading = null;

            var clientSecret = '?client_id=9b254584c151259f146a&client_secret=552ead4d53b54ebd99adf72edd017626c5f496cf';
            var langURL = "https://api.github.com/repos/" + username + "/" + reponame + '/stats/contributors' + clientSecret;
            
            //Statistics come back with 202 status code while github computes
            // Poll until status is 200
             var doPoll = function () {
                    $http.get(langURL).then(function (response) {
                        if (response.status == 202) {
                            $scope.chartMessage = null;
                            $timeout(doPoll , 1000);
                        }
                        else if (response.status == 200) {
                            onStats(response);
                        }
                    });
                }
                doPoll();



        }; //end onContributors

        var onStats = function (data) {
            $scope.chartMessage = "resolved"
            $scope.commitStats = [];
            var responseData = data.data;
            var obj = {};
            for (var i = 0; i < responseData.length; i++) {
                obj = {};
                obj.a = 0, obj.d = 0, obj.author="", obj.total = 0;
                obj.author = responseData[i].author.login;
                obj.total = responseData[i].total;

                var weeks = responseData[i].weeks;

                for (var j = 0; j < responseData[i].weeks.length; j++) {
                    if (j == 0) {
                        $scope.firstDate = timeConverter( weeks[j].w ) ;
                    }

                    obj.a = obj.a + weeks[j].a;               
                    obj.d = obj.d + weeks[j].d;                    
                }
                $scope.commitStats.push(obj);

            }

            var chartData = [];
            

            $scope.statUserCount = 0;
            for (var i = $scope.commitStats.length-1; (i > ($scope.commitStats.length -6)) ; i--) {
                
     
                if ( ($scope.commitStats[i] != undefined) && i>=0) {
                    $scope.statUserCount++;
                    chartData.push(
                        {
                            Tasks: $scope.commitStats[i].a.toString(),
                            User: $scope.commitStats[i].author,
                            MyValue: "Additions"
                        }
                    );

                    chartData.push(
                     {
                         Tasks: $scope.commitStats[i].d.toString(),
                         User: $scope.commitStats[i].author.toString(),
                         MyValue: "Deletions"
                     }
                     );   

                }            
            }

            dimpleStacked(chartData);


        }; //end onStats

        var onError = function (reason) {
            $scope.error = reason;
        };

        //username and repo passed as URL route parameters from user.html
        var reponame = $routeParams.reponame;
        var username = $routeParams.username;

        github.getRepoDetails(username, reponame).then(onContributors, onError);

        $scope.loading = "loading";


        /* Convert unix time from github api to date */
        function timeConverter(UNIX_timestamp) {
            var a = new Date(UNIX_timestamp * 1000);
            var months = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
            var year = a.getFullYear();
            var month = months[a.getMonth()];
            var date = a.getDate();
            var hour = a.getHours();
            var min = a.getMinutes();
            var sec = a.getSeconds();
            //var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec;
            var time = getOrdinal(date) + ' ' + month + ' ' + year;
            return time;

            function getOrdinal(n) {
                var s = ["th", "st", "nd", "rd"],
                v = n % 100;
                return n + (s[(v - 20) % 10] || s[v] || s[0]);
            }
        }



    });
    /* End Repo Controller*/


})();


/* User Controller */

(function() {
     
    


app.controller('UserController', function ($scope, github, $routeParams, $http, $q) {
    $scope.repos = {};
    var a = [];
    var obj = {};

    function lookup(name) {
        for (var i = 0, len = a.length; i < len; i++) {
            if (a[i].city === name)
                return [true, i];
        }
        return [false];
    }


    //1.) Successful return of Github user
    var onUserComplete = function (data) {
        $scope.user = data;
        github.getRepos($scope.user).then(onRepos, onError);
    };

    // 2.) get all the repos
    var onRepos = function (data) {
        var clientSecret = '?client_id=9b254584c151259f146a&client_secret=552ead4d53b54ebd99adf72edd017626c5f496cf';

        $scope.repos = data;

        var promises = [];

        for (var i = 0; i < data.length; i++) {
            var langURL = data[i].languages_url;
            // var promise = $http.get(langURL + clientSecret);
            var promise = github.getLanguages(langURL);
            promises.push(promise);
        }
        $q.all(promises).then(onLanguages, onError);

    };

    // 3.) get and format programming language data
    var onLanguages = function (data) {
        $scope.langTotalCount = data.length;
        for (var i = 0; i < data.length; i++) {
            var o = data[i];
            $scope.repos[i].languages = o;
            Object.keys(o).forEach(function (key, index) {
                var lines = o[key];
                var b = lookup(key);
                if (!b[0]) {
                    a.push({ 'city': key, snow: lines });
                }
                else {

                    a[b[1]].snow = a[b[1]].snow + lines;
                }

            });


        }
        $scope.langTotals = a;

        a.sort(function (a, b) {
            return b.snow - a.snow;
        });

        render(a);
        $('rect').mouseenter(function () {
          //  debugger;
            $('#city').html(this.className.animVal);
            $('#inches').html($(this).attr('id').toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + ' lines');
        });

        $('.langTotalText').mouseenter(function () {
            var t = this.innerHTML;
            //debugger;
            var lines = $('rect.' + t)[0].id;
            $('#city').html(t);
            $('#inches').html(lines.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + ' lines');
           
        });

        //$('.langTotalText').mouseout(function () {
            
        //    var t = this.innerHTML;
        //    $('rect.' + t)[0].removeClass('textHovered');
        //    debugger;
        //});


        $scope.loading = null;
    }

    var onError = function (reason) {

        $scope.error = "Could not find this user or error returning data from GitHub.";
        $scope.chartMessage = "Error returning Github data.";

    };

    $scope.changeRepo = function (event) {

        var dataset = [];
        var total = 0;
        var x = event.currentTarget;
        var myVal;
        //  $scope.mycheck = true;
        angular.element(x).find('.languageSPAN').each(function () {
            myVal = parseInt(angular.element(this).attr("data-value"));
            total = total + myVal;
        });

        $scope.thisRepo = angular.element(x).find('a').text();


        // angular.element(x).find('input').attr('checked') = checked;
        angular.element(x).addClass("selected").siblings().removeClass("selected");
        angular.element(x).find('.languageSPAN').each(function () {
            var key = angular.element(this).attr("data-key");
            var percent = ((parseInt(angular.element(this).attr("data-value")) / total) * 100).toFixed(2);
            var o = { label: key, value: percent };
            dataset.push(o);
        });
        total = 0;


        if (dataset.length > 0) {
            $scope.chartMessage = null;
            change(dataset);
        }
        else {
            // debugger;
            $scope.chartMessage = "No languages associated with this repository.";
        }

    };


    $scope.loading = "loading";
    $scope.repoSortOrder = "-stargazers_count";
    github.getUser($routeParams.username).then(onUserComplete, onError);
    $scope.chartMessage = "Please select a repository row.";

    //selected new repository - update donut chart with new data



});



})();

 (function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 5)
        }, 1250, 'easeInOutExpo');
        event.preventDefault(); 
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

    // Initialize and Configure Scroll Reveal Animation
    window.sr = ScrollReveal();
    sr.reveal('.sr-icons', {
        duration: 600,
        scale: 0.3,
        distance: '0px'
    }, 200);
    sr.reveal('.sr-button', {
        duration: 1000,
        delay: 200
    });
    sr.reveal('.sr-contact', {
        duration: 600,
        scale: 0.3,
        distance: '0px'
    }, 300);

    // Initialize and Configure Magnific Popup Lightbox Plugin
    $('.popup-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
        }
    });

})(jQuery); // End of use strict

/*!
 * Start Bootstrap - Creative v3.3.7+1 (http://startbootstrap.com/template-overviews/creative)
 * Copyright 2013-2016 Start Bootstrap
 * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap/blob/gh-pages/LICENSE)
 */
!function(a){"use strict";a("a.page-scroll").bind("click",function(e){var l=a(this);a("html, body").stop().animate({scrollTop:a(l.attr("href")).offset().top-50},1250,"easeInOutExpo"),e.preventDefault()}),a("body").scrollspy({target:".navbar-fixed-top",offset:51}),a(".navbar-collapse ul li a").click(function(){a(".navbar-toggle:visible").click()}),a("#mainNav").affix({offset:{top:100}}),window.sr=ScrollReveal(),sr.reveal(".sr-icons",{duration:600,scale:.3,distance:"0px"},200),sr.reveal(".sr-button",{duration:1e3,delay:200}),sr.reveal(".sr-contact",{duration:600,scale:.3,distance:"0px"},300),a(".popup-gallery").magnificPopup({delegate:"a",type:"image",tLoading:"Loading image #%curr%...",mainClass:"mfp-img-mobile",gallery:{enabled:!0,navigateByImgClick:!0,preload:[0,1]},image:{tError:'<a href="%url%">The image #%curr%</a> could not be loaded.'}})}(jQuery);
/*! Magnific Popup - v1.1.0 - 2016-02-20
* http://dimsemenov.com/plugins/magnific-popup/
* Copyright (c) 2016 Dmitry Semenov; */
!function (a) { "function" == typeof define && define.amd ? define(["jquery"], a) : a("object" == typeof exports ? require("jquery") : window.jQuery || window.Zepto) }(function (a) { var b, c, d, e, f, g, h = "Close", i = "BeforeClose", j = "AfterClose", k = "BeforeAppend", l = "MarkupParse", m = "Open", n = "Change", o = "mfp", p = "." + o, q = "mfp-ready", r = "mfp-removing", s = "mfp-prevent-close", t = function () { }, u = !!window.jQuery, v = a(window), w = function (a, c) { b.ev.on(o + a + p, c) }, x = function (b, c, d, e) { var f = document.createElement("div"); return f.className = "mfp-" + b, d && (f.innerHTML = d), e ? c && c.appendChild(f) : (f = a(f), c && f.appendTo(c)), f }, y = function (c, d) { b.ev.triggerHandler(o + c, d), b.st.callbacks && (c = c.charAt(0).toLowerCase() + c.slice(1), b.st.callbacks[c] && b.st.callbacks[c].apply(b, a.isArray(d) ? d : [d])) }, z = function (c) { return c === g && b.currTemplate.closeBtn || (b.currTemplate.closeBtn = a(b.st.closeMarkup.replace("%title%", b.st.tClose)), g = c), b.currTemplate.closeBtn }, A = function () { a.magnificPopup.instance || (b = new t, b.init(), a.magnificPopup.instance = b) }, B = function () { var a = document.createElement("p").style, b = ["ms", "O", "Moz", "Webkit"]; if (void 0 !== a.transition) return !0; for (; b.length;) if (b.pop() + "Transition" in a) return !0; return !1 }; t.prototype = { constructor: t, init: function () { var c = navigator.appVersion; b.isLowIE = b.isIE8 = document.all && !document.addEventListener, b.isAndroid = /android/gi.test(c), b.isIOS = /iphone|ipad|ipod/gi.test(c), b.supportsTransition = B(), b.probablyMobile = b.isAndroid || b.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), d = a(document), b.popupsCache = {} }, open: function (c) { var e; if (c.isObj === !1) { b.items = c.items.toArray(), b.index = 0; var g, h = c.items; for (e = 0; e < h.length; e++) if (g = h[e], g.parsed && (g = g.el[0]), g === c.el[0]) { b.index = e; break } } else b.items = a.isArray(c.items) ? c.items : [c.items], b.index = c.index || 0; if (b.isOpen) return void b.updateItemHTML(); b.types = [], f = "", c.mainEl && c.mainEl.length ? b.ev = c.mainEl.eq(0) : b.ev = d, c.key ? (b.popupsCache[c.key] || (b.popupsCache[c.key] = {}), b.currTemplate = b.popupsCache[c.key]) : b.currTemplate = {}, b.st = a.extend(!0, {}, a.magnificPopup.defaults, c), b.fixedContentPos = "auto" === b.st.fixedContentPos ? !b.probablyMobile : b.st.fixedContentPos, b.st.modal && (b.st.closeOnContentClick = !1, b.st.closeOnBgClick = !1, b.st.showCloseBtn = !1, b.st.enableEscapeKey = !1), b.bgOverlay || (b.bgOverlay = x("bg").on("click" + p, function () { b.close() }), b.wrap = x("wrap").attr("tabindex", -1).on("click" + p, function (a) { b._checkIfClose(a.target) && b.close() }), b.container = x("container", b.wrap)), b.contentContainer = x("content"), b.st.preloader && (b.preloader = x("preloader", b.container, b.st.tLoading)); var i = a.magnificPopup.modules; for (e = 0; e < i.length; e++) { var j = i[e]; j = j.charAt(0).toUpperCase() + j.slice(1), b["init" + j].call(b) } y("BeforeOpen"), b.st.showCloseBtn && (b.st.closeBtnInside ? (w(l, function (a, b, c, d) { c.close_replaceWith = z(d.type) }), f += " mfp-close-btn-in") : b.wrap.append(z())), b.st.alignTop && (f += " mfp-align-top"), b.fixedContentPos ? b.wrap.css({ overflow: b.st.overflowY, overflowX: "hidden", overflowY: b.st.overflowY }) : b.wrap.css({ top: v.scrollTop(), position: "absolute" }), (b.st.fixedBgPos === !1 || "auto" === b.st.fixedBgPos && !b.fixedContentPos) && b.bgOverlay.css({ height: d.height(), position: "absolute" }), b.st.enableEscapeKey && d.on("keyup" + p, function (a) { 27 === a.keyCode && b.close() }), v.on("resize" + p, function () { b.updateSize() }), b.st.closeOnContentClick || (f += " mfp-auto-cursor"), f && b.wrap.addClass(f); var k = b.wH = v.height(), n = {}; if (b.fixedContentPos && b._hasScrollBar(k)) { var o = b._getScrollbarSize(); o && (n.marginRight = o) } b.fixedContentPos && (b.isIE7 ? a("body, html").css("overflow", "hidden") : n.overflow = "hidden"); var r = b.st.mainClass; return b.isIE7 && (r += " mfp-ie7"), r && b._addClassToMFP(r), b.updateItemHTML(), y("BuildControls"), a("html").css(n), b.bgOverlay.add(b.wrap).prependTo(b.st.prependTo || a(document.body)), b._lastFocusedEl = document.activeElement, setTimeout(function () { b.content ? (b._addClassToMFP(q), b._setFocus()) : b.bgOverlay.addClass(q), d.on("focusin" + p, b._onFocusIn) }, 16), b.isOpen = !0, b.updateSize(k), y(m), c }, close: function () { b.isOpen && (y(i), b.isOpen = !1, b.st.removalDelay && !b.isLowIE && b.supportsTransition ? (b._addClassToMFP(r), setTimeout(function () { b._close() }, b.st.removalDelay)) : b._close()) }, _close: function () { y(h); var c = r + " " + q + " "; if (b.bgOverlay.detach(), b.wrap.detach(), b.container.empty(), b.st.mainClass && (c += b.st.mainClass + " "), b._removeClassFromMFP(c), b.fixedContentPos) { var e = { marginRight: "" }; b.isIE7 ? a("body, html").css("overflow", "") : e.overflow = "", a("html").css(e) } d.off("keyup" + p + " focusin" + p), b.ev.off(p), b.wrap.attr("class", "mfp-wrap").removeAttr("style"), b.bgOverlay.attr("class", "mfp-bg"), b.container.attr("class", "mfp-container"), !b.st.showCloseBtn || b.st.closeBtnInside && b.currTemplate[b.currItem.type] !== !0 || b.currTemplate.closeBtn && b.currTemplate.closeBtn.detach(), b.st.autoFocusLast && b._lastFocusedEl && a(b._lastFocusedEl).focus(), b.currItem = null, b.content = null, b.currTemplate = null, b.prevHeight = 0, y(j) }, updateSize: function (a) { if (b.isIOS) { var c = document.documentElement.clientWidth / window.innerWidth, d = window.innerHeight * c; b.wrap.css("height", d), b.wH = d } else b.wH = a || v.height(); b.fixedContentPos || b.wrap.css("height", b.wH), y("Resize") }, updateItemHTML: function () { var c = b.items[b.index]; b.contentContainer.detach(), b.content && b.content.detach(), c.parsed || (c = b.parseEl(b.index)); var d = c.type; if (y("BeforeChange", [b.currItem ? b.currItem.type : "", d]), b.currItem = c, !b.currTemplate[d]) { var f = b.st[d] ? b.st[d].markup : !1; y("FirstMarkupParse", f), f ? b.currTemplate[d] = a(f) : b.currTemplate[d] = !0 } e && e !== c.type && b.container.removeClass("mfp-" + e + "-holder"); var g = b["get" + d.charAt(0).toUpperCase() + d.slice(1)](c, b.currTemplate[d]); b.appendContent(g, d), c.preloaded = !0, y(n, c), e = c.type, b.container.prepend(b.contentContainer), y("AfterChange") }, appendContent: function (a, c) { b.content = a, a ? b.st.showCloseBtn && b.st.closeBtnInside && b.currTemplate[c] === !0 ? b.content.find(".mfp-close").length || b.content.append(z()) : b.content = a : b.content = "", y(k), b.container.addClass("mfp-" + c + "-holder"), b.contentContainer.append(b.content) }, parseEl: function (c) { var d, e = b.items[c]; if (e.tagName ? e = { el: a(e) } : (d = e.type, e = { data: e, src: e.src }), e.el) { for (var f = b.types, g = 0; g < f.length; g++) if (e.el.hasClass("mfp-" + f[g])) { d = f[g]; break } e.src = e.el.attr("data-mfp-src"), e.src || (e.src = e.el.attr("href")) } return e.type = d || b.st.type || "inline", e.index = c, e.parsed = !0, b.items[c] = e, y("ElementParse", e), b.items[c] }, addGroup: function (a, c) { var d = function (d) { d.mfpEl = this, b._openClick(d, a, c) }; c || (c = {}); var e = "click.magnificPopup"; c.mainEl = a, c.items ? (c.isObj = !0, a.off(e).on(e, d)) : (c.isObj = !1, c.delegate ? a.off(e).on(e, c.delegate, d) : (c.items = a, a.off(e).on(e, d))) }, _openClick: function (c, d, e) { var f = void 0 !== e.midClick ? e.midClick : a.magnificPopup.defaults.midClick; if (f || !(2 === c.which || c.ctrlKey || c.metaKey || c.altKey || c.shiftKey)) { var g = void 0 !== e.disableOn ? e.disableOn : a.magnificPopup.defaults.disableOn; if (g) if (a.isFunction(g)) { if (!g.call(b)) return !0 } else if (v.width() < g) return !0; c.type && (c.preventDefault(), b.isOpen && c.stopPropagation()), e.el = a(c.mfpEl), e.delegate && (e.items = d.find(e.delegate)), b.open(e) } }, updateStatus: function (a, d) { if (b.preloader) { c !== a && b.container.removeClass("mfp-s-" + c), d || "loading" !== a || (d = b.st.tLoading); var e = { status: a, text: d }; y("UpdateStatus", e), a = e.status, d = e.text, b.preloader.html(d), b.preloader.find("a").on("click", function (a) { a.stopImmediatePropagation() }), b.container.addClass("mfp-s-" + a), c = a } }, _checkIfClose: function (c) { if (!a(c).hasClass(s)) { var d = b.st.closeOnContentClick, e = b.st.closeOnBgClick; if (d && e) return !0; if (!b.content || a(c).hasClass("mfp-close") || b.preloader && c === b.preloader[0]) return !0; if (c === b.content[0] || a.contains(b.content[0], c)) { if (d) return !0 } else if (e && a.contains(document, c)) return !0; return !1 } }, _addClassToMFP: function (a) { b.bgOverlay.addClass(a), b.wrap.addClass(a) }, _removeClassFromMFP: function (a) { this.bgOverlay.removeClass(a), b.wrap.removeClass(a) }, _hasScrollBar: function (a) { return (b.isIE7 ? d.height() : document.body.scrollHeight) > (a || v.height()) }, _setFocus: function () { (b.st.focus ? b.content.find(b.st.focus).eq(0) : b.wrap).focus() }, _onFocusIn: function (c) { return c.target === b.wrap[0] || a.contains(b.wrap[0], c.target) ? void 0 : (b._setFocus(), !1) }, _parseMarkup: function (b, c, d) { var e; d.data && (c = a.extend(d.data, c)), y(l, [b, c, d]), a.each(c, function (c, d) { if (void 0 === d || d === !1) return !0; if (e = c.split("_"), e.length > 1) { var f = b.find(p + "-" + e[0]); if (f.length > 0) { var g = e[1]; "replaceWith" === g ? f[0] !== d[0] && f.replaceWith(d) : "img" === g ? f.is("img") ? f.attr("src", d) : f.replaceWith(a("<img>").attr("src", d).attr("class", f.attr("class"))) : f.attr(e[1], d) } } else b.find(p + "-" + c).html(d) }) }, _getScrollbarSize: function () { if (void 0 === b.scrollbarSize) { var a = document.createElement("div"); a.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(a), b.scrollbarSize = a.offsetWidth - a.clientWidth, document.body.removeChild(a) } return b.scrollbarSize } }, a.magnificPopup = { instance: null, proto: t.prototype, modules: [], open: function (b, c) { return A(), b = b ? a.extend(!0, {}, b) : {}, b.isObj = !0, b.index = c || 0, this.instance.open(b) }, close: function () { return a.magnificPopup.instance && a.magnificPopup.instance.close() }, registerModule: function (b, c) { c.options && (a.magnificPopup.defaults[b] = c.options), a.extend(this.proto, c.proto), this.modules.push(b) }, defaults: { disableOn: 0, key: null, midClick: !1, mainClass: "", preloader: !0, focus: "", closeOnContentClick: !1, closeOnBgClick: !0, closeBtnInside: !0, showCloseBtn: !0, enableEscapeKey: !0, modal: !1, alignTop: !1, removalDelay: 0, prependTo: null, fixedContentPos: "auto", fixedBgPos: "auto", overflowY: "auto", closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>', tClose: "Close (Esc)", tLoading: "Loading...", autoFocusLast: !0 } }, a.fn.magnificPopup = function (c) { A(); var d = a(this); if ("string" == typeof c) if ("open" === c) { var e, f = u ? d.data("magnificPopup") : d[0].magnificPopup, g = parseInt(arguments[1], 10) || 0; f.items ? e = f.items[g] : (e = d, f.delegate && (e = e.find(f.delegate)), e = e.eq(g)), b._openClick({ mfpEl: e }, d, f) } else b.isOpen && b[c].apply(b, Array.prototype.slice.call(arguments, 1)); else c = a.extend(!0, {}, c), u ? d.data("magnificPopup", c) : d[0].magnificPopup = c, b.addGroup(d, c); return d }; var C, D, E, F = "inline", G = function () { E && (D.after(E.addClass(C)).detach(), E = null) }; a.magnificPopup.registerModule(F, { options: { hiddenClass: "hide", markup: "", tNotFound: "Content not found" }, proto: { initInline: function () { b.types.push(F), w(h + "." + F, function () { G() }) }, getInline: function (c, d) { if (G(), c.src) { var e = b.st.inline, f = a(c.src); if (f.length) { var g = f[0].parentNode; g && g.tagName && (D || (C = e.hiddenClass, D = x(C), C = "mfp-" + C), E = f.after(D).detach().removeClass(C)), b.updateStatus("ready") } else b.updateStatus("error", e.tNotFound), f = a("<div>"); return c.inlineElement = f, f } return b.updateStatus("ready"), b._parseMarkup(d, {}, c), d } } }); var H, I = "ajax", J = function () { H && a(document.body).removeClass(H) }, K = function () { J(), b.req && b.req.abort() }; a.magnificPopup.registerModule(I, { options: { settings: null, cursor: "mfp-ajax-cur", tError: '<a href="%url%">The content</a> could not be loaded.' }, proto: { initAjax: function () { b.types.push(I), H = b.st.ajax.cursor, w(h + "." + I, K), w("BeforeChange." + I, K) }, getAjax: function (c) { H && a(document.body).addClass(H), b.updateStatus("loading"); var d = a.extend({ url: c.src, success: function (d, e, f) { var g = { data: d, xhr: f }; y("ParseAjax", g), b.appendContent(a(g.data), I), c.finished = !0, J(), b._setFocus(), setTimeout(function () { b.wrap.addClass(q) }, 16), b.updateStatus("ready"), y("AjaxContentAdded") }, error: function () { J(), c.finished = c.loadError = !0, b.updateStatus("error", b.st.ajax.tError.replace("%url%", c.src)) } }, b.st.ajax.settings); return b.req = a.ajax(d), "" } } }); var L, M = function (c) { if (c.data && void 0 !== c.data.title) return c.data.title; var d = b.st.image.titleSrc; if (d) { if (a.isFunction(d)) return d.call(b, c); if (c.el) return c.el.attr(d) || "" } return "" }; a.magnificPopup.registerModule("image", { options: { markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>', cursor: "mfp-zoom-out-cur", titleSrc: "title", verticalFit: !0, tError: '<a href="%url%">The image</a> could not be loaded.' }, proto: { initImage: function () { var c = b.st.image, d = ".image"; b.types.push("image"), w(m + d, function () { "image" === b.currItem.type && c.cursor && a(document.body).addClass(c.cursor) }), w(h + d, function () { c.cursor && a(document.body).removeClass(c.cursor), v.off("resize" + p) }), w("Resize" + d, b.resizeImage), b.isLowIE && w("AfterChange", b.resizeImage) }, resizeImage: function () { var a = b.currItem; if (a && a.img && b.st.image.verticalFit) { var c = 0; b.isLowIE && (c = parseInt(a.img.css("padding-top"), 10) + parseInt(a.img.css("padding-bottom"), 10)), a.img.css("max-height", b.wH - c) } }, _onImageHasSize: function (a) { a.img && (a.hasSize = !0, L && clearInterval(L), a.isCheckingImgSize = !1, y("ImageHasSize", a), a.imgHidden && (b.content && b.content.removeClass("mfp-loading"), a.imgHidden = !1)) }, findImageSize: function (a) { var c = 0, d = a.img[0], e = function (f) { L && clearInterval(L), L = setInterval(function () { return d.naturalWidth > 0 ? void b._onImageHasSize(a) : (c > 200 && clearInterval(L), c++, void (3 === c ? e(10) : 40 === c ? e(50) : 100 === c && e(500))) }, f) }; e(1) }, getImage: function (c, d) { var e = 0, f = function () { c && (c.img[0].complete ? (c.img.off(".mfploader"), c === b.currItem && (b._onImageHasSize(c), b.updateStatus("ready")), c.hasSize = !0, c.loaded = !0, y("ImageLoadComplete")) : (e++, 200 > e ? setTimeout(f, 100) : g())) }, g = function () { c && (c.img.off(".mfploader"), c === b.currItem && (b._onImageHasSize(c), b.updateStatus("error", h.tError.replace("%url%", c.src))), c.hasSize = !0, c.loaded = !0, c.loadError = !0) }, h = b.st.image, i = d.find(".mfp-img"); if (i.length) { var j = document.createElement("img"); j.className = "mfp-img", c.el && c.el.find("img").length && (j.alt = c.el.find("img").attr("alt")), c.img = a(j).on("load.mfploader", f).on("error.mfploader", g), j.src = c.src, i.is("img") && (c.img = c.img.clone()), j = c.img[0], j.naturalWidth > 0 ? c.hasSize = !0 : j.width || (c.hasSize = !1) } return b._parseMarkup(d, { title: M(c), img_replaceWith: c.img }, c), b.resizeImage(), c.hasSize ? (L && clearInterval(L), c.loadError ? (d.addClass("mfp-loading"), b.updateStatus("error", h.tError.replace("%url%", c.src))) : (d.removeClass("mfp-loading"), b.updateStatus("ready")), d) : (b.updateStatus("loading"), c.loading = !0, c.hasSize || (c.imgHidden = !0, d.addClass("mfp-loading"), b.findImageSize(c)), d) } } }); var N, O = function () { return void 0 === N && (N = void 0 !== document.createElement("p").style.MozTransform), N }; a.magnificPopup.registerModule("zoom", { options: { enabled: !1, easing: "ease-in-out", duration: 300, opener: function (a) { return a.is("img") ? a : a.find("img") } }, proto: { initZoom: function () { var a, c = b.st.zoom, d = ".zoom"; if (c.enabled && b.supportsTransition) { var e, f, g = c.duration, j = function (a) { var b = a.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"), d = "all " + c.duration / 1e3 + "s " + c.easing, e = { position: "fixed", zIndex: 9999, left: 0, top: 0, "-webkit-backface-visibility": "hidden" }, f = "transition"; return e["-webkit-" + f] = e["-moz-" + f] = e["-o-" + f] = e[f] = d, b.css(e), b }, k = function () { b.content.css("visibility", "visible") }; w("BuildControls" + d, function () { if (b._allowZoom()) { if (clearTimeout(e), b.content.css("visibility", "hidden"), a = b._getItemToZoom(), !a) return void k(); f = j(a), f.css(b._getOffset()), b.wrap.append(f), e = setTimeout(function () { f.css(b._getOffset(!0)), e = setTimeout(function () { k(), setTimeout(function () { f.remove(), a = f = null, y("ZoomAnimationEnded") }, 16) }, g) }, 16) } }), w(i + d, function () { if (b._allowZoom()) { if (clearTimeout(e), b.st.removalDelay = g, !a) { if (a = b._getItemToZoom(), !a) return; f = j(a) } f.css(b._getOffset(!0)), b.wrap.append(f), b.content.css("visibility", "hidden"), setTimeout(function () { f.css(b._getOffset()) }, 16) } }), w(h + d, function () { b._allowZoom() && (k(), f && f.remove(), a = null) }) } }, _allowZoom: function () { return "image" === b.currItem.type }, _getItemToZoom: function () { return b.currItem.hasSize ? b.currItem.img : !1 }, _getOffset: function (c) { var d; d = c ? b.currItem.img : b.st.zoom.opener(b.currItem.el || b.currItem); var e = d.offset(), f = parseInt(d.css("padding-top"), 10), g = parseInt(d.css("padding-bottom"), 10); e.top -= a(window).scrollTop() - f; var h = { width: d.width(), height: (u ? d.innerHeight() : d[0].offsetHeight) - g - f }; return O() ? h["-moz-transform"] = h.transform = "translate(" + e.left + "px," + e.top + "px)" : (h.left = e.left, h.top = e.top), h } } }); var P = "iframe", Q = "//about:blank", R = function (a) { if (b.currTemplate[P]) { var c = b.currTemplate[P].find("iframe"); c.length && (a || (c[0].src = Q), b.isIE8 && c.css("display", a ? "block" : "none")) } }; a.magnificPopup.registerModule(P, { options: { markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>', srcAction: "iframe_src", patterns: { youtube: { index: "youtube.com", id: "v=", src: "//www.youtube.com/embed/%id%?autoplay=1" }, vimeo: { index: "vimeo.com/", id: "/", src: "//player.vimeo.com/video/%id%?autoplay=1" }, gmaps: { index: "//maps.google.", src: "%id%&output=embed" } } }, proto: { initIframe: function () { b.types.push(P), w("BeforeChange", function (a, b, c) { b !== c && (b === P ? R() : c === P && R(!0)) }), w(h + "." + P, function () { R() }) }, getIframe: function (c, d) { var e = c.src, f = b.st.iframe; a.each(f.patterns, function () { return e.indexOf(this.index) > -1 ? (this.id && (e = "string" == typeof this.id ? e.substr(e.lastIndexOf(this.id) + this.id.length, e.length) : this.id.call(this, e)), e = this.src.replace("%id%", e), !1) : void 0 }); var g = {}; return f.srcAction && (g[f.srcAction] = e), b._parseMarkup(d, g, c), b.updateStatus("ready"), d } } }); var S = function (a) { var c = b.items.length; return a > c - 1 ? a - c : 0 > a ? c + a : a }, T = function (a, b, c) { return a.replace(/%curr%/gi, b + 1).replace(/%total%/gi, c) }; a.magnificPopup.registerModule("gallery", { options: { enabled: !1, arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>', preload: [0, 2], navigateByImgClick: !0, arrows: !0, tPrev: "Previous (Left arrow key)", tNext: "Next (Right arrow key)", tCounter: "%curr% of %total%" }, proto: { initGallery: function () { var c = b.st.gallery, e = ".mfp-gallery"; return b.direction = !0, c && c.enabled ? (f += " mfp-gallery", w(m + e, function () { c.navigateByImgClick && b.wrap.on("click" + e, ".mfp-img", function () { return b.items.length > 1 ? (b.next(), !1) : void 0 }), d.on("keydown" + e, function (a) { 37 === a.keyCode ? b.prev() : 39 === a.keyCode && b.next() }) }), w("UpdateStatus" + e, function (a, c) { c.text && (c.text = T(c.text, b.currItem.index, b.items.length)) }), w(l + e, function (a, d, e, f) { var g = b.items.length; e.counter = g > 1 ? T(c.tCounter, f.index, g) : "" }), w("BuildControls" + e, function () { if (b.items.length > 1 && c.arrows && !b.arrowLeft) { var d = c.arrowMarkup, e = b.arrowLeft = a(d.replace(/%title%/gi, c.tPrev).replace(/%dir%/gi, "left")).addClass(s), f = b.arrowRight = a(d.replace(/%title%/gi, c.tNext).replace(/%dir%/gi, "right")).addClass(s); e.click(function () { b.prev() }), f.click(function () { b.next() }), b.container.append(e.add(f)) } }), w(n + e, function () { b._preloadTimeout && clearTimeout(b._preloadTimeout), b._preloadTimeout = setTimeout(function () { b.preloadNearbyImages(), b._preloadTimeout = null }, 16) }), void w(h + e, function () { d.off(e), b.wrap.off("click" + e), b.arrowRight = b.arrowLeft = null })) : !1 }, next: function () { b.direction = !0, b.index = S(b.index + 1), b.updateItemHTML() }, prev: function () { b.direction = !1, b.index = S(b.index - 1), b.updateItemHTML() }, goTo: function (a) { b.direction = a >= b.index, b.index = a, b.updateItemHTML() }, preloadNearbyImages: function () { var a, c = b.st.gallery.preload, d = Math.min(c[0], b.items.length), e = Math.min(c[1], b.items.length); for (a = 1; a <= (b.direction ? e : d) ; a++) b._preloadItem(b.index + a); for (a = 1; a <= (b.direction ? d : e) ; a++) b._preloadItem(b.index - a) }, _preloadItem: function (c) { if (c = S(c), !b.items[c].preloaded) { var d = b.items[c]; d.parsed || (d = b.parseEl(c)), y("LazyLoad", d), "image" === d.type && (d.img = a('<img class="mfp-img" />').on("load.mfploader", function () { d.hasSize = !0 }).on("error.mfploader", function () { d.hasSize = !0, d.loadError = !0, y("LazyLoadError", d) }).attr("src", d.src)), d.preloaded = !0 } } } }); var U = "retina"; a.magnificPopup.registerModule(U, { options: { replaceSrc: function (a) { return a.src.replace(/\.\w+$/, function (a) { return "@2x" + a }) }, ratio: 1 }, proto: { initRetina: function () { if (window.devicePixelRatio > 1) { var a = b.st.retina, c = a.ratio; c = isNaN(c) ? c() : c, c > 1 && (w("ImageHasSize." + U, function (a, b) { b.img.css({ "max-width": b.img[0].naturalWidth / c, width: "100%" }) }), w("ElementParse." + U, function (b, d) { d.src = a.replaceSrc(d, c) })) } } } }), A() });


    var app = angular.module('rylew', ['ngRoute', 'angular-toArrayFilter'] );

    /**
     * Configure the Routes
     */
    app.config(['$routeProvider', function ($routeProvider) {
      $routeProvider
        // Home
        .when("/", {templateUrl: "partials/home.html", controller: "PageCtrl"})
        // Pages
        .when("/about", { templateUrl: "partials/about.html", controller: "PageCtrl" })
        .when("/projects", { templateUrl: "partials/projects.html", controller: "PageCtrl" })
        .when("/places", { templateUrl: "partials/places.html", controller: "PageCtrl" })
        .when("/contact", { templateUrl: "partials/contact.html", controller: "PageCtrl" })

            //GitHub Viewer
            .when("/ghv/main", {
                templateUrl: "partials/githubBrowser/main.html",
                controller: "MainController",
                message: 'Viewing main'
            })
            .when("/ghv/user/:username", { // : denotes a url parameter
                templateUrl: "partials/githubBrowser/user.html",
                controller: "UserController",
                message: 'Viewing user'
            })
            .when("/ghv/repo/:username/:reponame", { // :  denotes a url parameter
                templateUrl: "partials/githubBrowser/repo.html",
                controller: "RepoController",
                message: 'Viewing repo'
            })


        // else 404
        .otherwise("/404", {templateUrl: "partials/404.html", controller: "PageCtrl"});
    }]);


    /**
     * Controls all other Pages
     */
    app.controller('PageCtrl', function (/* $scope, $location, $http */) {
     // console.log("Page Controller reporting for duty.");

    });


    app.controller('FooterCtrl', function ($scope) {
       // $scope.year = Date();

    });


    //bootstrap nav menu hide on click
    $(document).on('click', '.navbar-collapse.in', function (e) {
        if ($(e.target).is('a')) {
            $(this).collapse('hide');
        }
    });

    $(window).scroll(function () {
        if ($(document).scrollTop() > 50) {
            $('nav').addClass('shrink');
        } else {
            $('nav').removeClass('shrink');
        }
    });
!function (e, t) { "function" == typeof define && define.amd ? define(t) : "object" == typeof exports ? module.exports = t(require, exports, module) : e.ScrollReveal = t() }(this, function (e, t, n) { return function () { "use strict"; var e, t, n; this.ScrollReveal = function () { function i(n) { return "undefined" == typeof this || Object.getPrototypeOf(this) !== i.prototype ? new i(n) : (e = this, e.tools = new t, e.isSupported() ? (e.tools.extend(e.defaults, n || {}), o(e.defaults), e.store = { elements: {}, containers: [] }, e.sequences = {}, e.history = [], e.uid = 0, e.initialized = !1) : "undefined" != typeof console && null !== console, e) } function o(t) { var n = t.container; return n && "string" == typeof n ? t.container = window.document.querySelector(n) : (n && !e.tools.isNode(n) && (t.container = null), null == n && (t.container = window.document.documentElement), t.container) } function r() { return ++e.uid } function s(t, n) { t.config ? t.config = e.tools.extendClone(t.config, n) : t.config = e.tools.extendClone(e.defaults, n), "top" === t.config.origin || "bottom" === t.config.origin ? t.config.axis = "Y" : t.config.axis = "X", "top" !== t.config.origin && "left" !== t.config.origin || (t.config.distance = "-" + t.config.distance) } function a(e) { var t = window.getComputedStyle(e.domEl); e.styles || (e.styles = { transition: {}, transform: {}, computed: {} }, e.styles.inline = e.domEl.getAttribute("style") || "", e.styles.inline += "; visibility: visible; ", e.styles.computed.opacity = t.opacity, t.transition && "all 0s ease 0s" != t.transition ? e.styles.computed.transition = t.transition + ", " : e.styles.computed.transition = ""), e.styles.transition.instant = l(e, 0), e.styles.transition.delayed = l(e, e.config.delay), e.styles.transform.initial = " -webkit-transform:", e.styles.transform.target = " -webkit-transform:", c(e), e.styles.transform.initial += "transform:", e.styles.transform.target += "transform:", c(e) } function l(e, t) { var n = e.config; return "-webkit-transition: " + e.styles.computed.transition + "-webkit-transform " + n.duration / 1e3 + "s " + n.easing + " " + t / 1e3 + "s, opacity " + n.duration / 1e3 + "s " + n.easing + " " + t / 1e3 + "s; transition: " + e.styles.computed.transition + "transform " + n.duration / 1e3 + "s " + n.easing + " " + t / 1e3 + "s, opacity " + n.duration / 1e3 + "s " + n.easing + " " + t / 1e3 + "s; " } function c(e) { var t = e.config, n = e.styles.transform; parseInt(t.distance) && (n.initial += " translate" + t.axis + "(" + t.distance + ")", n.target += " translate" + t.axis + "(0)"), t.scale && (n.initial += " scale(" + t.scale + ")", n.target += " scale(1)"), t.rotate.x && (n.initial += " rotateX(" + t.rotate.x + "deg)", n.target += " rotateX(0)"), t.rotate.y && (n.initial += " rotateY(" + t.rotate.y + "deg)", n.target += " rotateY(0)"), t.rotate.z && (n.initial += " rotateZ(" + t.rotate.z + "deg)", n.target += " rotateZ(0)"), n.initial += "; opacity: " + t.opacity + ";", n.target += "; opacity: " + e.styles.computed.opacity + ";" } function f(t) { var n = t.config.container; n && -1 == e.store.containers.indexOf(n) && e.store.containers.push(t.config.container), e.store.elements[t.id] = t } function u(t, n, i) { var o = { selector: t, config: n, interval: i }; e.history.push(o) } function d() { if (e.isSupported()) { p(); for (var t = 0; t < e.store.containers.length; t++) e.store.containers[t].addEventListener("scroll", y), e.store.containers[t].addEventListener("resize", y); e.initialized || (window.addEventListener("scroll", y), window.addEventListener("resize", y), e.initialized = !0) } return e } function y() { n(p) } function m() { var t, n, i, o; e.tools.forOwn(e.sequences, function (r) { o = e.sequences[r], t = !1; for (var s = 0; s < o.elemIds.length; s++) i = o.elemIds[s], n = e.store.elements[i], O(n) && !t && (t = !0); o.active = t }) } function p() { var t, n; m(), e.tools.forOwn(e.store.elements, function (i) { n = e.store.elements[i], t = b(n), v(n) ? (t ? n.domEl.setAttribute("style", n.styles.inline + n.styles.transform.target + n.styles.transition.delayed) : n.domEl.setAttribute("style", n.styles.inline + n.styles.transform.target + n.styles.transition.instant), w("reveal", n, t), n.revealing = !0, n.seen = !0, n.sequence && g(n, t)) : h(n) && (n.domEl.setAttribute("style", n.styles.inline + n.styles.transform.initial + n.styles.transition.instant), w("reset", n), n.revealing = !1) }) } function g(t, n) { var i = 0, o = 0, r = e.sequences[t.sequence.id]; r.blocked = !0, n && "onload" == t.config.useDelay && (o = t.config.delay), t.sequence.timer && (i = Math.abs(t.sequence.timer.started - new Date), window.clearTimeout(t.sequence.timer)), t.sequence.timer = { started: new Date }, t.sequence.timer.clock = window.setTimeout(function () { r.blocked = !1, t.sequence.timer = null, y() }, Math.abs(r.interval) + o - i) } function w(e, t, n) { var i = 0, o = 0, r = "after"; switch (e) { case "reveal": o = t.config.duration, n && (o += t.config.delay), r += "Reveal"; break; case "reset": o = t.config.duration, r += "Reset" } t.timer && (i = Math.abs(t.timer.started - new Date), window.clearTimeout(t.timer.clock)), t.timer = { started: new Date }, t.timer.clock = window.setTimeout(function () { t.config[r](t.domEl), t.timer = null }, o - i) } function v(t) { if (t.sequence) { var n = e.sequences[t.sequence.id]; return n.active && !n.blocked && !t.revealing && !t.disabled } return O(t) && !t.revealing && !t.disabled } function b(t) { var n = t.config.useDelay; return "always" === n || "onload" === n && !e.initialized || "once" === n && !t.seen } function h(t) { if (t.sequence) { var n = e.sequences[t.sequence.id]; return !n.active && t.config.reset && t.revealing && !t.disabled } return !O(t) && t.config.reset && t.revealing && !t.disabled } function x(e) { return { width: e.clientWidth, height: e.clientHeight } } function q(e) { if (e && e !== window.document.documentElement) { var t = E(e); return { x: e.scrollLeft + t.left, y: e.scrollTop + t.top } } return { x: window.pageXOffset, y: window.pageYOffset } } function E(e) { var t = 0, n = 0, i = e.offsetHeight, o = e.offsetWidth; do isNaN(e.offsetTop) || (t += e.offsetTop), isNaN(e.offsetLeft) || (n += e.offsetLeft); while (e = e.offsetParent); return { top: t, left: n, height: i, width: o } } function O(e) { function t() { var t = c + a * s, n = f + l * s, i = u - a * s, y = d - l * s, m = r.y + e.config.viewOffset.top, p = r.x + e.config.viewOffset.left, g = r.y - e.config.viewOffset.bottom + o.height, w = r.x - e.config.viewOffset.right + o.width; return g > t && i > m && n > p && w > y } function n() { return "fixed" === window.getComputedStyle(e.domEl).position } var i = E(e.domEl), o = x(e.config.container), r = q(e.config.container), s = e.config.viewFactor, a = i.height, l = i.width, c = i.top, f = i.left, u = c + a, d = f + l; return t() || n() } return i.prototype.defaults = { origin: "bottom", distance: "20px", duration: 500, delay: 0, rotate: { x: 0, y: 0, z: 0 }, opacity: 0, scale: .9, easing: "cubic-bezier(0.6, 0.2, 0.1, 1)", container: null, mobile: !0, reset: !1, useDelay: "always", viewFactor: .2, viewOffset: { top: 0, right: 0, bottom: 0, left: 0 }, afterReveal: function (e) { }, afterReset: function (e) { } }, i.prototype.isSupported = function () { var e = document.documentElement.style; return "WebkitTransition" in e && "WebkitTransform" in e || "transition" in e && "transform" in e }, i.prototype.reveal = function (t, n, i, l) { var c, y, m, p, g, w; if (c = n && n.container ? o(n) : e.defaults.container, y = e.tools.isNode(t) ? [t] : Array.prototype.slice.call(c.querySelectorAll(t)), !y.length) return e; n && "number" == typeof n && (i = n, n = {}), i && "number" == typeof i && (w = r(), g = e.sequences[w] = { id: w, interval: i, elemIds: [], active: !1 }); for (var v = 0; v < y.length; v++) p = y[v].getAttribute("data-sr-id"), p ? m = e.store.elements[p] : (m = { id: r(), domEl: y[v], seen: !1, revealing: !1 }, m.domEl.setAttribute("data-sr-id", m.id)), g && (m.sequence = { id: g.id, index: g.elemIds.length }, g.elemIds.push(m.id)), s(m, n || {}), a(m), f(m), e.tools.isMobile() && !m.config.mobile || !e.isSupported() ? (m.domEl.setAttribute("style", m.styles.inline), m.disabled = !0) : m.revealing || m.domEl.setAttribute("style", m.styles.inline + m.styles.transform.initial); return !l && e.isSupported() && (u(t, n), e.initTimeout && window.clearTimeout(e.initTimeout), e.initTimeout = window.setTimeout(d, 0)), e }, i.prototype.sync = function () { if (e.history.length && e.isSupported()) { for (var t = 0; t < e.history.length; t++) { var n = e.history[t]; e.reveal(n.selector, n.config, n.interval, !0) } d() } return e }, i }(), t = function () { function e() { } return e.prototype.isObject = function (e) { return null !== e && "object" == typeof e && e.constructor == Object }, e.prototype.isNode = function (e) { return "object" == typeof Node ? e instanceof Node : e && "object" == typeof e && "number" == typeof e.nodeType && "string" == typeof e.nodeName }, e.prototype.forOwn = function (e, t) { if (!this.isObject(e)) throw new TypeError('Expected "object", but received "' + typeof e + '".'); for (var n in e) e.hasOwnProperty(n) && t(n) }, e.prototype.extend = function (e, t) { return this.forOwn(t, function (n) { this.isObject(t[n]) ? (e[n] && this.isObject(e[n]) || (e[n] = {}), this.extend(e[n], t[n])) : e[n] = t[n] }.bind(this)), e }, e.prototype.extendClone = function (e, t) { return this.extend(this.extend({}, e), t) }, e.prototype.isMobile = function () { return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) }, e }(), n = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame }.call(this), this.ScrollReveal });

// angular.module('rylew', ['angular-toArrayFilter'])

angular.module('angular-toArrayFilter', [])

.filter('toArray', function () {
    return function (obj, addKey) {
        if (!angular.isObject(obj)) return obj;
        if (addKey === false) {
            return Object.keys(obj).map(function (key) {
                return obj[key];
            });
        } else {
            return Object.keys(obj).map(function (key) {
                var value = obj[key];
                return angular.isObject(value) ?
                  Object.defineProperty(value, '$key', { enumerable: false, value: key }) :
          { $key: key, $value: value };
            });
        }
    };
});




function render(dataset) {

    // Dimensions for the chart: height, width, and space b/t the bars
    var margins = { top: 30, right: 50, bottom: 30, left: 50 }
    var height = 400 - margins.left - margins.right,
        width = 700 - margins.top - margins.bottom,
        barPadding = 5

    // Create a scale for the y-axis based on data
    // >> Domain - min and max values in the dataset
    // >> Range - physical range of the scale (reversed)
    var yScale = d3.scale.linear()
      .domain([0, d3.max(dataset, function (d) {
          return d.snow;
      })])
      .range([height, 0]);

    // Implements the scale as an actual axis
    // >> Orient - places the axis on the left of the graph
    // >> Ticks - number of points on the axis, automated
    var yAxis = d3.svg.axis()
      .scale(yScale)
      .orient('left')
      .ticks(5);

    // Creates a scale for the x-axis based on city names
    var xScale = d3.scale.ordinal()
      .domain(dataset.map(function (d) {
          return d.city;
      }))
      .rangeRoundBands([0, width], .1);

    // Creates an axis based off the xScale properties
    var xAxis = d3.svg.axis()
      .scale(xScale)
      .orient('bottom');

    // Creates the initial space for the chart
    // >> Select - grabs the empty <div> above this script
    // >> Append - places an <svg> wrapper inside the div
    // >> Attr - applies our height & width values from above
    var chart = d3.select('.barChart')
      .append('svg').attr('class', 'svgBarChart')
      .attr('width', width + margins.left + margins.right)
      .attr('height', height + margins.top + margins.bottom)
      .append('g')
      .attr('transform', 'translate(' + margins.left + ',' + margins.top + ')');


    var tooltip = d3.select('body').append('div')
    .style('position', 'absolute')
    .style('padding', '0 10px')
    .style('background', 'white')
    .style('opacity', 0)


    // For each value in our dataset, places and styles a bar on the chart

    // Step 1: selectAll.data.enter.append
    // >> Loops through the dataset and appends a rectangle for each value
    chart.selectAll('rect')
      .data(dataset)
      .enter()
      .append('rect')
        .attr('class', 'barChartMouseover()')
      // Step 2: X & Y
      // >> X - Places the bars in horizontal order, based on number of
      //        points & the width of the chart
      // >> Y - Places vertically based on scale
      .attr('x', function (d, i) {
          return xScale(d.city);
      })
      .attr('y', function (d) {
          return yScale(d.snow);
      })
      .on('mouseover', function (d) {

          tooltip.transition()
              .style('opacity', .7)

          tooltip.html(d.snow.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + ' lines')
              .style('left', (d3.event.pageX - 35) + 'px')
              .style('top', (d3.event.pageY - 30) + 'px')

      })
      .on('mouseout', function (d) {

          tooltip.transition()
              .style('opacity', 0)
      })



      // Step 3: Height & Width
      // >> Width - Based on barpadding and number of points in dataset
      // >> Height - Scale and height of the chart area
      .attr('width', (width / dataset.length) - barPadding)
      .attr('height', function (d) {
          return height - yScale(d.snow);
      })
      .attr('fill', 'steelblue')

      // Step 4: Info for hover interaction
      .attr('class', function (d) {
          return d.city;
      })
      .attr('id', function (d) {
          return d.snow;
      });

    // Renders the yAxis once the chart is finished
    // >> Moves it to the left 10 pixels so it doesn't overlap
    chart.append('g')
      .attr('class', 'axis')
      .attr('transform', 'translate(-10, 0)')
      .call(yAxis);

    // Appends the yAxis
    chart.append('g')
      .attr('class', 'axis')
      .attr('transform', 'translate(0,' + (height + 10) + ')')
      .call(xAxis)
     .selectAll("text")
            .style("text-anchor", "end")
            .attr("dx", "-.8em")
            .attr("dy", ".15em")
            .attr("transform", function (d) {
                return "rotate(-65)"
            }).attr("class", "langTotalText");

    // Adds yAxis title
    chart.append('text')
      .text('Lines of Code')
      .attr('transform', 'translate(-70, -20)');
}




var svg = d3.select("#chart")
    .append("svg").attr("ng-show", "chartMessage==null")
    .append("g")

svg.append("g")
    .attr("class", "slices");
svg.append("g")
    .attr("class", "labelName");
svg.append("g")
    .attr("class", "labelValue");
svg.append("g")
    .attr("class", "lines");

var width = 960 / 2,
    height = 450 / 2,
    radius = (Math.min(width, height) / 2) + 20;

var pie = d3.layout.pie()
    .sort(null)
    .value(function (d) {
        return d.value;
    });

var arc = d3.svg.arc()
    .outerRadius(radius * 0.8)
    .innerRadius(radius * 0.4);

var outerArc = d3.svg.arc()
    .innerRadius(radius * 0.9)
    .outerRadius(radius * 0.9);

var legendRectSize = (radius * 0.05);
var legendSpacing = radius * 0.02;


var div = d3.select("body").append("div").attr("class", "toolTip");



//var width = 960 / 2,
//    height = 450 / 2,
//    radius = (Math.min(width, height) / 2) + 20;

svg.attr("transform", "translate(" + width / 2 + "," + ((height / 2) + 55) + ")");

var colorRange = d3.scale.category20();
var color = d3.scale.ordinal()
    .range(colorRange.range());


function change(data) {

    /* ------- PIE SLICES -------*/
    var slice = svg.select(".slices").selectAll("path.slice")
        .data(pie(data), function (d) { return d.data.label });

    slice.enter()
        .insert("path")
        .style("fill", function (d) { return color(d.data.label); })
        .attr("class", "slice");

    slice
        .transition().duration(1000)
        .attrTween("d", function (d) {
            this._current = this._current || d;
            var interpolate = d3.interpolate(this._current, d);
            this._current = interpolate(0);
            return function (t) {
                return arc(interpolate(t));
            };
        })
    slice
        .on("mousemove", function (d) {
            div.style("left", d3.event.pageX + 10 + "px");
            div.style("top", d3.event.pageY - 25 + "px");
            div.style("display", "inline-block");
            div.html((d.data.label) + "<br>" + (d.data.value) + "%");
        });
    slice
        .on("mouseout", function (d) {
            div.style("display", "none");
        });

    slice.exit()
        .remove();



    /* ------- SLICE TO TEXT POLYLINES -------*/

    var polyline = svg.select(".lines").selectAll("polyline")
        .data(pie(data), function (d) { return d.data.label });

    polyline.enter()
        .append("polyline");

    polyline.transition().duration(1000)
        .attrTween("points", function (d) {
            this._current = this._current || d;
            var interpolate = d3.interpolate(this._current, d);
            this._current = interpolate(0);
            return function (t) {
                var d2 = interpolate(t);
                var pos = outerArc.centroid(d2);
                pos[0] = radius * 0.95 * (midAngle(d2) < Math.PI ? 1 : -1);
                return [arc.centroid(d2), outerArc.centroid(d2), pos];
            };
        });

    polyline.exit()
        .remove();



    /* ------- TEXT LABELS -------*/

    var text = svg.select(".labelName").selectAll("text")
        .data(pie(data), function (d) { return d.data.label })
	  .attr("dy", ".35em")
	  .attr('text-anchor', 'middle')
	  .text(function (d) { return (d.data.cars > 10000) ? d.data.make : null; });

        
    text.enter()
        .append("text")
        .attr("dy", ".35em")
        .text(function (d) {
            return (d.data.label + ": " + d.value + "%");

        })
         .selectAll("text")
            .style("text-anchor", "end")
            .attr("dx", "-.8em")
            .attr("dy", ".15em")
            .attr("transform", function (d) {
                return "rotate(-65)"
            })     ;




    function midAngle(d) {
        return d.startAngle + (d.endAngle - d.startAngle) / 2;
    }

    text
        .transition().duration(1000)
        .attrTween("transform", function (d) {
            this._current = this._current || d;
            var interpolate = d3.interpolate(this._current, d);
            this._current = interpolate(0);
            return function (t) {
                var d2 = interpolate(t);
                var pos = outerArc.centroid(d2);
                pos[0] = radius * (midAngle(d2) < Math.PI ? 1 : -1);
                return "translate(" + pos + ")";
            };
        })
        .styleTween("text-anchor", function (d) {
            this._current = this._current || d;
            var interpolate = d3.interpolate(this._current, d);
            this._current = interpolate(0);
            return function (t) {
                var d2 = interpolate(t);
                return midAngle(d2) < Math.PI ? "start" : "end";
            };
        })
        .text(function (d) {
            return (d.data.label + ": " + d.value + "%");
        });


    text.exit()
        .remove();


    alpha = .8;
    spacing = 11;

    function relax() {
        again = false;
        text.each(function (d, i) {
            a = this; //reference to text label
            da = d3.select(a);
            y1 = da.attr("y");
            text.each(function (d, j) {
                b = this;
                // a & b are the same element and don't collide.
                if (a == b) return;
                db = d3.select(b);
                // a & b are on opposite sides of the chart and
                // don't collide
                if (da.attr("text-anchor") != db.attr("text-anchor")) return;
                // Now let's calculate the distance between
                // these elements. 
                y2 = db.attr("y");
                deltaY = y1 - y2;

                // If spacing is greater than our specified spacing,
                // they don't collide.
                if (Math.abs(deltaY) > spacing) return;

                // If the labels collide, we'll push each 
                // of the two labels up and down a little bit.
                again = true;
                sign = deltaY > 0 ? 1 : -1;
                adjust = sign * alpha;
                da.attr("y", +y1 + adjust);
                db.attr("y", +y2 - adjust);
            });

        });
        // Adjust our line leaders here
        // so that they follow the labels. 
        if (again) {
            //debugger;
            labelElements = text[0];
            //  debugger;
            polyline.attr("y2", function (d, i) {
                //  debugger;
                labelForLine = d3.select(labelElements[i]);
                return labelForLine.attr("y");
            });




            setTimeout(relax, 20)
        }
    }

    relax();



};



var svg = dimple.newSvg('#chart', "100%", "85%");

function dimpleStacked(data) {
   // debugger;

    //d3.tsv("/content/example_data.tsv", function (data) {
    var myChart = new dimple.chart(svg, data);
    //myChart.setBounds(60, 30, 900, 400);

    var x = myChart.addCategoryAxis("x", "User");
    //x.addOrderRule(['Jan', 'Feb', 'Mar', 'Apr']);
    var y = myChart.addMeasureAxis("y", "Tasks");

    // In order to deal with cases where order differs by column 
    // you need to include it in your series definition
    var s = myChart.addSeries(["Tasks", "MyValue" ], dimple.plot.bar);

    s.getTooltipText = function (e) {
      //  debugger;
        var AorD = e.aggField[1] == "Additions" ? "Additions" : "Deletions";

        return [
            e.cx + " had " + e.aggField[0] + " " + AorD
        ];
    };
    d3.svg.axis()
    .tickFormat(d3.format("d"));

    // Your function approach would also work, but as it is the default 
    // handling for a numeric column you can just specify order like this
    s.addOrderRule("MyValue");

    y.showPercent = false;
    y.hidden = false;
   // y.overrideMax = 500;
    myChart.assignColor('Additions', '#c1f4cb');
    myChart.assignColor('Deletions', '#f2bba2');

    myChart.addLegend(60, 10, 510, 20, "right");
    myChart.draw();

    // If you don't want the order to show in the tooltip
    // the easiest way is to remove it here once the chart is drawn
    s.categoryFields = ["User"];




}
(function () {

    //Revealing module pattern
    //Get user and repos for user
    var github = function ($http) {
        var clientSecret = '?client_id=9b254584c151259f146a&client_secret=552ead4d53b54ebd99adf72edd017626c5f496cf';

        //Return github user profile
        var getUser = function (username) {
            return $http.get("https://api.github.com/users/" + username + clientSecret)
                  .then(function (response) {
                      return response.data;
                  });
        }

        //return repos for user
        var getRepos = function (user) {

            return $http.get(user.repos_url + clientSecret)
                        .then(function (response) {
                            return response.data;
                        });
        };


        var getRepoDetails = function (username, reponame) {

            var repo;
            var repoUrl = "https://api.github.com/repos/" + username + "/" + reponame;

            //Chained promises
            //each return is the input to the next success function
            return $http.get(repoUrl + clientSecret)
                        .then(function (response) {
                            repo = response.data;
                            return $http.get(repoUrl + "/contributors" + clientSecret);
                        })
                        .then(function (response) {
                            repo.contributors = response.data;
                            return repo;
                        });
        };


        //return repos for user
        var getLanguages = function (langURL) {

            return $http.get(langURL + clientSecret)
                        .then(function (response) {
                            return response.data;
                        });
        };

        return {
            getUser: getUser,
            getRepos: getRepos,
            getRepoDetails: getRepoDetails,
            getLanguages: getLanguages
        };

    }



    var module = angular.module("rylew"); //no second parameter because we're not creating a module, just trying to create a module
    module.factory("github", github); //register the service with angular
    // (name of service , name of function that returns function api object ) 





})();
(function () {

    app.controller('MainController', function ($scope, $interval, $location, $routeParams) {

        //not needed
        var onError = function (reason) {
            $scope.error = "Could not fetch the data from GitHub";

        };

        $scope.search = function (username) {
            $location.path("/ghv/user/" + username);
        };
    });


})();
(function () {

    /*Repo Controller*/
    app.controller('RepoController', function ($scope, github, $routeParams,  $http, $timeout) {

        var onContributors = function (data) {
            $scope.repo = data;
          
            $scope.contributorTotal = data.contributors.length;
            $scope.loading = null;

            var clientSecret = '?client_id=9b254584c151259f146a&client_secret=552ead4d53b54ebd99adf72edd017626c5f496cf';
            var langURL = "https://api.github.com/repos/" + username + "/" + reponame + '/stats/contributors' + clientSecret;
            
            //Statistics come back with 202 status code while github computes
            // Poll until status is 200
             var doPoll = function () {
                    $http.get(langURL).then(function (response) {
                        if (response.status == 202) {
                            $scope.chartMessage = null;
                            $timeout(doPoll , 1000);
                        }
                        else if (response.status == 200) {
                            onStats(response);
                        }
                    });
                }
                doPoll();



        }; //end onContributors

        var onStats = function (data) {
            $scope.chartMessage = "resolved"
            $scope.commitStats = [];
            var responseData = data.data;
            var obj = {};
            for (var i = 0; i < responseData.length; i++) {
                obj = {};
                obj.a = 0, obj.d = 0, obj.author="", obj.total = 0;
                obj.author = responseData[i].author.login;
                obj.total = responseData[i].total;

                var weeks = responseData[i].weeks;

                for (var j = 0; j < responseData[i].weeks.length; j++) {
                    if (j == 0) {
                        $scope.firstDate = timeConverter( weeks[j].w ) ;
                    }

                    obj.a = obj.a + weeks[j].a;               
                    obj.d = obj.d + weeks[j].d;                    
                }
                $scope.commitStats.push(obj);

            }

            var chartData = [];
            

            $scope.statUserCount = 0;
            for (var i = $scope.commitStats.length-1; (i > ($scope.commitStats.length -6)) ; i--) {
                
     
                if ( ($scope.commitStats[i] != undefined) && i>=0) {
                    $scope.statUserCount++;
                    chartData.push(
                        {
                            Tasks: $scope.commitStats[i].a.toString(),
                            User: $scope.commitStats[i].author,
                            MyValue: "Additions"
                        }
                    );

                    chartData.push(
                     {
                         Tasks: $scope.commitStats[i].d.toString(),
                         User: $scope.commitStats[i].author.toString(),
                         MyValue: "Deletions"
                     }
                     );   

                }            
            }

            dimpleStacked(chartData);


        }; //end onStats

        var onError = function (reason) {
            $scope.error = reason;
        };

        //username and repo passed as URL route parameters from user.html
        var reponame = $routeParams.reponame;
        var username = $routeParams.username;

        github.getRepoDetails(username, reponame).then(onContributors, onError);

        $scope.loading = "loading";


        /* Convert unix time from github api to date */
        function timeConverter(UNIX_timestamp) {
            var a = new Date(UNIX_timestamp * 1000);
            var months = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
            var year = a.getFullYear();
            var month = months[a.getMonth()];
            var date = a.getDate();
            var hour = a.getHours();
            var min = a.getMinutes();
            var sec = a.getSeconds();
            //var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec;
            var time = getOrdinal(date) + ' ' + month + ' ' + year;
            return time;

            function getOrdinal(n) {
                var s = ["th", "st", "nd", "rd"],
                v = n % 100;
                return n + (s[(v - 20) % 10] || s[v] || s[0]);
            }
        }



    });
    /* End Repo Controller*/


})();


/* User Controller */

(function() {
     
    


app.controller('UserController', function ($scope, github, $routeParams, $http, $q) {
    $scope.repos = {};
    var a = [];
    var obj = {};

    function lookup(name) {
        for (var i = 0, len = a.length; i < len; i++) {
            if (a[i].city === name)
                return [true, i];
        }
        return [false];
    }


    //1.) Successful return of Github user
    var onUserComplete = function (data) {
        $scope.user = data;
        github.getRepos($scope.user).then(onRepos, onError);
    };

    // 2.) get all the repos
    var onRepos = function (data) {
        var clientSecret = '?client_id=9b254584c151259f146a&client_secret=552ead4d53b54ebd99adf72edd017626c5f496cf';

        $scope.repos = data;

        var promises = [];

        for (var i = 0; i < data.length; i++) {
            var langURL = data[i].languages_url;
            // var promise = $http.get(langURL + clientSecret);
            var promise = github.getLanguages(langURL);
            promises.push(promise);
        }
        $q.all(promises).then(onLanguages, onError);

    };

    // 3.) get and format programming language data
    var onLanguages = function (data) {
        $scope.langTotalCount = data.length;
        for (var i = 0; i < data.length; i++) {
            var o = data[i];
            $scope.repos[i].languages = o;
            Object.keys(o).forEach(function (key, index) {
                var lines = o[key];
                var b = lookup(key);
                if (!b[0]) {
                    a.push({ 'city': key, snow: lines });
                }
                else {

                    a[b[1]].snow = a[b[1]].snow + lines;
                }

            });


        }
        $scope.langTotals = a;

        a.sort(function (a, b) {
            return b.snow - a.snow;
        });

        render(a);
        $('rect').mouseenter(function () {
          //  debugger;
            $('#city').html(this.className.animVal);
            $('#inches').html($(this).attr('id').toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + ' lines');
        });

        $('.langTotalText').mouseenter(function () {
            var t = this.innerHTML;
            //debugger;
            var lines = $('rect.' + t)[0].id;
            $('#city').html(t);
            $('#inches').html(lines.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + ' lines');
           
        });

        //$('.langTotalText').mouseout(function () {
            
        //    var t = this.innerHTML;
        //    $('rect.' + t)[0].removeClass('textHovered');
        //    debugger;
        //});


        $scope.loading = null;
    }

    var onError = function (reason) {

        $scope.error = "Could not find this user or error returning data from GitHub.";
        $scope.chartMessage = "Error returning Github data.";

    };

    $scope.changeRepo = function (event) {

        var dataset = [];
        var total = 0;
        var x = event.currentTarget;
        var myVal;
        //  $scope.mycheck = true;
        angular.element(x).find('.languageSPAN').each(function () {
            myVal = parseInt(angular.element(this).attr("data-value"));
            total = total + myVal;
        });

        $scope.thisRepo = angular.element(x).find('a').text();


        // angular.element(x).find('input').attr('checked') = checked;
        angular.element(x).addClass("selected").siblings().removeClass("selected");
        angular.element(x).find('.languageSPAN').each(function () {
            var key = angular.element(this).attr("data-key");
            var percent = ((parseInt(angular.element(this).attr("data-value")) / total) * 100).toFixed(2);
            var o = { label: key, value: percent };
            dataset.push(o);
        });
        total = 0;


        if (dataset.length > 0) {
            $scope.chartMessage = null;
            change(dataset);
        }
        else {
            // debugger;
            $scope.chartMessage = "No languages associated with this repository.";
        }

    };


    $scope.loading = "loading";
    $scope.repoSortOrder = "-stargazers_count";
    github.getUser($routeParams.username).then(onUserComplete, onError);
    $scope.chartMessage = "Please select a repository row.";

    //selected new repository - update donut chart with new data



});



})();

 (function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 5)
        }, 1250, 'easeInOutExpo');
        event.preventDefault(); 
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

    // Initialize and Configure Scroll Reveal Animation
    window.sr = ScrollReveal();
    sr.reveal('.sr-icons', {
        duration: 600,
        scale: 0.3,
        distance: '0px'
    }, 200);
    sr.reveal('.sr-button', {
        duration: 1000,
        delay: 200
    });
    sr.reveal('.sr-contact', {
        duration: 600,
        scale: 0.3,
        distance: '0px'
    }, 300);

    // Initialize and Configure Magnific Popup Lightbox Plugin
    $('.popup-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
        }
    });

})(jQuery); // End of use strict

/*!
 * Start Bootstrap - Creative v3.3.7+1 (http://startbootstrap.com/template-overviews/creative)
 * Copyright 2013-2016 Start Bootstrap
 * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap/blob/gh-pages/LICENSE)
 */
!function(a){"use strict";a("a.page-scroll").bind("click",function(e){var l=a(this);a("html, body").stop().animate({scrollTop:a(l.attr("href")).offset().top-50},1250,"easeInOutExpo"),e.preventDefault()}),a("body").scrollspy({target:".navbar-fixed-top",offset:51}),a(".navbar-collapse ul li a").click(function(){a(".navbar-toggle:visible").click()}),a("#mainNav").affix({offset:{top:100}}),window.sr=ScrollReveal(),sr.reveal(".sr-icons",{duration:600,scale:.3,distance:"0px"},200),sr.reveal(".sr-button",{duration:1e3,delay:200}),sr.reveal(".sr-contact",{duration:600,scale:.3,distance:"0px"},300),a(".popup-gallery").magnificPopup({delegate:"a",type:"image",tLoading:"Loading image #%curr%...",mainClass:"mfp-img-mobile",gallery:{enabled:!0,navigateByImgClick:!0,preload:[0,1]},image:{tError:'<a href="%url%">The image #%curr%</a> could not be loaded.'}})}(jQuery);
/*! Magnific Popup - v1.1.0 - 2016-02-20
* http://dimsemenov.com/plugins/magnific-popup/
* Copyright (c) 2016 Dmitry Semenov; */
!function (a) { "function" == typeof define && define.amd ? define(["jquery"], a) : a("object" == typeof exports ? require("jquery") : window.jQuery || window.Zepto) }(function (a) { var b, c, d, e, f, g, h = "Close", i = "BeforeClose", j = "AfterClose", k = "BeforeAppend", l = "MarkupParse", m = "Open", n = "Change", o = "mfp", p = "." + o, q = "mfp-ready", r = "mfp-removing", s = "mfp-prevent-close", t = function () { }, u = !!window.jQuery, v = a(window), w = function (a, c) { b.ev.on(o + a + p, c) }, x = function (b, c, d, e) { var f = document.createElement("div"); return f.className = "mfp-" + b, d && (f.innerHTML = d), e ? c && c.appendChild(f) : (f = a(f), c && f.appendTo(c)), f }, y = function (c, d) { b.ev.triggerHandler(o + c, d), b.st.callbacks && (c = c.charAt(0).toLowerCase() + c.slice(1), b.st.callbacks[c] && b.st.callbacks[c].apply(b, a.isArray(d) ? d : [d])) }, z = function (c) { return c === g && b.currTemplate.closeBtn || (b.currTemplate.closeBtn = a(b.st.closeMarkup.replace("%title%", b.st.tClose)), g = c), b.currTemplate.closeBtn }, A = function () { a.magnificPopup.instance || (b = new t, b.init(), a.magnificPopup.instance = b) }, B = function () { var a = document.createElement("p").style, b = ["ms", "O", "Moz", "Webkit"]; if (void 0 !== a.transition) return !0; for (; b.length;) if (b.pop() + "Transition" in a) return !0; return !1 }; t.prototype = { constructor: t, init: function () { var c = navigator.appVersion; b.isLowIE = b.isIE8 = document.all && !document.addEventListener, b.isAndroid = /android/gi.test(c), b.isIOS = /iphone|ipad|ipod/gi.test(c), b.supportsTransition = B(), b.probablyMobile = b.isAndroid || b.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), d = a(document), b.popupsCache = {} }, open: function (c) { var e; if (c.isObj === !1) { b.items = c.items.toArray(), b.index = 0; var g, h = c.items; for (e = 0; e < h.length; e++) if (g = h[e], g.parsed && (g = g.el[0]), g === c.el[0]) { b.index = e; break } } else b.items = a.isArray(c.items) ? c.items : [c.items], b.index = c.index || 0; if (b.isOpen) return void b.updateItemHTML(); b.types = [], f = "", c.mainEl && c.mainEl.length ? b.ev = c.mainEl.eq(0) : b.ev = d, c.key ? (b.popupsCache[c.key] || (b.popupsCache[c.key] = {}), b.currTemplate = b.popupsCache[c.key]) : b.currTemplate = {}, b.st = a.extend(!0, {}, a.magnificPopup.defaults, c), b.fixedContentPos = "auto" === b.st.fixedContentPos ? !b.probablyMobile : b.st.fixedContentPos, b.st.modal && (b.st.closeOnContentClick = !1, b.st.closeOnBgClick = !1, b.st.showCloseBtn = !1, b.st.enableEscapeKey = !1), b.bgOverlay || (b.bgOverlay = x("bg").on("click" + p, function () { b.close() }), b.wrap = x("wrap").attr("tabindex", -1).on("click" + p, function (a) { b._checkIfClose(a.target) && b.close() }), b.container = x("container", b.wrap)), b.contentContainer = x("content"), b.st.preloader && (b.preloader = x("preloader", b.container, b.st.tLoading)); var i = a.magnificPopup.modules; for (e = 0; e < i.length; e++) { var j = i[e]; j = j.charAt(0).toUpperCase() + j.slice(1), b["init" + j].call(b) } y("BeforeOpen"), b.st.showCloseBtn && (b.st.closeBtnInside ? (w(l, function (a, b, c, d) { c.close_replaceWith = z(d.type) }), f += " mfp-close-btn-in") : b.wrap.append(z())), b.st.alignTop && (f += " mfp-align-top"), b.fixedContentPos ? b.wrap.css({ overflow: b.st.overflowY, overflowX: "hidden", overflowY: b.st.overflowY }) : b.wrap.css({ top: v.scrollTop(), position: "absolute" }), (b.st.fixedBgPos === !1 || "auto" === b.st.fixedBgPos && !b.fixedContentPos) && b.bgOverlay.css({ height: d.height(), position: "absolute" }), b.st.enableEscapeKey && d.on("keyup" + p, function (a) { 27 === a.keyCode && b.close() }), v.on("resize" + p, function () { b.updateSize() }), b.st.closeOnContentClick || (f += " mfp-auto-cursor"), f && b.wrap.addClass(f); var k = b.wH = v.height(), n = {}; if (b.fixedContentPos && b._hasScrollBar(k)) { var o = b._getScrollbarSize(); o && (n.marginRight = o) } b.fixedContentPos && (b.isIE7 ? a("body, html").css("overflow", "hidden") : n.overflow = "hidden"); var r = b.st.mainClass; return b.isIE7 && (r += " mfp-ie7"), r && b._addClassToMFP(r), b.updateItemHTML(), y("BuildControls"), a("html").css(n), b.bgOverlay.add(b.wrap).prependTo(b.st.prependTo || a(document.body)), b._lastFocusedEl = document.activeElement, setTimeout(function () { b.content ? (b._addClassToMFP(q), b._setFocus()) : b.bgOverlay.addClass(q), d.on("focusin" + p, b._onFocusIn) }, 16), b.isOpen = !0, b.updateSize(k), y(m), c }, close: function () { b.isOpen && (y(i), b.isOpen = !1, b.st.removalDelay && !b.isLowIE && b.supportsTransition ? (b._addClassToMFP(r), setTimeout(function () { b._close() }, b.st.removalDelay)) : b._close()) }, _close: function () { y(h); var c = r + " " + q + " "; if (b.bgOverlay.detach(), b.wrap.detach(), b.container.empty(), b.st.mainClass && (c += b.st.mainClass + " "), b._removeClassFromMFP(c), b.fixedContentPos) { var e = { marginRight: "" }; b.isIE7 ? a("body, html").css("overflow", "") : e.overflow = "", a("html").css(e) } d.off("keyup" + p + " focusin" + p), b.ev.off(p), b.wrap.attr("class", "mfp-wrap").removeAttr("style"), b.bgOverlay.attr("class", "mfp-bg"), b.container.attr("class", "mfp-container"), !b.st.showCloseBtn || b.st.closeBtnInside && b.currTemplate[b.currItem.type] !== !0 || b.currTemplate.closeBtn && b.currTemplate.closeBtn.detach(), b.st.autoFocusLast && b._lastFocusedEl && a(b._lastFocusedEl).focus(), b.currItem = null, b.content = null, b.currTemplate = null, b.prevHeight = 0, y(j) }, updateSize: function (a) { if (b.isIOS) { var c = document.documentElement.clientWidth / window.innerWidth, d = window.innerHeight * c; b.wrap.css("height", d), b.wH = d } else b.wH = a || v.height(); b.fixedContentPos || b.wrap.css("height", b.wH), y("Resize") }, updateItemHTML: function () { var c = b.items[b.index]; b.contentContainer.detach(), b.content && b.content.detach(), c.parsed || (c = b.parseEl(b.index)); var d = c.type; if (y("BeforeChange", [b.currItem ? b.currItem.type : "", d]), b.currItem = c, !b.currTemplate[d]) { var f = b.st[d] ? b.st[d].markup : !1; y("FirstMarkupParse", f), f ? b.currTemplate[d] = a(f) : b.currTemplate[d] = !0 } e && e !== c.type && b.container.removeClass("mfp-" + e + "-holder"); var g = b["get" + d.charAt(0).toUpperCase() + d.slice(1)](c, b.currTemplate[d]); b.appendContent(g, d), c.preloaded = !0, y(n, c), e = c.type, b.container.prepend(b.contentContainer), y("AfterChange") }, appendContent: function (a, c) { b.content = a, a ? b.st.showCloseBtn && b.st.closeBtnInside && b.currTemplate[c] === !0 ? b.content.find(".mfp-close").length || b.content.append(z()) : b.content = a : b.content = "", y(k), b.container.addClass("mfp-" + c + "-holder"), b.contentContainer.append(b.content) }, parseEl: function (c) { var d, e = b.items[c]; if (e.tagName ? e = { el: a(e) } : (d = e.type, e = { data: e, src: e.src }), e.el) { for (var f = b.types, g = 0; g < f.length; g++) if (e.el.hasClass("mfp-" + f[g])) { d = f[g]; break } e.src = e.el.attr("data-mfp-src"), e.src || (e.src = e.el.attr("href")) } return e.type = d || b.st.type || "inline", e.index = c, e.parsed = !0, b.items[c] = e, y("ElementParse", e), b.items[c] }, addGroup: function (a, c) { var d = function (d) { d.mfpEl = this, b._openClick(d, a, c) }; c || (c = {}); var e = "click.magnificPopup"; c.mainEl = a, c.items ? (c.isObj = !0, a.off(e).on(e, d)) : (c.isObj = !1, c.delegate ? a.off(e).on(e, c.delegate, d) : (c.items = a, a.off(e).on(e, d))) }, _openClick: function (c, d, e) { var f = void 0 !== e.midClick ? e.midClick : a.magnificPopup.defaults.midClick; if (f || !(2 === c.which || c.ctrlKey || c.metaKey || c.altKey || c.shiftKey)) { var g = void 0 !== e.disableOn ? e.disableOn : a.magnificPopup.defaults.disableOn; if (g) if (a.isFunction(g)) { if (!g.call(b)) return !0 } else if (v.width() < g) return !0; c.type && (c.preventDefault(), b.isOpen && c.stopPropagation()), e.el = a(c.mfpEl), e.delegate && (e.items = d.find(e.delegate)), b.open(e) } }, updateStatus: function (a, d) { if (b.preloader) { c !== a && b.container.removeClass("mfp-s-" + c), d || "loading" !== a || (d = b.st.tLoading); var e = { status: a, text: d }; y("UpdateStatus", e), a = e.status, d = e.text, b.preloader.html(d), b.preloader.find("a").on("click", function (a) { a.stopImmediatePropagation() }), b.container.addClass("mfp-s-" + a), c = a } }, _checkIfClose: function (c) { if (!a(c).hasClass(s)) { var d = b.st.closeOnContentClick, e = b.st.closeOnBgClick; if (d && e) return !0; if (!b.content || a(c).hasClass("mfp-close") || b.preloader && c === b.preloader[0]) return !0; if (c === b.content[0] || a.contains(b.content[0], c)) { if (d) return !0 } else if (e && a.contains(document, c)) return !0; return !1 } }, _addClassToMFP: function (a) { b.bgOverlay.addClass(a), b.wrap.addClass(a) }, _removeClassFromMFP: function (a) { this.bgOverlay.removeClass(a), b.wrap.removeClass(a) }, _hasScrollBar: function (a) { return (b.isIE7 ? d.height() : document.body.scrollHeight) > (a || v.height()) }, _setFocus: function () { (b.st.focus ? b.content.find(b.st.focus).eq(0) : b.wrap).focus() }, _onFocusIn: function (c) { return c.target === b.wrap[0] || a.contains(b.wrap[0], c.target) ? void 0 : (b._setFocus(), !1) }, _parseMarkup: function (b, c, d) { var e; d.data && (c = a.extend(d.data, c)), y(l, [b, c, d]), a.each(c, function (c, d) { if (void 0 === d || d === !1) return !0; if (e = c.split("_"), e.length > 1) { var f = b.find(p + "-" + e[0]); if (f.length > 0) { var g = e[1]; "replaceWith" === g ? f[0] !== d[0] && f.replaceWith(d) : "img" === g ? f.is("img") ? f.attr("src", d) : f.replaceWith(a("<img>").attr("src", d).attr("class", f.attr("class"))) : f.attr(e[1], d) } } else b.find(p + "-" + c).html(d) }) }, _getScrollbarSize: function () { if (void 0 === b.scrollbarSize) { var a = document.createElement("div"); a.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(a), b.scrollbarSize = a.offsetWidth - a.clientWidth, document.body.removeChild(a) } return b.scrollbarSize } }, a.magnificPopup = { instance: null, proto: t.prototype, modules: [], open: function (b, c) { return A(), b = b ? a.extend(!0, {}, b) : {}, b.isObj = !0, b.index = c || 0, this.instance.open(b) }, close: function () { return a.magnificPopup.instance && a.magnificPopup.instance.close() }, registerModule: function (b, c) { c.options && (a.magnificPopup.defaults[b] = c.options), a.extend(this.proto, c.proto), this.modules.push(b) }, defaults: { disableOn: 0, key: null, midClick: !1, mainClass: "", preloader: !0, focus: "", closeOnContentClick: !1, closeOnBgClick: !0, closeBtnInside: !0, showCloseBtn: !0, enableEscapeKey: !0, modal: !1, alignTop: !1, removalDelay: 0, prependTo: null, fixedContentPos: "auto", fixedBgPos: "auto", overflowY: "auto", closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>', tClose: "Close (Esc)", tLoading: "Loading...", autoFocusLast: !0 } }, a.fn.magnificPopup = function (c) { A(); var d = a(this); if ("string" == typeof c) if ("open" === c) { var e, f = u ? d.data("magnificPopup") : d[0].magnificPopup, g = parseInt(arguments[1], 10) || 0; f.items ? e = f.items[g] : (e = d, f.delegate && (e = e.find(f.delegate)), e = e.eq(g)), b._openClick({ mfpEl: e }, d, f) } else b.isOpen && b[c].apply(b, Array.prototype.slice.call(arguments, 1)); else c = a.extend(!0, {}, c), u ? d.data("magnificPopup", c) : d[0].magnificPopup = c, b.addGroup(d, c); return d }; var C, D, E, F = "inline", G = function () { E && (D.after(E.addClass(C)).detach(), E = null) }; a.magnificPopup.registerModule(F, { options: { hiddenClass: "hide", markup: "", tNotFound: "Content not found" }, proto: { initInline: function () { b.types.push(F), w(h + "." + F, function () { G() }) }, getInline: function (c, d) { if (G(), c.src) { var e = b.st.inline, f = a(c.src); if (f.length) { var g = f[0].parentNode; g && g.tagName && (D || (C = e.hiddenClass, D = x(C), C = "mfp-" + C), E = f.after(D).detach().removeClass(C)), b.updateStatus("ready") } else b.updateStatus("error", e.tNotFound), f = a("<div>"); return c.inlineElement = f, f } return b.updateStatus("ready"), b._parseMarkup(d, {}, c), d } } }); var H, I = "ajax", J = function () { H && a(document.body).removeClass(H) }, K = function () { J(), b.req && b.req.abort() }; a.magnificPopup.registerModule(I, { options: { settings: null, cursor: "mfp-ajax-cur", tError: '<a href="%url%">The content</a> could not be loaded.' }, proto: { initAjax: function () { b.types.push(I), H = b.st.ajax.cursor, w(h + "." + I, K), w("BeforeChange." + I, K) }, getAjax: function (c) { H && a(document.body).addClass(H), b.updateStatus("loading"); var d = a.extend({ url: c.src, success: function (d, e, f) { var g = { data: d, xhr: f }; y("ParseAjax", g), b.appendContent(a(g.data), I), c.finished = !0, J(), b._setFocus(), setTimeout(function () { b.wrap.addClass(q) }, 16), b.updateStatus("ready"), y("AjaxContentAdded") }, error: function () { J(), c.finished = c.loadError = !0, b.updateStatus("error", b.st.ajax.tError.replace("%url%", c.src)) } }, b.st.ajax.settings); return b.req = a.ajax(d), "" } } }); var L, M = function (c) { if (c.data && void 0 !== c.data.title) return c.data.title; var d = b.st.image.titleSrc; if (d) { if (a.isFunction(d)) return d.call(b, c); if (c.el) return c.el.attr(d) || "" } return "" }; a.magnificPopup.registerModule("image", { options: { markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>', cursor: "mfp-zoom-out-cur", titleSrc: "title", verticalFit: !0, tError: '<a href="%url%">The image</a> could not be loaded.' }, proto: { initImage: function () { var c = b.st.image, d = ".image"; b.types.push("image"), w(m + d, function () { "image" === b.currItem.type && c.cursor && a(document.body).addClass(c.cursor) }), w(h + d, function () { c.cursor && a(document.body).removeClass(c.cursor), v.off("resize" + p) }), w("Resize" + d, b.resizeImage), b.isLowIE && w("AfterChange", b.resizeImage) }, resizeImage: function () { var a = b.currItem; if (a && a.img && b.st.image.verticalFit) { var c = 0; b.isLowIE && (c = parseInt(a.img.css("padding-top"), 10) + parseInt(a.img.css("padding-bottom"), 10)), a.img.css("max-height", b.wH - c) } }, _onImageHasSize: function (a) { a.img && (a.hasSize = !0, L && clearInterval(L), a.isCheckingImgSize = !1, y("ImageHasSize", a), a.imgHidden && (b.content && b.content.removeClass("mfp-loading"), a.imgHidden = !1)) }, findImageSize: function (a) { var c = 0, d = a.img[0], e = function (f) { L && clearInterval(L), L = setInterval(function () { return d.naturalWidth > 0 ? void b._onImageHasSize(a) : (c > 200 && clearInterval(L), c++, void (3 === c ? e(10) : 40 === c ? e(50) : 100 === c && e(500))) }, f) }; e(1) }, getImage: function (c, d) { var e = 0, f = function () { c && (c.img[0].complete ? (c.img.off(".mfploader"), c === b.currItem && (b._onImageHasSize(c), b.updateStatus("ready")), c.hasSize = !0, c.loaded = !0, y("ImageLoadComplete")) : (e++, 200 > e ? setTimeout(f, 100) : g())) }, g = function () { c && (c.img.off(".mfploader"), c === b.currItem && (b._onImageHasSize(c), b.updateStatus("error", h.tError.replace("%url%", c.src))), c.hasSize = !0, c.loaded = !0, c.loadError = !0) }, h = b.st.image, i = d.find(".mfp-img"); if (i.length) { var j = document.createElement("img"); j.className = "mfp-img", c.el && c.el.find("img").length && (j.alt = c.el.find("img").attr("alt")), c.img = a(j).on("load.mfploader", f).on("error.mfploader", g), j.src = c.src, i.is("img") && (c.img = c.img.clone()), j = c.img[0], j.naturalWidth > 0 ? c.hasSize = !0 : j.width || (c.hasSize = !1) } return b._parseMarkup(d, { title: M(c), img_replaceWith: c.img }, c), b.resizeImage(), c.hasSize ? (L && clearInterval(L), c.loadError ? (d.addClass("mfp-loading"), b.updateStatus("error", h.tError.replace("%url%", c.src))) : (d.removeClass("mfp-loading"), b.updateStatus("ready")), d) : (b.updateStatus("loading"), c.loading = !0, c.hasSize || (c.imgHidden = !0, d.addClass("mfp-loading"), b.findImageSize(c)), d) } } }); var N, O = function () { return void 0 === N && (N = void 0 !== document.createElement("p").style.MozTransform), N }; a.magnificPopup.registerModule("zoom", { options: { enabled: !1, easing: "ease-in-out", duration: 300, opener: function (a) { return a.is("img") ? a : a.find("img") } }, proto: { initZoom: function () { var a, c = b.st.zoom, d = ".zoom"; if (c.enabled && b.supportsTransition) { var e, f, g = c.duration, j = function (a) { var b = a.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"), d = "all " + c.duration / 1e3 + "s " + c.easing, e = { position: "fixed", zIndex: 9999, left: 0, top: 0, "-webkit-backface-visibility": "hidden" }, f = "transition"; return e["-webkit-" + f] = e["-moz-" + f] = e["-o-" + f] = e[f] = d, b.css(e), b }, k = function () { b.content.css("visibility", "visible") }; w("BuildControls" + d, function () { if (b._allowZoom()) { if (clearTimeout(e), b.content.css("visibility", "hidden"), a = b._getItemToZoom(), !a) return void k(); f = j(a), f.css(b._getOffset()), b.wrap.append(f), e = setTimeout(function () { f.css(b._getOffset(!0)), e = setTimeout(function () { k(), setTimeout(function () { f.remove(), a = f = null, y("ZoomAnimationEnded") }, 16) }, g) }, 16) } }), w(i + d, function () { if (b._allowZoom()) { if (clearTimeout(e), b.st.removalDelay = g, !a) { if (a = b._getItemToZoom(), !a) return; f = j(a) } f.css(b._getOffset(!0)), b.wrap.append(f), b.content.css("visibility", "hidden"), setTimeout(function () { f.css(b._getOffset()) }, 16) } }), w(h + d, function () { b._allowZoom() && (k(), f && f.remove(), a = null) }) } }, _allowZoom: function () { return "image" === b.currItem.type }, _getItemToZoom: function () { return b.currItem.hasSize ? b.currItem.img : !1 }, _getOffset: function (c) { var d; d = c ? b.currItem.img : b.st.zoom.opener(b.currItem.el || b.currItem); var e = d.offset(), f = parseInt(d.css("padding-top"), 10), g = parseInt(d.css("padding-bottom"), 10); e.top -= a(window).scrollTop() - f; var h = { width: d.width(), height: (u ? d.innerHeight() : d[0].offsetHeight) - g - f }; return O() ? h["-moz-transform"] = h.transform = "translate(" + e.left + "px," + e.top + "px)" : (h.left = e.left, h.top = e.top), h } } }); var P = "iframe", Q = "//about:blank", R = function (a) { if (b.currTemplate[P]) { var c = b.currTemplate[P].find("iframe"); c.length && (a || (c[0].src = Q), b.isIE8 && c.css("display", a ? "block" : "none")) } }; a.magnificPopup.registerModule(P, { options: { markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>', srcAction: "iframe_src", patterns: { youtube: { index: "youtube.com", id: "v=", src: "//www.youtube.com/embed/%id%?autoplay=1" }, vimeo: { index: "vimeo.com/", id: "/", src: "//player.vimeo.com/video/%id%?autoplay=1" }, gmaps: { index: "//maps.google.", src: "%id%&output=embed" } } }, proto: { initIframe: function () { b.types.push(P), w("BeforeChange", function (a, b, c) { b !== c && (b === P ? R() : c === P && R(!0)) }), w(h + "." + P, function () { R() }) }, getIframe: function (c, d) { var e = c.src, f = b.st.iframe; a.each(f.patterns, function () { return e.indexOf(this.index) > -1 ? (this.id && (e = "string" == typeof this.id ? e.substr(e.lastIndexOf(this.id) + this.id.length, e.length) : this.id.call(this, e)), e = this.src.replace("%id%", e), !1) : void 0 }); var g = {}; return f.srcAction && (g[f.srcAction] = e), b._parseMarkup(d, g, c), b.updateStatus("ready"), d } } }); var S = function (a) { var c = b.items.length; return a > c - 1 ? a - c : 0 > a ? c + a : a }, T = function (a, b, c) { return a.replace(/%curr%/gi, b + 1).replace(/%total%/gi, c) }; a.magnificPopup.registerModule("gallery", { options: { enabled: !1, arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>', preload: [0, 2], navigateByImgClick: !0, arrows: !0, tPrev: "Previous (Left arrow key)", tNext: "Next (Right arrow key)", tCounter: "%curr% of %total%" }, proto: { initGallery: function () { var c = b.st.gallery, e = ".mfp-gallery"; return b.direction = !0, c && c.enabled ? (f += " mfp-gallery", w(m + e, function () { c.navigateByImgClick && b.wrap.on("click" + e, ".mfp-img", function () { return b.items.length > 1 ? (b.next(), !1) : void 0 }), d.on("keydown" + e, function (a) { 37 === a.keyCode ? b.prev() : 39 === a.keyCode && b.next() }) }), w("UpdateStatus" + e, function (a, c) { c.text && (c.text = T(c.text, b.currItem.index, b.items.length)) }), w(l + e, function (a, d, e, f) { var g = b.items.length; e.counter = g > 1 ? T(c.tCounter, f.index, g) : "" }), w("BuildControls" + e, function () { if (b.items.length > 1 && c.arrows && !b.arrowLeft) { var d = c.arrowMarkup, e = b.arrowLeft = a(d.replace(/%title%/gi, c.tPrev).replace(/%dir%/gi, "left")).addClass(s), f = b.arrowRight = a(d.replace(/%title%/gi, c.tNext).replace(/%dir%/gi, "right")).addClass(s); e.click(function () { b.prev() }), f.click(function () { b.next() }), b.container.append(e.add(f)) } }), w(n + e, function () { b._preloadTimeout && clearTimeout(b._preloadTimeout), b._preloadTimeout = setTimeout(function () { b.preloadNearbyImages(), b._preloadTimeout = null }, 16) }), void w(h + e, function () { d.off(e), b.wrap.off("click" + e), b.arrowRight = b.arrowLeft = null })) : !1 }, next: function () { b.direction = !0, b.index = S(b.index + 1), b.updateItemHTML() }, prev: function () { b.direction = !1, b.index = S(b.index - 1), b.updateItemHTML() }, goTo: function (a) { b.direction = a >= b.index, b.index = a, b.updateItemHTML() }, preloadNearbyImages: function () { var a, c = b.st.gallery.preload, d = Math.min(c[0], b.items.length), e = Math.min(c[1], b.items.length); for (a = 1; a <= (b.direction ? e : d) ; a++) b._preloadItem(b.index + a); for (a = 1; a <= (b.direction ? d : e) ; a++) b._preloadItem(b.index - a) }, _preloadItem: function (c) { if (c = S(c), !b.items[c].preloaded) { var d = b.items[c]; d.parsed || (d = b.parseEl(c)), y("LazyLoad", d), "image" === d.type && (d.img = a('<img class="mfp-img" />').on("load.mfploader", function () { d.hasSize = !0 }).on("error.mfploader", function () { d.hasSize = !0, d.loadError = !0, y("LazyLoadError", d) }).attr("src", d.src)), d.preloaded = !0 } } } }); var U = "retina"; a.magnificPopup.registerModule(U, { options: { replaceSrc: function (a) { return a.src.replace(/\.\w+$/, function (a) { return "@2x" + a }) }, ratio: 1 }, proto: { initRetina: function () { if (window.devicePixelRatio > 1) { var a = b.st.retina, c = a.ratio; c = isNaN(c) ? c() : c, c > 1 && (w("ImageHasSize." + U, function (a, b) { b.img.css({ "max-width": b.img[0].naturalWidth / c, width: "100%" }) }), w("ElementParse." + U, function (b, d) { d.src = a.replaceSrc(d, c) })) } } } }), A() });


    var app = angular.module('rylew', ['ngRoute', 'angular-toArrayFilter'] );

    /**
     * Configure the Routes
     */
    app.config(['$routeProvider', function ($routeProvider) {
      $routeProvider
        // Home
        .when("/", {templateUrl: "partials/home.html", controller: "PageCtrl"})
        // Pages
        .when("/about", { templateUrl: "partials/about.html", controller: "PageCtrl" })
        .when("/projects", { templateUrl: "partials/projects.html", controller: "PageCtrl" })
        .when("/places", { templateUrl: "partials/places.html", controller: "PageCtrl" })
        .when("/contact", { templateUrl: "partials/contact.html", controller: "PageCtrl" })

            //GitHub Viewer
            .when("/ghv/main", {
                templateUrl: "partials/githubBrowser/main.html",
                controller: "MainController",
                message: 'Viewing main'
            })
            .when("/ghv/user/:username", { // : denotes a url parameter
                templateUrl: "partials/githubBrowser/user.html",
                controller: "UserController",
                message: 'Viewing user'
            })
            .when("/ghv/repo/:username/:reponame", { // :  denotes a url parameter
                templateUrl: "partials/githubBrowser/repo.html",
                controller: "RepoController",
                message: 'Viewing repo'
            })


        // else 404
        .otherwise("/404", {templateUrl: "partials/404.html", controller: "PageCtrl"});
    }]);


    /**
     * Controls all other Pages
     */
    app.controller('PageCtrl', function (/* $scope, $location, $http */) {
     // console.log("Page Controller reporting for duty.");

    });


    app.controller('FooterCtrl', function ($scope) {
       // $scope.year = Date();

    });


    //bootstrap nav menu hide on click
    $(document).on('click', '.navbar-collapse.in', function (e) {
        if ($(e.target).is('a')) {
            $(this).collapse('hide');
        }
    });

    $(window).scroll(function () {
        if ($(document).scrollTop() > 50) {
            $('nav').addClass('shrink');
        } else {
            $('nav').removeClass('shrink');
        }
    });
!function (e, t) { "function" == typeof define && define.amd ? define(t) : "object" == typeof exports ? module.exports = t(require, exports, module) : e.ScrollReveal = t() }(this, function (e, t, n) { return function () { "use strict"; var e, t, n; this.ScrollReveal = function () { function i(n) { return "undefined" == typeof this || Object.getPrototypeOf(this) !== i.prototype ? new i(n) : (e = this, e.tools = new t, e.isSupported() ? (e.tools.extend(e.defaults, n || {}), o(e.defaults), e.store = { elements: {}, containers: [] }, e.sequences = {}, e.history = [], e.uid = 0, e.initialized = !1) : "undefined" != typeof console && null !== console, e) } function o(t) { var n = t.container; return n && "string" == typeof n ? t.container = window.document.querySelector(n) : (n && !e.tools.isNode(n) && (t.container = null), null == n && (t.container = window.document.documentElement), t.container) } function r() { return ++e.uid } function s(t, n) { t.config ? t.config = e.tools.extendClone(t.config, n) : t.config = e.tools.extendClone(e.defaults, n), "top" === t.config.origin || "bottom" === t.config.origin ? t.config.axis = "Y" : t.config.axis = "X", "top" !== t.config.origin && "left" !== t.config.origin || (t.config.distance = "-" + t.config.distance) } function a(e) { var t = window.getComputedStyle(e.domEl); e.styles || (e.styles = { transition: {}, transform: {}, computed: {} }, e.styles.inline = e.domEl.getAttribute("style") || "", e.styles.inline += "; visibility: visible; ", e.styles.computed.opacity = t.opacity, t.transition && "all 0s ease 0s" != t.transition ? e.styles.computed.transition = t.transition + ", " : e.styles.computed.transition = ""), e.styles.transition.instant = l(e, 0), e.styles.transition.delayed = l(e, e.config.delay), e.styles.transform.initial = " -webkit-transform:", e.styles.transform.target = " -webkit-transform:", c(e), e.styles.transform.initial += "transform:", e.styles.transform.target += "transform:", c(e) } function l(e, t) { var n = e.config; return "-webkit-transition: " + e.styles.computed.transition + "-webkit-transform " + n.duration / 1e3 + "s " + n.easing + " " + t / 1e3 + "s, opacity " + n.duration / 1e3 + "s " + n.easing + " " + t / 1e3 + "s; transition: " + e.styles.computed.transition + "transform " + n.duration / 1e3 + "s " + n.easing + " " + t / 1e3 + "s, opacity " + n.duration / 1e3 + "s " + n.easing + " " + t / 1e3 + "s; " } function c(e) { var t = e.config, n = e.styles.transform; parseInt(t.distance) && (n.initial += " translate" + t.axis + "(" + t.distance + ")", n.target += " translate" + t.axis + "(0)"), t.scale && (n.initial += " scale(" + t.scale + ")", n.target += " scale(1)"), t.rotate.x && (n.initial += " rotateX(" + t.rotate.x + "deg)", n.target += " rotateX(0)"), t.rotate.y && (n.initial += " rotateY(" + t.rotate.y + "deg)", n.target += " rotateY(0)"), t.rotate.z && (n.initial += " rotateZ(" + t.rotate.z + "deg)", n.target += " rotateZ(0)"), n.initial += "; opacity: " + t.opacity + ";", n.target += "; opacity: " + e.styles.computed.opacity + ";" } function f(t) { var n = t.config.container; n && -1 == e.store.containers.indexOf(n) && e.store.containers.push(t.config.container), e.store.elements[t.id] = t } function u(t, n, i) { var o = { selector: t, config: n, interval: i }; e.history.push(o) } function d() { if (e.isSupported()) { p(); for (var t = 0; t < e.store.containers.length; t++) e.store.containers[t].addEventListener("scroll", y), e.store.containers[t].addEventListener("resize", y); e.initialized || (window.addEventListener("scroll", y), window.addEventListener("resize", y), e.initialized = !0) } return e } function y() { n(p) } function m() { var t, n, i, o; e.tools.forOwn(e.sequences, function (r) { o = e.sequences[r], t = !1; for (var s = 0; s < o.elemIds.length; s++) i = o.elemIds[s], n = e.store.elements[i], O(n) && !t && (t = !0); o.active = t }) } function p() { var t, n; m(), e.tools.forOwn(e.store.elements, function (i) { n = e.store.elements[i], t = b(n), v(n) ? (t ? n.domEl.setAttribute("style", n.styles.inline + n.styles.transform.target + n.styles.transition.delayed) : n.domEl.setAttribute("style", n.styles.inline + n.styles.transform.target + n.styles.transition.instant), w("reveal", n, t), n.revealing = !0, n.seen = !0, n.sequence && g(n, t)) : h(n) && (n.domEl.setAttribute("style", n.styles.inline + n.styles.transform.initial + n.styles.transition.instant), w("reset", n), n.revealing = !1) }) } function g(t, n) { var i = 0, o = 0, r = e.sequences[t.sequence.id]; r.blocked = !0, n && "onload" == t.config.useDelay && (o = t.config.delay), t.sequence.timer && (i = Math.abs(t.sequence.timer.started - new Date), window.clearTimeout(t.sequence.timer)), t.sequence.timer = { started: new Date }, t.sequence.timer.clock = window.setTimeout(function () { r.blocked = !1, t.sequence.timer = null, y() }, Math.abs(r.interval) + o - i) } function w(e, t, n) { var i = 0, o = 0, r = "after"; switch (e) { case "reveal": o = t.config.duration, n && (o += t.config.delay), r += "Reveal"; break; case "reset": o = t.config.duration, r += "Reset" } t.timer && (i = Math.abs(t.timer.started - new Date), window.clearTimeout(t.timer.clock)), t.timer = { started: new Date }, t.timer.clock = window.setTimeout(function () { t.config[r](t.domEl), t.timer = null }, o - i) } function v(t) { if (t.sequence) { var n = e.sequences[t.sequence.id]; return n.active && !n.blocked && !t.revealing && !t.disabled } return O(t) && !t.revealing && !t.disabled } function b(t) { var n = t.config.useDelay; return "always" === n || "onload" === n && !e.initialized || "once" === n && !t.seen } function h(t) { if (t.sequence) { var n = e.sequences[t.sequence.id]; return !n.active && t.config.reset && t.revealing && !t.disabled } return !O(t) && t.config.reset && t.revealing && !t.disabled } function x(e) { return { width: e.clientWidth, height: e.clientHeight } } function q(e) { if (e && e !== window.document.documentElement) { var t = E(e); return { x: e.scrollLeft + t.left, y: e.scrollTop + t.top } } return { x: window.pageXOffset, y: window.pageYOffset } } function E(e) { var t = 0, n = 0, i = e.offsetHeight, o = e.offsetWidth; do isNaN(e.offsetTop) || (t += e.offsetTop), isNaN(e.offsetLeft) || (n += e.offsetLeft); while (e = e.offsetParent); return { top: t, left: n, height: i, width: o } } function O(e) { function t() { var t = c + a * s, n = f + l * s, i = u - a * s, y = d - l * s, m = r.y + e.config.viewOffset.top, p = r.x + e.config.viewOffset.left, g = r.y - e.config.viewOffset.bottom + o.height, w = r.x - e.config.viewOffset.right + o.width; return g > t && i > m && n > p && w > y } function n() { return "fixed" === window.getComputedStyle(e.domEl).position } var i = E(e.domEl), o = x(e.config.container), r = q(e.config.container), s = e.config.viewFactor, a = i.height, l = i.width, c = i.top, f = i.left, u = c + a, d = f + l; return t() || n() } return i.prototype.defaults = { origin: "bottom", distance: "20px", duration: 500, delay: 0, rotate: { x: 0, y: 0, z: 0 }, opacity: 0, scale: .9, easing: "cubic-bezier(0.6, 0.2, 0.1, 1)", container: null, mobile: !0, reset: !1, useDelay: "always", viewFactor: .2, viewOffset: { top: 0, right: 0, bottom: 0, left: 0 }, afterReveal: function (e) { }, afterReset: function (e) { } }, i.prototype.isSupported = function () { var e = document.documentElement.style; return "WebkitTransition" in e && "WebkitTransform" in e || "transition" in e && "transform" in e }, i.prototype.reveal = function (t, n, i, l) { var c, y, m, p, g, w; if (c = n && n.container ? o(n) : e.defaults.container, y = e.tools.isNode(t) ? [t] : Array.prototype.slice.call(c.querySelectorAll(t)), !y.length) return e; n && "number" == typeof n && (i = n, n = {}), i && "number" == typeof i && (w = r(), g = e.sequences[w] = { id: w, interval: i, elemIds: [], active: !1 }); for (var v = 0; v < y.length; v++) p = y[v].getAttribute("data-sr-id"), p ? m = e.store.elements[p] : (m = { id: r(), domEl: y[v], seen: !1, revealing: !1 }, m.domEl.setAttribute("data-sr-id", m.id)), g && (m.sequence = { id: g.id, index: g.elemIds.length }, g.elemIds.push(m.id)), s(m, n || {}), a(m), f(m), e.tools.isMobile() && !m.config.mobile || !e.isSupported() ? (m.domEl.setAttribute("style", m.styles.inline), m.disabled = !0) : m.revealing || m.domEl.setAttribute("style", m.styles.inline + m.styles.transform.initial); return !l && e.isSupported() && (u(t, n), e.initTimeout && window.clearTimeout(e.initTimeout), e.initTimeout = window.setTimeout(d, 0)), e }, i.prototype.sync = function () { if (e.history.length && e.isSupported()) { for (var t = 0; t < e.history.length; t++) { var n = e.history[t]; e.reveal(n.selector, n.config, n.interval, !0) } d() } return e }, i }(), t = function () { function e() { } return e.prototype.isObject = function (e) { return null !== e && "object" == typeof e && e.constructor == Object }, e.prototype.isNode = function (e) { return "object" == typeof Node ? e instanceof Node : e && "object" == typeof e && "number" == typeof e.nodeType && "string" == typeof e.nodeName }, e.prototype.forOwn = function (e, t) { if (!this.isObject(e)) throw new TypeError('Expected "object", but received "' + typeof e + '".'); for (var n in e) e.hasOwnProperty(n) && t(n) }, e.prototype.extend = function (e, t) { return this.forOwn(t, function (n) { this.isObject(t[n]) ? (e[n] && this.isObject(e[n]) || (e[n] = {}), this.extend(e[n], t[n])) : e[n] = t[n] }.bind(this)), e }, e.prototype.extendClone = function (e, t) { return this.extend(this.extend({}, e), t) }, e.prototype.isMobile = function () { return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) }, e }(), n = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame }.call(this), this.ScrollReveal });

// angular.module('rylew', ['angular-toArrayFilter'])

angular.module('angular-toArrayFilter', [])

.filter('toArray', function () {
    return function (obj, addKey) {
        if (!angular.isObject(obj)) return obj;
        if (addKey === false) {
            return Object.keys(obj).map(function (key) {
                return obj[key];
            });
        } else {
            return Object.keys(obj).map(function (key) {
                var value = obj[key];
                return angular.isObject(value) ?
                  Object.defineProperty(value, '$key', { enumerable: false, value: key }) :
          { $key: key, $value: value };
            });
        }
    };
});




function render(dataset) {

    // Dimensions for the chart: height, width, and space b/t the bars
    var margins = { top: 30, right: 50, bottom: 30, left: 50 }
    var height = 400 - margins.left - margins.right,
        width = 700 - margins.top - margins.bottom,
        barPadding = 5

    // Create a scale for the y-axis based on data
    // >> Domain - min and max values in the dataset
    // >> Range - physical range of the scale (reversed)
    var yScale = d3.scale.linear()
      .domain([0, d3.max(dataset, function (d) {
          return d.snow;
      })])
      .range([height, 0]);

    // Implements the scale as an actual axis
    // >> Orient - places the axis on the left of the graph
    // >> Ticks - number of points on the axis, automated
    var yAxis = d3.svg.axis()
      .scale(yScale)
      .orient('left')
      .ticks(5);

    // Creates a scale for the x-axis based on city names
    var xScale = d3.scale.ordinal()
      .domain(dataset.map(function (d) {
          return d.city;
      }))
      .rangeRoundBands([0, width], .1);

    // Creates an axis based off the xScale properties
    var xAxis = d3.svg.axis()
      .scale(xScale)
      .orient('bottom');

    // Creates the initial space for the chart
    // >> Select - grabs the empty <div> above this script
    // >> Append - places an <svg> wrapper inside the div
    // >> Attr - applies our height & width values from above
    var chart = d3.select('.barChart')
      .append('svg').attr('class', 'svgBarChart')
      .attr('width', width + margins.left + margins.right)
      .attr('height', height + margins.top + margins.bottom)
      .append('g')
      .attr('transform', 'translate(' + margins.left + ',' + margins.top + ')');


    var tooltip = d3.select('body').append('div')
    .style('position', 'absolute')
    .style('padding', '0 10px')
    .style('background', 'white')
    .style('opacity', 0)


    // For each value in our dataset, places and styles a bar on the chart

    // Step 1: selectAll.data.enter.append
    // >> Loops through the dataset and appends a rectangle for each value
    chart.selectAll('rect')
      .data(dataset)
      .enter()
      .append('rect')
        .attr('class', 'barChartMouseover()')
      // Step 2: X & Y
      // >> X - Places the bars in horizontal order, based on number of
      //        points & the width of the chart
      // >> Y - Places vertically based on scale
      .attr('x', function (d, i) {
          return xScale(d.city);
      })
      .attr('y', function (d) {
          return yScale(d.snow);
      })
      .on('mouseover', function (d) {

          tooltip.transition()
              .style('opacity', .7)

          tooltip.html(d.snow.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + ' lines')
              .style('left', (d3.event.pageX - 35) + 'px')
              .style('top', (d3.event.pageY - 30) + 'px')

      })
      .on('mouseout', function (d) {

          tooltip.transition()
              .style('opacity', 0)
      })



      // Step 3: Height & Width
      // >> Width - Based on barpadding and number of points in dataset
      // >> Height - Scale and height of the chart area
      .attr('width', (width / dataset.length) - barPadding)
      .attr('height', function (d) {
          return height - yScale(d.snow);
      })
      .attr('fill', 'steelblue')

      // Step 4: Info for hover interaction
      .attr('class', function (d) {
          return d.city;
      })
      .attr('id', function (d) {
          return d.snow;
      });

    // Renders the yAxis once the chart is finished
    // >> Moves it to the left 10 pixels so it doesn't overlap
    chart.append('g')
      .attr('class', 'axis')
      .attr('transform', 'translate(-10, 0)')
      .call(yAxis);

    // Appends the yAxis
    chart.append('g')
      .attr('class', 'axis')
      .attr('transform', 'translate(0,' + (height + 10) + ')')
      .call(xAxis)
     .selectAll("text")
            .style("text-anchor", "end")
            .attr("dx", "-.8em")
            .attr("dy", ".15em")
            .attr("transform", function (d) {
                return "rotate(-65)"
            }).attr("class", "langTotalText");

    // Adds yAxis title
    chart.append('text')
      .text('Lines of Code')
      .attr('transform', 'translate(-70, -20)');
}




var svg = d3.select("#chart")
    .append("svg").attr("ng-show", "chartMessage==null")
    .append("g")

svg.append("g")
    .attr("class", "slices");
svg.append("g")
    .attr("class", "labelName");
svg.append("g")
    .attr("class", "labelValue");
svg.append("g")
    .attr("class", "lines");

var width = 960 / 2,
    height = 450 / 2,
    radius = (Math.min(width, height) / 2) + 20;

var pie = d3.layout.pie()
    .sort(null)
    .value(function (d) {
        return d.value;
    });

var arc = d3.svg.arc()
    .outerRadius(radius * 0.8)
    .innerRadius(radius * 0.4);

var outerArc = d3.svg.arc()
    .innerRadius(radius * 0.9)
    .outerRadius(radius * 0.9);

var legendRectSize = (radius * 0.05);
var legendSpacing = radius * 0.02;


var div = d3.select("body").append("div").attr("class", "toolTip");



//var width = 960 / 2,
//    height = 450 / 2,
//    radius = (Math.min(width, height) / 2) + 20;

svg.attr("transform", "translate(" + width / 2 + "," + ((height / 2) + 55) + ")");

var colorRange = d3.scale.category20();
var color = d3.scale.ordinal()
    .range(colorRange.range());


function change(data) {

    /* ------- PIE SLICES -------*/
    var slice = svg.select(".slices").selectAll("path.slice")
        .data(pie(data), function (d) { return d.data.label });

    slice.enter()
        .insert("path")
        .style("fill", function (d) { return color(d.data.label); })
        .attr("class", "slice");

    slice
        .transition().duration(1000)
        .attrTween("d", function (d) {
            this._current = this._current || d;
            var interpolate = d3.interpolate(this._current, d);
            this._current = interpolate(0);
            return function (t) {
                return arc(interpolate(t));
            };
        })
    slice
        .on("mousemove", function (d) {
            div.style("left", d3.event.pageX + 10 + "px");
            div.style("top", d3.event.pageY - 25 + "px");
            div.style("display", "inline-block");
            div.html((d.data.label) + "<br>" + (d.data.value) + "%");
        });
    slice
        .on("mouseout", function (d) {
            div.style("display", "none");
        });

    slice.exit()
        .remove();



    /* ------- SLICE TO TEXT POLYLINES -------*/

    var polyline = svg.select(".lines").selectAll("polyline")
        .data(pie(data), function (d) { return d.data.label });

    polyline.enter()
        .append("polyline");

    polyline.transition().duration(1000)
        .attrTween("points", function (d) {
            this._current = this._current || d;
            var interpolate = d3.interpolate(this._current, d);
            this._current = interpolate(0);
            return function (t) {
                var d2 = interpolate(t);
                var pos = outerArc.centroid(d2);
                pos[0] = radius * 0.95 * (midAngle(d2) < Math.PI ? 1 : -1);
                return [arc.centroid(d2), outerArc.centroid(d2), pos];
            };
        });

    polyline.exit()
        .remove();



    /* ------- TEXT LABELS -------*/

    var text = svg.select(".labelName").selectAll("text")
        .data(pie(data), function (d) { return d.data.label })
	  .attr("dy", ".35em")
	  .attr('text-anchor', 'middle')
	  .text(function (d) { return (d.data.cars > 10000) ? d.data.make : null; });

        
    text.enter()
        .append("text")
        .attr("dy", ".35em")
        .text(function (d) {
            return (d.data.label + ": " + d.value + "%");

        })
         .selectAll("text")
            .style("text-anchor", "end")
            .attr("dx", "-.8em")
            .attr("dy", ".15em")
            .attr("transform", function (d) {
                return "rotate(-65)"
            })     ;




    function midAngle(d) {
        return d.startAngle + (d.endAngle - d.startAngle) / 2;
    }

    text
        .transition().duration(1000)
        .attrTween("transform", function (d) {
            this._current = this._current || d;
            var interpolate = d3.interpolate(this._current, d);
            this._current = interpolate(0);
            return function (t) {
                var d2 = interpolate(t);
                var pos = outerArc.centroid(d2);
                pos[0] = radius * (midAngle(d2) < Math.PI ? 1 : -1);
                return "translate(" + pos + ")";
            };
        })
        .styleTween("text-anchor", function (d) {
            this._current = this._current || d;
            var interpolate = d3.interpolate(this._current, d);
            this._current = interpolate(0);
            return function (t) {
                var d2 = interpolate(t);
                return midAngle(d2) < Math.PI ? "start" : "end";
            };
        })
        .text(function (d) {
            return (d.data.label + ": " + d.value + "%");
        });


    text.exit()
        .remove();


    alpha = .8;
    spacing = 11;

    function relax() {
        again = false;
        text.each(function (d, i) {
            a = this; //reference to text label
            da = d3.select(a);
            y1 = da.attr("y");
            text.each(function (d, j) {
                b = this;
                // a & b are the same element and don't collide.
                if (a == b) return;
                db = d3.select(b);
                // a & b are on opposite sides of the chart and
                // don't collide
                if (da.attr("text-anchor") != db.attr("text-anchor")) return;
                // Now let's calculate the distance between
                // these elements. 
                y2 = db.attr("y");
                deltaY = y1 - y2;

                // If spacing is greater than our specified spacing,
                // they don't collide.
                if (Math.abs(deltaY) > spacing) return;

                // If the labels collide, we'll push each 
                // of the two labels up and down a little bit.
                again = true;
                sign = deltaY > 0 ? 1 : -1;
                adjust = sign * alpha;
                da.attr("y", +y1 + adjust);
                db.attr("y", +y2 - adjust);
            });

        });
        // Adjust our line leaders here
        // so that they follow the labels. 
        if (again) {
            //debugger;
            labelElements = text[0];
            //  debugger;
            polyline.attr("y2", function (d, i) {
                //  debugger;
                labelForLine = d3.select(labelElements[i]);
                return labelForLine.attr("y");
            });




            setTimeout(relax, 20)
        }
    }

    relax();



};



var svg = dimple.newSvg('#chart', "100%", "85%");

function dimpleStacked(data) {
   // debugger;

    //d3.tsv("/content/example_data.tsv", function (data) {
    var myChart = new dimple.chart(svg, data);
    //myChart.setBounds(60, 30, 900, 400);

    var x = myChart.addCategoryAxis("x", "User");
    //x.addOrderRule(['Jan', 'Feb', 'Mar', 'Apr']);
    var y = myChart.addMeasureAxis("y", "Tasks");

    // In order to deal with cases where order differs by column 
    // you need to include it in your series definition
    var s = myChart.addSeries(["Tasks", "MyValue" ], dimple.plot.bar);

    s.getTooltipText = function (e) {
      //  debugger;
        var AorD = e.aggField[1] == "Additions" ? "Additions" : "Deletions";

        return [
            e.cx + " had " + e.aggField[0] + " " + AorD
        ];
    };
    d3.svg.axis()
    .tickFormat(d3.format("d"));

    // Your function approach would also work, but as it is the default 
    // handling for a numeric column you can just specify order like this
    s.addOrderRule("MyValue");

    y.showPercent = false;
    y.hidden = false;
   // y.overrideMax = 500;
    myChart.assignColor('Additions', '#c1f4cb');
    myChart.assignColor('Deletions', '#f2bba2');

    myChart.addLegend(60, 10, 510, 20, "right");
    myChart.draw();

    // If you don't want the order to show in the tooltip
    // the easiest way is to remove it here once the chart is drawn
    s.categoryFields = ["User"];




}
(function () {

    //Revealing module pattern
    //Get user and repos for user
    var github = function ($http) {
        var clientSecret = '?client_id=9b254584c151259f146a&client_secret=552ead4d53b54ebd99adf72edd017626c5f496cf';

        //Return github user profile
        var getUser = function (username) {
            return $http.get("https://api.github.com/users/" + username + clientSecret)
                  .then(function (response) {
                      return response.data;
                  });
        }

        //return repos for user
        var getRepos = function (user) {

            return $http.get(user.repos_url + clientSecret)
                        .then(function (response) {
                            return response.data;
                        });
        };


        var getRepoDetails = function (username, reponame) {

            var repo;
            var repoUrl = "https://api.github.com/repos/" + username + "/" + reponame;

            //Chained promises
            //each return is the input to the next success function
            return $http.get(repoUrl + clientSecret)
                        .then(function (response) {
                            repo = response.data;
                            return $http.get(repoUrl + "/contributors" + clientSecret);
                        })
                        .then(function (response) {
                            repo.contributors = response.data;
                            return repo;
                        });
        };


        //return repos for user
        var getLanguages = function (langURL) {

            return $http.get(langURL + clientSecret)
                        .then(function (response) {
                            return response.data;
                        });
        };

        return {
            getUser: getUser,
            getRepos: getRepos,
            getRepoDetails: getRepoDetails,
            getLanguages: getLanguages
        };

    }



    var module = angular.module("rylew"); //no second parameter because we're not creating a module, just trying to create a module
    module.factory("github", github); //register the service with angular
    // (name of service , name of function that returns function api object ) 





})();
(function () {

    app.controller('MainController', function ($scope, $interval, $location, $routeParams) {

        //not needed
        var onError = function (reason) {
            $scope.error = "Could not fetch the data from GitHub";

        };

        $scope.search = function (username) {
            $location.path("/ghv/user/" + username);
        };
    });


})();
(function () {

    /*Repo Controller*/
    app.controller('RepoController', function ($scope, github, $routeParams,  $http, $timeout) {

        var onContributors = function (data) {
            $scope.repo = data;
          
            $scope.contributorTotal = data.contributors.length;
            $scope.loading = null;

            var clientSecret = '?client_id=9b254584c151259f146a&client_secret=552ead4d53b54ebd99adf72edd017626c5f496cf';
            var langURL = "https://api.github.com/repos/" + username + "/" + reponame + '/stats/contributors' + clientSecret;
            
            //Statistics come back with 202 status code while github computes
            // Poll until status is 200
             var doPoll = function () {
                    $http.get(langURL).then(function (response) {
                        if (response.status == 202) {
                            $scope.chartMessage = null;
                            $timeout(doPoll , 1000);
                        }
                        else if (response.status == 200) {
                            onStats(response);
                        }
                    });
                }
                doPoll();



        }; //end onContributors

        var onStats = function (data) {
            $scope.chartMessage = "resolved"
            $scope.commitStats = [];
            var responseData = data.data;
            var obj = {};
            for (var i = 0; i < responseData.length; i++) {
                obj = {};
                obj.a = 0, obj.d = 0, obj.author="", obj.total = 0;
                obj.author = responseData[i].author.login;
                obj.total = responseData[i].total;

                var weeks = responseData[i].weeks;

                for (var j = 0; j < responseData[i].weeks.length; j++) {
                    if (j == 0) {
                        $scope.firstDate = timeConverter( weeks[j].w ) ;
                    }

                    obj.a = obj.a + weeks[j].a;               
                    obj.d = obj.d + weeks[j].d;                    
                }
                $scope.commitStats.push(obj);

            }

            var chartData = [];
            

            $scope.statUserCount = 0;
            for (var i = $scope.commitStats.length-1; (i > ($scope.commitStats.length -6)) ; i--) {
                
     
                if ( ($scope.commitStats[i] != undefined) && i>=0) {
                    $scope.statUserCount++;
                    chartData.push(
                        {
                            Tasks: $scope.commitStats[i].a.toString(),
                            User: $scope.commitStats[i].author,
                            MyValue: "Additions"
                        }
                    );

                    chartData.push(
                     {
                         Tasks: $scope.commitStats[i].d.toString(),
                         User: $scope.commitStats[i].author.toString(),
                         MyValue: "Deletions"
                     }
                     );   

                }            
            }

            dimpleStacked(chartData);


        }; //end onStats

        var onError = function (reason) {
            $scope.error = reason;
        };

        //username and repo passed as URL route parameters from user.html
        var reponame = $routeParams.reponame;
        var username = $routeParams.username;

        github.getRepoDetails(username, reponame).then(onContributors, onError);

        $scope.loading = "loading";


        /* Convert unix time from github api to date */
        function timeConverter(UNIX_timestamp) {
            var a = new Date(UNIX_timestamp * 1000);
            var months = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
            var year = a.getFullYear();
            var month = months[a.getMonth()];
            var date = a.getDate();
            var hour = a.getHours();
            var min = a.getMinutes();
            var sec = a.getSeconds();
            //var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec;
            var time = getOrdinal(date) + ' ' + month + ' ' + year;
            return time;

            function getOrdinal(n) {
                var s = ["th", "st", "nd", "rd"],
                v = n % 100;
                return n + (s[(v - 20) % 10] || s[v] || s[0]);
            }
        }



    });
    /* End Repo Controller*/


})();


/* User Controller */

(function() {
     
    


app.controller('UserController', function ($scope, github, $routeParams, $http, $q) {
    $scope.repos = {};
    var a = [];
    var obj = {};

    function lookup(name) {
        for (var i = 0, len = a.length; i < len; i++) {
            if (a[i].city === name)
                return [true, i];
        }
        return [false];
    }


    //1.) Successful return of Github user
    var onUserComplete = function (data) {
        $scope.user = data;
        github.getRepos($scope.user).then(onRepos, onError);
    };

    // 2.) get all the repos
    var onRepos = function (data) {
        var clientSecret = '?client_id=9b254584c151259f146a&client_secret=552ead4d53b54ebd99adf72edd017626c5f496cf';

        $scope.repos = data;

        var promises = [];

        for (var i = 0; i < data.length; i++) {
            var langURL = data[i].languages_url;
            // var promise = $http.get(langURL + clientSecret);
            var promise = github.getLanguages(langURL);
            promises.push(promise);
        }
        $q.all(promises).then(onLanguages, onError);

    };

    // 3.) get and format programming language data
    var onLanguages = function (data) {
        $scope.langTotalCount = data.length;
        for (var i = 0; i < data.length; i++) {
            var o = data[i];
            $scope.repos[i].languages = o;
            Object.keys(o).forEach(function (key, index) {
                var lines = o[key];
                var b = lookup(key);
                if (!b[0]) {
                    a.push({ 'city': key, snow: lines });
                }
                else {

                    a[b[1]].snow = a[b[1]].snow + lines;
                }

            });


        }
        $scope.langTotals = a;

        a.sort(function (a, b) {
            return b.snow - a.snow;
        });

        render(a);
        $('rect').mouseenter(function () {
          //  debugger;
            $('#city').html(this.className.animVal);
            $('#inches').html($(this).attr('id').toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + ' lines');
        });

        $('.langTotalText').mouseenter(function () {
            var t = this.innerHTML;
            //debugger;
            var lines = $('rect.' + t)[0].id;
            $('#city').html(t);
            $('#inches').html(lines.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + ' lines');
           
        });

        //$('.langTotalText').mouseout(function () {
            
        //    var t = this.innerHTML;
        //    $('rect.' + t)[0].removeClass('textHovered');
        //    debugger;
        //});


        $scope.loading = null;
    }

    var onError = function (reason) {

        $scope.error = "Could not find this user or error returning data from GitHub.";
        $scope.chartMessage = "Error returning Github data.";

    };

    $scope.changeRepo = function (event) {

        var dataset = [];
        var total = 0;
        var x = event.currentTarget;
        var myVal;
        //  $scope.mycheck = true;
        angular.element(x).find('.languageSPAN').each(function () {
            myVal = parseInt(angular.element(this).attr("data-value"));
            total = total + myVal;
        });

        $scope.thisRepo = angular.element(x).find('a').text();


        // angular.element(x).find('input').attr('checked') = checked;
        angular.element(x).addClass("selected").siblings().removeClass("selected");
        angular.element(x).find('.languageSPAN').each(function () {
            var key = angular.element(this).attr("data-key");
            var percent = ((parseInt(angular.element(this).attr("data-value")) / total) * 100).toFixed(2);
            var o = { label: key, value: percent };
            dataset.push(o);
        });
        total = 0;


        if (dataset.length > 0) {
            $scope.chartMessage = null;
            change(dataset);
        }
        else {
            // debugger;
            $scope.chartMessage = "No languages associated with this repository.";
        }

    };


    $scope.loading = "loading";
    $scope.repoSortOrder = "-stargazers_count";
    github.getUser($routeParams.username).then(onUserComplete, onError);
    $scope.chartMessage = "Please select a repository row.";

    //selected new repository - update donut chart with new data



});



})();
