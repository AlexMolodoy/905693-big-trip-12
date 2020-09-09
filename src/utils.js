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
