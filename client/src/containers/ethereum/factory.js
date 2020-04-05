import web3 from './web3';
import CampaignFactory from './build/MailFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0xdCfa13AAF30e75066bB293eC4a0380DE06789359'
);

export default instance;
