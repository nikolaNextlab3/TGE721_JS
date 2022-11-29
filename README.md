# ERC721 Token deployment on Juneo Gold chain

This hardhat project is a demostraction of how to make and deploy a ERC721 smart contract (NFT) on to the Juneo Gold chain.

## Node modules installation

In order to run the project and the scripts in it first the user must install all of the required node modules via the following commands:

1) npm i hardhat @nomicfoundation/hardhat-toolbox @openzeppelin/contracts
2) npm i --save-dev dotenv

## Using wallet for smart contract (token) deployment
 
After the node modules have been installed you will need to create a .env file in which you will specify the PRIVATE_KEY variable 
which is used to deploy the contract. An example of a private key (linked to your wallet) would be as follows:

0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80

We are only going to be using the address after the '0x' prefix. That is 'ac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80'

In the .env file, following the private key example above enter the following line of code:

PRIVATE_KEY=89d30a865a1aae5c6a847d860f3e0de44b5f3a168f7b7a57ea3efc19c9ab4a35

Please bare in mind to keep your private key in a safe place and to not give it to anyone you do not trust!
The address which we gave in this example is form the integrated hardhat network runner program. Do not send any real crypto tokens to it as they will get lost!

## Smart contract (NFT) configuration

### Base URI

For this tutorial we have provided 50 metadata files (JSON files), each with a unique image file (PNG). The base URI for the IPFS that hosts the metadata files
is assigned via the return statment in the _baseURI() function (i.e. return "https://gateway.pinata.cloud/ipfs/QmcJnDkKFymxP4niVya6cz55XxzUqBXApVVZ3fPjRuhfuM/").

If you would like to use your own metadata files/images simple replace the return value in the _baseURI() function with your own URI.

### Max Token Count

Also, since we have a maximum of 50 JSONs/Unique PNGs to go along with our NFTs we have the maxToken variable, which is set to 50. If you have more or less accommodating metadata files, simply change the value of the maxToken variable before compiling the ERC721 smart contract (NFT).

## Deployment

After we have done all of the aformentioned steps we can finally deploy the contract via running the following command:

npx hardhat run scripts/deploy.js --network juneo_gold

After the script has done executing we can see that the console has logged some information regarding the deployment process. The most interesting bit of information for us is the deployment address of the ERC721 smart contract (NFT). 

An example of the contract address would be:

0x5FbDB2315678afecb367f032d93F642f64180aa3

In order to see our NFT (as a token) in our wallet we simply have to import the token by using the address that was logged out during the deployment process.

We can also go to a marketplace that works on the block chain to which we deployed the NFT in order to see the image and all of its attributes.