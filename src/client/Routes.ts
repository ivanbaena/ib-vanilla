import { App } from './App';
import { Home } from './pages/';
import { NotFound } from './pages/';

export const Routes = [
  {
    ...App,
    routes: [
      {
        ...Home,
        path: '/',
        exact: true,
      },
      {
        ...NotFound,
        path: 'not-found',
      },
    ],
  },
];
