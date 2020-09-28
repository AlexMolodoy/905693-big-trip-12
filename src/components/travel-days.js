import Abstract from './abstract.js';
import TravelDayElement from './day-element.js';
import {render, RenderPosition} from '../utils.js';

export function createTravelDaysList() {
  return (
    `<ul class="trip-days">
      </ul>`
  );
}

export default class TravelDaysList extends Abstract {
  constructor(eventsList) {
    super();
    this._eventsList = eventsList;
  }

  getTemplate() {
    return createTravelDaysList();
  }

  render() {
    this._eventsList.forEach((event) =>{
      const day = new TravelDayElement(this._eventsList.indexOf(event), event);
      day.render();
      render(this.getElement(), day.getElement(), RenderPosition.BEFOREEND);
    });

  }
}
