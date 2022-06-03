import "./style.css";
import { nav, footer } from "./page-load";
import { home } from "./home";

let pageLoaded = false;
const content = document.querySelector("#content");

setupPage();

function tabSwitching(destination) {
  switch (destination) {
    case "home":
      content.replaceWith(home);
      break;
    case "menu":
      content.replaceWith();
      break;
    case "contact":
      content.replaceWith();
      break;
  }
}

function setupPage() {
  if (!pageLoaded) {
    content.insertAdjacentElement("afterbegin", nav);
    content.append(home);
    content.insertAdjacentElement("beforeend", footer);
    pageLoaded = true;
  }
}
