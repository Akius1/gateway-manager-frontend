import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import "../Device/doors.css";
import SelectAutoWidth from "../SelectField";
import environment from "../../environment";
import { connect } from "react-redux";
import { locksAction } from "../../store/actions/locks.action";
import { addLockActions } from "../../store/actions/doors.action";
import { doorAction } from "../../store/actions/doors.action";
import "./modal.css"

function FormDialog({ locks, groupLocks, setIsLoading, state, dispatch }) {
  const [open, setOpen] = useState(false);
  const [locksValue, setLocks] = React.useState("");
  let paths = groupLocks?.response?.placeId
    ? groupLocks?.response?.placeId
    : groupLocks?.response?.data[0]?.placeId;

  useEffect(() => {
    dispatch(
      locksAction(environment.domain, environment.email, environment.password)
    );
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClickOpen = () => {
    setOpen(true);
    dispatch(
      locksAction(
        environment.domain,
        environment.email,
        environment.password,
        paths || locks?.response?.data[0]?.placeId
      )
    );
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAdd = () => {
    setIsLoading(true);
    let data = {
      group_id: groupLocks?.response?.data[0]?.groupId || state?.groupId,
      lock_id: locksValue,
    };
    dispatch(
      addLockActions(
        environment.domain,
        environment.email,
        environment.password,
        data
      )
    );
    dispatch(
      doorAction(
        environment.domain,
        environment.email,
        environment.password,
        groupLocks?.response?.data[0]?.groupId || state?.groupId
      )
    );

    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    setOpen(false);
  };

  // const TextInput = `
  // <div className="MuiFormControl-root MuiFormControl-marginNormal MuiFormControl-fullWidth MuiTextField-root mui-16ezk4z">
  //   <label className="MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-outlined MuiFormLabel-root MuiFormLabel-colorPrimary mui-1f8k3ad" data-shrink="false" id="mui-131-label" for="mui-131">
  //     Select place
  //   </label>
  //   <div className="MuiOutlinedInput-root MuiInputBase-root MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-formControl MuiInputBase-adornedEnd MuiAutocomplete-inputRoot mui-1snqcsu">
  //     <input aria-invalid="false" autocomplete="off" name="selectPlace" placeholder="Select place" type="text" className="MuiOutlinedInput-input MuiInputBase-input MuiInputBase-inputAdornedEnd MuiAutocomplete-input MuiAutocomplete-inputFocused mui-1w9v9oj" aria-autocomplete="both" aria-expanded="false" autocapitalize="none" spellcheck="false" role="combobox" value="" id="mui-131">
  //     <div className="MuiAutocomplete-endAdornment mui-2iz2x6">
  //       <button className="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium MuiAutocomplete-popupIndicator mui-uge3vf" tabindex="-1" type="button" aria-label="Open" title="Open">
  //         <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZmlsbD0iI0Q4RDhEOCIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOmRhcmtlbiIgZD0iTTAgMEgyNFYyNEgweiIgb3BhY2l0eT0iLjAxIi8+CiAgICAgICAgPHBhdGggZmlsbD0iIzAwMCIgZD0iTTYuMjcyIDEwLjYzNmMtLjM1MS0uMzUxLS4zNTEtLjkyIDAtMS4yNzIuMzUyLS4zNTIuOTIyLS4zNTIgMS4yNzMgMEwxMiAxMy44MTdsNC40NTUtNC40NTNjLjM1MS0uMzUyLjkyMS0uMzUyIDEuMjczIDAgLjM1MS4zNTEuMzUxLjkyIDAgMS4yNzJsLTUuMDgyIDUuMDgxLS4wMS4wMWMtLjM1MS4zNTItLjkyLjM1Mi0xLjI3MiAwbC01LjA5Mi01LjA5eiIvPgogICAgPC9nPgo8L3N2Zz4K">
  //         <span className="MuiTouchRipple-root mui-w0pj6f"></span>
  //       </button>
  //     </div>
  //     <fieldset aria-hidden="true" className="MuiOutlinedInput-notchedOutline mui-igs3ac">
  //       <legend className="mui-1ftyaf0">
  //         <span>Select place</span>
  //       </legend>
  //     </fieldset>
  //   </div>
  // </div>`;

  return (
    <>
      <Button
        className="add-door"
        variant="outlined"
        onClick={handleClickOpen}
        sx={{ textTransform: "capitalize" }}
      >
        Add Doors
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add Doors</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Select Place"
            type="select"
            value={
              locks?.response?.data[0]?.place?.name
                ? locks?.response?.data[0]?.place?.name
                : groupLocks?.response?.data[0]?.place?.name
            }
            fullWidth
            variant="outlined"
          />

<Box className="MuiFormControl-root MuiFormControl-marginNormal MuiFormControl-fullWidth MuiTextField-root mui-16ezk4z">
    <label className="MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-outlined MuiFormLabel-root MuiFormLabel-colorPrimary mui-1f8k3ad" data-shrink="false" id="mui-131-label" for="mui-131">
      Select place
    </label>
    <Box className="MuiOutlinedInput-root MuiInputBase-root MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-formControl MuiInputBase-adornedEnd MuiAutocomplete-inputRoot mui-1snqcsu">
      <input aria-invalid="false" autocomplete="off" name="selectPlace" placeholder="Select place" type="text" className="MuiOutlinedInput-input MuiInputBase-input MuiInputBase-inputAdornedEnd MuiAutocomplete-input MuiAutocomplete-inputFocused mui-1w9v9oj" aria-autocomplete="both" aria-expanded="false" autocapitalize="none" spellcheck="false" role="combobox" value="" id="mui-131"/>
      <Box className="MuiAutocomplete-endAdornment mui-2iz2x6">
        <button className="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium MuiAutocomplete-popupIndicator mui-uge3vf" tabindex="-1" type="button" aria-label="Open" title="Open">
          <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZmlsbD0iI0Q4RDhEOCIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOmRhcmtlbiIgZD0iTTAgMEgyNFYyNEgweiIgb3BhY2l0eT0iLjAxIi8+CiAgICAgICAgPHBhdGggZmlsbD0iIzAwMCIgZD0iTTYuMjcyIDEwLjYzNmMtLjM1MS0uMzUxLS4zNTEtLjkyIDAtMS4yNzIuMzUyLS4zNTIuOTIyLS4zNTIgMS4yNzMgMEwxMiAxMy44MTdsNC40NTUtNC40NTNjLjM1MS0uMzUyLjkyMS0uMzUyIDEuMjczIDAgLjM1MS4zNTEuMzUxLjkyIDAgMS4yNzJsLTUuMDgyIDUuMDgxLS4wMS4wMWMtLjM1MS4zNTItLjkyLjM1Mi0xLjI3MiAwbC01LjA5Mi01LjA5eiIvPgogICAgPC9nPgo8L3N2Zz4K"/>
          <span className="MuiTouchRipple-root mui-w0pj6f"></span>
        </button>
      </Box>
      <fieldset aria-hidden="true" className="MuiOutlinedInput-notchedOutline mui-igs3ac">
        <legend className="mui-1ftyaf0">
          <span>Select place</span>
        </legend>
      </fieldset>
    </Box>
  </Box>

          <SelectAutoWidth
            lock={locks?.response?.data}
            locksValue={locksValue}
            setLocks={setLocks}
          />
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
