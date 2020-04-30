const web3 = require('./test');
const CampaignFactory = require('./build/MailFactory.json');

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x3863fe9cFfF3Ff8fa4255892D9ff430Db9ea42B0'
);

module.exports = instance;
