let servicesBtn = document.getElementById("servicesBtn");
let picOfHome = document.getElementById("main-div");
let servicePage = document.getElementById("services-page");
let elementPic = document.getElementById("services-img");

servicesBtn.addEventListener("click", onService)

function onService() {

    picOfHome.style.display = "none";
    servicePage.style.display = "block";
    elementPic.style.opacity = 0.5;
}