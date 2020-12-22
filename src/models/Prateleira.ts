import Produto from "./Produto";

class Prateleira {
  private produtos: Array<Produto>;


  constructor() {
    this.produtos = [];
  }

  adicionarProduto(produto: Produto) {
    this.produtos.push(produto);
    console.log('\nProduto adicionado!\n');
    for (let i = 0; i < this.produtos.length; i++) {
      console.log(
        `${this.produtos[i].getNome()}: ` +
          `R$ ${this.produtos[i].getPreco()},00`,
      );
    }
  }

  getProdutos(){
    return this.produtos;
  }

}

export default new Prateleira();
