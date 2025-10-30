//Exemplo 1 — Dobrar os valores de um array

/*const numeros = [1,2,3,4];

const dobrados = numeros.map(num => num * 2);

console.log(dobrados);


//Exemplo 3 — Transformar um array de objetos

const alunos = [
    { nome: 'Ana', nota: 8 },
    { nome: 'Bruno', nota: 5 },
    { nome: 'Clara', nota: 9 },
    { nome: 'Jonas', nota: 7 },
    { nome: 'Julia', nota: 1 },
    { nome: 'Renato', nota: 3 },
];

const nomes = alunos.map(aluno =>{
    console.log(Object.keys(aluno));
   return aluno.nome
});

const notas = alunos.map(aluno =>{
    return aluno.nota
});

console.log(nomes);
console.log(notas);


const aprovados = alunos.filter(aluno => aluno.nota >= 6);
const reprovados = alunos.filter(function(aluno){
    return aluno.nota < 6
});

console.log('vocês foram', aprovados, 'APROVADOS!!');
console.log('infelizmente você foi', reprovados, 'reprovados :(');*/


const numeros = [1,2,3,4,5];

const soma = numeros.reduce((acum, valor) => acum + valor);

console.log(soma);


const frutas = ['maçã', 'banana', 'maçã', 'laranja', 'abacaxi', 'banana'];

const contagem = frutas.reduce((acum, fruta) => {
    acum[fruta] = (acum[fruta] || 0) + 1;
    return acum;
}, {});

console.log(contagem);

