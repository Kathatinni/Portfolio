let menuIcon= document.querySelectior('#menu-icon');
let navbar= document.querySelector('.navbar');
menuIcon.onclick=() => {
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active');
}