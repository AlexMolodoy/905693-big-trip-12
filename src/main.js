import Header from './components/header.js';
// import {bodyNode} from './components/body.js';

import {render, RenderPosition} from './utils.js';
// import getPoints from './services/getPoints.js';
import {createCardArray} from './components/card.js';

window.onload = async function () {
  const points = await createCardArray();
  const renderFlagHeader = document.querySelector(`.page-header__container`);
  const header = new Header(points);
  render(renderFlagHeader, header.getElement(), RenderPosition.BEFOREEND);
  header.render();
  // const renderFlagBody = document.querySelector(`.page-main`);

  // render(renderFlagBody, bodyNode, RenderPosition.BEFOREEND);
};

// headerNode.querySelector(`.trip-main__event-add-btn`).addEventListener(`click`, ()=>{

// });

// import Trip from './presenters/trip-presenter.js';

// const trip = new Trip(siteTripEventsElement.querySelector(`.trip-days`));
// trip.render(cards);

