export interface Game {
    slug: string;
    name: string;
    name_es: string;
    tagline: string;
    tagline_es: string;
    description: string;
    description_es: string;
    link: string;
    image: string;
}

export const games: Game[] = [
    {
        slug: "adics",
        name: "ADICS",
        name_es: "ADICS",
        tagline: "Strategic cell dominance",
        tagline_es: "Dominancia estratégica de celdas",
        description: "Win by reaching the highest Power Level. The game ends when all cells are occupied, concluding with the final capture of the central C2 cell.",
        description_es: "Gana alcanzando el nivel de poder más alto. El juego termina cuando todas las celdas están ocupadas, concluyendo con la captura central.",
        link: "https://adics-game.pages.dev/",
        image: "https://res.cloudinary.com/gorigami/image/upload/v1775498186/gorigamiland/ADICS_bipoue.jpg"
    },
    {
        slug: "levitate",
        name: "Levitate",
        name_es: "Levitate",
        tagline: "Atmospheric vertical runner",
        tagline_es: "Runner vertical atmosférico",
        description: "Your ghost is trying to reach heaven, but spectral entities want to stop you. Guide your way up and don't look back.",
        description_es: "Tu fantasma intenta llegar al cielo, pero entidades espectrales quieren detenerte. Guía tu camino hacia arriba y no mires atrás.",
        link: "https://levitate-632.pages.dev/",
        image: "https://res.cloudinary.com/gorigami/image/upload/v1775498186/gorigamiland/LEVITATE_uxwakx.jpg"
    }
];
