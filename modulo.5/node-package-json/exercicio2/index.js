
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