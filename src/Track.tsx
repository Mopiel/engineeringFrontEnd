import React, { useContext, useEffect, useState } from "react";
import { Beacon, calculateDistance } from "./App";
import { Beacon as BeaconSVG } from "./SVG/Beacon/Beacon";

interface Props {
  beacons: Beacon[];
}

export const Track: React.FC<Props> = ({ beacons }) => {
  if (!beacons[0]) return null;
  const beacon = beacons[0];
  const positions = beacon.positions.map((p) => {
    const distance = calculateDistance(p.rssi, p.txpower);
    return { x: p.x, y: p.y, distance };
  });

  const cloasestBeacon = positions.reduce((p, c) => {
    return p.distance < c.distance ? p : c;
  });
  if (cloasestBeacon && cloasestBeacon.distance < 1.5) {
    return (
      <BeaconSVG
        name={beacon.name}
        size={cloasestBeacon.distance}
        x={cloasestBeacon.x}
        y={cloasestBeacon.y}
      />
    );
  }

  return <></>;
};
