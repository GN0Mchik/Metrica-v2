const BURGER_OPENED_CLASSNAME = "burger_open";
const BURGER_BTN_OPENED_CLASSNAME = "active";
const BODY_FIXED_CLASSNAME = "body_fixed";
const BURGER_NAV_CLASSNAME = "burger_open";

const bodyNode = document.querySelector("body");
const burgerNode = document.querySelector(".js-burger");
const burgerBtnNode = document.querySelector(".js-burger-btn");
const burgerContentNode = document.querySelector(".js-burger__content");
const burgerLinkNode = document.querySelector(".js-link");

burgerBtnNode.addEventListener("click", toggleBurger);

burgerNode.addEventListener("click", (event) => {
  const isClickOutsideContent = !event
    .composedPath()
    .includes(burgerContentNode);

  if (isClickOutsideContent) {
    toggleBurger();
  }
});

function toggleBurger() {
  burgerNode.classList.toggle(BURGER_OPENED_CLASSNAME);
  bodyNode.classList.toggle(BODY_FIXED_CLASSNAME);
  burgerBtnNode.classList.toggle(BURGER_BTN_OPENED_CLASSNAME);
  burgerLinkNode.classList.toggle(BURGER_NAV_CLASSNAME);
}

document.querySelectorAll("[burger_link]").forEach((n) =>
  n.addEventListener("click", () => {
    hamburgerBtn.classList.remove("js-link");
  })
);
