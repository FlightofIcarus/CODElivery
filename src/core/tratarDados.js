import readlineSync from './node_modules/readline-sync/lib/readline-sync.js'
readlineSync.setDefaultOptions({ inputEncoding: 'utf-8', outputEncoding: 'utf-8' }); // faz com que o readlineSync reconheça caracteres especiais.

// TRATAR O CASE 8 PRA FRENTE

export function tratarUmNumero (temResultado, result){
    let num1
    if(temResultado === false){
    num1 = parseInt(readlineSync.question('digite o valor a ser calculado: '))
    } else { 
    num1 = result;
    }   
    return num1;
}

 export function tratarDoisNumeros(temResultado, result, opcao){
        console.log(opcao);
        console.log(opcao);
        console.log(opcao);
        let num1, num2;
        if(temResultado === false){
        num1 = parseInt(readlineSync.question('digite o primeiro valor: '))
        } else { 
        num1 = result;
        }
        if (opcao === 6) { // mensagem específica para opção de porcentagem
            num2 = parseInt(readlineSync.question('digite qual porcentagem quer calcular: '))
        } else if (opcao === 7) { // mensagem específica para opção de expoente
            num2 = parseInt(readlineSync.question('digite o expoente a ser calculado: '))
        }
        else {
            num2 = parseInt(readlineSync.question('digite o segundo valor: '))
        }
        return [num1, num2];
}

export function tratarArray(){
    let entradaLadosPoligono // essa tratativa é feita, para caso o usuário deseje calcular o perímetro uma segunda vez, a variável não esteja em Zero, o que impediria o laço FOR de ser iniciado
    let ladosDoPoligono = []; // array é esvaziado
    for (let i = 0; entradaLadosPoligono !== 0; i++) {
        console.log('digite um dos lados do perímetro do polígono a serem calculados: \n Para finalizar e calcular, digite: 0 \n')
        entradaLadosPoligono = parseInt(readlineSync.question());  
        ladosDoPoligono[i] = entradaLadosPoligono;
        } // fim do for
    return ladosDoPoligono;
}



