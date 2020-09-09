import Abstract from './abstract.js';

export function createTotalPrice() {
  return (
    `<p class="trip-info__cost">
        Total: &euro;&nbsp;<span class="trip-info__cost-value">1230</span>
      </p>`
  );
}

export default class TotalPrice extends Abstract {
  constructor(price) {
    super();
    this._price = price;
  }

  getTemplate() {
    return createTotalPrice();
  }
}

