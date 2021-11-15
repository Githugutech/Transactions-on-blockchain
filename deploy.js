'use strict';

// Sending ether from account 1 to account 2

var Tx = require('ethereumjs-tx');
// const { default: Web3 } = require('web3');
const Web3 = require('web3');

const web3 = new Web3('http://127.0.0.1:7545');
const account1 = '0x4A17d84fD7e0155b8BB0C0A1Ffd5FFB85931b680';
// const privateKey1 = Buffer.from(process.env.PRIVATE_KEY_1, 'hex');
const account2 = '0x91f7dc724e67caf9fc3135D1ad0eB0e369eF04b2';
web3.eth.getBalance(account1, (err, result) => {
  console.log(result);
});
web3;
web3.eth.sendTransaction({
  from: account1,
  to: account2,
  value: web3.utils.toWei('1', 'ether'),
});
