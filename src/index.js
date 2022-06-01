import "./style.css";
import { nav, footer } from "./page-load";
import bg from "./images/bg-splash.jpeg";

const body = document.querySelector("body");

const backgroundDiv = document.createElement("div");
backgroundDiv.className = "background-image";

body.prepend(backgroundDiv);
body.prepend(nav);

body.append(footer);
