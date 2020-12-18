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
        const compra = new Compra;

        for(let i = 0; i < produtos.length; i++){
            if(this.getRandomNumber(0,2) === 1){
               
                const repeated = compra.produtos.find(element => element == produtos[i])
                if(repeated){
                    break;
                }
           
                compra.produtos.push(produtos[i]);
            }
        }
  
        return compra;
    }

    getRandomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      };
}

module.exports = new Utilities;