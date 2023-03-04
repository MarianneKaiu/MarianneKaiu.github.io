const nav = document.querySelector(".navbar");
let y = 0;

window.addEventListener("scroll", () => {
    if (window.scrollY > y) {
        nav.style.top = "-400px";
    } else nav.style.top = 0;
    y = window.scrollY;
});
