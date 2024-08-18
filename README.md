# Testing, Compiling and Deploying smartcontract onto the blockchain using Hardhat

---
## Documentations:

- Open-Campus Network Details: https://open-campus-docs.vercel.app/getting-started
- Open-Campus Faucet: https://drpc.org/faucet/open-campus-codex
- Open-Campus Explorer: https://opencampus-codex.blockscout.com/
- HardHat Documentation: https://hardhat.org/hardhat-runner/docs/getting-started#overview


---
## Steps to do:

- Install NodeJS.
- Initialise a Node project packake.json: ```npm init -y```
- Install Hardhat as a dev-dependency: ```npm install --save-dev hardhat```
- Initialise hardhat project: ```npx hardhat init```
- Install the hardhat-ignition plugin: ```npm install --save-dev @nomicfoundation/hardhat-ignition```
- Compile the already given smart contract: ```npx hardhat compile```
- Test the contract: ```npx hardhat test```
- Install dotenv as dev-dependency: ```npm install --save-dev dotenv```
- Create and Configure the ```.env``` file:
```
DEPLOYER_PRIVATE_KEY="es2342534ds345ft......"
RPC_URL-"https://rpc.open-campus-codex.gelato.digital"
```

- Configure the OpenCampusCodex network inside the ```hardhat.config.js``` file:

```
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

```

- Finally Deploying the smartcontract onto the blockchain:
```npx hardhat ignition deploy ./ignition/modules/Lock.js --network opencampus```