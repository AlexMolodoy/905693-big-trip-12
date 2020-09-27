import {render, RenderPosition, replace} from '../utils.js';
import Card from '../components/card.js';
import TravelForm from '../components/travel-form.js';

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

