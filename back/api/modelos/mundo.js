const mongoose = require('mongoose');

const { Schema } = mongoose;

// not setup yet
const mundoSchema = new Schema({
  usuario: { type: Schema.Types.ObjectId, ref: 'usuario' },
  cena: { type: Schema.Types.ObjectId, ref: 'cena' },
});

module.exports = mongoose.model('mundo', mundoSchema);
