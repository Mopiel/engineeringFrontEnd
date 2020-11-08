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
}

export const DisplayBeacon: React.FC<Props> = (props) => {
  const { date, device, rssi, txPower, alarm } = props;
  const classes = useStyles();
  return (
    <div className={classes.beaconDiv}>
      <div className={classes.row} style={{ margin: "5px 0px", fontSize: 14 }}>
        <div className={classes.left} style={{ fontSize: 14 }}>
          Device
        </div>
        <div className={classes.right} style={{ margin: 0, fontSize: 14 }}>
          {device}
        </div>
      </div>
      <div className={classes.row}>
        <div className={classes.left}>RSSI</div>
        <div className={classes.right}>{rssi}</div>
      </div>
      <div className={classes.row}>
        <div className={classes.left}>Tx power</div>
        <div className={classes.right}>{txPower}</div>
      </div>
      <div className={classes.row}>
        <div className={classes.left}>Alarm</div>
        <div className={classes.right}>{alarm}</div>
      </div>
    </div>
  );
};
