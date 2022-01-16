const express = require('express');
const njk = require('nunjucks');
const dataCard = require('./data_card');
const dataAbout = require('./data_about');
const server = express();
const PORT = 3333;

// definindo aonde estão os arquivos estáticos da pagina (css, js, img)
server.use(express.static('public'));

// setar o motor de vizualização - template engine
server.set('view engine', 'njk');
njk.configure('views', {
  express: server,
  noCache: true,
});

server.get('/', (request, response) => {
  return response.render('courses', { items: dataCard });
});

server.get('/about', (request, response) => {
  return response.render('about', { items: dataAbout });
});

server.get('/course/:id', (request, response) => {
  const id = request.params.id;

  const article = dataCard.find(function (article) {
    return article.id == id;
  });

  if (!article) {
    return response.send(`
      Article not found!!! <br />
      <a href='/'>Go to home</a>  
    `);
  }

  return response.render('course', { item: article });
});

server.use(function (request, response) {
  response.status(404).render('not-found');
});

server.listen(PORT, () => {
  console.log('Server is runnig...');
});
