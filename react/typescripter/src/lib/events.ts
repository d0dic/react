import EventEmitter from 'events';

const events = {
  NOTIFICATION: 'notification',
};

export const eventEmitter = new EventEmitter();

export default events;
