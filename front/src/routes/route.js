const express = require('express');
const path = require('path');
const router = express.Router();
const fetch = require('node-fetch')
const { URLSearchParams } = require('url');


router.get('/', (req, res, next) => {
  console.log(__dirname)
  res.render(path.join(__dirname + '/../../views/index.ejs'))
})

router.get('/cadastrar', (req, res, next) => {
  res.render('cadastro.ejs')
})

router.post('/cadastrar', (req, res, next) => {
  console.log(req.body)
  const params = new URLSearchParams(req.body);

  let body = JSON.stringify(req.body);
  console.log(body)
  fetch('http://0.0.0.0:5000/usuario',
    {
      method: "POST",
      body: params
    }
  )
    .then(resp => {
      console.log(resp.status)
    })
    .catch(err => {
      console.log("deu ruim")
      console.log(err)
    })

  // Seta tipo de requisição: Post e a URL da API
  console.log("sending data")
});

module.exports = router;