const express = require('express');
const router = express.Router();
const apiCoinMarket = require("../public/javascripts/apiCoinMarket")
const User = require("../models/User");


/* GET home page */

router.get('/', (req, res, next) => {

    apiCoinMarket.getAllCoins()

    .then(marketCoins => {
        const marketCoins20 = marketCoins.data.slice(0, 20)
        const volumeBtc = parseInt(marketCoins20[0].quote.USD.market_cap)
      
        marketCoins20.forEach((coin, idx) => {
            
            if(coin.symbol === "BTC") {
                if(coin.quote.USD.percent_change_24h >= 0 ) coin.color = "#058484"
                else coin.color = "#F15659"
                coin.dimension = 1
                coin.width = 400
                coin.height = 500
                coin.fontSize = coin.dimension * 200
                coin.fontSizePrice = 50
                coin.fontSizeChange = 30
                coin.gridColumn = `span 6`
                coin.gridRow = `span 8`
            }
            else {
                if(coin.quote.USD.percent_change_24h >= 0 ) coin.color = "#058484"
                else coin.color = "#F15659"
                const volumeCoin = parseInt(marketCoins20[idx].quote.USD.market_cap)
                const dimension = volumeCoin / volumeBtc
                coin.dimension = dimension * 8
                coin.width = 400 * dimension 
                coin.height = 500 * dimension

                if(coin.dimension >= 0.04 && coin.dimension <= 0.15) {
                    coin.gridColumn = `span 1`
                    coin.gridRow = `span 2`
                    coin.fontSize = 30

                } else if (coin.dimension > 0.15 && coin.dimension <= 0.24) {
                    coin.gridColumn = `span 2`
                    coin.gridRow = `span 1`
                    coin.fontSize = 35

                } else if (coin.dimension > 0.24) {
                    coin.gridColumn = `span 2`
                    coin.gridRow = `span 2`
                    coin.fontSize = 40

                }


                if (coin.width < 25) {
                    coin.width = 25
                    coin.height = 25
                    }
            }
            
        });

        console.log(marketCoins20)

        marketCoins20.map(coin => {
            coin.quote.USD.price=parseFloat(coin.quote.USD.price).toFixed(2)
            coin.quote.USD.percent_change_24h=parseFloat(coin.quote.USD.percent_change_24h).toFixed(2)
        })

        res.render('index', { coins: marketCoins20 });   
    })

    .catch(err => {
        console.log('Error while finding the markerCoins', err)
        next()
    })
});



router.get("/coin/:id", (req, res, next) => {

    const id = req.params.id
 
    apiCoinMarket.getOneCoin(id)
        .then(marketCoin => {
                // res.json(marketCoin.data[id])
                // res.json(marketCoin)

            User.find({})
            .populate("predictions")
            .then(users => {
                res.render('cryptocurrency', { coins: JSON.stringify(marketCoin.Data),symbol: id, users, userId: req.session.currentUser !== undefined ? req.session.currentUser : "notLoggin" });
                console.log(users);
            })
            .catch(err => {
                console.log('Error while finding one markerCoins', err)
                next()
            })

        })

})





module.exports = router;