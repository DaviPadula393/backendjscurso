/*Escreva um programa que calcule a equação de segundo grau (ax2 + bx + c = 0) utilizando
as fórmulas de Bhaskara.*/

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite os coeficientes a, b e c da equação de segundo grau (ax^2 + bx + c = 0), separados por espaço: ', (input) => {
  const [a, b, c] = input.split(' ').map(parseFloat);
  
  const delta = Math.pow(b, 2) - 4 * a * c;
  
  if (delta < 0) {
    console.log('A equação não possui raízes reais.');
  } else if (delta === 0) {
    const raiz = -b / (2 * a);
    console.log(`A equação possui uma raiz real: ${raiz.toFixed(2)}`);
  } else {
    const raiz1 = (-b + Math.sqrt(delta)) / (2 * a);
    const raiz2 = (-b - Math.sqrt(delta)) / (2 * a);
    console.log(`A equação possui duas raízes reais: ${raiz1.toFixed(2)} e ${raiz2.toFixed(2)}`);
  }
  
  rl.close();
});