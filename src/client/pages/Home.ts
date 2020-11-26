import { Bio } from '../components/Bio';
import { Link } from '../components/Link';

class HomeComponent {
  constructor() {}
  render() {
    return `
      <div id='home-page'>
        <h1>Home Page</h1>
        ${Bio}
        ${Link}
      </div>
    `;
  }
}

export const Home = {
  component: HomeComponent,
};
