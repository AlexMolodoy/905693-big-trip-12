import {render, RenderPosition, filteringEvents} from '../utils.js';
import {createTrip} from './trip-presenter.js';

export default class Filter {

  constructor(container) {

    this._container = container;

    this._removePreSortEvents = this._removePreSortEvents.bind(this);
    this.rerender = this.rerender.bind(this);

  }

  _removePreSortEvents() {
    document.querySelector(`.trip-days`).remove();
  }

  rerender(element, sortType) {
    this._removePreSortEvents();
    render(element, this._container, RenderPosition.BEFOREEND);
    filteringEvents();
    filteringEvents(sortType).forEach((event) => {
      render(this._container, createTrip(event), RenderPosition.BEFOREEND);
    });
  }

}
