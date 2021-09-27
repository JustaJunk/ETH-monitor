// ref: https://github.com/jonasbostoen/eth-transaction-checker

const express = require("express");
const app = express();
const router = express.Router();
const mongoOp = require("./mongo");
const Web3 = require('web3');
const config = require('./addressConfig.json');

const web3http =  new Web3(new Web3.providers.HttpProvider('https://rinkeby.infura.io/v3/'+config.infuraProjectId));
const web3 = new Web3(new Web3.providers.WebsocketProvider('wss://rinkeby.infura.io/ws/v3/'+config.infuraProjectId));

const account = config.targetAddr.toLowerCase();
const subscription = web3.eth.subscribe('pendingTransactions', (err, res) => {
    if (err) console.error(err);
});

const moniterAddress = () => {
    console.log('Watching transactions...');
    subscription.on('data', (txHash) => {
        setTimeout(async () => {
            try {
                const tx = await web3http.eth.getTransaction(txHash);
                if (tx && tx.from && tx.to) {
                    if (tx.from.toLowerCase() === account ||
                        tx.to.toLowerCase() === account) {
                        let newTx = new mongoOp();
                        newTx.from = tx.from;
                        newTx.to = tx.to;
                        newTx.save((err) => {
                            if (err) console.log("tx saving error");
                            else console.log("tx saved");
                        })
                    }
                }
            } catch (err) {
                console.log(err);
            }
        }, 60 * 1000);
    });
}

router.get("/", function(req, res) {
    res.json({"error" : false, "message" : "API 'history': list all occurrences of transaction"});
});

router.route("/history")
    .get(function(req,res){
        var response = {};
        mongoOp.find({},function(err,data){
            if(err) {
                response = {};
            } else {
                response = data;
            }
            res.json(response);
        });
    });

app.use('/', router);

moniterAddress();
app.listen(3000);
console.log("Listening to PORT 3000...");