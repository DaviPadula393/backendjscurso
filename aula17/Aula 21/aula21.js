// AULA 21 & ATIVIDADES
// Factory Function

/*function pessoa(nome, sobrenome, idade){
  return{
    nome,
    sobrenome,
    idade,
    nomeCompleto(){
      return `${this.nome}  ${this.sobrenome}`
    }
  };
}

const pessoa1 = pessoa('Davi', 'Padula',17);
const pessoa2 = pessoa('Gabriel', 'Padula',22);
pessoa1.email = 'davipadula86@gmail.com';
pessoa2.curso = 'Backend JS';

console.log(pessoa1);
console.log(pessoa2);

// EXEMPLO 10:

function criarPessoa(nome, idade) {

  return {

    nome,

    idade,

    apresentar() {

      console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);

    }

  };

}


const pessoa3 = criarPessoa("Diego", 32);

const pessoa4 = criarPessoa("Ana", 25);


pessoa3.apresentar(); 


// EXEMPLO 20


function criarContador() {

  let valor = 0;


  return {

    incrementar() {

      valor++;

      console.log(valor);

    },

    obterValor() {

      return valor;

    }

  };

}

const contador = criarContador();

contador.incrementar(); 

contador.incrementar(); 

console.log(contador.valor);*/ 


// ATIVIDADE 

function usuario(nome, sobrenome, agencia, numero, conta){
    let saldo = 0;
    return{
        nome: nome,
        sobrenome: sobrenome,
        agencia: agencia,
        numero: numero,
        conta: conta,
        deposit(saldo) {
         valor += saldo;
         },
        saque(saldo) {
            if(conta === "cc") {
            saldo += valor;
            } else console.log("saque nao autorizado");
        },
        get saldoAtual() {
        return valor;
        },
        get nomeCompleto(){
        return `${this.nome} ${this.sobrenome}`;
        },
    } 
}



usuario1 = usuario("Davi", "Padula", 1234, 12345, "cc");
usuario1 = deposit(500);
usuario1 = saque(200);

function infoCont(){
  console.log(`Dono: ${usuario.nomeCompleto}`);
  console.log(`agencia; ${usuario.agencia}`);
  console.log(`numero ${usuario.numero}`);
  console.log(`conta ${usuario.conta}`);
};
infoCont();