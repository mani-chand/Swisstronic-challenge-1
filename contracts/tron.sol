// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract nUSD is ERC20 {
    address internal owner;

    constructor() ERC20("USDT", "a tron erc20 token") {}
    function mint(uint amount) public{
        _mint(msg.sender, amount);
    }
    function balance(address user)public returns(uint){
        return balanceOf(user);
    }
}
