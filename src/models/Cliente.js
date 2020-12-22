class Cliente {
  constructor(nome, compra) {
    this.nome = nome;
    this.compra = compra;
  }

  getNome() {
    return this.nome;
  }

  setNome(nome) {
    this.nome = nome;
  }

  getCompra() {
    return this.compra;
  }

  setCompra(compra) {
    this.compra = compra;
  }
}

module.exports = Cliente;
