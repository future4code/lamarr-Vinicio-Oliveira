import { Request, Response } from "express"
import { TProduct } from "../class/TProduct"
import connection from "../database/connection"

export const getProducts = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        // const result = await connection(TABLE_PRODUCTS).select()
        const productDB = new TProduct(connection);
        const result = await productDB.getProduct();
        
        res.status(200).send({ products: result })
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}