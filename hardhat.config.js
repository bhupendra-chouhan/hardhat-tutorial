require("dotenv").config();
require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  networks: {
    opencampus: {
      accounts: [process.env.DEPLOYER_PRIVATE_KEY],
      url: process.env.RPC_URL
    }
  }
};
