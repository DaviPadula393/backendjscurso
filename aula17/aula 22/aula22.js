//obs: O conteudo a seguir é na vdd um conteudo da aula 24



let produtos = 'Camiseta'
let quantidade = 10;

class Produto {
    constructor(produtos, quantidade) {
        this.produtos = produtos;
        this.quantidade = quantidade;
    }
    addProduto(produtos, quantidade) {
    return this.quantidade += quantidade;
    }

    rmProduto(produtos, quantidade) {
        if(quantidade > this.quantidade){
            return 'Quantidade indisponível'
        }
    return this.quantidade -= quantidade;
    }

    verProduto(produtos){
    return `Produto: ${this.produtos}, Quantidade: ${this.quantidade}`
    }
};
const camiseta = new Produto(produtos, quantidade);
console.log(camiseta.verProduto());
console.log(camiseta.addProduto(produtos, 5));
console.log(camiseta.verProduto());
console.log(camiseta.rmProduto(produtos, 20));
console.log(camiseta.verProduto());
console.log(camiseta.rmProduto(produtos, 10));
console.log(camiseta.verProduto());


// exemplos de criacao de objetos


/*const smartphone = new Object();

for(item in smartphone){
    console.log(item, smartphone[item]);
}*/
 