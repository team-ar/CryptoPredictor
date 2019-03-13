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
<<<<<<< HEAD
        res.render('index', { coins: marketCoins20 });

=======
        res.render('index', { coins: marketCoins20 });   
>>>>>>> 6eaf672e55eac543cb654df7dc0c3827ca228273
    })

<<<<<<< HEAD
/* GET Cryptocurrency page */
=======
    .catch(err => {
        console.log('Error while finding the markerCoins', err)
        next()
    })
});

>>>>>>> 6eaf672e55eac543cb654df7dc0c3827ca228273


router.get("/coin/:id", (req, res, next) => {

    const id = req.params.id
<<<<<<< HEAD

    apiCoinMarket.getOneCoin(id)
        .then(marketCoin => {
            // res.json(marketCoin.data[id])
            // res.json(marketCoin)
            // res.render('cryptocurrency', { coins: JSON.stringify(marketCoin.Data), symbol: id });
            res.render('cryptocurrency', { coins: JSON.stringify(marketCoin.Data), symbol: id, userId: req.session.currentUser !== undefined ? req.session.currentUser._id : "notLoggin" });
=======
 
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

>>>>>>> 6eaf672e55eac543cb654df7dc0c3827ca228273
        })

})





module.exports = router;