const Migrations = artifacts.require("Crowd_funding_3");

module.exports = function(deployer) {
  deployer.deploy(Migrations, 123123, 456456456);
};
