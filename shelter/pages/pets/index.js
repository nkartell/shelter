// burger-function
(function () {
    const burgerItem = document.querySelector('.burger');
    const menu = document.querySelector('.header-nav');
    const overlay = document.querySelector('.overlay');
    const header = document.querySelector('.header');

    
    burgerItem.addEventListener('click', () => {
        menu.classList.toggle('header-nav-active');
        overlay.classList.toggle('overlay-active');
        header.classList.toggle('header-overlay-active');
        burgerItem.classList.toggle('header-burger-active'); //
       
    });

}());