import { Container, GridItem } from '../components/Grid';

const renderGrid = () => {
  return [
    { region: 'main', name: 'main-1', gridColumnStart: '2' },
    { region: 'main', name: 'main-2', gridColumnStart: '2' },
    { region: 'main', name: 'main-3', gridColumnStart: '2' },
    { region: 'header', name: 'header-1', gridColumnStart: '1' },
    { region: 'header', name: 'header-2', gridColumnStart: '1' },
    { region: 'header', name: 'header-3', gridColumnStart: '1' },
    { region: 'footer', name: 'footer-1', gridColumnStart: '3' },
    { region: 'footer', name: 'footer-2', gridColumnStart: '3' },
    { region: 'footer', name: 'footer-3', gridColumnStart: '3' },
  ]
    .map((item) => {
      return GridItem.render(item.name, {
        gridArea: `${item.region} ${item.gridColumnStart}`,
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
          'header header header'
          'main   main   main  '
          'footer footer footer'
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
