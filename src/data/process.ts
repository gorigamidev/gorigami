export interface ProcessStep {
    number: number;
    title: string;
    title_es: string;
    description: string;
    description_es: string;
}

export const processSteps: ProcessStep[] = [
    {
        number: 1,
        title: "Discover",
        title_es: "Descubrir",
        description: "Listen, map constraints, align goals",
        description_es: "Escuchar, mapear restricciones, alinear objetivos"
    },
    {
        number: 2,
        title: "Prototype",
        title_es: "Prototipar",
        description: "Fold ideas into interactive flows",
        description_es: "Convertir ideas en flujos interactivos"
    },
    {
        number: 3,
        title: "Build",
        title_es: "Construir",
        description: "Front, back, design, deploy",
        description_es: "Front, back, diseño, despliegue"
    },
    {
        number: 4,
        title: "Evolve",
        title_es: "Evolucionar",
        description: "Metrics, iterations, scale",
        description_es: "Métricas, iteraciones, escala"
    }
];
