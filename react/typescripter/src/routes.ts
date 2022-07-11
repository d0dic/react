import { FC } from 'react';

import About from './pages/About';
import Home from './pages/Home';
import Todos from './pages/Todos';

export type NavRoute = {
  path: string,
  Page: FC
}

const routes: NavRoute[] = [
  {
    path: '/',
    Page: Home,
  },
  {
    path: '/todos',
    Page: Todos,
  },
  {
    path: '/about',
    Page: About,
  },
];

export default routes;
