import ShortRoute from './short-route.js';
import Menu from './menu.js';
import Abstract from './abstract.js';
import FiltersTemplate from './filters-form.js';
import {render, RenderPosition} from '../utils.js';
// import Filter from '../presenters/filter-presenter.js';

// function addEventFilteringListeners() {

//   filteringForm.setFilterEverythingHandler(() => {
//     const filterType = filteringForm.getElement().querySelector(`#filter-everything`).value;
//     new Filter().rerender(filterType);
//   });

//   filteringForm.setFilterFutureHandler(() => {
//     const filterType = filteringForm.getElement().querySelector(`#filter-future`).value;
//     new Filter().rerender(filterType);
//   });

//   filteringForm.setFilterPastHandler(() => {
//     const filterType = filteringForm.getElement().querySelector(`#filter-past`).value;
//     new Filter().rerender(filterType);
//   });

// }


export function createHeader() {
  return (
    `<div class="trip-main">
          <!-- ÐœÐ°Ñ€ÑˆÑ€ÑƒÑ‚ Ð¸ ÑÑ‚Ð¾Ð¸Ð¼Ð¾ÑÑ‚ÑŒ -->

          <div class="trip-main__trip-controls  trip-controls">
            <h2 class="visually-hidden">Switch trip view</h2>
            <!-- ÐœÐµÐ½ÑŽ -->


            <h2 class="visually-hidden">Filter events</h2>
            <!-- Ð¤Ð¸Ð»ÑŒÑ‚Ñ€Ñ‹ -->

          </div>

          <button class="trip-main__event-add-btn  btn  btn--big  btn--yellow" type="button">New event</button>
        </div>`
  );
}

export default class Header extends Abstract {
  constructor(items) {
    super();
    this.items = items.slice();
  }

  getTemplate() {
    return createHeader();
  }

  render() {
    const shortRoute = new ShortRoute(this.items);
    shortRoute.render();
    render(this.getElement(), shortRoute.getElement(), RenderPosition.AFTERBEGIN);
    render(this.getElement().querySelector(`.trip-controls`), new Menu().getElement(), RenderPosition.AFTERBEGIN);
    render(this.getElement().querySelector(`.trip-controls`), new FiltersTemplate().getElement(), RenderPosition.BEFOREEND);
    // addEventFilteringListeners();
  }
}
