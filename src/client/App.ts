class AppComponent {
  constructor(public content: any) {}
  render() {
    return `${this.content}`;
  }
}

export const App = {
  component: AppComponent,
};
