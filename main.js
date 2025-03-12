let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
    menuIcon.classList.toggle("bx-x");
    navbar.classList.toggle("active");
}

const typed = new Typed(".text", {
    strings: ["Starter Frontend Developer"],
    typeSpeed: 90,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
})