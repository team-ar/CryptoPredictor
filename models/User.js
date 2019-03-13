const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  email: String,
  password: String,
  predictions: [{ type: Schema.Types.ObjectId, ref: 'Prediction' }],
  puntuation: {
    type: Number,
    default: 0
  }
});

userSchema.set('timestamps', true);

const User = mongoose.model('User', userSchema);

module.exports = User;