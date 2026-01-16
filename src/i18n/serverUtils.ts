// Server-side language detection from cookies
import type { AstroCookies } from 'astro';

export function getServerLang(cookies: AstroCookies): 'en' | 'es' {
    const cookieLang = cookies.get('gorigami-lang')?.value;
    console.log('[Server] Cookie lang:', cookieLang);

    if (cookieLang === 'en' || cookieLang === 'es') {
        return cookieLang;
    }

    console.log('[Server] No valid cookie, defaulting to EN');
    return 'en'; // Default to English
}
