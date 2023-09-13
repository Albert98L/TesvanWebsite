export default new class Verify {
    expect() {
        return {
            beVisibleTesvanLogo: (chainer) => {
                chainer.should("be.visible")
            },

            beVisibleVerification: (chainer) =>{
                chainer.should("be.visible")
            },

            urlVerification: (url) => {
                cy.url().should("eq",url)
            }
        }
    }

}
