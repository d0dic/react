import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import mainSaga from '../sagas/main';
import reducer from './reducers';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer,
  middleware: (getDefault) => getDefault().concat(sagaMiddleware),
});

sagaMiddleware.run(mainSaga);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;
