import web3 from './web3';
import CampaignFactory from './build/MailFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0xd690f3E426B0D364705b32F8EC8C75B4c3245123'
);

export default instance;
