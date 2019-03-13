const express = require('express');
const router = express.Router();
const apiCoinMarket = require("../public/javascripts/apiCoinMarket")
const User = require("../models/User");


/* GET home page */

router.get('/', (req, res, next) => {

    apiCoinMarket.getAllCoins()

    .then(marketCoins => {
        const marketCoins20 = marketCoins.data.slice(0, 20)

        // console.log(marketCoins20)
        res.render('index', { coins: marketCoins20 });

    })
});

/* GET Cryptocurrency page */

router.get("/coin/:id", (req, res) => {


    const id = req.params.id

    apiCoinMarket.getOneCoin(id)
        .then(marketCoin => {
            // res.json(marketCoin.data[id])
            // res.json(marketCoin)
            // res.render('cryptocurrency', { coins: JSON.stringify(marketCoin.Data), symbol: id });
            res.render('cryptocurrency', { coins: JSON.stringify(marketCoin.Data), symbol: id, userId: req.session.currentUser !== undefined ? req.session.currentUser._id : "notLoggin" });
        })

})





module.exports = router;