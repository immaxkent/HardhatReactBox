require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
// module.exports = {
//   solidity: "0.8.18",
// };

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
    }
    // ,
    // sepolia: {
    //   url: "https://eth-sepolia.g.alchemy.com/v2/HuH8atRM2cZptUxD2lQ-DDB5Eb775Hz2",
    //   accounts: ["HuH8atRM2cZptUxD2lQ-DDB5Eb775Hz2"]
    // }
  },
  solidity: {
    version: "0.8.9",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./client/src/contracts"
  },
  mocha: {
    timeout: 40000
  }
}