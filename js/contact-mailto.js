/**
 * Opens the default mail client with a prefilled message (no third-party APIs or redirects).
 */
(function () {
    'use strict';

    var MAX_MAILTO_LEN = 1950;

    function currentFormPack() {
        var lang =
            window.CaroI18n && typeof window.CaroI18n.getLang === 'function'
                ? window.CaroI18n.getLang()
                : 'es';
        var locales = window.CARO_LOCALES || {};
        return locales[lang] && locales[lang].form ? locales[lang].form : null;
    }

    function buildBody(name, email, message) {
        var pack = currentFormPack();
        var ln = (pack && pack.srName) || 'Name';
        var le = (pack && pack.srEmail) || 'Email';
        return ln + ': ' + name + '\n' + le + ': ' + email + '\n\n' + message;
    }

    function shrinkBodyToFit(to, subject, body) {
        var encSub = encodeURIComponent(subject);
        var prefix = 'mailto:' + to + '?subject=' + encSub + '&body=';
        if (prefix.length + encodeURIComponent(body).length <= MAX_MAILTO_LEN) {
            return prefix + encodeURIComponent(body);
        }
        var tail = '\n\n[…]';
        var b = body;
        while (prefix.length + encodeURIComponent(b + tail).length > MAX_MAILTO_LEN && b.length > 24) {
            b = b.slice(0, Math.floor(b.length * 0.82));
        }
        return prefix + encodeURIComponent(b + tail);
    }

    document.addEventListener('DOMContentLoaded', function () {
        var form = document.querySelector('form.contact-form[data-mailto]');
        if (!form) return;

        var to = form.getAttribute('data-mailto') || 'caroesquivelt@gmail.com';
        var subjectEl = form.querySelector('[data-i18n-form-subject]');
        var ok = document.getElementById('contact-form-success');

        form.addEventListener('submit', function (e) {
            e.preventDefault();
            var nameInput = form.querySelector('[name="name"]');
            var emailInput = form.querySelector('[name="email"]');
            var messageInput = form.querySelector('[name="message"]');
            var name = nameInput ? nameInput.value.trim() : '';
            var email = emailInput ? emailInput.value.trim() : '';
            var message = messageInput ? messageInput.value.trim() : '';
            var subject =
                subjectEl && subjectEl.value
                    ? subjectEl.value.trim()
                    : 'Mensaje desde la web';

            var body = buildBody(name, email, message);
            var href = shrinkBodyToFit(to, subject, body);

            window.location.href = href;

            if (ok) ok.hidden = false;
        });
    });
})();
