import { configureStore, combineReducers, PreloadedState } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import mainSaga from '../sagas/main';
import reducers from './reducers';

const rootReducer = combineReducers(reducers);

const sagaMiddleware = createSagaMiddleware();

export const setupStore = (preloadedState?: PreloadedState<RootState>) => configureStore({
  reducer: rootReducer,
  middleware: (getDefault) => getDefault().concat(sagaMiddleware),
  preloadedState,
});

const store = setupStore();

sagaMiddleware.run(mainSaga);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']

export default store;
