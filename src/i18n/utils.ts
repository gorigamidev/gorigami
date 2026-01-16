// Client-side i18n implementation
// This runs in the browser and handles all translation logic

import en from './locales/en.json';
import es from './locales/es.json';

const translations = { en, es };

// Get current language (default to EN)
export function getLang(): 'en' | 'es' {
    if (typeof window === 'undefined') return 'en';

    const saved = localStorage.getItem('gorigami-lang');
    // Only return 'es' if explicitly set, otherwise default to 'en'
    return saved === 'es' ? 'es' : 'en';
}

export function setLang(lang: 'en' | 'es') {
    if (typeof window === 'undefined') return;
    localStorage.setItem('gorigami-lang', lang);

    // Also set a cookie for server-side rendering
    document.cookie = `gorigami-lang=${lang}; path=/; max-age=31536000; SameSite=Lax`;

    // Update all elements with data-i18n attribute
    updatePageTranslations(lang);

    // Update data-driven content
    import('./dataTranslations').then(module => {
        module.updateAllDataTranslations();
    });

    // Update HTML lang attribute
    document.documentElement.lang = lang;
}

export function t(key: string, lang?: 'en' | 'es'): string {
    const currentLang = lang || getLang();
    const keys = key.split('.');
    let value: any = translations[currentLang];

    for (const k of keys) {
        value = value?.[k];
    }

    return value || key;
}

export function getTranslations(lang: 'en' | 'es') {
    return translations[lang];
}

// Update all translations on the page
export function updatePageTranslations(lang: 'en' | 'es') {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (key) {
            const translation = t(key, lang);
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                (el as HTMLInputElement).placeholder = translation;
            } else {
                el.textContent = translation;
            }
        }
    });
}

// Initialize translations on page load
export function initI18n() {
    if (typeof window === 'undefined') return;

    const lang = getLang();
    document.documentElement.lang = lang;

    // Expose functions globally FIRST before using them
    (window as any).updatePageTranslations = updatePageTranslations;
    (window as any).updateActiveButton = updateActiveButton;

    // Now update translations
    updatePageTranslations(lang);

    // Initialize data translations
    import('./dataTranslations').then(module => {
        module.updateAllDataTranslations();
        // Make it globally available
        (window as any).updateAllDataTranslations = module.updateAllDataTranslations;

        console.log('[i18n] Translations loaded and applied');
    });

    // Update active button state
    updateActiveButton(lang);
}

export function updateActiveButton(lang: 'en' | 'es') {
    document.querySelectorAll('.lang-btn').forEach(btn => {
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}
