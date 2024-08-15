// Chamada das funções
window.addEventListener('scroll', reveal);
window.addEventListener('scroll', revealLeft);
window.addEventListener('scroll', revealRight);
window.addEventListener('DOMContentLoaded', revealLeftFixed);

// Transição de baixo para cima
function reveal() {
    var reveals = document.querySelectorAll('.reveal');

    for (var i = 0; i < reveals.length; i++) {

        var windowHeight = window.innerHeight;
        var revealTop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if (revealTop < windowHeight - revealpoint) {
            reveals[i].classList.add('active');
        }
        else {
            reveals[i].classList.remove('active');
        }
    }

}
// Transição da esquerda para a direita
function revealLeft() {
    var reveals = document.querySelectorAll('.reveal-left');

    for (var i = 0; i < reveals.length; i++) {

        var windowHeight = window.innerHeight;
        var revealTop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if (revealTop < windowHeight - revealpoint) {
            reveals[i].classList.add('active-left');
        }
        else {
            reveals[i].classList.remove('active-left');
        }
    }

}
// Transição da direita para a esquerda
function revealRight() {
    var reveals = document.querySelectorAll('.reveal-right');

    for (var i = 0; i < reveals.length; i++) {

        var windowHeight = window.innerHeight;
        var revealTop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if (revealTop < windowHeight - revealpoint) {
            reveals[i].classList.add('active-right');
        }
        else {
            reveals[i].classList.remove('active-right');
        }
    }

}

// Transição fixa da esquerda para a direita
function revealLeftFixed() {
    var reveals = document.querySelectorAll('.reveal-left-fixed');

    for (var i = 0; i < reveals.length; i++) {

        var windowHeight = window.innerHeight;
        var revealTop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 0;

        if (revealTop < windowHeight - revealpoint) {
            reveals[i].classList.add('active-left-fixed');
        }
        else {
            reveals[i].classList.remove('active-left-fixed');
        }
    }

}
