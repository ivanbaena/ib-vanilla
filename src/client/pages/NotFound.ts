class NotFoundComponent {
  constructor() {}
  render() {
    return `
      <div id='not-found'>
        <h1>We're sorry!</h1>
      </div>
    `;
  }
}

export const NotFound = {
  component: NotFoundComponent,
};
