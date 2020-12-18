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
            if(this.getRandomNumber(0,1) == 1){
               
                const repeated = Compra.produtos.find(element => element == produtos[i])
                if(repeated){
                    break;
                }
                console.log(this.getRandomNumber(0,1) )
                Compra.produtos.push(produtos[i]);
            }
        }
  
        return Compra;
    }

    getRandomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      };
}

module.exports = new Utilities;