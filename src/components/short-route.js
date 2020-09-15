import {MONTHS_MAP} from '../const.js';
import {cards} from './card.js';
import Abstract from './abstract.js';
import TotalPrice from './total-price.js';
import {render, RenderPosition} from '../utils.js';

const citiesOnRoute = (array) => {
  const routeCities = [];
  array.forEach((element) => {
    routeCities.push(element.city);
  });
  routeCities.join(`&mdash;`);
  return routeCities;
};

export function createShortRoute() {
  return (
    `<section class="trip-main__trip-info  trip-info">
      <div class="trip-info__main">
        <h1 class="trip-info__title">${citiesOnRoute(cards)}</h1>
        <p class="trip-info__dates">${MONTHS_MAP[cards[0].startEvent.getMonth()]} ${cards[0].startEvent.getDate()}&nbsp;&mdash;&nbsp;${cards[cards.length - 1].endEvent.getDate()}</p>
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
    return createShortRoute();
  }
}

export const shortRouteNode = new ShortRoute();
render(shortRouteNode.getElement(), new TotalPrice().getElement(), RenderPosition.BEFOREEND);
