export default new class selectors {

    FullName = () => cy.get("div > div:nth-of-type(1) > form > div:nth-of-type(1) > div:nth-of-type(1) > label > div > input");
    Email = () => cy.get(" div > div:nth-of-type(1) > form > div:nth-of-type(1) > div:nth-of-type(2) > label > div > input");
    RandomEmail = () => {
        const randomString = Math.random().toString(36).substring(7);

        const domain = "test.ts";

        return `${randomString}@${domain}`
    };
    Phone = () => cy.get(" div:nth-of-type(1) > form > div:nth-of-type(2) > div:nth-of-type(1) > label > div > input");
    randomPhoneNumber = () => {
        const min = 100000000;
        const max = 999999999;
        const phoneNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        return phoneNumber.toString();
    }

    Company = () => cy.get("div:nth-of-type(1) > form > div:nth-of-type(2) > div:nth-of-type(2) > label > div > input");
    Description = () => cy.get(" div:nth-of-type(1) > form > div:nth-of-type(3) > label > div > textarea");

    randomText(maxLength) {
        const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let randomText = '';

        for (let i = 0; i < maxLength; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            randomText += characters.charAt(randomIndex);
        }

        return randomText;
    }

    IAgreeCheckbox = () => cy.get("div > div:nth-of-type(1) > form > div:nth-of-type(4) > label > div > input");
    SendMessageButton = () => cy.get("button[type=\"submit\"].Button_yellow__zUx2d\n").eq(1)
    ResponseMessages = () => cy.get('.ResponseMessages_container__wVOwE');
    InvalidData = () => cy.get('p.Input_error__OXq1_');
    InvalidDataFrame = () =>cy.get('input.Input_input__7ueAE.Input_errorInput__Q2cLD');
    IAgreeUncheckedMessage =()=> cy.get("p[class='ContactForm_error__hJN9R ContactForm_error_eng__Pt0iM']");
    DescriptionErrorMessage =()=> cy.get("p[class^='Textarea']");
    DescriptionErrorFrame =()=>cy.get("textarea.Textarea_textarea__FRUYw.ContactForm_textarea__rM0bB")

}