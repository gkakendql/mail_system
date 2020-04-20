const web3 = require('./test');
const CampaignFactory = require('./build/MailFactory.json');

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x708659865967680abE9e6c16E322825ec19DD6EC'
);

module.exports = instance;
