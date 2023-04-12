// burger-function
(function () {
    const burgerItem = document.querySelector('.burger');
    const menu = document.querySelector('.header-nav');
    
    const overlay = document.querySelector('.overlay');
    burgerItem.addEventListener('click', () => {
        menu.classList.toggle('header-nav-active');
        overlay.classList.toggle('overlay-active');
        burgerItem.classList.toggle('header-burger-active');
    });
  
}());