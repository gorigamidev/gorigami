export interface Service {
    title: string;
    subtitle: string;
    description: string;
    icon?: string;
}

export const services: Service[] = [
    {
        title: "Custom Systems",
        subtitle: "When off-the-shelf isn't enough.",
        description: "ERPs, quoting, CRMs, back-office tools, tailored to your workflow, not the other way around."
    },
    {
        title: "E-commerce & Sites",
        subtitle: "From niche to full retail.",
        description: "Storefronts and brand sites that convert. Fast, beautiful, and built to scale."
    },
    {
        title: "APIs & Integrations",
        subtitle: "Automation without chaos.",
        description: "Connect what you already use. Make your tools talk to each other seamlessly."
    },
    {
        title: "MVPs & Landings",
        subtitle: "Start small, think big.",
        description: "Validate in days, scale later. Perfect for testing ideas before full commitment."
    }
];
