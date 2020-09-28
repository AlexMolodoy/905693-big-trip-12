import {MONTHS_MAP} from '../const.js';
import Abstract from './abstract.js';
import TotalPrice from './total-price.js';
import {render, RenderPosition} from '../utils.js';

const citiesOnRoute = (array) => {
  const routeCities = [];
  array.forEach((element) => {
    routeCities.push(element.city);
  });
  routeCities.join(`&mdash;`);
  if (routeCities.length > 2) {
    const routeCitiesShort = `${routeCities[0]} - ... - ${routeCities[routeCities.length - 1]}`;
    return routeCitiesShort;
  } else {
    return routeCities;
  }
};

const compDates = function (cards) {
  if (cards[0].startEvent.getMonth() === cards[cards.length - 1].endEvent.getMonth()) {
    return true;
  } else {
    return false;
  }
};

export function createShortRoute(cards) {
  return (
    `<section class="trip-main__trip-info  trip-info">
      <div class="trip-info__main">
        <h1 class="trip-info__title">${citiesOnRoute(cards)}</h1>
        <p class="trip-info__dates">${MONTHS_MAP[cards[0].startEvent.getMonth()]} ${cards[0].startEvent.getDate()}&nbsp;&mdash;&nbsp;${(compDates(cards)) ? `` : MONTHS_MAP[cards[cards.length - 1].endEvent.getMonth()]} ${cards[cards.length - 1].endEvent.getDate()}</p>
      </div>


    </section>`
  );
}

export default class ShortRoute extends Abstract {
  constructor(route) {
    super();
    this._route = route;
  }

  getTemplate() {
    return createShortRoute(this._route);
  }

  render() {
    render(this.getElement(), new TotalPrice(this._route).getElement(), RenderPosition.BEFOREEND);
  }
}
