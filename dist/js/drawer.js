const hamburgerButton = document.querySelector("#hamburgerButton");

hamburgerButton.addEventListener("click", () => {
    document.querySelector("nav").classList.toggle("slide");
    document.querySelector(".inner-line").classList.toggle("open");
    document.querySelector("body").classList.toggle("disable-scroll");
});