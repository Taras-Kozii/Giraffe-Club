'use strict';
const reviewsSlider = new Swiper('.reviews__slider .swiper', {
  navigation: {
    nextEl: '.reviews__slider .slider__button-next',
    prevEl: '.reviews__slider .slider__button-prev',
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

  // autoplay: {
  //   delay: 5000,
  //   stopOnLastSlide: false,
  //   disableOnInteraction: true,
  // },
});

const teamSlider = new Swiper('.slider-team .swiper', {
  navigation: {
    nextEl: '.slider-team .slider__button-next',
    prevEl: '.slider-team .slider__button-prev',
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
});