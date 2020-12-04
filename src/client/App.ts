import { Component } from './Component';
import { Header as HeaderComponent } from './components/Header';
import { Sidebar as SidebarComponent } from './components/Sidebar';
import { Footer as FooterComponent } from './components/Footer';
import { Container } from './components/Grid';

const Header = new HeaderComponent().render();
const Sidebar = SidebarComponent.render();
const Footer = FooterComponent.render();

export const Grid: (c: string) => string = (content: string): string =>
  Container.render(content, {
    grid: `
    'header  main main main'
    'sidebar main main main'
    'footer  main main main'
  `,
    gap: '10px 15px',
    class: 'app-grid',
  });
class AppComponent extends Component {
  constructor(public content: string) {
    super();
    console.log('IVAN_APP_INITIALIZED');
  }
  didRender(): void {
    console.log('DID_RENDER');
  }
  render() {
    const template: { [key: string]: string | any } = {
      header: `${Header}`,
      main: `${this.content}`,
      sidebar: `${Sidebar}`,
      footer: `${Footer}`,
    };
    let templateString = '';
    for (const region in template) {
      templateString += `
      <div style='grid-area:${region};'>
        ${template[region]}
      </div>`;
    }
    return Grid(templateString);
  }
}

export const App = {
  component: AppComponent,
};
