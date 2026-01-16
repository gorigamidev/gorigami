// Helper function to get the correct field based on current language
export function getLocalizedField<T extends Record<string, any>>(obj: T, field: keyof T, lang: 'en' | 'es'): any {
    if (lang === 'es') {
        const esField = `${String(field)}_es` as keyof T;
        if (esField in obj && obj[esField]) {
            return obj[esField];
        }
    }
    return obj[field];
}
