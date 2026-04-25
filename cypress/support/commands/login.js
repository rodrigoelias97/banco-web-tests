Cypress.Commands.add('fazerLoginComCredenciaisValidas', () => {
    cy.fixture('credenciais').then(credenciais => {
        cy.get('#username').click().type(credenciais.valido.usuario)
        cy.get('#senha').click().type(credenciais.valido.senha)
    })

    cy.contains('button', 'Entrar').click()
})

Cypress.Commands.add('fazerLoginComCredenciaisInvalidas', () => {
    cy.fixture('credenciais').then(credenciais => {
      cy.get('#username').click().type(credenciais.invalido.usuario)
      cy.get('#senha').click().type(credenciais.invalido.senha)
    })
    
    cy.contains('button', 'Entrar').click()
})