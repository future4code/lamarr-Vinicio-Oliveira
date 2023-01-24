import { Knex } from "knex";
import { TABLE_PURCHASES } from "../database/tableNames";
import { Purchase } from "./Purchase";

export class TPurchase {
    constructor( private connection: Knex) {
        this.connection = connection;
    }

    public insertPurchase = async (newPurchase: Purchase) => {
        await this.connection(TABLE_PURCHASES).insert(newPurchase)
    }

    public getPurchase = async () => {
        const result = await this.connection(TABLE_PURCHASES).select();
        return result
    }
}