import classes from "*.module.css";
import React, { useContext, useEffect, useState } from "react";
import { Beacon, getColor } from "../../App";
import { useStyles } from "./Style";
import { Chart } from "./Chart";
import { Device } from "../../App";
import { BeaconeContext } from "../../context/BeaconeContext";

interface Props {
  position?: Device;
  name?: string;
}

export const DetailsPannel: React.FC<Props> = ({ position, name }) => {
  const { selectedPosition, setSelectedPosition } = useContext(BeaconeContext)!;
  const classes = useStyles();
  return (
    <div
      className={classes.over}
      style={{
        width: position ? undefined : 0,
        opacity: position ? undefined : 0,
      }}
    >
      <div
        className={classes.exit}
        onClick={() => {
          setSelectedPosition(undefined);
        }}
      >
        X
      </div>
      <div className={classes.body}>
        <div className={classes.details}>
          <div style={{ fontSize: 24 }} className={classes.right}>
            {name}
          </div>
          <div
            style={{ fontSize: 24, paddingBottom: 20 }}
            className={classes.left}
          >
            Beacon
          </div>
          <div className={classes.right}>{position?.device}</div>
          <div className={classes.left}>Device</div>
          <div className={classes.right}>{position?.rssi.slice(-1)}</div>
          <div className={classes.left}>RSSI</div>
          <div className={classes.right}>{position?.txpower}</div>
          <div className={classes.left}>TX power</div>
          <div className={classes.right}>{position?.alarmcode}</div>
          <div className={classes.left}>Alarm</div>
          <div className={classes.right}>
            {`${Math.round((Date.now() - Number(position?.date)) / 1000)}s`}
          </div>
          <div className={classes.left}>Last update</div>
        </div>
        <Chart rssi={position ? position.rssi : []} />
      </div>
    </div>
  );
};
