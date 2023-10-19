let readlineSync = require('readline-sync');
readlineSync.setDefaultOptions({ inputEncoding: 'utf-8', outputEncoding: 'utf-8' }); // faz com que o readlineSync reconheça caracteres especiais.
let opcao, num1, num2, result, continuar, entradaLadosPoligono, ladosDoPoligono = [];
let temResultado = false; // variavel que verifica se já foi realizado algum cálculo, para
//informar ao programa que deve utilizar o valor já obtido de um cálculo, nos próximos.

menu(); //o Menu é chamado assim que inicia a aplicação.

function resultado(result) { // essa função é chamada para exibir o resultado, e verificar se o usuário quer continuar calculando.
    temResultado = true;
    console.log("\n O resultado da operação é: " + result + "\n");
    do {
    console.log("Deseja realizar outra operação? digite S para sim, ou N para não");
    continuar = readlineSync.question()
    continuar = continuar.toUpperCase(); // coloca em upper case para ser verificado no if.
    if (continuar === 'S'){
      menu();
    } else if (continuar === 'N'){
      console.log("Obrigado por utilizar a calculadora CODElivery!!! \n Até mais!")
    } else {
      console.log("Opção inválida. Por favor, digite S para sim ou N para não.")
    }
  } while (continuar !== 'S' && continuar!== 'N')
}

function menu(){ // início da função menu, na qual apresentará o mesmo para o usuário, dando-lhe as opções de cálculos e invocando seus respectivos métodos.
  console.log("Bem vindo(a) a calculadora CODElivery!");
  console.log("Qual operação deseja efetuar? \n\n 1 - Soma \n 2 - Subtração \n 3 - Multiplicação \n 4 - Divisão \n 5 - Raiz Quadrada \n 6 - Percentual \n 7 - Potenciação \n 8 - Perímetro de um polígono \n 9 - Cálculo de área \n 10 - Cálculo de volume \n 11 - Finalizar Programa\n ");

do { // loop que será executado até o usuário solicitar o fim do programa na opção 9.
   opcao = parseInt(readlineSync.question('Digite um valor: ')); // valor digitado é convertido para number
  
  switch(opcao) {
    case 1:
      console.log('\n Opção: Soma')
      if(temResultado === false){
      num1 = parseInt(readlineSync.question('digite o primeiro valor: '))
      } else { 
      num1 = result;
      }
      num2 = parseInt(readlineSync.question('digite o segundo valor: '))
      result = sum(num1, num2);
      resultado(result);
      break;
    case 2:
      console.log('Opção: Subtração')
      if(temResultado === false){
        num1 = parseInt(readlineSync.question('digite o primeiro valor: '))
        } else { 
        num1 = result;
        }
        num2 = parseInt(readlineSync.question('digite o segundo valor: '))
        result = subtract(num1, num2);
        resultado(result);
        break;
    case 3:
      console.log('Opção: Multiplicação')
      if(temResultado === false){
        num1 = parseInt(readlineSync.question('digite o primeiro valor: '))
        } else { 
        num1 = result;
        }
        num2 = parseInt(readlineSync.question('digite o segundo valor: '))
        result = multiply(num1, num2);
        resultado(result);
        break;  
    case 4:
      console.log('Opção: Divisão')
      if(temResultado === false){
        num1 = parseInt(readlineSync.question('digite o primeiro valor: '))
        } else { 
        num1 = result;
        }
        num2 = parseInt(readlineSync.question('digite o segundo valor: '))
        result = divide(num1, num2);
        resultado(result);
        break;
    case 5:
      console.log('Opção: Raiz quadrada')
      if(temResultado === false){
        num1 = parseInt(readlineSync.question('digite o primeiro valor: '))
        } else { 
        num1 = result;
        }
        result = squareRoot(num1);
        resultado(result);
        break;
    case 6:
      console.log('Opção: Percentual')
      if(temResultado === false){
        num1 = parseInt(readlineSync.question('digite o primeiro valor: '))
        } else { 
        num1 = result;
        }
        num2 = parseInt(readlineSync.question('digite a porcentagem que deseja calcular: '))
        result = porcentage(num1, num2);
        resultado(result);
        break;
    case 7:
      console.log('Opção: Potenciação')
      if(temResultado === false){
        num1 = parseInt(readlineSync.question('digite o primeiro valor: '))
        } else { 
        num1 = result;
        }
        num2 = parseInt(readlineSync.question('digite o expoente a ser calculado: '))
        result = power(num1, num2);
        resultado(result);
        break;
    case 8:
      console.log('Opção: Perímetro de um polígono')
      entradaLadosPoligono = null; // essa tratativa é feita, para caso o usuário deseje calcular o perímetro uma segunda vez, a variável não esteja em Zero, o que impediria o laço FOR de ser iniciado
      ladosDoPoligono = [];
      for (let i = 0; entradaLadosPoligono !== 0; i++) {
      console.log('digite um dos lados do perímetro do polígono a serem calculados: \n Para finalizar e calcular, digite: 0 \n')
      entradaLadosPoligono = parseInt(readlineSync.question());  
      ladosDoPoligono[i] = entradaLadosPoligono;
    } // fim do for
      result = perimeter(ladosDoPoligono);
      resultado(result);
      break;
    case 9:
      console.log('Opção: cálculo de área')
      // aguardando a função, para determinar o formato da entrada de dados e chamada da função
      break;
    case 10:
      console.log('Opção: cálculo de volume')
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

// TESTE DA FUNÇÃO DE CÁLCULO PERÍMETRO DE UM POLÍGONO
function perimeter(lados) {

  if (lados.length < 3) {
    return "Um polígono deve ter pelo menos 3 lados.";
  } else {

  const perimetro = lados.reduce((total, lado) => total + lado, 0);

  return perimetro;
}
}
