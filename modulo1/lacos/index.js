// Exercício 1 de interpretação de código
/*
let valor = 0
for(let i = 0; i < 5; i++) {
  valor += i
}
console.log(valor)

O resultado impresso no conseole será 10, pois o código abaixo está somando os valores da variável "i" com a variável "valor".
vai ser tipo: valor = valor + i ( que é igual a 1), na próxima repetição o i vem valendo 2 e vai ficar
valor (que vale 1) = valor + i. valor passa a valer 3... e assim vai

---------------------------------------------------------------------------------------------------------------------------------------------------------------
*/

// Exercício 2 de interpretação de código

// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// for (let numero of lista) {
//   if (numero > 18) {
// 		console.log(numero)
// 	}
// }

// a) Vai ser impresso todos os números maiores que 18
// b) Sim. Poderia utilizar o length
/*
----------------------------------------------------------------------------------------------------------------------------------------------------------------
*/

// Exercício 3 de interpretação de código

// const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
// let quantidadeAtual = 0
// while(quantidadeAtual < quantidadeTotal){
//   let linha = ""
//   for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
//     linha += "*"
//   }
//   console.log(linha)
//   quantidadeAtual++
// }

/*
Será impresso * na primeira linha, ** na segunda, *** na terceira e  **** na quarta linha

---------------------------------------------------------------------------------------------------------------------------------------------------------------
*/

// Exercício 1 de escrita de código

// let quantBichos = Number(prompt("Quantos animais de estimação você tem?"))
// let arrBichos = []
// let bichos2

// if(quantBichos === 0) {
//     console.log("Que pena! Você pode adotar um pet!") // a) 
// } else if(quantBichos > 0) {
//     for(let bichos = 0; bichos <= quantBichos - 1; bichos++){ // b)
//     bichos2 = prompt("Digite os nomes do dos pets")
//     arrBichos.push(bichos2)
//     }
// }

// // c)
// console.log(arrBichos)
/*
---------------------------------------------------------------------------------------------------------------------------------------------------------------
*/

// Exercício 2 de escrita de código

const arr = [10, 15, 20, 25, 30, 35, 40, 45, 50, 2, 1000]
let numero
let result
let frase


// function imprimeTodoArray() {
//     for( numero of arr){
//         console.log(numero)
//     }
//     return numero
// }

// Resposta do item a)
// imprimeTodoArray()  

// item b)

// function dividindoArray(array) {
//     for(let posicao = 0; posicao < arr.length; posicao++){
//         let result = array[posicao] / 10
//         console.log(result)
//     }
//     return result
// }

// dividindoArray(arr)

// Item c)

// let novoArr = []
// function numerosPares(array) {
//     for(item of arr) {
//         if(item % 2 === 0){
//             novoArr.push(item)
//         }
//     }
//     console.log(novoArr)
// }
// numerosPares(arr)

// Item d)

// function imprimindoFrase(array) {
//     for(let i = 0; i < array.length; i++){
//         let numer = array[i]
//         frase = "o elemento do índex " + i + " é: " + array[i]
//         console.log(frase)
//     }
// }
// imprimindoFrase(arr)

// Item e)

// let valorMaximo = 0
// let valorMinimo = 100


// function devolveNumeros(array){
//     for(let posicao = 0; posicao < array.length; posicao++){
//         let numeroArray = array[posicao]
//         if(numeroArray > valorMaximo){
//             valorMaximo = array[posicao]
//         } for(let posicao = 0; posicao < array.length; posicao++) {
//             let numeroArray = array[posicao]
//             if(numeroArray < valorMinimo) {
//                 valorMinimo = array[posicao]
//             }
//         }
//     }
//     console.log("O maior valor é " + valorMaximo + " e o menor é " + valorMinimo)
// }

// devolveNumeros(arr)


