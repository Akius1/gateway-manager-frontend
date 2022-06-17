import React, { useState} from "react";
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
import {
  addDeviceToGateway,
  createGateway,
  retrieveAllGateways,
} from "../../store/actions/gateway.action";

function FormDialog({
  screenFrom,
  setIsLoading,
  nameOfButton,
  state,
  dispatch,
}) {
  const initial = ["online", "offline"];
  const [status, setStatus] = React.useState(initial[0]);

  const initialForm = {
    name: "",
    ipv4Address: "",
  };

  const initialFormDevice = {
    vendor: "",
    status:status,
  };

 

  const errorMessage = {
    empty: "Name filed or Ipv4Address cannot be empty",
    invalid: "Invalid IPV4 Address",
  };

  const [gatewayState, setGateWayState] = useState(initialForm);

  const [deviceState, setdeviceState] = useState(initialFormDevice);

  const [error, setError] = useState("");

  let ipv4Validation = /\b((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(\.|$)){4}\b/;

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAdd = (e) => {
    e.preventDefault();

    if (screenFrom !== "gateway") {
      setIsLoading(true);

      if (deviceState.vendor === "" || deviceState.status === "") {
        setError(errorMessage.empty);
        setIsLoading(false);
        return setdeviceState(initialFormDevice);
      } else {
        dispatch(addDeviceToGateway(state._id, {...deviceState, "status": status}));
        dispatch(retrieveAllGateways());
        setdeviceState(initialFormDevice);
        setError("");
      }
     

      setTimeout(() => {
        setIsLoading(false);
      }, 3000);
      setOpen(false);
    } else {
      setIsLoading(true);

      if (gatewayState.name === "" || gatewayState.ipv4Address === "") {
        setError(errorMessage.empty);
        return setGateWayState(initialForm);
      } else if (!gatewayState.ipv4Address.match(ipv4Validation)) {
        setError(errorMessage.invalid);
        return setGateWayState(initialForm);
      } else {
        dispatch(createGateway(gatewayState));
       
        setGateWayState(initialForm);
        setError("");
      }
     

      setTimeout(() => {
        dispatch(retrieveAllGateways());
        setIsLoading(false);
      }, 3000);
      setOpen(false);
    }
  };

  const handleChange = (e) => {
    setError("");
    e.preventDefault();
    const { name, value } = e.target;
    if (screenFrom === "gateway") {
      setGateWayState((prev) => ({ ...prev, [name]: value }));
    } else {
      setdeviceState((prev) => ({ ...prev, [name]: value }));
    }
  };

  return (
    <>
      <Button
        className="add-door"
        variant="outlined"
        onClick={handleClickOpen}
        sx={{ textTransform: "capitalize" }}
      >
        {nameOfButton}
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{nameOfButton}</DialogTitle>

        <DialogContent>
          {screenFrom === "gateway" ? (
            <Box className="input-space">
              <TextField
                autoFocus
                margin="dense"
                id="name"
                name="name"
                label="Name"
                type="select"
                value={gatewayState.name}
                fullWidth
                variant="outlined"
                onChange={handleChange}
              />

              <TextField
                autoFocus
                margin="dense"
                id="ipv4Address"
                name="ipv4Address"
                label="IPV4 address"
                type="select"
                value={gatewayState.ipv4Address}
                fullWidth
                variant="outlined"
                onChange={handleChange}
              />

              {error && (
                <Box className="alert error mb-30" data-testid="alert">
                  {error}
                </Box>
              )}

              {gatewayState.error && (
                <Box className="alert error mb-30" data-testid="alert">
                  {gatewayState.error.message}
                </Box>
              )}
            </Box>
          ) : (
            <Box className="input-space">
              <TextField
                autoFocus
                margin="dense"
                id="vendor"
                name="vendor"
                label="Name"
                type="select"
                value={deviceState.vendor}
                fullWidth
                variant="outlined"
                onChange={handleChange}
              />
              <SelectAutoWidth
                status={status}
                setStatus={setStatus}
                initial={initial}
              />

              {error && (
                <Box className="alert error mb-30" data-testid="alert">
                  {error}
                </Box>
              )}

              {gatewayState.error && (
                <Box className="alert error mb-30" data-testid="alert">
                  {gatewayState.error.message}
                </Box>
              )}
            </Box>
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
  devices: state.peripheral_reducer,
  gateway: state.gateway_reducer,
}))(FormDialog);
