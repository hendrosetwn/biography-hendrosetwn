// button Fixed Start

let buttonFixed = document.querySelector(".footer__btn");
buttonFixed.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 500 ||
    document.documentElement.scrollTop > 500
  ) {
    buttonFixed.style.display = "block";
  } else {
    buttonFixed.style.display = "none";
  }
}

// button Fixed End

// show/close task Start

let buttonGenerate = document.querySelectorAll(".expertise__btn");
let show = document.querySelectorAll(".eye-show");
let hidden = document.querySelectorAll(".eye-hide");
let task = document.querySelectorAll(".expertise__task");
let line = document.querySelectorAll(".expertise__line");

for (let i = 0; i < buttonGenerate.length; i++) {
  buttonGenerate[i].addEventListener("click", (e) => {
    show[i].classList.toggle("active");
    hidden[i].classList.toggle("active");
    task[i].classList.toggle("active");
    line[i].classList.toggle("active");
  });
}

// show/close task End

// hamburger menu Start
let hamburger = document.querySelector(".header__hamburger");
hamburger.addEventListener("click", (e) => {
  let text = document.querySelectorAll(".header__list");
  let nav = document.querySelector(".header__nav");
  nav.classList.toggle("active");
});

// hamburger menu End

// sticky nav Start

let navbar = document.querySelector(".header__nav");
let viewportHeight = window.innerHeight;
let navHeight = navbar.offsetHeight;

let navbarLinks = document.querySelectorAll(".header__text");

window.addEventListener("scroll", (e) => {
  scrollpos = window.scrollY;
  navbarLinks.forEach((link) => {
    let section = document.querySelector(link.hash);
    if (
      section.offsetTop <= scrollpos + 150 &&
      section.offsetTop + section.offsetHeight > scrollpos + 150
    ) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});

// sticky nav End
