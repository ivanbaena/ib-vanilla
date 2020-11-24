import { Bio } from '../components/Bio';

class HomeComponent {
  constructor() {}
  render() {
    return `
      <div id='home-page'>
        <h1>Home Page</h1>
        ${Bio}
      </div>
    `;
  }
}

export const Home = {
  component: HomeComponent,
};
