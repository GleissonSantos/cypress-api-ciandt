import { faker } from '@faker-js/faker';


describe('API - Users Test', () => {

  // Criating a new user successfully
  it('Register user successfully', () => {
    const userName = faker.person.fullName();
    const userEmail = faker.internet.email({ provider: 'teste.com' });
    const userPassword = faker.internet.password();

    cy.request('POST', '/usuarios' , {
      nome: userName,
      email: userEmail,
      password: userPassword,
      administrador: "true"
    }).then(res => {

      expect(res.status).to.eq(201)
      expect(res.body.message).to.contain('Cadastro realizado com sucesso')
    })
  })

  // Trying to create a user with an email that is already registered
  it('Register the same user twice', () => {

    const userName = faker.person.fullName();
    const userEmail = faker.internet.email({ provider: 'teste.com' });
    const userPassword = faker.internet.password();

    cy.RegisterNewUser({ nome: userName, email: userEmail, password: userPassword })
    cy.request({
      method: 'POST',
      failOnStatusCode: false,
      url: '/usuarios',
      body: {
        nome: userName,
        email: userEmail,
        password: userPassword,
        administrador: "true"
      }
    }).then(res => {
      expect(res.status).to.eq(400)
      expect(res.body.message).to.contain('Este email já está sendo usado')
    })

  })

  // Searching for a registered user by their ID
  it('Search registered user by ID', () => {
    const userName = faker.person.fullName();
    const userEmail = faker.internet.email({ provider: 'teste.com' });
    const userPassword = faker.internet.password();

    cy.RegisterNewUser({ nome: userName, email: userEmail, password: userPassword }).then(userId => {
      cy.request('GET', `/usuarios/${userId}`).then(res => {
        expect(res.status).to.eq(200)
        expect(res.body.nome).to.eq(userName) 
        expect(res.body.email).to.eq(userEmail)
        expect(res.body.administrador).to.eq("true")
        expect(res.body._id).to.eq(userId)
      })
    })
  })
})