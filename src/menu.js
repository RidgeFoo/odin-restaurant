import beefBurger from "./images/beef-burger.png";
import chickenBurger from "./images/chicken-burger.png";
import veggieBurger from "./images/veggie-burger.png";
import cola from "./images/cola.png";
import beer from "./images/beer.png";
import appleJuice from "./images/apple-juice.png";

const menuItems = (function () {
  class Burger {
    constructor(type, price, image) {
      this.name = `${type} Burger`;
      this.price = String(price);
      this.description = `A classic ${this.name} with a super twist`;
      this.image = image;
    }
  }

  class Drink {
    constructor(type, price, isAlcoholic, image) {
      this.name = type;
      this.price = price;
      this.isAlcoholic = isAlcoholic;
      this.description = `${this.name[0].toLowerCase() === "a" ? "An" : "A"} ${
        this.name
      } of heroic proportions`;
      this.image = image;
    }
  }

  const menu = {
    burgers: [
      new Burger("Beef", 16.75, beefBurger),
      new Burger("Chicken", 12.5, chickenBurger),
      new Burger("Veggie", 8.5, veggieBurger),
    ],
    drinks: [
      new Drink("Cola", 3.5, false, cola),
      new Drink("Beer", 5.95, true, beer),
      new Drink("Apple Juice", 3.99, false, appleJuice),
    ],
  };

  return menu;
})();

const menu = (function () {
  function getElements() {
    const container = document.createElement("div");
    container.className = "main";
    container.id = "menu";

    const burgers = getMenuCategory("burgers");
    const drinks = getMenuCategory("drinks");

    container.innerHTML = burgers + "<hr>" + drinks;

    return container;
  }

  function getMenuCategory(category) {
    let categoryContainer = `
    <div class="category">
      <h1>${category}</h1>
      ${menuItems[category]
        .map((i) =>
          getMenuRow(i.name, i.description, i.image, i.price, i.isAlcoholic)
        )
        .join("")}
    </div>`;

    return categoryContainer;
  }

  function getMenuRow(name, description, image, price, isAlcoholic) {
    return `
    <div class="menu-row">
      <img src="${image}">
      <div class="item-description">
        <h2>${name}</h2>
        <p>${description}</p>
        ${isAlcoholic ? "<p>Alcoholic drink</p>" : ""}
      </div>
      <div class="price">£${price}</div>
    </div>
    `;
  }
  return getElements;
})();

export { menu };
