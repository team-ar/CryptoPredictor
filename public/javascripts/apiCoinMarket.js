const axios = require('axios')

const apiCoinMarket = {

    url: "https://pro-api.coinmarketcap.com/v1/cryptocurrency",

    getAllCoins() {
        return axios.get(`${this.url}/listings/latest`, { 'headers': { 'X-CMC_PRO_API_KEY': process.env.APIKEY } })
            .then(response => response.data) // response.data.quotes.market_cap
            .catch(error => console.log(error));

    },

    getOneCoin(symbol) {
        return axios.get(`https://min-api.cryptocompare.com/data/histoday?fsym=${symbol}&tsym=USD&limit=100`, { 'headers': { 'Apikey': process.env.APIKEYCRYPTOCOMPARE } })
            .then(response => response.data) // response.data.quotes.market_cap
            .catch(error => console.log(error));

    }

}

module.exports = apiCoinMarket