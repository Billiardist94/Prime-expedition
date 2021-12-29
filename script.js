// ___Scroll Up-btn___
const arrowUp = document.querySelector('.scrollup');
const arrowUpDisplay = getComputedStyle(arrowUp).display;
function arrowUpGo(e) {
    e.preventDefault;
    arrowUp.classList.add('anim__arrowUp');
    setTimeout(() => {
        arrowUp.classList.remove('anim__arrowUp')
    },1000)
}
arrowUp.addEventListener('click', arrowUpGo);

$(document).ready(function(){
         
    $(window).scroll(function(){
    if ($(this).scrollTop() > 100) {
    $('.scrollup').fadeIn();
    } else {
    $('.scrollup').fadeOut();
    }
    });
     
    $('.scrollup').click(function(){
    $("html, body").animate({ scrollTop: 0 }, 0);
    return false;
    });
     
    });

// ___Menu-Burger___

const openBurgerBtn = document.querySelector('#open-burger-btn');
const closeBurgerBtn = document.querySelector('#close-burger-btn');
const menuBurger = document.querySelector('.menu__burger');
const content = document.querySelector('.content');
const links = document.querySelectorAll('.burger__link');

function openBurger(e) {
    menuBurger.classList.add('menu__burger-opened');
}

function closeBurger(e) {
    menuBurger.classList.remove('menu__burger-opened');
}

openBurgerBtn.addEventListener('click', openBurger);
closeBurgerBtn.addEventListener('click', closeBurger);
content.addEventListener('click', closeBurger);
window.addEventListener('scroll', (e) => {
    if(window.innerHeight > 567) {
        
        closeBurger()
    }
});

links.forEach((el) => {
    el.addEventListener('click', closeBurger);
})
