const http = require('http')
const uri = 'mongodb://127.0.0.1:27018/mydb?authSource=admin'
const mongoose = require('mongoose');

const app = require('./app')

const mongoDB = process.env.MONGODB_URI || uri;
mongoose.connect(mongoDB, { useNewUrlParser: true });
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const server = http.createServer(app);

const port = process.env.PORT || 5000;

server.listen(port, () => {
  console.log('Server is up and running on port ' + port);
});