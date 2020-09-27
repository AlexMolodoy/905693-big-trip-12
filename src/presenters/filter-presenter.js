import {render, RenderPosition} from '../utils.js';
import TravelDaysList, {daysFiltEvent, renderAll} from '../components/travel-days.js';
import {bodyNode} from '../components/body.js';
export function filteringEvents(filterType) {

  let filteredCards = [];

  switch (filterType) {
    case `everything`:
      filteredCards = daysFiltEvent;
      break;
    case `future`:
      filteredCards = daysFiltEvent.filter((filteredCard) => filteredCard[0].startEvent > Date.now());
      break;
    case `past`:
      filteredCards = daysFiltEvent.filter((filteredCard) => filteredCard[0].startEvent < Date.now());
      break;
  }

  return filteredCards;
}

export default class Filter {

  constructor(container) {

    this._container = container;

    this._removePreSortEvents = this._removePreSortEvents.bind(this);
    this.rerender = this.rerender.bind(this);

  }

  _removePreSortEvents() {
    document.querySelector(`.trip-days`).remove();
  }

  rerender(filterType) {

    const filteredArray = filteringEvents(filterType);
    this._removePreSortEvents();
    const filteredArrayElement = new TravelDaysList().getElement();
    renderAll(filteredArray, filteredArrayElement);
    render(bodyNode, filteredArrayElement, RenderPosition.BEFOREEND);
  }

}
