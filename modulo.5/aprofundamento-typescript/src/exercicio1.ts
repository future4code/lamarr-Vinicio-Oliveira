//                                           Exercício 1

// a)

// const minhaString: string = 10;

/* R: O tipo 'number' não pode ser atirbuído ao tipo string
---------------------------------------------------------------------------------------------------------------------------------------------

 b) 
*/
// const meuNumero: number | string = 10;
/* R: Com o Union Type conseguimos atibuir dois tipos as nossas variáveis
-----------------------------------------------------------------------------------------------------------------------------------------------

 c
*/


enum CoresFav {
    PRETO = 'preto',
    AMARELO = 'amarelo',
    AZUL = 'azul'
}

type Person = {
    name: string,
    idade: number,
    corFavorita: CoresFav
}

const pessoa1: Person = {
    name: "Vinício",
    idade: 30,
    corFavorita: CoresFav.PRETO
}
const pessoa2: Person = {
    name: "Maria",
    idade: 28,
    corFavorita: CoresFav.AMARELO
}
const pessoa3: Person = {
    name: "José",
    idade: 61,
    corFavorita: CoresFav.AZUL
}