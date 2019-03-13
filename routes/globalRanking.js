const express = require('express');
const router = express.Router();
const apiCoinMarket = require("../public/javascripts/apiCoinMarket")
const User = require("../models/User");



// GET predictions list

router.get("/", (req, res) => {


    const id = req.params.id

    console.log(id)

    apiCoinMarket.getOneCoin(id)
        .then(marketCoin => {
            // res.json(marketCoin.data[id])
            // res.json(marketCoin)
            // res.render('cryptocurrency', { coins: JSON.stringify(marketCoin.Data), symbol: id });
            res.render('globalRanking', { coins: JSON.stringify(marketCoin.Data), symbol: id, userId: req.session.currentUser !== undefined ? req.session.currentUser._id : "notLoggin" });
        })

})


module.exports = router;