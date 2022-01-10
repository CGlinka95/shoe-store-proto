const iconToggle = document.querySelector('.menu-icon');

// Create a click event for it that toggles a CSS class. 
iconToggle.addEventListener('click', () => {
    document.querySelector('nav').classList.toggle('active-nav');
});