/// <reference types="cypress" />

describe('template spec', () => {
  // beforeEach(() => {
  //   cy.login('testecypreslg@gmail.com', '@tentasorte'); // Use as credenciais de teste
  // });
  it('teste de exclusão de produto', () => {
    cy.visit('https://web.myneapp.com.br/');
    cy.wait(100)
    cy.get('[href="/cadastros"]').click();
    cy.get('.dashboard-content__grid-vendas__button').click();
    cy.get('.myne-modal-add-products > :nth-child(1)').click();
    cy.get('[style="transform: scale(1);"] > .myne-modal__modal-edit-cadastro-content > .myne-modal__modal-edit-cadastro-content__inputs > :nth-child(1) > .form__group > .form__label').type('AAAAAA AAAAAA AAAAAA');
        //nome
        // Atraso de 0,1 segundo
        cy.wait(100);

        cy.get('[style="transform: scale(1);"] > .myne-modal__modal-edit-cadastro-content > .myne-modal__modal-edit-cadastro-content__inputs > :nth-child(2) > .form__group > .form__label').type('50');
        //quantidade atual
        // Atraso de 0,1 segundo
        cy.wait(100);

        cy.get('[style="transform: scale(1);"] > .myne-modal__modal-edit-cadastro-content > .myne-modal__modal-edit-cadastro-content__inputs > :nth-child(3) > .form__group > .form__label').type('500.00');
        //custo
        // Atraso de 0,1 segundo
        cy.wait(100);

        cy.get('[style="transform: scale(1);"] > .myne-modal__modal-edit-cadastro-content > .myne-modal__modal-edit-cadastro-content__inputs > :nth-child(4) > .form__group > .form__label').type('10');
        //preço
        // Atraso de 0,1 segundo
        cy.wait(100);

        cy.get('[style="transform: scale(1);"] > .myne-modal__modal-edit-cadastro-content > .myne-modal__modal-edit-cadastro-content__inputs > :nth-child(6) > .form__group > .form__label').type('teste de exclusão');
        cy.wait(100);
        cy.get('[style="transform: scale(1);"] > .myne-modal__modal-edit-cadastro-content > .myne-modal__modal-edit-cadastro-content__right-subimit > .myne-modal__modal-edit-cadastro-content__right-subimit__stock-min > div > :nth-child(2)').click();
        cy.wait(100);// Estoque mínimo de 5

        cy.get('[style="transform: scale(1);"] > .myne-modal__modal-edit-cadastro-content > .myne-modal__modal-edit-cadastro-content__right-subimit > :nth-child(4)').click();//salvar
        // Atraso de 0,1 segundo
        cy.wait(100);
        cy.get(':nth-child(4) > .myne-item__cadastro-left > section > p').contains('AAAAAA AAAAAA AAAAAA').click();
        //cy.get(':nth-child(4) > .myne-item__cadastro-left > section > p')
        cy.wait(100);
        cy.get('[style="transform: scale(1);"] > .myne-modal__modal-edit-header > .myne-modal__modal-edit-header__icons > [width="14"]').click();
        cy.wait(100);
        cy.get('[style="opacity: 5; visibility: visible; z-index: 999999999; transition: all 0.3s ease 0s;"] > .myne-modal__modal-add-item > .myne-modal__modal-add-item-content > div > :nth-child(2)').click();
        cy.wait(100);
        cy.get('[style="opacity: 1; visibility: visible; right: 21px;"]').should('be.visible').invoke('text').should('include', 'Produto excluído com sucesso!');
  })
})