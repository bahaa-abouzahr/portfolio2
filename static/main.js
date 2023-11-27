const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('nav ul');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navList.classList.toggle('active');
});

const typed = new Typed('.multiple', {
    strings: ['Front-End Developer', 'IT Specialist'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:100,
    loop:true
});
