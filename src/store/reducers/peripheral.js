import { peripheralConstants, namespace2 } from '../constants/peripheral.constant';

const initialState = {
  loading: false,
  success: false,
  response: null,
  error: null,
};

export const peripheralsReducer = (state = initialState, action) => {
  switch (action.type) {
    case peripheralConstants[`GET_${namespace2}_SUCCESS`]:
      return {
        ...state,
        loading: false,
        success: true,
        response: action.response,
        error: null
      };
    case peripheralConstants[`GET_${namespace2}_FAILURE`]:
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