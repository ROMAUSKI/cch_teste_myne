/// <reference types="cypress" />

describe('Testes na Myne', () => {
    it('Excluir cliente de Cliente', () => {
        cy.visit('https://web.myneapp.com.br/');
        // Atraso de 0,1 segundo
        cy.wait(100);
        
        //Verificar se elemento de cadastro existe e se está visível
        cy.get('[href="/cadastros"]').should('exist').should('be.visible');
        // Atraso de 0,1 segundo
        cy.wait(100);

        cy.get('[href="/cadastros"]').click();// botão de Etoque e cadastros
        // Atraso de 0,1 segundo
        cy.wait(300);

        cy.get('.myne-filter-content > #myne-filter-dates-ref > :nth-child(2)').click(); //Click em Clientes
        cy.wait(300);
        cy.get(':nth-child(4) > .myne-item__cadastro-cliente').should('be.visible');//valida o primeiro cadastro da lista se existe
        cy.wait(300);

        cy.get(':nth-child(4) > [height="18"] > path').click(); //click na lixeira
        cy.wait(100);
        //click para confirmar exclusão
        cy.get('[style="opacity: 5; visibility: visible; z-index: 999999999; transition: all 0.3s ease 0s;"] > .myne-modal__modal-add-item > .myne-modal__modal-add-item-content > div > :nth-child(2)').click();
        cy.wait(100);
        //Valida se foi excluído cliente com sucesso
        cy.get('[style="opacity: 1; visibility: visible; right: 21px;"]').should('be.visible').invoke('text').should('include', 'Cliente excluído com sucesso!');
    });
});
