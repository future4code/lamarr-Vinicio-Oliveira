// Exercício 1 de interpretação de código

// const filme = {
// 	nome: "Auto da Compadecida", 
// 	ano: 2000, 
// 	elenco: [
// 		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
// 		"Virginia Cavendish"
// 		], 
// 	transmissoesHoje: [
// 		{canal: "Telecine", horario: "21h"}, 
// 		{canal: "Canal Brasil", horario: "19h"}, 
// 		{canal: "Globo", horario: "14h"}
// 		]
// }

// console.log(filme.elenco[0])
// console.log(filme.elenco[filme.elenco.length - 1])
// console.log(filme.transmissoesHoje[2])
/*
Neste exercício será impresso:
Matheus Nachtergaele
Virginia Cavendish
E na terceira linha vai ser um objeto com dois itens que é: canal: "Globo" e horário: "14h"

---------------------------------------------------------------------------------------------------------------
*/
// Exercício 2 de interpratação de código

// const cachorro = {
// 	nome: "Juca", 
// 	idade: 3, 
// 	raca: "SRD"
// }

// const gato = {...cachorro, nome: "Juba"}

// const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

// console.log(cachorro)
// console.log(gato)
// console.log(tartaruga)

/* a) 
1° {nome: Juca, idade: 3, raca: SRD}

2° {nome: Juba, idade: 3, raca: SRD}

3° {nome: jubo, idade: 3, raca: SRD}


b) Realizar uma cópis de um inteira objeto para outro, podendo mudar ou adicionar mais itens, se quisermos
uma ou outra propriedade apenas. Essa sintaxe vai nos ajudar muito daqui em diante.
--------------------------------------------------------------------------------------------------------------
*/
// Ecercício 3 de interpretação de código

// function minhaFuncao(objeto, propriedade) {
// 	return objeto[propriedade]
// }

// const pessoa = {
//   nome: "Caio", 
//   idade: 23, 
//   backender: false
// }

// console.log(minhaFuncao(pessoa, "backender"))
// console.log(minhaFuncao(pessoa, "altura"))

/*
a) será impresso:
false 
undefined

b) A primeira linha foi false, porque a pessoa do objeto não é backender e a que cedeu inforaçoes é backender.
A segunda linha foi undefined, porque no objeto não tem nenhuma "chave" com o nome altura.

--------------------------------------------------------------------------------------------------------------
*/
// Exercício 1 de escrita de código

//a)
/*
const pessoa = {
    nome: "Vinício",
    apelidos: [ "Vi", "Vini", "Preto" ],
    
}

function imprimeFrase() {
    const frase = "Eu sou o " + pessoa.nome +  ", mas pode me chamr de " +pessoa.apelidos[0] + ", " + pessoa.apelidos[1]  + " ou " + pessoa.apelidos[2]
    return frase
}

console.log(imprimeFrase())

// b)

const outraPessoa = {
    ...pessoa,
    apelidos: [ "Nego" , "Vin" , "Vinicinho" ],
    }

function imprimeFrase2() {
    const frase = "Eu sou o " + outraPessoa.nome +  ", mas pode me chamr de " + outraPessoa.apelidos[0] + ", " + outraPessoa.apelidos[1]  + " ou " + outraPessoa.apelidos[2]
    return frase
}

console.log(imprimeFrase2())

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Exercício 2 de escrita de código

*/
 
// a)

// const primeiroObjeto = {
//     nome: "Ragnar",
//     idade: 40,
//     profissao: "Viking"
// }

// const segundoObjeto = {
//     nome: "Bjorn",
//     idade: 20,
//     profissao: "Viking"
// }

// b)

// function imprimeObjeto(obj) {
//     let array = [obj.nome, obj.nome.length, obj.idade, obj.profissao, obj.profissao.length]
//     return array
// }

// console.log(imprimeObjeto(primeiroObjeto))
// console.log(imprimeObjeto(segundoObjeto))




/*
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
*/

// Exercício 3 de escrita de código

let carrinho = []

const fruta1 = {
    nome: "abacaxi",
    disponibilidade: true
}

const fruta2 = {
    nome: "Laranja",
    disponibilidade: true
}

const fruta3 = {
    nome: "Banana",
    disponibilidade: true
}

function recebeFruta() {
    console.log(carrinho.push(fruta1, fruta2, fruta3))
    return carrinho
}
console.log(recebeFruta())
























