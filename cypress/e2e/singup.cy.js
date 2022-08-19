describe('Prueba Registro', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080/login')
    cy.contains('Crear una cuenta').click()
    cy.get('[placeholder="Nombre"]').type('Araceli cueva')
    cy.get('[placeholder="Compañía"]').type('Prueba')
    cy.get('[placeholder="Email"]').type('Prueba')
  })

  // it('abrir el formulario de registro - email errado', () => {
  //   cy.get('[placeholder="mínimo 6 caracteres"]').type('Prueba1')
  //   cy.contains('Registrarse').click()
  //   cy.contains('The email address is badly formatted.')
  // })


  // it('abrir el formulario de registro - email correcto', () => {
  //   cy.get('[placeholder="Email"]').type('aycuevam2@gmail.com')
  //   cy.get('[placeholder="mínimo 6 caracteres"]').type('Prueba1')
  //   cy.contains('Registrarse').click()
  //   cy.contains('Crear un post')
  // })

  it('abrir el formulario de registro - email correcto - y poder realizar un post', () => {
    const post = 'Hola Mundo';
    cy.get('[placeholder="Email"]').type('aycuevam6@gmail.com')
    cy.get('[placeholder="mínimo 6 caracteres"]').type('Prueba1')
    cy.contains('Registrarse').click()
    cy.get('textarea').type(post)
    cy.get('button').click()
    cy.contains(post)
  })
})