/*Crie um programa que calcule e exiba o perímetro de um círculo, solicitando o raio ao
usuário. Utilize Math.PI para o cálculo*/

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite o raio do círculo: ', (raio) => {
  const perimetro = 2 * Math.PI * parseFloat(raio);
  console.log(`O perímetro do círculo é: ${perimetro.toFixed(2)}`);
  rl.close();
});