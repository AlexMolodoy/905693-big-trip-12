import {cards} from './components/card.js';
// import {tripArray} from './presenters/trip-presenter.js';

export const COUNT_OF_TRIPELEMENTS = 3;

export const createElement = function (template) {
  const element = document.createElement(`div`);
  element.innerHTML = template;
  return element.firstChild;
};

export const RenderPosition = {
  AFTERBEGIN: `afterbegin`,
  BEFOREEND: `beforeend`,
};

export const renderTemplate = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

export const render = (container, element, place) => {
  switch (place) {
    case RenderPosition.AFTERBEGIN:
      container.prepend(element);
      break;
    case RenderPosition.BEFOREEND:
      container.append(element);
      break;
  }
};

export const replace = (newComponent, oldComponent) => {
  const parentElement = oldComponent.getElement().parentElement;
  const newElement = newComponent.getElement();
  const oldElement = oldComponent.getElement();

  const isExistsElement = parentElement && newElement && oldElement;

  if (isExistsElement && parentElement.contains(oldElement)) {
    parentElement.replaceChild(newElement, oldElement);
  }
};

export const onEscKeyDown = (evt, oldElement, newElement) => {
  if (evt.key === `Escape` || evt.key === `Esc`) {
    evt.preventDefault();
    replace(oldElement, newElement);
    document.removeEventListener(`keydown`, onEscKeyDown);
  }
};

export const sortTypeEvent = (eventA, eventB) => {
  return eventA.startDate - eventB.startDate;
};

export const sortTypeTime = (timeA, timeB) => {
  return timeB.eventDuration - timeA.eventDuration;
};

export const sortTypePrice = (priceA, priceB) => {
  return priceB.price - priceA.price;
};

export function sortingEvents(sortType) {

  const sortedCards = cards;

  switch (sortType) {
    case `sort-event`:
      sortedCards.sort(sortTypeEvent);
      break;
    case `sort-time`:
      sortedCards.sort(sortTypeTime);
      break;
    case `sort-price`:
      sortedCards.sort(sortTypePrice);
      break;
  }

  return sortedCards;
}

// function filterTypePast(event) {
//   if (event.endDate < new Date()) {
//     return true;
//   }
// }

// function filterTypeFuture(event) {
//   if (event.startDate > new Date()) {
//     return true;
//   }
// }

// export const filterTypeEverithing = () => {
//   tripArray.render(cards);
// };

// export function filteringEvents(filterType) {

//   const filteredCards = cards;

//   switch (filterType) {
//     case `everything`:
//       filteredCards.filter(filterTypeEverithing);
//       break;
//     case `future`:
//       filteredCards.filter(filterTypeFuture);
//       break;
//     case `past`:
//       filteredCards.filter(filterTypePast);
//       break;
//   }

//   return filteredCards;
// }

