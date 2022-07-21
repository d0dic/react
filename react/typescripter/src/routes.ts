import React, { FC } from 'react';

const About = React.lazy(() => import('./pages/About'));
const Todos = React.lazy(() => import('./pages/Todos'));
const Home = React.lazy(() => import('./pages/Home'));

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
