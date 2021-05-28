let burgerMenu = document.querySelector('.burger-menu');
let navigation = document.querySelector('nav');
let bars = document.querySelector('.bars');
burgerMenu.addEventListener('click', function () {
    if (navigation.classList.contains('desktop-only')) {
        navigation.classList.remove('desktop-only');
        burgerMenu.classList.add('exitBtn');
        bars.style.visibility = 'hidden';
    } else {
        navigation.classList.add('desktop-only')
        burgerMenu.classList.remove('exitBtn');
        bars.style.visibility = 'visible';
    }
});