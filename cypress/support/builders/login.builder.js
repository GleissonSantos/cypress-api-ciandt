export class LoginBuilder {
  constructor() {
    this.credentials = {
      email: '',
      password: ''
    };
  }


  withEmail(email) {
    this.credentials.email = email;
    return this;
  }

  withPassword(password) {
    this.credentials.password = password;
    return this;
  }

  asInvalidCredentials() {
    this.credentials.email = 'error@teste.com';
    this.credentials.password = 'error';
    return this;
  }

  build() {
    return { ...this.credentials };
  }

  static new() {
    return new LoginBuilder();
  }
}
