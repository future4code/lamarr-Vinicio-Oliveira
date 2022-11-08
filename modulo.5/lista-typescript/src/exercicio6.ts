type TipoConta = {
    cliente: string,
    saldoTotal: number,
    debitos: number[]
};

const contasClientes: TipoConta[] = [
	{ cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
	{ cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
	{ cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
	{ cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
	{ cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
	{ cliente: "Soter", saldoTotal: 1200, debitos: [] }
];

const verificaEmprestimo = (clientes: TipoConta[]) => {
    let atualizaSaldo = clientes.map((cliente) => {
        let valor = cliente.debitos.reduce((acc:number, c:number) => acc + c,0);

        return {cliente: cliente.cliente, saldoTotal: (cliente.saldoTotal - valor), debitos: []}
    }).filter((cliente) => {
        return cliente.saldoTotal < 0
    })

    return atualizaSaldo
}

console.log(verificaEmprestimo(contasClientes))