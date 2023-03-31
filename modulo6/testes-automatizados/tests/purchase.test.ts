describe("simulação de compras", () => {
    test("teste 1", () => {
        const user: User = {
            name: "Vinício",
            balance: 100
        }

        const result = realizaCompra(user, 40)
        expect(result).toEqual({
            name: "Vinício",
            balance: 60
        })
    })

    test("teste 2", () => {
        const user: User = {
            name: "Vinício",
            balance: 30
        }

        const result = realizaCompra(user, 50)
        expect(result).toEqual({
            ...user,
            balance: 60
        })
    })


    test("teste 3", () => {
        const user: User = {
            name: "Vinício",
            balance: 50
        }

        const result = realizaCompra(user, 50)
        expect(result).not.toBeDefined()
    })
})