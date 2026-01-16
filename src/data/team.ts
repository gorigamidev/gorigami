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
    imgUrl: "/img/NicoBalaguera.jpeg",
    verticalLabel: "SYSTEMS"
  },
  {
    name: "David Barbosa",
    role: "FULL-STACK DEVELOPER",
    role_es: "DESARROLLADOR FULL-STACK",
    descriptor: "Transforms ideas into reliable interfaces and production-ready software.",
    descriptor_es: "Transforma ideas en interfaces confiables y software listo para producción.",
    imgUrl: "/img/DaveBarbosa.jpeg",
    verticalLabel: "CRAFT"
  },
  {
    name: "Jennifer Concha",
    role: "DESIGN & MARKETING",
    role_es: "DISEÑO Y MARKETING",
    descriptor: "Shapes visual identity and narrative, where brand meets usability.",
    descriptor_es: "Da forma a la identidad visual y narrativa, donde la marca se encuentra con la usabilidad.",
    imgUrl: "/img/JennConcha.jpeg",
    verticalLabel: "DESIGN"
  }
];
