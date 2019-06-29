const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let userSchema = new Schema({
  email: { type: String, required: true },
  userName: { type: String, max: 20, required: true, unique: true, index: true },
  password: { type: String, max: 30, required: true }
})

// let UsuarioModel = mongoose.model('usuario', userSchema);

// let Usuario = {}

// Usuario.create = (email, userName, password) => {
//   UsuarioModel.create(
//     {
//       email: email,
//       userName: userName,
//       password: password
//     }
//   );
// }

module.exports = mongoose.model('usuario', userSchema);

