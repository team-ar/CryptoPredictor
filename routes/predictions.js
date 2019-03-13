const express = require('express');
const router = express.Router();
const User = require("../models/User");
const Prediction = require("../models/Prediction");




//CREATE CRYPTO PREDICTION TENGO QUE PASAR LOS DATOS DEL USER!!!!!



router.get("/predictions/:id", (req, res, next) => {


  User.findById(req.params.id)
    .then(user => {
      console.log(user)
      res.render('createCryptoPrediction', {user})})
    
    .catch(err => {
        console.log('Error while finding the user', err)
        next()
    })
 
})



router.post("/predictions/:id", (req, res, next) => {

const{prediction, price, startDate, endDate } = req.body

const newPrediction = new Prediction ({prediction, price, startDate, endDate})

newPrediction.save()
  .then(newprediction  => {
    User.findByIdAndUpdate( req.params.id,  { $addToSet: {predictions: newprediction.id}})

    .then(()=> res.redirect('/'))
    .catch(err => {
        console.log('Error while updating a place', err)
        next()
    })
  })
  .catch(error => res.redirect("/"))



})






  




module.exports = router;