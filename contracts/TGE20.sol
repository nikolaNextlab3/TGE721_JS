// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract TGE20 is ERC20 {

    bool isMinted = false;

    constructor(uint256 _initialSupply) ERC20("Test Gold ERC20", "TGE20") {     // Specifying name and symbol of token
        _mint(msg.sender, _initialSupply);                                      // Minting token with specified initial amount
    }                          

    function decimals() public view virtual override returns (uint8) {          // Specifying decimal number for token
        return 1;                                                               // Change the return value of this function in order to specify the decimal amount 
    }                                                                           // of your token. Currently it is set to 1 (i.e. 0.1)
}