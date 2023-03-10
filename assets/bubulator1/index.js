//A faire : rajouter un compteur negatif lorsque je loupe ma cible et que je clique sur le body
//faire un compte à rebours

const scoreAffichage = document.querySelector('h3');
const cursor = document.querySelector('#cursor');

let score = 0;

window.addEventListener('mousemove', (e) => {
    cursor.style.top = e.pageY + 'px'
    cursor.style.left = e.pageX + 'px'
})
window.addEventListener('mousedown', () => {
    cursor.style.height = '1em'
})
window.addEventListener('mouseup', () => {
    cursor.style.height = '2em'
})


const bubulator = () => {
    const bubble = document.createElement("span");
    bubble.classList.add("bubble");

    document.body.appendChild(bubble);

    const size = Math.random() * 200 + 100 + "px";
    bubble.style.height = size;
    bubble.style.width = size;

    bubble.style.top = Math.random() * 100 + 50 + "%";
    bubble.style.left = Math.random() * 100 + "%";

    const plusMinus = Math.random() > 0.5 ? 1 : -1;
    bubble.style.setProperty("--left", Math.random() * 100 * plusMinus + "%");
    
    bubble.addEventListener('click', () => {
        score++;
        bubble.remove(),
        scoreAffichage.textContent = score;
    });
    setTimeout(() => {
        bubble.remove();
    }, 8000);
    
};

setInterval(bubulator, 300);


