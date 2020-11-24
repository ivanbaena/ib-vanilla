import { App } from './App';
import { Home } from './pages/Home';

export const Routes = [
  {
    ...App,
    routes: [
      {
        ...Home,
        path: '/',
        exact: true,
      },
    ],
  },
];
