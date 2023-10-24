import { menu } from './menu.js';

export function resultado(result, temResultado) { // essa função é chamada para exibir o resultado, e verificar se o usuário quer continuar calculando.
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

