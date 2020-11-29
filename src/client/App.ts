import { Header as HeaderComponent } from './components/Header';

const Header = new HeaderComponent().render();
class AppComponent {
  constructor(public content: any) {}
  render() {
    return `
      <div class="grid container appspace">
        ${Header}
        ${this.content}
      </div>`;
  }
}

export const App = {
  component: AppComponent,
};
