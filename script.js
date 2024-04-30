document.addEventListener('DOMContentLoaded', function() {
    const toggleNavBtn = document.getElementById('toggleNav');
    const nav = document.querySelector('nav');

    toggleNavBtn.addEventListener('click', function() {
        nav.classList.toggle('show');
    });
});
