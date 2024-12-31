const menuSearch = document.getElementById('menu-search');
const instagramLogo = document.querySelector('.instagram-logo');
const instagramIcon = document.querySelector('.instagram-icon');
const lateralBarMenus = document.querySelector('.lateral-bar-menus');
const homeParagraph = document.querySelector('#home-paragraph');
const searchParagraph = document.querySelector('#search-paragraph');
const exploreParagraph = document.querySelector('#explore-paragraph');
const reelsParagraph = document.querySelector('#reels-paragraph');
const messagesParagraph = document.querySelector('#messages-paragraph');
const notificationsParagraph = document.querySelector('#notifications-paragraph');
const createParagraph = document.querySelector('#create-paragraph');
const profileParagraph = document.querySelector('#profile-paragraph');
const moreParagraph = document.querySelector('#more-paragraph');
const tagLi = document.getElementsByTagName('li');
const searchForm = document.querySelector('.search-form');
const homeBlackIcon = document.getElementById('home-black-icon');
const homeWhiteIcon = document.getElementById('home-white-icon');
const searchIcon = document.querySelector('.search-icon');
const textSearch = document.getElementById('search');
const removeSearch = document.querySelector('.remove-search');


const menuSearchClickCallback = (event) => {
    event.preventDefault();
    instagramLogo.classList.toggle('hidden');
    instagramIcon.classList.toggle('hidden');
    lateralBarMenus.classList.toggle('shrink-lateral-bar-menus');
    homeParagraph.classList.toggle('hidden');
    searchParagraph.classList.toggle('hidden');
    exploreParagraph.classList.toggle('hidden');
    reelsParagraph.classList.toggle('hidden');
    messagesParagraph.classList.toggle('hidden');
    notificationsParagraph.classList.toggle('hidden');
    createParagraph.classList.toggle('hidden');
    profileParagraph.classList.toggle('hidden');
    moreParagraph.classList.toggle('hidden');
    tagLi[1].classList.toggle('border-gray');
    homeBlackIcon.classList.toggle('hidden');
    homeWhiteIcon.classList.toggle('hidden');

    // Show search form
    searchForm.classList.toggle('hidden');
    searchForm.classList.toggle('move-right-search-form');
};

textSearch.addEventListener('focus', () => {
    searchIcon.classList.add('hidden');
    removeSearch.classList.remove('hidden');
    removeSearch.classList.add('cursor-pointer');
});

textSearch.addEventListener('focusout', () => {
    searchIcon.classList.remove('hidden');
    removeSearch.classList.add('hidden');
    removeSearch.classList.remove('cursor-pointer');
});

removeSearch.addEventListener('click', () => {
  alert('¡Div convertido en botón!');
});

menuSearch.addEventListener('click', menuSearchClickCallback);