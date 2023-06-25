const mySwiper = new Swiper('.kitchen-swiper', {
  direction: 'horizontal',
  loop: false,

  slidesPerColumn: 1,
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 20,
  grid: {
    rows: 4,
    fill: 'row',
  },

  breakpoints: {
    439: {
      slidesPerColumn: 2,
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 54,
      grid: {
        rows: 2,
        fill: 'row',
      },
    },
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

