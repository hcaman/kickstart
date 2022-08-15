import web3 from './web3';
import { env } from 'process';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    CampaignFactory.abi,
    env.CONTRACT_ADDRESS
);

export default instance;