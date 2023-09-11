import functions from "../../POM/functions";
import homepage from "../../POM/HomePage/HomePageSelectors";
import verifications from "../../POM/HomePage/verifications";
import sendUs from "../../POM/HomePage/SendUsAMessageSelectors";

require('cypress-xpath');
let email = sendUs.RandomEmail();
let number = sendUs.randomPhoneNumber();
let text = sendUs.randomText(20);


describe("Tesvan Home Page", () => {
    beforeEach(() => {
        functions.homeurl();
        cy.intercept("HEAD", "en").as("TESVANHomePage");
        cy.intercept("GET", "video/Homepage.mp4").as("BackVideo");
        cy.intercept("HEAD", "en/cases/customertimes").as("Customertimes");
        cy.intercept("HEAD", "en/cases/rocky_mountains").as("Rocky_mountains");
        cy.intercept("HEAD", "en/cases/summerize").as("Summerize");
        cy.intercept("GET","/am").as("ARMLanguage")
    });


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

    });

    it("Background Video Loading Test", () => {
        cy.wait("@BackVideo", {timeout: 20000});
        homepage.videoLoop().should("have.attr", "loop");
        homepage.bannerVideo().should("have.attr", "src").and("not.be.empty");
    });

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

    });

    it("Verify that latest projects' 'Read more' button is working properly", () => {
        cy.waitUntil(() => homepage.contactModal());
        homepage.contactModalCloseButton().click();
        homepage.customerTimesReadMoreButton().click({force: true});
        cy.url().should("eq", "https://www.tesvan.com/en/cases/customertimes");
        cy.wait("@Customertimes");
        homepage.casesHeader().contains("CUSTOMERTIMES").should("be.visible");
        homepage.logoTesvan().click();
        cy.wait("@TESVANHomePage");
        homepage.rockyMountainsReadMoreButton().click({force: true});
        cy.url().should("eq", "https://www.tesvan.com/en/cases/rocky_mountains");
        cy.wait("@Rocky_mountains");
        homepage.casesHeader().contains("ROCKY MOUNTAINS").should("be.visible")
        homepage.logoTesvan().click();
        cy.wait("@TESVANHomePage");
        homepage.summerizeReadMoreButton().click({force: true});
        cy.url().should("eq", "https://www.tesvan.com/en/cases/summerize");
        cy.wait("@Summerize");
        homepage.casesHeader().contains("SUMMERIZE").should("be.visible")

    });

    it("Check the functionality of the 'SEND US A MESSAGE' container with the valid credentials", () => {
        cy.waitUntil(() => homepage.contactModal());
        homepage.contactModalCloseButton().click();
        cy.wait(2000);
        sendUs.FullName().type("Test");
        sendUs.Email().type(email);
        sendUs.Phone().type(number);
        sendUs.Company().type("Testing");
        sendUs.Description().type(text);
        sendUs.IAgreeCheckbox().check();
        sendUs.SendMessageButton().click();
        sendUs.ResponseMessages().should("be.visible");

    });

    it("Check the functionality of the 'SEND US A MESSAGE' container with the invalid email", () => {
        cy.waitUntil(() => homepage.contactModal());
        homepage.contactModalCloseButton().click();
        cy.wait(2000);
        sendUs.FullName().type("Test");
        sendUs.Email().type("testemail");
        sendUs.Phone().type(number);
        sendUs.Company().type("Testing");
        sendUs.Description().type(text);
        sendUs.IAgreeCheckbox().check();
        sendUs.SendMessageButton().click();
        sendUs.InvalidData().should('contain', 'Email is invalid');
        sendUs.InvalidDataFrame().parent().should('have.css', 'color', 'rgb(212, 212, 212)');


    })

    it("Check the functionality of the 'SEND US A MESSAGE' container with the empty Full Name", () => {
        cy.waitUntil(() => homepage.contactModal());
        homepage.contactModalCloseButton().click();
        cy.wait(2000);
        sendUs.FullName().clear();
        sendUs.Email().type(email);
        sendUs.Phone().type(number);
        sendUs.Company().type("Testing");
        sendUs.Description().type(text);
        sendUs.IAgreeCheckbox().check();
        sendUs.SendMessageButton().click();
        sendUs.InvalidData().should('contain', 'Full Name can not be blank');
        sendUs.InvalidDataFrame().parent().should('have.css', 'color', 'rgb(212, 212, 212)');

    });

    it("Check the functionality of the “SEND US A MESSAGE” container with a description of less than 20 characters.", () => {
        cy.waitUntil(() => homepage.contactModal());
        homepage.contactModalCloseButton().click();
        cy.wait(2000);
        sendUs.FullName().type("Test");
        sendUs.Email().type(email);
        sendUs.Phone().type(number);
        sendUs.Company().type("Testing");
        sendUs.Description().type(sendUs.randomText(19));
        sendUs.IAgreeCheckbox().check();
        sendUs.SendMessageButton().click();
        sendUs.DescriptionErrorMessage().should('contain', 'Description should contain minimum 20 characters');
        sendUs.DescriptionErrorFrame().should('have.css', 'color', 'rgb(255, 255, 255)');

    })

    it("Check the functionality of the “SEND US A MESSAGE” container with a checkbox unchecked", () => {
        cy.waitUntil(() => homepage.contactModal());
        homepage.contactModalCloseButton().click();
        cy.wait(2000);
        sendUs.FullName().type("Test");
        sendUs.Email().type(email);
        sendUs.Phone().type(number);
        sendUs.Company().type("Testing");
        sendUs.Description().type(text);
        sendUs.IAgreeCheckbox().uncheck();
        sendUs.SendMessageButton().click();
        sendUs.IAgreeUncheckedMessage().should('contain','Please check and accept our Privacy Policy');

    })

    it("Check menu language button functionality ",()=>{
        cy.waitUntil(() => homepage.contactModal());
        homepage.contactModalCloseButton().click();
        cy.wait(2000);
        homepage.languageMenuButton().click();
        homepage.ARMLanguage().click();
        cy.wait("@ARMLanguage");
        homepage.headerContent().contains("ՏԵՍՎԱՆ՝ ՈՐԱԿԻ ԸՆԿԵՐՈՒԹՅՈՒՆ").should("be.visible")

    })

})
