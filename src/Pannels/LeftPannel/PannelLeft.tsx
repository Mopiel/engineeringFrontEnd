import classes from "*.module.css";
import React, { useContext, useEffect, useState } from "react";
import { Beacon, getColor } from "../../App";
import { DetailsPannel } from "../DetailsPannel/DetailsPannel";
import { Arrow } from "./Arrow";
import { DisplayBeacon } from "./Beacon";
import { useStyles } from "./Style";
import { Device } from "../../App";
import { BeaconeContext } from "../../context/BeaconeContext";

interface Props {
  beacons: Beacon[];
}

export const PannelLeft: React.FC<Props> = ({ beacons }) => {
  const { selectedPosition, setSelectedPosition } = useContext(BeaconeContext)!;

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
                  <div style={{ background: "#e6e6e6" }}>
                    <div className={classes.beaconName}>Beacon</div>
                    <div className={classes.beaconNameRight}>
                      <div
                        style={{
                          height: 10,
                          width: 10,
                          borderRadius: 5,
                          marginRight: 7,
                          background: getColor(beacon.name),
                          display: "inline-block",
                        }}
                      />
                      {beacon.name}
                    </div>
                  </div>
                  {beacon.positions.map((p) => (
                    <DisplayBeacon
                      onClick={() => {
                        setSelectedPosition({
                          device: p.device,
                          name: beacon.name,
                        });
                      }}
                      selected={
                        selectedPosition?.name === beacon.name &&
                        selectedPosition?.device === p.device
                      }
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
      <DetailsPannel
        name={selectedPosition?.name}
        position={
          selectedPosition
            ? beacons
                .find((b) => selectedPosition?.name === b.name)
                ?.positions.find((p) => p.device === selectedPosition.device)
            : undefined
        }
      />
    </div>
  );
};
