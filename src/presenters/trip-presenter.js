import {Card} from '../components/card.js';
import {TravelForm} from '../components/travel-form.js';
import {replace, render} from '../utils.js';

function renderCard(_card) {
  const card = new Card(_card);
  const cardEdit = new TravelForm(_card);

  card.setEditHandler(() => {
    replace(cardEdit, card);
    cardEdit.setCloseHandler(() => {
      replace(card, cardEdit);
    });
    cardEdit.setSubmitHandler((evt) => {
      evt.preventDefault();
      replace(card, cardEdit);
    });
  });
  return card.getElement();
}

export class Trip {
  constructor(container) {
    this._container = container;

    // this.elementNoFound = ''
    // this.elementLoading = ''
  }
  render(events) {
    events.forEach((event) =>{
      render(this._container, renderCard(event));
    });
  }
}
