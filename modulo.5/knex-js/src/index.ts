import express, { Request, Response } from "express"
import cors from 'cors'
import knex from "knex";
import dotenv from "dotenv";
import connection from './dataBase/connection'

dotenv.config();

const app = express()

app.use(express.json())
app.use(cors())

// Esse arquivo seria o index.ts
// const getActorById = async (id: string): Promise<any> => {
//     const result = await connection.raw(`
//       SELECT * FROM Actor WHERE id = '${id}'
//     `)

//     return result[0][0]
// }

// Assim a chamada funciona fora dos endpoints com .then()/.catch
// getActorById("001")
//     .then(result => {
//         console.log(result)
//     })
//     .catch(err => {
//         console.log(err)
//     });

// Assim a chamada funciona fora dos endpoints com await
// (async () => {
//     console.log(await getActorById("001"))
// })()


// Ou então podemos chamá-la dentro de um endpoint

app.get("/users", async (req: Request, res: Response): Promise<void> => {
    const id = req.query.id;
    let result;
    try {
        if(id) {
            result = await connection.raw(
                `
                SELECT * FROM Actor WHERE id = ${id}
                `
            )
        } else {
            result = await connection.raw(
                `
                    SELECT * FROM Actor
                `
            )
        }
        res.status(200).send(result[0])
    } catch (error: any) {
        console.log(error.message)
        res.status(500).send("Unexpected error")
    }
})

//-------------------------------------- EXERCÍCIO 1-------------------------------------------------------------
// a) Ele nos devolve as querys que solicitamos ao sql.

// b)
app.get("/users", async (req: Request, res: Response): Promise<void> => {
    const nome = req.query.nome;
    let result;
    try {
        if(nome) {
            result = await connection.raw(
                `
                SELECT * FROM Actor WHERE nome = ${nome}
                `
            )
        } else {
            result = await connection.raw(
                `
                    SELECT * FROM Actor
                `
            )
        }
        res.status(200).send(result[0])
    } catch (error: any) {
        console.log(error.message)
        res.status(500).send("Unexpected error")
    }
})

// c)









    app.listen(3003, () => {
        console.log("Server is running in http://localhost:3003");
    });