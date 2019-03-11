const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const predictionSchema = new Schema({
  cryptocurrency: String,
  prediction: { 
    type: String, 
    enum: ['RISE', 'FALL']
  },
  price: Number,
  date: Date
});

predictionSchema.set('timestamps', true);

const Prediction = mongoose.model('Prediction', predictionSchema);

module.exports = Prediction;