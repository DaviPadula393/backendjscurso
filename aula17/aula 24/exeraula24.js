// exercício aula 24 

/*Crie a classe Produto com os seguintes atributos:

#nome (privado)

#preco (privado)

categoria (público)

estoque (público, mas com regras especiais)

Esses atributos devem ser recebidos via construtor.*/


class Produto {
  #nome;
  #preco;
  categoria;
  #estoque;

  constructor(nome, preco, categoria, estoque) {
    this.#nome = nome;
    this.#preco = preco;
    Object.defineProperty(this, categoria, {
      value: categoria,
      writable: true,
      enumerable: true,
    });
    Object.defineProperty(this, '#estoque', {
      value: estoque,
      writable: true,
      enumerable: true,
    });
  }
  getNome() {
    return this.#nome;
  }

  getPreco() {
    return this.#preco;
  }

  getEstoque() {
        return this.#estoque;
    }

    setEstoque(novoEstoque) {
        if (typeof novoEstoque === 'number' && novoEstoque >= 0) {
            this.#estoque = novoEstoque;
        } else {
            console.log('Valor inválido para estoque. Deve ser um número não negativo.');
        }
    }
}

/*Crie:

Um getter e setter para nome

O nome deve ser uma string não vazia.

Um getter e setter para preco

O preço deve ser numérico e maior que 0.

Esses getters e setters devem manipular os campos privados #nome e #preco.*/

const produto1 = new Produto('xbox', 2500, 'hollow knight', 10);

console.log(produto1.getEstoque());
produto1.setEstoque(15);
console.log(produto1.getEstoque());

produto1.setEstoque(-5);
console.log(produto1.getEstoque());


console.log(produto1.getNome());
console.log(produto1.getPreco());