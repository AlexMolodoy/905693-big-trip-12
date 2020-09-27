import TravelDaysList from '../components/travel-days.js';
import {render, RenderPosition} from '../utils.js';
import {createTrip} from './trip-presenter.js';
import {cards} from '../components/card.js';
import {bodyNode} from '../components/body.js';
import {daysFiltEvent, renderAll} from '../components/travel-days.js';


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

  let sortedCards = cards;

  switch (sortType) {
    case `sort-event`:
      sortedCards = daysFiltEvent;
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
    if (sortType === `sort-event`) {
      const filteredArray = sortingEvents(sortType);
      this._removePreSortEvents();
      const filteredArrayElement = new TravelDaysList().getElement();
      renderAll(filteredArray, filteredArrayElement);
      render(bodyNode, filteredArrayElement, RenderPosition.BEFOREEND);
    } else {
      this._removePreSortEvents();
      render(element, this._container, RenderPosition.BEFOREEND);
      sortingEvents();
      sortingEvents(sortType).forEach((event) => {
        render(this._container, createTrip(event), RenderPosition.BEFOREEND);
      });
    }
  }
}

