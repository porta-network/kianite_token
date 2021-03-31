require('dotenv').config();
const KIAN = artifacts.require("Kian");
const holder = process.env.HOLDER;

module.exports = function (deployer) {
  deployer.deploy(KIAN, holder);
};
