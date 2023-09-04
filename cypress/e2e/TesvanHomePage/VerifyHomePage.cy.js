import functions from "../../POM/functions";
import selectors from "../../POM/selectors";
import verifications from "../../POM/verifications";
require('cypress-xpath');

describe("Tesvan Home Page", () => {
    beforeEach(() => {
        functions.homeurl()
    })

    it("Verify that home page opened correctly ",()=>{
        cy.title().should('include' , "TESVAN A COMPANY OF QUALITY")
        verifications.expect().beVisibleTesvanLogo((selectors.logoTesvan()))

    });
})
