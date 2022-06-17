import {apiCall} from "../../utils/api.utils";

import {API_URLS} from "../../utils/backendRoutes";

export const gatewayService = {
    addGateway,
    getAllGateway,
    getById,
    addDevice,

}

function addGateway(data){
    return apiCall("POST", API_URLS.GATEWAY.createGateway, null, data);
}

function getAllGateway(){
    return apiCall("GET", API_URLS.GATEWAY.getAllGateway,null, null)
}

function getById(params){
    return apiCall("GET", `${API_URLS.GATEWAY.getById}${params}`,null,null)
}

function addDevice(id, data){
    return apiCall("PATCH", `${API_URLS.DEVICES.addDevice}${id}`,null, data)
}

export function removeDevice(gatewayId,deviceId){
    return apiCall("PATCH", `${API_URLS.DEVICES.removeDevice}${gatewayId}/${deviceId}`,null,null,)
}