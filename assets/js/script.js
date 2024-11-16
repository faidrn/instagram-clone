const menuSearch = document.getElementById('menu-search');
const instagramLogo = document.querySelector('instagram-logo');
const instagramIcon = document.querySelector('instagram-icon');

menuSearch.addEventListener("click", () => {
    instagramLogo.toggleAttribute('hidden');
    instagramIcon.toggleAttribute('hidden');
});