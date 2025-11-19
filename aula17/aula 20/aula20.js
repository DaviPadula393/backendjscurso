function saudacao(nome) {

  return function() {

    console.log(`Olá, ${nome}!`);

  };

}


const mensagem = saudacao("Davi");

mensagem();

function contador() {

  let count = 0;
  console.log('Valor atual do count', 0);


  return function() {

    count++;

    console.log(count);

  };

}


const incrementar = contador();


incrementar(); // 👉 1

incrementar(); // 👉 2

incrementar(); // 👉 3

function banco() {

  let saldo = 100;

  return {

    depositar(valor) { saldo += valor; },

    consultar() { console.log(`Saldo: R$ ${saldo}`); }

  };

}

const conta = banco();

conta.depositar(50);

conta.consultar(); // 👉 "Saldo: R$150"



