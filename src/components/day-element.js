import Abstract from './abstract.js';
import {MONTHS_MAP} from '../const.js';

// import {dailyRouteElement} from '../presenters/trip-presenter.js';
import {render, RenderPosition} from '../utils.js';
import DailyRoute from './daily-route.js';

export function createTravelDayElement(number, day) {

  return (
    `<li class="trip-days__item  day">
        <div class="day__info">
          <span class="day__counter">${number + 1}</span>
          <time class="day__date" datetime="${new Date(day[0]).getFullYear()}-${new Date(day[0]).getMonth}-${new Date(day[0]).getDate()}">${new Date(day[0]).getDate()} - ${MONTHS_MAP[new Date(day[0]).getMonth()]}</time>
        </div>

      </li>`
  );
}

export default class TravelDayElement extends Abstract {
  constructor(number, event) {
    super();
    this._event = event;
    this._number = number;
  }

  getTemplate() {
    return createTravelDayElement(this._number, this._event);
  }

  render() {
    const dailyRouteElement = new DailyRoute(this._event);
    dailyRouteElement.render();
    render(this.getElement(), dailyRouteElement.getElement(), RenderPosition.BEFOREEND);
  }
}

