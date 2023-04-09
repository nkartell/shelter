// burger-function
(function () {
    const burgerItem = document.querySelector('.burger');
    const menu = document.querySelector('.header-nav');
    const menuCloseItem = document.querySelector('.header-nav-close');
    const overlay = document.querySelector('.overlay');
    const header = document.querySelector('.header');
    burgerItem.addEventListener('click', () => {
        menu.classList.add('header-nav-active');
        overlay.classList.add('overlay-active');
        header.classList.add('header-overlay-active');
        
    });
    menuCloseItem.addEventListener('click', () => {
        menu.classList.remove('header-nav-active');
        overlay.classList.remove('overlay-active');
        header.classList.remove('header-overlay-active');
    });
}());