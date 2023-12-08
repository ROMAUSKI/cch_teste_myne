/// <reference types="cypress" />

describe('Testes na Myne', () => {
    it('Excluir um produto cadastrado', () => {
        cy.visit('https://web.myneapp.com.br/');
        // Atraso de 0,1 segundo
        cy.wait(100);
        
        //Verificar se elemento de cadastro existe e se está visível
        cy.get('[href="/cadastros"]').should('exist').should('be.visible');
        // Atraso de 0,1 segundo
        cy.wait(100);

        //Click no mais (Estoque e cadastros) na barra lateral esquerda
        cy.get('[href="/cadastros"]').click();
        // Atraso de 0,1 segundo
        cy.wait(100);

        cy.get('.dashboard-content__grid-vendas__vendas-items > :nth-child(4)').should('be.visible');// Verificar se o primeiro produto da lista está visivel

        cy.get('.dashboard-content__grid-vendas__vendas-items > :nth-child(4)').click(); //Click no produto
        cy.get('[style="transform: scale(1);"] > .myne-modal__modal-edit-header > .myne-modal__modal-edit-header__icons > [width="14"] > path').click();//click na lixeira
        // Validar se aparece mensagem para confimação de exclusão (Você tem certeza que quer excluir o produto?)
        cy.get('[style="opacity: 5; visibility: visible; z-index: 999999999; transition: all 0.3s ease 0s;"] > .myne-modal__modal-add-item > .myne-modal__modal-add-item-content > p').should('be.visible').invoke('text').should('include', 'Você tem certeza que quer excluir o produto?');

        //Excluir produto
        cy.get('[style="opacity: 5; visibility: visible; z-index: 999999999; transition: all 0.3s ease 0s;"] > .myne-modal__modal-add-item > .myne-modal__modal-add-item-content > div > :nth-child(2)').click();
        //verificar se traz mensagem de "Produto excluído com sucesso!"
        cy.get('[style="opacity: 1; visibility: visible; right: 21px;"]').should('be.visible').invoke('text').should('include', 'Produto excluído com sucesso!');
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


