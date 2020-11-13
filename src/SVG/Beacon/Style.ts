import { createUseStyles } from "react-jss";

// Create your Styles. Remember, since React-JSS uses the default preset,
// most plugins are available without further configuration needed.
export const useStyles = createUseStyles({
  circle: {
    fillOpacity: 0.5,
    transition: "0.5s all",
    strokeWidth: 2,
    strokeOpacity: 1,
    animation: "$animationDown 1s infinite",
  },
  animation: {
    transition: "0.5s all",
    strokeWidth: 2,
    strokeOpacity: 0,
    animation: "$animation 3s infinite",
  },
  animation2: {
    extend: "animation",
    animationDelay: "1s",
  },
  animation3: {
    extend: "animation",
    animationDelay: "2s",
  },
  "@keyframes animation": {
    "0%": {
      strokeOpacity: 1,
      transform: "scale(1)",
    },
    "100%": {
      transform: "scale(1.2)",
      strokeOpacity: 0,
    },
  },
  "@keyframes animationDown": {
    "0%": {
      transform: "scale(1)",
    },
    "50%": {
      transform: "scale(1.01)",
    },
    "100%": {
      transform: "scale(1)",
    },
  },
});
