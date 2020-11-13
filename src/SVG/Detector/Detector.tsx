import classes from "*.module.css";
import React from "react";
import { useStyles } from "./Style";
// import icon from "/icons/icons8-rfid-signal-24.png";

interface Props {
  x: number;
  y: number;
  name: string;
}

export const Detector: React.FC<Props> = (props) => {
  const { x, y, name } = props;
  const classes = useStyles();
  return (
    <g style={{ transform: `translate(${x}px,${y}px)` }}>
      <image
        className={classes.detector}
        height={50}
        width={50}
        href={"/icons/device.png"}
        x={-25}
        y={-25}
      />
      <text textAnchor={"middle"} y={35} fontWeight={600}>
        {name}
      </text>
    </g>
  );
};
