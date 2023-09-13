export default new class Homepage {

    homeurl = () => cy.visit(Cypress.env("TesvanHomePage"))
}
