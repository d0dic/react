import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import Navigation from './Navigation';
import routes, { NavRoute } from '../routes';
import store from '../store/config';

// TODO: Add ErrorBoundary
function Main() {
  return (
    <Provider store={store}>
      <div>
        <Navigation />
        <hr />
        <div style={{ padding: 30 }}>
          <Routes>
            {routes.map(({ path, Page }: NavRoute) => <Route key={path} path={path} element={<Page />} />)}
          </Routes>
        </div>
      </div>
    </Provider>
  );
}

export default Main;
