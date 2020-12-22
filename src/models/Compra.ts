import Produto from "./Produto";



class Compra {
  private produtos: Array<Produto>

  constructor() {
    this.produtos = [];
  }

  valorGasto() {
    let soma = 0;

    for (let i = 0; i < this.produtos.length; i++) {
      soma += Number(this.produtos[i].getPreco());
    }

    return soma;
  }

  imprimeItens() {
    for (let i = 0; i < this.produtos.length; i++) {
      console.log(`${this.produtos[i].getNome()},`);
    }
  }

  getProdutos(){
    return this.produtos;
  }
}

export default Compra;
