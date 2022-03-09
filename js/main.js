const nav = document.querySelector('.nav');
const burgerBtn = document.querySelector('.burger-btn')
const allNavItems = document.querySelectorAll('.nav__item')

const showNav = ()=>{
nav.classList.toggle ('nav--active')
allNavItems.forEach(item => {
    item.addEventListener('click', () => {
    nav.classList.remove ('nav--active')
    })
})
showNavItemsAnimation();
}

const showNavItemsAnimation = () =>{
    let delayTime = 0;

    allNavItems.forEach(item => {
        item.classList.toggle('nav-items-animation')
        item.style.animationDelay = '.' + delayTime + 's';
        delayTime++;
    })
}

burgerBtn.addEventListener('click', showNav)

