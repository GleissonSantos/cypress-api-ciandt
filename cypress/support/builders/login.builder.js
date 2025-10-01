export class LoginBuilder {
  constructor() {
    this.credentials = {
      email: '',
      password: ''
    };
  }

  // Method to set email
  withEmail(email) {
    this.credentials.email = email;
    return this;
  }

  // Method to set password
  withPassword(password) {
    this.credentials.password = password;
    return this;
  }


  // Invalid credentials (for negative tests)
  asInvalidCredentials() {
    this.credentials.email = 'error@teste.com';
    this.credentials.password = 'error';
    return this;
  }

  // Method to build the final object
  build() {
    return { ...this.credentials };
  }

  // Method to start the building process
  static new() {
    return new LoginBuilder();
  }
}
