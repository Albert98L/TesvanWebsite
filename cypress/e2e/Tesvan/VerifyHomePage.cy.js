import functions from "../../POM/functions";
import homepage from "../../POM/HomePage/selectors";
import verifications from "../../POM/HomePage/verifications";

require('cypress-xpath');


describe("Tesvan Home Page", () => {
    beforeEach(() => {
        functions.homeurl();
        cy.intercept("HEAD","en").as("TESVANHomePage");
        cy.intercept("GET","/video/Homepage.mp4").as("BackVideo");
        cy.intercept("HEAD","en/cases/customertimes").as("Customertimes");
        cy.intercept("HEAD","en/cases/rocky_mountains").as("Rocky_mountains");
        cy.intercept("HEAD","en/cases/summerize").as("Summerize");
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
        cy.waitUntil(() => homepage.contactModal());
        homepage.contactModal().should("exist").should("be.visible");
        homepage.contactModalCloseButton().click();
        homepage.contactModal().should("not.be.visible");

    })

    it("Background Video Loading Test", () => {
        cy.wait("@BackVideo",{timeout:16000});
        homepage.videoLoop().should("have.attr", "loop");
        homepage.bannerVideo().should("have.attr", "src").and("not.be.empty");
    })

    it("Check if all home page sections are available", () => {
        cy.wait("@TESVANHomePage");
        verifications.expect().beVisibleVerification(homepage.headerOffersSection());
        verifications.expect().beVisibleVerification(homepage.homepageServicesPlaceholderSection());
        verifications.expect().beVisibleVerification(homepage.homepageWhyWeSection());
        verifications.expect().beVisibleVerification(homepage.homepageOurTechnologySlick_slider());
        verifications.expect().beVisibleVerification(homepage.homepageLatestProjectSection());
        verifications.expect().beVisibleVerification(homepage.TheyTrustUsSection());
        verifications.expect().beVisibleVerification(homepage.TestimonialsSection());
        verifications.expect().beVisibleVerification(homepage.OurTeamSection());
        verifications.expect().beVisibleVerification(homepage.SharingOurKnowledge())
        verifications.expect().beVisibleVerification(homepage.ContactContainer());

    })
    it("Verify that latest projects' 'Read more' button is working properly",()=>{
        cy.waitUntil(() => homepage.contactModal());
        homepage.contactModalCloseButton().click();
        homepage.customerTimesReadMoreButton().click({force:true})
        cy.url().should("eq","https://www.tesvan.com/en/cases/customertimes");
        cy.wait("@Customertimes");
        homepage.casesHeader().contains("CUSTOMERTIMES").should("be.visible");
        homepage.logoTesvan().click();
        cy.wait("@TESVANHomePage");
        homepage.rockyMountainsReadMoreButton().click({force:true});
        cy.url().should("eq","https://www.tesvan.com/en/cases/rocky_mountains");
        cy.wait("@Rocky_mountains");
        homepage.casesHeader().contains("ROCKY MOUNTAINS").should("be.visible")
        homepage.logoTesvan().click();
        cy.wait("@TESVANHomePage");
        homepage.summerizeReadMoreButton().click({force:true});
        cy.url().should("eq","https://www.tesvan.com/en/cases/summerize");
        cy.wait("@Summerize");
        homepage.casesHeader().contains("SUMMERIZE").should("be.visible")

    })
})
