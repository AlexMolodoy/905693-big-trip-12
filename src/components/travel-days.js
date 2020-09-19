import Abstract from './abstract.js';
import {daysItemElement} from './day-element.js';
import {render, RenderPosition} from '../utils.js';

export function createTravelDaysList() {
  return (
    `<ul class="trip-days">
      </ul>`
  );
}

export default class TravelDaysList extends Abstract {
  constructor() {
    super();
  }

  getTemplate() {
    return createTravelDaysList();
  }
}

export const daysListElement = new TravelDaysList().getElement();

render(daysListElement, daysItemElement, RenderPosition.BEFOREEND);
