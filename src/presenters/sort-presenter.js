import {SortType} from "../const.js";
import {sortTypeEvent, sortTypeTime, sortTypePrice} from "../utils/sort.js";
import Card, {cards} from '../components/card.js';
import TravelDaysList, {daysListElement} from '../components/travel-days.js';
import {render, RenderPosition} from '../utils.js';


// import Trip, {dailyRouteElement} from './trip-presenter.js';

// export function removeElements() {
//   daysListElement.remove();
// }

export function sortingEvents(sortType) {

  const sortedCards = cards;

  switch (sortType) {
    case SortType.EVENT:
      sortedCards.sort(sortTypeEvent);
      break;
    case SortType.TIME:
      sortedCards.sort(sortTypeTime);
      break;
    case SortType.PRICE:
      sortedCards.sort(sortTypePrice);
      break;
  }

  return sortedCards;
}

export function getSortArrayElement(element) {
  const card = new Card(element);
  return card.getElement();
}

export default class Sort {

  constructor() {

    this._container = new TravelDaysList().getElement();

    this._removePreSortEvents = this._removePreSortEvents.bind(this);
    this.rerender = this.rerender.bind(this);

  }

  _removePreSortEvents() {
    daysListElement.remove();
  }

  rerender(element, events) {
    this._removePreSortEvents();
    render(element, this._container, RenderPosition.BEFOREEND);
    events.forEach((event) => {
      render(this._container, getSortArrayElement(event), RenderPosition.BEFOREEND);
    });
  }

}

