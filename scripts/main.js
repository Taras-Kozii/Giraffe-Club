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
  initialSlide: 1,
  centeredSlides: true,
  observer: true,
	observeParents: true,
	observeSlideChildren: true,


  breakpoints: {
		360: {
			slidesPerView: 1.36,
      spaceBetween: 10,
		},
		767: {
			slidesPerView: 2,
      centeredSlides: false,
      spaceBetween: 20,
		},
		992: {
      slidesPerView: 3,
      spaceBetween: 32,
		}
	},

  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },
});