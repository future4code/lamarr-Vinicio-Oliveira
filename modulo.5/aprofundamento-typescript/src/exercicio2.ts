type Numeros = {
    maior: number,
    menor: number,
    media: number
}

//a) vamos introduzir um array de números e a saída será um objeto com os números
// maior, menor e média

function obterEstatisticas(numeros: number[]): Numeros {

    const numerosOrdenados: number[] = numeros.sort(
        (a: number, b: number) => a - b
    )
// b) variavel soma tipagem number
    let soma = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}

console.log(obterEstatisticas([5, 10, 15]))

/*
-----------------------------------------------------------------------------------------------------------------------

*/

// c) 

type Amostra = {
    numeros: number[],
    obterEstatisticas: (numeros: number[]) => Numeros
}

const amostraDeIdades: Amostra = {
    numeros: [21, 18, 65, 44, 15, 18],
    obterEstatisticas: obterEstatisticas
}

console.log(amostraDeIdades.obterEstatisticas(amostraDeIdades.numeros))