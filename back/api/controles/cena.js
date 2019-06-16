const Cena = require('../modelos/cena');

exports.cenaCreate = (req, res) => {
  const cena = new Cena({
    id: req.body.id,
    usuarioId: req.body.id,
    urlIcon: req.body.urlIcon,
    alienColor: req.body.alienColor,
    floorTexture: req.body.floorTexture,
    background: req.body.background,
  });
  cena.save()
    .then(result => res.status(200).json({ sucess: true, data: result }))
    .catch(err => res.status(400).json({ sucess: false, message: err.message }));
};

exports.cenaGet = (req, res) => Cena.findById(req.params.id).exec()
  .then((cena) => {
    if (cena) return res.status(200).json({ sucess: true, data: cena });
    return res.status(400).json({ message: 'Cena nao existe' });
  })
  .catch(err => res.send(err));

exports.cenaUpdate = (req, res) => Cena.updateById(req.body.id, req.body.urlIcon, req.body.alienColor,
  req.body.floorTexture, req.body.background,
  (err, cena) => {
    if (err) {
      return res.send(err);
    }
    return res.json({ sucess: true, data: cena });
  });
