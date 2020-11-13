import React, { useContext, useEffect, useState } from "react";
import { Beacon, getColor, Error, checkDate } from "../../App";
import { BeaconeContext } from "../../context/BeaconeContext";
import { useStyles } from "./Style";

interface Props {
  beacons: Beacon[];
}

export const TrackingPannel: React.FC<Props> = ({ beacons }) => {
  const classes = useStyles();

  const [trackingBeacon, setTrackingBeacon] = useState<Beacon>();

  const filtredBeacons = beacons.filter((beacon) =>
    beacon.positions.find((p) => checkDate(Number(p.date)) && p.alarmcode > 0)
  );
  return (
    <div className={classes.body}>
      <div className={classes.title}>Tracking</div>
      {beacons.map((beacon) => {
        const isTracking = beacon.name === trackingBeacon?.name;
        return (
          <div
            className={classes.row}
            style={{
              cursor: "pointer",
              opacity: isTracking ? 1 : 0.6,
            }}
            onClick={() => {
              if (isTracking) {
                setTrackingBeacon(undefined);
              } else {
                setTrackingBeacon(beacon);
              }
            }}
          >
            <img
              style={{
                cursor: "pointer",
                float: "left",
                marginTop: -2,
                border: "3px transparent solid",
                width: 20,
                height: 20,
                transform: "scale(0.6)",
                opacity: isTracking ? 1 : 0,
              }}
              src={"/icons/zaznaczenie.png"}
            />
            <div
              style={{
                paddingLeft: 10,
                fontWeight: 500,
              }}
            >
              {beacon.name}
            </div>
          </div>
        );
      })}
    </div>
  );
};
