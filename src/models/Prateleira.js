class Prateleira {
  constructor() {
    this.produtos = [];
  }

  adicionarProduto(produto) {
    this.produtos.push(produto);
    console.log('\nProduto adicionado!\n');
    for (let i = 0; i < this.produtos.length; i++) {
      console.log(
        `${this.produtos[i].getNome()}: ` +
          `R$ ${this.produtos[i].getPreco()},00`,
      );
    }
  }
}

module.exports = new Prateleira();
