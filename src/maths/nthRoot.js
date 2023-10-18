/**
 * @example
 * const j = 27;
 * const n = 3;
 * const resultado = nthRoot(j, n);
 * console.log(`A raiz ${n}-ésima de ${j} é: ${resultado}`);
 */

function nthRoot(j, n) {
    if (n === 0) {
        throw new Error("O valor de n não pode ser zero.");
    }
    
    if (j < 0 && n % 2 === 0) {
        throw new Error("Não é possível calcular raízes pares de números negativos.");
    }

    if (j < 0) {
        return -Math.pow(-j, 1/n).toFixed(2);
    } else {
        return Math.pow(j, 1/n).toFixed(2);
    }
}

module.exports = nthRoot;