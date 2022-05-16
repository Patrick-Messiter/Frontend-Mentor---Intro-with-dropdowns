/* FEATURES BUTTON SECTION */

let featuresButton = document.querySelector("#featuresButton");
let featuresContainer = document.querySelector(".featuresContainer");

let featuresArrow = document.getElementById('featuresArrow');


featuresButton.addEventListener('click', () => {
    let featuresValue = window.getComputedStyle(featuresContainer).getPropertyValue("visibility");
    if (featuresValue == "hidden") {
        featuresContainer.style.visibility = "visible";
        featuresContainer.classList.add("temp");
        featuresArrow.src="images/icon-arrow-up.svg";
    } else if (featuresValue == "visible") {
        featuresContainer.style.visibility = "hidden";
        featuresContainer.classList.remove("temp");
        featuresArrow.src="images/icon-arrow-down.svg"
    }
});

/* COMPANY BUTTON SECTION */

let companyButton = document.querySelector("#companyButton");
let companyContainer = document.querySelector(".companyContainer");
let companyArrow = document.getElementById("companyArrow")

companyButton.addEventListener('click', () => {
    let companyValue = window.getComputedStyle(companyContainer).getPropertyValue("visibility");
    if (companyValue == "hidden") {
        companyContainer.style.visibility = "visible";
        companyContainer.classList.add("temp");
        companyArrow.src="images/icon-arrow-up.svg";
    } else if (companyValue == "visible") {
        companyContainer.style.visibility = "hidden";
        companyContainer.classList.remove("temp");
        companyArrow.src="images/icon-arrow-down.svg"
    }
});

function Limitlist () {
    if (featuresContainer.classList.contains('temp') && companyContainer.classList.contains('temp')) {
        /*ADD FUNTIONALITY SO THAT ONLY ONE CONTAINER CAN BE VISIBLE AT A TIME HERE*/
    }
}