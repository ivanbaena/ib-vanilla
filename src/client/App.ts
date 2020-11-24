class AppComponent {
  constructor(public content: any) {}
  render() {
    return `<div id='client-root'>${this.content}</div>`;
  }
}

export const App = {
  component: AppComponent,
};
