# 1

Please explain the difference of Bitcoin and Ethereum? What is UTXO? What is Smart Contract?

## A1
Bitcoin 是 UTXO 類型 而 Ethereum 是 Account 類型。 UTXO 需要過往所有的交易才能得到現在狀態，Account 則是直接紀錄現在狀態。比如說現在 UTXO 下查看 balance 要累加過去的轉帳，而 Account 則是直接讀取紀錄在最新區塊上的值。Smart contract簡單說就是紀錄在區塊上可執行可呼叫函式的一段程式碼，將規則、運行模式、權限寫死，任何參與的人都只能遵守。Account 類型較適合發展智能合約。

# 2

What is consensus algorithm?

In following consensus algorithm, which is the least efficient one?

- PoW
- PoA
- PoS

## A2
共識演算法是能讓所有節點保持一致性（擁有共同帳本）的機制，主要為了解決拜占庭問題。沒有經過人為因素全由計算機運行的話，POW為最耗時耗能的共識機制。

# 3

Please explain what is `ERC20`? What is `ERC721`? What's the difference?

## A3
ERC20 為定義同質化代幣一系列操作的協議，而 ERC721 則定義的是非同質化代幣的操作。比如 ERC20 中 transferFrom 的參數為代幣數量，因為同質不需要區分每顆代幣。而 ERC721 的參數則是代幣編號，因為不同質所以需要每顆代幣都需個別操作。

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

## A4
C>A>B=D
1. 原生幣轉帳消耗的 gas 會低於其他 ERC20 的代幣
2. 轉帳給從未持有此代幣的帳戶，需經過建立此帳號紀錄的過程，故會消耗額外的gas


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