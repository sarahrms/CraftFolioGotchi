const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let CenaSchema = new Schema({
  id: { type: Number, max: 10, min: 5, required: true, unique: true, index: true },
  userName: { type: String, max: 20, min: 5, required: true, unique: true },
  icon: { type: String, required: true },
  userColor: { type: String, max: 10, required: true },
  floorTexture: { type: String, max: 10, required: true }, //name of image
  backgroundTexture: { type: String, max: 10 },
  backgroundColor: { type: String }

})

let CenaModel = mongoose.model('cena', CenaSchema);

let Cena = {}

Cena.findById = (id, callback) => {
  CenaModel.findById(id)
    .lean()
    .exec(callback)
}

Cena.updateById = (
  updateId,
  newIcon,
  newAlienColor,
  newFloorTexture,
  newBackgroundTexture,
  newBackgroundColor,
  callback) => {
  CenaModel.updateOne({ id: updateId }, {
    $set:
    {
      icon: newIcon,
      userColor: newAlienColor,
      floorTexture: newFloorTexture,
      backgroundTexture: newBackgroundTexture,
      backgroundColor: newBackgroundColor
    }
  })
    .lean
    .exec(callback)
}

module.exports = Cena;