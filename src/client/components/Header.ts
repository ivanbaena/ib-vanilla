export class Header {
  constructor(public parent: string) {}

  init() {
    const parent = document.querySelector(`${this.parent}`);
    if (parent) {
      parent.innerHTML = this.template(null);
    }
  }

  template(content: any) {
    return `
      <header id="header">Header!${content && content}</header>
    `;
  }
}
