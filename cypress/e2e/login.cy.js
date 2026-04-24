describe('Login', () => {
  beforeEach(() => {
    //Arrange
    cy.visit('http://localhost:4000')
    cy.screenshot('apos-visitar-pagina')
  })

  it('Login com dados válidos deve permitir entrada no sistema', () => {
    //Act
    cy.fixture('credenciais').then(credenciais => {
      cy.get('#username').click().type(credenciais.valido.usuario)
      cy.get('#senha').click().type(credenciais.valido.senha)
    })

    cy.screenshot('apos-preencher-dados-validos')
    cy.contains('button', 'Entrar').click()
    cy.screenshot('apos-clicar-em-entrar-com-dados-validos')

    //Assert
    cy.contains('h4', 'Realizar Transferência').should('be.visible')
  })

  it('Login com dados inválidos deve apresentar mensagem de erro', () => {
    //Act
    cy.fixture('credenciais').then(credenciais => {
      cy.get('#username').click().type(credenciais.invalido.usuario)
      cy.get('#senha').click().type(credenciais.invalido.senha)
    })
    
    cy.contains('button', 'Entrar').click()

    //Assert
    cy.get('.toast').should('have.text', 'Erro no login. Tente novamente.')
  })
})