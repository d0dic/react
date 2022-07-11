import { Action, PayloadAction } from '@reduxjs/toolkit';
import {
  delay, put, takeEvery, takeLatest,
} from 'redux-saga/effects';

import events, { eventEmitter } from '../lib/events';
import { actions, Todo } from '../store/reducers/todos';
import { ActivityEvent } from '../pages/Todos';

function* logger(data: Action) {
  yield delay(1000);

  console.warn('Action: ', data);
}

function* activityMonitor(action: PayloadAction<Todo>) {
  yield delay(1000);

  const { payload } = action;

  eventEmitter.emit(events.NOTIFICATION, {
    content: payload.content, created: new Date(), type: 'todo/added',
  } as ActivityEvent);
}

function* deleteTodo(data: { payload: number }) {
  const approved: boolean = yield window.confirm('Are you sure?');

  if (!approved) return;

  yield put(actions.remove(data.payload));

  yield delay(1000);

  eventEmitter.emit(events.NOTIFICATION, {
    content: '', created: new Date(), type: 'todo/removed',
  } as ActivityEvent);
}

function* mainSaga() {
  yield takeEvery('*', logger);

  yield takeEvery(actions.add, activityMonitor);
  yield takeLatest(actions.delete, deleteTodo);
}

export default mainSaga;
