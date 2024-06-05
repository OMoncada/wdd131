document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.getElementById('hamburger');
    const menu = document.querySelector('.hamburger-menu');

    hamburger.addEventListener('click', function () {
        menu.classList.toggle('active');
    });
});
