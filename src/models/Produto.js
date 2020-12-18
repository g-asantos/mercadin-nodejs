class Produto{

    constructor(nome, preco){
        this.nome = nome;
        this.preco = preco;
    }

    getNome(){
        return this.nome;
    }

    setNome(nome){
        this.nome = nome;
    }

    getPreco(){
        return this.preco;
    }

    setPreco(preco){
        this.preco = preco;
    }
}

module.exports = Produto;