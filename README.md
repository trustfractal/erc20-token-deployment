# ERC20 Token Deployment

Deploys a [Burnable ERC20 token contract](https://docs.openzeppelin.com/contracts/3.x/api/token/erc20#ERC20Burnable) with the given name, symbol and initial supply.

This contract is [Pausable](https://docs.openzeppelin.com/contracts/3.x/api/utils#Pausable) by `TARGET_OWNER`.

## Deploying

Uses [Hardhat](https://hardhat.org/), as recommended in OpenZeppelin's [Deploying and interacting](https://docs.openzeppelin.com/learn/deploying-and-interacting) guide.

1. `cp .env.example .env` and adapt
2. `npx hardhat run scripts/deploy.js --network <rinkeby|mainnet>`

## Interacting

You can use the [Hardhat console](https://hardhat.org/guides/hardhat-console.html). The contract's address is output by the deployment script, and its ABI can be found at `./artifacts/contracts/FCLToken.sol/FCLToken.json`.

```javascript
[signer] = await ethers.getSigners()
contract = new ethers.Contract(address, abi, signer)
contract.pause()
contact.unpause()
```

## Verifying in Etherscan

Uses [Hardhat's Etherscan plugin](https://github.com/nomiclabs/hardhat/tree/master/packages/hardhat-etherscan).

1. Set `ETHERSCAN_API_KEY` in your `.env` file
2. Run ```npx hardhat verify --network <rinkeby|mainnet> <contract address> "<TOKEN_NAME>" "<TOKEN_SYMBOL>" "<TOKEN_INITIAL_SUPPLY>" "<TARGET_OWNER>"```
