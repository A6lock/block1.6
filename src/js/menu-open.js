document.addEventListener('DOMContentLoaded', () => {
  const menuOpen = document.querySelector('.menu-open');
  const menu = document.querySelector('.modal-menu');
  const menuClose = menu.querySelector('.modal-menu__btn-close');

  const openMenu = function () {
    menu.classList.add('modal-menu--active');
  };

  const closeMenu = function () {
    menu.classList.remove('modal-menu--active');
  };

  menuOpen.addEventListener('click', openMenu, false);

  menuClose.addEventListener('click', closeMenu, false);
});
