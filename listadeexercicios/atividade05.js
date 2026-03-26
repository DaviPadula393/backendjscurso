//Escreva um programa que calcule o IMC de um indivíduo, utilizando a fórmula

//IMC = peso / altura2

let peso = parseFloat(prompt("Digite o peso em kg:"));
let altura = parseFloat(prompt("Digite a altura em metros:"));

let imc = peso / (altura * altura);

alert("O IMC é: " + imc.toFixed(2));