class Lancamento {
  constructor(nome = 'generico', valor = 0) {
    this.nome = nome
    this.valor = valor
  }
}

class CicloFinanceiro {
  constructor(mes, ano) {
    this.mes = mes
    this.ano = ano
    this.lancamentos = []
  }

  addLancamentos(...lancamentos) {
    console.log(lancamentos)
    lancamentos.forEach(l => this.lancamentos.push(l))
  }

  sumario() {
    let valorConsolidado = 0
    this.lancamentos.forEach(l => {
      valorConsolidado += l.valor
    })
    return valorConsolidado
  }
}

const salario = new Lancamento('Salario', 45000)
const contaDeLuz = new Lancamento('Luz', -220)
const escola = new Lancamento('Escola', -1000)

const contas = new CicloFinanceiro(6, 2018)

contas.addLancamentos(salario, contaDeLuz, escola)

console.log(contas.sumario())
console.log()