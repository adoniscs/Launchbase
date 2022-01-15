const express = require('express');
const res = require('express/lib/response');
const njk = require('nunjucks');
const server = express();
const PORT = 3333;

// definindo aonde estão os arquivos estáticos da pagina (css, js, img)
server.use(express.static('public'));

// setar o motor de vizualização - template engine
server.set('view engine', 'njk');
njk.configure('views', {
  express: server,
});

server.get('/', (request, response) => {
  return response.render('courses');
});

server.get('/about', (request, response) => {
  return response.render('about');
});

server.use(function (request, response) {
  response.status(404).render('not-found');
});

server.listen(PORT, () => {
  console.log('Server is runnig...');
});
