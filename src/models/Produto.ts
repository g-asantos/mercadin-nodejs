
class Produto {
  private nome: string;
  private preco: string;

  constructor(nome: string, preco: string) {
    this.nome = nome;
    this.preco = preco;
  }

  getNome() {
    return this.nome;
  }

  setNome(nome: string) {
    this.nome = nome;
  }

  getPreco() {
    return this.preco;
  }

  setPreco(preco: string) {
    this.preco = preco;
  }
}

export default Produto;
