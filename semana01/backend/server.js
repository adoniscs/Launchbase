const express = require('express');
const nunjucks = require('nunjucks');
const videos = require('./data');
const server = express();
const PORT = 3000;

// user arquivos estáticos (img, css)
server.use(express.static('public'));

// setar o motor de vizualização - template engine
server.set('view engine', 'njk');
nunjucks.configure('views', {
  express: server,
  autoescape: false, // desabilita a opção do njk renderizar as tags html
  noCache: true,
});

server.get('/', (request, response) => {
  const about = {
    avatar: 'https://avatars.githubusercontent.com/u/42327366?v=4',
    name: 'Adonis Cipriano Silveira',
    role: 'Estudante de TI',
    description:
      'Sou um desenvolvedor front-end, focado nas seguintes técnologias:',
    techs: [
      { name: 'Javascript' },
      { name: 'HTML5' },
      { name: 'CSS3' },
      { name: 'Vue.js' },
    ],
    links: [
      { name: 'Github', url: 'https://github.com/adoniscs' },
      { name: 'Linkedin', url: 'https://www.linkedin.com/in/adoniscs/' },
    ],
  };

  return response.render('about', { about });
});

server.get('/portfolio', (request, response) => {
  return response.render('portfolio', { items: videos }); // enviando os dados do back p/ o front
});

server.get('/video', (request, response) => {
  const id = request.query.id;

  const video = videos.find(function (video) {
    if (video.id == id) {
      return true;
    }
  });

  if (!video) {
    return response.send('Video not found!!!');
  }

  return response.render('video', { item: video });
});

server.listen(PORT, () => {
  console.log('Server is running...');
});
