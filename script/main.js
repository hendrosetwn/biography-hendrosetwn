// button Fixed Start

let buttonFixed = document.querySelector(".btn__fixed");
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

let buttonOpen = document.querySelectorAll(".expertise__btn--open");
let buttonClose = document.querySelectorAll(".expertise__btn--close");
let hehe = document.getElementById("skills").firstElementChild;

for (let i = 0; i < buttonOpen.length; i++) {
  buttonOpen[i].addEventListener("click", (e) => {
    buttonOpen[i].style.display = "none";
    buttonClose[i].style.display = "block";

    e.target.parentElement.nextElementSibling.nextElementSibling.style.display =
      "none";
  });
}

for (let i = 0; i < buttonClose.length; i++) {
  buttonClose[i].addEventListener("click", (e) => {
    buttonClose[i].style.display = "none";
    buttonOpen[i].style.display = "block";

    e.target.parentElement.nextElementSibling.nextElementSibling.style.display =
      "block";
  });
}

// show/close task End
