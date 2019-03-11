const axios = require('axios')

const apiCoinMarket = {

  getAllCoins() {
    return axios.get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest', { 'headers': { 'X-CMC_PRO_API_KEY': process.env.APIKEY } })
      .then(response => response.data) // response.data.quotes.market_cap
      .catch(error => console.log(error));
     
  },

  getOneCoin(id) {
    return axios.get(`https://pro-api.coinmarketcap.com/v1/cryptocurrency/info?id=${id}`, { 'headers': { 'X-CMC_PRO_API_KEY': process.env.APIKEY } })
      .then(response => response.data) // response.data.quotes.market_cap
      .catch(error => console.log(error));

  }

}

module.exports = apiCoinMarket

