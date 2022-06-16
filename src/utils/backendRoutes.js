import environment from '../environment';

const baseUrl = environment.baseUrl;

export const API_URLS = {
 
  GATEWAY: {
    createGateway: `${baseUrl}create-gateway`,
    getAllGateway: `${baseUrl}gateway/all`,
    getById: `${baseUrl}gateway/`
  },

  DEVICES:{
    addDevice:`${baseUrl}gateway/addDevice/`,
    addDevice:`${baseUrl}gateway/remove-device/`,
  },
};
