import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import "../Device/device.css";
import SelectAutoWidth from "../SelectField";
import { connect } from "react-redux";

import "./modal.css";

function FormDialog({ screenFrom, setIsLoading, dispatch }) {

  const [gatewayState, setGateWayState] = useState({
    name: "",
    ipv4Address: ""
  });


  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAdd = () => {
    setIsLoading(true);

    

    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    setOpen(false);
  };

  return (
    <>
      <Button
        className="add-door"
        variant="outlined"
        onClick={handleClickOpen}
        sx={{ textTransform: "capitalize" }}
      >
        Add Gateway
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add Gateway</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            name="name"
            label="Name"
            type="select"
            value={""}
            fullWidth
            variant="outlined"
          />
          {screenFrom === "gateway" ? (
            <TextField
              autoFocus
              margin="dense"
              id="ipv4Address"
              name="ipv4Address"
              label="IPV4 address"
              type="select"
              value={""}
              fullWidth
              variant="outlined"
            />
          ) : (
            <SelectAutoWidth />
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleAdd}>Add</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default connect((state) => ({
  user: state.user_reducer,
  groupLocks: state.door_reducer,
  locks: state.locks_reducer,
}))(FormDialog);
