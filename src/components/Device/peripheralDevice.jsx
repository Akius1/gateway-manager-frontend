import React from 'react';
import { Box} from "@mui/material";
import "../Gateways/gateway.css";
import "./device.css";
import DeviceCard from "./deviceCard";
import FormDialog from "../Modal";
import CustomizedProgressBars from "../CircularProgressBar";
import Button from "@mui/material/Button";
import { connect } from "react-redux";
import { Typography } from "@mui/material";

const PeripheralDevice = ({isLoading, groupLocks, state, setIsLoading,  dispatch}) => {

    let groupData =groupLocks?.response?.data;

  let paginationDetail = groupLocks?.response?.pagination;
  let offSet = (count) => {
    if (count <= 10) {
      return 0;
    } else if (count > 10 && count <= 20) {
      return 10;
    } else if (count > 20 && count <= 30) {
      return 20;
    }
  };

  let maxPage = Math.ceil(paginationDetail?.count / 10);
  let currentPage = Math.floor(1 + paginationDetail?.offset / 10);

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
    <Box className="doors">
      <Box className="left-side">
   
        <Box className='button-wrap'>
         
    

        <Button
          children="General"
          variant="text"
          sx={{
            textAlign: "center",
            fontFamily: "Inter, sans-serif",
            fontStretch: "normal",
            letterSpacing: "normal",
            fontSize: "16px",
            lineHeight: "19px",
            fontWeight: 400,
            color: "#191919",
            display:"flex",
            justifyContent:"left",
            padding:"10px",
            textTransform: "capitalize",
          }}
        />
      

        
      <Button
          children="Doors"
          variant="contained"
          sx={{
            textAlign: "center",
            fontFamily: "Inter, sans-serif",
            fontStretch: "normal",
            letterSpacing: "normal",
            fontSize: "16px",
            lineHeight: "19px",
            fontWeight: 400,
            color: "#fff",
            display:"flex",
            justifyContent:"left",
            padding:"10px",
            backgroundColor:"#4a52ff",
            textTransform: "capitalize"
          }}
        />
        </Box>
      </Box>
      {/* {
       */}
      <Box className="group-doors">
        <FormDialog setIsLoading={setIsLoading} state={state}/>
        {isLoading ? (
          <CustomizedProgressBars />
        ) : groupData?.length ? (
          <Box className="doors-container">
            {groupData?.map((item) => (
              <DeviceCard
                key={item?.id}
                item={item}
                setIsLoading={setIsLoading}
                state={state}
                isLoading={isLoading}
              />
            ))}{" "}
          </Box>
        ) : (
          <Box className="empty-state">
            <img
              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUwIiBoZWlnaHQ9IjE1MCIgdmlld0JveD0iMCAwIDE1MCAxNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNOTMuNzUgNDMuMTI1SDU2LjI1QzU1LjIxNDUgNDMuMTI1IDU0LjM3NSA0My45NjQ1IDU0LjM3NSA0NVYxMDguNzVDNTQuMzc1IDEwOS43ODYgNTUuMjE0NSAxMTAuNjI1IDU2LjI1IDExMC42MjVIOTMuNzVDOTQuNzg1NSAxMTAuNjI1IDk1LjYyNSAxMDkuNzg2IDk1LjYyNSAxMDguNzVWNDVDOTUuNjI1IDQzLjk2NDUgOTQuNzg1NSA0My4xMjUgOTMuNzUgNDMuMTI1Wk01Ni4yNSAzNy41QzUyLjEwNzkgMzcuNSA0OC43NSA0MC44NTc5IDQ4Ljc1IDQ1VjEwOC43NUM0OC43NSAxMTIuODkyIDUyLjEwNzkgMTE2LjI1IDU2LjI1IDExNi4yNUg5My43NUM5Ny44OTIxIDExNi4yNSAxMDEuMjUgMTEyLjg5MiAxMDEuMjUgMTA4Ljc1VjQ1QzEwMS4yNSA0MC44NTc5IDk3Ljg5MjEgMzcuNSA5My43NSAzNy41SDU2LjI1WiIgZmlsbD0iIzE5MTkxOSIvPgo8cmVjdCB4PSI4Ni4yNSIgeT0iNzEuMjUiIHdpZHRoPSI1LjYyNSIgaGVpZ2h0PSIxMS4yNSIgcng9IjAuNzUiIGZpbGw9IiMxOTE5MTkiLz4KPC9zdmc+Cg=="
              alt="Empty"
            />
            <p className="empty-text">You haven't added any door</p>
          </Box>
        )}
        {groupData?.length ? (
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
          <Typography sx={{
                textAlign: "center",
                fontFamily: "Inter, sans-serif",
                fontStretch: "normal",
                letterSpacing: "normal",
               color:"#191919",
               fontSize: "12px",
               lineHeight: "18px",
               fontWeight: 400,
               textTransform: "none",
          }}>
            Page {currentPage} of {maxPage}
          </Typography>
          <Button
            disabled={
              paginationDetail?.count <= 10 ||
              offSet(paginationDetail?.count) === 0 ||
              groupLocks?.response?.data?.length < 10
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
        ) : (
          ""
        )}
      </Box>
      {/* } */}
    </Box>
  )
}

export default connect((state) => ({
    groups: state.groups_reducer,
  }))(PeripheralDevice);