// Global variable
const navbarWrapper = document.querySelector(".containerNavbar");

//Mobile menu
let btnMobile = document.createElement("i");
btnMobile.classList.add("fa-solid");
btnMobile.classList.add("fa-bars");
btnMobile.classList.add("mobileBtnMobile");
navbarWrapper.appendChild(btnMobile);

/*  Mudar cor Navbar ao rolar page */
const todaNavbar = document.querySelector("nav");
const linkNavbar = document.querySelectorAll(".navbarMenu a");
const btnHamburguer = document.querySelector(".mobileBtnMobile");
const DrmWhitelogo = document.querySelector(".static-logo");
const DrmBlackLogo = document.querySelector(".moved-logo");
const navHeight = "80";

window.addEventListener("scroll", function () {
  if (window.scrollY > navHeight) {
    todaNavbar.style.transition = "0.8s";
    todaNavbar.style.backgroundColor = "#ffffff";
    todaNavbar.style.borderBottom = " 1px solid rgb(0 41 255)";
    btnMobile.style.color = "#000";
    linkNavbar.forEach((e) => (e.style.color = "#000"));
  }
  if (window.scrollY < navHeight) {
    todaNavbar.style.transition = "0.8s";
    todaNavbar.style.backgroundColor = "transparent";
    todaNavbar.style.borderBottom = "none";
    btnMobile.style.color = "#ffffff";
    linkNavbar.forEach((e) => (e.style.color = "#ffffff"));
  }
});

//Scroll
let anchorSelector = 'a[href^="#"]';

let anchorList = document.querySelectorAll(anchorSelector);

anchorList.forEach((link) => {
  link.onclick = function (e) {
    e.preventDefault();

    let destination = document.querySelector(this.hash);

    destination.scrollIntoView({
      behavior: "smooth",
    });
  };
});

let allTemplateLinkList = Array.prototype.slice.call(
  document.querySelectorAll(".templatesBtnBoxes a")
);
const noLinkList = allTemplateLinkList.slice(6, allTemplateLinkList.length);
noLinkList.forEach((e) => e.classList.add("desabled"));

//Navbar informations
// //Mobile menu
// let btnMobile = document.createElement("i");
// btnMobile.classList.add("fa-solid");
// btnMobile.classList.add("fa-bars");
// btnMobile.classList.add("mobileBtnMobile");
// navbarWrapper.appendChild(btnMobile);

document.addEventListener("click", (event) => {
  const elementClicked = event.target;

  //Hidden/show mobile menu
  if (elementClicked.classList.contains("mobileBtnMobile")) {
    const mobileMenu = document.querySelector(".navbarMenu");
    mobileMenu.style.display != "flex"
      ? (mobileMenu.style.display = "flex")
      : (mobileMenu.style.display = "none");
  }
});

//End Mobile menu

// Header animation
// texts a serem exibidos
const texts = [
  "TECHINT_G3",
  "INSTALAÇÕES",
  "DE CÂMERAS ",
  "E REDE DE",
  "COMPUTADORES",
];

// Elemento HTML
const pageTitle = document.querySelector(".dinamicText");
// Função para exibir a animação de digitação

function typeWriter(text, i, callback) {
  if (i < text.length) {
    pageTitle.innerHTML += text.charAt(i);
    setTimeout(function () {
      typeWriter(text, i + 1, callback);
    }, 100);
  } else {
    setTimeout(callback, 1000);
  }
}

function deleteWriter(callback) {
  const text = pageTitle.innerHTML;
  const length = text.length;
  if (length > 0) {
    pageTitle.innerHTML = text.substring(0, length - 1);
    setTimeout(function () {
      deleteWriter(callback);
    }, 50);
  } else {
    setTimeout(callback, 1000);
  }
}

function animateTexts(index) {
  if (index >= texts.length) {
    index = 0;
  }

  const currentlyTe = texts[index];
  pageTitle.innerHTML = "";

  typeWriter(currentlyTe, 0, function () {
    setTimeout(function () {
      deleteWriter(function () {
        animateTexts(index + 1);
      });
    }, 1000);
  });
}

animateTexts(0);
// End of header animation
