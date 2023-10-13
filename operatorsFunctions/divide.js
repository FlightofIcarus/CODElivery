function divide(number1, number2) {
    if (number2 === 0) {
        return 'Erro: Divisão por zero!';
    }
    return number1 / number2;
}

module.exports = divide;
