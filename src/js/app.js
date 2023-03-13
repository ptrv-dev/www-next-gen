const headerMenuButton = document.querySelector('.header__menu');
const headerMenuNavigation = document.querySelector('nav.header__nav.nav');
const headerMenuActions = document.querySelector('.header__actions');
const headerContainer = document.querySelector('.header__container');

headerMenuButton.addEventListener('click', () => {
  headerMenuButton.classList.toggle('header__menu_active');
  headerMenuNavigation.classList.toggle('nav_active');
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
};

window.addEventListener('resize', handleResize);
window.addEventListener('load', handleResize);
