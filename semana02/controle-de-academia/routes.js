const express = require('express');
const routes = express.Router();

routes.get('/', (req, res) => {
  return res.redirect('/instructors');
});

routes.get('/instructors', (req, res) => {
  return res.render('instructors/index');
});

routes.get('/instructors/create', (req, res) => {
  return res.render('instructors/create');
});

routes.post('/instructors', (req, res) => {
  // tornar o preenchimento dos campos do form
  // obrigatorios
  const keys = Object.keys(req.body); // retorna um array com as chaves do objeto

  for (let key of keys) {
    // mesma coisa que: req.body.avatar_url == '' etc...
    if (req.body[key] == '') {
      return res.send('Please, fill all fields!');
    }
  }

  return res.send(keys);
});

routes.get('/members', (req, res) => {
  return res.send('memberss');
});

module.exports = routes;
