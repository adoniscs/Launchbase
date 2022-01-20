const express = require('express');
const njk = require('nunjucks');
const routes = require('./routes');
const server = express();
const PORT = 5000;

server.use(express.urlencoded({ extended: true }));
server.use(express.static('public'));
server.use(routes);

server.set('view engine', 'njk');
njk.configure('views', {
  express: server,
  autoescape: false,
  noCache: true,
});

server.listen(PORT, () => {
  return console.log('Server up on port: ', PORT);
});
