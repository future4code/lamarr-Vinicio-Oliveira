// Exercício 1 de interpretação de código

// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" }
//   ]
  
//   const novoArrayA = usuarios.map((item, index, array) => {
//      console.log(item, index, array)
//   })

  // a) Vai ser impreso três objetos e em cada objeto um array com os três objetos novamente.
/*
-------------------------------------------------------------------------------------------------------------------------------------
*/

// Exercício 2 de interpretação de código

// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" },
//   ]
  
//   const novoArrayB = usuarios.map((item, index, array) => {
//      return item.nome
//   })
  
//   console.log(novoArrayB)

// a) Vai ser impresso um array com o nome de cada pessoa como item

/*
-----------------------------------------------------------------------------------------------------------------------------------------------
*/

// Exercício 3 de interpretação de código

// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" },
//   ]
  
//   const novoArrayC = usuarios.filter((item, index, array) => {
//      return item.apelido !== "Chijo"
//   })
  
//   console.log(novoArrayC)

// a) Vai ser impresso um objeto com duas listas dentro, com nome e apelido de "Amanda rangel" e nome e apelido de "Laís Petra"
// Ele filtrou e retirou a lista que tem "Chijo"

/*
---------------------------------------------------------------------------------------------------------------------------------------------------
*/

// Exercício 1 de escrita de código

const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
]
 
// a) abaixo

// function selecionar(item) {
//     return item.nome 
// }

// let nomePets = pets.filter(selecionar)
// nomePets = nomePets.map(selecionar)

// console.log(nomePets)

// b) abaixo

// function escolheRaca(item) {
//     return item.raca === "Salsicha"
// }

// let racaPets = pets.filter(escolheRaca)

// console.log(racaPets)

// c) abaixo

// function filtrandoPoodles(item) {
//     return item.raca === "Poodle"
// }

// function retornaNomes(item) {
//     return item.nome
// }

// let racaPoodle = pets.filter(filtrandoPoodles)
// racaPoodle = racaPoodle.map(retornaNomes)

// function mensagem(item, valor){
//     return "Você ganhou um cupom de desconto de 10% para tosar o/a " + item
// }

// racaPoodle = racaPoodle.map(mensagem)

// console.log(racaPoodle)

/*
---------------------------------------------------------------------------------------------------------------------------------------
*/

// Exercício 2 de escrita de código

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

// Item a)

// function filtra(item) {
//     return item.nome
// }
// let apenasNomes = produtos.filter(filtra)
// apenasNomes = apenasNomes.map(filtra)

// console.log(apenasNomes)


// Item b)

// let novaSelecao = produtos.map((item) => {
//     return {
//         nome: item.nome,
//         preco: item.preco * 0.95
//     }
// })

// console.log(novaSelecao)


// Item c)

// function filtraRefrigerantes(item) {
//     return item.categoria === "Bebidas"
// }

// let bebidas = produtos.filter(filtraRefrigerantes)

// console.log(bebidas)


// Item d)

// function filtraYpe(item) {
//     return item.nome.includes("Ypê")
// }

// let filtrandoYpe = produtos.filter(filtraYpe)

// console.log(filtrandoYpe)


// Item e)

// let fraseSabao = produtos.filter(item => item.nome.includes("Ypê")).map(item => "Compre " + item.nome + " por " + item.preco + "." )

// console.log(fraseSabao)




