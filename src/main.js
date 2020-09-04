import Card from './components/card.js';
import Menu from './components/menu.js';
import TotalPrice from './components/total-price.js';
import ShortRoute from './components/short-route.js';
import DailyRoute from './components/daily-route.js';
import TravelDaysList from './components/travel-days.js';
import TravelDayElement from './components/day-element.js';
import TravelForm from './components/travel-form.js';
import FiltersTemplate from './components/filters-form.js';
import SortingForm from './components/sorting-form.js';
import {cards} from './components/card.js';
import {render, RenderPosition} from './utils.js';

const siteCostTravelElement = document.querySelector(`.trip-main`);
const siteTripControlsElement = document.querySelector(`.trip-controls`);
const siteTripEventsElement = document.querySelector(`.trip-events`);

render(siteCostTravelElement, new ShortRoute().getElement(), RenderPosition.BEFOREEND);

const siteTripInfoElement = document.querySelector(`.trip-info`);

render(siteTripInfoElement, new TotalPrice().getElement(), RenderPosition.BEFOREEND);
render(siteTripControlsElement, new Menu().getElement(), RenderPosition.BEFOREEND);
render(siteTripControlsElement, new FiltersTemplate().getElement(), RenderPosition.BEFOREEND);

render(siteTripEventsElement, new SortingForm().getElement(), RenderPosition.BEFOREEND);
render(siteTripEventsElement, new TravelForm().getElement(), RenderPosition.BEFOREEND);
render(siteTripEventsElement, new TravelDaysList().getElement(), RenderPosition.BEFOREEND);

const siteTripDaysListElement = document.querySelector(`.trip-days`);

render(siteTripDaysListElement, new TravelDayElement(cards).getElement(), RenderPosition.BEFOREEND);

const siteTripDaysElement = document.querySelector(`.trip-days__item`);
render(siteTripDaysElement, new DailyRoute().getElement(), RenderPosition.BEFOREEND);

const siteTripInDayElement = siteTripEventsElement.querySelector(`.trip-events__list`);
for (let i = 0; i < cards.length; i++) {
  const card = new Card(cards[i]);
  const cardEdit = new SortingForm(cards[i]);

  card.getElement().querySelector(`.event__rollup-btn`).addEventListener(`click`, () => {
    siteTripInDayElement.replaceChild(cardEdit.getElement(), card.getElement());
    cardEdit.getElement().querySelector(`.event__reset-btn`).addEventListener(`click`, () => {
      siteTripInDayElement.replaceChild(card.getElement(), cardEdit.getElement());
    });

    card.getElement().querySelector(`.event__rollup-btn`).addEventListener(`click`, () => {
      siteTripInDayElement.replaceChild(cardEdit.getElement(), card.getElement());
      cardEdit.getElement().querySelector(`.event__save-btn`).addEventListener(`click`, () => {
        siteTripInDayElement.replaceChild(card.getElement(), cardEdit.getElement());
      });
    });
  });

  render(siteTripInDayElement, card.getElement(), RenderPosition.BEFOREEND);
}
