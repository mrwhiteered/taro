const teamList = document.querySelector('.team__list');
const prevBtn = document.querySelector('.prev__btn');
const nextBtn = document.querySelector('.next__btn');
const itemWidth = document.querySelector('.team__item').offsetWidth;
const totalItems = document.querySelectorAll('.team__item').length;
let currentPosition = 0;

prevBtn.addEventListener('click', () => {
    if (currentPosition < 0) {
        currentPosition += itemWidth;
        teamList.style.transform = `translateX(${currentPosition}px)`;
    }
});

nextBtn.addEventListener('click', () => {
    if (currentPosition > -itemWidth * (totalItems - 4)) { // Определяем 4, так как у вас всегда отображается 4 элемента
        currentPosition -= itemWidth;
        teamList.style.transform = `translateX(${currentPosition}px)`;
    }
});
