const axios = require("axios");

async function getPrice(currency, fiat){
    return axios.get(`https://api.coinbase.com/v2/exchange-rates?currency=${currency}`)
    .then((res)=>{
        var priceGetter = res.data.data.rates[fiat];
        return(Math.round(priceGetter * 100) / 100);
    })  
     
}

module.exports = getPrice;