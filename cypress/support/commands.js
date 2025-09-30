
// Command to register a new user sucessfully
Cypress.Commands.add('RegisterNewUser', ({ nome, email, password }) => {
    cy.request('POST', '/usuarios', {
        nome,
        email,
        password,
        administrador: "true"
    }).then(res => {
        expect(res.status).to.eq(201)
        expect(res.body.message).to.contain('Cadastro realizado com sucesso')
        return res.body._id;
    })
})

// Command to login successfully and return the authorization token
Cypress.Commands.add('LoginSuccess', (email, password) => {

    cy.request('POST', '/login', {
        email: email,
        password: password
    }).then(res => {
        expect(res.status).to.eq(200)
        expect(res.body).to.have.property('authorization')
        expect(res.body.message).to.contain("Login realizado com sucesso")
        return res.body.authorization;
    })
})

// Command to register a new product successfully
Cypress.Commands.add('RegisterNewProduct', ({ productName, productPrice, productDescription, productQuantity, token }) => {
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

