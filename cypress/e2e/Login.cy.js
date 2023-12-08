/// <reference types="cypress" />

describe('Testes na Myne', () => {
    it('Realizar Login com sucesso', () => {
        cy.visit('https://web.myneapp.com.br/');
    // Verifica se o título da página atual é "Myne"
    cy.title().should('equal', 'Myne');
    cy.get('section > :nth-child(1) > .form__group > .form__label').type('testecypreslg@gmail.com');
    cy.get('.form__label-senha').type('@tentasorte');
    cy.get('.login__content > .btn-entrar').click();
    cy.get('[href="/cadastros"]').should('exist').should('be.visible');
    });
    
  });
  
  