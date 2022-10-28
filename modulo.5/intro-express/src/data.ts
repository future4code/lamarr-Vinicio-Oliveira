// Exercício 2
export type Person = {
   name: string,
   id: number,
   phone: string,
   email: string,
   website: string
}

export const usuarios: Person[] = [
   {
      name: "João",
      id: 28,
      phone: "(00) 1236-4569",
      email: "joao@gmail.com",
      website: "www.joao.com.br"
   },
   {
      name: "José",
      id: 36,
      phone: "(00) 1236-4568",
      email: "jose@gmail.com",
      website: "www.jose.com.br"
   },
   {
      name: "Vinício",
      id: 30,
      phone: "(00) 4563-2569",
      email: "vinicio@gmail.com",
      website: "www.vinicio.com.br"
   },
   {
      name: "Luiz",
      id: 32,
      phone: "(00) 4563-2587",
      email: "luiz@gmail.com",
      website: "www.luiz.com.br"
   },
   {
      name: "Everton",
      id: 29,
      phone: "(00) 7589-6589",
      email: "everton@gmail.com",
      website: "www.everton.com.br"
   }
]


// Exercício 5
export type TipoPost = {
   id: number,
   title: string,
   body: string,
   userId: number
}


// Exercício 6. Eu prefiro criar separado do array de usuarios, deixar bem separado, bem dividido.
export const posts: TipoPost[] =[
   {
      id: 1,
      title: "Postagem 1",
      body: "Hoje é dia 1",
      userId: 101
   },
   {
      id: 2,
      title: "Postagem 2",
      body: "Hoje é dia 2",
      userId: 102
   },
   {
      id: 3,
      title: "Postagem 3",
      body: "Hoje é dia 3",
      userId: 103
   },
   {
      id: 4,
      title: "Postagem 4",
      body: "Hoje é dia 4",
      userId: 104
   },
   {
      id: 5,
      title: "Postagem 5",
      body: "Hoje é dia 5",
      userId: 105
   },

]