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

/* Quando uma requisição chega:


Ela passa pelos middlewares.

Cada middleware decide:

Continuar o processamento

Interromper e retornar uma resposta

Se nenhum middleware interromper, a rota final executa.

Visualmente:/*/
// Middleware 1 -> Middleware 2 -> Middleware 3 -> Rota Final

// Exemplo de middleware
function autenticar(req, res, next) {
  const token = req.headers['authorization'];
  if (token === 'seu-token-aqui') {
    next(); // Continua para o próximo middleware ou rota
  } else {
    res.status(401).send('Não autorizado');
  }
}

// Exemplo de rota usando o middleware
app.get('/dados', autenticar, (req, res) => {
  res.send('Dados protegidos');
});
