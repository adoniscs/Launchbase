const fs = require('fs');
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

  // funcão que irá escrever os dados passados pelo frontend
  // e escreverá no arquivo data.json
  fs.writeFile('data.json', JSON.stringify(req.body), function (error) {
    if (error) {
      return res.send('Write file error!');
    }

    return res.redirect('/instructors');
  });

  // return res.send(req.body);
};

// update

// delete
