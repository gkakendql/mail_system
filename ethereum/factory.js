const web3 = require('./test');
const CampaignFactory = require('./build/MailFactory.json');

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0xcc4cF458f6217BCEa6A59FF22939fFe2A6B5dE11'
);

module.exports = instance;
