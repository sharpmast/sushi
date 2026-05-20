'use strict'

const menuBtn = document.querySelector('.menu__icon');
const mobMenu = document.querySelector('.menu');
const overlay = document.querySelector('.overlay');

menuBtn.addEventListener('click', () => {

    menuBtn.classList.toggle('menu__icon--active');
    mobMenu.classList.toggle('menu--active');
    overlay.classList.toggle('overlay--active');

    browserWidth();
});

const navLink = document.querySelectorAll('.menu__link');

navLink.forEach(item => {

    item.addEventListener('click', function (e) {

        e.preventDefault();

        menuBtn.classList.remove('menu__icon--active');
        mobMenu.classList.remove('menu--active');
        overlay.classList.remove('overlay--active');

        const blockId = item.getAttribute('href').substring(1);

        document.getElementById(blockId).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

let documentActions = (e) => {
    const button = e.target.closest('.btn--action')

    if (button) {

        document.querySelectorAll('.btn--action').forEach(item => {
            item.classList.remove('touch')
        })

        button.classList.add('touch')
    }
}

document.addEventListener('click', documentActions)

function ibg() {

    let ibg = document.querySelectorAll(".ibg");
    for (let i = 0; i < ibg.length; i++) {
        if (ibg[i].querySelector('img')) {
            ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
        }
    }
}

ibg();


