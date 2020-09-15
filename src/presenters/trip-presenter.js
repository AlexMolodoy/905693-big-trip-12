import Card from '../components/card.js';
import {render, RenderPosition} from '../utils.js';

import {cards} from '../components/card.js';

import TravelForm from '../components/travel-form.js';
import DailyRoute from '../components/daily-route.js';
import {replace} from '../utils.js';

export function createDailyTrip(element) {

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
    events.forEach((event) =>{
      render(this._container, createDailyTrip(event), RenderPosition.BEFOREEND);
    });
  }
}

export const dailyRouteElement = new DailyRoute().getElement();

export const tripArray = new Trip(dailyRouteElement);
tripArray.render(cards);
