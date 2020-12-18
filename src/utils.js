const Compra = require('./models/Compra')


class Utilities{
    constructor(){
        this.nomes = ["Sophie", "Damares", "Marco", "Joanna", "Rafa", "Roberta",
        "Jonathan", "Nathalie", "Júnior", "Guilherme", "Victória", "Pedro", "Mayra", "Audrey", "JM"]
    }


    geraNome(){
        const randomNumber = Math.floor(Math.random() * 15);
        return this.nomes[randomNumber];
    }

    geraCompra(produtos){
        for(let i = 0; i < produtos.length; i++){
            if(Math.round(Math.random()) < 1){
                
                const repeated = Compra.produtos.find(element => element == produtos[i])
                if(repeated){
                    break;
                }

                Compra.produtos.push(produtos[i]);
            }
        }
  
        return Compra;
    }
}

module.exports = new Utilities;