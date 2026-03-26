/*01-Crie um programa que receba duas palavras, informadas pelo usuário, e as concatene,
exibindo a palavra resultante.*/

const prompt = require('prompt-sync')();

function concatenarPalavras() {
    const palavra1 = prompt('Digite a primeira palavra: ');
    const palavra2 = prompt('Digite a segunda palavra: ');

    const resultado = palavra1 + palavra2;

    console.log('A palavra resultante da concatenação é: ' + resultado);
}

concatenarPalavras(); 


/*02-Crie um programa que receba uma frase e substitua todas as letras “a” por “e”.*/

function substituirLetras() {
    const frase = prompt('Digite uma frase: ');

    const resultado = frase.replace(/a/g, 'e');

    console.log('A frase resultante da substituição é: ' + resultado);
}

substituirLetras();

/*03-Escreva um programa que receba um nome e verifique se o mesmo começa com a letra
“A”.*/

function verificarLetraInicial() {
    const nome = prompt('Digite um nome: ');

    if (nome.charAt(0).toUpperCase() === 'A') {
        console.log('O nome começa com a letra "A".');
    } else {
        console.log('O nome não começa com a letra "A".');
    }
}

verificarLetraInicial();

/*4. Faça um programa que leia uma palavra e verifique se a mesma é palíndromo (se pode ser
lida da mesma forma de trás para frente).*/

function verificarPalindromo() {
    const palavra = prompt('Digite uma palavra: ');

    const palavraInvertida = palavra.split('').reverse().join('');

    if (palavra === palavraInvertida) {
        console.log('A palavra é um palíndromo.');
    } else {
        console.log('A palavra não é um palíndromo.');
    }
}

verificarPalindromo();

/*5. Crie um programa que leia duas palavras e verifique se a segunda palavra é um anagrama
da primeira.
Dica: Para verificar se duas palavras são anagramas, você pode seguir estes passos:
1) Converta ambas as palavras para letras minúsculas, garantindo que a comparação
não dependa de maiúsculas ou minúsculas.
2) Transforme cada palavra em um array de caracteres.
3) Ordene os arrays em ordem alfabética.
4) Compare os arrays resultantes: se forem iguais, as palavras são anagramas.*/

function verificarAnagramas() {
    const palavra1 = prompt('Digite a primeira palavra: ').toLowerCase();
    const palavra2 = prompt('Digite a segunda palavra: ').toLowerCase();

    const array1 = palavra1.split('').sort();
    const array2 = palavra2.split('').sort();

    if (array1.join('') === array2.join('')) {
        console.log('As palavras são anagramas.');
    } else {
        console.log('As palavras não são anagramas.');
    }
}

verificarAnagramas();

/*6. Escreva um programa que receba um nome completo e exiba somente o primeiro nome.*/

function exibirPrimeiroNome() {
    const nomeCompleto = prompt('Digite um nome completo: ');

    const primeiroNome = nomeCompleto.split(' ')[0];
    console.log('O primeiro nome é: ' + primeiroNome);
}

exibirPrimeiroNome();

/*7. Faça um programa que receba uma frase e exiba a quantidade de espaços em branco
presentes na mesma.*/

function contarEspacos() {
    const frase = prompt('Digite uma frase: ');

    const quantidadeEspacos = (frase.match(/ /g) || []).length;

    console.log('A quantidade de espaços em branco na frase é: ' + quantidadeEspacos);
}

contarEspacos();

/*8. Crie um programa que leia uma palavra e exiba a quantidade de vogais presentes na
mesma.*/

function contarVogais() {
    const palavra = prompt('Digite uma palavra: ');

    const vogais = palavra.match(/[aeiouAEIOU]/g) || [];
    const quantidadeVogais = vogais.length;

    console.log('A quantidade de vogais na palavra é: ' + quantidadeVogais);
}

contarVogais();

/*9. Escreva um programa que receba um nome completo e exiba o sobrenome (último nome)
primeiro.*/

function exibirSobrenomePrimeiro() {
    const nomeCompleto = prompt('Digite um nome completo: ');

    const partesNome = nomeCompleto.split(' ');
    const sobrenome = partesNome.pop();
    const primeiroNome = partesNome.join(' ');

    console.log('Sobrenome primeiro: ' + sobrenome + ' ' + primeiroNome);
}

exibirSobrenomePrimeiro();