let num = document.querySelectorAll(".col1 .num");
let section = document.querySelector(".why-choose-us");
let started = false;

window.onscroll = function () {
    if (window.scrollY >= section.offsetTop) {
        if (!started) {
            num.forEach((num) => startCount(num))
        }
        started = true;
    }
}

function startCount(el) {
    let goal = el.dataset.goal;
    let counter =setInterval( () => {
        el.textContent++;
        if (el.textContent == goal) {
            clearInterval(counter)
        }
    }, 2000 / goal)
}