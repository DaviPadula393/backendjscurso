let nome = 'Davi ';
let sobrenome = 'Padula de Lima';

let nomeCompleto = nome + sobrenome;

console.log(nomeCompleto);

let numString = '17'
let idade = 17


numString + numString

console.log(numString == idade);


// caracteres de escape

const endereco = 'Rua Padre Faria, Ouro Preto\\MG';
console.log(endereco);

const bairro = '\nAlto da Cruz';
console.log(bairro);


let campus = 'Ouro Preto';
//tamanho da string 
console.log(campus.length);
//Maiúsculo
console.log(campus.toUpperCase());
//Minusculo
console.log(campus.toLocaleLowerCase());
//o replace troca objetos 
//o replaceALL troca todos os objetos 
let novoCampus = campus.replaceAll('Preto','Branco');
console.log(novoCampus);



// funções 

function soma(x, y){
    return x + y;
}

const resultSoma = soma(4, 6)
console.log('Resultado da soma: ',resultSoma);


function saudacao(){
    console.log('Olá seja bem vindo(a)')
};

let num1 = 21
let num2 = 21
const multiplicacao = function (a, b){
    return a * b;
};

console.log(multiplicacao(num1,num2));


// Arrow function 


const IMC = (peso, altura) => {
    const imc = peso /(altura ** 2)
        