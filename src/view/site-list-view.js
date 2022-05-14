import AbstractView from './abstract-view';

const createEventsListTemplate = () => (
  `<ul class="trip-events__list">
   </ul>`
);

export default class EventsListTemplate extends AbstractView {
  get template() {
    return createEventsListTemplate();
  }
}
