import { toast } from 'react-hot-toast';
import { gatewayConstants, namespace } from '../constants/gateway.constants';
import { peripheralConstants, namespace2 } from '../constants/peripheral.constant';
import { gatewayService } from '../services/gateway.service';





export const retrieveAllGateways = () => {
  let url = gatewayService.getAllGateway;
  return (dispatch) => {
   url()
      .then((response) => {
        if (response && response?.data) {
          const responseData = response?.data?.data
          dispatch(success(responseData));
        }
      })
      .catch((error) => {
        dispatch(failure(error));
      });
  };
  function success(response) {
    return { type: gatewayConstants[`GET_${namespace}_SUCCESS`], response };
  }
  function failure(error) {
    if (error && error.response) {
      const data = error.response.data;
      toast?.error(error.response?.data?.message);
      return {
        type: gatewayConstants[`GET_${namespace}_FAILURE`],
        error: data.message,
      };
    }
    return {
      type: gatewayConstants[`GET_${namespace}_FAILURE`],
      error: [
        {
          name: 'Network Error',
          message: 'Please check your internet connection',
        },
      ],
    };
  }
};

export const createGateway = (data) => {
  let url = gatewayService.addGateway;
  return (dispatch) => {
    url(data)
      .then((response) => {
        if (response && response.data) {
          const responseData = response.data?.data;
          dispatch(success(responseData));
        }
      })
      .catch((error) => {
        dispatch(failure(error));
      });
  };

  function success(response) {
    return { type: gatewayConstants[`GET_${namespace}_SUCCESS`], response };
  }
  function failure(error) {
    if (error && error.response) {
      const data = error.response.data;
      toast?.error(error.response?.data?.message);
      return {
        type: gatewayConstants[`GET_${namespace}_FAILURE`],
        error: data.message,
      };
    }
    return {
      type: gatewayConstants[`GET_${namespace}_FAILURE`],
      error: [
        {
          name: 'Network Error',
          message: 'Please check your internet connection',
        },
      ],
    };
  }
};


export const getGatewayById = (params) => {
  let url = gatewayService.getById;
  return (dispatch) => {
   url(params)
      .then((response) => {
        if (response && response.data) {
          const responseData = response.data?.data;
          dispatch(success(responseData));
        }
      })
      .catch((error) => {
        dispatch(failure(error));
      });
  };


  function success(response) {
    return { type: gatewayConstants[`GET_${namespace}_SUCCESS`], response };
  }
  function failure(error) {
    if (error && error.response) {
      const data = error.response.data;
      toast?.error(error.response?.data?.message);
      return {
        type: gatewayConstants[`GET_${namespace}_FAILURE`],
        error: data.message,
      };
    }
    return {
      type: gatewayConstants[`GET_${namespace}_FAILURE`],
      error: [
        {
          name: 'Network Error',
          message: 'Please check your internet connection',
        },
      ],
    };
  }
};

//Add Device to gateway
export const addDeviceToGateway = (id,data) => {
    let url = gatewayService.addDevice;
    return (dispatch) => {
      url(id,data)
        .then((response) => {
          if (response && response.data) {
            const responseData = response.data?.data;
            dispatch(success(responseData));
          }
        })
        .catch((error) => {
          dispatch(failure(error));
        });
    };
  
    function success(response) {
      return { type: peripheralConstants[`GET_${namespace2}_SUCCESS`], response };
    }
    function failure(error) {
      if (error && error.response) {
        const data = error.response.data;
        toast?.error(error.response?.data?.message);
        return {
          type: peripheralConstants[`GET_${namespace2}_FAILURE`],
          error: data.message,
        };
      }
      return {
        type: peripheralConstants[`GET_${namespace2}_FAILURE`],
        error: [
          {
            name: 'Network Error',
            message: 'Please check your internet connection',
          },
        ],
      };
    }
  };

  export const removeDeviceFromGateway = (gatewayId,deviceId) => {
    let url = gatewayService.addGateway;
    return (dispatch) => {
      url(gatewayId,deviceId)
        .then((response) => {
          if (response && response.data) {
            const responseData = response.data?.data;
            dispatch(success(responseData));
          }
        })
        .catch((error) => {
          dispatch(failure(error));
        });
    };
  
    function success(response) {
      return { type: peripheralConstants[`GET_${namespace2}_SUCCESS`], response };
    }
    function failure(error) {
      if (error && error.response) {
        const data = error.response.data;
        toast?.error(error.response?.data?.message);
        return {
          type: peripheralConstants[`GET_${namespace2}_FAILURE`],
          error: data.message,
        };
      }
      return {
        type: peripheralConstants[`GET_${namespace2}_FAILURE`],
        error: [
          {
            name: 'Network Error',
            message: 'Please check your internet connection',
          },
        ],
      };
    }
  };

export const clearErrors = () => {
  return async (dispatch) => {
    dispatch({ type: gatewayConstants[`GET_${namespace}_FAILURE`], error: null });
  };
};
