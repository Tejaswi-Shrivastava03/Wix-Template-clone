const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            console.log("Element is intersecting:", entry.target);
            entry.target.classList.add('show');
            // ...
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
console.log("Total elements observed:", document.querySelectorAll('.animate-on-scroll').length);



const slides = document.querySelector(".carousel-slides");
const images = document.querySelectorAll(".carousel-slides img");
const prevBtn = document.querySelector(".previous");
const nextBtn = document.querySelector(".next");

let index = 0;
const total = images.length;

function updateSlide() {
    slides.style.transform = `translateX(-${index * 100}%)`;
}

nextBtn.addEventListener("click", () => {
    index = (index + 1) % total;
    updateSlide();
});

prevBtn.addEventListener("click", () => {
    index = (index - 1 + total) % total;
    updateSlide();
});
