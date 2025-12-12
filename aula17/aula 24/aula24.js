//conteudo da aula 24 parte 01
// objetos map

const meuMapa = new Map();

meuMapa.set('nome', 'Davi');
meuMapa.set('idade', 30);
meuMapa.set('cidade', 'Ouro Preto');

console.log(meuMapa);

// Acessando valores
console.log(meuMapa.get('nome')); // Davi
console.log(meuMapa.get('idade')); //30
console.log(meuMapa.get('cidade')); // Ouro Preto

// Verificando se uma chave existe
console.log(meuMapa.has('nome')); // true
console.log(meuMapa.has('pais')); // false

