import { pushUrl, observe, isWindow } from '../../utils/';

const params = {
  attributes: true,
  childList: true,
  subtree: true,
  characterData: true,
};
class LinkComponent {
  private rendered: Boolean = false;

  constructor(
    public innerText: string,
    private anchor: HTMLAnchorElement | null
  ) {
    this.didRender();

    if (typeof window !== 'undefined') {
      this.anchor = document.createElement('a');
    }
    this.addEvents = this.addEvents.bind(this);
  }

  onClick(e: Event) {
    e.preventDefault();
    const url = 'hello-world';
    pushUrl(url);
  }

  didRender() {
    const observer = () => observe('#link', params, this.addEvents);
    isWindow(observer);
  }
  addEvents(target: any) {
    if (target) {
      console.log('why', target);

      target.onclick = (e: Event) => this.onClick(e);
    }
  }

  createProps() {
    if (this.anchor) {
      this.anchor.setAttribute('to', '/notfound');
      this.anchor.innerText = this.innerText;
      this.anchor.href = '#';
      this.anchor.id = 'link';
    }
  }

  render() {
    if (typeof window !== 'undefined' && this.anchor) {
      this.createProps();
      return this.anchor.outerHTML;
    } else {
      return '<h1>Skeleton</h1>';
    }
  }
}

export const Link = new LinkComponent('Link', null).render();
