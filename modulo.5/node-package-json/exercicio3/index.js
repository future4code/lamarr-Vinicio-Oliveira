//                                       Exercício 3


const nome = process.argv[2]

const listaTarefas = [
    "lavar louça"
]

listaTarefas.push(nome)

console.table(listaTarefas)