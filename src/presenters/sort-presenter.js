import TravelDaysList from '../components/travel-days.js';
import {render, RenderPosition, sortingEvents} from '../utils.js';
import {createTrip} from './trip-presenter.js';

export default class Sort {

  constructor() {

    this._container = new TravelDaysList().getElement();

    this._removePreSortEvents = this._removePreSortEvents.bind(this);
    this.rerender = this.rerender.bind(this);

  }

  _removePreSortEvents() {
    document.querySelector(`.trip-days`).remove();
  }

  rerender(element, sortType) {
    this._removePreSortEvents();
    render(element, this._container, RenderPosition.BEFOREEND);
    sortingEvents();
    sortingEvents(sortType).forEach((event) => {
      render(this._container, createTrip(event), RenderPosition.BEFOREEND);
    });
  }

}

