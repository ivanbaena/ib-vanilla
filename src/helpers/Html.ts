import { Header as HeaderComponent } from '../client/components/Header';

const Header = new HeaderComponent().render();
export const Html = (route: any) => `
    <html lang='en-us'>
      <head>
        <link rel='stylesheet' href='/main.css' />
      </head>
      <body>
        <div id='root'>
        ${Header}
        ${route}
        </div>
        <script src='/bundle.js'></script>
      </body>
    </html>`;
