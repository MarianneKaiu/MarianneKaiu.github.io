// Faire apparaitre la popup quand on est en bas du site
const popUp = document.querySelector("#popup");
window.addEventListener("scroll", () => {
    console.log(window.scrollY);
    if (window.scrollY >= 285) {
        popUp.style.opacity = 1;
        popUp.style.transform = "translateX(0)";
    } else {
        popUp.style.opacity = 0;
        popUp.style.transform = "translateX(200px)";
    }
});

// Bonus : quand on clicke sur la popup elle disparait pour toujours
const exit = document.querySelector("#closeBtn");

exit.addEventListener("click", () => {
    popUp.remove();
});
