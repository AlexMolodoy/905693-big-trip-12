import {render, RenderPosition, replace} from '../utils.js';
import Card, {cards} from '../components/card.js';

import DailyRoute from '../components/daily-route.js';
import TravelForm from '../components/travel-form.js';

// import AbstractPresenter from './abstract-presenter.js';

export function createTrip(element) {

  const card = new Card(element);
  const cardEdit = new TravelForm(element);

  card._setEditHandler(() => {
    replace(cardEdit, card);
    cardEdit._setCloseHandler(() => {
      replace(card, cardEdit);
    });
    cardEdit._setSubmitHandler((evt) => {
      evt.preventDefault();
      replace(card, cardEdit);
    });
    cardEdit._setCloseEscHandler(card.getElement());
  });


  return card.getElement();
}


export default class Trip {
  constructor(container) {
    this._container = container;

    // this.elementNoFound = ''
    // this.elementLoading = ''
  }
  render(events) {
    events.forEach((event) => {
      render(this._container, createTrip(event), RenderPosition.BEFOREEND);
    });
  }
}

export const dailyRouteElement = new DailyRoute().getElement();

export const tripArray = new Trip(dailyRouteElement);
tripArray.render(cards);
