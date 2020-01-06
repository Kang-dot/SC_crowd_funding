const Crowd_Funding = artifacts.require("Crowd_funding");

module.exports = function(deployer) {
  deployer.deploy(Crowd_Funding);
};
