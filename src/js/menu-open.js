document.addEventListener('DOMContentLoaded', () => {
  const menuOpen = document.querySelector('.menu-open');
  const menu = document.querySelector('.modal-menu');
  const menuClose = menu.querySelector('.modal-menu__btn-close');


  menuOpen.addEventListener('click', () => {
    menu.classList.add('modal-menu--active');
  });

  menuClose.addEventListener('click', () => {
    menu.classList.remove('modal-menu--active');
  });
});
