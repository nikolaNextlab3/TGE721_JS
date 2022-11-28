const { ethers } = require("hardhat");  // Importing ethers from hardhat
require("dotenv").config();             // Importing .env file for further use

const main = async () => {
    const provider = new ethers.providers.getDefaultProvider('https://api2.mcnpoc3.xyz:9650/ext/bc/GOLD/rpc');  // Setting up network provider via RPC URL
    const wallet = (new ethers.Wallet(`0x${process.env.PRIVATE_KEY}`)).connect(provider);                       // Setting up our wallet via our private key 

    const initialAmount = 1000;  // Defining initial token amount (will be 1000 because of the decimal point [i.e. 1]) 

    const TGE20ContractFactory = await ethers.getContractFactory('TGE20');      // Getting contract factory of the token smart contract
    const TGE20Contract= await TGE20ContractFactory.deploy(initialAmount);      // Deploying contract with specified initial amount
    
    console.log(`\nDeploying contract via: ${wallet.address}\n`);                 // Logging out wallet address that was used for the deployment of the contract

    const TGE20ContractTransactionResponse = TGE20Contract.deployTransaction;                   // Getting Transaction Response of deployment transaction
    const TGE20ContractTransactionRecipient = await TGE20ContractTransactionResponse.wait();    // Waiting until the contract is deployed

    console.log(`Contract deployed at (Token address): ${await TGE20Contract.address}\n`);      // Logging out address of the deployed contract

    // Logging out specific information regarding our smart contract (token)

    console.log(`Token information:
    Name: ${await TGE20Contract.name()}    
    Symbol: ${await TGE20Contract.symbol()}
    Total supply: ${await TGE20Contract.totalSupply()}`);
}

main()                              // Calling main function
    .then(() => process.exit(0))
    .catch(error => {
        console.log(error);
    })