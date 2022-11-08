import express, { Request, Response } from "express"
import cors from 'cors'
import { afazeres, Afazer, addAfazer } from "./data"


const app = express()

app.use(express.json())
app.use(cors())

// Exercício 1
app.get("/ping", (req: Request, res: Response) => {          
    res.send("Pong! 🏓")
})

// Exercício 4

// app.get('/afazeres', (req: Request, res: Response) => {
//     const tarefasConcluidas = afazeres.filter((afazer) => {
//         return afazer.completed === true
//     })
//     res.send(tarefasConcluidas)
// })

// Exercício 5
app.post('/afazeres', (req: Request, res: Response) => {
    const {userId, id, title, completed} = req.body

    res.status(200).send(addAfazer(afazeres, 11, 1011, "ir no mercado", true))
})






app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});