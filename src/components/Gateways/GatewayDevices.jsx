import React, { useState } from "react";
import { connect } from "react-redux";
import { Box, TextField } from "@mui/material";
import "./gateway.css";
import "../Device/device.css";
import GatewayCard from "./gatewayCard";
import CustomizedProgressBars from "../CircularProgressBar";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import DevicesIcon from "@mui/icons-material/Devices";
import FormDialog from "../Modal";

const GatewayDevices = ({ gateway, isLoading, setIsLoading }) => {
  let PageSize = 5;
  const [currentPage, setCurrentPage] = useState(1);

  let groupData = gateway?.response;

  let paginationDetail = gateway?.response?.length;

  const firstPageIndex = (currentPage - 1) * PageSize;
  const lastPageIndex = firstPageIndex + PageSize;

  let displayData = groupData.slice(firstPageIndex, lastPageIndex);

  let maxPage = Math.ceil(paginationDetail / PageSize);
  // let currentPage = Math.floor(1 + paginationDetail/ 10);

  const nextPage = () => {
    setIsLoading(true);
    setCurrentPage((prev) => prev + 1);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  const prevPage = () => {
    setIsLoading(true);
    setCurrentPage((prev) => prev - 1);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };
  return (
    <>
      <div className="title-style">
        <p className="group-count">
          GATEWAYS{" "}
          <span data-testid="counter"> {gateway?.response?.length}</span>
        </p>
      </div>

      <Box className="groups">
        <div className="search-wrapper">
          <TextField
            placeholder="search groups"
            variant="outlined"
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
            displayData?.map((item) => (
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
            disabled={currentPage < 2}
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
              paginationDetail <= PageSize ||
              gateway?.response?.length <= PageSize ||
              maxPage === currentPage
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
            data-testid="button"
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
