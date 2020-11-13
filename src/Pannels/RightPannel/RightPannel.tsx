import React, { useContext, useEffect, useState } from "react";
import { Beacon, getColor } from "../../App";
import { BeaconeContext } from "../../context/BeaconeContext";
import { useStyles } from "./Style";

interface Props {
  beacons: Beacon[];
}

export const RightPannel: React.FC<Props> = ({ beacons }) => {
  const classes = useStyles();
  const { displayedBeacons, setDisplayedBeacons } = useContext(BeaconeContext)!;
  return (
      <div className={classes.body}>
        <div className={classes.title}>Displayed Beacons</div>
        {beacons.map((beacon) => {
          return (
            <div
              className={classes.row}
              style={{
                opacity: displayedBeacons?.find((b) => b.name === beacon.name)
                  ? 1
                  : 0.5,
              }}
              onClick={() => {
                const found = displayedBeacons?.find(
                  (b) => b.name === beacon.name
                );
                if (found) {
                  const newDisp = displayedBeacons?.filter(
                    (b) => b.name !== beacon.name
                  );
                  setDisplayedBeacons(newDisp ?? []);
                } else {
                  setDisplayedBeacons([beacon, ...displayedBeacons]);
                }
              }}
            >
              <div
                className={classes.dot}
                style={{
                  background: getColor(beacon.name),
                }}
              />
              <div style={{ opacity: 1, display: "inline-block" }}>
                {beacon.name}
              </div>
            </div>
          );
        })}
      </div>
  );
};
