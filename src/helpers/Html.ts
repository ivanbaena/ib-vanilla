import { Header as HeaderComponent } from '../client/components/Header';

const Header = new HeaderComponent().render();
export const Html = (route: any) => `
    <html lang='en-us'>
      <head>
      <title>Ivan!</title>
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <meta name="description" content="portfolio:javascript developer">
      <meta name="robots" content="index, follow" />
      <meta charset="UTF-8">
      <link rel="icon" href="data:,">
      </head>
      <body>
        <div id='root'>
        ${Header}
        ${route}
        </div>
        <script src='/bundle.js'></script>
      </body>
    </html>`;
