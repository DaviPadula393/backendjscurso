/*let tempo = 10;
const intervalo = setInterval(function(){
    console.log('Tempo restante:', tempo--);
}, 1000);

setTimeout(function(){
    console.log('Movimento detectado');
}, 3000);

setTimeout(function(){
    if (tempo === 0)
        clearInterval(intervalo);
    console.log('Contagem encerrada');    
}, 10000);/*




/*aula 18*/

const saudacao = function(){
    console.log('Olá mundo!!')
    return 'tudo bem?'
};

console.log(saudacao());


// Arrow Function

const pessoa = {
    nome: 'Davi',
    sobrenome: 'Padula',
    idade: 17,
    nomeCompleto: () =>{
        console.log(pessoa.nome, pessoa.sobrenome);
    }
};


pessoa.nomeCompleto();


// function expression

const soma = function (a, b, ...rest){
    console.log(rest);
    return a + b;
}

console.log(soma(10,20,3,4,5,6,7,8,9,10));



