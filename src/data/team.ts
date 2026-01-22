export interface TeamMember {
  name: string;
  role: string;
  role_es: string;
  descriptor: string;
  descriptor_es: string;
  imgUrl?: string;
  verticalLabel?: string;
}

export const teamMembers: TeamMember[] = [
  {
    name: "Nicolás Balaguera",
    role: "DATA ENGINEER · BACKEND",
    role_es: "INGENIERO DE DATOS · BACKEND",
    descriptor: "Designs and builds the systems that support complex products and real-world data flows.",
    descriptor_es: "Diseña y construye los sistemas que soportan productos complejos y flujos de datos del mundo real.",
    imgUrl: "https://res.cloudinary.com/gorigami/image/upload/v1769109709/gorigamiland/NicoBalaguera_c932vo.jpg",
    verticalLabel: "SYSTEMS"
  },
  {
    name: "David Barbosa",
    role: "FULL-STACK DEVELOPER",
    role_es: "DESARROLLADOR FULL-STACK",
    descriptor: "Transforms ideas into reliable interfaces and production-ready software.",
    descriptor_es: "Transforma ideas en interfaces confiables y software listo para producción.",
    imgUrl: "https://res.cloudinary.com/gorigami/image/upload/v1769109708/gorigamiland/DaveBarbosa_foh9hp.jpg",
    verticalLabel: "CRAFT"
  },
  {
    name: "Jennifer Concha",
    role: "DESIGN & MARKETING",
    role_es: "DISEÑO Y MARKETING",
    descriptor: "Shapes visual identity and narrative, where brand meets usability.",
    descriptor_es: "Da forma a la identidad visual y narrativa, donde la marca se encuentra con la usabilidad.",
    imgUrl: "https://res.cloudinary.com/gorigami/image/upload/v1769109709/gorigamiland/JennConcha_tpomin.jpg",
    verticalLabel: "DESIGN"
  }
];
