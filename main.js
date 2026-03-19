const NAV_OPEN = "nav-open";
const ESCAPE_KEY = "Escape";
const TAB_KEY = "Tab";

const primaryNav = document.getElementById("primary-nav");
const openNavBtn = document.getElementById("open-nav-btn");
const closeNavBtn = document.getElementById("close-nav-btn");
const navOverlay = document.getElementById("nav-overlay");

const focusableNavEls = Array.from(
  primaryNav.querySelectorAll("button:not([disabled]), a[href]"),
);

function focusTrapOnNav(event) {
  const first = focusableNavEls[0];
  const last = focusableNavEls[focusableNavEls.length - 1];

  if (event.key !== TAB_KEY) {
    return;
  }

  if (event.shiftKey) {
    if (document.activeElement === first) {
      event.preventDefault();
      last.focus();
    }
  } else {
    if (document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }
}

function openNav() {
  openNavBtn.ariaExpanded = "true";
  primaryNav.hidden = false;
  primaryNav.inert = false;
  navOverlay.hidden = false;
  document.body.classList.add(NAV_OPEN);
  closeNavBtn.focus();
  primaryNav.addEventListener("keydown", focusTrapOnNav);
}

function closeNav() {
  openNavBtn.ariaExpanded = "false";
  primaryNav.hidden = true;
  primaryNav.inert = true;
  navOverlay.hidden = true;
  document.body.classList.remove(NAV_OPEN);
  openNavBtn.focus();
  primaryNav.removeEventListener("keydown", focusTrapOnNav);
}

function closeNavOnEsc(event) {
  if (event.key === ESCAPE_KEY && !primaryNav.inert) {
    closeNav();
  }
}

document.addEventListener("keydown", closeNavOnEsc);
openNavBtn.addEventListener("click", openNav);
closeNavBtn.addEventListener("click", closeNav);
navOverlay.addEventListener("click", closeNav);

const qty = document.getElementById("qty");
const decreaseQtyBtn = document.getElementById("decrease-qty-btn");
const increaseQtyBtn = document.getElementById("increase-qty-btn");
const addToCartBtn = document.getElementById("add-to-cart-btn");

function increaseQtyByOne() {
  let curr = Number(qty.textContent);
  ++curr;

  qty.textContent = curr;
  qty.value = curr;
}

function decreaseQtyByOne() {
  let curr = Number(qty.textContent);

  if (curr > 0) {
    --curr;
  }

  qty.textContent = curr;
  qty.value = curr;
}

increaseQtyBtn.addEventListener("click", increaseQtyByOne);
decreaseQtyBtn.addEventListener("click", decreaseQtyByOne);
