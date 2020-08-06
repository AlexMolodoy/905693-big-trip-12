import {createTravelCard} from './components/card.js';
import {createMenu} from './components/menu.js';
import {createTotalPrice} from './components/total-price.js';
import {createShortRoute} from './components/short-route.js';
import {createDailyRoute} from './components/daily-route.js';
import {createTravelDaysList} from './components/travel-days.js';
import {createTravelDayElement} from './components/day-element.js';
import {createTravelForm} from './components/travel-form.js';
import {createFiltersForm} from './components/filters-form.js';
import {createSortingForm} from './components/sorting-form.js';
import {COUNT_OF_TRIPELEMENTS} from './utils.js';

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const siteCostTravelElement = document.querySelector(`.trip-main`);
const siteTripControlsElement = document.querySelector(`.trip-controls`);
const siteTripEventsElement = document.querySelector(`.trip-events`);

render(siteCostTravelElement, createShortRoute(), `afterbegin`);

const siteTripInfoElement = document.querySelector(`.trip-info`);

render(siteTripInfoElement, createTotalPrice(), `beforeend`);
render(siteTripControlsElement, createMenu(), `beforeend`);
render(siteTripControlsElement, createFiltersForm(), `beforeend`);

render(siteTripEventsElement, createSortingForm(), `beforeend`);
render(siteTripEventsElement, createTravelForm(), `beforeend`);
render(siteTripEventsElement, createTravelDaysList(), `beforeend`);

const siteTripDaysListElement = document.querySelector(`.trip-days`);

render(siteTripDaysListElement, createTravelDayElement(), `beforeend`);

const siteTripDaysElement = document.querySelector(`.trip-days__item`);

render(siteTripDaysElement, createDailyRoute(), `beforeend`);

const siteTripInDayElement = siteTripEventsElement.querySelector(`.trip-events__list`);
for (let i = 0; i < COUNT_OF_TRIPELEMENTS; i++) {
  render(siteTripInDayElement, createTravelCard(), `beforeend`);
}
