import burgerIcon from "./images/hamburger.png";
let footer;
let nav;

const elements = (function () {
  function getNavBar() {
    let navBar = document.createElement("nav");
    let home = document.createElement("a");
    let menu = document.createElement("a");
    let contact = document.createElement("a");

    home.textContent = "Home";
    menu.textContent = "Menu";
    contact.textContent = "Contact Us";

    navBar.append(home, menu, getLogoContainer(), contact);
    return navBar;
  }

  function getLogoContainer() {
    const logoContainer = document.createElement("div");
    const divSuper = document.createElement("div");
    const logo = document.createElement("img");
    const divBurger = document.createElement("div");

    logoContainer.append(divSuper, logo, divBurger);

    divSuper.textContent = "Super";
    divBurger.textContent = "Burger";
    logo.src = burgerIcon;

    logoContainer.id = "logo";

    return logoContainer;
  }

  function getFooter() {
    const footer = document.createElement("footer");
    const address = document.createElement("a");
    const attributions = document.createElement("div");

    address.textContent = "Address";
    attributions.textContent = "Photo and icon attributions go here!";

    footer.append(address, attributions);

    return footer;
  }

  return { nav: getNavBar(), footer: getFooter() };
})();

nav = elements.nav;
footer = elements.footer;

export { nav, footer };
