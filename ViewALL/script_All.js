/* Beautiful Scroll Animations */
// const observer = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//             entry.target.classList.add('show-title');
//         } else {
//             entry.target.classList.remove('show-title');
//         }
//     });
// });

// const hiddenElements = document.querySelectorAll('.hidden-title, .hidden-img');
// hiddenElements.forEach((el) => observer.observe(el));



/* trigger when 1st scroll down and remove animation */
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show-title');
            entry.target.classList.add('show-img');
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1
});

const hiddenElements = document.querySelectorAll('.hidden-title, .hidden-img');
hiddenElements.forEach((el) => observer.observe(el));



/* trigger when scroll down only */
// let lastScrollY = window.scrollY;

// const observer = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//         if (entry.isIntersecting && window.scrollY >= lastScrollY) {
//             entry.target.classList.add('show-title');
//         } else if (!entry.isIntersecting && window.scrollY < lastScrollY) {
//             entry.target.classList.remove('show-title');
//         }
//     });

//     lastScrollY = window.scrollY;
// }, {
//     threshold: 0.1 // Adjust this value to trigger animations earlier
// });

// // Trigger animation on page load if elements are visible
// const hiddenElements = document.querySelectorAll('.hidden-title, .hidden-img');
// hiddenElements.forEach((el) => {
//     if (el.getBoundingClientRect().top < window.innerHeight) {
//         el.classList.add('show-title');
//     }
//     observer.observe(el);
// });