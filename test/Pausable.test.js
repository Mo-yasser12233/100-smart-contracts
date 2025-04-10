const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Pausable contract", function () {
  let owner, pausable, other;

  beforeEach(async () => {
    [owner, other] = await ethers.getSigners();
    const Pausable = await ethers.getContractFactory("Pausable");
    pausable = await Pausable.deploy();
    await pausable.waitForDeployment();
  });

  it("Returns OnlyOwner to pause/unpause", async () => {
    await expect(pausable.connect(other).pause()).to.be.revertedWith(
      "Not the owner"
    );
    await pausable.connect(owner).pause();
    expect(await pausable.paused()).to.equal(true);

    await expect(pausable.connect(other).unPause()).to.be.revertedWith(
      "Not the owner"
    );
    await pausable.connect(owner).unPause();
    expect(await pausable.paused()).to.equal(false);
  });
});
