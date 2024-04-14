
// CAROUSEL
import EmblaCarousel from "embla-carousel";
import AutoScroll from "embla-carousel-auto-scroll";

const OPTIONS = { loop: true, startDelay: 500 };

const emblaNode = document.querySelector(".carousel-skills");
const viewportNode = emblaNode.querySelector(".viewport-skills");

const emblaApi = EmblaCarousel(viewportNode, OPTIONS, [
  AutoScroll({
    playOnInit: true,
    stopOnMouseEnter: true,
    stopOnInteraction: false,
  }),
]);

// VARS
const hero = document.querySelector("[data-hero]");
const mobileWidth = 1024;

// function heroSwitch() {
//   console.log(window.innerWidth);
//   if (window.innerWidth <= mobileWidth) {
//     hero.src = '/assets/images/hero-mobile.png';
//   } else {
//     hero.src = '/assets/images/hero-desktop.png';
//   }
// }
// window.addEventListener('resize', heroSwitch);

// heroSwitch();

const menuButton = document.getElementById("menu-button");
const exitMenuButton = document.getElementById("exit-menu-button");
const menu = document.getElementById("menu");
const overlay = document.getElementById("overlay");

menuButton.addEventListener("click", () => {
  menu.classList.remove("hidden");
  overlay.classList.remove("hidden");
  if (menu.classList.contains("animate-slideIn")) {
    menu.classList.remove("animate-slideIn");
    menu.classList.add("animate-slideOut");
  }
  console.log(menu);
});

exitMenuButton.addEventListener("click", () => {
  overlay.classList.add("hidden");
  if (menu.classList.contains("animate-slideOut")) {
    menu.classList.remove("animate-slideOut");
    menu.classList.add("animate-slideIn");
  }
  console.log(menu);
});

menu.addEventListener("animationend", (e) => {
  console.log(e.animationName);
  if (e.animationName === "slideIn") {
    menu.classList.add("hidden");
  }
});
