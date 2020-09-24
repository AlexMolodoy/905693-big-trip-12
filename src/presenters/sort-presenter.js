import TravelDaysList from '../components/travel-days.js';
import {render, RenderPosition} from '../utils.js';
import Trip, {createTrip} from './trip-presenter.js';
import {cards} from '../components/card.js';
// import {tripArray} from './trip-presenter.js';
import DailyRoute from '../components/daily-route.js';

export const sortTypeEvent = (eventA, eventB) => {
  return eventA.startDate - eventB.startDate;
};

export const sortTypeTime = (timeA, timeB) => {
  return timeB.eventDuration - timeA.eventDuration;
};

export const sortTypePrice = (priceA, priceB) => {
  return priceB.price - priceA.price;
};

export function sortingEvents(sortType) {

  const sortedCards = cards;

  switch (sortType) {
    case `sort-event`:
      break;
    case `sort-time`:
      sortedCards.sort(sortTypeTime);
      break;
    case `sort-price`:
      sortedCards.sort(sortTypePrice);
      break;
  }

  return sortedCards;
}

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
    if (sortType === `sort-event`) {
      const dailyRouteElement = new DailyRoute().getElement();

      const tripArray = new Trip(dailyRouteElement);
      tripArray.render(cards);
    } else {
      render(element, this._container, RenderPosition.BEFOREEND);
      sortingEvents();
      sortingEvents(sortType).forEach((event) => {
        render(this._container, createTrip(event), RenderPosition.BEFOREEND);
      });
    }

  }

}

