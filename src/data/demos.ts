export interface Demo {
    slug: string;
    title: string;
    tag: string;
    caption: string;
    poster: string;
    year: string;
    status: string;
    // Case study content
    overview: string;
    challenge: string;
    approach: string;
    features: string[];
    results: string;
}

export const demos: Demo[] = [
    {
        slug: "keepercase",
        title: "KeeperCase",
        tag: "In-house",
        caption: "From craftsman to system",
        poster: "/img/KeeperCaseSystem.png",
        year: "2025",
        status: "In Production",
        overview: "KeeperCase is a comprehensive quotation and cost management system built for a specialized manufacturer of flight cases and official Nanuk case reseller. The system transforms their spreadsheet-based workflow into a centralized, efficient platform for managing costs, creating quotations, and tracking customer orders.",
        challenge: "The company struggled with scattered information across multiple spreadsheets, making it difficult to maintain accurate pricing, track material costs, and generate professional quotations quickly. Each quote required manual calculations and cross-referencing multiple files, leading to errors and inefficiencies.",
        approach: "We built a custom ERP-lite system that centralizes product catalogs, material costs, and pricing logic. The platform automates quotation generation, tracks inventory, and maintains a complete history of customer interactions. The interface was designed for craftsmen, not accountants, intuitive and focused on their daily workflow.",
        features: [
            "Automated quotation generation with real-time cost calculations",
            "Centralized product catalog with Nanuk official inventory",
            "Material cost tracking and price history",
            "Customer relationship management with quote history",
            "PDF export for professional quotations",
            "Multi-user access with role-based permissions"
        ],
        results: "The system is now the central hub for all quotations and customer management. Quote generation time reduced from 30+ minutes to under 5 minutes. The team can now track profitability per project and maintain consistent pricing across all customers."
    },
    {
        slug: "poofcat",
        title: "PoofCat",
        tag: "In-house",
        caption: "Communication systems",
        poster: "/img/PoofCat.png",
        year: "2024",
        status: "In Production",
        overview: "PoofCat is a privacy-first ephemeral messaging platform designed for sharing sensitive information without leaving a digital trail. Built for professionals, journalists, and privacy-conscious users who need to share delicate information securely.",
        challenge: "Traditional messaging platforms store messages indefinitely, creating privacy risks and potential data breaches. Users needed a way to share text, images, and have temporary conversations that truly disappear, without complex encryption setups or technical knowledge.",
        approach: "We designed a zero-knowledge architecture where messages are encrypted end-to-end and automatically deleted after being read or after a set time period. The system doesn't store message content on servers, only encrypted metadata for delivery. The interface is as simple as sending a regular message, but with built-in privacy by default.",
        features: [
            "End-to-end encrypted ephemeral messages",
            "Self-destructing images and files",
            "Temporary chat rooms with auto-expiration",
            "No message storage on servers",
            "Screenshot detection and notifications",
            "Simple link-based sharing, no account required"
        ],
        results: "PoofCat provides a secure communication channel for sensitive information sharing. Users can share confidential data knowing it won't persist in databases or chat histories. The platform has been adopted by professionals who need privacy without complexity."
    },
    {
        slug: "sanares",
        title: "Sanares Bienestar",
        tag: "E-commerce",
        caption: "Health, wellness & community",
        poster: "/img/SanarEsBienestar.png",
        year: "2023",
        status: "In Production",
        overview: "Sanares Bienestar is an integrated website and e-commerce platform for a physiatry practice, combining appointment scheduling, service management, and medical product sales in one cohesive system. The platform serves as both a patient portal and a retail channel for specialized medical products.",
        challenge: "The practice managed appointments through phone calls and spreadsheets, while product sales were handled separately. Patients had no visibility into available time slots, and the staff spent significant time coordinating schedules. There was no centralized system to manage both services and product inventory.",
        approach: "We built a dual-purpose platform that handles both service scheduling and e-commerce. The calendar system allows patients to book appointments online while giving staff full control over availability and service types. The integrated shop manages medical product inventory, orders, and fulfillment, all from a single admin panel.",
        features: [
            "Online appointment booking with real-time availability",
            "Service catalog with detailed descriptions and pricing",
            "E-commerce for medical products and wellness items",
            "Integrated inventory management",
            "Patient profiles with appointment history",
            "Automated email confirmations and reminders",
            "Admin dashboard for calendar and order management"
        ],
        results: "The practice now operates with a centralized system that reduced administrative overhead by 60%. Patients can book appointments 24/7, and product sales increased through the online channel. The team has complete visibility into schedules, inventory, and customer data."
    },
    {
        slug: "findingnewlife",
        title: "Finding New Life",
        tag: "Landing page",
        caption: "Music Label Landing Page",
        poster: "/img/FindingNewLife.png",
        year: "2025",
        status: "In Production",
        overview: "Finding New Life is a modern landing page for a Christian music label exploring the intersection of faith, music, and AI-generated content. The site serves as a digital presence for the label, showcasing their unique approach to music creation and their mission.",
        challenge: "The label needed a digital presence that reflected their innovative approach to music creation while maintaining their spiritual foundation. They wanted to communicate their exploration of AI in music without losing the human, faith-centered message at their core.",
        approach: "We designed a clean, editorial-style landing page that balances modern aesthetics with meaningful content. The site focuses on storytelling, explaining their mission, showcasing their music, and inviting visitors into their creative journey. The design is minimal and intentional, letting the music and message take center stage.",
        features: [
            "Clean, editorial layout with strong typography",
            "Embedded music player for label releases",
            "Mission statement and label philosophy",
            "Artist roster and project highlights",
            "Contact form for collaboration inquiries",
            "Responsive design optimized for all devices"
        ],
        results: "The landing page successfully communicates the label's unique position in Christian music and AI exploration. It serves as a professional hub for artist discovery, collaboration inquiries, and sharing their vision with a growing community."
    }
];
