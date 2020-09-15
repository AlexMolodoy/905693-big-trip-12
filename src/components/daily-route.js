import Abstract from './abstract.js';
// import {cards} from './card.js';
// import {render, RenderPosition} from '../utils.js';

export function createDailyRoute() {

  return (
    `<ul class="trip-events__list">
      </ul>`
  );
}

export default class DailyRoute extends Abstract {
  constructor(dailyRoute) {
    super();
    this._dailyRoute = dailyRoute;
  }

  getTemplate() {
    return createDailyRoute();
  }
}

