const menuToggle = document.getElementById("menuToggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

const reveals = document.querySelectorAll(".reveal");

function revealSections() {
    reveals.forEach(section => {
        const windowHeight = window.innerHeight;
        const revealTop = section.getBoundingClientRect().top;

        if(revealTop < windowHeight - 120){
            section.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealSections);
revealSections();

window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");

    if(window.scrollY > 50){
        navbar.style.background = "rgba(18,18,18,0.85)";
    }else{
        navbar.style.background = "rgba(18,18,18,0.6)";
    }
});
