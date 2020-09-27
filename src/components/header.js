import {shortRouteNode} from './short-route.js';
import Menu from './menu.js';
import Abstract from './abstract.js';
import FiltersTemplate from './filters-form.js';
import {render, RenderPosition} from '../utils.js';
import Filter from '../presenters/filter-presenter.js';

export function addEventFilteringListeners() {

  filteringForm.setFilterEverythingHandler(() => {
    const filterType = filteringForm.getElement().querySelector(`#filter-everything`).value;
    new Filter().rerender(filterType);
  });

  filteringForm.setFilterFutureHandler(() => {
    const filterType = filteringForm.getElement().querySelector(`#filter-future`).value;
    new Filter().rerender(filterType);
  });

  filteringForm.setFilterPastHandler(() => {
    const filterType = filteringForm.getElement().querySelector(`#filter-past`).value;
    new Filter().rerender(filterType);
  });

}

export function createHeader() {
  return (
    `<div class="trip-main">
          <!-- Маршрут и стоимость -->

          <div class="trip-main__trip-controls  trip-controls">
            <h2 class="visually-hidden">Switch trip view</h2>
            <!-- Меню -->


            <h2 class="visually-hidden">Filter events</h2>
            <!-- Фильтры -->

          </div>

          <button class="trip-main__event-add-btn  btn  btn--big  btn--yellow" type="button">New event</button>
        </div>`
  );
}

export default class Header extends Abstract {
  constructor() {
    super();
  }

  getTemplate() {
    return createHeader();
  }
}

export const filteringForm = new FiltersTemplate();

export const headerNode = new Header().getElement();

render(headerNode, shortRouteNode.getElement(), RenderPosition.AFTERBEGIN);
render(headerNode.querySelector(`.trip-controls`), new Menu().getElement(), RenderPosition.AFTERBEGIN);
render(headerNode.querySelector(`.trip-controls`), filteringForm.getElement(), RenderPosition.BEFOREEND);

addEventFilteringListeners();
