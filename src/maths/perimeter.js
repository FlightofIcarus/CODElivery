/**
 * Calcula o perímetro de um polígono regular.
 *
 * @param {number[]} lados - Um array contendo os comprimentos dos lados do polígono.
 * @returns {number} O perímetro do polígono.
 * 
 * @example
 * const ladosDoPoligono = [3, 4, 5, 6];
 * const perimetroDoPoligono = perimeter(ladosDoPoligono);
 * console.log(`O perímetro do polígono é: ${perimetroDoPoligono}`);
 * Saida: 18
 */

function perimeter(lados) {

    if (lados.length < 3) {
      return "Um polígono deve ter pelo menos 3 lados.";
    }
  
    const perimetro = lados.reduce((total, lado) => total + lado, 0);
  
    return perimetro;
  }