function carro(velocidadeMaxima = 200, delta = 5) {
  // atributo privado
  let velocidadeAtual = 0;

  //metodo publico
  this.acelerar = function () {
    if (velocidadeAtual + delta <= velocidadeMaxima) {
      velocidadeAtual += delta;
    } else {
      velocidadeAtual = velocidadeMaxima;
    }
  };
  //metodo publico
  this.getVelocidadeAtual = function () {
    return velocidadeAtual;
  };
}

const uno = new carro();
uno.acelerar();
uno.acelerar(); //Quanto mais vezes utilizar acelerar, mais aumenta a velocidade atual
console.log(uno.getVelocidadeAtual());

const ferrari = new carro(350, 20);
ferrari.acelerar();
ferrari.acelerar();
ferrari.acelerar();
console.log(ferrari.getVelocidadeAtual());

console.log(typeof carro);
console.log(typeof ferrari);
