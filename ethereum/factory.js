const web3 = require('./test');
const CampaignFactory = require('./build/MailFactory.json');

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x9A665c51b0Ec72bBf3D7ab1f5637AD37E11d78Fc'
);

module.exports = instance;
