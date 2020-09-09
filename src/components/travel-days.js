import Abstract from './abstract.js';

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

