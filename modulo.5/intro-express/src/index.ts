import express, { Request, Response } from "express"
import cors from 'cors'
import { usuarios, Person, posts, TipoPost } from "./data"

const app = express()

app.use(express.json())
app.use(cors())

// Exercício 1
app.get("/", (req: Request, res: Response) => {          
    res.send("Faaaaaala Express")
})

// Exercício 2 e Exercício 3 estão no arquivo data.ts

// Exercício 4

app.get('/usuarios', (req: Request, res: Response) => {
    const todosUsuarios = usuarios.map((usuario) => {
        return usuario.name
    })
    res.send(todosUsuarios)
})

// Exercício 5 e 6 estão no arquivo data.ts

// Exercício 7

app.get('/posts', (req: Request, res: Response) => {
    const todosPosts = posts.map((post) => {
        return post.title
    })
    res.send(todosPosts)
})

// Exercíco 8
app.get('/posts/:userId', (req: Request, res: Response) => {
    const id = req.params.userId
    const userVerifica = posts.filter((post) => {
        return post.userId === Number(id)
    })
    if (!userVerifica) {
        res.status(401).send("Não possui esse id")
    }
    const post = posts.filter((posts) => {
        return posts.userId === Number(id)
    })
    res.status(200).send(userVerifica)
})








app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});