import "./style.css";
import { nav, footer } from "./page-load";
import { home } from "./home";

let pageLoaded = false;
const body = document.querySelector("body");
const content = document.querySelector("#content");

if (!pageLoaded) {
  body.prepend(nav);
  body.append(footer);
  content.replaceWith(home);
  pageLoaded = true;
}
