/*Escreva um programa que calcule o perímetro e a área de um triângulo utilizando as
fórmulas:

perimetro = a + b + c
area = (base * altura)/2*/

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite os lados do triângulo (a, b, c) e a altura, separados por espaço: ', (input) => {
  const [a, b, c, altura] = input.split(' ').map(parseFloat);
  
  const perimetro = a + b + c;
  const area = (a * altura) / 2; // Considerando 'a' como a base
  
  console.log(`O perímetro do triângulo é: ${perimetro.toFixed(2)}`);
  console.log(`A área do triângulo é: ${area.toFixed(2)}`);
  
  rl.close();
});