import { createUseStyles } from "react-jss";

// Create your Styles. Remember, since React-JSS uses the default preset,
// most plugins are available without further configuration needed.
export const useStyles = createUseStyles({
  pannelLeft: {
    display: "inline-block",
    backgroundColor: "white",
    borderRight: "solid 2px #b5adac",
    height: "100vh",
    width: 230,
    transition: "0.2s",
  },
  arrow: {
    height: 20,
    borderRadius: 4,
    borderBottomLeftRadius: 0,
    borderTopLeftRadius: 0,
    position: "absolute",
    right: -32,
    zIndex: 3,
    padding: 5,
    backgroundColor: "white",
    top: 10,
    border: "solid 2px #b5adac",
    borderLeft: "none",
  },
  body: {
    height: "calc(100% - 50px)",
    overflow: "auto",
    padding: 0,
  },
  mainTitle: {
    color: "#958c83",
    fontWeight: 600,
    paddingTop: 10,
    marginLeft: 10,
  },
  beaconDiv: {
    borderTop: "1px solid #b5adac",
    padding: 0,
  },
  row: {
    margin: "0px 0px 0px 15px",
    position: "relative",
  },
  overDiv: {
    position: "relative",
    boxShadow: "0px 1px 2px #bfbfbf",
    padding: "3px 25px",
    cursor: "pointer",
    transition: "0.1s",
    "&:hover": {
      backgroundColor: "#f2f2f2",
      boxShadow: "0px 2px 5px #bfbfbf",
      zIndex: 2,
    },
    "&:active": {
      backgroundColor: "#f9f9f9",
      boxShadow: "0px 1px 3px #bfbfbf",
      zIndex: 2,
    },
  },
  beaconName: {
    fontWeight: 600,
    fontSize: 16,
    padding: "5px 20px 5px 15px",
    position: "relative",
    display: "inline-block",
  },
  beaconNameRight: {
    extend: "beaconName",
    position: "absolute",
    right: 0,
  },
  left: {
    fontWeight: 600,
    fontSize: 12,
    position: "relative",
    display: "inline-block",
  },
  right: {
    fontWeight: 400,
    margin: 4,
    extend: "left",
    position: "absolute",
    right: 20,
  },
});
