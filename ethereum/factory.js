import web3 from './web3';
import env from '../env';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    env.CONTRACT_ADDRESS
);

export default instance;