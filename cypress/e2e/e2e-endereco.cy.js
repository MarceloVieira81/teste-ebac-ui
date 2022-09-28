/// <reference types="cypress" />
import EnderecoPage from '../support/page-objects/endereco.page'
const dadosEndereco = require('../fixtures/endereco.json')

 describe('Funcionalidade Endereços - Faturamento e Entrega', () => {
    beforeEach(() => {
        cy.visit('minha-conta')
        cy.fixture('perfil').then(dados =>{
            cy.login(dados.usuario, dados.senha)
            
        })
        
    });

    it('Deve fazer cadastro de faturamento com sucesso', () => {
         EnderecoPage.editarEnderecoFaturamento('Maria', 'Geralda', 'Canção Nova', 'Brasil', 'Central', '10', 'Belo Horizonte', 'Minas Gerais', '15778963', '1178549845', 'maria@cancao.com')    
         cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.') 
    });

    it('Deve fazer cadastro de faturamento com sucesso - usando arquivo de dados', () => {
        EnderecoPage.editarEnderecoFaturamento(
            dadosEndereco[1].nome,
            dadosEndereco[1].sobrenome,
            dadosEndereco[1].empresa,
            dadosEndereco[1].pais,
            dadosEndereco[1].endereco,
            dadosEndereco[1].numero,
            dadosEndereco[1].cidade,
            dadosEndereco[1].estado,
            dadosEndereco[1].cep,
            dadosEndereco[1].telefone,
            dadosEndereco[1].email
            )    
        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.') 
   });

   it('Deve fazer cadastro de endereço de entrega com sucesso', () => {
        EnderecoPage.editarEnderecoEntrega(
            dadosEndereco[2].nome,
            dadosEndereco[1].sobrenome,
            dadosEndereco[1].empresa,
            dadosEndereco[1].pais,
            dadosEndereco[1].endereco,
            dadosEndereco[1].numero,
            dadosEndereco[1].cidade,
            dadosEndereco[1].estado,
            dadosEndereco[1].cep
        )
        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')

   });
 });