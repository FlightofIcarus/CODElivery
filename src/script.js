const sum = require("./maths/sum");
const multiply = require("./maths/multiply");
const divide = require("./maths/divide");
const power = require("./maths/power");

const shapeList = [
  {
    name: "Quadrado",
    symbol: "□",
    formulaArea: "A = L²",
    formulaPerimeter: "P = 4 x L",
  },
  {
    name: "Retângulo",
    symbol: "▭",
    formulaArea: "A = B × H",
    formulaPerimeter: "P = 2(B + H)",
  },
  {
    name: "Paralelogramo",
    symbol: "▱",
    formulaArea: "A = B × H",
    formulaPerimeter: "P = 2(B + H)",
  },
  {
    name: "Triângulo",
    symbol: "△",
    formulaArea: "A = (B × H) / 2",
    formulaPerimeter: "P = L1 + L2 + L3",
  },
  {
    name: "Losango",
    symbol: "◊",
    formulaArea: "A = (D × d) / 2",
    formulaPerimeter: "P = 4 × L",
  },
  {
    name: "Trapézio",
    symbol: "⏢",
    formulaArea: "A = ((B + b) × H) / 2",
    formulaPerimeter: "P = B + b + L1 + L2",
  },
  {
    name: "Circunferência",
    symbol: "〇",
    formulaArea: "A = π × r²",
    formulaPerimeter: "P = 2 × π × r",
  },
];

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(
  `Para calcular a ÁREA, escolha a figura plana:
0 - Quadrado
1 - Retângulo
2 - Paralelogramo
3 - Triângulo
4 - Losango
5 - Trapézio
6 - Circunferência
`,
  (shapeOption) => {
    console.log(`
Opção escolhida:
${shapeList[shapeOption].symbol} ${shapeList[shapeOption].name}
Fórmula da área:
${shapeList[shapeOption].formulaArea}
`);

    // SQUARE
    if (shapeOption === "0") {
      rl.question("Insira o lado (L): ", (side) => {
        const area = power(Number(side), 2);
        console.log("Área: ", area);
        rl.close();
      });
    }

    // RECTANGLE AND PARALLELOGRAM
    if (shapeOption === "1" || shapeOption === "2") {
      rl.question("Insira a base (B): ", (length) => {
        rl.question("Insira a altura (H): ", (width) => {
          const area = multiply(Number(length), Number(width));
          console.log("Área: ", area);
          rl.close();
        });
      });
    }

    // TRIANGLE
    if (shapeOption === "3") {
      rl.question("Insira a base (B): ", (base) => {
        rl.question("Insira a altura (H): ", (height) => {
          const area = divide(multiply(Number(base), Number(height)), 2);
          console.log("Área: ", area);
          rl.close();
        });
      });
    }

    // RHOMBUS
    if (shapeOption === "4") {
      rl.question("Insira a maior diagonal (D): ", (diagonalBig) => {
        rl.question("Insira a menor diagonal (d): ", (diagonalSmall) => {
          const area = divide(
            multiply(Number(diagonalBig), Number(diagonalSmall)),
            2
          );
          console.log("Área: ", area);
          rl.close();
        });
      });
    }

    // TRAPEZOID
    if (shapeOption === "5") {
      rl.question("Insira a maior base (B): ", (baseBig) => {
        rl.question("Insira a menor base (b): ", (baseSmall) => {
          rl.question("Insira a altura (H): ", (height) => {
            const area = divide(
              multiply(sum(Number(baseBig), Number(baseSmall)), height),
              2
            );
            console.log("Área: ", area);
            rl.close();
          });
        });
      });
    }

    // CIRCLE
    if (shapeOption === "6") {
      rl.question("Insira o raio (r): ", (radius) => {
        const area = multiply(Math.PI, power(Number(radius), 2)).toFixed(2);
        console.log("Área: ", area);
        rl.close();
      });
    }
  }
);
