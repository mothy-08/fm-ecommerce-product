const primaryNav = document.getElementById("primary-nav");
const logo = document.getElementById("logo");
const mobileNav = document.getElementById("mobile-nav");
const desktopBreakpoint = window.matchMedia("(min-width: 48rem)");

function handleBreakpoint(event) {
  if (event.matches) {
    logo.after(primaryNav);

    if (mobileNav.open) {
      mobileNav.close();
    }
  } else {
    mobileNav.appendChild(primaryNav);
  }
}

desktopBreakpoint.addEventListener("change", handleBreakpoint);
handleBreakpoint(desktopBreakpoint); // run once on init

mobileNav.addEventListener("click", (e) => {
  if (e.target === mobileNav) mobileNav.close();
});

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
