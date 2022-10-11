console.log("exercicio 4");

const primeiraLista = [
	{
		nome: "Banana"
	},
	{
		nome: "Laranja"
	}
]

const segundaLista= [
	{
		nome: "Laranja"
	},
	{
		nome: "Cebola"
	}
]

const listaFinal = [
    ...primeiraLista, 
    ...segundaLista
]

console.log(listaFinal)