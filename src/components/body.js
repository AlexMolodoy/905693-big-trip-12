import SortingForm from './sorting-form.js';
import TravelForm from './travel-form.js';
import TravelDaysList from './travel-days.js';
import Abstract from './abstract.js';
import {render, RenderPosition} from '../utils.js';
// import Sort from '../presenters/sort-presenter.js';

// export function addEventSortingListeners(sortingForm, ) {

//   sortingForm.setSortTimeHandler(() => {
//     const sortType = sortingForm.getElement().querySelector(`#sort-time`).value;
//     new Sort(daysListElement).rerender(bodyNode, sortType);
//   });

//   sortingForm.setSortEventHandler(() => {
//     const sortType = sortingForm.getElement().querySelector(`#sort-event`).value;
//     new Sort(daysListElement).rerender(bodyNode, sortType);
//   });

//   sortingForm.setSortPriceHandler(() => {
//     const sortType = sortingForm.getElement().querySelector(`#sort-price`).value;
//     new Sort(daysListElement).rerender(bodyNode, sortType);
//   });

// }


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
  constructor(data) {
    super();
    this._data = data;
  }

  getTemplate() {
    return createBody();
  }

  render() {
    const sortingForm = new SortingForm();
    const daysList = new TravelDaysList(this._data);
    daysList.render();
    render(this.getElement().querySelector(`.trip-events`), sortingForm.getElement(), RenderPosition.BEFOREEND);
    render(this.getElement().querySelector(`.trip-events`), new TravelForm().getElement(), RenderPosition.BEFOREEND);
    render(this.getElement().querySelector(`.trip-events`), daysList.getElement(), RenderPosition.BEFOREEND);

    // addEventSortingListeners();
  }
}
