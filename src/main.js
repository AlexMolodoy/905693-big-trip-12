import Header from './components/header.js';
import Body from './components/body.js';

import {render, RenderPosition} from './utils.js';
// import getPoints from './services/getPoints.js';
import {createCardArray} from './components/card.js';

window.onload = async function () {

  //  блок работы с данными
  //  получение данных
  const points = await createCardArray();

  //  поиск дней по уникальным значениям дат
  function setDates(events) {
    const array = events.map((event) => new Date(event.startEvent).getDate());
    const dates = [...new Set(array)];

    return dates;
  }

  //  фильтрация событий в соответствии с днями на тот случай если в ответе прийдут события вразнобой
  function daysFiltEvent(events) {
    const array = setDates(events);
    const pointsFilteredArray = array.map((date) => events.filter((card) => new Date(card.startEvent).getDate() === date));
    return pointsFilteredArray;
  }

  // console.log(points);
  // console.log(daysFiltEvent(points));

  const renderFlagHeader = document.querySelector(`.page-header__container`);
  const header = new Header(points);
  render(renderFlagHeader, header.getElement(), RenderPosition.BEFOREEND);
  header.render();


  const renderFlagBody = document.querySelector(`.page-main`);
  const body = new Body(daysFiltEvent(points));
  render(renderFlagBody, body.getElement(), RenderPosition.BEFOREEND);
  body.render();

  // render(renderFlagBody, bodyNode, RenderPosition.BEFOREEND);
};


// headerNode.querySelector(`.trip-main__event-add-btn`).addEventListener(`click`, ()=>{

// });

// import Trip from './presenters/trip-presenter.js';

// const trip = new Trip(siteTripEventsElement.querySelector(`.trip-days`));
// trip.render(cards);

