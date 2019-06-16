const Usuario = require('../modelos/usuario');

exports.createUser = (req, res, next) => {
  console.log("passou aqui")
  console.log(req.body)
  let user = new Usuario(
    {
      email: req.body.email,
      userName: req.body.usuario,
      password: req.body.senha
    }
  );
  user.save()
    .then(result => {
      res.status(200).json({ sucess: true, data: result });
    })
    .catch(err => {
      console.log(err);
      res.status(400).json({ sucess: false });
    });
};

