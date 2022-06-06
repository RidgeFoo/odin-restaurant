import burgerIcon from "./images/burger-icon.png";

let getFooter;
let getNavBar;

const nav = (function () {
  function getNavBar(homeCallbackFn, menuCallbackFn, contactCallbackFn) {
    let navBar = document.createElement("nav");
    let home = document.createElement("a");
    let menu = document.createElement("a");
    let contact = document.createElement("a");

    home.textContent = "Home";
    menu.textContent = "Menu";
    contact.textContent = "Contact Us";

    home.addEventListener("click", homeCallbackFn);
    menu.addEventListener("click", menuCallbackFn);
    contact.addEventListener("click", contactCallbackFn);

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

  function getFooter(fullAddress) {
    const footer = document.createElement("footer");
    const address = document.createElement("p");
    const attributions = document.createElement("div");

    address.textContent = fullAddress;
    attributions.textContent = "Photo and icon attributions go here!";

    footer.append(address, attributions);

    return footer;
  }

  return { getNavBar, getFooter };
})();

getNavBar = nav.getNavBar;
getFooter = nav.getFooter;

export { getNavBar, getFooter };
