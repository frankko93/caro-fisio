/**
 * Applies CARO_LOCALES to the page, syncs ?lang= / ?locale= / ?lng=, exposes CaroI18n for linked apps.
 * Load after DOM-ready scripts that create content you patch (e.g. testimonial dots).
 */
(function (w, d) {
    'use strict';

    var STORAGE_KEY = 'caro_lang';
    var PARAM_KEYS = ['lang', 'locale', 'lng'];
    var DEFAULT_LANG = 'es';
    var SUPPORTED = ['es', 'it', 'en'];

    var locales = w.CARO_LOCALES || {};
    var currentLang = DEFAULT_LANG;

    function normalizeLang(code) {
        if (code == null || code === '') return null;
        var c = String(code).toLowerCase().slice(0, 2);
        if (SUPPORTED.indexOf(c) !== -1) return c;
        return null;
    }

    function getLangFromUrl() {
        var params = new URLSearchParams(w.location.search);
        for (var i = 0; i < PARAM_KEYS.length; i += 1) {
            var v = normalizeLang(params.get(PARAM_KEYS[i]));
            if (v) return v;
        }
        return null;
    }

    function getEffectiveLang() {
        return getLangFromUrl() || normalizeLang(w.localStorage.getItem(STORAGE_KEY)) || DEFAULT_LANG;
    }

    function deepGet(obj, path) {
        if (!obj || !path) return undefined;
        var parts = path.split('.');
        var o = obj;
        for (var i = 0; i < parts.length; i += 1) {
            if (o == null) return undefined;
            var k = parts[i];
            var n = parseInt(k, 10);
            if (!isNaN(n) && String(n) === k && Array.isArray(o)) {
                o = o[n];
            } else {
                o = o[k];
            }
        }
        return o;
    }

    function setMetaByName(name, content) {
        var el = d.querySelector('meta[name="' + name + '"]');
        if (el) el.setAttribute('content', content);
    }

    function setMetaByProperty(prop, content) {
        var el = d.querySelector('meta[property="' + prop + '"]');
        if (el) el.setAttribute('content', content);
    }

    function syncUrlLang(lang) {
        var u = new URL(w.location.href);
        PARAM_KEYS.forEach(function (k) {
            u.searchParams.delete(k);
        });
        if (lang && lang !== DEFAULT_LANG) {
            u.searchParams.set('lang', lang);
        }
        var qs = u.searchParams.toString();
        var path = u.pathname + (qs ? '?' + qs : '') + u.hash;
        w.history.replaceState(null, '', path);
    }

    function updateCrossPageLinks(lang) {
        d.querySelectorAll('[data-carolang-link]').forEach(function (a) {
            var rel = a.getAttribute('data-carolang-link');
            if (!rel) return;
            try {
                var u = new URL(rel, w.location.href);
                if (lang && lang !== DEFAULT_LANG) {
                    u.searchParams.set('lang', lang);
                } else {
                    u.searchParams.delete('lang');
                }
                var q = u.searchParams.toString();
                a.setAttribute('href', u.pathname + (q ? '?' + q : '') + (u.hash || ''));
            } catch (err) {
                /* keep href */
            }
        });
    }

    function applyCardLists(pack) {
        d.querySelectorAll('[data-i18n-list]').forEach(function (root) {
            var key = root.getAttribute('data-i18n-list');
            var items = deepGet(pack, key);
            if (!Array.isArray(items)) return;
            root.querySelectorAll('[data-i18n-item]').forEach(function (card) {
                var idx = parseInt(card.getAttribute('data-i18n-item'), 10);
                if (isNaN(idx) || !items[idx]) return;
                var data = items[idx];
                card.querySelectorAll('[data-i18n-field]').forEach(function (el) {
                    var field = el.getAttribute('data-i18n-field');
                    if (field && data[field] != null) {
                        el.textContent = data[field];
                    }
                });
            });
        });
    }

    function localizeTestimonialDots(lang) {
        var pack = locales[lang];
        var tpl = pack && pack.a11y && pack.a11y.testimonialDot;
        if (!tpl) return;
        var dots = d.querySelectorAll('.testimonials-carousel__dot');
        var total = dots.length;
        dots.forEach(function (btn, i) {
            btn.setAttribute(
                'aria-label',
                tpl.replace('{current}', String(i + 1)).replace('{total}', String(total))
            );
        });
    }

    function updateSwitcherUi(lang) {
        d.querySelectorAll('[data-carolang]').forEach(function (btn) {
            var code = normalizeLang(btn.getAttribute('data-carolang'));
            var on = code === lang;
            btn.setAttribute('aria-pressed', on ? 'true' : 'false');
            btn.classList.toggle('is-active', on);
        });
    }

    function applyLocale(lang) {
        var pack = locales[lang];
        if (!pack) return;

        currentLang = lang;
        var htmlLang = lang === 'en' ? 'en' : lang === 'it' ? 'it' : 'es';
        d.documentElement.lang = htmlLang;

        d.querySelectorAll('[data-i18n]').forEach(function (el) {
            var key = el.getAttribute('data-i18n');
            var val = deepGet(pack, key);
            if (val != null && typeof val === 'string') {
                el.textContent = val;
            }
        });

        d.querySelectorAll('[data-i18n-attr]').forEach(function (el) {
            var raw = el.getAttribute('data-i18n-attr');
            if (!raw) return;
            var pipe = raw.indexOf('|');
            if (pipe === -1) return;
            var attr = raw.slice(0, pipe).trim();
            var key = raw.slice(pipe + 1).trim();
            var val = deepGet(pack, key);
            if (val != null && typeof val === 'string') {
                el.setAttribute(attr, val);
            }
        });

        d.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
            var key = el.getAttribute('data-i18n-placeholder');
            var val = deepGet(pack, key);
            if (val != null) el.setAttribute('placeholder', val);
        });

        var m = pack.meta;
        if (m) {
            if (m.title) d.title = m.title;
            if (m.description) setMetaByName('description', m.description);
            if (m.ogTitle) setMetaByProperty('og:title', m.ogTitle);
            if (m.ogDescription) setMetaByProperty('og:description', m.ogDescription);
            if (m.ogLocale) setMetaByProperty('og:locale', m.ogLocale);
            if (m.twitterTitle) setMetaByName('twitter:title', m.twitterTitle);
            if (m.twitterDescription) setMetaByName('twitter:description', m.twitterDescription);
        }

        var ld = d.querySelector('script[type="application/ld+json"]');
        if (ld && m && m.jsonLdDescription) {
            try {
                var j = JSON.parse(ld.textContent);
                j.description = m.jsonLdDescription;
                ld.textContent = JSON.stringify(j);
            } catch (e) {
                /* ignore */
            }
        }

        var wa = d.querySelector('[data-i18n-whatsapp]');
        if (wa && pack.contact && pack.contact.whatsappHref) {
            wa.setAttribute('href', pack.contact.whatsappHref);
        }

        var subj = d.querySelector('[data-i18n-form-subject]');
        if (subj && pack.form && pack.form.emailSubject) {
            subj.value = pack.form.emailSubject;
        }

        applyCardLists(pack);

        var vpExp = d.querySelector('[data-path-flow-viewport][data-i18n-a11y="experience"]');
        if (vpExp && pack.a11y && pack.a11y.pathFlowExperience) {
            vpExp.setAttribute('aria-label', pack.a11y.pathFlowExperience);
        }
        var vpEdu = d.querySelector('[data-path-flow-viewport][data-i18n-a11y="education"]');
        if (vpEdu && pack.a11y && pack.a11y.pathFlowEducation) {
            vpEdu.setAttribute('aria-label', pack.a11y.pathFlowEducation);
        }

        var tcViewport = d.querySelector('.testimonials-carousel__viewport[data-i18n-carousel]');
        if (tcViewport && pack.a11y) {
            if (pack.a11y.carouselRegion) tcViewport.setAttribute('aria-label', pack.a11y.carouselRegion);
            if (pack.a11y.carouselRoleDesc) {
                tcViewport.setAttribute('aria-roledescription', pack.a11y.carouselRoleDesc);
            }
        }

        var dotsRoot = d.querySelector('[data-carousel-dots]');
        if (dotsRoot && pack.a11y && pack.a11y.testimonialsChoose) {
            dotsRoot.setAttribute('aria-label', pack.a11y.testimonialsChoose);
        }

        updateCrossPageLinks(lang);
        localizeTestimonialDots(lang);
        updateSwitcherUi(lang);
    }

    function setLang(lang, options) {
        options = options || {};
        var code = normalizeLang(lang) || DEFAULT_LANG;
        if (options.persist !== false) {
            try {
                w.localStorage.setItem(STORAGE_KEY, code);
            } catch (e) {
                /* private mode */
            }
        }
        applyLocale(code);
        if (options.syncUrl !== false) {
            syncUrlLang(code);
        }
    }

    function bindLangSwitchers() {
        d.querySelectorAll('[data-carolang]').forEach(function (btn) {
            btn.addEventListener('click', function () {
                var code = normalizeLang(btn.getAttribute('data-carolang'));
                if (!code) return;
                setLang(code, { persist: true, syncUrl: true });
            });
        });
    }

    w.CaroI18n = {
        STORAGE_KEY: STORAGE_KEY,
        PARAM_KEYS: PARAM_KEYS,
        DEFAULT_LANG: DEFAULT_LANG,
        SUPPORTED: SUPPORTED.slice(),
        normalizeLang: normalizeLang,
        getLang: function () {
            return currentLang;
        },
        getLangFromUrl: getLangFromUrl,
        getEffectiveLang: getEffectiveLang,
        /** Apply strings and optionally persist + update URL */
        setLang: setLang,
        applyLocale: applyLocale,
        /**
         * Append ?lang= to a path for links to other static pages or apps in this ecosystem.
         * Example: CaroI18n.withLang('tips.html') -> 'tips.html?lang=it'
         */
        withLang: function (path, lang) {
            var code = normalizeLang(lang != null ? lang : currentLang) || DEFAULT_LANG;
            try {
                var u = new URL(path, w.location.href);
                if (code !== DEFAULT_LANG) {
                    u.searchParams.set('lang', code);
                } else {
                    u.searchParams.delete('lang');
                }
                var q = u.searchParams.toString();
                return u.pathname + (q ? '?' + q : '') + (u.hash || '');
            } catch (e2) {
                return path;
            }
        }
    };

    d.addEventListener('DOMContentLoaded', function () {
        var lang = getEffectiveLang();
        if (getLangFromUrl()) {
            try {
                w.localStorage.setItem(STORAGE_KEY, lang);
            } catch (e3) {
                /* ignore */
            }
        }
        applyLocale(lang);
        bindLangSwitchers();
    });
})(window, document);
