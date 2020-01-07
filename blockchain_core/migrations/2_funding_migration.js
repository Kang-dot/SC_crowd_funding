const funding2 = artifacts.require("crowd_Funding_2");

module.exports = function(deployer) {
  deployer.deploy(funding2, 2222222222, 222222222222222);
};
