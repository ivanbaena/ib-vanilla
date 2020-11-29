import { LinkComponent } from '../Link';
import { navData } from './data';
import { styles } from './Header.inline.css';
import { inlineStyle } from '../../sheet';

const style = inlineStyle(styles);
export class Header {
  constructor() {
    this.renderNavItems = this.renderNavItems.bind(this);
  }

  createEvents(): void {}
  createProps(): void {}
  didRender() {}

  renderNavItems() {
    return navData
      .map((item) => {
        const linkProps = {
          innerHTML: item.name,
          to: item.to,
          id: `${item.name}-nav`,
        };
        const link = new LinkComponent(linkProps).render();
        return link;
      })
      .join('');
  }

  render() {
    return `${style}<header class="header">${this.renderNavItems()}</header>`;
  }
}
