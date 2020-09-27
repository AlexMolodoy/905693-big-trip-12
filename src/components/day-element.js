import Abstract from './abstract.js';
// import {daysFiltEvent} from './travel-days.js';

// import {dailyRouteElement} from '../presenters/trip-presenter.js';
// import {render, RenderPosition} from '../utils.js';
// import {cards} from './card.js';

export function createTravelDayElement(number, day) {

  return (
    `<li class="trip-days__item  day">
        <div class="day__info">
          <span class="day__counter">${number}</span>
          <time class="day__date" datetime="2019-03-18">${day}</time>
        </div>

      </li>`
  );
}

export default class TravelDayElement extends Abstract {
  constructor(number, day) {
    super();
    this._day = day;
    this._number = number;
  }

  getTemplate() {
    return createTravelDayElement(this._number, this._day);
  }
}

