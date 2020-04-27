const web3 = require('./test');
const CampaignFactory = require('./build/MailFactory.json');

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x27094Fd0326987C188815dA1EF5B390eBE68C5E7'
);

module.exports = instance;
