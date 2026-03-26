/*9. Escreva um programa que receba a largura e o comprimento de um retângulo, calcule o
perímetro e a área dele utilizando as fórmulas:

perimetro = 2 * (lado + comprimento)
area = lado * comprimento*/

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite a largura e o comprimento do retângulo, separados por espaço: ', (input) => {
  const [largura, comprimento] = input.split(' ').map(parseFloat);
  
  const perimetro = 2 * (largura + comprimento);
  const area = largura * comprimento;
  
  console.log(`O perímetro do retângulo é: ${perimetro.toFixed(2)}`);
  console.log(`A área do retângulo é: ${area.toFixed(2)}`);
  
  rl.close();
});