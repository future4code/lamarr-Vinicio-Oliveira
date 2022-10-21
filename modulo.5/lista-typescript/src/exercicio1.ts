function frase(nome: string, dataNac: string): string {
    let arr = dataNac.split('/')

    return `Olá me chamo ${nome}, nasci no dia ${arr[0]} do mês de ${arr[1]} do ano de ${arr[2]}`
}

console.log(frase('Vinício', '26/junho/1992'))