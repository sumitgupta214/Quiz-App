// public/script.js
let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-slide');
    slides.forEach((slide, i) => {
        slide.style.transform = `translateX(${100 * (i - index)}%)`;
        slide.classList.toggle('active', i === index);
    });
}

function nextSlide(index) {
    const slides = document.querySelectorAll('.carousel-slide');
    if (index < slides.length - 1) {
        currentSlide = index + 1;
        showSlide(currentSlide);
    }
}

function prevSlide(index) {
    if (index > 0) {
        currentSlide = index - 1;
        showSlide(currentSlide);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentSlide);

    document.querySelectorAll('.next-button').forEach(button => {
        button.addEventListener('click', () => {
            const index = parseInt(button.getAttribute('data-index'), 10);
            nextSlide(index);
        });
    });

    document.querySelectorAll('.prev-button').forEach(button => {
        button.addEventListener('click', () => {
            const index = parseInt(button.getAttribute('data-index'), 10);
            prevSlide(index);
        });
    });
});
