const inquirer = require('inquirer');
const utils = require('../utils');
const Cliente = require('../models/Cliente');
const Produto = require('../models/Produto');
const prateleira = require('../models/Prateleira');

class Compras {
  main() {
    try {
      let nome;
      let preco;

      const questions = [
        {
          type: 'expand',
          name: 'select',
          message: `Bem-vindo ao Mercadin!\n(P) Cadastrar produto\n(S) Executar simulação\n(X) Encerrar`,
          choices: [
            {
              key: 'p',
              name: 'Cadastrar produto',
              value: 'p',
            },
            {
              key: 's',
              name: 'Executar simulação',
              value: 's',
            },
            {
              key: 'x',
              name: 'Encerrar',
              value: 'x',
            },
          ],
        },
        {
          type: 'input',
          name: 'product',
          message: 'Digite o nome do produto',
        },
        {
          type: 'input',
          name: 'value',
          message: 'Digite o preço do produto',
        },
      ];

      inquirer.prompt(questions[0]).then(answer => {
        const choice = answer.select.toUpperCase();

        if (choice === 'P') {
          inquirer.prompt(questions[1]).then(productName => {
            nome = productName.product;

            inquirer.prompt(questions[2]).then(productPrice => {
              preco = productPrice.value;

              const produtoFinal = new Produto(nome, preco);
              prateleira.adicionarProduto(produtoFinal);
              this.main();
            });
          });
        } else if (choice === 'S') {
          const cli = new Cliente(
            utils.geraNome(),
            utils.geraCompra(prateleira.produtos),
          );

          console.log(`\n\n${cli.getNome()} comprou: `);

          cli.getCompra().imprimeItens();

          console.log(`por R$ ${cli.getCompra().valorGasto().toFixed(2)}\n`);

          this.main();
        } else {
          return;
        }
      });
    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = new Compras();
