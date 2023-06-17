const swiper = new Swiper('.kitchen-swiper', {
    // Optional parameters
    loop: true,
    simulateTouch: false,
    autoHeight: true,

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});