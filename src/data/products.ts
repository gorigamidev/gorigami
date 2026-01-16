export interface Product {
    slug: string;
    name: string;
    tagline: string;
    description: string;
    status: "Ready" | "Coming Soon" | "In Development";
    type: "Framework" | "SaaS";
    link?: string;
}

export const products: Product[] = [
    {
        slug: "gorigami-data-framework",
        name: "Gorigami Data Framework",
        tagline: "End-to-end data engineering",
        description: "A modular, end-to-end data framework designed to ingest, process, validate, and expose data in a reliable and scalable way, using open-source technologies and reproducible engineering practices. Built to run consistently locally, on-premise, or in the cloud, and can be adopted incrementally based on your data maturity.",
        status: "Ready",
        type: "Framework",
        link: "https://github.com/gorigamidev/gorigamiDataFrame"
    },
    {
        slug: "xentro",
        name: "Xentro",
        tagline: "Appointments made simple",
        description: "A system designed to centralize appointments for clients with a user-friendly interface shared via a link. Perfect for artists such as tattoo artists, barbers, and service professionals who need elegant scheduling without complexity.",
        status: "Coming Soon",
        type: "SaaS"
    },
    {
        slug: "korest",
        name: "Korest",
        tagline: "Quotations for makers",
        description: "The quotation system for small and micro businesses that manufacture products. Designed to ensure overhead costs don't harm your sales, with transparent pricing calculations and professional quote generation.",
        status: "Coming Soon",
        type: "SaaS"
    }
];
