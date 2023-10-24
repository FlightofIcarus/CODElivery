// Importação do readline para entrada de dados via console
import readlineSync from './node_modules/readline-sync/lib/readline-sync.js';

// IMPORTAÇÃO DAS FUNÇÕES DE TRATAMENTO DE DADOS
import { tratarUmNumero } from './tratarDados.js';
import { tratarDoisNumeros } from './tratarDados.js';
import { tratarArray } from './tratarDados.js';
import { resultado } from './resultado.js';


//let readlineSync = require('readline-sync');

readlineSync.setDefaultOptions({ inputEncoding: 'utf-8', outputEncoding: 'utf-8' }); // faz com que o readlineSync reconheça caracteres especiais.
// Declaração das variáveis
let opcao, num1, num2, result, continuar, entradaLadosPoligono, ladosDoPoligono = [], resultadoTratado = [];
let temResultado = false; // variavel que verifica se já foi realizado algum cálculo, para
//informar ao programa que deve utilizar o valor já obtido de um cálculo, nos próximos.
//import { tratarNumeros } from '../core/tratarDados.js'; // importar função de tratar dados
// import pkg from '../core/tratarDados.js';
//const { tratarDados } = pkg


menu(); //o Menu é chamado assim que inicia a aplicação.



 

export function menu(){ // início da função menu, na qual apresentará o mesmo para o usuário, dando-lhe as opções de cálculos e invocando seus respectivos métodos.
  console.log("Bem vindo(a) a calculadora CODElivery!");
  console.log("Qual operação deseja efetuar? \n\n 1 - Soma \n 2 - Subtração \n 3 - Multiplicação \n 4 - Divisão \n 5 - Raiz Quadrada \n 6 - Percentual \n 7 - Potenciação \n 8 - Perímetro de um polígono \n 9 - Cálculo de área \n 10 - Cálculo de volume \n 11 - Finalizar Programa\n ");

do { // loop que será executado até o usuário solicitar o fim do programa na opção 11.
   opcao = parseInt(readlineSync.question('Digite um valor: ')); // valor digitado é convertido para number
  switch(opcao) {
    
    case 1:
      console.log('\n Opção: Soma')
      resultadoTratado = tratarDoisNumeros(temResultado, result, opcao);
      num1 = resultadoTratado[0];
      num2 = resultadoTratado[1];
      console.log(num1, '', num2)
      result = sum(num1, num2); 
      resultado(result, temResultado);
      break;
    case 2:
      console.log('Opção: Subtração')
      resultadoTratado = tratarDoisNumeros(temResultado, result);
      num1 = resultadoTratado[0];
      num2 = resultadoTratado[1];
      console.log(num1, '', num2)
      result = subtract(num1, num2); 
      resultado(result, temResultado);
        break;
    case 3:
      console.log('Opção: Multiplicação')
      resultadoTratado = tratarDoisNumeros(temResultado, result);
      num1 = resultadoTratado[0];
      num2 = resultadoTratado[1];
      console.log(num1, '', num2)
      result = multiply(num1, num2); 
      resultado(result, temResultado);
        break;  
    case 4:
      console.log('Opção: Divisão')
      resultadoTratado = tratarDoisNumeros(temResultado, result);
      num1 = resultadoTratado[0];
      num2 = resultadoTratado[1];
      console.log(num1, '', num2);
      result = divide(num1, num2); 
      resultado(result, temResultado);
        break;
    case 5: 
      console.log('Opção: Raiz quadrada')
      resultadoTratado = tratarUmNumero(temResultado, result);
      num1 = resultadoTratado;
      console.log(num1);
      result = squareRoot(num1); 
      resultado(result, temResultado);
        break;
    case 6:
      console.log('Opção: Percentual')
      resultadoTratado = tratarDoisNumeros(temResultado, result, opcao);
      num1 = resultadoTratado[0];
      num2 = resultadoTratado[1];
      console.log(num1, '', num2)
      result = porcentage(num1, num2); 
      resultado(result, temResultado);
        break;
    case 7:
      console.log('Opção: Potenciação')
      resultadoTratado = tratarDoisNumeros(temResultado, result, opcao);
      num1 = resultadoTratado[0];
      num2 = resultadoTratado[1];
      console.log(num1, '', num2)
      result = porcentage(num1, num2); 
      resultado(result, temResultado);
        break;
    case 8:
      console.log('Opção: Perímetro de um polígono')
      resultadoTratado = tratarArray();
      result = perimeter(resultadoTratado);
      console.log(result);
      resultado(result, temResultado);
      break;
    case 9:
      console.log('Opção: cálculo de área')
      console.log('FUNÇÃO AINDA INDISPONÍVEL')
      // aguardando a função, para determinar o formato da entrada de dados e chamada da função
      break;
    case 10:
      console.log('Opção: cálculo de volume')
      console.log('FUNÇÃO AINDA INDISPONÍVEL')
      // aguardando a função, para determinar o formato da entrada de dados e chamada da função
      break;
    case 11:
        console.log('Programa finalizado!')
        break;  
    default:
      console.log('valor inválido')
      break;
  } // fim do switch 
  
} while (opcao !== 8 && continuar === 'S') // o loop irá continuar enquanto o usuário digitar uma das opções válidas, e enquanto optar por continuar executando cálculos.

} // fim da função menu.
