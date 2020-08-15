import {menuTemplate} from '../mocks/menu.js';

const generateMenuTemplate = (menu) => {
  return menu.map((element) => (
    `<a class="trip-tabs__btn ${element.isChecked ? `trip-tabs__btn--active` : ``}" href="#">${element.title}</a>\n`
  )).join(``);
};

export function createMenu() {
  return (
    `<nav class="trip-controls__trip-tabs  trip-tabs">
      ${generateMenuTemplate(menuTemplate)}
    </nav>`
  );
}
