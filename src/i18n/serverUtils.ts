// Server-side language detection from cookies
import type { AstroCookies } from 'astro';

export function getServerLang(cookies: AstroCookies): 'en' | 'es' {
    const cookieLang = cookies.get('gorigami-lang')?.value;

    if (cookieLang === 'en' || cookieLang === 'es') {
        return cookieLang;
    }

    return 'es'; // Default to Spanish for local strategy
}
