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

// Services section
const servicesList = [
  {
    title: "Prevenção de Crimes",
    text: "Um pré Monitoramento em Tempo Real: As câmeras permitem o monitoramento em tempo real, proporcionando uma visão instantânea Evidências em Caso de Incidentes: As gravações das gravações servem como evidências valiosas em caso de incidentes, facilitando a investigação e ajudando na resolução de problemas. Segurança dos Funcionários: As câmeras são vigiadas para a segurança dos funcionários, especialmente em áreas isoladas Controle de  Acesso: Podem ser",
  },
  {
    title:
      "O trabalho de manutenção Diagnóstico de Problemas: Identificar Limpeza Física",
    text: "Realizar um limite Atualização de Software: Manter o sistema operacional e os pr Atualização de Drivers: Atualizar os drivers do Verificação de vírus e malware: Verificação do executável Backup de Dados: Configurar e monitorar Otimização de Desempenho: além do desempenho do computador ajustando a configuração Substituição de Componentes: Substituir ou atualizar componentes de hardware.",
  },
  {
    title: "Câmeras IP e Sistemas de Vigilância Online",
    text: "Câmeras de vigilância IP permitem o monitoramento remoto por meio da internet. Muitos sistemas de vigilância oferecem Nuvem (computação em nuvem): O armazenamento em nuvem permite que você dê Aplicativos Móveis e Plataformas Online: Aplicativos dedicados Internet das Coisas (IoT): Disposição Redes Virtuais Privadas (VPNs): O uso de VPNs pode fornecer uma conexão segura e privada, permitindo o acesso remoto a sistemas sem comprometer a segurança Dispositivos Móveis Avançados: Smartphones e tablets avançados de Acesso Remoto a Computadores: Ferramentas de acesso remoto, como Notificações em Tempo Real: Sistemas de si Autenticação Multifatorial: A implementação de autenticação multifatorial adiciona camadas extras de segurança ao a Redes 5G: O avanço das redes 5G proporciona um Segurança e Criptografia: Implementar práticas robustas de segurança",
  },
];

const servicesTextTitleList = document.querySelectorAll(
  "[data-service-title='title']"
);
const servicesTextList = document.querySelectorAll(
  '[data-service-text="text"]'
);

for (let txt = 0; txt < servicesList.length; txt++) {
  servicesTextTitleList.forEach((e, idx) => {
    if (idx === txt) e.innerHTML += servicesList[txt].title;
  });

  servicesTextList.forEach((e, idx) => {
    if (idx === txt) e.innerHTML += servicesList[txt].text;
  });
}

// Servives window
function serviceWindowEvents() {
  const serviceWindow = document.querySelector(".serviceWindow");
  const serviceWindowIcon = document.querySelector(".serviceWindowIcon");
  const servicesLinks = [...document.querySelectorAll(".servicesLink")];
  const serviceWindowTitle = document.querySelector(".serviceWindowTitle");
  const serviceWindowText = document.querySelector(".serviceWindowText");

  function openServiceWindow() {
    for (let i = 0; i < servicesList.length; i++) {
      if (servicesLinks.indexOf(servicesList[i]) !== -1) {
        console.log(servicesLinks[i]);
        // if (servicesList[i] === servicesLinks[i]) {
        //   serviceWindowTitle.innerHTML = servicesList[i].title;
        //   serviceWindowText.innerHTML = servicesList[i].title;
        // }
        /*
        PAREI NO PONTO EM QUE ESTAVA IMPLEMENTANDO PARA QUANDO CLICAR NO BOTÃO, CARREGAR AS INFORMAÇÃO DO CARD (TITULO E TEXTO), PARA A POPUP. AINDA NÃO OBTIVE SUCESSO...
        
        */
      }
      console.log("Clicou");
      serviceWindow.style.display = "flex";
    }
  }
  function closedServiceWindow() {
    serviceWindow.style.display = "none";
  }

  servicesLinks.forEach((e) => {
    e.addEventListener("click", openServiceWindow);
  });
  serviceWindowIcon.addEventListener("click", closedServiceWindow);
  serviceWindow.addEventListener("click", (e) => {
    const elCkd = e.target;
    if (elCkd.classList.contains("serviceWindow")) closedServiceWindow();
  });
}
serviceWindowEvents();
// End of Servives window
// End of Services section
