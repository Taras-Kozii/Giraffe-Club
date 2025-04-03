'use strict';
const sliderBlock = document.querySelector('.slider__content');
const sliders = sliderBlock.querySelectorAll('.slider__post');
const prevButton = document.getElementById('prev');
const nexButton = document.getElementById('next');

let active = 0;
const slidersCounts = sliders.length - 1;

prevButton.addEventListener('click', () => {
  active = active - 1 >= 0 ? active - 1 : slidersCounts;
  moveSlider();
});

nexButton.addEventListener('click', () => {
  active = active + 1 <= slidersCounts ? active + 1 : 0;
  moveSlider();
});

// let refreshInterval = setInterval(()=> {next.click()}, 5000);

function moveSlider() {
  sliderBlock.style.left = -sliders[active].offsetLeft + 'px';
//    clearInterval(refreshInterval);
//    refreshInterval = setInterval(()=> {next.click()}, 5000);
}
window.addEventListener('resize', () => {
  moveSlider();
})
