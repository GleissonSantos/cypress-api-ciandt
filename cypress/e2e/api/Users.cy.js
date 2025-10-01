import { UserBuilder } from '../../support/builders/user.builder';

describe('API - Users Test', () => {

  // Criating a new user successfully
  it('Register user successfully', () => {
    const userNew = UserBuilder.new().build();

    cy.request('POST', '/usuarios', userNew).then(res => {
      expect(res.status).to.eq(201)
      expect(res.body.message).to.contain('Cadastro realizado com sucesso')
    })
  })

  // Trying to create a user with an email that is already registered
  it('Register the same user twice', () => {
    const email = `registered_${Date.now()}@teste.com`;
    const userNew = UserBuilder.new().withEmail(email).build();

    // Creating the first user (should succeed)
    cy.request('POST', '/usuarios', userNew).then(res => {
      expect(res.status).to.eq(201)
      expect(res.body.message).to.contain('Cadastro realizado com sucesso')
    })

    // Trying to create the same user again (should fail)
    cy.request({
      method: 'POST',
      failOnStatusCode: false,
      url: '/usuarios',
      body: userNew
    }).then(res => {
      expect(res.status).to.eq(400)
      expect(res.body.message).to.contain('Este email já está sendo usado')
    })
  })

  // Searching for a registered user by their ID
  it('Search registered user by ID', () => {
    const userNew = UserBuilder.new().build();

    cy.RegisterNewUser(userNew).then(registerRes => {
      //Validating user registration
      expect(registerRes.status).to.eq(201)
      expect(registerRes.body.message).to.contain('Cadastro realizado com sucesso')

      const userId = registerRes.body._id;
      cy.request('GET', `/usuarios/${userId}`).then(res => {
        expect(res.status).to.eq(200)
        expect(res.body.nome).to.eq(userNew.nome)
        expect(res.body.email).to.eq(userNew.email)
        expect(res.body.administrador).to.eq(userNew.administrador)
        expect(res.body._id).to.eq(userId)
      })
    })
  })

  it('Edit user successfully', () => {
    const userNew = UserBuilder.new().build();

    cy.RegisterNewUser(userNew).then(registerRes => {
      //Validating user registration
      expect(registerRes.status).to.eq(201)
      expect(registerRes.body.message).to.contain('Cadastro realizado com sucesso')

      const userId = registerRes.body._id;
      const updatedName = 'altered name';
      const updatedUser = { ...userNew, nome: updatedName };

      cy.request({
        method: 'PUT',
        url: `/usuarios/${userId}`,
        body: updatedUser
      }).then(updateRes => {
        expect(updateRes.status).to.eq(200)
        expect(updateRes.body.message).to.contain('Registro alterado com sucesso')

        // Verifying the update by fetching the user again
        cy.request('GET', `/usuarios/${userId}`).then(getRes => {
          expect(getRes.status).to.eq(200)
          expect(getRes.body.nome).to.eq(updatedName)
          expect(getRes.body.email).to.eq(userNew.email)
          expect(getRes.body.administrador).to.eq(userNew.administrador)
          expect(getRes.body._id).to.eq(userId)
        })
      })
    })
  })
})