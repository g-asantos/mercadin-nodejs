const inquirer = require('inquirer');
const utils = require('../utils');
const cliente = require('../models/Cliente');
const produto = require('../models/Produto');
const prateleira = require('../models/Prateleira');


class Compras{
    main(){

        try{

       
        
        
        let nome;
        let preco;

        var questions = [{
            type: 'expand',
            name: 'select',
            message: `Bem-vindo ao Mercadin!\n(P) Cadastrar produto\n(S) Executar simulação\n(X) Encerrar`,
            choices: [
                {   
                    key: "p",
                    name: "Cadastrar produto",
                    value: "p"
                },
                {   
                    key: "s",
                    name: "Executar simulação",
                    value: "s",
                },
                {   
                    key: "x",
                    name:  "Encerrar",
                    value: "x",
                },  
            ]
          }]


          inquirer.prompt(questions).then((answer) => {

            const choice = (answer.select).toUpperCase()
      


            if(choice == "P"){

                inquirer.prompt({
                    type: "input",
                    name: "product",
                    message: "Digite o nome do produto",
                }).then((answer) => {
                    nome = answer.product;
    
    
                    inquirer.prompt({
                        type: "input",
                        name: "value",
                        message: "Digite o preço do produto",
                    }).then((answer) => {
                        preco = answer.value;
                        
                        const produtoFinal = new produto(nome, preco);
                        prateleira.adicionarProduto(produtoFinal);
                        this.main();
                    })
    
    
                })
            } else if(choice == "S"){
                
               
                const cli = new cliente(utils.geraNome(), utils.geraCompra(prateleira.produtos));
                
                console.log("\n\n" + cli.getNome() + " comprou: ")
                
                cli.getCompra().imprimeItens();

                console.log("por " + `R$ ${cli.getCompra().valorGasto()},00` + "\n");

                this.main();

            } else {
                return;
            }



            




          })    

        
        }catch(err){
            console.log(err);
        }


    }
}

module.exports = new Compras;