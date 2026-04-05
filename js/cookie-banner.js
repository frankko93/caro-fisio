/**
 * Dismissible notice for localStorage (language) + third-party fonts; not a blocking CMP.
 */
(function () {
    'use strict';

    var STORAGE_KEY = 'caro_consent_notice_v1';

    document.addEventListener('DOMContentLoaded', function () {
        var root = document.documentElement;
        var btn = document.querySelector('[data-cookie-consent-accept]');
        if (!btn) {
            return;
        }
        btn.addEventListener('click', function () {
            try {
                localStorage.setItem(STORAGE_KEY, '1');
            } catch (e) {
                /* ignore */
            }
            root.classList.add('cookie-consent-dismissed');
        });
    });
})();
