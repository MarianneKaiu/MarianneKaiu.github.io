const nav = document.querySelector(".navbar");
let y = 0;

window.addEventListener("scroll", () => {
    if (window.scrollY > y) {
        (nav.style.top = "-400px"), (nav.style.opacity = "0");
    } else (nav.style.top = 0), (nav.style.opacity = "1");
    y = window.scrollY;
});
