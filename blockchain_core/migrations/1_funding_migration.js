const funding1 = artifacts.require("crowd_Funding_1");

module.exports = function(deployer) {
  deployer.deploy(funding1, 1111111111, 111111111111111);
};
