// import {filtersTemplate} from '../mocks/filters';
import Abstract from './abstract.js';

// const generateFiltersTemplate = (menu) => {
//   return menu.map((element) => (
//     `<div class="trip-filters__filter">
//       <input id="filter-${element.value}" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="${element.value}" ${element.isChecked ? `checked` : ``}>
//       <label class="trip-filters__filter-label" for="filter-everything">${element.title}</label>
//     </div>\n`
//   )).join(``);
// };


export function createFiltersForm() {
  return (
    `<form class="trip-filters" action="#" method="get">
      <div class="trip-filters__filter">
        <input id="filter-everything" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="everything" checked>
        <label class="trip-filters__filter-label" for="filter-everything">Everything</label>
      </div>

      <div class="trip-filters__filter">
        <input id="filter-future" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="future">
        <label class="trip-filters__filter-label" for="filter-future">Future</label>
      </div>

      <div class="trip-filters__filter">
        <input id="filter-past" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="past">
        <label class="trip-filters__filter-label" for="filter-past">Past</label>
      </div>

      <button class="visually-hidden" type="submit">Accept filter</button>
    </form>`
  );
}

export default class FiltersTemplate extends Abstract {
  constructor(filter) {
    super();
    this._filter = filter;

    this.setFilterPastHandler = this.setFilterPastHandler.bind(this);
    this.setFilterFutureHandler = this.setFilterFutureHandler.bind(this);
    this.setFilterEverythingHandler = this.setFilterEverythingHandler.bind(this);

  }

  getTemplate() {
    return createFiltersForm();
  }

  setFilterEverythingHandler(handler) {
    this.getElement().querySelector(`#filter-everythinge`).addEventListener(`click`, handler);
  }

  setFilterFutureHandler(handler) {
    this.getElement().querySelector(`#filter-future`).addEventListener(`click`, handler);
  }

  setFilterPastHandler(handler) {
    this.getElement().querySelector(`#filter-past`).addEventListener(`click`, handler);
  }
}
