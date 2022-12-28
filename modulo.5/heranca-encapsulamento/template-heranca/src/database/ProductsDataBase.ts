import { User } from "../models/User";
import { BaseDatabase } from "./BaseDatabase";

export class ProductsDatabase extends BaseDatabase {
    public static TABLE_PRODUCTS = "Labe_Products"

    public async getAllProducts() {
        const result = await BaseDatabase
            .connection(ProductsDatabase.TABLE_PRODUCTS)
            .select()
        return result
    }

    public async createProduct(user: User) {
        await BaseDatabase.connection(ProductsDatabase.TABLE_PRODUCTS).insert({
            id: user.getId(),
            email: user.getEmail(),
            password: user.getPassword()
        })
    }

    public async getProductById(id: string) {
        const result = await BaseDatabase.connection(ProductsDatabase.TABLE_PRODUCTS)
        .select()
        .where({ id });
        return result;
    }
}