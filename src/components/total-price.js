import {createElement} from '../utils.js';

export function createTotalPrice() {
  return (
    `<p class="trip-info__cost">
        Total: &euro;&nbsp;<span class="trip-info__cost-value">1230</span>
      </p>`
  );
}

export default class TotalPrice {
  constructor(sortEvent) {
    this._sortEvent = sortEvent;
    this._element = null;
  }
  getTemplate() {
    return createTotalPrice();
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
