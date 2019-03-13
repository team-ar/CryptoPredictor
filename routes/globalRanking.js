const express = require('express');
const router = express.Router();
const apiCoinMarket = require("../public/javascripts/apiCoinMarket")
const User = require("../models/User");



// GET predictions list

router.get("/", (req, res) => {

    User.find({})
    .then(users => {
      console.log(users)
      res.render('globalRanking', {users})})
    
    .catch(err => console.log('Error while finding the user', err))

})

router.post("/", (req, res) => {




})


module.exports = router;