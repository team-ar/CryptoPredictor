const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const predictionSchema = new Schema({
  cryptocurrency: String,
  prediction: { 
    type: String, 
    enum: ['BULL', 'BEAR'],
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  startDate: {
    type: Date,
    required: true
  },
  endDate: {
    type: Date,
    required: true
  }
});

predictionSchema.set('timestamps', true);

const Prediction = mongoose.model('Prediction', predictionSchema);

module.exports = Prediction;