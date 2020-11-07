import { createUseStyles } from "react-jss";

// Create your Styles. Remember, since React-JSS uses the default preset,
// most plugins are available without further configuration needed.
export const useStyles = createUseStyles({
  pannelLeft: {
    position: "fixed",
    backgroundColor: "white",
    borderRight: "solid 2px #b5adac",
    height: "100vh",
    width: 300,
    zIndex: 2,
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
    overflow: "hidden",
  },
});
