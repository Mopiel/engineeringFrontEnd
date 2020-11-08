import { createUseStyles } from "react-jss";

// Create your Styles. Remember, since React-JSS uses the default preset,
// most plugins are available without further configuration needed.
export const useStyles = createUseStyles({
  rect: {
    fill: "transparent",
    strokeWidth: 3,
    stroke: "#b5adac",
  },
  line: {
    strokeWidth: 3,
    fill: "transparent",
    stroke: "#b5adac",
  },
  text: {
    textAnchor: "middle",
    fontSize: 20,
    fontWeight: 600,
    fill: "#a19991",
  },
});
