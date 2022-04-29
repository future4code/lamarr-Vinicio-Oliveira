// Exercício 1 de interpretação de código

// const respostaDoUsuario = prompt("Digite o número que você quer testar")
// const numero = Number(respostaDoUsuario)

// if (numero % 2 === 0) {
//   console.log("Passou no teste.")
// } else {
//   console.log("Não passou no teste.")
// }

// a) O código vai testar se o número inserido no prompt é par ou impar.
// b) Para os números que o resto da operação for igual a 0, que quer dizer que é par
// c) Para os números que o resto da operação for igual a 1, que quer dizer que é impar

/*
-------------------------------------------------------------------------------------------------------------------------------------------------------------
*/

// Exercício 2 de interpretação de código


// let fruta = prompt("Escolha uma fruta")
// let preco
// switch (fruta) {
//   case "Laranja":
//     preco = 3.5
//     break;
//   case "Maçã":
//     preco = 2.25
//     break;
//   case "Uva":
//     preco = 0.30
//     break;
//   case "Pêra":
//     preco = 5.5
//     break; // BREAK PARA O ITEM c.
//   default:
//     preco = 5
//     break;
// }
// console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

// a) Você escolhe a fruta que quer comprar e ele te retorna o preço da mesma
// b) "O preço da fruta Maçã é R$ 2,25
// c) "O preço da fruta Pêra é R$ 5" porque sem o break ele vai imprimir a ultima condição dada a variável preco

/*
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
*/

// Exercício 3 de interpretação de código

// const numero = Number(prompt("Digite o primeiro número."))

// if(numero > 0) {
//   console.log("Esse número passou no teste")
// 	let mensagem = "Essa mensagem é secreta!!!"
// }

// console.log(mensagem)

// a) Está pedindo para o usuário digitar um número, e o convertendo para number, pois o prompt retorna em string, e o mesmo sera guardado na variável "numero"
// b) Se digitar 10, a mensagem será: "Esse número passou no teste". mo console.log fora do if, não será impresso nada, pois "mensagem" não foi definida.
//    Se digitar -10, não imprimirá nada, pois "mensagem" não foi definida.
// c) Bom, baseado na minha análise, o único erro foi declarar a variável "mensagem" dentro do laço do if e pedir pra imprimi-la fora do laço, onde a mesma não foi declarada,
//    por isso o console não imprime e acusa variável não declarada

/*
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
*/

// Exercício 1 de escrita de código

// const pergunta = Number(prompt("Quantos anos você tem?"))

// if(pergunta >= 18) {
//     console.log("Você pode dirigir")
// } else {
//     console.log("Você não pode dirigir")
// }

/*
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
*/

// Exercício 2 de escrita de código

// const periodo = prompt("Qual o periodo você estuda? Responda M (manhã), V (vespertino) ou N (noturno).")

// if(periodo === "M") {
//     console.log("Bom dia!")
// } else if(periodo === "V") {
//     console.log("Boa tarde!")
// } else {
//     console.log("Boa noite")
// }

/*
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
*/

// Exercício 3 de escrita de código

// const periodo = prompt("Qual o periodo você estuda? Responda M (manhã), V (vespertino) ou N (noturno).")

// switch (periodo) {
//     case "M":
//         console.log("Bom dia!")
//     break;
//     case "V":
//         console.log("Boa tarde!")
//     break;
//     case "N":
//         console.log("Boa noite")
//     break;
//     default:" "
//         console.log("Resposta inválida")
//     break;

//     }

/*
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
*/

// Exercício 4 de escrita de código

// const generoFilme = prompt("Qual o gênero do filme desejado?")
// const valorIngresso = Number(prompt("Qual o valor do ingresso para o cinema?"))

// if(generoFilme === "fantasia" && valorIngresso <= 15) {
//     console.log("Bom filme!")
// } else {
//     console.log("Escolha outro filme :( ")
// }

/*
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
*/


// Desafios

// Desafio 1

// const generoFilme = prompt("Qual o gênero do filme desejado?")

// const valorIngresso = Number(prompt("Qual o valor do ingresso para o cinema?"))

// if(generoFilme === "fantasia" && valorIngresso <= 15) {
//     const lanchinho = prompt("Qual lanchinho você vai comprar?")
//     console.log("Bom filme! E aproveite o seu(a) " + lanchinho)
// } else {
//     console.log("Escolha outro filme :( ")
// }

/*
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
*/

// Desafio 2



let nome = prompt("Qual o seu nome?")
let tipoJogo = prompt("Qual o tipo de jogo desejado? IN (internacional), DO (domestico).")
let etapa = prompt("Qual a etapa do jogo? SF (Semi-Final), DT (Decisão de Terceiro) ou FI (Final).")
let categoria = Number(prompt("Qual a categoria para os ingressos?"))
let quantidade = Number(prompt("Quantos ingressos deseja?"))
let dolar = 4.10

console.log("------Dados da compra------")
console.log("Nome do cliente: " + nome )

if(tipoJogo === "IN") {
    console.log("Tipo do jogo: Internacional")
} else {
    console.log("TIpo do jogo: Nacional")
}

if(etapa === "FI"){
    console.log("Etapa do jogo: Final")
} else if(etapa === "DT") {
    console.log("Etapa do jogo: Decisão de terceiro lugar")
} else {
    console.log("Etapa do jogo: Semi-final")
}

console.log("Categoria: " + categoria)
console.log("Quantidade de ingressos: " + quantidade + " ingressos")
console.log("---Valores---")




let semi = {cat1: 1320, cat2: 880, cat3: 550, cat4: 220}
let decisaoTer = {cat1: 660, cat2: 440, cat3: 330, cat4: 170}
let finalissima = {cat1: 1980, cat2: 1320, cat3: 880, cat4: 330}


 if(etapa === "FI" && categoria === finalissima.cat1){
     console.log("Valor do ingresso: R$" + finalissima.cat1)
 } else if(etapa === "FI" && categoria === finalissima.cat2){
     console.log("Valor do ingresso: R$" + finalissima.cat2)
 } else if(etapa === "FI" && categoria === finalissima.cat3){
     console.log("Valor do ingresso: R$" + finalissima.cat3)
 } else if(etapa === "FI" && categoria === finalissima.cat4){
     console.log("Valor do ingresso: R$" + finalissima.cat4)
 }




































if(tipoJogo === "IN" ) {
    console.log()
}
















