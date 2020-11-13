import React from "react";
import { useStyles } from "./Style";

interface Props {
  size: number;
  name: string;
  x: number;
  y: number;
  color?: string;
}

export const Beacon: React.FC<Props> = (props) => {
  const { name, x, y, size, color = "#cc6600" } = props;
  const classes = useStyles();
  return (
    <g
      style={{ transform: `translate(${x}px,${y}px)`, transition: "0.5s all" }}
    >
      <circle
        className={classes.circle}
        fill={color}
        stroke={color}
        r={100 * size}
      />
      <circle
        className={classes.animation}
        fill={"transparent"}
        r={100 * size}
        style={{
          transition: "0.5s all",
        }}
        strokeWidth={2}
        stroke={color}
        strokeOpacity={1}
      />
      <circle
        className={classes.animation2}
        fill={"transparent"}
        r={100 * size}
        style={{
          transition: "0.5s all",
        }}
        strokeWidth={2}
        stroke={color}
        strokeOpacity={1}
      />
      <circle
        className={classes.animation3}
        fill={"transparent"}
        r={100 * size}
        style={{
          transition: "0.5s all",
        }}
        strokeWidth={2}
        stroke={color}
        strokeOpacity={1}
      />
    </g>
  );
};
