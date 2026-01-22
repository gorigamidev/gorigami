/// <reference types="astro/client" />

interface ImportMetaEnv {
    readonly PUBLIC_EMAILJS_SERVICE_ID: string;
    readonly PUBLIC_EMAILJS_TEMPLATE_ID: string;
    readonly PUBLIC_EMAILJS_USER_ID: string;
    readonly PUBLIC_EMAILJS_API_URL: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
