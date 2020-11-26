export const Html = (route: any) => `
    <html lang='en-us'>
      <head>
        <link rel='stylesheet' href='/main.css' />
      </head>
      <body>
        <div id='root'>
        ${route}
        </div>
        <script src='/bundle.js'></script>
      </body>
    </html>`;
