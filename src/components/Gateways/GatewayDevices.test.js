import React from 'react';
import { render, cleanup } from '@testing-library/react';
import GatewayDevices from "./GatewayDevices"
import {Provider} from "react-redux";
import { createStore } from 'redux'
import {initialState, gatewayReducer} from "../../store/reducers/gateway";
import { PersistGate } from "redux-persist/integration/react";


const renderWithRedux = (
    component,
    { initialState, store = createStore(gatewayReducer, initialState) } = {}
  ) => {
    return{
        ...render( <Provider store={store}>
            {component}</Provider>),store
    } 
     
  }

afterEach(cleanup);

it('checks for nextButton to be disabled', () => {
    const { getByTestId } = renderWithRedux(<GatewayDevices/>)
    // expect(getByTestId("counter")).toHaveTextContent('9')
    // expect(getByTestId('button')).toBeDisabled()
  })