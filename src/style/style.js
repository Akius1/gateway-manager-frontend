import { makeStyles } from "@material-ui/core/styles";
import { createTheme } from "@mui/material/styles";

export const useStyle = makeStyles({
  root: {},
  buttons: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    boxSizing: "border-box",
    // -webkit-tap-highlight-color: transparent;
    backgroundColor: "transparent",
    outline: "0px",
    margin: "0px",
    cursor: "pointer",
    userSelect: "none",
    appearance: "none",
    textDecoration: "none",
    fontFamily: "Inter sans-serif",
    fontWeight: 500,
    fontSize: "0.875rem",
    lineHeight: 1.75,
    minWidth: "64px",
    border: "1px solid rgba(74, 82, 255, 0.5)",
    color: "rgb(74, 82, 255)",
    boxShadow: "none",
    borderRadius: "8px",
    textTransform: "none",
    transition: "color 0.01s ease 0s",
    padding: "12.5px 31px",
  },
  navStyle: {
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
  },
  textField: {
    width: "300px",
    display: "flex",
    alignItems: "center",
    height: "40px",

    "& .MuiFormLabel-root": {},

    "& .MuiInputLabel-root": {},
  },
  input: {
    width: "100%",
    padding: 0,
    margin: 0,
    height: "40px",
    backgroundColor: "white",
  },
});

export const theme = createTheme({});
