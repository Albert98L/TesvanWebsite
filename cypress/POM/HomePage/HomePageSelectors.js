export default new class selectors {

    logoTesvan = () => cy.get("#navMenu > .Logo_logo__oGIB8");
    navMenuItems = () => cy.get("nav[class^='MenuItems']");
    companyMenuItem = () => cy.get("p[class*='companyItem']");
    servicesMenuItem = () => cy.get("p[class*='service']");
    casesMenuItem = () => cy.get("div:nth-of-type(2) > nav > a:nth-of-type(1)");
    educationMenuItem = () => cy.get("div:nth-of-type(2) > nav > a:nth-of-type(2)");
    coursesMenuItem = () => cy.get("div:nth-of-type(2) > nav > a:nth-of-type(3)");
    blogMenuItem = () => cy.get("div:nth-of-type(2) > nav > a:nth-of-type(4)");
    contactsMenuItem = () => cy.get("div:nth-of-type(2) > nav > a:nth-of-type(5)");
    languageMenuButton = () => cy.get("li[class^='LanguageMenu']");
    contactModal = () => cy.get(".ContactModal_overlay__qoYke",{timeout:30000});
    contactModalCloseButton = () => cy.get(".ContactModal_close__KCzRf");
    bannerVideo = () => cy.get("source[type='video/mp4']");
    videoLoop = () => cy.get("video[class*='Banner']");
    headerContent = () => cy.get("div[id='header']");
    headerOffersSection = () => cy.get("div[class='HomePageHeaderOffers_offersBorder__58hyD']");
    homepageServicesPlaceholderSection = ()=> cy.get("div[class*='placeholder']");
    homepageWhyWeSection =()=> cy.get("div[class='WhyWe_container__wBCP3']");
    homepageOurTechnologySlick_slider =()=> cy.xpath("//div[@dir='ltr'][.//div[@data-index='22']]")
    homepageLatestProjectSection =()=>cy.get("div[class='LatestProjects_container___02CQ']");
    customerTimesReadMoreButton =()=> cy.xpath("//*[@id=\"__next\"]/div/div[3]/div[7]/div/div/div[2]/div[1]/div[1]/div/div/button");
    rockyMountainsReadMoreButton =()=> cy.xpath("//*[@id=\"__next\"]/div/div[3]/div[7]/div/div/div[2]/div[1]/div[2]/div/div/button");
    summerizeReadMoreButton =()=> cy.xpath("//*[@id=\"__next\"]/div/div[3]/div[7]/div/div/div[2]/div[1]/div[3]/div/div/button");
    casesHeader=()=> cy.get("h1.HeaderContent_title__J10CV");
    TheyTrustUsSection= ()=> cy.xpath("//*[@id=\"__next\"]/div/div[3]/div[7]/div/div/div[4]/div");
    TestimonialsSection= ()=> cy.get("div[class='Testimonials_container__6YNup']");
    OurTeamSection= ()=> cy.xpath("//*[@id=\"__next\"]/div/div[3]/div[8]/div/div/div[2]");
    SharingOurKnowledge=()=> cy.get("div[class='SharingOurKnowledge_container__pq6IE']");
    ContactContainer=()=>cy.get("div[class='Contact_container__KZnxh']");
    ARMLanguage=()=>cy.get('ul.LanguageMenu_languageList__KBDAV li:contains("arm")');
    RULanguage=()=>cy.get('ul.LanguageMenu_languageList__KBDAV li:contains("ru")');
}