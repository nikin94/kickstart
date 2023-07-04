import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0xb990a1248FAF461Da4655bdF282AF5509E3a166e"
);

export default instance;
