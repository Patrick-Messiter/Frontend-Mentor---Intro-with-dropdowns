/* FEATURES BUTTON SECTION */

let featuresButton = document.querySelector("#featuresButton");
let featuresContainer = document.querySelector(".featuresContainer");

let featuresArrow = document.getElementById('featuresArrow');

let companyButton = document.querySelector("#companyButton");
let companyContainer = document.querySelector(".companyContainer");
let companyArrow = document.getElementById("companyArrow");

let heroImage = document.querySelector(".heroImage");


let navToggleButtonImage = document.querySelector("#toggleButtonImage");
let navBar = document.querySelector('.taskbar');

let navToggleButton = document.querySelector("#navToggleButton");

let transparentContainer = document.querySelector(".transparentGreyContainer");


featuresButton.addEventListener('click', () => {
    featuresContainer.classList.toggle('active');
    let featuresActive = featuresContainer.classList.contains('active');
    if (featuresActive == true) {
        featuresArrow.src = "images/icon-arrow-up.svg";
    } else {
        featuresArrow.src = "images/icon-arrow-down.svg";
    }
})

/* COMPANY BUTTON SECTION */

companyButton.addEventListener('click', () => {
    companyContainer.classList.toggle('active');
    let companyActive = companyContainer.classList.contains('active');
    if (companyActive == true) {
        companyArrow.src = "images/icon-arrow-up.svg";
    } else {
        companyArrow.src = "images/icon-arrow-down.svg";
    }
});



function mobileChanges () {
    if (screen.width <= 800) {
        heroImage.src="images/image-hero-mobile.png";
        
    } else {
        heroImage.src="images/image-hero-desktop.png";
    }
}

mobileChanges();

window.addEventListener('resize', mobileChanges);



navToggleButton.addEventListener('click', () => {
    navBar.classList.toggle("active");
    let navBarActive = (navBar.classList.contains("active"));
    if (navBarActive == true) {
        navToggleButtonImage.src = "images/icon-close-menu.svg";
        transparentContainer.classList.add('active');
    } else {
        navToggleButtonImage.src = "images/icon-menu.svg";
        document.body.style.backgroundColor = "hsl(0, 0%, 98%)";
        transparentContainer.classList.remove('active');
    }
});






