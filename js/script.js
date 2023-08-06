// element variables
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
    if (scrollY > 120) {
        header.style = `padding: 1rem 9%; background: #091a2570; backdrop-filter: blur(10px)`;
    } else {
        header.style = `padding: 2rem 9%; background: none; opacity: 1`;

    }
});
