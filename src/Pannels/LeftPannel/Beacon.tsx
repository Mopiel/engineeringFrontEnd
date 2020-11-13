import classes from "*.module.css";
import React, { useState } from "react";
import { Arrow } from "./Arrow";
import { useStyles } from "./Style";

interface Props {
  device: string;
  rssi: number;
  date: string;
  txPower: number;
  alarm: string | number;
  selected?: boolean;
  onClick: () => void;
}

export const DisplayBeacon: React.FC<Props> = (props) => {
  const { date, device, rssi, txPower, alarm, onClick, selected } = props;
  const classes = useStyles();
  return (
    <div
      style={{
        background: selected ? "#99c2ff" : undefined,
      }}
      className={classes.overDiv}
      onClick={onClick}
    >
      <div className={classes.left} style={{ fontSize: 14 }}>
        {device}
      </div>
      <div className={classes.right} style={{ margin: 0, fontSize: 14 }}>
        {rssi}
      </div>
    </div>
  );
};
