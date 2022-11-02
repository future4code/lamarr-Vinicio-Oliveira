import cors from 'cors'
import  express, { Request, Response} from 'express'
import { produtos } from './data'

const app = express()

app.use(express.json())
app.use(cors())

// Exercício 1
app.get("/test",(req:Request, res:Response)=>{

    res.status(200).send('Servidor rodando na porta 3003')
})

// Exercício 4
app.put('/produtos/novoProduto', (req:Request, res:Response) => {
    const { name , price } = req.body

    if( !name || !price ) {
        res.status(400).send("Ops, algo deu errado. Confira os parâmetros utilizados")
    }

    const novoProduto = produtos.find((element) => {
        return element.name === name
    })
    if(novoProduto) {
        res.status(400).send("Produto já existente!")
    } else {
        produtos.push({
            id: Date.now().toString(),
            name: name,
            price: price
        })
    }
    res.status(200).send({produtos})
})

// Exercício 5

app.get('/produtos', (req:Request, res:Response) => {
    res.status(200).send(produtos)
})







app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});