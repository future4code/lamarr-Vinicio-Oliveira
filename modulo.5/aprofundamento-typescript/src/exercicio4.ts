// a)

type pokemon = {
	name: string,
    types: string,
	healthPoints: number
}

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28
}

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31
}

const pokemon3: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35
}

// b)
// R: "exercicio4": "tsc && node ./build/exercicio4.js",

// c)
// R: No caso desse exercício, ele ja está dentro da pasta src.

// d)
// R: Sim, existe. Podemos transpilar múltiplos arquivos .ts após o tsc 
// dentro da mesma pasta separados por um espaço