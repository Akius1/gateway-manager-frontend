import React from "react";
import { connect } from "react-redux";

import {  Routes, Route } from "react-router-dom";
import GatewayDevice from "./GatewayDoors";
import PeripheralDevice from "../Device/peripheralDevice";

const GroupLayout = ({
  gateways,
  isLoading,
  setIsLoading,
}) => {
  return (
    <Routes>
      <Route
        exact
        path="/"
        element={
          <GatewayDevice
            isLoading={isLoading}
            setIsLoading={setIsLoading}
          />
        }
      />

      <Route
        exact
        path="/device"
        element={
          <PeripheralDevice
            isLoading={isLoading}
            gateways={gateways}
            setIsLoading={setIsLoading}
          />
        }
      />
    </Routes>
  );
};

export default connect((state) => ({
  user: state.user_reducer,
  gateways: state.door_reducer,
}))(GroupLayout);
