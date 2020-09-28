const MONTHS_MAP = [
  `JAN`,
  `FEB`,
  `MAR`,
  `APR`,
  `MAY`,
  `JUN`,
  `JUL`,
  `AUG`,
  `SEP`,
  `OCT`,
  `NOV`,
  `DEC`,
];

const DEFAULT_CARD = {
  type: `flight`,
  city: `some city`,
  photo: ``,
  description: `some words`,
  price: `some money`,
  startEvent: `any date`,
  endEvent: `any date`,
  eventDuration: `duration`,
  offer: ``,
};

const SortType = {
  EVENT: `sort-event`,
  TIME: `sort-time`,
  PRICE: `sort-price`
};

const FilterType = {
  EVERYTHING: `everything`,
  FUTURE: `future`,
  PAST: `past`,
};

export {
  MONTHS_MAP,
  DEFAULT_CARD,
  SortType,
  FilterType,
};
