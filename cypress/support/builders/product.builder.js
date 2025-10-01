import { faker } from '@faker-js/faker';

export class ProductBuilder {
  constructor() {

    this.productData = {
      nome: faker.commerce.productName(),
      preco: parseInt(faker.commerce.price({ min: 10, max: 1000, dec: 0, symbol: '' })),
      descricao: faker.commerce.productDescription(),
      quantidade: faker.number.int({ min: 1, max: 100 })
    };
  }

  build() {
    return { ...this.productData }; 
  }

  static new() {
    return new ProductBuilder();
  }
}
