import React, { useContext, useEffect, useState } from "react";
import { Beacon, getColor, Error, checkDate } from "../../App";
import { BeaconeContext } from "../../context/BeaconeContext";
import { useStyles } from "./Style";

interface Props {
  beacons: Beacon[];
  alarms: Error[];
}

export const Alarms: React.FC<Props> = ({ beacons, alarms }) => {
  const classes = useStyles();
  const { displayedBeacons, setDisplayedBeacons } = useContext(BeaconeContext)!;

  const filtredBeacons = beacons.filter((beacon) =>
    beacon.positions.find((p) => checkDate(Number(p.date)) && p.alarmcode > 0)
  );
  return (
    <div className={classes.body}>
      <div className={classes.title}>Alarms</div>
      {filtredBeacons.map((beacon) => {
        const code = beacon.positions.find(
          (p) => checkDate(Number(p.date)) && p.alarmcode > 0
        )?.alarmcode;
        const message = alarms.find((a) => a.code === code)?.message;
        return (
          <div
            className={classes.flashingRow}
            onClick={() => {
              setDisplayedBeacons([beacon]);
            }}
          >
            <div style={{ opacity: 1, display: "inline-block", color: "red" }}>
              {message}
            </div>
            <div
              style={{
                opacity: 1,
                display: "inline-block",
                float: "right",
                paddingLeft: 20,
              }}
            >
              <div
                className={classes.dot}
                style={{
                  paddingTop: 0,
                  background: getColor(beacon.name),
                }}
              />
              {beacon.name}
            </div>
          </div>
        );
      })}
    </div>
  );
};
