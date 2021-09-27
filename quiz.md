# 1

Please explain the difference of Bitcoin and Ethereum? What is UTXO? What is Smart Contract?

# 2

What is consensus algorithm?

In following consensus algorithm, which is the least efficient one?

- PoW
- PoA
- PoS

# 3

Please explain what is `ERC20`? What is `ERC721`? What's the difference?

# 4

For Ethereum, assume `USDT` is an ERC20 compatible Token, `Alice`, `Bob` and `Charlie` is the alias represeting ethereum address

in scenario:
| | ETH | USDT |
|---------|-----|--------|
| Alice | 5 | 300 |
| Bob | 1 | 150 |
| Charlie | 1 | 0 |

For following transaction occurs in order:

A. Alice transfer 100 `USDT` to Bob

B. Alice transfer 1 `ETH` to Bob

C. Alice transfer 100 `USDT` to Charlie

D. Alice transfer 1 `ETH` to Charlie

Please compare the amount of gas cunsume, and explain why



# 5

Please design and implement a system that track the transaction of pre-configured address on Ethereum:
assume `A` is the address to track,

- this system read config and know `A` is the address to track before starting
- this system sync its internal states with Ethereum
- provide an API that can list all occurrences of transaction _from_ or _to_ `A` with _contract function signature_

### Requirements

- RDBMS or No-SQL
- RESTful API

### Bonus

- this system can resume syncing from the state it stopped before
- this system has mechanism to handle blockchain fork (reorg)