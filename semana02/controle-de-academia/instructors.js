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

  // desestruturando os dados enviado pelo formulario
  let { avatar_url, birth, name, services, gender } = req.body

  // transformando a data de nascimento em milesegundos
  birth = Date.parse(birth);

  // criando a data de criação do instrutor em milesegundos
  const created_at = Date.now();

  // criando um ID para um instrutor criado
  const id = Number(data.instructos.length + 1);

  // adicionando instrutores no arquivo data.json
  data.instructos.push({
    id,
    avatar_url,
    name,
    birth,
    gender,
    services,
    created_at,
  }); // {[...], [...]}

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
