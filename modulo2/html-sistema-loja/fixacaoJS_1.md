```function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
  let salario = 2000
  let bonus = qtdeCarrosVendidos * 100
  let salTotal = salario + (0.05 * valorTotalVendas)
  
  return salTotal + bonus

}```