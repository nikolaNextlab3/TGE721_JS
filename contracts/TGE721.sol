// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract TGE721 is ERC721 {
    using Counters for Counters.Counter;

    Counters.Counter private _tokenIdCounter;       // Represents a counter which we use to track the id of the NFT during the minting process
    uint256 private maxTokens = 50;                  // Represents the maximum number of NFTs that can be minted

    constructor() ERC721("Test Gold ERC721", "TGE721") {}       // In the constructor we define the name and symbol of the NFT

    function _baseURI() internal pure override returns (string memory) {
        return "https://gateway.pinata.cloud/ipfs/QmcJnDkKFymxP4niVya6cz55XxzUqBXApVVZ3fPjRuhfuM/";     // The base URI is the URI where we store our NFTs metadata
    }

    function safeMint(address to) public {
        require(_tokenIdCounter.current() < maxTokens, "All NFTs have been minted!");       // Check if we have exceeded the maximum number of mintable NFTs 
        uint256 tokenId = _tokenIdCounter.current();                                        // Get the NFTs ID via the counter variable
        _tokenIdCounter.increment();                                                        // Incrementing counter variable 
        _safeMint(to, tokenId);                                                             // Minting new a NFT to a desired wallet (to address) with specific ID
    }
}