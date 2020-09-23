import Abstract from './abstract.js';

export function createTotalPrice() {

  // const allCost = events.reduce((accumulator, currentValue) => {
  //   let costStepOffeer = 0;
  //   if (currentValue.offer === null) {
  //     costStepOffeer = 0;
  //   } else {
  //     for (let el of currentValue.offer) {
  //       costStepOffeer += el[1];
  //     }
  //   }
  //   return accumulator + currentValue.cost + costStepOffeer;
  // }, 0);

  return (
    `<p class="trip-info__cost">
        Total: &euro;&nbsp;<span class="trip-info__cost-value"></span>
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
