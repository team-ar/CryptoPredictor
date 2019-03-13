const express = require('express');
const router = express.Router();
const apiCoinMarket = require("../public/javascripts/apiCoinMarket")
const User = require("../models/User");



// GET predictions list

router.get("/", (req, res) => {


    const id = req.params.id

    console.log(id)

   

})


module.exports = router;