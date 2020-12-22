import Produto from "models/Produto";

import Compra from './models/Compra';

class Utilities {
  private nomes: Array<string>


  constructor() {
    this.nomes = [
      'Sophie',
      'Damares',
      'Marco',
      'Joanna',
      'Rafa',
      'Roberta',
      'Jonathan',
      'Nathalie',
      'Júnior',
      'Guilherme',
      'Victória',
      'Pedro',
      'Mayra',
      'Audrey',
      'JM',
    ];
  }

  geraNome() {
    const randomNumber = Math.floor(Math.random() * 15);
    return this.nomes[randomNumber];
  }

  geraCompra(produtos: Array<Produto>) {
    const compra = new Compra();

    for (let i = 0; i < produtos.length; i++) {
      if (this.getRandomNumber(0, 2) === 1) {
        const repeated = compra.getProdutos().find(
          (element: Produto) => element === produtos[i],
        );
        if (repeated) {
          break;
        }

        compra.getProdutos().push(produtos[i]);
      }
    }

    return compra;
  }

  getRandomNumber(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}

export default new Utilities();
