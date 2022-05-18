/* FEATURES BUTTON SECTION */

let featuresButton = document.querySelector("#featuresButton");
let featuresContainer = document.querySelector(".featuresContainer");

let featuresArrow = document.getElementById('featuresArrow');

let companyButton = document.querySelector("#companyButton");
let companyContainer = document.querySelector(".companyContainer");
let companyArrow = document.getElementById("companyArrow");

let heroImage = document.querySelector(".heroImage");


let navToggleButtonImage = document.querySelector("#toggleButtonImage");
let navBar = document.querySelector('nav');

let navToggleButton = document.querySelector("#navToggleButton");


featuresButton.addEventListener('click', () => {
    let featuresValue = window.getComputedStyle(featuresContainer).getPropertyValue("visibility");
    if (featuresValue == "hidden") {
        featuresContainer.style.visibility = "visible";
        featuresArrow.src="images/icon-arrow-up.svg";
    } else if (featuresValue == "visible") {
        featuresContainer.style.visibility = "hidden";
        featuresArrow.src="images/icon-arrow-down.svg"
    }
});

/* COMPANY BUTTON SECTION */

companyButton.addEventListener('click', () => {
    let companyValue = window.getComputedStyle(companyContainer).getPropertyValue("visibility");
    if (companyValue == "hidden") {
        companyContainer.style.visibility = "visible";
        companyContainer.classList.add("temp");
        companyArrow.src="images/icon-arrow-up.svg";
    } else if (companyValue == "visible") {
        companyContainer.style.visibility = "hidden";
        companyContainer.classList.remove("temp");
        companyArrow.src="images/icon-arrow-down.svg";
    }
});



function mobileChanges () {
    if (screen.width <= 800) {
        heroImage.src="images/image-hero-mobile.png";
    } else {
        heroImage.src="images/image-hero-desktop.png";
        navBar.style.display = "grid";
    }
}

window.addEventListener('resize', mobileChanges);



navToggleButton.addEventListener('click', () => {
    let navBarValue = window.getComputedStyle(navBar).getPropertyValue("display");
    if (navBarValue == "none" || "grid") {
        navBar.style.display = "flex";
        navBarValue = "flex";
        navToggleButtonImage.src = "images/icon-close-menu.svg";
    } else {
        navBar.style.display = "none"; 
        navBarValue = "none"; 
        navToggleButtonImage.src = "images/icon-menu.svg";
    }
    console.log(`This is the ${navBarValue}`);
});



