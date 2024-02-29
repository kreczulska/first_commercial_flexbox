const nav = document.querySelector('.nav-mobile');
const navBtn = document.querySelector('.burger-btn');
const allNavItems = document.querySelectorAll('.nav-mobile__item');

const toggleNav = () => {
    nav.classList.toggle('nav-mobile--active');
    navBtn.classList.toggle('bbtn-animation-open');
};

allNavItems.forEach((item) => {
    item.addEventListener('click', () => {
        nav.classList.remove('nav-mobile--active');
        navBtn.classList.remove('bbtn-animation-open');
    });
});

navBtn.addEventListener('click', toggleNav);