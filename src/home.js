import imgBurger from "./images/beef-burger.png";

const home = (function () {
  const container = document.createElement("div");
  container.id = "home";
  container.className = "main";

  const backgroundDiv = document.createElement("div");
  backgroundDiv.className = "background-image";

  const burgerDiv = document.createElement("img");
  burgerDiv.id = "burger-image";
  burgerDiv.src = imgBurger;

  const heroMessage = document.createElement("p");
  heroMessage.id = "hero";
  heroMessage.textContent = "These burgers\r\n" + "will give you super powers";

  container.append(backgroundDiv, heroMessage, burgerDiv);

  return container;
})();

export { home };
