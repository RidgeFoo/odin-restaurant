import "./style.css";
import { getNavBar, getFooter } from "./page-load";
import { home } from "./home";
import { contact } from "./contact";
import { menu } from "./menu";
import { attributions } from "./attributions";

const main = (function () {
  const city = "London";
  const fullAddress = "98 Northcote Rd, London, SW11 6QW";

  let pageLoaded = false;
  const content = document.querySelector("#content");

  function setupPage() {
    if (!pageLoaded) {
      const navBar = getNavBar(
        () => updateContent(home),
        () => updateContent(menu()),
        () => updateContent(contact(city, fullAddress))
      );
      content.insertAdjacentElement("afterbegin", navBar);
      content.append(home);
      content.insertAdjacentElement(
        "beforeend",
        getFooter(fullAddress, () => updateContent(attributions))
      );
      pageLoaded = true;
    }
  }

  function updateContent(div) {
    content.querySelector(".main").replaceWith(div);
  }

  setupPage();
})();
