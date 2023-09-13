export default new class Intercept {

    intecept = () => {

        cy.intercept("HEAD", "en").as("TESVANHomePage");
        cy.intercept("GET", "video/Homepage.mp4").as("BackVideo");
        cy.intercept("HEAD", "en/cases/customertimes").as("Customertimes");
        cy.intercept("HEAD", "en/cases/rocky_mountains").as("Rocky_mountains");
        cy.intercept("HEAD", "en/cases/summerize").as("Summerize")
        cy.intercept("GET", "/am").as("ARMLanguage")
    }
}