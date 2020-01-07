const funding5 = artifacts.require("crowd_Funding_5");

module.exports = function(deployer) {
  deployer.deploy(funding5, 5555555555, 555555555555555);
};
