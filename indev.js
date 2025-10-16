console.log("ola mundo!");
let nome = "Davi";
const sobrenome = "Padula"
console.log(nome, sobrenome);
// const significa que a variável não pode ser alterado caso tente, dará erro
// let significa que a variável pode ser alterada
// meu primeiro código
// o javascript lê de cima pra baixo da esquerda pra direita, da msm de ler um livro


// lógica de programação 

const num1 = 10;
const num2 = -10

if (num1 < 0 || num2 > 0){
    console.log('num1 + num2 = ',num1 + num2);
}else{
    console.log('Número é MAIOR que zero ', num1 + num2);
}


let futebol = false;
let joelhos = false;
let chuva = false
let sol = true;
let churrasco = true;

if(!joelhos && !chuva){
    console.log('Vou jogar no 2 irmãos');
}else if(!joelhos && chuva && churrasco){
    console.log('Vou jogar no clube');
}else if (!joelhos && !sol && churrasco){
    console.log('vou jogar no Falcatrua')
}else{
    console.log('Vou ficar em casa');
}



const idade = 17;

if (idade >= 18){
    console.log('Maior de idade');
}else if (idade >=16){
    console.log('Menor de idade mas pode votar!');
}else{
    console.log('Menor de idade e não pode votar');
}


