# eth-moniter
Ethereum monitor for the transactions of certain address.

## Mechanism
1. Use `web3` and `infura` to connect to blockchain network.
2. Use `MongoDB` to setup database for acquired transactions.

## Usage
1. Clone this repo
```
$ git clone https://github.com/JustaJunk/eth-monitor.git
$ cd eth-moniter
```
2. Install `MongoDB` and setup path
```
$ mkdir mongoData
$ mongod --dbpath mongoData
```
3. Open MongoDB console and create collection
```
$ mongo
> use addressMonitor
```
4. Add `config.json`
```
{
    "infuraProjectId": <YOUR_INFURA_PROJECT_ID>,
    "targetAddr": <TARGET_ADDRESS>
}
```
5. Open another terminal and start server
```
npm install
npm start
```
