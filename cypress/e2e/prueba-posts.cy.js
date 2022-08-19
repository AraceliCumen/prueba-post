// Crear proyecto en firebase

// Crear archivo de production.env

// Copiar los valores del api de firebase

// Activar autenticación a través de correo y contraseña 

// Solo activar una opción



// Configuración de acceso a base datos

// Y  empezamos en modo de pruebas

// Habilitamos


// npm cache clear --force
// npm install


// npm install
// npm install firebase@latest
// npm audit fix
// npm run dev


// Integrando cypres


// npm i cypress -D


// Se pueden ejecutar test en google chrome y en los navegadores más usados  como firefox

// No se pueden ejecutar en ie 11

// Tiene algunas características:

// Time Travel: puedes ver cada uno de los pasos que esta haciendo el test en que 


// ./node_modules/cypress cypress open 


// Comov vamos a ver  la instalación de cypress me ha creado una estructura de carpetas

// Una carpeta cypress

// Y un archivo cypress.json


// Dentro de la carpeta cypress nos ha dejado un monto de cosas



// Nos fijaremos e2e y support/commands
// Que son lo mas importante para empezar



// Duplicar script de build y agregar el script :

// "cypress-open": "cypress open"


// Y me ha abierto una aplicación donde podemos  apreciar algunos test que cypress nos trae por defecto 


// Levantando todo vamos a crear nuestro primer test 

// Por el momento vamos a trabajar con un solo acribo de test

// Y conforme vayamos avanzando si nos da el tiempo vamos a ver si lo separamos por p{añinas pero por el momento vamos a dejar así




describe('Prueba post', () => {
  beforeEach(() => { // lo que nos dice es que antes de cada acción has esto
    cy.visit('http://localhost:8080')
  })

  it ('frontPage can be opended', () => {
    cy.contains('PruebaPost')
  }) // con este test al menos podemos decir que nuestra aplicacion se esta renderizando

  // it ( 'frontPage can be opended', () => {
  //   cy.visit('http://localhost:8080')
  //   cy.contains('hola')
  // })

  // it ('Sign up can be opended', () => {
  //   cy.contains('Crear una cuenta').click()
  // })

  //Primera refactorizacion

  // beforeEach(() => { // lo que nos dice es que antes de cada acción has esto
  //   cy.visit('http://localhost:8080')
  // })

  it ('Sign up can be opended', () => {
    // cy.contains('Crear una cuenta').click()
    cy.get('[placeholder="Nombre"]').type('Araceli Cueva')
    cy.get('[placeholder="Compañía"]').type('Prueba')
    cy.get('[placeholder="Email"]').type('prueba8@gmail.com')
    cy.get('[placeholder="mínimo 6 caracteres"]').type('Prueba1')
    cy.contains('Registrarse').click()
    cy.contains('Crear un post')
  })

  describe('when sing up in', () => {
    const post = 'Hola mi nombre es Araceli, me gustaria conocerlos un poco más'
    it('a new post can be created', () => {
      cy.contains('Crear un post')
      cy.get('textarea').type(post)
      cy.get('button').first().click()
      cy.contains(post)
    })
  })
})