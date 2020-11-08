import classes from "*.module.css";
import React, { useState } from "react";
import { Beacon } from "../../App";
import { Arrow } from "./Arrow";
import { DisplayBeacon } from "./Beacon";
import { useStyles } from "./Style";

interface Props {
  beacons: Beacon[];
}

export const PannelLeft: React.FC<Props> = ({ beacons }) => {
  const classes = useStyles();
  return (
    <div style={{ position: "fixed", zIndex: 2 }}>
      <div className={classes.pannelLeft}>
        <div className={classes.mainTitle}>Beacons</div>
        <div className={classes.body}>
          {beacons.map((beacon) => {
            return (
              <div className={classes.beaconDiv} style={{ borderWidth: 3 }}>
                <div className={classes.row} style={{ margin: 0 }}>
                  <div className={classes.beaconName}>Beacon</div>
                  <div className={classes.beaconNameRight}>{beacon.name}</div>
                  {beacon.positions.map((p) => (
                    <DisplayBeacon
                      date={p.date}
                      device={p.device}
                      rssi={p.rssi.slice(-1)[0]}
                      txPower={p.txpower}
                      alarm={p.alarmcode}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
