/// <reference types="cypress" />

describe('Testes na Myne', () => {
    it('Realizar Cadastros de produto', () => {
        cy.visit('https://web.myneapp.com.br/');
        // Atraso de 0,1 segundo
        cy.wait(100);
        
        //Verificar se elemento de cadastro existe e se está visível
        cy.get('[href="/cadastros"]').should('exist').should('be.visible');
        // Atraso de 0,1 segundo
        cy.wait(100);

        cy.get('[href="/cadastros"]').click();// botão de Etoque e cadastros
        // Atraso de 0,1 segundo
        cy.wait(100);

        // Verificar se botão de cadastro existe e se está visível
        cy.get('.dashboard-content__grid-vendas__button').should('exist').should('be.visible');
        // Atraso de 0,1 segundo
        cy.wait(100);

        cy.get('.dashboard-content__grid-vendas__button').click();
        // Atraso de 0,1 segundo
        cy.wait(100);

        cy.get('.myne-modal-add-products > :nth-child(1) > p').click();
        // Atraso de 0,1 segundo
        cy.wait(100);

        cy.get('[style="transform: scale(1);"] > .myne-modal__modal-edit-cadastro-content > .myne-modal__modal-edit-cadastro-content__inputs').within(() => {
            cy.get('form').should('exist'); 
            // Verifica se há pelo menos um formulário dentro do elemento selecionado
        });
        // Atraso de 0,1 segundo
        cy.wait(100);

        cy.get('[style="transform: scale(1);"] > .myne-modal__modal-edit-cadastro-content > .myne-modal__modal-edit-cadastro-content__inputs > :nth-child(1) > .form__group > .form__label').type('Bolo');
        //nome
        // Atraso de 0,1 segundo
        cy.wait(100);

        cy.get('[style="transform: scale(1);"] > .myne-modal__modal-edit-cadastro-content > .myne-modal__modal-edit-cadastro-content__inputs > :nth-child(2) > .form__group > .form__label').type('5');
        //quantidade atual
        // Atraso de 0,1 segundo
        cy.wait(100);

        cy.get('[style="transform: scale(1);"] > .myne-modal__modal-edit-cadastro-content > .myne-modal__modal-edit-cadastro-content__inputs > :nth-child(3) > .form__group > .form__label').type('2.50');
        //custo
        // Atraso de 0,1 segundo
        cy.wait(100);

        cy.get('[style="transform: scale(1);"] > .myne-modal__modal-edit-cadastro-content > .myne-modal__modal-edit-cadastro-content__inputs > :nth-child(4) > .form__group > .form__label').type('10');
        //preço
        // Atraso de 0,1 segundo
        cy.wait(100);

        cy.get('[style="transform: scale(1);"] > .myne-modal__modal-edit-cadastro-content > .myne-modal__modal-edit-cadastro-content__inputs > :nth-child(6) > .form__group > .form__label').type('Bolo com gostinho de Cypress');
        //Descrição do produto
        // Atraso de 0,1 segundo
        cy.wait(100);

        cy.get('[style="transform: scale(1);"] > .myne-modal__modal-edit-cadastro-content > .myne-modal__modal-edit-cadastro-content__right-subimit > .myne-modal__modal-edit-cadastro-content__right-subimit__stock-min > div > :nth-child(2)').click();
        // Atraso de 0,1 segundo
        cy.wait(100);// Estoque mínimo de 5

        cy.get('[style="transform: scale(1);"] > .myne-modal__modal-edit-cadastro-content > .myne-modal__modal-edit-cadastro-content__right-subimit > :nth-child(4)').click();//salvar
        // Atraso de 0,1 segundo
        cy.wait(100);

        //verificar se traz mensagem de "Produto salvos com sucesso!"
        cy.get('[style="opacity: 1; visibility: visible; right: 21px;"]').should('be.visible').invoke('text').should('include', 'Produto salvos com sucesso!');
        cy.wait(100);

        // Seção comentada
        /*cy.get('.myne-modal__modal-plus__content').should('exist').then(($element) => {
            if ($element.length > 0) {
                // O elemento está presente, então você pode fechá-lo
                cy.get('[style="opacity: 5; visibility: visible; background: transparent;"] > .myne-modal > .myne-modal__modal-plus > [width="20"]').click(); 
                // Substitua isso pelo seletor correto do botão de fechar
            } else {
                // O elemento não está presente, não é necessário fazer nada
            }
        }); */
    });
});
