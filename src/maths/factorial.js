/**
 * Calcula o fatorial de um numero inteirno.
 *
 * @param {number} n - Numero inteiro que será calculado o fatorial.
 * @returns {number} - Resultado fatorial
 * 
 * @example
 * const numero = 4;
 * const fatorial = factorial(numero);
 * console.log(`O fatorial de ${numero} é: ${fatorial}`);
 * Saida: 24
 */
function factorial(n) {
    if (n < 0) {
      return "Fatorial é indefinido para números negativos";
    } else if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  }

module.exports = factorial;