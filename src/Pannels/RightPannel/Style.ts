import { createUseStyles } from "react-jss";
import { getColor } from "../../App";

// Create your Styles. Remember, since React-JSS uses the default preset,
// most plugins are available without further configuration needed.
export const useStyles = createUseStyles({
  body: {
    margin: "30px 20px",
    userSelect: "none",
    background: "white",
    padding: 10,
    borderRadius: 2,
    border: "solid 2px #b5adac",
    boxShadow: "5px 5px 7px #b5adac",
  },
  title: { fontWeight: 700, paddingRight: 20 },
  row: {
    fontWeight: 600,
    padding: "5px 10px",
    textAlign: "left",
    cursor: "pointer",
    transition: "0.1s all",
    "&:hover": {
      transform: "scale(1.05)",
    },
  },
  dot: {
    height: 10,
    width: 10,
    borderRadius: 5,
    marginRight: 7,
    display: "inline-block",
  },
  flashingRow: {
    extend: "row",
    animationName: "$animation",
    animationDuration: "1s",
    animationIterationCount: "infinite",
  },

  "@keyframes animation": {
    "0%": {
      transform: "scale(1)",
    },
    "50%": {
      transform: "scale(1.1)",
    },
    "100%": {
      transform: "scale(1)",
    },
  },
});
