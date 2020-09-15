import {headerNode} from './components/header.js';
import {bodyNode} from './components/body.js';

import {render, RenderPosition} from './utils.js';

const renderFlagHeader = document.querySelector(`.page-header__container`);

render(renderFlagHeader, headerNode, RenderPosition.BEFOREEND);

const renderFlagBody = document.querySelector(`.page-main`);

render(renderFlagBody, bodyNode, RenderPosition.BEFOREEND);

// import Trip from './presenters/trip-presenter.js';

// const trip = new Trip(siteTripEventsElement.querySelector(`.trip-days`));
// trip.render(cards);


