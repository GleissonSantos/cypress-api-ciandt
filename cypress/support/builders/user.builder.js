import { faker } from '@faker-js/faker';

export class UserBuilder {
  constructor() {

    this.userNew = {
      nome: faker.person.fullName(),
      email: faker.internet.email({ provider: 'teste.com' }),
      password: faker.internet.password(),
      administrador: 'true'  
    };
  }

  withEmail(email) {
    this.userNew.email = email;
    return this;
  }

  build() {
    return { ...this.userNew }; 
  }

  static new() {
    return new UserBuilder();
  }
}
