const Migrations = artifacts.require("Crowd_funding_6");

module.exports = function(deployer) {
  deployer.deploy(Migrations, 123123, 456456456);
};
