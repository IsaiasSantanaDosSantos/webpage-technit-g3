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
