import { ComponentInterface } from './interface';

export class Component implements ComponentInterface {
  public state: { [key: string]: any };
  public rendered: number | any;
  constructor() {
    this.state = {
      rendered: false,
    };
    this.rendered = setInterval(() => {
      if (typeof window !== 'undefined') {
        console.log('IVAN_APP_MOUNTED', this);
        this.didRender();
        clearInterval(this.rendered);
      }
    }, 10);
  }
  didRender() {}

  render() {}
}
