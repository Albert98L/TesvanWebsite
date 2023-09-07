export default new class selectors {

    logoTesvan = () => cy.xpath("//div[contains(@class, 'keg')]");
    navMenuItems = () => cy.get("nav[class^='MenuItems']");
    companyMenuItem = () => cy.get("p[class*='companyItem']");
    servicesMenuItem = () => cy.get("p[class*='service']");
    casesMenuItem = () => cy.get("div:nth-of-type(2) > nav > a:nth-of-type(1)");
    educationMenuItem = () => cy.get("div:nth-of-type(2) > nav > a:nth-of-type(2)");
    coursesMenuItem = () => cy.get("div:nth-of-type(2) > nav > a:nth-of-type(3)");
    blogMenuItem = () => cy.get("div:nth-of-type(2) > nav > a:nth-of-type(4)");
    contactsMenuItem = () => cy.get("div:nth-of-type(2) > nav > a:nth-of-type(5)");
    languageMenuButton = () => cy.get("li[class^='LanguageMenu']");
    contactModal = () => cy.get(".ContactModal_overlay__qoYke");
    contactModalCloseButton = () => cy.get(".ContactModal_close__KCzRf");
    bannerVideo = () => cy.get("source[type='video/mp4']");
    videoLoop = () => cy.get("video[class*='Banner']");
    headerContent = () => cy.get("div[id='header']");
    headerOffersSection = () => cy.get("div[class='HomePageHeaderOffers_offersBorder__58hyD']");
    homepageServicesPlaceholderSection = ()=> cy.get("div[class*='placeholder']");
    homepageWhyWeSection =()=> cy.get("div[class='WhyWe_container__wBCP3']");
    homepageOurTechnologySlick_slider =()=> cy.xpath("//*[@id=\"__next\"]/div/div[3]/div[6]/div/div/div[2]/div")
    homepageLatestProjectSection =()=>cy.get("div[class='LatestProjects_container___02CQ']")

}