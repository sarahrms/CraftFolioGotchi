const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const route = require('./api/routes/route');

const app = express();

app.use(morgan('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('access-Control-Allow-Headers',
    'Origin, X-Request-With, Content-Type, Accept, Authorization');
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods',
      'POST, PATCH, DELETE, GET');
    return res.status(200).json({});
  }
  next();
});

app.use('/', route);

app.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});

app.use((error, req, res) => res.status(error.status || 500)
  .json({
    error: {
      message: error.message,
    },
  }));

module.exports = app;
