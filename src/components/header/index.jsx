import { Box, TextField, Typography } from "@mui/material";
import React from "react";
import { useStyle } from "../../style/style";

const Header = () => {
  const classes = useStyle();
  return (
    <Box elavation={1} className={classes.navStyle} sx={{ width: "100%" }}>

      <Typography children="GATEWAY SERVICE" />
      <TextField
        className={classes.textField}
        id="outlined-search"
        placeholder="Search field"
        type="search"
        InputProps={{
          className: classes.input,
        }}
      />
    </Box>
  );
};

export default Header;
