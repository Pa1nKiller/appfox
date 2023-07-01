"use strict"

document.addEventListener("click", documentActions)
function documentActions(e){
    const targetElement = e.target;

    if (targetElement.closest('.icon-menu')){
        document.documentElement.classList.toggle('menu-open');
    }

    if (targetElement.closest('[data-goto]')){
        document.documentElement.classList.contains('menu-open') ?
            document.documentElement.classList.remove('menu-open') : null;
        
        const goTo = targetElement.closest('[data-goto]').dataset.goto;
        const goToElement = document.querySelector(goTo);
        const headerHeight = document.querySelector('.header').offsetHeight;
        const main = document.querySelector('.main');
        const mainMarginTop = window.getComputedStyle(main, null).getPropertyValue("margin-top");

        if (goToElement){

            console.log(goToElement.offsetTop);

            window.scrollTo({
                // - (headerHeight + 15) можно отнять высоту если header fixed, только не правильно она вычисляется
                top: goToElement.offsetTop - (headerHeight + 15),
                behavior: "smooth"
            });
        }
        e.preventDefault();
    }
}