const sequencia = {
  _valor: 1,  //variavel pretendida a ser acessada internamente
  get valor() { return this._valor++ },
  set valor(valor) {
    if (valor > this._valor) {
      this._valor = valor
    }
  }
}

console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = -100000000000  //nao cai dentro do if
console.log(sequencia.valor, sequencia.valor)
