// Exercício 1 de interpretação de código

/*
const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado) 

resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado) 

resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado)

console.log("d. ", typeof resultado)


// A) Resposta: False
// B) Resposta: False
// C) Resposta: True
// D) Resposta: boolean

--------------------------------------------------------------------------------------------------------------

// Exercício 2 de interpretação de código


let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = primeiroNumero + segundoNumero

console.log(soma)

Não vai imprimir o resultado da soma e sim is dois numeros que ele colocou no prompt, ex: no primeiro ele
ele coloca 2 e no segundo também 2, o resultado impresso será: 22, porque tudo que vem de um prompt é
convertido para string.

---------------------------------------------------------------------------------------------------------------

Exercício 3 de interpretação de código

A solução que eu encontrei foi a seguinte: fazer a conversão de string para number
e assim o resultado foi o desejado.



let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")
let primeiroNumero1 = Number(primeiroNumero)
let segundoNumero2 = Number(segundoNumero)

const soma = primeiroNumero1 + segundoNumero2

console.log(soma)

--------------------------------------------------------------------------------------------------------------

Exercício 1 de escrita de código

// A) Pergunte a idade do usuário

let idadeUsuario = prompt("Quantos anos você tem?")

// B) Pergunte a idade do seu melhor amigo

let idadeMelhorAmigo = prompt("Qual a idade do(a) seu/sua melhor amigo(a)?")

// C) Imprima no console a seguinte mensagem "Sua idade é maior que a do seu melhor amigo?", seguido pela respota
//    True ou False

let maiorIdade = idadeUsuario > idadeMelhorAmigo

console.log("Sua idade é maior que a do seu melhor amigo? ", maiorIdade)

let diferencaIdades = idadeUsuario - idadeMelhorAmigo

console.log("Diferenca de idades é de: ", diferencaIdades, " ano(s)")

---------------------------------------------------------------------------------------------------------------

Ecercício 2 de escrita de código

// A)

let numeroPar = prompt("Digite um número par!")
let numeroPar2 = Number(numeroPar)

// B)

let restoDivisao = numeroPar2 % 2

console.log(restoDivisao)

// C) todos os números PARES tem o resultado = 0

// D) Todos os números IMPARES tem resultado = 1

--------------------------------------------------------------------------------------------------------------

Exercício 3 de escrita de código

let idadeDoUsuario = prompt("Qual a sua idade?")
let idadeDoUsuario2 = Number(idadeDoUsuario)

const mesesPorAno = 12
const diasPorAno = 365
const horasPorAno = 8760

let idadeDoUsuarioEmMeses = idadeDoUsuario2 * mesesPorAno
let idadeDoUsuarioEmDias = idadeDoUsuario2 * diasPorAno
let idadeDoUsuarioEmHoras = idadeDoUsuario2 * horasPorAno 


console.log("Idade do usuário em meses: ", idadeDoUsuarioEmMeses)  // Resposta da letra A
console.log("Idade do usuário em dias: ", idadeDoUsuarioEmDias)    // Resposta da letra B
console.log("Idade do usuário em horass: ", idadeDoUsuarioEmHoras) // Resposta da letra C

--------------------------------------------------------------------------------------------------------------

Exercício 4 de escrita de código


let primeiroNumero = prompt("Digite um número")
let segundoNumero = prompt("Digite um segundo número")
let primeiroNumero1 = Number(primeiroNumero)
let segundoNumero2 = Number(segundoNumero)

console.log("O primeiro número é maior que o segundo? ", primeiroNumero1 > segundoNumero2) // Resposta A
console.log("O primeiro número é igual ao segundo? ", primeiroNumero1 === segundoNumero2)  // Resposta B

let divisivel = primeiroNumero1 % segundoNumero2
let trueOuFalse = divisivel === 0
console.log("O primeiro número é divisível pelo segundo? ", trueOuFalse)                   // Resposta C

let divisivel2 = segundoNumero2 % primeiroNumero1
let trueOuFalse2 = divisivel2 === 0
console.log("O primeiro número é divisível pelo segundo? ", trueOuFalse2)                  // Resposta D

*/