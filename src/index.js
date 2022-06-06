import "./style.css";
import { getNavBar, getFooter } from "./page-load";
import { home } from "./home";
import { contact } from "./contact";

const main = (function () {
  const city = "London";
  const fullAddress = "98 Northcote Rd, London, SW11 6QW";

  let pageLoaded = false;
  const content = document.querySelector("#content");

  function setupPage() {
    if (!pageLoaded) {
      const navBar = getNavBar(
        () => updateContent(home),
        () => content.querySelector(".main").replaceWith(home),
        () => updateContent(contact(city, fullAddress))
      );
      content.insertAdjacentElement("afterbegin", navBar);
      content.append(home);
      content.insertAdjacentElement("beforeend", getFooter(fullAddress));
      pageLoaded = true;
    }
  }

  function updateContent(elements) {
    content.querySelector(".main").replaceWith(elements);
  }

  setupPage();
})();
