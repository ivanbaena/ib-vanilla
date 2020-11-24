import { Header } from './components/Header';
import { renderRoutes } from '../helpers';
import { Routes } from './Routes';
// init client app
export const App = document.getElementById('root');

const header = new Header('#root');
header.init();
if (App) {
  App.innerHTML = renderRoutes(Routes);
}
