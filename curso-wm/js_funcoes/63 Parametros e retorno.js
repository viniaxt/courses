function area(largura, altura) {
  const area = largura * altura;
  if (area > 20) {
    console.log(`Valor acima do permitido: ${area}m2.`);
  } else {
    return area;
  }
}

console.log(area(2, 2));
console.log(area(10, 3));
console.log(area());
console.log(area(2));
console.log(area(3, 4, 5)); // o programa ignora o parametro adicional
