const web3 = require('./test');
const CampaignFactory = require('./build/MailFactory.json');

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0xd690f3E426B0D364705b32F8EC8C75B4c3245123'
);

module.exports = instance;
