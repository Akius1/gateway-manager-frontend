import axios from 'axios';

export const apiCall = async (
  requestType,
  url,
  customHeaders,
  data,
) => {
  let headers = {
    ...customHeaders,
    'Content-Type': 'application/json',
  };
  
  const requestOptions = {
    method: requestType,
    headers,
    data
  };
  
  return await axios({
    url,
    ...requestOptions
  })
};