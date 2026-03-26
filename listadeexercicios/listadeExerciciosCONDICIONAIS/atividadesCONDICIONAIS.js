/*1. Faça um programa que solicite a idade de uma pessoa e exiba se ela é maior de idade ou
não.*/

let idade = parseInt(prompt("Digite a sua idade: "));

if (idade >= 18) {
    console.log("Você é maior de idade.");
} else {
    console.log("Você é menor de idade.");
}

/*2. Faça um programa que leia dois números e informe qual é o maior.*/

let num1 = parseFloat(prompt("Digite o primeiro número: "));
let num2 = parseFloat(prompt("Digite o segundo número: "));

if (num1 > num2) {
    console.log("O maior número é: " + num1);
} else if (num2 > num1) {
    console.log("O maior número é: " + num2);
} else {
    console.log("Os números são iguais.");
}

/*3. Escreva um programa que solicite três números ao usuário e exiba o maior deles.*/

let numero1 = parseFloat(prompt("Digite o primeiro número: "));
let numero2 = parseFloat(prompt("Digite o segundo número: "));
let numero3 = parseFloat(prompt("Digite o terceiro número: "));

let maiorNumero;

if (numero1 >= numero2 && numero1 >= numero3) {
    maiorNumero = numero1;
} else if (numero2 >= numero1 && numero2 >= numero3) {
    maiorNumero = numero2;
} else {
    maiorNumero = numero3;
}

console.log("O maior número é: " + maiorNumero);

/*4. Faça um programa que leia um número e informe se ele é par ou impar.*/

let numero = parseInt(prompt("Digite um número: "));

if (numero % 2 === 0) {
    console.log("O número é par.");
} else {
    console.log("O número é ímpar.");
}

/*5. Faça um programa que leia um número e informe se ele é positivo, negativo ou zero.*/

let numero02 = parseFloat(prompt("Digite um número: "));

if (numero2 > 0) {
    console.log("O número é positivo.");
} else if (numero2 < 0) {
    console.log("O número é negativo.");
} else {
    console.log("O número é zero.");
}

/*6. Faça um programa que leia as notas de duas provas e informe se o aluno foi aprovado
(nota maior ou igual a 6) ou reprovado (nota menor que 6) em cada uma das provas.*/

let nota1 = parseFloat(prompt("Digite a nota da primeira prova: "));
let nota2 = parseFloat(prompt("Digite a nota da segunda prova: "));

if (nota1 >= 6) {
    console.log("Aluno aprovado na primeira prova.");
} else {
    console.log("Aluno reprovado na primeira prova.");
}

if (nota2 >= 6) {
    console.log("Aluno aprovado na segunda prova.");
} else {
    console.log("Aluno reprovado na segunda prova.");
}

/*7. Faça um programa que leia as notas de duas provas, calcule a média aritmética simples, e
informe se o aluno foi aprovado (média maior ou igual a 6) ou reprovado (média menor que
6).*/

let notaProva1 = parseFloat(prompt("Digite a nota da primeira prova: "));
let notaProva2 = parseFloat(prompt("Digite a nota da segunda prova: "));

let media = (notaProva1 + notaProva2) / 2;

if (media >= 6) {
    console.log("Aluno aprovado com média: " + media);
} else {
    console.log("Aluno reprovado com média: " + media);
}

/*8. Faça um programa que leia três números, e informe se a soma deles é divisível por 5 ou
não.*/

let numeroA = parseFloat(prompt("Digite o primeiro número: "));
let numeroB = parseFloat(prompt("Digite o segundo número: "));
let numeroC = parseFloat(prompt("Digite o terceiro número: "));

let soma = numeroA + numeroB + numeroC;

if (soma % 5 === 0) {
    console.log("A soma dos números é divisível por 5.");
} else {
    console.log("A soma dos números não é divisível por 5.");
}

/*9. Crie um programa que leia três números e verifique se a soma deles é positiva, negativa
ou igual a zero.*/

let numA = parseFloat(prompt("Digite o primeiro número: "));
let numB = parseFloat(prompt("Digite o segundo número: "));
let numC = parseFloat(prompt("Digite o terceiro número: "));

let somaTotal = numA + numB + numC;

if (somaTotal > 0) {
    console.log("A soma dos números é positiva.");
} else if (somaTotal < 0) {
    console.log("A soma dos números é negativa.");
} else {
    console.log("A soma dos números é igual a zero.");
}

/*10. Faça um programa que leia três números e informe qual é o maior e qual é o menor*/

let numeroX = parseFloat(prompt("Digite o primeiro número: "));
let numeroY = parseFloat(prompt("Digite o segundo número: "));
let numeroZ = parseFloat(prompt("Digite o terceiro número: "));

let maiorNumero2;
let menorNumero;

if (numeroX >= numeroY && numeroX >= numeroZ) {
    maiorNumero2 = numeroX;
} else if (numeroY >= numeroX && numeroY >= numeroZ) {
    maiorNumero2 = numeroY;
} else {
    maiorNumero2 = numeroZ;
}

if (numeroX <= numeroY && numeroX <= numeroZ) {
    menorNumero = numeroX;
} else if (numeroY <= numeroX && numeroY <= numeroZ) {
    menorNumero = numeroY;
} else {
    menorNumero = numeroZ;
}

console.log("O maior número é: " + maiorNumero2);
console.log("O menor número é: " + menorNumero);

/*11. Faça um programa que leia a idade de três pessoas e informe se alguma delas é maior de
idade (idade maior ou igual a 18), se todas são maiores de idade, ou se todas são menores
de idade (idade inferior a 18 anos).*/

let idade1 = parseInt(prompt("Digite a idade da primeira pessoa: "));
let idade2 = parseInt(prompt("Digite a idade da segunda pessoa: "));
let idade3 = parseInt(prompt("Digite a idade da terceira pessoa: "));

if (idade1 >= 18 || idade2 >= 18 || idade3 >= 18) {
    console.log("Alguma das pessoas é maior de idade.");
} else if (idade1 < 18 && idade2 < 18 && idade3 < 18) {
    console.log("Todas as pessoas são menores de idade.");
} else {
    console.log("Todas as pessoas são maiores de idade.");
}

/*12. Faça um programa que leia o ano de nascimento de uma pessoa e informe se ela está
apta a votar (idade maior ou igual a 16 anos).
Para capturar o ano corrente, utilize o seguinte código

const anoAtual = New Date().getFullYear();*/

const anoAtual = new Date().getFullYear();
let anoNascimento = parseInt(prompt("Digite o ano de nascimento: "));

let idadePessoa = anoAtual - anoNascimento;

if (idadePessoa >= 16) {
    console.log("Você está apto a votar.");
} else {
    console.log("Você não está apto a votar.");
}

/*13. Faça um programa que leia a idade de uma pessoa e informe se ela não está apta a votar
(idade inferior a 16 anos); se está apta a votar, porém não é obrigada (16, 17 anos ou idade
igual ou superior a 70 anos), ou se é obrigada (18 a 69 anos).*/

let idadePessoa2 = parseInt(prompt("Digite a sua idade: "));

if (idadePessoa2 < 16) {
    console.log("Você não está apto a votar.");
} else if ((idadePessoa2 >= 16 && idadePessoa2 < 18) || idadePessoa2 >= 70) {
    console.log("Você está apto a votar, mas não é obrigado.");
} else {
    console.log("Você é obrigado a votar.");
}

/*14. Faça um programa que solicite o nome de um dia da semana e exiba se é um dia útil
(segunda a sexta-feira) ou um dia de fim de semana (sábado ou domingo).*/

let diaSemana = prompt("Digite o nome de um dia da semana: ").toLowerCase();

if (diaSemana === "segunda-feira" || diaSemana === "terça-feira" || diaSemana === "quarta-feira" || diaSemana === "quinta-feira" || diaSemana === "sexta-feira") {
    console.log("É um dia útil.");
} else if (diaSemana === "sábado" || diaSemana === "domingo") {
    console.log("É um dia de fim de semana.");
} else {
    console.log("Dia da semana inválido.");
}

/*15. Escreva um programa que solicite a altura da pessoa em metros (errado: 182 cm;
correto: 1.72 metros) e calcule o seu índice de massa corporal (IMC), exibindo a categoria
correspondente:
1) Menor que 18.5 – Abaixo do peso
2) Menor que 25 – Peso normal
3) Menor que 30 – Sobrepeso
4) Menor que 35 – Obesidade
5) Maior que 35 – Obesidade Grave*/

let altura = parseFloat(prompt("Digite a sua altura em metros: "));
let peso = parseFloat(prompt("Digite o seu peso em kg: "));

let imc = peso / (altura * altura);

if (imc < 18.5) {
    console.log("Abaixo do peso. IMC: " + imc.toFixed(2));
} else if (imc < 25) {
    console.log("Peso normal. IMC: " + imc.toFixed(2));
} else if (imc < 30) {
    console.log("Sobrepeso. IMC: " + imc.toFixed(2));
} else if (imc < 35) {
    console.log("Obesidade. IMC: " + imc.toFixed(2));
} else {
    console.log("Obesidade Grave. IMC: " + imc.toFixed(2));
}

/*16. Escreva um programa que solicite um número inteiro e verifique se é divisível por 3 e por
5 ao mesmo tempo.*/

let numeroInteiro = parseInt(prompt("Digite um número inteiro: "));

if (numeroInteiro % 3 === 0 && numeroInteiro % 5 === 0) {
    console.log("O número é divisível por 3 e por 5 ao mesmo tempo.");
} else {
    console.log("O número não é divisível por 3 e por 5 ao mesmo tempo.");
}

/*17. Faça um programa que solicite dois números e exiba se o primeiro é divisível pelo
segundo.*/

let numero1Divisivel = parseFloat(prompt("Digite o primeiro número: "));
let numero2Divisivel = parseFloat(prompt("Digite o segundo número: "));

if (numero1Divisivel % numero2Divisivel === 0) {
    console.log("O primeiro número é divisível pelo segundo.");
} else {
    console.log("O primeiro número não é divisível pelo segundo.");
}

