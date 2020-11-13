import React, { useContext, useEffect, useState } from "react";
import "./App.css";
import { Room } from "./SVG/Room/Room";
import { SvgOverdiv } from "./SVG/SvgOverdiv";
import { useQuery, gql } from "@apollo/client";
import { PannelLeft } from "./Pannels/LeftPannel/PannelLeft";
import { Loader } from "./Loader/Loader";
import { Detector } from "./SVG/Detector/Detector";
import { BeaconeContext } from "./context/BeaconeContext";
import { Beacon, calculateDistance, checkDate } from "./App";
import { Beacon as BeaconeSVG } from "./SVG/Beacon/Beacon";

const previousAnalize = 5;

interface Props {
  beacons: Beacon[];
}

export const Selected: React.FC<Props> = (props) => {
  const { beacons } = props;

  const { selectedPosition, setSelectedPosition } = useContext(BeaconeContext)!;

  if (!selectedPosition) return null;

  const beacon = beacons.find((b) => selectedPosition.name === b.name);
  const position = beacon?.positions
    .filter((p) => checkDate(Number(p.date)))
    .find((p) => p.device === selectedPosition.device);

  if (!position || !beacons) return null;

  const size = calculateDistance(position.rssi, position.txpower);

  return (
    <BeaconeSVG
      color={"#0047b3"}
      name={selectedPosition.name}
      size={size}
      x={position.x}
      y={position.y}
    />
  );
};
