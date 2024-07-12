require("@nomiclabs/hardhat-waffle")
require("hardhat-gas-reporter")
require("./tasks/block-number")
require("@nomiclabs/hardhat-etherscan")
require("dotenv").config()
require("solidity-coverage")
//require("@nomicfoundation/hardhat-verify")
// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more
/**
 * @type import('hardhat/config').HardhatUserConfig
 */

const COINMARKETCAP_API_KEY = process.env.COINMARKETCAP_API_KEY || ""
const SEPOLIA_RPC_URL =
    process.env.SEPOLIA_RPC_URL ||
    "https://eth-sepolia.g.alchemy.com/v2/your-api-key"

const PRIVATE_KEY = ["0x162e1f2c690146851d8d1bc8d1150df7e2c652ea51cdffc899fcdb16ceff76ec"]

// const PRIVATE_KEY =
//     process.env.PRIVATE_KEY ||
//     "0x11ee3108a03081fe260ecdc106554d09d9d1209bcafd46942b10e02943effc4a"
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY || ""

module.exports = {
    defaultNetwork: "hardhat",
    networks: {
        hardhat: {},
        // sepolia: {
        //     url: SEPOLIA_RPC_URL,

        //     accounts: [PRIVATE_KEY],
        //     chainId: 11155111,
        // },

        sepolia: {
            url: "https://sepolia.infura.io/v3/3c227c16de32484cb75da21720862f04",
            accounts: PRIVATE_KEY,
         },

         arb:{
            url: 'https://public.stackup.sh/api/v1/node/arbitrum-sepolia',
            accounts: PRIVATE_KEY
        },

        localhost: {
            url: "http://127.0.0.1:7545",
            chainId: 1337,
        },
    },
    solidity: "0.8.8",
    etherscan: {
        apiKey: ETHERSCAN_API_KEY,
    },
    gasReporter: {
        enabled: true,
        currency: "USD",
        outputFile: "gas-report.txt",
        noColors: true,
        coinmarketcap: COINMARKETCAP_API_KEY,
    },
}
