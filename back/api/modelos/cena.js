const mongoose = require('mongoose');

const { Schema } = mongoose;

const CenaSchema = new Schema({
  usuario: { type: Schema.Types.ObjectId, ref: 'usuario' },
  icon: { type: String },
  userColor: { type: String, max: 10 },
  floorTexture: { type: String, max: 10 }, // name of image
  backgroundTexture: { type: String, max: 10 },
  backgroundColor: { type: String },
  mundo: { type: Schema.Types.ObjectId, ref: 'mundo' },
});

const CenaModel = mongoose.model('cena', CenaSchema);

module.exports = CenaModel;
