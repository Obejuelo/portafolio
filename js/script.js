let menuBar = document.getElementById('menu-bar');
let navigator = document.getElementById('navigator');
let link1 = document.getElementById('link-1');
let link2 = document.getElementById('link-2');
let link3 = document.getElementById('link-3');
let link4 = document.getElementById('link-4');
let arrow = document.getElementById('arrow');
let click = 0;
let width = window.innerWidth;

//Function navBar
let navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 150) {
        navbar.style.background = 'rgba(1,22,39,.9)';
        navbar.style.boxShadow = '0px 2px 10px rgba(0,0,0,.5)';
        arrow.style.opacity = '0';
    } else {
        navbar.style.background = 'transparent';
        navbar.style.boxShadow = 'none';
        arrow.style.opacity = '1';
    }
});

// Function menu bar
window.addEventListener('resize', (e) => {
    width = window.innerWidth;
    if (width >= 720) {
        navigator.style.transform = 'translateX(0px)';
    } else {
        navigator.style.transform = 'translateX(-280px)';
    }
});

if (width < 720) {
    click = 0;
    link1.addEventListener('click', () => {
        --click;
        navigator.style.transform = 'translateX(-280px)';
    });
    link2.addEventListener('click', () => {
        --click;
        navigator.style.transform = 'translateX(-280px)';
    });
    link3.addEventListener('click', () => {
        --click;
        navigator.style.transform = 'translateX(-280px)';
    });
    link4.addEventListener('click', () => {
        --click;
        navigator.style.transform = 'translateX(-280px)';
    });
} else {
    link1.addEventListener('click', () => {
        ++click;
        navigator.style.transform = 'translateX(0px)';
    });
    link2.addEventListener('click', () => {
        ++click;
        navigator.style.transform = 'translateX(0px)';
    });
    link3.addEventListener('click', () => {
        ++click;
        navigator.style.transform = 'translateX(0px)';
    });
    link4.addEventListener('click', () => {
        ++click;
        navigator.style.transform = 'translateX(0px)';
    });
}


menuBar.addEventListener('click', () => {
    ++click;
    // console.log(arrow);
    if ((click % 2) != 0) {
        navigator.style.transform = 'translateX(0px)';
    } else {
        navigator.style.transform = 'translateX(-280px)';
    }
});