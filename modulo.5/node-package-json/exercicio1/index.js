//                                       Exercício 1
// a) Utilizamos o process.argv

// -----------------------------------------------------------------------------------------------------------------------------------------

// b) 

const nome = process.argv[2];
const idade = Number(process.argv[3]);

console.log("Olá, " + nome + "! Você tem " + idade + " anos.")


const anos = Number(process.argv[4])

function soma (nome, idade, anos) {
    let resSoma = idade + anos

    return `Olá, ${nome}! Você tem ${idade} anos. Em sete anos você terá ${resSoma}` 
}

console.log(soma('Vinício', 30, 7))
