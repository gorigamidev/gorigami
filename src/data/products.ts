export interface Product {
    slug: string;
    name: string;
    name_es: string;
    tagline: string;
    tagline_es: string;
    description: string;
    description_es: string;
    status: string;
    type: string;
    link?: string;
}

export const products: Product[] = [
    {
        slug: "gorigami-data-framework",
        name: "Gorigami Data Framework",
        name_es: "Gorigami Data Framework",
        tagline: "End-to-end data engineering",
        tagline_es: "Ingeniería de datos de extremo a extremo",
        description: "A modular, end-to-end data framework designed to ingest, process, validate, and expose data in a reliable and scalable way, using open-source technologies and reproducible engineering practices. Built to run consistently locally, on-premise, or in the cloud, and can be adopted incrementally based on your data maturity.",
        description_es: "Un framework de datos modular y completo diseñado para ingerir, procesar, validar y exponer datos de manera confiable y escalable, utilizando tecnologías de código abierto y prácticas de ingeniería reproducibles. Construido para ejecutarse consistentemente de forma local, on-premise o en la nube, y puede adoptarse incrementalmente según tu madurez de datos.",
        status: "Ready",
        type: "Framework",
        link: "https://github.com/gorigamidev/gorigamiDataFrame"
    },
    {
        slug: "xentro",
        name: "Xentro",
        name_es: "Xentro",
        tagline: "Appointments made simple for artists",
        tagline_es: "Citas simplificadas para artistas",
        description: "A streamlined booking and scheduling platform designed specifically for artists, creators, and service professionals who need an elegant way to manage their time.",
        description_es: "Una plataforma de reservas y programación optimizada diseñada específicamente para artistas, creadores y profesionales de servicios que necesitan una forma elegante de gestionar su tiempo.",
        status: "Coming Soon",
        type: "SaaS"
    },
    {
        slug: "korest",
        name: "Korest",
        name_es: "Korest",
        tagline: "Quotations for makers",
        tagline_es: "Cotizaciones para creadores",
        description: "Smart quoting software that helps makers, builders, and craftspeople create professional estimates quickly and accurately.",
        description_es: "Software inteligente de cotizaciones que ayuda a creadores, constructores y artesanos a crear estimaciones profesionales de forma rápida y precisa.",
        status: "Coming Soon",
        type: "SaaS"
    }
];
