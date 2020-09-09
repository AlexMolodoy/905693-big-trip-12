import {filtersTemplate} from '../mocks/filters';
import Abstract from './abstract.js';

const generateFiltersTemplate = (menu) => {
  return menu.map((element) => (
    `<div class="trip-filters__filter">
      <input id="filter-${element.value}" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="${element.value}" ${element.isChecked ? `checked` : ``}>
      <label class="trip-filters__filter-label" for="filter-everything">${element.title}</label>
    </div>\n`
  )).join(``);
};

export function createFiltersForm() {
  return (
    `<form class="trip-filters" action="#" method="get">
      ${generateFiltersTemplate(filtersTemplate)}
      <button class="visually-hidden" type="submit">Accept filter</button>
    </form>`
  );
}

export default class FiltersTemplate extends Abstract {
  constructor(filter) {
    super();
    this._filter = filter;
  }

  getTemplate() {
    return createFiltersForm();
  }
}
