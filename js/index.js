const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

const title = document.querySelector("title");
title.textContent = "Great Idea!";


const navigation1 = document.querySelector("nav").children[0];
navigation1.textContent = "Services";
const navigation2 = document.querySelector("nav").children[1];
navigation2.textContent = "Product";
const navigation3 = document.querySelector("nav").children[2];
navigation3.textContent = "Vision";
const navigation4 = document.querySelector("nav").children[3];
navigation4.textContent = "Features";
const navigation5 = document.querySelector("nav").children[4];
navigation5.textContent = "About";
const navigation6 = document.querySelector("nav").children[5];
navigation6.textContent = "Contact";


const br1 = document.createElement('br');
const br2 = document.createElement('br');
const ctaText2 = document.createTextNode("Is");
const ctaText3 = document.createTextNode("Awesome");
const ctaText = document.querySelector(".cta-text").children[0];
ctaText.textContent = "DOM ";
ctaText.appendChild(br1);
ctaText.appendChild(ctaText2);
ctaText.appendChild(br2);
ctaText.appendChild(ctaText3);

const button = document.querySelector(".cta-text").children[1];
button.textContent = "Get Started";

const image1 = document.querySelector("#cta-img");
image1.src = 'img/header-img.png';

const text1 = document.querySelector(".top-content").children[0].children[0];
text1.textContent = "Features";
const text2 = document.querySelector(".top-content").children[0].children[1];
text2.textContent = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
const text3 = document.querySelector(".top-content").children[1].children[0];
text3.textContent = "About";
const text4 = document.querySelector(".top-content").children[1].children[1];
text4.textContent = "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

const image2 = document.querySelector("#middle-img");
image2.src = 'img/mid-page-accent.jpg';

const text5 = document.querySelector(".bottom-content").children[0].children[0];
text5.textContent = "Services";
const text6 = document.querySelector(".bottom-content").children[0].children[1];
text6.textContent = "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
const text7 = document.querySelector(".bottom-content").children[1].children[0];
text7.textContent = "Product";
const text8 = document.querySelector(".bottom-content").children[1].children[1];
text8.textContent = "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
const text9 = document.querySelector(".bottom-content").children[2].children[0];
text9.textContent = "Vision";
const text10 = document.querySelector(".bottom-content").children[2].children[1];
text10.textContent = "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";