import React from "react";
import Header from "../../components/header";
import PageLayout from "../../components/PageLayout";
import Box from "@mui/material/Box";

const Dashboard = () => {
  return (
    <Box sx={{ width: "100%" }}>
      <Header />

      <PageLayout />
    </Box>
  );
};

export default Dashboard;
