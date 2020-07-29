const request = require("request")

const cotacao = (symbol, callback) =>{
    const url = `http://api.marketstack.com/v1/eod?access_key=d12f41e9c1272107a1fd9741d7996cf1&symbols=AAPL` 

    request({url: url, json:true}, (err, response) =>{
        if(err){
            callback({
                message: `Something went wrong: ${err}`
            }, undefined)
        }    

        if(response.body === undefined || response.body.data === undefined){
            callback({
                message: `No data found`
            }, undefined)
        }    
        

        const parsedJSON = response.body.data[0]
        const {symbol, close, high, low, open} = parsedJSON

        
        
        callback(undefined, {symbol, close, high, low, open})
    })
}
module.exports = cotacao