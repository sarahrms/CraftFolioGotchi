const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
  email: { type: String, required: true, unique: true },
  userName: {
    type: String, max: 20, required: true, unique: true, index: true,
  },
  password: { type: String, max: 30, required: true },
  cena: { type: Schema.Types.ObjectId, ref: 'cena' },
  mundo: { type: Schema.Types.ObjectId, ref: 'mundo' },
});

module.exports = mongoose.model('usuario', userSchema);
