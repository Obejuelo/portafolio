const backdrop = document.getElementById('nav-backdrop');
const navLink = document.getElementsByClassName('nav-link');
let menuBar = document.getElementById('menu-bar');
let navigator = document.getElementById('navigator');
let arrow = document.getElementById('arrow');
let year = document.getElementById('copy-year');
let width = window.innerWidth;
let click = 0;

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
    translate()
});

function translate() {
    if (width >= 720) navigator.style.transform = 'translateX(0px)';
    else navigator.style.transform = 'translateX(-280px)';
    
    if (width < 720) {
        click = 0;
        for (let item of navLink) {
            item.addEventListener('click', () => {
                onClickLink(true);
            });
        }
    } else {
        for (let item of navLink) {
            item.addEventListener('click', () => {
                onClickLink();
            });
        }
    }
}

function onClickLink(isMobile) {
    backdrop.style.display = 'none';

    if(isMobile) {
        click = 0;
        navigator.style.transform = 'translateX(-280px)';
    } else {
        ++click;
        navigator.style.transform = 'translateX(0px)';
    }
}

menuBar.addEventListener('click', () => {
    ++click;
    
    if ((click % 2) != 0) {
        navigator.style.transform = 'translateX(0px)';
        backdrop.style.display = 'block';
    } else {
        navigator.style.transform = 'translateX(-280px)';
        backdrop.style.display = 'none';
    }
});

backdrop.addEventListener('click', () => {
    onClickLink(true);
})

const getYear = () => {
    const fullYear = new Date().getFullYear();
    year.innerText = fullYear;
}

translate();
getYear();