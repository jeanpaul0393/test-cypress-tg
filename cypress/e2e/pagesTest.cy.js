/// <reference types="Cypress" />

// usuario y contraseña de cpanel: federico@dgtalliance.com / federicodgt

it('Abrir cPanel', () => {
  cy.visit('https://cpanel.idxboost.dev/login')

  //Abrir y logear cpanel
  cy.get('#Username').clear().type('federico@dgtalliance.com');
  cy.get('#Password').clear().type('federicodgt');
  cy.get('button > span').click();
  //Abrir página de pruebas
  cy.visit('https://cpanel.idxboost.dev/cms-pages?page=editor&pageId=20524');

  
  cy.get('#responsive-preview')
})