import {render, RenderPosition} from '../utils.js';

export default class AbstractPresenter {

  constructor(container) {

    this._container = container;

    this._removeOldEvents = this._removeOldEvents.bind(this);
    this.rerender = this.rerender.bind(this);

  }

  _removeOldEvents() {
    document.querySelector(`.trip-days`).remove();
  }

  rerender(renderArray, element, type, callback) {
    this._removePreSortEvents();
    render(element, this._container, RenderPosition.BEFOREEND);
    callback(renderArray, type);
  }

}
