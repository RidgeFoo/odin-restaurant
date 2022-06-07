const attributions = (function () {
  const l = [
    '<a href="https://www.flaticon.com/free-icons/burger">Burger icons created by Freepik - Flaticon</a>',
    '<a href="https://unsplash.com/photos/pu6b4yIlQF4?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink">Photo by Eiliv-Sonas Aceron</a>',
    '<a href="https://unsplash.com/photos/5nvt9BrLaAc?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink">Photo by Eiliv-Sonas Aceron</a>',
    '<a href="https://unsplash.com/photos/ax4RxkKOWxY?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink">Photo by George Cox</a>',
    '<a href="https://unsplash.com/photos/jdfbtFd-4k8?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink">Photo by D Santiagø</a>',
    '<a href="https://unsplash.com/photos/E94j3rMcxlw?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink">Photo by Food Photographer phototastyfood.ru</a>',
    '<a href="https://unsplash.com/photos/14fsLu2qcN8?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink">Photo by Katrin Hauf</a>',
  ];
  const title = document.createElement("h1");
  title.textContent = "Attributions";
  const container = document.createElement("div");
  container.className = "main";
  container.id = "attributions";
  container.innerHTML = l.join("");
  container.insertAdjacentElement("afterbegin", title);
  return container;
})();

export { attributions };
