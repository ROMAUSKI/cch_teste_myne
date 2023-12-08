/// <reference types="cypress" />

describe('Testes na Myne', () => {
    it('Realizar Cadastros de Cliente', () => {
        cy.visit('https://web.myneapp.com.br/');
        // Atraso de 0,1 segundo
        cy.wait(100);
        
        //Verificar se elemento de cadastro existe e se está visível
        cy.get('[href="/cadastros"]').should('exist').should('be.visible');
        // Atraso de 0,1 segundo
        cy.wait(100);

        cy.get('[href="/cadastros"]').click();// botão de Etoque e cadastros
        // Atraso de 0,1 segundo
        cy.wait(200);

        cy.get('.myne-filter-content > #myne-filter-dates-ref > :nth-child(2)').click(); //Click em Clientes
        cy.wait(200);

        // Verificar se botão de cadastro existe e se está visível
        cy.get('div.myne-modal--animation.dashboard-content__grid-vendas__button.myne-btn')
        .scrollIntoView()
        .should('be.visible')
        .click();
        // Atraso de 0,1 segundo
        cy.wait(200);

        cy.get('.myne-modal-add-products > :nth-child(1)').click();

        cy.get('[style="transform: scale(1); width: 390px; height: 521px;"] > .myne-modal__modal-edit-cadastro-content > .myne-modal__modal-edit-cadastro-content__inputs').within(() => {
            cy.get('form').should('exist'); 
            // Verifica se há pelo menos um formulário dentro do elemento selecionado
        });
        cy.wait(200);
        cy.get('[style="transform: scale(1); width: 390px; height: 521px;"] > .myne-modal__modal-edit-cadastro-content > .myne-modal__modal-edit-cadastro-content__inputs > :nth-child(1) > .form__group > .form__label').type('Cliente novo');
        cy.get('[style="transform: scale(1); width: 390px; height: 521px;"] > .myne-modal__modal-edit-cadastro-content > .myne-modal__modal-edit-cadastro-content__inputs > :nth-child(2) > .form__group > .form__label').type('7007070-7070');
        cy.get('[style="transform: scale(1); width: 390px; height: 521px;"] > .myne-modal__modal-edit-cadastro-content > .myne-modal__modal-edit-cadastro-content__inputs > :nth-child(3) > .form__group > .form__label').type('batatinhafrita123@teste.com');
        cy.get('[style="transform: scale(1); width: 390px; height: 521px;"] > .myne-modal__modal-edit-cadastro-content > .myne-modal__modal-edit-cadastro-content__inputs > :nth-child(4) > .form__group > .form__label').type('Essa descrição não sei por que está aqui mas está');

        //click em salvar
        cy.get('[style="transform: scale(1); width: 390px; height: 521px;"] > .myne-modal__modal-edit-cadastro-content > .myne-modal__modal-edit-cadastro-content__right-subimit > button').click();

        //Verificar se aparece imagem de salvo com sucesso!
        cy.get('[style="opacity: 1; visibility: visible; right: 21px;"]').should('be.visible').invoke('text').should('include', 'Cliente salvos com sucesso!');
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
