

Cypress.Commands.add('RegisterNewUser', (userNew) => {
    const userPayload = userNew.nome ? userNew : {
        nome: userNew.nome,
        email: userNew.email,
        password: userNew.password,
        administrador: userNew.administrador || "true"
    };

    return cy.request('POST', '/usuarios', userPayload);
})


Cypress.Commands.add('LoginSuccess', (email, password) => {
    return cy.request('POST', '/login', {
        email: email,
        password: password
    });
})


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

