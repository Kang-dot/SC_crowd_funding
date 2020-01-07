const funding6 = artifacts.require("crowd_Funding_6");

module.exports = function(deployer) {
  deployer.deploy(funding6, 6666666666, 6666666666666666);
};
