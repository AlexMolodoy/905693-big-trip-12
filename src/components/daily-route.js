import Abstract from './abstract.js';
import Trip from '../presenters/trip-presenter.js';

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

  render() {
    const dailyTrip = new Trip(this.getElement());
    dailyTrip.render(this._dailyRoute);
  }
}

