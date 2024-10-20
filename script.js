// Target section services
const servicesSection = document.querySelector("#home");
const header = document.querySelector("header");

window.addEventListener("scroll", function() {
    // Periksa apakah user sedang di dalam section services
    const sectionTop = servicesSection.offsetTop;
    const sectionHeight = servicesSection.offsetHeight;
    const scrollPosition = window.scrollY + window.innerHeight;

    if (window.scrollY >= sectionTop && scrollPosition <= (sectionTop + sectionHeight)) {
        header.classList.toggle("sticky", this.window.scrollY > 120);
    }
});

let menu = document.querySelector("#menu-icon");
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('active');
}

// Membatasi pembuatan bintang hanya di dalam section services
function createStars() {
    const container = document.querySelector("#home"); // Ganti dengan services section
    for (let i = 0; i < 1000; i++) {
        const star = document.createElement("div");
        star.className = "star";
        star.style.width = ".1px";
        star.style.height = ".1px";
        star.style.top = Math.random() * 100 + "%";
        star.style.left = Math.random() * 100 + "%";
        container.appendChild(star);
    }
}
createStars();
