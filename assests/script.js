// Simple script to highlight the active nav link
const navLinks = document.querySelectorAll('nav ul li a');
const currentPage = window.location.pathname.split('/').pop();
navLinks.forEach(link => {
    if (link.getAttribute('href') === currentPage) {
        link.classList.add('active');
    }
});
// Prevent default form submission for demo
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for contacting us!');
        contactForm.reset();
    });
}

// Slider functionality for home page
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.slider-btn.prev');
const nextBtn = document.querySelector('.slider-btn.next');
let currentSlide = 0;
let slideInterval;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
    currentSlide = index;
}

function nextSlide() {
    let next = (currentSlide + 1) % slides.length;
    showSlide(next);
}

function prevSlide() {
    let prev = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(prev);
}

function startSlider() {
    slideInterval = setInterval(nextSlide, 3000);
}

function stopSlider() {
    clearInterval(slideInterval);
}

if (slides.length > 0) {
    showSlide(0);
    startSlider();
    if (nextBtn && prevBtn) {
        nextBtn.addEventListener('click', () => {
            stopSlider();
            nextSlide();
            startSlider();
        });
        prevBtn.addEventListener('click', () => {
            stopSlider();
            prevSlide();
            startSlider();
        });
    }
}
