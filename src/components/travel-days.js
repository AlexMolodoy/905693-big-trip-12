import Abstract from './abstract.js';
import TravelDayElement from './day-element.js';
import {render, RenderPosition} from '../utils.js';
import {MONTHS_MAP} from '../const.js';
import {cards} from './card.js';
import DailyRoute from './daily-route.js';
import Trip from '../presenters/trip-presenter.js';

export function setDates(events) {
  const array = events.map((event) => event.startEvent);
  const dates = [...new Set(array)];
  return dates;
}

export const daysFiltEvent = setDates(cards).map((date) =>
  cards.filter((card) => card.startEvent === date)
);

export function createTravelDaysList() {
  return (
    `<ul class="trip-days">
      </ul>`
  );
}

export default class TravelDaysList extends Abstract {
  constructor() {
    super();
  }

  getTemplate() {
    return createTravelDaysList();
  }
}

export const daysListElement = new TravelDaysList().getElement();

export const daysItemElement = function (index, date) {
  return new TravelDayElement(index, date).getElement();
};

export function renderAll(array, listElement) {
  array.forEach((event) => {
    const daysItemContent = daysItemElement(array.indexOf(event) + 1, event[0].startEvent.getUTCDate() + `-` + MONTHS_MAP[event[0].startEvent.getUTCMonth()]);
    render(listElement, daysItemContent, RenderPosition.BEFOREEND);
    const dailyRouteElement = new DailyRoute().getElement();
    render(daysItemContent, dailyRouteElement, RenderPosition.BEFOREEND);
    event.forEach(() => {
      const tripArray = new Trip(dailyRouteElement);
      tripArray.render(event);
    });
  });
}

renderAll(daysFiltEvent, daysListElement);
