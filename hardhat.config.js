require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

module.exports = {
  solidity: "0.8.17",
  networks: {
    juneo_gold: {
      url: 'https://api2.mcnpoc3.xyz:9650/ext/bc/GOLD/rpc',
      chainId: 330007,
      accounts: [
        `0x${process.env.PRIVATE_KEY}`
      ]
    }
  }
};
