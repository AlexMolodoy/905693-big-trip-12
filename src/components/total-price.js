import Abstract from './abstract.js';

export function createTotalPrice(array) {
  const totalPrice = function () {
    let price = 0;
    let offerPrices = 0;
    array.forEach((event) => {
      event.offer.forEach((element) => {
        offerPrices += element.price;
      });
      price += event.price + offerPrices;
    });
    return price;
  };

  return (
    `<p class="trip-info__cost">
        Total: &euro;&nbsp;<span class="trip-info__cost-value">${totalPrice()}</span>
      </p>`
  );
}


export default class TotalPrice extends Abstract {
  constructor(events) {
    super();
    this._events = events;
  }

  getTemplate() {
    return createTotalPrice(this._events);
  }
}
