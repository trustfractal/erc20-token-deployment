require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
require('dotenv').config();

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
  networks: {
    mainnet: {
      accounts: [process.env.HEX_PRIVATE_KEY],
      url: process.env.MAINNET_RPC_URL,
    },
    rinkeby: {
      accounts: [process.env.HEX_PRIVATE_KEY],
      url: process.env.RINKEBY_RPC_URL,
    },
  },
  solidity: {
    version: "0.6.12",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
