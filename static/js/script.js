window.addEventListener('scroll', function () {

    const navbar = document.querySelector('.navbar');

    if (window.scrollY > 50) {
        navbar.style.background = '#000';
        navbar.style.transition = '0.5s';
    } else {
        navbar.style.background = 'rgba(0,0,0,0.8)';
    }

});


// Button Animation

const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {

    button.addEventListener('mouseover', () => {
        button.style.transform = 'scale(1.05)';
        button.style.transition = '0.3s';
    });

    button.addEventListener('mouseout', () => {
        button.style.transform = 'scale(1)';
    });

});


// Welcome Alert

window.onload = function () {

    console.log("Welcome to Organic Fruits Website");

};