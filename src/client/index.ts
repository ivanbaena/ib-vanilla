import { App } from './App';
import { renderRoutes, onUrlChange, constructSheet } from '../helpers';
import { Routes } from './Routes';
import { sheet } from './sheet';

// construct style sheet
constructSheet(sheet);

// init client app
const init = () => {
  const root = document.getElementById('root');
  const app = new App.component(renderRoutes(Routes, null));
  if (root) {
    root.innerHTML = app.render();
  } else {
    throw new Error('An Error has occurred');
  }
};
// "Hydrate"
onUrlChange(init);
