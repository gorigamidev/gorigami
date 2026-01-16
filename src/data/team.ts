export interface TeamMember {
  name: string;
  role: string;
  descriptor: string;
  imgUrl?: string;
  verticalLabel?: string;
}

export const teamMembers: TeamMember[] = [
  {
    name: "Nicolás Balaguera",
    role: "DATA ENGINEER · BACKEND",
    descriptor: "Designs and builds the systems that support complex products and real-world data flows.",
    imgUrl: "/img/NicoBalaguera.jpeg",
    verticalLabel: "SYSTEMS"
  },
  {
    name: "David Barbosa",
    role: "FULL-STACK DEVELOPER",
    descriptor: "Transforms ideas into reliable interfaces and production-ready software.",
    imgUrl: "/img/DaveBarbosa.jpeg",
    verticalLabel: "CRAFT"
  },
  {
    name: "Jennifer Concha",
    role: "DESIGN & MARKETING",
    descriptor: "Shapes visual identity and narrative, where brand meets usability.",
    imgUrl: "/img/JennConcha.jpeg",
    verticalLabel: "DESIGN"
  }
];
