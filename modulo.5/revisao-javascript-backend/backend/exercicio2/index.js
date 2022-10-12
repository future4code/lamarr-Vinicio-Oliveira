console.log("exercício 2");

let clientes = [
    { id: 1, nome: "Fulano" },
    { id: 2, nome: "Ciclano" },
    { id: 3, nome: "Beltrano" },
    { id: 4, nome: "Fulana" }
]


const add = (id, nome) => {

    let i

    clientes.push({
        id: id, nome: nome
    })

    for (i = 0; i < clientes.length; i++)
        if (id === clientes[i].id) {
            return "Erro"
        } else {
            return clientes
        }

}

console.log(add(1, "Cachorro"))

let result

const tabuada = (param) => {
    for (let i = 0; i <= 10; i++) {
        if (param === '' || param < 10) {
            result = param * i
            console.log(`${param} x ${i} = ${result}`)
        } else {
            console.log( 'erro')
            break;
        }
    }
}

tabuada(12)