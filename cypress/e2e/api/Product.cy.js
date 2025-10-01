import { LoginBuilder } from '../../support/builders/login.builder';
import { UserBuilder } from '../../support/builders/user.builder';
import { ProductBuilder } from '../../support/builders/product.builder';

describe('API - Products', () => {

    // Creating a product requires authentication, so we need to login first
    it('Register product successfully', () => {

        // Creating user and product with Builder Pattern
        const newUser = UserBuilder.new().build();
        const newProduct = ProductBuilder.new().build();
        
        cy.RegisterNewUser(newUser).then(registerRes => {
            //Validating user registration
            expect(registerRes.status).to.eq(201)
            expect(registerRes.body.message).to.contain('Cadastro realizado com sucesso')
            
            const sucessLogin = LoginBuilder.new().withEmail(newUser.email).withPassword(newUser.password).build();
            cy.LoginSuccess(sucessLogin.email, sucessLogin.password).then(loginRes => {
                // Validating login
                expect(loginRes.status).to.eq(200)
                expect(loginRes.body).to.have.property('authorization')
                
                const token = loginRes.body.authorization;
                cy.RegisterNewProduct({
                    productName: newProduct.nome,
                    productPrice: newProduct.preco,
                    productDescription: newProduct.descricao,
                    productQuantity: newProduct.quantidade,
                    token 
                }).then(productRes => {
                    // Validating product creation
                    expect(productRes.status).to.eq(201)
                    expect(productRes.body.message).to.contain('Cadastro realizado com sucesso')
                    expect(productRes.body._id).to.be.a('string')
                    expect(productRes.body._id).to.not.be.empty
                })
            })  
        })
    })

    it('Delete product successfully', () => {

        // Creating user and product with Builder Pattern
        const newUser = UserBuilder.new().build();
        const newProduct = ProductBuilder.new().build();
        
        cy.RegisterNewUser(newUser).then(registerRes => {
            //Validating user registration
            expect(registerRes.status).to.eq(201)
            expect(registerRes.body.message).to.contain('Cadastro realizado com sucesso')
            
            const sucessLogin = LoginBuilder.new().withEmail(newUser.email).withPassword(newUser.password).build();
            cy.LoginSuccess(sucessLogin.email, sucessLogin.password).then(loginRes => {
                // Validating login
                expect(loginRes.status).to.eq(200)
                expect(loginRes.body).to.have.property('authorization')
                
                const token = loginRes.body.authorization;
                cy.RegisterNewProduct({
                    productName: newProduct.nome,
                    productPrice: newProduct.preco,
                    productDescription: newProduct.descricao,
                    productQuantity: newProduct.quantidade,
                    token 
                }).then(productRes => {
                    // Validating product creation
                    expect(productRes.status).to.eq(201)
                    expect(productRes.body.message).to.contain('Cadastro realizado com sucesso')
                    expect(productRes.body._id).to.be.a('string')
                    expect(productRes.body._id).to.not.be.empty

                    const productId = productRes.body._id;
                    // Deleting the created product
                    cy.request({
                        method: 'DELETE',
                        url: `/produtos/${productId}`,
                        headers: { authorization: token }
                    }).then(deleteRes => {
                        // Validating product deletion
                        expect(deleteRes.status).to.eq(200)
                        expect(deleteRes.body.message).to.contain('Registro excluído com sucesso')
                    })
                })
            })  
        })
    })
})