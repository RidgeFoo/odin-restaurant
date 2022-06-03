import "./style.css";
import { nav, footer } from "./page-load";
import bg from "./images/bg-splash.jpeg";
import burger from "./images/burger-no-bg.png";

const body = document.querySelector("body");
const content = document.querySelector("#content");

const backgroundDiv = document.createElement("div");
backgroundDiv.className = "background-image";
const burgerDiv = document.createElement("img");
burgerDiv.id = "burger-image";
burgerDiv.src = burger;

content.append(burgerDiv);
content.prepend(backgroundDiv);
body.prepend(nav);

body.append(footer);
