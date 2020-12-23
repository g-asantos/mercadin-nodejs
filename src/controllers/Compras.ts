import inquirer from 'inquirer';
import utils from '../utils';
import Cliente from '../models/Cliente';
import Produto from '../models/Produto';
import prateleira from '../models/Prateleira';

class Compras {
  async main() {
    try {
      let nome: string;
      let preco: string;

      const perguntaInicial =
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

        const perguntaNome = [{
          type: 'input',
          name: 'product',
          message: 'Digite o nome do produto',
        }];

        const perguntaPreco = [{
          type: 'input',
          name: 'value',
          message: 'Digite o preço do produto',
        }];


      const respostaInicial = await inquirer.prompt(perguntaInicial);

      const escolha = respostaInicial.select.toUpperCase();

      if(escolha === 'P'){

        const nomeDoProduto = await inquirer.prompt(perguntaNome);

        nome = nomeDoProduto.product;

        const apenasLetrasRegex = /^[A-Za-z]+$/;


        if (!nome.match(apenasLetrasRegex)) {
              throw new Error('Insira apenas letras');
        }

        const precoDoProduto = await inquirer.prompt(perguntaPreco);

        preco = precoDoProduto.value;

        const apenasNumerosRegex = /^[0-9]*$/;

        if (!preco.match(apenasNumerosRegex)) {
                throw new Error('Insira apenas numeros');
        }

        const produtoFinal = new Produto(nome, preco);
        prateleira.adicionarProduto(produtoFinal);
        this.main()
      } else if(escolha === 'S'){
        const cli = new Cliente(
          utils.geraNome(),
          utils.geraCompra(prateleira.getProdutos()),
        );

        console.log(`\n\n${cli.getNome()} comprou: `);

        cli.getCompra().imprimeItens();

        console.log(`por R$ ${cli.getCompra().valorGasto().toFixed(2)}\n`);

        this.main();
      } else{
        return;
      }

    } catch (err) {
      console.log(err);
    }
  }
}

export default new Compras();
