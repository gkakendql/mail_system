const web3 = require('./test');
const CampaignFactory = require('./build/MailFactory.json');

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x5534E118e66A31C452eA0aeca48019a2c76dC9c5'
);

module.exports = instance;
