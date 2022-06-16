import React from "react";
import Box from "@mui/material/Box";
import Sidebar from "../SideBar";
import Main from "../Main";
import { BrowserRouter as Router } from "react-router-dom";

const PageLayout = () => {
  return (
    <Router>
      <Box sx={{ width: "100%", display: "flex", flexDirection: "row" }}>
        <Sidebar />
        <Main />
      </Box>
    </Router>
  );
};

export default PageLayout;
