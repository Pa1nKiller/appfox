const mySwiper = new Swiper('.kitchen-swiper', {
  direction: 'horizontal',
  loop: false,
  speed: 560, 
  slidesPerColumn: 2,
  slidesPerView: 2,
  slidesPerGroup: 1,
  spaceBetween: 10,
  grid: {
    rows: 2,
    fill: 'row',
  },

  breakpoints: {
    360: {
      slidesPerColumn: 2,
      slidesPerView: 2,
      slidesPerGroup: 1,
      spaceBetween: 20,
      grid: {
        rows: 2,
        fill: 'row',
      },
    },


    439: {
      slidesPerColumn: 2,
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 40,
      grid: {
        rows: 4,
        fill: 'row',
      },
    },
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

