//Скрипт для слайдера
document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelector('.cards_slider');
    const prevBtn = document.querySelector('.button_left');
    const nextBtn = document.querySelector('.button_right');
    const slideWidth = document.querySelector('.card_slider').clientWidth;
    let slideIndex = 0;

    prevBtn.addEventListener('click', function() {
        slideIndex = Math.max(slideIndex - 1, 0);
        slides.style.transform = `translateX(-${slideIndex * slideWidth}px)`
        
    });

    nextBtn.addEventListener('click', function() {
        slideIndex = Math.min(slideIndex + 1, slides.children.length - 1);
        slides.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
    });
});

// Скрипт для меню
const menuButton = document.querySelector(".m-menu_button");
const menu = document.querySelector(".menu")
menuButton.addEventListener('click', function() {
    console.log('Кликнули по меню');
    menu.classList.toggle("is-open");
});
