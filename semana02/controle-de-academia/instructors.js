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

  return res.send(keys);
};

// update

// delete
