import { Request, Response } from "express"
import connection from "../database/connection"
import { TABLE_USERS } from "../database/tableNames"
import { User } from "../class/User"
import { TUser } from "../class/TUser"

export const createUser = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const id = req.body.id
        const email = req.body.email
        const password = req.body.password

        if (!email || !password) {
            throw new Error("Body inválido.")
        }

        // const newUser: User = {
        //     id: Date.now().toString(),
        //     email,
        //     password
        // }

        const newUser = new User(id, email, password)
        const userDB = new TUser(connection)
        userDB.insertUser(newUser)
        
        // await connection(TABLE_USERS).insert(newUser)
        // await connection(TABLE_USERS).insert({
        //     id: newUser.id,
        //     email: newUser.email,
        //     password: newUser.password
        // })
        
        res.status(201).send({ message: "Usuário criado", user: newUser })
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}