console.log("exercicio 3");

const contas = [
	{
		email: "astrodev@labenu.com",
		password: "abc123"
	},
	{
		email: "bananinha@gmail.com",
		password: "bananinha"
	}
]

const login = (login, senha) => {
    if(login === contas[0].email && senha === contas[0].password || login === contas[1].email && senha === contas[1].password) {
        console.log("login bem-sucedido") 
    } else {
        console.log("e-mail ou senha incorretos")
    }
}

login('astrodev@labenu.com' , 'abc123')

const loginValidacoes = (login, senha) => {
    if(login !== contas[0].email && senha === contas[0].password) {
        console.log("e-mail incorreto") 
    } else if( login === contas[0].email && senha.length < 6 ) {
        console.log("senha deve ter ao menos 6 caracteres")
    } else if(login === contas[0].email && senha === contas[0].password || login === contas[1].email && senha === contas[1].password) {
        console.log("login bem-sucedido")
    }
}

loginValidacoes('astrodev@labenu.com' , 'abc')
