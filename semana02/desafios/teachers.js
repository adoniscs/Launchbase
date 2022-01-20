const fs = require('fs');
const data = require('./data.json');

exports.post = (req, res) => {
  const keys = Object.keys(req.body);

  for (let key of keys) {
    if (req.body[key] == '') {
      return res.send(`Please, fill in the ${key} field!`);
    }
  }

  let {
    avatar_url,
    name,
    birth,
    level_of_schooling,
    class_type,
    occupation_area,
  } = req.body;

  birth = Date.parse(birth);
  const id = Number(data.teachers.length + 1);
  const create_at = Date.now();

  data.teachers.push({
    id,
    avatar_url,
    name,
    birth,
    level_of_schooling,
    class_type,
    occupation_area,
    create_at,
  });

  fs.writeFile('data.json', JSON.stringify(data, null, 2), error => {
    if (error) {
      return res.send('File writing error');
    }
    return res.redirect('/teachers');
  });
};
