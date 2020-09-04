import {createElement} from '../utils.js';

export function createDailyRoute() {
  return (
    `<ul class="trip-events__list">
      </ul>`
  );
}

export default class DailyRoute {
  constructor(dailyRoute) {
    this._dailyRoute = dailyRoute;
    this._element = null;
  }

  getTemplate() {
    return createDailyRoute();
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
