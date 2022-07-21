import React, { Suspense, useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Provider } from 'react-redux';

import { IntlProvider } from 'react-intl';
import ErrorBoundary from './ErrorBoundary';
import Navigation from './Navigation';

import routes, { NavRoute } from '../routes';
import store from '../store/config';

function useQuery() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}

function loadLocaleData(locale: string | null) {
  switch (locale) {
    case 'sr':
      return import('../lang/compiled/sr-RS.json');
    default:
      return import('../lang/compiled/en-US.json');
  }
}

function Main() {
  const query = useQuery();
  const lang: string | null = (query.get('lang'));

  const [messages, setMessages] = useState({});

  const loadMessages = async () => {
    const messagesData = await loadLocaleData(lang);

    setMessages(messagesData);
  };

  useEffect(() => {
    loadMessages();
  }, []);

  return (
    <ErrorBoundary>
      <IntlProvider locale={lang || 'en'} defaultLocale="en" messages={messages}>
        <Provider store={store}>
          <div>
            <Navigation />
            <hr />
            <div style={{ padding: 30 }}>
              <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                  {routes.map(({ path, Page }: NavRoute) => <Route key={path} path={path} element={<Page />} />)}
                </Routes>
              </Suspense>
            </div>
          </div>
        </Provider>
      </IntlProvider>
    </ErrorBoundary>
  );
}

export default Main;
