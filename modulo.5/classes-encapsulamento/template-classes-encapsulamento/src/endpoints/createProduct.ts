import { Request, Response } from "express"
import connection from "../database/connection"
import { TABLE_PRODUCTS } from "../database/tableNames"
import { Product } from "../class/Product"
import { stringify } from "querystring"

export const createProduct = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const id = req.body.id
        const name = req.body.name
        const price = req.body.price

        if (!name || !price) {
            throw new Error("Body inválido.")
        }

        // const newProduct: Product = {
        //     id: Date.now().toString(),
        //     name,
        //     price
        // }

        const newProduct = new Product(id, name, price)

        await connection(TABLE_PRODUCTS).insert(newProduct)

        // await connection(TABLE_PRODUCTS).insert({
        //     id: newProduct.id,
        //     name: newProduct.name,
        //     price: newProduct.price
        // })
        
        res.status(201).send({ message: "Produto criado", product: newProduct })
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}