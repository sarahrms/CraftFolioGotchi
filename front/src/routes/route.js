const express = require('express');

const router = express.Router();
const fetch = require('node-fetch');
const { URLSearchParams } = require('url');

router.get('/', (req, res) => {
  res.render('index.ejs');
});

router.get('/cadastrar', (req, res) => {
  res.render('cadastro.ejs');
});

router.post('/cadastrar', (req, res) => {
  const params = new URLSearchParams(req.body);
  fetch('http://0.0.0.0:5000/singnup',
    {
      method: 'POST',
      body: params,
    })
    .then((resp) => {
      res.redirect('/');
    })
    .catch((err) => {
      res.redirect('/');
    });
});

router.get('/login', (req, res) => {
  res.render('index.ejs');
});
router.post('/login', (req, res) => {
  console.log(req.body)
  const params = new URLSearchParams(req.body);
  fetch('http://0.0.0.0:5000/login',
    {
      method: 'POST',
      body: params,
    })
    .then((resp) => {
      console.log(resp.status)
      console.log(resp)
      res.redirect('/');
    })
    .catch((err) => {
      console.log(err)
      res.redirect('/');
    });
});

router.get('/logout');

router.get('/mundo/:id');

router.post('/salvarmundo');
router.post('/salvarcena');

router.get('/delete');
router.post('/delete/:id');

module.exports = router;
//