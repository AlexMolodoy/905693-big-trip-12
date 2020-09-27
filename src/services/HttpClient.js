import axios from "axios";
import {DOMAIN} from "../config";

export default class HttpClient {
  constructor(options) {
    const {token} = options;
    this._client = axios.create({
      baseURL: DOMAIN,
    });
    this._client.interceptors.request.use((config) => {
      if (token) {
        config.headers.common[`Authorization`] = token;
      }
      // console.log(config);
      return config;
    }, (error) => {
      // обрабатываем ошибку
      return Promise.rejest(error);

    });
  }

  _validatePath(value) {
    return value && typeof value === `string`;
  }

  _validateParams(value) {
    // console.log(value);

    return value && Object.prototype.toString.call(value) === `[object Object]`;
  }
  get(path, params = {}) {
    // console.log(path);
    if (!this._validatePath(path)) {
      // console.log(path);
      throw new Error(`invalid path type`);
    }
    if (!this._validateParams(params)) {
      // console.log(params);
      throw new Error(`invalid params type`);
    }
    return this._client({
      url: path,
      method: `GET`,
      params,
    }).catch((error) => {
      if (error.response) {
        // Запрос выполнен и сервер отправил вам статус код
        // код выпадает из диапазона 2хх (ошибка)

        console.log(`error.response`);
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        // Запрос был сделан, но ответ не получен
        // `error.request` - экземпляр XMLHttpRequest в браузере,
        // http.ClientRequest экземпляр в node.js
        console.log(error.request);
      } else {
        // Что-то пошло не так, вернулась ошибка
        console.log(`Error`, error.message);
      }
      console.log(error.config);
    });
  }
  post(path, params = {}) {
    if (!this._validatePath(path)) {
      throw new Error(`invalid path type`);
    }
    if (!this._validateParams(params)) {
      throw new Error(`invalid params type`);
    }
    return this._client({
      url: path,
      method: `POST`,
      params,
    }).catch((error) => {
      if (error.response) {
        // Запрос выполнен и сервер отправил вам статус код
        // код выпадает из диапазона 2хх (ошибка)

        console.log(`error.response`);
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        // Запрос был сделан, но ответ не получен
        // `error.request` - экземпляр XMLHttpRequest в браузере,
        // http.ClientRequest экземпляр в node.js
        console.log(error.request);
      } else {
        // Что-то пошло не так, вернулась ошибка
        console.log(`Error`, error.message);
      }
      console.log(error.config);
    });
  }

  delete(path, params = {}) {
    if (!this._validatePath(path)) {
      throw new Error(`invalid path type`);
    }
    if (!this._validateParams(params)) {
      throw new Error(`invalid params type`);
    }
    return this._client({
      url: path,
      method: `DELETE`,
      params,
    }).catch((error) => {
      if (error.response) {
        // Запрос выполнен и сервер отправил вам статус код
        // код выпадает из диапазона 2хх (ошибка)

        console.log(`error.response`)
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        // Запрос был сделан, но ответ не получен
        // `error.request` - экземпляр XMLHttpRequest в браузере,
        // http.ClientRequest экземпляр в node.js
        console.log(error.request);
      } else {
        // Что-то пошло не так, вернулась ошибка
        console.log(`Error`, error.message);
      }
      console.log(error.config);
    });
  }
  put(path, params = {}) {
    if (!this._validatePath(path)) {
      throw new Error(`invalid path type`);
    }
    if (!this._validateParams(params)) {
      throw new Error(`invalid params type`);
    }
    return this._client({
      url: path,
      method: `PUT`,
      params,
    }).catch((error) => {
      if (error.response) {
        // Запрос выполнен и сервер отправил вам статус код
        // код выпадает из диапазона 2хх (ошибка)

        console.log(`error.response`);
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        // Запрос был сделан, но ответ не получен
        // `error.request` - экземпляр XMLHttpRequest в браузере,
        // http.ClientRequest экземпляр в node.js
        console.log(error.request);
      } else {
        // Что-то пошло не так, вернулась ошибка
        console.log(`Error`, error.message);
      }
      console.log(error.config);
    });
  }
}
/*
  getData() {
    return Promise.all([
      this.getPoints(),
      this.getOffers(),
      this.getDestinations(),
    ])
      .then((response) => {
        const [points, offers, destinations] = response;
        return {
          points,
          offers,
          destinations,
        };
      });
  }
  getPoints() {
    return this._load({url: `points`})
      .then((response) => response.json())
      .then((points) => points.map(PointsModel.adaptToClient))
      // .then((result) => console.log(result));
  }


  getPoints() {
    axios.get('/points').then(res => {
      console.log(res); // Результат ответа от сервера
    });
  }


  axios.get('/offers').then(res => {
    console.log(res); // Результат ответа от сервера
  });

  axios.get('/destination').then(res => {
    console.log(res); // Результат ответа от сервера
  });

  axios.post('points', {}).then(res => {
    console.log(res); // Результат ответа от сервера
  });
  // Put запрос
  axios.put('points', {}).then(res => {
    console.log(res); // Результат ответа от сервера
  });
  // Delete запрос
  axios.delete('points', {}).then(res => {
    console.log(res); // Результат ответа от сервера
  });


  getOffers() {
    return this._load({url: `offers`})
      .then(Api.toJSON)
      .then((offers) => offers.slice());
  }

  getDestinations() {
    return this._load({url: `destinations`})
      .then(Api.toJSON)
      .then((destinations) => destinations.slice());
  }

  updatePoint(point) {
    return this._load({
      url: `points/${point.id}`,
      method: Method.PUT,
      body: JSON.stringify(PointsModel.adaptToServer(point)),
      headers: new Headers({"Content-Type": `application/json`})
    })
      .then(Api.toJSON)
      .then(PointsModel.adaptToClient);
  }

  addPoint(point) {
    return this._load({
      url: `points`,
      method: Method.POST,
      body: JSON.stringify(PointsModel.adaptToServer(point)),
      headers: new Headers({"Content-Type": `application/json`})
    })
      .then(Api.toJSON)
      .then(PointsModel.adaptToClient);
  }

  deletePoint(point) {
    return this._load({
      url: `points/${point.id}`,
      method: Method.DELETE
    });
  }


  _load({
    url,
    method = Method.GET,
    body = null,
    headers = new Headers()
  }) {
    headers.append(`Authorization`, this._authorization);

    return fetch(
        `${this._endPoint}/${url}`,
        {method, body, headers}
    )
      .then(Api.checkStatus)
      .catch(Api.catchError);
  }

  static checkStatus(response) {
    if (
      response.status < SuccessHTTPStatusRange.MIN &&
      response.status > SuccessHTTPStatusRange.MAX
    ) {
      throw new Error(`${response.status}: ${response.statusText}`);
    }

    return response;
  }

  static toJSON(response) {
    return response.json();
  }

  static catchError(err) {
    throw err;
  }
}
*/
