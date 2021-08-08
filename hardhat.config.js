require('@nomiclabs/hardhat-waffle');
require('hardhat-docgen');
require('dotenv').config();

require('@nomiclabs/hardhat-waffle');

// Go to https://www.alchemyapi.io, sign up, create
// a new App in its dashboard, and replace "KEY" with its key
const ALCHEMY_API_KEY = process.env.ALCHEMY_API_KEY;

// Replace this private key with your Ropsten account private key
// To export your private key from Metamask, open Metamask and
// go to Account Details > Export Private Key
// Be aware of NEVER putting real Ether into testing accounts
const KOVAN_PRIVATE_KEY = process.env.KOVAN_PRIVATE_KEY;

module.exports = {
  solidity: '0.8.4',
  networks: {
    kovan: {
      url: `https://eth-kovan.alchemyapi.io/v2/${process.env.ALCHEMY_API_KEY}`,
      accounts: [`0x${process.env.KOVAN_PRIVATE_KEY}`],
    },
  },
  docgen: {
    path: './docs',
    clear: true,
    runOnCompile: false,
  },
};
