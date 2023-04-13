// burger-function
(function () {
    const burgerItem = document.querySelector('.burger');
    const menu = document.querySelector('.header-nav');
    const html = document.querySelector('html');
    const overlay = document.querySelector('.overlay');
    

    burgerItem.addEventListener('click', openBurger);
    overlay.addEventListener('click', openBurger);

    function openBurger() {
        menu.classList.toggle('header-nav-active');
        overlay.classList.toggle('overlay-active');
        burgerItem.classList.toggle('header-burger-active');
        html.classList.toggle('html-scroll');
    }

  
}());