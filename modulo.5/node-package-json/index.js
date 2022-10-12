//                                       Exercício 1
// a) Utilizamos o process.argv

// -----------------------------------------------------------------------------------------------------------------------------------------

// b) 

// const nome = process.argv[2];
// const idade = Number(process.argv[3]);

// console.log("Olá, " + nome + "! Você tem " + idade + " anos.")

// -----------------------------------------------------------------------------------------------------------------------------------------
/*
const anos = Number(process.argv[4])

function soma (nome, idade, anos) {
    let resSoma = idade + anos

    return `Olá, ${nome}! Você tem ${idade} anos. Em sete anos você terá ${resSoma}` 
}

console.log(soma('Vinício', 30, 7))
*/

// -------------------------------------------------------------------------------------------------------------------------------------------

//                                       Exercício 2

const operacao = process.argv[2];
const n1 = Number(process.argv[3]);
const n2 = Number(process.argv[4]);

let resposta

switch(operacao){
	case "add":
        resposta = n1 + n2
        console.log(resposta)
        break;
	case "subt":
        resposta = n1 - n2
        console.log(resposta)
		break;
	case "mult":
        resposta = n1 * n2
        console.log(resposta)
		break;
	case "div":
        resposta = n1 / n2
        console.log(resposta)
		break;
    default:
        console.log("Escolha uma operação válida")
        break;
}
