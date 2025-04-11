'use strict';
const reviewsSlider = new Swiper('.swiper', {
  navigation: {
    nextEl: '.slider__button-next',
    prevEl: '.slider__button-prev',
  },
  autoHeight: true,
  speed: 800,

  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },

  mousewheel: {
    sensitivity: 1,
  },

  autoplay: {
    delay: 5000,
    stopOnLastSlide: false,
    disableOnInteraction: true,
  },
});

const teamSlider = new Swiper('.slider-team__content', {
  navigation: {
    nextEl: '.slider__button-next',
    prevEl: '.slider__button-prev',
  },
  autoHeight: true,
  speed: 800,

  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },

  mousewheel: {
    sensitivity: 1,
  },

  autoplay: {
    delay: 5000,
    stopOnLastSlide: false,
    disableOnInteraction: true,
  },
});