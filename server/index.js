const express = require('express');
const path = require('path');
const React = require('react');
const { renderToString } = require('react-dom/server');
const App = require('../src/App').default;

const app = express();

app.use(express.static('../public'));
// app.use(express.static(path.join(__dirname, '../public')));
console.log('__dirname:', __dirname);
app.get('*', (req, res) => {

    if (req.path.includes('/styles.css') || req.path.includes('/bundle.js')) {
        return res.sendFile(path.join(__dirname, '../public', req.path));
      }
  const appString = renderToString(React.createElement(App));

  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <title>SSR with React</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/styles.css" />
        </head>
        <body>
        <div id="root">${appString}</div>
        <script src="/bundle.js"></script>
      </body>
    </html>
  `;

  res.send(html);
});

app.listen(9000, () => {
  console.log('Server is running on http://localhost:9000');
});
