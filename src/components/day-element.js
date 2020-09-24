import Abstract from './abstract.js';
import {dailyRouteElement} from '../presenters/trip-presenter.js';
import {render, RenderPosition} from '../utils.js';
// import {cards} from './card.js';

export function createTravelDayElement(days) {

  // const DAYS_ARRAY = new Set(() => {
  //   const tmpArray = [];
  //   events.map(tmpArray.push(event.startDate.getDate()));
  //   return tmpArray;
  // });

  // const MONTHS_ARRAY = new Set(() => {
  //   const tmpArray = [];
  //   events.map(tmpArray.push(event.startDate.getMonth()));
  //   return tmpArray;
  // });

  return (
    `<li class="trip-days__item  day">
        <div class="day__info">
          <span class="day__counter">${days.number}</span>
          <time class="day__date" datetime="2019-03-18">${days.date}</time>
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

const days = [
  {number: 1, date: `18 - MAR`},
  {number: 2, date: `19 - MAR`},
];

export const daysItemElement = new TravelDayElement(days[0]).getElement();

render(daysItemElement, dailyRouteElement, RenderPosition.BEFOREEND);
