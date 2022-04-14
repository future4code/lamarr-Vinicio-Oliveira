/*
let a = 10
let b = 10

console.log(b) // 10

b = 5
console.log(a, b) // 10 5 

-----------------------------------------------------------------------

let a = 10
let b = 20
c = a
b = c
a = b

console.log(a, b, c) // 10 10 10

----------------------------------------------------------------------

let horaTrabalhadaDia = prompt("Quantas horas você trabalha por dia?")
let salarioPorDia = prompt("Quanto você recebe por dia?")
alert(`Voce recebe ${salarioPorDia/horaTrabalhadaDia} por hora`)
*/

/*
let nome 
let idade 

console.log(typeof nome) // Undefined
console.log(typeof idade) // Undefined porque ambas não tem nada declarado

nome = prompt("Qual o seu nome?")
idade = prompt(" Qual a sua idade?")

console.log(typeof nome) 
console.log(typeof idade)
// Notei que as duas váriáveis agora são do tipo String

console.log("Olá ", nome, ", você tem ", idade," anos.") */


const respostaUm = prompt("Você está na sua casa?")
const respostaDois = prompt("Você está na sala?")
const respostaTres = prompt("Você está sentado(a)?")

console.log("Você está na sua casa? - ", respostaUm)
console.log("Você está na sala? - ", respostaDois)
console.log("Você está sentado? - ", respostaTres)


let a = 10
let b = 25

a = b
b = 10

console.log( a, b)


let a = 10
let b = 25

let c = a

a = b
b = c
console.log(a)
console.log(b)

