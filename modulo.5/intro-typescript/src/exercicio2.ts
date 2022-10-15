const userInput = require("readline-sync")

function imprimeTresCoresFavoritas() {
    const cor1 = userInput.question.prompt("Insira sua primeira cor favorita")
    const cor2 = userInput.question.prompt("Insira sua segunda cor favorita")
    const cor3 = userInput.question.prompt("Insira sua terceira cor favorita")
    console.log([cor1, cor2, cor3])
 }

 imprimeTresCoresFavoritas();