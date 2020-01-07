const funding3 = artifacts.require("crowd_Funding_3");

module.exports = function(deployer) {
  deployer.deploy(funding3, 3333333333, 333333333333333);
};
