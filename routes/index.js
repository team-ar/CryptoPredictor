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



router.get("/coin/:id", (req, res) => {


    const id = req.params.id
<<<<<<< HEAD

    console.log(id)

    apiCoinMarket.getOneCoin(id)
        .then(marketCoin => {
            console.log(marketCoin)
        })

=======
  
>>>>>>> 0443216f8e4e757ecd8e339bf25d9f9725a6cf81
    apiCoinMarket.getOneCoin(id)
        .then(marketCoin => {
                // res.json(marketCoin.data[id])
                // res.json(marketCoin)
<<<<<<< HEAD
                // res.render('cryptocurrency', { coins: JSON.stringify(marketCoin.Data), symbol: id });
            res.render('cryptocurrency', { coins: JSON.stringify(marketCoin.Data), symbol: id, userId: req.session.currentUser !== undefined ? req.session.currentUser._id : "notLoggin" });
=======
            res.render('cryptocurrency', { coins: JSON.stringify(marketCoin.Data),symbol: id, userId: req.session.currentUser !== undefined ? req.session.currentUser._id : "notLoggin" });
 
>>>>>>> 0443216f8e4e757ecd8e339bf25d9f9725a6cf81
        })
 
})



module.exports = router;