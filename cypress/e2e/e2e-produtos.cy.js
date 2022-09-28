///<reference types="cypress" />

describe('Funcionalidade Página de Produtos', () => {

    beforeEach(() => {
        cy.visit('produtos')
    });

    it('Deve selecionar um produto da lista', () => {
        cy.get('[class="product-block grid"]')
            //.first()
            //.last()
            //.eq(3)
            .contains('Aether Gym Pant')
            .click()

    });

    it('Deve adicionar um produto ao carrinho', () => {
        var quantidade = 8

        cy.get('[class="product-block grid"]')
            .contains('Arcadio Gym Short').click()
        cy.get('.button-variable-item-36').click()
        cy.get('.button-variable-item-Blue').click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()

        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade)
        cy.get('.woocommerce-message').should('contain', quantidade + ' × “Arcadio Gym Short” ')
    });

    it('Deve adicionar produtos ao carrinho usando comando customizado', () => {
        cy.addProdutos('Argus All-Weather Tank', 'XS', 'Gray', 4)
    });

    it('Deve adicionar produtos ao carrinho usando comando customizado', () => {
        cy.addProdutos('Arcadio Gym Short', 32, 'Blue', 12)
    });

});