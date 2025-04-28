"use strict";
const page = document.querySelector(".page"),
    header = document.querySelector(".header"),
    burgerIcon = document.querySelector(".burger"),
    menu = document.querySelector(".menu"),
    menuLinks = document.querySelectorAll("[data-goto]"),
    hero = document.querySelector(".hero"),
    popups = document.querySelectorAll(".popup"),
    openPopupButtons = document.querySelectorAll(".open-popup"),
    formInPopupItems = document.querySelectorAll(".popup .form-popup"),
    animItems = document.querySelectorAll(".scroll-anim");
if (burgerIcon) {
    burgerIcon.addEventListener("click", (e) => {
        lockPage(), burgerIcon.classList.toggle("active"), menu.classList.toggle("active");
    });
    for (const e of menuLinks)
        e.addEventListener("click", (t) => {
            t.preventDefault();
            const o = document.querySelector(e.dataset.goto).getBoundingClientRect().top + pageYOffset - header.offsetHeight;
            window.scrollTo({ top: o, behavior: "smooth" }), burgerIcon.classList.contains("active") && (menu.classList.remove("active"), burgerIcon.classList.remove("active"), lockPage());
        });
}
if (popups.length && openPopupButtons.length) {
    for (const e of popups) {
        const t = e.querySelector(".popup__close");
        t &&
            t.addEventListener("click", () => {
                e.close();
            });
    }
    for (const e of openPopupButtons)
        e.addEventListener("click", () => {
            [...popups].find((t) => t.id == e.dataset.popup).showModal();
        });
}
if (formInPopupItems.length)
    for (const e of formInPopupItems)
        e.addEventListener("submit", (t) => {
            t.preventDefault(), e.reset(), e.closest(".popup").close(), document.querySelector("#success-info").showModal();
        });
function setFixPadding(e) {
    const t = document.querySelectorAll(".right-fix-padding");
    for (const o of t) o.style.paddingRight = e;
}
function lockPage() {
    setFixPadding(window.innerWidth - document.documentElement.clientWidth + "px"), page.classList.toggle("lock");
}
function scrollAnim() {
    for (const e of animItems) isInView(e, 0.35) ? e.classList.add("active") : e.classList.remove("active");
}
function setCSSProperty(e, t, o) {
    e.style.setProperty(t, o);
}
function isInView(e, t = 0.3) {
    const o = e.getBoundingClientRect(),
        n = e.offsetHeight * t;
    return o.bottom > 0 && o.top < (window.innerHeight - n || document.documentElement.clientHeight - n);
}
window.addEventListener("scroll", () => {
    scrollAnim();
});

const reviewsSlider = new Swiper(".reviews__slider .swiper", {
  navigation: { nextEl: ".reviews__slider .slider__button-next", prevEl: ".reviews__slider .slider__button-prev" },
  autoHeight: !0,
  observer: !0,
  observeParents: !0,
  observeSlideChildren: !0,
  on: {
      slideChangeTransitionEnd: function () {
          this.updateAutoHeight();
      },
  },
  speed: 800,
  keyboard: { enabled: !0, onlyInViewport: !0, pageUpDown: !0 },
  autoplay: { delay: 5e3, stopOnLastSlide: !1, disableOnInteraction: !1 },
}),
teamSlider = new Swiper(".slider-team .swiper", {
  navigation: { nextEl: ".slider-team .slider__button-next", prevEl: ".slider-team .slider__button-prev" },
  autoHeight: !0,
  on: {
      slideChangeTransitionEnd: function () {
          this.updateAutoHeight();
      },
  },
  speed: 800,
  initialSlide: 1,
  centeredSlides: !0,
  observer: !0,
  observeParents: !0,
  observeSlideChildren: !0,
  breakpoints: { 360: { slidesPerView: 1.36, spaceBetween: 10 }, 767: { slidesPerView: 2, centeredSlides: !1, spaceBetween: 20 }, 992: { slidesPerView: 3, spaceBetween: 32 } },
  keyboard: { enabled: !0, onlyInViewport: !0, pageUpDown: !0 },
});