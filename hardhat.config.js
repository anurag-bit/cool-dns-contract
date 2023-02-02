require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    mumbai: {
      url: "https://methodical-spring-wish.matic-testnet.discover.quiknode.pro/9f892a383b8a37e4590dd8b7dfad89afe90304e0/",
      accounts: ["fb00d3721f1cfee4d3e5587a28a786f19b0e535ec66c8d7e42b797513b5fd37c"],
    }
  }
};
