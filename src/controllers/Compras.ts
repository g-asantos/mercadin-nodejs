import inquirer from 'inquirer';
import utils from '../utils';
import Cliente from '../models/Cliente';
import Produto from '../models/Produto';
import prateleira from '../models/Prateleira';

class Compras {
  main() {
    try {
      let nome: string;
      let preco: string;

      const initialQuestion =
        [{
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
        }];

        const nameQuestion = [{
          type: 'input',
          name: 'product',
          message: 'Digite o nome do produto',
        }];

        const priceQuestion = [{
          type: 'input',
          name: 'value',
          message: 'Digite o preço do produto',
        }];

      inquirer.prompt(initialQuestion).then(answer => {
        const choice = answer.select.toUpperCase();

        if (choice === 'P') {
          inquirer.prompt(nameQuestion).then(productName => {
            nome = productName.product;

            const lettersOnlyRegex = /^[A-Za-z]+$/;
            if (!nome.match(lettersOnlyRegex)) {
              throw new Error('Insert only letters');
            }

            inquirer.prompt(priceQuestion).then(productPrice => {
              preco = productPrice.value;

              const numbersOnlyRegex = /^[0-9]*$/;

              if (!preco.match(numbersOnlyRegex)) {
                throw new Error('Insert only numbers');
              }

              const produtoFinal = new Produto(nome, preco);
              prateleira.adicionarProduto(produtoFinal);
              this.main();
            });
          });
        } else if (choice === 'S') {
          const cli = new Cliente(
            utils.geraNome(),
            utils.geraCompra(prateleira.getProdutos()),
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

export default new Compras();
