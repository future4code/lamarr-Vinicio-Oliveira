import { Request, Response } from "express"
import connection from "../database/connection"
import { TABLE_PRODUCTS, TABLE_PURCHASES, TABLE_USERS } from "../database/tableNames"
import { Product_data } from "../models/Product"
import { Purchase } from "../class/Purchase"
import { TPurchase } from "../class/TPurchase"

export const createPurchase = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const id = req.body.id
        const userId = req.body.userId
        const productId = req.body.productId
        const quantity = req.body.quantity
        const totalPrice = req.body.totalPrice

        if (!userId || !productId || !quantity) {
            throw new Error("Body inválido.")
        }

        const findUser = await connection(TABLE_USERS)
        .select()
        .where({ id: userId })

        if (findUser.length === 0) {
            errorCode = 404
            throw new Error("Usuário não encontrado.")
        }

        const findProduct = await connection(TABLE_PRODUCTS)
        .select()
        .where({ id: productId })

        if (findProduct.length === 0) {
            errorCode = 404
            throw new Error("Produto não encontrado.")
        }
        
        const product: Product_data = {
            id: findProduct[0].id,
            name: findProduct[0].name,
            price: findProduct[0].price
        }

        // const newPurchase: Purchase = {
        //     id: Date.now().toString(),
        //     userId,
        //     productId,
        //     quantity,
        //     totalPrice: product.price * quantity
        // }
        // await connection(TABLE_PURCHASES).insert({
        //     id: newPurchase.id,
        //     user_id: newPurchase.userId,
        //     product_id: newPurchase.productId,
        //     quantity: newPurchase.quantity,
        //     total_price: newPurchase.totalPrice
        // })

        const newPurchase = new Purchase(id, userId, productId, quantity, totalPrice)
        const purchaseBD = new TPurchase(connection)
        purchaseBD.insertPurchase(newPurchase)


        res.status(201).send({ message: "Compra registrada", purchase: newPurchase })
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}