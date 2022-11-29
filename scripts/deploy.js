const { ethers } = require("hardhat");  // Importing ethers from hardhat
require("dotenv").config();             // Importing .env file for further use

const main = async () => {

    // DEPLOYMENT

    const provider = new ethers.providers.getDefaultProvider('https://api2.mcnpoc3.xyz:9650/ext/bc/GOLD/rpc');  // Setting up network provider via RPC URL
    const wallet = (new ethers.Wallet(`0x${process.env.PRIVATE_KEY}`)).connect(provider);                       // Setting up our wallet via our private key 

    const TGE721ContractFactory = await ethers.getContractFactory('TGE721');    // Getting contract factory of the token smart contract
    const TGE721Contract= await TGE721ContractFactory.deploy();                 // Deploying contract
    
    console.log(`\nDeploying contract via: ${wallet.address}`);                 // Logging out wallet address that was used for the deployment of the contract

    let TGE721ContractTransactionResponse = TGE721Contract.deployTransaction;                   // Getting Transaction Response of deployment transaction
    let TGE721ContractTransactionRecipient = await TGE721ContractTransactionResponse.wait();    // Waiting until the contract is deployed

    console.log(`\nContract deployed at (NFT address): ${await TGE721Contract.address}`);      // Logging out address of the deployed contract

    // Logging out specific information regarding our smart contract (NFT)

    console.log(`\nNFT information:
    Name: ${await TGE721Contract.name()}    
    Symbol: ${await TGE721Contract.symbol()}`);

    // NFT MINTING

    console.log(`\nMinting NFT for: ${wallet.address}`);                                        // Logging out address to which the NFT will be minted to

    TGE721ContractTransactionResponse = await TGE721Contract.safeMint(wallet.address);          // Calling minting function with NFT reciever address
    TGE721ContractTransactionRecipient = await TGE721ContractTransactionResponse.wait();        // Waiting until the transaction is included in the blockchain

    const nftOwnerAddress = await TGE721Contract.ownerOf(0);

    console.log(`\nOwner of NFT (ID - 0): ${nftOwnerAddress}`);                                 // Logging out owner address of NFT with id 0
}

main()                              // Calling main function
    .then(() => process.exit(0))
    .catch(error => {
        console.log(error);
    })