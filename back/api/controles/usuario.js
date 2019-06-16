const mongoose = require('mongoose');
const bcrtpt = require('bcrypt');
const jwt = require('jsonwebtoken');

const Usuario = require('../modelos/usuario');
const Cena = require('./cena');


exports.createRecursiveUser = (req, res) => {
  const user = new Usuario(
    {
      _id: new mongoose.Types.ObjectId(),
      email: req.body.email,
      userName: req.body.usuario,
      password: bcrtpt.hash(req.body.senha, 10),
    },
  );
  user.save()
    .then((result) => {
      Cena.createDefaultWithId(user._id)
        .exec()
        .then(
          // create mundo
        );
    })
    .catch(err => res.status(400).json({ sucess: false, mensage: err.mensage }));
};

exports.createSimpleUser = (req, res, next) => {
  bcrtpt.hash(req.body.senha, 10, (err, hash) => {
    if (err) {
      return res.status(500).json({
        error: err,
      });
    }
    const user = new Usuario(
      {
        email: req.body.email,
        userName: req.body.usuario,
        password: hash,
      },
    );
    user.save()
      .then((result) => {
        res.status(200).json({ result });
      })
      .catch(err => res.status(201).json({ sucess: false, mensage: err.mensage }));
  });
};

exports.updateUser = (req, res, next) => {

};

exports.getUserbyId = (id) => {
  Usuario.findById(id)
    .exec()
    .then((doc) => {
      if (doc) {
        res.status(200).json(doc);
      } else {
        res.status(404).json({ message: 'Not found' });
      }
    })
    .catch(err => res.status(500).json(err));
};

exports.login = (req, res, next) => {
  Usuario.find({ userName: req.body.usuario })
    .exec()
    .then((users) => {
      if (users.length < 1)
        return res.status(401).json({ message: 'Auth failed' });
      else
        bcrtpt.compare(req.body.senha, users[0].password,
          (err, result) => {
            if (err) {
              return res.status(401).json({ message: 'Auth failed' });
            }
            if (result) {
              const token = jwt.sign({
                userName: users[0].userName,
                userId: users[0]._id
              },
                process.env.JWT_KEY,
                {
                  expiresIn: "1h"
                });
              console.log("passou aki")
              return res.status(200).json({ message: 'Auth successful', token: token })
            }
            return res.status(401).json({ message: 'Auth failed' });
          })
    });
}
