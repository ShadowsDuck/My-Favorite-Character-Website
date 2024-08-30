let divTop = document.querySelector("#back-to-top");

divTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});

document.addEventListener("scroll", () => {
    let scrollDiff = document.documentElement.scrollTop || document.body.scrollTop;

    if (scrollDiff > 500) {
        divTop.classList.add("show");
    } else {
        divTop.classList.remove("show");
    }
});

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
};

document.querySelectorAll('.game-info figure').forEach(figure => {
    figure.addEventListener('mouseenter', () => {
        figure.classList.add('hover');
    });

    figure.addEventListener('mouseleave', () => {
        figure.classList.remove('hover');
    });
});

document.addEventListener('scroll', () => {
    const navHeader = document.querySelector('nav');

    if (window.screenY > 0) {
        navHeader.classList.add('scrolled');
    } else {
        navHeader.classList.remove('scrolled');
    }
});

document.addEventListener('scroll', () => {
    const navHeader = document.querySelector('nav');

    if (window.screenY > 0) {
        navHeader.classList.add('scrolled');
    } else {
        navHeader.classList.remove('scrolled');
    }
});

// Beautiful Scroll Animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show-title');
        } else {
            entry.target.classList.remove('show-title');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden-title, .hidden-img');
hiddenElements.forEach((el) => observer.observe(el));