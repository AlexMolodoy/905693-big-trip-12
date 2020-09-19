import {SortType} from "../const.js";
import {sortTypeEvent, sortTypeTime, sortTypePrice} from "../utils/sort.js";
import {cards} from '../components/card.js';
// import {daysListElement} from '../components/travel-days.js';

import Trip, {dailyRouteElement} from './trip-presenter.js';

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

export default class Sort {

  constructor() {

    // this._removePreSortEvents = this._removePreSortEvents.bind(this);

  }

  // _removePreSortEvents() {
  //   daysListElement.removeElement();
  // }

  rerender(sortType) {
    // this._removePreSortEvents();
    const sortedTripArray = new Trip(dailyRouteElement);
    sortedTripArray.render(sortingEvents(sortType));
  }

}

