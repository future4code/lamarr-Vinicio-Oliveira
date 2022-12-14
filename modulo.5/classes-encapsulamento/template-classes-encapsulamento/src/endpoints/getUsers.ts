import { Request, Response } from "express"
import { TUser } from "../class/TUser"
import connection from "../database/connection"
import { TABLE_USERS } from "../database/tableNames"

export const getUsers = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        // const result = await connection(TABLE_USERS).select()
        const userDB = new TUser(connection);
        const result = await userDB.getUser();        
        res.status(200).send({ users: result })
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}