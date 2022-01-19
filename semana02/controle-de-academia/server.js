const express = require('express');
const nunjucks = require('nunjucks');
const routes = require('./routes');
const server = express();
const PORT = 3000;

// user arquivos estáticos (img, css)
server.use(express.static('public')); // middleware
server.use(routes); // middleware

// setar o motor de vizualização - template engine
server.set('view engine', 'njk');
nunjucks.configure('views', {
  express: server,
  autoescape: false, // desabilita a opção do njk renderizar as tags html
  noCache: true,
});

server.listen(PORT, () => {
  console.log('Server is running...');
});
