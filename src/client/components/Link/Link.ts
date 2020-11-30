import { pushUrl, Observe, isWindow } from '../../../utils';
import { Skeleton } from '../Skeleton';
import { sheet, insertRule } from '../../sheet';
import { styles } from './Link.css';
import { LinkSkeleton } from './Skeleton';

interface LinkProps {
  innerHTML?: string;
  to: string;
  id?: string;
  class?: string | undefined;
}
/*
 * LinkComponent responsible for handling routing within app
 */

// add css
insertRule(sheet, styles);
export class LinkComponent {
  private anchor: HTMLAnchorElement | any;

  constructor(public linkProps: LinkProps) {
    this.didRender();
    this.createAnchor();

    this.createEvents = this.createEvents.bind(this);
    this.createAnchor = this.createAnchor.bind(this);
  }

  onClick(e: Event, url: string): void {
    e.preventDefault();
    pushUrl(url);
  }

  createAnchor(): void {
    if (typeof window !== 'undefined') {
      this.anchor = document.createElement('a');
    }
  }

  didRender(): void {
    const params = {
      attributes: true,
      childList: true,
      subtree: true,
      characterData: true,
    };
    const observer = () =>
      Observe.domObserver(`#${this.linkProps.id}`, params, this.createEvents);
    isWindow(observer);
  }

  createEvents(target: HTMLElement | HTMLAnchorElement): void {
    if (target) {
      target.onclick = (e: Event) => this.onClick(e, this.linkProps.to);
    }
  }

  createProps(linkProps: LinkProps): void {
    if (this.anchor) {
      this.anchor.setAttribute('to', linkProps.to);
      this.anchor.innerHTML = linkProps.innerHTML;
      this.anchor.href = '#';
      this.anchor.id = linkProps.id;
      this.anchor.classList = `link-route ${
        linkProps.class && linkProps.class
      }`;
    }
  }

  render(): string {
    if (typeof window !== 'undefined' && this.anchor) {
      this.createProps(this.linkProps);
      return this.anchor.outerHTML;
    } else {
      return Skeleton.render(LinkSkeleton);
    }
  }
}
