import { createUseStyles } from "react-jss";

// Create your Styles. Remember, since React-JSS uses the default preset,
// most plugins are available without further configuration needed.
export const useStyles = createUseStyles({
  svg: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    backgroundColor: "white",
    cursor: "grab",
    userSelect: "none",
    "&:active": {
      cursor: "grabbing",
    },
  },
  group: {
    transition: "0.3s all",
  },
});
