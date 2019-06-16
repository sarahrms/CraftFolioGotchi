const express = require('express');
const bodyParser = require('body-parser')
const morgan = require('morgan') //log pack
const routes = require('./src/routes/route')

const app = express();
app.use(morgan('dev'))
app.set('view engine', 'ejs')
app.use('/static', express.static('static'))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', routes);

app.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
})

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  })
});
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log('Server is up and running on port ' + port);
});