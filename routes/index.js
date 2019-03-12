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

router.get("/:id", (req, res) => {

    // console.log(req.params.id)

    const id = req.params.id

    apiCoinMarket.getOneCoin(id)
        .then(marketCoin => {
            console.log(marketCoin)
        })

})

module.exports = router;


// https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?symbol=BTC,ETH,XRP,BCH,EOS,LTC,XLM&convert=BTC,ETH,EUR