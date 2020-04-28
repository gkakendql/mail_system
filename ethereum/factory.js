const web3 = require('./test');
const CampaignFactory = require('./build/MailFactory.json');

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0xB217A40548d72AaB33b234b7Ab7f00C2d5430c02'
);

module.exports = instance;
