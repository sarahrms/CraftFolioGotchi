<<<<<<< HEAD
const http = require('http');
const mongoose = require('mongoose');
const app = require('./app');

mongoose.connect(process.env.MONGO_URL_CONECTION, { useNewUrlParser: true });
=======
const http = require('http')
const uri = 'mongodb://127.0.0.1:27018/mydb?authSource=admin'
const mongoose = require('mongoose');

const app = require('./app')

const mongoDB = process.env.MONGODB_URI || uri;
mongoose.connect(mongoDB, { useNewUrlParser: true });
>>>>>>> 6d9e003d2610f315ea41a4d27247def69ba4e1a9
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const server = http.createServer(app);

const port = process.env.PORT || 5000;

server.listen(port, () => {
<<<<<<< HEAD
  console.log(`Server is up and running on port ${port}`);
});
=======
  console.log('Server is up and running on port ' + port);
});
>>>>>>> 6d9e003d2610f315ea41a4d27247def69ba4e1a9
