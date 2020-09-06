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

// export const onEscKeyDown = (evt) => {
//   if (evt.key === `Escape` || evt.key === `Esc`) {
//     evt.preventDefault();
//     replaceFormToCard();
//     document.removeEventListener(`keydown`, onEscKeyDown);
//   }
// };
