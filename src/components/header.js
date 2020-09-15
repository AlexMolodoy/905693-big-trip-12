import {shortRouteNode} from './short-route.js';
import Menu from './menu.js';
import Abstract from './abstract.js';
import FiltersTemplate from './filters-form.js';
import {render, RenderPosition} from '../utils.js';

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

export const headerNode = new Header().getElement();

render(headerNode, shortRouteNode.getElement(), RenderPosition.AFTERBEGIN);
render(headerNode.querySelector(`.trip-controls`), new Menu().getElement(), RenderPosition.AFTERBEGIN);
render(headerNode.querySelector(`.trip-controls`), new FiltersTemplate().getElement(), RenderPosition.BEFOREEND);
