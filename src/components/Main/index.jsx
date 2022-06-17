import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import "./main.css";
import { connect } from "react-redux";

import {
  retrieveAllGateways,
} from "../../store/actions/gateway.action";

import GatewayLayout from "../Gateways/GatewayLayout";

const Main = ({ gateway,devices, dispatch }) => {
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
      setIsLoading(true)
      dispatch(retrieveAllGateways());

      setTimeout(() => {
        setIsLoading(false)
      }, 2000);
   
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [devices.loading]);


  return (
    <Box className="main">
     

      <GatewayLayout
        gateway={gateway}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
      />
    </Box>
  );
};

export default connect((state) => ({
  gateway: state.gateway_reducer,
  devices: state.peripheral_reducer
}))(Main);
