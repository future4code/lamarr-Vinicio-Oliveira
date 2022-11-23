import express, { Response, Request } from "express"
import cors from 'cors'
import knex from "knex";
import { connection } from "./Data/connection";

const app = express()

app.use(express.json())
app.use(cors())

//--------------------------------------------- EXERCÍCIO 1 ---------------------------------------------------------

// a)
app.get("/users", async (req: Request, res: Response): Promise<void> => {
    let statusCode
    try {
        let name = req.query.name as string

        if(!name) {
            name = "%"
        }

        const users = await connection("aula48_exercicio")
        .where("name", "like", `%${name}%`)

        if (!users.length) {
            res.statusCode = 404
            throw new Error("No recipes found")
        }

        res.status(200).send(users)

    } catch (error: any) {
        console.log(error)
        res.send(error.message || error.sqlMessage)
    }
})

// b)
app.get("/users/:type?", async (req: Request, res: Response): Promise<void> => {
    let statusCode = 400
    try {
        let type = req.params.type as string

        if (!type) {
            type = "%"
        }

        const users = await connection("aula48_exercicio")
            .where("type", "like", `%${type}%`)

        if (users.length < 1) {
            res.status(404).send("Não foi encontrado esse tipo")
        }

        res.status(200).send(users)

    } catch (error: any) {
        res.send(statusCode).send(error.message)
    }
})

//--------------------------------------------- EXERCÍCIO 2 ---------------------------------------------------------

app.get("/users", async (req: Request, res: Response): Promise<void> => {
    let statusCode = 400
    try {
        let name = req.query.name as string
        let sort = req.query.sort as string
        let order = req.query.order as string

        if(!name) {
            name = "%"
        }

        if(!sort) {
            sort = "name"
        }

        if(sort !== "name" && sort !== "type") { 
            sort = "email"
        }

        if(order && order.toUpperCase() !== "ASC" &&  order.toUpperCase() !== "DESC") {
            order = "ASC"
         }


        const users = await connection("aula48_exercicio")
        .where("name", "like", `%${name}%`)
        .orderBy(sort, order)

        if (!users.length) {
            res.statusCode = 404
            throw new Error("No recipes found")
        }

        res.status(200).send(users)

    } catch (error: any) {
        console.log(error)
        res.send(error.message || error.sqlMessage)
    }
})

//--------------------------------------------- EXERCÍCIO 3 ---------------------------------------------------------

app.get("/users", async (req: Request, res: Response): Promise<void> => {
    let statusCode = 400
    try {
        let size = Number(req.query.size)
        let page = Number(req.query.page)

         if(isNaN(size) || size < 1) {
            size = 5
         }

         if(isNaN(page) || page < 1) {
            page = 1
         }

         let offset = size * (page - 1)

        const users = await connection("aula48_exercicio")
        .limit(size)
        .offset(offset)

        if (!users.length) {
            res.statusCode = 404
            throw new Error("No recipes found")
        }

        res.status(200).send(users)

    } catch (error: any) {
        console.log(error)
        res.send(error.message || error.sqlMessage)
    }
})

//--------------------------------------------- EXERCÍCIO 4 ---------------------------------------------------------

app.get("/users", async (req: Request, res: Response): Promise<void> => {
    let statusCode = 400
    try {
        let name = req.query.name as string
        let sort = req.query.sort as string
        let order = req.query.order as string
        let size = Number(req.query.size)
        let page = Number(req.query.page)

        if(!name) {
            name = "%"
        }

        if(!sort) {
            sort = "name"
        }

        if(sort !== "name" && sort !== "type") { 
            sort = "name"
        }

        if(order && order.toUpperCase() !== "ASC" &&  order.toUpperCase() !== "DESC") {
            order = "DESC"
         }

         if(isNaN(size) || size < 1) {
            size = 5
         }

         if(isNaN(page) || page < 1) {
            page = 1
         }

         let offset = size * (page - 1)

        const users = await connection("aula48_exercicio")
        .where("name", "like", `%${name}%`)
        .orderBy(sort, order)
        .limit(size)
        .offset(offset)

        if (!users.length) {
            res.statusCode = 404
            throw new Error("No recipes found")
        }

        res.status(200).send(users)

    } catch (error: any) {
        console.log(error)
        res.send(error.message || error.sqlMessage)
    }
})




app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});