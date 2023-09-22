const { expect } = require("chai");
const { ethers } = require("hardhat")
describe("nUSD", function () {
  let nUsdContract;
  let owner;
  let addr1;
  let addr2;

  beforeEach(async function () {
    // Deploy the contract
    const NUsdContract = await ethers.getContractFactory("nUSD");
    nUsdContract = await NUsdContract.deploy();
    //await nUsdContract.deployed();

    // Get signers
    [owner, addr1, addr2] = await ethers.getSigners();
  });

  it("Minting 100 tokens and checking user balance is equal to 100", async function () {
    await nUsdContract.connect(addr1).mint(100);
    const ownerBalance = await nUsdContract.balanceOf(addr1.address);
    expect(ownerBalance).to.equal(100);
  });

});
