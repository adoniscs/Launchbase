const express = require('express');
const njk = require('nunjucks');
const dataCard = require('./dataCard');
const dataAbout = require('./dataAbout');
const data = require('./data');
const server = express();
const PORT = 8000;

server.use(express.static('public/assets/css'));
server.use(express.static('public/assets/img'));
server.use(express.static('public/assets/js'));

// INICIO - configuração do teplate engine nunjucks
server.set('view engine', 'njk');
njk.configure('views', {
  express: server,
  autoescape: false,
  noCache: true,
});
// FIM

server.get('/', (request, response) => {
  return response.render('index', { items: dataCard });
});

server.get('/about', (request, response) => {
  return response.render('about', { items: dataAbout });
});

server.get('/recipes', (request, response) => {
  return response.render('recipes', { ìtems2: dataCard });
});

server.get('/recipe/:id', (request, response) => {
  const id = request.params.id;

  return response.render('recipe', { data: data[id] });
});

server.use((request, response) => {
  response.status(404).render('not-found');
});

server.listen(PORT, () => {
  console.log('Server is running...');
});
