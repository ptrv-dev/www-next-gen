const body = document.body;
const headerMenuButton = document.querySelector('.header__menu');
const headerMenuNavigation = document.querySelector('nav.header__nav.nav');
const headerMenuActions = document.querySelector('.header__actions');
const headerContainer = document.querySelector('.header__container');

const subscribeButton = document.querySelector('.subscribe__form .button');

console.log(subscribeButton);

headerMenuButton.addEventListener('click', () => {
  headerMenuButton.classList.toggle('header__menu_active');
  headerMenuNavigation.classList.toggle('nav_active');
  body.classList.toggle('ovh');
});

const handleResize = () => {
  const w = window.innerWidth;
  console.log(w);

  if (w <= 1460) {
  }
  if (w <= 768) {
    headerMenuNavigation.append(headerMenuActions);
  } else {
    headerContainer.insertBefore(headerMenuActions, headerMenuButton);
  }
  if (w <= 550) {
    subscribeButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" height="24px" width="24px">
    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
  </svg>`;
  } else {
    subscribeButton.innerHTML = `Subscribe`;
  }
};

window.addEventListener('resize', handleResize);
window.addEventListener('load', handleResize);
