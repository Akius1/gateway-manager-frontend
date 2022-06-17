import { gatewayConstants, namespace } from '../constants/gateway.constants';

export const initialState = {
  loading: false,
  success: false,
  response: null,
  error: null,
};

export const gatewayReducer = (state = initialState, action) => {
  switch (action.type) {
    case gatewayConstants[`GET_${namespace}_SUCCESS`]:
      return {
        ...state,
        loading: false,
        success: true,
        response: action.response,
        error: null
      };
    case gatewayConstants[`GET_${namespace}_FAILURE`]:
      return {
        ...state,
        loading: false,
        success: false,
        error: action.error
      };
    default:
      return state;
  }
};