let bottomText = document.querySelector(".bottom-text");

if (screen.width < 960) {
  alert("Less than 960 - mobile version");
  bottomText.style.display = "none";


} else {
  //alert("More than 960 - desktop version");
  //desktop-version variables
  let servicesBtnTop = document.querySelector("#servicesBtnTop");
  let servicesBtnFooter = document.querySelector("#servicesBtnFooter");
  let homeBtnFooter = document.querySelector("#homeBtnFooter");
  let contactBtnTop = document.querySelector("#contactBtnTop");
  let contactBtnFooter = document.querySelector("#contactBtnFooter");
  let aboutBtnTop = document.querySelector("#aboutBtnTop");
  let aboutBtnFooter = document.querySelector("#aboutBtnFooter");
  let homePage = document.getElementById("main-div");
  let servicePage = document.getElementById("services-page");
  let contactPage = document.getElementById("contact-page");
  let aboutPage = document.getElementById("about-page");
  let servicesElementPic = document.getElementById("services-img");
  let contactElementPic = document.getElementById("contact-img");
  let aboutElementPic = document.getElementById("about-img");
  let badge = document.getElementById("badge");

  badge.addEventListener("click", onHome);
  homeBtnFooter.addEventListener("click", onHome);
  servicesBtnTop.addEventListener("click", onService);
  servicesBtnFooter.addEventListener("click", onService);
  contactBtnTop.addEventListener("click", onContact);
  contactBtnFooter.addEventListener("click", onContact);
  aboutBtnTop.addEventListener("click", onAbout);
  aboutBtnFooter.addEventListener("click", onAbout);

  function onHome() {
    homePage.style.display = "block";
    contactPage.style.display = "none";
    aboutPage.style.display = "none";
    servicePage.style.display = "none";
    servicesElementPic.style.opacity = 0.0;
    contactElementPic.style.opacity = 0.0;
    aboutElementPic.style.opacity = 0.0;
    window.location.href = "#home";
  }

  function onService() {
    homePage.style.display = "none";
    contactPage.style.display = "none";
    aboutPage.style.display = "none";
    servicePage.style.display = "block";
    servicesElementPic.style.opacity = 0.2;
  }

  function onContact() {
    homePage.style.display = "none";
    servicePage.style.display = "none";
    aboutPage.style.display = "none";
    contactPage.style.display = "block";
    contactElementPic.style.opacity = 0.2;
  }

  function onAbout() {
    homePage.style.display = "none";
    servicePage.style.display = "none";
    contactPage.style.display = "none";
    aboutPage.style.display = "block";
    aboutElementPic.style.opacity = 0.2;
  }
}
