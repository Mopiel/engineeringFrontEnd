import { createUseStyles } from "react-jss";

// Create your Styles. Remember, since React-JSS uses the default preset,
// most plugins are available without further configuration needed.
export const useStyles = createUseStyles({
  rect: {
    fill: "transparent",
    strokeWidth: 3,
    stroke: "black",
  },
  line: {
    strokeWidth: 3,
    fill: "transparent",
    stroke: "black",
  },
  text: {
    textAnchor: "middle",
    fontSize: 20,
    fontWeight: 700,
    fill: "#a6a6a6",
  },
});
