import { createUseStyles } from "react-jss";

// Create your Styles. Remember, since React-JSS uses the default preset,
// most plugins are available without further configuration needed.
export const useStyles = createUseStyles({
  pannelLeft: {
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
    padding: 10,
  },
  mainTitle: {
    color: "#958c83",
    fontWeight: 600,
    paddingTop: 10,
    marginLeft: 10,
  },
  beaconDiv: {
    borderTop: "1px solid #b5adac",
    padding: 5,
  },
  row: {
    margin: "0px 0px 0px 15px",
    position: "relative",
  },
  beaconName: {
    fontWeight: 600,
    fontSize: 16,
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
    right: 0,
  },
});
