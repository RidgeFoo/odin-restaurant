const contact = (function () {
  function getElements(city, fullAddress) {
    const container = document.createElement("div");
    container.className = "main";
    container.id = "contact";
    container.append(getAddressDetails(city, fullAddress), getMap());
    return container;
  }

  function getMap() {
    const container = document.createElement("iframe");
    container.classList = "google-map";
    container.src =
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2486.0441417293764!2d-0.16805458423186928!3d51.45734597962693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876059674217c07%3A0xb507dc974c829ef4!2s98%20Northcote%20Rd%2C%20London%20SW11%206QW!5e0!3m2!1sen!2suk!4v1654530357770!5m2!1sen!2suk";
    container.setAttribute("loading", "lazy");
    container.setAttribute("referrerpolicy", "no-referrer-when-downgrade");
    container.setAttribute("allowfullscreen", "");
    return container;
  }

  function getAddressDetails(city, fullAddress) {
    const container = document.createElement("div");
    container.id = "address";

    const addressHeader = document.createElement("p");
    const addressFull = document.createElement("p");

    addressHeader.textContent = city;
    addressHeader.className = "address-header";
    addressFull.textContent = fullAddress;

    container.append(
      addressHeader,
      document.createElement("hr"),
      addressFull,
      document.createElement("hr"),
      getOpeningTimes()
    );
    return container;
  }

  function getOpeningTimes() {
    const container = document.createElement("div");
    container.id = "opening-times";
    const openingTimesHeader = document.createElement("p");
    const openingTimes = document.createElement("p");
    openingTimesHeader.textContent = "Open Everyday";
    openingTimes.textContent = "12.00PM - 11.00PM";

    container.append(openingTimesHeader, openingTimes);
    return container;
  }

  return getElements;
})();

export { contact };
