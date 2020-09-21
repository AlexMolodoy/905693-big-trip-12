import SortingForm from './sorting-form.js';
import TravelForm from './travel-form.js';
import {daysListElement} from './travel-days.js';
import Abstract from './abstract.js';
import {render, RenderPosition} from '../utils.js';
import Sort from '../presenters/sort-presenter.js';
import {cards} from './card.js';

export function createBody() {
  return (
    `<div class="page-body__container">
      <section class="trip-events">
        <h2 class="visually-hidden">Trip events</h2>

        <!-- Сортировка -->
        <!-- Контент -->
      </section>
    </div>`
  );
}

export default class Body extends Abstract {
  constructor() {
    super();
  }

  getTemplate() {
    return createBody();
  }
}

export const bodyNode = new Body().getElement();
export const sortingForm = new SortingForm();

render(bodyNode, sortingForm.getElement(), RenderPosition.BEFOREEND);
render(bodyNode, new TravelForm().getElement(), RenderPosition.BEFOREEND);
render(bodyNode, daysListElement, RenderPosition.BEFOREEND);

sortingForm.setSortHandler(() => {
  new Sort(daysListElement).rerender(bodyNode, cards);
});
