function Pessoa() {
  this.idade = 0;
  setInterval(
    function() {
      this.idade++; //Ou self.idade++, retirando o bind da 7a linha
      console.log(this.idade);
    }.bind(this), //sem o bind, o codigo gera NaN
    1000
  );
}

new Pessoa();
