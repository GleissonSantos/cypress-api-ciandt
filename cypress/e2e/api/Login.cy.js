import { faker } from '@faker-js/faker';

describe('API - Login ', () => {

    // Login successfully with valid credentials and get the authorization token
    it('login successfully returns authorization token', () => {

        const userName = faker.person.fullName();
        const userEmail = faker.internet.email({ provider: 'teste.com' });
        const userPassword = faker.internet.password();

        cy.RegisterNewUser({ nome: userName, email: userEmail, password: userPassword })
        cy.request('POST', '/login', {
            email: userEmail,
            password: userPassword
        }).then(res => {
            expect(res.status).to.eq(200)
            expect(res.body).to.have.property('authorization')
            expect(res.body.message).to.contain("Login realizado com sucesso")
            return res.body.authorization;
        })
    })

    // Trying to login with an unregistered email and expect a 401 error
    it('login with invalid password', () => {

        cy.request({
            method: 'POST',
            failOnStatusCode: false,
            url: '/login',
            body: {
                email: "incorrectUser@teste.com",
                password: "121234"
            }
        }).then(res => {
            expect(res.status).to.eq(401)
            expect(res.body.message).to.contain('Email e/ou senha inválidos')
        })
    })
})