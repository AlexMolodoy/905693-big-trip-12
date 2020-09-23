import Abstract from './abstract.js';
import {dailyRouteElement} from '../presenters/trip-presenter.js';
import {render, RenderPosition} from '../utils.js';

export function createTravelDayElement(numberDay, date) {
  return (
    `<li class="trip-days__item  day">
        <div class="day__info">
          <span class="day__counter">${numberDay}</span>
          <time class="day__date" datetime="2019-03-18">${date}</time>
        </div>

      </li>`
  );
}

export default class TravelDayElement extends Abstract {
  constructor(day) {
    super();
    this._day = day;
  }

  getTemplate() {
    return createTravelDayElement(this._day);
  }
}

export const daysItemElement = new TravelDayElement().getElement();

render(daysItemElement, dailyRouteElement, RenderPosition.BEFOREEND);
