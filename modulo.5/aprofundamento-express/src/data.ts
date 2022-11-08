
// Exercício 2 criando uma variável de tipo
export type Afazer = {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

// Exercício 3 criando array de afazeres
export const afazeres: Afazer[] = [
    {
        userId: 1,
        id: 1001,
        title: "Acordar as 07:00 AM",
        completed: true
    },
    {
        userId: 2,
        id: 1002,
        title: "Escovar dente",
        completed: true
    },
    {
        userId: 3,
        id: 1003,
        title: "Ir para o trabalho",
        completed: true
    },
    {
        userId: 4,
        id: 1004,
        title: "Andar de bicicleta",
        completed: false
    },
    {
        userId: 5,
        id: 1005,
        title: "Ir para a academia",
        completed: true
    },
    {
        userId: 6,
        id: 1006,
        title: "Fazer os exercícios da Labenu",
        completed: true
    },
    {
        userId: 7,
        id: 1007,
        title: "Fazer dieta",
        completed: false
    },
    {
        userId: 8,
        id: 1008,
        title: "Tomar 4L de água por dia",
        completed: false
    },
    {
        userId: 9,
        id: 1009,
        title: "Ler um livro",
        completed: true
    },
    {
        userId: 10,
        id: 1010,
        title: "Dormir as 11:00 PM",
        completed: true
    },
]

export function addAfazer(afazer: Afazer[], userId: number, id: number, title: string, completed: boolean): void {
    const novoAfazer: Afazer = {
        userId,
        id,
        title,
        completed
    }
    afazer.push(novoAfazer)
    console.log(afazer)
}