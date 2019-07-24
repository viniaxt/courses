//classe nada mais é od que uma funcao escrita de uma forma diferente

class pessoa {
  constructor(nome) {
    this.nome = nome;
  }

  falar() {
    console.log(`meu nome é ${this.nome}`);
  }
}

const p1 = new pessoa("joao");
p1.falar();

const criarPessoa = nome => {
  return {
    falar: () => console.log(`meu nome é ${nome}`)
  };
};
