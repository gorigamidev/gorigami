export interface ProcessStep {
    number: number;
    title: string;
    description: string;
}

export const processSteps: ProcessStep[] = [
    {
        number: 1,
        title: "Discover",
        description: "Listen, map constraints, align goals"
    },
    {
        number: 2,
        title: "Prototype",
        description: "Fold ideas into interactive flows"
    },
    {
        number: 3,
        title: "Build",
        description: "Front, back, design, deploy"
    },
    {
        number: 4,
        title: "Evolve",
        description: "Metrics, iterations, scale"
    }
];
