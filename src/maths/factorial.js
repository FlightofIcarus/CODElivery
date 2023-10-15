function factorial(n) {
    if (n < 0) {
      return "Fatorial é indefinido para números negativos";
    } else if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * calcularFatorial(n - 1);
    }
  }
  
module.exports = factorial;