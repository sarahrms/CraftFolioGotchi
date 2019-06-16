const http = require('http');
const mongoose = require('mongoose');
const app = require('./app');

mongoose.connect(process.env.MONGO_URL_CONECTION, { useNewUrlParser: true });
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const server = http.createServer(app);

const port = process.env.PORT || 5000;

server.listen(port, () => {
  console.log(`Server is up and running on port ${port}`);
});
