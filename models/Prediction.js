const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const predictionSchema = new Schema({
  cryptocurrency: String,
  prediction: { 
    type: String, 
    enum: ['BULL', 'BEAR']
  },
  price: Number,
  startDate: Date,
  endDate: Date
});

predictionSchema.set('timestamps', true);

const Prediction = mongoose.model('Prediction', predictionSchema);

module.exports = Prediction;