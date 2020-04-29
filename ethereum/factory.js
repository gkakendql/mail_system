const web3 = require('./test');
const CampaignFactory = require('./build/MailFactory.json');

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x98221Ae76533bfbdB0FE55e0210661E24D1a010E'
);

module.exports = instance;
