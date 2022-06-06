const menuItems = function () {
  const menu = {
    burgers: [
      new Burger("Beef", 16.75),
      new Burger("Fish", 12.5),
      new Burger("Veggie", 8.5),
    ],
    drinks: [
      new Drink("Cola", 3.5, false),
      new Drink("Beer", 5.95, true),
      new Drink("Apple Juice", 3.99, false),
    ],
  };

  class Burger {
    constructor(type, price) {
      this.name = `${type} Burger`;
      this.price = String(price);
      this.description = `A classic ${this.name} with a super twist`;
    }
  }

  class Drink {
    constructor(type, price, isAlcoholic) {
      this.name = type;
      this.price = price;
      this.isAlcoholic = isAlcoholic;
      this.description = `A ${this.name} of heroic proportions`;
    }
  }

  return menu;
};

const menu = (function () {
  function getElements() {}

  return getElements;
})();
