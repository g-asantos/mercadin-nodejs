class Compra{
    
    constructor(){
        this.produtos = [];
    }


    valorGasto(){
        let soma = 0;

        for(let i = 0; i < this.produtos.length; i++){
            soma += Number(this.produtos[i].preco);
        }

        return soma;
    }

    imprimeItens(){
        for(let i = 0; i < this.produtos.length; i++){
            console.log(this.produtos[i].getNome() + ",");
        }
    }
}

module.exports = Compra;