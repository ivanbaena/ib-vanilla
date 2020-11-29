import { LinkComponent } from '../components/Link/';
import { sheet, insertRule } from '../sheet';

const HomeLink = new LinkComponent({
  innerHTML: 'Back',
  to: '/',
  id: 'back-btn',
}).render();

// demo css overwrite same component
insertRule(sheet, '#back-btn {color:yellow; background:black; padding:1rem;}');

class NotFoundComponent {
  constructor() {}
  render() {
    return `
      <div id='not-found'>
        <h1>We're sorry!</h1>
        ${HomeLink}
      </div>
    `;
  }
}

export const NotFound = {
  component: NotFoundComponent,
};
