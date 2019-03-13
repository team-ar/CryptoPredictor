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