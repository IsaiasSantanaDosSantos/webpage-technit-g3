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

function getServices() {
  try {
    fetch("../services.json")
      .then((response) => response.json())
      .then((json) => {
        createSevicesCard(json);
      })
      .catch((error) => {
        console.error("Erro ao carregar o JSON:", error);
      });
  } catch (er) {
    console.warn(er);
  }
}

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
//Mobile menu

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

// Services section
function createSevicesCard(json) {
  try {
    const servicesContainer = document.querySelector(".servicesContainer");
    for (let i = 0; i < json.services.length; i++) {
      let limitedTitle;
      let limitedText;
      let title = json.services[i].title;
      let text = json.services[i].text;
      let servicesCard = document.createElement("div");
      if (title.length > 50 || text.length > 250) {
        limitedTitle = title.slice(0, 40) + "...";
        limitedText = text.slice(0, 250) + "...";
      } else {
        limitedTitle = title;
        limitedText = text;
      }
      servicesCard.classList.add("servicesCards");
      if (i % 2 === 0) {
        servicesCard.innerHTML = `
        <div class="servicesImgBox test">
          <img
            src="${json.services[i].image}"
            data-src="${json.services[i].image}"
            loading="lazy"
            alt="${limitedTitle} image"
            class="imageServices"
            width=""
            height=""
          />
        </div>
        <div class="servicesTextsBox">
          <div class="logoMarcaImgBox">
            <img
              src="img/xande-logo-transp.png"
              data-src="img/xande-logo-transp.png"
              loading="lazy"
              alt="Logo"
              class="logoMarcaImg"
              width="77%"
              height="auto"
            />
          </div>
          <p class="servicesTextTitle" data-service-title="title">${limitedTitle}</p>
          <p class="servicesText" data-service-text="text">${limitedText}</p>
          <p class="servicesLink" data-service="link">Saiba mais</p>
        </div>
      `;
      } else {
        servicesCard.innerHTML = `
        <div class="servicesImgBox invertPosition">
            <img
              src="${json.services[i].image}"
              data-src="${json.services[i].image}"
              loading="lazy"
              alt="${limitedTitle} image"
              class="imageServices"
              width=""
              height=""
            />
          </div>
          <div class="servicesTextsBox">
            <div class="logoMarcaImgBox">
              <img
                src="img/xande-logo-transp.png"
                data-src="img/xande-logo-transp.png"
                loading="lazy"
                alt="Logo"
                class="logoMarcaImg"
                width="77%"
                height="auto"
              />
            </div>
            <p class="servicesTextTitleLeft" data-service-title="title">${limitedTitle}</p>
            <p class="servicesTextLeft" data-service-text="text">${limitedText}</p>
            <p class="servicesLinkLeft" data-service="link">Saiba mais</p>
          </div>
        `;
      }
      servicesContainer.appendChild(servicesCard);
    }
    const serviceLinkList = [
      ...document.querySelectorAll('[data-service="link"]'),
    ];
    serviceLinkList.forEach(function (e, idx) {
      e.addEventListener("click", function () {
        createServiceWindowInfo(json, idx);
      });
    });
  } catch (er) {
    console.warn(er);
  }
}
function createServiceWindowInfo(json, idx) {
  try {
    const servicesWindow = document.querySelector(".servicesWindow");
    servicesWindow.style.display = "flex";

    const serviceWindowContainer = document.createElement("div");
    serviceWindowContainer.classList.add("serviceWindowContainer");
    serviceWindowContainer.innerHTML = `
    <div class="serviceWindowImgBox">
      <img
        src="/img/xande-logo-transp.png"
        data-src="/img/xande-logo-transp.png"
        alt="Image"
        class="serviceWindowImg"
        width="323"
        height="156"
      />
    </div>
    <span class="fa-sharp fa-solid fa-xmark serviceWindowIcon"></span>
    <div class="serviceWindowContent">
      <p class="serviceWindowTitle">${json.services[idx].title}</p>
      <p class="serviceWindowText">${json.services[idx].text}</p>
    </div>
    `;
    servicesWindow.appendChild(serviceWindowContainer);

    const servicesClosedIcons = [
      ...document.querySelectorAll(".serviceWindowIcon"),
    ];
    servicesClosedIcons.forEach((e) => {
      e.addEventListener("click", () => {
        servicesWindow.style.display = "none";
        serviceWindowContainer.remove();
      });
    });
    servicesWindow.addEventListener("click", (e) => {
      const elCkd = e.target;
      if (elCkd.classList.contains("servicesWindow")) {
        servicesWindow.style.display = "none";
        serviceWindowContainer.remove();
      }
    });
  } catch (er) {
    console.warn(er);
  }
}
// End of Services section
getServices();
