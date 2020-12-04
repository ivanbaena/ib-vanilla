import { Container, GridItem } from '../components/Grid';

const renderGrid = () => {
  return [{ region: 'main', name: 'main-1', gridColumnStart: '1' }]
    .map((item) => {
      return GridItem.render(item.name, {
        gridArea: `${item.region} / ${item.gridColumnStart}`,
      });
    })
    .join('');
};
class HomeComponent {
  constructor() {}
  render() {
    return `
      <div id='home-page'>
        ${Container.render(renderGrid(), {
          grid: `
          'main main main'
          `,
          gap: '10px 15px',
          class: 'home-grid',
        })}
      </div>
    `;
  }
}

export const Home = {
  component: HomeComponent,
};
