import {createElement} from '../utils.js';

export function createTravelDaysList() {
  return (
    `<ul class="trip-days">
      </ul>`
  );
}

export default class TravelDaysList {
  constructor(sortEvent) {
    this._sortEvent = sortEvent;
    this._element = null;
  }
  getTemplate() {
    return createTravelDaysList();
  }
  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element.remove();
    this._element = null;
  }
}
