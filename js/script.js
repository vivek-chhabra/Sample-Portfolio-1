// element variables
const header = document.querySelector(".header");
const links = document.querySelectorAll(".header nav a");
const growth = document.querySelectorAll(".skill-box .progress .growth");
const progressBars = document.querySelectorAll(".skill-box .progress .bar span");
const menu = document.querySelector("#menu-icon");
const navLinks = document.querySelector(".header nav");
const xmark = document.querySelector(".fa-xmark");
const toggleBtn = document.querySelectorAll(".toggle-btn");
let menuPos = 0;

// adjusting the height of the navbar
window.addEventListener("scroll", () => {
    if (scrollY > 120 && menuPos == 0) {
        header.style = `padding-block: 1rem; background: #091a2590; backdrop-filter: blur(10px)`;
    } else if (menuPos == 1) {
        if (scrollY > 120) {
            header.style = `padding-block: 1rem; background: #081B29;`;
        }
    } else {
        header.style = `padding-block: 2rem;`;
    }
});

window.addEventListener("resize", () => {
    if (window.screen.width > 768) {
        navLinks.style = `transform: translateY(0px)`;
    }
});

// changing the links color on the basis of the active link
let pos = 0;
for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("click", () => {
        links[pos].classList.remove("active");
        links[i].classList.add("active");
        menuPos = 1;
        pos = i;
        if (window.screen.width < 768) {
            menuPos = 1;
            toggleNav();
        }
    });
}

// showing growth bar
for (let i = 0; i < growth.length; i++) {
    progressBars[i].style = `width: ${growth[i].innerHTML}`;
}

// toggling menu
function toggleNav() {
    if (menuPos == 0) {
        navLinks.style = `transform: translateX(0px); display: flex`;
        header.style = `background-color: #081B29`;
        xmark.style = `display: block`;
        menu.style = `display: none`;
        menuPos = 1;
    } else {
        navLinks.style = `transform: translateX(-100%); display: flex`;
        header.style = `background: #091a2590; backdrop-filter: blur(10px)`;
        xmark.style = `display: none`;
        menu.style = `display: block`;
        menuPos = 0;
    }
}
for (let i = 0; i < toggleBtn.length; i++) {
    toggleBtn[i].addEventListener("click", () => {
        toggleNav();
    });
}
