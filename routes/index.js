const express = require('express');
const router = express.Router();
const apiCoinMarket = require("../public/javascripts/apiCoinMarket")

/* GET home page */
router.get('/', (req, res, next) => {

    apiCoinMarket.getAllCoins()

    .then(marketCoins => {
        const marketCoins20 = marketCoins.data.slice(0, 20)

        // console.log(marketCoins20)
        res.render('index', { coins: marketCoins20 });
        //
    })
});



router.get("/coin/:id", (req, res) => {

    // console.log(req.params.id)

    const id = req.params.id

    console.log(id)

    apiCoinMarket.getOneCoin(id)
        .then(marketCoin => {
            console.log(marketCoin)
        })

    apiCoinMarket.getOneCoin(id)
        .then(marketCoin => {
            console.log(marketCoin)
                // res.json(marketCoin.data[id])
                // res.json(marketCoin)
                // res.render('cryptocurrency', { coins: JSON.stringify(marketCoin.Data), symbol: id });
            res.render('cryptocurrency', { coins: JSON.stringify(marketCoin.Data), symbol: id, userId: req.session.currentUser !== undefined ? req.session.currentUser._id : "notLoggin" });
        })

})

module.exports = router;