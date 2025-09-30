import { faker } from '@faker-js/faker';

describe('API - Products', () => {

    // Criating a product requires authentication, so we need to login first
    it('Register product successfully', () => {
        const userName = faker.person.fullName();
        const userEmail = faker.internet.email({ provider: 'teste.com' });
        const userPassword = faker.internet.password();
        const productName = faker.commerce.productName();
        const productPrice = faker.commerce.price({ min: 10, max: 1000, dec: 0, symbol: '' });
        const productDescription = faker.commerce.productDescription();
        const productQuantity = faker.number.int({ min: 1, max: 10 });

        cy.RegisterNewUser({ nome: userName, email: userEmail, password: userPassword })
        cy.LoginSuccess(userEmail, userPassword).then(token => {
            cy.request({
                method: 'POST',
                url: '/produtos',
                headers: { authorization: token },
                body: {
                    nome: productName,
                    preco: productPrice,
                    descricao: productDescription,
                    quantidade: productQuantity
                }
            }).then(res => {
                expect(res.status).to.eq(201)
                expect(res.body.message).to.contain('Cadastro realizado com sucesso')
                return res.body._id;
            })
        })
    })

    // Search a previously registered product by ID and validate the response
    it('Search product previously registered by ID', () => {
        const userName = faker.person.fullName();
        const userEmail = faker.internet.email({ provider: 'teste.com' });
        const userPassword = faker.internet.password();
        const productName = faker.commerce.productName();
        const productPrice = faker.commerce.price({ min: 10, max: 1000, dec: 0, symbol: '' });
        const productDescription = faker.commerce.productDescription();
        const productQuantity = faker.number.int({ min: 1, max: 10 });

        cy.RegisterNewUser({ nome: userName, email: userEmail, password: userPassword })
        cy.LoginSuccess(userEmail, userPassword).then(token => {
            cy.RegisterNewProduct({ 
                productName, 
                productPrice, 
                productDescription, 
                productQuantity,
                token 
            }).then(productId => {
                cy.request({
                    method: 'GET',
                    url: `/produtos/${productId}`,
                    headers: { authorization: token }
                }).then(res => {
                    expect(res.status).to.eq(200)
                    expect(res.body.nome).to.eq(productName)
                    expect(res.body.preco).to.eq(Number(productPrice))
                    expect(res.body.descricao).to.eq(productDescription)
                    expect(res.body.quantidade).to.eq(productQuantity)
                })
            })
        })
    })

    // Editing a product previously registered and validate the response
    it("Edit a product previously registered by ID", () => {
        const userName = faker.person.fullName();
        const userEmail = faker.internet.email({ provider: 'teste.com' });
        const userPassword = faker.internet.password();
        const productName = faker.commerce.productName();
        const productPrice = faker.commerce.price({ min: 10, max: 1000, dec: 0, symbol: '' });
        const productDescription = faker.commerce.productDescription();
        const productQuantity = faker.number.int({ min: 1, max: 10 });

        const newProductName = faker.commerce.productName();
        const newProductPrice = faker.commerce.price({ min: 10, max: 1000, dec: 0, symbol: '' });
        const newProductDescription = faker.commerce.productDescription();  
        const newProductQuantity = faker.number.int({ min: 20, max: 50 });

        cy.RegisterNewUser({ nome: userName, email: userEmail, password: userPassword })
        cy.LoginSuccess(userEmail, userPassword).then(token => {
            cy.RegisterNewProduct({ 
                productName, 
                productPrice, 
                productDescription, 
                productQuantity,
                token 
            }).then(productId => {
                cy.request({
                    method: 'PUT',
                    url: `/produtos/${productId}`,
                    headers: { authorization: token },
                    body: {
                        nome: newProductName,
                        preco: newProductPrice,
                        descricao: newProductDescription,
                        quantidade: newProductQuantity
                    }
                }).then(res => {
                    expect(res.status).to.eq(200)
                    expect(res.body.message).to.contain('Registro alterado com sucesso')
                })
            })
        })
    })

    // Deleting a product previously registered and validate the response
    it('Delete product previously registered by ID', () => {
        const userName = faker.person.fullName();
        const userEmail = faker.internet.email({ provider: 'teste.com' });
        const userPassword = faker.internet.password();
        const productName = faker.commerce.productName();
        const productPrice = faker.commerce.price({ min: 10, max: 1000, dec: 0, symbol: '' });
        const productDescription = faker.commerce.productDescription();
        const productQuantity = faker.number.int({ min: 1, max: 10 });

        cy.RegisterNewUser({ nome: userName, email: userEmail, password: userPassword })
        cy.LoginSuccess(userEmail, userPassword).then(token => {
            cy.RegisterNewProduct({ 
                productName, 
                productPrice, 
                productDescription, 
                productQuantity,
                token 
            }).then(productId => {
                cy.request({
                    method: 'DELETE',
                    url: `/produtos/${productId}`,
                    headers: { authorization: token }
                }).then(res => {
                    expect(res.status).to.eq(200)
                    expect(res.body.message).to.contain('Registro excluído com sucesso')
                })
            })
        })
    })

})