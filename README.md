# ERC20 Token deployment on Juneo Gold chain

This hardhat project is a demostraction of how to make and deploy a ERC20 smart contract (token) on to the Juneo Gold chain.

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

## Smart contract (token) configuration

### Decimal count

If you would like to configure the smart contract itself you can do so by finding it inside the contracts folder/

The initial decimal count for the token is set to 1 (as in 0.1), and the maximum amount is 18 (as it is with ETH). If you would like to change the decimal count of your token, you can do this by changing the return value of the decimals() function that is a part of the TGE20.sol smart contract.

### Initial token amount

If we take a look at the TGE20.sol file we can se that within constructor function (the function that is called when the contract is deployed) we also call the _mint function that mints the initial amount of token that we specify (i.e. 1000 is the initial given value is 100 and the decimal count is set to 1). 

In order to speficy how many token we would like to mint during the initial deployment we can do so by chaining the value of the initialAmount constant inside the deploy.js script.

The deploy.js script is ran when we deploy the smart contract (token) onto the block chain and in turn it contains all of the important information regarding the deployment process (see the comments inside the deploy.js file for more infromation).

## Deployment

After we have done all of the aformentioned steps we can finally deploy the contract via running the following command:

npx hardhat run scripts/deploy.js --network juneo_gold

After the script has done executing we can see that the console has logged some information regarding the deployment process. The most interesting bit of information for us is the deployment address of the ERC20 smart contract (token). 

An example of the contract address would be:

0x5FbDB2315678afecb367f032d93F642f64180aa3

In order to see our token in our wallet we simply have to import the token by using the address that was logged out during the deployment process.