'use strict';
const page = document.querySelector('.page');
const header = document.querySelector('.header');
const burgerIcon = document.querySelector('.burger');
const menu = document.querySelector('.menu');
const menuLinks = document.querySelectorAll('[data-goto]');
const hero = document.querySelector('.hero');
const popups = document.querySelectorAll('.popup');
const openPopupButtons = document.querySelectorAll('.open-popup');
const formInPopupItems = document.querySelectorAll('.popup .form-popup');
const animItems = document.querySelectorAll('.scroll-anim');

//===============================MENU-BURGER===========================================
if (burgerIcon) {
  burgerIcon.addEventListener('click', e => {
    lockPage();
    burgerIcon.classList.toggle('active');
    menu.classList.toggle('active');
  });
  for (const link of menuLinks) {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const block = document.querySelector(link.dataset.goto);
      const valueToBlock = block.getBoundingClientRect().top + pageYOffset - header.offsetHeight;
      
      window.scrollTo({
        top: valueToBlock,
        behavior: "smooth",
      });
      if (burgerIcon.classList.contains('active')) {
        menu.classList.remove('active');
				burgerIcon.classList.remove('active');
        lockPage();
			}
    })
  }
}
//================================POPUP==================================
if (popups.length && openPopupButtons.length) {
  for (const popup of popups) {
    const closePopup = popup.querySelector('.popup__close');
    if (closePopup) {
      closePopup.addEventListener('click', () => {
        popup.close();
      })
    }
  }
  for (const button of openPopupButtons) {
    button.addEventListener('click', () => {
      const popup = [...popups].find(item => item.id == button.dataset.popup);
      popup.showModal();
    });
  }
}
if (formInPopupItems.length) {
  for (const form of formInPopupItems) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      form.reset();
      form.closest('.popup').close();
      document.querySelector('#success-info').showModal();
    })
  }
}

//================================SWIPER=================================
const reviewsSlider = new Swiper('.reviews__slider .swiper', {
  navigation: {
    nextEl: '.reviews__slider .slider__button-next',
    prevEl: '.reviews__slider .slider__button-prev',
  },
  autoHeight: true,
  observer: true,
	observeParents: true,
	observeSlideChildren: true,
  on: {
    slideChangeTransitionEnd: function () {
      this.updateAutoHeight();
    }
  },
  speed: 800,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },

  autoplay: {
    delay: 5000,
    stopOnLastSlide: false,
    disableOnInteraction: false,
  },
});

const teamSlider = new Swiper('.slider-team .swiper', {
  navigation: {
    nextEl: '.slider-team .slider__button-next',
    prevEl: '.slider-team .slider__button-prev',
  },
  autoHeight: true,
  on: {
    slideChangeTransitionEnd: function () {
      this.updateAutoHeight();
    }
  },
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

//================================FUNCTIONS=============================
function setFixPadding(paddingRight) {
  const items = document.querySelectorAll('.right-fix-padding');
  for (const item of items) {
    item.style.paddingRight = paddingRight;
  }
}
function lockPage() {
  const rightPaddingValue = window.innerWidth - document.documentElement.clientWidth + 'px';
  setFixPadding(rightPaddingValue);
  page.classList.toggle('lock');
}

window.addEventListener('scroll', () => {
  scrollAnim();
});
function scrollAnim() {
  for (const item of animItems) {
    if (isInView(item, 0.35)) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  }
}
function setCSSProperty(item, property, value) {
  item.style.setProperty(property, value);
}
function isInView(elem, persent= 0.3) {
  const rect = elem.getBoundingClientRect();
  const elemHeight = elem.offsetHeight;
  const visiblePart = elemHeight * persent;
  
  return rect.bottom > 0 && rect.top < (
    window.innerHeight - visiblePart || document.documentElement.clientHeight - visiblePart);
}