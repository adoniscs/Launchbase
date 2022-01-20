const fs = require('fs');
const data = require('./data.json');

// create
exports.post = (req, res) => {
  // tornar o preenchimento dos campos do form
  // obrigatorios
  const keys = Object.keys(req.body); // retorna um array com as chaves do objeto

  for (let key of keys) {
    // mesma coisa que: req.body.avatar_url == '' etc...
    if (req.body[key] == '') {
      return res.send('Please, fill all fields!');
    }
  }

  // transformando a data de nascimento em milesegundos
  req.body.birth = Date.parse(req.body.birth);

  // criando a data de criação do instrutor em milesegundos
  req.body.created_at = Date.now();

  // adicionando instrutores no arquivo data.json
  data.instructos.push(req.body); // {[...], [...]}

  // funcão que irá escrever os dados passados pelo frontend
  // e escreverá no arquivo data.json
  fs.writeFile('data.json', JSON.stringify(data, null, 2), error => {
    if (error) {
      return res.send('Write file error!');
    }

    return res.redirect('/instructors');
  });

  // return res.send(req.body);
};

// update

// delete
