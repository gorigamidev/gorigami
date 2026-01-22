export interface Demo {
    slug: string;
    title: string;
    tag: string;
    tag_es: string;
    caption: string;
    caption_es: string;
    poster: string;
    year: string;
    status: string;
    status_es: string;
    // Case study content
    overview: string;
    overview_es: string;
    challenge: string;
    challenge_es: string;
    approach: string;
    approach_es: string;
    features: string[];
    features_es: string[];
    results: string;
    results_es: string;
}

export const demos: Demo[] = [
    {
        slug: "keepercase",
        title: "KeeperCase",
        tag: "System",
        tag_es: "Interno",
        caption: "From craftsman to system",
        caption_es: "De artesano a sistema",
        poster: "https://res.cloudinary.com/gorigami/image/upload/f_auto,q_auto/v1769109710/gorigamiland/KeeperCaseSystem_dmom24.png",
        year: "2025",
        status: "In Production",
        status_es: "En Producción",
        overview: "KeeperCase is a comprehensive quotation and cost management system built for a specialized manufacturer of flight cases and official Nanuk case reseller. The system transforms their spreadsheet-based workflow into a centralized, efficient platform for managing costs, creating quotations, and tracking customer orders.",
        overview_es: "KeeperCase es un sistema integral de cotizaciones y gestión de costos construido para un fabricante especializado de flight cases y revendedor oficial de estuches Nanuk. El sistema transforma su flujo de trabajo basado en hojas de cálculo en una plataforma centralizada y eficiente para gestionar costos, crear cotizaciones y rastrear pedidos de clientes.",
        challenge: "The company struggled with scattered information across multiple spreadsheets, making it difficult to maintain accurate pricing, track material costs, and generate professional quotations quickly. Each quote required manual calculations and cross-referencing multiple files, leading to errors and inefficiencies.",
        challenge_es: "La empresa luchaba con información dispersa en múltiples hojas de cálculo, dificultando mantener precios precisos, rastrear costos de materiales y generar cotizaciones profesionales rápidamente. Cada cotización requería cálculos manuales y referencias cruzadas de múltiples archivos, generando errores e ineficiencias.",
        approach: "We built a custom ERP-lite system that centralizes product catalogs, material costs, and pricing logic. The platform automates quotation generation, tracks inventory, and maintains a complete history of customer interactions. The interface was designed for craftsmen, not accountants, intuitive and focused on their daily workflow.",
        approach_es: "Construimos un sistema ERP ligero personalizado que centraliza catálogos de productos, costos de materiales y lógica de precios. La plataforma automatiza la generación de cotizaciones, rastrea inventario y mantiene un historial completo de interacciones con clientes. La interfaz fue diseñada para artesanos, no contadores—intuitiva y enfocada en su flujo de trabajo diario.",
        features: [
            "Automated quotation generation with real-time cost calculations",
            "Centralized product catalog with Nanuk official inventory",
            "Material cost tracking and price history",
            "Customer relationship management with quote history",
            "PDF export for professional quotations",
            "Multi-user access with role-based permissions"
        ],
        features_es: [
            "Generación automatizada de cotizaciones con cálculos de costos en tiempo real",
            "Catálogo centralizado de productos con inventario oficial Nanuk",
            "Seguimiento de costos de materiales e historial de precios",
            "Gestión de relaciones con clientes con historial de cotizaciones",
            "Exportación PDF para cotizaciones profesionales",
            "Acceso multiusuario con permisos basados en roles"
        ],
        results: "The system is now the central hub for all quotations and customer management. Quote generation time reduced from 30+ minutes to under 5 minutes. The team can now track profitability per project and maintain consistent pricing across all customers.",
        results_es: "El sistema es ahora el centro de todas las cotizaciones y gestión de clientes. El tiempo de generación de cotizaciones se redujo de más de 30 minutos a menos de 5 minutos. El equipo ahora puede rastrear la rentabilidad por proyecto y mantener precios consistentes en todos los clientes."
    },
    {
        slug: "poofcat",
        title: "PoofCat",
        tag: "In-house",
        tag_es: "Interno",
        caption: "Communication systems",
        caption_es: "Sistemas de comunicación",
        poster: "https://res.cloudinary.com/gorigami/image/upload/f_auto,q_auto/v1769109710/gorigamiland/PoofCat_f7zmxt.png",
        year: "2024",
        status: "In Production",
        status_es: "En Producción",
        overview: "PoofCat is a privacy-first ephemeral messaging platform designed for sharing sensitive information without leaving a digital trail. Built for professionals, journalists, and privacy-conscious users who need to share delicate information securely.",
        overview_es: "PoofCat es una plataforma de mensajería efímera centrada en la privacidad, diseñada para compartir información sensible sin dejar rastro digital. Construida para profesionales, periodistas y usuarios conscientes de la privacidad que necesitan compartir información delicada de forma segura.",
        challenge: "Traditional messaging platforms store messages indefinitely, creating privacy risks and potential data breaches. Users needed a way to share text, images, and have temporary conversations that truly disappear, without complex encryption setups or technical knowledge.",
        challenge_es: "Las plataformas de mensajería tradicionales almacenan mensajes indefinidamente, creando riesgos de privacidad y posibles filtraciones de datos. Los usuarios necesitaban una forma de compartir texto, imágenes y tener conversaciones temporales que realmente desaparezcan, sin configuraciones complejas de encriptación o conocimiento técnico.",
        approach: "We designed a zero-knowledge architecture where messages are encrypted end-to-end and automatically deleted after being read or after a set time period. The system doesn't store message content on servers, only encrypted metadata for delivery. The interface is as simple as sending a regular message, but with built-in privacy by default.",
        approach_es: "Diseñamos una arquitectura de conocimiento cero donde los mensajes se encriptan de extremo a extremo y se eliminan automáticamente después de ser leídos o después de un período de tiempo establecido. El sistema no almacena el contenido de los mensajes en servidores, solo metadatos encriptados para la entrega. La interfaz es tan simple como enviar un mensaje regular, pero con privacidad integrada por defecto.",
        features: [
            "End-to-end encrypted ephemeral messages",
            "Self-destructing images and files",
            "Temporary chat rooms with auto-expiration",
            "No message storage on servers",
            "Screenshot detection and notifications",
            "Simple link-based sharing, no account required"
        ],
        features_es: [
            "Mensajes efímeros encriptados de extremo a extremo",
            "Imágenes y archivos autodestructivos",
            "Salas de chat temporales con auto-expiración",
            "Sin almacenamiento de mensajes en servidores",
            "Detección de capturas de pantalla y notificaciones",
            "Compartir simple basado en enlaces, sin cuenta requerida"
        ],
        results: "PoofCat provides a secure communication channel for sensitive information sharing. Users can share confidential data knowing it won't persist in databases or chat histories. The platform has been adopted by professionals who need privacy without complexity.",
        results_es: "PoofCat proporciona un canal de comunicación seguro para compartir información sensible. Los usuarios pueden compartir datos confidenciales sabiendo que no persistirán en bases de datos o historiales de chat. La plataforma ha sido adoptada por profesionales que necesitan privacidad sin complejidad."
    },
    {
        slug: "sanares",
        title: "Sanar es Bienestar",
        tag: "E-commerce",
        tag_es: "E-commerce",
        caption: "Health, wellness & community",
        caption_es: "Salud, bienestar y comunidad",
        poster: "https://res.cloudinary.com/gorigami/image/upload/f_auto,q_auto/v1769109710/gorigamiland/SanarEsBienestar_qei79t.png",
        year: "2023",
        status: "In Production",
        status_es: "En Producción",
        overview: "Sanares Bienestar is an integrated website and e-commerce platform for a physiatry practice, combining appointment scheduling, service management, and medical product sales in one cohesive system. The platform serves as both a patient portal and a retail channel for specialized medical products.",
        overview_es: "Sanares Bienestar es una plataforma integrada de sitio web y e-commerce para una práctica de fisiatra, combinando programación de citas, gestión de servicios y venta de productos médicos en un sistema cohesivo. La plataforma sirve tanto como portal de pacientes como canal de venta para productos médicos especializados.",
        challenge: "The practice managed appointments through phone calls and spreadsheets, while product sales were handled separately. Patients had no visibility into available time slots, and the staff spent significant time coordinating schedules. There was no centralized system to manage both services and product inventory.",
        challenge_es: "La práctica gestionaba citas a través de llamadas telefónicas y hojas de cálculo, mientras que las ventas de productos se manejaban por separado. Los pacientes no tenían visibilidad de los horarios disponibles, y el personal pasaba tiempo significativo coordinando agendas. No había un sistema centralizado para gestionar tanto servicios como inventario de productos.",
        approach: "We built a dual-purpose platform that handles both service scheduling and e-commerce. The calendar system allows patients to book appointments online while giving staff full control over availability and service types. The integrated shop manages medical product inventory, orders, and fulfillment, all from a single admin panel.",
        approach_es: "Construimos una plataforma de doble propósito que maneja tanto programación de servicios como e-commerce. El sistema de calendario permite a los pacientes reservar citas en línea mientras da al personal control total sobre disponibilidad y tipos de servicio. La tienda integrada gestiona inventario de productos médicos, pedidos y cumplimiento, todo desde un solo panel de administración.",
        features: [
            "Online appointment booking with real-time availability",
            "Service catalog with detailed descriptions and pricing",
            "E-commerce for medical products and wellness items",
            "Integrated inventory management",
            "Patient profiles with appointment history",
            "Automated email confirmations and reminders",
            "Admin dashboard for calendar and order management"
        ],
        features_es: [
            "Reserva de citas en línea con disponibilidad en tiempo real",
            "Catálogo de servicios con descripciones detalladas y precios",
            "E-commerce para productos médicos y artículos de bienestar",
            "Gestión de inventario integrada",
            "Perfiles de pacientes con historial de citas",
            "Confirmaciones y recordatorios automáticos por correo electrónico",
            "Panel de administración para gestión de calendario y pedidos"
        ],
        results: "The practice now operates with a centralized system that reduced administrative overhead by 60%. Patients can book appointments 24/7, and product sales increased through the online channel. The team has complete visibility into schedules, inventory, and customer data.",
        results_es: "La práctica ahora opera con un sistema centralizado que redujo la carga administrativa en un 60%. Los pacientes pueden reservar citas 24/7, y las ventas de productos aumentaron a través del canal en línea. El equipo tiene visibilidad completa de agendas, inventario y datos de clientes."
    },
    {
        slug: "findingnewlife",
        title: "Finding New Life",
        tag: "Landing page",
        tag_es: "Página de aterrizaje",
        caption: "Music Label Landing Page",
        caption_es: "Página de sello musical",
        poster: "https://res.cloudinary.com/gorigami/image/upload/f_auto,q_auto/v1769109709/gorigamiland/FindingNewLife_uyxf3t.png",
        year: "2025",
        status: "In Production",
        status_es: "En Producción",
        overview: "Finding New Life is a modern landing page for a Christian music label exploring the intersection of faith, music, and AI-generated content. The site serves as a digital presence for the label, showcasing their unique approach to music creation and their mission.",
        overview_es: "Finding New Life es una página de aterrizaje moderna para un sello de música cristiana que explora la intersección de fe, música y contenido generado por IA. El sitio sirve como presencia digital del sello, mostrando su enfoque único para la creación musical y su misión.",
        challenge: "The label needed a digital presence that reflected their innovative approach to music creation while maintaining their spiritual foundation. They wanted to communicate their exploration of AI in music without losing the human, faith-centered message at their core.",
        challenge_es: "El sello necesitaba una presencia digital que reflejara su enfoque innovador para la creación musical mientras mantenía su fundamento espiritual. Querían comunicar su exploración de IA en la música sin perder el mensaje humano y centrado en la fe en su núcleo.",
        approach: "We designed a clean, editorial-style landing page that balances modern aesthetics with meaningful content. The site focuses on storytelling, explaining their mission, showcasing their music, and inviting visitors into their creative journey. The design is minimal and intentional, letting the music and message take center stage.",
        approach_es: "Diseñamos una página de aterrizaje limpia de estilo editorial que equilibra estética moderna con contenido significativo. El sitio se enfoca en contar historias, explicar su misión, mostrar su música e invitar a los visitantes a su viaje creativo. El diseño es mínimo e intencional, dejando que la música y el mensaje tomen el centro del escenario.",
        features: [
            "Clean, editorial layout with strong typography",
            "Embedded music player for label releases",
            "Mission statement and label philosophy",
            "Artist roster and project highlights",
            "Contact form for collaboration inquiries",
            "Responsive design optimized for all devices"
        ],
        features_es: [
            "Diseño editorial limpio con tipografía fuerte",
            "Reproductor de música integrado para lanzamientos del sello",
            "Declaración de misión y filosofía del sello",
            "Lista de artistas y destacados de proyectos",
            "Formulario de contacto para consultas de colaboración",
            "Diseño responsivo optimizado para todos los dispositivos"
        ],
        results: "The landing page successfully communicates the label's unique position in Christian music and AI exploration. It serves as a professional hub for artist discovery, collaboration inquiries, and sharing their vision with a growing community.",
        results_es: "La página de aterrizaje comunica exitosamente la posición única del sello en la música cristiana y exploración de IA. Sirve como centro profesional para descubrimiento de artistas, consultas de colaboración y compartir su visión con una comunidad en crecimiento."
    }
];
