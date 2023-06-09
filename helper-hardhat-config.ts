interface networkConfig {
    [networkName: string]: {
        name: string
        ethUsdPriceFeed: string
    };
}

const networkConfig: networkConfig = {
    11155111: {
        name: "sepolia",
        ethUsdPriceFeed: "0x694AA1769357215DE4FAC081bf1f309aDC325306"
    },
    5: {
        name: "goerli",
        ethUsdPriceFeed: "0xD4a33860578De61DBAbDc8BFdb98FD742fA7028e"
    }
}

const developmentChain = ["hardhat", "localhost"]

export { networkConfig, developmentChain }