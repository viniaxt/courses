//essa function é uma adaptacao da classe do exemplo 82

function pessoa(nome) {
  this.nome = nome;
  this.falar = function() {
    console.log(`meu nome é ${this.nome}`);
  };
}

const p1 = new pessoa("joao");
p1.falar();
