import web3 from './web3';
import CampaignFactory from './build/MailFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0xb8Fab59754f89333170e928D381F86dc2C5e4A67'
);

export default instance;
