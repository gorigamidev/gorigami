export interface Service {
    name: string;
    name_es: string;
    description: string;
    description_es: string;
    tag: string;
    tag_es: string;
}

export const services: Service[] = [
    {
        name: "Custom Systems",
        name_es: "Sistemas Personalizados",
        description: "Tailored ERPs, CRMs, and internal tools designed to fit your exact workflow, not the other way around.",
        description_es: "ERPs, CRMs y herramientas internas diseñadas para adaptarse a tu flujo de trabajo exacto, no al revés.",
        tag: "Build what you need",
        tag_es: "Construye lo que necesitas"
    },
    {
        name: "E-commerce",
        name_es: "E-commerce",
        description: "Fast, scalable online stores with seamless checkout, inventory sync, and analytics that actually help.",
        description_es: "Tiendas en línea rápidas y escalables con checkout fluido, sincronización de inventario y analíticas que realmente ayudan.",
        tag: "Sell smarter",
        tag_es: "Vende más inteligente"
    },
    {
        name: "APIs & Integrations",
        name_es: "APIs e Integraciones",
        description: "Connect your tools, automate workflows, and make your data work for you across platforms.",
        description_es: "Conecta tus herramientas, automatiza flujos de trabajo y haz que tus datos trabajen para ti en todas las plataformas.",
        tag: "Plug & play",
        tag_es: "Conecta y usa"
    },
    {
        name: "MVPs & Landing Pages",
        name_es: "MVPs y Landing Pages",
        description: "Ship fast, test ideas, and validate your product with real users before going all-in.",
        description_es: "Lanza rápido, prueba ideas y valida tu producto con usuarios reales antes de ir con todo.",
        tag: "Start lean",
        tag_es: "Comienza ágil"
    }
];
