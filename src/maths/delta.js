function calcularDelta(a, b, c) {
  return Math.pow(b, 2) - 4 * a * c;
}

// Exemplo de uso:
const a = 5;
const b = 9;
const c = 2;
const delta = calcularDelta(a, b, c);
console.log("O valor de delta é: " + delta);

module.exports = delta;
