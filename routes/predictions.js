const express = require('express');
const router = express.Router();
const User = require("../models/User");
const Prediction = require("../models/Prediction");




//CREATE CRYPTO PREDICTION TENGO QUE PASAR LOS DATOS DEL USER!!!!!



router.get("/predictions/:id/:symbol", (req, res, next) => {


  User.findById(req.params.id)
    .then(user => {
      console.log(user)
      res.render('createCryptoPrediction', {user, symbol:req.params.symbol})})
    
    .catch(err => {
        console.log('Error while finding the user', err)
        next()
    })
 
})



router.post("/predictions/:id/:symbol", (req, res, next) => {

const cryptocurrency = req.params.symbol

const{prediction, price, startDate, endDate } = req.body

const user = req.params.id

const newPrediction = new Prediction ({cryptocurrency, user, prediction, price, startDate, endDate})

newPrediction.save()
  .then(newprediction  => {
    User.findByIdAndUpdate( req.params.id,  { $addToSet: {predictions: newprediction.id}})

    .then(()=> res.redirect('/'))
    .catch(err => {
      console.log('Error while updating a place', err)
      next()
    })
  })
  .catch(error      => {
    res.render('createCryptoPrediction', {
      errorMsg: `Please enter all input.`
    })
  })



})









  




module.exports = router;