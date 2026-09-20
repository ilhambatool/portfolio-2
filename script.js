(function () {
    const root = document.documentElement;
    const toggleBtn = document.getElementById('theme-toggle');
    const STORAGE_KEY = 'theme';

    function getPreferredTheme() {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored === 'light' || stored === 'dark') return stored;
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }

    function applyTheme(theme) {
        if (theme === 'dark') {
            root.setAttribute('data-theme', 'dark');
        } else {
            root.removeAttribute('data-theme');
        }
        if (toggleBtn) {
            toggleBtn.setAttribute('aria-pressed', theme === 'dark');
        }
    }

    applyTheme(getPreferredTheme());

    if (toggleBtn) {
        toggleBtn.addEventListener('click', function () {
            const isDark = root.getAttribute('data-theme') === 'dark';
            const next = isDark ? 'light' : 'dark';
            localStorage.setItem(STORAGE_KEY, next);
            applyTheme(next);
        });
    }
})();