import { LoginBuilder } from '../../support/builders/login.builder';
import { UserBuilder } from '../../support/builders/user.builder';

describe('API - Login ', () => {

    it('login successfully returns authorization token', () => {
        const newUser = UserBuilder.new().build();
        
        cy.RegisterNewUser(newUser).then(registerRes => {
            
            expect(registerRes.status).to.eq(201)
            expect(registerRes.body.message).to.contain('Cadastro realizado com sucesso')
            
            const credentials = LoginBuilder.new()
                .withEmail(newUser.email)
                .withPassword(newUser.password)
                .build();

            cy.request('POST', '/login', credentials).then(loginRes => {
                expect(loginRes.status).to.eq(200)
                expect(loginRes.body).to.have.property('authorization')
                expect(loginRes.body.message).to.contain("Login realizado com sucesso")
                return loginRes.body.authorization;
            })
        })
    })

    it('login with invalid password', () => {
        
        const invalidCredentials = LoginBuilder.new().asInvalidCredentials().build();
        cy.request({
            method: 'POST',
            failOnStatusCode: false,
            url: '/login',
            body: invalidCredentials        
        }).then(res => {
            expect(res.status).to.eq(401)
            expect(res.body.message).to.contain('Email e/ou senha inválidos')
        })
    })
})