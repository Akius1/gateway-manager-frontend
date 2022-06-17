import { Box, Typography } from "@mui/material";
import React from "react";

const Header = () => {
  return (
    <Box
      elavation={1}
      sx={{
        backgroundColor: "#222647",
        color: "rgb(255, 255, 255)",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px 50px",
        width: "100%",
        height: "65px",
        boxSizing: "border-box",
        flexShrink: 0,
        position: "sticky",
        zIndex: 1100,
        top: "0px",
        left: "auto",
        right: "0px",
      }}
    >
      <Typography children="GATEWAY SERVICE" />
      
    </Box>
  );
};

export default Header;
