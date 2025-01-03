
let hamburgerIcon = document.getElementById('hamburger');
let menu = document.getElementById('navMenu');

hamburgerIcon.addEventListener('click', () => {
    if (menu.style.display === 'none') {
        menu.style.display = 'block';
        console.log('öppen');
    } else {
        menu.style.display = 'none';
        console.log('stängd');
    }
});