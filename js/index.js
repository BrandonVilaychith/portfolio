const navigationHamburger = document.querySelector('.hamburger');
const mainNavigation = document.querySelector('.main-nav');
const mainHeader = document.querySelector('.hero h1');
console.log(mainHeader);
console.log('navigationHamburger', navigationHamburger);
navigationHamburger.addEventListener('click', () => {
    navigationHamburger.classList.toggle('change');
    mainNavigation.classList.toggle('active');
    mainHeader.classList.toggle('remove');
    TweenMax.from('nav', .5, {x: -500});
    TweenMax.to('nav', .5, {x: 0});
})