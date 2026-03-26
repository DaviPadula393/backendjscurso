/*1. Faça um programa que exiba os números de 1 a 10 utilizando laço de repetição.*/

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

/*2. Escreva um programa que exiba todos os números de 1 a 100.*/

for (let i = 1; i <= 100; i++) {
    console.log(i);
}

/*3. Escreva um programa que exiba todos os números pares de 1 a 100.*/

for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

/*4. Escreva um programa que exiba os números pares de 1 a 50 e os números ímpares de 51 a
100 utilizando um laço de repetição.*/

for (let i = 1; i <= 100; i++) {
    if (i <= 50 && i % 2 === 0) {
        console.log(i);
    } else if (i > 50 && i % 2 !== 0) {
        console.log(i);
    }
}

/*Crie um programa que solicite ao usuário um número e exiba a tabuada desse número
utilizando um laço de repetição.*/

const numero = parseInt(prompt("Digite um número para exibir a tabuada:"));

console.log(`Tabuada do ${numero}:`);
for (let i = 1; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
}

/*Escreva um programa que imprima na tela a tabuada de todos os números de 1 a 10.*/

for (let num = 1; num <= 10; num++) {
    console.log(`Tabuada do ${num}:`);
    for (let i = 1; i <= 10; i++) {
        console.log(`${num} x ${i} = ${num * i}`);
    }
    console.log(""); // Adiciona uma linha em branco entre as tabuadas
}

/*7. Escreva um programa que solicite ao usuário um número N e exiba a soma de todos os
números de 1 a N.*/

const N = parseInt(prompt("Digite um número N para calcular a soma de 1 a N:"));
let soma = 0;

for (let i = 1; i <= N; i++) {
    soma += i;
}

console.log(`A soma de todos os números de 1 a ${N} é: ${soma}`);

/*8. Faça um programa que calcule e exiba a soma dos números pares de 1 a 100 utilizando
um laço de repetição.*/

let somaPares = 0;

for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        somaPares += i;
    }
}

console.log(`A soma dos números pares de 1 a 100 é: ${somaPares}`);

/*9. Escreva um programa que solicite ao usuário um número n e diga se o mesmo é primo ou
não.*/

const n = parseInt(prompt("Digite um número para verificar se é primo:"));
let isPrimo = true;

if (n <= 1) {
    isPrimo = false;
} else {
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            isPrimo = false;
            break;
        }
    }
}

if (isPrimo) {
    console.log(`${n} é um número primo.`);
}
else {
    console.log(`${n} não é um número primo.`);
}

/*10. Escreva um programa que solicite ao usuário dois números A e B e exiba todos os
números entre eles.*/

const A = parseInt(prompt("Digite o número A:"));
const B = parseInt(prompt("Digite o número B:"));

console.log(`Números entre ${A} e ${B}:`);
for (let i = Math.min(A, B) + 1; i < Math.max(A, B); i++) {
    console.log(i);
}

/*Escreva um programa que leia números do usuário até que seja digitado zero, e exiba
média dos números digitados.*/

let somaNumeros = 0;
let quantidadeNumeros = 0;

while (true) {
    const numero = parseInt(prompt("Digite um número (ou 0 para encerrar):"));
    
    if (numero === 0) {
        break;
    }
    
    somaNumeros += numero;
    quantidadeNumeros++;
}

if (quantidadeNumeros > 0) {
    const media = somaNumeros / quantidadeNumeros;
    console.log(`A média dos números digitados é: ${media}`);
} else {
    console.log("Nenhum número foi digitado.");
}

/*12. Escreva um programa que solicite ao usuário uma lista de números, até o usuário digitar
o número zero, e exiba o maior e o menor número da lista.*/

let numeros = [];
while (true) {
    const numero = parseInt(prompt("Digite um número (ou 0 para encerrar):"));
    
    if (numero === 0) {
        break;
    }
    
    numeros.push(numero);
}

if (numeros.length > 0) {
    const maior = Math.max(...numeros);
    const menor = Math.min(...numeros);
    console.log(`O maior número digitado é: ${maior}`);
    console.log(`O menor número digitado é: ${menor}`);
} else {
    console.log("Nenhum número foi digitado.");
}

/*13. Escreva um programa que solicite ao usuário uma frase e exiba a quantidade de vogais
na frase.*/

const frase = prompt("Digite uma frase:");
const vogais = "aeiouAEIOU";
let quantidadeVogais = 0;

for (let i = 0; i < frase.length; i++) {
    if (vogais.includes(frase[i])) {
        quantidadeVogais++;
    }
}

console.log(`A quantidade de vogais na frase é: ${quantidadeVogais}`);

/*14. Escreva um programa que solicite ao usuário um número e exiba os seus divisores.*/

const numeroDivisores = parseInt(prompt("Digite um número para exibir seus divisores:"));
let divisores = [];

for (let i = 1; i <= numeroDivisores; i++) {
    if (numeroDivisores % i === 0) {
        divisores.push(i);
    }
}

console.log(`Os divisores de ${numeroDivisores} são: ${divisores.join(", ")}`);