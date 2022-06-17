import React, { useEffect, useState } from "react";
import { Box } from "@material-ui/core";
import "./main.css";
import { connect } from "react-redux";

import {
  retrieveAllGateways,
  createGateway,
  clearErrors,
} from "../../store/actions/gateway.action";

import GatewayLayout from "../Gateways/GatewayLayout";

const Main = ({ gateway, dispatch }) => {
  const [isLoading, setIsLoading] = useState(false);
  console.log(gateway, "gateway")

  useEffect(() => {
    dispatch(retrieveAllGateways());
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return (
    <Box className="main">
      <div className="title-style">
        <p className="group-count">
          Gateways <span> {gateway?.response?.data?.length}</span>
        </p>
      </div>

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
}))(Main);
