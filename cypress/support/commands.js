
// Command to register a new user sucessfully
Cypress.Commands.add('RegisterNewUser', (userNew) => {
    const userPayload = userNew.nome ? userNew : {
        nome: userNew.nome,
        email: userNew.email,
        password: userNew.password,
        administrador: userNew.administrador || "true"
    };

    return cy.request('POST', '/usuarios', userPayload);
})

// Command to login successfully
Cypress.Commands.add('LoginSuccess', (email, password) => {
    return cy.request('POST', '/login', {
        email: email,
        password: password
    });
})

// Command to register a new product successfully
Cypress.Commands.add('RegisterNewProduct', ({ productName, productPrice, productDescription, productQuantity, token }) => {
    return cy.request({
        method: 'POST',
        url: '/produtos',
        headers: { authorization: token },
        body: {
            nome: productName,
            preco: productPrice,
            descricao: productDescription,
            quantidade: productQuantity
        }
    });
})

