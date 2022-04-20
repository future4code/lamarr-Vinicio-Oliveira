/*
let array
console.log('a. ', array)
// Vai imprimir "a. undefined"

array = null
console.log('b. ', array)
// Vai imprimir: "b. Null"

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)
// Vai imprimir: "c. 11 (que é o comprimento do array)"

let i = 0
console.log('d. ', array[i])
// Vai imprimir: "d. 3"

array[i+1] = 19
console.log('e. ', array)
// Vai imprimir
// e. [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// Substituiu o 4 por 19

const valor = array[i+6]
console.log('f. ', valor)
// Vai imprimir
// f. 9
// Vai ser o número que esta no array na posição 6

const frase = prompt("Digite uma frase")

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)
// Vai ser impresso: "SUBI NUM ÔNIBUS EM MIRROCOS 27"

--------------------------------------------------------------------------------------------------------------

Exercício 1 de escrita de código

const nome = prompt("Qual o seu nome?")
const email = prompt("Qual o seu email")

console.log("O e-mail "+ email +" foi cadastrado com sucesso. Seja bem vindo(a), "+ nome)

--------------------------------------------------------------------------------------------------------------

Exercício 2 de ecrita de código

let array = [" arroz", " feijão", " macarrão", " churrasco", " feijoada"]

// exercício a)
console.log(array)

// exercício b)
console.log("Essas são as minhas comidas preferidas")
console.log(array[0])
console.log(array[1])
console.log(array[2])
console.log(array[3])
console.log(array[4])

// exercício c)

const comidaDoUsuario = prompt("Me deiga qual sua comida preferida")

array.splice(1,1)
array.push(comidaDoUsuario)
console.log(array)

--------------------------------------------------------------------------------------------------------------

Ecercício 3 de escrita de código


// a)
let listaDeTarefas = []

//b)
let tarefaUm = prompt("1- Qual tarefa precisa fazer hoje?")
let tarefaDois = prompt("2- Cite mais uma tarefa para hoje") 
let tarefaTres = prompt("3- Cite mais uma tarefa para hoje") 

listaDeTarefas.push(tarefaUm, tarefaDois, tarefaTres)

// c)
console.log(listaDeTarefas)

// d)
let tarefaRealizada = prompt("Cite de 1 a 3, qual tarefa já realizou")

// e)
listaDeTarefas.splice(tarefaRealizada-1 , 1)

// f
console.log(listaDeTarefas)

*/







