//SPDX-License-Identifier:Unlicensed
pragma solidity ^0.8.0;

///@title Ownable clone:openzepplin's ownable library clone

contract OwnableClone {
    address private _owner;

    event OwnershipTransferred(
        address indexed previousOwner,
        address indexed newOwner
    );

    constructor() {
        _owner = msg.sender;
        emit OwnershipTransferred(address(0), msg.sender);
    }

    function owner() public view returns (address) {
        return _owner;
    }

    modifier onlyOwner() {
        require(_owner == msg.sender, "Ownable:caller is not the owner");
        _;
    }
}
