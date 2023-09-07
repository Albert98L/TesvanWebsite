import functions from "../../POM/functions";
import homepage from "../../POM/HomePage/selectors";
import verifications from "../../POM/HomePage/verifications";

require('cypress-xpath');

describe("Tesvan Home Page", () => {
    beforeEach(() => {
        functions.homeurl()
    })


    it("Verify that home page opened correctly ", () => {
        cy.url().should("eq", "https://www.tesvan.com/en")
        cy.title().should('include', "TESVAN A COMPANY OF QUALITY");
        verifications.expect().beVisibleTesvanLogo((homepage.logoTesvan()));
        homepage.headerContent().contains("TESVAN A COMPANY OF QUALITY").should("be.visible");
        verifications.expect().beVisibleVerification(homepage.navMenuItems());
        verifications.expect().beVisibleVerification(homepage.companyMenuItem());
        verifications.expect().beVisibleVerification(homepage.servicesMenuItem());
        verifications.expect().beVisibleVerification(homepage.casesMenuItem());
        verifications.expect().beVisibleVerification(homepage.educationMenuItem());
        verifications.expect().beVisibleVerification(homepage.coursesMenuItem());
        verifications.expect().beVisibleVerification(homepage.blogMenuItem());
        verifications.expect().beVisibleVerification(homepage.contactsMenuItem());
        verifications.expect().beVisibleVerification(homepage.languageMenuButton());

    });

    it(" ContactModal test", () => {
        cy.wait(13000);
        homepage.contactModal().should("exist").should("be.visible");
        homepage.contactModalCloseButton().click();
        homepage.contactModal().should("not.be.visible");

    })

    it("Background Video Loading Test", () => {
        cy.wait(2000)
        homepage.videoLoop().should("have.attr", "loop");
        homepage.bannerVideo().should("have.attr", "src").and("not.be.empty");
    })

    it("Check if all home page sections are available", () => {
        cy.wait(2000)
        verifications.expect().beVisibleVerification(homepage.headerOffersSection());
        verifications.expect().beVisibleVerification(homepage.homepageServicesPlaceholderSection());
        verifications.expect().beVisibleVerification(homepage.homepageWhyWeSection());
        verifications.expect().beVisibleVerification(homepage.homepageOurTechnologySlick_slider());
        verifications.expect().beVisibleVerification(homepage.homepageLatestProjectSection())
    })
})
