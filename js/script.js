// element variables
const header = document.querySelector(".header");
const links = document.querySelectorAll(".header nav a");
const growth = document.querySelectorAll('.skill-box .progress .growth')
const progressBars = document.querySelectorAll('.skill-box .progress .bar span')

// adjusting the height of the navbar
window.addEventListener("scroll", () => {
    if (scrollY > 120) {
        header.style = `padding: 1rem 9%; background: #091a2590; backdrop-filter: blur(10px)`;
    } else {
        header.style = `padding: 2rem 9%; background: none; opacity: 1`;
    }
});

// changing the links color on the basis of the active link
let pos = 0;
for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("click", () => {
        links[pos].classList.remove("active");
        links[i].classList.add("active");
        pos = i;
    });
}

console.log(growth)

// showing growth bar
for(let i = 0; i < growth.length; i++) {
    progressBars[i].style = `width: ${growth[i].innerHTML}`
}
