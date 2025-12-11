function saudacao(nome) {

  return function() {

    console.log(`Olá, ${nome}!`);

  };

}


const mensagem = saudacao("Davi");

mensagem();






/*function contador() {

  let count = 0;
  console.log('Valor atual do count', 0);


  return function() {

    count++;

    console.log(count);

  };

}


const incrementar = contador();


incrementar(); 

incrementar(); 

incrementar(); */

/*function banco() {

  let saldo = 100;

  return {

    depositar(valor) { saldo += valor; },

    consultar() { console.log(`Saldo: R$ ${saldo}`); }

  };

}

const conta = banco();

conta.depositar(50);

conta.consultar(); // 👉 "Saldo: R$150"*/



// ATIVIDADES DA AULA 20


function criarCotador(n) {
    let valor = 0;
    return function() {
        valor += n;
        console.log(valor);
    };
}
let ac1 = criarCotador(2);
let ac2 = criarCotador(5);
ac1();
ac1();
ac1();
ac2();
ac2();



