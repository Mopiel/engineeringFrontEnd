import { createUseStyles } from "react-jss";

// Create your Styles. Remember, since React-JSS uses the default preset,
// most plugins are available without further configuration needed.
export const useStyles = createUseStyles({
  over: {
    display: "inline-block",
    borderRight: "solid 2px #b5adac",
    background: "white",
    height: "100vh",
    width: "320px",
    verticalAlign: "top",
    transition: "0.5s",
  },
  body: {
    padding: 10,
    paddingTop: 40,
    overflow: "hidden",
  },
  details: {
    padding: "10px 20px",
  },
  right: {
    extend: "left",
    float: "right",
    fontWeight: 500,
  },
  left: {
    fontWeight: 700,
    paddingRight: 10,
  },
  exit: {
    position: "absolute",
    top: 20,
    right: 20,
    textAlign: "center",
    fontWeight: 700,
    fontSize: 15,
    padding: 3,
    transition: "0.1s",
    cursor: "pointer",
    borderRadius: 13,
    height: 20,
    width: 20,
    "&:hover": {
      background: "#d9d9d9",
    },
  },
});
