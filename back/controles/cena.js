const Cena = require('../modelos/cena');

exports.cenaCreate = (req, res, next) => {
  let cena = new Cena(
    {
      id: req.body.id,
      usuarioId: req.body.id,
      urlIcon: req.body.urlIcon,
      alienColor: req.body.alienColor,
      floorTexture: req.body.floorTexture,
      background: req.body.background
    }
  );

  cena.save()
    .then(result => {
      res.status(200).json({ sucess: true, data: result });
    })
    .catch(err => {
      console.log(err);
      res.status(400).json({ sucess: false });
    });
};

exports.cenaGet = (req, res, next) => {
  Cena.findById(req.params.id)
    .exec()
    .then((cena) => {
      if (cena)
        res.status(200).json({ sucess: true, data: cena });
      else
        res.status(400).json({ message: "Cena nao existe" })
    })
    .catch(err => {
      if (err) {
        console.log(err);
        return res.send(err)
      }
    })

}

exports.cenaUpdate = (req, res, next) => {
  Cena.updateById(
    req.body.id,
    req.body.urlIcon,
    req.body.alienColor,
    req.body.floorTexture,
    req.body.background,
    (err, cena) => {
      if (err) {
        console.log(err);
        return res.send(err)
      }
      res.json({ sucess: true, data: cena });
    });
}