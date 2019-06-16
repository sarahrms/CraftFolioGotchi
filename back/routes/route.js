const express = require('express');
const router = express.Router();

const usuario = require('../controles/usuario')
const cena = require('../controles/cena');

router.post('/usuario', usuario.createUser);
router.get('/usuario')//protected
// router.patch('/usuario')//protected
// router.delete('/usuario')//protected

router.post('/cena', cena.cenaCreate);
// router.patch('/cena', cena.cenaUpdate);//protected
router.get('/cena')//protected
// router.delete('/cena')//protected
router.get('/cena/:id', cena.cenaGet);

module.exports = router;