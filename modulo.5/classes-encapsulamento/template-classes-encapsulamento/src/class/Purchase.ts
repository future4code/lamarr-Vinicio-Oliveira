export class Purchase {
    constructor(private id: Date, private userId: string, private productId: string, private quantity: number, private totalPrice: string) {
        this.id = id;
        this.userId = userId;
        this.productId = productId;
        this.quantity = quantity;
        this.totalPrice = totalPrice;
    }

    
}