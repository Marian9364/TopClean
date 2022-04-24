let servicesBtn = document.getElementById("servicesBtn");
let contactBtn = document.getElementById("contactBtn");
let aboutBtn = document.getElementById("aboutBtn");
let picOfHome = document.getElementById("main-div");
let servicePage = document.getElementById("services-page");
let contactPage = document.getElementById("contact-page");
let aboutPage = document.getElementById("about-page");
let servicesElementPic = document.getElementById("services-img");
let contactElementPic = document.getElementById("contact-img");
let aboutElementPic = document.getElementById("about-img");

servicesBtn.addEventListener("click", onService);
contactBtn.addEventListener("click", onContact);
aboutBtn.addEventListener("click", onAbout);


function onService() {

    picOfHome.style.display = "none";
    contactPage.style.display = "none";
    aboutPage.style.display = "none";
    servicePage.style.display = "block";
    servicesElementPic.style.opacity = 0.5;
}

function onContact() {

    picOfHome.style.display = "none";
    servicePage.style.display = "none";
    aboutPage.style.display = "none";
    contactPage.style.display = "block";
    contactElementPic.style.opacity = 0.5;
}

function onAbout() {

    picOfHome.style.display = "none";
    servicePage.style.display = "none";
    contactPage.style.display = "none";
    aboutPage.style.display = "block";
    aboutElementPic.style.opacity = 0.5;
}