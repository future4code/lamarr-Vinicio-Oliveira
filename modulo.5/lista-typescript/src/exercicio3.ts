
enum GENERO {
    ACAO = "ação",
    DRAMA = "drama",
    COMEDIA = "comédia",
    ROMANCE = "romance",
    TERROR = "terror"
}

type Filmes = {
    nome: string,
    ano: number,
    genero: GENERO,
    avaliacao?: number
}

function imprimeFilmes(filme: Filmes[], nome: string, ano: number, genero: GENERO, avaliacao?: number): Filmes {
    const array: Filmes = {
    nome,
    ano,
    genero,
    avaliacao
}
    return array
}

console.table('Duna', 2011, GENERO.ACAO)