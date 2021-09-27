// ref: https://codeforgeek.com/restful-api-node-mongodb/

const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/addressMonitor');
// create instance of Schema
const mongoSchema = mongoose.Schema;
// create schema
const txSchema  = {
    // "blockHash": String,
    // "blockNumber": Number,
    "from" : String,
    // "gas": Number,
    // "gasPrice": String,
    // "hash": String,
    // "input": String,
    // "nonce": Number,
    // "r": String,
    // "s": String,
    "to" : String,
    // "transactionIndex": Number,
    // "v": String,
    // "value": String,
};
// create model if not exists.
module.exports = mongoose.model('targetTx', txSchema);