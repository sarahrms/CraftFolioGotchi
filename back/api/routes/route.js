const express = require('express');

const router = express.Router();

const usuario = require('../controles/usuario');
const cena = require('../controles/cena');

router.post('/login', usuario.login);

router.post('/usuario', usuario.createRecursiveUser);
router.get('/usuario');
router.patch('/usuario'); // protected

router.delete('/usuario'); // protected
router.post('/singnup', usuario.createSimpleUser);

router.patch('/cena'); // protected

router.get('/cena');

router.delete('/cena'); // protected

router.get('/cena/:id', cena.cenaGet);

router.get('/cena/:id/widgets');
router.post('/cena/:id/widgets/imagens'); // protected

router.delete('/cena/:id/widgets/imagens'); // protected

router.post('/cena/:id/widgets/textos'); // protected

router.delete('/cena/:id/widgets/textos'); // protected

router.post('/cena/:id/widgets/musicas'); // protected

router.delete('/cena/:id/widgets/musicas'); // protected

router.post('/cena/:id/widgets/videos'); // protected

router.post('/cena/:id/widgets/galerias'); // protected

router.delete('/cena/:id/widgets/musicas'); // protected

module.exports = router;
