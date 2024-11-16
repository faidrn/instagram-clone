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

    // Show search form
    searchForm.classList.toggle('hidden');
    searchForm.classList.toggle('move-right-search-form');
};


menuSearch.addEventListener('click', menuSearchClickCallback);