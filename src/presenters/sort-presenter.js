import TravelDaysList from '../components/travel-days.js';
import {render, RenderPosition} from '../utils.js';
import {createTrip} from './trip-presenter.js';
import {bodyNode} from '../components/body.js';
import {renderAll} from '../components/travel-days.js';

function sortingEvents(array, sortType) {

  const sortTypeTime = (timeA, timeB) => timeB.eventDuration - timeA.eventDuration;
  const sortTypePrice = (priceA, priceB) => priceB.price - priceA.price;

  let sortedCards = array;

  switch (sortType) {
    case `sort-event`:
      sortedCards = array;
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

