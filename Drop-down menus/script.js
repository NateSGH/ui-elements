const menuOnClick = document.querySelector('.menu-click');
const menuOnHover = document.querySelector('.menu-hover');

function toggleVisibleClassToElement(element) {
  element.classList.toggle('visible');
}

function showMenuItemsOnHover(menuWrapper) {
  menuWrapper.addEventListener('mouseover', () => {
    toggleVisibleClassToElement(menuWrapper);
  });

  menuWrapper.addEventListener('mouseout', () => {
    toggleVisibleClassToElement(menuWrapper);
  });
}

function closeMenuWhenClickedOutside(menuEl) {
  window.addEventListener('click', (event) => {
    if (
      event.target !== document.querySelector('.menu-click') &&
      menuEl.classList.contains('visible')
    ) {
      toggleVisibleClassToElement(menuEl);
    }
  });
}
menuOnClick.addEventListener('click', () => {
  toggleVisibleClassToElement(menuOnClick);
  closeMenuWhenClickedOutside(menuOnClick);
});

showMenuItemsOnHover(menuOnHover);
