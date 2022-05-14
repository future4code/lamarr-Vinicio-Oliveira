// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    array.sort(ordem)
    function ordem(a, b){
        return a - b
    } 
    return array
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    let arr = []
    for( array of array) {
        if(array % 2 === 0) {
            arr.push(array)
        }
    }
    return arr
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {    
    let arr = []
    for( array of array) {
        if(array % 2 === 0) {
            arr.push(array * array)
        }
    }
    return arr
 
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    let maior = 0
    for(let i = 0; i < array.length; i++){
        let maiorValor = array[i]
        if(maiorValor > maior) {
            maior = maiorValor
        }
    }
  return maior
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
   function maior(num1, num2) {
       if(num1 > num2) {
           return num1
       } else {
           return num2
       }
   }
   function menor(num1, num2) {
       if(num1 > num2) {
           return num2
       } else {
           return num1
       }
   }
   function divisao() {
       let resDivisao = maior(num1, num2) % menor(num1, num2)
       if(resDivisao === 0) {
           return true
       } else {
           return false
       }
   }
   function diferenca(num1, num2) {
       if(num1 > num2) {
           return num1 - num2
       } else {
           return num2 - num1
       }
   }

   let propriedades = {
       maiorNumero: maior(num1, num2), 
       maiorDivisivelPorMenor: divisao(num1, num2),
       diferenca: diferenca(num1, num2)
   }
   return propriedades
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    let numerosPares = [];
    for (let i = 0; numerosPares.length < n; i += 2) {
        numerosPares.push(i);
    }
    return numerosPares;
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    let triangulo
    if( ladoA === ladoB && ladoA && ladoB === ladoC) {
        console.log(triangulo = "Equilátero")
    } else if (ladoA === ladoB && ladoA && ladoB != ladoC || ladoA === ladoC && ladoA && ladoC != ladoB || ladoB === ladoC && ladoB && ladoC != ladoA) {
        console.log(triangulo = "Isósceles")
    } else {
        console.log(triangulo = "Escaleno")
    }
    return triangulo
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    let arr = []
    array.sort(ordem)
    function ordem(a, b) {
        return a - b
    }
    let segundo = array[1]
    let penultimo = array[array.length - 2]
    arr.push(penultimo, segundo)

    return arr
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
    let obj = {
        nome: "O Diabo Veste Prada",
        ano: 2006,
        diretor: "David Frankel",
        atores: ["Meryl Streep", " Anne Hathaway", " Emily Blunt", " Stanley Tucci"]
    }
    let chamada = `Venha assistir ao filme ${obj.nome}, de ${obj.ano}, dirigido por ${obj.diretor} e estrelado por ${obj.atores}.`

    return chamada
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
    let obj = {
        nome: pessoa.nome,
        idade: pessoa.idade,
        email: pessoa.email,
        endereco: pessoa.endereco
    }

    let newObj = {
        ...obj,
        nome: "ANÔNIMO"
        
    }

    return newObj
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
    const pessoasAutorizadas = []
    for (let pessoa of pessoas) {
        if(pessoa.altura > 1.5 && pessoa.idade > 14 && pessoa.idade < 70) {
            pessoasAutorizadas.push(pessoa)   
        }
    }
    return pessoasAutorizadas
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
    const pessoasAutorizadas = []
    const pessoasNaoAutorizadas = []

    for (let pessoa of pessoas) {
        if(pessoa.altura > 1.5 && pessoa.idade > 14 && pessoa.idade < 70) {
            pessoasAutorizadas.push(pessoa)   
        } else {
            pessoasNaoAutorizadas.push(pessoa)
        }
    }
    return pessoasNaoAutorizadas
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
    let soma = 0
    for (let conta of contas){
        for(let i = 0; i < conta.compras.length; i++) {
            soma = soma + conta.compras[i]
        }
        conta.saldoTotal = conta.saldoTotal - soma
        conta.compras = []
        soma = 0
    }
    return contas
}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
    consultas.sort((a, b) => {
        if(a.nome < b.nome) {
            return - 1
        }
        if(a.nome > b.nome) {
            return 1
        }
        return 0
    })
    return consultas
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
 
}










// function retornaArrayOrdenadoPorData(consultas) {
//     function compara(data1, data2) {
//         return data1 < data2
//     }
//     return consultas.sort(compara)
//   }