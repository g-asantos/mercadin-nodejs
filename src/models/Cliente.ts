import Compra from "./Compra";


class Cliente {
  private nome: string;
  private compra: Compra;


  constructor(nome: string, compra: Compra) {
    this.nome = nome;
    this.compra = compra;
  }

  getNome() {
    return this.nome;
  }

  setNome(nome: string) {
    this.nome = nome;
  }

  getCompra() {
    return this.compra;
  }

  setCompra(compra: Compra) {
    this.compra = compra;
  }
}

export default Cliente;
