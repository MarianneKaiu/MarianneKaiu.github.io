const cursor = document.querySelector("#cursor");

window.addEventListener("mousemove", (e) => {
    cursor.style.top = e.pageY + "px";
    cursor.style.left = e.pageX + "px";
});
window.addEventListener("mousedown", () => {
    cursor.style.height = "1em";
});
window.addEventListener("mouseup", () => {
    cursor.style.height = "2em";
});
