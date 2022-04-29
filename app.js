if (screen.width < 960) {
  alert("Less than 960");
  //mobile version variables
  let mobileServicesBtnTop = document.querySelector("#mobileServicesBtnTop");
  let mobileServicesBtnFooter = document.querySelector(
    "#mobileServicesBtnFooter"
  );
  let mobileHomeBtnFooter = document.querySelector("#mobileHomeBtnFooter");
  let mobileContactBtnTop = document.querySelector("#mobileContactBtnTop");
  let mobileContactBtnFooter = document.querySelector(
    "#mobileContactBtnFooter"
  );
  let mobileAboutBtnTop = document.querySelector("#mobileAboutBtnTop");
  let mobileAboutBtnFooter = document.querySelector("#mobileAboutBtnFooter");
  let mobileHomePage = document.getElementById("mobile-main-div");
  let mobileServicePage = document.getElementById("mobile-services-page");
  let mobileContactPage = document.getElementById("mobile-contact-page");
  let mobileAboutPage = document.getElementById("mobile-about-page");
  let mobileServicesElementPic = document.getElementById("mobile-services-img");
  let mobileContactElementPic = document.getElementById("mobile-contact-img");
  let mobileAboutElementPic = document.getElementById("mobile-about-img");
  let mobileBadge = document.getElementById("mobile-badge");

  mobileBadge.addEventListener("click", onMobileHome);
  mobileHomeBtnFooter.addEventListener("click", onMobileHome);
  mobileServicesBtnTop.addEventListener("click", onMobileService);
  mobileServicesBtnFooter.addEventListener("click", onMobileService);
  mobileContactBtnTop.addEventListener("click", onMobileContact);
  mobileContactBtnFooter.addEventListener("click", onMobileContact);
  mobileAboutBtnTop.addEventListener("click", onMobileAbout);
  mobileAboutBtnFooter.addEventListener("click", onMobileAbout);

  function onMobileHome() {
    mobileHomePage.style.display = "block";
    mobileContactPage.style.display = "none";
    mobileAboutPage.style.display = "none";
    mobileServicePage.style.display = "none";
    mobileServicesElementPic.style.opacity = 0.0;
    mobileContactElementPic.style.opacity = 0.0;
    mobileAboutElementPic.style.opacity = 0.0;
    window.location.href = "#home";
  }

  function onMobileService() {
    mobileHomePage.style.display = "none";
    mobileContactPage.style.display = "none";
    mobileAboutPage.style.display = "none";
    mobileServicePage.style.display = "block";
    mobileServicesElementPic.style.opacity = 0.2;
  }

  function onMobileContact() {
    mobileHomePage.style.display = "none";
    mobileServicePage.style.display = "none";
    mobileAboutPage.style.display = "none";
    mobileContactPage.style.display = "block";
    mobileContactElementPic.style.opacity = 0.2;
  }

  function onMobileAbout() {
    mobileHomePage.style.display = "none";
    mobileServicePage.style.display = "none";
    mobileContactPage.style.display = "none";
    mobileAboutPage.style.display = "block";
    mobileAboutElementPic.style.opacity = 0.2;
  }
} else {
  alert("More than 960");
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
