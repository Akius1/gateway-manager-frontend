import React from "react";
import { connect } from "react-redux";
import { Box, TextField } from "@material-ui/core";
import "./gateway.css";
import "../Device/device.css";
import { useStyle } from "../../style/style";
import GatewayCard from "./gatewayCard";
import CustomizedProgressBars from "../CircularProgressBar";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import DevicesIcon from "@mui/icons-material/Devices";
import FormDialog from "../Modal";

const GatewayDevices = ({ gateway, isLoading, setIsLoading, dispatch }) => {
  const classes = useStyle();

  let groupData = gateway.response;

  let paginationDetail = gateway?.response?.length;
  let offSet = (count) => {
    if (count <= 10) {
      return 0;
    } else if (count > 10 && count <= 20) {
      return 10;
    } else if (count > 20 && count <= 30) {
      return 20;
    }
  };

  let maxPage = Math.ceil(paginationDetail/ 10);
  let currentPage = Math.floor(1 + paginationDetail/ 10);

  const nextPage = () => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  const prevPage = () => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };
  return (
    <>
      <div className="title-style">
        <p className="group-count">
          GATEWAYS <span> {gateway?.response?.length}</span>
        </p>
      </div>

      <Box className="groups">
        <div className="search-wrapper">
          <TextField
            placeholder="search groups"
            variant="outlined"
            InputProps={{
              className: classes.input,
            }}
          />
          <FormDialog
            screenFrom="gateway"
            isLoading={isLoading}
            setIsLoading={setIsLoading}
            nameOfButton="Add Gateway"
          />
        </div>

        <Box className="group-container">
          {isLoading ? (
            <CustomizedProgressBars />
          ) : !isLoading && groupData?.length > 0 ? (
            groupData?.map((item) => (
              <GatewayCard
                key={item?.id}
                item={item}
                setIsLoading={setIsLoading}
              />
            ))
          ) : (
            <Box className="empty-state">
              <DevicesIcon />
              <p className="empty-text">You haven't added any gateway</p>
            </Box>
          )}
        </Box>

        <Box className="pagination" sx={{ "& button": { m: 1 } }}>
          <Button
            variant="text"
            disabled={
              paginationDetail?.count <= 10 || paginationDetail?.offset < 10
            }
            sx={{
              textAlign: "center",
              fontFamily: "Inter, sans-serif",
              fontStretch: "normal",
              letterSpacing: "normal",
              fontSize: "12px",
              lineHeight: "18px",
              fontWeight: 400,
              textTransform: "none",
              color: "rgb(74, 82, 255)",
            }}
            onClick={prevPage}
          >
            Previous Page
          </Button>
          <Typography
            sx={{
              textAlign: "center",
              fontFamily: "Inter, sans-serif",
              fontStretch: "normal",
              letterSpacing: "normal",
              color: "#191919",
              fontSize: "12px",
              lineHeight: "18px",
              fontWeight: 400,
              textTransform: "none",
            }}
          >
            Page {currentPage} of {maxPage}
          </Typography>
          <Button
            disabled={
              paginationDetail?.count <= 10 ||
              offSet(paginationDetail?.count) === 0 ||
              gateway?.response?.length < 10
            }
            sx={{
              textAlign: "center",
              fontFamily: "Inter, sans-serif",
              fontStretch: "normal",
              letterSpacing: "normal",
              fontSize: "12px",
              lineHeight: "18px",
              fontWeight: 400,
              textTransform: "none",
              color: "rgb(74, 82, 255)",
            }}
            onClick={nextPage}
          >
            Next Page
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default connect((state) => ({
  gateway: state.gateway_reducer,
}))(GatewayDevices);
