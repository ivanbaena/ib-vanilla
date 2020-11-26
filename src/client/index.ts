import { App } from './App';
import { renderRoutes, onUrlChange } from '../helpers';
import { Routes } from './Routes';

// init client app
const init = () => {
  const root = document.getElementById('root');
  const app = new App.component(renderRoutes(Routes, null));
  if (root) {
    root.innerHTML = app.render();
  }
};
onUrlChange(init);
